import { pages } from '@utils/pages';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import {
  logo,
  logoBody,
  logoText,
  logoEmblem,
} from '@styles/components/logo.module.scss';
import { LogoProps } from '@interfaces/props/LogoProps';
const Logo = ({ to = pages.home.path, className }: LogoProps) => {
  return (
    <Link to={to} className={cn(className, logo)}>
      <div className={cn(logoBody)}>
        <span className={logoText}>Vitrina</span>
        <span className={logoText}>Kambalina</span>
      </div>
      <span className={logoEmblem}>VK</span>
    </Link>
  );
};

export { Logo };
