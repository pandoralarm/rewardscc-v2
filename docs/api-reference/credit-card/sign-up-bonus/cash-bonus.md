---
title: Sign-up Bonus Cash Bonus
sidebar_label: Cash Bonus
---

:::info
This pulls all credit cards that offer cash as a sign-up bonus
:::

```bash title="HTTP REQUEST"
GET /creditcard-signupbonus-cash
```



```json title="RESPONSE"
  {
    "cardKey": "citi-customcash",
    "cardIssuer": "Citi",
    "cardName": "Citi Custom Cash",
    "cardNetwork": "Mastercard",
    "cardType": "Personal",
    "annualFee": 0,
    "signupBonusAmount": "200",
    "signupBonusType": "Cash",
    "signupBonusCategory": "Cash",
    "signupBonusSubcategory": "Cash",
    "signupBonusSpend": 1500,
    "signupBonusLength": 6,
    "signupBonusLengthPeriod": "months",
    "signupAnnualFee": 0,
    "isSignupAnnualFeeWaived": 0,
    "signupStatementCredit": 0,
    "signupBonusDesc": "Earn $200 cash back after you spend $1,500 on purchases in the first 6 months of account opening. This bonus offer will be fulfilled as 20,000 ThankYou® Points, which can be redeemed for $200 cash back."
  }
```


### Notes

- signupStatementCredit is cash sign-up bonus in addition to miles or points (e.g. Earn 80,000 bonus points and a $99 statement credit after spending $2,000 on purchases in the first 90 days)



### Path Parameters

 | NAME        | TYPE   | DESCRIPTION                                                      | REQUIRED |
| ---------- | ------ | ---------------------------------------------------------------- | ------ |
| none |


### Examples

- [/creditcard-signupbonus-cash](/)

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