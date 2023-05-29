---
sidebar_position: 5
title: Trusted Traveler Credit
sidebar_label: Trusted Traveler Credit
---


:::info
This pulls all credit cards that offer a Trusted Traveler credit
:::

```bash title="HTTP REQUEST"
GET /creditcard-benefit-tsa
```



```json title="RESPONSE"
  {
    "cardKey": "barclays-pricelinevip",
    "cardIssuer": "Barclays",
    "cardName": "Priceline VIP Rewards™ Visa® Card",
    "cardNetwork": "Visa",
    "cardType": "Personal",
    "annualFee": 0,
    "trustedTraveler": "Up to $100 Global Entry or TSA PreCheck application fee credit each anniversary year if you spend $10,000 on purchases"
  }
```


### Notes

- Includes Global Entry, TSA PreCheck® or NEXUS Statement Credit



### Path Parameters

 | NAME        | TYPE   | DESCRIPTION                                                      | REQUIRED |
| ---------- | ------ | ---------------------------------------------------------------- | ------ |
| none |


### Examples

- [/creditcard-benefit-tsa](/)

### Response Attributes

| NAME        | TYPE   | DESCRIPTION                                                      |
| ---------- | ------ | ---------------------------------------------------------------- |
 | cardKey | string | Rewards Credit Card API unique card key | 
 | cardIssuer | string | Issuing bank | 
 | cardName | string | Name of credit card | 
 | cardNetwork | string | Network (e.g. Visa)| 
 | cardType | string | Type (e.g. Personal) | 
 | annualFee | number | Annual fee in USD | 
 | trustedTraveler | string |Benefit description | 
 
### Data Source(s)

Bank websites