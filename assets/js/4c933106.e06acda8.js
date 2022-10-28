"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9356],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(n),m=o,f=c["".concat(s,".").concat(m)]||c[m]||p[m]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var d=2;d<i;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9402:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:4},a="Metro configuration updating",l={unversionedId:"guides/metro",id:"guides/metro",title:"Metro configuration updating",description:'On this stage we are gathering info about which modules will be included in "startup" bundle. And we are sending this information to metro-bundler, so this tool is aware about that.',source:"@site/docs/guides/metro.md",sourceDirName:"guides",slug:"/guides/metro",permalink:"/react-native-bundle-splitter/docs/next/guides/metro",draft:!1,editUrl:"https://github.com/kirillzyusko/react-native-bundle-splitter/tree/main/docs/docs/guides/metro.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Async loading",permalink:"/react-native-bundle-splitter/docs/next/guides/async-loading"},next:{title:"Upgrading from 1.x",permalink:"/react-native-bundle-splitter/docs/next/guides/upgrading-from-1.x"}},s={},d=[{value:"Initial Configuration",id:"initial-configuration",level:2},{value:"Metro Configuration",id:"metro-configuration",level:2}],u={toc:d};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"metro-configuration-updating"},"Metro configuration updating"),(0,o.kt)("p",null,'On this stage we are gathering info about which modules will be included in "startup" bundle. And we are sending this information to metro-bundler, so this tool is aware about that.'),(0,o.kt)("h2",{id:"initial-configuration"},"Initial Configuration"),(0,o.kt)("p",null,"In order to see which files should be loaded on initial start of app you can use helper utility (use this code in ",(0,o.kt)("inlineCode",{parentName:"p"},"App.js"),"):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},"+import { investigate } from 'react-native-bundle-splitter/dist/utils';\n\n+console.log(`module.exports = ${JSON.stringify(investigate().loaded.sort())};`);\n")),(0,o.kt)("p",null,"Then grab this text and put it in a file named ",(0,o.kt)("inlineCode",{parentName:"p"},"packager/modules.ios.js")," (if you are running your app on iOS platform) or to ",(0,o.kt)("inlineCode",{parentName:"p"},"packager/modules.android.js")," (if you run Android app respectively)."),(0,o.kt)("h2",{id:"metro-configuration"},"Metro Configuration"),(0,o.kt)("p",null,"Then edit your ",(0,o.kt)("inlineCode",{parentName:"p"},"metro.config.js")," as shown below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const resolve = require('path').resolve;\nconst fs = require('fs');\n\n// Update the following line if the root folder of your app is somewhere else.\nconst ROOT_FOLDER = resolve(__dirname, '.');\n\nconst config = {\n  transformer: {\n    getTransformOptions: (_, { platform }) => {\n      let modulePaths = [];\n      const moduleMap = {};\n\n      if (platform === 'android') {\n        modulePaths = require('./packager/modules.android');\n      } else {\n        modulePaths = require('./packager/modules.ios');\n      }\n\n      modulePaths.forEach(path => {\n        if (fs.existsSync(path)) {\n          moduleMap[resolve(path)] = true;\n        }\n      });\n\n      return {\n        preloadedModules: moduleMap,\n        transform: {\n          inlineRequires: {\n            // `blacklist` for RN < 0.64\n            blockList: moduleMap,\n          },\n        },\n      };\n    },\n  },\n  projectRoot: ROOT_FOLDER,\n};\n\nmodule.exports = config;\n")),(0,o.kt)("p",null,"Using info from ",(0,o.kt)("inlineCode",{parentName:"p"},"packager")," folder ",(0,o.kt)("inlineCode",{parentName:"p"},"metro-bundler"),' will be aware of the fact, which modules should be included in "startup" bundle, and which modules can de dynamically loaded during runtime of application.'),(0,o.kt)("admonition",{title:"Try to copy output several times",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Once you've added content in ",(0,o.kt)("inlineCode",{parentName:"p"},"packager")," folder and changed ",(0,o.kt)("inlineCode",{parentName:"p"},"metro")," configuration - I highly recommend you to restart ",(0,o.kt)("inlineCode",{parentName:"p"},"metro")," and copy/paster output from ",(0,o.kt)("inlineCode",{parentName:"p"},"investigate")," function into ",(0,o.kt)("inlineCode",{parentName:"p"},"packager")," content once again."),(0,o.kt)("p",{parentName:"admonition"},"Most likely you will get different output and it's quite reasonable, since you started using ram bundles and now your app starts to load modules only which are really needed for the startup."),(0,o.kt)("p",{parentName:"admonition"},"I recommend to repeat this operation several times (restart ",(0,o.kt)("inlineCode",{parentName:"p"},"metro"),", copying/pasting new content into ",(0,o.kt)("inlineCode",{parentName:"p"},"packager")," folder), until the output will be constant.")),(0,o.kt)("admonition",{title:"New cycle dependencies",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"It's fine if you start receiving warnings, that cycle dependencies were detected. Since you are loading modules lazily - bundler can not compute all dependencies tree in advance and build it in optimized way, so you will have to resolve it yourself manually and break cycle dependencies.")))}p.isMDXComponent=!0}}]);