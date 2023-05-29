---
sidebar_position: 2
title: Free Checked Bag
sidebar_label: Free Checked Bag
---


:::info
This pulls all credit cards that offer a free checked bag as part of its benefits
:::

```bash title="HTTP REQUEST"
GET /creditcard-benefit-checkedbag
```



```json title="RESPONSE"
  {
    "cardKey": "boa-biz-alaska",
    "cardIssuer": "Bank of America",
    "cardName": "Alaska Airlines Business credit card",
    "cardNetwork": "Visa",
    "cardType": "Business",
    "annualFee": 75,
    "freeCheckedBag": "Free checked bag for you and up to 6 guests on the same reservation - that's a savings of $60 per person roundtrip!"
  }
```


### Notes

- Some card benefits allow for a free checked bag on guests traveling on the same reservation



### Path Parameters

 | NAME        | TYPE   | DESCRIPTION                                                      | REQUIRED |
| ---------- | ------ | ---------------------------------------------------------------- | ------ |
| none |


### Examples

- [/creditcard-benefit-checkedbag](/)

### Response Attributes

| NAME        | TYPE   | DESCRIPTION                                                      |
| ---------- | ------ | ---------------------------------------------------------------- |
 | cardKey | string | Rewards Credit Card API unique card key | 
 | cardIssuer | string | Issuing bank | 
 | cardName | string | Name of credit card | 
 | cardNetwork | string | Network (e.g. Visa)| 
 | cardType | string | Type (e.g. Personal) | 
 | annualFee | number | Annual fee in USD | 
 | freeCheckedBag | string |Free checked bag benefit description | 
 
### Data Source(s)

Bank websites