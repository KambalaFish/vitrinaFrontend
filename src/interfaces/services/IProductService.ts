import { ServiceResult } from '@interfaces/services/ServiceResult';
import { PaginationResponse } from '@interfaces/services/responses/PaginationResponse';
import { IProduct } from '@interfaces/entities/products/IProduct';
import {
  ProductsPaginationRequestInput,
  ProductsRequestInput,
} from '@interfaces/services/requests/products.requestInputs';

export interface IProductService {
  /* todo: to add query and sort parameters in future */
  getProductsPage(
    input: ProductsPaginationRequestInput,
    signal: AbortSignal
  ): ServiceResult<PaginationResponse<IProduct>>;

  getProducts(input: ProductsRequestInput): ServiceResult<IProduct[]>;
}
