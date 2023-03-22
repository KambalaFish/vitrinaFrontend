import type { Pages } from '@interfaces/utils/pages';
import { Crumb } from '@components/breadcrumbs/Crumb';

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
  category: {
    path: '/catalog/:category',
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
  /*todo: remove below*/
  test: {
    path: '/test',
    handle: {
      crumb: (position: string, isLast: boolean) => (
        <Crumb
          key={'/test'}
          url={'/test'}
          title={'Тест'}
          position={position}
          isLast={isLast}
        />
      ),
    },
  },
  testId: {
    path: '/test/:testId',
    handle: {
      crumb: (position: string, isLast: boolean, params) => (
        <Crumb
          key={'/test/:testId'}
          url={'/test/:testId'}
          title={params ? params['testId'] : ''}
          position={position}
          isLast={isLast}
        />
      ),
    },
  },
  testtest: {
    path: '/test/:testId/testtest',
    handle: {
      crumb: (position: string, isLast: boolean) => (
        <Crumb
          key={'/test/:testId/testtest'}
          url={'/test/:testId/testtest'}
          title={'ТестТест'}
          position={position}
          isLast={isLast}
        />
      ),
    },
  },
};

export { pages };
