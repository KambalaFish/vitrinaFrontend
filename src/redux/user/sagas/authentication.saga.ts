import { take, call, fork, cancel, join, select } from '@redux-saga/core/effects';
import { Task } from 'redux-saga';
import { PayloadAction } from '@reduxjs/toolkit';
import { userLocalStorage } from '@localStorage/user.localStorage';
import { AuthCredentials } from '@interfaces/other/AuthCredentials';
import { signInWorker } from '@redux/user/sagas/signInWorker';
import { refreshWorker } from '@redux/user/sagas/refreshWorker';
import {
  SIGNIN_REQUEST_TYPE,
  SIGNOUT_REQUEST_TYPE,
  userSliceActions,
} from '@redux/user/user.actions';
import { resetToInitialStateWorker } from '@redux/user/sagas/resetToInitialStateWorker.saga';
import { signOutWorker } from '@redux/user/sagas/signOutWorker';
import { selectIsUserAuthenticated } from '@redux/user/user.selectors';

export function* authenticationFlowSaga() {
  while (true) {
    const isUserAuthenticated: boolean = yield select(selectIsUserAuthenticated);
    if (!isUserAuthenticated) {
      const { payload }: PayloadAction<AuthCredentials> = yield take(SIGNIN_REQUEST_TYPE);
      yield fork(signInWorker, payload);
    }

    const refreshTask: Task = yield fork(refreshWorker);

    const action: PayloadAction = yield take([
      SIGNOUT_REQUEST_TYPE,
      userSliceActions.tokenRefreshRejected.type,
      userSliceActions.signInRejected.type,
    ]);

    yield cancel(refreshTask);

    let signOutTask: Task | null = null;
    if (action.type === SIGNOUT_REQUEST_TYPE) {
      signOutTask = yield fork(signOutWorker);
    }

    let removeUserFromLocalStorageTask: Task | null = null;
    if (
      action.type === SIGNOUT_REQUEST_TYPE ||
      action.type === userSliceActions.tokenRefreshRejected.type
    ) {
      removeUserFromLocalStorageTask = yield fork([
        userLocalStorage,
        userLocalStorage.remove,
      ]);
      yield call(resetToInitialStateWorker);
    }

    if (signOutTask) {
      yield join(signOutTask);
    }

    if (removeUserFromLocalStorageTask) {
      yield join(removeUserFromLocalStorageTask);
    }
  }
}
