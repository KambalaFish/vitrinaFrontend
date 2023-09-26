import { useMatches } from 'react-router';
import { breadcrumbs } from '@styles/components/breadcrumbs.module.scss';
import {
  pageBreadcrumbs as page__breadcrumbs,
  pageBreadcrumbsHidden as page__breadcrumbs_hidden,
  pageBreadcrumbsShown as page__breadcrumbs_shown,
} from '@styles/layout/page.module.scss';
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
      match.handle.crumb(
        position + 2,
        position + 1 === arr.length,
        match.params,
        match.data
      )
    );

  return (
    <nav
      className={cn(page__breadcrumbs, container, {
        [page__breadcrumbs_hidden]: crumbs.length < 1,
        [page__breadcrumbs_shown]: crumbs.length >= 1,
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
