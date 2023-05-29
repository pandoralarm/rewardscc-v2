"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[7165],{6074:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return d}});var n=r(7462),a=r(3366),l=(r(7294),r(3905)),i=["components"],o={sidebar_position:3,title:"Free Hotel Night",sidebar_label:"Free Hotel Night"},c=void 0,p={unversionedId:"api-reference/credit-card/benefit/free-hotel-night",id:"api-reference/credit-card/benefit/free-hotel-night",title:"Free Hotel Night",description:"This pulls all credit cards that offer a free hotel night on the card anniversary renewal",source:"@site/docs/api-reference/credit-card/benefit/free-hotel-night.md",sourceDirName:"api-reference/credit-card/benefit",slug:"/api-reference/credit-card/benefit/free-hotel-night",permalink:"/docs/api-reference/credit-card/benefit/free-hotel-night",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Free Hotel Night",sidebar_label:"Free Hotel Night"},sidebar:"sidebar",previous:{title:"Free Checked Bag",permalink:"/docs/api-reference/credit-card/benefit/free-checked-bag"},next:{title:"Lounge Access",permalink:"/docs/api-reference/credit-card/benefit/lounge-access"}},u={},d=[{value:"Notes",id:"notes",level:3},{value:"Path Parameters",id:"path-parameters",level:3},{value:"Examples",id:"examples",level:3},{value:"Response Attributes",id:"response-attributes",level:3},{value:"Data Source(s)",id:"data-sources",level:3}],s={toc:d};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"This pulls all credit cards that offer a free hotel night on the card anniversary renewal")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="HTTP REQUEST"',title:'"HTTP','REQUEST"':!0},"GET /creditcard-benefit-hotelnight\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="RESPONSE"',title:'"RESPONSE"'},'  {\n    "cardKey": "amex-biz-marriottbonvoy",\n    "cardIssuer": "American Express",\n    "cardName": "Marriott Bonvoy Business\xae Card",\n    "cardNetwork": "American Express",\n    "cardType": "Business",\n    "annualFee": 125,\n    "freeHotelNight": "Get one Free Night Award every year, after your Card renewal month."\n  }\n')),(0,l.kt)("h3",{id:"notes"},"Notes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"These cards include a complimentary free hotel night on anniversary renewal")),(0,l.kt)("h3",{id:"path-parameters"},"Path Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"NAME"),(0,l.kt)("th",{parentName:"tr",align:null},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"),(0,l.kt)("th",{parentName:"tr",align:null},"REQUIRED"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"examples"},"Examples"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/"},"/creditcard-benefit-hotelnight"))),(0,l.kt)("h3",{id:"response-attributes"},"Response Attributes"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"NAME"),(0,l.kt)("th",{parentName:"tr",align:null},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cardKey"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Rewards Credit Card API unique card key")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cardIssuer"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Issuing bank")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cardName"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of credit card")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cardNetwork"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Network (e.g. Visa)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cardType"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Type (e.g. Personal)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"annualFee"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"Annual fee in USD")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"freeHotelNight"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Free hotel night benefit description")))),(0,l.kt)("h3",{id:"data-sources"},"Data Source(s)"),(0,l.kt)("p",null,"Bank websites"))}m.isMDXComponent=!0},3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=p(r),m=a,f=s["".concat(c,".").concat(m)]||s[m]||d[m]||l;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=s;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"}}]);