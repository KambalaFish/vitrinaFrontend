import { pages } from '@utils/pages';
import cn from 'classnames';
import { StatefulLink } from '@components/routing/StatefulLink';
import {
  logo,
  logoBody,
  logoText,
  logoEmblem,
} from '@styles/layout/header/logo.module.scss';
import { LogoProps } from '@interfaces/props/component/LogoProps';

const Logo = ({ to = pages.home.path, customClassName }: LogoProps) => {
  return (
    <StatefulLink to={to} className={cn(customClassName, logo)}>
      <div className={cn(logoBody)}>
        <span className={logoText}>Vitrina</span>
        <span className={logoText}>Kambalina</span>
      </div>
      <span className={logoEmblem}>VK</span>
    </StatefulLink>
  );
};

export { Logo };
