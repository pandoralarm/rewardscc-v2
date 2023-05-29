---
sidebar_position: 2
title: Search Card by Name
sidebar_label: Search by Name
---

:::info
Search credit card names by string
:::

```bash title="HTTP REQUEST"
GET /creditcard-detail-namesearch/{name}
```


```json title="RESPONSE"

[
  {
    "cardKey": "chase-biz-ihgpremier",
    "cardIssuer": "Chase",
    "cardName": "IHG® Rewards Premier Business"
  },
  {
    "cardKey": "chase-biz-ihgrewards",
    "cardIssuer": "Chase",
    "cardName": "IHG® Rewards Business"
  },
  {
    "cardKey": "chase-ihgpremier",
    "cardIssuer": "Chase",
    "cardName": "IHG® Rewards Premier"
  },
  {
    "cardKey": "chase-ihgrewardsclassic",
    "cardIssuer": "Chase",
    "cardName": "IHG® Rewards Classic"
  },
  {
    "cardKey": "chase-ihgrewardsselect",
    "cardIssuer": "Chase",
    "cardName": "IHG® Rewards Select"
  },
  {
    "cardKey": "chase-ihgtraveler",
    "cardIssuer": "Chase",
    "cardName": "IHG® Rewards Traveler"
  }
]


```




### Path Parameters

 | NAME        | TYPE   | DESCRIPTION                                                      | REQUIRED |
| ---------- | ------ | ---------------------------------------------------------------- | ------ |
| name | string |  Card name                                    | Yes (three character minimum) |


### Examples

- [/creditcard-detail-namesearch/ihg](/)

### Response Attributes

| NAME        | TYPE   | DESCRIPTION                                                      |
| ---------- | ------ | ---------------------------------------------------------------- |
| cardKey | string | Rewards Credit Card API unique card key | 
| cardName | string | Name of credit card | 
| cardIssuer | string | Issuing bank | 


 
### Data Source(s)

Bank websites