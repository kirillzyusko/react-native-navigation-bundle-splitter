"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3457],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5948:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(7462),i=(n(7294),n(3905)),r=n(9763);const o={sidebar_position:1},l="Getting started",s={unversionedId:"fundamentals/getting-started",id:"fundamentals/getting-started",title:"Getting started",description:"What to expect",source:"@site/docs/fundamentals/getting-started.mdx",sourceDirName:"fundamentals",slug:"/fundamentals/getting-started",permalink:"/react-native-bundle-splitter/docs/next/fundamentals/getting-started",draft:!1,editUrl:"https://github.com/kirillzyusko/react-native-bundle-splitter/tree/master/docs/docs/fundamentals/getting-started.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Fundamentals",permalink:"/react-native-bundle-splitter/docs/next/category/fundamentals"},next:{title:"Enabling Ram Bundle",permalink:"/react-native-bundle-splitter/docs/next/fundamentals/enabling-ram-bundle"}},c={},p=[{value:"What to expect",id:"what-to-expect",level:2},{value:"What does this package do?",id:"what-does-this-package-do",level:2},{value:"Features",id:"features",level:2},{value:"Installation",id:"installation",level:2}],d={toc:p};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"getting-started"},"Getting started"),(0,i.kt)("h2",{id:"what-to-expect"},"What to expect"),(0,i.kt)("p",null,'Splitting your bundle into small pieces allows you reduce size of main bundle, which is loaded on application startup. It means, that you can load only necessary things, such as login pages, which user inevitably will see if open an application. And only "necessary" things will be in main bundle. Thus, this means that ',(0,i.kt)("strong",{parentName:"p"},"the time of initial launch of the application will be minimized")," and ",(0,i.kt)("strong",{parentName:"p"},"memory consumption will be decreased"),", since often in applications is a lot of code (components and screens) that the user may simply not see."),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:r.Z}),(0,i.kt)("i",null,"On green part of this picture, you can see that all components/screens are divided into different groups. It allows you to load the application much faster, because instead of loading the entire bundle (red picture), you can load only the parts that you need.")),(0,i.kt)("h2",{id:"what-does-this-package-do"},"What does this package do?"),(0,i.kt)("p",null,"This package is built on top of ",(0,i.kt)("strong",{parentName:"p"},"RAM")," bundles. In addition to the base functionality provided by React Native, it allows you to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"avoid boilerplate code (you don't need to write code as per react-native docs - you can simply wrap your component into ",(0,i.kt)("inlineCode",{parentName:"li"},"register")," function);"),(0,i.kt)("li",{parentName:"ul"},"use ",(0,i.kt)("inlineCode",{parentName:"li"},"preload")," API (when you can load screens in advance and the transition to them will be as if the entire bundle was loaded at once);"),(0,i.kt)("li",{parentName:"ul"},"and has web support.")),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("p",null,"This library is add-on on react-native API. But this library has some features, and here is list of them:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Enhanced cache management"),". This library provide a way for caching yours components. This mechanism allows you to improve performance of your application and help to avoid unnecessary reloading yours components, which were already loaded."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Ability to preload component"),". You can preload components in background, which user may see in the nearest future. It allows to make UI experience more smooth and use your components from cache without any intermittentions."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Supporting all navigation libraries"),". This library is compatible with all most known navigation libraries, such as ",(0,i.kt)("a",{parentName:"li",href:"https://reactnavigation.org/"},"react-navigation"),", ",(0,i.kt)("a",{parentName:"li",href:"https://wix.github.io/react-native-navigation/#/"},"react-native-navigation")," and more others.")),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("p",null,"Install the react-native-bundle-splitter package in your React Native project."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add react-native-bundle-splitter\n# or with npm\n# npm install react-native-bundle-splitter --save\n")),(0,i.kt)("p",null,"This module does not use any native (platform) dependencies and does not need to be linked. So installation process basically is finished. But you also need to enable ",(0,i.kt)("inlineCode",{parentName:"p"},"RAM bundles")," feature in your application. To see how to do it, please read ",(0,i.kt)("a",{parentName:"p",href:"./enabling-ram-bundle"},"the guide"),"."),(0,i.kt)("admonition",{title:"Minimal react-native version",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"You need to use react-native 0.59 or higher, since feature with inline requires is available out-of-box only from this version.")))}u.isMDXComponent=!0},9763:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/bundle-splitting-cb7bb8612bf82839c835c2dc043606bf.png"}}]);