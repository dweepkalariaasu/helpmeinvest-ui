import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Store } from '@ngrx/store';
import { MainState } from '../../store/main.state';
import { saveIsAuthenticated } from '../../store/user/user.actions';
import { back, navigate } from '../../store/navigation/navigation.actions';

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

  constructor(private authService: AuthService,
    private store: Store<MainState>) { }

  public next(): void {
    if (this.formGroup.valid) {
      this.authService.login(
        this.formGroup.controls.loginId.getRawValue()!,
        this.formGroup.controls.password.getRawValue()!).subscribe(a => {
          this.displayUnAuthorizedError = !a;
          this.store.dispatch(saveIsAuthenticated({isAuthenticated: !!a}));
          this.store.dispatch(navigate())
        }, () => {
          // Error scenario
          this.displayUnAuthorizedError = true;
        });
    }
  }

  public back(): void {
    this.store.dispatch(back())
  }
}
