import { call, put, SagaReturnType, takeLeading } from '@redux-saga/core/effects';
import {
  CATEGORIES_FETCH_TYPE,
  categorySliceActions,
} from '@redux/categories/categories.actions';
import { categoryService } from '@services/category.service';
import { ICategory } from '@interfaces/entities/ICategory';
import { requestErrorHandlerWorker } from '@redux/redux-saga/utils/requestErrorHandler.saga';

let resolve: null | ((value: unknown) => void) = null;
let reject: null | ((value: unknown) => void) = null;

/* this promise is used in router.tsx file */
export const fetchCategoriesPromise = new Promise((res, rej) => {
  resolve = res;
  reject = rej;
});

function* fetchCategoriesRequest() {
  try {
    yield put(categorySliceActions.categoriesPending());
    const response: SagaReturnType<typeof categoryService.getCategories> = yield call([
      categoryService,
      categoryService.getCategories,
    ]);
    const categories = response.data as ICategory[];
    yield put(categorySliceActions.categoriesFulfilled(categories));
    if (resolve) {
      resolve(categories);
    }
  } catch (error) {
    yield call(requestErrorHandlerWorker, error, categorySliceActions.categoriesRejected);
    if (reject) {
      reject(error);
    }
  }
}

export function* watchLeadingCategoriesRequest() {
  yield takeLeading(CATEGORIES_FETCH_TYPE, fetchCategoriesRequest);
}
