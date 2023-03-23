import { RefAttributes } from 'react';
import { LinkProps } from 'react-router-dom';
export interface StatefulLinkProps extends LinkProps, RefAttributes<HTMLAnchorElement> {}
