import { AccountType } from '../enums/account-type.enum';
import { RegistrationType } from '../enums/registration-type.enum';

export interface NewAccountType {
  accountType: AccountType;
  registrationType: RegistrationType;
  regTypeTitle: string;
  regTypeDescription: string;
  isCommon: boolean;
  rank: number;
  imagePath: string;
}