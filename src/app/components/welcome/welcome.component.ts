import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { MainState } from '../../store/main.state';
import { saveChannelType } from '../../store/application/application.actions';
import { ChannelType } from '../../enums/channel-type.enum';
import { navigate } from '../../store/navigation/navigation.actions';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  accountTiles: AccountTile[] = [];

  constructor(private store: Store<MainState>) {

  }

  ngOnInit(): void {
    this.accountTiles = [
      {
        imagePath: 'assets/brokerage.png',
        title: 'BROKERAGE & TRADING',
        subTitle: 'Invest in stocks, ETFs, options, bonds, and more',
        links: [
          'Individual Brokerage Account',
          'Joint Brokerage Account'
        ]
      },
      {
        imagePath: 'assets/retirement.png',
        title: 'RETIREMENT',
        subTitle: 'Plan for your future',
        links: [
          'Roth IRA',
          'Traditional IRA',
          'Rollover IRA'
        ]
      },
      {
        imagePath: 'assets/automated.webp',
        title: 'AUTOMATED & MANAGED PORTFOLIOS',
        subTitle: 'Invest with expert or automated advice',
        links: [
          'Schwab Intelligent Portfolios®',
          'Schwab Intelligent Portfolios Premium®'
        ]
      },
      {
        imagePath: 'assets/banking.avif',
        title: 'BANKING',
        subTitle: 'Easily fund your investments and manage day-to-day cash',
        links: [
          'Individual Checking Account',
          'Joint Checking Account'
        ]
      },
      {
        imagePath: 'assets/estate-planning.png',
        title: 'ESTATE PLANNING',
        subTitle: 'Prepare to manage and protect your assets',
        links: [
          'Single Trustee',
          'Co-Trustees'
        ]
      },
      {
        imagePath: 'assets/charitable.png',
        title: 'CHARITABLE GIVING',
        subTitle: 'Give back to the community with a tax-efficient solution',
        links: [
          'Schwab Charitable'
        ]
      },
    ]
  }

  onLinkClick(linkText: string) {

    if (linkText.indexOf("Schwab Intelligent Portfolio") >= 0) {
      this.store.dispatch(saveChannelType({channelType: ChannelType.sip}));
    } else if (linkText.indexOf("Get started") >= 0) {
      this.store.dispatch(saveChannelType({channelType: ChannelType.novice}));
    } else {
      this.store.dispatch(saveChannelType({channelType: ChannelType.retail}));
    }

    this.store.dispatch(navigate());
  }
}

export interface AccountTile {
  imagePath: string;
  title: string;
  subTitle: string;
  links: string[]
}
