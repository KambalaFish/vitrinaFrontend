import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import { rootSaga } from '@redux/root.saga';
import { userSlice } from '@redux/user/user.slice';
import { categoriesSlice } from '@redux/categories/categories.slice';
import { productsSlice } from '@redux/products/products.slice';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    categories: categoriesSlice.reducer,
    products: productsSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
export { store };
export type AppState = ReturnType<typeof store.getState>;
