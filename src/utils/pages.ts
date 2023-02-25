import { Home } from '@pages/Home';
import { Orders } from '@pages/Orders';
import { Pages } from '@interfaces/utils/pages';
import { PersonalAccount } from '@pages/PersonalAccount';
import { Contacts } from '@pages/Contacts';
import { Catalog } from '@pages/Catalog';
import { Cart } from '@pages/Cart';

const pages: Pages = {
  home: {
    path: '/',
    component: Home,
  },
  orders: {
    path: '/orders',
    component: Orders,
  },
  personalAccount: {
    path: '/account',
    component: PersonalAccount,
  },
  contacts: {
    path: '/contacts',
    component: Contacts,
  },
  catalog: {
    path: '/catalog',
    component: Catalog,
  },
  cart: {
    path: '/shopping-cart',
    component: Cart,
  },
};

export { pages };
