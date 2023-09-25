import { createRoot } from 'react-dom/client';
import { App } from './App';
import { store } from '@redux/store';
import { Provider } from 'react-redux';
import { fetchCategories } from '@redux/categories/categories.actions';

const appNode = document.querySelector('#app');

if (appNode) {
  const root = createRoot(appNode);
  store.dispatch(fetchCategories());
  root.render(
    <Provider store={store}>
      <App />
    </Provider>
  );
}
