"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5759],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=i,f=c["".concat(s,".").concat(m)]||c[m]||p[m]||o;return n?r.createElement(f,a(a({ref:t},d),{},{components:n})):r.createElement(f,a({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6558:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(7462),i=(n(7294),n(3905));const o={sidebar_position:4},a="Upgrading from 1.x",l={unversionedId:"guides/upgrading-from-1.x",id:"version-2.x/guides/upgrading-from-1.x",title:"Upgrading from 1.x",description:"Breaking changes",source:"@site/versioned_docs/version-2.x/guides/upgrading-from-1.x.md",sourceDirName:"guides",slug:"/guides/upgrading-from-1.x",permalink:"/react-native-bundle-splitter/docs/guides/upgrading-from-1.x",draft:!1,editUrl:"https://github.com/kirillzyusko/react-native-bundle-splitter/tree/main/docs/versioned_docs/version-2.x/guides/upgrading-from-1.x.md",tags:[],version:"2.x",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Metro configuration updating",permalink:"/react-native-bundle-splitter/docs/guides/metro"},next:{title:"Recipes",permalink:"/react-native-bundle-splitter/docs/category/recipes"}},s={},u=[{value:"Breaking changes",id:"breaking-changes",level:2},{value:"Migration",id:"migration",level:2}],d={toc:u};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"upgrading-from-1x"},"Upgrading from 1.x"),(0,i.kt)("h2",{id:"breaking-changes"},"Breaking changes"),(0,i.kt)("p",null,"Fortunately, this release has fully backward compatibility with ",(0,i.kt)("inlineCode",{parentName:"p"},"1.x.x")," release. But I'd like to highlight some important changes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"require")," property in ",(0,i.kt)("inlineCode",{parentName:"li"},"register")," function now marked as deprecated and will be removed in future releases.")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Use new syntax and ",(0,i.kt)("inlineCode",{parentName:"p"},"loader")," property instead.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"investigate")," returns only initially loaded modules.")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"This behavior was originally planned, but as it turned out, if you call this function at different times of execution of your application, it will show different results, since some modules will be loaded. Thus, the results are not deterministic and can be confusing. Therefore, now this function returns only those modules that are loaded when the application starts.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"screen gets mounted in ",(0,i.kt)("inlineCode",{parentName:"li"},"async")," way.")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Earlier, if navigation occurred to a screen that had not yet been loaded, the application would freeze, and the transition occurred only when the screen was actually loaded. This was undesirable behavior, so now, the transition will occur immediately, but if the screen is not cached yet, you will see a blank screen and as soon as it loads, you will actually see it. To avoid this use the ",(0,i.kt)("inlineCode",{parentName:"p"},"preload")," API or ",(0,i.kt)("inlineCode",{parentName:"p"},"placeholder")," option in ",(0,i.kt)("inlineCode",{parentName:"p"},"register")," function.);")),(0,i.kt)("h2",{id:"migration"},"Migration"),(0,i.kt)("p",null,"If you used the API of the library correctly before, then there will be no changes for you and you can migrate to the second version."),(0,i.kt)("p",null,"However, after updating to newest version you will get warnings, about the fact, that you should use ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"loader")," instead of ",(0,i.kt)("inlineCode",{parentName:"strong"},"require")),"."),(0,i.kt)("p",null,"If you want ot get rid off of that, you can do a quick migration. Just replace next expression ",(0,i.kt)("inlineCode",{parentName:"p"},"require: () => require(")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"loader: () => import(")," expression. All modern IDEs allow you to do it for all project. That's all. Congratulations \ud83c\udf89"))}p.isMDXComponent=!0}}]);