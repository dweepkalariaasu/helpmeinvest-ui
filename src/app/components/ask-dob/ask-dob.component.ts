import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ask-dob',
  templateUrl: './ask-dob.component.html',
  styleUrls: ['./ask-dob.component.css']
})
export class AskDobComponent {

  constructor(private router: Router) {

  }
  
  public next(): void {
    this.router.navigate(['purpose']);
  }

  public back(): void {
    this.router.navigate(['welcome']);
  }

}
