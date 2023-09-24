import cn from 'classnames';
import {
  button,
  buttonAerial as button_aerial,
  buttonRoundedS as button_roundedS,
  infobutton,
  infobuttonBody as infobutton__body,
  infobuttonTitle as infobutton__title,
  infobuttonDescription as infobutton__description,
} from '@styles/components/button.module.scss';
import { SocialButtonProps } from '@interfaces/props/component/ButtonProps';
const SocialButton = ({
  customClassName,
  title,
  description,
  isRounded = true,
  isAerial = true,
  href,
  icon,
}: SocialButtonProps) => {
  return (
    <a
      href={href}
      target={`_blank`}
      className={cn(
        customClassName,
        button,
        { [button_aerial]: isAerial },
        { [button_roundedS]: isRounded },
        infobutton
      )}
    >
      {icon}
      <div className={infobutton__body}>
        <span className={infobutton__title}>{title}</span>
        <span className={infobutton__description}>{description}</span>
      </div>
    </a>
  );
};

export { SocialButton };
