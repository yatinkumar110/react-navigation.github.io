"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[99937],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),f=r,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||i;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},85162:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(67294),r=n(86010),i={tabItem:"tabItem_Ymn6"};function o(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,o),hidden:n},t)}},74866:function(e,t,n){n.d(t,{Z:function(){return w}});var a=n(83117),r=n(67294),i=n(86010),o=n(12466),s=n(16550),l=n(91980),u=n(67392),c=n(50012);function p(e){return function(e){return r.Children.map(e,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function d(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:p(n);return function(e){var t=(0,u.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function f(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function m(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,i=(0,s.k6)(),o=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:a});return[(0,l._X)(o),(0,r.useCallback)((function(e){if(o){var t=new URLSearchParams(i.location.search);t.set(o,e),i.replace(Object.assign({},i.location,{search:t.toString()}))}}),[o,i])]}function h(e){var t,n,a,i,o=e.defaultValue,s=e.queryString,l=void 0!==s&&s,u=e.groupId,p=d(e),h=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:o,tabValues:p})})),v=h[0],b=h[1],g=m({queryString:l,groupId:u}),y=g[0],k=g[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),n=(0,c.Nk)(t),a=n[0],i=n[1],[a,(0,r.useCallback)((function(e){t&&i.set(e)}),[t,i])]),N=w[0],x=w[1],S=function(){var e=null!=y?y:N;return f({value:e,tabValues:p})?e:null}();return(0,r.useLayoutEffect)((function(){S&&b(S)}),[S]),{selectedValue:v,selectValue:(0,r.useCallback)((function(e){if(!f({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);b(e),k(e),x(e)}),[k,x,p]),tabValues:p}}var v=n(72389),b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){var t=e.className,n=e.block,s=e.selectedValue,l=e.selectValue,u=e.tabValues,c=[],p=(0,o.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==s&&(p(t),l(a))},f=function(e){var t,n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var a,r=c.indexOf(e.currentTarget)+1;n=null!=(a=c[r])?a:c[0];break;case"ArrowLeft":var i,o=c.indexOf(e.currentTarget)-1;n=null!=(i=c[o])?i:c[c.length-1]}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},u.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:function(e){return c.push(e)},onKeyDown:f,onClick:d},o,{className:(0,i.Z)("tabs__item",b.tabItem,null==o?void 0:o.className,{"tabs__item--active":s===t})}),null!=n?n:t)})))}function y(e){var t=e.lazy,n=e.children,a=e.selectedValue;if(n=Array.isArray(n)?n:[n],t){var i=n.find((function(e){return e.props.value===a}));return i?(0,r.cloneElement)(i,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})})))}function k(e){var t=h(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",b.tabList)},r.createElement(g,(0,a.Z)({},e,t)),r.createElement(y,(0,a.Z)({},e,t)))}function w(e){var t=(0,v.Z)();return r.createElement(k,(0,a.Z)({key:String(t)},e))}},85581:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),o=(n(74866),n(85162),["components"]),s={id:"handling-safe-area",title:"Supporting safe areas",sidebar_label:"Supporting safe areas"},l=void 0,u={unversionedId:"handling-safe-area",id:"version-6.x/handling-safe-area",title:"Supporting safe areas",description:"By default, React Navigation tries to ensure that the elements of the navigators display correctly on devices with notches (e.g. iPhone X) and UI elements which may overlap the app content. Such items include:",source:"@site/versioned_docs/version-6.x/handling-safe-area.md",sourceDirName:".",slug:"/handling-safe-area",permalink:"/docs/handling-safe-area",draft:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-6.x/handling-safe-area.md",tags:[],version:"6.x",frontMatter:{id:"handling-safe-area",title:"Supporting safe areas",sidebar_label:"Supporting safe areas"},sidebar:"version-6.x/docs",previous:{title:"Authentication flows",permalink:"/docs/auth-flow"},next:{title:"Hiding tab bar in specific screens",permalink:"/docs/hiding-tabbar-in-screens"}},c={},p=[{value:"Hidden/Custom Header or Tab Bar",id:"hiddencustom-header-or-tab-bar",level:2},{value:"Landscape Mode",id:"landscape-mode",level:2},{value:"Use the hook for more control",id:"use-the-hook-for-more-control",level:2},{value:"Summary",id:"summary",level:2}],d={toc:p},f="wrapper";function m(e){var t=e.components,s=(0,r.Z)(e,o);return(0,i.kt)(f,(0,a.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"By default, React Navigation tries to ensure that the elements of the navigators display correctly on devices with notches (e.g. iPhone X) and UI elements which may overlap the app content. Such items include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Physical notches"),(0,i.kt)("li",{parentName:"ul"},"Status bar overlay"),(0,i.kt)("li",{parentName:"ul"},"Home activity indicator on iOS"),(0,i.kt)("li",{parentName:"ul"},"Navigation bar on Android")),(0,i.kt)("p",null,'The area not overlapped by such items is referred to as "safe area".'),(0,i.kt)("p",null,"We try to apply proper insets on the UI elements of the navigators to avoid being overlapped by such items. The goal is to (a) maximize usage of the screen (b) without hiding content or making it difficult to interact with by having it obscured by a physical display cutout or some operating system UI."),(0,i.kt)("p",null,"While React Navigation handles safe areas for the built-in UI elements by default, your own content may also need to handle it to ensure that content isn't hidden by these items."),(0,i.kt)("p",null,"It's tempting to solve (a) by wrapping your entire app in a container with padding that ensures all content will not be occluded. But in doing so, we waste a bunch of space on the screen, as pictured in the image on the left below. What we ideally want is the image pictured on the right."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Notch on the iPhone X",src:n(82541).Z,width:"794",height:"785"})),(0,i.kt)("p",null,"While React Native exports a ",(0,i.kt)("inlineCode",{parentName:"p"},"SafeAreaView")," component, this component only supports iOS 10+ with no support for older iOS versions or Android. In addition, it also has some issues, i.e. if a screen containing safe area is animating, it causes jumpy behavior. So we recommend to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"useSafeAreaInsets")," hook from the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/th3rdwave/react-native-safe-area-context"},"react-native-safe-area-context")," library to handle safe areas in a more reliable way."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: The ",(0,i.kt)("inlineCode",{parentName:"p"},"react-native-safe-area-context")," library also exports a ",(0,i.kt)("inlineCode",{parentName:"p"},"SafeAreaView")," component. While it works on Android, it also has the same issues related to jumpy behavior when animating. So we recommend always using the ",(0,i.kt)("inlineCode",{parentName:"p"},"useSafeAreaInsets")," hook instead and avoid using the ",(0,i.kt)("inlineCode",{parentName:"p"},"SafeAreaView")," component.")),(0,i.kt)("p",null,"The rest of this guide gives more information on how to support safe areas in React Navigation."),(0,i.kt)("h2",{id:"hiddencustom-header-or-tab-bar"},"Hidden/Custom Header or Tab Bar"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Default React Navigation Behavior",src:n(93006).Z,width:"323",height:"700"})),(0,i.kt)("p",null,"React Navigation handles safe area in the default header. However, if you're using a custom header, it's important to ensure your UI is within the safe area."),(0,i.kt)("p",null,"For example, if I render nothing for the ",(0,i.kt)("inlineCode",{parentName:"p"},"header")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"tabBar"),", nothing renders"),(0,i.kt)("samp",{id:"hidden-components"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import * as React from 'react';\nimport { Text, View } from 'react-native';\nimport { NavigationContainer } from '@react-navigation/native';\nimport { createBottomTabNavigator } from '@react-navigation/bottom-tabs';\nimport { createNativeStackNavigator } from '@react-navigation/native-stack';\n\nfunction Demo() {\n  return (\n    <View\n      style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center' }}\n    >\n      <Text>This is top text.</Text>\n      <Text>This is bottom text.</Text>\n    </View>\n  );\n}\nconst Stack = createNativeStackNavigator();\nconst Tab = createBottomTabNavigator();\n\nexport default function App() {\n  return (\n    <NavigationContainer>\n      <Stack.Navigator\n        initialRouteName=\"Home\"\n        screenOptions={{ headerShown: false }}\n      >\n        <Stack.Screen name=\"Home\">\n          {() => (\n            <Tab.Navigator\n              initialRouteName=\"Analitics\"\n              tabBar={() => null}\n              screenOptions={{ headerShown: false }}\n            >\n              <Tab.Screen name=\"Analitics\" component={Demo} />\n              <Tab.Screen name=\"Profile\" component={Demo} />\n            </Tab.Navigator>\n          )}\n        </Stack.Screen>\n\n        <Stack.Screen name=\"Settings\" component={Demo} />\n      </Stack.Navigator>\n    </NavigationContainer>\n  );\n}\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Text hidden by iPhoneX UI elements",src:n(19860).Z,width:"323",height:"700"})),(0,i.kt)("p",null,"To fix this issue you can apply safe area insets on your content. This can be achieved using the ",(0,i.kt)("inlineCode",{parentName:"p"},"useSafeAreaInsets")," hook from the ",(0,i.kt)("inlineCode",{parentName:"p"},"react-native-safe-area-context")," library:"),(0,i.kt)("samp",{id:"safe-area-example"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import {\n  SafeAreaProvider,\n  useSafeAreaInsets,\n} from 'react-native-safe-area-context';\n\nfunction Demo() {\n  const insets = useSafeAreaInsets();\n\n  return (\n    <View\n      style={{\n        flex: 1,\n        justifyContent: 'space-between',\n        alignItems: 'center',\n\n        // Paddings to handle safe area\n        paddingTop: insets.top,\n        paddingBottom: insets.bottom,\n        paddingLeft: insets.left,\n        paddingRight: insets.right,\n      }}\n    >\n      <Text>This is top text.</Text>\n      <Text>This is bottom text.</Text>\n    </View>\n  );\n}\n\nexport default function App() {\n  return (\n    <SafeAreaProvider>\n      <NavigationContainer>{/*(...) */}</NavigationContainer>\n    </SafeAreaProvider>\n  );\n}\n")),(0,i.kt)("p",null,"Make sure to wrap your app in ",(0,i.kt)("inlineCode",{parentName:"p"},"SafeAreaProvider")," as per the instructions ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/th3rdwave/react-native-safe-area-context#usage"},"here"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Content spaced correctly with safe area insets",src:n(52819).Z,width:"323",height:"700"})),(0,i.kt)("p",null,"This will detect if the app is running on a device with notches, if so, ensure the content isn't hidden behind any hardware elements."),(0,i.kt)("h2",{id:"landscape-mode"},"Landscape Mode"),(0,i.kt)("p",null,"Even if you're using the default navigation bar and tab bar - if your application works in landscape mode it's important to ensure your content isn't hidden behind the sensor cluster."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"App in landscape mode with text hidden",src:n(43559).Z,width:"2436",height:"1125"})),(0,i.kt)("p",null,"To fix this you can, once again, apply safe area insets to your content. This will not conflict with the navigation bar nor the tab bar's default behavior in portrait mode."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"App in landscape mode with text visible",src:n(42224).Z,width:"2436",height:"1125"})),(0,i.kt)("h2",{id:"use-the-hook-for-more-control"},"Use the hook for more control"),(0,i.kt)("p",null,"In some cases you might need more control over which paddings are applied. For example, you can only apply the top and the bottom padding by changing the ",(0,i.kt)("inlineCode",{parentName:"p"},"style")," object:"),(0,i.kt)("samp",{id:"use-safe-area"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import { useSafeAreaInsets } from 'react-native-safe-area-context';\n\nfunction Demo() {\n  const insets = useSafeAreaInsets();\n\n  return (\n    <View\n      style={{\n        paddingTop: insets.top,\n        paddingBottom: insets.bottom,\n\n        flex: 1,\n        justifyContent: 'space-between',\n        alignItems: 'center',\n      }}\n    >\n      <Text>This is top text.</Text>\n      <Text>This is bottom text.</Text>\n    </View>\n  );\n}\n")),(0,i.kt)("p",null,"Similarly, you could apply these paddings in ",(0,i.kt)("inlineCode",{parentName:"p"},"contentContainerStyle")," of ",(0,i.kt)("inlineCode",{parentName:"p"},"FlatList")," to have the content avoid the safe areas, but still show them under the statusbar and navigation bar when scrolling."),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Use ",(0,i.kt)("inlineCode",{parentName:"li"},"useSafeAreaInsets")," hook from ",(0,i.kt)("inlineCode",{parentName:"li"},"react-native-safe-area-context")," instead of ",(0,i.kt)("inlineCode",{parentName:"li"},"SafeAreaView")," component"),(0,i.kt)("li",{parentName:"ul"},"Don't wrap your whole app in ",(0,i.kt)("inlineCode",{parentName:"li"},"SafeAreaView"),", instead apply the styles to content inside your screens"),(0,i.kt)("li",{parentName:"ul"},"Apply only specific insets using the ",(0,i.kt)("inlineCode",{parentName:"li"},"useSafeAreaInsets")," hook for more control")))}m.isMDXComponent=!0},82541:function(e,t,n){t.Z=n.p+"assets/images/00-intro-4709ed78711b21c7bd54d2a1385262bb.png"},93006:function(e,t,n){t.Z=n.p+"assets/images/01-iphonex-default-2588bf4cb73433282b14319e54ea4815.png"},19860:function(e,t,n){t.Z=n.p+"assets/images/02-iphonex-content-hidden-2a5db62e9fa6340cfb3e8f5a4250b7d4.png"},52819:function(e,t,n){t.Z=n.p+"assets/images/03-iphonex-content-fixed-cb656e6a268a30af3f9aae2b6f3d4c64.png"},43559:function(e,t,n){t.Z=n.p+"assets/images/04-iphonex-landscape-hidden-113cbaf522b57ff8fbfdf4b1b39411d3.png"},42224:function(e,t,n){t.Z=n.p+"assets/images/05-iphonex-landscape-fixed-0d90c3fe5813cdd8664946c5873d7f57.png"}}]);