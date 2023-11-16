import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { CustomerType } from 'src/app/enums/customer-type.enum';
import { saveCustomerType } from 'src/app/store/application/application.actions';
import { MainState } from 'src/app/store/main.state';

@Component({
  selector: 'app-are-you-client',
  templateUrl: './are-you-client.component.html',
  styleUrls: ['./are-you-client.component.css']
})
export class AreYouClientComponent {

  public isClient: boolean | undefined;

  constructor(private router: Router,
    private store: Store<MainState>) {
    // this.isClient = false;
  }
  
  public next(): void {
    this.store.dispatch(saveCustomerType({customerType: this.isClient ? CustomerType.Client : CustomerType.Prospect}));
    if (this.isClient) {
      this.router.navigate(['login']);
    } else {
      this.router.navigate(['new-account-types']);
    }
  }

  public back(): void {
    this.router.navigate(['login']);
  }
}
