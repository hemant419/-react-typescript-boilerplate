import { ThunkDispatch } from "redux-thunk";
import { RootState } from "../reducers/reducers";
import { loginFailure, loginSuccess } from "../slices/authSlice";
import { AnyAction } from "@reduxjs/toolkit";
import { AppThunk } from "../store/store";

// type AppThunkDispatch = ThunkDispatch<RootState, undefined, AnyAction>;

// Async action for simulating login API call
export const userLogin = async (email: string, password: string): Promise<boolean> => {
  return new Promise<boolean>((resolve) => {
    setTimeout(() => {
      if (email === "admin@gmail.com" && password === "admin@123") {
        // Simulate a successful login
        resolve(true);
      } else {
        // Simulate a failed login
        resolve(false);
      }
    }, 1000);
  });
};
