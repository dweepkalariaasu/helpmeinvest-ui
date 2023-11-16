import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router) { }

  public next(): void {
    this.router.navigate(['open-or-enroll']);
  }

  public back(): void {
    this.router.navigate(['are-you-client']);
  }
}
