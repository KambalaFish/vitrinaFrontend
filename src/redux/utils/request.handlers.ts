import { RequestState } from '@interfaces/redux/states/requestState';
import { RequestStatus } from '@interfaces/redux/other/requestStatus';
import { PayloadAction } from '@reduxjs/toolkit';
import { RejectionPayload } from '@interfaces/redux/payloads/rejection.payload';
import { requestInitialState } from '@redux/utils/request.initialState';

const requestPending = <S extends RequestState>(state: S) => {
  state.requestStatus = RequestStatus.pending;
};
const requestRejected =
  <S extends RequestState>(cb: null | ((state: S) => void)) =>
  (state: S, { payload }: PayloadAction<RejectionPayload>) => {
    state.requestStatus = RequestStatus.failed;
    state.requestError = payload;
    if (cb) {
      cb(state);
    }
  };

const requestFulfilled =
  <S extends RequestState, T>(cb: (state: S, action: PayloadAction<T>) => void) =>
  (state: S, action: PayloadAction<T>) => {
    state.requestStatus = RequestStatus.succeeded;
    state.requestError = requestInitialState.requestError;
    cb(state, action);
  };

export { requestPending, requestRejected, requestFulfilled };
