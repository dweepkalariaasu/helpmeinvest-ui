import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AccountType } from '../../enums/account-type.enum';
import { RegistrationType } from '../../enums/registration-type.enum';
import { ExistingAccount } from '../../models/ExistingAccount';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-existing-accounts',
  templateUrl: './existing-accounts.component.html',
  styleUrls: ['./existing-accounts.component.css']
})
export class ExistingAccountsComponent {

  data!: Array<ExistingAccount>;
  selectedCard: string = '';

  constructor(private router: Router,
    private accountService: AccountService) {
    this.accountService.getExistingAccounts('786420').subscribe(a => this.data = a);
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
}
