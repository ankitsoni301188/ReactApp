(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[10,5,15],{402:function(e,t,n){"use strict";n.r(t);var r=n(37),a=n.n(r),o=n(57),i=n(723),c=n(703),s=n(1),l=n(15),u=n(21),d=n(97),f=(n(704),n(706),n(705),n(726)),b=(n(59),n(185),n(6)),p=function(e){switch(e){case"Active":return"success";case"Inactive":return"secondary";case"Pending":return"warning";case"Banned":return"danger";default:return"primary"}};t.default=function(e){Object(l.g)();var t=Object(l.h)().search.match(/page=([0-9]+)/,""),n=Number(t&&t[1]?t[1]:1),r=Object(s.useState)(n),h=Object(c.a)(r,2),m=h[0],j=h[1],y=Object(s.useState)([]),v=Object(c.a)(y,2),O=v[0],g=v[1];Object(s.useEffect)((function(){n!==m&&j(n)}),[n,m]),Object(s.useEffect)((function(){e.fetched||x(),console.log("mount it!")}),[]);var x=function(){var e=Object(o.a)(a.a.mark((function e(){var t,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"GET",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"http://localhost:5001"}},n=d.a.SYSTEM_SETTINGS.API_URL+"/format",e.next=4,fetch(n,t).then((function(e){return e.json()})).then((function(e){return d.a.Format1List=e.response}));case 4:console.log("Data"+JSON.stringify(d.a.Format1List));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(u.wb,{children:Object(b.jsx)(u.u,{xl:12,children:Object(b.jsxs)(u.j,{children:[Object(b.jsx)(u.n,{children:Object(b.jsxs)(u.wb,{children:[Object(b.jsx)(u.u,{children:Object(b.jsx)("h5",{children:"Format1 List: "})}),Object(b.jsx)(u.u,{children:Object(b.jsxs)("small",{className:"text-muted",children:["\xa0\xa0\xa0\xa0",Object(b.jsx)(f.CSVLink,{data:d.a.Format1List,filename:"Format1List.csv",className:"btn btn-primary float-right",headers:[{label:"FullName",key:"FullName"},{label:"RegistrationNo",key:"RegistrationNo"},{label:"FatherName",key:"FatherName"},{label:"DOB",key:"DOB"},{label:"MobileNo",key:"MobileNo"},{label:"AadharCardNo",key:"AadharCardNo"},{label:"NomineeName",key:"NomineeName"},{label:"NomineeRelationShip",key:"NomineeRelationShip"},{label:"Village",key:"Village"},{label:"District",key:"District"},{label:"Mandal",key:"Mandal"},{label:"PSBCSRegNo",key:"PSBCSRegNo"},{label:"PSBCSName",key:"PSBCSName"},{label:"SocietyMembershpNo",key:"SocietyMembershpNo"},{label:"VeterinarySergeon",key:"VeterinarySergeon"},{label:"VeterinaryAddress",key:"VeterinaryAddress"},{label:"VASMobileNo",key:"VASMobileNo"},{label:"VASEmail",key:"VASEmail"},{label:"GroudingDate",key:"GroudingDate"},{label:"GroudingPlace",key:"GroudingPlace"},{label:"SheepNos",key:"SheepNos"},{label:"TotalSheepValue",key:"TotalSheepValue"},{label:"InsuracePeriodFrom",key:"InsuracePeriodFrom"},{label:"InsuracePeriodTime",key:"InsuracePeriodTime"},{label:"InsuracePeriodTo",key:"InsuracePeriodTo"}],children:"Download CSV"})]})})]})}),Object(b.jsx)(u.k,{children:Object(b.jsx)(u.y,{items:d.a.Format1List,fields:[{key:"FullName"},{key:"RegistrationNo"},{key:"FatherName"},{key:"DOB"},{key:"MobileNo"},{key:"AadharCardNo"},{key:"NomineeName"},{key:"NomineeRelationShip"},{key:"Village"},{key:"District"},{key:"Mandal"},{key:"show_details",label:"",_style:{width:"1%"},sorter:!1,filter:!1}],tableFilter:!0,itemsPerPageSelect:!0,itemsPerPage:5,hover:!0,sorter:!0,pagination:!0,scopedSlots:{status:function(e){return Object(b.jsx)("td",{children:Object(b.jsx)(u.b,{color:p(e.Status),children:e.status})})},show_details:function(e,t){return Object(b.jsx)("td",{className:"py-2",children:Object(b.jsx)(u.f,{color:"primary",variant:"outline",shape:"square",size:"sm",onClick:function(){!function(e){var t=O.indexOf(e),n=O.slice();-1!==t?n.splice(t,1):n=[].concat(Object(i.a)(O),[e]),g(n)}(t)},show:"false",children:O.includes(t)?"Hide":"Show"})})},details:function(e,t){return Object(b.jsx)(u.v,{show:O.includes(t),children:Object(b.jsxs)(u.k,{children:[Object(b.jsxs)("h4",{children:["PSBCS Reg No:-  ",e.PSBCSRegNo]}),Object(b.jsx)(u.f,{size:"sm",color:"success",children:"Print"}),Object(b.jsx)(u.f,{size:"sm",color:"danger",className:"ml-1",children:"Delete"})]})})}}})})]})})})})}},537:function(e,t,n){"use strict";n.r(t);n(1);var r=n(708),a=n(6);t.default=function(){return Object(a.jsxs)("div",{className:"c-app c-default-layout",children:[Object(a.jsx)(r.e,{}),Object(a.jsxs)("div",{className:"c-wrapper",children:[Object(a.jsx)(r.c,{}),Object(a.jsx)("div",{className:"c-body",children:Object(a.jsx)(r.a,{})}),Object(a.jsx)(r.b,{})]})]})}},700:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,"a",(function(){return r}))},701:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(700);function a(e,t){if(e){if("string"===typeof e)return Object(r.a)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(r.a)(e,t):void 0}}},703:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(701);function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(s){a=!0,o=s}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}}(e,t)||Object(r.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},704:function(e,t,n){"use strict";var r=n(37),a=n.n(r),o=n(57),i=(n(1),n(132)),c=n(21),s=n(44),l=n(401),u=n(97),d=n(708),f=n(6);n(718);t.a=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.sidebarShow})),n={method:"GET",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"http://localhost:3004"}},r=function(){var e=Object(o.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return[],t=u.a.SYSTEM_SETTINGS.API_URL+"/fetchPolicy/",e.next=4,fetch(t,n).then((function(e){return e.json()})).then((function(e){return e.response}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(f.jsxs)(c.M,{withSubheader:!0,children:[Object(f.jsx)(c.Qb,{inHeader:!0,className:"ml-md-3 d-lg-none",onClick:function(){var n=!![!1,"responsive"].includes(t)||"responsive";e({type:"set",sidebarShow:n})}}),Object(f.jsx)(c.Qb,{inHeader:!0,className:"ml-3 d-md-down-none",onClick:function(){var n=![!0,"responsive"].includes(t)&&"responsive";e({type:"set",sidebarShow:n})}}),Object(f.jsx)(c.N,{className:"mx-auto d-lg-none",to:"/"}),Object(f.jsxs)(c.O,{className:"d-md-down-none mr-auto",children:[Object(f.jsx)(c.P,{className:"px-3",children:Object(f.jsx)(c.Q,{to:"/views/dashboard",children:"Dashboard"})}),Object(f.jsx)(c.P,{className:"px-3",children:Object(f.jsx)(c.Q,{to:"/views/users",children:"Users"})}),Object(f.jsx)(c.P,{className:"px-3",children:Object(f.jsx)(c.Q,{onClick:r,children:"Fetch Policy"})})]}),Object(f.jsx)(c.O,{className:"px-3",children:Object(f.jsx)(d.d,{})}),Object(f.jsxs)(c.Gb,{className:"px-3 justify-content-between",children:[Object(f.jsx)(c.e,{className:"border-0 c-subheader-nav m-0 px-0 px-md-3",routes:l.a}),Object(f.jsxs)("div",{className:"d-md-down-none mfe-2 c-subheader-nav",children:[Object(f.jsx)(c.db,{className:"c-subheader-nav-link",href:"#",children:Object(f.jsx)(s.a,{name:"cil-speech",alt:"Settings"})}),Object(f.jsxs)(c.db,{className:"c-subheader-nav-link","aria-current":"page",to:"/dashboard",children:[Object(f.jsx)(s.a,{name:"cil-graph",alt:"Dashboard"}),"\xa0Dashboard"]}),Object(f.jsxs)(c.db,{className:"c-subheader-nav-link",href:"#",children:[Object(f.jsx)(s.a,{name:"cil-settings",alt:"Settings"}),"\xa0Settings"]})]})]})]})}},705:function(e,t,n){"use strict";var r=n(46),a=n(1),o=n.n(a),i=n(15),c=n(21),s=n(401),l=n(6),u=Object(l.jsx)("div",{className:"pt-3 text-center",children:Object(l.jsx)("div",{className:"sk-spinner sk-spinner-pulse"})}),d=function(){return Object(l.jsx)("main",{className:"c-main",children:Object(l.jsx)(c.w,{fluid:!0,children:Object(l.jsx)(a.Suspense,{fallback:u,children:Object(l.jsxs)(i.d,{children:[s.a.map((function(e,t){return e.component&&Object(l.jsx)(i.b,{path:e.path,exact:e.exact,name:e.name,render:function(t){return Object(l.jsx)(c.H,{children:Object(l.jsx)(e.component,Object(r.a)({},t))})}},t)})),Object(l.jsx)(i.a,{from:"/dashboard",to:"/views/dashboard"}),Object(l.jsx)(i.a,{from:"/login",to:"/pages/login"})]})})})})};t.a=o.a.memo(d)},706:function(e,t,n){"use strict";var r=n(1),a=n.n(r),o=n(132),i=n(21),c=n(44),s=n(6),l=[{_tag:"CSidebarNavItem",name:"Dashboard",to:"/views/dashboard",icon:Object(s.jsx)(c.a,{name:"cil-speedometer",customClasses:"c-sidebar-nav-icon"}),badge:{color:"info",text:""}},{_tag:"CSidebarNavItem",name:"Create User",to:"/register",icon:Object(s.jsx)(c.a,{name:"cil-user",customClasses:"c-sidebar-nav-icon"}),badge:{color:"info",text:""}},{_tag:"CSidebarNavItem",name:"Insurance Registration",to:"/views/format1",icon:Object(s.jsx)(c.a,{name:"cil-speedometer",customClasses:"c-sidebar-nav-icon"}),badge:{color:"info",text:""}},{_tag:"CSidebarNavItem",name:"Create Claim ",to:"/views/format3",icon:Object(s.jsx)(c.a,{name:"cil-speedometer",customClasses:"c-sidebar-nav-icon"}),badge:{color:"info",text:""}},{_tag:"CSidebarNavItem",name:"Tag Loss Form",to:"/views/format4",icon:Object(s.jsx)(c.a,{name:"cil-speedometer",customClasses:"c-sidebar-nav-icon"}),badge:{color:"info",text:""}}],u=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.sidebarShow}));return Object(s.jsxs)(i.yb,{show:t,onShowChange:function(t){return e({type:"set",sidebarShow:t})},children:[Object(s.jsx)(i.zb,{className:"d-md-down-none",to:"/dashboard",children:Object(s.jsx)("label",{children:"Fouress Insurance Broking Services Pvt Ltd "})}),Object(s.jsx)(i.Bb,{children:Object(s.jsx)(i.x,{items:l,components:{CSidebarNavDivider:i.Cb,CSidebarNavDropdown:i.Db,CSidebarNavItem:i.Eb,CSidebarNavTitle:i.Fb}})}),Object(s.jsx)(i.Ab,{className:"c-d-md-down-none"})]})};t.a=a.a.memo(u)},708:function(e,t,n){"use strict";n.d(t,"a",(function(){return r.a})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return u.a})),n.d(t,"d",(function(){return b})),n.d(t,"e",(function(){return p.a}));var r=n(705),a=n(1),o=n.n(a),i=n(21),c=n(6),s=function(){return Object(c.jsx)(i.I,{fixed:!1,children:Object(c.jsxs)("div",{children:[Object(c.jsx)("a",{href:"#",rel:"noopener noreferrer",children:"New India Assurance Co. Ltd. "}),Object(c.jsx)("span",{className:"ml-1",children:"(Please call on +91-7536825280 for Any Assistance)."})]})})},l=o.a.memo(s),u=n(704),d=(n(46),n(72),n(44)),f=n(15),b=function(e){var t=Object(f.g)();return Object(c.jsxs)(i.z,{inNav:!0,className:"c-header-nav-items mx-2",direction:"down",children:[Object(c.jsx)(i.E,{className:"c-header-nav-link",caret:!1,children:Object(c.jsx)("div",{className:"c-avatar",children:Object(c.jsx)(i.R,{src:"avatars/9.png",className:"c-avatar-img",alt:"abcd.com"})})}),Object(c.jsx)(i.D,{className:"pt-0",placement:"bottom-end",children:Object(c.jsxs)(i.C,{onClick:function(e){localStorage.clear(),t.push("/login")},children:[Object(c.jsx)(d.a,{name:"cil-lock-locked",className:"mfe-2"}),"Log Out"]})})]})},p=(n(537),n(706))},718:function(e,t,n){window,e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}({"./xmlParser.js":function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,r,a;return t=e,(r=[{key:"_parseFromString",value:function(e){var t=this,n=(e=this._encodeCDATAValues(e)).replace(/\s{2,}/g," ").replace(/\\t\\n\\r/g,"").replace(/>/g,">\n").replace(/\]\]/g,"]]\n"),r=[];return n.split("\n").map((function(e){if((e=e.trim())&&!(e.indexOf("?xml")>-1))if(0==e.indexOf("<")&&e.indexOf("CDATA")<0){var n=t._parseTag(e);r.push(n),e.match(/\/\s*>$/)&&r.push(t._parseTag("</"+n.name+">"))}else r[r.length-1].value+=" ".concat(t._parseValue(e))})),this._convertTagsArrayToTree(r)[0]}},{key:"_encodeCDATAValues",value:function(e){for(var t=new RegExp(/<!\[CDATA\[([^\]\]]+)\]\]/gi),n=t.exec(e);n;)n.length>1&&(e=e.replace(n[1],encodeURIComponent(n[1]))),n=t.exec(e);return e}},{key:"_getElementsByTagName",value:function(e){var t=[];return"*"!=e&&this.name.toLowerCase()!==e.toLowerCase()||t.push(this),this.children.map((function(n){t=t.concat(n.getElementsByTagName(e))})),t}},{key:"_parseTag",value:function(e,t){var n=e.match(/([^\s]*)=('([^']*?)'|"([^"]*?)")|([\/?\w\-\:]+)/g),r={name:n.shift().replace(/\/\s*$/,""),attributes:{},children:[],value:"",getElementsByTagName:this._getElementsByTagName};return n.map((function(e){var t=e.split("=");if(!(t.length<2)){var n=t[0],a="";a=2===t.length?t[1]:(t=t.slice(1)).join("="),r.attributes[n]="string"==typeof a?a.replace(/^"/g,"").replace(/^'/g,"").replace(/"$/g,"").replace(/'$/g,"").trim():a}})),r}},{key:"_parseValue",value:function(e){return e.indexOf("CDATA")<0?e.trim():e.substring(e.lastIndexOf("[")+1,e.indexOf("]"))}},{key:"_convertTagsArrayToTree",value:function(e){for(var t=[];e.length>0;){var n=e.shift();if(n.value.indexOf("</")>-1||n.name.match(/\/$/))n.name=n.name.replace(/\/$/,"").trim(),n.value=n.value.substring(0,n.value.indexOf("</")).trim(),t.push(n);else{if(0==n.name.indexOf("/"))break;t.push(n),n.children=this._convertTagsArrayToTree(e),n.value=decodeURIComponent(n.value.trim())}}return t}},{key:"_toString",value:function(e){var t=this,n=this._convertTagToText(e);return e.children.length>0&&(e.children.map((function(e){n+=t._toString(e)})),n+="</"+e.name+">"),n}},{key:"_convertTagToText",value:function(e){var t="<"+e.name;for(var n in e.attributes)t+=" "+n+'="'+e.attributes[n]+'"';return e.value.length>0?t+=">"+e.value:t+=">",0===e.children.length&&(t+="</"+e.name+">"),t}},{key:"parseFromString",value:function(e){return this._parseFromString(e)}},{key:"toString",value:function(e){return this._toString(e)}}])&&n(t.prototype,r),a&&n(t,a),e}()},0:function(e,t,n){e.exports=n("./xmlParser.js")}})},720:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function a(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var o=t.isSafari=function(){return/^((?!chrome|android).)*safari/i.test(navigator.userAgent)},i=t.isJsons=function(e){return Array.isArray(e)&&e.every((function(e){return"object"===("undefined"===typeof e?"undefined":r(e))&&!(e instanceof Array)}))},c=t.isArrays=function(e){return Array.isArray(e)&&e.every((function(e){return Array.isArray(e)}))},s=t.jsonsHeaders=function(e){return Array.from(e.map((function(e){return Object.keys(e)})).reduce((function(e,t){return new Set([].concat(a(e),a(t)))}),[]))},l=t.jsons2arrays=function(e,t){var n=t=t||s(e),r=t;i(t)&&(n=t.map((function(e){return e.label})),r=t.map((function(e){return e.key})));var o=e.map((function(e){return r.map((function(t){return u(t,e)}))}));return[n].concat(a(o))},u=t.getHeaderValue=function(e,t){var n=e.replace(/\[([^\]]+)]/g,".$1").split(".").reduce((function(e,t,n,r){if(void 0!==e[t])return e[t];r.splice(1)}),t);return void 0===n?e in t?t[e]:"":n},d=t.elementOrEmpty=function(e){return e||0===e?e:""},f=t.joiner=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:",",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:'"';return e.filter((function(e){return e})).map((function(e){return e.map((function(e){return d(e)})).map((function(e){return""+n+e+n})).join(t)})).join("\n")},b=t.arrays2csv=function(e,t,n,r){return f(t?[t].concat(a(e)):e,n,r)},p=t.jsons2csv=function(e,t,n,r){return f(l(e,t),n,r)},h=t.string2csv=function(e,t,n,r){return t?t.join(n)+"\n"+e:e},m=t.toCSV=function(e,t,n,r){if(i(e))return p(e,t,n,r);if(c(e))return b(e,t,n,r);if("string"===typeof e)return h(e,t,n);throw new TypeError('Data should be a "String", "Array of arrays" OR "Array of objects" ')};t.buildURI=function(e,t,n,r,a){var i=m(e,n,r,a),c=o()?"application/csv":"text/csv",s=new Blob([t?"\ufeff":"",i],{type:c}),l="data:"+c+";charset=utf-8,"+(t?"\ufeff":"")+i,u=window.URL||window.webkitURL;return"undefined"===typeof u.createObjectURL?l:u.createObjectURL(s)}},721:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PropsNotForwarded=t.defaultProps=t.propTypes=void 0;var r,a=n(1),o=((r=a)&&r.__esModule,n(0));t.propTypes={data:(0,o.oneOfType)([o.string,o.array]).isRequired,headers:o.array,target:o.string,separator:o.string,filename:o.string,uFEFF:o.bool,onClick:o.func,asyncOnClick:o.bool},t.defaultProps={separator:",",filename:"generatedBy_react-csv.csv",uFEFF:!0,asyncOnClick:!1},t.PropsNotForwarded=["data","headers"]},723:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(700);var a=n(701);function o(e){return function(e){if(Array.isArray(e))return Object(r.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(a.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},726:function(e,t,n){e.exports=n(729)},729:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CSVLink=t.CSVDownload=void 0;var r=o(n(730)),a=o(n(731));function o(e){return e&&e.__esModule?e:{default:e}}t.CSVDownload=r.default,t.CSVLink=a.default},730:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(1),i=(r=o)&&r.__esModule?r:{default:r},c=n(720),s=n(721);var l=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={},n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"buildURI",value:function(){return c.buildURI.apply(void 0,arguments)}},{key:"componentDidMount",value:function(){var e=this.props,t=e.data,n=e.headers,r=e.separator,a=e.enclosingCharacter,o=e.uFEFF,i=e.target,c=e.specs,s=e.replace;this.state.page=window.open(this.buildURI(t,o,n,r,a),i,c,s)}},{key:"getWindow",value:function(){return this.state.page}},{key:"render",value:function(){return null}}]),t}(i.default.Component);l.defaultProps=Object.assign(s.defaultProps,{target:"_blank"}),l.propTypes=s.propTypes,t.default=l},731:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(1),c=(r=i)&&r.__esModule?r:{default:r},s=n(720),l=n(721);var u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.buildURI=n.buildURI.bind(n),n.state={href:""},n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.data,n=e.headers,r=e.separator,a=e.uFEFF,o=e.enclosingCharacter;this.setState({href:this.buildURI(t,a,n,r,o)})}},{key:"componentDidUpdate",value:function(e){if(this.props!==e){var t=this.props,n=t.data,r=t.headers,a=t.separator,o=t.uFEFF;this.setState({href:this.buildURI(n,o,r,a)})}}},{key:"buildURI",value:function(){return s.buildURI.apply(void 0,arguments)}},{key:"handleLegacy",value:function(e){if(window.navigator.msSaveOrOpenBlob){e.preventDefault();var t=this.props,n=t.data,r=t.headers,a=t.separator,o=t.filename,i=t.enclosingCharacter,c=t.uFEFF,l=new Blob([c?"\ufeff":"",(0,s.toCSV)(n,r,a,i)]);return window.navigator.msSaveBlob(l,o),!1}}},{key:"handleAsyncClick",value:function(e){var t=this;this.props.onClick(e,(function(n){!1!==n?t.handleLegacy(e):e.preventDefault()}))}},{key:"handleSyncClick",value:function(e){!1===this.props.onClick(e)?e.preventDefault():this.handleLegacy(e)}},{key:"handleClick",value:function(){var e=this;return function(t){if("function"===typeof e.props.onClick)return e.props.asyncOnClick?e.handleAsyncClick(t):e.handleSyncClick(t);e.handleLegacy(t)}}},{key:"render",value:function(){var e=this,t=this.props,n=(t.data,t.headers,t.separator,t.filename),r=(t.uFEFF,t.children),o=(t.onClick,t.asyncOnClick,t.enclosingCharacter,function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(t,["data","headers","separator","filename","uFEFF","children","onClick","asyncOnClick","enclosingCharacter"]));return c.default.createElement("a",a({download:n},o,{ref:function(t){return e.link=t},target:"_self",href:this.state.href,onClick:this.handleClick()}),r)}}]),t}(c.default.Component);u.defaultProps=l.defaultProps,u.propTypes=l.propTypes,t.default=u}}]);
//# sourceMappingURL=10.0862bb7c.chunk.js.map