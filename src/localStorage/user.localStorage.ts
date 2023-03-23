import { LocalStorageBase } from '@localStorage/LocalStorageBase';
import { IUser } from '@interfaces/entities/user/IUser';

export const userLocalStorage = new LocalStorageBase<IUser>('user');
