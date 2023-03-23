import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { userInitialState } from '@redux/user/user.initialState';
import { RequestStatus } from '@interfaces/redux/other/requestStatus';
import { IUser } from '@interfaces/entities/user/IUser';
import {
  requestFulfilled,
  requestPending,
  requestRejected,
} from '@redux/utils/request.handlers';
import { UserState } from '@interfaces/redux/states/user.state';

const resetState = (state: UserState) => {
  state.user = {
    id: '',
    name: '',
    email: '',
    roles: [],
  };
  state.requestStatus = RequestStatus.idle;
  state.requestError = {
    status: 0,
    type: '',
    message: '',
  };
  state.isAuthenticated = false;
};

const userSlice = createSlice({
  name: `user`,
  initialState: userInitialState,
  reducers: {
    signInPending: requestPending,
    signInFulfilled: requestFulfilled(
      (state: UserState, { payload }: PayloadAction<IUser>) => {
        state.isAuthenticated = true;
        state.user = payload;
      }
    ),
    signInRejected: requestRejected((state: UserState) => {
      state.isAuthenticated = false;
    }),
    tokenRefreshRejected: requestRejected((state: UserState) => {
      state.isAuthenticated = false;
      state.user = {
        id: '',
        name: '',
        email: '',
        roles: [],
      };
    }),
    signOut: resetState,
    resetState: resetState,
  },
});

export { userSlice };
