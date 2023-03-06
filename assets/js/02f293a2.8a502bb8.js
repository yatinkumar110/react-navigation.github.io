"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[36926],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=l(n),d=r,f=p["".concat(s,".").concat(d)]||p[d]||h[d]||o;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u[p]="string"==typeof e?e:r,i[1]=u;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(67294),r=n(86010),o={tabItem:"tabItem_Ymn6"};function i(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,i),hidden:n},t)}},74866:function(e,t,n){n.d(t,{Z:function(){return k}});var a=n(83117),r=n(67294),o=n(86010),i=n(12466),u=n(16550),s=n(91980),l=n(67392),c=n(50012);function p(e){return function(e){return r.Children.map(e,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function h(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:p(n);return function(e){var t=(0,l.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function d(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function f(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,o=(0,u.k6)(),i=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:a});return[(0,s._X)(i),(0,r.useCallback)((function(e){if(i){var t=new URLSearchParams(o.location.search);t.set(i,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[i,o])]}function m(e){var t,n,a,o,i=e.defaultValue,u=e.queryString,s=void 0!==u&&u,l=e.groupId,p=h(e),m=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!d({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:i,tabValues:p})})),v=m[0],g=m[1],b=f({queryString:s,groupId:l}),w=b[0],y=b[1],k=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:l}.groupId),n=(0,c.Nk)(t),a=n[0],o=n[1],[a,(0,r.useCallback)((function(e){t&&o.set(e)}),[t,o])]),S=k[0],N=k[1],A=function(){var e=null!=w?w:S;return d({value:e,tabValues:p})?e:null}();return(0,r.useLayoutEffect)((function(){A&&g(A)}),[A]),{selectedValue:v,selectValue:(0,r.useCallback)((function(e){if(!d({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);g(e),y(e),N(e)}),[y,N,p]),tabValues:p}}var v=n(72389),g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){var t=e.className,n=e.block,u=e.selectedValue,s=e.selectValue,l=e.tabValues,c=[],p=(0,i.o5)().blockElementScrollPositionUntilNextRender,h=function(e){var t=e.currentTarget,n=c.indexOf(t),a=l[n].value;a!==u&&(p(t),s(a))},d=function(e){var t,n=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":var a,r=c.indexOf(e.currentTarget)+1;n=null!=(a=c[r])?a:c[0];break;case"ArrowLeft":var o,i=c.indexOf(e.currentTarget)-1;n=null!=(o=c[i])?o:c[c.length-1]}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},l.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:function(e){return c.push(e)},onKeyDown:d,onClick:h},i,{className:(0,o.Z)("tabs__item",g.tabItem,null==i?void 0:i.className,{"tabs__item--active":u===t})}),null!=n?n:t)})))}function w(e){var t=e.lazy,n=e.children,a=e.selectedValue;if(n=Array.isArray(n)?n:[n],t){var o=n.find((function(e){return e.props.value===a}));return o?(0,r.cloneElement)(o,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})})))}function y(e){var t=m(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",g.tabList)},r.createElement(b,(0,a.Z)({},e,t)),r.createElement(w,(0,a.Z)({},e,t)))}function k(e){var t=(0,v.Z)();return r.createElement(y,(0,a.Z)({key:String(t)},e))}},26951:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return p}});var a=n(83117),r=n(80102),o=(n(67294),n(3905)),i=(n(74866),n(85162),["components"]),u={id:"auth-flow",title:"Authentication flows",sidebar_label:"Authentication flows"},s=void 0,l={unversionedId:"auth-flow",id:"version-1.x/auth-flow",title:"Authentication flows",description:"Most apps require that a user authenticate in some way to have access to data associated with a user or other private content. Typically the flow will look like this:",source:"@site/versioned_docs/version-1.x/auth-flow.md",sourceDirName:".",slug:"/auth-flow",permalink:"/docs/1.x/auth-flow",draft:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-1.x/auth-flow.md",tags:[],version:"1.x",frontMatter:{id:"auth-flow",title:"Authentication flows",sidebar_label:"Authentication flows"},sidebar:"version-1.x/docs",previous:{title:"Drawer navigation",permalink:"/docs/1.x/drawer-based-navigation"},next:{title:"iPhone X support",permalink:"/docs/1.x/handling-iphonex"}},c={},p=[{value:"Set up our navigators",id:"set-up-our-navigators",level:2},{value:"Implement our authentication loading screen",id:"implement-our-authentication-loading-screen",level:2},{value:"Fill in other components",id:"fill-in-other-components",level:2}],h={toc:p},d="wrapper";function f(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)(d,(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Most apps require that a user authenticate in some way to have access to data associated with a user or other private content. Typically the flow will look like this:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The user opens the app."),(0,o.kt)("li",{parentName:"ul"},"The app loads some authentication state from persistent storage (for example, ",(0,o.kt)("inlineCode",{parentName:"li"},"AsyncStorage"),")."),(0,o.kt)("li",{parentName:"ul"},"When the state has loaded, the user is presented with either authentication screens or the main app, depending on whether valid authentication state was loaded."),(0,o.kt)("li",{parentName:"ul"},"When the user signs out, we clear the authentication state and send them back to authentication screens.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},'Note: we say "authentication screens" because usually there is more than one. You may have a main screen with a username and password field, another for "forgot password", and another set for sign up.')),(0,o.kt)("h2",{id:"set-up-our-navigators"},"Set up our navigators"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { StackNavigator, SwitchNavigator } from 'react-navigation';\n\n// Implementation of HomeScreen, OtherScreen, SignInScreen, AuthLoadingScreen\n// goes here.\n\nconst AppStack = StackNavigator({ Home: HomeScreen, Other: OtherScreen });\nconst AuthStack = StackNavigator({ SignIn: SignInScreen });\n\nexport default SwitchNavigator(\n  {\n    AuthLoading: AuthLoadingScreen,\n    App: AppStack,\n    Auth: AuthStack,\n  },\n  {\n    initialRouteName: 'AuthLoading',\n  }\n);\n")),(0,o.kt)("a",{href:"https://snack.expo.io/@react-navigation/auth-flow",target:"blank",class:"run-code-button"},"\u2192 Run this code"),(0,o.kt)("p",null,"You may not be familiar with ",(0,o.kt)("inlineCode",{parentName:"p"},"SwitchNavigator")," yet. The purpose of ",(0,o.kt)("inlineCode",{parentName:"p"},"SwitchNavigator")," is to only ever show one screen at a time. By default, it does not handle back actions and it resets routes to their default state when you switch away. This is the exact behavior that we want from the authentication flow: when users sign in, we want to throw away the state of the authentication flow and unmount all of the screens, and when we press the hardware back button we expect to not be able to go back to the authentication flow. We switch between routes in the ",(0,o.kt)("inlineCode",{parentName:"p"},"SwitchNavigator")," by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"navigate")," action. You can read more about the ",(0,o.kt)("inlineCode",{parentName:"p"},"SwitchNavigator")," in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/1.x/switch-navigator"},"API reference"),"."),(0,o.kt)("p",null,"We set the ",(0,o.kt)("inlineCode",{parentName:"p"},"initialRouteName")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"'AuthLoading'")," because we will fetch our authentication state from persistent storage inside of that screen component."),(0,o.kt)("h2",{id:"implement-our-authentication-loading-screen"},"Implement our authentication loading screen"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import React from 'react';\nimport {\n  ActivityIndicator,\n  AsyncStorage,\n  StatusBar,\n  StyleSheet,\n  View,\n} from 'react-native';\n\nclass AuthLoadingScreen extends React.Component {\n  constructor(props) {\n    super(props);\n    this._bootstrapAsync();\n  }\n\n  // Fetch the token from storage then navigate to our appropriate place\n  _bootstrapAsync = async () => {\n    const userToken = await AsyncStorage.getItem('userToken');\n\n    // This will switch to the App screen or Auth screen and this loading\n    // screen will be unmounted and thrown away.\n    this.props.navigation.navigate(userToken ? 'App' : 'Auth');\n  };\n\n  // Render any loading content that you like here\n  render() {\n    return (\n      <View>\n        <ActivityIndicator />\n        <StatusBar barStyle=\"default\" />\n      </View>\n    );\n  }\n}\n")),(0,o.kt)("a",{href:"https://snack.expo.io/@react-navigation/auth-flow",target:"blank",class:"run-code-button"},"\u2192 Run this code"),(0,o.kt)("h2",{id:"fill-in-other-components"},"Fill in other components"),(0,o.kt)("p",null,"Our ",(0,o.kt)("inlineCode",{parentName:"p"},"App")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Auth")," routes are both ",(0,o.kt)("inlineCode",{parentName:"p"},"StackNavigators"),", but you could do whatever you like here. As mentioned above, you probably want your authentication route to be a stack for password reset, signup, etc. Similarly for your app, you probably have more than one screen. We won't talk about how to implement the text inputs and buttons for the authentication screen, that is outside of the scope of navigation. We'll just fill in some placeholder content."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"class SignInScreen extends React.Component {\n  static navigationOptions = {\n    title: 'Please sign in',\n  };\n\n  render() {\n    return (\n      <View>\n        <Button title=\"Sign in!\" onPress={this._signInAsync} />\n      </View>\n    );\n  }\n\n  _signInAsync = async () => {\n    await AsyncStorage.setItem('userToken', 'abc');\n    this.props.navigation.navigate('App');\n  };\n}\n\nclass HomeScreen extends React.Component {\n  static navigationOptions = {\n    title: 'Welcome to the app!',\n  };\n\n  render() {\n    return (\n      <View>\n        <Button title=\"Show me more of the app\" onPress={this._showMoreApp} />\n        <Button title=\"Actually, sign me out :)\" onPress={this._signOutAsync} />\n      </View>\n    );\n  }\n\n  _showMoreApp = () => {\n    this.props.navigation.navigate('Other');\n  };\n\n  _signOutAsync = async () => {\n    await AsyncStorage.clear();\n    this.props.navigation.navigate('Auth');\n  };\n}\n\n// More code like OtherScreen omitted for brevity\n")),(0,o.kt)("a",{href:"https://snack.expo.io/@react-navigation/auth-flow",target:"blank",class:"run-code-button"},"\u2192 Run this code"),(0,o.kt)("p",null,"That's about all there is to it. At the moment, ",(0,o.kt)("inlineCode",{parentName:"p"},"SwitchNavigator")," doesn't support animating between screens. Let us know if this is important to you ",(0,o.kt)("a",{parentName:"p",href:"https://react-navigation.canny.io/feature-requests"},"on Canny"),"."))}f.isMDXComponent=!0}}]);