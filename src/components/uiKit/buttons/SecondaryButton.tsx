import { SecondaryButtonProps } from '@interfaces/props/component/ButtonProps';
import {
  button,
  buttonSecondary as button_secondary,
  buttonRoundedS as button_rounded_s,
} from '@styles/components/button.module.scss';
import cn from 'classnames';

const SecondaryButton = ({
  onClick,
  customClassName,
  children,
  type = 'button',
  ...buttonHTMLProps
}: SecondaryButtonProps) => {
  return (
    <button
      type={type}
      className={cn(button, button_secondary, button_rounded_s, customClassName)}
      onClick={onClick}
      {...buttonHTMLProps}
    >
      {children}
    </button>
  );
};

export { SecondaryButton };
