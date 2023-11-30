import { Injectable } from '@angular/core';
import { Constraint } from './constraint';
import { Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { MainState } from '../store/main.state';
import { isAuthenticatedSelector } from '../store/user/user.selectors';

@Injectable()
export class IsAuthenticatedConstraint implements Constraint {
  public name = 'IsAuthenticatedConstraint';
  private isAuthenticated = false;

  constructor(store: Store<MainState>) {
    store.select(isAuthenticatedSelector).subscribe(a => this.isAuthenticated = a ?? false);
  }

  public validate(): Observable<boolean> {
    return of(this.isAuthenticated);
  }
}