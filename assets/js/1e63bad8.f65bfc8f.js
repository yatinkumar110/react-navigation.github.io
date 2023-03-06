"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[70525],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return g}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),s=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(a),h=r,g=c["".concat(u,".").concat(h)]||c[h]||m[h]||i;return a?n.createElement(g,o(o({ref:t},p),{},{components:a})):n.createElement(g,o({ref:t},p))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=h;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},85162:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(67294),r=a(86010),i={tabItem:"tabItem_Ymn6"};function o(e){var t=e.children,a=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,o),hidden:a},t)}},74866:function(e,t,a){a.d(t,{Z:function(){return N}});var n=a(83117),r=a(67294),i=a(86010),o=a(12466),l=a(16550),u=a(91980),s=a(67392),p=a(50012);function c(e){return function(e){return r.Children.map(e,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function m(e){var t=e.values,a=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:c(a);return function(e){var t=(0,s.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,a])}function h(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function g(e){var t=e.queryString,a=void 0!==t&&t,n=e.groupId,i=(0,l.k6)(),o=function(e){var t=e.queryString,a=void 0!==t&&t,n=e.groupId;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:a,groupId:n});return[(0,u._X)(o),(0,r.useCallback)((function(e){if(o){var t=new URLSearchParams(i.location.search);t.set(o,e),i.replace(Object.assign({},i.location,{search:t.toString()}))}}),[o,i])]}function d(e){var t,a,n,i,o=e.defaultValue,l=e.queryString,u=void 0!==l&&l,s=e.groupId,c=m(e),d=(0,r.useState)((function(){return function(e){var t,a=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!h({value:a,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+a+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return a}var r=null!=(t=n.find((function(e){return e.default})))?t:n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:o,tabValues:c})})),f=d[0],k=d[1],v=g({queryString:u,groupId:s}),b=v[0],y=v[1],N=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:s}.groupId),a=(0,p.Nk)(t),n=a[0],i=a[1],[n,(0,r.useCallback)((function(e){t&&i.set(e)}),[t,i])]),w=N[0],x=N[1],R=function(){var e=null!=b?b:w;return h({value:e,tabValues:c})?e:null}();return(0,r.useLayoutEffect)((function(){R&&k(R)}),[R]),{selectedValue:f,selectValue:(0,r.useCallback)((function(e){if(!h({value:e,tabValues:c}))throw new Error("Can't select invalid tab value="+e);k(e),y(e),x(e)}),[y,x,c]),tabValues:c}}var f=a(72389),k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){var t=e.className,a=e.block,l=e.selectedValue,u=e.selectValue,s=e.tabValues,p=[],c=(0,o.o5)().blockElementScrollPositionUntilNextRender,m=function(e){var t=e.currentTarget,a=p.indexOf(t),n=s[a].value;n!==l&&(c(t),u(n))},h=function(e){var t,a=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":var n,r=p.indexOf(e.currentTarget)+1;a=null!=(n=p[r])?n:p[0];break;case"ArrowLeft":var i,o=p.indexOf(e.currentTarget)-1;a=null!=(i=p[o])?i:p[p.length-1]}null==(t=a)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},t)},s.map((function(e){var t=e.value,a=e.label,o=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:function(e){return p.push(e)},onKeyDown:h,onClick:m},o,{className:(0,i.Z)("tabs__item",k.tabItem,null==o?void 0:o.className,{"tabs__item--active":l===t})}),null!=a?a:t)})))}function b(e){var t=e.lazy,a=e.children,n=e.selectedValue;if(a=Array.isArray(a)?a:[a],t){var i=a.find((function(e){return e.props.value===n}));return i?(0,r.cloneElement)(i,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n})})))}function y(e){var t=d(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",k.tabList)},r.createElement(v,(0,n.Z)({},e,t)),r.createElement(b,(0,n.Z)({},e,t)))}function N(e){var t=(0,f.Z)();return r.createElement(y,(0,n.Z)({key:String(t)},e))}},21657:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var n=a(83117),r=a(80102),i=(a(67294),a(3905)),o=(a(74866),a(85162),["components"]),l={id:"contributing",title:"React Navigation contributor guide",sidebar_label:"Contributing"},u=void 0,s={unversionedId:"contributing",id:"version-5.x/contributing",title:"React Navigation contributor guide",description:"Want to help improve React Navigation? Your help would be greatly appreciated!",source:"@site/versioned_docs/version-5.x/contributing.md",sourceDirName:".",slug:"/contributing",permalink:"/docs/5.x/contributing",draft:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-5.x/contributing.md",tags:[],version:"5.x",frontMatter:{id:"contributing",title:"React Navigation contributor guide",sidebar_label:"Contributing"},sidebar:"version-5.x/docs",previous:{title:"Apps using React Navigation",permalink:"/docs/5.x/used-by"}},p={},c=[{value:"Contributing",id:"contributing",level:2},{value:"Reporting Bugs",id:"reporting-bugs",level:3},{value:"Improving the Documentation",id:"improving-the-documentation",level:3},{value:"Responding to Issues",id:"responding-to-issues",level:3},{value:"Bug Fixes",id:"bug-fixes",level:3},{value:"Suggesting a Feature",id:"suggesting-a-feature",level:3},{value:"Big Pull Requests",id:"big-pull-requests",level:3},{value:"Information",id:"information",level:2},{value:"Issue Template",id:"issue-template",level:3},{value:"Pull Request Template",id:"pull-request-template",level:3},{value:"Forking the Repository",id:"forking-the-repository",level:3},{value:"Code Review Guidelines",id:"code-review-guidelines",level:3},{value:"Run the Example App",id:"run-the-example-app",level:3},{value:"Run Tests",id:"run-tests",level:3}],m={toc:c},h="wrapper";function g(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)(h,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Want to help improve React Navigation? Your help would be greatly appreciated!"),(0,i.kt)("p",null,"Here are some of the ways to contribute to the project:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#contributing"},"Contributing"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#reporting-bugs"},"Reporting Bugs")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#improving-the-documentation"},"Improving the Documentation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#responding-to-issues"},"Responding to Issues")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#bug-fixes"},"Bug Fixes")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#suggesting-a-feature"},"Suggesting a Feature")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#big-pull-requests"},"Big Pull Requests")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#information"},"Information"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#issue-template"},"Issue Template")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#pull-request-template"},"Pull Request Template")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#forking-the-repository"},"Forking the Repository")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#code-review-guidelines"},"Code Review Guidelines")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#run-the-example-app"},"Run the Example App")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#run-tests"},"Run Tests"))))),(0,i.kt)("p",null,"And here are a few helpful resources to aid in getting started:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#contributing"},"Contributing"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#reporting-bugs"},"Reporting Bugs")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#improving-the-documentation"},"Improving the Documentation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#responding-to-issues"},"Responding to Issues")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#bug-fixes"},"Bug Fixes")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#suggesting-a-feature"},"Suggesting a Feature")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#big-pull-requests"},"Big Pull Requests")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#information"},"Information"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#issue-template"},"Issue Template")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#pull-request-template"},"Pull Request Template")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#forking-the-repository"},"Forking the Repository")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#code-review-guidelines"},"Code Review Guidelines")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#run-the-example-app"},"Run the Example App")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#run-tests"},"Run Tests"))))),(0,i.kt)("h2",{id:"contributing"},"Contributing"),(0,i.kt)("h3",{id:"reporting-bugs"},"Reporting Bugs"),(0,i.kt)("p",null,"You can't write code without writing the occasional bug. Especially as React Navigation is moving quickly, bugs happen. When you think you've found one here's what to do:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Search the existing issues for one like what you're seeing. If you see one, add a \ud83d\udc4d reaction (please no +1 comments). Read through the comments and see if you can provide any more valuable information to the thread"),(0,i.kt)("li",{parentName:"ol"},"If there are no other issues like yours then create a new one. Be sure to follow the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/react-navigation/react-navigation/blob/main/.github/ISSUE_TEMPLATE.md"},"issue template"),".")),(0,i.kt)("p",null,"Creating a high quality reproduction is critical. Without it we likely can't fix the bug and, in an ideal situation, you'll find out that it's not actually a bug of the library but simply done incorrectly in your project. Instant bug fix!"),(0,i.kt)("h3",{id:"improving-the-documentation"},"Improving the Documentation"),(0,i.kt)("p",null,"Any successful projects needs quality documentation and React Navigation is no different."),(0,i.kt)("p",null,"Read more about the documentation on the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/react-navigation/react-navigation.github.io"},"react-navigation/react-navigation.github.io repository"),"."),(0,i.kt)("h3",{id:"responding-to-issues"},"Responding to Issues"),(0,i.kt)("p",null,"Another great way to contribute to React Navigation is by responding to issues. Maybe it's answering someone's question, pointing out a small typo in their code, or helping them put together a reproduction. If you're interested in a more active role in React Navigation start with responding to issues - not only is it helpful but it demonstrates your commitment and knowledge of the code!"),(0,i.kt)("h3",{id:"bug-fixes"},"Bug Fixes"),(0,i.kt)("p",null,"Find a bug, fix it up, all day long you'll have good luck! Like it was mentioned earlier, bugs happen. If you find a bug do the following:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Check if a pull request already exists addressing that bug. If it does give it a review and leave your comments"),(0,i.kt)("li",{parentName:"ol"},"If there isn't already a pull request then figure out the fix! If it's relatively small go ahead and fix it and submit a pull request. If it's a decent number of changes file an issue first so we can discuss it (see the ",(0,i.kt)("a",{parentName:"li",href:"#big-pull-requests"},"Big Pull Requests")," section)"),(0,i.kt)("li",{parentName:"ol"},"If there is an issue related to that bug leave a comment on it, linking to your pull request, so others know it's been addressed.")),(0,i.kt)("p",null,"Check out the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/react-navigation/react-navigation/issues?q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22"},"help wanted")," and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/react-navigation/react-navigation/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22"},"good first issue")," tags to see where you can start helping out!"),(0,i.kt)("h3",{id:"suggesting-a-feature"},"Suggesting a Feature"),(0,i.kt)("p",null,"Is there something you want to see from React Navigation? Please ",(0,i.kt)("a",{parentName:"p",href:"https://react-navigation.canny.io/feature-requests"},"create a feature request on Canny"),"."),(0,i.kt)("h3",{id:"big-pull-requests"},"Big Pull Requests"),(0,i.kt)("p",null,"For any changes that will add/remove/modify multiple files in the project (new features or bug fixes) hold off on writing code right away. There's a few reasons for that"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Big pull requests take a lot of time to review and it's sometimes hard to pick up the context"),(0,i.kt)("li",{parentName:"ol"},"Often you may not have to make as big of a change as you expect")),(0,i.kt)("p",null,"With that in mind, here's the suggestion"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Open an issue and clearly define what it is you want to accomplish and how you intend to accomplish it"),(0,i.kt)("li",{parentName:"ol"},"Discuss that solution with the community and maintainers. Provide context, establish edge cases, and figure out the design"),(0,i.kt)("li",{parentName:"ol"},"Decide on a plan of action"),(0,i.kt)("li",{parentName:"ol"},"Write the code and submit the PR"),(0,i.kt)("li",{parentName:"ol"},"Review the PR. This can take some time but, if you followed the steps above, hopefully it won't take too much time.")),(0,i.kt)("p",null,"The reason we want to do this is to save everyone time. Maybe that feature already exists but isn't documented? Or maybe it doesn't fit with the library. Regardless, by discussing a major change up front you're saving your time and others time as well."),(0,i.kt)("h2",{id:"information"},"Information"),(0,i.kt)("h3",{id:"issue-template"},"Issue Template"),(0,i.kt)("p",null,"Before submitting an issue, please take a look at the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/react-navigation/react-navigation/blob/main/.github/ISSUE_TEMPLATE.md"},"issue template")," and follow it. This is in place to help everyone better understand the issue you're having and reduce the back and forth to get the necessary information."),(0,i.kt)("p",null,"Yes, it takes time and effort to complete the issue template. But that's the only way to ask high quality questions that actually get responses."),(0,i.kt)("p",null,"Would you rather take 1 minute to create an incomplete issue report and wait months to get any sort of response? Or would you rather take 20 minutes to fill out a high quality issue report, with all the necessary elements, and get a response in days? It's also a respectful thing to do for anyone willing to take the time to review your issue."),(0,i.kt)("h3",{id:"pull-request-template"},"Pull Request Template"),(0,i.kt)("p",null,"Much like the issue template, the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/react-navigation/react-navigation/blob/main/.github/PULL_REQUEST.md"},"pull request template")," lays out instructions to ensure your pull request gets reviewed in a timely manner and reduces the back and forth. Make sure to look it over before you start writing any code."),(0,i.kt)("h3",{id:"forking-the-repository"},"Forking the Repository"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Fork the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/react-navigation/react-navigation"},(0,i.kt)("inlineCode",{parentName:"a"},"repo"))," on GitHub"),(0,i.kt)("li",{parentName:"ul"},"Run these commands in the terminal to download locally and install it:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/<USERNAME>/navigation-ex.git\ncd navigation-ex\ngit remote add upstream https://github.com/react-navigation/react-navigation.git\nyarn\n")),(0,i.kt)("p",null,"The project uses a monorepo structure for the packages managed by ",(0,i.kt)("a",{parentName:"p",href:"https://yarnpkg.com/lang/en/docs/workspaces/"},"yarn workspaces")," and ",(0,i.kt)("a",{parentName:"p",href:"https://lerna.js.org"},"lerna"),". All of the packages are under the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/react-navigation/react-navigation/tree/main/packages"},"packages/")," directory."),(0,i.kt)("h3",{id:"code-review-guidelines"},"Code Review Guidelines"),(0,i.kt)("p",null,"Look around. Match the style of the rest of the codebase. This project uses ESLint to ensure consistency throughout the project. You can check your project by running:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"yarn lint\n")),(0,i.kt)("p",null,"If any errors occur you'll either have to manually fix them or you can attempt to automatically fix them by running:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"yarn lint --fix\n")),(0,i.kt)("p",null,"The codebase is written in TypeScript, and must pass typecheck. To typecheck files, run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"yarn typescript\n")),(0,i.kt)("p",null,"It's useful to run typechecking in watch mode when working on the project. To do it, run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"yarn typescript --watch\n")),(0,i.kt)("h3",{id:"run-the-example-app"},"Run the Example App"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/react-navigation/react-navigation/tree/main/packages/example"},"example app")," includes a variety of patterns and is used as a simple way for contributors to manually integration test changes."),(0,i.kt)("p",null,"While developing, you can run the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/react-navigation/react-navigation/tree/main/example"},"example app")," with ",(0,i.kt)("a",{parentName:"p",href:"https://expo.io/"},"Expo")," to test your changes:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"yarn example start\n")),(0,i.kt)("h3",{id:"run-tests"},"Run Tests"),(0,i.kt)("p",null,"React Navigation has tests implemented in ",(0,i.kt)("a",{parentName:"p",href:"https://facebook.github.io/jest/"},"Jest"),". To run either of these, from the React Navigation directory, run either of the following commands (after installing the ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules"),") to run tests or type-checking."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"yarn test\n")),(0,i.kt)("p",null,"It's useful to run tests in watch mode when working on the project. To do it, run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"yarn test --watch\n")),(0,i.kt)("p",null,"These commands will be run by our CI and are required to pass before any contributions are merged."))}g.isMDXComponent=!0}}]);