import { TaxFilingStatus } from '../../enums/tax-filing-status.enum';
import { AccountType } from '../../enums/account-type.enum';
import { CustomerType } from '../../enums/customer-type.enum';
import { RegistrationType } from '../../enums/registration-type.enum';
import { OperationType } from '../../enums/operation-type.enum';
import { ChannelType } from '../../enums/channel-type.enum';

export interface ApplicationState {
    referenceId: string | undefined;
    channelType: ChannelType | undefined;
    accountType: AccountType | undefined;
    registrationType: RegistrationType | undefined;
    operationType: OperationType | undefined;
    customerInfo: CustomerInfo | undefined;
}

export interface CustomerInfo {
    CustomerId: number;
    CustomerType: CustomerType;
    DateOfBirth: Date;
    AdjustedGrossIncome: number;
    TaxFilingStatus: TaxFilingStatus;
}
