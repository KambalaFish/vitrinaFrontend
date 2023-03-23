import { ReactElement } from 'react';

type PageNames =
  | 'home'
  | 'orders'
  | 'personalAccount'
  | 'contacts'
  | 'catalog'
  | 'category'
  | 'cart'
  | 'signIn'
  | 'signUp';

interface PageHandle {
  crumb: (
    position: string,
    isLast: boolean,
    params?: Record<string, string>
  ) => ReactElement;
}

interface PageInfo {
  path: string;
  handle?: PageHandle;
}

type Pages = {
  [k in PageNames]: PageInfo;
};

export type { Pages };
