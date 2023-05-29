---
sidebar_position: 4
title: Lounge Access
sidebar_label: Lounge Access
---

:::info
This pulls all credit cards that offer aiport lounge access as part of the card benefits
:::

```bash title="HTTP REQUEST"
GET /creditcard-benefit-loungeaccess
```



```json title="RESPONSE"
  {
    "cardKey": "amex-biz-hilton",
    "cardIssuer": "American Express",
    "cardName": "Hilton Honors Business Card",
    "cardNetwork": "American Express",
    "cardType": "Business",
    "annualFee": 95,
    "loungeAccess": "10 Complimentary Priority Pass Visits - Whether you just want to relax or get work done, you’ll have 10 complimentary visits to a selection of over 1,200 airport lounges each year once enrolled in Priority Pass™ Select Membership."
  }
```


### Notes

- Some cards offer unlimited entry and others a limited amount of visits



### Path Parameters

 | NAME        | TYPE   | DESCRIPTION                                                      | REQUIRED |
| ---------- | ------ | ---------------------------------------------------------------- | ------ |
| none |


### Examples

- [/creditcard-benefit-loungeaccess](/)

### Response Attributes

| NAME        | TYPE   | DESCRIPTION                                                      |
| ---------- | ------ | ---------------------------------------------------------------- |
 | cardKey | string | Rewards Credit Card API unique card key | 
 | cardIssuer | string | Issuing bank | 
 | cardName | string | Name of credit card | 
 | cardNetwork | string | Network (e.g. Visa)| 
 | cardType | string | Type (e.g. Personal) | 
 | annualFee | number | Annual fee in USD | 
 | loungeAccess | string |Lounge access benefit description | 
 
### Data Source(s)

Bank websites