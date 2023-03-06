"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[89619],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},v="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),v=l(n),f=r,d=v["".concat(s,".").concat(f)]||v[f]||p[f]||i;return n?a.createElement(d,o(o({ref:t},c),{},{components:n})):a.createElement(d,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=f;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u[v]="string"==typeof e?e:r,o[1]=u;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},85162:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(67294),r=n(86010),i={tabItem:"tabItem_Ymn6"};function o(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,o),hidden:n},t)}},74866:function(e,t,n){n.d(t,{Z:function(){return y}});var a=n(83117),r=n(67294),i=n(86010),o=n(12466),u=n(16550),s=n(91980),l=n(67392),c=n(50012);function v(e){return function(e){return r.Children.map(e,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function p(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:v(n);return function(e){var t=(0,l.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function f(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function d(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,i=(0,u.k6)(),o=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:a});return[(0,s._X)(o),(0,r.useCallback)((function(e){if(o){var t=new URLSearchParams(i.location.search);t.set(o,e),i.replace(Object.assign({},i.location,{search:t.toString()}))}}),[o,i])]}function m(e){var t,n,a,i,o=e.defaultValue,u=e.queryString,s=void 0!==u&&u,l=e.groupId,v=p(e),m=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:o,tabValues:v})})),b=m[0],h=m[1],g=d({queryString:s,groupId:l}),w=g[0],k=g[1],y=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:l}.groupId),n=(0,c.Nk)(t),a=n[0],i=n[1],[a,(0,r.useCallback)((function(e){t&&i.set(e)}),[t,i])]),N=y[0],x=y[1],E=function(){var e=null!=w?w:N;return f({value:e,tabValues:v})?e:null}();return(0,r.useLayoutEffect)((function(){E&&h(E)}),[E]),{selectedValue:b,selectValue:(0,r.useCallback)((function(e){if(!f({value:e,tabValues:v}))throw new Error("Can't select invalid tab value="+e);h(e),k(e),x(e)}),[k,x,v]),tabValues:v}}var b=n(72389),h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){var t=e.className,n=e.block,u=e.selectedValue,s=e.selectValue,l=e.tabValues,c=[],v=(0,o.o5)().blockElementScrollPositionUntilNextRender,p=function(e){var t=e.currentTarget,n=c.indexOf(t),a=l[n].value;a!==u&&(v(t),s(a))},f=function(e){var t,n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":var a,r=c.indexOf(e.currentTarget)+1;n=null!=(a=c[r])?a:c[0];break;case"ArrowLeft":var i,o=c.indexOf(e.currentTarget)-1;n=null!=(i=c[o])?i:c[c.length-1]}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},l.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:function(e){return c.push(e)},onKeyDown:f,onClick:p},o,{className:(0,i.Z)("tabs__item",h.tabItem,null==o?void 0:o.className,{"tabs__item--active":u===t})}),null!=n?n:t)})))}function w(e){var t=e.lazy,n=e.children,a=e.selectedValue;if(n=Array.isArray(n)?n:[n],t){var i=n.find((function(e){return e.props.value===a}));return i?(0,r.cloneElement)(i,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})})))}function k(e){var t=m(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",h.tabList)},r.createElement(g,(0,a.Z)({},e,t)),r.createElement(w,(0,a.Z)({},e,t)))}function y(e){var t=(0,b.Z)();return r.createElement(k,(0,a.Z)({key:String(t)},e))}},67036:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return v}});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),o=(n(74866),n(85162),["components"]),u={id:"navigation-views",title:"Navigation views",sidebar_label:"Navigation views"},s=void 0,l={unversionedId:"navigation-views",id:"version-3.x/navigation-views",title:"Navigation views",description:"Navigation views are presentation components that take a router and a navigation prop, and can display several screens, as specified by the navigation.state.",source:"@site/versioned_docs/version-3.x/navigation-views.md",sourceDirName:".",slug:"/navigation-views",permalink:"/docs/3.x/navigation-views",draft:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-3.x/navigation-views.md",tags:[],version:"3.x",frontMatter:{id:"navigation-views",title:"Navigation views",sidebar_label:"Navigation views"},sidebar:"version-3.x-docs",previous:{title:"Custom routers",permalink:"/docs/3.x/custom-routers"},next:{title:"Transitioner",permalink:"/docs/3.x/transitioner"}},c={},v=[{value:"Built in Views",id:"built-in-views",level:2},{value:"Transitioner",id:"transitioner",level:2}],p={toc:v},f="wrapper";function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)(f,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Navigation views are presentation components that take a ",(0,i.kt)("a",{parentName:"p",href:"/docs/3.x/routers"},(0,i.kt)("inlineCode",{parentName:"a"},"router"))," and a ",(0,i.kt)("a",{parentName:"p",href:"/docs/3.x/navigation-prop"},(0,i.kt)("inlineCode",{parentName:"a"},"navigation"))," prop, and can display several screens, as specified by the ",(0,i.kt)("inlineCode",{parentName:"p"},"navigation.state"),"."),(0,i.kt)("p",null,"Navigation views are controlled React components that can present the current navigation state. They manage switching of screens, animations and gestures. They also present persistent navigation views such as tab bars and headers."),(0,i.kt)("h2",{id:"built-in-views"},"Built in Views"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/react-navigation/stack/blob/1.0/src/views/StackView/StackView.tsx"},"StackView")," - Present a stack that looks suitable on any platform",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/react-navigation/stack/blob/1.0/src/views/StackView/StackViewCard.tsx"},"StackViewCard")," - Present one card from the card stack, with gestures"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/react-navigation/stack/blob/1.0/src/views/Header/Header.tsx"},"Header")," - The header view for the card stack"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/react-navigation/core/blob/ad6e5cecccb8bce081f773fdff7af000e0450746/src/views/SwitchView/SwitchView.js"},"SwitchView")," - A navigator that only ever show one screen at a time, useful for authentication flows."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/react-navigation/tabs"},"Tabs")," - A configurable tab switcher / pager"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/react-navigation/drawer"},"Drawer")," - A view with a drawer that slides from the left")),(0,i.kt)("h2",{id:"transitioner"},(0,i.kt)("a",{parentName:"h2",href:"/docs/3.x/transitioner"},"Transitioner")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Transitioner")," manages the animations during the transition and can be used to build fully custom navigation views. It is used inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"StackView")," view. ",(0,i.kt)("a",{parentName:"p",href:"/docs/3.x/transitioner"},"Learn more about Transitioner here.")))}d.isMDXComponent=!0}}]);