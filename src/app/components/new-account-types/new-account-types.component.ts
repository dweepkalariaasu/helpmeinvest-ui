import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AccountType } from '../../enums/account-type.enum';
import { RegistrationType } from '../../enums/registration-type.enum';
import { NewAccountType } from '../../models/NewAccountType';
import { AccountService } from '../../services/account.service';
import { MainState } from '../../store/main.state';
import { custInfoSelector, referenceIdSelector } from 'src/app/store/application/application.selectors';
import { CustomerType } from 'src/app/enums/customer-type.enum';
import { saveRegistrationType } from 'src/app/store/application/application.actions';

@Component({
  selector: 'app-new-account-types',
  templateUrl: './new-account-types.component.html',
  styleUrls: ['./new-account-types.component.css']
})
export class NewAccountTypesComponent implements OnInit {

  accountType = AccountType.Retirement;
  additionalAccountType = AccountType.Brokerage;
  AccountTypeEnum = AccountType;
  selectedCard: RegistrationType = undefined!;
  data: Array<NewAccountType> | undefined;
  referenceId = '656264bc0d77e4a81a2abc33';
  customerType = CustomerType.Prospect;

  constructor(private router: Router,
    private accountService: AccountService,
    private store: Store<MainState>) {
      this.store.select(referenceIdSelector).subscribe(a => this.referenceId = a ?? this.referenceId );
      this.store.select(custInfoSelector).subscribe(a => this.customerType = a?.CustomerType!);
  }

  ngOnInit(): void {
    this.getAccountTypes();
  }

  selectCard(regType: RegistrationType) {
    this.selectedCard = regType;
  }

  public next(): void {
    this.store.dispatch(saveRegistrationType({registrationType: this.selectedCard}));
    alert('Selected AccountType is ' + this.selectedCard + '. From this point onwards user will continue on account-open application, out of scope for this project');
  }

  public back(): void {
    if (this.customerType == CustomerType.Client) {
      this.router.navigate(['open-or-enroll']);
    } else {
      this.router.navigate(['are-you-client']);
    }
  }

  public switchAccountType() {
    const buffer = this.accountType;
    this.accountType = this.additionalAccountType;
    this.additionalAccountType = buffer;
  }

  public getAccountTypes(): void {
    this.accountService.getNewAccountTypes(this.referenceId).subscribe(a => {
      this.data = a.accountTypes;
      this.accountType = a.selectedAccountType;
      this.additionalAccountType = a.additionalAccountType;
    });
  }
}

