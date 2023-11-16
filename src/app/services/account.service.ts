import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { NewAccountType } from '../models/NewAccountType';
import { AccountType } from '../enums/account-type.enum';
import { RegistrationType } from '../enums/registration-type.enum';
import { MainState } from '../store/main.state';
import { referenceIdSelector } from '../store/application/application.selectors';
import { environment } from '../../environments/environment';
import { ExistingAccount } from '../models/ExistingAccount';
import { NewAccountTypesResponse } from '../models/NewAccountTypesResponse';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  referenceId: string | undefined = '654c536d587472b31db8c736';

  constructor(store: Store<MainState>,
    private httpClient: HttpClient) {
    // store.select(referenceIdSelector).subscribe(a => this.referenceId = a);
  }

  public getNewAccountTypes(): Observable<NewAccountTypesResponse> {
    if (this.referenceId) {
      const url = environment.hmiApiUrl + 'account/new?referenceId=' + this.referenceId;
      return this.httpClient.get(url).pipe(map(a => {
        var b = a as NewAccountTypesResponse;
        b?.accountTypes.map(c => {
          c.imagePath = this.getImagePaths(c.registrationType);
          c.regTypeTitle = this.getRegTypeTitles(c.registrationType);
          c.regTypeDescription = this.getRegTypeTitles(c.registrationType) + '-desc';
        });
        return b;
      }));
    } else {
      return of({
        selectedAccountType: AccountType.Retirement,
        additionalAccountType: AccountType.Brokerage,
        accountTypes: this.getNewAccountTypesData()
      });
    }
  }

  public getExistingAccounts(customerId: string): Observable<Array<ExistingAccount>> {
    if (customerId) {
      const url = environment.hmiApiUrl + 'account/existing?customerId=' + customerId;
      return this.httpClient.get(url).pipe(map(a => {
        var b = a as Array<ExistingAccount>;
        b.map(c => {
          c.imagePath = this.getImagePaths(c.registrationType);
          c.regTypeTitle = this.getRegTypeTitles(c.registrationType);
        });
        return b;
      }));
    } else {
      return of(this.getExistingAccountsData());
    }
  }

  private getNewAccountTypesData(): Array<NewAccountType> {
    return [
      {
        imagePath: '/assets/ira.svg',
        accountType: AccountType.Retirement,
        registrationType: RegistrationType.traditional,
        regTypeTitle: 'pages.new-account-types.trad-ira',
        regTypeDescription: 'pages.new-account-types.trad-ira-desc',
        isCommon: true,
        rank: 1
      },
      {
        imagePath: '/assets/ira.svg',
        accountType: AccountType.Retirement,
        registrationType: RegistrationType.roth,
        regTypeTitle: 'pages.new-account-types.roth-ira',
        regTypeDescription: 'pages.new-account-types.roth-ira-desc',
        isCommon: true,
        rank: 2
      },
      {
        imagePath: '/assets/ira.svg',
        accountType: AccountType.Retirement,
        registrationType: RegistrationType.rollover,
        regTypeTitle: 'pages.new-account-types.roll-ira',
        regTypeDescription: 'pages.new-account-types.roll-ira-desc',
        isCommon: true,
        rank: 3
      },
      {
        imagePath: '/assets/ira.svg',
        accountType: AccountType.Retirement,
        registrationType: RegistrationType.inherited,
        regTypeTitle: 'pages.new-account-types.inh-ira',
        regTypeDescription: 'pages.new-account-types.inh-ira-desc',
        isCommon: false,
        rank: 4
      },
      {
        imagePath: '/assets/ira.svg',
        accountType: AccountType.Retirement,
        registrationType: RegistrationType.minor,
        regTypeTitle: 'pages.new-account-types.inh-min-ira',
        regTypeDescription: 'pages.new-account-types.inh-min-ira-desc',
        isCommon: false,
        rank: 5
      },
      {
        imagePath: '/assets/ira.svg',
        accountType: AccountType.Retirement,
        registrationType: RegistrationType.sep,
        regTypeTitle: 'pages.new-account-types.sep-ira',
        regTypeDescription: 'pages.new-account-types.sep-ira-desc',
        isCommon: false,
        rank: 6
      },
      {
        imagePath: '/assets/ira.svg',
        accountType: AccountType.Retirement,
        registrationType: RegistrationType.simple,
        regTypeTitle: 'pages.new-account-types.simple-ira',
        regTypeDescription: 'pages.new-account-types.simple-ira-desc',
        isCommon: false,
        rank: 7
      },
      {
        imagePath: '/assets/brokerage.svg',
        accountType: AccountType.Brokerage,
        registrationType: RegistrationType.individual,
        regTypeTitle: 'pages.new-account-types.ind-brk',
        regTypeDescription: 'pages.new-account-types.ind-brk-desc',
        isCommon: true,
        rank: 8
      },
      {
        imagePath: '/assets/brokerage.svg',
        accountType: AccountType.Brokerage,
        registrationType: RegistrationType.joint,
        regTypeTitle: 'pages.new-account-types.joint-brk',
        regTypeDescription: 'pages.new-account-types.joint-brk-desc',
        isCommon: true,
        rank: 9
      },
      {
        imagePath: '/assets/custodial.png',
        accountType: AccountType.Brokerage,
        registrationType: RegistrationType.custodial,
        regTypeTitle: 'pages.new-account-types.cust-brk',
        regTypeDescription: 'pages.new-account-types.cust-brk-desc',
        isCommon: false,
        rank: 10
      },
      {
        imagePath: '/assets/living-trust.svg',
        accountType: AccountType.Brokerage,
        registrationType: RegistrationType.livingTrust,
        regTypeTitle: 'pages.new-account-types.lt-brk',
        regTypeDescription: 'pages.new-account-types.lt-brk-desc',
        isCommon: false,
        rank: 11
      },
      {
        imagePath: '/assets/living-trust.svg',
        accountType: AccountType.Brokerage,
        registrationType: RegistrationType.livingTrustJoint,
        regTypeTitle: 'pages.new-account-types.lt-jt-brk',
        regTypeDescription: 'pages.new-account-types.lt-jt-brk-desc',
        isCommon: false,
        rank: 12
      }
    ];
  }

  private getExistingAccountsData(): Array<ExistingAccount> {
    var data: Array<ExistingAccount> = [
      {
        id: '1',
        accountId: '...678',
        accountType: AccountType.Brokerage,
        registrationType: RegistrationType.individual,
        regTypeTitle: 'pages.new-account-types.ind-brk',
        balance: 1234.56,
        unrealizedGain: 12345.67,
        isEligible: true,
        imagePath: '/assets/brokerage.svg'
      },
      {
        id: '2',
        accountId: '...234',
        accountType: AccountType.Retirement,
        registrationType: RegistrationType.traditional,
        regTypeTitle: 'pages.new-account-types.trad-ira',
        balance: 1111.11,
        unrealizedGain: 0,
        isEligible: true,
        imagePath: '/assets/ira.svg'
      },
      {
        id: '3',
        accountId: '...222',
        accountType: AccountType.Brokerage,
        registrationType: RegistrationType.custodial,
        regTypeTitle: 'pages.new-account-types.cust-brk',
        balance: 3423.23,
        unrealizedGain: 34212.23,
        isEligible: false,
        inEligibleReason: 'A transfer of account is in progress. Please wait for the transfer to complete.',
        imagePath: '/assets/custodial.png'
      },
      {
        id: '4',
        accountId: '...333',
        accountType: AccountType.Brokerage,
        registrationType: RegistrationType.livingTrust,
        regTypeTitle: 'pages.new-account-types.lt-brk',
        balance: 4231.23,
        unrealizedGain: 3242.11,
        isEligible: false,
        inEligibleReason: 'An ineligible account type.',
        imagePath: '/assets/living-trust.svg'
      }
    ];

    return data;
  }

  private getImagePaths(regType: RegistrationType): string {

    switch (regType) {
      case RegistrationType.traditional:
      case RegistrationType.rollover:
      case RegistrationType.roth:
      case RegistrationType.inherited:
      case RegistrationType.minor:
      case RegistrationType.sep:
      case RegistrationType.simple:
        return 'assets/ira.svg'
      case RegistrationType.individual:
      case RegistrationType.joint:
        return '/assets/brokerage.svg';
      case RegistrationType.custodial:
        return '/assets/custodial.png';
      case RegistrationType.livingTrust:
      case RegistrationType.livingTrustJoint:
        return '/assets/living-trust.svg';
      default:
        return '/assets/bank.svg';
    }

  }

  private getRegTypeTitles(regType: RegistrationType): string {

    switch (regType) {
      case RegistrationType.traditional:
        return 'pages.new-account-types.trad-ira';
      case RegistrationType.rollover:
        return 'pages.new-account-types.roll-ira';
      case RegistrationType.roth:
        return 'pages.new-account-types.roth-ira';
      case RegistrationType.inherited:
        return 'pages.new-account-types.inh-ira';
      case RegistrationType.minor:
        return 'pages.new-account-types.inh-min-ira';
      case RegistrationType.sep:
        return 'pages.new-account-types.sep-ira';
      case RegistrationType.simple:
        return 'pages.new-account-types.simpler-ira';
      case RegistrationType.individual:
        return 'pages.new-account-types.ind-brk';
      case RegistrationType.joint:
        return 'pages.new-account-types.joint-brk';
      case RegistrationType.custodial:
        return 'pages.new-account-types.cust-brk';
      case RegistrationType.livingTrust:
        return 'pages.new-account-types.lt-brk'
      case RegistrationType.livingTrustJoint:
        return 'pages.new-account-types.lt-jt-brk';
      default:
        return 'pages.new-account-types.lt-brk';
    }

  }
}
