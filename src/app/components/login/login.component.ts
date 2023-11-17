import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  formGroup = new FormGroup({
    loginId: new FormControl('', {validators: Validators.required}),
    password: new FormControl('', {validators: Validators.required})
  });

  constructor(private router: Router) { }

  public next(): void {
    if (this.formGroup.valid) {
      console.log(this.formGroup.controls.loginId.getRawValue());
      console.log(this.formGroup.controls.password.getRawValue());
      this.router.navigate(['open-or-enroll']);
    }
  }

  public back(): void {
    this.router.navigate(['are-you-client']);
  }
}
