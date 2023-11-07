import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountType } from 'src/app/store/enums/account-type.enum';
import { RegistrationType } from 'src/app/store/enums/registration-type.enum';

@Component({
  selector: 'app-new-account-types',
  templateUrl: './new-account-types.component.html',
  styleUrls: ['./new-account-types.component.css']
})
export class NewAccountTypesComponent implements OnInit {

  accountType = AccountType.brokerage;
  AccountTypeEnum = AccountType;
  // accountTypeData: Array<AccountTypeData> = undefined!;
  selectedCard: RegistrationType = undefined!;

  constructor(private router: Router) {

  }

  ngOnInit(): void {
    // accountTypeData = this.getAccountTypes();
  }

  selectCard(regType: RegistrationType) {
    this.selectedCard = regType;
  }


  public next(): void {
    alert('from this point onwards user will continue on account-open application, out of scope for this project');
  }

  public back(): void {
    this.router.navigate(['open-or-enroll']);
  }

  public switchAccountType() {
    if (this.accountType == AccountType.brokerage) {
      this.accountType = AccountType.retirement;
    } else {
      this.accountType = AccountType.brokerage;
    }
  }

  public getAccountTypes(accountType: AccountType, isCommon: boolean): Array<AccountTypeData> {
    const allData = this.getAllAccountData();
    return allData.filter(dt => dt.accountType === accountType && dt.isCommon === isCommon).sort(a => a.rank);
  }

  private getAllAccountData(): Array<AccountTypeData> {
    return [
      {
        imagePath: '/assets/ira.svg',
        accountType: AccountType.retirement,
        registrationType: RegistrationType.traditional,
        regTypeDescription: 'pages.new-account-types.trad-ira-desc',
        isCommon: true,
        rank: 1
      },
      {
        imagePath: '/assets/ira.svg',
        accountType: AccountType.retirement,
        registrationType: RegistrationType.roth,
        regTypeDescription: 'pages.new-account-types.roth-ira-desc',
        isCommon: true,
        rank: 2
      },
      {
        imagePath: '/assets/ira.svg',
        accountType: AccountType.retirement,
        registrationType: RegistrationType.rollover,
        regTypeDescription: 'pages.new-account-types.roll-ira-desc',
        isCommon: true,
        rank: 3
      },
      {
        imagePath: '/assets/ira.svg',
        accountType: AccountType.retirement,
        registrationType: RegistrationType.inherited,
        regTypeDescription: 'pages.new-account-types.inh-ira-desc',
        isCommon: false,
        rank: 4
      },
      {
        imagePath: '/assets/ira.svg',
        accountType: AccountType.retirement,
        registrationType: RegistrationType.minor,
        regTypeDescription: 'pages.new-account-types.inh-min-ira-desc',
        isCommon: false,
        rank: 5
      },
      {
        imagePath: '/assets/ira.svg',
        accountType: AccountType.retirement,
        registrationType: RegistrationType.sep,
        regTypeDescription: 'pages.new-account-types.sep-ira-desc',
        isCommon: false,
        rank: 6
      },
      {
        imagePath: '/assets/ira.svg',
        accountType: AccountType.retirement,
        registrationType: RegistrationType.simple,
        regTypeDescription: 'pages.new-account-types.simple-ira-desc',
        isCommon: false,
        rank: 7
      },
      {
        imagePath: '/assets/brokerage.svg',
        accountType: AccountType.brokerage,
        registrationType: RegistrationType.individual,
        regTypeDescription: 'pages.new-account-types.ind-brk-desc',
        isCommon: true,
        rank: 8
      },
      {
        imagePath: '/assets/brokerage.svg',
        accountType: AccountType.brokerage,
        registrationType: RegistrationType.joint,
        regTypeDescription: 'pages.new-account-types.joint-brk-desc',
        isCommon: true,
        rank: 9
      },
      {
        imagePath: '/assets/custodial.png',
        accountType: AccountType.brokerage,
        registrationType: RegistrationType.custodial,
        regTypeDescription: 'pages.new-account-types.cust-brk-desc',
        isCommon: false,
        rank: 10
      },
      {
        imagePath: '/assets/living-trust.svg',
        accountType: AccountType.brokerage,
        registrationType: RegistrationType.livingTrust,
        regTypeDescription: 'pages.new-account-types.lt-brk-desc',
        isCommon: false,
        rank: 10
      },
      {
        imagePath: '/assets/living-trust.svg',
        accountType: AccountType.brokerage,
        registrationType: RegistrationType.livingTrustJoint,
        regTypeDescription: 'pages.new-account-types.lt-jt-brk-desc',
        isCommon: false,
        rank: 10
      }
    ];
  }
}

export interface AccountTypeData {
  accountType: AccountType;
  registrationType: RegistrationType;
  regTypeDescription: string;
  isCommon: boolean;
  rank: number;
  imagePath: string;
}
