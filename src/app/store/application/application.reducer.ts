import { Action, createReducer, on } from "@ngrx/store";
import { ApplicationState } from "./application.state";
import * as actions from "./application.actions";

export const initialState: ApplicationState = {
  appId: undefined,
  accountType: undefined,
  registrationType: undefined,
  promoCodes: []
};

export const _applicationReducer = createReducer(initialState,
  on(actions.initialize, (state: ApplicationState) => {
    const newState: ApplicationState = {
      ...state,
      appId: guid()
    }
    return newState;
  }),
  on(actions.saveAccountType, (state: ApplicationState, payload) => {
    const newState: ApplicationState = {
      ...state,
      accountType: payload.accountType
    }
    return newState;
  }),
  on(actions.saveRegistrationType, (state: ApplicationState, payload) => {
    const newState: ApplicationState = {
      ...state,
      registrationType: payload.registrationType
    }
    return newState;
  }),
);

export function ApplicationReducer(state: ApplicationState, action: Action): ApplicationState {
  return _applicationReducer(state, action);
}

function guid(): string {
  return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, 
  c => {
    const n = parseInt(c);
    return (n ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> n / 4).toString(16);
  });
}
