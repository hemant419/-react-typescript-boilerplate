import { createStore, applyMiddleware, Store, Middleware, AnyAction } from "redux";
import thunk, { ThunkAction, ThunkMiddleware } from "redux-thunk";
import rootReducer, { RootState } from "../reducers/reducers";

// Define the type for your Redux store state
export type AppState = RootState;

// Create a type for the store with state and dispatch
export type AppStore = Store<AppState, AnyAction>;

// Create a type for the middleware
const middlewares: Middleware[] = [thunk as ThunkMiddleware<AppState, AnyAction>];

// Create the Redux store with the rootReducer and middleware
const store: AppStore = createStore(rootReducer, applyMiddleware(...middlewares));

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AnyAction
>;

export default store;
