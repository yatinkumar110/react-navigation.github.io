"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[72589],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),s=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(a),h=r,m=c["".concat(u,".").concat(h)]||c[h]||d[h]||i;return a?n.createElement(m,o(o({ref:t},p),{},{components:a})):n.createElement(m,o({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=h;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},85162:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(67294),r=a(86010),i={tabItem:"tabItem_Ymn6"};function o(e){var t=e.children,a=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,o),hidden:a},t)}},74866:function(e,t,a){a.d(t,{Z:function(){return w}});var n=a(83117),r=a(67294),i=a(86010),o=a(12466),l=a(16550),u=a(91980),s=a(67392),p=a(50012);function c(e){return function(e){return r.Children.map(e,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function d(e){var t=e.values,a=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:c(a);return function(e){var t=(0,s.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,a])}function h(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function m(e){var t=e.queryString,a=void 0!==t&&t,n=e.groupId,i=(0,l.k6)(),o=function(e){var t=e.queryString,a=void 0!==t&&t,n=e.groupId;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:a,groupId:n});return[(0,u._X)(o),(0,r.useCallback)((function(e){if(o){var t=new URLSearchParams(i.location.search);t.set(o,e),i.replace(Object.assign({},i.location,{search:t.toString()}))}}),[o,i])]}function g(e){var t,a,n,i,o=e.defaultValue,l=e.queryString,u=void 0!==l&&l,s=e.groupId,c=d(e),g=(0,r.useState)((function(){return function(e){var t,a=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!h({value:a,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+a+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return a}var r=null!=(t=n.find((function(e){return e.default})))?t:n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:o,tabValues:c})})),f=g[0],b=g[1],y=m({queryString:u,groupId:s}),v=y[0],k=y[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:s}.groupId),a=(0,p.Nk)(t),n=a[0],i=a[1],[n,(0,r.useCallback)((function(e){t&&i.set(e)}),[t,i])]),N=w[0],x=w[1],I=function(){var e=null!=v?v:N;return h({value:e,tabValues:c})?e:null}();return(0,r.useLayoutEffect)((function(){I&&b(I)}),[I]),{selectedValue:f,selectValue:(0,r.useCallback)((function(e){if(!h({value:e,tabValues:c}))throw new Error("Can't select invalid tab value="+e);b(e),k(e),x(e)}),[k,x,c]),tabValues:c}}var f=a(72389),b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){var t=e.className,a=e.block,l=e.selectedValue,u=e.selectValue,s=e.tabValues,p=[],c=(0,o.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,a=p.indexOf(t),n=s[a].value;n!==l&&(c(t),u(n))},h=function(e){var t,a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var n,r=p.indexOf(e.currentTarget)+1;a=null!=(n=p[r])?n:p[0];break;case"ArrowLeft":var i,o=p.indexOf(e.currentTarget)-1;a=null!=(i=p[o])?i:p[p.length-1]}null==(t=a)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},t)},s.map((function(e){var t=e.value,a=e.label,o=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:function(e){return p.push(e)},onKeyDown:h,onClick:d},o,{className:(0,i.Z)("tabs__item",b.tabItem,null==o?void 0:o.className,{"tabs__item--active":l===t})}),null!=a?a:t)})))}function v(e){var t=e.lazy,a=e.children,n=e.selectedValue;if(a=Array.isArray(a)?a:[a],t){var i=a.find((function(e){return e.props.value===n}));return i?(0,r.cloneElement)(i,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n})})))}function k(e){var t=g(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",b.tabList)},r.createElement(y,(0,n.Z)({},e,t)),r.createElement(v,(0,n.Z)({},e,t)))}function w(e){var t=(0,f.Z)();return r.createElement(k,(0,n.Z)({key:String(t)},e))}},11521:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var n=a(83117),r=a(80102),i=(a(67294),a(3905)),o=(a(74866),a(85162),["components"]),l={id:"contributing",title:"React Navigation contributor guide",sidebar_label:"Contributing"},u=void 0,s={unversionedId:"contributing",id:"version-2.x/contributing",title:"React Navigation contributor guide",description:"Want to help improve React Navigation? Your help would be greatly appreciated!",source:"@site/versioned_docs/version-2.x/contributing.md",sourceDirName:".",slug:"/contributing",permalink:"/docs/2.x/contributing",draft:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-2.x/contributing.md",tags:[],version:"2.x",frontMatter:{id:"contributing",title:"React Navigation contributor guide",sidebar_label:"Contributing"},sidebar:"version-2.x-docs",previous:{title:"Alternative libraries",permalink:"/docs/2.x/alternatives"}},p={},c=[{value:"Contributing",id:"contributing",level:2},{value:"Reporting Bugs",id:"reporting-bugs",level:3},{value:"Improving the Documentation",id:"improving-the-documentation",level:3},{value:"Responding to Issues",id:"responding-to-issues",level:3},{value:"Bug Fixes",id:"bug-fixes",level:3},{value:"Suggesting a Feature",id:"suggesting-a-feature",level:3},{value:"Big Pull Requests",id:"big-pull-requests",level:3},{value:"Interface Changes &amp; Types",id:"interface-changes--types",level:3},{value:"Information",id:"information",level:2},{value:"Issue Template",id:"issue-template",level:3},{value:"Pull Request Template",id:"pull-request-template",level:3},{value:"Forking the Repository",id:"forking-the-repository",level:3},{value:"Code Review Guidelines",id:"code-review-guidelines",level:3},{value:"Run the Example App",id:"run-the-example-app",level:3},{value:"Run the Website",id:"run-the-website",level:3},{value:"Run Tests",id:"run-tests",level:3}],d={toc:c},h="wrapper";function m(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)(h,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Want to help improve React Navigation? Your help would be greatly appreciated!"),(0,i.kt)("p",null,"Here are some of some of the ways to contribute to the project:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#reporting-bugs"},"Reporting Bugs")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#improving-the-documentation"},"Improving the Documentation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#responding-to-issues"},"Responding to Issues")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#bug-fixes"},"Bug Fixes")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#suggesting-a-feature"},"Suggesting a Feature")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#big-pull-requests"},"Big Pull Requests"))),(0,i.kt)("p",null,"And here are a few helpful resources to aid in getting started:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#issue-template"},"Issue Template")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#pull-request-template"},"Pull Request Template")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#forking-the-repository"},"Forking the Repository")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#code-review-guidelines"},"Code Review Guidelines")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#run-the-example-app"},"Run the Example App")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#run-the-website"},"Run the Website")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#run-tests"},"Run Tests"))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note that we used Yarn in the examples below but you're welcome to use NPM instead.")),(0,i.kt)("h2",{id:"contributing"},"Contributing"),(0,i.kt)("h3",{id:"reporting-bugs"},"Reporting Bugs"),(0,i.kt)("p",null,"You can't write code without writing the occasional bug. Especially as React Navigation is moving quickly, bugs happen. When you think you've found one here's what to do:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Search the existing issues for one like what you're seeing. If you see one, add a \ud83d\udc4d reaction (please no +1 comments). Read through the comments and see if you can provide any more valuable information to the thread"),(0,i.kt)("li",{parentName:"ol"},"If there are no other issues like yours then create a new one. Be sure to follow the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/react-navigation/react-navigation/blob/2.x/.github/ISSUE_TEMPLATE.md"},"issue template"),".")),(0,i.kt)("p",null,"Creating a high quality reproduction is critical. Without it we likely can't fix the bug and, in an ideal situation, you'll find out that it's not actually a bug of the library but simply done incorrectly in your project. Instant bug fix!"),(0,i.kt)("h3",{id:"improving-the-documentation"},"Improving the Documentation"),(0,i.kt)("p",null,"Any successful projects needs quality documentation and React Navigation is no different."),(0,i.kt)("p",null,"Read more about the documentation on the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/react-navigation/website"},"react-navigation/website repository"),"."),(0,i.kt)("h3",{id:"responding-to-issues"},"Responding to Issues"),(0,i.kt)("p",null,"Another great way to contribute to React Navigation is by responding to issues. Maybe it's answering someone's question, pointing out a small typo in their code, or helping them put together a reproduction. If you're interested in a more active role in React Navigation start with responding to issues - not only is it helpful but it demonstrates your commitment and knowledge of the code!"),(0,i.kt)("h3",{id:"bug-fixes"},"Bug Fixes"),(0,i.kt)("p",null,"Find a bug, fix it up, all day long you'll have good luck! Like it was mentioned earlier, bugs happen. If you find a bug do the following:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Check if a pull request already exists addressing that bug. If it does give it a review and leave your comments"),(0,i.kt)("li",{parentName:"ol"},"If there isn't already a pull request then figure out the fix! If it's relatively small go ahead and fix it and submit a pull request. If it's a decent number of changes file an issue first so we can discuss it (see the ",(0,i.kt)("a",{parentName:"li",href:"#big-pull-requests"},"Big Pull Requests")," section)"),(0,i.kt)("li",{parentName:"ol"},"If there is an issue related to that bug leave a comment on it, linking to your pull request, so others know it's been addressed.")),(0,i.kt)("p",null,"Check out the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/react-navigation/react-navigation/issues?q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22"},"help wanted")," and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/react-navigation/react-navigation/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22"},"good first issue")," tags to see where you can start helping out!"),(0,i.kt)("h3",{id:"suggesting-a-feature"},"Suggesting a Feature"),(0,i.kt)("p",null,"Is there something you want to see from React Navigation? Please ",(0,i.kt)("a",{parentName:"p",href:"https://react-navigation.canny.io/feature-requests"},"create a feature request on Canny"),"."),(0,i.kt)("h3",{id:"big-pull-requests"},"Big Pull Requests"),(0,i.kt)("p",null,"For any changes that will add/remove/modify multiple files in the project (new features or bug fixes) hold off on writing code right away. There's a few reasons for that"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Big pull requests take a lot of time to review and it's sometimes hard to pick up the context"),(0,i.kt)("li",{parentName:"ol"},"Often you may not have to make as big of a change as you expect")),(0,i.kt)("p",null,"With that in mind, here's the suggestion"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Open an issue and clearly define what it is you want to accomplish and how you intend to accomplish it"),(0,i.kt)("li",{parentName:"ol"},"Discuss that solution with the community and maintainers. Provide context, establish edge cases, and figure out the design"),(0,i.kt)("li",{parentName:"ol"},"Decide on a plan of action"),(0,i.kt)("li",{parentName:"ol"},"Write the code and submit the PR"),(0,i.kt)("li",{parentName:"ol"},"Review the PR. This can take some time but, if you followed the steps above, hopefully it won't take too much time.")),(0,i.kt)("p",null,"The reason we want to do this is to save everyone time. Maybe that feature already exists but isn't documented? Or maybe it doesn't fit with the library. Regardless, by discussing a major change up front you're saving your time and others time as well."),(0,i.kt)("h3",{id:"interface-changes--types"},"Interface Changes & Types"),(0,i.kt)("p",null,"If you ever find yourself making a change to the project's public interface (the API) then you should make sure to update the corresponding library definitions for Flow. These \"libdefs\" specify our API's types so that library users can typecheck their code. An example of a qualifying change would be adding a new navigation option."),(0,i.kt)("p",null,"The libdef (located at ",(0,i.kt)("inlineCode",{parentName:"p"},"flow/react-navigation.js"),") will need to be updated such that running ",(0,i.kt)("inlineCode",{parentName:"p"},"flow")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"examples/NavigationPlayground")," folder produces no errors."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Follow the instructions in the ",(0,i.kt)("a",{parentName:"li",href:"#Run-the-Example-App"},"Run the Example App")," section to prepare the ",(0,i.kt)("inlineCode",{parentName:"li"},"NavigationPlayground")," example and install ",(0,i.kt)("inlineCode",{parentName:"li"},"flow")," into the example's local ",(0,i.kt)("inlineCode",{parentName:"li"},"node_modules/.bin")," folder."),(0,i.kt)("li",{parentName:"ol"},"Run ",(0,i.kt)("inlineCode",{parentName:"li"},"flow")," to see any current errors."),(0,i.kt)("li",{parentName:"ol"},"If no errors occur as a result of an API change, that indicates that we don't have any coverage in the ",(0,i.kt)("inlineCode",{parentName:"li"},"NavigationPlayground")," example project for your API change. This is frequently the case - for instance, if you add a new navigation option. In this case, you must add an example use of your new feature to ",(0,i.kt)("inlineCode",{parentName:"li"},"NavigationPlayground")," so that you can test your libdef changes, and so that we can keep your feature properly tested and typed in perpetuity."),(0,i.kt)("li",{parentName:"ol"},"Once you are seeing errors, go ahead and update the libdef (located at ",(0,i.kt)("inlineCode",{parentName:"li"},"flow/react-navigation.js"),") so that there are no longer any errors when you run ",(0,i.kt)("inlineCode",{parentName:"li"},"flow")," from within ",(0,i.kt)("inlineCode",{parentName:"li"},"examples/NavigationPlayground"),"."),(0,i.kt)("li",{parentName:"ol"},"Include the libdef changes in the PR for your new feature. Make sure to flag to the maintainers that your PR has a libdef change, so that when the next version of the library is released, we make sure to upload the updated libdef to the ",(0,i.kt)("inlineCode",{parentName:"li"},"flow-typed")," repo.")),(0,i.kt)("h2",{id:"information"},"Information"),(0,i.kt)("h3",{id:"issue-template"},"Issue Template"),(0,i.kt)("p",null,"Before submitting an issue, please take a look at the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/react-navigation/react-navigation/blob/2.x/.github/ISSUE_TEMPLATE.md"},"issue template")," and follow it. This is in place to help everyone better understand the issue you're having and reduce the back and forth to get the necessary information."),(0,i.kt)("p",null,"Yes, it takes time and effort to complete the issue template. But that's the only way to ask high quality questions that actually get responses."),(0,i.kt)("p",null,"Would you rather take 1 minute to create an incomplete issue report and wait months to get any sort of response? Or would you rather take 20 minutes to fill out a high quality issue report, with all the necessary elements, and get a response in days? It's also a respectful thing to do for anyone willing to take the time to review your issue."),(0,i.kt)("h3",{id:"pull-request-template"},"Pull Request Template"),(0,i.kt)("p",null,"Much like the issue template, the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/react-navigation/react-navigation/blob/2.x/.github/PULL_REQUEST_TEMPLATE.md"},"pull request template")," lays out instructions to ensure your pull request gets reviewed in a timely manner and reduces the back and forth. Make sure to look it over before you start writing any code."),(0,i.kt)("h3",{id:"forking-the-repository"},"Forking the Repository"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Fork ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/react-community/react-navigation"},(0,i.kt)("inlineCode",{parentName:"a"},"react-navigation"))," on GitHub"),(0,i.kt)("li",{parentName:"ul"},"Run these commands in the terminal to download locally and install it:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/<USERNAME>/react-navigation.git\ncd react-navigation\ngit remote add upstream https://github.com/react-community/react-navigation.git\nyarn install\n")),(0,i.kt)("h3",{id:"code-review-guidelines"},"Code Review Guidelines"),(0,i.kt)("p",null,"Look around. Match the style of the rest of the codebase. This project uses ESLint to ensure consistency throughout the project. You can check your project by running"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn run eslint\n")),(0,i.kt)("p",null,"If any errors occur you'll either have to manually fix them or you can attempt to automatically fix them by running ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn run format"),"."),(0,i.kt)("h3",{id:"run-the-example-app"},"Run the Example App"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/react-navigation/react-navigation/tree/2.x/examples/NavigationPlayground"},"NavigationPlayground")," example app includes a variety of patterns and is used as a simple way for contributors to manually integration test changes."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn install\ncd examples/NavigationPlayground\nyarn install\nyarn start\n")),(0,i.kt)("p",null,"You will be shown a QR code to scan in the Expo app. You can get Expo ",(0,i.kt)("a",{parentName:"p",href:"https://docs.expo.io/versions/latest/index.html"},"here")," if you don't have it yet."),(0,i.kt)("p",null,"Commands are the same as above for any of the example apps. If you run into any issues, please try the following to start fresh:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"watchman watch-del-all\nyarn start -- --reset-cache\n")),(0,i.kt)("h3",{id:"run-the-website"},"Run the Website"),(0,i.kt)("p",null,"For development mode and live-reloading:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd website\nyarn install\nyarn start\n")),(0,i.kt)("p",null,"To run the website in production mode with server rendering:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn run prod\n")),(0,i.kt)("p",null,"If you've made any changes to the ",(0,i.kt)("inlineCode",{parentName:"p"},"docs")," directory you'll need to run ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn run build-docs")," from the root of the project before they're picked up by the website."),(0,i.kt)("h3",{id:"run-tests"},"Run Tests"),(0,i.kt)("p",null,"React Navigation has tests implemented in ",(0,i.kt)("a",{parentName:"p",href:"https://facebook.github.io/jest/"},"Jest"),". To run either of these, from the React Navigation directory, run either of the following commands (after installing the ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules"),") to run tests or type-checking."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn run jest\n")),(0,i.kt)("p",null,"These commands will be run by our CI and are required to pass before any contributions are merged."))}m.isMDXComponent=!0}}]);