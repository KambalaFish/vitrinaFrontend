import type { Pages } from '@interfaces/utils/pages';
import { Crumb } from '@components/breadcrumbs/Crumb';
import {
  catalogBreadCrumbGetter,
  categoryBreadCrumbGetter,
  productBreadCrumbGetter,
} from '@utils/pageLoaders';

const pages: Pages = {
  home: {
    path: '/',
  },
  orders: {
    path: '/orders',
    handle: {
      crumb: (position: string, isLast: boolean) => (
        <Crumb
          key={'/orders'}
          url={'/orders'}
          title={'Заказы'}
          position={position}
          isLast={isLast}
        />
      ),
    },
  },
  personalAccount: {
    path: '/account',
    handle: {
      crumb: (position: string, isLast: boolean) => (
        <Crumb
          key={'/account'}
          url={'/account'}
          title={'Личный кабинет'}
          position={position}
          isLast={isLast}
        />
      ),
    },
  },
  contacts: {
    path: '/contacts',
    handle: {
      crumb: (position: string, isLast: boolean) => (
        <Crumb
          key={'/contacts'}
          url={'/contacts'}
          title={'Контакты'}
          position={position}
          isLast={isLast}
        />
      ),
    },
  },
  catalog: {
    path: '/catalog',
    handle: {
      crumb: (position: string, isLast: boolean) => (
        <Crumb
          key={'/catalog'}
          url={'/catalog'}
          title={'Каталог'}
          position={position}
          isLast={isLast}
        />
      ),
    },
  },
  catalogLevel1: {
    path: '/catalog/:catalogLevel1',
    dynamicPath: (catalogLevel1: string) => `/catalog/${catalogLevel1}`,
    handle: {
      crumb: (position, isLast, params, data) => {
        return (
          <Crumb
            key={'/catalog/:catalogLevel1'}
            url={`/catalog/${params!['catalogLevel1']}`}
            title={data}
            position={position}
            isLast={isLast}
          />
        );
      },
    },
    loader: categoryBreadCrumbGetter,
  },
  catalogLevel2: {
    path: '/catalog/:catalogLevel1/:catalogLevel2',
    handle: {
      crumb: (position, isLast, params, data) => {
        return (
          <Crumb
            key={'/catalog/:catalogLevel1/:catalogLevel2'}
            url={`/catalog/${params!['catalogLevel1']}/${params!['catalogLevel2']}`}
            title={data}
            position={position}
            isLast={isLast}
          />
        );
      },
    },
    loader: catalogBreadCrumbGetter,
  },
  catalogLevel3: {
    path: '/catalog/:catalogLevel1/:catalogLevel2/:catalogLevel3',
    handle: {
      crumb: (position, isLast, params, data) => {
        return (
          <Crumb
            key={'/catalog/:catalogLevel1/:catalogLevel2/:catalogLevel3'}
            url={`/catalog/${params!['catalogLevel1']}/${params!['catalogLevel2']}/${
              params!['catalogLevel3']
            }`}
            title={data}
            position={position}
            isLast={isLast}
          />
        );
      },
    },
    loader: catalogBreadCrumbGetter,
  },
  product: {
    path: `/catalog/:catalogLevel1/:catalogLevel2/:catalogLevel3/:product`,
    dynamicPath: (pathname: string) => `/catalog/${pathname}`,
    handle: {
      crumb: (position, isLast, params, data) => {
        return (
          <Crumb
            key={'/catalog/:catalogLevel1/:catalogLevel2/:catalogLevel3/:product'}
            url={`/catalog/${params!['catalogLevel1']}/${params!['catalogLevel2']}/${
              params!['catalogLevel3']
            }/${params!['product']}`}
            title={data}
            position={position}
            isLast={isLast}
          />
        );
      },
    },
    loader: productBreadCrumbGetter,
  },
  cart: {
    path: '/shopping-cart',
    handle: {
      crumb: (position: string, isLast: boolean) => (
        <Crumb
          key={'/shopping-cart'}
          url={'/shopping-cart'}
          title={'Корзина'}
          position={position}
          isLast={isLast}
        />
      ),
    },
  },
  signIn: {
    path: '/sign-in',
  },
  signUp: {
    path: '/sign-up',
  },
};

export { pages };
