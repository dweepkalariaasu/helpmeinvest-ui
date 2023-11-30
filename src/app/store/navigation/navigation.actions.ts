import { createAction, props } from '@ngrx/store';
import { PageName } from '../../enums/page-name.enum';

export const navigate = createAction('[Navigation] navigate');
export const back = createAction('[Navigation] back');
export const saveCurrentPage = createAction('[Navigation] Save CurrentPage', props<{ currentPage: PageName }>());
export const saveNextPage = createAction('[Navigation] Save NextPage', props<{ nextPage: PageName }>());
export const savePreviousPage = createAction('[Navigation] Save PreviousPage', props<{ previousPage: PageName }>());
export const updateNavigationState = createAction('[Navigation] update navigation state');
