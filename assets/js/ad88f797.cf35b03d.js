"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[6398],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),l=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(u.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(t),f=a,m=p["".concat(u,".").concat(f)]||p[f]||d[f]||o;return t?r.createElement(m,i(i({ref:n},c),{},{components:t})):r.createElement(m,i({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},85162:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(67294),a=t(86010),o={tabItem:"tabItem_Ymn6"};function i(e){var n=e.children,t=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,i),hidden:t},n)}},74866:function(e,n,t){t.d(n,{Z:function(){return w}});var r=t(83117),a=t(67294),o=t(86010),i=t(12466),s=t(16550),u=t(91980),l=t(67392),c=t(50012);function p(e){return function(e){return a.Children.map(e,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}function d(e){var n=e.values,t=e.children;return(0,a.useMemo)((function(){var e=null!=n?n:p(t);return function(e){var n=(0,l.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function f(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function m(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId,o=(0,s.k6)(),i=function(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:t,groupId:r});return[(0,u._X)(i),(0,a.useCallback)((function(e){if(i){var n=new URLSearchParams(o.location.search);n.set(i,e),o.replace(Object.assign({},o.location,{search:n.toString()}))}}),[i,o])]}function v(e){var n,t,r,o,i=e.defaultValue,s=e.queryString,u=void 0!==s&&s,l=e.groupId,p=d(e),v=(0,a.useState)((function(){return function(e){var n,t=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var a=null!=(n=r.find((function(e){return e.default})))?n:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:i,tabValues:p})})),k=v[0],h=v[1],b=m({queryString:u,groupId:l}),g=b[0],y=b[1],w=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:l}.groupId),t=(0,c.Nk)(n),r=t[0],o=t[1],[r,(0,a.useCallback)((function(e){n&&o.set(e)}),[n,o])]),N=w[0],C=w[1],T=function(){var e=null!=g?g:N;return f({value:e,tabValues:p})?e:null}();return(0,a.useLayoutEffect)((function(){T&&h(T)}),[T]),{selectedValue:k,selectValue:(0,a.useCallback)((function(e){if(!f({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);h(e),y(e),C(e)}),[y,C,p]),tabValues:p}}var k=t(72389),h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){var n=e.className,t=e.block,s=e.selectedValue,u=e.selectValue,l=e.tabValues,c=[],p=(0,i.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var n=e.currentTarget,t=c.indexOf(n),r=l[t].value;r!==s&&(p(n),u(r))},f=function(e){var n,t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var r,a=c.indexOf(e.currentTarget)+1;t=null!=(r=c[a])?r:c[0];break;case"ArrowLeft":var o,i=c.indexOf(e.currentTarget)-1;t=null!=(o=c[i])?o:c[c.length-1]}null==(n=t)||n.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},n)},l.map((function(e){var n=e.value,t=e.label,i=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,key:n,ref:function(e){return c.push(e)},onKeyDown:f,onClick:d},i,{className:(0,o.Z)("tabs__item",h.tabItem,null==i?void 0:i.className,{"tabs__item--active":s===n})}),null!=t?t:n)})))}function g(e){var n=e.lazy,t=e.children,r=e.selectedValue;if(t=Array.isArray(t)?t:[t],n){var o=t.find((function(e){return e.props.value===r}));return o?(0,a.cloneElement)(o,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},t.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})})))}function y(e){var n=v(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",h.tabList)},a.createElement(b,(0,r.Z)({},e,n)),a.createElement(g,(0,r.Z)({},e,n)))}function w(e){var n=(0,k.Z)();return a.createElement(y,(0,r.Z)({key:String(n)},e))}},14895:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var r=t(83117),a=t(80102),o=(t(67294),t(3905)),i=(t(74866),t(85162),["components"]),s={id:"use-link-props",title:"useLinkProps",sidebar_label:"useLinkProps"},u=void 0,l={unversionedId:"use-link-props",id:"version-6.x/use-link-props",title:"useLinkProps",description:"The useLinkProps hook let's build our custom link components which let us navigate to a screen using a path instead of a screen name based on the linking options. It takes a path and returns an object with some props that you can pass to a component.",source:"@site/versioned_docs/version-6.x/use-link-props.md",sourceDirName:".",slug:"/use-link-props",permalink:"/docs/use-link-props",draft:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-6.x/use-link-props.md",tags:[],version:"6.x",frontMatter:{id:"use-link-props",title:"useLinkProps",sidebar_label:"useLinkProps"},sidebar:"version-6.x/docs",previous:{title:"useLinkTo",permalink:"/docs/use-link-to"},next:{title:"useLinkBuilder",permalink:"/docs/use-link-builder"}},c={},p=[{value:"Options",id:"options",level:2},{value:"<code>to</code>",id:"to",level:3},{value:"<code>action</code>",id:"action",level:3}],d={toc:p},f="wrapper";function m(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)(f,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"useLinkProps")," hook let's build our custom link components which let us navigate to a screen using a path instead of a screen name based on the ",(0,o.kt)("a",{parentName:"p",href:"/docs/navigation-container#linking"},(0,o.kt)("inlineCode",{parentName:"a"},"linking")," options"),". It takes a path and returns an object with some props that you can pass to a component."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { useLinkProps } from '@react-navigation/native';\n\n// ...\n\nconst LinkButton = ({ to, action, children, ...rest }) => {\n  const { onPress, ...props } = useLinkProps({ to, action });\n\n  const [isHovered, setIsHovered] = React.useState(false);\n\n  if (Platform.OS === 'web') {\n    // It's important to use a `View` or `Text` on web instead of `TouchableX`\n    // Otherwise React Native for Web omits the `onClick` prop that's passed\n    // You'll also need to pass `onPress` as `onClick` to the `View`\n    // You can add hover effects using `onMouseEnter` and `onMouseLeave`\n    return (\n      <View\n        onClick={onPress}\n        onMouseEnter={() => setIsHovered(true)}\n        onMouseLeave={() => setIsHovered(false)}\n        style={{ transitionDuration: '150ms', opacity: isHovered ? 0.5 : 1 }}\n        {...props}\n        {...rest}\n      >\n        <Text>{children}</Text>\n      </View>\n    );\n  }\n\n  return (\n    <TouchableOpacity onPress={onPress} {...props} {...rest}>\n      <Text>{children}</Text>\n    </TouchableOpacity>\n  );\n};\n\nfunction Home() {\n  return <LinkButton to={{ screen: 'Profile', params: { id: 'jane' } }}>Go to Jane's profile</LinkButton>;\n}\n")),(0,o.kt)("p",null,"Then you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"LinkButton")," component elsewhere in your app:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function Home() {\n  return <LinkButton to={{ screen: 'Profile', params: { id: 'jane' } }}>Go to Jane's profile</LinkButton>;\n}\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"props")," object returned by ",(0,o.kt)("inlineCode",{parentName:"p"},"useLinkProps")," contains the required props for accessible link components. When we use these props on ",(0,o.kt)("inlineCode",{parentName:"p"},"View"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Text")," etc., the link component responds to user actions such as ",(0,o.kt)("inlineCode",{parentName:"p"},"Ctrl+Click"),"/",(0,o.kt)("inlineCode",{parentName:"p"},"\u2318+Click")," to open links in new tab while keeping regular clicks within the same web page."),(0,o.kt)("p",null,"There are couple of important things to note when using ",(0,o.kt)("inlineCode",{parentName:"p"},"useLinkProps")," with current version of React Native for Web:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"You must explicitly pass ",(0,o.kt)("inlineCode",{parentName:"li"},"onPress")," as the ",(0,o.kt)("inlineCode",{parentName:"li"},"onClick")," prop, otherwise in-page navigation won't work"),(0,o.kt)("li",{parentName:"ol"},"You can only use ",(0,o.kt)("inlineCode",{parentName:"li"},"View")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"Text")," with ",(0,o.kt)("inlineCode",{parentName:"li"},"useLinkProps"),". The ",(0,o.kt)("inlineCode",{parentName:"li"},"TouchableX")," components don't support a correct ",(0,o.kt)("inlineCode",{parentName:"li"},"onClick")," event which we need")),(0,o.kt)("p",null,"In a future version of React Native for Web, these won't be an issue and you'll be able to have the same code for links on Web, iOS and Android. But until then, you need to write platform specific code for Web and native."),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("h3",{id:"to"},(0,o.kt)("inlineCode",{parentName:"h3"},"to")),(0,o.kt)("p",null,"You can pass an object with a ",(0,o.kt)("inlineCode",{parentName:"p"},"screen")," property:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function Home() {\n  return (\n    <LinkButton\n      to={{ screen: 'Profile', params: { id: 'jane' } }}\n    >\n      Go to Jane's profile\n    </LinkButton>\n  );\n}\n")),(0,o.kt)("p",null,"The syntax of this object is the same as ",(0,o.kt)("a",{parentName:"p",href:"/docs/nesting-navigators#navigating-to-a-screen-in-a-nested-navigator"},"navigating to a screen in a nested navigators"),". This uses a ",(0,o.kt)("inlineCode",{parentName:"p"},"navigate")," action for navigation by default, unless you specify a different action."),(0,o.kt)("p",null,"Alternatively, you can also pass an absolute path to the screen, e.g. - ",(0,o.kt)("inlineCode",{parentName:"p"},"/profile/jane"),"."),(0,o.kt)("p",null,"This will be used for the ",(0,o.kt)("inlineCode",{parentName:"p"},"href")," prop as well as for in-page navigation."),(0,o.kt)("h3",{id:"action"},(0,o.kt)("inlineCode",{parentName:"h3"},"action")),(0,o.kt)("p",null,"Sometimes we want a different behavior for in-page navigation, such as ",(0,o.kt)("inlineCode",{parentName:"p"},"replace")," instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"navigate"),". We can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"action")," prop to customize it:"),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { StackActions } from '@react-navigation/native';\n\n// ...\n\nfunction Home() {\n  return (\n    <LinkButton\n      to={{ screen: 'Profile', params: { id: 'jane' } }}\n      action={StackActions.replace('Profile', { id: 'jane' })}\n    >\n      Go to Jane's profile\n    </LinkButton>\n  );\n}\n")),(0,o.kt)("p",null,"If the ",(0,o.kt)("inlineCode",{parentName:"p"},"action")," prop is not specified, the path provided to the ",(0,o.kt)("inlineCode",{parentName:"p"},"to")," prop will be used and dispatched as a ",(0,o.kt)("inlineCode",{parentName:"p"},"navigate")," action."))}m.isMDXComponent=!0}}]);