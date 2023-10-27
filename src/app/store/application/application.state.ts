import { AccountType } from "../enums/account-type.enum";
import { RegistrationType } from "../enums/registration-type.enum";

export interface ApplicationState {
    appId: string | undefined;
    promoCodes: string[];
    accountType: AccountType | undefined;
    registrationType: RegistrationType | undefined;
}
