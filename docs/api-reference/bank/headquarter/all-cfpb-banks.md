---
sidebar_position: 1
title: All CFPB Banks
sidebar_label: All CFPB Banks
---


:::info
List of banks that are regulated by the Consumer Financial Protection Bureau (CFPB)
:::

```bash title="HTTP REQUEST"
GET /bank-cfpb
```



```json title="RESPONSE"
  {
    "bankName": "Dollar Bank, Federal Savings Bank",
    "fdicCert": "32245",
    "fdicDate": "1984-09-21",
    "isFdicInsured": 1,
    "isCfpb": 1,
    "establishedDate": "1984-09-21",
    "bankCharterClass": "Federal Savings Bank",
    "address": "340 4th Ave",
    "city": "Pittsburgh",
    "state": "PA",
    "zipCode": "15222",
    "fullAddress": "340 4th Ave Pittsburgh, PA 15222",
    "website": "www.dollar.bank",
    "totalAssets": 11027173000,
    "totalAssetsrank": 4532,
    "totalDeposits": 9371372000,
    "totalDepositsRank": 121,
    "totalEquity": 973278000,
    "totalEquityRank": 52,
    "totalBanks": 4719,
    "foreignOffices": 0,
    "domesticOffices": 95,
    "totalOffices": 95
  }
```


### Notes

- Does not include Credit Unions



### Path Parameters

 | NAME        | TYPE   | DESCRIPTION                                                      | REQUIRED |
| ---------- | ------ | ---------------------------------------------------------------- | ------ |
| none |


### Examples

- [/bank-cfpb](/)

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