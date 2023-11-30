import { PageName } from '../../enums/page-name.enum';

export interface NavigationState {
    currentPage: PageName | undefined;
    nextPage: PageName | undefined;
    previousPage: PageName | undefined
}
