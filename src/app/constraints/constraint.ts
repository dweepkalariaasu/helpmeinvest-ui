import { Observable } from 'rxjs';

export interface Constraint {
    name: string;
    validate(params?: unknown): Observable<boolean>;
}