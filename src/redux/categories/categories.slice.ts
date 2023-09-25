import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { categoriesInitialState } from '@redux/categories/categories.initialState';
import {
  requestFulfilled,
  requestPending,
  requestRejected,
} from '@redux/utils/request.handlers';
import { CategoriesState } from '@interfaces/redux/states/categories.state';
import { ICategory } from '@interfaces/entities/ICategory';
import { createNormalizedObject, mapIds } from '@redux/utils/normaliztionUtils';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: categoriesInitialState,
  reducers: {
    categoriesPending: requestPending,
    categoriesFulfilled: requestFulfilled(
      (state: CategoriesState, { payload }: PayloadAction<ICategory[]>) => {
        state.ids.push(...mapIds(payload));
        const categoriesById = createNormalizedObject(payload);
        Object.assign(state.byId, categoriesById);
      }
    ),
    categoriesRejected: requestRejected(),
  },
});

export { categoriesSlice };
