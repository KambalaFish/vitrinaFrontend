import { UserRoles } from '@interfaces/entities/user/UserRoles';
import { IEntityId } from '@interfaces/entities/IEntityId';

export interface IUser extends IEntityId {
  name: string;
  email: string;
  roles: UserRoles[];
}
