"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[21942],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return v}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=c(t),f=a,v=p["".concat(l,".").concat(f)]||p[f]||d[f]||o;return t?r.createElement(v,i(i({ref:n},s),{},{components:t})):r.createElement(v,i({ref:n},s))}));function v(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var u={};for(var l in n)hasOwnProperty.call(n,l)&&(u[l]=n[l]);u.originalType=e,u[p]="string"==typeof e?e:a,i[1]=u;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},85162:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(67294),a=t(86010),o={tabItem:"tabItem_Ymn6"};function i(e){var n=e.children,t=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,i),hidden:t},n)}},74866:function(e,n,t){t.d(n,{Z:function(){return w}});var r=t(83117),a=t(67294),o=t(86010),i=t(12466),u=t(16550),l=t(91980),c=t(67392),s=t(50012);function p(e){return function(e){return a.Children.map(e,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}function d(e){var n=e.values,t=e.children;return(0,a.useMemo)((function(){var e=null!=n?n:p(t);return function(e){var n=(0,c.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function f(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function v(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId,o=(0,u.k6)(),i=function(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:t,groupId:r});return[(0,l._X)(i),(0,a.useCallback)((function(e){if(i){var n=new URLSearchParams(o.location.search);n.set(i,e),o.replace(Object.assign({},o.location,{search:n.toString()}))}}),[i,o])]}function m(e){var n,t,r,o,i=e.defaultValue,u=e.queryString,l=void 0!==u&&u,c=e.groupId,p=d(e),m=(0,a.useState)((function(){return function(e){var n,t=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var a=null!=(n=r.find((function(e){return e.default})))?n:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:i,tabValues:p})})),h=m[0],b=m[1],g=v({queryString:l,groupId:c}),y=g[0],k=g[1],w=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:c}.groupId),t=(0,s.Nk)(n),r=t[0],o=t[1],[r,(0,a.useCallback)((function(e){n&&o.set(e)}),[n,o])]),C=w[0],N=w[1],x=function(){var e=null!=y?y:C;return f({value:e,tabValues:p})?e:null}();return(0,a.useLayoutEffect)((function(){x&&b(x)}),[x]),{selectedValue:h,selectValue:(0,a.useCallback)((function(e){if(!f({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);b(e),k(e),N(e)}),[k,N,p]),tabValues:p}}var h=t(72389),b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){var n=e.className,t=e.block,u=e.selectedValue,l=e.selectValue,c=e.tabValues,s=[],p=(0,i.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var n=e.currentTarget,t=s.indexOf(n),r=c[t].value;r!==u&&(p(n),l(r))},f=function(e){var n,t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var r,a=s.indexOf(e.currentTarget)+1;t=null!=(r=s[a])?r:s[0];break;case"ArrowLeft":var o,i=s.indexOf(e.currentTarget)-1;t=null!=(o=s[i])?o:s[s.length-1]}null==(n=t)||n.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},n)},c.map((function(e){var n=e.value,t=e.label,i=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:u===n?0:-1,"aria-selected":u===n,key:n,ref:function(e){return s.push(e)},onKeyDown:f,onClick:d},i,{className:(0,o.Z)("tabs__item",b.tabItem,null==i?void 0:i.className,{"tabs__item--active":u===n})}),null!=t?t:n)})))}function y(e){var n=e.lazy,t=e.children,r=e.selectedValue;if(t=Array.isArray(t)?t:[t],n){var o=t.find((function(e){return e.props.value===r}));return o?(0,a.cloneElement)(o,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},t.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})})))}function k(e){var n=m(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",b.tabList)},a.createElement(g,(0,r.Z)({},e,n)),a.createElement(y,(0,r.Z)({},e,n)))}function w(e){var n=(0,h.Z)();return a.createElement(k,(0,r.Z)({key:String(n)},e))}},38454:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return l},default:function(){return v},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return p}});var r=t(83117),a=t(80102),o=(t(67294),t(3905)),i=(t(74866),t(85162),["components"]),u={id:"server-container",title:"ServerContainer",sidebar_label:"ServerContainer"},l=void 0,c={unversionedId:"server-container",id:"version-7.x/server-container",title:"ServerContainer",description:"The ServerContainer component provides utilities to render your app on server with the correct navigation state.",source:"@site/versioned_docs/version-7.x/server-container.md",sourceDirName:".",slug:"/server-container",permalink:"/docs/7.x/server-container",draft:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-7.x/server-container.md",tags:[],version:"7.x",frontMatter:{id:"server-container",title:"ServerContainer",sidebar_label:"ServerContainer"},sidebar:"version-7.x/docs",previous:{title:"NavigationContainer",permalink:"/docs/7.x/navigation-container"},next:{title:"Group",permalink:"/docs/7.x/group"}},s={},p=[{value:"Ref",id:"ref",level:2},{value:"Props",id:"props",level:2},{value:"<code>location</code>",id:"location",level:3}],d={toc:p},f="wrapper";function v(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)(f,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"ServerContainer")," component provides utilities to render your app on server with the correct ",(0,o.kt)("a",{parentName:"p",href:"/docs/7.x/navigation-state"},"navigation state"),"."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Ref which will be populated with the screen options\nconst ref = React.createRef();\n\n// Location object containing the `pathname` and `search` fields of the current URL\nconst location = { pathname: '/profile', search: '?user=jane' };\n\n// Get rendered HTML\nconst html = ReactDOMServer.renderToString(\n  <ServerContainer ref={ref} location={location}>\n    <App />\n  </ServerContainer>\n);\n\n// Then you can access the options for the current screen in the ref\nconst options = ref.current.getCurrentOptions(); // { title: 'My Profile' }\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"ServerContainer")," component should wrap your entire app during server rendering. Note that you still need a ",(0,o.kt)("inlineCode",{parentName:"p"},"NavigationContainer")," in your app, ",(0,o.kt)("inlineCode",{parentName:"p"},"ServerContainer")," doesn't replace it.'"),(0,o.kt)("p",null,"See the ",(0,o.kt)("a",{parentName:"p",href:"/docs/7.x/server-rendering"},(0,o.kt)("inlineCode",{parentName:"a"},"server rendering guide"))," for a detailed guide and examples."),(0,o.kt)("h2",{id:"ref"},"Ref"),(0,o.kt)("p",null,"If you attach a ",(0,o.kt)("inlineCode",{parentName:"p"},"ref")," to the container, you can get the options for the current screen after rendering the app. The ",(0,o.kt)("inlineCode",{parentName:"p"},"ref")," will contain a method called ",(0,o.kt)("inlineCode",{parentName:"p"},"getCurrentOptions")," which will return an object with options for the focused screen in the navigation tree:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const options = ref.current.getCurrentOptions();\n")),(0,o.kt)("p",null,"Then you can access the options for the screen from this object and put it in the HTML:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'<title>{options.title}</title>\n<meta name="description" content={options.description} />\n')),(0,o.kt)("p",null,"Note that the ",(0,o.kt)("inlineCode",{parentName:"p"},"options")," object can be undefined if you are not rendering a navigator on the initial render."),(0,o.kt)("h2",{id:"props"},"Props"),(0,o.kt)("h3",{id:"location"},(0,o.kt)("inlineCode",{parentName:"h3"},"location")),(0,o.kt)("p",null,"Location object containing the location to use for server rendered output. You can pass the ",(0,o.kt)("inlineCode",{parentName:"p"},"pathname")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"search")," properties matching the ",(0,o.kt)("inlineCode",{parentName:"p"},"location")," object in the browsers:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"<ServerContainer location={{ pathname: '/profile', search: '' }}>\n  <App />\n</ServerContainer>\n")),(0,o.kt)("p",null,"Normally, you'd construct this object based on the incoming request."),(0,o.kt)("p",null,"Basic example with Koa (don't use as is in production):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"app.use(async (ctx) => {\n  const html = ReactDOMServer.renderToString(\n    <ServerContainer location={{ pathname: ctx.path, search: ctx.search }}>\n      <App />\n    </ServerContainer>\n  );\n\n  ctx.body = html;\n});\n")))}v.isMDXComponent=!0}}]);