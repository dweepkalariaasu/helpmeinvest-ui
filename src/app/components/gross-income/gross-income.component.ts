import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { MainState } from '../../store/main.state';
import { custInfoSelector } from '../../store/application/application.selectors';
import { saveGrossIncome } from 'src/app/store/application/application.actions';

@Component({
  selector: 'app-gross-income',
  templateUrl: './gross-income.component.html',
  styleUrls: ['./gross-income.component.css']
})
export class GrossIncomeComponent {

  formGroup = new FormGroup({
    agi: new FormControl(0, {validators: Validators.required}),
  });

  constructor(private router: Router,
    private store: Store<MainState>) {
    this.store.select(custInfoSelector).subscribe(a => {
      if (a) {
        this.formGroup?.controls.agi.setValue(a.AdjustedGrossIncome);
      }
    });
  }
  
  public next(): void {
    if (this.formGroup.valid) {
      this.store.dispatch(saveGrossIncome({grossIncome: this.formGroup.controls.agi.getRawValue()!}));
      this.router.navigate(['account-choices'], { queryParams: { type: 'traditional' }});
    }
  }

  public back(): void {
    this.router.navigate(['tax-filing']);
  }
  
}
