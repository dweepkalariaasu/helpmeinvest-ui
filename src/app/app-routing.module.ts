import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { SituationsComponent } from './components/situations/situations.component';
import { AskDobComponent } from './components/ask-dob/ask-dob.component';
import { ExistingIraComponent } from './components/existing-ira/existing-ira.component';
import { AccountChoicesComponent } from './components/account-choices/account-choices.component';
import { TaxFilingComponent } from './components/tax-filing/tax-filing.component';
import { GrossIncomeComponent } from './components/gross-income/gross-income.component';
import { AreYouClientComponent } from './components/are-you-client/are-you-client.component';
import { OpenOrEnrollComponent } from './components/open-or-enroll/open-or-enroll.component';
import { NewAccountTypesComponent } from './components/new-account-types/new-account-types.component';
import { ExistingAccountsComponent } from './components/existing-accounts/existing-accounts.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'existing-ira', component: ExistingIraComponent },
  { path: 'situations', component: SituationsComponent },
  { path: 'ask-dob', component: AskDobComponent },
  { path: 'tax-filing', component: TaxFilingComponent },
  { path: 'gross-income', component: GrossIncomeComponent },
  { path: 'account-choices', component: AccountChoicesComponent },
  { path: 'are-you-client', component: AreYouClientComponent },
  { path: 'open-or-enroll', component: OpenOrEnrollComponent },
  { path: 'new-account-types', component: NewAccountTypesComponent },
  { path: 'existing-accounts', component: ExistingAccountsComponent },
  { path: '',   redirectTo: '/welcome', pathMatch: 'full' },
  { path: '**', component: WelcomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
