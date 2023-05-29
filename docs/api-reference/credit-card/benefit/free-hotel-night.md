---
sidebar_position: 3
title: Free Hotel Night
sidebar_label: Free Hotel Night
---

:::info
This pulls all credit cards that offer a free hotel night on the card anniversary renewal
:::

```bash title="HTTP REQUEST"
GET /creditcard-benefit-hotelnight
```



```json title="RESPONSE"
  {
    "cardKey": "amex-biz-marriottbonvoy",
    "cardIssuer": "American Express",
    "cardName": "Marriott Bonvoy Business® Card",
    "cardNetwork": "American Express",
    "cardType": "Business",
    "annualFee": 125,
    "freeHotelNight": "Get one Free Night Award every year, after your Card renewal month."
  }
```


### Notes

- These cards include a complimentary free hotel night on anniversary renewal



### Path Parameters

 | NAME        | TYPE   | DESCRIPTION                                                      | REQUIRED |
| ---------- | ------ | ---------------------------------------------------------------- | ------ |
| none |


### Examples

- [/creditcard-benefit-hotelnight](/)

### Response Attributes

| NAME        | TYPE   | DESCRIPTION                                                      |
| ---------- | ------ | ---------------------------------------------------------------- |
 | cardKey | string | Rewards Credit Card API unique card key | 
 | cardIssuer | string | Issuing bank | 
 | cardName | string | Name of credit card | 
 | cardNetwork | string | Network (e.g. Visa)| 
 | cardType | string | Type (e.g. Personal) | 
 | annualFee | number | Annual fee in USD | 
 | freeHotelNight | string |Free hotel night benefit description | 
 
### Data Source(s)

Bank websites