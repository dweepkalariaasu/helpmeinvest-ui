import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonType } from '../shared/navigation-buttons/navigation-buttons.component';

@Component({
  selector: 'app-tax-filing',
  templateUrl: './tax-filing.component.html',
  styleUrls: ['./tax-filing.component.css']
})
export class TaxFilingComponent {

  buttonType = ButtonType;

  constructor(private router: Router) {

  }
  
  public next(): void {
    this.router.navigate(['gross-income']);
  }

  public back(): void {
    this.router.navigate(['ask-dob']);
  }
  
}
