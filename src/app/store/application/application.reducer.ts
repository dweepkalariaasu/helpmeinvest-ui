import { Action, createReducer, on } from '@ngrx/store';
import { ApplicationState } from './application.state';
import * as actions from './application.actions';

export const initialState: ApplicationState = {
  referenceId: undefined,
  channelType: undefined,
  accountType: undefined,
  registrationType: undefined,
  operationType: undefined,
  customerInfo: undefined
};

export const _applicationReducer = createReducer(initialState,

  on(actions.saveChannelType, (state: ApplicationState, payload) => {
    const newState: ApplicationState = {
      ...state,
      channelType: payload.channelType
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
  on(actions.saveOperationType, (state: ApplicationState, payload) => {
    const newState: ApplicationState = {
      ...state,
      operationType: payload.operationType
    }
    return newState;
  }),
  on(actions.saveReferenceId, (state: ApplicationState, payload) => {
    const newState: ApplicationState = {
      ...state,
      referenceId: payload.referenceId
    }
    return newState;
  }),
  on(actions.saveCustomerId, (state: ApplicationState, payload) => {
    const newState: ApplicationState = {
      ...state,
      customerInfo: {
        ...state.customerInfo!,
        CustomerId: payload.customerId
      }
    }
    return newState;
  }),
  on(actions.saveCustomerType, (state: ApplicationState, payload) => {
    const newState: ApplicationState = {
      ...state,
      customerInfo: {
        ...state.customerInfo!,
        CustomerType: payload.customerType
      }
    }
    return newState;
  }),
  on(actions.saveDateOfBirth, (state: ApplicationState, payload) => {
    const newState: ApplicationState = {
      ...state,
      customerInfo: {
        ...state.customerInfo!,
        DateOfBirth: payload.dateOfBirth
      }
    }
    return newState;
  }),
  on(actions.saveGrossIncome, (state: ApplicationState, payload) => {
    const newState: ApplicationState = {
      ...state,
      customerInfo: {
        ...state.customerInfo!,
        AdjustedGrossIncome: payload.grossIncome
      }
    }
    return newState;
  }),
  on(actions.saveTaxStatus, (state: ApplicationState, payload) => {
    const newState: ApplicationState = {
      ...state,
      customerInfo: {
        ...state.customerInfo!,
        TaxFilingStatus: payload.taxStatus
      }
    }
    return newState;
  }),
);

export function ApplicationReducer(state: ApplicationState, action: Action): ApplicationState {
  return _applicationReducer(state, action);
}
