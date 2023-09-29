import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { SituationsComponent } from './components/situations/situations.component';
import { PurposeComponent } from './components/purpose/purpose.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    SituationsComponent,
    PurposeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
