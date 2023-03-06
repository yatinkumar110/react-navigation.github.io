"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[80665],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=l(n),m=r,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u[p]="string"==typeof e?e:r,i[1]=u;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(67294),r=n(86010),o={tabItem:"tabItem_Ymn6"};function i(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,i),hidden:n},t)}},74866:function(e,t,n){n.d(t,{Z:function(){return w}});var a=n(83117),r=n(67294),o=n(86010),i=n(12466),u=n(16550),s=n(91980),l=n(67392),c=n(50012);function p(e){return function(e){return r.Children.map(e,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function d(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:p(n);return function(e){var t=(0,l.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function m(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function h(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,o=(0,u.k6)(),i=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:a});return[(0,s._X)(i),(0,r.useCallback)((function(e){if(i){var t=new URLSearchParams(o.location.search);t.set(i,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[i,o])]}function f(e){var t,n,a,o,i=e.defaultValue,u=e.queryString,s=void 0!==u&&u,l=e.groupId,p=d(e),f=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:i,tabValues:p})})),v=f[0],g=f[1],b=h({queryString:s,groupId:l}),y=b[0],x=b[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:l}.groupId),n=(0,c.Nk)(t),a=n[0],o=n[1],[a,(0,r.useCallback)((function(e){t&&o.set(e)}),[t,o])]),k=w[0],C=w[1],N=function(){var e=null!=y?y:k;return m({value:e,tabValues:p})?e:null}();return(0,r.useLayoutEffect)((function(){N&&g(N)}),[N]),{selectedValue:v,selectValue:(0,r.useCallback)((function(e){if(!m({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);g(e),x(e),C(e)}),[x,C,p]),tabValues:p}}var v=n(72389),g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){var t=e.className,n=e.block,u=e.selectedValue,s=e.selectValue,l=e.tabValues,c=[],p=(0,i.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,n=c.indexOf(t),a=l[n].value;a!==u&&(p(t),s(a))},m=function(e){var t,n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var a,r=c.indexOf(e.currentTarget)+1;n=null!=(a=c[r])?a:c[0];break;case"ArrowLeft":var o,i=c.indexOf(e.currentTarget)-1;n=null!=(o=c[i])?o:c[c.length-1]}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},l.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:function(e){return c.push(e)},onKeyDown:m,onClick:d},i,{className:(0,o.Z)("tabs__item",g.tabItem,null==i?void 0:i.className,{"tabs__item--active":u===t})}),null!=n?n:t)})))}function y(e){var t=e.lazy,n=e.children,a=e.selectedValue;if(n=Array.isArray(n)?n:[n],t){var o=n.find((function(e){return e.props.value===a}));return o?(0,r.cloneElement)(o,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})})))}function x(e){var t=f(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",g.tabList)},r.createElement(b,(0,a.Z)({},e,t)),r.createElement(y,(0,a.Z)({},e,t)))}function w(e){var t=(0,v.Z)();return r.createElement(x,(0,a.Z)({key:String(t)},e))}},69745:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return p}});var a=n(83117),r=n(80102),o=(n(67294),n(3905)),i=(n(74866),n(85162),["components"]),u={id:"redux-integration",title:"Redux integration",sidebar_label:"Redux integration"},s=void 0,l={unversionedId:"redux-integration",id:"version-3.x/redux-integration",title:"Redux integration",description:"It is extremely easy to use Redux in an app with React Navigation. It's basically no different than without React Navigation. The following example shows how to do it end to end//snack.expo.io/@react-navigation/redux-example. The most important piece from it is the following:",source:"@site/versioned_docs/version-3.x/redux-integration.md",sourceDirName:".",slug:"/redux-integration",permalink:"/docs/3.x/redux-integration",draft:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-3.x/redux-integration.md",tags:[],version:"3.x",frontMatter:{id:"redux-integration",title:"Redux integration",sidebar_label:"Redux integration"},sidebar:"version-3.x-docs",previous:{title:"State persistence",permalink:"/docs/3.x/state-persistence"},next:{title:"MobX State Tree integration",permalink:"/docs/3.x/MST-integration"}},c={},p=[{value:"What about <code>navigationOptions</code>?",id:"what-about-navigationoptions",level:2},{value:"Use a component that is <code>connect</code>ed",id:"use-a-component-that-is-connected",level:3},{value:"Pass the state you care about as a param to the screen",id:"pass-the-state-you-care-about-as-a-param-to-the-screen",level:3},{value:"setParams from your screen",id:"setparams-from-your-screen",level:3},{value:"Can I store the navigation state in Redux too?",id:"can-i-store-the-navigation-state-in-redux-too",level:2}],d={toc:p},m="wrapper";function h(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"It is extremely easy to use Redux in an app with React Navigation. It's basically no different than without React Navigation. The following example shows how to do it end to end: ",(0,o.kt)("a",{parentName:"p",href:"https://snack.expo.io/@react-navigation/redux-example"},"https://snack.expo.io/@react-navigation/redux-example"),". The most important piece from it is the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"let RootStack = createStackNavigator({\n  Counter: CounterContainer,\n  StaticCounter: StaticCounterContainer,\n});\n\nlet Navigation = createAppContainer(RootStack);\n\n// Render the app container component with the provider around it\nexport default class App extends React.Component {\n  render() {\n    return (\n      <Provider store={store}>\n        <Navigation />\n      </Provider>\n    );\n  }\n}\n")),(0,o.kt)("p",null,"Notice that we take the component returned from ",(0,o.kt)("inlineCode",{parentName:"p"},"createAppContainer")," and wrap it in a ",(0,o.kt)("inlineCode",{parentName:"p"},"Provider"),". Ta da! Now feel free to use ",(0,o.kt)("inlineCode",{parentName:"p"},"connect")," throughout your app."),(0,o.kt)("h2",{id:"what-about-navigationoptions"},"What about ",(0,o.kt)("inlineCode",{parentName:"h2"},"navigationOptions"),"?"),(0,o.kt)("p",null,"Alright fair enough, the answer here isn't the most obvious. Let's say that you want to access the Redux store state from the title, what would you do? There are a couple of options. For these examples let's say that you want to put the count from the above example into the title."),(0,o.kt)("h3",{id:"use-a-component-that-is-connected"},"Use a component that is ",(0,o.kt)("inlineCode",{parentName:"h3"},"connect"),"ed"),(0,o.kt)("p",null,"Create a component, ",(0,o.kt)("inlineCode",{parentName:"p"},"connect")," it to the store, then use that component in the ",(0,o.kt)("inlineCode",{parentName:"p"},"title"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"class Count extends React.Component {\n  render() {\n    return <Text>Count: {this.props.value}</Text>\n  }\n}\n\nlet CountContainer = connect(state => ({ value: state.count }))(Count);\n\nclass Counter extends React.Component {\n  static navigationOptions = {\n    title: <CountContainer />\n  };\n\n  /* .. the rest of the code */\n}\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://snack.expo.io/@react-navigation/redux-example-with-dynamic-title"},"See a runnable example"),"."),(0,o.kt)("h3",{id:"pass-the-state-you-care-about-as-a-param-to-the-screen"},"Pass the state you care about as a param to the screen"),(0,o.kt)("p",null,"If the value isn't expected to change, you can just pass it from a ",(0,o.kt)("inlineCode",{parentName:"p"},"connect"),"ed component to the other screen as a param. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"<Button\n  title=\"Go to static count screen\"\n  onPress={() =>\n    this.props.navigation.navigate('StaticCounter', {\n      count: this.props.count,\n    })\n  }\n/>\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"class StaticCounter extends React.Component {\n  static navigationOptions = ({ navigation }) => ({\n    title: navigation.getParam('count'),\n  });\n\n  render() {\n    return (\n      <View style={styles.container}>\n        <Text style={styles.paragraph}>\n          {this.props.navigation.getParam('count')}\n        </Text>\n      </View>\n    );\n  }\n}\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://snack.expo.io/@react-navigation/redux-example-with-dynamic-title"},"See a runnable example"),"."),(0,o.kt)("h3",{id:"setparams-from-your-screen"},"setParams from your screen"),(0,o.kt)("p",null,"Let's modify the ",(0,o.kt)("inlineCode",{parentName:"p"},"StaticCounter")," from the previous example as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"class StaticCounter extends React.Component {\n  static navigationOptions = ({ navigation }) => ({\n    title: navigation.getParam('count'),\n  });\n\n  componentDidMount() {\n    this.updateCount();\n  }\n\n  componentDidUpdate() {\n    this.updateCount();\n  }\n\n  updateCount() {\n    this.props.navigation.setParams({ count: this.props.count });\n  }\n\n  render() {\n    return (\n      <View style={styles.container}>\n        <Text style={styles.paragraph}>\n          {this.props.navigation.getParam('count')}\n        </Text>\n      </View>\n    );\n  }\n}\n")),(0,o.kt)("p",null,"Now whenever the store updates we update the ",(0,o.kt)("inlineCode",{parentName:"p"},"count")," param and the title updates accordingly."),(0,o.kt)("h2",{id:"can-i-store-the-navigation-state-in-redux-too"},"Can I store the navigation state in Redux too?"),(0,o.kt)("p",null,"This is technically possible, but we don't recommend it - it's too easy to shoot yourself in the foot and slow down / break your app. We encourage you to leave it up to React Navigation to manage the navigation state. But if you really want to do this, you can use ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/react-navigation/react-navigation-redux-helpers"},"react-navigation-redux-helpers"),", but this isn't an officially supported workflow."))}h.isMDXComponent=!0}}]);