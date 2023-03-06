"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[74799],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),d=r,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||i;return n?a.createElement(f,o(o({ref:t},u),{},{components:n})):a.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(67294),r=n(86010),i={tabItem:"tabItem_Ymn6"};function o(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,o),hidden:n},t)}},74866:function(e,t,n){n.d(t,{Z:function(){return N}});var a=n(83117),r=n(67294),i=n(86010),o=n(12466),c=n(16550),s=n(91980),l=n(67392),u=n(50012);function p(e){return function(e){return r.Children.map(e,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function m(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:p(n);return function(e){var t=(0,l.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function d(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function f(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,i=(0,c.k6)(),o=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:a});return[(0,s._X)(o),(0,r.useCallback)((function(e){if(o){var t=new URLSearchParams(i.location.search);t.set(o,e),i.replace(Object.assign({},i.location,{search:t.toString()}))}}),[o,i])]}function v(e){var t,n,a,i,o=e.defaultValue,c=e.queryString,s=void 0!==c&&c,l=e.groupId,p=m(e),v=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!d({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:o,tabValues:p})})),g=v[0],h=v[1],b=f({queryString:s,groupId:l}),k=b[0],y=b[1],N=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:l}.groupId),n=(0,u.Nk)(t),a=n[0],i=n[1],[a,(0,r.useCallback)((function(e){t&&i.set(e)}),[t,i])]),w=N[0],S=N[1],I=function(){var e=null!=k?k:w;return d({value:e,tabValues:p})?e:null}();return(0,r.useLayoutEffect)((function(){I&&h(I)}),[I]),{selectedValue:g,selectValue:(0,r.useCallback)((function(e){if(!d({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);h(e),y(e),S(e)}),[y,S,p]),tabValues:p}}var g=n(72389),h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){var t=e.className,n=e.block,c=e.selectedValue,s=e.selectValue,l=e.tabValues,u=[],p=(0,o.o5)().blockElementScrollPositionUntilNextRender,m=function(e){var t=e.currentTarget,n=u.indexOf(t),a=l[n].value;a!==c&&(p(t),s(a))},d=function(e){var t,n=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":var a,r=u.indexOf(e.currentTarget)+1;n=null!=(a=u[r])?a:u[0];break;case"ArrowLeft":var i,o=u.indexOf(e.currentTarget)-1;n=null!=(i=u[o])?i:u[u.length-1]}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},l.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:c===t?0:-1,"aria-selected":c===t,key:t,ref:function(e){return u.push(e)},onKeyDown:d,onClick:m},o,{className:(0,i.Z)("tabs__item",h.tabItem,null==o?void 0:o.className,{"tabs__item--active":c===t})}),null!=n?n:t)})))}function k(e){var t=e.lazy,n=e.children,a=e.selectedValue;if(n=Array.isArray(n)?n:[n],t){var i=n.find((function(e){return e.props.value===a}));return i?(0,r.cloneElement)(i,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})})))}function y(e){var t=v(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",h.tabList)},r.createElement(b,(0,a.Z)({},e,t)),r.createElement(k,(0,a.Z)({},e,t)))}function N(e){var t=(0,g.Z)();return r.createElement(y,(0,a.Z)({key:String(t)},e))}},7087:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),o=(n(74866),n(85162),["components"]),c={id:"static-configuration",title:"Getting started with static API",sidebar_label:"Getting started"},s=void 0,l={unversionedId:"static-configuration",id:"version-7.x/static-configuration",title:"Getting started with static API",description:"React Navigation primarily uses a dynamic component based API. This provides a lot of flexibility, however there are a few drawbacks:",source:"@site/versioned_docs/version-7.x/static-configuration.md",sourceDirName:".",slug:"/static-configuration",permalink:"/docs/7.x/static-configuration",draft:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-7.x/static-configuration.md",tags:[],version:"7.x",frontMatter:{id:"static-configuration",title:"Getting started with static API",sidebar_label:"Getting started"},sidebar:"version-7.x/docs",previous:{title:"Upgrading from 6.x",permalink:"/docs/7.x/upgrading-from-6.x"},next:{title:"API Reference",permalink:"/docs/7.x/static-api-reference"}},u={},p=[{value:"Basic usage",id:"basic-usage",level:2},{value:"Nested navigators",id:"nested-navigators",level:2},{value:"Limitations",id:"limitations",level:2}],m={toc:p},d="wrapper";function f(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)(d,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"React Navigation primarily uses a dynamic component based API. This provides a lot of flexibility, however there are a few drawbacks:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The TypeScript types need to be configured manually, which can get verbose and overwhelming."),(0,i.kt)("li",{parentName:"ul"},"Deep linking needs to be configured separately to match the structure of navigation tree, which can be error prone."),(0,i.kt)("li",{parentName:"ul"},"The component API can be a bit more verbose than necessary.")),(0,i.kt)("p",null,"To address these drawbacks, there's also a static API to configure the navigation tree that trades flexibility for convenience. This API is built into React Navigation, so you don't need to install any additional packages."),(0,i.kt)("h2",{id:"basic-usage"},"Basic usage"),(0,i.kt)("p",null,"The same principles apply to the static API as the dynamic API. We have navigators that can contain multiple screens."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import * as React from 'react';\nimport { View, Text } from 'react-native';\nimport { createStaticNavigation } from '@react-navigation/native';\nimport { createNativeStackNavigator } from '@react-navigation/native-stack';\n\nfunction HomeScreen() {\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text>Home Screen</Text>\n    </View>\n  );\n}\n\nconst RootStack = createNativeStackNavigator({\n  screens: {\n    Home: HomeScreen,\n  },\n});\n\nconst Navigation = createStaticNavigation(RootStack);\n\nfunction App() {\n  return <Navigation />;\n}\n\nexport default App;\n")),(0,i.kt)("p",null,"Let's look at the code above in detail. You can also check the equivalent dynamic API to get a better understanding."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"To define a navigator, we use the ",(0,i.kt)("inlineCode",{parentName:"p"},"createXNavigator")," function (in this case ",(0,i.kt)("inlineCode",{parentName:"p"},"createNativeStackNavigator"),") and pass it an object with a property called ",(0,i.kt)("inlineCode",{parentName:"p"},"screens"),", which is an object containing configuration for screens - the name of the screen is the key and the value is the component to render:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const RootStack = createNativeStackNavigator({\n  screens: {\n    Home: HomeScreen,\n  },\n});\n")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Equivalent dynamic API"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-js"},'const Stack = createNativeStackNavigator();\n\nfunction RootStack() {\n  return (\n    <Stack.Navigator>\n      <Stack.Screen name="Home" component={HomeScreen} />\n    </Stack.Navigator>\n  );\n}\n')))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"After defining the navigator, we use it with the ",(0,i.kt)("inlineCode",{parentName:"p"},"createStaticNavigation")," function to create a component to render:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const Navigation = createStaticNavigation(RootStack);\n\nfunction App() {\n  return <Navigation />;\n}\n")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Equivalent dynamic API"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-js"},"function App() {\n  return (\n    <NavigationContainer>\n      <RootStack />\n    </NavigationContainer>\n  );\n}\n"))),(0,i.kt)("p",{parentName:"li"}," The component returned by ",(0,i.kt)("inlineCode",{parentName:"p"},"createStaticNavigation")," is similar to the ",(0,i.kt)("inlineCode",{parentName:"p"},"NavigationContainer")," and accepts the ",(0,i.kt)("a",{parentName:"p",href:"/docs/7.x/navigation-container#props"},"same props"),". See ",(0,i.kt)("a",{parentName:"p",href:"/docs/7.x/static-api-reference#createstaticnavigation"},"Static API Reference")," for more details.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"If you're using TypeScript, there's one last step to do to for automatic type-checking when using ",(0,i.kt)("inlineCode",{parentName:"p"},"useNavigation"),":"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-js"},"type RootStackParamList = StaticParamList<typeof RootStack>;\n\ndeclare global {\n  namespace ReactNavigation {\n    interface RootParamList extends RootStackParamList {}\n  }\n}\n")),(0,i.kt)("p",{parentName:"li"},"See ",(0,i.kt)("a",{parentName:"p",href:"/docs/7.x/static-typescript"},"Configuring TypeScript")," for more details."))),(0,i.kt)("p",null,"For more details on the static API, see ",(0,i.kt)("a",{parentName:"p",href:"/docs/7.x/static-api-reference"},"Static API Reference"),"."),(0,i.kt)("h2",{id:"nested-navigators"},"Nested navigators"),(0,i.kt)("p",null,"To nest a navigator, a navigator defined using the static API can be passed as the value for a screen:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const HomeTabs = createBottomTabNavigator({\n  screens: {\n    Groups: GroupsScreen,\n    Chats: ChatsScreen,\n  },\n});\n\nconst RootStack = createNativeStackNavigator({\n  screens: {\n    Home: HomeTabs,\n  },\n});\n")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Equivalent dynamic API"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'const Tab = createBottomTabNavigator();\n\nfunction HomeTabs() {\n  return (\n    <Tab.Navigator>\n      <Tab.Screen name="Groups" component={GroupsScreen} />\n      <Tab.Screen name="Chats" component={ChatsScreen} />\n    </Tab.Navigator>\n  );\n}\n\nconst Stack = createNativeStackNavigator();\n\nfunction RootStack() {\n  return (\n    <Stack.Navigator>\n      <Stack.Screen name="Home" component={HomeTabs} />\n    </Stack.Navigator>\n  );\n}\n'))),(0,i.kt)("p",null,"There are a couple of things to keep in mind when nesting navigators with the static API:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"With the dynamic API, the navigator component is a regular component and there's no restriction on how it's structured. As long as it has a navigator rendered somewhere in the tree, it will work for the nested navigation. With the static configuration, you must pass the object returned by another static navigator."),(0,i.kt)("li",{parentName:"ol"},"You can use a component defined using the dynamic API as the value for a screen in the static API. However, automatic linking configuration and automatic TypeScript types won't work for the screen.")),(0,i.kt)("p",null,"Mixing the static and dynamic APIs is possible, however, in those cases you'll lose the benefits of the static API. See ",(0,i.kt)("a",{parentName:"p",href:"/docs/7.x/static-combine-with-dynamic"},"Combining static and dynamic APIs")," for more details on some cases where you could mix the two APIs."),(0,i.kt)("h2",{id:"limitations"},"Limitations"),(0,i.kt)("p",null,"The static API is a convenience wrapper around the dynamic API, not a full-replacement. It's not suitable for all use cases. It's important to keep the limitations in mind when using the static API:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The navigation tree is static with the static API, i.e. the configuration can't be changed dynamically (e.g. updating list of screens or options based on external data)."),(0,i.kt)("li",{parentName:"ul"},"The static configuration doesn't have access to context or props, so you can't use them in options, listeners etc. specified in the static configuration.")),(0,i.kt)("p",null,"The dynamic API is still the primary API and isn't going away. So we recommend to avoid rewriting your app to use the static API if you have type-checking and deep linking setup already. Instead, consider using the static API in new projects where you know you won't need to change the configuration dynamically."))}f.isMDXComponent=!0}}]);