import { Action, createReducer, on } from '@ngrx/store';
import { UserState } from './user.state';
import * as actions from './user.actions';

export const initialUserState: UserState = {
  isAuthenticated: undefined,
  isEnroll: undefined,
  isClient: undefined
};

export const _userReducer = createReducer(initialUserState,
  on(actions.saveIsAuthenticated, (state: UserState, payload) => {
    const newState: UserState = {
      ...state,
      isAuthenticated: payload.isAuthenticated
    }
    return newState;
  }),
  on(actions.saveIsEnroll, (state: UserState, payload) => {
    const newState: UserState = {
      ...state,
      isEnroll: payload.isEnroll,
    }
    return newState;
  }),
  on(actions.saveIsClient, (state: UserState, payload) => {
    const newState: UserState = {
      ...state,
      isClient: payload.isClient,
    }
    return newState;
  }),
);


export function UserReducer(state: UserState, action: Action): UserState {
  return _userReducer(state, action);
}