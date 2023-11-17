import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { MainState } from '../../store/main.state';
import { saveDateOfBirth } from '../../store/application/application.actions';
import { custInfoSelector } from '../../store/application/application.selectors';

@Component({
  selector: 'app-ask-dob',
  templateUrl: './ask-dob.component.html',
  styleUrls: ['./ask-dob.component.css']
})
export class AskDobComponent {

  formGroup = new FormGroup({
    dob: new FormControl<Date | undefined>(undefined, {validators: Validators.required}),
  });

  constructor(private router: Router,
    private store: Store<MainState>) {
      this.formGroup.controls.dob.reset();
      this.store.select(custInfoSelector).subscribe(a => {
        if (a) {
          this.formGroup?.controls.dob.setValue(a.DateOfBirth);
        }
      });
  }
  
  public next(): void {
    if (this.formGroup.valid) {
      this.store.dispatch(saveDateOfBirth({dateOfBirth: this.formGroup.controls.dob.getRawValue()!}));
      this.router.navigate(['tax-filing']);
    }
  }

  public back(): void {
    this.router.navigate(['situations']);
  }
}
