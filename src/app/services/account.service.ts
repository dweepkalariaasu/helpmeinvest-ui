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

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  referenceId: string | undefined;

  constructor(store: Store<MainState>,
    private httpClient: HttpClient) {
    store.select(referenceIdSelector).subscribe(a => this.referenceId = a);
  }

  public getNewAccounts(): Observable<any> {
    if (this.referenceId) {
      const url = environment.hmiApiUrl + 'account/new?referenceId=' + this.referenceId;
      return this.httpClient.get(url).pipe(map(a => {
        console.log(a);
      }));
    } else {
      return of(this.getNewAccountData());
    }
  }


  private getNewAccountData() {
    return {
      [AccountType.Retirement] : [
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
        }],
      [AccountType.Brokerage]: [
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
      ]
    }
  }
}
