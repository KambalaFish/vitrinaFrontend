import type { Action } from '@redux-saga/types';
import { AuthCredentials } from '@interfaces/other/AuthCredentials';
import { PayloadAction } from '@reduxjs/toolkit';
import { userSlice } from '@redux/user/user.slice';

const TOKEN_REFRESH_REQUEST_TYPE = 'tokenRefreshRequest';
const tokenRefreshRequest = (): Action => {
  return { type: TOKEN_REFRESH_REQUEST_TYPE };
};

const TOKEN_REFRESH_FULFILLED_TYPE = 'tokenRefreshFulfilled';
const tokenRefreshFulfilled = (): Action => {
  return { type: TOKEN_REFRESH_FULFILLED_TYPE };
};

const SIGNIN_REQUEST_TYPE = 'signInRequest';
const signInRequest = (
  authCredentials: AuthCredentials
): PayloadAction<AuthCredentials> => {
  return {
    type: SIGNIN_REQUEST_TYPE,
    payload: authCredentials,
  };
};

const SIGNOUT_REQUEST_TYPE = 'signOutRequest';
const signOutRequest = (): Action => {
  return { type: SIGNOUT_REQUEST_TYPE };
};

export {
  TOKEN_REFRESH_REQUEST_TYPE,
  tokenRefreshRequest,
  TOKEN_REFRESH_FULFILLED_TYPE,
  tokenRefreshFulfilled,
  SIGNIN_REQUEST_TYPE,
  signInRequest,
  SIGNOUT_REQUEST_TYPE,
  signOutRequest,
};

export const userSliceActions = userSlice.actions;
