"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[20259],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(t),d=a,m=p["".concat(c,".").concat(d)]||p[d]||f[d]||i;return t?r.createElement(m,o(o({ref:n},l),{},{components:t})):r.createElement(m,o({ref:n},l))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var u={};for(var c in n)hasOwnProperty.call(n,c)&&(u[c]=n[c]);u.originalType=e,u[p]="string"==typeof e?e:a,o[1]=u;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},85162:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(67294),a=t(86010),i={tabItem:"tabItem_Ymn6"};function o(e){var n=e.children,t=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(i.tabItem,o),hidden:t},n)}},74866:function(e,n,t){t.d(n,{Z:function(){return w}});var r=t(83117),a=t(67294),i=t(86010),o=t(12466),u=t(16550),c=t(91980),s=t(67392),l=t(50012);function p(e){return function(e){return a.Children.map(e,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}function f(e){var n=e.values,t=e.children;return(0,a.useMemo)((function(){var e=null!=n?n:p(t);return function(e){var n=(0,s.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function d(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function m(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId,i=(0,u.k6)(),o=function(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:t,groupId:r});return[(0,c._X)(o),(0,a.useCallback)((function(e){if(o){var n=new URLSearchParams(i.location.search);n.set(o,e),i.replace(Object.assign({},i.location,{search:n.toString()}))}}),[o,i])]}function b(e){var n,t,r,i,o=e.defaultValue,u=e.queryString,c=void 0!==u&&u,s=e.groupId,p=f(e),b=(0,a.useState)((function(){return function(e){var n,t=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var a=null!=(n=r.find((function(e){return e.default})))?n:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:o,tabValues:p})})),v=b[0],g=b[1],h=m({queryString:c,groupId:s}),y=h[0],k=h[1],w=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:s}.groupId),t=(0,l.Nk)(n),r=t[0],i=t[1],[r,(0,a.useCallback)((function(e){n&&i.set(e)}),[n,i])]),S=w[0],N=w[1],T=function(){var e=null!=y?y:S;return d({value:e,tabValues:p})?e:null}();return(0,a.useLayoutEffect)((function(){T&&g(T)}),[T]),{selectedValue:v,selectValue:(0,a.useCallback)((function(e){if(!d({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);g(e),k(e),N(e)}),[k,N,p]),tabValues:p}}var v=t(72389),g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){var n=e.className,t=e.block,u=e.selectedValue,c=e.selectValue,s=e.tabValues,l=[],p=(0,o.o5)().blockElementScrollPositionUntilNextRender,f=function(e){var n=e.currentTarget,t=l.indexOf(n),r=s[t].value;r!==u&&(p(n),c(r))},d=function(e){var n,t=null;switch(e.key){case"Enter":f(e);break;case"ArrowRight":var r,a=l.indexOf(e.currentTarget)+1;t=null!=(r=l[a])?r:l[0];break;case"ArrowLeft":var i,o=l.indexOf(e.currentTarget)-1;t=null!=(i=l[o])?i:l[l.length-1]}null==(n=t)||n.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},n)},s.map((function(e){var n=e.value,t=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:u===n?0:-1,"aria-selected":u===n,key:n,ref:function(e){return l.push(e)},onKeyDown:d,onClick:f},o,{className:(0,i.Z)("tabs__item",g.tabItem,null==o?void 0:o.className,{"tabs__item--active":u===n})}),null!=t?t:n)})))}function y(e){var n=e.lazy,t=e.children,r=e.selectedValue;if(t=Array.isArray(t)?t:[t],n){var i=t.find((function(e){return e.props.value===r}));return i?(0,a.cloneElement)(i,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},t.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})})))}function k(e){var n=b(e);return a.createElement("div",{className:(0,i.Z)("tabs-container",g.tabList)},a.createElement(h,(0,r.Z)({},e,n)),a.createElement(y,(0,r.Z)({},e,n)))}function w(e){var n=(0,v.Z)();return a.createElement(k,(0,r.Z)({key:String(n)},e))}},24549:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return p}});var r=t(83117),a=t(80102),i=(t(67294),t(3905)),o=(t(74866),t(85162),["components"]),u={id:"hiding-tabbar-in-screens",title:"Hiding tab bar in specific screens",sidebar_label:"Hiding tab bar in specific screens"},c=void 0,s={unversionedId:"hiding-tabbar-in-screens",id:"version-7.x/hiding-tabbar-in-screens",title:"Hiding tab bar in specific screens",description:"Sometimes we may want to hide the tab bar in specific screens in a stack navigator nested in a tab navigator. Let's say we have 5 screens",source:"@site/versioned_docs/version-7.x/hiding-tabbar-in-screens.md",sourceDirName:".",slug:"/hiding-tabbar-in-screens",permalink:"/docs/7.x/hiding-tabbar-in-screens",draft:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-7.x/hiding-tabbar-in-screens.md",tags:[],version:"7.x",frontMatter:{id:"hiding-tabbar-in-screens",title:"Hiding tab bar in specific screens",sidebar_label:"Hiding tab bar in specific screens"},sidebar:"version-7.x/docs",previous:{title:"Supporting safe areas",permalink:"/docs/7.x/handling-safe-area"},next:{title:"Different status bar configuration based on route",permalink:"/docs/7.x/status-bar"}},l={},p=[],f={toc:p},d="wrapper";function m(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)(d,(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Sometimes we may want to hide the tab bar in specific screens in a stack navigator nested in a tab navigator. Let's say we have 5 screens: ",(0,i.kt)("inlineCode",{parentName:"p"},"Home"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Feed"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Notifications"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Profile")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Settings"),", and your navigation structure looks like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'function HomeStack() {\n  return (\n    <Stack.Navigator>\n      <Stack.Screen name="Home" component={Home} />\n      <Stack.Screen name="Profile" component={Profile} />\n      <Stack.Screen name="Settings" component={Settings} />\n    </Stack.Navigator>\n  );\n}\n\nfunction App() {\n  return (\n    <Tab.Navigator>\n      <Tab.Screen name="Home" component={HomeStack} />\n      <Tab.Screen name="Feed" component={Feed} />\n      <Tab.Screen name="Notifications" component={Notifications} />\n    </Tab.Navigator>\n  );\n}\n')),(0,i.kt)("p",null,"With this structure, when we navigate to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Profile")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Settings")," screen, the tab bar will still stay visible over those screens."),(0,i.kt)("p",null,"But if we want to show the tab bar only on the ",(0,i.kt)("inlineCode",{parentName:"p"},"Home"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Feed")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Notifications")," screens, but not on the ",(0,i.kt)("inlineCode",{parentName:"p"},"Profile")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Settings")," screens, we'll need to change the navigation structure. The easiest way to achieve this is to nest the tab navigator inside the first screen of the stack instead of nesting stack inside tab navigator:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'function HomeTabs() {\n  return (\n    <Tab.Navigator>\n      <Tab.Screen name="Home" component={Home} />\n      <Tab.Screen name="Feed" component={Feed} />\n      <Tab.Screen name="Notifications" component={Notifications} />\n    </Tab.Navigator>\n  );\n}\n\nfunction App() {\n  return (\n    <Stack.Navigator>\n      <Stack.Screen name="Home" component={HomeTabs} />\n      <Stack.Screen name="Profile" component={Profile} />\n      <Stack.Screen name="Settings" component={Settings} />\n    </Stack.Navigator>\n  );\n}\n')),(0,i.kt)("p",null,"After re-organizing the navigation structure, now if we navigate to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Profile")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Settings")," screens, the tab bar won't be visible over the screen anymore."))}m.isMDXComponent=!0}}]);