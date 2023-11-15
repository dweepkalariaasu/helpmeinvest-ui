import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AccountType } from 'src/app/enums/account-type.enum';
import { RegistrationType } from 'src/app/enums/registration-type.enum';

@Component({
  selector: 'app-existing-accounts',
  templateUrl: './existing-accounts.component.html',
  styleUrls: ['./existing-accounts.component.css']
})
export class ExistingAccountsComponent {

  data: Array<ExistingAccountsData>;
  selectedCard: string = '';

  constructor(private router: Router) {
    this.data = this.getData();
  }

  selectCard(id: string) {
    this.selectedCard = id;
  }
  
  public next(): void {
    alert('from this point onwards user will continue on account-enrollment application, out of scope for this project');
  }

  public back(): void {
    this.router.navigate(['open-or-enroll']);
  }

  private getData(): Array<ExistingAccountsData> {
    var data: Array<ExistingAccountsData> = [
      {
        id: '1',
        accountId: '...678',
        accountType: AccountType.Brokerage,
        registrationType: RegistrationType.individual,
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
        balance: 4231.23,
        unrealizedGain: 3242.11,
        isEligible: false,
        inEligibleReason: 'An ineligible account type.',
        imagePath: '/assets/living-trust.svg'
      }
    ];

    return data;
  }
  
}

export interface ExistingAccountsData {
  id: string;
  accountId: string;
  accountType: AccountType;
  registrationType: RegistrationType;
  balance: number;
  unrealizedGain: number;
  isEligible: boolean;
  inEligibleReason?: string;
  imagePath: string;
}
