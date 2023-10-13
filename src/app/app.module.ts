import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import {MatInputModule} from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';

import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { SituationsComponent } from './components/situations/situations.component';
import { PurposeComponent } from './components/purpose/purpose.component';
import { NavigationButtonsComponent } from './components/shared/navigation-buttons/navigation-buttons.component';
import { stateReducerMappings } from './store/main.state';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { AskDobComponent } from './components/ask-dob/ask-dob.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    SituationsComponent,
    PurposeComponent,
    NavigationButtonsComponent,
    HeaderComponent,
    FooterComponent,
    AskDobComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    StoreModule.forRoot(stateReducerMappings),
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
