"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[81959],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=s(n),f=a,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u[p]="string"==typeof e?e:a,i[1]=u;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},85162:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(67294),a=n(86010),o={tabItem:"tabItem_Ymn6"};function i(e){var t=e.children,n=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,i),hidden:n},t)}},74866:function(e,t,n){n.d(t,{Z:function(){return x}});var r=n(83117),a=n(67294),o=n(86010),i=n(12466),u=n(16550),l=n(91980),s=n(67392),c=n(50012);function p(e){return function(e){return a.Children.map(e,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function d(e){var t=e.values,n=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:p(n);return function(e){var t=(0,s.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function f(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function m(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId,o=(0,u.k6)(),i=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:r});return[(0,l._X)(i),(0,a.useCallback)((function(e){if(i){var t=new URLSearchParams(o.location.search);t.set(i,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[i,o])]}function v(e){var t,n,r,o,i=e.defaultValue,u=e.queryString,l=void 0!==u&&u,s=e.groupId,p=d(e),v=(0,a.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:i,tabValues:p})})),h=v[0],g=v[1],b=m({queryString:l,groupId:s}),y=b[0],k=b[1],x=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:s}.groupId),n=(0,c.Nk)(t),r=n[0],o=n[1],[r,(0,a.useCallback)((function(e){t&&o.set(e)}),[t,o])]),w=x[0],N=x[1],C=function(){var e=null!=y?y:w;return f({value:e,tabValues:p})?e:null}();return(0,a.useLayoutEffect)((function(){C&&g(C)}),[C]),{selectedValue:h,selectValue:(0,a.useCallback)((function(e){if(!f({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);g(e),k(e),N(e)}),[k,N,p]),tabValues:p}}var h=n(72389),g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){var t=e.className,n=e.block,u=e.selectedValue,l=e.selectValue,s=e.tabValues,c=[],p=(0,i.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,n=c.indexOf(t),r=s[n].value;r!==u&&(p(t),l(r))},f=function(e){var t,n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var r,a=c.indexOf(e.currentTarget)+1;n=null!=(r=c[a])?r:c[0];break;case"ArrowLeft":var o,i=c.indexOf(e.currentTarget)-1;n=null!=(o=c[i])?o:c[c.length-1]}null==(t=n)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},s.map((function(e){var t=e.value,n=e.label,i=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:function(e){return c.push(e)},onKeyDown:f,onClick:d},i,{className:(0,o.Z)("tabs__item",g.tabItem,null==i?void 0:i.className,{"tabs__item--active":u===t})}),null!=n?n:t)})))}function y(e){var t=e.lazy,n=e.children,r=e.selectedValue;if(n=Array.isArray(n)?n:[n],t){var o=n.find((function(e){return e.props.value===r}));return o?(0,a.cloneElement)(o,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},n.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})})))}function k(e){var t=v(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",g.tabList)},a.createElement(b,(0,r.Z)({},e,t)),a.createElement(y,(0,r.Z)({},e,t)))}function x(e){var t=(0,h.Z)();return a.createElement(k,(0,r.Z)({key:String(t)},e))}},59198:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return p}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),i=(n(74866),n(85162),["components"]),u={id:"redux-integration",title:"Redux integration",sidebar_label:"Redux integration"},l=void 0,s={unversionedId:"redux-integration",id:"version-6.x/redux-integration",title:"Redux integration",description:"It is extremely easy to use Redux in an app with React Navigation. It's basically no different than without React Navigation.",source:"@site/versioned_docs/version-6.x/redux-integration.md",sourceDirName:".",slug:"/redux-integration",permalink:"/docs/redux-integration",draft:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-6.x/redux-integration.md",tags:[],version:"6.x",frontMatter:{id:"redux-integration",title:"Redux integration",sidebar_label:"Redux integration"},sidebar:"version-6.x/docs",previous:{title:"Type checking with TypeScript",permalink:"/docs/typescript"},next:{title:"MobX State Tree integration",permalink:"/docs/MST-integration"}},c={},p=[{value:"Use a component that is <code>connect</code>ed in <code>options</code>",id:"use-a-component-that-is-connected-in-options",level:3},{value:"Pass the state you care about as a param to the screen",id:"pass-the-state-you-care-about-as-a-param-to-the-screen",level:3},{value:"Can I store the navigation state in Redux too?",id:"can-i-store-the-navigation-state-in-redux-too",level:2}],d={toc:p},f="wrapper";function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)(f,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"It is extremely easy to use Redux in an app with React Navigation. It's basically no different than without React Navigation."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { Provider } from 'react-redux';\nimport { NavigationContainer } from '@react-navigation/native';\n\n// Render the app container component with the provider around it\nexport default function App() {\n  return (\n    <Provider store={store}>\n      <NavigationContainer>\n        {/* Screen configuration */}\n      </NavigationContainer>\n    </Provider>\n  );\n}\n")),(0,o.kt)("p",null,"Notice that we wrap our components in a ",(0,o.kt)("inlineCode",{parentName:"p"},"Provider")," like we'd normally do with ",(0,o.kt)("inlineCode",{parentName:"p"},"react-redux"),". Ta da! Now feel free to use ",(0,o.kt)("inlineCode",{parentName:"p"},"connect")," throughout your app."),(0,o.kt)("h3",{id:"use-a-component-that-is-connected-in-options"},"Use a component that is ",(0,o.kt)("inlineCode",{parentName:"h3"},"connect"),"ed in ",(0,o.kt)("inlineCode",{parentName:"h3"},"options")),(0,o.kt)("p",null,"Create a component, ",(0,o.kt)("inlineCode",{parentName:"p"},"connect")," it to the store, then use that component in the ",(0,o.kt)("inlineCode",{parentName:"p"},"title"),"."),(0,o.kt)("samp",{id:"redux-integration"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function Counter({ value }) {\n  return <Text>Count: {value}</Text>;\n}\n\nconst CounterContainer = connect(state => ({ value: state.count }))(Counter);\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'<Stack.Screen\n  name="Test"\n  component={TestScreen}\n  options={{ title: () => <CounterContainer /> }}\n/>\n')),(0,o.kt)("h3",{id:"pass-the-state-you-care-about-as-a-param-to-the-screen"},"Pass the state you care about as a param to the screen"),(0,o.kt)("p",null,"If the value isn't expected to change, you can just pass it from a connected component to the other screen as a param."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"<Button\n  title=\"Go to static counter screen\"\n  onPress={() =>\n    props.navigation.navigate('StaticCounter', {\n      count,\n    })\n  }\n/>\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function StaticCounter({ route }) {\n  return (\n    <View style={styles.container}>\n      <Text style={styles.paragraph}>{route.params.count}</Text>\n    </View>\n  );\n}\n")),(0,o.kt)("p",null,"So our component will look like this:"),(0,o.kt)("samp",{id:"redux-integration-nav-param"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'<RootStack.Screen\n  name="StaticCounter"\n  component={StaticCounter}\n  options={({ route }) => ({ title: route.params.count })}\n/>\n')),(0,o.kt)("h2",{id:"can-i-store-the-navigation-state-in-redux-too"},"Can I store the navigation state in Redux too?"),(0,o.kt)("p",null,"This is not possible. We don't support it because it's too easy to shoot yourself in the foot and slow down / break your app."),(0,o.kt)("p",null,"However it's possible to use ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/zalmoxisus/redux-devtools-extension"},(0,o.kt)("inlineCode",{parentName:"a"},"redux-devtools-extension"))," to inspect the ",(0,o.kt)("a",{parentName:"p",href:"/docs/navigation-state"},"navigation state")," and actions, as well as perform time travel debugging by using the ",(0,o.kt)("a",{parentName:"p",href:"/docs/devtools"},(0,o.kt)("inlineCode",{parentName:"a"},"devtools")," package"),"."))}m.isMDXComponent=!0}}]);