interface PaginationResponse<Data> {
  data: Data[];
  total: number;
  page: number;
  perPage: number;
}
export type { PaginationResponse };
