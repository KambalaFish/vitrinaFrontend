/* todo: to add sort and filter later */
import { FilterQuery } from '@interfaces/services/requests/FilterQuery';
import { IProduct } from '@interfaces/entities/products/IProduct';

interface ProductsPaginationRequestInput {
  page: number;
  perPage: number;
  query: FilterQuery<IProduct>;
}

interface ProductsRequestInput {
  query: FilterQuery<IProduct>;
  /* todo: to add sorting */
}

export type { ProductsPaginationRequestInput, ProductsRequestInput };
