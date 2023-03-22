import { take, call, fork, cancel, put } from '@redux-saga/core/effects';
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
import { authService } from '@services/auth.service';

export function* authenticationFlow() {
  while (true) {
    const { payload }: PayloadAction<AuthCredentials> = yield take(SIGNIN_REQUEST_TYPE);
    const signInTask: Task = yield fork(signInWorker, payload);
    const refreshTask: Task = yield fork(refreshWorker);
    const action: PayloadAction = yield take([
      SIGNOUT_REQUEST_TYPE,
      userSliceActions.tokenRefreshRejected.type,
      userSliceActions.signInRejected.type,
    ]);
    yield cancel(signInTask);
    yield cancel(refreshTask);
    if (action.type === SIGNOUT_REQUEST_TYPE) {
      yield call([authService, authService.signOut]);
      yield put(userSliceActions.signOut());
    }
    /*todo: обновить*/
    yield call([userLocalStorage, userLocalStorage.remove]);
  }
}
