"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7004],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(r),m=o,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return r?n.createElement(f,a(a({ref:t},s),{},{components:r})):n.createElement(f,a({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1242:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const i={sidebar_position:1},a="register",l={unversionedId:"api/register",id:"version-1.x/api/register",title:"register",description:"register - allow you wrap your component/screen into separate bundle",source:"@site/versioned_docs/version-1.x/api/register.md",sourceDirName:"api",slug:"/api/register",permalink:"/react-native-bundle-splitter/docs/1.x/api/register",draft:!1,editUrl:"https://github.com/kirillzyusko/react-native-bundle-splitter/tree/master/docs/versioned_docs/version-1.x/api/register.md",tags:[],version:"1.x",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"API reference",permalink:"/react-native-bundle-splitter/docs/1.x/category/api-reference"},next:{title:"preload",permalink:"/react-native-bundle-splitter/docs/1.x/api/preload"}},p={},c=[{value:"<code>register</code> - allow you wrap your component/screen into separate bundle",id:"register---allow-you-wrap-your-componentscreen-into-separate-bundle",level:3}],s={toc:c};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"register"},"register"),(0,o.kt)("h3",{id:"register---allow-you-wrap-your-componentscreen-into-separate-bundle"},(0,o.kt)("inlineCode",{parentName:"h3"},"register")," - allow you wrap your component/screen into separate bundle"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"register(params: Object)")," - return react component "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"name")," (optional) - you need to specify this param only if you will call ",(0,o.kt)("inlineCode",{parentName:"li"},"preload")," function for this screen"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"require")," - function, that return your presentation component. Example: ",(0,o.kt)("inlineCode",{parentName:"li"},"() => require('./Presentational.js')")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"group")," (optional) - You need specify it, only if you need to ",(0,o.kt)("inlineCode",{parentName:"li"},"preload")," entire group of screens"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"static")," (optional) - all static members from your presentational component."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"cached")," (optional) - Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"true"),". Set to ",(0,o.kt)("inlineCode",{parentName:"li"},"false")," if you don't need cache your screens. ",(0,o.kt)("em",{parentName:"li"},(0,o.kt)("strong",{parentName:"em"},"Warning:"))," it may decrease performance of your application."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"placeholder")," (optional) - React component which will display during screen loading. Should specify if you don't use ",(0,o.kt)("inlineCode",{parentName:"li"},"preload")," for this screen.")))}u.isMDXComponent=!0}}]);