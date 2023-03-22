import type { INotification } from '@interfaces/other/INotification';
import {
  PUSH_NOTIFICATION,
  REMOVE_NOTIFICATION,
} from '@utils/notifications/notification.actions';

export interface NotificationAction {
  type: string;
  payload?: INotification;
}

const notificationsReducer: (
  state: INotification[],
  action: NotificationAction
) => INotification[] = (state: INotification[], action: NotificationAction) => {
  switch (action.type) {
    case PUSH_NOTIFICATION: {
      return state.concat(action.payload!);
    }
    case REMOVE_NOTIFICATION: {
      const payload = action.payload!;
      return state.filter((n) => n.id !== payload.id);
    }
    default:
      return state;
  }
};

export { notificationsReducer };
