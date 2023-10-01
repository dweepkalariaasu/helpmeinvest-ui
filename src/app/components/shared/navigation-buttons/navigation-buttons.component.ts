import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navigation-buttons',
  templateUrl: './navigation-buttons.component.html',
  styleUrls: ['./navigation-buttons.component.css']
})
export class NavigationButtonsComponent {

  @Output() public next = new EventEmitter();
  @Output() public back = new EventEmitter();

}
