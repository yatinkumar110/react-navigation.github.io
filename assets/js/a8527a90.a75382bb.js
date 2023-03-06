"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[39012],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(t),d=a,m=p["".concat(l,".").concat(d)]||p[d]||f[d]||o;return t?r.createElement(m,u(u({ref:n},c),{},{components:t})):r.createElement(m,u({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,u=new Array(o);u[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[p]="string"==typeof e?e:a,u[1]=i;for(var s=2;s<o;s++)u[s]=t[s];return r.createElement.apply(null,u)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},85162:function(e,n,t){t.d(n,{Z:function(){return u}});var r=t(67294),a=t(86010),o={tabItem:"tabItem_Ymn6"};function u(e){var n=e.children,t=e.hidden,u=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,u),hidden:t},n)}},74866:function(e,n,t){t.d(n,{Z:function(){return w}});var r=t(83117),a=t(67294),o=t(86010),u=t(12466),i=t(16550),l=t(91980),s=t(67392),c=t(50012);function p(e){return function(e){return a.Children.map(e,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}function f(e){var n=e.values,t=e.children;return(0,a.useMemo)((function(){var e=null!=n?n:p(t);return function(e){var n=(0,s.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function d(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function m(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId,o=(0,i.k6)(),u=function(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:t,groupId:r});return[(0,l._X)(u),(0,a.useCallback)((function(e){if(u){var n=new URLSearchParams(o.location.search);n.set(u,e),o.replace(Object.assign({},o.location,{search:n.toString()}))}}),[u,o])]}function v(e){var n,t,r,o,u=e.defaultValue,i=e.queryString,l=void 0!==i&&i,s=e.groupId,p=f(e),v=(0,a.useState)((function(){return function(e){var n,t=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var a=null!=(n=r.find((function(e){return e.default})))?n:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:u,tabValues:p})})),b=v[0],h=v[1],g=m({queryString:l,groupId:s}),k=g[0],y=g[1],w=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:s}.groupId),t=(0,c.Nk)(n),r=t[0],o=t[1],[r,(0,a.useCallback)((function(e){n&&o.set(e)}),[n,o])]),T=w[0],x=w[1],E=function(){var e=null!=k?k:T;return d({value:e,tabValues:p})?e:null}();return(0,a.useLayoutEffect)((function(){E&&h(E)}),[E]),{selectedValue:b,selectValue:(0,a.useCallback)((function(e){if(!d({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);h(e),y(e),x(e)}),[y,x,p]),tabValues:p}}var b=t(72389),h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){var n=e.className,t=e.block,i=e.selectedValue,l=e.selectValue,s=e.tabValues,c=[],p=(0,u.o5)().blockElementScrollPositionUntilNextRender,f=function(e){var n=e.currentTarget,t=c.indexOf(n),r=s[t].value;r!==i&&(p(n),l(r))},d=function(e){var n,t=null;switch(e.key){case"Enter":f(e);break;case"ArrowRight":var r,a=c.indexOf(e.currentTarget)+1;t=null!=(r=c[a])?r:c[0];break;case"ArrowLeft":var o,u=c.indexOf(e.currentTarget)-1;t=null!=(o=c[u])?o:c[c.length-1]}null==(n=t)||n.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},n)},s.map((function(e){var n=e.value,t=e.label,u=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,key:n,ref:function(e){return c.push(e)},onKeyDown:d,onClick:f},u,{className:(0,o.Z)("tabs__item",h.tabItem,null==u?void 0:u.className,{"tabs__item--active":i===n})}),null!=t?t:n)})))}function k(e){var n=e.lazy,t=e.children,r=e.selectedValue;if(t=Array.isArray(t)?t:[t],n){var o=t.find((function(e){return e.props.value===r}));return o?(0,a.cloneElement)(o,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},t.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})})))}function y(e){var n=v(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",h.tabList)},a.createElement(g,(0,r.Z)({},e,n)),a.createElement(k,(0,r.Z)({},e,n)))}function w(e){var n=(0,b.Z)();return a.createElement(y,(0,r.Z)({key:String(n)},e))}},25439:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p}});var r=t(83117),a=t(80102),o=(t(67294),t(3905)),u=(t(74866),t(85162),["components"]),i={id:"use-link-to",title:"useLinkTo",sidebar_label:"useLinkTo"},l=void 0,s={unversionedId:"use-link-to",id:"version-5.x/use-link-to",title:"useLinkTo",description:"The useLinkTo hook lets us navigate to a screen using a path instead of a screen name based on the linking options. It returns a function that receives the path to navigate to.",source:"@site/versioned_docs/version-5.x/use-link-to.md",sourceDirName:".",slug:"/use-link-to",permalink:"/docs/5.x/use-link-to",draft:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-5.x/use-link-to.md",tags:[],version:"5.x",frontMatter:{id:"use-link-to",title:"useLinkTo",sidebar_label:"useLinkTo"},sidebar:"version-5.x/docs",previous:{title:"useIsFocused",permalink:"/docs/5.x/use-is-focused"},next:{title:"useLinkProps",permalink:"/docs/5.x/use-link-props"}},c={},p=[{value:"Using with class component",id:"using-with-class-component",level:2}],f={toc:p},d="wrapper";function m(e){var n=e.components,t=(0,a.Z)(e,u);return(0,o.kt)(d,(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"useLinkTo")," hook lets us navigate to a screen using a path instead of a screen name based on the ",(0,o.kt)("a",{parentName:"p",href:"/docs/5.x/navigation-container#linking"},(0,o.kt)("inlineCode",{parentName:"a"},"linking")," options"),". It returns a function that receives the path to navigate to."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { useLinkTo } from '@react-navigation/native';\n\n// ...\n\nfunction Home() {\n  const linkTo = useLinkTo();\n\n  return (\n    <Button onPress={() => linkTo('/profile/jane')}>\n      Go to Jane's profile\n    </Button>\n  );\n}\n")),(0,o.kt)("p",null,"This is a low-level hook used to build more complex behavior on top. We recommended to use the ",(0,o.kt)("a",{parentName:"p",href:"/docs/5.x/use-link-props"},(0,o.kt)("inlineCode",{parentName:"a"},"useLinkProps")," hook")," to build your custom link components instead of using this hook directly. It will ensure that your component is properly accessible on the web."),(0,o.kt)("h2",{id:"using-with-class-component"},"Using with class component"),(0,o.kt)("p",null,"You can wrap your class component in a function component to use the hook:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"class Home extends React.Component {\n  render() {\n    // Get it from props\n    const { linkTo } = this.props;\n  }\n}\n\n// Wrap and export\nexport default function (props) {\n  const linkTo = useLinkTo();\n\n  return <Home {...props} linkTo={linkTo} />;\n}\n")))}m.isMDXComponent=!0}}]);