import { Dispatch } from "@reduxjs/toolkit";
import {
  fetchUsers,
  createUser as createUserApi,
  updateUser as updateUserApi,
  deleteUser as deleteUserApi,
} from "../apis/userApi";
import { addUser, updateUser, deleteUser } from "../slices/userSlice";

export const createUser = (userData: any) => async (dispatch: Dispatch) => {
  try {
    const user = await createUserApi(userData);
    dispatch(addUser(user));
  } catch (error) {
    console.log(error);
  }
};

export const updateSingleUser = (userId: number, userData: any) => async (dispatch: Dispatch) => {
  try {
    const user = await updateUserApi(userId, userData);
    dispatch(updateUser(user));
  } catch (error) {
    console.log(error);
  }
};

export const deleteSingleUser = (userId: number) => async (dispatch: Dispatch) => {
  try {
    await deleteUserApi(userId);
    dispatch(deleteUser(userId));
  } catch (error) {
    console.log(error);
  }
};
