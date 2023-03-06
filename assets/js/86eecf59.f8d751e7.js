"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[63937],{39407:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(83117),l=n(80102),r=n(67294),o=n(86010),i=n(93743),c={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"},s=["className"],d="table-of-contents__link toc-highlight",m="table-of-contents__link--active";function u(e){var t=e.className,n=(0,l.Z)(e,s);return r.createElement("div",{className:(0,o.Z)(c.tableOfContents,"thin-scrollbar",t)},r.createElement(i.Z,(0,a.Z)({},n,{linkClassName:d,linkActiveClassName:m})))}},93743:function(e,t,n){n.d(t,{Z:function(){return h}});var a=n(83117),l=n(80102),r=n(67294),o=n(86668),i=["parentIndex"];function c(e){var t=e.map((function(e){return Object.assign({},e,{parentIndex:-1,children:[]})})),n=Array(7).fill(-1);t.forEach((function(e,t){var a=n.slice(2,e.level);e.parentIndex=Math.max.apply(Math,a),n[e.level]=t}));var a=[];return t.forEach((function(e){var n=e.parentIndex,r=(0,l.Z)(e,i);n>=0?t[n].children.push(r):a.push(r)})),a}function s(e){var t=e.toc,n=e.minHeadingLevel,a=e.maxHeadingLevel;return t.flatMap((function(e){var t=s({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[Object.assign({},e,{children:t})]:t}))}function d(e){var t=e.getBoundingClientRect();return t.top===t.bottom?d(e.parentNode):t}function m(e,t){var n,a,l=t.anchorTopOffset,r=e.find((function(e){return d(e).top>=l}));return r?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(d(r))?r:null!=(a=e[e.indexOf(r)-1])?a:null:null!=(n=e[e.length-1])?n:null}function u(){var e=(0,r.useRef)(0),t=(0,o.L)().navbar.hideOnScroll;return(0,r.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function v(e){var t=(0,r.useRef)(void 0),n=u();(0,r.useEffect)((function(){if(!e)return function(){};var a=e.linkClassName,l=e.linkActiveClassName,r=e.minHeadingLevel,o=e.maxHeadingLevel;function i(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(a),i=function(e){for(var t=e.minHeadingLevel,n=e.maxHeadingLevel,a=[],l=t;l<=n;l+=1)a.push("h"+l+".anchor");return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:r,maxHeadingLevel:o}),c=m(i,{anchorTopOffset:n.current}),s=e.find((function(e){return c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(l),e.classList.add(l),t.current=e):e.classList.remove(l)}(e,e===s)}))}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),function(){document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}}),[e,n])}function b(e){var t=e.toc,n=e.className,a=e.linkClassName,l=e.isChild;return t.length?r.createElement("ul",{className:l?void 0:n},t.map((function(e){return r.createElement("li",{key:e.id},r.createElement("a",{href:"#"+e.id,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(b,{isChild:!0,toc:e.children,className:n,linkClassName:a}))}))):null}var f=r.memo(b),p=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function h(e){var t=e.toc,n=e.className,i=void 0===n?"table-of-contents table-of-contents__left-border":n,d=e.linkClassName,m=void 0===d?"table-of-contents__link":d,u=e.linkActiveClassName,b=void 0===u?void 0:u,h=e.minHeadingLevel,E=e.maxHeadingLevel,g=(0,l.Z)(e,p),L=(0,o.L)(),C=null!=h?h:L.tableOfContents.minHeadingLevel,N=null!=E?E:L.tableOfContents.maxHeadingLevel,_=function(e){var t=e.toc,n=e.minHeadingLevel,a=e.maxHeadingLevel;return(0,r.useMemo)((function(){return s({toc:c(t),minHeadingLevel:n,maxHeadingLevel:a})}),[t,n,a])}({toc:t,minHeadingLevel:C,maxHeadingLevel:N});return v((0,r.useMemo)((function(){if(m&&b)return{linkClassName:m,linkActiveClassName:b,minHeadingLevel:C,maxHeadingLevel:N}}),[m,b,C,N])),r.createElement(f,(0,a.Z)({toc:_,className:i,linkClassName:m},g))}},74477:function(e,t,n){n.d(t,{E:function(){return i},q:function(){return o}});var a=n(67294),l=n(44700),r=a.createContext(null);function o(e){var t=e.children,n=e.version;return a.createElement(r.Provider,{value:n},t)}function i(){var e=(0,a.useContext)(r);if(null===e)throw new l.i6("DocsVersionProvider");return e}},57715:function(e,t,n){n.r(t),n.d(t,{default:function(){return ve}});var a=n(67294),l=n(10833),r=n(44700),o=a.createContext(null);function i(e){var t=e.children,n=function(e){return(0,a.useMemo)((function(){return{metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc}}),[e])}(e.content);return a.createElement(o.Provider,{value:n},t)}function c(){var e=(0,a.useContext)(o);if(null===e)throw new r.i6("DocProvider");return e}function s(){var e,t=c(),n=t.metadata,r=t.frontMatter,o=t.assets;return a.createElement(l.d,{title:n.title,description:n.description,keywords:r.keywords,image:null!=(e=o.image)?e:r.image})}var d=n(86010),m=n(87524),u=n(83117),v=n(95999),b=n(32244);function f(e){var t=e.previous,n=e.next;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,v.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&a.createElement(b.Z,(0,u.Z)({},t,{subLabel:a.createElement(v.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),n&&a.createElement(b.Z,(0,u.Z)({},n,{subLabel:a.createElement(v.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}function p(){var e=c().metadata;return a.createElement(f,{previous:e.previous,next:e.next})}var h=n(52263),E=n(39960),g=n(80143),L=n(35281),C=n(60373),N=n(74477);var _={unreleased:function(e){var t=e.siteTitle,n=e.versionMetadata;return a.createElement(v.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,n=e.versionMetadata;return a.createElement(v.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function Z(e){var t=_[e.versionMetadata.banner];return a.createElement(t,e)}function k(e){var t=e.versionLabel,n=e.to,l=e.onClick;return a.createElement(v.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:a.createElement("b",null,a.createElement(E.Z,{to:n,onClick:l},a.createElement(v.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function x(e){var t,n=e.className,l=e.versionMetadata,r=(0,h.Z)().siteConfig.title,o=(0,g.gA)({failfast:!0}).pluginId,i=(0,C.J)(o).savePreferredVersionName,c=(0,g.Jo)(o),s=c.latestDocSuggestion,m=c.latestVersionSuggestion,u=null!=s?s:(t=m).docs.find((function(e){return e.id===t.mainDocId}));return a.createElement("div",{className:(0,d.Z)(n,L.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},a.createElement("div",null,a.createElement(Z,{siteTitle:r,versionMetadata:l})),a.createElement("div",{className:"margin-top--md"},a.createElement(k,{versionLabel:m.label,to:u.path,onClick:function(){return i(m.name)}})))}function H(e){var t=e.className,n=(0,N.E)();return n.banner?a.createElement(x,{className:t,versionMetadata:n}):null}function T(e){var t=e.className,n=(0,N.E)();return n.badge?a.createElement("span",{className:(0,d.Z)(t,L.k.docs.docVersionBadge,"badge badge--secondary")},a.createElement(v.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label}},"Version: {versionLabel}")):null}function U(e){var t=e.lastUpdatedAt,n=e.formattedLastUpdatedAt;return a.createElement(v.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:a.createElement("b",null,a.createElement("time",{dateTime:new Date(1e3*t).toISOString()},n))}}," on {date}")}function y(e){var t=e.lastUpdatedBy;return a.createElement(v.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:a.createElement("b",null,t)}}," by {user}")}function A(e){var t=e.lastUpdatedAt,n=e.formattedLastUpdatedAt,l=e.lastUpdatedBy;return a.createElement("span",{className:L.k.common.lastUpdated},a.createElement(v.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&n?a.createElement(U,{lastUpdatedAt:t,formattedLastUpdatedAt:n}):"",byUser:l?a.createElement(y,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}var w=n(84881),M=n(71526),I={lastUpdated:"lastUpdated_vwxv"};function B(e){return a.createElement("div",{className:(0,d.Z)(L.k.docs.docFooterTagsRow,"row margin-bottom--sm")},a.createElement("div",{className:"col"},a.createElement(M.Z,e)))}function O(e){var t=e.editUrl,n=e.lastUpdatedAt,l=e.lastUpdatedBy,r=e.formattedLastUpdatedAt;return a.createElement("div",{className:(0,d.Z)(L.k.docs.docFooterEditMetaRow,"row")},a.createElement("div",{className:"col"},t&&a.createElement(w.Z,{editUrl:t})),a.createElement("div",{className:(0,d.Z)("col",I.lastUpdated)},(n||l)&&a.createElement(A,{lastUpdatedAt:n,formattedLastUpdatedAt:r,lastUpdatedBy:l})))}function V(){var e=c().metadata,t=e.editUrl,n=e.lastUpdatedAt,l=e.formattedLastUpdatedAt,r=e.lastUpdatedBy,o=e.tags,i=o.length>0,s=!!(t||n||r);return i||s?a.createElement("footer",{className:(0,d.Z)(L.k.docs.docFooter,"docusaurus-mt-lg")},i&&a.createElement(B,{tags:o}),s&&a.createElement(O,{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:r,formattedLastUpdatedAt:l})):null}var P=n(86043),S=n(93743),D=n(80102),R={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"},F=["collapsed"];function j(e){var t=e.collapsed,n=(0,D.Z)(e,F);return a.createElement("button",(0,u.Z)({type:"button"},n,{className:(0,d.Z)("clean-btn",R.tocCollapsibleButton,!t&&R.tocCollapsibleButtonExpanded,n.className)}),a.createElement(v.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}var z={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function q(e){var t=e.toc,n=e.className,l=e.minHeadingLevel,r=e.maxHeadingLevel,o=(0,P.u)({initialState:!0}),i=o.collapsed,c=o.toggleCollapsed;return a.createElement("div",{className:(0,d.Z)(z.tocCollapsible,!i&&z.tocCollapsibleExpanded,n)},a.createElement(j,{collapsed:i,onClick:c}),a.createElement(P.z,{lazy:!0,className:z.tocCollapsibleContent,collapsed:i},a.createElement(S.Z,{toc:t,minHeadingLevel:l,maxHeadingLevel:r})))}var G={tocMobile:"tocMobile_ITEo"};function J(){var e=c(),t=e.toc,n=e.frontMatter;return a.createElement(q,{toc:t,minHeadingLevel:n.toc_min_heading_level,maxHeadingLevel:n.toc_max_heading_level,className:(0,d.Z)(L.k.docs.docTocMobile,G.tocMobile)})}var Y=n(39407);function K(){var e=c(),t=e.toc,n=e.frontMatter;return a.createElement(Y.Z,{toc:t,minHeadingLevel:n.toc_min_heading_level,maxHeadingLevel:n.toc_max_heading_level,className:L.k.docs.docTocDesktop})}var Q=n(92503),W=n(42363);function X(e){var t,n,l,r,o=e.children,i=(t=c(),n=t.metadata,l=t.frontMatter,r=t.contentTitle,l.hide_title||void 0!==r?null:n.title);return a.createElement("div",{className:(0,d.Z)(L.k.docs.docMarkdown,"markdown")},i&&a.createElement("header",null,a.createElement(Q.Z,{as:"h1"},i)),a.createElement(W.Z,null,o))}var $=n(24575),ee=n(48596),te=n(44996);function ne(e){return a.createElement("svg",(0,u.Z)({viewBox:"0 0 24 24"},e),a.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}var ae={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function le(){var e=(0,te.Z)("/");return a.createElement("li",{className:"breadcrumbs__item"},a.createElement(E.Z,{"aria-label":(0,v.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e},a.createElement(ne,{className:ae.breadcrumbHomeIcon})))}var re={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function oe(e){var t=e.children,n=e.href,l="breadcrumbs__link";return e.isLast?a.createElement("span",{className:l,itemProp:"name"},t):n?a.createElement(E.Z,{className:l,href:n,itemProp:"item"},a.createElement("span",{itemProp:"name"},t)):a.createElement("span",{className:l},t)}function ie(e){var t=e.children,n=e.active,l=e.index,r=e.addMicrodata;return a.createElement("li",(0,u.Z)({},r&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,d.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n})}),t,a.createElement("meta",{itemProp:"position",content:String(l+1)}))}function ce(){var e=(0,$.s1)(),t=(0,ee.Ns)();return e?a.createElement("nav",{className:(0,d.Z)(L.k.docs.docBreadcrumbs,re.breadcrumbsContainer),"aria-label":(0,v.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},a.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&a.createElement(le,null),e.map((function(t,n){var l=n===e.length-1;return a.createElement(ie,{key:n,active:l,index:n,addMicrodata:!!t.href},a.createElement(oe,{href:t.href,isLast:l},t.label))})))):null}var se={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function de(e){var t,n,l,r,o,i,s=e.children,u=(t=c(),n=t.frontMatter,l=t.toc,r=(0,m.i)(),o=n.hide_table_of_contents,i=!o&&l.length>0,{hidden:o,mobile:i?a.createElement(J,null):void 0,desktop:!i||"desktop"!==r&&"ssr"!==r?void 0:a.createElement(K,null)});return a.createElement("div",{className:"row"},a.createElement("div",{className:(0,d.Z)("col",!u.hidden&&se.docItemCol)},a.createElement(H,null),a.createElement("div",{className:se.docItemContainer},a.createElement("article",null,a.createElement(ce,null),a.createElement(T,null),u.mobile,a.createElement(X,null,s),a.createElement(V,null)),a.createElement(p,null))),u.desktop&&a.createElement("div",{className:"col col--3"},u.desktop))}function me(e){var t="docs-doc-id-"+e.content.metadata.unversionedId,n=e.content;return a.createElement(i,{content:e.content},a.createElement(l.FG,{className:t},a.createElement(s,null),a.createElement(de,null,a.createElement(n,null))))}var ue=n(10412);var ve=function(e){return ue.Z.canUseDOM?a.createElement(me,e):null}}}]);