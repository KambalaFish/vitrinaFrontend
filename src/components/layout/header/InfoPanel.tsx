import cn from 'classnames';
import { Link } from 'react-router-dom';
import { pages } from '@utils/pages';
import { IoPersonCircle as PersonIcon } from '@react-icons/all-files/io5/IoPersonCircle';
import { headerInfopanel } from '@styles/layout/header.module.scss';
import {
  infopanel,
  infopanelItem,
  infopanelItemBorderLeft,
  infopanelText,
  infopanelTextPersonalAccount,
  infopanelDescription,
  infopanelItemPersonalAccount,
} from '@styles/components/infopanel.module.scss';

const InfoPanel = () => {
  const contactNumber = `8 800 555-35-35`;
  const tel = contactNumber.replaceAll(/[-\s]*/gi, '');
  return (
    <div className={cn(headerInfopanel, infopanel)}>
      <a href={`tel:${tel}`} className={cn(infopanelItem, infopanelItemBorderLeft)}>
        <span className={infopanelText}>{contactNumber}</span>
      </a>
      <Link to={pages.contacts.path} className={infopanelItem}>
        <address className={infopanelText}>Ул. Пушкина, д. Колотушкина</address>
        <span className={infopanelDescription}>Витрина Дмитрия Камбалина</span>
      </Link>
      <Link
        to={pages.personalAccount.path}
        className={cn(infopanelItem, infopanelItemPersonalAccount)}
      >
        <PersonIcon size={'1.5rem'} color={'rgb(240 245 240)'} />
        <span className={cn(infopanelText, infopanelTextPersonalAccount)}>
          Личный кабинет
        </span>
      </Link>
    </div>
  );
};

export { InfoPanel };
