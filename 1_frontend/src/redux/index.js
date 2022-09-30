import { combineReducers } from 'redux';

import{userSignupReducer, 
    userGetReducer,
     userDeleteReducer,
      userUpdateReducer} from'./reducer/userReducer.js';

export const reducer = combineReducers ({
signup: userSignupReducer,
get: userGetReducer,
delete: userDeleteReducer,
update: userUpdateReducer
})
