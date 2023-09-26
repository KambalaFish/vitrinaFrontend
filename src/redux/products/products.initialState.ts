import { ProductsState } from '@interfaces/redux/states/products.state';
import { normalizedInitialState } from '@redux/utils/normalized.initialState';
import { requestInitialState } from '@redux/utils/request.initialState';

export const productsInitialState: ProductsState = {
  ...normalizedInitialState,
  ...requestInitialState,
  total: 0,
  page: 1,
  perPage: 8,
};
