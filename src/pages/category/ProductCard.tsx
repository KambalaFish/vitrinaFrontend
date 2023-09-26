import {
  productsCard as products__card,
  productcard,
  productcardContent as productcard__content,
  productcardBorder as productcard__border,
  productcardHeader as productcard__header,
  productcardImagewrapper as productcard__imagewrapper,
  productcardTitle as productcard__title,
  productcardFooter as productcard__footer,
  productcardButtons as productcard__buttons,
  productcardButton as productcard__button,
  productcardButtonDetails as productcard__button_details,
} from '@styles/pages/category.module.scss';
import {
  image,
  imageObjectfitContain as image_objectfit_contain,
  imageObjectpositionCenter as image_objectposition_center,
  imageSquared as image_squared,
} from '@styles/components/image.module.scss';
import {
  purchasebuttonIcon as purchasebutton__icon,
  purchasebuttonIconSpinning as purchasebutton__icon_spinning,
  purchasebuttonIconMedium as purchasebutton__icon_medium,
} from '@styles/components/button.module.scss';
import cn from 'classnames';
import { IProductCardProps } from '@interfaces/props/component/IProductCardProps';
import { useAppSelector } from '@hooks/useAppSelector';
import { selectProductById } from '@redux/products/products.selectors';
import { pages } from '@utils/pages';
import { StatefulLink } from '@components/routing/StatefulLink';
import { PurchaseButton } from '@components/uiKit/buttons/PurchaseButton';
import { link } from '@styles/components/link.module.scss';
import { Price } from '@pages/category/Price';

const ProductCard = ({ id, isLazyLoadedImage }: IProductCardProps) => {
  const product = useAppSelector((state) => selectProductById(state, id));
  let name = product.name;
  let imageUrl = product?.images?.[0];
  const price = product?.price || product.variations[0]?.price;
  if (!imageUrl) {
    if (product.variations.length > 0) {
      imageUrl = product.variations[0].images?.[0];
      name = product.variations[0].name;
    }
  }
  const productPathname = product.pathname;

  return (
    <article className={cn(products__card, productcard)}>
      <div className={productcard__border}></div>
      <div className={cn(productcard__content)}>
        <header className={productcard__header}>
          <StatefulLink
            to={pages.product.dynamicPath!(productPathname)}
            className={cn(link, productcard__imagewrapper)}
          >
            <img
              src={imageUrl}
              alt={name}
              className={cn(
                image,
                image_squared,
                image_objectfit_contain,
                image_objectposition_center
              )}
              loading={isLazyLoadedImage ? 'lazy' : 'eager'}
              width={260}
              height={260}
            />
          </StatefulLink>
          <StatefulLink to={pages.product.dynamicPath!(productPathname)}>
            <h2 className={cn(productcard__title, link)}>{name}</h2>
          </StatefulLink>
        </header>
        <footer className={productcard__footer}>
          <Price price={price} />
          <div className={productcard__buttons}>
            <PurchaseButton
              buttonCustomClassName={productcard__button}
              iconCustomClassName={[
                purchasebutton__icon,
                purchasebutton__icon_spinning,
                purchasebutton__icon_medium,
              ]}
            />
            <StatefulLink
              to={pages.product.dynamicPath!(productPathname)}
              className={cn(link, productcard__button_details)}
            >
              Подробнее
            </StatefulLink>
          </div>
        </footer>
      </div>
    </article>
  );
};

export { ProductCard };
