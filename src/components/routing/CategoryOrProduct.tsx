import { useParams } from 'react-router';
import { useAppSelector } from '@hooks/useAppSelector';
import { selectCategoryIdByPathname } from '@redux/categories/categories.selectors';
import { Category } from '@pages/category';
import { Product } from '@pages/Product';
import { IsCategoryOrProductProps } from '@interfaces/props/component/CategoryOrProductProps';

const CategoryOrProduct = ({ paramsLevel }: IsCategoryOrProductProps) => {
  const params = useParams();
  const pathname = params[paramsLevel]!;
  const categoryid = useAppSelector((state) =>
    selectCategoryIdByPathname(state, pathname)
  );
  /* if in there is no category with such pathname,
     then it means it is pathname of product */

  return categoryid ? (
    <Category currentParam={paramsLevel} />
  ) : (
    <Product currentParam={paramsLevel} />
  );
};

export { CategoryOrProduct };
