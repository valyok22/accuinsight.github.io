(window.webpackJsonp=window.webpackJsonp||[]).push([[190],{281:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(1),o=(r(0),r(365));const a={title:"mlTrain"},i={id:"batchpipeline/workflow/workspace/job-processing/ml-train",title:"mlTrain",description:"### Definition\r",source:"@site/docs\\batchpipeline\\workflow\\workspace\\job-processing\\ml-train.md",permalink:"/docs/batchpipeline/workflow/workspace/job-processing/ml-train",sidebar:"batchpipeline",previous:{title:"mlRecommend",permalink:"/docs/batchpipeline/workflow/workspace/job-processing/ml-recommend"},next:{title:"pyspark",permalink:"/docs/batchpipeline/workflow/workspace/job-processing/pyspark"}},l=[{value:"Definition",id:"definition",children:[]},{value:"Set",id:"set",children:[]},{value:"Example",id:"example",children:[]}],c={rightToc:l};function p({components:e,...t}){return Object(o.b)("wrapper",Object(n.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"definition"},"Definition"),Object(o.b)("p",null,"ML Modeler\uc11c\ube44\uc2a4\uc5d0\uc11c \uae30 \uc800\uc7a5\ub41c \ud30c\uc774\ud504\ub77c\uc778\uc744 \uc0ac\uc6a9\ud558\uc5ec ml \ud559\uc2b5\uc744 \uc2e4\ud589\ud558\ub294 \ub178\ub4dc\uc774\ub2e4. ","[Flow\uad6c\uc131]","\ub178\ub4dc \uc911 ","[mlTrain]","\ub178\ub4dc\ub97c drag & drop \ud55c \ud6c4 Property \ud56d\ubaa9\uc744 \uc785\ub825\ud55c\ub2e4. Property \ud328\ub110\uc758 ","[\ub354\ubcf4\uae30+]"," \ubc84\ud2bc\uc744 \ub204\ub974\uba74 \uc785\ub825\uac00\ub2a5\ud55c \uc804\uccb4  Property \ud56d\ubaa9\uc744 \ubcfc \uc218 \uc788\ub2e4."),Object(o.b)("h3",{id:"set"},"Set"),Object(o.b)("p",null,"[setting]",", ","[scheduler]",", ","[parameter]"," \uc124\uc815\uc740 ","[\uc6cc\ud06c\ud50c\ub85c\uc6b0 \uc0dd\uc131]"," > ","[\uc124\uc815]","\uc744 \ucc38\uace0\ud55c\ub2e4."),Object(o.b)("h4",{id:"property"},"property"),Object(o.b)("p",null,"[Node Description]"," \uc791\uc131 \uc911\uc778 \ub178\ub4dc\uba85 \uc785\ub825"),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/job-processing/flow014_mltrain_property.png",alt:"flow014"}))),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"modelName : \ubaa8\ub378\uba85 \uc785\ub825 "),Object(o.b)("li",{parentName:"ol"},"modelDesc : \uc124\uba85 \uc785\ub825 "),Object(o.b)("li",{parentName:"ol"},"pipelineId : \ube0c\ub77c\uc6b0\uc800\uc5d0\uc11c \uae30\uc874\uc758 \ud30c\uc774\ud504\ub77c\uc778 \ubaa9\ub85d \uc911 \uc0ac\uc6a9\ud560 \ud30c\uc774\ud504\ub77c\uc778\uc744 \uc120\ud0dd"),Object(o.b)("li",{parentName:"ol"},"datasetPath : ml train\uc744 \uc218\ud589\ud560 \ub370\uc774\ud130\uc14b \uacbd\ub85c (HDFS, S3 File browser\uc744 \uc81c\uacf5-\ud31d\uc5c5\uc5d0\uc11c \ud574\ub2f9 \uacbd\ub85c\ub97c \uc120\ud0dd)"),Object(o.b)("li",{parentName:"ol"},"format : \ub370\uc774\ud130\uc14b \ud3ec\ub9f7 \uc120\ud0dd (parquet, csv, orc \uc911 \uc120\ud0dd)"),Object(o.b)("li",{parentName:"ol"},"datasetPathcredential : datasetPath\uac00 s3\uc778 \uacbd\uc6b0 credential \uc815\ubcf4 (datasetPath \uc124\uc815 \uc2dc \uc790\ub3d9\uc14b\ud305\ub428)"),Object(o.b)("li",{parentName:"ol"},"modelPath : \ud559\uc2b5 \uc131\uacf5 \uc2dc \ubaa8\ub378 \uc800\uc7a5 \uacbd\ub85c (HDFS, S3 File browser\uc744 \uc81c\uacf5-\ud31d\uc5c5\uc5d0\uc11c \ud574\ub2f9 \uacbd\ub85c\ub97c \uc120\ud0dd)"),Object(o.b)("li",{parentName:"ol"},"modelPathcredential : modelPath\uac00 s3\uc778 \uacbd\uc6b0 credential \uc815\ubcf4 (modelPath \uc124\uc815 \uc2dc \uc790\ub3d9\uc14b\ud305\ub428)"),Object(o.b)("li",{parentName:"ol"},"modelCluster : \ud559\uc2b5\uc2dc \uc0ac\uc6a9\ud560 \ud074\ub7ec\uc2a4\ud130\uba85 (setting\uc758 cluster \uc120\ud0dd \uc2dc \uc790\ub3d9\uc14b\ud305\ub428)"),Object(o.b)("li",{parentName:"ol"},"spartOpts : spark \uc635\uc158 \ub9ac\uc2a4\ud2b8 \uc785\ub825 (key : --executor-memory , value : 20G)")),Object(o.b)("h3",{id:"example"},"Example"),Object(o.b)("h4",{id:"property-1"},"Property"),Object(o.b)("p",null,"HDFS \ube0c\ub77c\uc6b0\uc800\ub97c \uc0ac\uc6a9\ud558\ub294 \uc608\uc2dc\uc785\ub2c8\ub2e4."),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/job-processing/flow014_mltrain_example.png",alt:"flow014"}))),Object(o.b)("h4",{id:"\uc2e4\ud589-\uacb0\uacfc"},"\uc2e4\ud589 \uacb0\uacfc"),Object(o.b)("p",null,"\ube0c\ub77c\uc6b0\uc800 > HDFS \ube0c\ub77c\uc6b0\uc800 \uc5d0\uc11c mlTrain \uc2e4\ud589 \uacb0\uacfc\ub85c \uc800\uc7a5\ub41c \ubaa8\ub378\uc744 \ud655\uc778 \ud560 \uc218 \uc788\ub2e4."),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/job-processing/flow014_mltrain_result.png",alt:"flow014"}))))}p.isMDXComponent=!0},365:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),b=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l({},t,{},e)),r},s=function(e){var t=b(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=b(r),u=n,d=s["".concat(i,".").concat(u)]||s[u]||m[u]||a;return r?o.a.createElement(d,l({ref:t},p,{components:r})):o.a.createElement(d,l({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);