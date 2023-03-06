"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[50116],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},f="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),f=s(r),p=a,m=f["".concat(l,".").concat(p)]||f[p]||d[p]||o;return r?n.createElement(m,u(u({ref:t},c),{},{components:r})):n.createElement(m,u({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,u=new Array(o);u[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[f]="string"==typeof e?e:a,u[1]=i;for(var s=2;s<o;s++)u[s]=r[s];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},85162:function(e,t,r){r.d(t,{Z:function(){return u}});var n=r(67294),a=r(86010),o={tabItem:"tabItem_Ymn6"};function u(e){var t=e.children,r=e.hidden,u=e.className;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,u),hidden:r},t)}},74866:function(e,t,r){r.d(t,{Z:function(){return k}});var n=r(83117),a=r(67294),o=r(86010),u=r(12466),i=r(16550),l=r(91980),s=r(67392),c=r(50012);function f(e){return function(e){return a.Children.map(e,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function d(e){var t=e.values,r=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:f(r);return function(e){var t=(0,s.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,r])}function p(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function m(e){var t=e.queryString,r=void 0!==t&&t,n=e.groupId,o=(0,i.k6)(),u=function(e){var t=e.queryString,r=void 0!==t&&t,n=e.groupId;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:r,groupId:n});return[(0,l._X)(u),(0,a.useCallback)((function(e){if(u){var t=new URLSearchParams(o.location.search);t.set(u,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[u,o])]}function v(e){var t,r,n,o,u=e.defaultValue,i=e.queryString,l=void 0!==i&&i,s=e.groupId,f=d(e),v=(0,a.useState)((function(){return function(e){var t,r=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}var a=null!=(t=n.find((function(e){return e.default})))?t:n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:u,tabValues:f})})),b=v[0],h=v[1],y=m({queryString:l,groupId:s}),g=y[0],w=y[1],k=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:s}.groupId),r=(0,c.Nk)(t),n=r[0],o=r[1],[n,(0,a.useCallback)((function(e){t&&o.set(e)}),[t,o])]),x=k[0],N=k[1],E=function(){var e=null!=g?g:x;return p({value:e,tabValues:f})?e:null}();return(0,a.useLayoutEffect)((function(){E&&h(E)}),[E]),{selectedValue:b,selectValue:(0,a.useCallback)((function(e){if(!p({value:e,tabValues:f}))throw new Error("Can't select invalid tab value="+e);h(e),w(e),N(e)}),[w,N,f]),tabValues:f}}var b=r(72389),h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){var t=e.className,r=e.block,i=e.selectedValue,l=e.selectValue,s=e.tabValues,c=[],f=(0,u.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,r=c.indexOf(t),n=s[r].value;n!==i&&(f(t),l(n))},p=function(e){var t,r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var n,a=c.indexOf(e.currentTarget)+1;r=null!=(n=c[a])?n:c[0];break;case"ArrowLeft":var o,u=c.indexOf(e.currentTarget)-1;r=null!=(o=c[u])?o:c[c.length-1]}null==(t=r)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},s.map((function(e){var t=e.value,r=e.label,u=e.attributes;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:function(e){return c.push(e)},onKeyDown:p,onClick:d},u,{className:(0,o.Z)("tabs__item",h.tabItem,null==u?void 0:u.className,{"tabs__item--active":i===t})}),null!=r?r:t)})))}function g(e){var t=e.lazy,r=e.children,n=e.selectedValue;if(r=Array.isArray(r)?r:[r],t){var o=r.find((function(e){return e.props.value===n}));return o?(0,a.cloneElement)(o,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n})})))}function w(e){var t=v(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",h.tabList)},a.createElement(y,(0,n.Z)({},e,t)),a.createElement(g,(0,n.Z)({},e,t)))}function k(e){var t=(0,b.Z)();return a.createElement(w,(0,n.Z)({key:String(t)},e))}},46405:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return f}});var n=r(83117),a=r(80102),o=(r(67294),r(3905)),u=(r(74866),r(85162),["components"]),i={id:"next-steps",title:"Next steps",sidebar_label:"Next steps"},l=void 0,s={unversionedId:"next-steps",id:"version-1.x/next-steps",title:"Next steps",description:"You are now familiar with how to create a StackNavigator, configure it on your screen components, navigate between routes, and display full-screen modals. StackNavigator and its related APIs will be the most frequently used tools in your React Navigation toolbelt, but there are problems that they don't solve. For example, you can't build tab-based navigation using a StackNavigator &mdash; for that, you need to use a TabNavigator.",source:"@site/versioned_docs/version-1.x/next-steps.md",sourceDirName:".",slug:"/next-steps",permalink:"/docs/1.x/next-steps",draft:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-1.x/next-steps.md",tags:[],version:"1.x",frontMatter:{id:"next-steps",title:"Next steps",sidebar_label:"Next steps"},sidebar:"version-1.x/docs",previous:{title:"Opening a full-screen modal",permalink:"/docs/1.x/modal"},next:{title:"Glossary of terms",permalink:"/docs/1.x/glossary-of-terms"}},c={},f=[],d={toc:f},p="wrapper";function m(e){var t=e.components,r=(0,a.Z)(e,u);return(0,o.kt)(p,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You are now familiar with how to create a ",(0,o.kt)("inlineCode",{parentName:"p"},"StackNavigator"),", configure it on your screen components, navigate between routes, and display full-screen modals. ",(0,o.kt)("inlineCode",{parentName:"p"},"StackNavigator")," and its related APIs will be the most frequently used tools in your React Navigation toolbelt, but there are problems that they don't solve. For example, you can't build tab-based navigation using a ",(0,o.kt)("inlineCode",{parentName:"p"},"StackNavigator")," ","\u2014"," for that, you need to use a ",(0,o.kt)("a",{parentName:"p",href:"/docs/1.x/tab-based-navigation"},"TabNavigator"),"."),(0,o.kt)("p",null,'The rest of the documentation is organized around specific use cases, so you can jump between the sections under "How do I do ...?" as the need arises (but it also wouldn\'t hurt you to familiarize yourself with them pre-emptively!).'),(0,o.kt)("p",null,"While most users won't need to do this, if you are curious and want to learn more about how React Navigation works, it's recommended to work through the \"Build your own Navigator\" section."),(0,o.kt)("p",null,"Lastly, you might want to bookmark the ",(0,o.kt)("a",{parentName:"p",href:"/docs/1.x/api-reference"},"API reference")," page for future reference."),(0,o.kt)("p",null,"Good luck!"))}m.isMDXComponent=!0}}]);