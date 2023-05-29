---
title: Category Card
sidebar_label: Category Card
---

:::info
This pulls a list of all credit cards within a spend category
:::

```bash title="HTTP REQUEST"
GET /creditcard-spendcategory-categorycard/{categoryid}
```



```json title="RESPONSE"
  {
    "cardKey": "chase-freedomflex",
    "cardName": "Chase Freedom Flex℠ ",
    "cardIssuer": "Chase",
    "cardNetwork": "Mastercard",
    "categoryType": "Multi Category",
    "categoryName": "Grocery Stores",
    "categoryId": 977642681,
    "earnMultiplier": 5.0,
    "spendType": "Chase Ultimate Rewards",
    "isDateLimit": 1,
    "limitBeginDate": "2023-01-01",
    "limitEndDate": "2023-03-31",
    "isSpendLimit": "1",
    "spendLimit": 1500.0,
    "spendLimitResetPeriod": "Quarter"
  }
```


### Notes

- categoryType:
   - Multi Category: Spend Limit is shared across two or more categories, for example, Chase Freedom has a quarterly promotion where Grocery Stores, Fitness Club, and Target have a total spend limit of $1,500
   - Option 1: Several cards have an option where you can select one category within a list to get the spend bonus applied (eg. Bank of America® Customized Cash Rewards) 
   - Option 1 (Select two): Similar to Option 1 except you can select two cateogories (eg. U.S. Bank Cash+® Visa Signature®)
   - Single Category: Most common, one category




### Path Parameters

 | NAME        | TYPE   | DESCRIPTION                                                      | REQUIRED |
| ---------- | ------ | ---------------------------------------------------------------- | ------ |
| categoryid | string |  unique ID from [GET Category List](category-list) | Yes |



### Examples

- [/creditcard-spendcategory-categorycard/977642681](/)

### Response Attributes

| NAME        | TYPE   | DESCRIPTION                                                      |
| ---------- | ------ | ---------------------------------------------------------------- |
| cardKey | string | Rewards Credit Card API unique card key | 
| cardName | string | Name of credit card | 
| cardIssuer | string | Issuing bank | 
| cardNetwork | string | Network (e.g. Visa)| 
| categoryType | string | Category type (see notes section) |
| categoryName | string | Spend category name (eg. Dining) |
| categoryId | string | unique category ID |
| earnMultiplier | number | Points/miles per dollar |
| spendType | string | Card earning currency (eg. cash, AMEX Membership Rewards) |
| isDateLimit | bit | Is category date limited? (0=no, 1=yes)  |
| limitBeginDate | date | Date spend bonus begins |
| limitEndDate | date | Date spend bonus ends |
| isSpendLimit | bit | Is there a spend limit? (0=no, 1=yes) |
| spendLimit | number | Spent limit amount if applies |
| spendLimitResetPeriod | string | If spend limit when the limit is reset (eg. Year) |




 
### Data Source(s)

Bank websites