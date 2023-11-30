import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, map } from 'rxjs';
import { NavigationService } from '../../services/navigation.service';
import { back, navigate, updateNavigationState } from './navigation.actions';

@Injectable()
export class NavigationEffect {
  constructor(
    private actions$: Actions,
    private navigationService: NavigationService
  ) { }

  public navigate$ = createEffect(() =>
    this.actions$.pipe(
      ofType(navigate),
      map(() => this.navigationService.navigate()),
      concatMap(() => [
        updateNavigationState()
      ])
    ));

  public back$ = createEffect(() =>
  this.actions$.pipe(
    ofType(back),
    map(() => this.navigationService.back()),
    concatMap(() => [
      updateNavigationState()
    ])
  ));
}
