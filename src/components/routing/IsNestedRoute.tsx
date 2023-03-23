import { matchPath, Outlet, useLocation } from 'react-router-dom';
import { IsNestedRouteProps } from '@interfaces/props/component/IsNestedRouteProps';

const IsNestedRoute = ({ children, path }: IsNestedRouteProps) => {
  const { pathname } = useLocation();
  return matchPath({ path, caseSensitive: true, end: true }, pathname) ? (
    children
  ) : (
    <Outlet />
  );
};

export { IsNestedRoute };
