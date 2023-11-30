import { Injectable } from '@angular/core';
import { Constraint } from './constraint';
import { Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { MainState } from '../store/main.state';
import { custInfoSelector } from '../store/application/application.selectors';
import { CustomerType } from '../enums/customer-type.enum';

@Injectable()
export class IsClientConstraint implements Constraint {
  public name = 'IsClientConstraint';
  private isClient = false;

  constructor(store: Store<MainState>) {
    store.select(custInfoSelector).subscribe(a => this.isClient = (a?.CustomerType == CustomerType.Client));
  }

  public validate(): Observable<boolean> {
    return of(this.isClient);
  }
}