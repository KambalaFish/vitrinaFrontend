import { createContext } from 'react';
import { INotificationContext } from '@interfaces/contexts/NotificationContext';

export const NotificationContext = createContext<INotificationContext>((n) => n);
