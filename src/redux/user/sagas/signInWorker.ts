import { AuthCredentials } from '@interfaces/other/AuthCredentials';
import { call, put, SagaReturnType } from '@redux-saga/core/effects';
import { authService } from '@services/auth.service';
import { IUser } from '@interfaces/entities/user/IUser';
import { userLocalStorage } from '@localStorage/user.localStorage';
import { userSliceActions } from '@redux/user/user.actions';
import { requestErrorHandlerWorker } from '@redux/redux-saga/utils/requestErrorHandler.saga';
import { SagaIterator } from 'redux-saga';

export function* signInWorker(authCreds: AuthCredentials): SagaIterator {
  try {
    yield put(userSliceActions.signInPending());
    const response: SagaReturnType<typeof authService.signIn> = yield call(
      [authService, authService.signIn],
      authCreds
    );
    const user = response.data as IUser;
    yield call([userLocalStorage, userLocalStorage.persist], user);
    yield put(userSliceActions.signInFulfilled(user));
  } catch (error) {
    yield call(requestErrorHandlerWorker, error, userSliceActions.signInRejected);
  }
}
