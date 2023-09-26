import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { productsInitialState } from '@redux/products/products.initialState';
import {
  requestFulfilled,
  requestPending,
  requestRejected,
} from '@redux/utils/request.handlers';
import { ProductsState } from '@interfaces/redux/states/products.state';
import { PaginationResponse } from '@interfaces/services/responses/PaginationResponse';
import { IProduct } from '@interfaces/entities/products/IProduct';
import { createNormalizedObject, mapIds } from '@redux/utils/normaliztionUtils';

const productsSlice = createSlice({
  name: 'products',
  initialState: productsInitialState,
  reducers: {
    productsPending: requestPending,
    productsFulfilled: requestFulfilled(
      (
        state: ProductsState,
        { payload }: PayloadAction<PaginationResponse<IProduct>>
      ) => {
        state.ids = mapIds(payload.data);
        state.byId = createNormalizedObject(payload.data);
        state.total = payload.total;
        state.page = payload.page;
        state.perPage = payload.perPage;
      }
    ),
    productsRejected: requestRejected(),
    setPage: (state: ProductsState, { payload }: PayloadAction<number>) => {
      state.page = payload;
    },
  },
});

export { productsSlice };
