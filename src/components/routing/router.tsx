import { createBrowserRouter, createRoutesFromChildren, Route } from 'react-router-dom';
import { Layout } from '@components/layout/Layout';
import { pages } from '@utils/pages';
import { Home } from '@pages/Home';
import { Orders } from '@pages/Orders';
import { Account } from '@pages/Account';
import { PrivateRoute } from '@components/routing/PrivateRoute';
import { Contacts } from '@pages/Contacts';
import { Catalog } from '@pages/Catalog';
import { Cart } from '@pages/Cart';
import { AuthModal } from '@components/auth/AuthModal';
import { SignIn } from '@components/auth/SignIn';
import { SignUp } from '@components/auth/SignUp';
import { IsNestedRoute } from '@components/routing/IsNestedRoute';

const router = createBrowserRouter(
  createRoutesFromChildren(
    <Route element={<Layout />}>
      <Route
        path={pages.home.path}
        element={
          <IsNestedRoute path={pages.home.path}>
            <Home />
          </IsNestedRoute>
        }
      >
        <Route
          path={pages.orders.path}
          element={<Orders />}
          handle={pages.orders.handle}
        />
        <Route
          path={pages.personalAccount.path}
          element={<PrivateRoute component={<Account />} />}
          handle={pages.personalAccount.handle}
        />
        <Route
          path={pages.contacts.path}
          element={<Contacts />}
          handle={pages.contacts.handle}
        />
        <Route
          path={pages.catalog.path}
          element={<Catalog />}
          handle={pages.catalog.handle}
        />
        <Route path={pages.cart.path} element={<Cart />} handle={pages.cart.handle} />
      </Route>
      <Route element={<AuthModal />}>
        <Route path={pages.signIn.path} element={<SignIn />} />
        <Route path={pages.signUp.path} element={<SignUp />} />
      </Route>
    </Route>
  )
);

export { router };
