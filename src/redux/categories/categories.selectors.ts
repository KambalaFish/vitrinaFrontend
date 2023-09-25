import { AppState } from '@redux/store';
import { createSelector } from '@reduxjs/toolkit';

const selectTopCategories = createSelector(
  [(state: AppState) => state.categories.byId],
  (categories) => Object.values(categories).filter((category) => category.isTop)
);

const selectCategoryIdByPathname = (state: AppState, pathname: string) =>
  Object.values(state.categories.byId).find((c) => c.pathname === pathname)?.id;

const selectCategoryTitleByPathname = (state: AppState, pathname: string) =>
  Object.values(state.categories.byId).find((c) => c.pathname === pathname)?.title;

const selectCategoryRequestStatus = (state: AppState) => state.categories.requestStatus;

export {
  selectTopCategories,
  selectCategoryRequestStatus,
  selectCategoryIdByPathname,
  selectCategoryTitleByPathname,
};
