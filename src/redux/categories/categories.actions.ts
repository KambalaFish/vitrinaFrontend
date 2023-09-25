import { categoriesSlice } from '@redux/categories/categories.slice';
import type { Action } from '@redux-saga/types';

const categorySliceActions = categoriesSlice.actions;

const CATEGORIES_FETCH_TYPE = 'categoriesRequest';
const fetchCategories = (): Action => ({ type: CATEGORIES_FETCH_TYPE });

export { categorySliceActions, CATEGORIES_FETCH_TYPE, fetchCategories };
