import { ProductDetails } from '@interfaces/entities/products/ProductDetails';

export interface IProductVariation {
  name: string;
  price: number;
  images?: string[];

  details: ProductDetails;
}
