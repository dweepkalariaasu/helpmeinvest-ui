import { Injectable } from '@angular/core';
import { Constraint } from './constraint';
import { Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { MainState } from '../store/main.state';
import { applicationSelector } from '../store/application/application.selectors';
import { OperationType } from '../enums/operation-type.enum';

@Injectable()
export class IsEnrollConstraint implements Constraint {
  public name = 'IsEnrollConstraint';
  private isEnroll = false;

  constructor(store: Store<MainState>) {
    store.select(applicationSelector).subscribe(a => this.isEnroll = a.operationType == OperationType.enroll);
  }

  public validate(): Observable<boolean> {
    return of(this.isEnroll);
  }
}