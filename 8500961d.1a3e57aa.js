(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{60:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return l}));var n=r(2),o=r(6),a=(r(0),r(78)),i=["components"],s={id:"getters",title:"getters",sidebar_label:"getters",slug:"/api/getters"},c={unversionedId:"getters",id:"getters",isDocsHomePage:!1,title:"getters",description:"remx.getters(...)",source:"@site/docs/getters.md",slug:"/api/getters",permalink:"/remx/docs/api/getters",editUrl:"https://github.com/wix/remx/edit/master/website/docs/getters.md",version:"current",sidebar_label:"getters",sidebar:"someSidebar",previous:{title:"state",permalink:"/remx/docs/api/state"},next:{title:"setters",permalink:"/remx/docs/api/setters"}},p=[{value:"<code>remx.getters(...)</code>",id:"remxgetters",children:[]}],u={rightToc:p};function l(e){var t=e.components,r=Object(o.a)(e,i);return Object(a.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"remxgetters"},Object(a.b)("inlineCode",{parentName:"h3"},"remx.getters(...)")),Object(a.b)("p",null,"All functions that return parts of the state should be wrapped within the Getters function.\nThe wrapped functions should be defined inside the same store file and should be exported."),Object(a.b)("p",null,"in ",Object(a.b)("inlineCode",{parentName:"p"},"someStore.js"),":"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"import * as remx from 'remx';\n\nconst getters = remx.getters({\n isLoading() {\n   return state.loading;\n },\n getPostsByIndex(index) {\n  return state.posts[index];\n },\n});\n\nexport const store = {\n  ...getters\n};\n")))}l.isMDXComponent=!0},78:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=u(r),m=n,f=l["".concat(i,".").concat(m)]||l[m]||d[m]||a;return r?o.a.createElement(f,s(s({ref:t},p),{},{components:r})):o.a.createElement(f,s({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);