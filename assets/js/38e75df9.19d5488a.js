"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[10369],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return v}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),l=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(u.Provider,{value:t},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),p=r,v=d["".concat(u,".").concat(p)]||d[p]||f[p]||o;return n?a.createElement(v,i(i({ref:t},c),{},{components:n})):a.createElement(v,i({ref:t},c))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},85162:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(67294),r=n(86010),o={tabItem:"tabItem_Ymn6"};function i(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,i),hidden:n},t)}},74866:function(e,t,n){n.d(t,{Z:function(){return w}});var a=n(83117),r=n(67294),o=n(86010),i=n(12466),s=n(16550),u=n(91980),l=n(67392),c=n(50012);function d(e){return function(e){return r.Children.map(e,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function f(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:d(n);return function(e){var t=(0,l.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function p(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function v(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,o=(0,s.k6)(),i=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:a});return[(0,u._X)(i),(0,r.useCallback)((function(e){if(i){var t=new URLSearchParams(o.location.search);t.set(i,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[i,o])]}function m(e){var t,n,a,o,i=e.defaultValue,s=e.queryString,u=void 0!==s&&s,l=e.groupId,d=f(e),m=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:i,tabValues:d})})),g=m[0],b=m[1],h=v({queryString:u,groupId:l}),k=h[0],y=h[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:l}.groupId),n=(0,c.Nk)(t),a=n[0],o=n[1],[a,(0,r.useCallback)((function(e){t&&o.set(e)}),[t,o])]),S=w[0],N=w[1],x=function(){var e=null!=k?k:S;return p({value:e,tabValues:d})?e:null}();return(0,r.useLayoutEffect)((function(){x&&b(x)}),[x]),{selectedValue:g,selectValue:(0,r.useCallback)((function(e){if(!p({value:e,tabValues:d}))throw new Error("Can't select invalid tab value="+e);b(e),y(e),N(e)}),[y,N,d]),tabValues:d}}var g=n(72389),b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){var t=e.className,n=e.block,s=e.selectedValue,u=e.selectValue,l=e.tabValues,c=[],d=(0,i.o5)().blockElementScrollPositionUntilNextRender,f=function(e){var t=e.currentTarget,n=c.indexOf(t),a=l[n].value;a!==s&&(d(t),u(a))},p=function(e){var t,n=null;switch(e.key){case"Enter":f(e);break;case"ArrowRight":var a,r=c.indexOf(e.currentTarget)+1;n=null!=(a=c[r])?a:c[0];break;case"ArrowLeft":var o,i=c.indexOf(e.currentTarget)-1;n=null!=(o=c[i])?o:c[c.length-1]}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},l.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:function(e){return c.push(e)},onKeyDown:p,onClick:f},i,{className:(0,o.Z)("tabs__item",b.tabItem,null==i?void 0:i.className,{"tabs__item--active":s===t})}),null!=n?n:t)})))}function k(e){var t=e.lazy,n=e.children,a=e.selectedValue;if(n=Array.isArray(n)?n:[n],t){var o=n.find((function(e){return e.props.value===a}));return o?(0,r.cloneElement)(o,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})})))}function y(e){var t=m(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",b.tabList)},r.createElement(h,(0,a.Z)({},e,t)),r.createElement(k,(0,a.Z)({},e,t)))}function w(e){var t=(0,g.Z)();return r.createElement(y,(0,a.Z)({key:String(t)},e))}},42236:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return v},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var a=n(83117),r=n(80102),o=(n(67294),n(3905)),i=(n(74866),n(85162),["components"]),s={id:"status-bar",title:"Different status bar configuration based on route",sidebar_label:"Different status bar configuration based on route"},u=void 0,l={unversionedId:"status-bar",id:"version-3.x/status-bar",title:"Different status bar configuration based on route",description:"If you don't have a navigation header, or your navigation header changes color based on the route, you'll want to ensure that the correct color is used for the content.",source:"@site/versioned_docs/version-3.x/status-bar.md",sourceDirName:".",slug:"/status-bar",permalink:"/docs/3.x/status-bar",draft:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-3.x/status-bar.md",tags:[],version:"3.x",frontMatter:{id:"status-bar",title:"Different status bar configuration based on route",sidebar_label:"Different status bar configuration based on route"},sidebar:"version-3.x-docs",previous:{title:"Supporting safe areas",permalink:"/docs/3.x/handling-iphonex"},next:{title:"Navigation options resolution",permalink:"/docs/3.x/navigation-options-resolution"}},c={},d=[{value:"Stack and drawer navigators",id:"stack-and-drawer-navigators",level:2},{value:"TabNavigator",id:"tabnavigator",level:2}],f={toc:d},p="wrapper";function v(e){var t=e.components,s=(0,r.Z)(e,i);return(0,o.kt)(p,(0,a.Z)({},f,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"If you don't have a navigation header, or your navigation header changes color based on the route, you'll want to ensure that the correct color is used for the content."),(0,o.kt)("h2",{id:"stack-and-drawer-navigators"},"Stack and drawer navigators"),(0,o.kt)("p",null,"This is a simple task when using a stack or drawer. You can simply render the ",(0,o.kt)("inlineCode",{parentName:"p"},"StatusBar")," component, which is exposed by React Native, and set your config."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'class Screen1 extends React.Component {\n  render() {\n    return (\n      <SafeAreaView style={[styles.container, { backgroundColor: \'#6a51ae\' }]}>\n        <StatusBar\n          barStyle="light-content"\n          backgroundColor="#6a51ae"\n        />\n        <Text style={[styles.paragraph, { color: \'#fff\' }]}>\n          Light Screen\n        </Text>\n        <Button\n          title="Next screen"\n          onPress={() => this.props.navigation.navigate(\'Screen2\')}\n          color={isAndroid ? "blue" : "#fff"}\n        />\n      </SafeAreaView>\n    );\n  }\n}\n\nclass Screen2 extends React.Component {\n  render() {\n    return (\n      <SafeAreaView style={[styles.container, { backgroundColor: \'#ecf0f1\' }]}>\n        <StatusBar\n          barStyle="dark-content"\n          backgroundColor="#ecf0f1"\n        />\n        <Text style={styles.paragraph}>\n          Dark Screen\n        </Text>\n        <Button\n          title="Next screen"\n          onPress={() => this.props.navigation.navigate(\'Screen1\')}\n        />\n      </SafeAreaView>\n    );\n  }\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"export default createStackNavigator({\n  Screen1: {\n    screen: Screen1,\n  },\n  Screen2: {\n    screen: Screen2,\n  },\n}, {\n  headerMode: 'none',\n});\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"StackNavigator with different StatusBar configs",src:n(27267).Z,width:"895",height:"843"})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"export default createDrawerNavigator({\n  Screen1: {\n    screen: Screen1,\n  },\n  Screen2: {\n    screen: Screen2,\n  },\n});\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"DrawerNavigator with different StatusBar configs",src:n(72293).Z,width:"895",height:"843"})),(0,o.kt)("h2",{id:"tabnavigator"},"TabNavigator"),(0,o.kt)("p",null,"If you're using a TabNavigator it's a bit more complex because the screens on all of your tabs are rendered at once - that means that the last ",(0,o.kt)("inlineCode",{parentName:"p"},"StatusBar")," config you set will be used (likely on the final tab of your tab navigator, not what the user is seeing)."),(0,o.kt)("p",null,"To fix this we'll have to do two things"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Only use the ",(0,o.kt)("inlineCode",{parentName:"li"},"StatusBar")," component on our initial screen. This allows us to ensure the correct ",(0,o.kt)("inlineCode",{parentName:"li"},"StatusBar")," config is used."),(0,o.kt)("li",{parentName:"ol"},"Leverage the events system in React Navigation and ",(0,o.kt)("inlineCode",{parentName:"li"},"StatusBar"),"'s implicit API to change the ",(0,o.kt)("inlineCode",{parentName:"li"},"StatusBar")," configuration when a tab becomes active.")),(0,o.kt)("p",null,"First, the new ",(0,o.kt)("inlineCode",{parentName:"p"},"Screen2.js")," will no longer use the ",(0,o.kt)("inlineCode",{parentName:"p"},"StatusBar")," component."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"class Screen2 extends React.Component {\n  render() {\n    return (\n      <SafeAreaView style={[styles.container, { backgroundColor: '#ecf0f1' }]}>\n        <Text style={styles.paragraph}>\n          Dark Screen\n        </Text>\n        <Button\n          title=\"Next screen\"\n          onPress={() => this.props.navigation.navigate('Screen1')}\n        />\n        {/* <Button\n          title=\"Toggle Drawer\"\n          onPress={() => this.props.navigation.navigate('DrawerToggle')}\n        /> */}\n      </SafeAreaView>\n    );\n  }\n}\n")),(0,o.kt)("p",null,"Then, in both ",(0,o.kt)("inlineCode",{parentName:"p"},"Screen1.js")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Screen2.js")," we'll set up a listener to change the ",(0,o.kt)("inlineCode",{parentName:"p"},"StatusBar")," configuration when that tab ",(0,o.kt)("inlineCode",{parentName:"p"},"didFocus"),". We'll also make sure to remove the listener when the ",(0,o.kt)("inlineCode",{parentName:"p"},"TabNavigator")," has been unmounted."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"class Screen1 extends React.Component {\n  componentDidMount() {\n    this._navListener = this.props.navigation.addListener('didFocus', () => {\n      StatusBar.setBarStyle('light-content');\n      isAndroid && StatusBar.setBackgroundColor('#6a51ae');\n    });\n  }\n\n  componentWillUnmount() {\n    this._navListener.remove();\n  }\n\n  ...\n}\n\nclass Screen2 extends React.Component {\n  componentDidMount() {\n    this._navListener = this.props.navigation.addListener('didFocus', () => {\n      StatusBar.setBarStyle('dark-content');\n      isAndroid && StatusBar.setBackgroundColor('#ecf0f1');\n    });\n  }\n\n  componentWillUnmount() {\n    this._navListener.remove();\n  }\n\n  ...\n}\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"TabNavigator with different StatusBar configs",src:n(63065).Z,width:"879",height:"862"})),(0,o.kt)("p",null,"The code used for these demos is available as a ",(0,o.kt)("a",{parentName:"p",href:"https://snack.expo.io/@react-navigation/react-navigation-docs:-stacknavigation-statusbar-v3"},"Snack"),"."))}v.isMDXComponent=!0},72293:function(e,t,n){t.Z=n.p+"assets/images/statusbar-drawer-demo-3f6ce5c56a2086d8aba8ab2f1f3f513e.gif"},27267:function(e,t,n){t.Z=n.p+"assets/images/statusbar-stack-demo-695c18cfc1489cd5c4c18827bc66befb.gif"},63065:function(e,t,n){t.Z=n.p+"assets/images/statusbar-tab-demo-c5f932fea901d54665ed07f921ad8322.gif"}}]);