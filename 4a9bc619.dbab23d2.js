(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{130:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return a})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(1),o=(r(0),r(217));const i={title:"hiveToHdfs"},a={id:"batchpipeline/workflow/workspace/job-processing/hive-to-hdfs",title:"hiveToHdfs",description:"## hiveToHdfs\r",source:"@site/docs\\batchpipeline\\workflow\\workspace\\job-processing\\hive-to-hdfs.md",permalink:"/docs/batchpipeline/workflow/workspace/job-processing/hive-to-hdfs",sidebar:"batchpipeline",previous:{title:"hdfsToServer",permalink:"/docs/batchpipeline/workflow/workspace/job-processing/hdfs-to-server"},next:{title:"hive",permalink:"/docs/batchpipeline/workflow/workspace/job-processing/hive"}},l=[{value:"hiveToHdfs",id:"hivetohdfs",children:[{value:"\uc0ac\uc6a9\uc608\uc2dc",id:"\uc0ac\uc6a9\uc608\uc2dc",children:[]}]}],c={rightToc:l};function p({components:e,...t}){return Object(o.b)("wrapper",Object(n.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"hivetohdfs"},"hiveToHdfs"),Object(o.b)("p",null,"\uc6d0\uaca9\uc5d0 \uc788\ub294 Hive \ud14c\uc774\ube14 \ub370\uc774\ud130\ub97c HDFS\ub85c \uac00\uc838\uc62c \uc218 \uc788\ub2e4. \uc88c\uce21 ","[Flow\uad6c\uc131]","\ub178\ub4dc \uc911 ","[hiveToHdfs]","\ub178\ub4dc\ub97c drag & drop \ud55c \ud6c4 Property \ud56d\ubaa9\uc744 \uc785\ub825\ud55c\ub2e4. Property \ud328\ub110\uc758 ","[\ub354\ubcf4\uae30+]"," \ubc84\ud2bc\uc744 \ub204\ub974\uba74 \uc785\ub825\uac00\ub2a5\ud55c \uc804\uccb4  Property \ud56d\ubaa9\uc744 \ubcfc \uc218 \uc788\ub2e4."),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/job-processing/flow009_hivetohdfs_property.png",alt:"flow009"}))),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"prepare : \ub178\ub4dc \uc2e4\ud589 \uc804 \uc791\uc5c5",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"delete : \uc2e4\ud589 \uc804\uc5d0 HDFS, ICOS\uc5d0\uc11c \uc0ad\uc81c\ud560 \ud3f4\ub354 \uacbd\ub85c"),Object(o.b)("li",{parentName:"ul"},"mkdir\t\uc2e4\ud589 \uc804\uc5d0 HDFS, ICOS\uc5d0\uc11c \uc0dd\uc131\ud560 \ud3f4\ub354 \uacbd\ub85c\t"))),Object(o.b)("li",{parentName:"ol"},"cluster : Hive\ub97c \uc218\ud589\ud560 \ud074\ub7ec\uc2a4\ud130(\uc9c1\uc811 \uc785\ub825 \uc120\ud0dd\uc2dc 3,4,5 \uc815\ubcf4 \uc9c1\uc811 \uc785\ub825)"),Object(o.b)("li",{parentName:"ol"},"url : JDBC Hive URL"),Object(o.b)("li",{parentName:"ol"},"user\t: Hive \uc0ac\uc6a9\uc790 \uc774\ub984\t"),Object(o.b)("li",{parentName:"ol"},"password\t: Hive \uc0ac\uc6a9\uc790 \uc554\ud638"),Object(o.b)("li",{parentName:"ol"},"path : \ub370\uc774\ud130\ub97c \uc800\uc7a5\ud560 HDFS \uacbd\ub85c"),Object(o.b)("li",{parentName:"ol"},"filename\t: \uc800\uc7a5\ud560 \ud30c\uc77c \uc774\ub984"),Object(o.b)("li",{parentName:"ol"},"header : \uceec\ub7fc \uba85 \ud5e4\ub354 \ud3ec\ud568 \uc720\ubb34"),Object(o.b)("li",{parentName:"ol"},"overwrite : \ud3f4\ub354\ub97c \ucd08\uae30\ud654 \ud558\uace0 \uc800\uc7a5\ud558\uae30"),Object(o.b)("li",{parentName:"ol"},"delimiter : \uad6c\ubd84\uc790"),Object(o.b)("li",{parentName:"ol"},"sql : \ub370\uc774\ud130\ub97c \uac00\uc838\uc624\uae30 \uc704\ud55c SQL \uc785\ub825(SELECT \ucffc\ub9ac \uc0ac\uc6a9)"),Object(o.b)("li",{parentName:"ol"},"version : Hive \ubc84\uc804(1.2.1, 3.1.1 \uc911 \ud0dd1)"),Object(o.b)("li",{parentName:"ol"},"retry",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"max : \uc7ac\uc2dc\ub3c4 \ud69f\uc218"),Object(o.b)("li",{parentName:"ul"},"period : \uc7ac\uc2dc\ub3c4 \uac04\uaca9(\ubd84 \ub2e8\uc704)"))),Object(o.b)("li",{parentName:"ol"},"forceOK : \ub370\uc774\ud130 \ucc98\ub9ac\uac00 \uc2e4\ud328\ud574\ub3c4 \uc815\uc0c1\uc73c\ub85c \ud45c\uc2dc\ud558\uace0 \uc885\ub8cc")),Object(o.b)("h3",{id:"\uc0ac\uc6a9\uc608\uc2dc"},"\uc0ac\uc6a9\uc608\uc2dc"),Object(o.b)("p",null,"kbtest \ud074\ub7ec\uc2a4\ud130 hive \uacc4\uc815\uc5d0 \uc788\ub294 iris \ud14c\uc774\ube14 \ub370\uc774\ud130\ub97c \uc870\ud68c\ud558\uc5ec test1234 \ud074\ub7ec\uc2a4\ud130\uc5d0 result.csv \ud30c\uc77c\ub85c \uc800\uc7a5\ud55c\ub2e4. "),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/job-processing/flow030_hivetohdfs_%EC%9B%90%EA%B2%A9hive%ED%85%8C%EC%9D%B4%EB%B8%94%EC%A0%95%EB%B3%B4.png",alt:"flow030"}))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"[\ube0c\ub77c\uc6b0\uc800]"," > ","[HIVE]"," \uc5d0\uc11c kbtest \ud074\ub7ec\uc2a4\ud130 Hive \uacc4\uc815\uc758 iris \ud14c\uc774\ube14 \ub0b4\uc5ed\uc744 \ud655\uc778\ud55c\ub2e4. ")),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/job-processing/flow031_hivetohdfs_property%EC%83%81%EC%84%B8%EB%82%B4%EC%9A%A9.png",alt:"flow031"}))),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"setting \ud328\ub110\uc5d0\uc11c ","[hiveToHdfs]"," \ub178\ub4dc\ub97c \uc2e4\ud589\ud560 \ud074\ub7ec\uc2a4\ud130\ub97c \uc120\ud0dd"),Object(o.b)("li",{parentName:"ol"},"property \ud328\ub110\uc5d0\uc11c hive\uac00 \uc704\uce58\ud55c \ud074\ub7ec\uc2a4\ud130\ub97c \uc120\ud0dd"),Object(o.b)("li",{parentName:"ol"},"path \uc785\ub825\ud56d\ubaa9\uc758 \ud30c\uc77c \ube0c\ub77c\uc6b0\uc800\ub97c \uc5f4\uc5b4\uc11c result.csv\ud30c\uc77c\uc744 \uc800\uc7a5\ud560 \uacbd\ub85c \uc120\ud0dd"),Object(o.b)("li",{parentName:"ol"},"query \uc785\ub825")),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/job-processing/flow032_hivetohdfs_property_%ED%8C%8C%EC%9D%BC%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80%EC%97%90%EC%84%9C%EC%A0%80%EC%9E%A5%EA%B2%BD%EB%A1%9C%EC%84%A4%EC%A0%95.png",alt:"flow032"}))),Object(o.b)("p",null,"\uc6cc\ud06c\ud50c\ub85c\uc6b0 \uc2e4\ud589\uacb0\uacfc\ub294 \uc544\ub798\uc640 \uac19\ub2e4. "),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/job-processing/flow033_hivetohdfs_%EC%B5%9C%EC%A2%85%EA%B2%B0%EA%B3%BC%ED%95%99%EC%9D%B8.png",alt:"flow033"}))))}p.isMDXComponent=!0},217:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return O}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),b=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l({},t,{},e)),r},s=function(e){var t=b(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=b(r),u=n,O=s["".concat(a,".").concat(u)]||s[u]||f[u]||i;return r?o.a.createElement(O,l({ref:t},p,{components:r})):o.a.createElement(O,l({ref:t},p))}));function O(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var p=2;p<i;p++)a[p]=r[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);