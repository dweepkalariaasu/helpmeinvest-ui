import { ApplicationState } from './application/application.state';
import { ApplicationReducer } from './application/application.reducer';
import { UserState } from './user/user.state';
import { UserReducer } from './user/user.reducer';
import { NavigationState } from './navigation/navigation.state';
import { NavigationReducer } from './navigation/navigation.reducer';

export interface MainState {
    application: ApplicationState;
    user: UserState;
    navigation: NavigationState;
}

export const stateReducerMappings: any = {
    application: ApplicationReducer,
    user: UserReducer,
    navigation: NavigationReducer
}