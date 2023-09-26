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
import { Category } from '@pages/category';
import { CategoryOrProduct } from '@components/routing/CategoryOrProduct';
import { Product } from '@pages/Product';

const router = createBrowserRouter(
  createRoutesFromChildren(
    <Route element={<Layout />}>
      <Route path={pages.home.path} element={<Home />} />
      <Route path={pages.orders.path} element={<Orders />} handle={pages.orders.handle} />
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
        element={
          <IsNestedRoute path={pages.catalog.path}>
            <Catalog />
          </IsNestedRoute>
        }
        handle={pages.catalog.handle}
      >
        <Route
          path={pages.catalogLevel1.path}
          element={
            <IsNestedRoute path={pages.catalogLevel1.path}>
              <Category currentParam={'catalogLevel1'} />
            </IsNestedRoute>
          }
          loader={pages.catalogLevel1.loader!('catalogLevel1')}
          handle={pages.catalogLevel1.handle}
        >
          <Route
            path={pages.catalogLevel2.path}
            element={
              <IsNestedRoute path={pages.catalogLevel2.path}>
                <CategoryOrProduct paramsLevel={'catalogLevel2'} />
              </IsNestedRoute>
            }
            loader={pages.catalogLevel2.loader!('catalogLevel2')}
            handle={pages.catalogLevel2.handle}
          >
            <Route
              path={pages.catalogLevel3.path}
              element={
                <IsNestedRoute path={pages.catalogLevel3.path}>
                  <CategoryOrProduct paramsLevel={'catalogLevel3'} />
                </IsNestedRoute>
              }
              loader={pages.catalogLevel3.loader!('catalogLevel3')}
              handle={pages.catalogLevel3.handle}
            >
              <Route
                path={pages.product.path}
                element={<Product currentParam={'product'} />}
                loader={pages.product.loader!('product')}
                handle={pages.product.handle}
              />
            </Route>
          </Route>
        </Route>
      </Route>
      <Route path={pages.cart.path} element={<Cart />} handle={pages.cart.handle} />
      <Route element={<AuthModal />}>
        <Route path={pages.signIn.path} element={<SignIn />} />
        <Route path={pages.signUp.path} element={<SignUp />} />
      </Route>
    </Route>
  )
);

export { router };
