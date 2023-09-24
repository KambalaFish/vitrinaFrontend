import { PrimaryButtonProps } from '@interfaces/props/component/ButtonProps';
import {
  button,
  buttonRoundedS as button_roundedS,
  buttonPrimary as button_primary,
} from '@styles/components/button.module.scss';
import cn from 'classnames';
const PrimaryButton = ({
  onClick,
  customClassName,
  children,
  type = 'button',
  ...buttonHTMLProps
}: PrimaryButtonProps) => {
  return (
    <button
      type={type}
      className={cn(button, button_roundedS, button_primary, customClassName)}
      onClick={onClick}
      {...buttonHTMLProps}
    >
      {children}
    </button>
  );
};

export { PrimaryButton };
