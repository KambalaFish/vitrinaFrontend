import { requestInitialState } from '@redux/utils/request.initialState';
import { normalizedInitialState } from '@redux/utils/normalized.initialState';
import { CategoriesState } from '@interfaces/redux/states/categories.state';

export const categoriesInitialState: CategoriesState = {
  ...normalizedInitialState,
  ...requestInitialState,
};
