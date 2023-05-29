---
sidebar_position: 3
title: By Zip Code
sidebar_label: By Zip Code
---


:::info
A list of Credit Unions HQs located in a US zipcode
:::

```bash title="HTTP REQUEST"
GET /creditunion-zipcode/{zipcode}
```



```json title="RESPONSE"
  {
    "creditUnionName": "Regional Members",
    "address": "P O Box 9304",
    "city": "Columbus",
    "state": "GA",
    "zipCode": "31908",
    "fullAddress": "P O Box 9304 Columbus, GA 31908",
    "creditUnionType": "Federal Credit Union",
    "membersCount": 1273,
    "membersCountRank": 3744,
    "membersYoyGrowth": 5.29,
    "totalAssets": 10000345,
    "totalAssetsRank": 3838,
    "totalAssetsYoyGrowth": 3.33,
    "totalLoans": 5505380,
    "totalLoansRank": 3598,
    "totalLoansYoyGrowth": 6.95,
    "totalDeposits": 8901440,
    "totalDepositsRank": 3800,
    "totalDepositsYoyGrowth": 2.77,
    "totalCreditUnions": 4813
  }
```


### Notes

- Zip code is based on the Credit Union headquarters



### Path Parameters

 | NAME        | TYPE   | DESCRIPTION                                                      | REQUIRED |
| ---------- | ------ | ---------------------------------------------------------------- | ------ |
| zipcode | string |  5-digit USPS zip code                                    | Yes |


### Examples

- [/creditunion-zipcode/31908](/)

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