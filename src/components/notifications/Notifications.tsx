import type { INotification } from '@interfaces/other/INotification';
import { notifications } from '@styles/layout/notifications.module.scss';
import { Notification } from '@components/notifications/Notification';

interface NotificationsProps {
  notifications: INotification[];
}
const Notifications = ({ notifications: n }: NotificationsProps) => {
  return (
    <div className={notifications}>
      {n.map((notification) => (
        <Notification key={notification.id} notification={notification} />
      ))}
    </div>
  );
};

export { Notifications };
