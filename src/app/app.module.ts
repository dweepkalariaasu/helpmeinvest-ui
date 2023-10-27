import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';

import { StoreModule } from '@ngrx/store';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SituationsComponent } from './components/situations/situations.component';
import { NavigationButtonsComponent } from './components/shared/navigation-buttons/navigation-buttons.component';
import { stateReducerMappings } from './store/main.state';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { AskDobComponent } from './components/ask-dob/ask-dob.component';
import { ExistingIraComponent } from './components/existing-ira/existing-ira.component';
import { AccountChoicesComponent } from './components/account-choices/account-choices.component';
import { TaxFilingComponent } from './components/tax-filing/tax-filing.component';
import { GrossIncomeComponent } from './components/gross-income/gross-income.component';



export function TranslateLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    SituationsComponent,
    NavigationButtonsComponent,
    HeaderComponent,
    FooterComponent,
    AskDobComponent,
    ExistingIraComponent,
    AccountChoicesComponent,
    TaxFilingComponent,
    GrossIncomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    HttpClientModule,
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
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
