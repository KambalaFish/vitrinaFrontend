import { isApiResponseErrorBody } from '@interfaces/services/ApiResponse';
import { put } from '@redux-saga/core/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { RejectionPayload } from '@interfaces/redux/payloads/rejection.payload';

type RejectFn = (payload: RejectionPayload) => PayloadAction<RejectionPayload>;

export function* requestErrorHandlerWorker(error: unknown, rejector: RejectFn) {
  if (isApiResponseErrorBody(error)) {
    yield put(
      rejector({
        status: error.status,
        type: error.data.error.type,
        message: error.data.error.message,
      })
    );
    return;
  }
  if (error instanceof Error) {
    yield put(
      rejector({
        status: 0,
        type: error.name,
        message: error.message,
      })
    );
    return;
  }
  yield put(
    rejector({
      status: 0,
      type: 'unknown error type',
      message: 'unknown error',
    })
  );
}
