import { pages } from '@utils/pages';
import cn from 'classnames';
import { StatefulLink } from '@components/routing/StatefulLink';
import {
  logo,
  logoBody as logo__body,
  logoText as logo__text,
  logoEmblem as logo__emblem,
} from '@styles/layout/header/logo.module.scss';
import { LogoProps } from '@interfaces/props/component/LogoProps';

const Logo = ({ to = pages.home.path, customClassName }: LogoProps) => {
  return (
    <StatefulLink to={to} className={cn(customClassName, logo)}>
      <div className={cn(logo__body)}>
        <span className={logo__text}>Vitrina</span>
        <span className={logo__text}>Kambalina</span>
      </div>
      <span className={logo__emblem}>VK</span>
    </StatefulLink>
  );
};

export { Logo };
