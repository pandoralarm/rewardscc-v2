---
sidebar_position: 1
title: Detail By Card
sidebar_label: By Card
---

:::info
This pulls detailed information for a single credit card
:::

```bash title="HTTP REQUEST"
GET /creditcard-detail-bycard/{cardKey}
```


```json title="RESPONSE"

[
  {
    "cardKey": "amex-hiltonsurpass",
    "cardIssuer": "American Express",
    "cardName": "Hilton Honors American Express Surpass®",
    "cardNetwork": "American Express",
    "cardType": "Personal",
    "cardUrl": "https://www.americanexpress.com/us/credit-cards/card/hilton-honors-surpass",
    "annualFee": 95,
    "fxFee": 0.0,
    "isFxFee": 0,
    "creditRange": "Good to Excellent",
    "baseSpendAmount": 3.0,
    "baseSpendType": "Hilton Honors",
    "baseSpendCategory": "Hotel",
    "isSignupBonus": 1,
    "signupBonusAmount": "130000",
    "signupBonusType": "Hilton Honors",
    "signupBonusCategory": "Hotel",
    "signupBonusSpend": 2000,
    "signupBonusLength": 3,
    "signupBonusLengthPeriod": "months",
    "signupAnnualFee": 95,
    "isSignupAnnualFeeWaived": 0,
    "signupStatementCredit": 0,
    "signupBonusDesc": "Earn 130,000 Bonus Points after you spend $2,000 in purchases on the Hilton Honors Surpass® Card in the first 3 months of Card Membership",
    "trustedTraveler": "",
    "isTrustedTraveler": 0,
    "loungeAccess": "Priority Pass™ Select – 10 Complimentary Visits - Relax with 10 complimentary airport lounge visits each Priority Pass Membership year once enrolled in Priority Pass™ Select membership, which offers access to over 1,200 lounges in over 130 countries",
    "isLoungeAccess": 1,
    "freeHotelNight": "",
    "isFreeHotelNight": 0,
    "freeCheckedBag": "",
    "isFreeCheckedBag": 0,
    "isactive": 1,
    "benefit": [
      {
        "benefitTitle": "Additional Cards",
        "benefitDesc": "You can add an Additional Card for anyone who makes purchases for you, like your child (13+), spouse, or employee."
      },
      {
        "benefitTitle": "Car Rental Loss and Damage Insurance",
        "benefitDesc": "Getting into your Rental Vehicle can be the start of a great vacation. When you use your Eligible Card to reserve and pay for the Entire Rental and decline the collision damage waiver (CDW) at the Rental Company counter, you can be covered for Damage to or Theft of a Rental Vehicle in a Covered Territory.Please read important exclusions and restrictions. Not all vehicle types or rentals are covered. Coverage is not available for vehicles rented in Australia, Italy, and New Zealand. This product provides secondary coverage and does not include liability coverage."
      },
      {
        "benefitTitle": "Complimentary Gold Status",
        "benefitDesc": "Enjoy complimentary Hilton Honors Gold status with your Hilton Honors Surpass® Card. Plus, spend $40,000 on eligible purchases on your Card in a calendar year and you can earn Hilton Honors Diamond status through the end of the next calendar year."
      },
      {
        "benefitTitle": "Fraud Protection",
        "benefitDesc": "When you use your American Express® Card you won't be held responsible for fraudulent charges. If you see a charge that you think is fraudulent, just call us at the number on the back of your Card. There's no deductible, so you can use your Card with confidence."
      },
      {
        "benefitTitle": "Global Assist® Hotline",
        "benefitDesc": "Whenever you travel more than 100 miles from home, Global Assist® Hotline is available for 24/7 emergency assistance and coordination services, including medical and legal referrals, emergency cash wires, and missing luggage assistance. Card Members are responsible for the costs charged by third-party service providers. Other terms and conditions apply."
      },
      {
        "benefitTitle": "No foreign transaction fees",
        "benefitDesc": "Enjoy international travel without additional fees on purchases made abroad."
      },
      {
        "benefitTitle": "Pay It Plan It®",
        "benefitDesc": "Pay It Plan It®, two easy ways to control how you pay.™ Pay It® Tap a purchase amount under $100 in the app to quickly make payments throughout the month.™ Plan It® Select purchases of $100 or more and split them up into monthly payments with a fixed monthly fee and no interest charges.Plus, you'll still earn rewards as you normally would."
      },
      {
        "benefitTitle": "Priority Pass™ Select 10 COMPLIMENTARY Visits",
        "benefitDesc": "Wherever your travels take you, relax with complimentary Priority Pass™ Select membership and get access to 1200+ airport lounges. Plus, get 10 free lounge visits each Priority Pass Membership year once enrolled."
      },
      {
        "benefitTitle": "Weekend Night Reward",
        "benefitDesc": "Earn a Free Weekend Night Reward from Hilton Honors after you spend $15,000 on eligible purchases on your Card in a calendar year."
      }
    ],
    "spendCategory": [
      {
        "categoryType": "Single Category - Dining",
        "categoryName": "Dining",
        "categoryId": 922448883,
        "earnMultiplier": 6.0,
        "spendType": "Hilton Honors",
        "isDateLimit": 0,
        "limitBeginDate": "",
        "limitEndDate": "",
        "isSpendLimit": 0,
        "spendLimit": 0,
        "spendLimitResetPeriod": ""
      },
      {
        "categoryType": "Single Category - Gas Stations",
        "categoryName": "Gas Stations",
        "categoryId": 1145741262,
        "earnMultiplier": 6.0,
        "spendType": "Hilton Honors",
        "isDateLimit": 0,
        "limitBeginDate": "",
        "limitEndDate": "",
        "isSpendLimit": 0,
        "spendLimit": 0,
        "spendLimitResetPeriod": ""
      },
      {
        "categoryType": "Single Category - Grocery Stores",
        "categoryName": "Grocery Stores",
        "categoryId": 977642681,
        "earnMultiplier": 6.0,
        "spendType": "Hilton Honors",
        "isDateLimit": 0,
        "limitBeginDate": "",
        "limitEndDate": "",
        "isSpendLimit": 0,
        "spendLimit": 0,
        "spendLimitResetPeriod": ""
      },
      {
        "categoryType": "Single Category - Hilton Hotels & Resorts",
        "categoryName": "Hilton Hotels & Resorts",
        "categoryId": 128563993,
        "earnMultiplier": 12.0,
        "spendType": "Hilton Honors",
        "isDateLimit": 0,
        "limitBeginDate": "",
        "limitEndDate": "",
        "isSpendLimit": 0,
        "spendLimit": 0,
        "spendLimitResetPeriod": ""
      }
    ],
    "annualSpend": [
      {
        "annualSpendDesc": "Earn a Free Night Reward from Hilton Honors after you spend $15,000 on eligible purchases on your Card in a calendar year"
      },
      {
        "annualSpendDesc": "Honors Diamond status - spend $40,000 on eligible purchases on your Card in a calendar year and you can earn Hilton Honors Diamond status through the end of the next calendar year"
      }
    ]
  }
]


```


### Notes

- categoryType:
   - Multi Category: Spend Limit is shared across two or more categories, for example, Chase Freedom has a quarterly promotion where Grocery Stores, Fitness Club, and Target have a total spend limit of $1,500
   - Option 1: Several cards have an option where you can select one category within a list to get the spend bonus applied (eg. Bank of America® Customized Cash Rewards) 
   - Option 1 (Select two): Similar to Option 1 except you can select two cateogories (eg. U.S. Bank Cash+® Visa Signature®)
   - Single Category: Most common, one category




### Path Parameters

 | NAME        | TYPE   | DESCRIPTION                                                      | REQUIRED |
| ---------- | ------ | ---------------------------------------------------------------- | ------ |
| cardKey| string |  unique Rewards CC key ID                               | Yes |


### Examples

- [/creditcard-detail-bycard/amex-hiltonsurpass](/)

### Response Attributes

| NAME        | TYPE   | DESCRIPTION                                                      |
| ---------- | ------ | ---------------------------------------------------------------- |
| cardKey | string | Rewards Credit Card API unique card key | 
| cardName | string | Name of credit card | 
| cardIssuer | string | Issuing bank | 
| cardNetwork | string | Network (e.g. Visa)| 
| cardType | string | Type (e.g. Personal) | 
| cardUrl | string | Card bank url | 
| annualFee | number | Annual fee in USD | 
| fxFee | number | Foreign transaction fee (%) |  
| isFxFee | bit | Does card have foreign echange fee? (0=no, 1=yes)  |
| creditRange | string | Credit required |
| baseSpendAmount | number | Points earned per dollar spend | 
| baseSpendType | string | Redemption program (e.g. American AAdvantage) | 
| baseSpendCategory | string | Spend category (e.g. Travel) | 
| isSignupBonus | bit | Does card have sign-up bonus? (0=no, 1=yes)  |
| signupBonusAmount | number | Amount of sign-up miles, points, cash | 
| signupBonusType | string | Redemption program (e.g. American AAdvantage) | 
| signupBonusCategory | string | Sig-nup bonus category (e.g. Travel) | 
| signupBonusSpend | number | Minimum spend | 
| signupBonusLength | number | Length time units | 
| signupBonusLengthPeriod | string | Period (day, month, or year) | 
| signupAnnualFee | number | First year annual fee |
| isSignupAnnualFeeWaived | bit | Is annual fee waived first year? (0=no, 1=yes)  |
| signupStatementCredit | string | Additional amount of sign-up bonus if applicable | 
| signupBonusDesc | string | Sign-up bonus description | 
| trustedTraveler | string | Trusted traveler credit description | 
| isTrustedTraveler | bit | Does card have trusted traveler credit? (0=no, 1=yes)  |
| loungeAccess | string | Lounge access benefit description | 
| isLoungeAccess | bit | Does card include lounge access? (0=no, 1=yes)  |
| freeHotelNight | string | Free annual hotel night certificate description | 
| isFreeHotelNight | bit | Does card include a free annual hotel night certificate? (0=no, 1=yes)  |
| freeCheckedBag | string | Free airline checked bag description | 
| isFreeCheckedBag | bit | Does card include a free checked bag? (0=no, 1=yes)  |
| isActive | bit | Is card currently open for applications? (0=no, 1=yes)  |
| benefitTitle | string | Card benefit title | 
| benefitDesc | string | Card benefit description | 
| categoryType | string | Category type (see notes section) |
| categoryName | string | Spend category name (eg. Dining) |
| categoryId | string | unique category ID |
| earnMultiplier | number | points/miles per dollar |
| spendType | string | card earning currency (eg. cash, AMEX Membership Rewards) |
| isDateLimit | bit | Is category date limited? (0=no, 1=yes)  |
| limitBeginDate | date | Date spend bonus begins |
| limitEndDate | date | Date spend bonus ends |
| isSpendLimit | bit | Is there a spend limit? (0=no, 1=yes) |
| spendLimit | number | Spent limit amount if applies |
| spendLimitResetPeriod | string | If spend limit when the limit is reset (eg. Year) |
| annualSpendDesc | string | Description if card includes bonus for reaching an annual spend | 




 
### Data Source(s)

Bank websites