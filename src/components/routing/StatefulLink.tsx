import { Link, useLocation } from 'react-router-dom';
import { forwardRef } from 'react';
import { RouteState } from '@interfaces/other/RouteState';
import { StatefulLinkProps } from '@interfaces/props/component/StatefulLinkProps';

const StatefulLink = forwardRef<HTMLAnchorElement, StatefulLinkProps>(
  ({ children, to, ...rest }: StatefulLinkProps, ref) => {
    const { state, pathname, search, hash } = useLocation();

    const newState: RouteState = {
      ...state,
      previous: { pathname, search, hash },
    };

    return (
      <Link to={to} state={newState} ref={ref} {...rest}>
        {children}
      </Link>
    );
  }
);

StatefulLink.displayName = 'StatefulLink';
export { StatefulLink };
