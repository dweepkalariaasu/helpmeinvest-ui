import { createAction, props } from "@ngrx/store";


export const saveNames = createAction('[Application] save Names', props<{ firstName: string, lastName: string }>());
export const saveDob = createAction('[Application] Save Date of Birth', props<{ dob: string }>());
export const saveAnnualIncome = createAction('[Application] Save Annual Income', props<{ annualIncome: number }>());