import { ServiceResult } from '@interfaces/services/ServiceResult';
import { ICategory } from '@interfaces/entities/ICategory';

export interface ICategoryService {
  getCategories(): ServiceResult<ICategory[]>;
}
