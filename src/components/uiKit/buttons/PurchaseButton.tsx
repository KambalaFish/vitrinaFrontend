import { SecondaryButton } from '@components/uiKit/buttons/SecondaryButton';
import { PurchaseButtonProps } from '@interfaces/props/component/ButtonProps';
import cn from 'classnames';
import { HiShoppingCart } from '@react-icons/all-files/hi/HiShoppingCart';
import {
  purchasebutton,
  purchasebuttonBody as purchasebutton__body,
  purchasebuttonText as purchasebutton__text,
} from '@styles/components/button.module.scss';

const PurchaseButton = ({
  buttonCustomClassName,
  iconCustomClassName,
}: PurchaseButtonProps) => {
  return (
    <SecondaryButton customClassName={[purchasebutton, buttonCustomClassName]}>
      <div className={purchasebutton__body}>
        <HiShoppingCart className={cn(iconCustomClassName)} />
        <span className={purchasebutton__text}>Купить</span>
      </div>
    </SecondaryButton>
  );
};

export { PurchaseButton };
