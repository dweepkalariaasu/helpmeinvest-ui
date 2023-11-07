import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AccountType } from 'src/app/store/enums/account-type.enum';
import { RegistrationType } from 'src/app/store/enums/registration-type.enum';

@Component({
  selector: 'app-existing-accounts',
  templateUrl: './existing-accounts.component.html',
  styleUrls: ['./existing-accounts.component.css']
})
export class ExistingAccountsComponent {

  constructor(private router: Router) {

  }
  
  public next(): void {
    alert('from this point onwards user will continue on account-enrollment application, out of scope for this project');
  }

  public back(): void {
    this.router.navigate(['open-or-enroll']);
  }
  
}

export interface ExistingAccountsData {
  accountId: string;
  accountNumber: string; //masked account number
  accountType: AccountType;
  registrationType: RegistrationType;
  balance: number;
  unrealizedGain: number;
  minBalanceWarning: boolean;
  imagePath: string;
}
