import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-open-or-enroll',
  templateUrl: './open-or-enroll.component.html',
  styleUrls: ['./open-or-enroll.component.css']
})
export class OpenOrEnrollComponent {

  selectedCard = '';

  constructor(private router: Router) {

  }

  selectCard(card: string) {
    this.selectedCard = card;
  }
  
  public next(): void {
    if (this.selectedCard == 'open') {
      this.router.navigate(['new-account-types']);
    } else {
      this.router.navigate(['existing-accounts'])
    }
  }

  public back(): void {
    this.router.navigate(['are-you-client']);
  }
  
}
