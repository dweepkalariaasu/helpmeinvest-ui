import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gross-income',
  templateUrl: './gross-income.component.html',
  styleUrls: ['./gross-income.component.css']
})
export class GrossIncomeComponent {

  constructor(private router: Router) {

  }
  
  public next(): void {
    // TODO: Get IRA type based on some logic
    this.router.navigate(['account-choices', { type: 'traditional' }]);
  }

  public back(): void {
    this.router.navigate(['tax-filing']);
  }
  
}
