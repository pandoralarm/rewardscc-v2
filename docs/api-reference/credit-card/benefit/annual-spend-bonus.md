---
sidebar_position: 1
title: Annual Spend Bonus
sidebar_label: Annual Spend Bonus
---

:::info
This pulls all credit cards that offer an annual spend bonus
:::

```bash title="HTTP REQUEST"
GET /creditcard-benefit-annualspend
```



```json title="RESPONSE"
  {
    "cardKey": "amex-hiltonsurpass",
    "cardIssuer": "American Express",
    "cardName": "Hilton Honors American Express Surpass® Card",
    "cardNetwork": "American Express",
    "cardType": "Personal",
    "annualFee": 95,
    "annualBonus": [
      {
        "annualSpendDesc": "Honors Diamond status - spend $40,000 on eligible purchases on your Card in a calendar year and you can earn Hilton Honors Diamond status through the end of the next calendar year"
      },
      {
        "annualSpendDesc": "Earn a Free Night Reward from Hilton Honors after you spend $15,000 on eligible purchases on your Card in a calendar year"
      }
    ]
  }
```


### Notes

- Some cards offer multiple bonuses



### Path Parameters

 | NAME        | TYPE   | DESCRIPTION                                                      | REQUIRED |
| ---------- | ------ | ---------------------------------------------------------------- | ------ |
| none |


### Examples

- [/creditcard-benefit-annualspend](/)

### Response Attributes

| NAME        | TYPE   | DESCRIPTION                                                      |
| ---------- | ------ | ---------------------------------------------------------------- |
 | cardKey | string | Rewards Credit Card API unique card key | 
 | cardIssuer | string | Issuing bank | 
 | cardName | string | Name of credit card | 
 | cardNetwork | string | Network (e.g. Visa)| 
 | cardType | string | Type (e.g. Personal) | 
 | annualFee | number | Annual fee in USD | 
 | annualSpendDesc | string |Annual spend bonus description | 
 
### Data Source(s)

Bank websites