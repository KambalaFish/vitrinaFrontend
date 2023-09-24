import { INotification } from '@interfaces/other/INotification';
import { NotificationType } from '@utils/notifications/NotificationType';
import cn, { ArgumentArray } from 'classnames';
import { HiOutlineExclamationCircle as ExclamationCircle } from '@react-icons/all-files/hi/HiOutlineExclamationCircle';
import { FiCheckCircle as CheckMark } from '@react-icons/all-files/fi/FiCheckCircle';
import { HiOutlineExclamation as ExclamationTriangle } from '@react-icons/all-files/hi/HiOutlineExclamation';
import {
  notificationHeader as notification__header,
  notificationIcon as notification__icon,
  notificationIconError as notification__icon_error,
  notificationType as notification__type,
  notificationTypeError as notification__type_error,
} from '@styles/components/notification.module.scss';

const NotificationHeader = ({ type }: Pick<INotification, 'type'>) => {
  let classNames: ArgumentArray;
  let content: string;
  let icon;
  switch (type) {
    case NotificationType.info: {
      content = 'Инфо';
      classNames = [];
      icon = <ExclamationCircle className={cn(notification__icon)} />;
      break;
    }
    case NotificationType.error: {
      content = 'Ошибка';
      classNames = [notification__type_error];
      icon = (
        <ExclamationCircle className={cn(notification__icon, notification__icon_error)} />
      );
      break;
    }
    case NotificationType.success: {
      content = 'Успешно';
      classNames = [];
      icon = <CheckMark className={cn(notification__icon)} />;
      break;
    }
    case NotificationType.warning: {
      content = 'Предупреждение';
      classNames = [];
      icon = <ExclamationTriangle className={cn(notification__icon)} />;
      break;
    }
    default: {
      content = 'unknown notification type';
      icon = <></>;
      classNames = [];
    }
  }
  return (
    <div className={cn(notification__header)}>
      {icon}
      <p className={cn(notification__type, classNames)}>{content}</p>
    </div>
  );
};

export { NotificationHeader };
