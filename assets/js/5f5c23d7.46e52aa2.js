"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[53247],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return f}});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(a),m=i,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||r;return a?n.createElement(f,o(o({ref:t},c),{},{components:a})):n.createElement(f,o({ref:t},c))}));function f(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,o[1]=s;for(var u=2;u<r;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(67294),i=a(86010),r={tabItem:"tabItem_Ymn6"};function o(e){var t=e.children,a=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",className:(0,i.Z)(r.tabItem,o),hidden:a},t)}},74866:function(e,t,a){a.d(t,{Z:function(){return N}});var n=a(83117),i=a(67294),r=a(86010),o=a(12466),s=a(16550),l=a(91980),u=a(67392),c=a(50012);function p(e){return function(e){return i.Children.map(e,(function(e){if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function d(e){var t=e.values,a=e.children;return(0,i.useMemo)((function(){var e=null!=t?t:p(a);return function(e){var t=(0,u.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,a])}function m(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function f(e){var t=e.queryString,a=void 0!==t&&t,n=e.groupId,r=(0,s.k6)(),o=function(e){var t=e.queryString,a=void 0!==t&&t,n=e.groupId;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:a,groupId:n});return[(0,l._X)(o),(0,i.useCallback)((function(e){if(o){var t=new URLSearchParams(r.location.search);t.set(o,e),r.replace(Object.assign({},r.location,{search:t.toString()}))}}),[o,r])]}function h(e){var t,a,n,r,o=e.defaultValue,s=e.queryString,l=void 0!==s&&s,u=e.groupId,p=d(e),h=(0,i.useState)((function(){return function(e){var t,a=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!m({value:a,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+a+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return a}var i=null!=(t=n.find((function(e){return e.default})))?t:n[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:o,tabValues:p})})),v=h[0],g=h[1],k=f({queryString:l,groupId:u}),y=k[0],b=k[1],N=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),a=(0,c.Nk)(t),n=a[0],r=a[1],[n,(0,i.useCallback)((function(e){t&&r.set(e)}),[t,r])]),w=N[0],x=N[1],j=function(){var e=null!=y?y:w;return m({value:e,tabValues:p})?e:null}();return(0,i.useLayoutEffect)((function(){j&&g(j)}),[j]),{selectedValue:v,selectValue:(0,i.useCallback)((function(e){if(!m({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);g(e),b(e),x(e)}),[b,x,p]),tabValues:p}}var v=a(72389),g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){var t=e.className,a=e.block,s=e.selectedValue,l=e.selectValue,u=e.tabValues,c=[],p=(0,o.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,a=c.indexOf(t),n=u[a].value;n!==s&&(p(t),l(n))},m=function(e){var t,a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var n,i=c.indexOf(e.currentTarget)+1;a=null!=(n=c[i])?n:c[0];break;case"ArrowLeft":var r,o=c.indexOf(e.currentTarget)-1;a=null!=(r=c[o])?r:c[c.length-1]}null==(t=a)||t.focus()};return i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t)},u.map((function(e){var t=e.value,a=e.label,o=e.attributes;return i.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:function(e){return c.push(e)},onKeyDown:m,onClick:d},o,{className:(0,r.Z)("tabs__item",g.tabItem,null==o?void 0:o.className,{"tabs__item--active":s===t})}),null!=a?a:t)})))}function y(e){var t=e.lazy,a=e.children,n=e.selectedValue;if(a=Array.isArray(a)?a:[a],t){var r=a.find((function(e){return e.props.value===n}));return r?(0,i.cloneElement)(r,{className:"margin-top--md"}):null}return i.createElement("div",{className:"margin-top--md"},a.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==n})})))}function b(e){var t=h(e);return i.createElement("div",{className:(0,r.Z)("tabs-container",g.tabList)},i.createElement(k,(0,n.Z)({},e,t)),i.createElement(y,(0,n.Z)({},e,t)))}function N(e){var t=(0,v.Z)();return i.createElement(b,(0,n.Z)({key:String(t)},e))}},51826:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var n=a(83117),i=a(80102),r=(a(67294),a(3905)),o=(a(74866),a(85162),["components"]),s={id:"navigation-state",title:"Navigation state reference",sidebar_label:"Navigation state"},l=void 0,u={unversionedId:"navigation-state",id:"version-7.x/navigation-state",title:"Navigation state reference",description:"The navigation state is the state where React Navigation stores the navigation structure and history of the app. It's useful to know about the structure of the navigation state if you need to do advanced operations such as resetting the state, providing a custom initial state etc.",source:"@site/versioned_docs/version-7.x/navigation-state.md",sourceDirName:".",slug:"/navigation-state",permalink:"/docs/7.x/navigation-state",draft:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-7.x/navigation-state.md",tags:[],version:"7.x",frontMatter:{id:"navigation-state",title:"Navigation state reference",sidebar_label:"Navigation state"},sidebar:"version-7.x/docs",previous:{title:"Navigation events",permalink:"/docs/7.x/navigation-events"},next:{title:"Link",permalink:"/docs/7.x/link"}},c={},p=[{value:"Partial state objects",id:"partial-state-objects",level:2}],d={toc:p},m="wrapper";function f(e){var t=e.components,a=(0,i.Z)(e,o);return(0,r.kt)(m,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The navigation state is the state where React Navigation stores the navigation structure and history of the app. It's useful to know about the structure of the navigation state if you need to do advanced operations such as ",(0,r.kt)("a",{parentName:"p",href:"/docs/7.x/navigation-actions#reset"},"resetting the state"),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/7.x/navigation-container#initial-state"},"providing a custom initial state")," etc."),(0,r.kt)("p",null,"It's a JavaScript object which looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const state = {\n  type: 'stack',\n  key: 'stack-1',\n  routeNames: ['Home', 'Profile', 'Settings'],\n  routes: [\n    { key: 'home-1', name: 'Home', params: { sortBy: 'latest' } },\n    { key: 'settings-1', name: 'Settings' },\n  ],\n  index: 1,\n  stale: false,\n};\n")),(0,r.kt)("p",null,"There are few properties present in every navigation state object:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"type")," - Type of the navigator that the state belongs to, e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"stack"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"tab"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"drawer"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"key")," - Unique key to identify the navigator."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"routeNames")," - Name of the screens defined in the navigator. This is an unique array containing strings for each screen."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"routes")," - List of route objects (screens) which are rendered in the navigator. It also represents the history in a stack navigator. There should be at least one item present in this array."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"index")," - Index of the focused route object in the ",(0,r.kt)("inlineCode",{parentName:"li"},"routes")," array."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"history")," - A list of visited items. This is an optional property and not present in all navigators. For example, it's only present in tab and drawer navigators in the core. The shape of the items in the ",(0,r.kt)("inlineCode",{parentName:"li"},"history")," array can vary depending on the navigator. There should be at least one item present in this array."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"stale")," - A navigation state is assumed to be stale unless the ",(0,r.kt)("inlineCode",{parentName:"li"},"stale")," property is explicitly set to ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),". This means that the state object needs to be ",(0,r.kt)("a",{parentName:"li",href:"#partial-state-objects"},'"rehydrated"'),".")),(0,r.kt)("p",null,"Each route object in a ",(0,r.kt)("inlineCode",{parentName:"p"},"routes")," array may contain the following properties:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"key")," - Unique key of the screen. Created automatically or added while navigating to this screen."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name")," - Name of the screen. Defined in navigator component hierarchy."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"params")," - An optional object containing params which is defined while navigating e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"navigate('Home', { sortBy: 'latest' })"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"state")," - An optional object containing the navigation state of a child navigator nested inside this screen.")),(0,r.kt)("p",null,"For example, a stack navigator containing a tab navigator nested inside it's home screen may have a navigation state object like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const state = {\n  type: 'stack',\n  key: 'stack-1',\n  routeNames: ['Home', 'Profile', 'Settings'],\n  routes: [\n    {\n      key: 'home-1',\n      name: 'Home',\n      state: {\n        key: 'tab-1',\n        routeNames: ['Feed', 'Library', 'Favorites'],\n        routes: [\n          { key: 'feed-1', name: 'Feed', params: { sortBy: 'latest' } },\n          { key: 'library-1', name: 'Library' },\n          { key: 'favorites-1', name: 'Favorites' },\n        ],\n        index: 0,\n      },\n    },\n    { key: 'settings-1', name: 'Settings' },\n  ],\n  index: 1,\n};\n")),(0,r.kt)("p",null,"It's important to note that even if there's a nested navigator, the ",(0,r.kt)("inlineCode",{parentName:"p"},"state")," property on the ",(0,r.kt)("inlineCode",{parentName:"p"},"route")," object is not added until a navigation happens, hence it's not guaranteed to exist."),(0,r.kt)("h2",{id:"partial-state-objects"},"Partial state objects"),(0,r.kt)("p",null,"Earlier there was a mention of ",(0,r.kt)("inlineCode",{parentName:"p"},"stale")," property in the navigation state. A stale navigation state means that the state object needs to be rehydrated or fixed or fixed up, such as adding missing keys, removing invalid screens etc. before being used. As a user, you don't need to worry about it, React Navigation will fix up any issues in a state object automatically unless ",(0,r.kt)("inlineCode",{parentName:"p"},"stale")," is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),". If you're writing a ",(0,r.kt)("a",{parentName:"p",href:"/docs/7.x/custom-routers"},"custom router"),", the ",(0,r.kt)("inlineCode",{parentName:"p"},"getRehydratedState")," method let's you write custom rehydration logic to fix up state objects."),(0,r.kt)("p",null,"This also applies to the ",(0,r.kt)("inlineCode",{parentName:"p"},"index")," property: ",(0,r.kt)("inlineCode",{parentName:"p"},"index")," should be the last route in a stack, and if a different value was specified, React Navigation fixes it. For example, if you wanted to reset your app's navigation state to have it display the ",(0,r.kt)("inlineCode",{parentName:"p"},"Profile")," route, and have the ",(0,r.kt)("inlineCode",{parentName:"p"},"Home")," route displayed upon going back, and did the below,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"navigation.reset({\n  index: 0,\n  routes: [\n    { name: 'Home' },\n    { name: 'Profile' }\n  ],\n});\n")),(0,r.kt)("p",null,"React Navigation would correct ",(0,r.kt)("inlineCode",{parentName:"p"},"index")," to 1, and display the route and perform navigation as intended."),(0,r.kt)("p",null,"This feature comes handy when doing operations such as ",(0,r.kt)("a",{parentName:"p",href:"/docs/7.x/navigation-actions#reset"},"reset"),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/7.x/navigation-container#initial-state"},"providing a initial state")," etc., as you can safely omit many properties from the navigation state object and relying on React Navigation to add those properties for you, making your code simpler. For example, you can only provide a ",(0,r.kt)("inlineCode",{parentName:"p"},"routes")," array without any keys and React Navigation will automatically add everything that's needed to make it work:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const state = {\n  routes: [{ name: 'Home' }, { name: 'Profile' }],\n};\n")),(0,r.kt)("p",null,"After rehydration, it'll look something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const state = {\n  type: 'stack',\n  key: 'stack-1',\n  routeNames: ['Home', 'Profile', 'Settings'],\n  routes: [\n    { key: 'home-1', name: 'Home' },\n    { key: 'settings-1', name: 'Settings' },\n  ],\n  index: 1,\n  stale: false,\n};\n")),(0,r.kt)("p",null,"Here, React Navigation filled in the missing bits such as keys, route names, index etc."),(0,r.kt)("p",null,"It's also possible to provide invalid data such as non-existent screens and it'll be fixed automatically. While it's not recommended to write code with invalid state objects, it can be super useful if you do things like ",(0,r.kt)("a",{parentName:"p",href:"/docs/7.x/state-persistence"},"state persistence"),", where the configured screens might have changed after an update, which could cause problems if React Navigation didn't fix the state object automatically."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If you want React Navigation to fix invalid state, you need to make sure that you don't have ",(0,r.kt)("inlineCode",{parentName:"p"},"stale: false")," in the state object. State objects with ",(0,r.kt)("inlineCode",{parentName:"p"},"stale: false")," are assumed to be valid state objects and React Navigation won't attempt to fix them.")),(0,r.kt)("p",null,"When you're providing a state object in ",(0,r.kt)("a",{parentName:"p",href:"/docs/7.x/navigation-container#initial-state"},(0,r.kt)("inlineCode",{parentName:"a"},"initialState")),", React Navigation will always assume that it's a stale state object, which makes sure that things like state persistence work smoothly without extra manipulation of the state object."))}f.isMDXComponent=!0}}]);