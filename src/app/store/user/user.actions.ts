import { createAction, props } from '@ngrx/store';

export const saveIsAuthenticated = createAction('[User] Save IsAuthenticated', props<{ isAuthenticated: boolean }>());
export const saveIsEnroll = createAction('[User] Save IsEnroll', props<{ isEnroll: boolean }>());
export const saveIsClient = createAction('[User] Save IsClient', props<{ isClient: boolean }>());