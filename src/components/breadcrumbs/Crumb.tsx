import { StatefulLink } from '@components/routing/StatefulLink';
import { crumb, crumbTitle, crumbLast } from '@styles/components/breadcrumbs.module.scss';
import cn from 'classnames';
import { CrumbProps } from '@interfaces/props/component/CrumbProps';

const Crumb = ({ url, title, position, isLast }: CrumbProps) => {
  const content = isLast ? (
    <span className={cn(crumbTitle, crumbLast)} itemProp={'name'}>
      {title}
    </span>
  ) : (
    <StatefulLink to={url}>
      <span className={crumbTitle} itemProp={'name'}>
        {title}
      </span>
    </StatefulLink>
  );
  return (
    <li
      className={crumb}
      itemProp={'itemListElement'}
      itemScope
      itemType='https://schema.org/ListItem'
    >
      {content}
      <meta itemProp={'item'} content={url} />
      <meta itemProp={'position'} content={position} />
    </li>
  );
};

export { Crumb };
