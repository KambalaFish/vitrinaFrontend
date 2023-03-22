import type { NotificationAction } from '@utils/notifications/notifications.reducer';
import { INotification } from '@interfaces/other/INotification';

const PUSH_NOTIFICATION = 'PUSH_NOTIFICATION';

const pushNotification = (payload: INotification): NotificationAction => {
  return {
    type: PUSH_NOTIFICATION,
    payload,
  };
};

const REMOVE_NOTIFICATION = 'REMOVE_NOTIFICATION';
const removeNotification = (payload: INotification): NotificationAction => {
  return {
    type: REMOVE_NOTIFICATION,
    payload,
  };
};

export { REMOVE_NOTIFICATION, removeNotification, PUSH_NOTIFICATION, pushNotification };
