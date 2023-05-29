---
sidebar_position: 1
title: Image By Card
sidebar_label: By Card
---

:::info
This pulls the card image URL for single credit card
:::

```bash title="HTTP REQUEST"
GET /creditcard-card-image/{cardKey}
```


```json title="RESPONSE"

[
  {
    "cardKey": "chase-hyatt",
    "cardName": "World of Hyatt",
    "cardImageUrl": "https://rewardsccapibs.blob.core.windows.net/dr98/1085844968.png"
  }
]

```


### Notes

- For those cards that don't have an image a default image is used (only 5% of cards)
- Image is hosted on our own server so there's no need to worry about 404's
- The directory name will change periodically


### Path Parameters

 | NAME        | TYPE   | DESCRIPTION                                                      | REQUIRED |
| ---------- | ------ | ---------------------------------------------------------------- | ------ |
| cardKey| string |  unique Rewards CC key ID                               | Yes |


### Examples

- [/creditcard-card-image/chase-hyatt](/)

### Response Attributes

| NAME        | TYPE   | DESCRIPTION                                                      |
| ---------- | ------ | ---------------------------------------------------------------- |
| cardKey | string | Rewards Credit Card API unique card key | 
| cardName | string | Name of credit card | 
| cardImageUrl | string | Image URL | 


 
### Data Source(s)

Bank websites