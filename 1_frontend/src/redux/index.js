import { combineReducers } from 'redux';

import{userSignupReducer, userGetReducer, userDeleteReducer} from'./reducer/userReducer.js';

export const reducer = combineReducers ({
signup: userSignupReducer,
get: userGetReducer,
delete: userDeleteReducer
})
