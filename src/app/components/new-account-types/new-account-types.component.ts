import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountType } from '../../enums/account-type.enum';
import { RegistrationType } from '../../enums/registration-type.enum';
import { NewAccountType } from '../../models/NewAccountType';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-new-account-types',
  templateUrl: './new-account-types.component.html',
  styleUrls: ['./new-account-types.component.css']
})
export class NewAccountTypesComponent implements OnInit {

  accountType = AccountType.Retirement;
  additionalAccountType = AccountType.Brokerage;
  AccountTypeEnum = AccountType;
  // accountTypeData: Array<AccountTypeData> = undefined!;
  selectedCard: RegistrationType = undefined!;
  data: Array<NewAccountType> | undefined;

  constructor(private router: Router,
    private accountService: AccountService) {
  }

  ngOnInit(): void {
    this.getAccountTypes();
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
    const buffer = this.accountType;
    this.accountType = this.additionalAccountType;
    this.additionalAccountType = buffer;
  }

  public getAccountTypes(): void {
    this.accountService.getNewAccountTypes().subscribe(a => {
      this.data = a.accountTypes;
      this.accountType = a.selectedAccountType;
      this.additionalAccountType = a.additionalAccountType;
    });
  }


}

