import { ApiResponse } from '@interfaces/services/ApiResponse';
import { ErrorBody } from '@interfaces/services/ErrorBody';

export type ServiceResult<T = any> = Promise<ApiResponse<T | ErrorBody>>;
