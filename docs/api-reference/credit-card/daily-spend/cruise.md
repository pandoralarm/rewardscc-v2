---
sidebar_position: 4
title: Daily Spend Cruise
sidebar_label: Cruise
---

:::info
This pulls all credit cards that offer cruise miles for daily spend
:::

```bash title="HTTP REQUEST"
GET /creditcard-dailyspend-cruise
```



```json title="RESPONSE"
  {
    "cardKey": "barclays-hollandamerica",
    "cardIssuer": "Barclays",
    "cardName": "Holland America Line Rewards Visa® Card",
    "cardNetwork": "Visa",
    "cardType": "Personal",
    "annualFee": 0,
    "fxFee": 0.0,
    "baseSpendAmount": 1.0,
    "baseSpendCategory": "Travel",
    "baseSpendSubCategory": "Cruise",
    "baseSpendType": "Holland America Line"
  }
```


### Notes

- baseSpendCategory and baseSpendSubCategory always have values of "Travel" and "cruise"



### Path Parameters

 | NAME        | TYPE   | DESCRIPTION                                                      | REQUIRED |
| ---------- | ------ | ---------------------------------------------------------------- | ------ |
| none |


### Examples

- [/creditcard-dailyspend-cruise](/)

### Response Attributes

| NAME        | TYPE   | DESCRIPTION                                                      |
| ---------- | ------ | ---------------------------------------------------------------- |
 | cardKey | string | Rewards Credit Card API unique card key | 
 | cardIssuer | string | Issuing bank | 
 | cardName | string | Name of credit card | 
 | cardNetwork | string | Network (e.g. Visa)| 
 | cardType | string | Type (e.g. Personal) | 
 | annualFee | number | Annual fee in USD | 
 | fxFee | number | Foreign transaction fee (%) |  
 | baseSpendAmount | number | Points earned per dollar spend | 
 | baseSpendCategory | string | Spend category (e.g. Travel) | 
 | baseSpendType | string | Redemption program (e.g. American AAdvantage) | 
 
### Data Source(s)

Bank websites