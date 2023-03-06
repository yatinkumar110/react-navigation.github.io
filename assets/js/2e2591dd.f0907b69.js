"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[1393],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return g}});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),s=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(l.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},f=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=s(t),f=i,g=p["".concat(l,".").concat(f)]||p[f]||d[f]||r;return t?a.createElement(g,o(o({ref:n},c),{},{components:t})):a.createElement(g,o({ref:n},c))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=f;var u={};for(var l in n)hasOwnProperty.call(n,l)&&(u[l]=n[l]);u.originalType=e,u[p]="string"==typeof e?e:i,o[1]=u;for(var s=2;s<r;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},85162:function(e,n,t){t.d(n,{Z:function(){return o}});var a=t(67294),i=t(86010),r={tabItem:"tabItem_Ymn6"};function o(e){var n=e.children,t=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(r.tabItem,o),hidden:t},n)}},74866:function(e,n,t){t.d(n,{Z:function(){return w}});var a=t(83117),i=t(67294),r=t(86010),o=t(12466),u=t(16550),l=t(91980),s=t(67392),c=t(50012);function p(e){return function(e){return i.Children.map(e,(function(e){if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}function d(e){var n=e.values,t=e.children;return(0,i.useMemo)((function(){var e=null!=n?n:p(t);return function(e){var n=(0,s.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function f(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function g(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId,r=(0,u.k6)(),o=function(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:t,groupId:a});return[(0,l._X)(o),(0,i.useCallback)((function(e){if(o){var n=new URLSearchParams(r.location.search);n.set(o,e),r.replace(Object.assign({},r.location,{search:n.toString()}))}}),[o,r])]}function v(e){var n,t,a,r,o=e.defaultValue,u=e.queryString,l=void 0!==u&&u,s=e.groupId,p=d(e),v=(0,i.useState)((function(){return function(e){var n,t=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var i=null!=(n=a.find((function(e){return e.default})))?n:a[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:o,tabValues:p})})),h=v[0],m=v[1],b=g({queryString:l,groupId:s}),k=b[0],y=b[1],w=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:s}.groupId),t=(0,c.Nk)(n),a=t[0],r=t[1],[a,(0,i.useCallback)((function(e){n&&r.set(e)}),[n,r])]),N=w[0],C=w[1],x=function(){var e=null!=k?k:N;return f({value:e,tabValues:p})?e:null}();return(0,i.useLayoutEffect)((function(){x&&m(x)}),[x]),{selectedValue:h,selectValue:(0,i.useCallback)((function(e){if(!f({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);m(e),y(e),C(e)}),[y,C,p]),tabValues:p}}var h=t(72389),m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){var n=e.className,t=e.block,u=e.selectedValue,l=e.selectValue,s=e.tabValues,c=[],p=(0,o.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var n=e.currentTarget,t=c.indexOf(n),a=s[t].value;a!==u&&(p(n),l(a))},f=function(e){var n,t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var a,i=c.indexOf(e.currentTarget)+1;t=null!=(a=c[i])?a:c[0];break;case"ArrowLeft":var r,o=c.indexOf(e.currentTarget)-1;t=null!=(r=c[o])?r:c[c.length-1]}null==(n=t)||n.focus()};return i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n)},s.map((function(e){var n=e.value,t=e.label,o=e.attributes;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:u===n?0:-1,"aria-selected":u===n,key:n,ref:function(e){return c.push(e)},onKeyDown:f,onClick:d},o,{className:(0,r.Z)("tabs__item",m.tabItem,null==o?void 0:o.className,{"tabs__item--active":u===n})}),null!=t?t:n)})))}function k(e){var n=e.lazy,t=e.children,a=e.selectedValue;if(t=Array.isArray(t)?t:[t],n){var r=t.find((function(e){return e.props.value===a}));return r?(0,i.cloneElement)(r,{className:"margin-top--md"}):null}return i.createElement("div",{className:"margin-top--md"},t.map((function(e,n){return(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==a})})))}function y(e){var n=v(e);return i.createElement("div",{className:(0,r.Z)("tabs-container",m.tabList)},i.createElement(b,(0,a.Z)({},e,n)),i.createElement(k,(0,a.Z)({},e,n)))}function w(e){var n=(0,h.Z)();return i.createElement(y,(0,a.Z)({key:String(n)},e))}},87216:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return p}});var a=t(83117),i=t(80102),r=(t(67294),t(3905)),o=(t(74866),t(85162),["components"]),u={id:"navigating-without-navigation-prop",title:"Navigating without the navigation prop",sidebar_label:"Navigating without the navigation prop"},l=void 0,s={unversionedId:"navigating-without-navigation-prop",id:"version-6.x/navigating-without-navigation-prop",title:"Navigating without the navigation prop",description:"Sometimes you need to trigger a navigation action from places where you do not have access to the navigation prop, such as a Redux middleware. For such cases, you can dispatch navigation actions use a ref on the navigation container.",source:"@site/versioned_docs/version-6.x/navigating-without-navigation-prop.md",sourceDirName:".",slug:"/navigating-without-navigation-prop",permalink:"/docs/navigating-without-navigation-prop",draft:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-6.x/navigating-without-navigation-prop.md",tags:[],version:"6.x",frontMatter:{id:"navigating-without-navigation-prop",title:"Navigating without the navigation prop",sidebar_label:"Navigating without the navigation prop"},sidebar:"version-6.x/docs",previous:{title:"Access the navigation prop from any component",permalink:"/docs/connecting-navigation-prop"},next:{title:"Deep linking",permalink:"/docs/deep-linking"}},c={},p=[{value:"Usage",id:"usage",level:2},{value:"Handling initialization",id:"handling-initialization",level:2}],d={toc:p},f="wrapper";function g(e){var n=e.components,t=(0,i.Z)(e,o);return(0,r.kt)(f,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Sometimes you need to trigger a navigation action from places where you do not have access to the ",(0,r.kt)("inlineCode",{parentName:"p"},"navigation")," prop, such as a Redux middleware. For such cases, you can dispatch navigation actions use a ",(0,r.kt)("a",{parentName:"p",href:"/docs/navigation-container#ref"},(0,r.kt)("inlineCode",{parentName:"a"},"ref")," on the navigation container"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Do not")," use the ",(0,r.kt)("inlineCode",{parentName:"p"},"ref")," if:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You need to navigate from inside a component without needing to pass the ",(0,r.kt)("inlineCode",{parentName:"li"},"navigation")," prop down, see ",(0,r.kt)("a",{parentName:"li",href:"/docs/use-navigation"},(0,r.kt)("inlineCode",{parentName:"a"},"useNavigation"))," instead. The ",(0,r.kt)("inlineCode",{parentName:"li"},"ref")," behaves differently, and many helper methods specific to screens aren't available."),(0,r.kt)("li",{parentName:"ul"},"You need to handle deep links or universal links. Doing this with the ",(0,r.kt)("inlineCode",{parentName:"li"},"ref")," has many edge cases. See ",(0,r.kt)("a",{parentName:"li",href:"/docs/configuring-links"},"configuring links")," for more information on handling deep linking."),(0,r.kt)("li",{parentName:"ul"},"You need to integrate with third party libraries, such as push notifications, branch etc. See ",(0,r.kt)("a",{parentName:"li",href:"/docs/deep-linking#third-party-integrations"},"third party integrations for deep linking")," instead.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Do")," use the ",(0,r.kt)("inlineCode",{parentName:"p"},"ref")," if:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You use a state management library such as Redux, where you need to dispatch navigation actions from a middleware.")),(0,r.kt)("p",null,"Note that it's usually better to trigger navigation from user actions such as button presses, rather than from a Redux middleware. Navigating on user action makes the app feel more responsive and provides better UX. So consider this before using the ",(0,r.kt)("inlineCode",{parentName:"p"},"ref")," for navigation. The ",(0,r.kt)("inlineCode",{parentName:"p"},"ref")," is an escape hatch for scenarios that can't be handled with the existing APIs and should only be used in rare situations."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"You can get access to the root navigation object through a ",(0,r.kt)("inlineCode",{parentName:"p"},"ref")," and pass it to the ",(0,r.kt)("inlineCode",{parentName:"p"},"RootNavigation")," which we will later use to navigate."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// App.js\n\nimport { NavigationContainer } from '@react-navigation/native';\nimport { navigationRef } from './RootNavigation';\n\nexport default function App() {\n  return (\n    <NavigationContainer ref={navigationRef}>{/* ... */}</NavigationContainer>\n  );\n}\n")),(0,r.kt)("p",null,"In the next step, we define ",(0,r.kt)("inlineCode",{parentName:"p"},"RootNavigation"),", which is a simple module with functions that dispatch user-defined navigation actions."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// RootNavigation.js\n\nimport { createNavigationContainerRef } from '@react-navigation/native';\n\nexport const navigationRef = createNavigationContainerRef()\n\nexport function navigate(name, params) {\n  if (navigationRef.isReady()) {\n    navigationRef.navigate(name, params);\n  }\n}\n\n// add other navigation functions that you need and export them\n")),(0,r.kt)("p",null,"Then, in any of your javascript modules, import the ",(0,r.kt)("inlineCode",{parentName:"p"},"RootNavigation")," and call functions which you exported from it. You may use this approach outside of your React components and, in fact, it works as well when used from within them."),(0,r.kt)("samp",{id:"no-nav-prop"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// any js module\nimport * as RootNavigation from './path/to/RootNavigation.js';\n\n// ...\n\nRootNavigation.navigate('ChatScreen', { userName: 'Lucy' });\n")),(0,r.kt)("p",null,"Apart from ",(0,r.kt)("inlineCode",{parentName:"p"},"navigate"),", you can add other navigation actions:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { StackActions } from '@react-navigation/native';\n\n// ...\n\nexport function push(...args) {\n  if (navigationRef.isReady()) {\n    navigationRef.dispatch(StackActions.push(...args));\n  }\n}\n")),(0,r.kt)("p",null,"Note that a stack navigators needs to be rendered to handle this action. You may want to check the ",(0,r.kt)("a",{parentName:"p",href:"/docs/nesting-navigators#navigating-to-a-screen-in-a-nested-navigator"},"docs for nesting")," for more details."),(0,r.kt)("p",null,"When writing tests, you may mock the navigation functions, and make assertions on whether the correct functions are called with the correct parameters."),(0,r.kt)("h2",{id:"handling-initialization"},"Handling initialization"),(0,r.kt)("p",null,"When using this pattern, you need to keep few things in mind to avoid navigation from failing in your app."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"ref")," is set only after the navigation container renders, this can be async when handling deep links"),(0,r.kt)("li",{parentName:"ul"},"A navigator needs to be rendered to be able to handle actions, the ",(0,r.kt)("inlineCode",{parentName:"li"},"ref")," won't be ready without a navigator")),(0,r.kt)("p",null,"If you try to navigate without rendering a navigator or before the navigator finishes mounting, it will print an error and do nothing. So you'll need to add an additional check to decide what to do until your app mounts."),(0,r.kt)("p",null,"For an example, consider the following scenario, you have a screen somewhere in the app, and that screen dispatches a redux action on ",(0,r.kt)("inlineCode",{parentName:"p"},"useEffect"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"componentDidMount"),". You are listening for this action in your middleware and try to perform navigation when you get it. This will throw an error, because by this time, the parent navigator hasn't finished mounting and isn't ready. Parent's ",(0,r.kt)("inlineCode",{parentName:"p"},"useEffect"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"componentDidMount")," is always called ",(0,r.kt)("strong",{parentName:"p"},"after")," child's ",(0,r.kt)("inlineCode",{parentName:"p"},"useEffect"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"componentDidMount"),"."),(0,r.kt)("p",null,"To avoid this, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"isReady()")," method available on the ref as shown in the above examples."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// RootNavigation.js\n\nimport * as React from 'react';\n\nexport const navigationRef = createNavigationContainerRef()\n\nexport function navigate(name, params) {\n  if (navigationRef.isReady()) {\n    // Perform navigation if the react navigation is ready to handle actions\n    navigationRef.navigate(name, params);\n  } else {\n    // You can decide what to do if react navigation is not ready\n    // You can ignore this, or add these actions to a queue you can call later\n  }\n}\n")),(0,r.kt)("p",null,"If you're unsure if a navigator is rendered, you can call ",(0,r.kt)("inlineCode",{parentName:"p"},"navigationRef.current.getRootState()"),", and it'll return a valid state object if any navigators are rendered, otherwise it will return ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined"),"."))}g.isMDXComponent=!0}}]);