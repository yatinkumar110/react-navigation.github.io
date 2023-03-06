"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[17432],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=a.createContext({}),c=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=c(e.components);return a.createElement(u.Provider,{value:n},e.children)},f="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=c(t),p=r,m=f["".concat(u,".").concat(p)]||f[p]||d[p]||i;return t?a.createElement(m,o(o({ref:n},s),{},{components:t})):a.createElement(m,o({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=p;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l[f]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},85162:function(e,n,t){t.d(n,{Z:function(){return o}});var a=t(67294),r=t(86010),i={tabItem:"tabItem_Ymn6"};function o(e){var n=e.children,t=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,o),hidden:t},n)}},74866:function(e,n,t){t.d(n,{Z:function(){return w}});var a=t(83117),r=t(67294),i=t(86010),o=t(12466),l=t(16550),u=t(91980),c=t(67392),s=t(50012);function f(e){return function(e){return r.Children.map(e,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}function d(e){var n=e.values,t=e.children;return(0,r.useMemo)((function(){var e=null!=n?n:f(t);return function(e){var n=(0,c.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function p(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function m(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId,i=(0,l.k6)(),o=function(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:t,groupId:a});return[(0,u._X)(o),(0,r.useCallback)((function(e){if(o){var n=new URLSearchParams(i.location.search);n.set(o,e),i.replace(Object.assign({},i.location,{search:n.toString()}))}}),[o,i])]}function v(e){var n,t,a,i,o=e.defaultValue,l=e.queryString,u=void 0!==l&&l,c=e.groupId,f=d(e),v=(0,r.useState)((function(){return function(e){var n,t=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var r=null!=(n=a.find((function(e){return e.default})))?n:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:o,tabValues:f})})),h=v[0],g=v[1],b=m({queryString:u,groupId:c}),k=b[0],y=b[1],w=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:c}.groupId),t=(0,s.Nk)(n),a=t[0],i=t[1],[a,(0,r.useCallback)((function(e){n&&i.set(e)}),[n,i])]),N=w[0],S=w[1],C=function(){var e=null!=k?k:N;return p({value:e,tabValues:f})?e:null}();return(0,r.useLayoutEffect)((function(){C&&g(C)}),[C]),{selectedValue:h,selectValue:(0,r.useCallback)((function(e){if(!p({value:e,tabValues:f}))throw new Error("Can't select invalid tab value="+e);g(e),y(e),S(e)}),[y,S,f]),tabValues:f}}var h=t(72389),g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){var n=e.className,t=e.block,l=e.selectedValue,u=e.selectValue,c=e.tabValues,s=[],f=(0,o.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var n=e.currentTarget,t=s.indexOf(n),a=c[t].value;a!==l&&(f(n),u(a))},p=function(e){var n,t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var a,r=s.indexOf(e.currentTarget)+1;t=null!=(a=s[r])?a:s[0];break;case"ArrowLeft":var i,o=s.indexOf(e.currentTarget)-1;t=null!=(i=s[o])?i:s[s.length-1]}null==(n=t)||n.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},n)},c.map((function(e){var n=e.value,t=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===n?0:-1,"aria-selected":l===n,key:n,ref:function(e){return s.push(e)},onKeyDown:p,onClick:d},o,{className:(0,i.Z)("tabs__item",g.tabItem,null==o?void 0:o.className,{"tabs__item--active":l===n})}),null!=t?t:n)})))}function k(e){var n=e.lazy,t=e.children,a=e.selectedValue;if(t=Array.isArray(t)?t:[t],n){var i=t.find((function(e){return e.props.value===a}));return i?(0,r.cloneElement)(i,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},t.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})})))}function y(e){var n=v(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",g.tabList)},r.createElement(b,(0,a.Z)({},e,n)),r.createElement(k,(0,a.Z)({},e,n)))}function w(e){var n=(0,h.Z)();return r.createElement(y,(0,a.Z)({key:String(n)},e))}},63983:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return f}});var a=t(83117),r=t(80102),i=(t(67294),t(3905)),o=(t(74866),t(85162),["components"]),l={id:"navigation-lifecycle",title:"Navigation lifecycle",sidebar_label:"Navigation lifecycle"},u=void 0,c={unversionedId:"navigation-lifecycle",id:"version-5.x/navigation-lifecycle",title:"Navigation lifecycle",description:"In a previous section, we worked with a stack navigator that has two screens (Home and Details) and learned how to use navigation.navigate('RouteName') to navigate between the routes.",source:"@site/versioned_docs/version-5.x/navigation-lifecycle.md",sourceDirName:".",slug:"/navigation-lifecycle",permalink:"/docs/5.x/navigation-lifecycle",draft:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-5.x/navigation-lifecycle.md",tags:[],version:"5.x",frontMatter:{id:"navigation-lifecycle",title:"Navigation lifecycle",sidebar_label:"Navigation lifecycle"},sidebar:"version-5.x/docs",previous:{title:"Nesting navigators",permalink:"/docs/5.x/nesting-navigators"},next:{title:"Opening a full-screen modal",permalink:"/docs/5.x/modal"}},s={},f=[{value:"Example scenario",id:"example-scenario",level:2},{value:"React Navigation lifecycle events",id:"react-navigation-lifecycle-events",level:2},{value:"Summary",id:"summary",level:2}],d={toc:f},p="wrapper";function m(e){var n=e.components,t=(0,r.Z)(e,o);return(0,i.kt)(p,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In a previous section, we worked with a stack navigator that has two screens (",(0,i.kt)("inlineCode",{parentName:"p"},"Home")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Details"),") and learned how to use ",(0,i.kt)("inlineCode",{parentName:"p"},"navigation.navigate('RouteName')")," to navigate between the routes."),(0,i.kt)("p",null,"An important question in this context is: what happens with ",(0,i.kt)("inlineCode",{parentName:"p"},"Home")," when we navigate away from it, or when we come back to it? How does a route find out that a user is leaving it or coming back to it?"),(0,i.kt)("p",null,"If you are coming to react-navigation from a web background, you may assume that when user navigates from route ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," to route ",(0,i.kt)("inlineCode",{parentName:"p"},"B"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," will unmount (its ",(0,i.kt)("inlineCode",{parentName:"p"},"componentWillUnmount")," is called) and ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," will mount again when user comes back to it. While these React lifecycle methods are still valid and are used in react-navigation, their usage differs from the web. This is driven by more complex needs of mobile navigation."),(0,i.kt)("h2",{id:"example-scenario"},"Example scenario"),(0,i.kt)("p",null,"Consider a stack navigator with screens A and B. After navigating to A, its ",(0,i.kt)("inlineCode",{parentName:"p"},"componentDidMount")," is called. When pushing B, its ",(0,i.kt)("inlineCode",{parentName:"p"},"componentDidMount")," is also called, but A remains mounted on the stack and its ",(0,i.kt)("inlineCode",{parentName:"p"},"componentWillUnmount")," is therefore not called."),(0,i.kt)("p",null,"When going back from B to A, ",(0,i.kt)("inlineCode",{parentName:"p"},"componentWillUnmount")," of B is called, but ",(0,i.kt)("inlineCode",{parentName:"p"},"componentDidMount")," of A is not because A remained mounted the whole time."),(0,i.kt)("p",null,"Similar results can be observed (in combination) with other navigators as well. Consider a tab navigator with two tabs, where each tab is a stack navigator:"),(0,i.kt)("samp",{id:"navigation-lifecycle"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'function App() {\n  return (\n    <NavigationContainer>\n      <Tab.Navigator>\n        <Tab.Screen name="First">\n          {() => (\n            <SettingsStack.Navigator>\n              <SettingsStack.Screen\n                name="Settings"\n                component={SettingsScreen}\n              />\n              <SettingsStack.Screen name="Profile" component={ProfileScreen} />\n            </SettingsStack.Navigator>\n          )}\n        </Tab.Screen>\n        <Tab.Screen name="Second">\n          {() => (\n            <HomeStack.Navigator>\n              <HomeStack.Screen name="Home" component={HomeScreen} />\n              <HomeStack.Screen name="Details" component={DetailsScreen} />\n            </HomeStack.Navigator>\n          )}\n        </Tab.Screen>\n      </Tab.Navigator>\n    </NavigationContainer>\n  );\n}\n')),(0,i.kt)("p",null,"We start on the ",(0,i.kt)("inlineCode",{parentName:"p"},"HomeScreen")," and navigate to ",(0,i.kt)("inlineCode",{parentName:"p"},"DetailsScreen"),". Then we use the tab bar to switch to the ",(0,i.kt)("inlineCode",{parentName:"p"},"SettingsScreen")," and navigate to ",(0,i.kt)("inlineCode",{parentName:"p"},"ProfileScreen"),". After this sequence of operations is done, all 4 of the screens are mounted! If you use the tab bar to switch back to the ",(0,i.kt)("inlineCode",{parentName:"p"},"HomeStack"),", you'll notice you'll be presented with the ",(0,i.kt)("inlineCode",{parentName:"p"},"DetailsScreen")," - the navigation state of the ",(0,i.kt)("inlineCode",{parentName:"p"},"HomeStack")," has been preserved!"),(0,i.kt)("h2",{id:"react-navigation-lifecycle-events"},"React Navigation lifecycle events"),(0,i.kt)("p",null,'Now that we understand how React lifecycle methods work in React Navigation, let\'s answer the question we asked at the beginning: "How do we find out that a user is leaving (blur) it or coming back to it (focus)?"'),(0,i.kt)("p",null,"React Navigation emits events to screen components that subscribe to them. We can listen to ",(0,i.kt)("inlineCode",{parentName:"p"},"focus")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"blur")," events to know when a screen comes into focus or goes out of focus respectively."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("samp",{id:"focus-and-blur"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"function Profile({ navigation }) {\n  React.useEffect(() => {\n    const unsubscribe = navigation.addListener('focus', () => {\n      // Screen was focused\n      // Do something\n    });\n\n    return unsubscribe;\n  }, [navigation]);\n\n  return <ProfileContent />;\n}\n")),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/docs/5.x/navigation-events"},"Navigation events")," for more details on the available events and the API usage."),(0,i.kt)("p",null,"Instead of adding event listeners manually, we can use the ",(0,i.kt)("a",{parentName:"p",href:"/docs/5.x/use-focus-effect"},(0,i.kt)("inlineCode",{parentName:"a"},"useFocusEffect"))," hook to perform side effects. It's like React's ",(0,i.kt)("inlineCode",{parentName:"p"},"useEffect")," hook, but it ties into the navigation lifecycle."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("samp",{id:"use-focus-effect"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { useFocusEffect } from '@react-navigation/native';\n\nfunction Profile() {\n  useFocusEffect(\n    React.useCallback(() => {\n      // Do something when the screen is focused\n\n      return () => {\n        // Do something when the screen is unfocused\n        // Useful for cleanup functions\n      };\n    }, [])\n  );\n\n  return <ProfileContent />;\n}\n")),(0,i.kt)("p",null,"If you want to render different things based on if the screen is focused or not, you can use the ",(0,i.kt)("a",{parentName:"p",href:"/docs/5.x/use-is-focused"},(0,i.kt)("inlineCode",{parentName:"a"},"useIsFocused"))," hook which returns a boolean indicating whether the screen is focused."),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"While React's lifecycle methods are still valid, React Navigation adds more events that you can subscribe to through the ",(0,i.kt)("inlineCode",{parentName:"li"},"navigation")," prop."),(0,i.kt)("li",{parentName:"ul"},"You may also use the ",(0,i.kt)("inlineCode",{parentName:"li"},"useFocusEffect")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"useIsFocused")," hooks.")))}m.isMDXComponent=!0}}]);