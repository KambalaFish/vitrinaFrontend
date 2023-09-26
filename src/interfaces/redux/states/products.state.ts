import { RequestState } from '@interfaces/redux/states/requestState';
import { NormalizedState } from '@interfaces/redux/states/normalizedState';
import { IProduct } from '@interfaces/entities/products/IProduct';

export interface ProductsState extends RequestState, NormalizedState<IProduct> {
  total: number;
  page: number;
  perPage: number;
}
