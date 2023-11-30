import { AccountType } from '../enums/account-type.enum';
import { RegistrationType } from '../enums/registration-type.enum';

export interface ExistingAccount {
    id: string;
    accountId: string;
    accountType: AccountType;
    registrationType: RegistrationType;
    regTypeTitle: string;
    balance: number;
    unrealizedGain: number;
    isEligible: boolean;
    inEligibleReason?: string;
    imagePath: string;
  }