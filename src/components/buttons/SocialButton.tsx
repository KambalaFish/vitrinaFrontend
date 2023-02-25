import cn from 'classnames';
import {
  button,
  buttonAerial,
  buttonRounded,
  infobutton,
  infobuttonBody,
  infobuttonTitle,
  infobuttonDescription,
} from '@styles/components/button.module.scss';
import { SocialButtonProps } from '@interfaces/props/ButtonProps';
const SocialButton = ({
  className,
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
        className,
        button,
        { [buttonAerial]: isAerial },
        { [buttonRounded]: isRounded },
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
