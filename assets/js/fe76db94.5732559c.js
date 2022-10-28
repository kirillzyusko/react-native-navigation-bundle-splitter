"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9013],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return n?o.createElement(g,i(i({ref:t},p),{},{components:n})):o.createElement(g,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9973:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const a={sidebar_position:3},i="Async loading",s={unversionedId:"guides/async-loading",id:"guides/async-loading",title:"Async loading",description:"If you did not load all the screens at the stage of opening the application, then, of course, you need to load them after (for example, if the user logs in and you need to redirect him to another screen, which has not yet been loaded).",source:"@site/docs/guides/async-loading.md",sourceDirName:"guides",slug:"/guides/async-loading",permalink:"/react-native-bundle-splitter/docs/next/guides/async-loading",draft:!1,editUrl:"https://github.com/kirillzyusko/react-native-bundle-splitter/tree/master/docs/docs/guides/async-loading.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Static options",permalink:"/react-native-bundle-splitter/docs/next/guides/static-options"},next:{title:"Metro configuration updating",permalink:"/react-native-bundle-splitter/docs/next/guides/metro"}},l={},c=[{value:"One specific screen",id:"one-specific-screen",level:2},{value:"Group of screens",id:"group-of-screens",level:2},{value:"Summary",id:"summary",level:2}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"async-loading"},"Async loading"),(0,r.kt)("p",null,"If you did not load all the screens at the stage of opening the application, then, of course, you need to load them after (for example, if the user logs in and you need to redirect him to another screen, which has not yet been loaded)."),(0,r.kt)("p",null,"This library will load it automatically and cache, if it's needed. However, it can lead to application freezes or the appearance of \u201cwhite blinks\u201d."),(0,r.kt)("p",null,"To avoid this, you can load the necessary screens asynchronously."),(0,r.kt)("h2",{id:"one-specific-screen"},"One specific screen"),(0,r.kt)("p",null,"More often you need this library when you have any async operations, between navigating. Let's have a look at the next example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// home.ts\nimport React from 'react';\nimport { Button, View, Text } from 'react-native';\n\nconst REGISTERED = 'REGISTERED';\n\nconst doLoginRequest = (): Promise<{ status: string }> => new Promise((resolve) => {\n    setTimeout(() => resolve({ status: REGISTERED }), 3000);\n})\n\nclass HomeScreen extends React.Component {\n  render() {\n    return (\n      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n        <Text>Login</Text>\n        <Button\n          title=\"Go to Details\"\n          onPress={this.doLogin}\n        />\n      </View>\n    );\n  }\n  \n  doLogin = async () => {\n      const { status } = await doLoginRequest();\n      if (status === REGISTERED) {\n          this.props.navigation.navigate('Dashboard');\n      }\n  }\n}\n")),(0,r.kt)("p",null,"You can rewrite this code to this"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { preload } from 'react-native-bundle-splitter';\n\n// ...\ndoLogin = async () => {\n  const [{ status }] = await Promise.all([\n    doLoginRequest(),\n    preload().component('Dashboard')\n  ]);\n  if (status === REGISTERED) {\n    this.props.navigation.navigate('Dashboard');\n  }\n}\n// ...\n")),(0,r.kt)("p",null,"In this case you can be sure, that your component will be loaded before usage and you can make transition to screen in usual way. But in order to do this you need to wrap your ",(0,r.kt)("inlineCode",{parentName:"p"},"Dashboard")," component to ",(0,r.kt)("inlineCode",{parentName:"p"},"register")," function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// dashboard/index.ts\nimport { register } from 'react-native-bundle-splitter';\n\nexport default register({ loader: () => import('./View'), name: 'Dashboard' });\n")),(0,r.kt)("h2",{id:"group-of-screens"},"Group of screens"),(0,r.kt)("p",null,"Of course, applications do not consist of one screen. Therefore, most likely, you will need to load groups of such screens."),(0,r.kt)("p",null,"Assume you still have ",(0,r.kt)("inlineCode",{parentName:"p"},"HomeScreen"),". But if login is successful, then you need load ",(0,r.kt)("inlineCode",{parentName:"p"},"Dashboard"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Settings")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Profile"),"."),(0,r.kt)("p",null,"You can do it in the following way:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// home.ts\nimport { preload } from 'react-native-bundle-splitter';\n\n// ...\ndoLogin = async () => {\n  const [{ status }] = await Promise.all([\n    doLoginRequest(),\n    preload().group('LOGGED')\n  ]);\n  if (status === REGISTERED) {\n    this.props.navigation.navigate('Dashboard');\n  }\n}\n// ...\n")),(0,r.kt)("p",null,"And for screens:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// dashboard/index.ts\nimport { register } from 'react-native-bundle-splitter';\n\nexport default register({ loader: () => import('./View'), group: 'LOGGED' });\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// settings/index.ts\nimport { register } from 'react-native-bundle-splitter';\n\nexport default register({ loader: () => import('./View'), group: 'LOGGED' });\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// profile/index.ts\nimport { register } from 'react-native-bundle-splitter';\n\nexport default register({ loader: () => import('./View'), group: 'LOGGED' });\n")),(0,r.kt)("p",null,"So, what are you doing here? Instead of specifying ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," and calling ",(0,r.kt)("inlineCode",{parentName:"p"},"preload().component()")," you specify ",(0,r.kt)("inlineCode",{parentName:"p"},"group")," for screens, and call ",(0,r.kt)("inlineCode",{parentName:"p"},"preload().group()"),"."),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"This library does not do any magic. It simply allows you to transfer the time (which is required to load the bundle at the start of the application) to runtime execution."),(0,r.kt)("p",null,"This way you can load additional parts of the application when doing other asynchronous operations (such as HTTP calls, reading data from storage, etc.) and reduce initial load times."))}d.isMDXComponent=!0}}]);