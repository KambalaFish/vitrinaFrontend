import '@styles/global.scss';
import { Provider } from 'react-redux';
import { store } from '@redux/store';
import { Notifications } from '@components/notifications/Notifications';
import { NotificationContext } from '@utils/notifications/NotificationContext';
import { useReducer } from 'react';
import { notificationsReducer } from '@utils/notifications/notifications.reducer';
import { AllRoutes } from '@components/routing/AllRoutes';

const App = () => {
  const [notifications, notificationsDispatch] = useReducer(notificationsReducer, []);

  return (
    <>
      <Provider store={store}>
        <NotificationContext.Provider value={notificationsDispatch}>
          <Notifications notifications={notifications} />
          <AllRoutes />
        </NotificationContext.Provider>
      </Provider>
    </>
  );
};

export { App };
