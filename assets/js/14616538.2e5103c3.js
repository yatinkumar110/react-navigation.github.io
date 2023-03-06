"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[88187],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return f}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),u=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=u(e.components);return a.createElement(c.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(t),m=r,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return t?a.createElement(f,i(i({ref:n},l),{},{components:t})):a.createElement(f,i({ref:n},l))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},85162:function(e,n,t){t.d(n,{Z:function(){return i}});var a=t(67294),r=t(86010),o={tabItem:"tabItem_Ymn6"};function i(e){var n=e.children,t=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,i),hidden:t},n)}},74866:function(e,n,t){t.d(n,{Z:function(){return N}});var a=t(83117),r=t(67294),o=t(86010),i=t(12466),s=t(16550),c=t(91980),u=t(67392),l=t(50012);function p(e){return function(e){return r.Children.map(e,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}function d(e){var n=e.values,t=e.children;return(0,r.useMemo)((function(){var e=null!=n?n:p(t);return function(e){var n=(0,u.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function m(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function f(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId,o=(0,s.k6)(),i=function(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:t,groupId:a});return[(0,c._X)(i),(0,r.useCallback)((function(e){if(i){var n=new URLSearchParams(o.location.search);n.set(i,e),o.replace(Object.assign({},o.location,{search:n.toString()}))}}),[i,o])]}function g(e){var n,t,a,o,i=e.defaultValue,s=e.queryString,c=void 0!==s&&s,u=e.groupId,p=d(e),g=(0,r.useState)((function(){return function(e){var n,t=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var r=null!=(n=a.find((function(e){return e.default})))?n:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:i,tabValues:p})})),h=g[0],v=g[1],b=f({queryString:c,groupId:u}),k=b[0],S=b[1],N=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),t=(0,l.Nk)(n),a=t[0],o=t[1],[a,(0,r.useCallback)((function(e){n&&o.set(e)}),[n,o])]),y=N[0],w=N[1],T=function(){var e=null!=k?k:y;return m({value:e,tabValues:p})?e:null}();return(0,r.useLayoutEffect)((function(){T&&v(T)}),[T]),{selectedValue:h,selectValue:(0,r.useCallback)((function(e){if(!m({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);v(e),S(e),w(e)}),[S,w,p]),tabValues:p}}var h=t(72389),v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){var n=e.className,t=e.block,s=e.selectedValue,c=e.selectValue,u=e.tabValues,l=[],p=(0,i.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var n=e.currentTarget,t=l.indexOf(n),a=u[t].value;a!==s&&(p(n),c(a))},m=function(e){var n,t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var a,r=l.indexOf(e.currentTarget)+1;t=null!=(a=l[r])?a:l[0];break;case"ArrowLeft":var o,i=l.indexOf(e.currentTarget)-1;t=null!=(o=l[i])?o:l[l.length-1]}null==(n=t)||n.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},n)},u.map((function(e){var n=e.value,t=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,key:n,ref:function(e){return l.push(e)},onKeyDown:m,onClick:d},i,{className:(0,o.Z)("tabs__item",v.tabItem,null==i?void 0:i.className,{"tabs__item--active":s===n})}),null!=t?t:n)})))}function k(e){var n=e.lazy,t=e.children,a=e.selectedValue;if(t=Array.isArray(t)?t:[t],n){var o=t.find((function(e){return e.props.value===a}));return o?(0,r.cloneElement)(o,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},t.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})})))}function S(e){var n=g(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",v.tabList)},r.createElement(b,(0,a.Z)({},e,n)),r.createElement(k,(0,a.Z)({},e,n)))}function N(e){var n=(0,h.Z)();return r.createElement(S,(0,a.Z)({key:String(n)},e))}},50096:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var a=t(83117),r=t(80102),o=(t(67294),t(3905)),i=(t(74866),t(85162),["components"]),s={id:"screen-options-resolution",title:"Screen options with nested navigators",sidebar_label:"Screen options with nested navigators"},c=void 0,u={unversionedId:"screen-options-resolution",id:"version-5.x/screen-options-resolution",title:"Screen options with nested navigators",description:"In this document we'll explain how screen options work when there are multiple navigators. It's important to understand this so that you put your options in the correct place and can properly configure your navigators. If you put them in the wrong place, at best nothing will happen and at worst something confusing and unexpected will happen.",source:"@site/versioned_docs/version-5.x/screen-options-resolution.md",sourceDirName:".",slug:"/screen-options-resolution",permalink:"/docs/5.x/screen-options-resolution",draft:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-5.x/screen-options-resolution.md",tags:[],version:"5.x",frontMatter:{id:"screen-options-resolution",title:"Screen options with nested navigators",sidebar_label:"Screen options with nested navigators"},sidebar:"version-5.x/docs",previous:{title:"Different status bar configuration based on route",permalink:"/docs/5.x/status-bar"},next:{title:"Custom Android back button behavior",permalink:"/docs/5.x/custom-android-back-button-handling"}},l={},p=[{value:"Setting parent screen options based on child navigator&#39;s state",id:"setting-parent-screen-options-based-on-child-navigators-state",level:2}],d={toc:p},m="wrapper";function f(e){var n=e.components,t=(0,r.Z)(e,i);return(0,o.kt)(m,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this document we'll explain how ",(0,o.kt)("a",{parentName:"p",href:"/docs/5.x/screen-options"},"screen options")," work when there are multiple navigators. It's important to understand this so that you put your ",(0,o.kt)("inlineCode",{parentName:"p"},"options")," in the correct place and can properly configure your navigators. If you put them in the wrong place, at best nothing will happen and at worst something confusing and unexpected will happen."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"You can only modify navigation options for a navigator from one of its screen components. This applies equally to navigators that are nested as screens.")),(0,o.kt)("p",null,"Let's take for example a tab navigator that contains a stack in each tab. What happens if we set the ",(0,o.kt)("inlineCode",{parentName:"p"},"options")," on a screen inside of the stack?"),(0,o.kt)("samp",{id:"stack-in-tab-nav-options"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const Tab = createBottomTabNavigator();\nconst HomeStack = createStackNavigator();\nconst SettingsStack = createStackNavigator();\n\nfunction HomeStackScreen() {\n  return (\n    <HomeStack.Navigator>\n      <HomeStack.Screen\n        name="A"\n        component={A}\n        options={{ tabBarLabel: \'Home!\' }}\n      />\n    </HomeStack.Navigator>\n  );\n}\n\nfunction SettingsStackScreen() {\n  return (\n    <SettingsStack.Navigator>\n      <SettingsStack.Screen\n        name="B"\n        component={B}\n        options={{ tabBarLabel: \'Settings!\' }}\n      />\n    </SettingsStack.Navigator>\n  );\n}\n\nexport default function App() {\n  return (\n    <NavigationContainer>\n      <Tab.Navigator>\n        <Tab.Screen name="Home" component={HomeStackScreen} />\n        <Tab.Screen name="Settings" component={SettingsStackScreen} />\n      </Tab.Navigator>\n    </NavigationContainer>\n  );\n}\n')),(0,o.kt)("p",null,"As we mentioned earlier, you can only modify navigation options for a navigator from one of its screen components. ",(0,o.kt)("inlineCode",{parentName:"p"},"A")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"B")," above are screen components in ",(0,o.kt)("inlineCode",{parentName:"p"},"HomeStack")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"SettingsStack")," respectively, not in the tab navigator. So the result will be that the ",(0,o.kt)("inlineCode",{parentName:"p"},"tabBarLabel")," property is not applied to the tab navigator. We can fix this though!"),(0,o.kt)("samp",{id:"stack-in-tab-nav-options-fixed"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"export default function App() {\n  return (\n    <NavigationContainer>\n      <Tab.Navigator>\n        <Tab.Screen\n          name=\"Home\"\n          component={HomeStackScreen}\n          options={{ tabBarLabel: 'Home!' }}\n        />\n        <Tab.Screen\n          name=\"Settings\"\n          component={SettingsStackScreen}\n          options={{ tabBarLabel: 'Settings!' }}\n        />\n      </Tab.Navigator>\n    </NavigationContainer>\n  );\n}\n")),(0,o.kt)("p",null,"When we set the ",(0,o.kt)("inlineCode",{parentName:"p"},"options")," directly on ",(0,o.kt)("inlineCode",{parentName:"p"},"Screen")," components containing the ",(0,o.kt)("inlineCode",{parentName:"p"},"HomeStack")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"SettingsStack")," component, it allows us to control the options for its parent navigator when its used as a screen component. In this case, the options on our stack components configure the label in the tab navigator that renders the stacks."),(0,o.kt)("h2",{id:"setting-parent-screen-options-based-on-child-navigators-state"},"Setting parent screen options based on child navigator's state"),(0,o.kt)("p",null,"Imagine the following configuration:"),(0,o.kt)("samp",{id:"parent-options-from-child-start"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const Tab = createBottomTabNavigator();\n\nfunction HomeTabs() {\n  return (\n    <Tab.Navigator>\n      <Tab.Screen name="Feed" component={FeedScreen} />\n      <Tab.Screen name="Profile" component={ProfileScreen} />\n      <Tab.Screen name="Account" component={AccountScreen} />\n    </Tab.Navigator>\n  );\n}\n\nconst Stack = createStackNavigator();\n\nexport default function App() {\n  return (\n    <NavigationContainer>\n      <Stack.Navigator>\n        <Stack.Screen name="Home" component={HomeTabs} />\n        <Stack.Screen name="Settings" component={SettingsScreen} />\n      </Stack.Navigator>\n    </NavigationContainer>\n  );\n}\n')),(0,o.kt)("p",null,"If we were to set the ",(0,o.kt)("inlineCode",{parentName:"p"},"headerTitle")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"options")," for the ",(0,o.kt)("inlineCode",{parentName:"p"},"FeedScreen"),", this would not work. This is because ",(0,o.kt)("inlineCode",{parentName:"p"},"App")," stack will only look at its immediate children for configuration: ",(0,o.kt)("inlineCode",{parentName:"p"},"HomeTabs")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"SettingsScreen"),"."),(0,o.kt)("p",null,"But we can determine the ",(0,o.kt)("inlineCode",{parentName:"p"},"headerTitle")," option based on the ",(0,o.kt)("a",{parentName:"p",href:"/docs/5.x/navigation-state"},"navigation state")," of our tab navigator using the ",(0,o.kt)("inlineCode",{parentName:"p"},"getFocusedRouteNameFromRoute")," helper. Let's create a function to get the title first:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { getFocusedRouteNameFromRoute } from '@react-navigation/native';\n\nfunction getHeaderTitle(route) {\n  // If the focused route is not found, we need to assume it's the initial screen\n  // This can happen during if there hasn't been any navigation inside the screen\n  // In our case, it's \"Feed\" as that's the first screen inside the navigator\n  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';\n\n  switch (routeName) {\n    case 'Feed':\n      return 'News feed';\n    case 'Profile':\n      return 'My profile';\n    case 'Account':\n      return 'My account';\n  }\n}\n")),(0,o.kt)("p",null,"Then we can use this function in 2 ways:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Using ",(0,o.kt)("inlineCode",{parentName:"p"},"options")," prop on ",(0,o.kt)("inlineCode",{parentName:"p"},"Screen")," (recommended):"),(0,o.kt)("samp",{id:"parent-options-from-child-opt1"}),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-js"},'<Stack.Screen\n  name="Home"\n  component={HomeTabs}\n  options={({ route }) => ({\n    headerTitle: getHeaderTitle(route),\n  })}\n/>\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Using ",(0,o.kt)("inlineCode",{parentName:"p"},"navigation.setOptions"),":"),(0,o.kt)("samp",{id:"parent-options-from-child-opt2"}),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-js"},'function HomeTabs({ navigation, route }) {\n  React.useLayoutEffect(() => {\n    navigation.setOptions({ headerTitle: getHeaderTitle(route) });\n  }, [navigation, route]);\n\n  return (\n    <Tab.Navigator>\n      <Tab.Screen name="Feed" component={FeedScreen} />\n      <Tab.Screen name="Profile" component={ProfileScreen} />\n      <Tab.Screen name="Account" component={AccountScreen} />\n    </Tab.Navigator>\n  );\n}\n')))),(0,o.kt)("p",null,"So what's happening here? With the ",(0,o.kt)("inlineCode",{parentName:"p"},"getFocusedRouteNameFromRoute")," helper, we can get the currently active route name from this child navigator (in this case it's the tab navigator since that's what we're rendering) and setting an appropriate title for the header."),(0,o.kt)("p",null,"This approach can be used anytime you want to set options for a parent navigator based on a child navigator's state. Common use cases are:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Show tab title in stack header: a stack contains a tab navigator and you want to set the title on the stack header (above example)"),(0,o.kt)("li",{parentName:"ol"},"Show screens without tab bar: a tab navigator contains a stack and you want to hide the tab bar on specific screens (not recommended, see ",(0,o.kt)("a",{parentName:"li",href:"/docs/5.x/hiding-tabbar-in-screens"},"Hiding tab bar in specific screens")," instead)"),(0,o.kt)("li",{parentName:"ol"},"Lock drawer on certain screens: a drawer has a stack inside of it and you want to lock the drawer on certain screens")),(0,o.kt)("p",null,"In many cases, similar behavior can be achieved by reorganizing our navigators. We usually recommend this option if it fits your use case."),(0,o.kt)("p",null,"For example, for the above use case, instead of adding a tab navigator inside a stack navigator, we can add a stack navigator inside each of the tabs."),(0,o.kt)("samp",{id:"reorganized-navigators"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const FeedStack = createStackNavigator();\n\nfunction FeedStackScreen() {\n  return (\n    <FeedStack.Navigator>\n      <FeedStack.Screen name="Feed" component={FeedScreen} />\n      {/* other screens */}\n    </FeedStack.Navigator>\n  );\n}\n\nconst ProfileStack = createStackNavigator();\n\nfunction ProfileStackScreen() {\n  return (\n    <ProfileStack.Navigator>\n      <ProfileStack.Screen name="Profile" component={ProfileScreen} />\n      {/* other screens */}\n    </ProfileStack.Navigator>\n  );\n}\n\nconst Tab = createBottomTabNavigator();\n\nfunction HomeTabs() {\n  return (\n    <Tab.Navigator>\n      <Tab.Screen name="Feed" component={FeedStackScreen} />\n      <Tab.Screen name="Profile" component={ProfileStackScreen} />\n    </Tab.Navigator>\n  );\n}\n\nconst RootStack = createStackNavigator();\n\nexport default function App() {\n  return (\n    <NavigationContainer>\n      <RootStack.Navigator>\n        <RootStack.Screen name="Home" component={HomeTabs} />\n        <RootStack.Screen name="Settings" component={SettingsScreen} />\n      </RootStack.Navigator>\n    </NavigationContainer>\n  );\n}\n')),(0,o.kt)("p",null,"Additionally, this lets you push new screens to the feed and profile stacks without hiding the tab bar by adding more routes to those stacks."),(0,o.kt)("p",null,"If you want to push screens on top of the tab bar (i.e. that don't show the tab bar), then you can add them to the ",(0,o.kt)("inlineCode",{parentName:"p"},"App")," stack instead of adding them into the screens inside the tab navigator."))}f.isMDXComponent=!0}}]);