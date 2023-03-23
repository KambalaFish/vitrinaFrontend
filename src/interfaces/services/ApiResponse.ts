import { ErrorBody } from '@interfaces/services/ErrorBody';

export interface ApiResponse<T> {
  status: number;
  data: T;
}

const isApiResponse = (obj: unknown): obj is ApiResponse<any> => {
  return (
    (obj as ApiResponse<any>).status !== undefined &&
    (obj as ApiResponse<any>).data !== undefined
  );
};

const isApiResponseErrorBody = (obj: unknown): obj is ApiResponse<ErrorBody> => {
  if (isApiResponse(obj)) {
    return (
      obj.data.error !== undefined &&
      obj.data.error.type !== undefined &&
      obj.data.error.message !== undefined
    );
  }
  return false;
};

export { isApiResponse, isApiResponseErrorBody };
