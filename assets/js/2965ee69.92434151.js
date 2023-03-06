"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[78624],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},v=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=c(n),v=r,f=p["".concat(l,".").concat(v)]||p[v]||d[v]||o;return n?a.createElement(f,i(i({ref:t},s),{},{components:n})):a.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=v;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u[p]="string"==typeof e?e:r,i[1]=u;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}v.displayName="MDXCreateElement"},85162:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(67294),r=n(86010),o={tabItem:"tabItem_Ymn6"};function i(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,i),hidden:n},t)}},74866:function(e,t,n){n.d(t,{Z:function(){return N}});var a=n(83117),r=n(67294),o=n(86010),i=n(12466),u=n(16550),l=n(91980),c=n(67392),s=n(50012);function p(e){return function(e){return r.Children.map(e,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function d(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:p(n);return function(e){var t=(0,c.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function v(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function f(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,o=(0,u.k6)(),i=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:a});return[(0,l._X)(i),(0,r.useCallback)((function(e){if(i){var t=new URLSearchParams(o.location.search);t.set(i,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[i,o])]}function h(e){var t,n,a,o,i=e.defaultValue,u=e.queryString,l=void 0!==u&&u,c=e.groupId,p=d(e),h=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!v({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:i,tabValues:p})})),m=h[0],g=h[1],b=f({queryString:l,groupId:c}),y=b[0],k=b[1],N=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:c}.groupId),n=(0,s.Nk)(t),a=n[0],o=n[1],[a,(0,r.useCallback)((function(e){t&&o.set(e)}),[t,o])]),w=N[0],C=N[1],A=function(){var e=null!=y?y:w;return v({value:e,tabValues:p})?e:null}();return(0,r.useLayoutEffect)((function(){A&&g(A)}),[A]),{selectedValue:m,selectValue:(0,r.useCallback)((function(e){if(!v({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);g(e),k(e),C(e)}),[k,C,p]),tabValues:p}}var m=n(72389),g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){var t=e.className,n=e.block,u=e.selectedValue,l=e.selectValue,c=e.tabValues,s=[],p=(0,i.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,n=s.indexOf(t),a=c[n].value;a!==u&&(p(t),l(a))},v=function(e){var t,n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var a,r=s.indexOf(e.currentTarget)+1;n=null!=(a=s[r])?a:s[0];break;case"ArrowLeft":var o,i=s.indexOf(e.currentTarget)-1;n=null!=(o=s[i])?o:s[s.length-1]}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},c.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:function(e){return s.push(e)},onKeyDown:v,onClick:d},i,{className:(0,o.Z)("tabs__item",g.tabItem,null==i?void 0:i.className,{"tabs__item--active":u===t})}),null!=n?n:t)})))}function y(e){var t=e.lazy,n=e.children,a=e.selectedValue;if(n=Array.isArray(n)?n:[n],t){var o=n.find((function(e){return e.props.value===a}));return o?(0,r.cloneElement)(o,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})})))}function k(e){var t=h(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",g.tabList)},r.createElement(b,(0,a.Z)({},e,t)),r.createElement(y,(0,a.Z)({},e,t)))}function N(e){var t=(0,m.Z)();return r.createElement(k,(0,a.Z)({key:String(t)},e))}},13938:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return p}});var a=n(83117),r=n(80102),o=(n(67294),n(3905)),i=(n(74866),n(85162),["components"]),u={id:"app-containers",title:"App containers",sidebar_label:"App containers"},l=void 0,c={unversionedId:"app-containers",id:"version-2.x/app-containers",title:"App containers",description:"Containers are responsible for managing your app state and linking your top-level navigator to the app environment. On Android, the app container uses the Linking API to handle the back button. The container can also be configured to persist your navigation state. On web, you'd use different containers than React Native.",source:"@site/versioned_docs/version-2.x/app-containers.md",sourceDirName:".",slug:"/app-containers",permalink:"/docs/2.x/app-containers",draft:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-2.x/app-containers.md",tags:[],version:"2.x",frontMatter:{id:"app-containers",title:"App containers",sidebar_label:"App containers"},sidebar:"version-2.x-docs",previous:{title:"State persistence",permalink:"/docs/2.x/state-persistence"},next:{title:"Redux integration",permalink:"/docs/2.x/redux-integration"}},s={},p=[{value:"Props of <code>createAppContainer</code> on React Native",id:"props-of-createappcontainer-on-react-native",level:2},{value:"<code>onNavigationStateChange(prevState, newState, action)</code>",id:"onnavigationstatechangeprevstate-newstate-action",level:3},{value:"<code>uriPrefix</code>",id:"uriprefix",level:3},{value:"Calling Dispatch or Navigate on App Container",id:"calling-dispatch-or-navigate-on-app-container",level:2},{value:"App Containers on the web",id:"app-containers-on-the-web",level:2}],d={toc:p},v="wrapper";function f(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)(v,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Containers are responsible for managing your app state and linking your top-level navigator to the app environment. On Android, the app container uses the Linking API to handle the back button. The container can also be configured to persist your navigation state. On web, you'd use different containers than React Native."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: In v2 and earlier, the containers in React Navigation are automatically provided by the ",(0,o.kt)("inlineCode",{parentName:"p"},"create*Navigator")," functions. As of v3, you are required to use the container directly. In v3 we also renamed ",(0,o.kt)("inlineCode",{parentName:"p"},"createNavigationContainer")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"createAppContainer"),".")),(0,o.kt)("p",null,"A quick example of ",(0,o.kt)("inlineCode",{parentName:"p"},"createAppContainer"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"import { createAppContainer, createStackNavigator } from 'react-navigation';\n// you can also import from @react-navigation/native\n\nconst AppNavigator = createStackNavigator(...);\n\nconst AppContainer = createAppContainer(AppNavigator);\n\n// Now AppContainer is the main component for React to render\n\nexport default AppContainer;\n")),(0,o.kt)("h2",{id:"props-of-createappcontainer-on-react-native"},"Props of ",(0,o.kt)("inlineCode",{parentName:"h2"},"createAppContainer")," on React Native"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'<AppContainer\n  onNavigationStateChange={handleNavigationChange}\n  uriPrefix="/app"\n/>\n')),(0,o.kt)("h3",{id:"onnavigationstatechangeprevstate-newstate-action"},(0,o.kt)("inlineCode",{parentName:"h3"},"onNavigationStateChange(prevState, newState, action)")),(0,o.kt)("p",null,"Function that gets called every time navigation state managed by the navigator changes. It receives the previous state, the new state of the navigation and the action that issued state change. By default it prints state changes to the console."),(0,o.kt)("h3",{id:"uriprefix"},(0,o.kt)("inlineCode",{parentName:"h3"},"uriPrefix")),(0,o.kt)("p",null,"The prefix of the URIs that the app might handle. This will be used when handling a ",(0,o.kt)("a",{parentName:"p",href:"/docs/2.x/deep-linking"},"deep link")," to extract the path passed to the router."),(0,o.kt)("h2",{id:"calling-dispatch-or-navigate-on-app-container"},"Calling Dispatch or Navigate on App Container"),(0,o.kt)("p",null,"In case you want to dispatch actions on an app container, you can use a React ",(0,o.kt)("a",{parentName:"p",href:"https://facebook.github.io/react/docs/refs-and-the-dom.html#the-ref-callback-attribute"},(0,o.kt)("inlineCode",{parentName:"a"},"ref"))," to call the ",(0,o.kt)("inlineCode",{parentName:"p"},"dispatch")," method on it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const AppContainer = createAppContainer(AppNavigator);\n\nclass App extends React.Component {\n  someEvent() {\n    // call navigate for AppNavigator here:\n    this.navigator &&\n      this.navigator.dispatch(\n        NavigationActions.navigate({ routeName: someRouteName })\n      );\n  }\n  render() {\n    return (\n      <AppContainer\n        ref={nav => {\n          this.navigator = nav;\n        }}\n      />\n    );\n  }\n}\n")),(0,o.kt)("h2",{id:"app-containers-on-the-web"},"App Containers on the web"),(0,o.kt)("p",null,"On the web, you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"createBrowserApp")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"handleServerRequest")," to maintain the state for your top-level navigator."))}f.isMDXComponent=!0}}]);