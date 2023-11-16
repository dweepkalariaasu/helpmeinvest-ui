import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';

import { StoreModule } from '@ngrx/store';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { stateReducerMappings } from './store/main.state';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './components/layout/layout.module';
import { SharedModule } from './components/shared/shared.module';
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

export function TranslateLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    SituationsComponent,
    AskDobComponent,
    ExistingIraComponent,
    AccountChoicesComponent,
    TaxFilingComponent,
    GrossIncomeComponent,
    AreYouClientComponent,
    OpenOrEnrollComponent,
    NewAccountTypesComponent,
    ExistingAccountsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forRoot(stateReducerMappings),
    TranslateModule.forRoot(
      {
        loader: {
          provide: TranslateLoader,
          useFactory: TranslateLoaderFactory,
          deps: [HttpClient]
        }
      }
    ),
    MatGridListModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatRadioModule,
    MatTabsModule,
    MatExpansionModule,
    MatIconModule,
    LayoutModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
