import { Inject, Injectable } from '@angular/core';
import { Constraint } from './constraint';
import { ConstraintModule, Constraints } from './constraint.module';

@Injectable({
  providedIn: ConstraintModule
})
export class ConstraintFactory {
  public constraintPool: { [key: string]: Constraint } = {};

  constructor(@Inject(Constraints) constraints: Constraint[] = []) {
    if (constraints.length > 0) {
      constraints.forEach(constraint => {
        this.constraintPool[constraint.name] = constraint;
      });
    }
  }

  public getConstraint(constraintKey: string): Constraint | undefined {
    if (constraintKey in this.constraintPool) {
      return this.constraintPool[constraintKey];
    }
    return undefined;
  }
}