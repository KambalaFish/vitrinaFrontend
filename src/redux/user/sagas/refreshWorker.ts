import {
  call,
  put,
  race,
  SagaReturnType,
  take,
  takeEvery,
  takeLeading,
} from '@redux-saga/core/effects';
import type { Action } from '@redux-saga/types';
import { PayloadAction } from '@reduxjs/toolkit';
import { RejectionPayload } from '@interfaces/redux/payloads/rejection.payload';
import { INVALID_ACCESS_TOKEN_MESSAGE } from '@utils/auth.const';
import {
  SIGNIN_REQUEST_TYPE,
  SIGNOUT_REQUEST_TYPE,
  TOKEN_REFRESH_REQUEST_TYPE,
  tokenRefreshRequest,
  tokenRefreshFulfilled,
  userSliceActions,
} from '@redux/user/user.actions';
import { authService } from '@services/auth.service';
import { IUser } from '@interfaces/entities/user/IUser';
import { userLocalStorage } from '@localStorage/user.localStorage';
import { requestErrorHandlerWorker } from '@redux/redux-saga/utils/requestErrorHandler.saga';

const actionTypesToIgnore = [
  SIGNIN_REQUEST_TYPE,
  SIGNOUT_REQUEST_TYPE,
  TOKEN_REFRESH_REQUEST_TYPE,
];

/* action type must end with Request  */
const isRequestAction = (action: Action) => {
  return (
    action.type.includes('Request') &&
    actionTypesToIgnore.every((actionTypeToIgnore) => actionTypeToIgnore !== action.type)
  );
};

const identifyRequestAction = (action: Action) => {
  return action.type.split('Request')[0];
};

const getFulfilledActionType = (action: Action) => {
  return `${identifyRequestAction(action)}Fulfilled`;
};

const getRejectedActionType = (action: Action) => {
  return `${identifyRequestAction(action)}Rejected`;
};

function* watchRequestsForTokenExpiration(watchedAction: Action) {
  const {
    rejected,
  }: {
    rejected: PayloadAction<RejectionPayload>;
  } = yield race({
    fulfilled: take(getFulfilledActionType(watchedAction)),
    rejected: take(getRejectedActionType(watchedAction)),
  });
  if (rejected?.payload.message === INVALID_ACCESS_TOKEN_MESSAGE) {
    yield put(tokenRefreshRequest());
    const refreshSuccess: Action = yield take(tokenRefreshFulfilled().type);
    if (refreshSuccess) {
      yield put(watchedAction);
    }
  }
}

function* refreshToken() {
  try {
    const response: SagaReturnType<typeof authService.refresh> = yield call([
      authService,
      authService.refresh,
    ]);
    const user = response.data as IUser;
    yield call([userLocalStorage, userLocalStorage.persist], user);
    yield put(userSliceActions.signInFulfilled(user));
    yield put(tokenRefreshFulfilled());
  } catch (error) {
    yield call(requestErrorHandlerWorker, error, userSliceActions.tokenRefreshRejected);
  }
}

export function* refreshWorker() {
  yield takeEvery(isRequestAction, watchRequestsForTokenExpiration);
  yield takeLeading(TOKEN_REFRESH_REQUEST_TYPE, refreshToken);
}
