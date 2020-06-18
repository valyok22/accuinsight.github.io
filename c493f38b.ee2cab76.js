(window.webpackJsonp=window.webpackJsonp||[]).push([[203],{294:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return a})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(1),i=n(6),o=(n(0),n(364)),c={title:"decision"},a={id:"pipeline/workflow/workspace/job-processing/decision",title:"decision",description:"### Definition",source:"@site/docs/pipeline/workflow/workspace/job-processing/decision.md",permalink:"/docs/pipeline/workflow/workspace/job-processing/decision",sidebar:"pipeline",previous:{title:"S3 \ub0b4\ubcf4\ub0b4\uae30",permalink:"/docs/pipeline/workflow/workspace/export-data/s3"},next:{title:"distcp",permalink:"/docs/pipeline/workflow/workspace/job-processing/distcp"}},l=[{value:"Definition",id:"definition",children:[]},{value:"Set",id:"set",children:[]},{value:"Example",id:"example",children:[]}],p={rightToc:l};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"definition"},"Definition"),Object(o.b)("p",null,"decision \ub178\ub4dc\uc5d0 \uc785\ub825\ud558\ub294 \uc870\uac74\uc5d0 \ub530\ub77c N\uac1c\uc758 Node\ub85c \uc791\uc5c5 flow\ub97c \ubd84\uae30 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc120\ud589 \ub178\ub4dc\uc758 \uacb0\uacfc\uc5d0 \ub530\ub77c \uc2e4\ud589\ub420 \ud6c4\ud589 \ub178\ub4dc\uac00 \ub2e4\ub97c \uacbd\uc6b0 \uc0ac\uc6a9\ud569\ub2c8\ub2e4.",Object(o.b)("br",{parentName:"p"}),"\n","\uc88c\uce21 ","[Flow\uad6c\uc131]","\ub178\ub4dc \uc911 ","[decision]","\ub178\ub4dc\ub97c drag & drop \ud55c \ud6c4 Property \ud56d\ubaa9\uc744 \uc785\ub825\ud569\ub2c8\ub2e4."),Object(o.b)("h3",{id:"set"},"Set"),Object(o.b)("p",null,"[setting]",", ","[scheduler]",", ","[parameter]"," \uc124\uc815\uc740 ","[\uc6cc\ud06c\ud50c\ub85c\uc6b0]"," > ","[\uc0dd\uc131]"," > ","[\uae30\ubcf8\uad6c\uc131]","\uc744 \ucc38\uace0\ud569\ub2c8\ub2e4."),Object(o.b)("h4",{id:"property"},"property"),Object(o.b)("p",null,"[Node Description]"," \uc791\uc131 \uc911\uc778 \ub178\ub4dc\uba85 \uc785\ub825"),Object(o.b)("p",null,Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"/img/pipeline/workflow/workspace/job-processing/decision01_property.png",alt:"flow060"}))),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"switch : \uc870\uac74\ubb38\uacfc \uc774\ub3d9\ud560 action \uc785\ub825",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"case : \uc870\uac74 \uc785\ub825"),Object(o.b)("li",{parentName:"ul"},"to\t: \uc870\uac74\uc5d0 \ub530\ub77c \uc218\ud589\ud560 \ud6c4\uc18d \ub178\ub4dc \uc120\ud0dd(\ucf64\ubcf4\ubc15\uc2a4)"))),Object(o.b)("li",{parentName:"ol"},"default\t: \uae30\ubcf8\uc73c\ub85c \uc774\ub3d9\ud560 action",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"to\t: \ub178\ub4dc \uc120\ud0dd")))),Object(o.b)("h3",{id:"example"},"Example"),Object(o.b)("p",null,'HDFS\uc5d0 \ud2b9\uc815 \ud30c\uc77c \uc800\uc7a5\uc5ec\ubd80\ub97c \uccb4\ud06c\ud558\uc5ec \ud30c\uc77c\uc774 \uc788\uc744 \uacbd\uc6b0 "fileexist_yes", \uc5c6\uc744 \uacbd\uc6b0 "no_files"\ub77c\ub294 0byte \ud30c\uc77c\uc744 \uc0dd\uc131\ud569\ub2c8\ub2e4. ETL \uc218\ud589\uacb0\uacfc\uac00 \uc815\uc0c1\uc801\uc73c\ub85c \uc0dd\uc131\ub418\uc5c8\ub294\uc9c0 \ud655\uc778\ud558\ub294 \uac80\uc99d\ub85c\uc9c1 \ub4f1\uc73c\ub85c \uc751\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. '),Object(o.b)("p",null,Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"/img/pipeline/workflow/workspace/job-processing/decision02_workflow.png",alt:"flow060"}))),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"kbtest \ud074\ub7ec\uc2a4\ud130\uc5d0 \uac80\uc0ac\ub300\uc0c1 \ud30c\uc77c\uc744 \uc801\uc7ac (/tmp/test-ods/AIR_HOUR_2019_2.csv)"),Object(o.b)("li",{parentName:"ol"},"[decision]"," \ubc0f ","[fs]"," \ub178\ub4dc\ub97c \uc0dd\uc131   "),Object(o.b)("li",{parentName:"ol"},"[decision]"," \ub178\ub4dc\ub97c \uc544\ub798\uc640 \uac19\uc774 \uc124\uc815",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\uacbd\ub85c\uc5d0 \ud30c\uc77c\uc774 \uc788\uc744 \uacbd\uc6b0 ","[fs_fileexist]","\ub85c \uc774\ub3d9 ",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},'case : ${fs:exists(("/tmp/test-ods/AIR_HOUR_2019_2.csv"))  == "true"}  '),Object(o.b)("li",{parentName:"ul"},"to : fs_fileexist"))),Object(o.b)("li",{parentName:"ul"},"\uacbd\ub85c\uc5d0 \ud30c\uc77c\uc774 \uc5c6\uc744 \uacbd\uc6b0 ","[fs_nofiles]","\ub85c \uc774\ub3d9 ",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},'case : ${fs:exists(("/tmp/test-ods/AIR_HOUR_2019_2.csv"))  == "false"} '),Object(o.b)("li",{parentName:"ul"},"to : fs_nofiles")))))),Object(o.b)("p",null,Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"/img/pipeline/workflow/workspace/job-processing/decision03_decisionproperty.png",alt:"flow061"}))),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"[Note]"," : oozie el function"),Object(o.b)("br",{parentName:"p"}),"\n","case \uc785\ub825 \uad6c\ubb38\uc740 oozie el function \uc73c\ub85c \uc138\ubd80 \uc0ac\ud56d\uc740 \uc544\ub798\ub97c \ucc38\uace0\ud569\ub2c8\ub2e4.",Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://oozie.apache.org/docs/4.3.0/WorkflowFunctionalSpec.html#a4.2.2_Basic_EL_Functions"}),"https://oozie.apache.org/docs/4.3.0/WorkflowFunctionalSpec.html#a4.2.2_Basic_EL_Functions"),"  ")),Object(o.b)("ol",{start:4},Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"[fs]","\ub178\ub4dc(fs_fileexist, fs_nofiles)\ub97c \uc544\ub798\uc640 \uac19\uc774 \uc124\uc815 "),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},'fs_fileexist : property "5.touchz" > HDFS File Browser\uc5d0\uc11c "hdfs://kbtest-accu-hdfs-nn.suka:9000/tmp/test-ods"\uacbd\ub85c \uc124\uc815 \ud6c4 "/fileexist.yes" \uc785\ub825'),Object(o.b)("li",{parentName:"ul"},'fs_nofiles : property "5.touchz" > HDFS File Browser\uc5d0\uc11c "hdfs://kbtest-accu-hdfs-nn.suka:9000/tmp/test-ods"\uacbd\ub85c \uc124\uc815 \ud6c4 "/no_files" \uc785\ub825'))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"\uc2e4\ud589\uacb0\uacfc"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\ub370\uc774\ud130\uac00 \uc788\uc744 \uacbd\uc6b0 \uc9c0\uc815\ud55c \uacbd\ub85c\uc5d0 fileexist.yes \uc0dd\uc131 \ud655\uc778\n",Object(o.b)("img",Object(r.a)({parentName:"li"},{src:"/img/pipeline/workflow/workspace/job-processing/decision04_casetofileyes.png",alt:"flow062"}))),Object(o.b)("li",{parentName:"ul"},"\ub370\uc774\ud130\uac00 \uc5c6\uc744 \uacbd\uc6b0 \uc9c0\uc815\ud55c \uacbd\ub85c\uc5d0 no_files \uc0dd\uc131 \ud655\uc778\n",Object(o.b)("img",Object(r.a)({parentName:"li"},{src:"/img/pipeline/workflow/workspace/job-processing/decision05_casetonofiles.png",alt:"flow063"})))))))}s.isMDXComponent=!0},364:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),s=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a({},t,{},e)),n},b=function(e){var t=s(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},f=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=s(n),f=r,m=b["".concat(c,".").concat(f)]||b[f]||u[f]||o;return n?i.a.createElement(m,a({ref:t},p,{components:n})):i.a.createElement(m,a({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=f;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:r,c[1]=a;for(var p=2;p<o;p++)c[p]=n[p];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);