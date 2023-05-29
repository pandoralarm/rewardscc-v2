---
sidebar_position: 3
title: Student Cards
sidebar_label: Student Cards
---

:::info
This pulls all credit cards that are targeted toward students (no credit history)
:::

```bash title="HTTP REQUEST"
GET /creditcard-cardtype-student
```



```json title="RESPONSE"
  {
    "cardKey": "boa-unlimitedcashrewardsstudents",
    "cardIssuer": "Bank of America",
    "cardName": "Bank of America® Unlimited Cash Rewards for Students",
    "cardNetwork": "Visa",
    "cardType": "Student",
    "annualFee": 0
  }
```


### Notes

- Student credit cards are unsecured credit cards specifcally for those attending college and have little to no credit history



### Path Parameters

 | NAME        | TYPE   | DESCRIPTION                                                      | REQUIRED |
| ---------- | ------ | ---------------------------------------------------------------- | ------ |
| none |


### Examples

- [/creditcard-cardtype-student](/)

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