import { AxiosBaseService } from '@services/AxiosBaseService';
import { AxiosInstance } from 'axios';
import { ICategoryService } from '@interfaces/services/ICategoryService';
import { ServiceResult } from '@interfaces/services/ServiceResult';
import { ICategory } from '@interfaces/entities/ICategory';
import { apiInstance } from '@services/api/apiInstance';
import { SuccessfulResponse } from '@interfaces/services/responses/SuccessfulResponse';

class CategoryService extends AxiosBaseService implements ICategoryService {
  protected readonly resource: string;
  constructor(apiInstance: AxiosInstance, resource: string) {
    super(apiInstance);
    this.resource = resource;
  }

  public getCategories(): ServiceResult<ICategory[]> {
    return this.apiInstance
      .get<SuccessfulResponse<ICategory[]>>(`${this.resource}`)
      .then(this.successHandler)
      .catch(this.errorHandler);
  }
}

export const categoryService = new CategoryService(apiInstance, 'categories');
