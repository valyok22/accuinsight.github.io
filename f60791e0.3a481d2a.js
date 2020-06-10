(window.webpackJsonp=window.webpackJsonp||[]).push([[257],{349:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return a})),t.d(r,"rightToc",(function(){return l})),t.d(r,"default",(function(){return u}));var n=t(1),o=t(6),i=(t(0),t(365)),c={title:"corrSelector"},a={id:"pipeline/workflow/workspace/feature-engineering/corrSelector",title:"corrSelector",description:"### Definition",source:"@site/docs/pipeline/workflow/workspace/feature-engineering/corrSelector.md",permalink:"/docs/pipeline/workflow/workspace/feature-engineering/corrSelector",sidebar:"pipeline",previous:{title:"chiSqSelector",permalink:"/docs/pipeline/workflow/workspace/feature-engineering/chiSqSelector"},next:{title:"stringIndexer",permalink:"/docs/pipeline/workflow/workspace/feature-engineering/stringIndexer"}},l=[{value:"Definition",id:"definition",children:[]},{value:"Set",id:"set",children:[]}],p={rightToc:l};function u(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,t,{components:r,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"definition"},"Definition"),Object(i.b)("p",null,"\ubc94\uc8fc\ud615 \ud53c\ucc98\ub97c \uac16\ub294 labeled \ub370\uc774\ud130\ub97c \uc0c1\uad00\ubd84\uc11d\uc744 \uae30\ubc18\ud558\uc5ec label\uacfc \uc0c1\uad00\uacc4\uc218\uac00 \ub192\uc740 \uc0c1\uc704 n\uac1c\uc758 feature\ub97c select\ud558\ub294 \ub178\ub4dc\uc785\ub2c8\ub2e4. \uc88c\uce21 ","[\ud53c\ucc98\uc5d4\uc9c0\ub2c8\uc5b4\ub9c1]","\uc5d0\uc11c ","[corrSelector]","\ub178\ub4dc\ub97c Designer\ud654\uba74\uc5d0 drag & drop \ud55c \ud6c4 \uc6b0\uce21 Components \ud328\ub110\uc5d0\uc11c \ud56d\ubaa9\ubcc4 \ud544\uc694\uc815\ubcf4\ub97c \uc785\ub825\ud569\ub2c8\ub2e4.\nComponents \ud328\ub110\uc758 \ud0ed\ubcc4 \ud56d\ubaa9\uc5d0\uc11c ","[\ub354\ubcf4\uae30+]"," \ubc84\ud2bc\uc744 \ub204\ub974\uba74 \uc785\ub825\uac00\ub2a5\ud55c \uc804\uccb4 \ud56d\ubaa9\uc744 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4. "),Object(i.b)("h3",{id:"set"},"Set"),Object(i.b)("p",null,"[setting]",", ","[scheduler]",", ","[parameter]"," \uc124\uc815\uc740 ","[\uc6cc\ud06c\ud50c\ub85c\uc6b0 \uc0dd\uc131]"," > ","[\uc124\uc815]","\uc744 \ucc38\uace0\ud569\ub2c8\ub2e4."),Object(i.b)("h4",{id:"property"},"Property"),Object(i.b)("p",null,"\uc6b0\uce21 Components \ud328\ub110\uc5d0\uc11c Property\ud0ed\uc744 \uc120\ud0dd\ud569\ub2c8\ub2e4.  "),Object(i.b)("img",{src:"/img/pipeline/workflow/workspace/feature-engineering/corrSelector001.png",width:"300px",height:"600px"}),Object(i.b)("p",null,"[Node Description]"," \uc791\uc131 \uc911\uc778 \ub178\ub4dc\uba85 \uc785\ub825"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"col : \ub300\uc0c1 \uceec\ub7fc \uc120\ud0dd")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"labelColumn : label \uceec\ub7fc \uba85 (\uc22b\uc790\ud615)")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"numTopFeatures : Correlation-analysis\uc5d0 \ub530\ub978 \uc0c1\uc704 feature\uc758 \uc218")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"overwriteSchema : \uc2e4\ud589 \uacb0\uacfc\uc5d0 \ub300\ud55c \uc2a4\ud0a4\ub9c8\ub97c \uc7ac\uc815\uc758(\uccb4\ud06c \uc548 \ud560 \uacbd\uc6b0 \uc774\uc804 \uc2a4\ud0a4\ub9c8\ub97c \uadf8\ub300\ub85c \uc0ac\uc6a9\ud568)")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"newSchema : newSchema \uc815\uc758"))))}u.isMDXComponent=!0},365:function(e,r,t){"use strict";t.d(r,"a",(function(){return b})),t.d(r,"b",(function(){return m}));var n=t(0),o=t.n(n);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),u=function(e){var r=o.a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):a({},r,{},e)),t},b=function(e){var r=u(e.components);return o.a.createElement(p.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},s=Object(n.forwardRef)((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=u(t),s=n,m=b["".concat(c,".").concat(s)]||b[s]||f[s]||i;return t?o.a.createElement(m,a({ref:r},p,{components:t})):o.a.createElement(m,a({ref:r},p))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,c=new Array(i);c[0]=s;var a={};for(var l in r)hasOwnProperty.call(r,l)&&(a[l]=r[l]);a.originalType=e,a.mdxType="string"==typeof e?e:n,c[1]=a;for(var p=2;p<i;p++)c[p]=t[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);