import { ReactElement } from 'react';

type PageNames =
  | 'home'
  | 'orders'
  | 'personalAccount'
  | 'contacts'
  | 'catalog'
  | 'catalogLevel1'
  | 'catalogLevel2'
  | 'catalogLevel3'
  | 'cart'
  | 'signIn'
  | 'signUp'
  | 'product';

interface PageHandle {
  crumb: (
    position: string,
    isLast: boolean,
    params?: Record<string, string>,
    data?: any
  ) => ReactElement;
}

interface PageInfo {
  path: string;
  handle?: PageHandle;
  dynamicPath?: (...args: string[]) => string;
  loader?: (...args: any) => (obj: any) => Promise<string | null>;
}

type Pages = {
  [k in PageNames]: PageInfo;
};

export type { Pages };
