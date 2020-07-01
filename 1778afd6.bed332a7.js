(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{144:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return p})),a.d(t,"default",(function(){return o}));var r=a(1),n=a(9),c=(a(0),a(399)),b={title:"select"},l={id:"batchpipeline/workflow/workspace/data-processing-basic/select",title:"select",description:"### Definition",source:"@site/docs/batchpipeline/workflow/workspace/data-processing-basic/select.md",permalink:"/docs/batchpipeline/workflow/workspace/data-processing-basic/select",sidebar:"batchpipeline",previous:{title:"sample",permalink:"/docs/batchpipeline/workflow/workspace/data-processing-basic/sample"},next:{title:"sort",permalink:"/docs/batchpipeline/workflow/workspace/data-processing-basic/sort"}},p=[{value:"Definition",id:"definition",children:[]},{value:"Set",id:"set",children:[]},{value:"Example",id:"example",children:[]},{value:"Troubleshooting",id:"troubleshooting",children:[]}],i={rightToc:p};function o(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h3",{id:"definition"},"Definition"),Object(c.b)("p",null,"\ud544\uc694 \uceec\ub7fc\ub9cc \uc120\ud0dd\ud558\uc5ec \uc870\ud68c\ud558\ub294 \ub178\ub4dc\uc774\ub2e4. \uceec\ub7fc \uc120\ud0dd \uc21c\uc11c\uc5d0 \ub530\ub77c \ub178\ucd9c \uc21c\uc11c\uac00 \uc801\uc6a9\ub41c\ub2e4. \ud31d\uc5c5\uae30\ub2a5\uc744 \uc81c\uacf5\ud558\ubbc0\ub85c \ub178\ucd9c\uc21c\uc11c\ub97c \ud655\uc778\ud560 \uc218 \uc788\ub2e4. \uc88c\uce21 ","[\ub370\uc774\ud130\ucc98\ub9ac(\uae30\ubcf8)]","\ub178\ub4dc \uc911 ","[select]","\ub178\ub4dc\ub97c drag & drop \ud55c \ud6c4 Property \ud56d\ubaa9\uc744 \uc785\ub825\ud55c\ub2e4. "),Object(c.b)("h3",{id:"set"},"Set"),Object(c.b)("p",null,"[setting]",", ","[scheduler]",", ","[parameter]"," \uc124\uc815\uc740 ","[\uc6cc\ud06c\ud50c\ub85c\uc6b0 \uc0dd\uc131]"," > ","[\uc124\uc815]","\uc744 \ucc38\uace0\ud55c\ub2e4."),Object(c.b)("h4",{id:"property"},"property"),Object(c.b)("p",null,"[Node Description]"," \uc791\uc131 \uc911\uc778 \ub178\ub4dc\uba85 \uc785\ub825"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"col : \uc801\uc6a9\ud560 column \uc120\ud0dd. \uc544\ub798 2\uac00\uc9c0 \ubc29\ubc95 \uc9c0\uc6d0",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\uc6b0\uce21 \uc218\uc815\ubc84\ud2bc \ud65c\uc6a9\ud558\uc5ec \ud544\uc694 \uceec\ub7fc \uc120\ud0dd"),Object(c.b)("li",{parentName:"ul"},"\ub4dc\ub86d\ub2e4\uc6b4 \ubc84\ud2bc\uc5d0\uc11c \ud544\uc694 \uceec\ub7fc \uc120\ud0dd ")))),Object(c.b)("h3",{id:"example"},"Example"),Object(c.b)("p",null,"Sample \ub370\uc774\ud130\ub85c \uc0ac\uc6a9\uc911\uc778 \uc0c1\ud488\uc815\ubcf4\uc5d0\uc11c \ud544\uc694\ud55c \uceec\ub7fc(goods_id, category, price, shop_id)\ub9cc \uc120\ud0dd\ud558\ub294 \uc6cc\ud06c\ud50c\ub85c\uc6b0\ub97c \uc791\uc131\ud55c\ub2e4(\uc2e4\ud589\ud074\ub7ec\uc2a4\ud130 : kbtest)."),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"hdfs\uc5d0 \uc801\uc7ac\ub41c \ud30c\uc77c(goods-sample2.csv)\uc744 ","[HDFS\ubd88\ub7ec\uc624\uae30]","\ub85c \ubd88\ub7ec\uc628\ub2e4. \uc785\ub825\uc815\ubcf4\ub294 \uc544\ub798\uc640 \uac19\ub2e4.  "),Object(c.b)("table",{parentName:"li"},Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"property"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"input data"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"1.file"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"hdfs://kbtest-accu-hdfs-nn.suka:9000/tmp/goods-sample2.csv")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"2.format"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"csv")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"3.delimiter"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),",")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"4.sampling"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"100%")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"11.schema"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\uc790\ub3d9\ud30c\uc2f1")))),Object(c.b)("p",{parentName:"li"},Object(c.b)("img",Object(r.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/data-processing-basic/prebasic054_select_hdfs%EB%B6%88%EB%9F%AC%EC%98%A4%EA%B8%B0.png",alt:"prebasic054"})))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"[HDFS\ubd88\ub7ec\uc624\uae30]"," \uc791\uc5c5\uc5d0\uc11c \ub9cc\ub4e4\uc5b4\uc9c4 ETL \ub178\ub4dc \ub0b4\ubd80\uc5d0 ","[select]","\ub178\ub4dc\ub97c drag & drop \ud55c \ud6c4 \ub450 \ub178\ub4dc\ub97c \uc5f0\uacb0\ud55c\ub2e4.   "))),Object(c.b)("p",null,Object(c.b)("img",Object(r.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/data-processing-basic/prebasic055_select_selectnode.png",alt:"prebasic055"}))),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"[select]",'\ub178\ub4dc "1.col" property\uc5d0\uc11c \ub4dc\ub86d\ub2e4\uc6b4 \ubc84\ud2bc\uc744 \ub20c\ub7ec \ud544\uc694\ud55c \uceec\ub7fc\uc744 \uc120\ud0dd\ud55c\ub2e4(\uc6b0\uce21 ',"[\uc218\uc815]"," \ubc84\ud2bc \ud074\ub9ad \ud6c4 \uc120\ud0dd\ud574\ub3c4 \ubb34\ubc29).    ")),Object(c.b)("p",null,Object(c.b)("img",Object(r.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/data-processing-basic/prebasic056_select_property%EC%84%A4%EC%A0%95.png",alt:"prebasic056"}))),Object(c.b)("ol",{start:4},Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"select \ub178\ub4dc\uc5d0\uc11c \uc2a4\ub0c5\uc0f7\uc815\ubcf4\uc640 \uc2a4\ud0a4\ub9c8\uc815\ubcf4\ub97c \ud655\uc778\ud55c\ub2e4. "),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"\uc2a4\ub0c5\uc0f7 \uc815\ubcf4",Object(c.b)("br",{parentName:"p"}),"\n",Object(c.b)("img",Object(r.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/data-processing-basic/prebasic057_select_%EC%8A%A4%EB%83%85%EC%83%B7%EC%A0%95%EB%B3%B4.png",alt:"prebasic057"}))," ")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"\ub178\ub4dc \uc2a4\ud0a4\ub9c8 \uc815\ubcf4",Object(c.b)("br",{parentName:"p"}),"\n",Object(c.b)("img",Object(r.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/data-processing-basic/prebasic058_select_%EB%85%B8%EB%93%9C%EC%8A%A4%ED%82%A4%EB%A7%88%EC%A0%95%EB%B3%B4.png",alt:"prebasic058"}))," "))))),Object(c.b)("h3",{id:"troubleshooting"},"Troubleshooting"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"\ud074\ub7ec\uc2a4\ud130 ","[OOO]","\uc758 \uc138\uc158\uc0c1\ud0dc\ub97c \ud655\uc778\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.(\uc124\uc815 > \uc138\uc158\uad00\ub9ac)")),Object(c.b)("p",null,Object(c.b)("img",Object(r.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/data-processing-basic/prebasic059_select_%ED%81%B4%EB%9F%AC%EC%8A%A4%ED%84%B0%EC%84%B8%EC%85%98%EC%83%81%ED%83%9C%ED%99%95%EC%9D%B8%EB%B6%88%EA%B0%80.png",alt:"prebasic059"}))),Object(c.b)("p",null,"Apache Livy \uc138\uc158\uc774 \uc885\ub8cc\ub410\uac70\ub098, \ud074\ub7ec\uc2a4\ud130 \ub0b4 \uac00\uc6a9 Memory\ub97c \ub2e4\uc218 \uc810\uc720\ud558\uace0 \uc788\uc5b4 \uc6cc\ud06c\ud50c\ub85c\uc6b0 \uc2e4\ud589\uc774 \uc5b4\ub824\uc6b8 \uacbd\uc6b0 \uc704\uc640 \uac19\uc740 \uba54\uc2dc\uc9c0\uac00 \ub098\ud0c0\ub0a0 \uc218 \uc788\ub2e4. \uc544\ub798\uc640 \uac19\uc774 \uc870\uce58\ud55c\ub2e4.  "),Object(c.b)("p",null,"1> ","[\uc124\uc815]"," > ","[\uc138\uc158\uad00\ub9ac]","\uc5d0\uc11c \uc138\uc158 \uc0c1\ud0dc\uc815\ubcf4\ub97c \ud655\uc778\ud55c\ub2e4. ","[NONE]",", ","[DEAD]"," \uc0c1\ud0dc\uc77c \uacbd\uc6b0 \uae30\ub2a5 \ud544\ub4dc\uc5d0\uc11c ","[\uc138\uc158\uc0dd\uc131]"," \ubc84\ud2bc\uc744 \ub20c\ub7ec Livy Seseeion\uc744 \uc0dd\uc131\ud55c\ub2e4.   "),Object(c.b)("p",null,"2> \uc0c1\ud0dc\uc815\ubcf4\uac00 ","[IDLE]","\uc77c \uacbd\uc6b0 Livy Session\uc740 \ub5a0 \uc788\uc73c\ub098, \ud604\uc7ac \uc791\uc5c5\uc911 \ub610\ub294 \uc791\uc5c5\uc644\ub8cc \ud6c4 \uba54\ubaa8\ub9ac\ub97c \ubc18\ud658\ud558\uc9c0 \uc54a\uc740 \uc0c1\ud0dc\uc774\ub2e4. \uc544\ub798\uc640 \uac19\uc774 \uc791\uc5c5\uc0c1\ud0dc\ub97c \uba3c\uc800 \ud655\uc778\ud55c\ub2e4.   "),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"[DHP]"," > ","[CLUSTER]"," > \uc791\uc5c5 \ud074\ub7ec\uc2a4\ud130\uba85 > ","[APPL HISTORY]"," \uc73c\ub85c \uc774\ub3d9 \ud6c4 ID\ubcc4 \uc791\uc5c5\uc0c1\ud0dc(State, Final State)\uc815\ubcf4\ub97c \ud655\uc778\ud55c\ub2e4.   "),Object(c.b)("li",{parentName:"ul"},'"bpSession"\uc744 \uc81c\uc678\ud55c \ub2e4\ub978 \uc791\uc5c5\ub4e4\uc774 \uc885\ub8cc\uc0c1\ud0dc\ub77c\uba74 ',"[\uc138\uc158\uad00\ub9ac]","\uc5d0\uc11c ","[\uc138\uc158\uc0ad\uc81c]"," \ud6c4 ","[\uc138\uc158\uc0dd\uc131]"," \uc791\uc5c5\uc744 \uc218\ud589\ud55c\ub2e4.  ")))}o.isMDXComponent=!0},399:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return u}));var r=a(0),n=a.n(r);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=n.a.createContext({}),o=function(e){var t=n.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l({},t,{},e)),a},s=function(e){var t=o(e.components);return n.a.createElement(i.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,b=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),s=o(a),m=r,u=s["".concat(b,".").concat(m)]||s[m]||O[m]||c;return a?n.a.createElement(u,l({ref:t},i,{components:a})):n.a.createElement(u,l({ref:t},i))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,b=new Array(c);b[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,b[1]=l;for(var i=2;i<c;i++)b[i]=a[i];return n.a.createElement.apply(null,b)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);