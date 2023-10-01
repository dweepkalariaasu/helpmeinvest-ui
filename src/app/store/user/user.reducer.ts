import { Action, createReducer, on } from "@ngrx/store";
import { UserState } from "./user.state";
import * as actions from './user.actions';

export const initialUserState: UserState = {
  firstName: '',
  lastName: '',
  dateOfBirth: '',
  annualIncome: 0
};

export const _userReducer = createReducer(initialUserState,
  on(actions.saveNames, (state: UserState, payload) => {
    const newState: UserState = {
      ...state,
      firstName: payload.firstName,
      lastName: payload.lastName
    }
    return newState;
  }),
  on(actions.saveDob, (state: UserState, payload) => {
    const newState: UserState = {
      ...state,
      dateOfBirth: payload.dob
    }
    return newState;
  }),
  on(actions.saveAnnualIncome, (state: UserState, payload) => {
    const newState: UserState = {
      ...state,
      annualIncome: payload.annualIncome
    }
    return newState;
  }),
);


export function UserReducer(state: UserState, action: Action): UserState {
  return _userReducer(state, action);
}