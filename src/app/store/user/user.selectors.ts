import { createSelector } from '@ngrx/store';
import { UserState } from './user.state';
import { MainState } from '../main.state';

export const userSelector = (state: MainState) => state.user;

export const isAuthenticatedSelector = createSelector(
  userSelector,
  (state: UserState) => state.isAuthenticated
);

export const isEnrollSelector = createSelector(
  userSelector,
  (state: UserState) => state.isEnroll
);

export const isClientSelector = createSelector(
  userSelector,
  (state: UserState) => state.isClient
);