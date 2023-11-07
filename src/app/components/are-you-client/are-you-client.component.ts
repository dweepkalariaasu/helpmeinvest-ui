import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-are-you-client',
  templateUrl: './are-you-client.component.html',
  styleUrls: ['./are-you-client.component.css']
})
export class AreYouClientComponent {

  public isClient: boolean;

  constructor(private router: Router) {
    this.isClient = false;
  }
  
  public next(): void {
    this.router.navigate(['open-or-enroll']);
  }

  public back(): void {
    this.router.navigate(['login']);
  }
}
