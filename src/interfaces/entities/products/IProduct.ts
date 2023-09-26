import { IEntityId } from '@interfaces/entities/IEntityId';
import { ProductDetails } from '@interfaces/entities/products/ProductDetails';
import { IProductVariation } from '@interfaces/entities/products/IProductVariation';
import { Id } from '@interfaces/other/Id';

export interface IProduct extends IEntityId {
  price?: number;
  images?: string[];
  name: string;
  description?: string;
  details: ProductDetails;
  categories: Id[];
  variations: IProductVariation[];
  pathname: string;
}
