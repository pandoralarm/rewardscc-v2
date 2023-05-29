---
sidebar_position: 4
title: By State
sidebar_label: By State
---


:::info
A list of Banks HQs located in a US state
:::

```bash title="HTTP REQUEST"
GET /bank-state/{state}
```



```json title="RESPONSE"
  {
    "bankName": "HomeStreet Bank",
    "fdicCert": "32489",
    "fdicDate": "1986-08-18",
    "isFdicInsured": 1,
    "isCfpb": 0,
    "establishedDate": "1986-08-18",
    "bankCharterClass": "State Chartered Banks, not member of the Federal Reserve System (FRS)",
    "address": "601 Union Street, Suite 2000",
    "city": "Seattle",
    "state": "WA",
    "zipCode": "98101",
    "fullAddress": "601 Union Street, Suite 2000 Seattle, WA 98101",
    "website": "WWW.HOMESTREET.COM",
    "totalAssets": 9044497000,
    "totalAssetsrank": 203,
    "totalDeposits": 6612938000,
    "totalDepositsRank": 797,
    "totalEquity": 747858000,
    "totalEquityRank": 585,
    "totalBanks": 4719,
    "foreignOffices": 0,
    "domesticOffices": 57,
    "totalOffices": 57
  }
```


### Notes

- State is two letter US state abbreviation
- Does not include Credit Unions



### Path Parameters

 | NAME        | TYPE   | DESCRIPTION                                                      | REQUIRED |
| ---------- | ------ | ---------------------------------------------------------------- | ------ |
| state | string |  Two letter US state abbreviation                                    | Yes |


### Examples

- [/bank-state/WA](/)

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