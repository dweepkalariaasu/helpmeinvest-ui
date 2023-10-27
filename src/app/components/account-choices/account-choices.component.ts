import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-account-choices',
  templateUrl: './account-choices.component.html',
  styleUrls: ['./account-choices.component.css']
})
export class AccountChoicesComponent {

  iraType: string| null = '';

  constructor(router: ActivatedRoute) {
    router.queryParamMap.subscribe(p => {
      this.iraType = p.get('type');
      console.log(this.iraType);
    })
  }

  next() {}

}
