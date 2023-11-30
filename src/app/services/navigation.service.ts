import { Injectable, NgZone } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Observable, forkJoin, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { MainState } from '../store/main.state';
import { Constraint, FollowingPage, NavigationConfigType, PageConfig } from '../models/NavigationConfigType';
import { ConstraintFactory } from '../constraints/constraint-factory';
import { NavigationConfig } from '../settings/navigation.config';
import { saveNextPage } from '../store/navigation/navigation.actions';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  private settings: NavigationConfigType;

  constructor(
    private router: Router,
    private location: Location,
    private zone: NgZone,
    private constraintFactory: ConstraintFactory,
    private store: Store<MainState>
  ) { 
    this.settings = NavigationConfig;
  }

  public async navigate(): Promise<void> {
    const currentPageMetaData = this.getCurrentPageMetadata();
    if (currentPageMetaData) {
      for (const key in currentPageMetaData.nextPages) {
        const validations = await this.validatePage(currentPageMetaData.nextPages[key]).toPromise();
        if (validations?.every(validation => !!validation)) {
          const newRoute = this.settings[currentPageMetaData.nextPages[key].page]?.path;
          if (newRoute) {
            this.store.dispatch(saveNextPage({nextPage: currentPageMetaData.nextPages[key].page}));
            this.zone.run(() => {
              this.router.navigate(['/'+ newRoute]);
            });
            return;
          }
        }
      }
    }
  }

  public async back(): Promise<void> {
    const currentPageMetaData = this.getCurrentPageMetadata();
    if (currentPageMetaData) {
      for (const key in currentPageMetaData.previousPages) {
        const validations = await this.validatePage(currentPageMetaData.previousPages[key]).toPromise();
        if (validations?.every(validation => !!validation)) {
          const newRoute = this.settings[currentPageMetaData.previousPages[key].page]?.path;
          if (newRoute) {
            this.store.dispatch(saveNextPage({nextPage: currentPageMetaData.previousPages[key].page}));
            this.zone.run(() => {
              this.router.navigate(['/'+ newRoute]);
            });
            return;
          }
        }
      }
    }
  }

  private getCurrentPageMetadata(): PageConfig | undefined {
    const currentRoute = this.location.path().substring(1).split('?')[0];

    for (const page in this.settings) {
      if(this.settings[page]?.path.toLowerCase() === currentRoute.toLowerCase()) {
        return this.settings[page];
      }
    }

    return undefined;
  }

  private validatePage(page: FollowingPage | PageConfig): Observable<boolean[]> {
    let constraints: Observable<boolean>[];
    if (page && page.constraints) {
      constraints = this.validateConstraints(page.constraints);
      return constraints?.length === 0 ? of([]) : forkJoin(constraints);
    }
    return of([]);
  }

  private validateConstraints(constraints: Constraint[]): Observable<boolean>[] {
    const observables: Observable<boolean>[] = [];
    if (constraints) {
      for (const key in constraints) {
        const constraint = this.constraintFactory.getConstraint(constraints[key].name);
        if (constraint) {
          if (constraints[key].params) {
            observables.push(constraint.validate(constraints[key].params));
          } else {
            observables.push(constraint.validate());
          }
        }
      }
    }
    return observables;
  }
}
