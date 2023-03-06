"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[28774],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(67294),r=n(86010),o={tabItem:"tabItem_Ymn6"};function i(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,i),hidden:n},t)}},74866:function(e,t,n){n.d(t,{Z:function(){return y}});var a=n(83117),r=n(67294),o=n(86010),i=n(12466),s=n(16550),l=n(91980),c=n(67392),u=n(50012);function p(e){return function(e){return r.Children.map(e,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function d(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:p(n);return function(e){var t=(0,c.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function m(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function h(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,o=(0,s.k6)(),i=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:a});return[(0,l._X)(i),(0,r.useCallback)((function(e){if(i){var t=new URLSearchParams(o.location.search);t.set(i,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[i,o])]}function g(e){var t,n,a,o,i=e.defaultValue,s=e.queryString,l=void 0!==s&&s,c=e.groupId,p=d(e),g=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:i,tabValues:p})})),v=g[0],f=g[1],k=h({queryString:l,groupId:c}),b=k[0],N=k[1],y=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:c}.groupId),n=(0,u.Nk)(t),a=n[0],o=n[1],[a,(0,r.useCallback)((function(e){t&&o.set(e)}),[t,o])]),w=y[0],C=y[1],S=function(){var e=null!=b?b:w;return m({value:e,tabValues:p})?e:null}();return(0,r.useLayoutEffect)((function(){S&&f(S)}),[S]),{selectedValue:v,selectValue:(0,r.useCallback)((function(e){if(!m({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);f(e),N(e),C(e)}),[N,C,p]),tabValues:p}}var v=n(72389),f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){var t=e.className,n=e.block,s=e.selectedValue,l=e.selectValue,c=e.tabValues,u=[],p=(0,i.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,n=u.indexOf(t),a=c[n].value;a!==s&&(p(t),l(a))},m=function(e){var t,n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var a,r=u.indexOf(e.currentTarget)+1;n=null!=(a=u[r])?a:u[0];break;case"ArrowLeft":var o,i=u.indexOf(e.currentTarget)-1;n=null!=(o=u[i])?o:u[u.length-1]}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},c.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:function(e){return u.push(e)},onKeyDown:m,onClick:d},i,{className:(0,o.Z)("tabs__item",f.tabItem,null==i?void 0:i.className,{"tabs__item--active":s===t})}),null!=n?n:t)})))}function b(e){var t=e.lazy,n=e.children,a=e.selectedValue;if(n=Array.isArray(n)?n:[n],t){var o=n.find((function(e){return e.props.value===a}));return o?(0,r.cloneElement)(o,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})})))}function N(e){var t=g(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",f.tabList)},r.createElement(k,(0,a.Z)({},e,t)),r.createElement(b,(0,a.Z)({},e,t)))}function y(e){var t=(0,v.Z)();return r.createElement(N,(0,a.Z)({key:String(t)},e))}},65116:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return v},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return m}});var a=n(83117),r=n(80102),o=(n(67294),n(3905)),i=n(74866),s=n(85162),l=["components"],c={id:"hello-react-navigation",title:"Hello React Navigation",sidebar_label:"Hello React Navigation"},u=void 0,p={unversionedId:"hello-react-navigation",id:"version-5.x/hello-react-navigation",title:"Hello React Navigation",description:"In a web browser, you can link to different pages using an anchor (``) tag. When the user clicks on a link, the URL is pushed to the browser history stack. When the user presses the back button, the browser pops the item from the top of the history stack, so the active page is now the previously visited page. React Native doesn't have a built-in idea of a global history stack like a web browser does -- this is where React Navigation enters the story.",source:"@site/versioned_docs/version-5.x/hello-react-navigation.md",sourceDirName:".",slug:"/hello-react-navigation",permalink:"/docs/5.x/hello-react-navigation",draft:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-5.x/hello-react-navigation.md",tags:[],version:"5.x",frontMatter:{id:"hello-react-navigation",title:"Hello React Navigation",sidebar_label:"Hello React Navigation"},sidebar:"version-5.x/docs",previous:{title:"Getting started",permalink:"/docs/5.x/getting-started"},next:{title:"Moving between screens",permalink:"/docs/5.x/navigating"}},d={},m=[{value:"Installing the stack navigator library",id:"installing-the-stack-navigator-library",level:2},{value:"Creating a stack navigator",id:"creating-a-stack-navigator",level:3},{value:"Configuring the navigator",id:"configuring-the-navigator",level:3},{value:"Specifying options",id:"specifying-options",level:3},{value:"Passing additional props",id:"passing-additional-props",level:3},{value:"What&#39;s next?",id:"whats-next",level:2},{value:"Summary",id:"summary",level:2}],h={toc:m},g="wrapper";function v(e){var t=e.components,c=(0,r.Z)(e,l);return(0,o.kt)(g,(0,a.Z)({},h,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In a web browser, you can link to different pages using an anchor (",(0,o.kt)("inlineCode",{parentName:"p"},"<a>"),") tag. When the user clicks on a link, the URL is pushed to the browser history stack. When the user presses the back button, the browser pops the item from the top of the history stack, so the active page is now the previously visited page. React Native doesn't have a built-in idea of a global history stack like a web browser does -- this is where React Navigation enters the story."),(0,o.kt)("p",null,"React Navigation's stack navigator provides a way for your app to transition between screens and manage navigation history. If your app uses only one stack navigator then it is conceptually similar to how a web browser handles navigation state - your app pushes and pops items from the navigation stack as users interact with it, and this results in the user seeing different screens. A key difference between how this works in a web browser and in React Navigation is that React Navigation's stack navigator provides the gestures and animations that you would expect on Android and iOS when navigating between routes in the stack."),(0,o.kt)("p",null,"Lets start by demonstrating the most common navigator, ",(0,o.kt)("inlineCode",{parentName:"p"},"createStackNavigator"),"."),(0,o.kt)("h2",{id:"installing-the-stack-navigator-library"},"Installing the stack navigator library"),(0,o.kt)("p",null,"The libraries we've installed so far are the building blocks and shared foundations for navigators, and each navigator in React Navigation lives in its own library. To use the stack navigator, we need to install ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/react-navigation/react-navigation/tree/main/packages/stack"},(0,o.kt)("inlineCode",{parentName:"a"},"@react-navigation/stack"))," :"),(0,o.kt)(i.Z,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @react-navigation/stack@^5.x\n"))),(0,o.kt)(s.Z,{value:"yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @react-navigation/stack@^5.x\n")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\ud83d\udca1 ",(0,o.kt)("inlineCode",{parentName:"p"},"@react-navigation/stack")," depends on ",(0,o.kt)("inlineCode",{parentName:"p"},"@react-native-community/masked-view")," and the other libraries that we installed in ",(0,o.kt)("a",{parentName:"p",href:"/docs/5.x/getting-started"},"Getting started"),". If you haven't installed those yet, head over to that page and follow the installation instructions.")),(0,o.kt)("h3",{id:"creating-a-stack-navigator"},"Creating a stack navigator"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"createStackNavigator")," is a function that returns an object containing 2 properties: ",(0,o.kt)("inlineCode",{parentName:"p"},"Screen")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Navigator"),". Both of them are React components used for configuring the navigator. The ",(0,o.kt)("inlineCode",{parentName:"p"},"Navigator")," should contain ",(0,o.kt)("inlineCode",{parentName:"p"},"Screen")," elements as its children to define the configuration for routes."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"NavigationContainer")," is a component which manages our navigation tree and contains the ",(0,o.kt)("a",{parentName:"p",href:"/docs/5.x/navigation-state"},"navigation state"),". This component must wrap all navigators structure. Usually, we'd render this component at the root of our app, which is usually the component exported from ",(0,o.kt)("inlineCode",{parentName:"p"},"App.js"),"."),(0,o.kt)("samp",{id:"hello-react-navigation"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// In App.js in a new project\n\nimport * as React from 'react';\nimport { View, Text } from 'react-native';\nimport { NavigationContainer } from '@react-navigation/native';\nimport { createStackNavigator } from '@react-navigation/stack';\n\nfunction HomeScreen() {\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text>Home Screen</Text>\n    </View>\n  );\n}\n\nconst Stack = createStackNavigator();\n\nfunction App() {\n  return (\n    <NavigationContainer>\n      <Stack.Navigator>\n        <Stack.Screen name=\"Home\" component={HomeScreen} />\n      </Stack.Navigator>\n    </NavigationContainer>\n  );\n}\n\nexport default App;\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Basic app using stack navigator",src:n(63621).Z,width:"320",height:"569"})),(0,o.kt)("p",null,"If you run this code, you will see a screen with an empty navigation bar and a grey content area containing your ",(0,o.kt)("inlineCode",{parentName:"p"},"HomeScreen")," component (shown above). The styles you see for the navigation bar and the content area are the default configuration for a stack navigator, we'll learn how to configure those later."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The casing of the route name doesn't matter -- you can use lowercase ",(0,o.kt)("inlineCode",{parentName:"p"},"home")," or capitalized ",(0,o.kt)("inlineCode",{parentName:"p"},"Home"),", it's up to you. We prefer capitalizing our route names.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The only required configuration for a screen is the ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"component")," props. You can read more about the other options available in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/5.x/stack-navigator"},"stack navigator reference"),".")),(0,o.kt)("h3",{id:"configuring-the-navigator"},"Configuring the navigator"),(0,o.kt)("p",null,"All of the route configuration is specified as props to our navigator. We haven't passed any props to our navigator, so it just uses the default configuration."),(0,o.kt)("p",null,"Let's add a second screen to our stack navigator and configure the ",(0,o.kt)("inlineCode",{parentName:"p"},"Home")," screen to render first:"),(0,o.kt)("samp",{id:"hello-react-navigation-full"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'function DetailsScreen() {\n  return (\n    <View style={{ flex: 1, alignItems: \'center\', justifyContent: \'center\' }}>\n      <Text>Details Screen</Text>\n    </View>\n  );\n}\n\nconst Stack = createStackNavigator();\n\nfunction App() {\n  return (\n    <NavigationContainer>\n      <Stack.Navigator initialRouteName="Home">\n        <Stack.Screen name="Home" component={HomeScreen} />\n        <Stack.Screen name="Details" component={DetailsScreen} />\n      </Stack.Navigator>\n    </NavigationContainer>\n  );\n}\n')),(0,o.kt)("p",null,"Now our stack has two ",(0,o.kt)("em",{parentName:"p"},"routes"),", a ",(0,o.kt)("inlineCode",{parentName:"p"},"Home")," route and a ",(0,o.kt)("inlineCode",{parentName:"p"},"Details")," route. A route can be specified by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"Screen")," component. The ",(0,o.kt)("inlineCode",{parentName:"p"},"Screen")," component accepts a ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," prop which corresponds to the name of the route we will use to navigate, and a ",(0,o.kt)("inlineCode",{parentName:"p"},"component")," prop which corresponds to the component it'll render."),(0,o.kt)("p",null,"Here, the ",(0,o.kt)("inlineCode",{parentName:"p"},"Home")," route corresponds to the ",(0,o.kt)("inlineCode",{parentName:"p"},"HomeScreen")," component, and the ",(0,o.kt)("inlineCode",{parentName:"p"},"Details")," route corresponds to the ",(0,o.kt)("inlineCode",{parentName:"p"},"DetailsScreen")," component. The initial route for the stack is the ",(0,o.kt)("inlineCode",{parentName:"p"},"Home")," route. Try changing it to ",(0,o.kt)("inlineCode",{parentName:"p"},"Details")," and reload the app (React Native's Fast Refresh won't update changes from ",(0,o.kt)("inlineCode",{parentName:"p"},"initialRouteName"),", as you might expect), notice that you will now see the ",(0,o.kt)("inlineCode",{parentName:"p"},"Details")," screen. Then change it back to ",(0,o.kt)("inlineCode",{parentName:"p"},"Home")," and reload once more."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: The ",(0,o.kt)("inlineCode",{parentName:"p"},"component")," prop accepts component, not a render function. Don't pass an inline function (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"component={() => <HomeScreen />}"),"), or your component will unmount and remount losing all state when the parent component re-renders. See ",(0,o.kt)("a",{parentName:"p",href:"#passing-additional-props"},"Passing additional props")," for alternatives.")),(0,o.kt)("h3",{id:"specifying-options"},"Specifying options"),(0,o.kt)("p",null,"Each screen in the navigator can specify some options for the navigator, such as the title to render in the header. These options can be passed in the ",(0,o.kt)("inlineCode",{parentName:"p"},"options")," prop for each screen component:"),(0,o.kt)("samp",{id:"hello-react-navigation-with-options"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"<Stack.Screen\n  name=\"Home\"\n  component={HomeScreen}\n  options={{ title: 'Overview' }}\n/>\n")),(0,o.kt)("p",null,"Sometimes we will want to specify the same options for all of the screens in the navigator. For that, we can pass a ",(0,o.kt)("inlineCode",{parentName:"p"},"screenOptions")," prop to the navigator."),(0,o.kt)("h3",{id:"passing-additional-props"},"Passing additional props"),(0,o.kt)("p",null,"Sometimes we might want to pass additional props to a screen. We can do that with 2 approaches:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Use ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/context.html"},"React context")," and wrap the navigator with a context provider to pass data to the screens (recommended).")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Use a render callback for the screen instead of specifying a ",(0,o.kt)("inlineCode",{parentName:"p"},"component")," prop:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-js"},'<Stack.Screen name="Home">\n  {props => <HomeScreen {...props} extraData={someData} />}\n</Stack.Screen>\n')))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: By default, React Navigation applies optimizations to screen components to prevent unnecessary renders. Using a render callback removes those optimizations. So if you use a render callback, you'll need to ensure that you use ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/react-api.html#reactmemo"},(0,o.kt)("inlineCode",{parentName:"a"},"React.memo"))," or ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/react-api.html#reactpurecomponent"},(0,o.kt)("inlineCode",{parentName:"a"},"React.PureComponent"))," for your screen components to avoid performance issues.")),(0,o.kt)("h2",{id:"whats-next"},"What's next?"),(0,o.kt)("p",null,'The natural question at this point is: "how do I go from the ',(0,o.kt)("inlineCode",{parentName:"p"},"Home")," route to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Details"),' route?". That is covered in the ',(0,o.kt)("a",{parentName:"p",href:"/docs/5.x/navigating"},"next section"),"."),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"React Native doesn't have a built-in API for navigation like a web browser does. React Navigation provides this for you, along with the iOS and Android gestures and animations to transition between screens."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Stack.Navigator")," is a component that takes route configuration as its children with additional props for configuration and renders our content."),(0,o.kt)("li",{parentName:"ul"},"Each ",(0,o.kt)("inlineCode",{parentName:"li"},"Stack.Screen")," component takes a ",(0,o.kt)("inlineCode",{parentName:"li"},"name")," prop which refers to the name of the route and ",(0,o.kt)("inlineCode",{parentName:"li"},"component")," prop which specifies the component to render for the route. These are the 2 required props."),(0,o.kt)("li",{parentName:"ul"},"To specify what the initial route in a stack is, provide an ",(0,o.kt)("inlineCode",{parentName:"li"},"initialRouteName")," as the prop for the navigator."),(0,o.kt)("li",{parentName:"ul"},"To specify screen-specific options, we can pass an ",(0,o.kt)("inlineCode",{parentName:"li"},"options")," prop to ",(0,o.kt)("inlineCode",{parentName:"li"},"Stack.Screen"),", and for common options, we can pass ",(0,o.kt)("inlineCode",{parentName:"li"},"screenOptions")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"Stack.Navigator"))))}v.isMDXComponent=!0},63621:function(e,t,n){t.Z=n.p+"assets/images/basic_stack_nav-7388d409c412d0c728a0903301338433.png"}}]);