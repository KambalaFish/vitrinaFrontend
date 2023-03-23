import cn from 'classnames';
import { headerShoppingpanel } from '@styles/layout/header/header.module.scss';
import {
  shoppingpanel,
  shoppingpanelCart,
  shoppingpanelScrolled,
} from '@styles/layout/header/shoppingpanel.module.scss';
import {
  button,
  infobutton,
  infobuttonBody,
  infobuttonTitle,
  infobuttonTitleCart,
  infobuttonDescription,
  infobuttonDescriptionCart,
  infobuttonIcon,
  infobuttonIconCart,
} from '@styles/components/button.module.scss';
import { menu, menuItem, menuItemHeader } from '@styles/layout/header/menu.module.scss';
import { container } from '@styles/layout/container.module.scss';
import { StatefulLink } from '@components/routing/StatefulLink';
import { pages } from '@utils/pages';
import { GiShoppingBag as ShoppingBagIcon } from '@react-icons/all-files/gi/GiShoppingBag';
import { ShoppingPanelProps } from '@interfaces/props/component/ShoppingPanelProps';

const categories: Array<string> = [
  `Компьютеры`,
  `Телефоны`,
  `Планшеты`,
  `Аудио, TV и игры`,
  `Часы и трекеры`,
  `Фото и видеотехника`,
  `Бытовая техника`,
  `Аксессуары`,
];

const ShoppingPanel = ({ isScrolled }: ShoppingPanelProps) => {
  return (
    <div
      className={cn(headerShoppingpanel, shoppingpanel, {
        [shoppingpanelScrolled]: isScrolled,
      })}
    >
      <nav className={cn(menu, { [container]: isScrolled })}>
        {categories.map((c) => (
          <StatefulLink
            key={c}
            to={`${pages.catalog.path}/${c}`}
            className={cn(menuItem, menuItemHeader)}
          >
            {c}
          </StatefulLink>
        ))}
        <StatefulLink
          to={pages.cart.path}
          className={cn(shoppingpanelCart, button, infobutton)}
        >
          <ShoppingBagIcon className={cn(infobuttonIcon, infobuttonIconCart)} />
          <div className={infobuttonBody}>
            <span className={cn(infobuttonTitle, infobuttonTitleCart)}>Корзина</span>
            <span className={cn(infobuttonDescription, infobuttonDescriptionCart)}>
              0 позиций
            </span>
          </div>
        </StatefulLink>
      </nav>
    </div>
  );
};

export { ShoppingPanel };
