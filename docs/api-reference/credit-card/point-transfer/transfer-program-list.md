---
sidebar_position: 1
title: Transfer Program List
sidebar_label: Transfer Program List
---

:::info
This pulls a list of all travel programs that points can be transfered to from a bank points program (e.g American Express Membership Rewards)
:::

```bash title="HTTP REQUEST"
GET /creditcard-pointtransfer-transferprogramlist/
```



```json title="RESPONSE"
  {
    "transferPartnerName": "Hilton Honors",
    "transferPartnerId": 1722165547
  }
```


### Notes

- The following programs offer transferable points: Capital One Miles, Chase Ultimate Rewards, Citi ThankYou Rewards, Wells Fargo Bilt Rewards
- Avios programs (British Airways Executive Club, Iberia Plus, Aer Lingus AerClub) are aggreated into a single points currency
- transferPartnerId is use as a path parameter in [GET Transfer Program Card](transfer-program-card)



### Path Parameters

 | NAME        | TYPE   | DESCRIPTION                                                      | REQUIRED |
| ---------- | ------ | ---------------------------------------------------------------- | ------ |
| none |


### Examples

- [/creditcard-pointtransfer-transferprogramlist/](/)

### Response Attributes

| NAME        | TYPE   | DESCRIPTION                                                      |
| ---------- | ------ | ---------------------------------------------------------------- |
| transferPartnerName | string | Transfer partner name | 
| transferPartnerId | string | Transfer partner ID | 



 
### Data Source(s)

Bank websites