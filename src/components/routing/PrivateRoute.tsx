import { useAppSelector } from '@hooks/useAppSelector';
import {
  selectIsUserAuthenticated,
  selectUserRequestError,
} from '@redux/user/user.selectors';
import { ReactElement, useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { pages } from '@utils/pages';
import { INVALID_REFRESH_TOKEN_MESSAGE } from '@utils/auth.const';
import { NotificationContext } from '@utils/notifications/NotificationContext';
import { INotificationContext } from '@interfaces/contexts/NotificationContext';
import { pushNotification } from '@utils/notifications/notification.actions';
import { createErrorNotification } from '@utils/notifications/notificationCreators';
import { useDispatch } from 'react-redux';
import { userSliceActions } from '@redux/user/user.actions';

interface PrivateRouteProps {
  component: ReactElement;
}
const PrivateRoute = ({ component }: PrivateRouteProps) => {
  const isUserAuthenticated = useAppSelector(selectIsUserAuthenticated);
  const userRequestError = useAppSelector(selectUserRequestError);
  const { pathname, state } = useLocation();
  const notificationsDispatch = useContext<INotificationContext>(NotificationContext);
  const dispatch = useDispatch();

  if (!isUserAuthenticated) {
    if (userRequestError.message === INVALID_REFRESH_TOKEN_MESSAGE) {
      notificationsDispatch(
        pushNotification(
          createErrorNotification({
            message: 'Сессия устарела. Пожалуйста войдите в аккаунт заново.',
            unmountTimeoutMs: 10000,
          })
        )
      );
      dispatch(userSliceActions.resetState());
      return <Navigate to={pages.home.path} />;
    }

    return (
      <Navigate to={pages.signIn.path} state={{ ...state, protectedFrom: pathname }} />
    );
  }

  return component;
};

export { PrivateRoute };
