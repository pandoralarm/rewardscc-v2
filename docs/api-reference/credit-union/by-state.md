---
sidebar_position: 2
title: By State
sidebar_label: By State
---


:::info
A list of Credit Unions HQs located in a US state
:::

```bash title="HTTP REQUEST"
GET /creditunion-state/{state}
```



```json title="RESPONSE"
  {
    "creditUnionName": "Boeing Employees",
    "address": "12770 Gateway Dr S",
    "city": "Tukwila",
    "state": "WA",
    "zipCode": "98168",
    "fullAddress": "12770 Gateway Dr S Tukwila, WA 98168",
    "creditUnionType": "State Chartered Credit Union",
    "membersCount": 1371511,
    "membersCountRank": 4,
    "membersYoyGrowth": 3.58,
    "totalAssets": 29162216216,
    "totalAssetsRank": 4,
    "totalAssetsYoyGrowth": -1.36,
    "totalLoans": 15774116905,
    "totalLoansRank": 5,
    "totalLoansYoyGrowth": 24.23,
    "totalDeposits": 26326442682,
    "totalDepositsRank": 4,
    "totalDepositsYoyGrowth": 4.4,
    "totalCreditUnions": 4813
  }
```


### Notes

- State is two letter US state abbreviation



### Path Parameters

 | NAME        | TYPE   | DESCRIPTION                                                      | REQUIRED |
| ---------- | ------ | ---------------------------------------------------------------- | ------ |
| state | string |  Two letter US state abbreviation                                    | Yes |


### Examples

- [/creditunion-state/OH](/)

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
