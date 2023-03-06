"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[40462],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),h=o,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||i;return n?a.createElement(m,r(r({ref:t},c),{},{components:n})):a.createElement(m,r({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,r[1]=l;for(var u=2;u<i;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},85162:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(67294),o=n(86010),i={tabItem:"tabItem_Ymn6"};function r(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(i.tabItem,r),hidden:n},t)}},74866:function(e,t,n){n.d(t,{Z:function(){return w}});var a=n(83117),o=n(67294),i=n(86010),r=n(12466),l=n(16550),s=n(91980),u=n(67392),c=n(50012);function p(e){return function(e){return o.Children.map(e,(function(e){if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function d(e){var t=e.values,n=e.children;return(0,o.useMemo)((function(){var e=null!=t?t:p(n);return function(e){var t=(0,u.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function h(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function m(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,i=(0,l.k6)(),r=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:a});return[(0,s._X)(r),(0,o.useCallback)((function(e){if(r){var t=new URLSearchParams(i.location.search);t.set(r,e),i.replace(Object.assign({},i.location,{search:t.toString()}))}}),[r,i])]}function g(e){var t,n,a,i,r=e.defaultValue,l=e.queryString,s=void 0!==l&&l,u=e.groupId,p=d(e),g=(0,o.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var o=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:r,tabValues:p})})),f=g[0],v=g[1],k=m({queryString:s,groupId:u}),b=k[0],y=k[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),n=(0,c.Nk)(t),a=n[0],i=n[1],[a,(0,o.useCallback)((function(e){t&&i.set(e)}),[t,i])]),N=w[0],C=w[1],O=function(){var e=null!=b?b:N;return h({value:e,tabValues:p})?e:null}();return(0,o.useLayoutEffect)((function(){O&&v(O)}),[O]),{selectedValue:f,selectValue:(0,o.useCallback)((function(e){if(!h({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);v(e),y(e),C(e)}),[y,C,p]),tabValues:p}}var f=n(72389),v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){var t=e.className,n=e.block,l=e.selectedValue,s=e.selectValue,u=e.tabValues,c=[],p=(0,r.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==l&&(p(t),s(a))},h=function(e){var t,n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var a,o=c.indexOf(e.currentTarget)+1;n=null!=(a=c[o])?a:c[0];break;case"ArrowLeft":var i,r=c.indexOf(e.currentTarget)-1;n=null!=(i=c[r])?i:c[c.length-1]}null==(t=n)||t.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},u.map((function(e){var t=e.value,n=e.label,r=e.attributes;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:function(e){return c.push(e)},onKeyDown:h,onClick:d},r,{className:(0,i.Z)("tabs__item",v.tabItem,null==r?void 0:r.className,{"tabs__item--active":l===t})}),null!=n?n:t)})))}function b(e){var t=e.lazy,n=e.children,a=e.selectedValue;if(n=Array.isArray(n)?n:[n],t){var i=n.find((function(e){return e.props.value===a}));return i?(0,o.cloneElement)(i,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},n.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==a})})))}function y(e){var t=g(e);return o.createElement("div",{className:(0,i.Z)("tabs-container",v.tabList)},o.createElement(k,(0,a.Z)({},e,t)),o.createElement(b,(0,a.Z)({},e,t)))}function w(e){var t=(0,f.Z)();return o.createElement(y,(0,a.Z)({key:String(t)},e))}},36584:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var a=n(83117),o=n(80102),i=(n(67294),n(3905)),r=(n(74866),n(85162),["components"]),l={id:"headers",title:"Configuring the header bar",sidebar_label:"Configuring the header bar"},s=void 0,u={unversionedId:"headers",id:"version-2.x/headers",title:"Configuring the header bar",description:"By now you're probably tired of seeing a blank grey bar on the top of your screen &mdash; you're ready for some flair. So let's jump in to configuring the header bar.",source:"@site/versioned_docs/version-2.x/headers.md",sourceDirName:".",slug:"/headers",permalink:"/docs/2.x/headers",draft:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-2.x/headers.md",tags:[],version:"2.x",frontMatter:{id:"headers",title:"Configuring the header bar",sidebar_label:"Configuring the header bar"},sidebar:"version-2.x-docs",previous:{title:"Passing parameters to routes",permalink:"/docs/2.x/params"},next:{title:"Header buttons",permalink:"/docs/2.x/header-buttons"}},c={},p=[{value:"Setting the header title",id:"setting-the-header-title",level:2},{value:"Using params in the title",id:"using-params-in-the-title",level:2},{value:"Updating <code>navigationOptions</code> with <code>setParams</code>",id:"updating-navigationoptions-with-setparams",level:2},{value:"Adjusting header styles",id:"adjusting-header-styles",level:2},{value:"Sharing common <code>navigationOptions</code> across screens",id:"sharing-common-navigationoptions-across-screens",level:2},{value:"Overriding shared <code>navigationOptions</code>",id:"overriding-shared-navigationoptions",level:2},{value:"Replacing the title with a custom component",id:"replacing-the-title-with-a-custom-component",level:2},{value:"Additional configuration",id:"additional-configuration",level:2},{value:"Summary",id:"summary",level:2}],d={toc:p},h="wrapper";function m(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)(h,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"By now you're probably tired of seeing a blank grey bar on the top of your screen ","\u2014"," you're ready for some ",(0,i.kt)("a",{parentName:"p",href:"https://memegenerator.net/img/images/600x600/14303485/stan-flair-office-space.jpg"},"flair"),". So let's jump in to configuring the header bar."),(0,i.kt)("h2",{id:"setting-the-header-title"},"Setting the header title"),(0,i.kt)("p",null,"A screen component can have a static property called ",(0,i.kt)("inlineCode",{parentName:"p"},"navigationOptions")," which is either an object or a function that returns an object that contains various configuration options. The one we use for the header title is ",(0,i.kt)("inlineCode",{parentName:"p"},"title"),", as demonstrated in the following example."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"class HomeScreen extends React.Component {\n  static navigationOptions = {\n    title: 'Home',\n  };\n\n  /* render function, etc */\n}\n\nclass DetailsScreen extends React.Component {\n  static navigationOptions = {\n    title: 'Details',\n  };\n\n  /* render function, etc */\n}\n")),(0,i.kt)("a",{href:"https://snack.expo.io/@react-navigation/setting-header-title-v2",target:"blank",class:"run-code-button"},"\u2192 Run this code"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("inlineCode",{parentName:"p"},"createStackNavigator")," uses platform conventions by default, so on iOS the title will be centered and on Android it will be left-aligned.")),(0,i.kt)("h2",{id:"using-params-in-the-title"},"Using params in the title"),(0,i.kt)("p",null,"In order to use params in the title, we need to make ",(0,i.kt)("inlineCode",{parentName:"p"},"navigationOptions")," a function that returns a configuration object. It might be tempting to try to use ",(0,i.kt)("inlineCode",{parentName:"p"},"this.props")," inside of ",(0,i.kt)("inlineCode",{parentName:"p"},"navigationOptions"),", but because it is a static property of the component, ",(0,i.kt)("inlineCode",{parentName:"p"},"this")," does not refer to an instance of the component and therefore no props are available. Instead, if we make ",(0,i.kt)("inlineCode",{parentName:"p"},"navigationOptions")," a function then React Navigation will call it with an object containing ",(0,i.kt)("inlineCode",{parentName:"p"},"{ navigation, navigationOptions, screenProps }")," -- in this case, all we care about is ",(0,i.kt)("inlineCode",{parentName:"p"},"navigation"),", which is the same object that is passed to your screen props as ",(0,i.kt)("inlineCode",{parentName:"p"},"this.props.navigation"),". You may recall that we can get the params from ",(0,i.kt)("inlineCode",{parentName:"p"},"navigation")," through ",(0,i.kt)("inlineCode",{parentName:"p"},"navigation.getParam")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"navigation.state.params"),", and so we do this below to extract a param and use it as a title."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"class DetailsScreen extends React.Component {\n  static navigationOptions = ({ navigation }) => {\n    return {\n      title: navigation.getParam('otherParam', 'A Nested Details Screen'),\n    };\n  };\n\n  /* render function, etc */\n}\n")),(0,i.kt)("a",{href:"https://snack.expo.io/@react-navigation/using-params-in-title-v2",target:"blank",class:"run-code-button"},"\u2192 Run this code"),(0,i.kt)("p",null,"The argument that is passed in to the ",(0,i.kt)("inlineCode",{parentName:"p"},"navigationOptions")," function is an object with the following properties:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"navigation")," - The ",(0,i.kt)("a",{parentName:"li",href:"/docs/2.x/navigation-prop"},"navigation prop")," for the screen, with the screen's route at ",(0,i.kt)("inlineCode",{parentName:"li"},"navigation.state"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"screenProps")," - The props passing from above the navigator component"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"navigationOptions")," - The default or previous options that would be used if new values are not provided")),(0,i.kt)("p",null,"We only needed the ",(0,i.kt)("inlineCode",{parentName:"p"},"navigation")," prop in the above example but you may in some cases want to use ",(0,i.kt)("inlineCode",{parentName:"p"},"screenProps")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"navigationOptions"),"."),(0,i.kt)("h2",{id:"updating-navigationoptions-with-setparams"},"Updating ",(0,i.kt)("inlineCode",{parentName:"h2"},"navigationOptions")," with ",(0,i.kt)("inlineCode",{parentName:"h2"},"setParams")),(0,i.kt)("p",null,"It's often necessary to update the ",(0,i.kt)("inlineCode",{parentName:"p"},"navigationOptions")," configuration for the active screen from the mounted screen component itself. We can do this using ",(0,i.kt)("inlineCode",{parentName:"p"},"this.props.navigation.setParams")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"  /* Inside of render() */\n  <Button\n    title=\"Update the title\"\n    onPress={() => this.props.navigation.setParams({otherParam: 'Updated!'})}\n  />\n")),(0,i.kt)("a",{href:"https://snack.expo.io/@react-navigation/updating-navigationoptions-with-setparams-v2",target:"blank",class:"run-code-button"},"\u2192 Run this code"),(0,i.kt)("h2",{id:"adjusting-header-styles"},"Adjusting header styles"),(0,i.kt)("p",null,"There are three key properties to use when customizing the style of your header: ",(0,i.kt)("inlineCode",{parentName:"p"},"headerStyle"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"headerTintColor"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"headerTitleStyle"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"headerStyle"),": a style object that will be applied to the ",(0,i.kt)("inlineCode",{parentName:"li"},"View")," that wraps the header. If you set ",(0,i.kt)("inlineCode",{parentName:"li"},"backgroundColor")," on it, that will be the color of your header."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"headerTintColor"),": the back button and title both use this property as their color. In the example below, we set the tint color to white (",(0,i.kt)("inlineCode",{parentName:"li"},"#fff"),") so the back button and the header title would be white."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"headerTitleStyle"),": if we want to customize the ",(0,i.kt)("inlineCode",{parentName:"li"},"fontFamily"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"fontWeight")," and other ",(0,i.kt)("inlineCode",{parentName:"li"},"Text")," style properties for the title, we can use this to do it.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"class HomeScreen extends React.Component {\n  static navigationOptions = {\n    title: 'Home',\n    headerStyle: {\n      backgroundColor: '#f4511e',\n    },\n    headerTintColor: '#fff',\n    headerTitleStyle: {\n      fontWeight: 'bold',\n    },\n  };\n\n  /* render function, etc */\n}\n")),(0,i.kt)("a",{href:"https://snack.expo.io/@react-navigation/setting-header-styles-v2",target:"blank",class:"run-code-button"},"\u2192 Run this code"),(0,i.kt)("p",null,"There are a couple of things to notice here:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"On iOS, the status bar text and icons are black, and this doesn't look great over a dark-colored background. We won't discuss it here, but you should be sure to configure the status bar to fit with your screen colors ",(0,i.kt)("a",{parentName:"li",href:"/docs/2.x/status-bar"},"as described in the status bar guide"),"."),(0,i.kt)("li",{parentName:"ol"},"The configuration we set only applies to the home screen; when we navigate to the details screen, the default styles are back. We'll look at how to share ",(0,i.kt)("inlineCode",{parentName:"li"},"navigationOptions")," between screens now.")),(0,i.kt)("h2",{id:"sharing-common-navigationoptions-across-screens"},"Sharing common ",(0,i.kt)("inlineCode",{parentName:"h2"},"navigationOptions")," across screens"),(0,i.kt)("p",null,"It is common to want to configure the header in a similar way across many screens. For example, your company brand color might be red and so you want the header background color to be red and tint color to be white. Conveniently, these are the colors we're using in our running example, and you'll notice that when you navigate to the ",(0,i.kt)("inlineCode",{parentName:"p"},"DetailsScreen")," the colors go back to the defaults. Wouldn't it be awful if we had to copy the ",(0,i.kt)("inlineCode",{parentName:"p"},"navigationOptions")," header style properties from ",(0,i.kt)("inlineCode",{parentName:"p"},"HomeScreen")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"DetailsScreen"),", and for every single screen component we use in our app? Thankfully, we do not. We can instead move the configuration up to the stack navigator."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"class HomeScreen extends React.Component {\n  static navigationOptions = {\n    title: 'Home',\n    /* No more header config here! */\n  };\n\n  /* render function, etc */\n}\n\n/* other code... */\n\nconst RootStack = createStackNavigator(\n  {\n    Home: HomeScreen,\n    Details: DetailsScreen,\n  },\n  {\n    initialRouteName: 'Home',\n    /* The header config from HomeScreen is now here */\n    navigationOptions: {\n      headerStyle: {\n        backgroundColor: '#f4511e',\n      },\n      headerTintColor: '#fff',\n      headerTitleStyle: {\n        fontWeight: 'bold',\n      },\n    },\n  }\n);\n")),(0,i.kt)("a",{href:"https://snack.expo.io/@react-navigation/sharing-header-styles-v2",target:"blank",class:"run-code-button"},"\u2192 Run this code"),(0,i.kt)("p",null,"Now, any screen that belongs to the ",(0,i.kt)("inlineCode",{parentName:"p"},"RootStack")," will have our wonderful branded styles. Surely though, there must be a way to override these options if we need to?"),(0,i.kt)("h2",{id:"overriding-shared-navigationoptions"},"Overriding shared ",(0,i.kt)("inlineCode",{parentName:"h2"},"navigationOptions")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"navigationOptions")," specified on your screen component are merged together with those of its parent stack navigator, with the options on the screen component taking precedence. Let's use this knowledge to invert the background and tint colors on the details screen."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"class DetailsScreen extends React.Component {\n  static navigationOptions = ({ navigation, navigationOptions }) => {\n    const { params } = navigation.state;\n\n    return {\n      title: params ? params.otherParam : 'A Nested Details Screen',\n      /* These values are used instead of the shared configuration! */\n      headerStyle: {\n        backgroundColor: navigationOptions.headerTintColor,\n      },\n      headerTintColor: navigationOptions.headerStyle.backgroundColor,\n    };\n  };\n\n  /* render function, etc */\n}\n")),(0,i.kt)("a",{href:"https://snack.expo.io/@react-navigation/overriding-shared-header-styles-v2",target:"blank",class:"run-code-button"},"\u2192 Run this code"),(0,i.kt)("h2",{id:"replacing-the-title-with-a-custom-component"},"Replacing the title with a custom component"),(0,i.kt)("p",null,"Sometimes you need more control than just changing the text and styles of your title -- for example, you may want to render an image in place of the title, or make the title into a button. In these cases you can completely override the component used for the title and provide your own."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"class LogoTitle extends React.Component {\n  render() {\n    return (\n      <Image\n        source={require('./spiro.png')}\n        style={{ width: 30, height: 30 }}\n      />\n    );\n  }\n}\n\nclass HomeScreen extends React.Component {\n  static navigationOptions = {\n    // headerTitle instead of title\n    headerTitle: <LogoTitle />,\n  };\n\n  /* render function, etc */\n}\n")),(0,i.kt)("a",{href:"https://snack.expo.io/@react-navigation/custom-header-title-component-v2",target:"blank",class:"run-code-button"},"\u2192 Run this code"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"You might be wondering, why ",(0,i.kt)("inlineCode",{parentName:"p"},"headerTitle")," when we provide a component and not ",(0,i.kt)("inlineCode",{parentName:"p"},"title"),", like before? The reason is that ",(0,i.kt)("inlineCode",{parentName:"p"},"headerTitle")," is a property that is specific to a stack navigator, the ",(0,i.kt)("inlineCode",{parentName:"p"},"headerTitle")," defaults to a ",(0,i.kt)("inlineCode",{parentName:"p"},"Text")," component that displays the ",(0,i.kt)("inlineCode",{parentName:"p"},"title"),".")),(0,i.kt)("h2",{id:"additional-configuration"},"Additional configuration"),(0,i.kt)("p",null,"You can read the full list of available ",(0,i.kt)("inlineCode",{parentName:"p"},"navigationOptions")," for screens inside of a stack navigator in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.x/stack-navigator#navigationoptions-used-by-stacknavigator"},(0,i.kt)("inlineCode",{parentName:"a"},"createStackNavigator")," reference"),"."),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You can customize the header inside of the ",(0,i.kt)("inlineCode",{parentName:"li"},"navigationOptions")," static property on your screen components. Read the full list of options ",(0,i.kt)("a",{parentName:"li",href:"/docs/2.x/stack-navigator#navigationoptions-used-by-stacknavigator"},"in the API reference"),"."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"navigationOptions")," static property can be an object or a function. When it is a function, it is provided with an object with the ",(0,i.kt)("inlineCode",{parentName:"li"},"navigation")," prop, ",(0,i.kt)("inlineCode",{parentName:"li"},"screenProps"),", and ",(0,i.kt)("inlineCode",{parentName:"li"},"navigationOptions")," on it."),(0,i.kt)("li",{parentName:"ul"},"You can also specify shared ",(0,i.kt)("inlineCode",{parentName:"li"},"navigationOptions")," in the stack navigator configuration when you initialize it. The static property takes precedence over that configuration."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://snack.expo.io/@react-navigation/custom-header-title-component-v2"},"Full source of what we have built so far"),".")))}m.isMDXComponent=!0}}]);