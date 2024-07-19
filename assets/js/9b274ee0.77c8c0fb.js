"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5862],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),c=i,f=p["".concat(d,".").concat(c)]||p[c]||m[c]||o;return n?a.createElement(f,r(r({ref:t},u),{},{components:n})):a.createElement(f,r({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=c;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[p]="string"==typeof e?e:i,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4714:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(7462),i=(n(7294),n(3905));const o={sidebar_position:2},r="Enabling Ram Bundle",l={unversionedId:"fundamentals/enabling-ram-bundle",id:"version-2.x/fundamentals/enabling-ram-bundle",title:"Enabling Ram Bundle",description:"RAM... What is it? About RAM Bundle format",source:"@site/versioned_docs/version-2.x/fundamentals/enabling-ram-bundle.md",sourceDirName:"fundamentals",slug:"/fundamentals/enabling-ram-bundle",permalink:"/react-native-bundle-splitter/docs/2.x/fundamentals/enabling-ram-bundle",draft:!1,editUrl:"https://github.com/kirillzyusko/react-native-bundle-splitter/tree/master/docs/versioned_docs/version-2.x/fundamentals/enabling-ram-bundle.md",tags:[],version:"2.x",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Getting started",permalink:"/react-native-bundle-splitter/docs/2.x/fundamentals/getting-started"},next:{title:"Basic usage",permalink:"/react-native-bundle-splitter/docs/2.x/fundamentals/basic-usage"}},d={},s=[{value:"RAM... What is it? About RAM Bundle format",id:"ram-what-is-it-about-ram-bundle-format",level:2},{value:"RAM Bundle format",id:"ram-bundle-format",level:3},{value:"Context and motivation",id:"context-and-motivation",level:3},{value:"Formats",id:"formats",level:3},{value:"Enabling RAM Bundle feature in your application",id:"enabling-ram-bundle-feature-in-your-application",level:2},{value:"Android",id:"android",level:3},{value:"iOS",id:"ios",level:3},{value:"macOS",id:"macos",level:3},{value:"web",id:"web",level:3},{value:"Summary",id:"summary",level:2}],u={toc:s};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"enabling-ram-bundle"},"Enabling Ram Bundle"),(0,i.kt)("h2",{id:"ram-what-is-it-about-ram-bundle-format"},"RAM... What is it? About RAM Bundle format"),(0,i.kt)("h3",{id:"ram-bundle-format"},"RAM Bundle format"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://facebook.github.io/metro/"},"Metro")," bundler for react-native offers special format - RAM (Random Access Memory). RAM bundle is a new format of React Native application packaging that helps to optimize load times of your app. "),(0,i.kt)("p",null,"You can read ",(0,i.kt)("a",{parentName:"p",href:"https://facebook.github.io/metro/docs/bundling"},"more")," about this bundle format."),(0,i.kt)("h3",{id:"context-and-motivation"},"Context and motivation"),(0,i.kt)("p",null,"React Native is a still JS application. In the browser all your JavaScript and modules have to be bundled (combined, minified, and maybe even uglified) before deploying. As a result, you drastically reduce the number of files (usually down to one) along with the total size of the code you\u2019re serving by removing all information not necessary for production, i.e., mercilessly rewriting function and variables names, deleting code comments, and so on."),(0,i.kt)("p",null,"The whole procedure stays pretty much the same when you\u2019re developing a React Native app. It\u2019s still (React-flavored) JavaScript you write there, right?"),(0,i.kt)("p",null,"But here\u2019s a problem: when your app grows, so does the bundle size, and let\u2019s just say that React Native apps are usually more than a few kilobytes in size. The heavier your app bundle is, the more time it needs to be fully loaded into memory, parsed, and executed, before even showing you a splash screen!"),(0,i.kt)("p",null,"However, the difference is that a React Native app is executed in a different environment \u2014 on your mobile device running Android or iOS (coming soon on Windows devices) rather than in your browser. This allows React Native to be smarter about what it loads to memory and when. And this is when RAM bundles come into play: they define a new bundling format that enables on-demand loading of individual app modules, resulting in a smoother user experience."),(0,i.kt)("h3",{id:"formats"},"Formats"),(0,i.kt)("p",null,"The official way to bundle your React Native apps at the moment is using Metro Bundler, which currently supports the following bundling formats:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Plain"),": Good old, pure JavaScript bundle. This is the default type that doesn\u2019t offer any optimizations.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Indexed RAM Bundle"),": This format defines a binary file with a header that can be used for quickly finding a specific module. For example, the header can tell us that module number 23 (all JavaScript modules in React Native apps are given numerical identifiers) can be found at offset 320 in the RAM bundle file, and has a length of 430 bytes. How does this help us? React Native runtime now doesn\u2019t need to read the entire bundle file into memory, and can load specific modules only when they are needed (e.g., via inline requires).")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"File RAM Bundle"),": With this approach, every module is stored in a separate file with the name ",(0,i.kt)("inlineCode",{parentName:"p"},"js-modules/${id}.js"),", where ",(0,i.kt)("inlineCode",{parentName:"p"},"${id}")," is the module\u2019s ID. This format is used by default on Android devices but has the same purpose: to have fast access to individual modules in your bundle."))),(0,i.kt)("h2",{id:"enabling-ram-bundle-feature-in-your-application"},"Enabling RAM Bundle feature in your application"),(0,i.kt)("p",null,"For enabling this format in your application you need to do pretty simple steps for each platform."),(0,i.kt)("admonition",{title:"Enable per platform",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Although enabling RAM Bundle format is recommended for both platforms, you can only enable it for one if necessary.")),(0,i.kt)("h3",{id:"android"},"Android"),(0,i.kt)("p",null,"Open ",(0,i.kt)("inlineCode",{parentName:"p"},"android/app/build.gradle")," and edit your file in the following way."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"},'project.ext.react = [\n        entryFile              : "index.js",\n+       bundleCommand          : "ram-bundle",\n+       extraPackagerArgs      : ["--indexed-ram-bundle"]\n    ...\n')),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"You can choose between formats, since Android support both format (indexed and file). But since iOS support only ",(0,i.kt)("inlineCode",{parentName:"p"},"indexed")," format, would be reasonable to keep both platform in consistent and use ",(0,i.kt)("inlineCode",{parentName:"p"},"indexed")," format. But if you decided for some reasons to use ",(0,i.kt)("inlineCode",{parentName:"p"},"file")," format, you don't need to add ",(0,i.kt)("inlineCode",{parentName:"p"},'extraPackagerArgs: ["--indexed-ram-bundle"]')," line. By default android uses ",(0,i.kt)("inlineCode",{parentName:"p"},"file")," format.")),(0,i.kt)("admonition",{title:"Hermes enabled",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"If you are trying to enable this feature with Hermes engine, you may faced with application crash. It's a known ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/facebook/react-native/issues/25730"},"issue"),". As a temporary solution you can don't activate this bundle format for Android, since Hermes is using similar ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/facebook/react-native/issues/25730#issuecomment-514115115"},"mechanism"),". ")),(0,i.kt)("h3",{id:"ios"},"iOS"),(0,i.kt)("p",null,"For enabling RAM format for iOS you need to open XCode, select the project, go to ",(0,i.kt)("inlineCode",{parentName:"p"},"Build Phases"),", and edit phase ",(0,i.kt)("inlineCode",{parentName:"p"},"Bundle React Native code and images"),". Before ",(0,i.kt)("inlineCode",{parentName:"p"},"../node_modules/react-native/scripts/react-native-xcode.sh")," you need to add ",(0,i.kt)("inlineCode",{parentName:"p"},'BUNDLE_COMMAND="ram-bundle"'),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"},'+export BUNDLE_COMMAND="ram-bundle"\n export NODE_BINARY=node\n ../node_modules/react-native/scripts/react-native-xcode.sh                                        \n')),(0,i.kt)("h3",{id:"macos"},"macOS"),(0,i.kt)("p",null,"Enabling ",(0,i.kt)("inlineCode",{parentName:"p"},"RAM Bundles")," on macOS should be done exactly in the same way as for ",(0,i.kt)("inlineCode",{parentName:"p"},"iOS")),(0,i.kt)("p",null,"Just open macOS specific project and repeat the same steps."),(0,i.kt)("h3",{id:"web"},"web"),(0,i.kt)("p",null,"No extra steps for ",(0,i.kt)("inlineCode",{parentName:"p"},"web"),' as there is no such term as "RAM bundles". Webpack itself will be able to split your JS bundle into small parts and will load them as soon as they are needed.'),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("p",null,"Basically you have completed native set up and now you are ready for using this library!"),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"To be sure, that your application isn't broken after all manipulations you can rebuild your application and see, that it works correctly.")))}p.isMDXComponent=!0}}]);