import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-account-types',
  templateUrl: './new-account-types.component.html',
  styleUrls: ['./new-account-types.component.css']
})
export class NewAccountTypesComponent {

  constructor(private router: Router) {

  }
  
  public next(): void {
    this.router.navigate(['existing-accounts']);
  }

  public back(): void {
    this.router.navigate(['open-or-enroll']);
  }
  
}
