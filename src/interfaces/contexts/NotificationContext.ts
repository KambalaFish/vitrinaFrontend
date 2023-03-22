import { Dispatch, ReducerAction } from 'react';
import { notificationsReducer } from '@utils/notifications/notifications.reducer';

export type INotificationContext = Dispatch<ReducerAction<typeof notificationsReducer>>;
