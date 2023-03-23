import { call, put } from '@redux-saga/core/effects';
import { authService } from '@services/auth.service';
import { userSliceActions } from '@redux/user/user.actions';

export function* signOutWorker() {
  try {
    yield call([authService, authService.signOut]);
  } catch (error) {
    /* in case when server-side signOut throws an error,
    we just signOut in our frontend app */
  }
  yield put(userSliceActions.signOut());
}
