import { createAction, props } from '@ngrx/store';
import { ChannelType } from '../../enums/channel-type.enum';
import { AccountType } from '../../enums/account-type.enum';
import { RegistrationType } from '../../enums/registration-type.enum';
import { CustomerType } from '../../enums/customer-type.enum';
import { TaxFilingStatus } from '../../enums/tax-filing-status.enum';
import { OperationType } from '../../enums/operation-type.enum';

export const saveChannelType = createAction('[Application] Save ChannelType', props<{ channelType: ChannelType }>());
export const saveAccountType = createAction('[Application] Save AccountType', props<{ accountType: AccountType }>());
export const saveRegistrationType = createAction('[Application] Save RegistrationType', props<{ registrationType: RegistrationType }>());
export const saveReferenceId = createAction('[Application] Save ReferenceId', props<{ referenceId: string }>());
export const saveOperationType = createAction('[Application] Save OperationType', props<{ operationType: OperationType }>());

export const saveCustomerId = createAction('[Application] Save CustomerId', props<{ customerId: number }>());
export const saveCustomerType = createAction('[Application] Save CustomerType', props<{ customerType: CustomerType }>());
export const saveDateOfBirth = createAction('[Application] Save DateOfBirth', props<{ dateOfBirth: Date }>());
export const saveGrossIncome = createAction('[Application] Save GrossIncome', props<{ grossIncome: number }>());
export const saveTaxStatus = createAction('[Application] Save TaxStatus', props<{ taxStatus: TaxFilingStatus }>());
