---
sidebar_position: 3
title: By Name
sidebar_label: By Name
---


:::info
Search Banks by name
:::

```bash title="HTTP REQUEST"
GET /bank-name/{name}
```



```json title="RESPONSE"
  {
    "bankName": "JPMorgan Chase Bank, National Association",
    "fdicCert": "628",
    "fdicDate": "1934-01-01",
    "isFdicInsured": 1,
    "isCfpb": 1,
    "establishedDate": "1824-01-01",
    "bankCharterClass": "National Banks, member of the Federal Reserve Systems (FRS)",
    "address": "1111 Polaris Pkwy",
    "city": "Columbus",
    "state": "OH",
    "zipCode": "43240",
    "fullAddress": "1111 Polaris Pkwy Columbus, OH 43240",
    "website": "www.jpmorganchase.com",
    "totalAssets": 3308575000000,
    "totalAssetsrank": 2238,
    "totalDeposits": 2502364000000,
    "totalDepositsRank": 2802,
    "totalEquity": 297265000000,
    "totalEquityRank": 2421,
    "totalBanks": 4719,
    "foreignOffices": 198,
    "domesticOffices": 4819,
    "totalOffices": 5017
  }
```


### Notes

- Bank name based on entity registered with the Federal Deposit Insurance Corporation (FDIC)
- Does not include Credit Unions



### Path Parameters

 | NAME        | TYPE   | DESCRIPTION                                                      | REQUIRED |
| ---------- | ------ | ---------------------------------------------------------------- | ------ |
| name | string |  Bank name                                    | Yes (three character minimum) |


### Examples

- [/bank-name/chase](/)

### Response Attributes

| NAME        | TYPE   | DESCRIPTION                                                      |
| ---------- | ------ | ---------------------------------------------------------------- |
 | bankName | string | Name of the bank | 
 | fdicCert | string | FDIC certificate ID | 
 | fdicDate | date | Date bank joined the FDIC | 
 | isFdicInsured | bit | Is bank FDIC insured (0=no, 1=yes) | 
 | isCfpb | bit | Is bank CFPB (0=no, 1=yes) | 
 | establishedDate | date | Date bank was established | 
 | bankCharterClass | string | Charter (eg. Federal & State Savings and Loans) | 
 | address | string | Street address | 
 | city | string | City | 
 | state | string | State | 
 | zipCode | string | 5-digit zip code | 
 | fullAddress | string | Full mailing address | 
 | website | string | Website | 
 | totalAssets | number | Total bank assets | 
 | totalAssetsrank | number | Assets rank in total number of banks in the USA | 
 | totalDeposits | number | Total bank deposits | 
 | totalDepositsRank | number | Deposits rank in total number of banks in the USA | 
 | totalEquity | number | Total equity | 
 | totalEquityRank | number | Equity rank in total number of banks in the USA | 
 | totalBanks | number | Total number of banks in the United States | 
 | foreignOffices | number | Number of foreign offices | 
 | domesticOffices | number | Number of domestic offices | 
 | totalOffices | number | Total number of branch offices (foreign and domestic) | 


### Data Source(s)

Federal Deposit Insurance Corporation (FDIC)