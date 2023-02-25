import cn from 'classnames';
import { pageHeader } from '@styles/layout/page.module.scss';
import {
  header,
  headerContainer,
  headerLogo,
  headerSearch,
  headerTelegram,
} from '@styles/layout/header.module.scss';
import { container } from '@styles/layout/container.module.scss';
import { Logo } from '@components/layout/header/Logo';
import { InfoPanel } from '@components/layout/header/InfoPanel';
import { SearchForm } from '@components/layout/header/SearchForm';
import { pages } from '@utils/pages';
import { SocialButton } from '@components/buttons/SocialButton';
import TelegramIcon from '@assets/tgicon.svg';
import { infobuttonIcon } from '@styles/components/button.module.scss';
import { ShoppingPanel } from '@components/layout/header/ShoppingPanel';
import { useState, useRef, useEffect } from 'react';
import { throttle } from '@utils/throttle';

const SIXTY_FRAMES_PER_SECOND = 1000 / 60;
const FIXATE_HEADER_AFTER_SCROLLING_THE_CORD = 1;

const Header = () => {
  const [isScrolled, setScroll] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let cb = () => {
      const HEADER_BOTTOM_CORD = headerRef?.current?.getBoundingClientRect().bottom ?? 2;
      if (HEADER_BOTTOM_CORD < FIXATE_HEADER_AFTER_SCROLLING_THE_CORD) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    cb = throttle(cb, SIXTY_FRAMES_PER_SECOND);
    window.addEventListener('scroll', cb);
    return () => window.removeEventListener('scroll', cb);
  }, []);

  return (
    <header className={cn(pageHeader, header)} ref={headerRef}>
      <div className={cn(container, headerContainer)}>
        <Logo className={headerLogo} />
        <InfoPanel />
        <SearchForm action={pages.catalog.path} className={headerSearch} />
        <SocialButton
          className={headerTelegram}
          title={'Наш телеграм'}
          description={`@dmitrykambalin`}
          href={`https://telegram.me/dmitrykambalin`}
          icon={<TelegramIcon className={infobuttonIcon} />}
        />
        <ShoppingPanel isScrolled={isScrolled} />
      </div>
    </header>
  );
};

export { Header };
