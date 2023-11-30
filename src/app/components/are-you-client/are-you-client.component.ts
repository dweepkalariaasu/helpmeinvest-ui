import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { CustomerType } from '../../enums/customer-type.enum';
import { saveCustomerType } from '../../store/application/application.actions';
import { MainState } from '../../store/main.state';
import { back, navigate } from '../../store/navigation/navigation.actions';

@Component({
  selector: 'app-are-you-client',
  templateUrl: './are-you-client.component.html',
  styleUrls: ['./are-you-client.component.css']
})
export class AreYouClientComponent {

  public isClient: boolean | undefined;

  constructor(private store: Store<MainState>) {
  }
  
  public next(): void {
    this.store.dispatch(saveCustomerType({customerType: this.isClient ? CustomerType.Client : CustomerType.Prospect}));
    this.store.dispatch(navigate());
  }

  public back(): void {
    this.store.dispatch(back());
  }
}
