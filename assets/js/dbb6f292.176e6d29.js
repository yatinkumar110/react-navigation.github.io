"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[22804],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return g}});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(t),h=i,g=p["".concat(s,".").concat(h)]||p[h]||d[h]||o;return t?a.createElement(g,r(r({ref:n},c),{},{components:t})):a.createElement(g,r({ref:n},c))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=h;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:i,r[1]=l;for(var u=2;u<o;u++)r[u]=t[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},85162:function(e,n,t){t.d(n,{Z:function(){return r}});var a=t(67294),i=t(86010),o={tabItem:"tabItem_Ymn6"};function r(e){var n=e.children,t=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(o.tabItem,r),hidden:t},n)}},74866:function(e,n,t){t.d(n,{Z:function(){return C}});var a=t(83117),i=t(67294),o=t(86010),r=t(12466),l=t(16550),s=t(91980),u=t(67392),c=t(50012);function p(e){return function(e){return i.Children.map(e,(function(e){if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}function d(e){var n=e.values,t=e.children;return(0,i.useMemo)((function(){var e=null!=n?n:p(t);return function(e){var n=(0,u.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function h(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function g(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId,o=(0,l.k6)(),r=function(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:t,groupId:a});return[(0,s._X)(r),(0,i.useCallback)((function(e){if(r){var n=new URLSearchParams(o.location.search);n.set(r,e),o.replace(Object.assign({},o.location,{search:n.toString()}))}}),[r,o])]}function m(e){var n,t,a,o,r=e.defaultValue,l=e.queryString,s=void 0!==l&&l,u=e.groupId,p=d(e),m=(0,i.useState)((function(){return function(e){var n,t=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var i=null!=(n=a.find((function(e){return e.default})))?n:a[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:r,tabValues:p})})),f=m[0],k=m[1],v=g({queryString:s,groupId:u}),b=v[0],N=v[1],C=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),t=(0,c.Nk)(n),a=t[0],o=t[1],[a,(0,i.useCallback)((function(e){n&&o.set(e)}),[n,o])]),y=C[0],w=C[1],x=function(){var e=null!=b?b:y;return h({value:e,tabValues:p})?e:null}();return(0,i.useLayoutEffect)((function(){x&&k(x)}),[x]),{selectedValue:f,selectValue:(0,i.useCallback)((function(e){if(!h({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);k(e),N(e),w(e)}),[N,w,p]),tabValues:p}}var f=t(72389),k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){var n=e.className,t=e.block,l=e.selectedValue,s=e.selectValue,u=e.tabValues,c=[],p=(0,r.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var n=e.currentTarget,t=c.indexOf(n),a=u[t].value;a!==l&&(p(n),s(a))},h=function(e){var n,t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var a,i=c.indexOf(e.currentTarget)+1;t=null!=(a=c[i])?a:c[0];break;case"ArrowLeft":var o,r=c.indexOf(e.currentTarget)-1;t=null!=(o=c[r])?o:c[c.length-1]}null==(n=t)||n.focus()};return i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},n)},u.map((function(e){var n=e.value,t=e.label,r=e.attributes;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===n?0:-1,"aria-selected":l===n,key:n,ref:function(e){return c.push(e)},onKeyDown:h,onClick:d},r,{className:(0,o.Z)("tabs__item",k.tabItem,null==r?void 0:r.className,{"tabs__item--active":l===n})}),null!=t?t:n)})))}function b(e){var n=e.lazy,t=e.children,a=e.selectedValue;if(t=Array.isArray(t)?t:[t],n){var o=t.find((function(e){return e.props.value===a}));return o?(0,i.cloneElement)(o,{className:"margin-top--md"}):null}return i.createElement("div",{className:"margin-top--md"},t.map((function(e,n){return(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==a})})))}function N(e){var n=m(e);return i.createElement("div",{className:(0,o.Z)("tabs-container",k.tabList)},i.createElement(v,(0,a.Z)({},e,n)),i.createElement(b,(0,a.Z)({},e,n)))}function C(e){var n=(0,f.Z)();return i.createElement(N,(0,a.Z)({key:String(n)},e))}},83996:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var a=t(83117),i=t(80102),o=(t(67294),t(3905)),r=(t(74866),t(85162),["components"]),l={id:"navigation-container",title:"NavigationContainer",sidebar_label:"NavigationContainer"},s=void 0,u={unversionedId:"navigation-container",id:"version-5.x/navigation-container",title:"NavigationContainer",description:"The NavigationContainer is responsible for managing your app state and linking your top-level navigator to the app environment.",source:"@site/versioned_docs/version-5.x/navigation-container.md",sourceDirName:".",slug:"/navigation-container",permalink:"/docs/5.x/navigation-container",draft:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-5.x/navigation-container.md",tags:[],version:"5.x",frontMatter:{id:"navigation-container",title:"NavigationContainer",sidebar_label:"NavigationContainer"},sidebar:"version-5.x/docs",previous:{title:"Upgrading from 4.x",permalink:"/docs/5.x/upgrading-from-4.x"},next:{title:"ServerContainer",permalink:"/docs/5.x/server-container"}},c={},p=[{value:"Ref",id:"ref",level:2},{value:"Methods on the ref",id:"methods-on-the-ref",level:3},{value:"<code>resetRoot</code>",id:"resetroot",level:4},{value:"<code>getRootState</code>",id:"getrootstate",level:4},{value:"<code>getCurrentRoute</code>",id:"getcurrentroute",level:4},{value:"<code>getCurrentOptions</code>",id:"getcurrentoptions",level:4},{value:"<code>addListener</code>",id:"addlistener",level:4},{value:"<code>state</code>",id:"state",level:5},{value:"<code>options</code>",id:"options",level:5},{value:"Props",id:"props",level:2},{value:"<code>initialState</code>",id:"initialstate",level:3},{value:"<code>onStateChange</code>",id:"onstatechange",level:3},{value:"<code>onReady</code>",id:"onready",level:3},{value:"<code>linking</code>",id:"linking",level:3},{value:"Options",id:"options-1",level:4},{value:"<code>linking.prefixes</code>",id:"linkingprefixes",level:5},{value:"<code>linking.config</code>",id:"linkingconfig",level:5},{value:"<code>linking.enabled</code>",id:"linkingenabled",level:5},{value:"<code>linking.getInitialURL</code>",id:"linkinggetinitialurl",level:5},{value:"<code>linking.subscribe</code>",id:"linkingsubscribe",level:5},{value:"<code>linking.getStateFromPath</code>",id:"linkinggetstatefrompath",level:5},{value:"<code>linking.getPathFromState</code>",id:"linkinggetpathfromstate",level:5},{value:"<code>fallback</code>",id:"fallback",level:3},{value:"<code>documentTitle</code>",id:"documenttitle",level:3},{value:"<code>documentTitle.enabled</code>",id:"documenttitleenabled",level:4},{value:"<code>documentTitle.formatter</code>",id:"documenttitleformatter",level:4},{value:"<code>theme</code>",id:"theme",level:3}],d={toc:p},h="wrapper";function g(e){var n=e.components,t=(0,i.Z)(e,r);return(0,o.kt)(h,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"NavigationContainer")," is responsible for managing your app state and linking your top-level navigator to the app environment."),(0,o.kt)("p",null,"The container takes care of platform specific integration and provides various useful functionality:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Deep link integration with the ",(0,o.kt)("a",{parentName:"li",href:"#linking"},(0,o.kt)("inlineCode",{parentName:"a"},"linking"))," prop."),(0,o.kt)("li",{parentName:"ol"},"Notify state changes for ",(0,o.kt)("a",{parentName:"li",href:"/docs/5.x/screen-tracking"},"screen tracking"),", ",(0,o.kt)("a",{parentName:"li",href:"/docs/5.x/state-persistence"},"state persistence")," etc."),(0,o.kt)("li",{parentName:"ol"},"Handle system back button on Android by using the ",(0,o.kt)("a",{parentName:"li",href:"https://reactnative.dev/docs/backhandler"},(0,o.kt)("inlineCode",{parentName:"a"},"BackHandler"))," API from React Native.")),(0,o.kt)("p",null,"Usage:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { NavigationContainer } from '@react-navigation/native';\nimport { createStackNavigator } from '@react-navigation/stack';\n\nconst Stack = createStackNavigator();\n\nexport default function App() {\n  return (\n    <NavigationContainer>\n      <Stack.Navigator>{/* ... */}</Stack.Navigator>\n    </NavigationContainer>\n  );\n}\n")),(0,o.kt)("h2",{id:"ref"},"Ref"),(0,o.kt)("p",null,"It's also possible to attach a ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/refs-and-the-dom.html#creating-refs"},(0,o.kt)("inlineCode",{parentName:"a"},"ref"))," to the container to get access to various helper methods, for example, dispatch navigation actions."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("samp",{id:"using-refs"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function App() {\n  const navigationRef = React.useRef(null);\n\n  return (\n    <View style={{ flex: 1 }}>\n      <Button onPress={() => navigationRef.current?.navigate('Home')}>\n        Go home\n      </Button>\n      <NavigationContainer ref={navigationRef}>{/* ... */}</NavigationContainer>\n    </View>\n  );\n}\n")),(0,o.kt)("p",null,"Keep in mind that the ref may be initially ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," in some situations (such as when linking is enabled). To make sure that the ref is initialized, you can use the ",(0,o.kt)("a",{parentName:"p",href:"#onready"},(0,o.kt)("inlineCode",{parentName:"a"},"onReady"))," callback to get notified when the navigation container finishes mounting."),(0,o.kt)("h3",{id:"methods-on-the-ref"},"Methods on the ref"),(0,o.kt)("p",null,"The ref object includes all of the common navigation methods such as ",(0,o.kt)("inlineCode",{parentName:"p"},"navigate"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"goBack")," etc. See ",(0,o.kt)("a",{parentName:"p",href:"/docs/5.x/navigation-actions"},"docs for ",(0,o.kt)("inlineCode",{parentName:"a"},"CommonActions"))," for more details."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"navigationRef.current?.navigate(name, params);\n")),(0,o.kt)("p",null,"All of these methods will act as if they were called inside the currently focused screen. It's important note that there must be a navigator rendered to handle these actions."),(0,o.kt)("p",null,"In addition to these methods, the ref object also includes the following special methods:"),(0,o.kt)("h4",{id:"resetroot"},(0,o.kt)("inlineCode",{parentName:"h4"},"resetRoot")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"resetRoot")," method lets you reset the state of the navigation tree to the specified state object:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"navigationRef.current?.resetRoot({\n  index: 0,\n  routes: [{ name: 'Profile' }],\n});\n")),(0,o.kt)("p",null,"Unlike the ",(0,o.kt)("inlineCode",{parentName:"p"},"reset")," method, this acts on the root navigator instead of navigator of the currently focused screen."),(0,o.kt)("h4",{id:"getrootstate"},(0,o.kt)("inlineCode",{parentName:"h4"},"getRootState")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"getRootState")," method returns a ",(0,o.kt)("a",{parentName:"p",href:"/docs/5.x/navigation-state"},"navigation state")," object containing the navigation states for all navigators in the navigation tree:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const state = navigationRef.current?.getRootState();\n")),(0,o.kt)("p",null,"Note that the returned ",(0,o.kt)("inlineCode",{parentName:"p"},"state")," object will be ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined")," if there are no navigators currently rendered."),(0,o.kt)("h4",{id:"getcurrentroute"},(0,o.kt)("inlineCode",{parentName:"h4"},"getCurrentRoute")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"getCurrentRoute")," method returns the route object for the currently focused screen in the whole navigation tree:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const route = navigationRef.current?.getCurrentRoute();\n")),(0,o.kt)("p",null,"Note that the returned ",(0,o.kt)("inlineCode",{parentName:"p"},"route")," object will be ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined")," if there are no navigators currently rendered."),(0,o.kt)("h4",{id:"getcurrentoptions"},(0,o.kt)("inlineCode",{parentName:"h4"},"getCurrentOptions")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"getCurrentOptions")," method returns the options for the currently focused screen in the whole navigation tree:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const options = navigationRef.current?.getCurrentOptions();\n")),(0,o.kt)("p",null,"Note that the returned ",(0,o.kt)("inlineCode",{parentName:"p"},"options")," object will be ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined")," if there are no navigators currently rendered."),(0,o.kt)("h4",{id:"addlistener"},(0,o.kt)("inlineCode",{parentName:"h4"},"addListener")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"addListener")," method lets you listen to the following events:"),(0,o.kt)("h5",{id:"state"},(0,o.kt)("inlineCode",{parentName:"h5"},"state")),(0,o.kt)("p",null,"The event is triggered whenever the ",(0,o.kt)("a",{parentName:"p",href:"/docs/5.x/navigation-state"},"navigation state")," changes in any navigator in the navigation tree:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const unsubscribe = navigationRef.current?.addListener('state', (e) => {\n  // You can get the raw navigation state (partial state object of the root navigator)\n  console.log(e.data.state);\n\n  // Or get the full state object with `getRootState()`\n  console.log(navigationRef.current.getRootState());\n});\n")),(0,o.kt)("p",null,"This is analogous to the ",(0,o.kt)("a",{parentName:"p",href:"#onstatechange"},(0,o.kt)("inlineCode",{parentName:"a"},"onStateChange"))," method. The only difference is that the ",(0,o.kt)("inlineCode",{parentName:"p"},"e.data.state")," object might contain partial state object unlike the ",(0,o.kt)("inlineCode",{parentName:"p"},"state")," argument in ",(0,o.kt)("inlineCode",{parentName:"p"},"onStateChange")," which will always contain the full state object."),(0,o.kt)("h5",{id:"options"},(0,o.kt)("inlineCode",{parentName:"h5"},"options")),(0,o.kt)("p",null,"The event is triggered whenever the options change for the currently focused screen in the navigation tree:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const unsubscribe = navigationRef.current?.addListener('options', (e) => {\n  // You can get the new options for the currently focused screen\n  console.log(e.data.options);\n});\n")),(0,o.kt)("h2",{id:"props"},"Props"),(0,o.kt)("h3",{id:"initialstate"},(0,o.kt)("inlineCode",{parentName:"h3"},"initialState")),(0,o.kt)("p",null,"Prop that accepts initial state for the navigator. This can be useful for cases such as deep linking, state persistence etc."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"<NavigationContainer\n  onStateChange={(state) => console.log('New state is', state)}\n  initialState={initialState}\n>\n  {/* ... */}\n</NavigationContainer>\n")),(0,o.kt)("p",null,"Providing a custom initial state object will override the initial state object obtained via linking configuration or from browser's URL. If you're providing an initial state object, make sure that you don't pass it on web and that there's no deep link to handle."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const initialUrl = await Linking.getInitialURL();\n\nif (Platform.OS !== 'web' && initialUrl == null) {\n  // Only restore state if there's no deep link and we're not on web\n}\n")),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"/docs/5.x/state-persistence"},"state persistence guide")," for more details on how to persist and restore state."),(0,o.kt)("h3",{id:"onstatechange"},(0,o.kt)("inlineCode",{parentName:"h3"},"onStateChange")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: Consider the navigator's state object to be internal and subject to change in a minor release. Avoid using properties from the navigation state object except ",(0,o.kt)("inlineCode",{parentName:"p"},"index")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"routes"),", unless you really need it. If there is some functionality you cannot achieve without relying on the structure of the state object, please open an issue.")),(0,o.kt)("p",null,"Function that gets called every time ",(0,o.kt)("a",{parentName:"p",href:"/docs/5.x/navigation-state"},"navigation state")," changes. It receives the new navigation state as the argument."),(0,o.kt)("p",null,"You can use it to track the focused screen, persist the navigation state etc."),(0,o.kt)("h3",{id:"onready"},(0,o.kt)("inlineCode",{parentName:"h3"},"onReady")),(0,o.kt)("p",null,"Function which is called after the navigation container and all its children finish mounting for the first time. You can use it for:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Making sure that the ",(0,o.kt)("inlineCode",{parentName:"li"},"ref")," is usable. See ",(0,o.kt)("a",{parentName:"li",href:"/docs/5.x/navigating-without-navigation-prop#handling-initialization"},"docs regarding initialization of the ref")," for more details."),(0,o.kt)("li",{parentName:"ul"},"Hiding your native splash screen")),(0,o.kt)("h3",{id:"linking"},(0,o.kt)("inlineCode",{parentName:"h3"},"linking")),(0,o.kt)("p",null,"Configuration for linking integration used for deep linking, URL support in browsers etc."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { NavigationContainer } from '@react-navigation/native';\n\nfunction App() {\n  const linking = {\n    prefixes: ['https://mychat.com', 'mychat://'],\n    config: {\n      screens: {\n        Home: 'feed/:sort',\n      },\n    },\n  };\n\n  return (\n    <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>\n      {/* content */}\n    </NavigationContainer>\n  );\n}\n")),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"/docs/5.x/configuring-links"},"configuring links guide")," for more details on how to configure deep links and URL integration."),(0,o.kt)("h4",{id:"options-1"},"Options"),(0,o.kt)("h5",{id:"linkingprefixes"},(0,o.kt)("inlineCode",{parentName:"h5"},"linking.prefixes")),(0,o.kt)("p",null,"URL prefixes to handle. You can provide multiple prefixes to support custom schemes as well as ",(0,o.kt)("a",{parentName:"p",href:"https://developer.apple.com/ios/universal-links/"},"universal links"),"."),(0,o.kt)("p",null,"Only URLs matching these prefixes will be handled. The prefix will be stripped from the URL before parsing."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"<NavigationContainer\n  linking={{\n    prefixes: ['https://mychat.com', 'mychat://'],\n    config: {\n      screens: {\n        Chat: 'feed/:sort',\n      },\n    },\n  }}\n>\n  {/* content */}\n</NavigationContainer>\n")),(0,o.kt)("p",null,"This is only supported on iOS and Android."),(0,o.kt)("h5",{id:"linkingconfig"},(0,o.kt)("inlineCode",{parentName:"h5"},"linking.config")),(0,o.kt)("p",null,"Config to fine-tune how to parse the path. The config object should represent the structure of the navigators in the app."),(0,o.kt)("p",null,"For example, if we have ",(0,o.kt)("inlineCode",{parentName:"p"},"Catalog")," screen inside ",(0,o.kt)("inlineCode",{parentName:"p"},"Home")," screen and want it to handle the ",(0,o.kt)("inlineCode",{parentName:"p"},"item/:id")," pattern:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"{\n  screens: {\n    Home: {\n      screens: {\n        Catalog: {\n          path: 'item/:id',\n          parse: {\n            id: Number,\n          },\n        },\n      },\n    },\n  }\n}\n")),(0,o.kt)("p",null,"The options for parsing can be an object or a string:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"{\n  screens: {\n    Catalog: 'item/:id',\n  }\n}\n")),(0,o.kt)("p",null,"When a string is specified, it's equivalent to providing the ",(0,o.kt)("inlineCode",{parentName:"p"},"path")," option."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"path")," option is a pattern to match against the path. Any segments starting with ",(0,o.kt)("inlineCode",{parentName:"p"},":")," are recognized as a param with the same name. For example ",(0,o.kt)("inlineCode",{parentName:"p"},"item/42")," will be parsed to ",(0,o.kt)("inlineCode",{parentName:"p"},"{ name: 'item', params: { id: '42' } }"),"."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"initialRouteName")," option ensures that the route name passed there will be present in the state for the navigator, e.g. for config:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"{\n  screens: {\n    Home: {\n      initialRouteName: 'Feed',\n      screens: {\n        Catalog: {\n          path: 'item/:id',\n          parse: {\n            id: Number,\n          },\n        },\n        Feed: 'feed',\n      },\n    },\n  }\n}\n")),(0,o.kt)("p",null,"and URL : ",(0,o.kt)("inlineCode",{parentName:"p"},"/item/42"),", the state will look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"{\n  routes: [\n    {\n      name: 'Home',\n      state: {\n        index: 1,\n        routes: [\n          {\n            name: 'Feed'\n          },\n          {\n            name: 'Catalog',\n            params: { id: 42 },\n          },\n        ],\n      },\n    },\n  ],\n}\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"parse")," option controls how the params are parsed. Here, you can provide the name of the param to parse as a key, and a function which takes the string value for the param and returns a parsed value:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"{\n  screens: {\n    Catalog: {\n      path: 'item/:id',\n      parse: {\n        id: id => parseInt(id, 10),\n      },\n    },\n  }\n}\n")),(0,o.kt)("p",null,"If no custom function is provided for parsing a param, it'll be parsed as a string."),(0,o.kt)("h5",{id:"linkingenabled"},(0,o.kt)("inlineCode",{parentName:"h5"},"linking.enabled")),(0,o.kt)("p",null,"Optional boolean to enable or disable the linking integration. Defaults to ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," if the ",(0,o.kt)("inlineCode",{parentName:"p"},"linking")," prop is specified."),(0,o.kt)("h5",{id:"linkinggetinitialurl"},(0,o.kt)("inlineCode",{parentName:"h5"},"linking.getInitialURL")),(0,o.kt)("p",null,"By default, linking integrates with React Native's ",(0,o.kt)("inlineCode",{parentName:"p"},"Linking")," API and uses ",(0,o.kt)("inlineCode",{parentName:"p"},"Linking.getInitialURL()")," to provide built-in support for deep linking. However, you might also want to handle links from other sources, such as ",(0,o.kt)("a",{parentName:"p",href:"https://help.branch.io/developers-hub/docs/react-native"},"Branch"),", or push notifications using ",(0,o.kt)("a",{parentName:"p",href:"https://rnfirebase.io/messaging/notifications"},"Firebase")," etc."),(0,o.kt)("p",null,"You can provide a custom ",(0,o.kt)("inlineCode",{parentName:"p"},"getInitialURL")," function where you can return the link which we should use as the initial URL. The ",(0,o.kt)("inlineCode",{parentName:"p"},"getInitialURL")," function should return a ",(0,o.kt)("inlineCode",{parentName:"p"},"string")," if there's a URL to handle, otherwise ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined"),"."),(0,o.kt)("p",null,"For example, you could do something like following to handle both deep linking and ",(0,o.kt)("a",{parentName:"p",href:"https://rnfirebase.io/messaging/notifications"},"Firebase notifications"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"<NavigationContainer\n  linking={{\n    prefixes: ['https://mychat.com', 'mychat://'],\n    config: {\n      screens: {\n        Chat: 'feed/:sort',\n      },\n    },\n    async getInitialURL() {\n      // Check if app was opened from a deep link\n      const url = await Linking.getInitialURL();\n\n      if (url != null) {\n        return url;\n      }\n\n      // Check if there is an initial firebase notification\n      const message = await messaging().getInitialNotification();\n\n      // Get the `url` property from the notification which corresponds to a screen\n      // This property needs to be set on the notification payload when sending it\n      return message?.notification.url;\n    },\n  }}\n>\n  {/* content */}\n</NavigationContainer>\n")),(0,o.kt)("p",null,"This option is not available on Web."),(0,o.kt)("h5",{id:"linkingsubscribe"},(0,o.kt)("inlineCode",{parentName:"h5"},"linking.subscribe")),(0,o.kt)("p",null,"Similar to ",(0,o.kt)("a",{parentName:"p",href:"#linkinggetinitialurl"},(0,o.kt)("inlineCode",{parentName:"a"},"getInitialURL")),", you can provide a custom ",(0,o.kt)("inlineCode",{parentName:"p"},"subscribe")," function to handle any incoming links instead of the default deep link handling. The ",(0,o.kt)("inlineCode",{parentName:"p"},"subscribe")," function will receive a listener as the argument and you can call it with a URL string whenever there's a new URL to handle. It should return a cleanup function where you can unsubscribe from any event listeners that you have setup."),(0,o.kt)("p",null,"For example, you could do something like following to handle both deep linking and ",(0,o.kt)("a",{parentName:"p",href:"https://rnfirebase.io/messaging/notifications"},"Firebase notifications"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"<NavigationContainer\n  linking={{\n    prefixes: ['https://mychat.com', 'mychat://'],\n    config: {\n      screens: {\n        Chat: 'feed/:sort',\n      },\n    },\n    subscribe(listener) {\n      const onReceiveURL = ({ url }: { url: string }) => listener(url);\n\n      // Listen to incoming links from deep linking\n      Linking.addEventListener('url', onReceiveURL);\n\n      // Listen to firebase push notifications\n      const unsubscribeNotification = messaging().onNotificationOpenedApp(\n        (message) => {\n          const url = message.notification.url;\n\n          if (url) {\n            // Any custom logic to check whether the URL needs to be handled\n            //...\n\n            // Call the listener to let React Navigation handle the URL\n            listener(url);\n          }\n        }\n      );\n\n      return () => {\n        // Clean up the event listeners\n        Linking.removeEventListener('url', onReceiveURL);\n        unsubscribeNotification();\n      };\n    },\n  }}\n>\n  {/* content */}\n</NavigationContainer>\n")),(0,o.kt)("p",null,"This option is not available on Web."),(0,o.kt)("h5",{id:"linkinggetstatefrompath"},(0,o.kt)("inlineCode",{parentName:"h5"},"linking.getStateFromPath")),(0,o.kt)("p",null,"You can optionally override the way React Navigation parses links to a state object by providing your own implementation."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"<NavigationContainer\n  linking={{\n    prefixes: ['https://mychat.com', 'mychat://'],\n    config: {\n      screens: {\n        Chat: 'feed/:sort',\n      },\n    },\n    getStateFromPath(path, config) {\n      // Return a state object here\n      // You can also reuse the default logic by importing `getStateFromPath` from `@react-navigation/native`\n    },\n  }}\n>\n  {/* content */}\n</NavigationContainer>\n")),(0,o.kt)("h5",{id:"linkinggetpathfromstate"},(0,o.kt)("inlineCode",{parentName:"h5"},"linking.getPathFromState")),(0,o.kt)("p",null,"You can optionally override the way React Navigation serializes state objects to link by providing your own implementation. This is necessary for proper web support if you have specified ",(0,o.kt)("inlineCode",{parentName:"p"},"getStateFromPath"),"."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"<NavigationContainer\n  linking={{\n    prefixes: ['https://mychat.com', 'mychat://'],\n    config: {\n      screens: {\n        Chat: 'feed/:sort',\n      },\n    },\n    getPathFromState(state, config) {\n      // Return a path string here\n      // You can also reuse the default logic by importing `getPathFromState` from `@react-navigation/native`\n    },\n  }}\n>\n  {/* content */}\n</NavigationContainer>\n")),(0,o.kt)("h3",{id:"fallback"},(0,o.kt)("inlineCode",{parentName:"h3"},"fallback")),(0,o.kt)("p",null,"React Element to use as a fallback while we resolve deep links. Defaults to ",(0,o.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,o.kt)("p",null,"If you have a native splash screen, please use ",(0,o.kt)("a",{parentName:"p",href:"#onready"},(0,o.kt)("inlineCode",{parentName:"a"},"onReady"))," instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"fallback")," prop."),(0,o.kt)("h3",{id:"documenttitle"},(0,o.kt)("inlineCode",{parentName:"h3"},"documentTitle")),(0,o.kt)("p",null,"By default, React Navigation automatically updates the document title on Web to match the ",(0,o.kt)("inlineCode",{parentName:"p"},"title")," option of the focused screen. You can disable it or customize it using this prop. It accepts a configuration object with the following options:"),(0,o.kt)("h4",{id:"documenttitleenabled"},(0,o.kt)("inlineCode",{parentName:"h4"},"documentTitle.enabled")),(0,o.kt)("p",null,"Whether document title handling should be enabled. Defaults to ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,o.kt)("h4",{id:"documenttitleformatter"},(0,o.kt)("inlineCode",{parentName:"h4"},"documentTitle.formatter")),(0,o.kt)("p",null,"Custom formatter to use if you want to customize the title text. Defaults to:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"(options, route) => options?.title ?? route?.name;\n")),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { NavigationContainer } from '@react-navigation/native';\n\nfunction App() {\n  return (\n    <NavigationContainer\n      documentTitle={{\n        formatter: (options, route) =>\n          `${options?.title ?? route?.name} - My Cool App`,\n      }}\n    >\n      {/* content */}\n    </NavigationContainer>\n  );\n}\n")),(0,o.kt)("h3",{id:"theme"},(0,o.kt)("inlineCode",{parentName:"h3"},"theme")),(0,o.kt)("p",null,"Custom theme to use for the navigation components such as the header, tab bar etc. See ",(0,o.kt)("a",{parentName:"p",href:"/docs/5.x/themes"},"theming guide")," for more details and usage guide."))}g.isMDXComponent=!0}}]);