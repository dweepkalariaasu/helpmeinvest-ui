import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-navigation-buttons',
  templateUrl: './navigation-buttons.component.html',
  styleUrls: ['./navigation-buttons.component.css']
})
export class NavigationButtonsComponent {

  buttonTypeEnum = ButtonType;

  @Input() buttonType = ButtonType.ContinueBack;
  @Input() nextText: string = '';
  @Input() displaySafe: boolean = true;

  @Output() public next = new EventEmitter();
  @Output() public back = new EventEmitter();

}

export enum ButtonType {
  ContinueBack,
  Back
}
