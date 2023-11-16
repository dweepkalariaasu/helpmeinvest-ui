import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Store } from '@ngrx/store';
import { MainState } from './store/main.state';
import { saveReferenceId } from './store/application/application.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'Help Me Invest';
  displayMarquee = false;

  constructor(
    translateService: TranslateService,
    router: Router,
    private route: ActivatedRoute,
    private store: Store<MainState>
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

  ngOnInit() {
    this.route.queryParams.subscribe(a => {
      console.log(a);
      var referenceId = a['referenceId'.toLowerCase()];
      if (referenceId) {
        this.store.dispatch(saveReferenceId({referenceId: referenceId}));
      }
    });
  }
}
