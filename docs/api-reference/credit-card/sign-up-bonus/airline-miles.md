---
title: Sign-up Bonus Airline Miles
sidebar_label: Airline Miles
---

:::info
This pulls all credit cards that offer airline miles as a sign-up bonus
:::

```bash title="HTTP REQUEST"
GET /creditcard-signupbonus-airline
```



```json title="RESPONSE"
  {
    "cardKey": "barclays-biz-jetblue",
    "cardIssuer": "Barclays",
    "cardName": "JetBlue Business Card",
    "cardNetwork": "Mastercard",
    "cardType": "Business",
    "annualFee": 99,
    "signupBonusAmount": "80000",
    "signupBonusType": "JetBlue TrueBlue Rewards Program",
    "signupBonusCategory": "Travel",
    "signupBonusSubcategory": "Airline",
    "signupBonusSpend": 2000,
    "signupBonusLength": 90,
    "signupBonusLengthPeriod": "days",
    "signupAnnualFee": 99,
    "isSignupAnnualFeeWaived": 0,
    "signupStatementCredit": 99,
    "signupBonusDesc": "Earn 80,000 bonus points and a $99 statement credit after spending $2,000 on purchases in the first 90 days"
  }
```


### Notes

- signupStatementCredit is cash sign-up bonus in addition to miles or points (e.g. Earn 80,000 bonus points and a $99 statement credit after spending $2,000 on purchases in the first 90 days)



### Path Parameters

 | NAME        | TYPE   | DESCRIPTION                                                      | REQUIRED |
| ---------- | ------ | ---------------------------------------------------------------- | ------ |
| none |


### Examples

- [/creditcard-signupbonus-airline](/)

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