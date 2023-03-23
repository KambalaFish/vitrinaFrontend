import { UserState } from '@interfaces/redux/states/user.state';
import { RequestStatus } from '@interfaces/redux/other/requestStatus';
import { userLocalStorage } from '@localStorage/user.localStorage';
import { UserRoles } from '@interfaces/entities/user/UserRoles';
import { requestInitialState } from '@redux/utils/request.initialState';
import type { IUser } from '@interfaces/entities/user/IUser';

const user = userLocalStorage.get();
const userInitialStateContent = {
  user: {
    id: '',
    name: '',
    email: '',
    roles: [] as UserRoles[],
  } as IUser,
  isAuthenticated: false,
  ...requestInitialState,
};
if (user) {
  userInitialStateContent.user = user;
  userInitialStateContent.isAuthenticated = true;
  userInitialStateContent.requestStatus = RequestStatus.succeeded;
}
export const userInitialState: UserState = userInitialStateContent;
