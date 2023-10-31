import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  accountTiles: AccountTile[] = [];

  constructor(private router: Router) {

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
      this.router.navigate(['are-you-client']);
    }
  }


}

export interface AccountTile {
  imagePath: string;
  title: string;
  subTitle: string;
  links: string[]
}
