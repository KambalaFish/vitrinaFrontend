import cn from 'classnames';
import {
  crumb,
  crumbIcon as crumb__icon,
  crumbHome as crumb_home,
} from '@styles/components/breadcrumbs.module.scss';
import { StatefulLink } from '@components/routing/StatefulLink';
import { pages } from '@utils/pages';
import { IoHome as HomeIcon } from '@react-icons/all-files/io5/IoHome';

const HomeCrumb = () => {
  return (
    <li
      className={cn(crumb, crumb_home)}
      itemProp={'itemListElement'}
      itemScope
      itemType='https://schema.org/ListItem'
    >
      <StatefulLink to={pages.home.path}>
        <HomeIcon className={crumb__icon} />
      </StatefulLink>
      <meta itemProp={'name'} content={'Главная'} />
      <meta itemProp={'item'} content={pages.home.path} />
      <meta itemProp={'position'} content={'1'} />
    </li>
  );
};

export { HomeCrumb };
