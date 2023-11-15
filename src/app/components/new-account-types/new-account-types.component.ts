import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountType } from '../../enums/account-type.enum';
import { RegistrationType } from '../../enums/registration-type.enum';
import { NewAccountType } from '../../models/NewAccountType';
import { AccountService } from 'src/app/services/account.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-new-account-types',
  templateUrl: './new-account-types.component.html',
  styleUrls: ['./new-account-types.component.css']
})
export class NewAccountTypesComponent implements OnInit {

  index = 0;
  accountType = AccountType.Brokerage;
  AccountTypeEnum = AccountType;
  // accountTypeData: Array<AccountTypeData> = undefined!;
  selectedCard: RegistrationType = undefined!;
  data: any;

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
    (this.index === 0) ? (this.index = 1) : (this.index = 0);
  }

  public getAccountTypes(): any {
    this.accountService.getNewAccounts().subscribe(a => {
      this.data = Object.values(a);
    });
  }


}

