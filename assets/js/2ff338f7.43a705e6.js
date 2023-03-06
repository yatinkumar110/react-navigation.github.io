"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[66034],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return f}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),l=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=l(e.components);return a.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(t),m=r,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return t?a.createElement(f,o(o({ref:n},u),{},{components:t})):a.createElement(f,o({ref:n},u))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c[p]="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=t[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},85162:function(e,n,t){t.d(n,{Z:function(){return o}});var a=t(67294),r=t(86010),i={tabItem:"tabItem_Ymn6"};function o(e){var n=e.children,t=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,o),hidden:t},n)}},74866:function(e,n,t){t.d(n,{Z:function(){return y}});var a=t(83117),r=t(67294),i=t(86010),o=t(12466),c=t(16550),s=t(91980),l=t(67392),u=t(50012);function p(e){return function(e){return r.Children.map(e,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}function d(e){var n=e.values,t=e.children;return(0,r.useMemo)((function(){var e=null!=n?n:p(t);return function(e){var n=(0,l.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function m(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function f(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId,i=(0,c.k6)(),o=function(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,r.useCallback)((function(e){if(o){var n=new URLSearchParams(i.location.search);n.set(o,e),i.replace(Object.assign({},i.location,{search:n.toString()}))}}),[o,i])]}function g(e){var n,t,a,i,o=e.defaultValue,c=e.queryString,s=void 0!==c&&c,l=e.groupId,p=d(e),g=(0,r.useState)((function(){return function(e){var n,t=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var r=null!=(n=a.find((function(e){return e.default})))?n:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:o,tabValues:p})})),h=g[0],k=g[1],v=f({queryString:s,groupId:l}),N=v[0],b=v[1],y=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:l}.groupId),t=(0,u.Nk)(n),a=t[0],i=t[1],[a,(0,r.useCallback)((function(e){n&&i.set(e)}),[n,i])]),C=y[0],S=y[1],w=function(){var e=null!=N?N:C;return m({value:e,tabValues:p})?e:null}();return(0,r.useLayoutEffect)((function(){w&&k(w)}),[w]),{selectedValue:h,selectValue:(0,r.useCallback)((function(e){if(!m({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);k(e),b(e),S(e)}),[b,S,p]),tabValues:p}}var h=t(72389),k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){var n=e.className,t=e.block,c=e.selectedValue,s=e.selectValue,l=e.tabValues,u=[],p=(0,o.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var n=e.currentTarget,t=u.indexOf(n),a=l[t].value;a!==c&&(p(n),s(a))},m=function(e){var n,t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var a,r=u.indexOf(e.currentTarget)+1;t=null!=(a=u[r])?a:u[0];break;case"ArrowLeft":var i,o=u.indexOf(e.currentTarget)-1;t=null!=(i=u[o])?i:u[u.length-1]}null==(n=t)||n.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},n)},l.map((function(e){var n=e.value,t=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:c===n?0:-1,"aria-selected":c===n,key:n,ref:function(e){return u.push(e)},onKeyDown:m,onClick:d},o,{className:(0,i.Z)("tabs__item",k.tabItem,null==o?void 0:o.className,{"tabs__item--active":c===n})}),null!=t?t:n)})))}function N(e){var n=e.lazy,t=e.children,a=e.selectedValue;if(t=Array.isArray(t)?t:[t],n){var i=t.find((function(e){return e.props.value===a}));return i?(0,r.cloneElement)(i,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},t.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})})))}function b(e){var n=g(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",k.tabList)},r.createElement(v,(0,a.Z)({},e,n)),r.createElement(N,(0,a.Z)({},e,n)))}function y(e){var n=(0,h.Z)();return r.createElement(b,(0,a.Z)({key:String(n)},e))}},97520:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var a=t(83117),r=t(80102),i=(t(67294),t(3905)),o=(t(74866),t(85162),["components"]),c={id:"static-api-reference",title:"Static API Reference",sidebar_label:"API Reference"},s=void 0,l={unversionedId:"static-api-reference",id:"version-7.x/static-api-reference",title:"Static API Reference",description:"The bulk of the static configuration is done using the createXNavigator functions, e.g. createNativeStackNavigator, createBottomTabNavigator, createDrawerNavigator etc. We'll refer to these functions as createXNavigator in the rest of this guide.",source:"@site/versioned_docs/version-7.x/static-api-reference.md",sourceDirName:".",slug:"/static-api-reference",permalink:"/docs/7.x/static-api-reference",draft:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-7.x/static-api-reference.md",tags:[],version:"7.x",frontMatter:{id:"static-api-reference",title:"Static API Reference",sidebar_label:"API Reference"},sidebar:"version-7.x/docs",previous:{title:"Getting started",permalink:"/docs/7.x/static-configuration"},next:{title:"Configuring TypeScript",permalink:"/docs/7.x/static-typescript"}},u={},p=[{value:"<code>createXNavigator</code>",id:"createxnavigator",level:2},{value:"<code>screens</code>",id:"screens",level:3},{value:"<code>groups</code>",id:"groups",level:3},{value:"Screen configuration",id:"screen-configuration",level:3},{value:"<code>screen</code>",id:"screen",level:4},{value:"<code>linking</code>",id:"linking",level:4},{value:"<code>if</code>",id:"if",level:4},{value:"<code>options</code>",id:"options",level:4},{value:"<code>initialParams</code>",id:"initialparams",level:4},{value:"<code>getId</code>",id:"getid",level:4},{value:"<code>listeners</code>",id:"listeners",level:4},{value:"<code>createStaticNavigation</code>",id:"createstaticnavigation",level:2},{value:"<code>createComponentForStaticNavigation</code>",id:"createcomponentforstaticnavigation",level:2},{value:"<code>createPathConfigForStaticNavigation</code>",id:"createpathconfigforstaticnavigation",level:2}],d={toc:p},m="wrapper";function f(e){var n=e.components,t=(0,r.Z)(e,o);return(0,i.kt)(m,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The bulk of the static configuration is done using the ",(0,i.kt)("inlineCode",{parentName:"p"},"createXNavigator")," functions, e.g. ",(0,i.kt)("a",{parentName:"p",href:"/docs/7.x/native-stack-navigator"},(0,i.kt)("inlineCode",{parentName:"a"},"createNativeStackNavigator")),", ",(0,i.kt)("a",{parentName:"p",href:"/docs/7.x/bottom-tab-navigator"},(0,i.kt)("inlineCode",{parentName:"a"},"createBottomTabNavigator")),", ",(0,i.kt)("a",{parentName:"p",href:"/docs/7.x/drawer-navigator"},(0,i.kt)("inlineCode",{parentName:"a"},"createDrawerNavigator"))," etc. We'll refer to these functions as ",(0,i.kt)("inlineCode",{parentName:"p"},"createXNavigator")," in the rest of this guide."),(0,i.kt)("h2",{id:"createxnavigator"},(0,i.kt)("inlineCode",{parentName:"h2"},"createXNavigator")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"createXNavigator")," functions take one argument, which is an object with the following properties:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Same props as the navigator component, e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"id"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"initialRouteName"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"screenOptions")," etc. See the docs for each navigator for more details on the props they accept."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"screens")," - an object containing configuration for each screen in the navigator."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"groups")," - an optional object containing groups of screens (equivalent to ",(0,i.kt)("a",{parentName:"li",href:"/docs/7.x/group"},(0,i.kt)("inlineCode",{parentName:"a"},"Group"))," in the dynamic API).")),(0,i.kt)("p",null,"For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const RootStack = createNativeStackNavigator({\n  initialRouteName: 'Home',\n  screenOptions: {\n    headerTintColor: 'white',\n    headerStyle: {\n      backgroundColor: 'tomato',\n    },\n  },\n  screens: {\n    Home: HomeScreen,\n    Profile: ProfileScreen,\n  },\n});\n")),(0,i.kt)("h3",{id:"screens"},(0,i.kt)("inlineCode",{parentName:"h3"},"screens")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"screens")," object can contain key value pairs where the key is the name of the screen and the value can be several things:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"A component to render:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const RootStack = createNativeStackNavigator({\n  screens: {\n    Home: HomeScreen,\n  },\n});\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"A navigator configured using ",(0,i.kt)("inlineCode",{parentName:"p"},"createXNavigator")," for nested navigators:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const HomeTabs = createBottomTabNavigator({\n  screens: {\n    Groups: GroupsScreen,\n    Chats: ChatsScreen,\n  },\n});\n\nconst RootStack = createNativeStackNavigator({\n  screens: {\n    Home: HomeTabs,\n  },\n});\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"An object containing configuration for the screen. This configuration contains the various properties:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const RootStack = createNativeStackNavigator({\n  screens: {\n    Home: {\n      screen: HomeScreen,\n      linking: {\n        path: 'home',\n      },\n    },\n  },\n});\n")),(0,i.kt)("p",{parentName:"li"},"See ",(0,i.kt)("a",{parentName:"p",href:"#screen-configuration"},"Screen configuration")," for more details."))),(0,i.kt)("h3",{id:"groups"},(0,i.kt)("inlineCode",{parentName:"h3"},"groups")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"groups")," object can contain key value pairs where the key is the name of the group and the value is the group configuration. The group configuration can contain the following properties:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"if")," - this can be used to conditionally render the group and works the same as the ",(0,i.kt)("a",{parentName:"li",href:"#if"},(0,i.kt)("inlineCode",{parentName:"a"},"if")," property in the screen configuration"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"screenOptions")," - default options for all screens under this group."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"screens")," - an object containing configuration for each screen in the group. The configuration is the same as the ",(0,i.kt)("a",{parentName:"li",href:"#screens"},(0,i.kt)("inlineCode",{parentName:"a"},"screens")," object in the navigator configuration"),".")),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const RootStack = createNativeStackNavigator({\n  screens: {\n    Home: HomeScreen,\n    Profile: ProfileScreen,\n  },\n  groups: {\n    Guest: {\n      if: useIsGuest,\n      screenOptions: {\n        headerShown: false,\n      },\n      screens: {\n        // ...\n      }\n    },\n    User: {\n      if: useIsUser,\n      screens: {\n        // ...\n      }\n    }\n  },\n});\n")),(0,i.kt)("p",null,"The keys of the ",(0,i.kt)("inlineCode",{parentName:"p"},"groups")," object (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"Guest"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"User"),") are used as the ",(0,i.kt)("a",{parentName:"p",href:"/docs/7.x/group#navigationkey"},(0,i.kt)("inlineCode",{parentName:"a"},"navigationKey"))," for the group - this means if a screen is defined in 2 groups and the groups use the ",(0,i.kt)("a",{parentName:"p",href:"#if"},(0,i.kt)("inlineCode",{parentName:"a"},"if"))," property, the screen will remount if the condition changes resulting in one group being removed and other group being used. You can use any string as the key."),(0,i.kt)("h3",{id:"screen-configuration"},"Screen configuration"),(0,i.kt)("p",null,"The configuration object for a screen can contain the following properties:"),(0,i.kt)("h4",{id:"screen"},(0,i.kt)("inlineCode",{parentName:"h4"},"screen")),(0,i.kt)("p",null,"The React component or navigator to render for the screen:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const RootStack = createNativeStackNavigator({\n  screens: {\n    Home: {\n      screen: HomeScreen,\n    },\n  },\n});\n")),(0,i.kt)("p",null,"The screen components defined with the static configuration receive the ",(0,i.kt)("a",{parentName:"p",href:"/docs/7.x/route-prop"},(0,i.kt)("inlineCode",{parentName:"a"},"route"))," prop. Unlike the dynamic API, the ",(0,i.kt)("inlineCode",{parentName:"p"},"navigation")," object must be accessed via the ",(0,i.kt)("a",{parentName:"p",href:"/docs/7.x/use-navigation"},(0,i.kt)("inlineCode",{parentName:"a"},"useNavigation"))," hook."),(0,i.kt)("h4",{id:"linking"},(0,i.kt)("inlineCode",{parentName:"h4"},"linking")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/7.x/configuring-links"},"Linking configuration")," for the screen. It can be either a string for a path or an object with the linking configuration:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const RootStack = createNativeStackNavigator({\n  screens: {\n    Profile: {\n      screen: ProfileScreen,\n      linking: {\n        path: 'u/:userId',\n        parse: {\n          userId: (id) => id.replace(/^@/, ''),\n        },\n        stringify: {\n          userId: (id) => `@${id}`,\n        },\n      },\n    },\n    Chat: {\n      screen: ChatScreen,\n      linking: 'chat/:chatId',\n    },\n  },\n});\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"linking")," object supports the same configuration options described in ",(0,i.kt)("a",{parentName:"p",href:"/docs/7.x/configuring-links"},"Configuring links")," such as ",(0,i.kt)("inlineCode",{parentName:"p"},"parse"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"stringify")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"exact"),"."),(0,i.kt)("p",null,"To make deep links work on native apps, you also need to ",(0,i.kt)("a",{parentName:"p",href:"/docs/7.x/deep-linking"},"configure your app")," and pass ",(0,i.kt)("inlineCode",{parentName:"p"},"prefixes")," to the navigation component returned by ",(0,i.kt)("a",{parentName:"p",href:"/docs/7.x/static-api-reference#createstaticnavigation"},(0,i.kt)("inlineCode",{parentName:"a"},"createStaticNavigation")),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const Navigation = createStaticNavigation(RootStack);\n\nconst linking = {\n  prefixes: ['https://example.com', 'example://'],\n};\n\nfunction App() {\n  return <Navigation linking={linking} />;\n}\n")),(0,i.kt)("h4",{id:"if"},(0,i.kt)("inlineCode",{parentName:"h4"},"if")),(0,i.kt)("p",null,"Callback to determine whether the screen should be rendered or not. It doesn't receive any arguments. This can be useful for conditional rendering of screens, e.g. - if you want to render a different screen for logged in users."),(0,i.kt)("p",null,"You can use a custom hook to use custom logic to determine the return value:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const useIsLoggedIn = () => {\n  const { isLoggedIn } = React.useContext(AuthContext);\n\n  return isLoggedIn;\n};\n\nconst RootStack = createNativeStackNavigator({\n  screens: {\n    Home: {\n      screen: HomeScreen,\n      if: useIsLoggedIn,\n    },\n  },\n});\n")),(0,i.kt)("p",null,"The above example will only render the ",(0,i.kt)("inlineCode",{parentName:"p"},"HomeScreen")," if the user is logged in."),(0,i.kt)("p",null,"For more details, see ",(0,i.kt)("a",{parentName:"p",href:"/docs/7.x/static-authentication"},"Authentication flow with static API"),"."),(0,i.kt)("h4",{id:"options"},(0,i.kt)("inlineCode",{parentName:"h4"},"options")),(0,i.kt)("p",null,"Options to configure how the screen gets presented in the navigator. It accepts either an object or a function returning an object:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const RootStack = createNativeStackNavigator({\n  screens: {\n    Home: {\n      screen: HomeScreen,\n      options: {\n        title: 'Awesome app',\n      },\n    },\n  },\n});\n")),(0,i.kt)("p",null,"When you pass a function, it'll receive the ",(0,i.kt)("a",{parentName:"p",href:"/docs/7.x/route-prop"},(0,i.kt)("inlineCode",{parentName:"a"},"route"))," and ",(0,i.kt)("a",{parentName:"p",href:"/docs/7.x/navigation-prop"},(0,i.kt)("inlineCode",{parentName:"a"},"navigation")),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const RootStack = createNativeStackNavigator({\n  screens: {\n    Profile: {\n      screen: ProfileScreen,\n      options: ({ route, navigation }) => ({\n        title: route.params.userId,\n      }),\n    },\n  },\n});\n")),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/docs/7.x/screen-options"},"Options for screens")," for more details and examples."),(0,i.kt)("h4",{id:"initialparams"},(0,i.kt)("inlineCode",{parentName:"h4"},"initialParams")),(0,i.kt)("p",null,"Initial params to use for the screen. If a screen is used as ",(0,i.kt)("inlineCode",{parentName:"p"},"initialRouteName"),", it'll contain the params from ",(0,i.kt)("inlineCode",{parentName:"p"},"initialParams"),". If you navigate to a new screen, the params passed are shallow merged with the initial params."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const RootStack = createNativeStackNavigator({\n  screens: {\n    Details: {\n      screen: DetailsScreen,\n      initialParams: { itemId: 5 },\n    },\n  },\n});\n")),(0,i.kt)("h4",{id:"getid"},(0,i.kt)("inlineCode",{parentName:"h4"},"getId")),(0,i.kt)("p",null,"Callback to return an unique ID to use for the screen. It receives an object with the route params:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const RootStack = createNativeStackNavigator({\n  screens: {\n    Profile: {\n      screen: ProfileScreen,\n      getId: ({ params }) => params.userId,\n    },\n  },\n});\n")),(0,i.kt)("p",null,"By default, calling ",(0,i.kt)("inlineCode",{parentName:"p"},"navigate('ScreenName', params)")," identifies the screen by its name, and navigates to the existing screen instead of adding a new one. If you specify ",(0,i.kt)("inlineCode",{parentName:"p"},"getId")," and it doesn't return ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined"),", the screen is identified by both the screen name and the returned ID."),(0,i.kt)("p",null,"This is useful for preventing multiple instances of the same screen in the navigator, e.g. - when ",(0,i.kt)("inlineCode",{parentName:"p"},"params.userId")," is used as an ID, subsequent navigation to the screen with the same ",(0,i.kt)("inlineCode",{parentName:"p"},"userId")," will navigate to the existing screen instead of adding a new one to the stack. If the navigation was with a different ",(0,i.kt)("inlineCode",{parentName:"p"},"userId"),", then it'll add a new screen."),(0,i.kt)("h4",{id:"listeners"},(0,i.kt)("inlineCode",{parentName:"h4"},"listeners")),(0,i.kt)("p",null,"Event listeners to subscribe to. It takes an object with the event names as keys and the listener callbacks as values:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const BottomTab = createBottomTabNavigator({\n  screens: {\n    Chat: {\n      screen: ChatScreen,\n      listeners: {\n        tabPress: (e) => {\n          // Prevent default action\n          e.preventDefault();\n        },\n      },\n    },\n  },\n});\n")),(0,i.kt)("h2",{id:"createstaticnavigation"},(0,i.kt)("inlineCode",{parentName:"h2"},"createStaticNavigation")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"createStaticNavigation")," function takes the static config returned by ",(0,i.kt)("inlineCode",{parentName:"p"},"createXNavigator")," functions and returns a React component to render:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const Navigation = createStaticNavigation(RootStack);\n\nfunction App() {\n  return <Navigation />;\n}\n")),(0,i.kt)("p",null,"This component is a wrapper around the ",(0,i.kt)("inlineCode",{parentName:"p"},"NavigationContainer")," component and accepts the ",(0,i.kt)("a",{parentName:"p",href:"/docs/7.x/navigation-container"},"same props and ref as the ",(0,i.kt)("inlineCode",{parentName:"a"},"NavigationContainer"))," component. There's however one difference - the ",(0,i.kt)("inlineCode",{parentName:"p"},"linking")," prop accepted by this component doesn't take a ",(0,i.kt)("inlineCode",{parentName:"p"},"config")," property. Instead, the linking config is automatically inferred from the static config."),(0,i.kt)("p",null,"This is intended to be rendered once at the root of your app similar to how you'd use ",(0,i.kt)("inlineCode",{parentName:"p"},"NavigationContainer")," component."),(0,i.kt)("h2",{id:"createcomponentforstaticnavigation"},(0,i.kt)("inlineCode",{parentName:"h2"},"createComponentForStaticNavigation")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"createComponentForStaticNavigation")," function takes the static config returned by ",(0,i.kt)("inlineCode",{parentName:"p"},"createXNavigator")," functions and returns a React component to render. The second argument is a name for the component that'd be used in React DevTools:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const RootStackNavigator = createComponentForStaticNavigation(RootStack, 'RootNavigator');\n")),(0,i.kt)("p",null,"The returned component doesn't take any props. All of the configuration is inferred from the static config. It's essentially the same as defining a component using the dynamic API."),(0,i.kt)("p",null,"This looks similar to ",(0,i.kt)("inlineCode",{parentName:"p"},"createStaticNavigation")," however they are very different. When using static configuration, you'd never use this function directly. The only time you'd use this is if you're migrating away from static configuration and want to reuse existing code you wrote instead of rewriting it to the dynamic API. See ",(0,i.kt)("a",{parentName:"p",href:"/docs/7.x/static-combine-with-dynamic"},"Combining static and dynamic APIs")," for more details."),(0,i.kt)("h2",{id:"createpathconfigforstaticnavigation"},(0,i.kt)("inlineCode",{parentName:"h2"},"createPathConfigForStaticNavigation")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"createPathConfigForStaticNavigation")," function takes the static config returned by ",(0,i.kt)("inlineCode",{parentName:"p"},"createXNavigator")," functions and returns a path config object that can be used within the linking config."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const config = {\n  screens: {\n    Home: {\n      screens: createPathConfigForStaticNavigation(HomeTabs),\n    },\n  },\n};\n")),(0,i.kt)("p",null,"Similar to ",(0,i.kt)("inlineCode",{parentName:"p"},"createComponentForStaticNavigation"),", this is intended to be used when migrating away from static configuration. See ",(0,i.kt)("a",{parentName:"p",href:"/docs/7.x/static-combine-with-dynamic"},"Combining static and dynamic APIs")," for more details."))}f.isMDXComponent=!0}}]);