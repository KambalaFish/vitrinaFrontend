import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import { rootSaga } from '@redux/root.saga';
import { userSlice } from '@redux/user/user.slice';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
export { store };
export type AppState = ReturnType<typeof store.getState>;
