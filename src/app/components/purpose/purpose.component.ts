import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-purpose',
  templateUrl: './purpose.component.html',
  styleUrls: ['./purpose.component.css']
})
export class PurposeComponent {

  constructor(private router: Router) {

  }

  public next(): void {
    this.router.navigate(['situations']);
  }

  public back(): void {
    this.router.navigate(['welcome']);
  }

}
