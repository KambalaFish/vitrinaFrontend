import { AxiosBaseService } from '@services/AxiosBaseService';
import { IProductService } from '@interfaces/services/IProductService';
import { AxiosInstance } from 'axios';
import { ServiceResult } from '@interfaces/services/ServiceResult';
import { PaginationResponse } from '@interfaces/services/responses/PaginationResponse';
import { IProduct } from '@interfaces/entities/products/IProduct';
import { SuccessfulResponse } from '@interfaces/services/responses/SuccessfulResponse';
import { apiInstance } from '@services/api/apiInstance';
import {
  ProductsPaginationRequestInput,
  ProductsRequestInput,
} from '@interfaces/services/requests/products.requestInputs';
class ProductService extends AxiosBaseService implements IProductService {
  protected readonly resource: string;
  constructor(apiInstance: AxiosInstance, resource: string) {
    super(apiInstance);
    this.resource = resource;
  }

  /* todo: to implement sort in future */
  public getProductsPage(
    { page, perPage, query }: ProductsPaginationRequestInput,
    signal: AbortSignal
  ): ServiceResult<PaginationResponse<IProduct>> {
    return this.apiInstance
      .get<SuccessfulResponse<PaginationResponse<IProduct>>>(`${this.resource}`, {
        params: {
          page,
          perPage,
          query,
        },
        signal,
      })
      .then(this.successHandler)
      .catch(this.errorHandler);
  }

  getProducts({ query }: ProductsRequestInput): ServiceResult<IProduct[]> {
    return this.apiInstance
      .get<SuccessfulResponse<IProduct[]>>(`${this.resource}/not-paginated`, {
        params: {
          ...query,
        },
      })
      .then(this.successHandler)
      .catch(this.errorHandler);
  }
}

export const productService = new ProductService(apiInstance, 'products');
