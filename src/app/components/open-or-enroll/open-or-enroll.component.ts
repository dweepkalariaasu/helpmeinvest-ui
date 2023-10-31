import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-open-or-enroll',
  templateUrl: './open-or-enroll.component.html',
  styleUrls: ['./open-or-enroll.component.css']
})
export class OpenOrEnrollComponent {

  constructor(private router: Router) {

  }
  
  public next(): void {
    this.router.navigate(['new-account-types']);
  }

  public back(): void {
    this.router.navigate(['are-you-client']);
  }
  
}