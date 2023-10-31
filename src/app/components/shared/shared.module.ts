import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

import { TranslateModule } from '@ngx-translate/core';

import { NavigationButtonsComponent } from './navigation-buttons/navigation-buttons.component';

@NgModule({
  declarations: [
    NavigationButtonsComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    MatButtonModule,
    MatDividerModule
  ],
  exports: [
    NavigationButtonsComponent
  ]
})
export class SharedModule { }
