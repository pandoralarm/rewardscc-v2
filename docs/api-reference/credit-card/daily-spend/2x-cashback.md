---
sidebar_position: 1
title: Daily Spend 2x Cashback
sidebar_label: 2x Cashback
---

:::info
This pulls all credit cards that offer 2% cashback
:::

```bash title="HTTP REQUEST"
GET /creditcard-dailyspend-2cashback
```



```json title="RESPONSE"
  {
    "cardKey": "capitalone-biz-sparkcashplus",
    "cardIssuer": "Capital One",
    "cardName": "Spark 2% Cash Plus",
    "cardNetwork": "Visa",
    "cardType": "Business",
    "annualFee": 150,
    "fxFee": 0.0,
    "baseSpendAmount": 2.0,
    "baseSpendSubCategory": "Cashback",
    "baseSpendCategory": "Cashback",
    "baseSpendType": "Cash"
  }
```


### Notes

- baseSpendCategory and baseSpendSubCategory always have values of "Cashback"



### Path Parameters

 | NAME        | TYPE   | DESCRIPTION                                                      | REQUIRED |
| ---------- | ------ | ---------------------------------------------------------------- | ------ |
| none |


### Examples

- [/creditcard-dailyspend-2cashback](/)

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