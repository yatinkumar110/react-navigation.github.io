"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[4074],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return h}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),c=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(p.Provider,{value:n},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=c(t),m=r,h=s["".concat(p,".").concat(m)]||s[m]||d[m]||i;return t?a.createElement(h,o(o({ref:n},u),{},{components:t})):a.createElement(h,o({ref:n},u))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[s]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},85162:function(e,n,t){t.d(n,{Z:function(){return o}});var a=t(67294),r=t(86010),i={tabItem:"tabItem_Ymn6"};function o(e){var n=e.children,t=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,o),hidden:t},n)}},74866:function(e,n,t){t.d(n,{Z:function(){return w}});var a=t(83117),r=t(67294),i=t(86010),o=t(12466),l=t(16550),p=t(91980),c=t(67392),u=t(50012);function s(e){return function(e){return r.Children.map(e,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}function d(e){var n=e.values,t=e.children;return(0,r.useMemo)((function(){var e=null!=n?n:s(t);return function(e){var n=(0,c.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function m(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function h(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId,i=(0,l.k6)(),o=function(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:t,groupId:a});return[(0,p._X)(o),(0,r.useCallback)((function(e){if(o){var n=new URLSearchParams(i.location.search);n.set(o,e),i.replace(Object.assign({},i.location,{search:n.toString()}))}}),[o,i])]}function f(e){var n,t,a,i,o=e.defaultValue,l=e.queryString,p=void 0!==l&&l,c=e.groupId,s=d(e),f=(0,r.useState)((function(){return function(e){var n,t=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var r=null!=(n=a.find((function(e){return e.default})))?n:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:o,tabValues:s})})),g=f[0],k=f[1],v=h({queryString:p,groupId:c}),b=v[0],y=v[1],w=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:c}.groupId),t=(0,u.Nk)(n),a=t[0],i=t[1],[a,(0,r.useCallback)((function(e){n&&i.set(e)}),[n,i])]),N=w[0],x=w[1],S=function(){var e=null!=b?b:N;return m({value:e,tabValues:s})?e:null}();return(0,r.useLayoutEffect)((function(){S&&k(S)}),[S]),{selectedValue:g,selectValue:(0,r.useCallback)((function(e){if(!m({value:e,tabValues:s}))throw new Error("Can't select invalid tab value="+e);k(e),y(e),x(e)}),[y,x,s]),tabValues:s}}var g=t(72389),k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){var n=e.className,t=e.block,l=e.selectedValue,p=e.selectValue,c=e.tabValues,u=[],s=(0,o.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var n=e.currentTarget,t=u.indexOf(n),a=c[t].value;a!==l&&(s(n),p(a))},m=function(e){var n,t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var a,r=u.indexOf(e.currentTarget)+1;t=null!=(a=u[r])?a:u[0];break;case"ArrowLeft":var i,o=u.indexOf(e.currentTarget)-1;t=null!=(i=u[o])?i:u[u.length-1]}null==(n=t)||n.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},n)},c.map((function(e){var n=e.value,t=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===n?0:-1,"aria-selected":l===n,key:n,ref:function(e){return u.push(e)},onKeyDown:m,onClick:d},o,{className:(0,i.Z)("tabs__item",k.tabItem,null==o?void 0:o.className,{"tabs__item--active":l===n})}),null!=t?t:n)})))}function b(e){var n=e.lazy,t=e.children,a=e.selectedValue;if(t=Array.isArray(t)?t:[t],n){var i=t.find((function(e){return e.props.value===a}));return i?(0,r.cloneElement)(i,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},t.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})})))}function y(e){var n=f(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",k.tabList)},r.createElement(v,(0,a.Z)({},e,n)),r.createElement(b,(0,a.Z)({},e,n)))}function w(e){var n=(0,g.Z)();return r.createElement(y,(0,a.Z)({key:String(n)},e))}},83650:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s}});var a=t(83117),r=t(80102),i=(t(67294),t(3905)),o=(t(74866),t(85162),["components"]),l={id:"deep-linking",title:"Deep linking",sidebar_label:"Deep linking"},p=void 0,c={unversionedId:"deep-linking",id:"version-3.x/deep-linking",title:"Deep linking",description:'In this guide we will set up our app to handle external URIs. Let\'s suppose that we want a URI like mychat://chat/Eric to open our app and link straight into a chat screen for some user named "Eric".',source:"@site/versioned_docs/version-3.x/deep-linking.md",sourceDirName:".",slug:"/deep-linking",permalink:"/docs/3.x/deep-linking",draft:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-3.x/deep-linking.md",tags:[],version:"3.x",frontMatter:{id:"deep-linking",title:"Deep linking",sidebar_label:"Deep linking"},sidebar:"version-3.x-docs",previous:{title:"Using the navigation key",permalink:"/docs/3.x/navigation-key"},next:{title:"Screen tracking for analytics",permalink:"/docs/3.x/screen-tracking"}},u={},s=[{value:"Configuration",id:"configuration",level:2},{value:"Set up with Expo projects",id:"set-up-with-expo-projects",level:2},{value:"URI Prefix",id:"uri-prefix",level:3},{value:"iOS",id:"ios",level:3},{value:"Android",id:"android",level:3},{value:"Set up with <code>react-native init</code> projects",id:"set-up-with-react-native-init-projects",level:2},{value:"URI Prefix",id:"uri-prefix-1",level:3},{value:"iOS",id:"ios-1",level:3},{value:"Android",id:"android-1",level:3},{value:"Disable deep linking",id:"disable-deep-linking",level:2}],d={toc:s},m="wrapper";function h(e){var n=e.components,l=(0,r.Z)(e,o);return(0,i.kt)(m,(0,a.Z)({},d,l,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In this guide we will set up our app to handle external URIs. Let's suppose that we want a URI like ",(0,i.kt)("inlineCode",{parentName:"p"},"mychat://chat/Eric"),' to open our app and link straight into a chat screen for some user named "Eric".'),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"Previously, we had defined a navigator like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const SimpleApp = createAppContainer(\n  createStackNavigator({\n    Home: { screen: HomeScreen },\n    Chat: { screen: ChatScreen },\n  })\n);\n")),(0,i.kt)("p",null,"We want paths like ",(0,i.kt)("inlineCode",{parentName:"p"},"chat/Eric"),' to link to a "Chat" screen with the ',(0,i.kt)("inlineCode",{parentName:"p"},"user")," passed as a param. Let's re-configure our chat screen with a ",(0,i.kt)("inlineCode",{parentName:"p"},"path")," that tells the router what relative path to match against, and what params to extract. This path spec would be ",(0,i.kt)("inlineCode",{parentName:"p"},"chat/:user"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const SimpleApp = createAppContainer(\n  createStackNavigator({\n    Home: { screen: HomeScreen },\n    Chat: {\n      screen: ChatScreen,\n      path: 'chat/:user',\n    },\n  })\n);\n")),(0,i.kt)("p",null,"If we have nested navigators, we need to provide each parent screen with a ",(0,i.kt)("inlineCode",{parentName:"p"},"path"),". All the paths will be concatenated and can also be an empty string. This path spec would be ",(0,i.kt)("inlineCode",{parentName:"p"},"friends/chat/:user"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const AuthSwitch = createAppContainer(\n  createStackNavigator({\n    AuthLoading: { screen: AuthLoadingScreen },\n    App: {\n      screen: AppStack,\n      path: '',\n    },\n    Auth: { screen: AuthStack },\n  })\n);\n\nconst AppStack = createStackNavigator({\n  Home: { screen: HomeScreen },\n  Friends: {\n    screen: FriendsScreen,\n    path: 'friends',\n  },\n});\n\nconst FriendsScreen = createStackNavigator({\n  Overview: { screen: OverviewScreen },\n  Chat: {\n    screen: ChatScreen,\n    path: 'chat/:user',\n  },\n});\n")),(0,i.kt)("h2",{id:"set-up-with-expo-projects"},"Set up with Expo projects"),(0,i.kt)("p",null,"You need to specify a scheme for your app. You can register for a scheme in your ",(0,i.kt)("inlineCode",{parentName:"p"},"app.json")," by adding a string under the scheme key:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "expo": {\n    "scheme": "mychat"\n  }\n}\n')),(0,i.kt)("h3",{id:"uri-prefix"},"URI Prefix"),(0,i.kt)("p",null,"Next, let's configure our navigation container to extract the path from the app's incoming URI."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const SimpleApp = createAppContainer(createStackNavigator({...}));\n\nconst prefix = Expo.Linking.makeUrl('/');\n\nconst MainApp = () => <SimpleApp uriPrefix={prefix} />;\n")),(0,i.kt)("h3",{id:"ios"},"iOS"),(0,i.kt)("p",null,"To test the URI on the simulator (Expo client app ), run the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"xcrun simctl openurl booted [ put your URI prefix in here ]\n\n// for example\n\nxcrun simctl openurl booted exp://127.0.0.1:19004/--/chat/Eric\n\n")),(0,i.kt)("h3",{id:"android"},"Android"),(0,i.kt)("p",null,"To test the intent handling in Android (Expo client app ), run the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'adb shell am start -W -a android.intent.action.VIEW -d "[ put your URI prefix in here ]" com.simpleapp\n\n// for example\n\nadb shell am start -W -a android.intent.action.VIEW -d "exp://127.0.0.1:19004/--/chat/Eric" com.simpleapp\n\n')),(0,i.kt)("p",null,"Read the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.expo.io/versions/latest/guides/linking.html"},"Expo linking guide")," for more information about how to configure linking in projects built with Expo."),(0,i.kt)("h2",{id:"set-up-with-react-native-init-projects"},"Set up with ",(0,i.kt)("inlineCode",{parentName:"h2"},"react-native init")," projects"),(0,i.kt)("h3",{id:"uri-prefix-1"},"URI Prefix"),(0,i.kt)("p",null,"Next, let's configure our navigation container to extract the path from the app's incoming URI."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const SimpleApp = createAppContainer(createStackNavigator({...}));\n\nconst prefix = 'mychat://';\n\nconst MainApp = () => <SimpleApp uriPrefix={prefix} />;\n")),(0,i.kt)("h3",{id:"ios-1"},"iOS"),(0,i.kt)("p",null,"Let's configure the native iOS app to open based on the ",(0,i.kt)("inlineCode",{parentName:"p"},"mychat://")," URI scheme."),(0,i.kt)("p",null,"In ",(0,i.kt)("inlineCode",{parentName:"p"},"SimpleApp/ios/SimpleApp/AppDelegate.m"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"// Add the header at the top of the file:\n#import <React/RCTLinkingManager.h>\n\n// Add this above the `@end`:\n- (BOOL)application:(UIApplication *)application openURL:(NSURL *)url\n  sourceApplication:(NSString *)sourceApplication annotation:(id)annotation\n{\n  return [RCTLinkingManager application:application openURL:url\n                      sourceApplication:sourceApplication annotation:annotation];\n}\n")),(0,i.kt)("p",null,"In Xcode, open the project at ",(0,i.kt)("inlineCode",{parentName:"p"},"SimpleApp/ios/SimpleApp.xcodeproj"),'. Select the project in sidebar and navigate to the info tab. Scroll down to "URL Types" and add one. In the new URL type, set the identifier and the URL scheme to your desired URL scheme.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Xcode project info URL types with mychat added",src:t(55236).Z,width:"1098",height:"560"})),(0,i.kt)("p",null,"Now you can press play in Xcode, or re-build on the command line:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"react-native run-ios\n")),(0,i.kt)("p",null,"To test the URI on the simulator, run the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"xcrun simctl openurl booted mychat://chat/Eric\n")),(0,i.kt)("p",null,"To test the URI on a real device, open Safari and type ",(0,i.kt)("inlineCode",{parentName:"p"},"mychat://chat/Eric"),"."),(0,i.kt)("h3",{id:"android-1"},"Android"),(0,i.kt)("p",null,"To configure the external linking in Android, you can create a new intent in the manifest."),(0,i.kt)("p",null,"In ",(0,i.kt)("inlineCode",{parentName:"p"},"SimpleApp/android/app/src/main/AndroidManifest.xml"),", do these followings adjustments:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Set ",(0,i.kt)("inlineCode",{parentName:"li"},"launchMode")," of ",(0,i.kt)("inlineCode",{parentName:"li"},"MainActivity")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"singleTask")," in order to receive intent on existing ",(0,i.kt)("inlineCode",{parentName:"li"},"MainActivity"),". It is useful if you want to perform navigation using deep link you have been registered - ",(0,i.kt)("a",{parentName:"li",href:"http://developer.android.com/training/app-indexing/deep-linking.html#adding-filters"},"details")),(0,i.kt)("li",{parentName:"ol"},"Add the new ",(0,i.kt)("inlineCode",{parentName:"li"},"intent-filter")," inside the ",(0,i.kt)("inlineCode",{parentName:"li"},"MainActivity")," entry with a ",(0,i.kt)("inlineCode",{parentName:"li"},"VIEW")," type action:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'<activity\n    android:name=".MainActivity"\n    android:launchMode="singleTask">\n    <intent-filter>\n        <action android:name="android.intent.action.MAIN" />\n        <category android:name="android.intent.category.LAUNCHER" />\n    </intent-filter>\n    <intent-filter>\n        <action android:name="android.intent.action.VIEW" />\n        <category android:name="android.intent.category.DEFAULT" />\n        <category android:name="android.intent.category.BROWSABLE" />\n        <data android:scheme="mychat" />\n    </intent-filter>\n</activity>\n')),(0,i.kt)("p",null,"Now, re-install the app:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"react-native run-android\n")),(0,i.kt)("p",null,"To test the intent handling in Android, run the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'adb shell am start -W -a android.intent.action.VIEW -d "mychat://chat/Eric" com.simpleapp\n')),(0,i.kt)("h2",{id:"disable-deep-linking"},"Disable deep linking"),(0,i.kt)("p",null,"In case you want to handle routing with deep-linking by yourself instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"react-navigation"),", you can pass ",(0,i.kt)("inlineCode",{parentName:"p"},"enableURLHandling={false}")," prop to your app container:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const SimpleApp = createAppContainer(createStackNavigator({...}));\n\nconst MainApp = () => <SimpleApp enableURLHandling={false} />;\n")),(0,i.kt)("p",null,"Then, to handle the URL with the parameters, you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"Linking")," in your components to react to events."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"componentDidMount() {\n    // [...]\n    Linking.addEventListener('url', this.handleDeepLink)\n}\ncomponentWillUnmount() {\n    // [...]\n    Linking.removeEventListener('url', this.handleDeepLink);\n}\n")),(0,i.kt)("p",null,"And the method to handle it :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"handleDeepLink(e) {\n    const route = e.url.replace(/.*?:\\/\\//g, '')\n    // use route to navigate\n    // ...\n}\n")),(0,i.kt)("p",null,"This should get you started! \ud83e\udd73"))}h.isMDXComponent=!0},55236:function(e,n,t){n.Z=t.p+"assets/images/xcode-linking-9a32c91fae982fab28dc33e7f951e8b3.png"}}]);