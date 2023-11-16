import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonType } from '../shared/navigation-buttons/navigation-buttons.component';
import { Store } from '@ngrx/store';
import { MainState } from '../../store/main.state';
import { saveTaxStatus } from '../../store/application/application.actions';
import { TaxFilingStatus } from '../../enums/tax-filing-status.enum';

@Component({
  selector: 'app-tax-filing',
  templateUrl: './tax-filing.component.html',
  styleUrls: ['./tax-filing.component.css']
})
export class TaxFilingComponent {

  buttonType = ButtonType;
  taxStatus = TaxFilingStatus;

  constructor(private router: Router,
    private store: Store<MainState>) {

  }
  
  public next(status: TaxFilingStatus): void {
    this.store.dispatch(saveTaxStatus({taxStatus: status}));
    this.router.navigate(['gross-income']);
  }

  public back(): void {
    this.router.navigate(['ask-dob']);
  }
  
}
