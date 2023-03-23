import cn from 'classnames';
import { StatefulLink } from '@components/routing/StatefulLink';
import { pages } from '@utils/pages';
import { IoPersonCircle as PersonIcon } from '@react-icons/all-files/io5/IoPersonCircle';
import { headerInfopanel } from '@styles/layout/header/header.module.scss';
import {
  infopanel,
  infopanelItem,
  infopanelItemBorderLeft,
  infopanelText,
  infopanelTextPersonalAccount,
  infopanelDescription,
  infopanelItemPersonalAccount,
} from '@styles/layout/header/infopanel.module.scss';

const InfoPanel = () => {
  const contactNumber = `8 800 555-35-35`;
  const tel = contactNumber.replaceAll(/[-\s]*/gi, '');
  return (
    <div className={cn(headerInfopanel, infopanel)}>
      <a href={`tel:${tel}`} className={cn(infopanelItem, infopanelItemBorderLeft)}>
        <span className={infopanelText}>{contactNumber}</span>
      </a>
      <StatefulLink to={pages.contacts.path} className={infopanelItem}>
        <address className={infopanelText}>ул. Пушкина, д. Колотушкина</address>
        <span className={infopanelDescription}>Витрина Дмитрия Камбалина</span>
      </StatefulLink>
      <StatefulLink
        to={pages.personalAccount.path}
        className={cn(infopanelItem, infopanelItemPersonalAccount)}
      >
        <PersonIcon size={'1.5rem'} color={'rgb(240 245 240)'} />
        <span className={cn(infopanelText, infopanelTextPersonalAccount)}>
          Личный кабинет
        </span>
      </StatefulLink>
    </div>
  );
};

export { InfoPanel };
