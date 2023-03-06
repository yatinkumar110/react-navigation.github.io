"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[65492],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},b=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=s(t),b=a,m=d["".concat(l,".").concat(b)]||d[b]||p[b]||o;return t?r.createElement(m,i(i({ref:n},c),{},{components:t})):r.createElement(m,i({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=b;var u={};for(var l in n)hasOwnProperty.call(n,l)&&(u[l]=n[l]);u.originalType=e,u[d]="string"==typeof e?e:a,i[1]=u;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}b.displayName="MDXCreateElement"},85162:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(67294),a=t(86010),o={tabItem:"tabItem_Ymn6"};function i(e){var n=e.children,t=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,i),hidden:t},n)}},74866:function(e,n,t){t.d(n,{Z:function(){return w}});var r=t(83117),a=t(67294),o=t(86010),i=t(12466),u=t(16550),l=t(91980),s=t(67392),c=t(50012);function d(e){return function(e){return a.Children.map(e,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}function p(e){var n=e.values,t=e.children;return(0,a.useMemo)((function(){var e=null!=n?n:d(t);return function(e){var n=(0,s.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function b(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function m(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId,o=(0,u.k6)(),i=function(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:t,groupId:r});return[(0,l._X)(i),(0,a.useCallback)((function(e){if(i){var n=new URLSearchParams(o.location.search);n.set(i,e),o.replace(Object.assign({},o.location,{search:n.toString()}))}}),[i,o])]}function h(e){var n,t,r,o,i=e.defaultValue,u=e.queryString,l=void 0!==u&&u,s=e.groupId,d=p(e),h=(0,a.useState)((function(){return function(e){var n,t=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!b({value:t,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var a=null!=(n=r.find((function(e){return e.default})))?n:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:i,tabValues:d})})),f=h[0],v=h[1],g=m({queryString:l,groupId:s}),k=g[0],y=g[1],w=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:s}.groupId),t=(0,c.Nk)(n),r=t[0],o=t[1],[r,(0,a.useCallback)((function(e){n&&o.set(e)}),[n,o])]),E=w[0],x=w[1],N=function(){var e=null!=k?k:E;return b({value:e,tabValues:d})?e:null}();return(0,a.useLayoutEffect)((function(){N&&v(N)}),[N]),{selectedValue:f,selectValue:(0,a.useCallback)((function(e){if(!b({value:e,tabValues:d}))throw new Error("Can't select invalid tab value="+e);v(e),y(e),x(e)}),[y,x,d]),tabValues:d}}var f=t(72389),v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){var n=e.className,t=e.block,u=e.selectedValue,l=e.selectValue,s=e.tabValues,c=[],d=(0,i.o5)().blockElementScrollPositionUntilNextRender,p=function(e){var n=e.currentTarget,t=c.indexOf(n),r=s[t].value;r!==u&&(d(n),l(r))},b=function(e){var n,t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":var r,a=c.indexOf(e.currentTarget)+1;t=null!=(r=c[a])?r:c[0];break;case"ArrowLeft":var o,i=c.indexOf(e.currentTarget)-1;t=null!=(o=c[i])?o:c[c.length-1]}null==(n=t)||n.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},n)},s.map((function(e){var n=e.value,t=e.label,i=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:u===n?0:-1,"aria-selected":u===n,key:n,ref:function(e){return c.push(e)},onKeyDown:b,onClick:p},i,{className:(0,o.Z)("tabs__item",v.tabItem,null==i?void 0:i.className,{"tabs__item--active":u===n})}),null!=t?t:n)})))}function k(e){var n=e.lazy,t=e.children,r=e.selectedValue;if(t=Array.isArray(t)?t:[t],n){var o=t.find((function(e){return e.props.value===r}));return o?(0,a.cloneElement)(o,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},t.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})})))}function y(e){var n=h(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",v.tabList)},a.createElement(g,(0,r.Z)({},e,n)),a.createElement(k,(0,r.Z)({},e,n)))}function w(e){var n=(0,f.Z)();return a.createElement(y,(0,r.Z)({key:String(n)},e))}},32585:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return d}});var r=t(83117),a=t(80102),o=(t(67294),t(3905)),i=(t(74866),t(85162),["components"]),u={id:"custom-android-back-button-handling",title:"Custom Android back button behavior",sidebar_label:"Custom Android back button behavior"},l=void 0,s={unversionedId:"custom-android-back-button-handling",id:"version-3.x/custom-android-back-button-handling",title:"Custom Android back button behavior",description:"By default, when user presses the Android hardware back button, react-navigation will pop a screen or exit the app if there are no screens to pop. This is a sensible default behavior, but there are situations when you might want to implement custom handling.",source:"@site/versioned_docs/version-3.x/custom-android-back-button-handling.md",sourceDirName:".",slug:"/custom-android-back-button-handling",permalink:"/docs/3.x/custom-android-back-button-handling",draft:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-3.x/custom-android-back-button-handling.md",tags:[],version:"3.x",frontMatter:{id:"custom-android-back-button-handling",title:"Custom Android back button behavior",sidebar_label:"Custom Android back button behavior"},sidebar:"version-3.x-docs",previous:{title:"Navigation options resolution",permalink:"/docs/3.x/navigation-options-resolution"},next:{title:"Access the navigation prop from any component",permalink:"/docs/3.x/connecting-navigation-prop"}},c={},d=[{value:"Why not use component lifecycle methods?",id:"why-not-use-component-lifecycle-methods",level:3}],p={toc:d},b="wrapper";function m(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)(b,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"By default, when user presses the Android hardware back button, react-navigation will pop a screen or exit the app if there are no screens to pop. This is a sensible default behavior, but there are situations when you might want to implement custom handling."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If you're looking for an easy-to-use solution, you can check out a community-developed package ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/vonovak/react-navigation-backhandler"},"react-navigation-backhandler"),". The following text shows what the package does under the cover.")),(0,o.kt)("p",null,'As an example, consider a screen where user is selecting items in a list, and a "selection mode" is active. On a back button press, you would first want the "selection mode" to be deactivated, and the screen should be popped only on the second back button press. The following code snippet demonstrates the situation. We make use of ',(0,o.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/backhandler.html"},(0,o.kt)("inlineCode",{parentName:"a"},"BackHandler"))," which comes with react-native and we ",(0,o.kt)("a",{parentName:"p",href:"/docs/3.x/navigation-prop#addlistener-subscribe-to-updates-to-navigation-lifecycle"},"subscribe to navigation lifecycle updates")," to add our custom ",(0,o.kt)("inlineCode",{parentName:"p"},"hardwareBackPress")," listener."),(0,o.kt)("p",null,"Returning ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," from ",(0,o.kt)("inlineCode",{parentName:"p"},"onBackButtonPressAndroid")," denotes that we have handled the event, and react-navigation's listener will not get called, thus not popping the screen. Returning ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," will cause the event to bubble up and react-navigation's listener will pop the screen."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"import React from \"react\";\nimport { BackHandler } from \"react-native\";\n\nclass ScreenWithCustomBackBehavior extends React.Component {\n  _didFocusSubscription;\n  _willBlurSubscription;\n\n  constructor(props) {\n    super(props);\n    this._didFocusSubscription = props.navigation.addListener('didFocus', payload =>\n      BackHandler.addEventListener('hardwareBackPress', this.onBackButtonPressAndroid)\n    );\n  }\n\n  componentDidMount() {\n    this._willBlurSubscription = this.props.navigation.addListener('willBlur', payload =>\n      BackHandler.removeEventListener('hardwareBackPress', this.onBackButtonPressAndroid)\n    );\n  }\n\n  onBackButtonPressAndroid = () => {\n    if (this.isSelectionModeEnabled()) {\n      this.disableSelectionMode();\n      return true;\n    } else {\n      return false;\n    }\n  };\n\n  componentWillUnmount() {\n    this._didFocusSubscription && this._didFocusSubscription.remove();\n    this._willBlurSubscription && this._willBlurSubscription.remove();\n  }\n\n  render() {\n    // ...\n  }\n}\n")),(0,o.kt)("p",null,"The presented approach will work well for screens that are shown in a ",(0,o.kt)("inlineCode",{parentName:"p"},"StackNavigator"),". Custom back button handling in other situations may not be supported at the moment (eg. A known case when this does not work is when you want to handle back button press in an open drawer. PRs for such use cases are welcome!)."),(0,o.kt)("h3",{id:"why-not-use-component-lifecycle-methods"},"Why not use component lifecycle methods?"),(0,o.kt)("p",null,"At first, you may be inclined to use ",(0,o.kt)("inlineCode",{parentName:"p"},"componentDidMount")," to subscribe for the back press event and ",(0,o.kt)("inlineCode",{parentName:"p"},"componentWillUnmount")," to unsubscribe. This approach will not work - learn more about this in ",(0,o.kt)("a",{parentName:"p",href:"/docs/3.x/navigation-lifecycle"},"navigation lifecycle"),"."))}m.isMDXComponent=!0}}]);