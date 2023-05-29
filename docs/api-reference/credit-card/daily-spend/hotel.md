---
sidebar_position: 7
title: Daily Spend Hotel
sidebar_label: Hotel
---

:::info
This pulls all credit cards that offer hotel points for daily spend
:::

```bash title="HTTP REQUEST"
GET /creditcard-dailyspend-hotel
```



```json title="RESPONSE"
  {
    "cardKey": "chase-hyatt",
    "cardIssuer": "Chase",
    "cardName": "World of Hyatt Credit Card",
    "cardNetwork": "Visa",
    "cardType": "Personal",
    "annualFee": 95,
    "fxFee": 0.0,
    "baseSpendAmount": 1.0,
    "baseSpendCategory": "Travel",
    "baseSpendSubCategory": "Hotel",
    "baseSpendType": "World of Hyatt Loyalty Program"
  }
```


### Notes

- baseSpendCategory and baseSpendSubCategory always have values of "Travel" and "Hotel"



### Path Parameters

 | NAME        | TYPE   | DESCRIPTION                                                      | REQUIRED |
| ---------- | ------ | ---------------------------------------------------------------- | ------ |
| none |


### Examples

- [/creditcard-dailyspend-airline](/)

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