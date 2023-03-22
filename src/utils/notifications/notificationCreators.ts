import { INotification } from '@interfaces/other/INotification';
import { NotificationType } from '@utils/notifications/NotificationType';
import { nanoid } from 'nanoid';

const createErrorNotification = (
  restOfNotification: Pick<INotification, 'message' | 'unmountTimeoutMs'>
): INotification => {
  return {
    id: nanoid(),
    type: NotificationType.error,
    ...restOfNotification,
  };
};

const createSuccessNotification = (
  restOfNotification: Pick<INotification, 'message' | 'unmountTimeoutMs'>
): INotification => {
  return {
    id: nanoid(),
    type: NotificationType.success,
    ...restOfNotification,
  };
};

const createWarningNotification = (
  restOfNotification: Pick<INotification, 'message' | 'unmountTimeoutMs'>
): INotification => {
  return {
    id: nanoid(),
    type: NotificationType.warning,
    ...restOfNotification,
  };
};

const createInfoNotification = (
  restOfNotification: Pick<INotification, 'message' | 'unmountTimeoutMs'>
): INotification => {
  return {
    id: nanoid(),
    type: NotificationType.info,
    ...restOfNotification,
  };
};

export {
  createErrorNotification,
  createSuccessNotification,
  createWarningNotification,
  createInfoNotification,
};
