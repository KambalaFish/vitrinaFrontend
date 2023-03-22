import { useMatches } from 'react-router';
import {
  breadcrumbs,
  breadcrumbsHidden,
  breadcrumbsShown,
} from '@styles/components/breadcrumbs.module.scss';
import { pageBreadcrumbs } from '@styles/layout/page.module.scss';
import { container } from '@styles/layout/container.module.scss';
import cn from 'classnames';
import { HomeCrumb } from '@components/breadcrumbs/HomeCrumb';

const BreadCrumbs = () => {
  const matches = useMatches();
  const crumbs = matches
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    .filter((match) => Boolean(match.handle?.crumb))
    .map((match, position, arr) =>
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      match.handle.crumb(position + 2, position + 1 === arr.length, match.params)
    );

  return (
    <nav
      className={cn(pageBreadcrumbs, container, {
        [breadcrumbsHidden]: crumbs.length < 1,
        [breadcrumbsShown]: crumbs.length >= 1,
      })}
    >
      <ol
        className={cn(breadcrumbs)}
        itemScope
        itemType='https://schema.org/BreadcrumbList'
      >
        <HomeCrumb />
        {crumbs}
      </ol>
    </nav>
  );
};

export { BreadCrumbs };
