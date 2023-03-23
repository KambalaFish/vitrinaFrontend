import { INotification } from '@interfaces/other/INotification';
import { NotificationType } from '@utils/notifications/NotificationType';
import cn, { ArgumentArray } from 'classnames';
import { HiOutlineExclamationCircle as ExclamationCircle } from '@react-icons/all-files/hi/HiOutlineExclamationCircle';
import { FiCheckCircle as CheckMark } from '@react-icons/all-files/fi/FiCheckCircle';
import { HiOutlineExclamation as ExclamationTriangle } from '@react-icons/all-files/hi/HiOutlineExclamation';
import {
  notificationHeader,
  notificationIcon,
  notificationIconError,
  notificationType,
  notificationTypeError,
} from '@styles/components/notification.module.scss';

const NotificationHeader = ({ type }: Pick<INotification, 'type'>) => {
  let classNames: ArgumentArray;
  let content: string;
  let icon;
  switch (type) {
    case NotificationType.info: {
      content = 'Инфо';
      classNames = [];
      icon = <ExclamationCircle className={cn(notificationIcon)} />;
      break;
    }
    case NotificationType.error: {
      content = 'Ошибка';
      classNames = [notificationTypeError];
      icon = (
        <ExclamationCircle className={cn(notificationIcon, notificationIconError)} />
      );
      break;
    }
    case NotificationType.success: {
      content = 'Успешно';
      classNames = [];
      icon = <CheckMark className={cn(notificationIcon)} />;
      break;
    }
    case NotificationType.warning: {
      content = 'Предупреждение';
      classNames = [];
      icon = <ExclamationTriangle className={cn(notificationIcon)} />;
      break;
    }
    default: {
      content = 'unknown notification type';
      icon = <></>;
      classNames = [];
    }
  }
  return (
    <div className={cn(notificationHeader)}>
      {icon}
      <p className={cn(notificationType, classNames)}>{content}</p>
    </div>
  );
};

export { NotificationHeader };
