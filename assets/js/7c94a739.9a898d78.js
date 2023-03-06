"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[76602],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=o,g=p["".concat(l,".").concat(h)]||p[h]||d[h]||r;return n?a.createElement(g,i(i({ref:t},u),{},{components:n})):a.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},85162:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(67294),o=n(86010),r={tabItem:"tabItem_Ymn6"};function i(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r.tabItem,i),hidden:n},t)}},74866:function(e,t,n){n.d(t,{Z:function(){return w}});var a=n(83117),o=n(67294),r=n(86010),i=n(12466),s=n(16550),l=n(91980),c=n(67392),u=n(50012);function p(e){return function(e){return o.Children.map(e,(function(e){if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function d(e){var t=e.values,n=e.children;return(0,o.useMemo)((function(){var e=null!=t?t:p(n);return function(e){var t=(0,c.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function h(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function g(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,r=(0,s.k6)(),i=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:a});return[(0,l._X)(i),(0,o.useCallback)((function(e){if(i){var t=new URLSearchParams(r.location.search);t.set(i,e),r.replace(Object.assign({},r.location,{search:t.toString()}))}}),[i,r])]}function v(e){var t,n,a,r,i=e.defaultValue,s=e.queryString,l=void 0!==s&&s,c=e.groupId,p=d(e),v=(0,o.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var o=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:i,tabValues:p})})),m=v[0],f=v[1],k=g({queryString:l,groupId:c}),b=k[0],N=k[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:c}.groupId),n=(0,u.Nk)(t),a=n[0],r=n[1],[a,(0,o.useCallback)((function(e){t&&r.set(e)}),[t,r])]),S=w[0],y=w[1],C=function(){var e=null!=b?b:S;return h({value:e,tabValues:p})?e:null}();return(0,o.useLayoutEffect)((function(){C&&f(C)}),[C]),{selectedValue:m,selectValue:(0,o.useCallback)((function(e){if(!h({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);f(e),N(e),y(e)}),[N,y,p]),tabValues:p}}var m=n(72389),f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){var t=e.className,n=e.block,s=e.selectedValue,l=e.selectValue,c=e.tabValues,u=[],p=(0,i.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,n=u.indexOf(t),a=c[n].value;a!==s&&(p(t),l(a))},h=function(e){var t,n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var a,o=u.indexOf(e.currentTarget)+1;n=null!=(a=u[o])?a:u[0];break;case"ArrowLeft":var r,i=u.indexOf(e.currentTarget)-1;n=null!=(r=u[i])?r:u[u.length-1]}null==(t=n)||t.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t)},c.map((function(e){var t=e.value,n=e.label,i=e.attributes;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:function(e){return u.push(e)},onKeyDown:h,onClick:d},i,{className:(0,r.Z)("tabs__item",f.tabItem,null==i?void 0:i.className,{"tabs__item--active":s===t})}),null!=n?n:t)})))}function b(e){var t=e.lazy,n=e.children,a=e.selectedValue;if(n=Array.isArray(n)?n:[n],t){var r=n.find((function(e){return e.props.value===a}));return r?(0,o.cloneElement)(r,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},n.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==a})})))}function N(e){var t=v(e);return o.createElement("div",{className:(0,r.Z)("tabs-container",f.tabList)},o.createElement(k,(0,a.Z)({},e,t)),o.createElement(b,(0,a.Z)({},e,t)))}function w(e){var t=(0,m.Z)();return o.createElement(N,(0,a.Z)({key:String(t)},e))}},83296:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var a=n(83117),o=n(80102),r=(n(67294),n(3905)),i=(n(74866),n(85162),["components"]),s={id:"navigation-options-resolution",title:"Navigation options resolution",sidebar_label:"Navigation options resolution"},l=void 0,c={unversionedId:"navigation-options-resolution",id:"version-4.x/navigation-options-resolution",title:"Navigation options resolution",description:"Each screen can configure various aspects about how it gets presented in the navigator that renders it. In the Configuring the header bar section of the fundamentals documentation we explain the basics of how this works.",source:"@site/versioned_docs/version-4.x/navigation-options-resolution.md",sourceDirName:".",slug:"/navigation-options-resolution",permalink:"/docs/4.x/navigation-options-resolution",draft:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-4.x/navigation-options-resolution.md",tags:[],version:"4.x",frontMatter:{id:"navigation-options-resolution",title:"Navigation options resolution",sidebar_label:"Navigation options resolution"},sidebar:"version-4.x-docs",previous:{title:"Different status bar configuration based on route",permalink:"/docs/4.x/status-bar"},next:{title:"Custom Android back button behavior",permalink:"/docs/4.x/custom-android-back-button-handling"}},u={},p=[],d={toc:p},h="wrapper";function g(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)(h,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Each screen can configure various aspects about how it gets presented in the navigator that renders it. In the ",(0,r.kt)("a",{parentName:"p",href:"/docs/4.x/headers"},"Configuring the header bar")," section of the fundamentals documentation we explain the basics of how this works."),(0,r.kt)("p",null,"In this document we'll explain how this works when there are multiple navigators. It's important to understand this so that you put your ",(0,r.kt)("inlineCode",{parentName:"p"},"navigationOptions")," in the correct place and can properly configure your navigators. If you put them in the wrong place, at best nothing will happen and at worst something confusing and unexpected will happen. Thankfully, the logic for this could not be any easier to understand:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"You can only modify navigation options for a navigator from one of its screen components. This applies equally to navigators that are nested as screens.")),(0,r.kt)("p",null,"Let's take for example a tab navigator that contains a stack in each tab. What happens if we set the ",(0,r.kt)("inlineCode",{parentName:"p"},"navigationOptions")," on a screen inside of the stack?"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"class A extends React.Component {\n  static navigationOptions = {\n    tabBarLabel: 'Home!',\n  };\n\n  // etc..\n}\n\nclass B extends React.Component {\n  static navigationOptions = {\n    tabBarLabel: 'Settings!',\n  };\n\n  // etc..\n}\n\nconst HomeStack = createStackNavigator({ A });\nconst SettingsStack = createStackNavigator({ B });\n\nexport default createAppContainer(\n  createBottomTabNavigator({\n    HomeStack,\n    SettingsStack,\n  })\n);\n")),(0,r.kt)("a",{href:"https://snack.expo.io/@react-navigation/nested-navigationoptions-wrong-v3",target:"blank",class:"run-code-button"},"\u2192 Run this code"),(0,r.kt)("p",null,"As we mentioned earlier, you can only modify navigation options for a navigator from one of its screen components. ",(0,r.kt)("inlineCode",{parentName:"p"},"A")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"B")," above are screen components in ",(0,r.kt)("inlineCode",{parentName:"p"},"HomeStack")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"SettingsStack")," respectively, not in the tab navigator. So the result will be that the ",(0,r.kt)("inlineCode",{parentName:"p"},"tabBarLabel")," property is not applied to the tab navigator. We can fix this though!"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const HomeStack = createStackNavigator({ A });\nconst SettingsStack = createStackNavigator({ B });\n\nHomeStack.navigationOptions = {\n  tabBarLabel: 'Home!',\n};\n\nSettingsStack.navigationOptions = {\n  tabBarLabel: 'Settings!',\n};\n\nexport default createAppContainer(\n  createBottomTabNavigator({\n    HomeStack,\n    SettingsStack,\n  })\n);\n")),(0,r.kt)("a",{href:"https://snack.expo.io/@react-navigation/nested-navigationoptions-correct-v3",target:"blank",class:"run-code-button"},"\u2192 Run this code"),(0,r.kt)("p",null,"To understand what is going on here, first recall that in the following example, ",(0,r.kt)("inlineCode",{parentName:"p"},"MyComponent")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"MyOtherComponent")," are identical:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"class MyComponent extends React.Component {\n  static navigationOptions = {\n    title: 'Hello!',\n  };\n  // etc.\n}\n\nclass MyOtherComponent extends React.Component {\n  // etc.\n}\n\nMyOtherComponent.navigationOptions = {\n  title: 'Hello!',\n};\n")),(0,r.kt)("p",null,"We also know that ",(0,r.kt)("inlineCode",{parentName:"p"},"createStackNavigator")," and related functions return React components. So when we set the ",(0,r.kt)("inlineCode",{parentName:"p"},"navigationOptions")," directly on the ",(0,r.kt)("inlineCode",{parentName:"p"},"HomeStack")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"SettingsStack")," component, it allows us to control the ",(0,r.kt)("inlineCode",{parentName:"p"},"navigationOptions")," for its parent navigator when its used as a screen component. In this case, the ",(0,r.kt)("inlineCode",{parentName:"p"},"navigationOptions")," on our stack components configure the label in the tab navigator that renders the stacks."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const HomeStack = createStackNavigator(\n  { A },\n  {\n    // This is the default for screens in the stack, so `A` will\n    // use this title unless it overrides it\n    defaultNavigationOptions: {\n      title: 'Welcome',\n    },\n  }\n);\n\n// These are the options that are used by the navigator that renders\n// the HomeStack, in our example above this is a tab navigator.\nHomeStack.navigationOptions = {\n  tabBarLabel: 'Home!',\n};\n")),(0,r.kt)("p",null,"Another way you could write this is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const HomeStack = createStackNavigator(\n  { A },\n  {\n    // This applies to the parent navigator\n    navigationOptions: {\n      tabBarLabel: 'Home!',\n    },\n    // This applies to child routes\n    defaultNavigationOptions: {\n      title: 'Welcome',\n    },\n  }\n);\n")),(0,r.kt)("a",{href:"https://snack.expo.io/@react-navigation/nested-navigationoptions-title-v3",target:"blank",class:"run-code-button"},"\u2192 Run this code"),(0,r.kt)("h1",{id:"getactivechildnavigationoptions"},"getActiveChildNavigationOptions"),(0,r.kt)("p",null,"If you would like to get the ",(0,r.kt)("inlineCode",{parentName:"p"},"navigationOptions")," from the active child of a navigator, you can do that with ",(0,r.kt)("inlineCode",{parentName:"p"},"getActiveChildNavigationOptions"),". This makes it possible for you to set the ",(0,r.kt)("inlineCode",{parentName:"p"},"tabBarLabel")," directly on a screen inside of a stack that is inside of a tab, for example."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"class A extends React.Component {\n  static navigationOptions = {\n    title: 'Welcome',\n    tabBarLabel: 'Home!',\n  };\n\n  render() {\n    return <Placeholder text=\"A!\" />;\n  }\n}\n\nconst HomeStack = createStackNavigator(\n  { A },\n  {\n    navigationOptions: ({ navigation, screenProps }) => ({\n      // you can put fallback values before here, eg: a default tabBarLabel\n      ...getActiveChildNavigationOptions(navigation, screenProps),\n      // put other navigationOptions that you don't want the active child to\n      // be able to override here!\n    }),\n  }\n);\n")),(0,r.kt)("a",{href:"https://snack.expo.io/@react-navigation/nested-navigationoptions-active-child-v3",target:"blank",class:"run-code-button"},"\u2192 Run this code"),(0,r.kt)("h1",{id:"note-the-navigationoptions-property-vs-navigator-configuration"},(0,r.kt)("strong",{parentName:"h1"},"Note"),": the navigationOptions property vs navigator configuration"),(0,r.kt)("p",null,"Navigators are initialized with ",(0,r.kt)("inlineCode",{parentName:"p"},"create*Navigator(routeConfig, navigatorConfig)"),". Inside of ",(0,r.kt)("inlineCode",{parentName:"p"},"navigatorConfig")," we can add a ",(0,r.kt)("inlineCode",{parentName:"p"},"defaultNavigationOptions")," property. These ",(0,r.kt)("inlineCode",{parentName:"p"},"defaultNavigationOptions")," are the default options for screens within that navigator (",(0,r.kt)("a",{parentName:"p",href:"/docs/4.x/headers#sharing-common-navigationoptions-across-screens"},"read more about sharing common navigationOptions"),"), they do not refer to the ",(0,r.kt)("inlineCode",{parentName:"p"},"navigationOptions")," for that navigator ","\u2014"," as we have seen above, we set the ",(0,r.kt)("inlineCode",{parentName:"p"},"navigationOptions")," property directly on the navigator for that use case."),(0,r.kt)("h1",{id:"a-stack-contains-a-tab-navigator-and-you-want-to-set-the-title-on-the-stack-header"},"A stack contains a tab navigator and you want to set the title on the stack header"),(0,r.kt)("p",null,"Imagine the following configuration:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const TabNavigator = createBottomTabNavigator({\n  Feed: FeedScreen,\n  Profile: ProfileScreen,\n});\n\nconst AppNavigator = createStackNavigator({\n  Home: TabNavigator,\n  Settings: SettingsScreen,\n});\n")),(0,r.kt)("p",null,"If we were to set the ",(0,r.kt)("inlineCode",{parentName:"p"},"headerTitle")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"navigationOptions")," on the ",(0,r.kt)("inlineCode",{parentName:"p"},"FeedScreen"),", this would not work. This is because the ",(0,r.kt)("inlineCode",{parentName:"p"},"AppNavigator")," stack will only look at its immediate children for configuration: ",(0,r.kt)("inlineCode",{parentName:"p"},"TabNavigator")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"SettingsScreen"),". So we can set the ",(0,r.kt)("inlineCode",{parentName:"p"},"headerTitle")," on the ",(0,r.kt)("inlineCode",{parentName:"p"},"TabNavigator")," instead, like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const TabNavigator = createBottomTabNavigator({\n  Feed: FeedScreen,\n  Profile: ProfileScreen,\n});\n\nTabNavigator.navigationOptions = ({ navigation }) => {\n  const { routeName } = navigation.state.routes[navigation.state.index];\n\n  // You can do whatever you like here to pick the title based on the route name\n  const headerTitle = routeName;\n\n  return {\n    headerTitle,\n  };\n};\n")),(0,r.kt)("p",null,"Another option is to re-organize your navigators, such that each tab has its own stack. You can then hide the top-level stack's header when the tab screen is focused."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const FeedStack = createStackNavigator({\n  FeedHome: FeedScreen,\n  /* other routes here */\n});\n\nconst ProfileStack = createStackNavigator({\n  ProfileHome: ProfileScreen,\n  /* other routes here */\n});\n\nconst TabNavigator = createBottomTabNavigator({\n  Feed: FeedStack,\n  Profile: ProfileStack,\n});\n\nTabNavigator.navigationOptions = {\n  // Hide the header from AppNavigator stack\n  headerShown: false,\n};\n\nconst AppNavigator = createStackNavigator({\n  Home: TabNavigator,\n  Settings: SettingsScreen,\n});\n")),(0,r.kt)("p",null,"Using this configuration, the ",(0,r.kt)("inlineCode",{parentName:"p"},"headerTitle")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"title")," from ",(0,r.kt)("inlineCode",{parentName:"p"},"navigationOptions")," on ",(0,r.kt)("inlineCode",{parentName:"p"},"FeedScreen")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ProfileScreen")," will not determine the title in their headers."),(0,r.kt)("p",null,"Additionally, you can push new screens to the feed and profile stacks without hiding the tab bar by adding more routes to those stacks. If you want to push screens on top of the tab bar, then you can add them to the ",(0,r.kt)("inlineCode",{parentName:"p"},"AppNavigator")," stack."),(0,r.kt)("h1",{id:"a-tab-navigator-contains-a-stack-and-you-want-to-hide-the-tab-bar-on-specific-screens"},"A tab navigator contains a stack and you want to hide the tab bar on specific screens"),(0,r.kt)("p",null,"Similar to the example above where a stack contains a tab navigator, we can solve this in two ways: add ",(0,r.kt)("inlineCode",{parentName:"p"},"navigationOptions")," to our tab navigator to set the tab bar to hidden depending on which route is active in the child stack, or we can move the tab navigator inside of the stack."),(0,r.kt)("p",null,"Imagine the following configuration:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const FeedStack = createStackNavigator({\n  FeedHome: FeedScreen,\n  Details: DetailsScreen,\n});\n\nconst TabNavigator = createBottomTabNavigator({\n  Feed: FeedStack,\n  Profile: ProfileScreen,\n});\n\nconst AppNavigator = createSwitchNavigator({\n  Auth: AuthScreen,\n  Home: TabNavigator,\n});\n")),(0,r.kt)("p",null,"If we want to hide the tab bar when we navigate from the feed home to a details screen without shuffling navigators, we cannot set the ",(0,r.kt)("inlineCode",{parentName:"p"},"tabBarVisible: false")," configuration in ",(0,r.kt)("inlineCode",{parentName:"p"},"navigationOptions")," on ",(0,r.kt)("inlineCode",{parentName:"p"},"DetailsScreen"),", because those options will only apply to the ",(0,r.kt)("inlineCode",{parentName:"p"},"FeedStack"),". Instead, we can do the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const FeedStack = createStackNavigator({\n  FeedHome: FeedScreen,\n  Details: DetailsScreen,\n});\n\nFeedStack.navigationOptions = ({ navigation }) => {\n  let tabBarVisible = true;\n  if (navigation.state.index > 0) {\n    tabBarVisible = false;\n  }\n\n  return {\n    tabBarVisible,\n  };\n};\n")),(0,r.kt)("p",null,"This will hide the tab bar any time we navigate away from the feed home. We could switch visibility based on route name, but it would be strange to have the tab bar be hidden and then appear again when pushing another route ","\u2014"," it should only be visible when returning to a route where it was previously visible."),(0,r.kt)("p",null,"Another option here would be to add another stack navigator as a parent of the tab navigator, and put the details screen there. This is recommended."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const FeedStack = createStackNavigator({\n  FeedHome: FeedScreen,\n  /* any other route you want to render under the tab bar */\n});\n\nconst TabNavigator = createBottomTabNavigator({\n  Feed: FeedStack,\n  Profile: ProfileScreen,\n});\n\nconst HomeStack = createStackNavigator({\n  Tabs: TabNavigator,\n  Details: DetailsScreen,\n  /* any other route you want to render above the tab bar */\n});\n\nconst AppNavigator = createSwitchNavigator({\n  Auth: AuthScreen,\n  Home: HomeStack,\n});\n")),(0,r.kt)("h1",{id:"a-drawer-has-a-stack-inside-of-it-and-you-want-to-lock-the-drawer-on-certain-screens"},"A drawer has a stack inside of it and you want to lock the drawer on certain screens"),(0,r.kt)("p",null,"This is conceptually identical to having a tab with a stack inside of it (read that above if you have not already), where you want to hide the tab bar on certain screens. The only difference is that rather than using ",(0,r.kt)("inlineCode",{parentName:"p"},"tabBarVisible")," you will use ",(0,r.kt)("inlineCode",{parentName:"p"},"drawerLockMode"),"."),(0,r.kt)("p",null,"Imagine the following configuration:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const FeedStack = createStackNavigator({\n  FeedHome: FeedScreen,\n  Details: DetailsScreen,\n});\n\nconst DrawerNavigator = createDrawerNavigator({\n  Feed: FeedStack,\n  Profile: ProfileScreen,\n});\n\nconst AppNavigator = createSwitchNavigator({\n  Auth: AuthScreen,\n  Home: DrawerNavigator,\n});\n")),(0,r.kt)("p",null,"In order to hide the drawer when we push the details screen to the feed stack, we need to set ",(0,r.kt)("inlineCode",{parentName:"p"},"navigationOptions")," on the ",(0,r.kt)("inlineCode",{parentName:"p"},"FeedStack"),". If we were to set ",(0,r.kt)("inlineCode",{parentName:"p"},"navigationOptions")," on the ",(0,r.kt)("inlineCode",{parentName:"p"},"DetailsScreen"),", they would be configuring the feed stack (its direct parent) and not the drawer."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const FeedStack = createStackNavigator({\n  FeedHome: FeedScreen,\n  Details: DetailsScreen,\n});\n\nFeedStack.navigationOptions = ({ navigation }) => {\n  let drawerLockMode = 'unlocked';\n  if (navigation.state.index > 0) {\n    drawerLockMode = 'locked-closed';\n  }\n\n  return {\n    drawerLockMode,\n  };\n};\n")),(0,r.kt)("p",null,"Another option here would be to add another stack navigator as a parent of the drawer navigator, and put the details screen there. This is recommended."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const FeedStack = createStackNavigator({\n  FeedHome: FeedScreen,\n  /* any other route where you want the drawer to remain available */\n  /* keep in mind that it will conflict with the swipe back gesture on ios */\n});\n\nconst DrawerNavigator = createDrawerNavigator({\n  Feed: FeedStack,\n  Profile: ProfileScreen,\n});\n\nconst HomeStack = createStackNavigator({\n  Drawer: DrawerNavigator,\n  Details: DetailsScreen,\n  /* add routes here where you want the drawer to be locked */\n});\n\nconst AppNavigator = createSwitchNavigator({\n  Auth: AuthScreen,\n  Home: HomeStack,\n});\n")))}g.isMDXComponent=!0}}]);