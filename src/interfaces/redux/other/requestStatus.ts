export enum RequestStatus {
  idle = 'idle',
  pending = 'pending',
  succeeded = 'succeeded',
  failed = 'failed',
}

const isLoading = (reqStatus: RequestStatus) =>
  reqStatus === RequestStatus.idle || reqStatus === RequestStatus.pending;

const isSuccessfulRequest = (reqStatus: RequestStatus) =>
  reqStatus === RequestStatus.succeeded;
const isFailedRequest = (reqStatus: RequestStatus) => reqStatus === RequestStatus.failed;

export { isLoading, isSuccessfulRequest, isFailedRequest };
