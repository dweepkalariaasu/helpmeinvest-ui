import { Constraints } from '../constraints/constraints.enum';
import { ChannelType } from '../enums/channel-type.enum';
import { PageName } from '../enums/page-name.enum';
import { NavigationConfigType } from '../models/NavigationConfigType';

export const NavigationConfig: NavigationConfigType = {
  [PageName.Welcome]: {
    constraints: [],
    path: 'welcome',
    nextPages: [
      {
        page: PageName.AreYouClient,
        constraints: [
          {
            name: Constraints.ChannelTypeConstraint,
            params: { channelType: ChannelType.sip }
          }
        ]
      },
      {
        page: PageName.Situations,
        constraints: [
          {
            name: Constraints.ChannelTypeConstraint,
            params: { channelType: ChannelType.novice }
          }
        ]
      }
    ],
    previousPages: []
  },
  [PageName.AreYouClient]: {
    constraints: [],
    path: 'are-you-client',
    nextPages: [
      {
        page: PageName.OpenOrEnroll,
        constraints: [ { name: Constraints.IsAuthenticatedConstraint } ]
      },
      {
        page: PageName.Login,
        constraints: [ { name: Constraints.IsClientConstraint } ]
      },
      {
        page: PageName.NewAccountTypes
      }
    ],
    previousPages: [{ page: PageName.Welcome }]
  },
  [PageName.OpenOrEnroll]: {
    constraints: [],
    path: 'open-or-enroll',
    nextPages: [
      {
        page: PageName.ExistingAccounts,
        constraints: [ 
          { name: Constraints.IsAuthenticatedConstraint },
          { name: Constraints.IsEnrollConstraint }
        ]
      },
      {
        page: PageName.NewAccountTypes
      }
    ],
    previousPages: [{ page: PageName.AreYouClient }]
  },
  [PageName.Login]: {
    constraints: [],
    path: 'login',
    nextPages: [
      {
        page: PageName.OpenOrEnroll,
        constraints: [
          {
            name: Constraints.IsAuthenticatedConstraint
          }
        ]
      }
    ],
    previousPages: [{ page: PageName.AreYouClient }]
  },
  [PageName.NewAccountTypes]: {
    constraints: [],
    path: 'new-account-types',
    nextPages: [],
    previousPages: []
  },
  [PageName.ExistingAccounts]: {
    constraints: [],
    path: 'existing-accounts',
    nextPages: [],
    previousPages: []
  },
  [PageName.Situations]: {
    constraints: [],
    path: 'situations',
    nextPages: [],
    previousPages: []
  },
  [PageName.AskDob]: {
    constraints: [],
    path: 'ask-dob',
    nextPages: [],
    previousPages: []
  },
  [PageName.ExistingIra]: {
    constraints: [],
    path: 'existing-ira',
    nextPages: [],
    previousPages: []
  },
  [PageName.AccountChoices]: {
    constraints: [],
    path: 'account-choices',
    nextPages: [],
    previousPages: []
  },
  [PageName.TaxFiling]: {
    constraints: [],
    path: 'tax-filing',
    nextPages: [],
    previousPages: []
  },
  [PageName.GrossIncome]: {
    constraints: [],
    path: 'gross-income',
    nextPages: [],
    previousPages: []
  }
}