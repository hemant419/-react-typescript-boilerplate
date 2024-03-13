import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import UserAuth from '../models/authModels';

const initialState: UserAuth = {
  isAuthenticated: false,
  error: null,
};

const userAuthSlice = createSlice({
  name: 'userAuth',
  initialState,
  reducers: {
    loginSuccess: (state) => {
      state.isAuthenticated = true;
      state.error = null;
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      state.isAuthenticated = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.error = null;
    },
  },
});

export const { loginSuccess, loginFailure, logout } = userAuthSlice.actions;

export default userAuthSlice.reducer;