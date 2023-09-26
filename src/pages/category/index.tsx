import { useParams } from 'react-router';
import { useAppSelector } from '@hooks/useAppSelector';
import {
  selectCategoryIdByPathname,
  selectCategoryTitleByPathname,
} from '@redux/categories/categories.selectors';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchProducts, productsSliceActions } from '@redux/products/products.actions';
import {
  selectProductsPerPage,
  selectProductsIds,
  selectProductsRequestStatus,
  selectTotalProducts,
  selectProductsPage,
} from '@redux/products/products.selectors';
import {
  isFailedRequest,
  isLoading,
  isSuccessfulRequest,
} from '@interfaces/redux/other/requestStatus';
import cn from 'classnames';
import {
  category,
  categoryHeader as category__header,
  categorySubcategories as category__subcategories,
  categoryInfo as category__info,
  categoryTitle as category__title,
  categorySort as category__sort,
  subcategories,
  categoryBody as category__body,
  categoryFilter as category__filter,
  categoryContent as category__content,
  products,
  productsContainer as products__container,
} from '@styles/pages/category.module.scss';
import { Pagination } from '@components/uiKit/pagination/Pagination';
import { ProductCard } from '@pages/category/ProductCard';
import { CategoryProps } from '@interfaces/props/component/CategoryProps';

const Category = ({ currentParam }: CategoryProps) => {
  const params = useParams();
  const pathname = params[currentParam];

  const categoryId = useAppSelector((state) =>
    selectCategoryIdByPathname(state, pathname!)
  );
  const titleOfCategory = useAppSelector((state) =>
    selectCategoryTitleByPathname(state, pathname!)
  );

  const totalProducts = useAppSelector(selectTotalProducts);
  const productsPerPage = useAppSelector(selectProductsPerPage);
  const currentProductsPage = useAppSelector(selectProductsPage);

  const pagesTotal = Math.ceil(totalProducts / productsPerPage);

  const productsRequestStatus = useAppSelector(selectProductsRequestStatus);

  const productsIds = useAppSelector(selectProductsIds);

  const dispatch = useDispatch();

  useEffect(() => {
    if (categoryId) {
      dispatch(
        fetchProducts({
          page: 1,
          perPage: productsPerPage,
          query: {
            categories: categoryId,
          },
        })
      );
    }
  }, [categoryId, dispatch, productsPerPage]);

  if (!categoryId) {
    /* todo: render some error */
    return <></>;
  }

  const onPageClick = (page: number) => {
    dispatch(productsSliceActions.setPage(page));
    dispatch(
      fetchProducts({
        page,
        perPage: productsPerPage,
        query: {
          categories: categoryId,
        },
      })
    );
  };

  let content;

  if (isLoading(productsRequestStatus)) {
    content = 'loading...';
  }
  if (isSuccessfulRequest(productsRequestStatus)) {
    content = productsIds.map((productId, index) => (
      <ProductCard
        key={productId}
        id={productId}
        isLazyLoadedImage={index >= productsPerPage / 2}
      />
    ));
  }
  if (isFailedRequest(productsRequestStatus)) {
    content = 'some error occurred..';
  }

  return (
    <div className={category}>
      <header className={category__header}>
        <nav className={cn(category__subcategories, subcategories)}></nav>
        <section className={category__info}>
          <h1 className={category__title}>{titleOfCategory}</h1>
          <div className={category__sort}></div>
        </section>
      </header>
      <div className={category__body}>
        <aside className={category__filter}></aside>
        <div className={cn(category__content, products)}>
          <div className={products__container}>{content}</div>
          <Pagination
            // customClassName={productsPagination}
            pagesTotal={pagesTotal}
            currentPage={currentProductsPage}
            onPageChange={onPageClick}
            siblingsCount={1}
          />
        </div>
      </div>
    </div>
  );
};

export { Category };
