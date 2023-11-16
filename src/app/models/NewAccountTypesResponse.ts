import { AccountType } from "../enums/account-type.enum";
import { NewAccountType } from "./NewAccountType";

export interface NewAccountTypesResponse {
    selectedAccountType: AccountType;
    additionalAccountType: AccountType;
    accountTypes: Array<NewAccountType>;
}