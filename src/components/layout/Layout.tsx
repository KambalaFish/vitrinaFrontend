import { Header } from '@components/layout/header';
import cn from 'classnames';
import { page, pageContent as page__content } from '@styles/layout/page.module.scss';
import { container } from '@styles/layout/container.module.scss';
import { Outlet } from 'react-router-dom';
import { Footer } from '@components/layout/footer';
import { BreadCrumbs } from '@components/breadcrumbs/BreadCrumbs';

const Layout = () => {
  return (
    <div className={page}>
      <Header />
      <BreadCrumbs />
      <main className={cn(page__content, container)}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export { Layout };
