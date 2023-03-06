"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[90975],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return v}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),f=l(n),d=r,v=f["".concat(s,".").concat(d)]||f[d]||p[d]||o;return n?a.createElement(v,i(i({ref:t},c),{},{components:n})):a.createElement(v,i({ref:t},c))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u[f]="string"==typeof e?e:r,i[1]=u;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(67294),r=n(86010),o={tabItem:"tabItem_Ymn6"};function i(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,i),hidden:n},t)}},74866:function(e,t,n){n.d(t,{Z:function(){return w}});var a=n(83117),r=n(67294),o=n(86010),i=n(12466),u=n(16550),s=n(91980),l=n(67392),c=n(50012);function f(e){return function(e){return r.Children.map(e,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function p(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:f(n);return function(e){var t=(0,l.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function d(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function v(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,o=(0,u.k6)(),i=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:a});return[(0,s._X)(i),(0,r.useCallback)((function(e){if(i){var t=new URLSearchParams(o.location.search);t.set(i,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[i,o])]}function h(e){var t,n,a,o,i=e.defaultValue,u=e.queryString,s=void 0!==u&&u,l=e.groupId,f=p(e),h=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!d({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:i,tabValues:f})})),g=h[0],m=h[1],b=v({queryString:s,groupId:l}),y=b[0],k=b[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:l}.groupId),n=(0,c.Nk)(t),a=n[0],o=n[1],[a,(0,r.useCallback)((function(e){t&&o.set(e)}),[t,o])]),N=w[0],x=w[1],S=function(){var e=null!=y?y:N;return d({value:e,tabValues:f})?e:null}();return(0,r.useLayoutEffect)((function(){S&&m(S)}),[S]),{selectedValue:g,selectValue:(0,r.useCallback)((function(e){if(!d({value:e,tabValues:f}))throw new Error("Can't select invalid tab value="+e);m(e),k(e),x(e)}),[k,x,f]),tabValues:f}}var g=n(72389),m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){var t=e.className,n=e.block,u=e.selectedValue,s=e.selectValue,l=e.tabValues,c=[],f=(0,i.o5)().blockElementScrollPositionUntilNextRender,p=function(e){var t=e.currentTarget,n=c.indexOf(t),a=l[n].value;a!==u&&(f(t),s(a))},d=function(e){var t,n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":var a,r=c.indexOf(e.currentTarget)+1;n=null!=(a=c[r])?a:c[0];break;case"ArrowLeft":var o,i=c.indexOf(e.currentTarget)-1;n=null!=(o=c[i])?o:c[c.length-1]}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},l.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:function(e){return c.push(e)},onKeyDown:d,onClick:p},i,{className:(0,o.Z)("tabs__item",m.tabItem,null==i?void 0:i.className,{"tabs__item--active":u===t})}),null!=n?n:t)})))}function y(e){var t=e.lazy,n=e.children,a=e.selectedValue;if(n=Array.isArray(n)?n:[n],t){var o=n.find((function(e){return e.props.value===a}));return o?(0,r.cloneElement)(o,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})})))}function k(e){var t=h(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",m.tabList)},r.createElement(b,(0,a.Z)({},e,t)),r.createElement(y,(0,a.Z)({},e,t)))}function w(e){var t=(0,g.Z)();return r.createElement(k,(0,a.Z)({key:String(t)},e))}},63273:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return v},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return f}});var a=n(83117),r=n(80102),o=(n(67294),n(3905)),i=(n(74866),n(85162),["components"]),u={id:"use-navigation-state",title:"useNavigationState",sidebar_label:"useNavigationState"},s=void 0,l={unversionedId:"use-navigation-state",id:"version-7.x/use-navigation-state",title:"useNavigationState",description:"useNavigationState is a hook which gives access to the navigation state of the navigator which contains the screen. It's useful in rare cases where you want to render something based on the navigation state.",source:"@site/versioned_docs/version-7.x/use-navigation-state.md",sourceDirName:".",slug:"/use-navigation-state",permalink:"/docs/7.x/use-navigation-state",draft:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-7.x/use-navigation-state.md",tags:[],version:"7.x",frontMatter:{id:"use-navigation-state",title:"useNavigationState",sidebar_label:"useNavigationState"},sidebar:"version-7.x/docs",previous:{title:"useRoute",permalink:"/docs/7.x/use-route"},next:{title:"useFocusEffect",permalink:"/docs/7.x/use-focus-effect"}},c={},f=[{value:"How is <code>useNavigationState</code> different from <code>navigation.getState()</code>?",id:"how-is-usenavigationstate-different-from-navigationgetstate",level:2},{value:"Using with class component",id:"using-with-class-component",level:2}],p={toc:f},d="wrapper";function v(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"useNavigationState")," is a hook which gives access to the ",(0,o.kt)("a",{parentName:"p",href:"/docs/7.x/navigation-state"},"navigation state")," of the navigator which contains the screen. It's useful in rare cases where you want to render something based on the navigation state."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: Consider the navigator's state object to be internal and subject to change in a minor release. Avoid using properties from the ",(0,o.kt)("a",{parentName:"p",href:"/docs/7.x/navigation-state"},"navigation state")," object except ",(0,o.kt)("inlineCode",{parentName:"p"},"index")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"routes"),", unless you really need it. If there is some functionality you cannot achieve without relying on the structure of the state object, please open an issue.")),(0,o.kt)("p",null,"It takes a selector function as an argument. The selector will receive the full ",(0,o.kt)("a",{parentName:"p",href:"/docs/7.x/navigation-state"},"navigation state")," and can return a specific value from the state:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const index = useNavigationState(state => state.index);\n")),(0,o.kt)("p",null,"The selector function helps to reduce unnecessary re-renders, so your screen will re-render only when that's something you care about. If you actually need the whole state object, you can do this explicitly:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const state = useNavigationState(state => state);\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: This hook is useful for advanced cases and it's easy to introduce performance issues if you're not careful. For most of the cases, you don't need the navigator's state.")),(0,o.kt)("h2",{id:"how-is-usenavigationstate-different-from-navigationgetstate"},"How is ",(0,o.kt)("inlineCode",{parentName:"h2"},"useNavigationState")," different from ",(0,o.kt)("inlineCode",{parentName:"h2"},"navigation.getState()"),"?"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"navigation.getState()")," function also returns the current ",(0,o.kt)("a",{parentName:"p",href:"/docs/7.x/navigation-state"},"navigation state"),". The main difference is that the ",(0,o.kt)("inlineCode",{parentName:"p"},"useNavigationState")," hook will trigger a re-render when values change, while ",(0,o.kt)("inlineCode",{parentName:"p"},"navigation.getState()")," won't. For example, the following code will be incorrect:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function Profile() {\n  const routesLength = navigation.getState().routes.length; // Don't do this\n\n  return <Text>Number of routes: {routesLength}</Text>;\n}\n")),(0,o.kt)("p",null,"In this example, even if you push a new screen, this text won't update. If you use the hook, it'll work as expected:"),(0,o.kt)("samp",{id:"use-navigation-state"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function Profile() {\n  const routesLength = useNavigationState(state => state.routes.length);\n\n  return <Text>Number of routes: {routesLength}</Text>;\n}\n")),(0,o.kt)("p",null,"So when do you use ",(0,o.kt)("inlineCode",{parentName:"p"},"navigation.getState()"),"? It's mostly useful within event listeners where you don't care about what's rendered. In most cases, using the hook should be preferred."),(0,o.kt)("h2",{id:"using-with-class-component"},"Using with class component"),(0,o.kt)("p",null,"You can wrap your class component in a function component to use the hook:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"class Profile extends React.Component {\n  render() {\n    // Get it from props\n    const { routesLength } = this.props;\n  }\n}\n\n// Wrap and export\nexport default function(props) {\n  const routesLength = useNavigationState(state => state.routes.length);\n\n  return <Profile {...props} routesLength={routesLength} />;\n}\n")))}v.isMDXComponent=!0}}]);