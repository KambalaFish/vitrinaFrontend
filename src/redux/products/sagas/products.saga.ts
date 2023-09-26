import { takeLatestAbortable } from '@redux/redux-saga/customEffects/takeLatestAbortable';
import {
  PRODUCTS_FETCH_TYPE,
  productsSliceActions,
} from '@redux/products/products.actions';
import { requestErrorHandlerWorker } from '@redux/redux-saga/utils/requestErrorHandler.saga';
import { call, put, SagaReturnType } from '@redux-saga/core/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { ProductsPaginationRequestInput } from '@interfaces/services/requests/products.requestInputs';
import { productService } from '@services/product.service';
import { PaginationResponse } from '@interfaces/services/responses/PaginationResponse';
import { IProduct } from '@interfaces/entities/products/IProduct';

function* fetchProductsRequest(
  action: PayloadAction<ProductsPaginationRequestInput>,
  abortSignal: AbortSignal
) {
  try {
    yield put(productsSliceActions.productsPending());
    const { page, perPage, query } = action.payload;
    const response: SagaReturnType<typeof productService.getProductsPage> = yield call(
      [productService, productService.getProductsPage],
      {
        page,
        perPage,
        query,
      },
      abortSignal
    );
    const paginationData = response.data as PaginationResponse<IProduct>;
    yield put(productsSliceActions.productsFulfilled(paginationData));
  } catch (error) {
    yield call(requestErrorHandlerWorker, error, productsSliceActions.productsRejected);
  }
}

function* watchLastFetchProducts() {
  yield takeLatestAbortable(PRODUCTS_FETCH_TYPE, fetchProductsRequest);
}

export { watchLastFetchProducts };
