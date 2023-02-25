import type { FC } from 'react';

type PageNames = 'home' | 'orders' | 'personalAccount' | 'contacts' | 'catalog' | 'cart';

interface PageInfo {
  path: string;
  component: FC;
}

type Pages = {
  [k in PageNames]: PageInfo;
};

export type { Pages };
