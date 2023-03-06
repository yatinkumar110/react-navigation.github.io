"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[69264],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return g}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=a.createContext({}),c=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=c(e.components);return a.createElement(u.Provider,{value:n},e.children)},f="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=c(t),p=r,g=f["".concat(u,".").concat(p)]||f[p]||d[p]||o;return t?a.createElement(g,i(i({ref:n},l),{},{components:t})):a.createElement(g,i({ref:n},l))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=p;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s[f]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},85162:function(e,n,t){t.d(n,{Z:function(){return i}});var a=t(67294),r=t(86010),o={tabItem:"tabItem_Ymn6"};function i(e){var n=e.children,t=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,i),hidden:t},n)}},74866:function(e,n,t){t.d(n,{Z:function(){return w}});var a=t(83117),r=t(67294),o=t(86010),i=t(12466),s=t(16550),u=t(91980),c=t(67392),l=t(50012);function f(e){return function(e){return r.Children.map(e,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}function d(e){var n=e.values,t=e.children;return(0,r.useMemo)((function(){var e=null!=n?n:f(t);return function(e){var n=(0,c.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function p(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function g(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId,o=(0,s.k6)(),i=function(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:t,groupId:a});return[(0,u._X)(i),(0,r.useCallback)((function(e){if(i){var n=new URLSearchParams(o.location.search);n.set(i,e),o.replace(Object.assign({},o.location,{search:n.toString()}))}}),[i,o])]}function m(e){var n,t,a,o,i=e.defaultValue,s=e.queryString,u=void 0!==s&&s,c=e.groupId,f=d(e),m=(0,r.useState)((function(){return function(e){var n,t=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var r=null!=(n=a.find((function(e){return e.default})))?n:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:i,tabValues:f})})),b=m[0],v=m[1],h=g({queryString:u,groupId:c}),y=h[0],k=h[1],w=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:c}.groupId),t=(0,l.Nk)(n),a=t[0],o=t[1],[a,(0,r.useCallback)((function(e){n&&o.set(e)}),[n,o])]),S=w[0],N=w[1],x=function(){var e=null!=y?y:S;return p({value:e,tabValues:f})?e:null}();return(0,r.useLayoutEffect)((function(){x&&v(x)}),[x]),{selectedValue:b,selectValue:(0,r.useCallback)((function(e){if(!p({value:e,tabValues:f}))throw new Error("Can't select invalid tab value="+e);v(e),k(e),N(e)}),[k,N,f]),tabValues:f}}var b=t(72389),v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){var n=e.className,t=e.block,s=e.selectedValue,u=e.selectValue,c=e.tabValues,l=[],f=(0,i.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var n=e.currentTarget,t=l.indexOf(n),a=c[t].value;a!==s&&(f(n),u(a))},p=function(e){var n,t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var a,r=l.indexOf(e.currentTarget)+1;t=null!=(a=l[r])?a:l[0];break;case"ArrowLeft":var o,i=l.indexOf(e.currentTarget)-1;t=null!=(o=l[i])?o:l[l.length-1]}null==(n=t)||n.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},n)},c.map((function(e){var n=e.value,t=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,key:n,ref:function(e){return l.push(e)},onKeyDown:p,onClick:d},i,{className:(0,o.Z)("tabs__item",v.tabItem,null==i?void 0:i.className,{"tabs__item--active":s===n})}),null!=t?t:n)})))}function y(e){var n=e.lazy,t=e.children,a=e.selectedValue;if(t=Array.isArray(t)?t:[t],n){var o=t.find((function(e){return e.props.value===a}));return o?(0,r.cloneElement)(o,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},t.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})})))}function k(e){var n=m(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",v.tabList)},r.createElement(h,(0,a.Z)({},e,n)),r.createElement(y,(0,a.Z)({},e,n)))}function w(e){var n=(0,b.Z)();return r.createElement(k,(0,a.Z)({key:String(n)},e))}},9700:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return f}});var a=t(83117),r=t(80102),o=(t(67294),t(3905)),i=(t(74866),t(85162),["components"]),s={id:"status-bar",title:"Different status bar configuration based on route",sidebar_label:"Different status bar configuration based on route"},u=void 0,c={unversionedId:"status-bar",id:"version-6.x/status-bar",title:"Different status bar configuration based on route",description:"If you don't have a navigation header, or your navigation header changes color based on the route, you'll want to ensure that the correct color is used for the content.",source:"@site/versioned_docs/version-6.x/status-bar.md",sourceDirName:".",slug:"/status-bar",permalink:"/docs/status-bar",draft:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-6.x/status-bar.md",tags:[],version:"6.x",frontMatter:{id:"status-bar",title:"Different status bar configuration based on route",sidebar_label:"Different status bar configuration based on route"},sidebar:"version-6.x/docs",previous:{title:"Hiding tab bar in specific screens",permalink:"/docs/hiding-tabbar-in-screens"},next:{title:"Opening a modal",permalink:"/docs/modal"}},l={},f=[{value:"Stack",id:"stack",level:2},{value:"Tabs and Drawer",id:"tabs-and-drawer",level:2}],d={toc:f},p="wrapper";function g(e){var n=e.components,s=(0,r.Z)(e,i);return(0,o.kt)(p,(0,a.Z)({},d,s,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"If you don't have a navigation header, or your navigation header changes color based on the route, you'll want to ensure that the correct color is used for the content."),(0,o.kt)("h2",{id:"stack"},"Stack"),(0,o.kt)("p",null,"This is a simple task when using a stack. You can render the ",(0,o.kt)("inlineCode",{parentName:"p"},"StatusBar")," component, which is exposed by React Native, and set your config."),(0,o.kt)("samp",{id:"status-bar"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import * as React from 'react';\nimport { View, Text, StatusBar, Button, StyleSheet } from 'react-native';\nimport { NavigationContainer } from '@react-navigation/native';\nimport { createNativeStackNavigator } from '@react-navigation/native-stack';\nimport {\n  SafeAreaProvider,\n  useSafeAreaInsets,\n} from 'react-native-safe-area-context';\n\nfunction Screen1({ navigation }) {\n  const insets = useSafeAreaInsets();\n\n  return (\n    <View\n      style={[\n        styles.container,\n        {\n          backgroundColor: '#6a51ae',\n          paddingTop: insets.top,\n          paddingBottom: insets.bottom,\n          paddingLeft: insets.left,\n          paddingRight: insets.right,\n        },\n      ]}\n    >\n      <StatusBar barStyle=\"light-content\" backgroundColor=\"#6a51ae\" />\n      <Text style={{ color: '#fff' }}>Light Screen</Text>\n      <Button\n        title=\"Next screen\"\n        onPress={() => navigation.navigate('Screen2')}\n        color=\"#fff\"\n      />\n    </View>\n  );\n}\n\nfunction Screen2({ navigation }) {\n  const insets = useSafeAreaInsets();\n\n  return (\n    <View\n      style={[\n        styles.container,\n        {\n          backgroundColor: '#ecf0f1',\n          paddingTop: insets.top,\n          paddingBottom: insets.bottom,\n          paddingLeft: insets.left,\n          paddingRight: insets.right,\n        },\n      ]}\n    >\n      <StatusBar barStyle=\"dark-content\" backgroundColor=\"#ecf0f1\" />\n      <Text>Dark Screen</Text>\n      <Button\n        title=\"Next screen\"\n        onPress={() => navigation.navigate('Screen1')}\n      />\n    </View>\n  );\n}\n\nconst Stack = createNativeStackNavigator();\n\nexport default function App() {\n  return (\n    <SafeAreaProvider>\n      <NavigationContainer>\n        <Stack.Navigator screenOptions={{ headerShown: false }}>\n          <Stack.Screen name=\"Screen1\" component={Screen1} />\n          <Stack.Screen name=\"Screen2\" component={Screen2} />\n        </Stack.Navigator>\n      </NavigationContainer>\n    </SafeAreaProvider>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    justifyContent: 'center',\n    alignItems: 'center',\n  },\n});\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"StackNavigator with different StatusBar configs",src:t(27267).Z,width:"895",height:"843"})),(0,o.kt)("h2",{id:"tabs-and-drawer"},"Tabs and Drawer"),(0,o.kt)("p",null,"If you're using a tab or drawer navigator, it's a bit more complex because all of the screens in the navigator might be rendered at once and kept rendered - that means that the last ",(0,o.kt)("inlineCode",{parentName:"p"},"StatusBar")," config you set will be used (likely on the final tab of your tab navigator, not what the user is seeing)."),(0,o.kt)("p",null,"To fix this, we'll have to do make the status bar component aware of screen focus and render it only when the screen is focused. We can achieve this by using the ",(0,o.kt)("a",{parentName:"p",href:"/docs/use-is-focused"},(0,o.kt)("inlineCode",{parentName:"a"},"useIsFocused")," hook")," and creating a wrapper component:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import * as React from 'react';\nimport { StatusBar } from 'react-native';\nimport { useIsFocused } from '@react-navigation/native';\n\nfunction FocusAwareStatusBar(props) {\n  const isFocused = useIsFocused();\n\n  return isFocused ? <StatusBar {...props} /> : null;\n}\n")),(0,o.kt)("p",null,"Now, our screens (both ",(0,o.kt)("inlineCode",{parentName:"p"},"Screen1.js")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Screen2.js"),") will use the ",(0,o.kt)("inlineCode",{parentName:"p"},"FocusAwareStatusBar")," component instead of the ",(0,o.kt)("inlineCode",{parentName:"p"},"StatusBar")," component from React Native:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'function Screen1({ navigation }) {\n  const insets = useSafeAreaInsets();\n\n  return (\n    <View\n      style={[\n        styles.container,\n        {\n          backgroundColor: \'#6a51ae\',\n          paddingTop: insets.top,\n          paddingBottom: insets.bottom,\n          paddingLeft: insets.left,\n          paddingRight: insets.right,\n        },\n      ]}\n    >\n      <FocusAwareStatusBar barStyle="light-content" backgroundColor="#6a51ae" />\n      <Text style={{ color: \'#fff\' }}>Light Screen</Text>\n      <Button\n        title="Next screen"\n        onPress={() => navigation.navigate(\'Screen2\')}\n        color="#fff"\n      />\n    </View>\n  );\n}\n\nfunction Screen2({ navigation }) {\n  const insets = useSafeAreaInsets();\n\n  return (\n    <View\n      style={[\n        styles.container,\n        {\n          backgroundColor: \'#ecf0f1\',\n          paddingTop: insets.top,\n          paddingBottom: insets.bottom,\n          paddingLeft: insets.left,\n          paddingRight: insets.right,\n        },\n      ]}\n    >\n      <FocusAwareStatusBar barStyle="dark-content" backgroundColor="#ecf0f1" />\n      <Text>Dark Screen</Text>\n      <Button\n        title="Next screen"\n        onPress={() => navigation.navigate(\'Screen1\')}\n      />\n    </View>\n  );\n}\n')),(0,o.kt)("p",null,"Although not necessary, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"FocusAwareStatusBar")," component in the screens of the native stack navigator as well."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"DrawerNavigator with different StatusBar configs",src:t(72293).Z,width:"895",height:"843"})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"TabNavigator with different StatusBar configs",src:t(63065).Z,width:"879",height:"862"})))}g.isMDXComponent=!0},72293:function(e,n,t){n.Z=t.p+"assets/images/statusbar-drawer-demo-3f6ce5c56a2086d8aba8ab2f1f3f513e.gif"},27267:function(e,n,t){n.Z=t.p+"assets/images/statusbar-stack-demo-695c18cfc1489cd5c4c18827bc66befb.gif"},63065:function(e,n,t){n.Z=t.p+"assets/images/statusbar-tab-demo-c5f932fea901d54665ed07f921ad8322.gif"}}]);