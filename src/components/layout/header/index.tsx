import cn from 'classnames';
import { pageHeader as page__header } from '@styles/layout/page.module.scss';
import {
  header,
  headerContainer as header__container,
  headerLogo as header__logo,
  headerSearch as header__search,
  headerTelegram as header__telegram,
} from '@styles/layout/header/header.module.scss';
import { container } from '@styles/layout/container.module.scss';
import { Logo } from '@components/layout/header/Logo';
import { InfoPanel } from '@components/layout/header/InfoPanel';
import { SearchForm } from '@components/layout/header/SearchForm';
import { pages } from '@utils/pages';
import { SocialButton } from '@components/uiKit/buttons/SocialButton';
import TelegramIcon from '@assets/tgicon.svg';
import { infobuttonIcon as infobutton__icon } from '@styles/components/button.module.scss';
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
    <header className={cn(page__header, header)} ref={headerRef}>
      <div className={cn(container, header__container)}>
        <Logo customClassName={header__logo} />
        <InfoPanel />
        <SearchForm action={pages.catalog.path} customClassName={header__search} />
        <SocialButton
          customClassName={header__telegram}
          title={'Наш телеграм'}
          description={`@dmitrykambalin`}
          href={`https://telegram.me/dmitrykambalin`}
          icon={<TelegramIcon className={infobutton__icon} />}
        />
        <ShoppingPanel isScrolled={isScrolled} />
      </div>
    </header>
  );
};

export { Header };
