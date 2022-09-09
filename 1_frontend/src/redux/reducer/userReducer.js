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
} from "../constants/userConstants";

export const userSignupReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_SIGNUP_REQUEST:
      return { loading: true };
    case USER_SIGNUP_SUCCESS:
      return { loading: false, user: action.payload };
    case USER_SIGNUP_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};


export const userGetReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_GETUSER_REQUEST:
      return { loading: true };
    case USER_GETUSER_SUCCESS:
      return { loading: false, user: action.payload };
    case USER_GETUSER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const userDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_DELETEUSER_REQUEST:
      return { loading: true };
    case USER_DELETEUSER_SUCCESS:
      return { loading: false, user: action.payload };
    case USER_DELETEUSER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};