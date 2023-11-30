import { Constraints } from '../constraints/constraints.enum'
import { PageName } from '../enums/page-name.enum'

export interface NavigationConfigType {
    [pageName: string]: PageConfig
}

export interface PageConfig {
    constraints? : Constraint[],
    path: string,
    nextPages: FollowingPage[],
    previousPages: FollowingPage[]
}

export interface FollowingPage {
    page: PageName,
    constraints?: Constraint[]
}

export interface Constraint {
    name: Constraints,
    params?: ConstraintParameters
}

export interface ConstraintParameters {
    [paramName: string]: any
}