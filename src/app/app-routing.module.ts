import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SituationsComponent } from './components/situations/situations.component';
import { AskDobComponent } from './components/ask-dob/ask-dob.component';
import { ExistingIraComponent } from './components/existing-ira/existing-ira.component';
import { AccountChoicesComponent } from './components/account-choices/account-choices.component';
import { TaxFilingComponent } from './components/tax-filing/tax-filing.component';
import { GrossIncomeComponent } from './components/gross-income/gross-income.component';

const routes: Routes = [
  // { path: 'welcome', component: WelcomeComponent },
  { path: 'existing-ira', component: ExistingIraComponent },
  { path: 'situations', component: SituationsComponent },
  { path: 'ask-dob', component: AskDobComponent },
  { path: 'tax-filing', component: TaxFilingComponent },
  { path: 'gross-income', component: GrossIncomeComponent },
  { path: 'account-choices', component: AccountChoicesComponent },
  { path: '',   redirectTo: '/situations', pathMatch: 'full' },
  { path: '**', component: SituationsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
