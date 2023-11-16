import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { MainState } from '../../store/main.state';
import { OperationType } from 'src/app/enums/operation-type.enum';
import { saveOperationType } from 'src/app/store/application/application.actions';

@Component({
  selector: 'app-open-or-enroll',
  templateUrl: './open-or-enroll.component.html',
  styleUrls: ['./open-or-enroll.component.css']
})
export class OpenOrEnrollComponent {

  selectedCard: OperationType | undefined;
  operationType = OperationType;

  constructor(private router: Router,
    private store: Store<MainState>) {

  }

  selectCard(card: OperationType) {
    this.selectedCard = card;
  }
  
  public next(): void {
    this.store.dispatch(saveOperationType({operationType: this.selectedCard!}));
    if (this.selectedCard == OperationType.open) {
      this.router.navigate(['new-account-types']);
    } else {
      this.router.navigate(['existing-accounts'])
    }
  }

  public back(): void {
    this.router.navigate(['are-you-client']);
  }
  
}
