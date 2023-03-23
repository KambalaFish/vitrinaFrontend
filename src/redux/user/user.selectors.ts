import { AppState } from '@redux/store';

const selectUser = (state: AppState) => state.user.user;
const selectUserRequestStatus = (state: AppState) => state.user.requestStatus;
const selectUserRequestError = (state: AppState) => state.user.requestError;
const selectIsUserAuthenticated = (state: AppState) => state.user.isAuthenticated;

export {
  selectUser,
  selectUserRequestError,
  selectUserRequestStatus,
  selectIsUserAuthenticated,
};
