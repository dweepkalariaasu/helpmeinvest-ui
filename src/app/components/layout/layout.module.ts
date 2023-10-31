import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';

import { TranslateModule } from '@ngx-translate/core';

import { HeaderComponent } from './header/header.component';
import { MarqueeComponent } from './marquee/marquee.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    HeaderComponent,
    MarqueeComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    MatDividerModule
  ],
  exports:[
    HeaderComponent,
    MarqueeComponent,
    FooterComponent
  ]
})
export class LayoutModule { }
