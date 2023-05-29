---
sidebar_position: 1
title: By Name
sidebar_label: By Name
---


:::info
Search Credit Unions by name
:::

```bash title="HTTP REQUEST"
GET /creditunion-name/{name}
```



```json title="RESPONSE"
  {
    "creditUnionName": "Navy Federal Credit Union",
    "address": "820 Follin Lane",
    "city": "Vienna",
    "state": "VA",
    "zipCode": "22180",
    "fullAddress": "820 Follin Lane Vienna, VA 22180",
    "creditUnionType": "Federal Credit Union",
    "membersCount": 12117003,
    "membersCountRank": 1,
    "membersYoyGrowth": 11.26,
    "totalAssets": 156549073689,
    "totalAssetsRank": 1,
    "totalAssetsYoyGrowth": 3.66,
    "totalLoans": 105535083467,
    "totalLoansRank": 1,
    "totalLoansYoyGrowth": 16.51,
    "totalDeposits": 135318212164,
    "totalDepositsRank": 1,
    "totalDepositsYoyGrowth": 7.54,
    "totalCreditUnions": 4813
  }
```


### Notes

- Credit Union name based on entity registered with the National Credit Union Administration (NCUA)



### Path Parameters

 | NAME        | TYPE   | DESCRIPTION                                                      | REQUIRED |
| ---------- | ------ | ---------------------------------------------------------------- | ------ |
| name | string |  Credit Union name                                    | Yes (three character minimum) |


### Examples

- [/creditunion-state/navy](/)

### Response Attributes

| NAME        | TYPE   | DESCRIPTION                                                      |
| ---------- | ------ | ---------------------------------------------------------------- |
 | creditUnionName | string | Name of the Credit Union | 
 | address | string | Street address | 
 | city | string | City | 
 | state | string | State | 
 | zipCode | string | 5-digit zip code | 
 | fullAddress | string | Full mailing address | 
 | creditUnionType | string | State or federal chartered credit union | 
 | membersCount | number | Number of members | 
 | membersCountRank | number | Members rank in total number of credit unions in the USA | 
 | membersYoyGrowth | number | Percentage growth of members year-over-year (YoY) | 
 | totalAssets | number | Total credit union assets | 
 | totalAssetsRank | number | Assets rank in total number of credit unions in the USA | 
 | totalAssetsYoyGrowth | number | Percentage growth of total assets year-over-year (YoY) | 
 | totalLoans | number | Total credit union loans | 
 | totalLoansRank | number | Loans rank in total number of credit unions in the USA | 
 | totalLoansYoyGrowth | number | Percentage growth of total loans year-over-year (YoY) | 
 | totalDeposits | number | Total credit union deposits | 
 | totalDepositsRank | number | Deposits rank in total number of credit unions in the USA | 
 | totalDepositsYoyGrowth | number | Percentage growth of total deposits year-over-year (YoY) | 
 | totalCreditUnions | number | Total number of credit unions in the United States | 

### Data Source(s)

National Credit Union Administration (NCUA)
