import { Home } from '@pages/Home';
import { Orders } from '@pages/Orders';
import type { FC } from 'react';

type PageNames = 'home' | 'orders';

interface PageInfo {
  path: string;
  component: FC;
}

type Pages = {
  [k in PageNames]: PageInfo;
};

const pages: Pages = {
  home: {
    path: '/',
    component: Home,
  },
  orders: {
    path: '/orders',
    component: Orders,
  },
};

export { pages };
