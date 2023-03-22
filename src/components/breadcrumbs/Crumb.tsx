import { StatefulLink } from '@components/routing/StatefulLink';
import { IoHome as HomeIcon } from '@react-icons/all-files/io5/IoHome';
import { pages } from '@utils/pages';
import {
  crumb,
  crumbIcon,
  crumbHome,
  crumbTitle,
  crumbLast,
} from '@styles/components/breadcrumbs.module.scss';
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

const HomeCrumb = () => {
  return (
    <li
      className={cn(crumb, crumbHome)}
      itemProp={'itemListElement'}
      itemScope
      itemType='https://schema.org/ListItem'
    >
      <StatefulLink to={pages.home.path}>
        <HomeIcon className={crumbIcon} />
      </StatefulLink>
      <meta itemProp={'name'} content={'Главная'} />
      <meta itemProp={'item'} content={pages.home.path} />
      <meta itemProp={'position'} content={'1'} />
    </li>
  );
};

export { Crumb, HomeCrumb };
