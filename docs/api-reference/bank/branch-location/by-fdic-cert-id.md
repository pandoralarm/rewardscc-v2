---
sidebar_position: 1
title: By FDIC Cert ID
sidebar_label: By FDIC Cert ID
---


:::info
Lookup a Bank's physical locations by FDIC certificate ID
:::

```bash title="HTTP REQUEST"
GET /banklocations-fdic/{fdicid}
```



```json title="RESPONSE"
  {
    "fdicCert": "628",
    "branchName": "Federal Way Branch",
    "bankName": "JPMorgan Chase Bank, National Association",
    "dateOpened": "1969-06-17",
    "branchType": "Full Service Brick and Mortar Office",
    "isMainOffice": 0,
    "isForeignOffice": 0,
    "address": "32000 Pacific Highway South",
    "city": "Federal Way",
    "state": "WA",
    "zipCode": "98003",
    "fullAddress": "32000 Pacific Highway South Federal Way, WA 98003"
  }
```


### Notes

- The FDIC Certificate ID is a unique number assigned to each depository institution by the Federal Deposit Insurance Corporation (FDIC)
- Zip code is the physical location of the bank branch
- Does not include Credit Unions



### Path Parameters

 | NAME        | TYPE   | DESCRIPTION                                                      | REQUIRED |
| ---------- | ------ | ---------------------------------------------------------------- | ------ |
| fdicid | string |  FDIC certificate ID                                   | Yes |
| zipcode | string |  5-digit USPS zip code                                    | Yes |

### Examples

- [/banklocations-fdic-zipcode/628/98003](/)

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