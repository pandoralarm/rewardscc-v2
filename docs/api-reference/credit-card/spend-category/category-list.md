---
title: Category List
sidebar_label: Category List
---

:::info
This pulls a list of all spend categories
:::

```bash title="HTTP REQUEST"
GET /creditcard-spendcategory-categorylist/
```



```json title="RESPONSE"
  {
    "categoryName": "Grocery Stores",
    "categoryId": "977642681"
  }
```


### Notes

- categoryId is use as a path parameter in [GET Category Card](category-card)



### Path Parameters

 | NAME        | TYPE   | DESCRIPTION                                                      | REQUIRED |
| ---------- | ------ | ---------------------------------------------------------------- | ------ |
| none |


### Examples

- [/creditcard-spendcategory-categorylist](/)

### Response Attributes

| NAME        | TYPE   | DESCRIPTION                                                      |
| ---------- | ------ | ---------------------------------------------------------------- |
| categoryName | string | Spend Bonus Category | 
| categoryId | string | Spend Bonus Category ID | 



 
### Data Source(s)

Bank websites