import {
  account,
  accountHeader as account__header,
  accountTitle as account__title,
  signoutbutton,
  signoutbuttonIcon as signoutbutton__icon,
  signoutbuttonText as signoutbutton__text,
} from '@styles/pages/account.module.scss';
import { pageTitle as page__title } from '@styles/layout/page.module.scss';
import {
  button,
  buttonOutlined as button_outlined,
  buttonLevitating as button_levitating,
} from '@styles/components/button.module.scss';
import cn from 'classnames';
import { selectUser } from '@redux/user/user.selectors';
import { useAppSelector } from '@hooks/useAppSelector';
import { ImExit as ExitIcon } from '@react-icons/all-files/im/ImExit';
import { useDispatch } from 'react-redux';
import { signOutRequest } from '@redux/user/user.actions';
import { useNavigate } from 'react-router-dom';
import { pages } from '@utils/pages';
import { useContext } from 'react';
import { NotificationContext } from '@utils/notifications/NotificationContext';
import { INotificationContext } from '@interfaces/contexts/NotificationContext';
import { pushNotification } from '@utils/notifications/notification.actions';
import { createSuccessNotification } from '@utils/notifications/notificationCreators';

const Account = () => {
  const user = useAppSelector(selectUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const notificationsDispatch = useContext<INotificationContext>(NotificationContext);

  const onSignOut = () => {
    dispatch(signOutRequest());
    navigate(pages.home.path);
    notificationsDispatch(
      pushNotification(
        createSuccessNotification({
          message: 'Выход выполнен успешно',
          unmountTimeoutMs: 3000,
        })
      )
    );
  };

  return (
    <div className={account}>
      <div className={account__header}>
        <h1 className={cn(page__title, account__title)}>Здравствуйте, {user.name}!</h1>
        <button
          onClick={onSignOut}
          type={'button'}
          className={cn(button, button_outlined, button_levitating, signoutbutton)}
        >
          <ExitIcon className={signoutbutton__icon} />
          <span className={signoutbutton__text}>Выход</span>
        </button>
      </div>
    </div>
  );
};

export { Account };
