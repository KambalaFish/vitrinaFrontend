import { all, call, spawn } from '@redux-saga/core/effects';
import { authenticationFlowSaga } from '@redux/user/sagas/authentication.saga';

export function* rootSaga() {
  const sagas = [authenticationFlowSaga];

  const spawnedSagas = sagas.map((saga) =>
    spawn(function* () {
      try {
        yield call(saga);
      } catch (error) {
        console.error(`error occurred on saga ${saga.name}: `, error);
      }
    })
  );

  yield all(spawnedSagas);
}
