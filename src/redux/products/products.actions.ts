import { productsSlice } from '@redux/products/products.slice';
import { PayloadAction } from '@reduxjs/toolkit';
import { ProductsPaginationRequestInput } from '@interfaces/services/requests/products.requestInputs';

const productsSliceActions = productsSlice.actions;

const PRODUCTS_FETCH_TYPE = 'productsRequest';

const fetchProducts = (
  payload: ProductsPaginationRequestInput
): PayloadAction<ProductsPaginationRequestInput> => ({
  type: PRODUCTS_FETCH_TYPE,
  payload,
});

export { productsSliceActions, PRODUCTS_FETCH_TYPE, fetchProducts };
