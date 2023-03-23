import type { AxiosResponse, AxiosError } from 'axios';
import type { SuccessfulResponse } from '@interfaces/services/responses/SuccessfulResponse';
import type { ApiResponse } from '@interfaces/services/ApiResponse';
import type { ErrorBody } from '@interfaces/services/ErrorBody';
import { ErrorResponse } from '@interfaces/services/responses/ErrorResponse';
import { StatusCodes } from '@utils/statusCodes';
export class AxiosBaseService {
  protected successHandler<T>(
    response: AxiosResponse<SuccessfulResponse<T>>
  ): ApiResponse<T> {
    return {
      data: response.data.result,
      status: response.status,
    };
  }

  protected errorHandler(error: AxiosError<ErrorResponse>): ApiResponse<ErrorBody> {
    if (error.response) {
      throw {
        status: error.response.status,
        data: {
          error: {
            type: error.response.data.errorType,
            message: error.response?.data.errorMessage,
          },
        },
      };
    } else if (error.request) {
      throw {
        status: StatusCodes.PROCESSING,
        data: {
          error: {
            type: 'No response',
            message: 'The request was made but no response was received',
          },
        },
      };
    } else {
      console.error(`errorHandler error: ${JSON.stringify(error)}`);
      throw error;
    }
  }
}
