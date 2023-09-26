interface ProductDetail {
  title: string;
  value: string | string[] | number | number[];
}

export interface ProductDetails {
  [property: string]: ProductDetail;
}
