import { InjectionToken, ModuleWithProviders, NgModule, Type } from '@angular/core';
import { Constraint } from './constraint';
import { IsAuthenticatedConstraint } from './is-authenticated.constraint';
import { ChannelTypeConstraint } from './channel-type.constraint';
import { IsEnrollConstraint } from './is-enroll.constraint';
import { IsClientConstraint } from './is-client.constraint';

@NgModule({})
export class ConstraintModule {
  public static forRoot(): ModuleWithProviders<ConstraintModule> {
    return {
      ngModule: ConstraintModule,
      providers: [
        constraintList,
        {
          provide: Constraints,
          deps: constraintList,
          useFactory: createConstraints
        }
      ]
    }
  }
}

export const Constraints = new InjectionToken<Type<Constraint>[]>('Constraints');
export function createConstraints(...constraints:Type<Constraint>[]): Type<Constraint>[] {
  return constraints;
}

// Add all constraints to this list to use the provider pattern
const constraintList = [
  IsAuthenticatedConstraint,
  ChannelTypeConstraint,
  IsEnrollConstraint,
  IsClientConstraint
]