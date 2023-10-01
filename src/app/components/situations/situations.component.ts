import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-situations',
  templateUrl: './situations.component.html',
  styleUrls: ['./situations.component.css']
})
export class SituationsComponent {

  constructor(private router: Router) {

  }

  public next(): void {
    this.router.navigate(['welcome']);
  }

  public back(): void {
    this.router.navigate(['purpose']);
  }

}
