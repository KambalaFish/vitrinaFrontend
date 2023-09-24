import cn from 'classnames';
import { headerShoppingpanel as header__shoppingPanel } from '@styles/layout/header/header.module.scss';
import {
  shoppingpanel,
  shoppingpanelCart as shoppingpanel__cart,
  shoppingpanelScrolled as shoppingpanel_scrolled,
} from '@styles/layout/header/shoppingpanel.module.scss';
import {
  button,
  infobutton,
  infobuttonBody as infobutton__body,
  infobuttonDescription as infobutton__description,
  infobuttonDescriptionCart as infobutton__description_cart,
  infobuttonIcon as infobutton__icon,
  infobuttonIconCart as infobutton__icon_cart,
  infobuttonTitle as infobutton__title,
  infobuttonTitleCart as infobutton__title_cart,
} from '@styles/components/button.module.scss';
import {
  menu,
  menuItem as menu__item,
  menuItemHeader as menu__item_header,
} from '@styles/layout/header/menu.module.scss';
import { container } from '@styles/layout/container.module.scss';
import { StatefulLink } from '@components/routing/StatefulLink';
import { pages } from '@utils/pages';
import { GiShoppingBag as ShoppingBagIcon } from '@react-icons/all-files/gi/GiShoppingBag';
import { ShoppingPanelProps } from '@interfaces/props/component/ShoppingPanelProps';
import { useAppSelector } from '@hooks/useAppSelector';
import { selectTopCategories } from '@redux/categories/categories.selectors';

const ShoppingPanel = ({ isScrolled }: ShoppingPanelProps) => {
  const topCategories = useAppSelector(selectTopCategories);
  const linksToTopCategories = topCategories.map((c) => (
    <StatefulLink
      key={c.id}
      to={pages.catalogLevel1.dynamicPath!(c.pathname)}
      className={cn(menu__item, menu__item_header)}
    >
      {c.title}
    </StatefulLink>
  ));

  return (
    <div
      className={cn(header__shoppingPanel, shoppingpanel, {
        [shoppingpanel_scrolled]: isScrolled,
      })}
    >
      <nav className={cn(menu, { [container]: isScrolled })}>
        {linksToTopCategories}
        <StatefulLink
          to={pages.cart.path}
          className={cn(shoppingpanel__cart, button, infobutton)}
        >
          <ShoppingBagIcon className={cn(infobutton__icon, infobutton__icon_cart)} />
          <div className={infobutton__body}>
            <span className={cn(infobutton__title, infobutton__title_cart)}>Корзина</span>
            <span className={cn(infobutton__description, infobutton__description_cart)}>
              0 позиций
            </span>
          </div>
        </StatefulLink>
      </nav>
    </div>
  );
};

export { ShoppingPanel };
