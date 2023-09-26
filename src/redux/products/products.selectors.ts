import { AppState } from '@redux/store';
import { Id } from '@interfaces/other/Id';

const selectProductsRequestStatus = (state: AppState) => state.products.requestStatus;
const selectProductsIds = (state: AppState) => state.products.ids;

const selectTotalProducts = (state: AppState) => state.products.total;
const selectProductsPerPage = (state: AppState) => state.products.perPage;
const selectProductsPage = (state: AppState) => state.products.page;

const selectProductById = (state: AppState, id: Id) => state.products.byId[id];

const selectProductNameByPathname = (state: AppState, pathname: string) =>
  Object.values(state.products.byId).find((product) =>
    product.pathname.includes(pathname)
  )?.name;

export {
  selectProductsRequestStatus,
  selectProductsIds,
  selectTotalProducts,
  selectProductsPerPage,
  selectProductsPage,
  selectProductById,
  selectProductNameByPathname,
};
