import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { MainState } from '../../store/main.state';
import { OperationType } from '../../enums/operation-type.enum';
import { saveOperationType } from '../../store/application/application.actions';
import { back, navigate } from '../../store/navigation/navigation.actions';

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
    this.store.dispatch(navigate())
  }

  public back(): void {
    this.store.dispatch(back());
  }
  
}
