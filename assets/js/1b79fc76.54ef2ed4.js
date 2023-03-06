"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[66301],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return v}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=s(n),f=a,v=p["".concat(u,".").concat(f)]||p[f]||m[f]||o;return n?r.createElement(v,i(i({ref:t},l),{},{components:n})):r.createElement(v,i({ref:t},l))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c[p]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},51794:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return v},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),i=["components"],c={title:"React Navigation 3.0",author:"Brent Vatne",author_url:"https://twitter.com/notbrent",author_title:"Core Team",author_image_url:"https://avatars0.githubusercontent.com/u/90494?s=200&v=4",tags:["release","announcement"]},u=void 0,s={permalink:"/blog/2018/11/17/react-navigation-3.0",source:"@site/blog/2018-11-17-react-navigation-3.0.md",title:"React Navigation 3.0",description:"The documentation is now live at https://reactnavigation.org, and v2 lives here.",date:"2018-11-17T00:00:00.000Z",formattedDate:"November 17, 2018",tags:[{label:"release",permalink:"/blog/tags/release"},{label:"announcement",permalink:"/blog/tags/announcement"}],readingTime:8.355,hasTruncateMarker:!0,authors:[{name:"Brent Vatne",title:"Core Team",url:"https://twitter.com/notbrent",imageURL:"https://avatars0.githubusercontent.com/u/90494?s=200&v=4"}],frontMatter:{title:"React Navigation 3.0",author:"Brent Vatne",author_url:"https://twitter.com/notbrent",author_title:"Core Team",author_image_url:"https://avatars0.githubusercontent.com/u/90494?s=200&v=4",tags:["release","announcement"]},prevItem:{title:"React Navigation 4.0",permalink:"/blog/2019/09/16/react-navigation-4.0"},nextItem:{title:"3.0 release candidate",permalink:"/blog/2018/11/01/react-navigation-3.0-rc"}},l={authorsImageUrls:[void 0]},p=[],m={toc:p},f="wrapper";function v(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)(f,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The documentation is now live at ",(0,o.kt)("a",{parentName:"p",href:"https://reactnavigation.org"},"https://reactnavigation.org"),", and v2 lives ",(0,o.kt)("a",{parentName:"p",href:"/docs/2.x/getting-started"},"here"),"."),(0,o.kt)("p",null,"This is the first release where React Navigation depends on a native module outside of React Native core: it now depends on react-native-gesture-handler. This library provides an excellent set of primitives for leveraging the operating systems\u2019 native gesture APIs and has enabled us to fix a variety of issues with stack and drawer navigators. React Navigation also depends on react-native-screens, but you don\u2019t need to install the native module if you prefer not to use it (we have a blog post coming soon that will explain what react-native-screens is and why you may want to use it, or you can watch ",(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=Z0Jl1KCWiag"},"this talk")," by the author of the library)."))}v.isMDXComponent=!0}}]);