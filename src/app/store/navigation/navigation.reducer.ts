import { Action, createReducer, on } from '@ngrx/store';
import { NavigationState } from './navigation.state';
import * as actions from './navigation.actions';

export const initialNavigationState: NavigationState = {
  currentPage: undefined,
  nextPage: undefined,
  previousPage: undefined
};

export const _navigationReducer = createReducer(initialNavigationState,
  on(actions.saveCurrentPage, (state: NavigationState, payload) => {
    const newState: NavigationState = {
      ...state,
      currentPage: payload.currentPage
    }
    return newState;
  }),
  on(actions.saveNextPage, (state: NavigationState, payload) => {
    const newState: NavigationState = {
      ...state,
      nextPage: payload.nextPage,
    }
    return newState;
  }),
  on(actions.savePreviousPage, (state: NavigationState, payload) => {
    const newState: NavigationState = {
      ...state,
      previousPage: payload.previousPage,
    }
    return newState;
  })
);


export function NavigationReducer(state: NavigationState, action: Action): NavigationState {
  return _navigationReducer(state, action);
}