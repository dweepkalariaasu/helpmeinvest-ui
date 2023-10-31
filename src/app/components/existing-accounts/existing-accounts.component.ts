import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-existing-accounts',
  templateUrl: './existing-accounts.component.html',
  styleUrls: ['./existing-accounts.component.css']
})
export class ExistingAccountsComponent {

  constructor(private router: Router) {

  }
  
  public next(): void {
    // this.router.navigate(['tax-filing']);
  }

  public back(): void {
    this.router.navigate(['new-account-types']);
  }
  
}
