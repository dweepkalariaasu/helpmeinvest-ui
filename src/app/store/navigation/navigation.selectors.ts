import { createSelector } from '@ngrx/store';

import { MainState } from '../main.state';
import { NavigationState } from './navigation.state';

export const navigationSelector = (state: MainState) => state.navigation;

export const currentPageSelector = createSelector(
  navigationSelector,
  (state: NavigationState) => state.currentPage
);

export const nextPageSelector = createSelector(
  navigationSelector,
  (state: NavigationState) => state.nextPage
);

export const previousPageSelector = createSelector(
  navigationSelector,
  (state: NavigationState) => state.previousPage
);