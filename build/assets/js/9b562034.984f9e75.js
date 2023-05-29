"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[7128],{7126:function(t,e,r){r.r(e),r.d(e,{assets:function(){return d},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return u}});var a=r(7462),n=r(3366),l=(r(7294),r(3905)),i=["components"],o={sidebar_position:2,title:"Transfer Program Card",sidebar_label:"Transfer Program Card"},s=void 0,p={unversionedId:"api-reference/credit-card/point-transfer/transfer-program-card",id:"api-reference/credit-card/point-transfer/transfer-program-card",title:"Transfer Program Card",description:"This pulls a list of all credit cards that can transfer points to the transfer program (Hilton, United, etc.)",source:"@site/docs/api-reference/credit-card/point-transfer/transfer-program-card.md",sourceDirName:"api-reference/credit-card/point-transfer",slug:"/api-reference/credit-card/point-transfer/transfer-program-card",permalink:"/docs/api-reference/credit-card/point-transfer/transfer-program-card",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Transfer Program Card",sidebar_label:"Transfer Program Card"},sidebar:"sidebar",previous:{title:"Transfer Program List",permalink:"/docs/api-reference/credit-card/point-transfer/transfer-program-list"},next:{title:"Sign-up Bonus",permalink:"/docs/category/sign-up-bonus"}},d={},u=[{value:"Notes",id:"notes",level:3},{value:"Path Parameters",id:"path-parameters",level:3},{value:"Examples",id:"examples",level:3},{value:"Response Attributes",id:"response-attributes",level:3},{value:"Data Source(s)",id:"data-sources",level:3}],m={toc:u};function c(t){var e=t.components,r=(0,n.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"This pulls a list of all credit cards that can transfer points to the transfer program (Hilton, United, etc.)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="HTTP REQUEST"',title:'"HTTP','REQUEST"':!0},"GET /creditcard-pointtransfer-transferprogramcard/{transferPartnerId}\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="RESPONSE"',title:'"RESPONSE"'},'  {\n    "transferPartnerName": "Hilton Honors",\n    "transferPartnerId": 1722165547,\n    "cardKey": "charlesschwab-amexplat",\n    "cardName": "American Express Platinum Card\xae for Schwab",\n    "cardIssuer": "Charles Schwab",\n    "rewardProgramName": "American Express Membership Rewards",\n    "baseSpendAmount": 1.0,\n    "spendTotal": 2.6,\n    "transferRatio": 2.0,\n    "bonusRatio": 0.3,\n    "totalRatio": 2.6,\n    "bonusDateEnd": "2023-04-30"\n  }\n')),(0,l.kt)("h3",{id:"notes"},"Notes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Avios programs (British Airways Executive Club, Iberia Plus, Aer Lingus AerClub) are aggreated into a single points currency")),(0,l.kt)("h3",{id:"path-parameters"},"Path Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"NAME"),(0,l.kt)("th",{parentName:"tr",align:null},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"),(0,l.kt)("th",{parentName:"tr",align:null},"REQUIRED"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"transferPartnerId"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"unique ID from ",(0,l.kt)("a",{parentName:"td",href:"transfer-program-list"},"GET Transfer Program List")),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")))),(0,l.kt)("h3",{id:"examples"},"Examples"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/"},"/creditcard-pointtransfer-transferprogramcard/1722165547"))),(0,l.kt)("h3",{id:"response-attributes"},"Response Attributes"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"NAME"),(0,l.kt)("th",{parentName:"tr",align:null},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"transferPartnerName"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Transfer partner name")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"transferPartnerId"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Transfer partner ID")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cardKey"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Rewards Credit Card API unique card key")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cardName"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of credit card")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cardIssuer"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Issuing bank")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"rewardProgramName"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Credit card point program (e.g. American Express Membership Rewards)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"baseSpendAmount"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"Base points earned per dollar spend")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"spendTotal"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"Transfer points earned per dollar (baseSpendAmount * totalRatio)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"transferRatio"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"Transfer ratio, bonus not included (2.0 = for every 1 point you transfer you receive 2 points )")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bonusRatio"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"Bonus amount (.3 = 30%)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"totalRatio"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"Total ratio which includes bonus if exists (transfer ratio * bonusRatio : 2.6 = you receive 2.6 points )")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bonusDateEnd"),(0,l.kt)("td",{parentName:"tr",align:null},"date"),(0,l.kt)("td",{parentName:"tr",align:null},"Date bonus transfer ends")))),(0,l.kt)("h3",{id:"data-sources"},"Data Source(s)"),(0,l.kt)("p",null,"Bank websites"))}c.isMDXComponent=!0},3905:function(t,e,r){r.d(e,{Zo:function(){return d},kt:function(){return c}});var a=r(7294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},l=Object.keys(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var s=a.createContext({}),p=function(t){var e=a.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},d=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,l=t.originalType,s=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),m=p(r),c=n,f=m["".concat(s,".").concat(c)]||m[c]||u[c]||l;return r?a.createElement(f,i(i({ref:e},d),{},{components:r})):a.createElement(f,i({ref:e},d))}));function c(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:n,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);