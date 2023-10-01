import { ApplicationState } from "./application/application.state";
import { UserState } from "./user/user.state";
import { ApplicationReducer } from "./application/application.reducer";
import { UserReducer } from "./user/user.reducer";

export interface MainState {
    application: ApplicationState;
    user: UserState;
}

export const stateReducerMappings: any = {
    application: ApplicationReducer,
    user: UserReducer
}