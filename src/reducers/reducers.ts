import { combineReducers, Reducer } from "redux";
import { UserState } from "../models/userModels";
import UserAuth from "../models/authModels";
import userAuthReducer from "../slices/authSlice";
import userReducer from "../slices/userSlice";

// Define the shape of your root state by combining individual state slices
export interface RootState {
  userDetails: UserState;
  authUser: UserAuth;
  // Add more slices as needed
}

// Create a root reducer by combining individual reducers
const rootReducer: Reducer<RootState> = combineReducers<RootState>({
  userDetails: userReducer,
  authUser: userAuthReducer,
  // Add more reducers here if you have them
});

export default rootReducer;
