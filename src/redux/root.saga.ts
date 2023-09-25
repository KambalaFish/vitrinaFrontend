import { all, call, spawn } from '@redux-saga/core/effects';
import { authenticationFlowSaga } from '@redux/user/sagas/authentication.saga';
import { watchLeadingCategoriesRequest } from '@redux/categories/sagas/сategory.saga';
import { watchLastFetchProducts } from '@redux/products/sagas/products.saga';

export function* rootSaga() {
  const sagas = [
    authenticationFlowSaga,
    watchLeadingCategoriesRequest,
    watchLastFetchProducts,
  ];

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
