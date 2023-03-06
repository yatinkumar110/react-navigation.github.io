"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[22531],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=s(n),p=r,m=d["".concat(l,".").concat(p)]||d[p]||h[p]||o;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u[d]="string"==typeof e?e:r,i[1]=u;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},85162:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(67294),r=n(86010),o={tabItem:"tabItem_Ymn6"};function i(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,i),hidden:n},t)}},74866:function(e,t,n){n.d(t,{Z:function(){return w}});var a=n(83117),r=n(67294),o=n(86010),i=n(12466),u=n(16550),l=n(91980),s=n(67392),c=n(50012);function d(e){return function(e){return r.Children.map(e,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function h(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:d(n);return function(e){var t=(0,s.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function p(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function m(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,o=(0,u.k6)(),i=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:a});return[(0,l._X)(i),(0,r.useCallback)((function(e){if(i){var t=new URLSearchParams(o.location.search);t.set(i,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[i,o])]}function b(e){var t,n,a,o,i=e.defaultValue,u=e.queryString,l=void 0!==u&&u,s=e.groupId,d=h(e),b=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:i,tabValues:d})})),f=b[0],v=b[1],k=m({queryString:l,groupId:s}),g=k[0],y=k[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:s}.groupId),n=(0,c.Nk)(t),a=n[0],o=n[1],[a,(0,r.useCallback)((function(e){t&&o.set(e)}),[t,o])]),N=w[0],C=w[1],S=function(){var e=null!=g?g:N;return p({value:e,tabValues:d})?e:null}();return(0,r.useLayoutEffect)((function(){S&&v(S)}),[S]),{selectedValue:f,selectValue:(0,r.useCallback)((function(e){if(!p({value:e,tabValues:d}))throw new Error("Can't select invalid tab value="+e);v(e),y(e),C(e)}),[y,C,d]),tabValues:d}}var f=n(72389),v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){var t=e.className,n=e.block,u=e.selectedValue,l=e.selectValue,s=e.tabValues,c=[],d=(0,i.o5)().blockElementScrollPositionUntilNextRender,h=function(e){var t=e.currentTarget,n=c.indexOf(t),a=s[n].value;a!==u&&(d(t),l(a))},p=function(e){var t,n=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":var a,r=c.indexOf(e.currentTarget)+1;n=null!=(a=c[r])?a:c[0];break;case"ArrowLeft":var o,i=c.indexOf(e.currentTarget)-1;n=null!=(o=c[i])?o:c[c.length-1]}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},s.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:function(e){return c.push(e)},onKeyDown:p,onClick:h},i,{className:(0,o.Z)("tabs__item",v.tabItem,null==i?void 0:i.className,{"tabs__item--active":u===t})}),null!=n?n:t)})))}function g(e){var t=e.lazy,n=e.children,a=e.selectedValue;if(n=Array.isArray(n)?n:[n],t){var o=n.find((function(e){return e.props.value===a}));return o?(0,r.cloneElement)(o,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})})))}function y(e){var t=b(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",v.tabList)},r.createElement(k,(0,a.Z)({},e,t)),r.createElement(g,(0,a.Z)({},e,t)))}function w(e){var t=(0,f.Z)();return r.createElement(y,(0,a.Z)({key:String(t)},e))}},73016:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return d}});var a=n(83117),r=n(80102),o=(n(67294),n(3905)),i=(n(74866),n(85162),["components"]),u={id:"header-buttons",title:"Header buttons",sidebar_label:"Header buttons"},l=void 0,s={unversionedId:"header-buttons",id:"version-6.x/header-buttons",title:"Header buttons",description:"Now that we know how to customize the look of our headers, let's make them sentient! Actually perhaps that's ambitious, let's just make them able to respond to our touches in very well defined ways.",source:"@site/versioned_docs/version-6.x/header-buttons.md",sourceDirName:".",slug:"/header-buttons",permalink:"/docs/header-buttons",draft:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-6.x/header-buttons.md",tags:[],version:"6.x",frontMatter:{id:"header-buttons",title:"Header buttons",sidebar_label:"Header buttons"},sidebar:"version-6.x/docs",previous:{title:"Configuring the header bar",permalink:"/docs/headers"},next:{title:"Nesting navigators",permalink:"/docs/nesting-navigators"}},c={},d=[{value:"Adding a button to the header",id:"adding-a-button-to-the-header",level:2},{value:"Header interaction with its screen component",id:"header-interaction-with-its-screen-component",level:2},{value:"Customizing the back button",id:"customizing-the-back-button",level:2},{value:"Overriding the back button",id:"overriding-the-back-button",level:2},{value:"Summary",id:"summary",level:2}],h={toc:d},p="wrapper";function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)(p,(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Now that we know how to customize the look of our headers, let's make them sentient! Actually perhaps that's ambitious, let's just make them able to respond to our touches in very well defined ways."),(0,o.kt)("h2",{id:"adding-a-button-to-the-header"},"Adding a button to the header"),(0,o.kt)("p",null,"The most common way to interact with a header is by tapping on a button either to the left or the right of the title. Let's add a button to the right side of the header (one of the most difficult places to touch on your entire screen, depending on finger and phone size, but also a normal place to put buttons)."),(0,o.kt)("samp",{id:"simple-header-button"},"header button"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'function StackScreen() {\n  return (\n    <Stack.Navigator>\n      <Stack.Screen\n        name="Home"\n        component={HomeScreen}\n        options={{\n          headerTitle: (props) => <LogoTitle {...props} />,\n          headerRight: () => (\n            <Button\n              onPress={() => alert(\'This is a button!\')}\n              title="Info"\n              color="#fff"\n            />\n          ),\n        }}\n      />\n    </Stack.Navigator>\n  );\n}\n')),(0,o.kt)("p",null,"When we define our button this way, the ",(0,o.kt)("inlineCode",{parentName:"p"},"this")," variable in ",(0,o.kt)("inlineCode",{parentName:"p"},"options")," is ",(0,o.kt)("em",{parentName:"p"},"not")," the ",(0,o.kt)("inlineCode",{parentName:"p"},"HomeScreen")," instance, so you can't call ",(0,o.kt)("inlineCode",{parentName:"p"},"setState")," or any instance methods on it. This is pretty important because it's extremely common to want the buttons in your header to interact with the screen that the header belongs to. So, we will look how to do this next."),(0,o.kt)("h2",{id:"header-interaction-with-its-screen-component"},"Header interaction with its screen component"),(0,o.kt)("p",null,"In some cases, components in the header need to interact with the screen component. For this use case, we need to use ",(0,o.kt)("inlineCode",{parentName:"p"},"navigation.setOptions")," to update our options. By using ",(0,o.kt)("inlineCode",{parentName:"p"},"navigation.setOptions")," inside the screen component, we get access to screen's props, state, context etc."),(0,o.kt)("samp",{id:"header-interaction"},"header interaction"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'function StackScreen() {\n  return (\n    <Stack.Navigator>\n      <Stack.Screen\n        name="Home"\n        component={HomeScreen}\n        options={({ navigation, route }) => ({\n          headerTitle: (props) => <LogoTitle {...props} />,\n          // Add a placeholder button without the `onPress` to avoid flicker\n          headerRight: () => (\n            <Button title="Update count" />\n          ),\n        })}\n      />\n    </Stack.Navigator>\n  );\n}\n\nfunction HomeScreen({ navigation }) {\n  const [count, setCount] = React.useState(0);\n\n  React.useEffect(() => {\n    // Use `setOptions` to update the button that we previously specified\n    // Now the button includes an `onPress` handler to update the count\n    navigation.setOptions({\n      headerRight: () => (\n        <Button onPress={() => setCount((c) => c + 1)} title="Update count" />\n      ),\n    });\n  }, [navigation]);\n\n  return <Text>Count: {count}</Text>;\n}\n')),(0,o.kt)("p",null,"Here we update the ",(0,o.kt)("inlineCode",{parentName:"p"},"headerRight")," with a button with ",(0,o.kt)("inlineCode",{parentName:"p"},"onPress")," handler that has access to the component's state and can update it."),(0,o.kt)("h2",{id:"customizing-the-back-button"},"Customizing the back button"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"createNativeStackNavigator"),' provides the platform-specific defaults for the back button. On iOS this includes a label next to the button, which shows the title of the previous screen when the title fits in the available space, otherwise it says "Back".'),(0,o.kt)("p",null,"You can change the label behavior with ",(0,o.kt)("inlineCode",{parentName:"p"},"headerBackTitle")," and style it with ",(0,o.kt)("inlineCode",{parentName:"p"},"headerBackTitleStyle")," (",(0,o.kt)("a",{parentName:"p",href:"/docs/native-stack-navigator#headerbacktitle"},"read more"),")."),(0,o.kt)("p",null,"To customize the back button image, you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"headerBackImageSource")," (",(0,o.kt)("a",{parentName:"p",href:"/docs/native-stack-navigator#headerbackimagesource"},"read more"),")."),(0,o.kt)("h2",{id:"overriding-the-back-button"},"Overriding the back button"),(0,o.kt)("p",null,"The back button will be rendered automatically in a stack navigator whenever it is possible for the user to go back from their current screen ","\u2014"," in other words, the back button will be rendered whenever there is more than one screen in the stack."),(0,o.kt)("p",null,"Generally, this is what you want. But it's possible that in some circumstances that you want to customize the back button more than you can through the options mentioned above, in which case you can set the ",(0,o.kt)("inlineCode",{parentName:"p"},"headerLeft")," option to a React Element that will be rendered, just as we did with ",(0,o.kt)("inlineCode",{parentName:"p"},"headerRight"),". Alternatively, the ",(0,o.kt)("inlineCode",{parentName:"p"},"headerLeft")," option also accepts a React Component, which can be used, for example, for overriding the onPress behavior of the back button. Read more about this in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/native-stack-navigator#headerleft"},"api reference"),"."),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You can set buttons in the header through the ",(0,o.kt)("inlineCode",{parentName:"li"},"headerLeft")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"headerRight")," properties in ",(0,o.kt)("inlineCode",{parentName:"li"},"options"),"."),(0,o.kt)("li",{parentName:"ul"},"The back button is fully customizable with ",(0,o.kt)("inlineCode",{parentName:"li"},"headerLeft"),", but if you just want to change the title or image, there are other ",(0,o.kt)("inlineCode",{parentName:"li"},"options")," for that ","\u2014"," ",(0,o.kt)("inlineCode",{parentName:"li"},"headerBackTitle"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"headerBackTitleStyle"),", and ",(0,o.kt)("inlineCode",{parentName:"li"},"headerBackImageSource"),"."),(0,o.kt)("li",{parentName:"ul"},"You can use a callback for the options prop to access ",(0,o.kt)("inlineCode",{parentName:"li"},"navigation")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"route")," objects.")))}m.isMDXComponent=!0}}]);