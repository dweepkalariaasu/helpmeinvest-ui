import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  displayUnAuthorizedError: boolean = false;

  formGroup = new FormGroup({
    loginId: new FormControl('', {validators: Validators.required}),
    password: new FormControl('', {validators: Validators.required})
  });

  constructor(private router: Router,
    private authService: AuthService) { }

  public next(): void {
    if (this.formGroup.valid) {
      this.authService.login(
        this.formGroup.controls.loginId.getRawValue()!,
        this.formGroup.controls.password.getRawValue()!).subscribe(a => {
          if (a) {
            this.displayUnAuthorizedError = false;
            this.router.navigate(['open-or-enroll']);
          } else {
            this.displayUnAuthorizedError = true;
          }
        }, () => {
          // Error scenario
          this.displayUnAuthorizedError = true;
        });
    }
  }

  public back(): void {
    this.router.navigate(['are-you-client']);
  }
}
