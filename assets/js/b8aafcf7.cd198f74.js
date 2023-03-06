"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[77430],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),c=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||i;return n?a.createElement(f,o(o({ref:t},s),{},{components:n})):a.createElement(f,o({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(67294),r=n(86010),i={tabItem:"tabItem_Ymn6"};function o(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,o),hidden:n},t)}},74866:function(e,t,n){n.d(t,{Z:function(){return N}});var a=n(83117),r=n(67294),i=n(86010),o=n(12466),l=n(16550),u=n(91980),c=n(67392),s=n(50012);function p(e){return function(e){return r.Children.map(e,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function d(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:p(n);return function(e){var t=(0,c.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function m(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function f(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,i=(0,l.k6)(),o=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:a});return[(0,u._X)(o),(0,r.useCallback)((function(e){if(o){var t=new URLSearchParams(i.location.search);t.set(o,e),i.replace(Object.assign({},i.location,{search:t.toString()}))}}),[o,i])]}function v(e){var t,n,a,i,o=e.defaultValue,l=e.queryString,u=void 0!==l&&l,c=e.groupId,p=d(e),v=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:o,tabValues:p})})),h=v[0],g=v[1],b=f({queryString:u,groupId:c}),y=b[0],k=b[1],N=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:c}.groupId),n=(0,s.Nk)(t),a=n[0],i=n[1],[a,(0,r.useCallback)((function(e){t&&i.set(e)}),[t,i])]),w=N[0],x=N[1],O=function(){var e=null!=y?y:w;return m({value:e,tabValues:p})?e:null}();return(0,r.useLayoutEffect)((function(){O&&g(O)}),[O]),{selectedValue:h,selectValue:(0,r.useCallback)((function(e){if(!m({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);g(e),k(e),x(e)}),[k,x,p]),tabValues:p}}var h=n(72389),g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){var t=e.className,n=e.block,l=e.selectedValue,u=e.selectValue,c=e.tabValues,s=[],p=(0,o.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,n=s.indexOf(t),a=c[n].value;a!==l&&(p(t),u(a))},m=function(e){var t,n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var a,r=s.indexOf(e.currentTarget)+1;n=null!=(a=s[r])?a:s[0];break;case"ArrowLeft":var i,o=s.indexOf(e.currentTarget)-1;n=null!=(i=s[o])?i:s[s.length-1]}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},c.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:function(e){return s.push(e)},onKeyDown:m,onClick:d},o,{className:(0,i.Z)("tabs__item",g.tabItem,null==o?void 0:o.className,{"tabs__item--active":l===t})}),null!=n?n:t)})))}function y(e){var t=e.lazy,n=e.children,a=e.selectedValue;if(n=Array.isArray(n)?n:[n],t){var i=n.find((function(e){return e.props.value===a}));return i?(0,r.cloneElement)(i,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})})))}function k(e){var t=v(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",g.tabList)},r.createElement(b,(0,a.Z)({},e,t)),r.createElement(y,(0,a.Z)({},e,t)))}function N(e){var t=(0,h.Z)();return r.createElement(k,(0,a.Z)({key:String(t)},e))}},16433:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return m}});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),o=n(74866),l=n(85162),u=["components"],c={id:"getting-started",title:"Getting started",sidebar_label:"Getting started"},s=void 0,p={unversionedId:"getting-started",id:"version-3.x/getting-started",title:"Getting started",description:"React Navigation is born from the React Native community's need for an extensible yet easy-to-use navigation solution written entirely in JavaScript (so you can read and understand all of the source), on top of powerful native primitives.",source:"@site/versioned_docs/version-3.x/getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/docs/3.x/getting-started",draft:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-3.x/getting-started.md",tags:[],version:"3.x",frontMatter:{id:"getting-started",title:"Getting started",sidebar_label:"Getting started"},sidebar:"version-3.x-docs",next:{title:"Hello React Navigation",permalink:"/docs/3.x/hello-react-navigation"}},d={},m=[{value:"What to expect",id:"what-to-expect",level:2},{value:"Installation",id:"installation",level:2},{value:"Hybrid iOS Applications (Skip for RN only projects)",id:"hybrid-ios-applications-skip-for-rn-only-projects",level:2}],f={toc:m},v="wrapper";function h(e){var t=e.components,n=(0,r.Z)(e,u);return(0,i.kt)(v,(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"React Navigation is born from the React Native community's need for an extensible yet easy-to-use navigation solution written entirely in JavaScript (so you can read and understand all of the source), on top of powerful native primitives."),(0,i.kt)("p",null,"Before you commit to using React Navigation for your project, you might want to read the ",(0,i.kt)("a",{parentName:"p",href:"/docs/3.x/pitch"},"anti-pitch")," ","\u2014"," it will help you to understand the tradeoffs that we have chosen along with the areas where we consider the library to be deficient currently."),(0,i.kt)("h2",{id:"what-to-expect"},"What to expect"),(0,i.kt)("p",null,"If you're already familiar with React Native then you'll be able to get moving with React Navigation quickly! If not, you may want to read sections 1 to 4 (inclusive) of ",(0,i.kt)("a",{parentName:"p",href:"http://reactnativeexpress.com/"},"React Native Express")," first, then come back here when you're done."),(0,i.kt)("p",null,"What follows within the ",(0,i.kt)("em",{parentName:"p"},"Fundamentals")," section of this documentation is a tour of the most important aspects of React Navigation. It should cover enough for you to know how to build your typical small mobile application, and give you the background that you need to dive deeper into the more advanced parts of React Navigation."),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("p",null,"Install the ",(0,i.kt)("inlineCode",{parentName:"p"},"react-navigation")," package in your React Native project."),(0,i.kt)(o.Z,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install react-navigation\n"))),(0,i.kt)(l.Z,{value:"yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add react-navigation\n")))),(0,i.kt)("p",null,"Next, install ",(0,i.kt)("inlineCode",{parentName:"p"},"react-native-gesture-handler")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"react-native-reanimated"),"."),(0,i.kt)("p",null,"If you're using Expo, to ensure that you get the compatible versions of the libraries you should run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npx expo install react-native-gesture-handler react-native-reanimated\n")),(0,i.kt)("p",null,"Otherwise, just use yarn or npm directly:"),(0,i.kt)(o.Z,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install react-native-gesture-handler react-native-reanimated\n"))),(0,i.kt)(l.Z,{value:"yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add react-native-gesture-handler react-native-reanimated\n")))),(0,i.kt)("p",null,"Next, if you are not using the Expo managed workflow then you need to link these libraries if you haven't already. The steps depends on your React Native version:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"React Native 0.60 and higher")),(0,i.kt)("p",{parentName:"li"},"On newer versions of React Native, ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/react-native-community/cli/blob/master/docs/autolinking.md"},"linking is automatic"),"."),(0,i.kt)("p",{parentName:"li"},"On iOS, to complete the linking, make sure you have ",(0,i.kt)("a",{parentName:"p",href:"https://cocoapods.org/"},"Cocoapods")," installed. Then run:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"cd ios\npod install\ncd ..\n")),(0,i.kt)("p",{parentName:"li"},"On Android, it shouldn't need any more steps. But if you get errors regarding Android Support library during building the app, you need to install and configure ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikehardy/jetifier"},"jetifier"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"React Native 0.59 and lower")),(0,i.kt)("p",{parentName:"li"},"If you're on an older React Native version, you need to manually link the dependencies. To do that, run:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"react-native link react-native-reanimated\nreact-native link react-native-gesture-handler\n")))),(0,i.kt)("p",null,"To finalize installation of ",(0,i.kt)("inlineCode",{parentName:"p"},"react-native-gesture-handler")," for Android, be sure to make the necessary modifications to ",(0,i.kt)("inlineCode",{parentName:"p"},"MainActivity.java"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"},'package com.reactnavigation.example;\n\nimport com.facebook.react.ReactActivity;\n+ import com.facebook.react.ReactActivityDelegate;\n+ import com.facebook.react.ReactRootView;\n+ import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;\n\npublic class MainActivity extends ReactActivity {\n\n  @Override\n  protected String getMainComponentName() {\n    return "Example";\n  }\n\n+  @Override\n+  protected ReactActivityDelegate createReactActivityDelegate() {\n+    return new ReactActivityDelegate(this, getMainComponentName()) {\n+      @Override\n+      protected ReactRootView createRootView() {\n+       return new RNGestureHandlerEnabledRootView(MainActivity.this);\n+      }\n+    };\n+  }\n}\n')),(0,i.kt)("p",null,"Finally, run ",(0,i.kt)("inlineCode",{parentName:"p"},"react-native run-android")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"react-native run-ios")," to launch the app on your device/simulator."),(0,i.kt)("h2",{id:"hybrid-ios-applications-skip-for-rn-only-projects"},"Hybrid iOS Applications (Skip for RN only projects)"),(0,i.kt)("p",null,"If you're using React Navigation within a hybrid app - an iOS app that has both Swift/ObjC and React Native parts - you may be missing the ",(0,i.kt)("inlineCode",{parentName:"p"},"RCTLinkingIOS")," subspec in your Podfile, which is installed by default in new RN projects. To add this, ensure your Podfile looks like the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"}," pod 'React', :path => '../node_modules/react-native', :subspecs => [\n    . . . // other subspecs\n    'RCTLinkingIOS',\n    . . .\n  ]\n")),(0,i.kt)("p",null,"You're good to go! Continue to ",(0,i.kt)("a",{parentName:"p",href:"/docs/3.x/hello-react-navigation"},'"Hello React Navigation"')," to start writing some code."))}h.isMDXComponent=!0}}]);