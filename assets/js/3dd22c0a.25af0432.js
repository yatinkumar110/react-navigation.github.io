"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[2409],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return v}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),f=l(n),d=a,v=f["".concat(c,".").concat(d)]||f[d]||p[d]||o;return n?r.createElement(v,i(i({ref:t},s),{},{components:n})):r.createElement(v,i({ref:t},s))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u[f]="string"==typeof e?e:a,i[1]=u;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(67294),a=n(86010),o={tabItem:"tabItem_Ymn6"};function i(e){var t=e.children,n=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,i),hidden:n},t)}},74866:function(e,t,n){n.d(t,{Z:function(){return w}});var r=n(83117),a=n(67294),o=n(86010),i=n(12466),u=n(16550),c=n(91980),l=n(67392),s=n(50012);function f(e){return function(e){return a.Children.map(e,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function p(e){var t=e.values,n=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:f(n);return function(e){var t=(0,l.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function d(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function v(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId,o=(0,u.k6)(),i=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:r});return[(0,c._X)(i),(0,a.useCallback)((function(e){if(i){var t=new URLSearchParams(o.location.search);t.set(i,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[i,o])]}function m(e){var t,n,r,o,i=e.defaultValue,u=e.queryString,c=void 0!==u&&u,l=e.groupId,f=p(e),m=(0,a.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!d({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:i,tabValues:f})})),g=m[0],b=m[1],h=v({queryString:c,groupId:l}),y=h[0],k=h[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:l}.groupId),n=(0,s.Nk)(t),r=n[0],o=n[1],[r,(0,a.useCallback)((function(e){t&&o.set(e)}),[t,o])]),S=w[0],N=w[1],E=function(){var e=null!=y?y:S;return d({value:e,tabValues:f})?e:null}();return(0,a.useLayoutEffect)((function(){E&&b(E)}),[E]),{selectedValue:g,selectValue:(0,a.useCallback)((function(e){if(!d({value:e,tabValues:f}))throw new Error("Can't select invalid tab value="+e);b(e),k(e),N(e)}),[k,N,f]),tabValues:f}}var g=n(72389),b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){var t=e.className,n=e.block,u=e.selectedValue,c=e.selectValue,l=e.tabValues,s=[],f=(0,i.o5)().blockElementScrollPositionUntilNextRender,p=function(e){var t=e.currentTarget,n=s.indexOf(t),r=l[n].value;r!==u&&(f(t),c(r))},d=function(e){var t,n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":var r,a=s.indexOf(e.currentTarget)+1;n=null!=(r=s[a])?r:s[0];break;case"ArrowLeft":var o,i=s.indexOf(e.currentTarget)-1;n=null!=(o=s[i])?o:s[s.length-1]}null==(t=n)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},l.map((function(e){var t=e.value,n=e.label,i=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:function(e){return s.push(e)},onKeyDown:d,onClick:p},i,{className:(0,o.Z)("tabs__item",b.tabItem,null==i?void 0:i.className,{"tabs__item--active":u===t})}),null!=n?n:t)})))}function y(e){var t=e.lazy,n=e.children,r=e.selectedValue;if(n=Array.isArray(n)?n:[n],t){var o=n.find((function(e){return e.props.value===r}));return o?(0,a.cloneElement)(o,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},n.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})})))}function k(e){var t=m(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",b.tabList)},a.createElement(h,(0,r.Z)({},e,t)),a.createElement(y,(0,r.Z)({},e,t)))}function w(e){var t=(0,g.Z)();return a.createElement(k,(0,r.Z)({key:String(t)},e))}},26351:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return v},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return f}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),i=(n(74866),n(85162),["components"]),u={id:"screen-tracking",title:"Screen tracking for analytics",sidebar_label:"Screen tracking for analytics"},c=void 0,l={unversionedId:"screen-tracking",id:"version-3.x/screen-tracking",title:"Screen tracking for analytics",description:"This example shows how to do screen tracking and send to Google Analytics. The approach can be adapted to any other analytics SDK.",source:"@site/versioned_docs/version-3.x/screen-tracking.md",sourceDirName:".",slug:"/screen-tracking",permalink:"/docs/3.x/screen-tracking",draft:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-3.x/screen-tracking.md",tags:[],version:"3.x",frontMatter:{id:"screen-tracking",title:"Screen tracking for analytics",sidebar_label:"Screen tracking for analytics"},sidebar:"version-3.x-docs",previous:{title:"Deep linking",permalink:"/docs/3.x/deep-linking"},next:{title:"Themes",permalink:"/docs/3.x/themes"}},s={},f=[{value:"Listening to State Changes",id:"listening-to-state-changes",level:2}],p={toc:f},d="wrapper";function v(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This example shows how to do screen tracking and send to Google Analytics. The approach can be adapted to any other analytics SDK. "),(0,o.kt)("h2",{id:"listening-to-state-changes"},"Listening to State Changes"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { createAppContainer, createStackNavigator } from 'react-navigation';\nimport analytics from '@react-native-firebase/analytics';\n\n// gets the current screen from navigation state\nfunction getActiveRouteName(navigationState) {\n  if (!navigationState) {\n    return null;\n  }\n  const route = navigationState.routes[navigationState.index];\n  // dive into nested navigators\n  if (route.routes) {\n    return getActiveRouteName(route);\n  }\n  return route.routeName;\n}\n\nconst AppNavigator = createStackNavigator(AppRouteConfigs);\nconst AppContainer = createAppContainer(AppNavigator);\n\nexport default () => (\n  <AppContainer\n    onNavigationStateChange={(prevState, currentState, action) => {\n      const currentRouteName = getActiveRouteName(currentState);\n      const previousRouteName = getActiveRouteName(prevState);\n\n      if (previousRouteName !== currentRouteName) {\n        // The line below uses the @react-native-firebase/analytics tracker\n        // change the tracker here to use other Mobile analytics SDK.\n        analytics().setCurrentScreen(currentRouteName, currentRouteName);\n      }\n    }}\n  />\n);\n")))}v.isMDXComponent=!0}}]);