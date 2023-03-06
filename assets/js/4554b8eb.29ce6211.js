"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[82827],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return v}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=c(r),d=a,v=p["".concat(l,".").concat(d)]||p[d]||f[d]||o;return r?n.createElement(v,i(i({ref:t},s),{},{components:r})):n.createElement(v,i({ref:t},s))}));function v(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u[p]="string"==typeof e?e:a,i[1]=u;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},85162:function(e,t,r){r.d(t,{Z:function(){return i}});var n=r(67294),a=r(86010),o={tabItem:"tabItem_Ymn6"};function i(e){var t=e.children,r=e.hidden,i=e.className;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,i),hidden:r},t)}},74866:function(e,t,r){r.d(t,{Z:function(){return k}});var n=r(83117),a=r(67294),o=r(86010),i=r(12466),u=r(16550),l=r(91980),c=r(67392),s=r(50012);function p(e){return function(e){return a.Children.map(e,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function f(e){var t=e.values,r=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:p(r);return function(e){var t=(0,c.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,r])}function d(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function v(e){var t=e.queryString,r=void 0!==t&&t,n=e.groupId,o=(0,u.k6)(),i=function(e){var t=e.queryString,r=void 0!==t&&t,n=e.groupId;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:r,groupId:n});return[(0,l._X)(i),(0,a.useCallback)((function(e){if(i){var t=new URLSearchParams(o.location.search);t.set(i,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[i,o])]}function m(e){var t,r,n,o,i=e.defaultValue,u=e.queryString,l=void 0!==u&&u,c=e.groupId,p=f(e),m=(0,a.useState)((function(){return function(e){var t,r=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!d({value:r,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}var a=null!=(t=n.find((function(e){return e.default})))?t:n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:i,tabValues:p})})),b=m[0],h=m[1],g=v({queryString:l,groupId:c}),y=g[0],w=g[1],k=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:c}.groupId),r=(0,s.Nk)(t),n=r[0],o=r[1],[n,(0,a.useCallback)((function(e){t&&o.set(e)}),[t,o])]),N=k[0],E=k[1],x=function(){var e=null!=y?y:N;return d({value:e,tabValues:p})?e:null}();return(0,a.useLayoutEffect)((function(){x&&h(x)}),[x]),{selectedValue:b,selectValue:(0,a.useCallback)((function(e){if(!d({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);h(e),w(e),E(e)}),[w,E,p]),tabValues:p}}var b=r(72389),h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){var t=e.className,r=e.block,u=e.selectedValue,l=e.selectValue,c=e.tabValues,s=[],p=(0,i.o5)().blockElementScrollPositionUntilNextRender,f=function(e){var t=e.currentTarget,r=s.indexOf(t),n=c[r].value;n!==u&&(p(t),l(n))},d=function(e){var t,r=null;switch(e.key){case"Enter":f(e);break;case"ArrowRight":var n,a=s.indexOf(e.currentTarget)+1;r=null!=(n=s[a])?n:s[0];break;case"ArrowLeft":var o,i=s.indexOf(e.currentTarget)-1;r=null!=(o=s[i])?o:s[s.length-1]}null==(t=r)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},c.map((function(e){var t=e.value,r=e.label,i=e.attributes;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:function(e){return s.push(e)},onKeyDown:d,onClick:f},i,{className:(0,o.Z)("tabs__item",h.tabItem,null==i?void 0:i.className,{"tabs__item--active":u===t})}),null!=r?r:t)})))}function y(e){var t=e.lazy,r=e.children,n=e.selectedValue;if(r=Array.isArray(r)?r:[r],t){var o=r.find((function(e){return e.props.value===n}));return o?(0,a.cloneElement)(o,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n})})))}function w(e){var t=m(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",h.tabList)},a.createElement(g,(0,n.Z)({},e,t)),a.createElement(y,(0,n.Z)({},e,t)))}function k(e){var t=(0,b.Z)();return a.createElement(w,(0,n.Z)({key:String(t)},e))}},36929:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return v},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return p}});var n=r(83117),a=r(80102),o=(r(67294),r(3905)),i=(r(74866),r(85162),["components"]),u={id:"more-resources",title:"More Resources",sidebar_label:"More Resources"},l="Talks",c={unversionedId:"more-resources",id:"version-3.x/more-resources",title:"More Resources",description:"- Mobile App Development with React Native at Harvard Extension School: Lecture 6 covers React Navigation, includes exercises, slides, and video.",source:"@site/versioned_docs/version-3.x/more-resources.md",sourceDirName:".",slug:"/more-resources",permalink:"/docs/3.x/more-resources",draft:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-3.x/more-resources.md",tags:[],version:"3.x",frontMatter:{id:"more-resources",title:"More Resources",sidebar_label:"More Resources"},sidebar:"version-3.x-docs",previous:{title:"Community Navigators and Libraries",permalink:"/docs/3.x/community-libraries-and-navigators"},next:{title:"Pitch & anti-pitch",permalink:"/docs/3.x/pitch"}},s={},p=[],f={toc:p},d="wrapper";function v(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)(d,(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"talks"},"Talks"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://cs50.harvard.edu/mobile/2018/"},"Mobile App Development with React Native at Harvard Extension School"),": Lecture 6 covers React Navigation, includes exercises, slides, and video.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=GBhdooVxX6Q"},"Mobile Navigation at React Alicante"),": An overview and comparison of the approaches taken by react-native-navigation and react-navigation."))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=1LKqGx3z0W4"},"Owning Transitions at React Native EU"),": Discusses a new transitioner API and how to use it.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=Z0Jl1KCWiag"},"It all starts with navigation at React Native EU"),": Explains the evolution of React Native navigation libraries over time and the problems that required building native APIs to solve and what those solutions were.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=wJJZ9Od8MjM"},"React Navigation at React Amsterdam"),": An introduction to React Navigation."))))}v.isMDXComponent=!0}}]);