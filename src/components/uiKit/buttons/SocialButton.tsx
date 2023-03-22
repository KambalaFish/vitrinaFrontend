import cn from 'classnames';
import {
  button,
  buttonAerial,
  buttonRoundedS,
  infobutton,
  infobuttonBody,
  infobuttonTitle,
  infobuttonDescription,
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
        { [buttonAerial]: isAerial },
        { [buttonRoundedS]: isRounded },
        infobutton
      )}
    >
      {icon}
      <div className={infobuttonBody}>
        <span className={infobuttonTitle}>{title}</span>
        <span className={infobuttonDescription}>{description}</span>
      </div>
    </a>
  );
};

export { SocialButton };
