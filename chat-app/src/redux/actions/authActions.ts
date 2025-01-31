import { createAction } from '@reduxjs/toolkit';

export const AuthActionTypes = {
    login: 'auth/login',
    logout: 'auth/logout',
};

// Action Creators
const login = createAction<string>(AuthActionTypes.login);
const logout = createAction(
  AuthActionTypes.logout
);

export const AuthActions = {
  login,
  logout
};
