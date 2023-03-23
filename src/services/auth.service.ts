import { AxiosBaseService } from './AxiosBaseService';
import { AxiosInstance } from 'axios';
import { IAuthService } from '@interfaces/services/IAuthService';
import { IUser } from '@interfaces/entities/user/IUser';
import { SuccessfulResponse } from '@interfaces/other/SuccessfulResponse';
import { AuthCredentials } from '@interfaces/other/AuthCredentials';
import { apiInstance } from '@services/api/apiInstance';
import { ServiceResult } from '@interfaces/services/ServiceResult';
import { SignUpData } from '@interfaces/requestData/SignUpData';

class AuthService extends AxiosBaseService implements IAuthService {
  protected readonly apiInstance: AxiosInstance;
  protected readonly resource: string;

  constructor(axiosInstance: AxiosInstance, resource = 'users') {
    super();
    this.apiInstance = axiosInstance;
    this.resource = resource;
  }

  public signIn(authCredentials: AuthCredentials): ServiceResult<IUser> {
    return this.apiInstance
      .post<SuccessfulResponse<IUser>>(`${this.resource}/sign-in`, authCredentials)
      .then(this.successHandler)
      .catch(this.errorHandler);
  }

  public signUp(signUpData: SignUpData): ServiceResult<IUser> {
    return this.apiInstance
      .post<SuccessfulResponse<IUser>>(`${this.resource}/sign-up`, signUpData)
      .then(this.successHandler)
      .catch(this.errorHandler);
  }

  public refresh(): ServiceResult<IUser> {
    return this.apiInstance
      .post<SuccessfulResponse<IUser>>(`${this.resource}/refresh`, {})
      .then(this.successHandler)
      .catch(this.errorHandler);
  }

  public signOut() {
    return this.apiInstance
      .post<SuccessfulResponse<string>>(`${this.resource}/sign-out`, {})
      .then(this.successHandler)
      .catch(this.errorHandler);
  }
}

export const authService = new AuthService(apiInstance, 'users');
