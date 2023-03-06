"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[52735],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return h}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(a),g=r,h=p["".concat(l,".").concat(g)]||p[g]||m[g]||i;return a?n.createElement(h,o(o({ref:t},u),{},{components:a})):n.createElement(h,o({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},34918:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var n=a(83117),r=a(80102),i=(a(67294),a(3905)),o=["components"],s={title:"React Navigation 4.0",author:"Satyajit Sahoo",author_url:"https://twitter.com/satya164",author_title:"Core Team",author_image_url:"https://avatars2.githubusercontent.com/u/1174278?s=200&v=4",tags:["release","announcement"]},l=void 0,c={permalink:"/blog/2019/09/16/react-navigation-4.0",source:"@site/blog/2019-09-16-react-navigation-4.0.md",title:"React Navigation 4.0",description:"The documentation is now live at https://reactnavigation.org, and v3 lives here.",date:"2019-09-16T00:00:00.000Z",formattedDate:"September 16, 2019",tags:[{label:"release",permalink:"/blog/tags/release"},{label:"announcement",permalink:"/blog/tags/announcement"}],readingTime:1.285,hasTruncateMarker:!0,authors:[{name:"Satyajit Sahoo",title:"Core Team",url:"https://twitter.com/satya164",imageURL:"https://avatars2.githubusercontent.com/u/1174278?s=200&v=4"}],frontMatter:{title:"React Navigation 4.0",author:"Satyajit Sahoo",author_url:"https://twitter.com/satya164",author_title:"Core Team",author_image_url:"https://avatars2.githubusercontent.com/u/1174278?s=200&v=4",tags:["release","announcement"]},prevItem:{title:"React Navigation meets native",permalink:"/blog/2019/10/17/react-navigation-native"},nextItem:{title:"React Navigation 3.0",permalink:"/blog/2018/11/17/react-navigation-3.0"}},u={authorsImageUrls:[void 0]},p=[],m={toc:p},g="wrapper";function h(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)(g,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The documentation is now live at ",(0,i.kt)("a",{parentName:"p",href:"https://reactnavigation.org"},"https://reactnavigation.org"),", and v3 lives ",(0,i.kt)("a",{parentName:"p",href:"/docs/3.x/getting-started"},"here"),"."),(0,i.kt)("p",null,"In this release, we have removed the navigators from the react-navigation package. The navigators have lived in separate packages for quite a while and you could already use those packages manually, but we still bundled them in the react-navigation package. This made it difficult for us to release significant updates to navigators, because we had to then do a major version release of react-navigation too. By separating the navigator packages there is more freedom to update and improve navigators without any impact on folks that don't use them."),(0,i.kt)("p",null,"For example, you will find when you install the latest versions of the drawer and tab navigators that the animations are more performant because they use react-native-reanimated to smoothly animate gestures. These have been available in react-navigation-drawer and react-navigation-tabs for several months now but we delayed updating them in react-navigation itself because we did not want to force every user to update."),(0,i.kt)("p",null,"With this version, you now install the navigators from their respective packages, which means that you can independently update them."),(0,i.kt)("p",null,"The navigators live at:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"createStackNavigator")," - ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/react-navigation/stack"},(0,i.kt)("inlineCode",{parentName:"a"},"react-navigation-stack"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"createBottomTabNavigator"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"createMaterialTopTabNavigator")," - ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/react-navigation/tabs"},(0,i.kt)("inlineCode",{parentName:"a"},"react-navigation-tabs"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"createDrawerNavigator")," - ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/react-navigation/drawer"},(0,i.kt)("inlineCode",{parentName:"a"},"react-navigation-drawer")))),(0,i.kt)("p",null,"For upgrade instructions, please check the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/react-navigation/react-navigation/releases/tag/v4.0.0"},"release notes"),"."),(0,i.kt)("p",null,"If you're using TypeScript, navigator specific types were also removed from the main package. We've mentioned the replacement types in the release notes. But if you are still having problems, please open an issue and let us know."),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Thanks for reading, please post any issues you encounter to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/react-navigation/react-navigation/issues"},"https://github.com/react-navigation/react-navigation/issues"),"!"))}h.isMDXComponent=!0}}]);