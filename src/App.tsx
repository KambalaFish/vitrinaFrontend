import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { pages } from '@utils/pages';
import '@styles/global.scss';
import { page, pageContent } from '@styles/layout/page.module.scss';
import { Header } from '@components/layout/header';
import { Footer } from '@components/layout/footer';

const App = () => {
  const pageRoutes = Object.values(pages).map(({ path, component: Component }) => {
    return <Route key={path} path={path} element={<Component />} />;
  });
  return (
    <BrowserRouter>
      <div className={page}>
        <Header />
        <main className={pageContent}>
          <Routes>{pageRoutes}</Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export { App };
