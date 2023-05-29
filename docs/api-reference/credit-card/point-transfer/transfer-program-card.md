---
sidebar_position: 2
title: Transfer Program Card
sidebar_label: Transfer Program Card
---

:::info
This pulls a list of all credit cards that can transfer points to the transfer program (Hilton, United, etc.)
:::

```bash title="HTTP REQUEST"
GET /creditcard-pointtransfer-transferprogramcard/{transferPartnerId}
```



```json title="RESPONSE"
  {
    "transferPartnerName": "Hilton Honors",
    "transferPartnerId": 1722165547,
    "cardKey": "charlesschwab-amexplat",
    "cardName": "American Express Platinum Card® for Schwab",
    "cardIssuer": "Charles Schwab",
    "rewardProgramName": "American Express Membership Rewards",
    "baseSpendAmount": 1.0,
    "spendTotal": 2.6,
    "transferRatio": 2.0,
    "bonusRatio": 0.3,
    "totalRatio": 2.6,
    "bonusDateEnd": "2023-04-30"
  }
```


### Notes

- Avios programs (British Airways Executive Club, Iberia Plus, Aer Lingus AerClub) are aggreated into a single points currency





### Path Parameters

 | NAME        | TYPE   | DESCRIPTION                                                      | REQUIRED |
| ---------- | ------ | ---------------------------------------------------------------- | ------ |
| transferPartnerId | string |  unique ID from [GET Transfer Program List](transfer-program-list)   | Yes |



### Examples

- [/creditcard-pointtransfer-transferprogramcard/1722165547](/)

### Response Attributes

| NAME        | TYPE   | DESCRIPTION                                                      |
| ---------- | ------ | ---------------------------------------------------------------- |
| transferPartnerName | string | Transfer partner name | 
| transferPartnerId | string | Transfer partner ID |
| cardKey | string | Rewards Credit Card API unique card key | 
| cardName | string | Name of credit card | 
| cardIssuer | string | Issuing bank | 
| rewardProgramName | string | Credit card point program (e.g. American Express Membership Rewards)| 
| baseSpendAmount | number | Base points earned per dollar spend | 
| spendTotal | number | Transfer points earned per dollar (baseSpendAmount * totalRatio) |
| transferRatio | number | Transfer ratio, bonus not included (2.0 = for every 1 point you transfer you receive 2 points )   |
| bonusRatio | number | Bonus amount (.3 = 30%) |
| totalRatio | number | Total ratio which includes bonus if exists (transfer ratio * bonusRatio : 2.6 = you receive 2.6 points ) |
| bonusDateEnd | date | Date bonus transfer ends |






 
### Data Source(s)

Bank websites