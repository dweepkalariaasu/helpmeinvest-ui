import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { PurposeComponent } from './components/purpose/purpose.component';
import { SituationsComponent } from './components/situations/situations.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'purpose', component: PurposeComponent },
  { path: 'situations', component: SituationsComponent },
  { path: '',   redirectTo: '/welcome', pathMatch: 'full' },
  { path: '**', component: WelcomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
