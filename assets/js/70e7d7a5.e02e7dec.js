"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[99321],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},v=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),v=r,m=p["".concat(s,".").concat(v)]||p[v]||d[v]||i;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=v;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}v.displayName="MDXCreateElement"},85162:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(67294),r=n(86010),i={tabItem:"tabItem_Ymn6"};function o(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,o),hidden:n},t)}},74866:function(e,t,n){n.d(t,{Z:function(){return w}});var a=n(83117),r=n(67294),i=n(86010),o=n(12466),l=n(16550),s=n(91980),u=n(67392),c=n(50012);function p(e){return function(e){return r.Children.map(e,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function d(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:p(n);return function(e){var t=(0,u.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function v(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function m(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,i=(0,l.k6)(),o=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:a});return[(0,s._X)(o),(0,r.useCallback)((function(e){if(o){var t=new URLSearchParams(i.location.search);t.set(o,e),i.replace(Object.assign({},i.location,{search:t.toString()}))}}),[o,i])]}function b(e){var t,n,a,i,o=e.defaultValue,l=e.queryString,s=void 0!==l&&l,u=e.groupId,p=d(e),b=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!v({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:o,tabValues:p})})),h=b[0],f=b[1],g=m({queryString:s,groupId:u}),k=g[0],y=g[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),n=(0,c.Nk)(t),a=n[0],i=n[1],[a,(0,r.useCallback)((function(e){t&&i.set(e)}),[t,i])]),N=w[0],E=w[1],O=function(){var e=null!=k?k:N;return v({value:e,tabValues:p})?e:null}();return(0,r.useLayoutEffect)((function(){O&&f(O)}),[O]),{selectedValue:h,selectValue:(0,r.useCallback)((function(e){if(!v({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);f(e),y(e),E(e)}),[y,E,p]),tabValues:p}}var h=n(72389),f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){var t=e.className,n=e.block,l=e.selectedValue,s=e.selectValue,u=e.tabValues,c=[],p=(0,o.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==l&&(p(t),s(a))},v=function(e){var t,n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var a,r=c.indexOf(e.currentTarget)+1;n=null!=(a=c[r])?a:c[0];break;case"ArrowLeft":var i,o=c.indexOf(e.currentTarget)-1;n=null!=(i=c[o])?i:c[c.length-1]}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},u.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:function(e){return c.push(e)},onKeyDown:v,onClick:d},o,{className:(0,i.Z)("tabs__item",f.tabItem,null==o?void 0:o.className,{"tabs__item--active":l===t})}),null!=n?n:t)})))}function k(e){var t=e.lazy,n=e.children,a=e.selectedValue;if(n=Array.isArray(n)?n:[n],t){var i=n.find((function(e){return e.props.value===a}));return i?(0,r.cloneElement)(i,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})})))}function y(e){var t=b(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",f.tabList)},r.createElement(g,(0,a.Z)({},e,t)),r.createElement(k,(0,a.Z)({},e,t)))}function w(e){var t=(0,h.Z)();return r.createElement(y,(0,a.Z)({key:String(t)},e))}},45604:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),o=(n(74866),n(85162),["components"]),l={id:"community-libraries-and-navigators",title:"Community-developed Navigators and Libraries",sidebar_label:"Community Navigators and Libraries"},s=void 0,u={unversionedId:"community-libraries-and-navigators",id:"version-7.x/community-libraries-and-navigators",title:"Community-developed Navigators and Libraries",description:"Libraries listed in this guide may not have been updated to work with the latest version of React Navigation. Please refer to the library's documentation to see which version of React Navigation it supports.",source:"@site/versioned_docs/version-7.x/community-libraries-and-navigators.md",sourceDirName:".",slug:"/community-libraries-and-navigators",permalink:"/docs/7.x/community-libraries-and-navigators",draft:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-7.x/community-libraries-and-navigators.md",tags:[],version:"7.x",frontMatter:{id:"community-libraries-and-navigators",title:"Community-developed Navigators and Libraries",sidebar_label:"Community Navigators and Libraries"},sidebar:"version-7.x/docs",previous:{title:"Migration Guides",permalink:"/docs/7.x/migration-guides"},next:{title:"More Resources",permalink:"/docs/7.x/more-resources"}},c={},p=[{value:"Fluid Transitions",id:"fluid-transitions",level:2},{value:"Links",id:"links",level:4},{value:"react-navigation-collapsible",id:"react-navigation-collapsible",level:2},{value:"Links",id:"links-1",level:4},{value:"react-native-screens",id:"react-native-screens",level:2},{value:"Links",id:"links-2",level:4},{value:"react-navigation-header-buttons",id:"react-navigation-header-buttons",level:2},{value:"Links",id:"links-3",level:4},{value:"react-navigation-props-mapper",id:"react-navigation-props-mapper",level:2},{value:"Links",id:"links-4",level:4},{value:"react-navigation-backhandler",id:"react-navigation-backhandler",level:2},{value:"Links",id:"links-5",level:4}],d={toc:p},v="wrapper";function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)(v,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Libraries listed in this guide may not have been updated to work with the latest version of React Navigation. Please refer to the library's documentation to see which version of React Navigation it supports.")),(0,i.kt)("h1",{id:"navigators"},"Navigators"),(0,i.kt)("h2",{id:"fluid-transitions"},"Fluid Transitions"),(0,i.kt)("p",null,"Fluid Transitions is a library that provides Shared Element Transitions during navigation between screens using react-navigation."),(0,i.kt)("p",null,"A Shared Element Transition is the visualization of an element in one screen being transformed into a corresponding element in another screen during the navigation transition."),(0,i.kt)("p",null,"The library implements a custom navigator called ",(0,i.kt)("inlineCode",{parentName:"p"},"FluidNavigator")," that makes all this and more possible."),(0,i.kt)("h4",{id:"links"},"Links"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/fram-x/FluidTransitions"},"github.com/fram-x/FluidTransitions")),(0,i.kt)("h1",{id:"libraries"},"Libraries"),(0,i.kt)("h2",{id:"react-navigation-collapsible"},"react-navigation-collapsible"),(0,i.kt)("p",null,"react-navigation-collapsible is a library and a ",(0,i.kt)("inlineCode",{parentName:"p"},"Higher Order Component")," that adjusts your screen options and makes your screen header collapsible."),(0,i.kt)("p",null,"Since react-navigation's header is designed as ",(0,i.kt)("inlineCode",{parentName:"p"},"Animated")," component, you can animate the header by passing ",(0,i.kt)("inlineCode",{parentName:"p"},"Animated.Value")," from your ",(0,i.kt)("inlineCode",{parentName:"p"},"ScrollView")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"FlatList")," to the header."),(0,i.kt)("h4",{id:"links-1"},"Links"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/benevbright/react-navigation-collapsible"},"github.com/benevbright/react-navigation-collapsible")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://snack.expo.io/@benevbright/react-navigation-collapsible"},"Demo on Snack")),(0,i.kt)("h2",{id:"react-native-screens"},"react-native-screens"),(0,i.kt)("p",null,"This project aims to expose native navigation container components to React Native and React Navigation can integrate with it since version 2.14.0. Using ",(0,i.kt)("inlineCode",{parentName:"p"},"react-native-screens")," brings several benefits, such as support for the ",(0,i.kt)("a",{parentName:"p",href:"https://www.cnet.com/how-to/how-to-use-reachability-on-iphone-6-6-plus/"},'"reachability feature"')," on iOS, and improved memory consumption on both platforms."),(0,i.kt)("h4",{id:"links-2"},"Links"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/software-mansion/react-native-screens"},"github.com/software-mansion/react-native-screens")),(0,i.kt)("h2",{id:"react-navigation-header-buttons"},"react-navigation-header-buttons"),(0,i.kt)("p",null,"Helps you to render buttons in the navigation bar and handle the styling so you don't have to. It tries to mimic the appearance of native navbar buttons and attempts to offer a simple interface for you to interact with."),(0,i.kt)("h4",{id:"links-3"},"Links"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/vonovak/react-navigation-header-buttons"},"github.com/vonovak/react-navigation-header-buttons")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://expo.io/@vonovak/navbar-buttons-demo"},"Demo on expo")),(0,i.kt)("h2",{id:"react-navigation-props-mapper"},"react-navigation-props-mapper"),(0,i.kt)("p",null,"Provides simple HOCs that map react-navigation props to your screen components directly - ie. instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"const user = this.props.route.params.activeUser"),", you'd write ",(0,i.kt)("inlineCode",{parentName:"p"},"const user = this.props.activeUser"),"."),(0,i.kt)("h4",{id:"links-4"},"Links"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/vonovak/react-navigation-props-mapper"},"github.com/vonovak/react-navigation-props-mapper")),(0,i.kt)("h2",{id:"react-navigation-backhandler"},"react-navigation-backhandler"),(0,i.kt)("p",null,"Easily handle Android back button behavior with React-Navigation with a component based API."),(0,i.kt)("h4",{id:"links-5"},"Links"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/vonovak/react-navigation-backhandler"},"github.com/vonovak/react-navigation-backhandler")))}m.isMDXComponent=!0}}]);