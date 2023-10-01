import { createAction, props } from "@ngrx/store";
import { AccountType } from "../enums/account-type.enum";
import { RegistrationType } from "../enums/registration-type.enum";

export const initialize = createAction('[Application] Initialize');
export const saveAccountType = createAction('[Application] Save AccountType', props<{ accountType: AccountType }>());
export const saveRegistrationType = createAction('[Application] Save RegistrationType', props<{ registrationType: RegistrationType }>());