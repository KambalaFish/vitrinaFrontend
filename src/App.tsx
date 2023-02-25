import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { pages } from './utils/pages';
import { page, pageContent } from '@styles/layout/page.module.scss';
import { Header } from '@components/Header';
import { Footer } from '@components/Footer';

const App = () => {
  const routes = Object.values(pages).map(({ path, component: Component }) => {
    return <Route key={path} path={path} element={<Component />} />;
  });
  return (
    <BrowserRouter>
      <div className={page}>
        <Header />
        <main className={pageContent}>
          <Routes>{routes}</Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export { App };
