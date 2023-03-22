import { NotificationType } from '@utils/notifications/NotificationType';
import {
  notification as notificationCN,
  notificationButton,
  notificationButtonError,
  notificationError,
  notificationInfo,
  notificationMessage,
  notificationMessageError,
  notificationSuccess,
  notificationWarning,
  notificationOpen,
  notificationClose,
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

const Notification = ({ notification }: NotificationProps) => {
  const notificationsDispatch = useContext<INotificationContext>(NotificationContext);
  const [isNotificationClosed, setIsNotificationClosed] = useState(false);
  const [wasShown, setWasShown] = useState(false);

  const { type, message, unmountTimeoutMs } = notification;

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
          notificationsDispatch(removeNotification(notification));
        }, unmountTimeoutMs + NOTIFICATION_TRANSITION_MS);
      }
    }
    //eslint-disable-next-line
  }, []);

  const onNotificationClose = () => {
    setIsNotificationClosed(true);
    setTimeout(() => {
      notificationsDispatch(removeNotification(notification));
    }, NOTIFICATION_TRANSITION_MS);
  };

  return (
    <div
      className={cn(notificationCN, {
        [notificationError]: type === NotificationType.error,
        [notificationSuccess]: type === NotificationType.success,
        [notificationInfo]: type === NotificationType.info,
        [notificationWarning]: type === NotificationType.warning,
        [notificationOpen]: !wasShown,
        [notificationClose]: isNotificationClosed,
      })}
    >
      <button
        type={'button'}
        className={cn(button, notificationButton, {
          [notificationButtonError]: type === NotificationType.error,
        })}
        onClick={onNotificationClose}
      ></button>
      <NotificationHeader type={type} />
      <p
        className={cn(notificationMessage, {
          [notificationMessageError]: type === NotificationType.error,
        })}
      >
        {message}
      </p>
    </div>
  );
};

export { Notification };
