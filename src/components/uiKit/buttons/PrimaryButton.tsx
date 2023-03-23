import { PrimaryButtonProps } from '@interfaces/props/component/ButtonProps';
import {
  button,
  buttonRoundedS,
  buttonPrimary,
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
      className={cn(button, buttonRoundedS, buttonPrimary, customClassName)}
      onClick={onClick}
      {...buttonHTMLProps}
    >
      {children}
    </button>
  );
};

export { PrimaryButton };
