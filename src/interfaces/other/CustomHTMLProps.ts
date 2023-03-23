import { HTMLAttributes } from 'react';

export type CustomHTMLProps<P, T extends HTMLAttributes<P>> = Omit<
  T,
  'className' | 'children'
>;
