(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[13],{537:function(e,t,s){"use strict";s.r(t);s(1);var a=s(711),c=s(6);t.default=function(){return Object(c.jsxs)("div",{className:"c-app c-default-layout",children:[Object(c.jsx)(a.h,{}),Object(c.jsxs)("div",{className:"c-wrapper",children:[Object(c.jsx)(a.c,{}),Object(c.jsx)("div",{className:"c-body",children:Object(c.jsx)(a.a,{})}),Object(c.jsx)(a.b,{})]})]})}},704:function(e,t,s){"use strict";var a=s(37),c=s.n(a),n=s(57),r=(s(1),s(133)),i=s(21),l=s(44),o=s(401),d=s(97),j=s(711),m=s(6);s(719);t.a=function(){var e=Object(r.b)(),t=Object(r.c)((function(e){return e.sidebarShow})),s={method:"GET",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"http://localhost:3004"}},a=function(){var e=Object(n.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return[],t=d.a.SYSTEM_SETTINGS.API_URL+"/fetchPolicy/",e.next=4,fetch(t,s).then((function(e){return e.json()})).then((function(e){return e.response}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(m.jsxs)(i.M,{withSubheader:!0,children:[Object(m.jsx)(i.Qb,{inHeader:!0,className:"ml-md-3 d-lg-none",onClick:function(){var s=!![!1,"responsive"].includes(t)||"responsive";e({type:"set",sidebarShow:s})}}),Object(m.jsx)(i.Qb,{inHeader:!0,className:"ml-3 d-md-down-none",onClick:function(){var s=![!0,"responsive"].includes(t)&&"responsive";e({type:"set",sidebarShow:s})}}),Object(m.jsx)(i.N,{className:"mx-auto d-lg-none",to:"/"}),Object(m.jsxs)(i.O,{className:"d-md-down-none mr-auto",children:[Object(m.jsx)(i.P,{className:"px-3",children:Object(m.jsx)(i.Q,{to:"/views/dashboard",children:"Dashboard"})}),Object(m.jsx)(i.P,{className:"px-3",children:Object(m.jsx)(i.Q,{to:"/views/users",children:"Users"})}),Object(m.jsx)(i.P,{className:"px-3",children:Object(m.jsx)(i.Q,{onClick:a,children:"Fetch Policy"})})]}),Object(m.jsxs)(i.O,{className:"px-3",children:[Object(m.jsx)(j.f,{}),Object(m.jsx)(j.g,{}),Object(m.jsx)(j.e,{}),Object(m.jsx)(j.d,{})]}),Object(m.jsxs)(i.Gb,{className:"px-3 justify-content-between",children:[Object(m.jsx)(i.e,{className:"border-0 c-subheader-nav m-0 px-0 px-md-3",routes:o.a}),Object(m.jsxs)("div",{className:"d-md-down-none mfe-2 c-subheader-nav",children:[Object(m.jsx)(i.db,{className:"c-subheader-nav-link",href:"#",children:Object(m.jsx)(l.a,{name:"cil-speech",alt:"Settings"})}),Object(m.jsxs)(i.db,{className:"c-subheader-nav-link","aria-current":"page",to:"/dashboard",children:[Object(m.jsx)(l.a,{name:"cil-graph",alt:"Dashboard"}),"\xa0Dashboard"]}),Object(m.jsxs)(i.db,{className:"c-subheader-nav-link",href:"#",children:[Object(m.jsx)(l.a,{name:"cil-settings",alt:"Settings"}),"\xa0Settings"]})]})]})]})}},706:function(e,t,s){"use strict";var a=s(46),c=s(1),n=s.n(c),r=s(15),i=s(21),l=s(401),o=s(6),d=Object(o.jsx)("div",{className:"pt-3 text-center",children:Object(o.jsx)("div",{className:"sk-spinner sk-spinner-pulse"})}),j=function(){return Object(o.jsx)("main",{className:"c-main",children:Object(o.jsx)(i.w,{fluid:!0,children:Object(o.jsx)(c.Suspense,{fallback:d,children:Object(o.jsxs)(r.d,{children:[l.a.map((function(e,t){return e.component&&Object(o.jsx)(r.b,{path:e.path,exact:e.exact,name:e.name,render:function(t){return Object(o.jsx)(i.H,{children:Object(o.jsx)(e.component,Object(a.a)({},t))})}},t)})),Object(o.jsx)(r.a,{from:"/dashboard",to:"/views/dashboard"}),Object(o.jsx)(r.a,{from:"/login",to:"/pages/login"})]})})})})};t.a=n.a.memo(j)},707:function(e,t,s){"use strict";var a=s(1),c=s.n(a),n=s(133),r=s(21),i=s(44),l=s(6),o=[{_tag:"CSidebarNavItem",name:"Dashboard",to:"/views/dashboard",icon:Object(l.jsx)(i.a,{name:"cil-speedometer",customClasses:"c-sidebar-nav-icon"}),badge:{color:"info",text:""}},{_tag:"CSidebarNavItem",name:"Format1",to:"/views/format1",icon:Object(l.jsx)(i.a,{name:"cil-speedometer",customClasses:"c-sidebar-nav-icon"}),badge:{color:"info",text:""}},{_tag:"CSidebarNavItem",name:"Format3",to:"/views/format3",icon:Object(l.jsx)(i.a,{name:"cil-speedometer",customClasses:"c-sidebar-nav-icon"}),badge:{color:"info",text:""}},{_tag:"CSidebarNavItem",name:"Format4",to:"/views/format4",icon:Object(l.jsx)(i.a,{name:"cil-speedometer",customClasses:"c-sidebar-nav-icon"}),badge:{color:"info",text:""}}],d=function(){var e=Object(n.b)(),t=Object(n.c)((function(e){return e.sidebarShow}));return Object(l.jsxs)(r.yb,{show:t,onShowChange:function(t){return e({type:"set",sidebarShow:t})},children:[Object(l.jsx)(r.zb,{className:"d-md-down-none",to:"/dashboard",children:Object(l.jsx)("label",{children:"Fouress Insurance Broking Services Pvt Ltd "})}),Object(l.jsx)(r.Bb,{children:Object(l.jsx)(r.x,{items:o,components:{CSidebarNavDivider:r.Cb,CSidebarNavDropdown:r.Db,CSidebarNavItem:r.Eb,CSidebarNavTitle:r.Fb}})}),Object(l.jsx)(r.Ab,{className:"c-d-md-down-none"})]})};t.a=c.a.memo(d)},711:function(e,t,s){"use strict";s.d(t,"a",(function(){return a.a})),s.d(t,"b",(function(){return o})),s.d(t,"c",(function(){return d.a})),s.d(t,"d",(function(){return b})),s.d(t,"e",(function(){return u})),s.d(t,"f",(function(){return x})),s.d(t,"g",(function(){return h})),s.d(t,"h",(function(){return O.a}));var a=s(706),c=s(1),n=s.n(c),r=s(21),i=s(6),l=function(){return Object(i.jsx)(r.I,{fixed:!1,children:Object(i.jsxs)("div",{children:[Object(i.jsx)("a",{href:"#",rel:"noopener noreferrer",children:"UNITED INDIA INSURANCE COMPANY LIMITED. "}),Object(i.jsx)("span",{className:"ml-1",children:"(Please call on +91-7536825280 for Any Assistance)."})]})})},o=n.a.memo(l),d=s(704),j=(s(46),s(72),s(44)),m=s(15),b=function(e){var t=Object(m.g)();return Object(i.jsxs)(r.z,{inNav:!0,className:"c-header-nav-items mx-2",direction:"down",children:[Object(i.jsx)(r.E,{className:"c-header-nav-link",caret:!1,children:Object(i.jsx)("div",{className:"c-avatar",children:Object(i.jsx)(r.R,{src:"avatars/9.png",className:"c-avatar-img",alt:"abcd.com"})})}),Object(i.jsx)(r.D,{className:"pt-0",placement:"bottom-end",children:Object(i.jsxs)(r.C,{onClick:function(e){localStorage.clear(),t.push("/login")},children:[Object(i.jsx)(j.a,{name:"cil-lock-locked",className:"mfe-2"}),"Log Out"]})})]})},u=function(){return Object(i.jsxs)(r.z,{inNav:!0,className:"c-header-nav-item mx-2",direction:"down",children:[Object(i.jsxs)(r.E,{className:"c-header-nav-link",caret:!1,children:[Object(i.jsx)(j.a,{name:"cil-envelope-open"}),Object(i.jsx)(r.b,{shape:"pill",color:"info",children:4})]}),Object(i.jsxs)(r.D,{className:"pt-0",placement:"bottom-end",children:[Object(i.jsx)(r.C,{header:!0,tag:"div",color:"light",children:Object(i.jsxs)("strong",{children:["You have ",4," messages"]})}),Object(i.jsx)(r.C,{href:"#",children:Object(i.jsxs)("div",{className:"message",children:[Object(i.jsx)("div",{className:"pt-3 mr-3 float-left",children:Object(i.jsxs)("div",{className:"c-avatar",children:[Object(i.jsx)(r.R,{src:"avatars/7.jpg",className:"c-avatar-img",alt:"admin@bootstrapmaster.com"}),Object(i.jsx)("span",{className:"c-avatar-status bg-success"})]})}),Object(i.jsxs)("div",{children:[Object(i.jsx)("small",{className:"text-muted",children:"John Doe"}),Object(i.jsx)("small",{className:"text-muted float-right mt-1",children:"Just now"})]}),Object(i.jsxs)("div",{className:"text-truncate font-weight-bold",children:[Object(i.jsx)("span",{className:"fa fa-exclamation text-danger"})," Important message"]}),Object(i.jsx)("div",{className:"small text-muted text-truncate",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt..."})]})}),Object(i.jsx)(r.C,{href:"#",children:Object(i.jsxs)("div",{className:"message",children:[Object(i.jsx)("div",{className:"pt-3 mr-3 float-left",children:Object(i.jsxs)("div",{className:"c-avatar",children:[Object(i.jsx)(r.R,{src:"avatars/6.jpg",className:"c-avatar-img",alt:"admin@bootstrapmaster.com"}),Object(i.jsx)("span",{className:"c-avatar-status bg-warning"})]})}),Object(i.jsxs)("div",{children:[Object(i.jsx)("small",{className:"text-muted",children:"Jane Dovve"}),Object(i.jsx)("small",{className:"text-muted float-right mt-1",children:"5 minutes ago"})]}),Object(i.jsx)("div",{className:"text-truncate font-weight-bold",children:"Lorem ipsum dolor sit amet"}),Object(i.jsx)("div",{className:"small text-muted text-truncate",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt..."})]})}),Object(i.jsx)(r.C,{href:"#",children:Object(i.jsxs)("div",{className:"message",children:[Object(i.jsx)("div",{className:"pt-3 mr-3 float-left",children:Object(i.jsxs)("div",{className:"c-avatar",children:[Object(i.jsx)(r.R,{src:"avatars/5.jpg",className:"c-avatar-img",alt:"admin@bootstrapmaster.com"}),Object(i.jsx)("span",{className:"c-avatar-status bg-danger"})]})}),Object(i.jsxs)("div",{children:[Object(i.jsx)("small",{className:"text-muted",children:"Janet Doe"}),Object(i.jsx)("small",{className:"text-muted float-right mt-1",children:"1:52 PM"})]}),Object(i.jsx)("div",{className:"text-truncate font-weight-bold",children:"Lorem ipsum dolor sit amet"}),Object(i.jsx)("div",{className:"small text-muted text-truncate",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt..."})]})}),Object(i.jsx)(r.C,{href:"#",children:Object(i.jsxs)("div",{className:"message",children:[Object(i.jsx)("div",{className:"pt-3 mr-3 float-left",children:Object(i.jsxs)("div",{className:"c-avatar",children:[Object(i.jsx)(r.R,{src:"avatars/4.jpg",className:"c-avatar-img",alt:"admin@bootstrapmaster.com"}),Object(i.jsx)("span",{className:"c-avatar-status bg-info"})]})}),Object(i.jsxs)("div",{children:[Object(i.jsx)("small",{className:"text-muted",children:"Joe Doe"}),Object(i.jsx)("small",{className:"text-muted float-right mt-1",children:"4:03 AM"})]}),Object(i.jsx)("div",{className:"text-truncate font-weight-bold",children:"Lorem ipsum dolor sit amet"}),Object(i.jsx)("div",{className:"small text-muted text-truncate",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt..."})]})}),Object(i.jsx)(r.C,{href:"#",className:"text-center border-top",children:Object(i.jsx)("strong",{children:"View all messages"})})]})]})},x=function(){return Object(i.jsxs)(r.z,{inNav:!0,className:"c-header-nav-item mx-2",children:[Object(i.jsxs)(r.E,{className:"c-header-nav-link",caret:!1,children:[Object(i.jsx)(j.a,{name:"cil-bell"}),Object(i.jsx)(r.b,{shape:"pill",color:"danger",children:5})]}),Object(i.jsxs)(r.D,{placement:"bottom-end",className:"pt-0",children:[Object(i.jsx)(r.C,{header:!0,tag:"div",className:"text-center",color:"light",children:Object(i.jsxs)("strong",{children:["You have ",5," notifications"]})}),Object(i.jsxs)(r.C,{children:[Object(i.jsx)(j.a,{name:"cil-user-follow",className:"mr-2 text-success"})," New user registered"]}),Object(i.jsxs)(r.C,{children:[Object(i.jsx)(j.a,{name:"cil-user-unfollow",className:"mr-2 text-danger"})," User deleted"]}),Object(i.jsxs)(r.C,{children:[Object(i.jsx)(j.a,{name:"cil-chart-pie",className:"mr-2 text-info"})," Sales report is ready"]}),Object(i.jsxs)(r.C,{children:[Object(i.jsx)(j.a,{name:"cil-basket",className:"mr-2 text-primary"})," New client"]}),Object(i.jsxs)(r.C,{children:[Object(i.jsx)(j.a,{name:"cil-speedometer",className:"mr-2 text-warning"})," Server overloaded"]}),Object(i.jsx)(r.C,{header:!0,tag:"div",color:"light",children:Object(i.jsx)("strong",{children:"Server"})}),Object(i.jsxs)(r.C,{className:"d-block",children:[Object(i.jsx)("div",{className:"text-uppercase mb-1",children:Object(i.jsx)("small",{children:Object(i.jsx)("b",{children:"CPU Usage"})})}),Object(i.jsx)(r.ub,{size:"xs",color:"info",value:25}),Object(i.jsx)("small",{className:"text-muted",children:"348 Processes. 1/4 Cores."})]}),Object(i.jsxs)(r.C,{className:"d-block",children:[Object(i.jsx)("div",{className:"text-uppercase mb-1",children:Object(i.jsx)("small",{children:Object(i.jsx)("b",{children:"Memory Usage"})})}),Object(i.jsx)(r.ub,{size:"xs",color:"warning",value:70}),Object(i.jsx)("small",{className:"text-muted",children:"11444GB/16384MB"})]}),Object(i.jsxs)(r.C,{className:"d-block",children:[Object(i.jsx)("div",{className:"text-uppercase mb-1",children:Object(i.jsx)("small",{children:Object(i.jsx)("b",{children:"SSD 1 Usage"})})}),Object(i.jsx)(r.ub,{size:"xs",color:"danger",value:90}),Object(i.jsx)("small",{className:"text-muted",children:"243GB/256GB"})]})]})]})},h=function(){return Object(i.jsxs)(r.z,{inNav:!0,className:"c-header-nav-item mx-2",children:[Object(i.jsxs)(r.E,{className:"c-header-nav-link",caret:!1,children:[Object(i.jsx)(j.a,{name:"cil-list"}),Object(i.jsx)(r.b,{shape:"pill",color:"warning",children:5})]}),Object(i.jsxs)(r.D,{placement:"bottom-end",className:"pt-0",children:[Object(i.jsx)(r.C,{header:!0,tag:"div",className:"text-center",color:"light",children:Object(i.jsxs)("strong",{children:["You have ",5," pending tasks"]})}),Object(i.jsxs)(r.C,{className:"d-block",children:[Object(i.jsxs)("div",{className:"small mb-1",children:["Upgrade NPM & Bower ",Object(i.jsx)("span",{className:"float-right",children:Object(i.jsx)("strong",{children:"0%"})})]}),Object(i.jsx)(r.ub,{size:"xs",color:"info",value:0})]}),Object(i.jsxs)(r.C,{className:"d-block",children:[Object(i.jsxs)("div",{className:"small mb-1",children:["ReactJS Version ",Object(i.jsx)("span",{className:"float-right",children:Object(i.jsx)("strong",{children:"25%"})})]}),Object(i.jsx)(r.ub,{size:"xs",color:"danger",value:25})]}),Object(i.jsxs)(r.C,{className:"d-block",children:[Object(i.jsxs)("div",{className:"small mb-1",children:["VueJS Version ",Object(i.jsx)("span",{className:"float-right",children:Object(i.jsx)("strong",{children:"50%"})})]}),Object(i.jsx)(r.ub,{size:"xs",color:"warning",value:50})]}),Object(i.jsxs)(r.C,{className:"d-block",children:[Object(i.jsxs)("div",{className:"small mb-1",children:["Add new layouts ",Object(i.jsx)("span",{className:"float-right",children:Object(i.jsx)("strong",{children:"75%"})})]}),Object(i.jsx)(r.ub,{size:"xs",color:"info",value:75})]}),Object(i.jsxs)(r.C,{className:"d-block",children:[Object(i.jsxs)("div",{className:"small mb-1",children:["Angular 2 Cli Version ",Object(i.jsx)("span",{className:"float-right",children:Object(i.jsx)("strong",{children:"100%"})})]}),Object(i.jsx)(r.ub,{size:"xs",color:"success",value:100})]}),Object(i.jsx)(r.C,{className:"text-center border-top",children:Object(i.jsx)("strong",{children:"View all tasks"})})]})]})},O=(s(537),s(707))},719:function(e,t,s){window,e.exports=function(e){var t={};function s(a){if(t[a])return t[a].exports;var c=t[a]={i:a,l:!1,exports:{}};return e[a].call(c.exports,c,c.exports,s),c.l=!0,c.exports}return s.m=e,s.c=t,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)s.d(a,c,function(t){return e[t]}.bind(null,c));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=0)}({"./xmlParser.js":function(e,t){function s(e,t){for(var s=0;s<t.length;s++){var a=t[s];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}e.exports=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,a,c;return t=e,(a=[{key:"_parseFromString",value:function(e){var t=this,s=(e=this._encodeCDATAValues(e)).replace(/\s{2,}/g," ").replace(/\\t\\n\\r/g,"").replace(/>/g,">\n").replace(/\]\]/g,"]]\n"),a=[];return s.split("\n").map((function(e){if((e=e.trim())&&!(e.indexOf("?xml")>-1))if(0==e.indexOf("<")&&e.indexOf("CDATA")<0){var s=t._parseTag(e);a.push(s),e.match(/\/\s*>$/)&&a.push(t._parseTag("</"+s.name+">"))}else a[a.length-1].value+=" ".concat(t._parseValue(e))})),this._convertTagsArrayToTree(a)[0]}},{key:"_encodeCDATAValues",value:function(e){for(var t=new RegExp(/<!\[CDATA\[([^\]\]]+)\]\]/gi),s=t.exec(e);s;)s.length>1&&(e=e.replace(s[1],encodeURIComponent(s[1]))),s=t.exec(e);return e}},{key:"_getElementsByTagName",value:function(e){var t=[];return"*"!=e&&this.name.toLowerCase()!==e.toLowerCase()||t.push(this),this.children.map((function(s){t=t.concat(s.getElementsByTagName(e))})),t}},{key:"_parseTag",value:function(e,t){var s=e.match(/([^\s]*)=('([^']*?)'|"([^"]*?)")|([\/?\w\-\:]+)/g),a={name:s.shift().replace(/\/\s*$/,""),attributes:{},children:[],value:"",getElementsByTagName:this._getElementsByTagName};return s.map((function(e){var t=e.split("=");if(!(t.length<2)){var s=t[0],c="";c=2===t.length?t[1]:(t=t.slice(1)).join("="),a.attributes[s]="string"==typeof c?c.replace(/^"/g,"").replace(/^'/g,"").replace(/"$/g,"").replace(/'$/g,"").trim():c}})),a}},{key:"_parseValue",value:function(e){return e.indexOf("CDATA")<0?e.trim():e.substring(e.lastIndexOf("[")+1,e.indexOf("]"))}},{key:"_convertTagsArrayToTree",value:function(e){for(var t=[];e.length>0;){var s=e.shift();if(s.value.indexOf("</")>-1||s.name.match(/\/$/))s.name=s.name.replace(/\/$/,"").trim(),s.value=s.value.substring(0,s.value.indexOf("</")).trim(),t.push(s);else{if(0==s.name.indexOf("/"))break;t.push(s),s.children=this._convertTagsArrayToTree(e),s.value=decodeURIComponent(s.value.trim())}}return t}},{key:"_toString",value:function(e){var t=this,s=this._convertTagToText(e);return e.children.length>0&&(e.children.map((function(e){s+=t._toString(e)})),s+="</"+e.name+">"),s}},{key:"_convertTagToText",value:function(e){var t="<"+e.name;for(var s in e.attributes)t+=" "+s+'="'+e.attributes[s]+'"';return e.value.length>0?t+=">"+e.value:t+=">",0===e.children.length&&(t+="</"+e.name+">"),t}},{key:"parseFromString",value:function(e){return this._parseFromString(e)}},{key:"toString",value:function(e){return this._toString(e)}}])&&s(t.prototype,a),c&&s(t,c),e}()},0:function(e,t,s){e.exports=s("./xmlParser.js")}})}}]);
//# sourceMappingURL=13.44cf43d0.chunk.js.map