import {
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAIL,
  USER_GETUSER_REQUEST,
USER_GETUSER_SUCCESS,
USER_GETUSER_FAIL,
USER_DELETEUSER_REQUEST,
USER_DELETEUSER_SUCCESS,
USER_DELETEUSER_FAIL,
USER_UPDATE_REQUEST,
USER_UPDATE_SUCCESS,
USER_UPDATE_FAIL,
} from "../constants/userConstants";

import api from "../../shared/api";

// sing in user 

export const signupUser = (user) => async (dispatch) => {
  try {
    dispatch({ type: USER_SIGNUP_REQUEST });
    
    const data = await api.signup(user);
    console.log('asdasd')

    dispatch({ type: USER_SIGNUP_SUCCESS, payload: data });
console.log(data)
  } catch (error) {
    dispatch({ type: USER_SIGNUP_FAIL, payload: error.message });
  }
};
// show users

export const getUser = () => async (dispatch) => {
  try {
    dispatch({ type: USER_GETUSER_REQUEST });
    
    const data = await api.getUsers();
    console.log('asdasd')

    dispatch({ type: USER_GETUSER_SUCCESS, payload: data });
console.log(data)
  } catch (error) {
    dispatch({ type: USER_GETUSER_FAIL, payload: error.message });
  }
};

//Delete user 

export const deleteUser = () => async (dispatch) => {
  try {
    dispatch({ type: USER_DELETEUSER_REQUEST });
    
    const data = await api.getUsers();
    console.log('asdasd')

    dispatch({ type: USER_DELETEUSER_SUCCESS, payload: data });
console.log(data)
  } catch (error) {
    dispatch({ type: USER_DELETEUSER_FAIL, payload: error.message });
  }
};

// Update user 
export const updateUser = (id, user) => async (dispatch) => {
  try {
    dispatch({ type: USER_UPDATE_REQUEST });

    const data = await api.updateUser(id, user);

    dispatch({ type: USER_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: USER_UPDATE_FAIL, payload: error.message });
  }
};