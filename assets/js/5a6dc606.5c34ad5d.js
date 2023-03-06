"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[12227],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return g}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},v=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),v=r,g=p["".concat(l,".").concat(v)]||p[v]||d[v]||i;return n?a.createElement(g,o(o({ref:t},c),{},{components:n})):a.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=v;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}v.displayName="MDXCreateElement"},85162:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(67294),r=n(86010),i={tabItem:"tabItem_Ymn6"};function o(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,o),hidden:n},t)}},74866:function(e,t,n){n.d(t,{Z:function(){return N}});var a=n(83117),r=n(67294),i=n(86010),o=n(12466),s=n(16550),l=n(91980),u=n(67392),c=n(50012);function p(e){return function(e){return r.Children.map(e,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function d(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:p(n);return function(e){var t=(0,u.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function v(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function g(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,i=(0,s.k6)(),o=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:a});return[(0,l._X)(o),(0,r.useCallback)((function(e){if(o){var t=new URLSearchParams(i.location.search);t.set(o,e),i.replace(Object.assign({},i.location,{search:t.toString()}))}}),[o,i])]}function h(e){var t,n,a,i,o=e.defaultValue,s=e.queryString,l=void 0!==s&&s,u=e.groupId,p=d(e),h=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!v({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:o,tabValues:p})})),m=h[0],f=h[1],k=g({queryString:l,groupId:u}),b=k[0],y=k[1],N=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),n=(0,c.Nk)(t),a=n[0],i=n[1],[a,(0,r.useCallback)((function(e){t&&i.set(e)}),[t,i])]),w=N[0],C=N[1],x=function(){var e=null!=b?b:w;return v({value:e,tabValues:p})?e:null}();return(0,r.useLayoutEffect)((function(){x&&f(x)}),[x]),{selectedValue:m,selectValue:(0,r.useCallback)((function(e){if(!v({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);f(e),y(e),C(e)}),[y,C,p]),tabValues:p}}var m=n(72389),f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){var t=e.className,n=e.block,s=e.selectedValue,l=e.selectValue,u=e.tabValues,c=[],p=(0,o.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==s&&(p(t),l(a))},v=function(e){var t,n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var a,r=c.indexOf(e.currentTarget)+1;n=null!=(a=c[r])?a:c[0];break;case"ArrowLeft":var i,o=c.indexOf(e.currentTarget)-1;n=null!=(i=c[o])?i:c[c.length-1]}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},u.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:function(e){return c.push(e)},onKeyDown:v,onClick:d},o,{className:(0,i.Z)("tabs__item",f.tabItem,null==o?void 0:o.className,{"tabs__item--active":s===t})}),null!=n?n:t)})))}function b(e){var t=e.lazy,n=e.children,a=e.selectedValue;if(n=Array.isArray(n)?n:[n],t){var i=n.find((function(e){return e.props.value===a}));return i?(0,r.cloneElement)(i,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})})))}function y(e){var t=h(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",f.tabList)},r.createElement(k,(0,a.Z)({},e,t)),r.createElement(b,(0,a.Z)({},e,t)))}function N(e){var t=(0,m.Z)();return r.createElement(y,(0,a.Z)({key:String(t)},e))}},96553:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),o=(n(74866),n(85162),["components"]),s={id:"custom-navigators",title:"Custom navigators",sidebar_label:"Custom navigators"},l=void 0,u={unversionedId:"custom-navigators",id:"version-2.x/custom-navigators",title:"Custom navigators",description:"A navigator is any React component that has a router on it, to define the navigation behavior. Each navigator is given a navigation prop, which allows the parent to control the navigation state.",source:"@site/versioned_docs/version-2.x/custom-navigators.md",sourceDirName:".",slug:"/custom-navigators",permalink:"/docs/2.x/custom-navigators",draft:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-2.x/custom-navigators.md",tags:[],version:"2.x",frontMatter:{id:"custom-navigators",title:"Custom navigators",sidebar_label:"Custom navigators"},sidebar:"version-2.x-docs",previous:{title:"Routers",permalink:"/docs/2.x/routers"},next:{title:"Custom routers",permalink:"/docs/2.x/custom-routers"}},c={},p=[{value:"Extending Navigators",id:"extending-navigators",level:2},{value:"Navigator Navigation Prop",id:"navigator-navigation-prop",level:2},{value:"Navigation State",id:"navigation-state",level:3},{value:"Navigation Dispatchers",id:"navigation-dispatchers",level:3},{value:"API for building custom navigators",id:"api-for-building-custom-navigators",level:2},{value:"<code>createNavigator</code>",id:"createnavigator",level:3},{value:"Scene Descriptors",id:"scene-descriptors",level:3},{value:"<code>createNavigationContainer</code>",id:"createnavigationcontainer",level:3}],d={toc:p},v="wrapper";function g(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)(v,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A navigator is any React component that has a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/react-navigation/react-navigation/blob/2.x/src/routers/StackRouter.js"},"router")," on it, to define the navigation behavior. Each navigator is given a ",(0,i.kt)("inlineCode",{parentName:"p"},"navigation")," prop, which allows the parent to control the navigation state."),(0,i.kt)("h2",{id:"extending-navigators"},"Extending Navigators"),(0,i.kt)("p",null,"It is possible to take an existing Navigator and extend its behavior, using the following approach:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const MyStack = createStackNavigator({ ... });\n\nclass CustomNavigator extends React.Component {\n  static router = MyStack.router;\n  render() {\n    const { navigation } = this.props;\n\n    return <MyStack navigation={navigation} />;\n  }\n}\n")),(0,i.kt)("p",null,"Now it is possible to render additional things, observe the navigation prop, and override behavior of the router:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const MyStack = createStackNavigator({ ... });\n\nclass CustomNavigator extends React.Component {\n  static router = {\n    ...MyStack.router,\n    getStateForAction: (action, lastState) => {\n      // check for custom actions and return a different navigation state.\n      return MyStack.router.getStateForAction(action, lastState);\n    },\n  };\n  componentDidUpdate(lastProps) {\n    // Navigation state has changed from lastProps.navigation.state to this.props.navigation.state\n  }\n  render() {\n    const { navigation } = this.props;\n\n    return (\n      <View>\n        <MyStack navigation={navigation} />\n        {...}\n      </View>\n    );\n  }\n}\n")),(0,i.kt)("h2",{id:"navigator-navigation-prop"},"Navigator Navigation Prop"),(0,i.kt)("p",null,"The navigation prop passed down to a navigator only includes ",(0,i.kt)("inlineCode",{parentName:"p"},"state"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"dispatch"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"addListener"),". This is the current state of the navigator, and an event channel to send action requests."),(0,i.kt)("p",null,"All navigators are controlled components: they always display what is coming in through ",(0,i.kt)("inlineCode",{parentName:"p"},"props.navigation.state"),", and their only way to change the state is to send actions into ",(0,i.kt)("inlineCode",{parentName:"p"},"props.navigation.dispatch"),"."),(0,i.kt)("p",null,"Navigators can specify custom behavior to parent navigators by ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.x/custom-routers"},"customizing their router"),". For example, a navigator is able to specify when actions should be blocked by returning null from ",(0,i.kt)("inlineCode",{parentName:"p"},"router.getStateForAction"),". Or a navigator can specify custom URI handling by overriding ",(0,i.kt)("inlineCode",{parentName:"p"},"router.getActionForPathAndParams")," to output a relevant navigation action, and handling that action in ",(0,i.kt)("inlineCode",{parentName:"p"},"router.getStateForAction"),"."),(0,i.kt)("h3",{id:"navigation-state"},"Navigation State"),(0,i.kt)("p",null,"The navigation state that is passed into a navigator's ",(0,i.kt)("inlineCode",{parentName:"p"},"props.navigation.state")," has the following structure:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"{\n  index: 1, // identifies which route in the routes array is active\n  routes: [\n    {\n      // Each route needs a name, which routers will use to associate each route\n      // with a react component\n      routeName: 'MyRouteName',\n\n      // A unique id for this route, used to keep order in the routes array:\n      key: 'myroute-123',\n\n      // Routes can have any additional data. The included routers have `params`\n      ...customRouteData,\n    },\n    ...moreRoutes,\n  ]\n}\n")),(0,i.kt)("h3",{id:"navigation-dispatchers"},"Navigation Dispatchers"),(0,i.kt)("p",null,"A navigator can dispatch navigation actions, such as 'Go to a URI', 'Go back'."),(0,i.kt)("p",null,"The dispatcher will return ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," if the action was successfully handled, otherwise ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,i.kt)("h2",{id:"api-for-building-custom-navigators"},"API for building custom navigators"),(0,i.kt)("p",null,"To help developers implement custom navigators, the following utilities are provided with React Navigation:"),(0,i.kt)("h3",{id:"createnavigator"},(0,i.kt)("inlineCode",{parentName:"h3"},"createNavigator")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: The ",(0,i.kt)("inlineCode",{parentName:"p"},"createNavigator")," API has changed in version 2. The old doc for v1 can be accessed here: ",(0,i.kt)("a",{parentName:"p",href:"https://v1.reactnavigation.org/docs/custom-navigators.html"},"https://v1.reactnavigation.org/docs/custom-navigators.html"))),(0,i.kt)("p",null,"This utility combines a ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.x/routers"},"router")," and a ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.x/navigation-views"},"navigation view")," together in a standard way:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import {createNavigator} from 'react-navigation';\n\nconst AppNavigator = createNavigator(NavigationView, router, navigationConfig);\n")),(0,i.kt)("p",null,"The new ",(0,i.kt)("inlineCode",{parentName:"p"},"AppNavigator")," can be rendered as such:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"<AppNavigator\n  navigation={{ state, dispatch, addListener }}\n  screenProps={...}\n/>\n")),(0,i.kt)("p",null,"Then the view will be rendered in the following way:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"<NavigationView\n  screenProps={screenProps}\n  navigation={navigation}\n  navigationConfig={navigationConfig}\n  descriptors={descriptors}\n/>\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"navigation")," prop is the same navigation prop that was passed into the navigator."),(0,i.kt)("p",null,"Both ",(0,i.kt)("inlineCode",{parentName:"p"},"navigationConfig")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"screenProps")," are simply passed through, as defined above."),(0,i.kt)("p",null,"Most information about child screens comes through the ",(0,i.kt)("inlineCode",{parentName:"p"},"descriptors")," prop. The descriptors is an object map of route keys to scene descriptors. There is one descriptor for each child route."),(0,i.kt)("h3",{id:"scene-descriptors"},"Scene Descriptors"),(0,i.kt)("p",null,"A scene descriptor has the following properties:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"getComponent"),", a function that returns the component for the screen"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"options"),", the flattened navigationOptions for the route"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"navigation"),", the child navigation prop, including actions and the route ",(0,i.kt)("inlineCode",{parentName:"li"},"state")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"state"),", the navigation state for the child screen (a shortcut for ",(0,i.kt)("inlineCode",{parentName:"li"},"navigation.state"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"key"),", the key of the route (a shortcut for ",(0,i.kt)("inlineCode",{parentName:"li"},"navigation.state.key"),")")),(0,i.kt)("h3",{id:"createnavigationcontainer"},(0,i.kt)("inlineCode",{parentName:"h3"},"createNavigationContainer")),(0,i.kt)("p",null,"If you want your navigator to be usable as a top-level component, (without a navigation prop being passed in), you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"createNavigationContainer"),". This utility will make your navigator act like a top-level navigator when the navigation prop is missing. It will manage the app state, and integrate with app-level nav features, like handling incoming and outgoing links, and Android back button behavior."))}g.isMDXComponent=!0}}]);