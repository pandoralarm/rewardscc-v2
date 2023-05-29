---
sidebar_position: 3
title: Secured Cards
sidebar_label: Secured Cards
---

:::info
This pulls all secured credit cards
:::

```bash title="HTTP REQUEST"
GET /creditcard-cardtype-secured
```



```json title="RESPONSE"
  {
    "cardKey": "boa-americardsecured",
    "cardIssuer": "Bank of America",
    "cardName": "BankAmericard® Secured",
    "cardNetwork": "Mastercard",
    "cardType": "Personal Secured",
    "annualFee": 0
  }
```


### Notes

- 
- Card Type can either be Personal Secured or Business Secured
- Secured credit cards require a cash deposit



### Path Parameters

 | NAME        | TYPE   | DESCRIPTION                                                      | REQUIRED |
| ---------- | ------ | ---------------------------------------------------------------- | ------ |
| none |


### Examples

- [/creditcard-cardtype-secured](/)

### Response Attributes

| NAME        | TYPE   | DESCRIPTION                                                      |
| ---------- | ------ | ---------------------------------------------------------------- |
 | cardKey | string | Rewards Credit Card API unique card key | 
 | cardIssuer | string | Issuing bank | 
 | cardName | string | Name of credit card | 
 | cardNetwork | string | Network (e.g. Visa)| 
 | cardType | string | Type (e.g. Personal) | 
 | annualFee | number | Annual fee in USD | 

 
### Data Source(s)

Bank websites