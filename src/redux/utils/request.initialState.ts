import { RequestState } from '@interfaces/redux/states/requestState';
import { RequestStatus } from '@interfaces/redux/other/requestStatus';

export const requestInitialState: RequestState = {
  requestStatus: RequestStatus.idle,
  requestError: {
    status: 0,
    type: '',
    message: '',
  },
};
