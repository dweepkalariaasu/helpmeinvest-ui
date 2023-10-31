import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'Help Me Invest';
  displayMarquee = false;

  constructor(
    translateService: TranslateService,
    router: Router
    ) {
    
    // setting up translate service
    translateService.setDefaultLang('en');
    translateService.use('en');
    
    // listening to the route change
    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.displayMarquee = (event.url.indexOf('welcome') >= 0);
      }
    });
  }
}
