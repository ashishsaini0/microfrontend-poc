
import { createReducer } from '@reduxjs/toolkit';
import { AuthActions } from '../actions/authActions';

// Initial state
const initialState = {
  isAuthenticated: false,
  userType: ''
};

// Define reducer
export const authReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(AuthActions.login, (state, action) => {
      state.isAuthenticated = true;
      state.userType = action.payload;
    })
    .addCase(AuthActions.logout, (state) => {
      state.isAuthenticated = false;
    });
});
