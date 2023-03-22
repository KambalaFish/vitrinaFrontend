import { NotificationType } from '@utils/notifications/NotificationType';

export interface INotification {
  id: string;
  type: NotificationType;

  message: string;
  unmountTimeoutMs?: number;
}
