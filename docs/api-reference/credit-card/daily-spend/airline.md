---
sidebar_position: 2
title: Daily Spend Airline
sidebar_label: Airline
---

:::info
This pulls all credit cards that offer airline miles for daily spend
:::

```bash title="HTTP REQUEST"
GET /creditcard-dailyspend-airline
```



```json title="RESPONSE"
  {
    "cardKey": "barclays-biz-hawaiianairlines",
    "cardIssuer": "Barclays",
    "cardName": "Hawaiian Airlines® World Elite Business Mastercard®",
    "cardNetwork": "Mastercard",
    "cardType": "Business",
    "annualFee": 99,
    "fxFee": 0.0,
    "baseSpendAmount": 1.0,
    "baseSpendCategory": "Travel",
    "baseSpendSubCategory": "Airline",
    "baseSpendType": "HawaiianMiles"
  }
```


### Notes

- baseSpendCategory and baseSpendSubCategory always have values of "Travel" and "Airline"



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