"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[61566],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return h}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(a),d=r,h=c["".concat(l,".").concat(d)]||c[d]||m[d]||o;return a?n.createElement(h,i(i({ref:t},p),{},{components:a})):n.createElement(h,i({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85162:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(67294),r=a(86010),o={tabItem:"tabItem_Ymn6"};function i(e){var t=e.children,a=e.hidden,i=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,i),hidden:a},t)}},74866:function(e,t,a){a.d(t,{Z:function(){return w}});var n=a(83117),r=a(67294),o=a(86010),i=a(12466),s=a(16550),l=a(91980),u=a(67392),p=a(50012);function c(e){return function(e){return r.Children.map(e,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function m(e){var t=e.values,a=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:c(a);return function(e){var t=(0,u.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,a])}function d(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function h(e){var t=e.queryString,a=void 0!==t&&t,n=e.groupId,o=(0,s.k6)(),i=function(e){var t=e.queryString,a=void 0!==t&&t,n=e.groupId;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:a,groupId:n});return[(0,l._X)(i),(0,r.useCallback)((function(e){if(i){var t=new URLSearchParams(o.location.search);t.set(i,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[i,o])]}function g(e){var t,a,n,o,i=e.defaultValue,s=e.queryString,l=void 0!==s&&s,u=e.groupId,c=m(e),g=(0,r.useState)((function(){return function(e){var t,a=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!d({value:a,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+a+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return a}var r=null!=(t=n.find((function(e){return e.default})))?t:n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:i,tabValues:c})})),f=g[0],v=g[1],k=h({queryString:l,groupId:u}),b=k[0],y=k[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),a=(0,p.Nk)(t),n=a[0],o=a[1],[n,(0,r.useCallback)((function(e){t&&o.set(e)}),[t,o])]),N=w[0],x=w[1],P=function(){var e=null!=b?b:N;return d({value:e,tabValues:c})?e:null}();return(0,r.useLayoutEffect)((function(){P&&v(P)}),[P]),{selectedValue:f,selectValue:(0,r.useCallback)((function(e){if(!d({value:e,tabValues:c}))throw new Error("Can't select invalid tab value="+e);v(e),y(e),x(e)}),[y,x,c]),tabValues:c}}var f=a(72389),v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){var t=e.className,a=e.block,s=e.selectedValue,l=e.selectValue,u=e.tabValues,p=[],c=(0,i.o5)().blockElementScrollPositionUntilNextRender,m=function(e){var t=e.currentTarget,a=p.indexOf(t),n=u[a].value;n!==s&&(c(t),l(n))},d=function(e){var t,a=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":var n,r=p.indexOf(e.currentTarget)+1;a=null!=(n=p[r])?n:p[0];break;case"ArrowLeft":var o,i=p.indexOf(e.currentTarget)-1;a=null!=(o=p[i])?o:p[p.length-1]}null==(t=a)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},u.map((function(e){var t=e.value,a=e.label,i=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:function(e){return p.push(e)},onKeyDown:d,onClick:m},i,{className:(0,o.Z)("tabs__item",v.tabItem,null==i?void 0:i.className,{"tabs__item--active":s===t})}),null!=a?a:t)})))}function b(e){var t=e.lazy,a=e.children,n=e.selectedValue;if(a=Array.isArray(a)?a:[a],t){var o=a.find((function(e){return e.props.value===n}));return o?(0,r.cloneElement)(o,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n})})))}function y(e){var t=g(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",v.tabList)},r.createElement(k,(0,n.Z)({},e,t)),r.createElement(b,(0,n.Z)({},e,t)))}function w(e){var t=(0,f.Z)();return r.createElement(y,(0,n.Z)({key:String(t)},e))}},20450:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var n=a(83117),r=a(80102),o=(a(67294),a(3905)),i=(a(74866),a(85162),["components"]),s={id:"params",title:"Passing parameters to routes",sidebar_label:"Passing parameters to routes"},l=void 0,u={unversionedId:"params",id:"version-5.x/params",title:"Passing parameters to routes",description:'Remember when I said "more on that later when we talk about params!"? Well, the time has come.',source:"@site/versioned_docs/version-5.x/params.md",sourceDirName:".",slug:"/params",permalink:"/docs/5.x/params",draft:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-5.x/params.md",tags:[],version:"5.x",frontMatter:{id:"params",title:"Passing parameters to routes",sidebar_label:"Passing parameters to routes"},sidebar:"version-5.x/docs",previous:{title:"Moving between screens",permalink:"/docs/5.x/navigating"},next:{title:"Configuring the header bar",permalink:"/docs/5.x/headers"}},p={},c=[{value:"Updating params",id:"updating-params",level:2},{value:"Initial params",id:"initial-params",level:2},{value:"Passing params to a previous screen",id:"passing-params-to-a-previous-screen",level:2},{value:"Passing params to nested navigators",id:"passing-params-to-nested-navigators",level:2},{value:"What should be in params",id:"what-should-be-in-params",level:2},{value:"Summary",id:"summary",level:2}],m={toc:c},d="wrapper";function h(e){var t=e.components,s=(0,r.Z)(e,i);return(0,o.kt)(d,(0,n.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'Remember when I said "more on that later when we talk about ',(0,o.kt)("inlineCode",{parentName:"p"},"params"),'!"? Well, the time has come.'),(0,o.kt)("p",null,"Now that we know how to ",(0,o.kt)("a",{parentName:"p",href:"/docs/5.x/hello-react-navigation"},"create a stack navigator with some routes")," and ",(0,o.kt)("a",{parentName:"p",href:"/docs/5.x/navigating"},"navigate between those routes"),", let's look at how we can pass data to routes when we navigate to them."),(0,o.kt)("p",null,"There are two pieces to this:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Pass params to a route by putting them in an object as a second parameter to the ",(0,o.kt)("inlineCode",{parentName:"p"},"navigation.navigate")," function: ",(0,o.kt)("inlineCode",{parentName:"p"},"navigation.navigate('RouteName', { /* params go here */ })"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Read the params in your screen component: ",(0,o.kt)("inlineCode",{parentName:"p"},"route.params"),"."))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"We recommend that the params you pass are JSON-serializable. That way, you'll be able to use ",(0,o.kt)("a",{parentName:"p",href:"/docs/5.x/state-persistence"},"state persistence")," and your screen components will have the right contract for implementing ",(0,o.kt)("a",{parentName:"p",href:"/docs/5.x/deep-linking"},"deep linking"),".")),(0,o.kt)("samp",{id:"passing-params"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function HomeScreen({ navigation }) {\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text>Home Screen</Text>\n      <Button\n        title=\"Go to Details\"\n        onPress={() => {\n          /* 1. Navigate to the Details route with params */\n          navigation.navigate('Details', {\n            itemId: 86,\n            otherParam: 'anything you want here',\n          });\n        }}\n      />\n    </View>\n  );\n}\n\nfunction DetailsScreen({ route, navigation }) {\n  /* 2. Get the param */\n  const { itemId, otherParam } = route.params;\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text>Details Screen</Text>\n      <Text>itemId: {JSON.stringify(itemId)}</Text>\n      <Text>otherParam: {JSON.stringify(otherParam)}</Text>\n      <Button\n        title=\"Go to Details... again\"\n        onPress={() =>\n          navigation.push('Details', {\n            itemId: Math.floor(Math.random() * 100),\n          })\n        }\n      />\n      <Button title=\"Go to Home\" onPress={() => navigation.navigate('Home')} />\n      <Button title=\"Go back\" onPress={() => navigation.goBack()} />\n    </View>\n  );\n}\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Screen with passed parameters",src:a(40074).Z,width:"320",height:"569"})),(0,o.kt)("h2",{id:"updating-params"},"Updating params"),(0,o.kt)("p",null,"Screens can also update their params, like they can update their state. The ",(0,o.kt)("inlineCode",{parentName:"p"},"navigation.setParams")," method lets you update the params of a screen. Refer to the ",(0,o.kt)("a",{parentName:"p",href:"/docs/5.x/navigation-prop#setparams"},"API reference for ",(0,o.kt)("inlineCode",{parentName:"a"},"setParams"))," for more details."),(0,o.kt)("p",null,"Basic usage:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"navigation.setParams({\n  query: 'someText',\n})\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: Avoid using ",(0,o.kt)("inlineCode",{parentName:"p"},"setParams")," to update screen options such as ",(0,o.kt)("inlineCode",{parentName:"p"},"title")," etc. If you need to update options, use ",(0,o.kt)("a",{parentName:"p",href:"/docs/5.x/navigation-prop#setoptions"},(0,o.kt)("inlineCode",{parentName:"a"},"setOptions"))," instead.")),(0,o.kt)("h2",{id:"initial-params"},"Initial params"),(0,o.kt)("p",null,"You can also pass some initial params to a screen. If you didn't specify any params when navigating to this screen, the initial params will be used. They are also shallow merged with any params that you pass. Initial params can be specified with an ",(0,o.kt)("inlineCode",{parentName:"p"},"initialParams")," prop:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'<Stack.Screen\n  name="Details"\n  component={DetailsScreen}\n  initialParams={{ itemId: 42 }}\n/>\n')),(0,o.kt)("h2",{id:"passing-params-to-a-previous-screen"},"Passing params to a previous screen"),(0,o.kt)("p",null,"Params aren't only useful for passing some data to a new screen, but they can also be useful to pass data to a previous screen too. For example, let's say you have a screen with a create post button, and the create post button opens a new screen to create a post. After creating the post, you want to pass the data for the post back to previous screen."),(0,o.kt)("p",null,"To achieve this, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"navigate")," method, which acts like ",(0,o.kt)("inlineCode",{parentName:"p"},"goBack")," if the screen already exists. You can pass the ",(0,o.kt)("inlineCode",{parentName:"p"},"params")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"navigate")," to pass the data back:"),(0,o.kt)("samp",{id:"passing-params-back"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function HomeScreen({ navigation, route }) {\n  React.useEffect(() => {\n    if (route.params?.post) {\n      // Post updated, do something with `route.params.post`\n      // For example, send the post to the server\n    }\n  }, [route.params?.post]);\n\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Button\n        title=\"Create post\"\n        onPress={() => navigation.navigate('CreatePost')}\n      />\n      <Text style={{ margin: 10 }}>Post: {route.params?.post}</Text>\n    </View>\n  );\n}\n\nfunction CreatePostScreen({ navigation, route }) {\n  const [postText, setPostText] = React.useState('');\n\n  return (\n    <>\n      <TextInput\n        multiline\n        placeholder=\"What's on your mind?\"\n        style={{ height: 200, padding: 10, backgroundColor: 'white' }}\n        value={postText}\n        onChangeText={setPostText}\n      />\n      <Button\n        title=\"Done\"\n        onPress={() => {\n          // Pass and merge params back to home screen\n          navigation.navigate({\n            name: 'Home',\n            params: { post: postText },\n            merge: true,\n          });\n        }}\n      />\n    </>\n  );\n}\n")),(0,o.kt)("p",null,'Here, after you press "Done", the home screen\'s ',(0,o.kt)("inlineCode",{parentName:"p"},"route.params")," will be updated to reflect the post text that you passed in ",(0,o.kt)("inlineCode",{parentName:"p"},"navigate"),"."),(0,o.kt)("h2",{id:"passing-params-to-nested-navigators"},"Passing params to nested navigators"),(0,o.kt)("p",null,"If you have nested navigators, you need to pass params a bit differently. For example, say you have a navigator inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"Account")," screen, and want to pass params to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Settings")," screen inside that navigator. Then you can pass params as following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"navigation.navigate('Account', {\n  screen: 'Settings',\n  params: { user: 'jane' },\n});\n")),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"/docs/5.x/nesting-navigators"},"Nesting navigators")," for more details on nesting."),(0,o.kt)("h2",{id:"what-should-be-in-params"},"What should be in params"),(0,o.kt)("p",null,"It's important to understand what kind of data should be in params. Params are like options for a screen. They should only contain information to configure what's displayed in the screen. Avoid passing the full data which will be displayed on the screen itself (e.g. pass a user id instead of user object). Also avoid passing data which is used by multiple screens, such data should be in a global store."),(0,o.kt)("p",null,"You can also think of the route object like a URL. If your screen had a URL, what should be in the URL? Params shouldn't contain data that you think should not be in the URL. This often means that you should keep as little data as possible needed to determine what the screen is. Think of visiting a shopping website, when you are seeing product listings, the URL usually contains category name, type of sort, any filters etc., it doesn't contain the actual list of products displayed on the screen."),(0,o.kt)("p",null,"For example, say if you have a ",(0,o.kt)("inlineCode",{parentName:"p"},"Profile")," screen. When navigating to it, you might be tempted to pass the user object in the params:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Don't do this\nnavigation.navigate('Profile', {\n  user: {\n    id: 'jane',\n    firstName: 'Jane',\n    lastName: 'Done',\n    age: 25,\n  },\n});\n")),(0,o.kt)("p",null,"This looks convenient, and lets you access the user objects with ",(0,o.kt)("inlineCode",{parentName:"p"},"route.params.user")," without any extra work."),(0,o.kt)("p",null,"However, this is an anti-pattern. Data such as user objects should be in your global store instead of the navigation state. Otherwise you have the same data duplicated in multiple places. This can lead to bugs such as the profile screen showing outdated data even if the user object has changed after navigation."),(0,o.kt)("p",null,"It also becomes problematic to link to the screen via deep linking or on the Web, since:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The URL is a representation of the screen, so it also needs to contain the params, i.e. full user object, which can make the URL very long and unreadable"),(0,o.kt)("li",{parentName:"ol"},"Since the user object is in the URL, it's possible to pass a random user object representing a user which doesn't exist, or has incorrect data in the profile"),(0,o.kt)("li",{parentName:"ol"},"If the user object isn't passed, or improperly formatted, this could result in crashes as the screen won't know how to handle it")),(0,o.kt)("p",null,"A better way is to pass only the ID of the user in params:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"navigation.navigate('Profile', { userId: 'jane' });\n")),(0,o.kt)("p",null,"Now, you can use the passed ",(0,o.kt)("inlineCode",{parentName:"p"},"userId")," to grab the user from your global store. This eliminates a host of issues such as outdated data, or problematic URLs."),(0,o.kt)("p",null,"Some examples of what should be in params are:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"IDs like user id, item id etc., e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"navigation.navigate('Profile', { userId: 'Jane' })")),(0,o.kt)("li",{parentName:"ol"},"Params for sorting, filtering data etc. when you have a list of items, e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"navigation.navigate('Feeds', { sortBy: 'latest' })")),(0,o.kt)("li",{parentName:"ol"},"Timestamps, page numbers or cursors for pagination, e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"navigation.navigate('Chat', { beforeTime: 1603897152675 })")),(0,o.kt)("li",{parentName:"ol"},"Data to fill inputs on a screen to compose something, e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"navigation.navigate('ComposeTweet', { title: 'Hello world!' })"))),(0,o.kt)("p",null,"In essence, pass the least amount of data required to identify a screen in params, for a lot of cases, this simply means passing the ID of an object instead of passing a full object. Keep your application data separate from the navigation state."),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"navigate")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"push")," accept an optional second argument to let you pass parameters to the route you are navigating to. For example: ",(0,o.kt)("inlineCode",{parentName:"li"},"navigation.navigate('RouteName', { paramName: 'value' })"),"."),(0,o.kt)("li",{parentName:"ul"},"You can read the params through ",(0,o.kt)("inlineCode",{parentName:"li"},"route.params")," inside a screen"),(0,o.kt)("li",{parentName:"ul"},"You can update the screen's params with ",(0,o.kt)("inlineCode",{parentName:"li"},"navigation.setParams")),(0,o.kt)("li",{parentName:"ul"},"Initial params can be passed via the ",(0,o.kt)("inlineCode",{parentName:"li"},"initialParams")," prop on ",(0,o.kt)("inlineCode",{parentName:"li"},"Screen")),(0,o.kt)("li",{parentName:"ul"},"Params should contain the minimal data required to show a screen, nothing more")))}h.isMDXComponent=!0},40074:function(e,t,a){t.Z=a.p+"assets/images/passing_params-69f71caabd25eb4226631c1fff19d8ef.png"}}]);