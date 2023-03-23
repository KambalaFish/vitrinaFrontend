import { IUser } from '@interfaces/entities/user/IUser';
import { RequestState } from '@interfaces/redux/states/requestState';

export interface UserState extends RequestState {
  user: IUser;
  isAuthenticated: boolean;
}
