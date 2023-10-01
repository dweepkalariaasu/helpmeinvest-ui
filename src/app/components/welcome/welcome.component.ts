import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

  constructor(private router: Router) {

  }

  public next(): void {
    this.router.navigate(['purpose']);
  }

  public back(): void {
    this.router.navigate(['passthrough']);
  }

}
