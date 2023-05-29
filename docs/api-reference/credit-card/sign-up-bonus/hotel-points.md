---
title: Sign-up Bonus Hotel Points
sidebar_label: Hotel Points
---

:::info
This pulls all credit cards that offer hotel points as a sign-up bonus
:::

```bash title="HTTP REQUEST"
GET /creditcard-signupbonus-hotel
```



```json title="RESPONSE"
  {
    "cardKey": "chase-marriottbountiful",
    "cardIssuer": "Chase",
    "cardName": "Marriott Bonvoy Bountiful™ credit card",
    "cardNetwork": "Visa",
    "cardType": "Personal",
    "annualFee": 250,
    "signupBonusAmount": "85000",
    "signupBonusType": "Marriott Bonvoy",
    "signupBonusCategory": "Travel",
    "signupBonusSubcategory": "Hotel",
    "signupBonusSpend": 4000,
    "signupBonusLength": 3,
    "signupBonusLengthPeriod": "Months",
    "signupAnnualFee": 250,
    "isSignupAnnualFeeWaived": 0,
    "signupStatementCredit": 0,
    "signupBonusDesc": "Earn 85,000 Bonus Points after you spend $4,000 in purchases in your first 3 months from your account opening"
  }
```


### Notes

- signupStatementCredit is cash sign-up bonus in addition to miles or points (e.g. Earn 80,000 bonus points and a $99 statement credit after spending $2,000 on purchases in the first 90 days)



### Path Parameters

 | NAME        | TYPE   | DESCRIPTION                                                      | REQUIRED |
| ---------- | ------ | ---------------------------------------------------------------- | ------ |
| none |


### Examples

- [/creditcard-signupbonus-hotel](/)

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