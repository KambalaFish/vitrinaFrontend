import type { AuthCredentials } from '@interfaces/other/AuthCredentials';
import { IUser } from '@interfaces/entities/user/IUser';
import { ServiceResult } from '@interfaces/services/ServiceResult';
import { SignUpData } from '@interfaces/services/requests/SignUpData';

export interface IAuthService {
  signIn(authCredentials: AuthCredentials): ServiceResult<IUser>;
  signUp(signUpData: SignUpData): ServiceResult<IUser>;

  refresh(): ServiceResult<IUser>;
}
