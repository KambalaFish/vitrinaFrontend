import { NotificationType } from '@utils/notifications/NotificationType';
import {
  notification,
  notificationButton as notification__button,
  notificationButtonError as notification__button_error,
  notificationError as notification_error,
  notificationInfo as notification_info,
  notificationMessage as notification__message,
  notificationMessageError as notification__message_error,
  notificationSuccess as notification_success,
  notificationWarning as notification_warning,
  notificationOpened as notification_opened,
  notificationClosed as notification_closed,
} from '@styles/components/notification.module.scss';
import cn from 'classnames';
import { button } from '@styles/components/button.module.scss';
import { INotificationContext } from '@interfaces/contexts/NotificationContext';
import { removeNotification } from '@utils/notifications/notification.actions';
import { NotificationHeader } from '@components/notifications/NotificationHeader';
import { useContext, useEffect, useState } from 'react';
import { NotificationContext } from '@utils/notifications/NotificationContext';
import { NotificationProps } from '@interfaces/props/component/NotificationProps';

export const NOTIFICATION_TRANSITION_MS = 450;

const Notification = ({ notification: notificationData }: NotificationProps) => {
  const notificationsDispatch = useContext<INotificationContext>(NotificationContext);
  const [isNotificationClosed, setIsNotificationClosed] = useState(false);
  const [wasShown, setWasShown] = useState(false);

  const { type, message, unmountTimeoutMs } = notificationData;

  useEffect(() => {
    if (!wasShown) {
      setTimeout(() => {
        setWasShown(true);
      }, NOTIFICATION_TRANSITION_MS);
    }
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (!wasShown) {
      if (unmountTimeoutMs) {
        setTimeout(() => {
          setIsNotificationClosed(true);
        }, unmountTimeoutMs);
        setTimeout(() => {
          notificationsDispatch(removeNotification(notificationData));
        }, unmountTimeoutMs + NOTIFICATION_TRANSITION_MS);
      }
    }
    //eslint-disable-next-line
  }, []);

  const onNotificationClose = () => {
    setIsNotificationClosed(true);
    setTimeout(() => {
      notificationsDispatch(removeNotification(notificationData));
    }, NOTIFICATION_TRANSITION_MS);
  };

  return (
    <div
      className={cn(notification, {
        [notification_error]: type === NotificationType.error,
        [notification_success]: type === NotificationType.success,
        [notification_info]: type === NotificationType.info,
        [notification_warning]: type === NotificationType.warning,
        [notification_opened]: !wasShown,
        [notification_closed]: isNotificationClosed,
      })}
    >
      <button
        type={'button'}
        className={cn(button, notification__button, {
          [notification__button_error]: type === NotificationType.error,
        })}
        onClick={onNotificationClose}
      ></button>
      <NotificationHeader type={type} />
      <p
        className={cn(notification__message, {
          [notification__message_error]: type === NotificationType.error,
        })}
      >
        {message}
      </p>
    </div>
  );
};

export { Notification };
