---
sidebar_position: 5
title: By Zip Code
sidebar_label: By Zip Code
---


:::info
A list of Banks HQs located in a US zipcode
:::

```bash title="HTTP REQUEST"
GET /bank-zipcode/{zipcode}
```



```json title="RESPONSE"
  {
    "bankName": "The Pioneer Savings Bank",
    "fdicCert": "27847",
    "fdicDate": "1938-06-02",
    "isFdicInsured": 1,
    "isCfpb": 0,
    "establishedDate": "1922-01-01",
    "bankCharterClass": "State Chartered Banks, not member of the Federal Reserve System (FRS)",
    "address": "6701 Detroit Ave",
    "city": "Cleveland",
    "state": "OH",
    "zipCode": "44102",
    "fullAddress": "6701 Detroit Ave Cleveland, OH 44102",
    "website": "www.psb1922.com",
    "totalAssets": 41454000,
    "totalAssetsrank": 1770,
    "totalDeposits": 25552000,
    "totalDepositsRank": 2756,
    "totalEquity": 4893000,
    "totalEquityRank": 1409,
    "totalBanks": 4719,
    "foreignOffices": 0,
    "domesticOffices": 1,
    "totalOffices": 1
  }
```


### Notes

- Zip code is based on the Bank headquarters address
- Does not include Credit Unions



### Path Parameters

 | NAME        | TYPE   | DESCRIPTION                                                      | REQUIRED |
| ---------- | ------ | ---------------------------------------------------------------- | ------ |
| zipcode | string |  5-digit USPS zip code                                    | Yes |


### Examples

- [/bank-zipcode/44102](/)

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