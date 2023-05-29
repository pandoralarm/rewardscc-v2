"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[8067],{9304:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return u}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],o={sidebar_position:3,title:"By Zip Code",sidebar_label:"By Zip Code"},p=void 0,d={unversionedId:"api-reference/bank/branch-location/by-zip-code",id:"api-reference/bank/branch-location/by-zip-code",title:"By Zip Code",description:"Lookup all bank branches in a zip code",source:"@site/docs/api-reference/bank/branch-location/by-zip-code.md",sourceDirName:"api-reference/bank/branch-location",slug:"/api-reference/bank/branch-location/by-zip-code",permalink:"/docs/api-reference/bank/branch-location/by-zip-code",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"By Zip Code",sidebar_label:"By Zip Code"},sidebar:"sidebar",previous:{title:"By FDIC Cert ID and Zip Code",permalink:"/docs/api-reference/bank/branch-location/by-fdic-cert-id-and-zip-code"},next:{title:"Headquarter",permalink:"/docs/category/headquarter"}},c={},u=[{value:"Notes",id:"notes",level:3},{value:"Path Parameters",id:"path-parameters",level:3},{value:"Examples",id:"examples",level:3},{value:"Response Attributes",id:"response-attributes",level:3},{value:"Data Source(s)",id:"data-sources",level:3}],s={toc:u};function m(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"Lookup all bank branches in a zip code")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="HTTP REQUEST"',title:'"HTTP','REQUEST"':!0},"GET /banklocations-zipcode/{zipcode}\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="RESPONSE"',title:'"RESPONSE"'},'  {\n    "fdicCert": "6672",\n    "branchName": "Fairview Park Bankmart Branch",\n    "bankName": "Fifth Third Bank, National Association",\n    "dateOpened": "1996-04-01",\n    "branchType": "Full Service Brick and Mortar Office",\n    "isMainOffice": 0,\n    "isForeignOffice": 0,\n    "address": "21690 Lorain Road",\n    "city": "Fairview Park",\n    "state": "OH",\n    "zipCode": "44126",\n    "fullAddress": "21690 Lorain Road Fairview Park, OH 44126"\n  }\n')),(0,l.kt)("h3",{id:"notes"},"Notes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Zip code is the physical location of the bank branch"),(0,l.kt)("li",{parentName:"ul"},"Does not include Credit Unions")),(0,l.kt)("h3",{id:"path-parameters"},"Path Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"NAME"),(0,l.kt)("th",{parentName:"tr",align:null},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"),(0,l.kt)("th",{parentName:"tr",align:null},"REQUIRED"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"zipcode"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"5-digit USPS zip code"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")))),(0,l.kt)("h3",{id:"examples"},"Examples"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/"},"/banklocations-zipcode/44126"))),(0,l.kt)("h3",{id:"response-attributes"},"Response Attributes"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"NAME"),(0,l.kt)("th",{parentName:"tr",align:null},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"fdicCert"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"FDIC certificate ID")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"branchName"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the branch")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bankName"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the bank")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"dateOpened"),(0,l.kt)("td",{parentName:"tr",align:null},"date"),(0,l.kt)("td",{parentName:"tr",align:null},"Date physical branch opened")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"branchType"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Branch type (eg. Full Service Brick and Mortar Office)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"isMainOffice"),(0,l.kt)("td",{parentName:"tr",align:null},"bit"),(0,l.kt)("td",{parentName:"tr",align:null},"Is branch main office (0=no, 1=yes)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"isForeignOffice"),(0,l.kt)("td",{parentName:"tr",align:null},"bit"),(0,l.kt)("td",{parentName:"tr",align:null},"Is office in a foreign country (0=no, 1=yes)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"address"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Street address")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"city"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"City")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"state"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"State")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"zipCode"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"5-digit zip code")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"fullAddress"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Full mailing address")))),(0,l.kt)("h3",{id:"data-sources"},"Data Source(s)"),(0,l.kt)("p",null,"Federal Deposit Insurance Corporation (FDIC)"))}m.isMDXComponent=!0},3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),d=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=d(t.components);return a.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),s=d(n),m=r,k=s["".concat(p,".").concat(m)]||s[m]||u[m]||l;return n?a.createElement(k,i(i({ref:e},c),{},{components:n})):a.createElement(k,i({ref:e},c))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);