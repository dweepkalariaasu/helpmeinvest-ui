import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-are-you-client',
  templateUrl: './are-you-client.component.html',
  styleUrls: ['./are-you-client.component.css']
})
export class AreYouClientComponent {

  constructor(private router: Router) {

  }
  
  public next(): void {
    this.router.navigate(['open-or-enroll']);
  }

  public back(): void {
    this.router.navigate(['login']);
  }
}
