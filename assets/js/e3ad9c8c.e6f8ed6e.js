"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2828],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(t),g=o,m=u["".concat(l,".").concat(g)]||u[g]||d[g]||a;return t?r.createElement(m,i(i({ref:n},p),{},{components:t})):r.createElement(m,i({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=g;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},248:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=t(7462),o=(t(7294),t(3905));const a={sidebar_position:3},i="Async loading",s={unversionedId:"guides/async-loading",id:"version-1.x/guides/async-loading",title:"Async loading",description:"If you did not load all the screens at the stage of opening the application, then, of course, you need to load them after (for example, if the user logs in and you need to redirect him to another screen, which has not yet been loaded).",source:"@site/versioned_docs/version-1.x/guides/async-loading.md",sourceDirName:"guides",slug:"/guides/async-loading",permalink:"/react-native-bundle-splitter/docs/1.x/guides/async-loading",draft:!1,editUrl:"https://github.com/kirillzyusko/react-native-bundle-splitter/tree/master/docs/versioned_docs/version-1.x/guides/async-loading.md",tags:[],version:"1.x",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Static options",permalink:"/react-native-bundle-splitter/docs/1.x/guides/static-options"},next:{title:"Metro configuration updating",permalink:"/react-native-bundle-splitter/docs/1.x/guides/metro"}},l={},c=[{value:"One specific screen",id:"one-specific-screen",level:2},{value:"Group of screens",id:"group-of-screens",level:2}],p={toc:c};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"async-loading"},"Async loading"),(0,o.kt)("p",null,"If you did not load all the screens at the stage of opening the application, then, of course, you need to load them after (for example, if the user logs in and you need to redirect him to another screen, which has not yet been loaded)."),(0,o.kt)("p",null,"This library will load it automatically and cache, if it's needed. However, it can lead to application freezes or the appearance of \u201cwhite blinks\u201d."),(0,o.kt)("p",null,"To avoid this, you can load the necessary screens asynchronously."),(0,o.kt)("h2",{id:"one-specific-screen"},"One specific screen"),(0,o.kt)("p",null,"More often you need this library when you have any async operations, between navigating. Let's have a look at the next example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// home.ts\nimport React from 'react';\nimport { Button, View, Text } from 'react-native';\n\nconst REGISTERED = 'REGISTERED';\n\nconst doLoginRequest = (): Promise<{ status: string }> => new Promise((resolve) => {\n    setTimeout(() => resolve({ status: REGISTERED }), 3000);\n})\n\nclass HomeScreen extends React.Component {\n  render() {\n    return (\n      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n        <Text>Login</Text>\n        <Button\n          title=\"Go to Details\"\n          onPress={this.doLogin}\n        />\n      </View>\n    );\n  }\n  \n  doLogin = async () => {\n      const { status } = await doLoginRequest();\n      if (status === REGISTERED) {\n          this.props.navigation.navigate('Dashboard');\n      }\n  }\n}\n")),(0,o.kt)("p",null,"You can rewrite this code to this"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { preload } from 'react-native-bundle-splitter';\n\n// ...\ndoLogin = async () => {\n  const [{ status }] = await Promise.all([\n    doLoginRequest(),\n    preload().component('Dashboard')\n  ]);\n  if (status === REGISTERED) {\n    this.props.navigation.navigate('Dashboard');\n  }\n}\n// ...\n")),(0,o.kt)("p",null,"In this case you can be sure, that your component will be loaded before usage and you can make transition to screen in usual way. But in order to do this you need to wrap your ",(0,o.kt)("inlineCode",{parentName:"p"},"Dashboard")," component to ",(0,o.kt)("inlineCode",{parentName:"p"},"register")," function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// dashboard/index.ts\nimport { register } from 'react-native-bundle-splitter';\n\nexport default register({ require: () => require('./View'), name: 'Dashboard' });\n")),(0,o.kt)("h2",{id:"group-of-screens"},"Group of screens"),(0,o.kt)("p",null,"Of course, applications do not consist of one screen. Therefore, most likely, you will need to load groups of such screens."),(0,o.kt)("p",null,"Assume you still have ",(0,o.kt)("inlineCode",{parentName:"p"},"HomeScreen"),". But if login is successful, then you need load ",(0,o.kt)("inlineCode",{parentName:"p"},"Dashboard"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Settings")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Profile"),"."),(0,o.kt)("p",null,"You can do it in the following way:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// home.ts\nimport { preload } from 'react-native-bundle-splitter';\n\n// ...\ndoLogin = async () => {\n  const [{ status }] = await Promise.all([\n    doLoginRequest(),\n    preload().group('LOGGED')\n  ]);\n  if (status === REGISTERED) {\n    this.props.navigation.navigate('Dashboard');\n  }\n}\n// ...\n")),(0,o.kt)("p",null,"And for screens:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// dashboard/index.ts\nimport { register } from 'react-native-bundle-splitter';\n\nexport default register({ require: () => require('./View'), group: 'LOGGED' });\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// settings/index.ts\nimport { register } from 'react-native-bundle-splitter';\n\nexport default register({ require: () => require('./View'), group: 'LOGGED' });\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// profile/index.ts\nimport { register } from 'react-native-bundle-splitter';\n\nexport default register({ require: () => require('./View'), group: 'LOGGED' });\n")),(0,o.kt)("p",null,"So, what are you doing here? Instead of specifying ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," and calling ",(0,o.kt)("inlineCode",{parentName:"p"},"preload().component()")," you specify ",(0,o.kt)("inlineCode",{parentName:"p"},"group")," for screens, and call ",(0,o.kt)("inlineCode",{parentName:"p"},"preload().group()"),"."))}u.isMDXComponent=!0}}]);