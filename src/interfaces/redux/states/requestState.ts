import { RequestStatus } from '@interfaces/redux/other/requestStatus';

type RequestError = {
  status: number;
  type: string;
  message: string;
};
interface RequestState {
  requestStatus: RequestStatus;
  requestError: RequestError;
}

export type { RequestError, RequestState };
