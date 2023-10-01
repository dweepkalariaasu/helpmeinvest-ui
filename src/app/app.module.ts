import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { SituationsComponent } from './components/situations/situations.component';
import { PurposeComponent } from './components/purpose/purpose.component';
import { NavigationButtonsComponent } from './components/shared/navigation-buttons/navigation-buttons.component';
import { stateReducerMappings } from './store/main.state';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    SituationsComponent,
    PurposeComponent,
    NavigationButtonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    StoreModule.forRoot(stateReducerMappings),
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
