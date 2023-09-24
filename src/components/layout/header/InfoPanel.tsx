import cn from 'classnames';
import { StatefulLink } from '@components/routing/StatefulLink';
import { pages } from '@utils/pages';
import { IoPersonCircle as PersonIcon } from '@react-icons/all-files/io5/IoPersonCircle';
import { headerInfopanel as header__infopanel } from '@styles/layout/header/header.module.scss';
import {
  infopanel,
  infopanelItem as infopanel__item,
  infopanelItemBorderLeft as infopanel__item_borderLeft,
  infopanelText as infopanel__text,
  infopanelTextPersonalAccount as infopanel__text_personalAccount,
  infopanelDescription as infopanel__description,
  infopanelItemPersonalAccount as infopanel__item_personalAccount,
} from '@styles/layout/header/infopanel.module.scss';

const InfoPanel = () => {
  const contactNumber = `8 800 555-35-35`;
  const tel = contactNumber.replaceAll(/[-\s]*/gi, '');
  return (
    <div className={cn(header__infopanel, infopanel)}>
      <a href={`tel:${tel}`} className={cn(infopanel__item, infopanel__item_borderLeft)}>
        <span className={infopanel__text}>{contactNumber}</span>
      </a>
      <StatefulLink to={pages.contacts.path} className={infopanel__item}>
        <address className={infopanel__text}>ул. Пушкина, д. Колотушкина</address>
        <span className={infopanel__description}>Витрина Дмитрия Камбалина</span>
      </StatefulLink>
      <StatefulLink
        to={pages.personalAccount.path}
        className={cn(infopanel__item, infopanel__item_personalAccount)}
      >
        <PersonIcon size={'1.5rem'} color={'rgb(240 245 240)'} />
        <span className={cn(infopanel__text, infopanel__text_personalAccount)}>
          Личный кабинет
        </span>
      </StatefulLink>
    </div>
  );
};

export { InfoPanel };
