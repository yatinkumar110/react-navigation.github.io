"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[75460],{3905:function(e,n,a){a.d(n,{Zo:function(){return u},kt:function(){return h}});var t=a(67294);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,t,i=function(e,n){if(null==e)return{};var a,t,i={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=t.createContext({}),c=function(e){var n=t.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},u=function(e){var n=c(e.components);return t.createElement(l.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(a),g=i,h=p["".concat(l,".").concat(g)]||p[g]||d[g]||r;return a?t.createElement(h,o(o({ref:n},u),{},{components:a})):t.createElement(h,o({ref:n},u))}));function h(e,n){var a=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=g;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=a[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}g.displayName="MDXCreateElement"},85162:function(e,n,a){a.d(n,{Z:function(){return o}});var t=a(67294),i=a(86010),r={tabItem:"tabItem_Ymn6"};function o(e){var n=e.children,a=e.hidden,o=e.className;return t.createElement("div",{role:"tabpanel",className:(0,i.Z)(r.tabItem,o),hidden:a},n)}},74866:function(e,n,a){a.d(n,{Z:function(){return y}});var t=a(83117),i=a(67294),r=a(86010),o=a(12466),s=a(16550),l=a(91980),c=a(67392),u=a(50012);function p(e){return function(e){return i.Children.map(e,(function(e){if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}function d(e){var n=e.values,a=e.children;return(0,i.useMemo)((function(){var e=null!=n?n:p(a);return function(e){var n=(0,c.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,a])}function g(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function h(e){var n=e.queryString,a=void 0!==n&&n,t=e.groupId,r=(0,s.k6)(),o=function(e){var n=e.queryString,a=void 0!==n&&n,t=e.groupId;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:a,groupId:t});return[(0,l._X)(o),(0,i.useCallback)((function(e){if(o){var n=new URLSearchParams(r.location.search);n.set(o,e),r.replace(Object.assign({},r.location,{search:n.toString()}))}}),[o,r])]}function v(e){var n,a,t,r,o=e.defaultValue,s=e.queryString,l=void 0!==s&&s,c=e.groupId,p=d(e),v=(0,i.useState)((function(){return function(e){var n,a=e.defaultValue,t=e.tabValues;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!g({value:a,tabValues:t}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+a+'" but none of its children has the corresponding value. Available values are: '+t.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return a}var i=null!=(n=t.find((function(e){return e.default})))?n:t[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:o,tabValues:p})})),m=v[0],f=v[1],k=h({queryString:l,groupId:c}),b=k[0],w=k[1],y=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:c}.groupId),a=(0,u.Nk)(n),t=a[0],r=a[1],[t,(0,i.useCallback)((function(e){n&&r.set(e)}),[n,r])]),N=y[0],S=y[1],C=function(){var e=null!=b?b:N;return g({value:e,tabValues:p})?e:null}();return(0,i.useLayoutEffect)((function(){C&&f(C)}),[C]),{selectedValue:m,selectValue:(0,i.useCallback)((function(e){if(!g({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);f(e),w(e),S(e)}),[w,S,p]),tabValues:p}}var m=a(72389),f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){var n=e.className,a=e.block,s=e.selectedValue,l=e.selectValue,c=e.tabValues,u=[],p=(0,o.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var n=e.currentTarget,a=u.indexOf(n),t=c[a].value;t!==s&&(p(n),l(t))},g=function(e){var n,a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var t,i=u.indexOf(e.currentTarget)+1;a=null!=(t=u[i])?t:u[0];break;case"ArrowLeft":var r,o=u.indexOf(e.currentTarget)-1;a=null!=(r=u[o])?r:u[u.length-1]}null==(n=a)||n.focus()};return i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},n)},c.map((function(e){var n=e.value,a=e.label,o=e.attributes;return i.createElement("li",(0,t.Z)({role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,key:n,ref:function(e){return u.push(e)},onKeyDown:g,onClick:d},o,{className:(0,r.Z)("tabs__item",f.tabItem,null==o?void 0:o.className,{"tabs__item--active":s===n})}),null!=a?a:n)})))}function b(e){var n=e.lazy,a=e.children,t=e.selectedValue;if(a=Array.isArray(a)?a:[a],n){var r=a.find((function(e){return e.props.value===t}));return r?(0,i.cloneElement)(r,{className:"margin-top--md"}):null}return i.createElement("div",{className:"margin-top--md"},a.map((function(e,n){return(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==t})})))}function w(e){var n=v(e);return i.createElement("div",{className:(0,r.Z)("tabs-container",f.tabList)},i.createElement(k,(0,t.Z)({},e,n)),i.createElement(b,(0,t.Z)({},e,n)))}function y(e){var n=(0,m.Z)();return i.createElement(w,(0,t.Z)({key:String(n)},e))}},14115:function(e,n,a){a.r(n),a.d(n,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var t=a(83117),i=a(80102),r=(a(67294),a(3905)),o=(a(74866),a(85162),["components"]),s={id:"nesting-navigators",title:"Nesting navigators",sidebar_label:"Nesting navigators"},l=void 0,c={unversionedId:"nesting-navigators",id:"version-6.x/nesting-navigators",title:"Nesting navigators",description:"Nesting navigators means rendering a navigator inside a screen of another navigator, for example:",source:"@site/versioned_docs/version-6.x/nesting-navigators.md",sourceDirName:".",slug:"/nesting-navigators",permalink:"/docs/nesting-navigators",draft:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-6.x/nesting-navigators.md",tags:[],version:"6.x",frontMatter:{id:"nesting-navigators",title:"Nesting navigators",sidebar_label:"Nesting navigators"},sidebar:"version-6.x/docs",previous:{title:"Header buttons",permalink:"/docs/header-buttons"},next:{title:"Navigation lifecycle",permalink:"/docs/navigation-lifecycle"}},u={},p=[{value:"How nesting navigators affects the behaviour",id:"how-nesting-navigators-affects-the-behaviour",level:2},{value:"Each navigator keeps its own navigation history",id:"each-navigator-keeps-its-own-navigation-history",level:3},{value:"Each navigator has its own options",id:"each-navigator-has-its-own-options",level:3},{value:"Each screen in a navigator has its own params",id:"each-screen-in-a-navigator-has-its-own-params",level:3},{value:"Navigation actions are handled by current navigator and bubble up if couldn&#39;t be handled",id:"navigation-actions-are-handled-by-current-navigator-and-bubble-up-if-couldnt-be-handled",level:3},{value:"Navigator specific methods are available in the navigators nested inside",id:"navigator-specific-methods-are-available-in-the-navigators-nested-inside",level:3},{value:"Nested navigators don&#39;t receive parent&#39;s events",id:"nested-navigators-dont-receive-parents-events",level:3},{value:"Parent navigator&#39;s UI is rendered on top of child navigator",id:"parent-navigators-ui-is-rendered-on-top-of-child-navigator",level:3},{value:"Navigating to a screen in a nested navigator",id:"navigating-to-a-screen-in-a-nested-navigator",level:2},{value:"Passing params to a screen in a nested navigator",id:"passing-params-to-a-screen-in-a-nested-navigator",level:3},{value:"Rendering initial route defined in the navigator",id:"rendering-initial-route-defined-in-the-navigator",level:3},{value:"Nesting multiple navigators",id:"nesting-multiple-navigators",level:2},{value:"Best practices when nesting",id:"best-practices-when-nesting",level:2}],d={toc:p},g="wrapper";function h(e){var n=e.components,a=(0,i.Z)(e,o);return(0,r.kt)(g,(0,t.Z)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Nesting navigators means rendering a navigator inside a screen of another navigator, for example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'function Home() {\n  return (\n    <Tab.Navigator>\n      <Tab.Screen name="Feed" component={Feed} />\n      <Tab.Screen name="Messages" component={Messages} />\n    </Tab.Navigator>\n  );\n}\n\nfunction App() {\n  return (\n    <NavigationContainer>\n      <Stack.Navigator>\n        <Stack.Screen\n          name="Home"\n          component={Home}\n          options={{ headerShown: false }}\n        />\n        <Stack.Screen name="Profile" component={Profile} />\n        <Stack.Screen name="Settings" component={Settings} />\n      </Stack.Navigator>\n    </NavigationContainer>\n  );\n}\n')),(0,r.kt)("p",null,"In the above example, the ",(0,r.kt)("inlineCode",{parentName:"p"},"Home")," component contains a tab navigator. The ",(0,r.kt)("inlineCode",{parentName:"p"},"Home")," component is also used for the ",(0,r.kt)("inlineCode",{parentName:"p"},"Home")," screen in your stack navigator inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"App")," component. So here, a tab navigator is nested inside a stack navigator:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Stack.Navigator"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Home")," (",(0,r.kt)("inlineCode",{parentName:"li"},"Tab.Navigator"),")",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Feed")," (",(0,r.kt)("inlineCode",{parentName:"li"},"Screen"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Messages")," (",(0,r.kt)("inlineCode",{parentName:"li"},"Screen"),")"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Profile")," (",(0,r.kt)("inlineCode",{parentName:"li"},"Screen"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Settings")," (",(0,r.kt)("inlineCode",{parentName:"li"},"Screen"),")")))),(0,r.kt)("p",null,"Nesting navigators work very much like nesting regular components. To achieve the behavior you want, it's often necessary to nest multiple navigators."),(0,r.kt)("h2",{id:"how-nesting-navigators-affects-the-behaviour"},"How nesting navigators affects the behaviour"),(0,r.kt)("p",null,"When nesting navigators, there are some things to keep in mind:"),(0,r.kt)("h3",{id:"each-navigator-keeps-its-own-navigation-history"},"Each navigator keeps its own navigation history"),(0,r.kt)("p",null,"For example, when you press the back button when inside a screen in a nested stack navigator, it'll go back to the previous screen inside the nested stack even if there's another navigator as the parent."),(0,r.kt)("h3",{id:"each-navigator-has-its-own-options"},"Each navigator has its own options"),(0,r.kt)("p",null,"For example, specifying a ",(0,r.kt)("inlineCode",{parentName:"p"},"title")," option in a screen nested in a child navigator won't affect the title shown in a parent navigator."),(0,r.kt)("p",null,"If you want to achieve this behavior, see the guide for ",(0,r.kt)("a",{parentName:"p",href:"/docs/screen-options-resolution#setting-parent-screen-options-based-on-child-navigators-state"},"screen options with nested navigators"),". this could be useful if you are rendering a tab navigator inside a stack navigator and want to show the title of the active screen inside the tab navigator in the header of the stack navigator."),(0,r.kt)("h3",{id:"each-screen-in-a-navigator-has-its-own-params"},"Each screen in a navigator has its own params"),(0,r.kt)("p",null,"For example, any ",(0,r.kt)("inlineCode",{parentName:"p"},"params")," passed to a screen in a nested navigator are in the ",(0,r.kt)("inlineCode",{parentName:"p"},"route")," prop of that screen and aren't accessible from a screen in a parent or child navigator."),(0,r.kt)("p",null,"If you need to access params of the parent screen from a child screen, you can use ",(0,r.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/context.html"},"React Context")," to expose params to children."),(0,r.kt)("h3",{id:"navigation-actions-are-handled-by-current-navigator-and-bubble-up-if-couldnt-be-handled"},"Navigation actions are handled by current navigator and bubble up if couldn't be handled"),(0,r.kt)("p",null,"For example, if you're calling ",(0,r.kt)("inlineCode",{parentName:"p"},"navigation.goBack()")," in a nested screen, it'll only go back in the parent navigator if you're already on the first screen of the navigator. Other actions such as ",(0,r.kt)("inlineCode",{parentName:"p"},"navigate")," work similarly, i.e. navigation will happen in the nested navigator and if the nested navigator couldn't handle it, then the parent navigator will try to handle it. In the above example, when calling ",(0,r.kt)("inlineCode",{parentName:"p"},"navigate('Messages')"),", inside ",(0,r.kt)("inlineCode",{parentName:"p"},"Feed")," screen, the nested tab navigator will handle it, but if you call ",(0,r.kt)("inlineCode",{parentName:"p"},"navigate('Settings')"),", the parent stack navigator will handle it."),(0,r.kt)("h3",{id:"navigator-specific-methods-are-available-in-the-navigators-nested-inside"},"Navigator specific methods are available in the navigators nested inside"),(0,r.kt)("p",null,"For example, if you have a stack inside a drawer navigator, the drawer's ",(0,r.kt)("inlineCode",{parentName:"p"},"openDrawer"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"closeDrawer"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"toggleDrawer")," methods etc. will also be available on the ",(0,r.kt)("inlineCode",{parentName:"p"},"navigation")," prop in the screen's inside the stack navigator. But say you have a stack navigator as the parent of the drawer, then the screens inside the stack navigator won't have access to these methods, because they aren't nested inside the drawer."),(0,r.kt)("p",null,"Similarly, if you have a tab navigator inside stack navigator, the screens in the tab navigator will get the ",(0,r.kt)("inlineCode",{parentName:"p"},"push")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"replace")," methods for stack in their ",(0,r.kt)("inlineCode",{parentName:"p"},"navigation")," prop."),(0,r.kt)("p",null,"If you need to dispatch actions to the nested child navigators from a parent, you can use ",(0,r.kt)("a",{parentName:"p",href:"/docs/navigation-prop#dispatch"},(0,r.kt)("inlineCode",{parentName:"a"},"navigation.dispatch")),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"navigation.dispatch(DrawerActions.toggleDrawer());\n")),(0,r.kt)("h3",{id:"nested-navigators-dont-receive-parents-events"},"Nested navigators don't receive parent's events"),(0,r.kt)("p",null,"For example, if you have a stack navigator nested inside a tab navigator, the screens in the stack navigator won't receive the events emitted by the parent tab navigator such as (",(0,r.kt)("inlineCode",{parentName:"p"},"tabPress"),") when using ",(0,r.kt)("inlineCode",{parentName:"p"},"navigation.addListener"),"."),(0,r.kt)("p",null,"To receive events from parent navigator, you can explicitly listen to parent's events with ",(0,r.kt)("a",{parentName:"p",href:"/docs/navigation-prop#getparent"},(0,r.kt)("inlineCode",{parentName:"a"},"navigation.getParent")),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const unsubscribe = navigation\n  .getParent('MyTabs')\n  .addListener('tabPress', (e) => {\n    // Do something\n  });\n")),(0,r.kt)("p",null,"Here ",(0,r.kt)("inlineCode",{parentName:"p"},"'MyTabs'")," refers to the value you pass in the ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," prop of the parent ",(0,r.kt)("inlineCode",{parentName:"p"},"Tab.Navigator")," whose event you want to listen to."),(0,r.kt)("h3",{id:"parent-navigators-ui-is-rendered-on-top-of-child-navigator"},"Parent navigator's UI is rendered on top of child navigator"),(0,r.kt)("p",null,"For example, when you nest a stack navigator inside a drawer navigator, you'll see that the drawer appears above the stack navigator's header. However, if you nest the drawer navigator inside a stack, the drawer will appear below the header of the stack. This is an important point to consider when deciding how to nest your navigators."),(0,r.kt)("p",null,"In your app, you will probably use these patterns depending on the behavior you want:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Tab navigator nested inside the initial screen of stack navigator - New screens cover the tab bar when you push them."),(0,r.kt)("li",{parentName:"ul"},"Drawer navigator nested inside the initial screen of stack navigator with the initial screen's stack header hidden - The drawer can only be opened from the first screen of the stack."),(0,r.kt)("li",{parentName:"ul"},"Stack navigators nested inside each screen of drawer navigator - The drawer appears over the header from the stack."),(0,r.kt)("li",{parentName:"ul"},"Stack navigators nested inside each screen of tab navigator - The tab bar is always visible. Usually pressing the tab again also pops the stack to top.")),(0,r.kt)("h2",{id:"navigating-to-a-screen-in-a-nested-navigator"},"Navigating to a screen in a nested navigator"),(0,r.kt)("p",null,"Consider the following example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'function Root() {\n  return (\n    <Drawer.Navigator>\n      <Drawer.Screen name="Home" component={Home} />\n      <Drawer.Screen name="Profile" component={Profile} />\n      <Stack.Screen name="Settings" component={Settings} />\n    </Drawer.Navigator>\n  );\n}\n\nfunction App() {\n  return (\n    <NavigationContainer>\n      <Stack.Navigator>\n        <Stack.Screen\n          name="Root"\n          component={Root}\n          options={{ headerShown: false }}\n        />\n        <Stack.Screen name="Feed" component={Feed} />\n      </Stack.Navigator>\n    </NavigationContainer>\n  );\n}\n')),(0,r.kt)("p",null,"Here, you might want to navigate to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Root")," screen from your ",(0,r.kt)("inlineCode",{parentName:"p"},"Feed")," component:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"navigation.navigate('Root');\n")),(0,r.kt)("p",null,"It works, and the initial screen inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"Root")," component is shown, which is ",(0,r.kt)("inlineCode",{parentName:"p"},"Home"),". But sometimes you may want to control the screen that should be shown upon navigation. To achieve it, you can pass the name of the screen in params:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"navigation.navigate('Root', { screen: 'Profile' });\n")),(0,r.kt)("p",null,"Now, the ",(0,r.kt)("inlineCode",{parentName:"p"},"Profile")," screen will be rendered instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"Home")," upon navigation."),(0,r.kt)("summary",null,"This may look very different from the way navigation used to work with nested screens previously. The difference is that in the previous versions, all configuration was static, so React Navigation could statically find the list of all the navigators and their screens by recursing into nested configurations. But with dynamic configuration, React Navigation doesn't know which screens are available and where until the navigator containing the screen renders. Normally, a screen doesn't render its contents until you navigate to it, so the configuration of navigators which haven't rendered is not yet available. This makes it necessary to specify the hierarchy you're navigating to. This is also why you should have as little nesting of navigators as possible to keep your code simpler."),(0,r.kt)("h3",{id:"passing-params-to-a-screen-in-a-nested-navigator"},"Passing params to a screen in a nested navigator"),(0,r.kt)("p",null,"You can also pass params by specifying a ",(0,r.kt)("inlineCode",{parentName:"p"},"params")," key:"),(0,r.kt)("samp",{id:"nest-navigators"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"navigation.navigate('Root', {\n  screen: 'Profile',\n  params: { user: 'jane' },\n});\n")),(0,r.kt)("p",null,"If the navigator was already rendered, navigating to another screen will push a new screen in case of stack navigator."),(0,r.kt)("p",null,"You can follow similar approach for deeply nested screens. Note that the second argument to ",(0,r.kt)("inlineCode",{parentName:"p"},"navigate")," here is just ",(0,r.kt)("inlineCode",{parentName:"p"},"params"),", so you can do something like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"navigation.navigate('Root', {\n  screen: 'Settings',\n  params: {\n    screen: 'Sound',\n    params: {\n      screen: 'Media',\n    },\n  },\n});\n")),(0,r.kt)("p",null,"In the above case, you're navigating to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Media")," screen, which is in a navigator nested inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"Sound")," screen, which is in a navigator nested inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"Settings")," screen."),(0,r.kt)("h3",{id:"rendering-initial-route-defined-in-the-navigator"},"Rendering initial route defined in the navigator"),(0,r.kt)("p",null,"By default, when you navigate a screen in the nested navigator, the specified screen is used as the initial screen and the initial route prop on the navigator is ignored. This behaviour is different from the React Navigation 4."),(0,r.kt)("p",null,"If you need to render the initial route specified in the navigator, you can disable the behaviour of using the specified screen as the initial screen by setting ",(0,r.kt)("inlineCode",{parentName:"p"},"initial: false"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"navigation.navigate('Root', {\n  screen: 'Settings',\n  initial: false,\n});\n")),(0,r.kt)("p",null,"This affects what happens when pressing the back button. When there's an initial screen, the back button will take the user there."),(0,r.kt)("h2",{id:"nesting-multiple-navigators"},"Nesting multiple navigators"),(0,r.kt)("p",null,"It's sometimes useful to nest multiple navigators such as stack, drawer or tabs."),(0,r.kt)("p",null,"When nesting multiple stack, drawer or bottom tab navigator, headers from both child and parent navigators would be shown. However, usually it's more desirable to show the header in the child navigator and hide the header in the screen of the parent navigator."),(0,r.kt)("p",null,"To achieve this, you can hide the header in the screen containing the navigator using the ",(0,r.kt)("inlineCode",{parentName:"p"},"headerShown: false")," option."),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'function Home() {\n  return (\n    <Tab.Navigator>\n      <Tab.Screen name="Profile" component={Profile} />\n      <Tab.Screen name="Settings" component={Settings} />\n    </Tab.Navigator>\n  );\n}\n\nfunction App() {\n  return (\n    <NavigationContainer>\n      <Stack.Navigator>\n        <Stack.Screen\n          name="Home"\n          component={Home}\n          options={{ headerShown: false }}\n        />\n        <Stack.Screen name="EditPost" component={EditPost} />\n      </Stack.Navigator>\n    </NavigationContainer>\n  );\n}\n')),(0,r.kt)("p",null,"In these examples, we have used a bottom tab navigator directly nested inside another stack navigator, but the same principle applies when there are other navigators in the middle, for example: stack navigator inside a tab navigator which is inside another stack navigator, stack navigator inside drawer navigator etc."),(0,r.kt)("p",null,"If you don't want headers in any of the navigators, you can specify ",(0,r.kt)("inlineCode",{parentName:"p"},"headerShown: false")," in all of the navigators:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'function Home() {\n  return (\n    <Tab.Navigator screenOptions={{ headerShown: false }}>\n      <Tab.Screen name="Profile" component={Profile} />\n      <Tab.Screen name="Settings" component={Settings} />\n    </Tab.Navigator>\n  );\n}\n\nfunction App() {\n  return (\n    <NavigationContainer>\n      <Stack.Navigator screenOptions={{ headerShown: false }}>\n        <Stack.Screen name="Home" component={Home} />\n        <Stack.Screen name="EditPost" component={EditPost} />\n      </Stack.Navigator>\n    </NavigationContainer>\n  );\n}\n')),(0,r.kt)("h2",{id:"best-practices-when-nesting"},"Best practices when nesting"),(0,r.kt)("p",null,"We recommend to reduce nesting navigators to minimal. Try to achieve the behavior you want with as little nesting as possible. Nesting has many downsides:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"It results in deeply nested view hierarchy which can cause memory and performance issues in lower end devices"),(0,r.kt)("li",{parentName:"ul"},"Nesting same type of navigators (e.g. tabs inside tabs, drawer inside drawer etc.) might lead to a confusing UX"),(0,r.kt)("li",{parentName:"ul"},"With excessive nesting, code becomes difficult to follow when navigating to nested screens, configuring deep link etc.")),(0,r.kt)("p",null,"Think of nesting navigators as a way to achieve the UI you want rather than a way to organize your code. If you want to create separate group of screens for organization, instead of using separate navigators, you can use the ",(0,r.kt)("a",{parentName:"p",href:"/docs/group"},(0,r.kt)("inlineCode",{parentName:"a"},"Group"))," component."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'<Stack.Navigator>\n  {isLoggedIn ? (\n    // Screens for logged in users\n    <Stack.Group>\n      <Stack.Screen name="Home" component={Home} />\n      <Stack.Screen name="Profile" component={Profile} />\n    </Stack.Group>\n  ) : (\n    // Auth screens\n    <Stack.Group screenOptions={{ headerShown: false }}>\n      <Stack.Screen name="SignIn" component={SignIn} />\n      <Stack.Screen name="SignUp" component={SignUp} />\n    </Stack.Group>\n  )}\n  {/* Common modal screens */}\n  <Stack.Group screenOptions={{ presentation: \'modal\' }}>\n    <Stack.Screen name="Help" component={Help} />\n    <Stack.Screen name="Invite" component={Invite} />\n  </Stack.Group>\n</Stack.Navigator>\n')))}h.isMDXComponent=!0}}]);