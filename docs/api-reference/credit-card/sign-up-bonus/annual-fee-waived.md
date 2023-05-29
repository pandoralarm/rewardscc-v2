---
title: Sign-up Bonus Annual Fee Waived
sidebar_label: Annual Fee Waived
---

:::info
This pulls all credit cards that waive the first year annual fee
:::

```bash title="HTTP REQUEST"
GET /creditcard-signupbonus-annualfeewaived
```



```json title="RESPONSE"
  {
    "cardKey": "amex-biz-green",
    "cardIssuer": "American Express",
    "cardName": "Business Green Rewards Card",
    "cardNetwork": "American Express",
    "cardType": "Business",
    "annualFee": 95,
    "signupBonusAmount": "15000",
    "signupBonusType": "American Express Membership Rewards",
    "signupBonusCategory": "Flexible Points",
    "signupBonusSubcategory": "Flexible Points",
    "signupBonusSpend": 3000,
    "signupBonusLength": 3,
    "signupBonusLengthPeriod": "months",
    "signupAnnualFee": 0,
    "isSignupAnnualFeeWaived": 1,
    "signupStatementCredit": 0,
    "signupBonusDesc": "Earn 15,000 Membership Rewards® points after you spend $3,000 in eligible purchases on the Card within your first 3 months of Card Membership"
  }
```


### Notes

- Does not include cards with no annual fee, only those with an annual fee after the first year
- signupStatementCredit is cash sign-up bonus in addition to miles or points (e.g. Earn 80,000 bonus points and a $99 statement credit after spending $2,000 on purchases in the first 90 days)



### Path Parameters

 | NAME        | TYPE   | DESCRIPTION                                                      | REQUIRED |
| ---------- | ------ | ---------------------------------------------------------------- | ------ |
| none |


### Examples

- [/creditcard-signupbonus-annualfeewaived](/)

### Response Attributes

| NAME        | TYPE   | DESCRIPTION                                                      |
| ---------- | ------ | ---------------------------------------------------------------- |
 | cardKey | string | Rewards Credit Card API unique card key | 
 | cardIssuer | string | Issuing bank | 
 | cardName | string | Name of credit card | 
 | cardNetwork | string | Network (e.g. Visa)| 
 | cardType | string | Type (e.g. Personal) | 
 | annualFee | number | Annual fee in USD | 
 | signupBonusAmount | number | Amount of sign-up miles, points, cash | 
 | signupBonusType | string | Redemption program (e.g. American AAdvantage) | 
 | signupBonusCategory | string | Sign-up bonus category (e.g. Travel) | 
 | signupBonusSpend | number | Minimum spend | 
 | signupBonusLength | number | Length time units | 
 | signupBonusLengthPeriod | string | Period (day, month, or year) | 
 | signupAnnualFee | number | First year annual fee  |
 | isSignupAnnualFeeWaived | bit | Is annual fee waived the first year (0=no, 1=yes) | 
 | signupStatementCredit | number | Addtional sign-up credit ($) |  
 | signupBonusDesc | string | Sign-up bonus description | 





 
### Data Source(s)

Bank websites