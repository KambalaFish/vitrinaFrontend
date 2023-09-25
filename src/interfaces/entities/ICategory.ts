import { IEntityId } from '@interfaces/entities/IEntityId';

interface CategoryChildren extends IEntityId {
  title: string;
  image?: string;
}

enum FilterType {
  checkbox = 'checkbox',
  toggle = 'toggle',
}

interface IFilterOption extends IEntityId {
  value: string | number;
}

interface ICategoryFilter extends IEntityId {
  filterType: FilterType;
  title: string;
  targetProperty: string;
  options: IFilterOption[];
}

export interface ICategory extends IEntityId {
  title: string;
  image?: string;
  children: CategoryChildren[];
  filters: ICategoryFilter[];
  isTop: boolean;
  pathname: string;
}
