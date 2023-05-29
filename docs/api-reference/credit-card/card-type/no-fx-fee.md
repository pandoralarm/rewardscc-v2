---
sidebar_position: 1
title: No FX Fee
sidebar_label: No FX Fee
---

:::info
This pulls all credit cards that have no foreign transaction fee and no annual fee
:::

```bash title="HTTP REQUEST"
GET /creditcard-cardtype-nofx
```



```json title="RESPONSE"
  {
    "cardKey": "truist-enjoytravel",
    "cardIssuer": "Truist",
    "cardName": "Truist Enjoy Travel credit card",
    "cardNetwork": "Visa",
    "cardType": "Personal",
    "annualFee": 0
  }
```


### Notes

- 
- Cards that waive the first year annual fee as part of the signup bonus are not included



### Path Parameters

 | NAME        | TYPE   | DESCRIPTION                                                      | REQUIRED |
| ---------- | ------ | ---------------------------------------------------------------- | ------ |
| none |


### Examples

- [/creditcard-cardtype-nofx](/)

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