import { RequestState } from '@interfaces/redux/states/requestState';
import { NormalizedState } from '@interfaces/redux/states/normalizedState';
import { ICategory } from '@interfaces/entities/ICategory';

export interface CategoriesState extends RequestState, NormalizedState<ICategory> {}
