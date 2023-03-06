"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[89776],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=l(n),m=r,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u[p]="string"==typeof e?e:r,i[1]=u;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(67294),r=n(86010),o={tabItem:"tabItem_Ymn6"};function i(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,i),hidden:n},t)}},74866:function(e,t,n){n.d(t,{Z:function(){return w}});var a=n(83117),r=n(67294),o=n(86010),i=n(12466),u=n(16550),s=n(91980),l=n(67392),c=n(50012);function p(e){return function(e){return r.Children.map(e,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function d(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:p(n);return function(e){var t=(0,l.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function m(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function h(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,o=(0,u.k6)(),i=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:a});return[(0,s._X)(i),(0,r.useCallback)((function(e){if(i){var t=new URLSearchParams(o.location.search);t.set(i,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[i,o])]}function f(e){var t,n,a,o,i=e.defaultValue,u=e.queryString,s=void 0!==u&&u,l=e.groupId,p=d(e),f=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:i,tabValues:p})})),v=f[0],g=f[1],b=h({queryString:s,groupId:l}),y=b[0],k=b[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:l}.groupId),n=(0,c.Nk)(t),a=n[0],o=n[1],[a,(0,r.useCallback)((function(e){t&&o.set(e)}),[t,o])]),N=w[0],C=w[1],O=function(){var e=null!=y?y:N;return m({value:e,tabValues:p})?e:null}();return(0,r.useLayoutEffect)((function(){O&&g(O)}),[O]),{selectedValue:v,selectValue:(0,r.useCallback)((function(e){if(!m({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);g(e),k(e),C(e)}),[k,C,p]),tabValues:p}}var v=n(72389),g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){var t=e.className,n=e.block,u=e.selectedValue,s=e.selectValue,l=e.tabValues,c=[],p=(0,i.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,n=c.indexOf(t),a=l[n].value;a!==u&&(p(t),s(a))},m=function(e){var t,n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var a,r=c.indexOf(e.currentTarget)+1;n=null!=(a=c[r])?a:c[0];break;case"ArrowLeft":var o,i=c.indexOf(e.currentTarget)-1;n=null!=(o=c[i])?o:c[c.length-1]}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},l.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:function(e){return c.push(e)},onKeyDown:m,onClick:d},i,{className:(0,o.Z)("tabs__item",g.tabItem,null==i?void 0:i.className,{"tabs__item--active":u===t})}),null!=n?n:t)})))}function y(e){var t=e.lazy,n=e.children,a=e.selectedValue;if(n=Array.isArray(n)?n:[n],t){var o=n.find((function(e){return e.props.value===a}));return o?(0,r.cloneElement)(o,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})})))}function k(e){var t=f(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",g.tabList)},r.createElement(b,(0,a.Z)({},e,t)),r.createElement(y,(0,a.Z)({},e,t)))}function w(e){var t=(0,v.Z)();return r.createElement(k,(0,a.Z)({key:String(t)},e))}},33179:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return p}});var a=n(83117),r=n(80102),o=(n(67294),n(3905)),i=(n(74866),n(85162),["components"]),u={id:"custom-routers",title:"Custom routers",sidebar_label:"Custom routers"},s=void 0,l={unversionedId:"custom-routers",id:"version-2.x/custom-routers",title:"Custom routers",description:"You can make your own router by building an object with the following functions:",source:"@site/versioned_docs/version-2.x/custom-routers.md",sourceDirName:".",slug:"/custom-routers",permalink:"/docs/2.x/custom-routers",draft:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-2.x/custom-routers.md",tags:[],version:"2.x",frontMatter:{id:"custom-routers",title:"Custom routers",sidebar_label:"Custom routers"},sidebar:"version-2.x-docs",previous:{title:"Custom navigators",permalink:"/docs/2.x/custom-navigators"},next:{title:"Navigation views",permalink:"/docs/2.x/navigation-views"}},c={},p=[{value:"<code>getStateForAction(action, state)</code>",id:"getstateforactionaction-state",level:3},{value:"<code>getComponentForRouteName(routeName)</code>",id:"getcomponentforroutenameroutename",level:3},{value:"<code>getComponentForState(state)</code>",id:"getcomponentforstatestate",level:3},{value:"<code>getActionForPathAndParams(path, params)</code>",id:"getactionforpathandparamspath-params",level:3},{value:"<code>getPathAndParamsForState(state)</code>",id:"getpathandparamsforstatestate",level:3},{value:"<code>getScreenOptions(navigation, screenProps)</code>",id:"getscreenoptionsnavigation-screenprops",level:3}],d={toc:p},m="wrapper";function h(e){var t=e.components,u=(0,r.Z)(e,i);return(0,o.kt)(m,(0,a.Z)({},d,u,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You can make your own router by building an object with the following functions:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const MyRouter = {\n  getStateForAction: (action, state) => ({}),\n  getActionForPathAndParams: (path, params) => null,\n  getPathAndParamsForState: (state) => null,\n  getComponentForState: (state) => MyScreen,\n  getComponentForRouteName: (routeName) => MyScreen,\n};\n\n// Now, you can make a navigator by putting the router on it:\nclass MyNavigator extends React.Component {\n  static router = MyRouter;\n  render() {\n    ...\n  }\n}\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Routers manage the relationship between URIs, actions, and navigation state",src:n(71981).Z,width:"1425",height:"1125"})),(0,o.kt)("h3",{id:"getstateforactionaction-state"},(0,o.kt)("inlineCode",{parentName:"h3"},"getStateForAction(action, state)")),(0,o.kt)("p",null,"Defines the navigation state in response to a given action. This function will be run when an action gets passed into ",(0,o.kt)("inlineCode",{parentName:"p"},"props.navigation.dispatch("),", or when any of the helper functions are called, like ",(0,o.kt)("inlineCode",{parentName:"p"},"navigation.navigate("),"."),(0,o.kt)("p",null,"Typically this should return a navigation state, with the following form:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"{\n  index: 1, // identifies which route in the routes array is active\n  routes: [\n    {\n      // Each route needs a name to identify the type.\n      routeName: 'MyRouteName',\n\n      // A unique identifier for this route in the routes array:\n      key: 'myroute-123',\n      // (used to specify the re-ordering of routes)\n\n      // Routes can have any data, as long as key and routeName are correct\n      ...randomRouteData,\n    },\n    ...moreRoutes,\n  ]\n}\n")),(0,o.kt)("p",null,"If the router has handled the action externally, or wants to swallow it without changing the navigation state, this function will return ",(0,o.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,o.kt)("h3",{id:"getcomponentforroutenameroutename"},(0,o.kt)("inlineCode",{parentName:"h3"},"getComponentForRouteName(routeName)")),(0,o.kt)("p",null,"Returns the child component or navigator for the given route name."),(0,o.kt)("p",null,"Say a router ",(0,o.kt)("inlineCode",{parentName:"p"},"getStateForAction")," outputs a state like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"{\n  index: 1,\n  routes: [\n    { key: 'A', routeName: 'Foo' },\n    { key: 'B', routeName: 'Bar' },\n  ],\n}\n")),(0,o.kt)("p",null,"Based on the routeNames in the state, the router is responsible for returning valid components when calling ",(0,o.kt)("inlineCode",{parentName:"p"},"router.getComponentForRouteName('Foo')")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"router.getComponentForRouteName('Bar')"),"."),(0,o.kt)("h3",{id:"getcomponentforstatestate"},(0,o.kt)("inlineCode",{parentName:"h3"},"getComponentForState(state)")),(0,o.kt)("p",null,"Returns the active component for a deep navigation state."),(0,o.kt)("h3",{id:"getactionforpathandparamspath-params"},(0,o.kt)("inlineCode",{parentName:"h3"},"getActionForPathAndParams(path, params)")),(0,o.kt)("p",null,"Returns an optional navigation action that should be used when the user navigates to this path and provides optional query parameters."),(0,o.kt)("h3",{id:"getpathandparamsforstatestate"},(0,o.kt)("inlineCode",{parentName:"h3"},"getPathAndParamsForState(state)")),(0,o.kt)("p",null,"Returns the path and params that can be put into the URL to link the user back to the same spot in the app."),(0,o.kt)("p",null,"The path/params that are output from this should form an action when passed back into the router's ",(0,o.kt)("inlineCode",{parentName:"p"},"getActionForPathAndParams"),". That action should take you to a similar state once passed through ",(0,o.kt)("inlineCode",{parentName:"p"},"getStateForAction"),"."),(0,o.kt)("h3",{id:"getscreenoptionsnavigation-screenprops"},(0,o.kt)("inlineCode",{parentName:"h3"},"getScreenOptions(navigation, screenProps)")),(0,o.kt)("p",null,"Used to retrieve the navigation options for a screen. Must provide the screen's current navigation prop and optionally, other props that your navigation options may need to consume."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"navigation")," - This is the navigation prop that the screen will use, where the state refers to the screen's route/state. Dispatch will trigger actions in the context of that screen."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"screenProps")," - Other props that your navigation options may need to consume"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"navigationOptions")," - The previous set of options that are default or provided by the previous configurer")),(0,o.kt)("p",null,"Inside an example view, perhaps you need to fetch the configured title:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// First, prepare a navigation prop for your child, or re-use one if already available.\nconst screenNavigation = addNavigationHelpers({\n  // In this case we use navigation.state.index because we want the title for the active route.\n  state: navigation.state.routes[navigation.state.index],\n  dispatch: navigation.dispatch,\n});\nconst options = this.props.router.getScreenOptions(screenNavigation, {});\nconst title = options.title;\n")))}h.isMDXComponent=!0},71981:function(e,t,n){t.Z=n.p+"assets/images/routers-concept-map-02d38b1cb8eceb18662323ecf39b042d.png"}}]);