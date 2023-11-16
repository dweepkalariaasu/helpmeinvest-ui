import { createSelector } from "@ngrx/store";
import { MainState } from "../main.state";
import { ApplicationState } from "./application.state";

export const applicationSelector = (state: MainState) => state.application;

export const referenceIdSelector = createSelector(
  applicationSelector,
  (state: ApplicationState) => state.referenceId
);

export const custInfoSelector = createSelector(
  applicationSelector,
  (state: ApplicationState) => state.customerInfo
);
