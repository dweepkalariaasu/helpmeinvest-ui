import { Injectable } from '@angular/core';
import { Constraint } from './constraint';
import { Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { MainState } from '../store/main.state';
import { channelTypeSelector } from '../store/application/application.selectors';
import { ChannelType } from '../enums/channel-type.enum';

@Injectable()
export class ChannelTypeConstraint implements Constraint {
  public name = 'ChannelTypeConstraint';
  private channelType!: ChannelType;

  constructor(private store: Store<MainState>) {
    store.select(channelTypeSelector).subscribe(c => this.channelType = c!);
  }

  public validate(param: { channelType: ChannelType }): Observable<boolean> {
    return of(param.channelType === this.channelType);
  }
}