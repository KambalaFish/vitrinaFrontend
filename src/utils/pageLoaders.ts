import { fetchCategoriesPromise } from '@redux/categories/sagas/сategory.saga';
import { selectCategoryTitleByPathname } from '@redux/categories/categories.selectors';
import { store } from '@redux/store';
import { selectProductNameByPathname } from '@redux/products/products.selectors';
import { productService } from '@services/product.service';
import { ApiResponse } from '@interfaces/services/ApiResponse';
import { IProduct } from '@interfaces/entities/products/IProduct';

const categoryBreadCrumbGetter =
  (paramName: string) =>
  async ({ params }: any) => {
    try {
      const pathname = params[paramName]!;
      await fetchCategoriesPromise;
      const categoryTitle = selectCategoryTitleByPathname(store.getState(), pathname);
      return categoryTitle || null;
    } catch (error) {
      return null;
    }
  };

const productBreadCrumbGetter =
  (paramName: string) =>
  async ({ params }: any) => {
    try {
      const pathname = params[paramName];
      const productName = selectProductNameByPathname(store.getState(), pathname);
      if (productName) {
        return productName;
      }
      const requestResult = (await productService.getProducts({
        query: {
          pathname: {
            $regex: pathname,
            $options: 'i',
          },
        },
      })) as ApiResponse<IProduct[]>;
      return requestResult.data[0].name || null;
    } catch (error) {
      return null;
    }
  };

const catalogBreadCrumbGetter =
  (paramName: 'catalogLevel2' | 'catalogLevel3') =>
  async ({ params }: any) => {
    const getCategoryBreadCrumb = categoryBreadCrumbGetter(paramName);
    let result = await getCategoryBreadCrumb({ params });
    console.log('category result: ', result);
    if (result) {
      return result;
    }
    const getProductBreadCrumb = productBreadCrumbGetter(paramName);
    result = await getProductBreadCrumb({ params });
    console.log('product result: ', result);
    return result;
  };

export { productBreadCrumbGetter, categoryBreadCrumbGetter, catalogBreadCrumbGetter };
