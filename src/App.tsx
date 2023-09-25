import '@styles/global.scss';
import { Notifications } from '@components/notifications/Notifications';
import { NotificationContext } from '@utils/notifications/NotificationContext';
import { useReducer } from 'react';
import { notificationsReducer } from '@utils/notifications/notifications.reducer';
import { AllRoutes } from '@components/routing/AllRoutes';
import { useAppSelector } from '@hooks/useAppSelector';
import { selectCategoryRequestStatus } from '@redux/categories/categories.selectors';
import { isLoading, RequestStatus } from '@interfaces/redux/other/requestStatus';
import { PreviewLayout } from '@components/layout/PreviewLayout';

const App = () => {
  const [notifications, notificationsDispatch] = useReducer(notificationsReducer, []);

  const categoryRequestStatus = useAppSelector(selectCategoryRequestStatus);

  const requestStatuses: RequestStatus[] = [categoryRequestStatus];

  const shouldShowLoader = requestStatuses.some(isLoading);

  let content;

  if (shouldShowLoader) {
    content = <PreviewLayout />;
  }
  if (!shouldShowLoader) {
    content = <AllRoutes />;
  }

  return (
    <NotificationContext.Provider value={notificationsDispatch}>
      <Notifications notifications={notifications} />
      {content}
    </NotificationContext.Provider>
  );
};

export { App };
