---
sidebar_position: 3
title: By Zip Code
sidebar_label: By Zip Code
---


:::info
Lookup all bank branches in a zip code
:::

```bash title="HTTP REQUEST"
GET /banklocations-zipcode/{zipcode}
```



```json title="RESPONSE"
  {
    "fdicCert": "6672",
    "branchName": "Fairview Park Bankmart Branch",
    "bankName": "Fifth Third Bank, National Association",
    "dateOpened": "1996-04-01",
    "branchType": "Full Service Brick and Mortar Office",
    "isMainOffice": 0,
    "isForeignOffice": 0,
    "address": "21690 Lorain Road",
    "city": "Fairview Park",
    "state": "OH",
    "zipCode": "44126",
    "fullAddress": "21690 Lorain Road Fairview Park, OH 44126"
  }
```


### Notes


- Zip code is the physical location of the bank branch
- Does not include Credit Unions



### Path Parameters

 | NAME        | TYPE   | DESCRIPTION                                                      | REQUIRED |
| ---------- | ------ | ---------------------------------------------------------------- | ------ |
| zipcode | string |  5-digit USPS zip code                                    | Yes |


### Examples

- [/banklocations-zipcode/44126](/)

### Response Attributes

| NAME        | TYPE   | DESCRIPTION                                                      |
| ---------- | ------ | ---------------------------------------------------------------- |
 | fdicCert | string | FDIC certificate ID | 
 | branchName | string | Name of the branch | 
 | bankName | string | Name of the bank | 
 | dateOpened | date | Date physical branch opened | 
 | branchType | string | Branch type (eg. Full Service Brick and Mortar Office) | 
 | isMainOffice | bit | Is branch main office (0=no, 1=yes) | 
 | isForeignOffice | bit | Is office in a foreign country (0=no, 1=yes) | 
 | address | string | Street address | 
 | city | string | City | 
 | state | string | State | 
 | zipCode | string | 5-digit zip code | 
 | fullAddress | string | Full mailing address | 





### Data Source(s)

Federal Deposit Insurance Corporation (FDIC)