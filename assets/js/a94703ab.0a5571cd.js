"use strict";(self.webpackChunkspec_website=self.webpackChunkspec_website||[]).push([[368],{2674:(e,t,n)=>{n.r(t),n.d(t,{default:()=>ue});var a=n(7294),o=n(6010),l=n(1944),c=n(5281),r=n(2802),i=n(1116),s=n(5999),d=n(2466),m=n(5936);const u={backToTopButton:"backToTopButton_sjWU",backToTopButtonShow:"backToTopButtonShow_xfvO"};function b(){const{shown:e,scrollToTop:t}=function(e){let{threshold:t}=e;const[n,o]=(0,a.useState)(!1),l=(0,a.useRef)(!1),{startScroll:c,cancelScroll:r}=(0,d.Ct)();return(0,d.RF)(((e,n)=>{let{scrollY:a}=e;const c=n?.scrollY;c&&(l.current?l.current=!1:a>=c?(r(),o(!1)):a<t?o(!1):a+window.innerHeight<document.documentElement.scrollHeight&&o(!0))})),(0,m.S)((e=>{e.location.hash&&(l.current=!0,o(!1))})),{shown:n,scrollToTop:()=>c(0)}}({threshold:300});return a.createElement("button",{"aria-label":(0,s.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,o.Z)("clean-btn",c.k.common.backToTopButton,u.backToTopButton,e&&u.backToTopButtonShow),type:"button",onClick:t})}var p=n(6550),h=n(7524),E=n(6668),f=n(1327),k=n(7462);function _(e){return a.createElement("svg",(0,k.Z)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}const g={collapseSidebarButton:"collapseSidebarButton_PEFL",collapseSidebarButtonIcon:"collapseSidebarButtonIcon_kv0_"};function v(e){let{onClick:t}=e;return a.createElement("button",{type:"button",title:(0,s.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,s.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,o.Z)("button button--secondary button--outline",g.collapseSidebarButton),onClick:t},a.createElement(_,{className:g.collapseSidebarButtonIcon}))}var C=n(9689),S=n(902);const I=Symbol("EmptyContext"),N=a.createContext(I);function T(e){let{children:t}=e;const[n,o]=(0,a.useState)(null),l=(0,a.useMemo)((()=>({expandedItem:n,setExpandedItem:o})),[n]);return a.createElement(N.Provider,{value:l},t)}var Z=n(6043),B=n(8596),x=n(9960),y=n(2389);function L(e){let{categoryLabel:t,onClick:n}=e;return a.createElement("button",{"aria-label":(0,s.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:n})}function w(e){let{item:t,onItemClick:n,activePath:l,level:i,index:s,...d}=e;const{items:m,label:u,collapsible:b,className:p,href:h}=t,{docs:{sidebar:{autoCollapseCategories:f}}}=(0,E.L)(),_=function(e){const t=(0,y.Z)();return(0,a.useMemo)((()=>e.href&&!e.linkUnlisted?e.href:!t&&e.collapsible?(0,r.LM)(e):void 0),[e,t])}(t),g=(0,r._F)(t,l),v=(0,B.Mg)(h,l),{collapsed:C,setCollapsed:T}=(0,Z.u)({initialState:()=>!!b&&(!g&&t.collapsed)}),{expandedItem:w,setExpandedItem:A}=function(){const e=(0,a.useContext)(N);if(e===I)throw new S.i6("DocSidebarItemsExpandedStateProvider");return e}(),H=function(e){void 0===e&&(e=!C),A(e?null:s),T(e)};return function(e){let{isActive:t,collapsed:n,updateCollapsed:o}=e;const l=(0,S.D9)(t);(0,a.useEffect)((()=>{t&&!l&&n&&o(!1)}),[t,l,n,o])}({isActive:g,collapsed:C,updateCollapsed:H}),(0,a.useEffect)((()=>{b&&null!=w&&w!==s&&f&&T(!0)}),[b,w,s,T,f]),a.createElement("li",{className:(0,o.Z)(c.k.docs.docSidebarItemCategory,c.k.docs.docSidebarItemCategoryLevel(i),"menu__list-item",{"menu__list-item--collapsed":C},p)},a.createElement("div",{className:(0,o.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":v})},a.createElement(x.Z,(0,k.Z)({className:(0,o.Z)("menu__link",{"menu__link--sublist":b,"menu__link--sublist-caret":!h&&b,"menu__link--active":g}),onClick:b?e=>{n?.(t),h?H(!1):(e.preventDefault(),H())}:()=>{n?.(t)},"aria-current":v?"page":void 0,"aria-expanded":b?!C:void 0,href:b?_??"#":_},d),u),h&&b&&a.createElement(L,{categoryLabel:u,onClick:e=>{e.preventDefault(),H()}})),a.createElement(Z.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:C},a.createElement(V,{items:m,tabIndex:C?-1:0,onItemClick:n,activePath:l,level:i+1})))}var A=n(3919),H=n(9471);const M={menuExternalLink:"menuExternalLink_NmtK"};function W(e){let{item:t,onItemClick:n,activePath:l,level:i,index:s,...d}=e;const{href:m,label:u,className:b,autoAddBaseUrl:p}=t,h=(0,r._F)(t,l),E=(0,A.Z)(m);return a.createElement("li",{className:(0,o.Z)(c.k.docs.docSidebarItemLink,c.k.docs.docSidebarItemLinkLevel(i),"menu__list-item",b),key:u},a.createElement(x.Z,(0,k.Z)({className:(0,o.Z)("menu__link",!E&&M.menuExternalLink,{"menu__link--active":h}),autoAddBaseUrl:p,"aria-current":h?"page":void 0,to:m},E&&{onClick:n?()=>n(t):void 0},d),u,!E&&a.createElement(H.Z,null)))}const R={menuHtmlItem:"menuHtmlItem_M9Kj"};function F(e){let{item:t,level:n,index:l}=e;const{value:r,defaultStyle:i,className:s}=t;return a.createElement("li",{className:(0,o.Z)(c.k.docs.docSidebarItemLink,c.k.docs.docSidebarItemLinkLevel(n),i&&[R.menuHtmlItem,"menu__list-item"],s),key:l,dangerouslySetInnerHTML:{__html:r}})}function P(e){let{item:t,...n}=e;switch(t.type){case"category":return a.createElement(w,(0,k.Z)({item:t},n));case"html":return a.createElement(F,(0,k.Z)({item:t},n));default:return a.createElement(W,(0,k.Z)({item:t},n))}}function D(e){let{items:t,...n}=e;const o=(0,r.f)(t,n.activePath);return a.createElement(T,null,o.map(((e,t)=>a.createElement(P,(0,k.Z)({key:t,item:e,index:t},n)))))}const V=(0,a.memo)(D),U={menu:"menu_SIkG",menuWithAnnouncementBar:"menuWithAnnouncementBar_GW3s"};function K(e){let{path:t,sidebar:n,className:l}=e;const r=function(){const{isActive:e}=(0,C.nT)(),[t,n]=(0,a.useState)(e);return(0,d.RF)((t=>{let{scrollY:a}=t;e&&n(0===a)}),[e]),e&&t}();return a.createElement("nav",{"aria-label":(0,s.I)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,o.Z)("menu thin-scrollbar",U.menu,r&&U.menuWithAnnouncementBar,l)},a.createElement("ul",{className:(0,o.Z)(c.k.docs.docSidebarMenu,"menu__list")},a.createElement(V,{items:n,activePath:t,level:1})))}const Y="sidebar_njMd",j="sidebarWithHideableNavbar_wUlq",z="sidebarHidden_VK0M",G="sidebarLogo_isFc";function O(e){let{path:t,sidebar:n,onCollapse:l,isHidden:c}=e;const{navbar:{hideOnScroll:r},docs:{sidebar:{hideable:i}}}=(0,E.L)();return a.createElement("div",{className:(0,o.Z)(Y,r&&j,c&&z)},r&&a.createElement(f.Z,{tabIndex:-1,className:G}),a.createElement(K,{path:t,sidebar:n}),i&&a.createElement(v,{onClick:l}))}const q=a.memo(O);var J=n(3102),Q=n(2961);const X=e=>{let{sidebar:t,path:n}=e;const l=(0,Q.e)();return a.createElement("ul",{className:(0,o.Z)(c.k.docs.docSidebarMenu,"menu__list")},a.createElement(V,{items:t,activePath:n,onItemClick:e=>{"category"===e.type&&e.href&&l.toggle(),"link"===e.type&&l.toggle()},level:1}))};function $(e){return a.createElement(J.Zo,{component:X,props:e})}const ee=a.memo($);function te(e){const t=(0,h.i)(),n="desktop"===t||"ssr"===t,o="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(q,e),o&&a.createElement(ee,e))}const ne={expandButton:"expandButton_TmdG",expandButtonIcon:"expandButtonIcon_i1dp"};function ae(e){let{toggleSidebar:t}=e;return a.createElement("div",{className:ne.expandButton,title:(0,s.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,s.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t},a.createElement(_,{className:ne.expandButtonIcon}))}const oe={docSidebarContainer:"docSidebarContainer_YfHR",docSidebarContainerHidden:"docSidebarContainerHidden_DPk8",sidebarViewport:"sidebarViewport_aRkj"};function le(e){let{children:t}=e;const n=(0,i.V)();return a.createElement(a.Fragment,{key:n?.name??"noSidebar"},t)}function ce(e){let{sidebar:t,hiddenSidebarContainer:n,setHiddenSidebarContainer:l}=e;const{pathname:r}=(0,p.TH)(),[i,s]=(0,a.useState)(!1),d=(0,a.useCallback)((()=>{i&&s(!1),l((e=>!e))}),[l,i]);return a.createElement("aside",{className:(0,o.Z)(c.k.docs.docSidebarContainer,oe.docSidebarContainer,n&&oe.docSidebarContainerHidden),onTransitionEnd:e=>{e.currentTarget.classList.contains(oe.docSidebarContainer)&&n&&s(!0)}},a.createElement(le,null,a.createElement("div",{className:(0,o.Z)(oe.sidebarViewport,i&&oe.sidebarViewportHidden)},a.createElement(te,{sidebar:t,path:r,onCollapse:d,isHidden:i}),i&&a.createElement(ae,{toggleSidebar:d}))))}const re={docMainContainer:"docMainContainer_TBSr",docMainContainerEnhanced:"docMainContainerEnhanced_lQrH",docItemWrapperEnhanced:"docItemWrapperEnhanced_JWYK"};function ie(e){let{hiddenSidebarContainer:t,children:n}=e;const l=(0,i.V)();return a.createElement("main",{className:(0,o.Z)(re.docMainContainer,(t||!l)&&re.docMainContainerEnhanced)},a.createElement("div",{className:(0,o.Z)("container padding-top--md padding-bottom--lg",re.docItemWrapper,t&&re.docItemWrapperEnhanced)},n))}const se={docRoot:"docRoot_UBD9",docsWrapper:"docsWrapper_hBAB"};function de(e){let{children:t}=e;const n=(0,i.V)(),[o,l]=(0,a.useState)(!1);return a.createElement("div",{className:se.docsWrapper},a.createElement(b,null),a.createElement("div",{className:se.docRoot},n&&a.createElement(ce,{sidebar:n.items,hiddenSidebarContainer:o,setHiddenSidebarContainer:l}),a.createElement(ie,{hiddenSidebarContainer:o},t)))}var me=n(5658);function ue(e){const t=(0,r.SN)(e);if(!t)return a.createElement(me.Z,null);const{docElement:n,sidebarName:s,sidebarItems:d}=t;return a.createElement(l.FG,{className:(0,o.Z)(c.k.page.docsDocPage)},a.createElement(i.b,{name:s,items:d},a.createElement(de,null,n)))}},5658:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294),o=n(6010),l=n(5999),c=n(2503);function r(e){let{className:t}=e;return a.createElement("main",{className:(0,o.Z)("container margin-vert--xl",t)},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement(c.Z,{as:"h1",className:"hero__title"},a.createElement(l.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(l.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(l.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}}}]);