"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[82806],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),s=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(a),b=r,m=p["".concat(u,".").concat(b)]||p[b]||d[b]||i;return a?n.createElement(m,o(o({ref:t},c),{},{components:a})):n.createElement(m,o({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=b;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}b.displayName="MDXCreateElement"},85162:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(67294),r=a(86010),i={tabItem:"tabItem_Ymn6"};function o(e){var t=e.children,a=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,o),hidden:a},t)}},74866:function(e,t,a){a.d(t,{Z:function(){return N}});var n=a(83117),r=a(67294),i=a(86010),o=a(12466),l=a(16550),u=a(91980),s=a(67392),c=a(50012);function p(e){return function(e){return r.Children.map(e,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function d(e){var t=e.values,a=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:p(a);return function(e){var t=(0,s.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,a])}function b(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function m(e){var t=e.queryString,a=void 0!==t&&t,n=e.groupId,i=(0,l.k6)(),o=function(e){var t=e.queryString,a=void 0!==t&&t,n=e.groupId;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:a,groupId:n});return[(0,u._X)(o),(0,r.useCallback)((function(e){if(o){var t=new URLSearchParams(i.location.search);t.set(o,e),i.replace(Object.assign({},i.location,{search:t.toString()}))}}),[o,i])]}function h(e){var t,a,n,i,o=e.defaultValue,l=e.queryString,u=void 0!==l&&l,s=e.groupId,p=d(e),h=(0,r.useState)((function(){return function(e){var t,a=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!b({value:a,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+a+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return a}var r=null!=(t=n.find((function(e){return e.default})))?t:n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:o,tabValues:p})})),f=h[0],v=h[1],g=m({queryString:u,groupId:s}),k=g[0],y=g[1],N=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:s}.groupId),a=(0,c.Nk)(t),n=a[0],i=a[1],[n,(0,r.useCallback)((function(e){t&&i.set(e)}),[t,i])]),C=N[0],w=N[1],T=function(){var e=null!=k?k:C;return b({value:e,tabValues:p})?e:null}();return(0,r.useLayoutEffect)((function(){T&&v(T)}),[T]),{selectedValue:f,selectValue:(0,r.useCallback)((function(e){if(!b({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);v(e),y(e),w(e)}),[y,w,p]),tabValues:p}}var f=a(72389),v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){var t=e.className,a=e.block,l=e.selectedValue,u=e.selectValue,s=e.tabValues,c=[],p=(0,o.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,a=c.indexOf(t),n=s[a].value;n!==l&&(p(t),u(n))},b=function(e){var t,a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var n,r=c.indexOf(e.currentTarget)+1;a=null!=(n=c[r])?n:c[0];break;case"ArrowLeft":var i,o=c.indexOf(e.currentTarget)-1;a=null!=(i=c[o])?i:c[c.length-1]}null==(t=a)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},t)},s.map((function(e){var t=e.value,a=e.label,o=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:function(e){return c.push(e)},onKeyDown:b,onClick:d},o,{className:(0,i.Z)("tabs__item",v.tabItem,null==o?void 0:o.className,{"tabs__item--active":l===t})}),null!=a?a:t)})))}function k(e){var t=e.lazy,a=e.children,n=e.selectedValue;if(a=Array.isArray(a)?a:[a],t){var i=a.find((function(e){return e.props.value===n}));return i?(0,r.cloneElement)(i,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n})})))}function y(e){var t=h(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",v.tabList)},r.createElement(g,(0,n.Z)({},e,t)),r.createElement(k,(0,n.Z)({},e,t)))}function N(e){var t=(0,f.Z)();return r.createElement(y,(0,n.Z)({key:String(t)},e))}},48390:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return b}});var n=a(83117),r=a(80102),i=(a(67294),a(3905)),o=a(74866),l=a(85162),u=["components"],s={id:"material-bottom-tab-navigator",title:"createMaterialBottomTabNavigator",sidebar_label:"createMaterialBottomTabNavigator"},c=void 0,p={unversionedId:"material-bottom-tab-navigator",id:"version-3.x/material-bottom-tab-navigator",title:"createMaterialBottomTabNavigator",description:"A material-design themed tab bar on the bottom of the screen that lets you switch between different routes. Routes are lazily initialized -- their screen components are not mounted until they are first focused.",source:"@site/versioned_docs/version-3.x/material-bottom-tab-navigator.md",sourceDirName:".",slug:"/material-bottom-tab-navigator",permalink:"/docs/3.x/material-bottom-tab-navigator",draft:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-3.x/material-bottom-tab-navigator.md",tags:[],version:"3.x",frontMatter:{id:"material-bottom-tab-navigator",title:"createMaterialBottomTabNavigator",sidebar_label:"createMaterialBottomTabNavigator"},sidebar:"version-3.x-docs",previous:{title:"createBottomTabNavigator",permalink:"/docs/3.x/bottom-tab-navigator"},next:{title:"createMaterialTopTabNavigator",permalink:"/docs/3.x/material-top-tab-navigator"}},d={},b=[{value:"RouteConfigs",id:"routeconfigs",level:2},{value:"MaterialBottomTabNavigatorConfig",id:"materialbottomtabnavigatorconfig",level:2},{value:"<code>navigationOptions</code> for screens inside of the navigator",id:"navigationoptions-for-screens-inside-of-the-navigator",level:2},{value:"<code>title</code>",id:"title",level:4},{value:"<code>tabBarIcon</code>",id:"tabbaricon",level:4},{value:"<code>tabBarColor</code>",id:"tabbarcolor",level:4},{value:"<code>tabBarLabel</code>",id:"tabbarlabel",level:4},{value:"<code>tabBarAccessibilityLabel</code>",id:"tabbaraccessibilitylabel",level:4},{value:"<code>tabBarTestID</code>",id:"tabbartestid",level:4},{value:"<code>tabBarOnPress</code>",id:"tabbaronpress",level:4},{value:"Using with <code>react-native-paper</code> (optional)",id:"using-with-react-native-paper-optional",level:2}],m={toc:b},h="wrapper";function f(e){var t=e.components,a=(0,r.Z)(e,u);return(0,i.kt)(h,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A material-design themed tab bar on the bottom of the screen that lets you switch between different routes. Routes are lazily initialized -- their screen components are not mounted until they are first focused."),(0,i.kt)("img",{src:"/assets/navigators/bottom-navigation.gif",style:{width:"420px",maxWidth:"100%"}}),(0,i.kt)("p",null,"To use this navigator, you need to install ",(0,i.kt)("inlineCode",{parentName:"p"},"react-navigation-material-bottom-tabs")),(0,i.kt)(o.Z,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install react-navigation-material-bottom-tabs react-native-paper\n"))),(0,i.kt)(l.Z,{value:"yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add react-navigation-material-bottom-tabs react-native-paper\n")))),(0,i.kt)("p",null,"This API also requires that you install ",(0,i.kt)("inlineCode",{parentName:"p"},"react-native-vector-icons"),"! If you are using Expo, it will just work out of the box. Otherwise, ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/oblador/react-native-vector-icons#installation"},"follow these installation instructions"),"."),(0,i.kt)("p",null,"To use this tab navigator, import it from ",(0,i.kt)("inlineCode",{parentName:"p"},"react-navigation-material-bottom-tabs")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";\n\ncreateMaterialBottomTabNavigator(\n  RouteConfigs,\n  MaterialBottomTabNavigatorConfig\n);\n')),(0,i.kt)("p",null,"This library uses the ",(0,i.kt)("a",{parentName:"p",href:"https://callstack.github.io/react-native-paper/bottom-navigation.html"},(0,i.kt)("inlineCode",{parentName:"a"},"BottomNavigation")," component from ",(0,i.kt)("inlineCode",{parentName:"a"},"react-native-paper")),". It doesn't include the whole ",(0,i.kt)("inlineCode",{parentName:"p"},"react-native-paper")," library in your bundle, so you don't need to worry about it."),(0,i.kt)("h2",{id:"routeconfigs"},"RouteConfigs"),(0,i.kt)("p",null,"The route configs object is a mapping from route name to a route config."),(0,i.kt)("h2",{id:"materialbottomtabnavigatorconfig"},"MaterialBottomTabNavigatorConfig"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"shifting")," - Whether the shifting style is used, the active tab appears wider and the inactive tabs won't have a label. By default, this is ",(0,i.kt)("inlineCode",{parentName:"li"},"true")," when you have more than 3 tabs."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"labeled")," - Whether to show labels in tabs. When ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),", only icons will be displayed."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"activeColor")," - Custom color for icon and label in the active tab."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"inactiveColor")," - Custom color for icon and label in the inactive tab."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"barStyle")," - Style for the bottom navigation bar. You can set a bottom padding here if you have a translucent navigation bar on Android: ",(0,i.kt)("inlineCode",{parentName:"li"},"barStyle={{ paddingBottom: 48 }}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"initialRouteName")," - The routeName for the initial tab route when first loading."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"order")," - Array of routeNames which defines the order of the tabs."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"paths")," - Provide a mapping of routeName to path config, which overrides the paths set in the routeConfigs."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"backBehavior")," - ",(0,i.kt)("inlineCode",{parentName:"li"},"initialRoute")," to return to initial tab, ",(0,i.kt)("inlineCode",{parentName:"li"},"order")," to return to previous tab, ",(0,i.kt)("inlineCode",{parentName:"li"},"history")," to return to last visited tab, or ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),".")),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"export default createMaterialBottomTabNavigator({\n  Album: { screen: Album },\n  Library: { screen: Library },\n  History: { screen: History },\n  Cart: { screen: Cart },\n}, {\n  initialRouteName: 'Album',\n  activeColor: '#f0edf6',\n  inactiveColor: '#3e2465',\n  barStyle: { backgroundColor: '#694fad' },\n});\n")),(0,i.kt)("h2",{id:"navigationoptions-for-screens-inside-of-the-navigator"},(0,i.kt)("inlineCode",{parentName:"h2"},"navigationOptions")," for screens inside of the navigator"),(0,i.kt)("h4",{id:"title"},(0,i.kt)("inlineCode",{parentName:"h4"},"title")),(0,i.kt)("p",null,"Generic title that can be used as a fallback for ",(0,i.kt)("inlineCode",{parentName:"p"},"headerTitle")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"tabBarLabel"),"."),(0,i.kt)("h4",{id:"tabbaricon"},(0,i.kt)("inlineCode",{parentName:"h4"},"tabBarIcon")),(0,i.kt)("p",null,"React Element or a function that given ",(0,i.kt)("inlineCode",{parentName:"p"},"{ focused: boolean, horizontal: boolean, tintColor: string }")," returns a React.Node, to display in the tab bar. ",(0,i.kt)("inlineCode",{parentName:"p"},"horizontal")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," when the device is in landscape and ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," when portrait. The icon is re-rendered whenever the device orientation changes."),(0,i.kt)("h4",{id:"tabbarcolor"},(0,i.kt)("inlineCode",{parentName:"h4"},"tabBarColor")),(0,i.kt)("p",null,"Color for the tab bar when the tab corresponding to the screen is active. Used for the ripple effect. This is only supported when ",(0,i.kt)("inlineCode",{parentName:"p"},"shifting")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,i.kt)("h4",{id:"tabbarlabel"},(0,i.kt)("inlineCode",{parentName:"h4"},"tabBarLabel")),(0,i.kt)("p",null,"Title string of a tab displayed in the tab bar. When undefined, scene ",(0,i.kt)("inlineCode",{parentName:"p"},"title")," is used. To hide, see ",(0,i.kt)("inlineCode",{parentName:"p"},"labeled")," option in the previous section."),(0,i.kt)("h4",{id:"tabbaraccessibilitylabel"},(0,i.kt)("inlineCode",{parentName:"h4"},"tabBarAccessibilityLabel")),(0,i.kt)("p",null,"Accessibility label for the tab button. This is read by the screen reader when the user taps the tab. It's recommended to set this if you don't have a label for the tab."),(0,i.kt)("h4",{id:"tabbartestid"},(0,i.kt)("inlineCode",{parentName:"h4"},"tabBarTestID")),(0,i.kt)("p",null,"ID to locate this tab button in tests."),(0,i.kt)("h4",{id:"tabbaronpress"},(0,i.kt)("inlineCode",{parentName:"h4"},"tabBarOnPress")),(0,i.kt)("p",null,"Callback to handle press events; the argument is an object containing:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"navigation"),": navigation prop for the screen"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"defaultHandler"),": the default handler for tab press")),(0,i.kt)("p",null,"Useful for adding a custom logic before the transition to the next scene (the tapped one) starts."),(0,i.kt)("h2",{id:"using-with-react-native-paper-optional"},"Using with ",(0,i.kt)("inlineCode",{parentName:"h2"},"react-native-paper")," (optional)"),(0,i.kt)("p",null,"You can use the theming support in ",(0,i.kt)("inlineCode",{parentName:"p"},"react-native-paper")," to customize the material bottom navigation by wrapping your app in ",(0,i.kt)("a",{parentName:"p",href:"https://callstack.github.io/react-native-paper/getting-started.html"},(0,i.kt)("inlineCode",{parentName:"a"},"Provider")," from ",(0,i.kt)("inlineCode",{parentName:"a"},"react-native-paper")),". A common use case for this can be to customize the background color for the screens when your app has a dark theme. Follow the ",(0,i.kt)("a",{parentName:"p",href:"https://callstack.github.io/react-native-paper/theming.html"},"instructions on ",(0,i.kt)("inlineCode",{parentName:"a"},"react-native-paper"),"'s documentation")," to learn how to customize the theme."))}f.isMDXComponent=!0}}]);