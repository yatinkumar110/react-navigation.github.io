"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[85476],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},f="mdxType",v={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),f=c(r),p=a,d=f["".concat(l,".").concat(p)]||f[p]||v[p]||i;return r?n.createElement(d,o(o({ref:t},s),{},{components:r})):n.createElement(d,o({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=p;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u[f]="string"==typeof e?e:a,o[1]=u;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},85162:function(e,t,r){r.d(t,{Z:function(){return o}});var n=r(67294),a=r(86010),i={tabItem:"tabItem_Ymn6"};function o(e){var t=e.children,r=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(i.tabItem,o),hidden:r},t)}},74866:function(e,t,r){r.d(t,{Z:function(){return k}});var n=r(83117),a=r(67294),i=r(86010),o=r(12466),u=r(16550),l=r(91980),c=r(67392),s=r(50012);function f(e){return function(e){return a.Children.map(e,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function v(e){var t=e.values,r=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:f(r);return function(e){var t=(0,c.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,r])}function p(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function d(e){var t=e.queryString,r=void 0!==t&&t,n=e.groupId,i=(0,u.k6)(),o=function(e){var t=e.queryString,r=void 0!==t&&t,n=e.groupId;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:r,groupId:n});return[(0,l._X)(o),(0,a.useCallback)((function(e){if(o){var t=new URLSearchParams(i.location.search);t.set(o,e),i.replace(Object.assign({},i.location,{search:t.toString()}))}}),[o,i])]}function b(e){var t,r,n,i,o=e.defaultValue,u=e.queryString,l=void 0!==u&&u,c=e.groupId,f=v(e),b=(0,a.useState)((function(){return function(e){var t,r=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}var a=null!=(t=n.find((function(e){return e.default})))?t:n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:o,tabValues:f})})),m=b[0],h=b[1],g=d({queryString:l,groupId:c}),y=g[0],w=g[1],k=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:c}.groupId),r=(0,s.Nk)(t),n=r[0],i=r[1],[n,(0,a.useCallback)((function(e){t&&i.set(e)}),[t,i])]),x=k[0],E=k[1],O=function(){var e=null!=y?y:x;return p({value:e,tabValues:f})?e:null}();return(0,a.useLayoutEffect)((function(){O&&h(O)}),[O]),{selectedValue:m,selectValue:(0,a.useCallback)((function(e){if(!p({value:e,tabValues:f}))throw new Error("Can't select invalid tab value="+e);h(e),w(e),E(e)}),[w,E,f]),tabValues:f}}var m=r(72389),h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){var t=e.className,r=e.block,u=e.selectedValue,l=e.selectValue,c=e.tabValues,s=[],f=(0,o.o5)().blockElementScrollPositionUntilNextRender,v=function(e){var t=e.currentTarget,r=s.indexOf(t),n=c[r].value;n!==u&&(f(t),l(n))},p=function(e){var t,r=null;switch(e.key){case"Enter":v(e);break;case"ArrowRight":var n,a=s.indexOf(e.currentTarget)+1;r=null!=(n=s[a])?n:s[0];break;case"ArrowLeft":var i,o=s.indexOf(e.currentTarget)-1;r=null!=(i=s[o])?i:s[s.length-1]}null==(t=r)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},t)},c.map((function(e){var t=e.value,r=e.label,o=e.attributes;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:function(e){return s.push(e)},onKeyDown:p,onClick:v},o,{className:(0,i.Z)("tabs__item",h.tabItem,null==o?void 0:o.className,{"tabs__item--active":u===t})}),null!=r?r:t)})))}function y(e){var t=e.lazy,r=e.children,n=e.selectedValue;if(r=Array.isArray(r)?r:[r],t){var i=r.find((function(e){return e.props.value===n}));return i?(0,a.cloneElement)(i,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n})})))}function w(e){var t=b(e);return a.createElement("div",{className:(0,i.Z)("tabs-container",h.tabList)},a.createElement(g,(0,n.Z)({},e,t)),a.createElement(y,(0,n.Z)({},e,t)))}function k(e){var t=(0,m.Z)();return a.createElement(w,(0,n.Z)({key:String(t)},e))}},70370:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return f}});var n=r(83117),a=r(80102),i=(r(67294),r(3905)),o=(r(74866),r(85162),["components"]),u={id:"alternatives",title:"Alternative libraries",sidebar_label:"Alternative libraries"},l=void 0,c={unversionedId:"alternatives",id:"version-2.x/alternatives",title:"Alternative libraries",description:"React Navigation isn't your only option for routing and navigation in React Native. If the pitch & anti-pitch or the API design leave you wanting to explore other options, here are a few to consider.",source:"@site/versioned_docs/version-2.x/alternatives.md",sourceDirName:".",slug:"/alternatives",permalink:"/docs/2.x/alternatives",draft:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-2.x/alternatives.md",tags:[],version:"2.x",frontMatter:{id:"alternatives",title:"Alternative libraries",sidebar_label:"Alternative libraries"},sidebar:"version-2.x-docs",previous:{title:"Pitch & anti-pitch",permalink:"/docs/2.x/pitch"},next:{title:"Contributing",permalink:"/docs/2.x/contributing"}},s={},f=[],v={toc:f},p="wrapper";function d(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)(p,(0,n.Z)({},v,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"React Navigation isn't your only option for routing and navigation in React Native. If the ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.x/pitch"},"pitch & anti-pitch")," or the API design leave you wanting to explore other options, here are a few to consider."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/aksonov/react-native-router-flux"},"react-native-router-flux"),": this library is based on React Navigation but provides you with a different API to interact with it."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/wix/react-native-navigation"},"react-native-navigation"),": uses the underlying native APIs on iOS and Android, this is a popular alternative to React Navigation and worth considering if you value adhering to the platform conventions exactly and do not care as much about customization.")))}d.isMDXComponent=!0}}]);