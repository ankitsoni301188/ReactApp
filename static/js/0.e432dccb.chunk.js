(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[0,11],{537:function(e,t,r){"use strict";r.r(t);r(1);var a=r(716),n=r(6);t.default=function(){return Object(n.jsxs)("div",{className:"c-app c-default-layout",children:[Object(n.jsx)(a.h,{}),Object(n.jsxs)("div",{className:"c-wrapper",children:[Object(n.jsx)(a.c,{}),Object(n.jsx)("div",{className:"c-body",children:Object(n.jsx)(a.a,{})}),Object(n.jsx)(a.b,{})]})]})}},699:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var a=r(701);function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],a=!0,n=!1,s=void 0;try{for(var c,i=e[Symbol.iterator]();!(a=(c=i.next()).done)&&(r.push(c.value),!t||r.length!==t);a=!0);}catch(o){n=!0,s=o}finally{try{a||null==i.return||i.return()}finally{if(n)throw s}}return r}}(e,t)||Object(a.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},700:function(e,t,r){"use strict";function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}r.d(t,"a",(function(){return a}))},701:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var a=r(700);function n(e,t){if(e){if("string"===typeof e)return Object(a.a)(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Object(a.a)(e,t):void 0}}},704:function(e,t,r){"use strict";r(1);var a=r(133),n=r(21),s=r(44),c=r(401),i=r(716),o=r(6);t.a=function(){var e=Object(a.b)(),t=Object(a.c)((function(e){return e.sidebarShow}));return Object(o.jsxs)(n.M,{withSubheader:!0,children:[Object(o.jsx)(n.Qb,{inHeader:!0,className:"ml-md-3 d-lg-none",onClick:function(){var r=!![!1,"responsive"].includes(t)||"responsive";e({type:"set",sidebarShow:r})}}),Object(o.jsx)(n.Qb,{inHeader:!0,className:"ml-3 d-md-down-none",onClick:function(){var r=![!0,"responsive"].includes(t)&&"responsive";e({type:"set",sidebarShow:r})}}),Object(o.jsx)(n.N,{className:"mx-auto d-lg-none",to:"/",children:Object(o.jsx)(s.a,{name:"logo",height:"48",alt:"Logo"})}),Object(o.jsxs)(n.O,{className:"d-md-down-none mr-auto",children:[Object(o.jsx)(n.P,{className:"px-3",children:Object(o.jsx)(n.Q,{to:"/views/dashboard",children:"Dashboard"})}),Object(o.jsx)(n.P,{className:"px-3",children:Object(o.jsx)(n.Q,{to:"/views/users",children:"Users"})}),Object(o.jsx)(n.P,{className:"px-3",children:Object(o.jsx)(n.Q,{children:"Settings"})})]}),Object(o.jsxs)(n.O,{className:"px-3",children:[Object(o.jsx)(i.f,{}),Object(o.jsx)(i.g,{}),Object(o.jsx)(i.e,{}),Object(o.jsx)(i.d,{})]}),Object(o.jsxs)(n.Gb,{className:"px-3 justify-content-between",children:[Object(o.jsx)(n.e,{className:"border-0 c-subheader-nav m-0 px-0 px-md-3",routes:c.a}),Object(o.jsxs)("div",{className:"d-md-down-none mfe-2 c-subheader-nav",children:[Object(o.jsx)(n.db,{className:"c-subheader-nav-link",href:"#",children:Object(o.jsx)(s.a,{name:"cil-speech",alt:"Settings"})}),Object(o.jsxs)(n.db,{className:"c-subheader-nav-link","aria-current":"page",to:"/dashboard",children:[Object(o.jsx)(s.a,{name:"cil-graph",alt:"Dashboard"}),"\xa0Dashboard"]}),Object(o.jsxs)(n.db,{className:"c-subheader-nav-link",href:"#",children:[Object(o.jsx)(s.a,{name:"cil-settings",alt:"Settings"}),"\xa0Settings"]})]})]})]})}},708:function(e,t,r){"use strict";var a=r(46),n=r(1),s=r.n(n),c=r(15),i=r(21),o=r(401),l=r(6),d=Object(l.jsx)("div",{className:"pt-3 text-center",children:Object(l.jsx)("div",{className:"sk-spinner sk-spinner-pulse"})}),u=function(){return Object(l.jsx)("main",{className:"c-main",children:Object(l.jsx)(i.w,{fluid:!0,children:Object(l.jsx)(n.Suspense,{fallback:d,children:Object(l.jsxs)(c.d,{children:[o.a.map((function(e,t){return e.component&&Object(l.jsx)(c.b,{path:e.path,exact:e.exact,name:e.name,render:function(t){return Object(l.jsx)(i.H,{children:Object(l.jsx)(e.component,Object(a.a)({},t))})}},t)})),Object(l.jsx)(c.a,{from:"/dashboard",to:"/views/dashboard"}),Object(l.jsx)(c.a,{from:"/login",to:"/pages/login"})]})})})})};t.a=s.a.memo(u)},710:function(e,t,r){"use strict";var a=r(1),n=r.n(a),s=r(133),c=r(21),i=r(44),o=r(6),l=[{_tag:"CSidebarNavItem",name:"Dashboard",to:"/views/dashboard",icon:Object(o.jsx)(i.a,{name:"cil-speedometer",customClasses:"c-sidebar-nav-icon"}),badge:{color:"info",text:""}},{_tag:"CSidebarNavItem",name:"Register",to:"/register",icon:Object(o.jsx)(i.a,{name:"cil-user",customClasses:"c-sidebar-nav-icon"}),badge:{color:"info",text:""}},{_tag:"CSidebarNavItem",name:"Format1",to:"/views/format1",icon:Object(o.jsx)(i.a,{name:"cil-speedometer",customClasses:"c-sidebar-nav-icon"}),badge:{color:"info",text:""}},{_tag:"CSidebarNavItem",name:"Format3",to:"/views/format3",icon:Object(o.jsx)(i.a,{name:"cil-speedometer",customClasses:"c-sidebar-nav-icon"}),badge:{color:"info",text:""}}],d=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.sidebarShow}));return Object(o.jsxs)(c.yb,{show:t,onShowChange:function(t){return e({type:"set",sidebarShow:t})},children:[Object(o.jsx)(c.zb,{className:"d-md-down-none",to:"/dashboard",children:Object(o.jsx)("label",{children:"Fouress Insurance Broking Services Pvt Ltd "})}),Object(o.jsx)(c.Bb,{children:Object(o.jsx)(c.x,{items:l,components:{CSidebarNavDivider:c.Cb,CSidebarNavDropdown:c.Db,CSidebarNavItem:c.Eb,CSidebarNavTitle:c.Fb}})}),Object(o.jsx)(c.Ab,{className:"c-d-md-down-none"})]})};t.a=n.a.memo(d)},716:function(e,t,r){"use strict";r.d(t,"a",(function(){return a.a})),r.d(t,"b",(function(){return l})),r.d(t,"c",(function(){return d.a})),r.d(t,"d",(function(){return b})),r.d(t,"e",(function(){return m})),r.d(t,"f",(function(){return f})),r.d(t,"g",(function(){return h})),r.d(t,"h",(function(){return p.a}));var a=r(708),n=r(1),s=r.n(n),c=r(21),i=r(6),o=function(){return Object(i.jsx)(c.I,{fixed:!1,children:Object(i.jsxs)("div",{children:[Object(i.jsx)("a",{href:"#",rel:"noopener noreferrer",children:"UNITED INDIA INSURANCE COMPANY LIMITED. "}),Object(i.jsx)("span",{className:"ml-1",children:"(Please call on +91-7536825280 for Any Assistance)."})]})})},l=s.a.memo(o),d=r(704),u=(r(46),r(72),r(44)),j=r(15),b=function(e){var t=Object(j.g)();return Object(i.jsxs)(c.z,{inNav:!0,className:"c-header-nav-items mx-2",direction:"down",children:[Object(i.jsx)(c.E,{className:"c-header-nav-link",caret:!1,children:Object(i.jsx)("div",{className:"c-avatar",children:Object(i.jsx)(c.R,{src:"avatars/9.png",className:"c-avatar-img",alt:"abcd.com"})})}),Object(i.jsx)(c.D,{className:"pt-0",placement:"bottom-end",children:Object(i.jsxs)(c.C,{onClick:function(e){localStorage.clear(),t.push("/login")},children:[Object(i.jsx)(u.a,{name:"cil-lock-locked",className:"mfe-2"}),"Log Out"]})})]})},m=function(){return Object(i.jsxs)(c.z,{inNav:!0,className:"c-header-nav-item mx-2",direction:"down",children:[Object(i.jsxs)(c.E,{className:"c-header-nav-link",caret:!1,children:[Object(i.jsx)(u.a,{name:"cil-envelope-open"}),Object(i.jsx)(c.b,{shape:"pill",color:"info",children:4})]}),Object(i.jsxs)(c.D,{className:"pt-0",placement:"bottom-end",children:[Object(i.jsx)(c.C,{header:!0,tag:"div",color:"light",children:Object(i.jsxs)("strong",{children:["You have ",4," messages"]})}),Object(i.jsx)(c.C,{href:"#",children:Object(i.jsxs)("div",{className:"message",children:[Object(i.jsx)("div",{className:"pt-3 mr-3 float-left",children:Object(i.jsxs)("div",{className:"c-avatar",children:[Object(i.jsx)(c.R,{src:"avatars/7.jpg",className:"c-avatar-img",alt:"admin@bootstrapmaster.com"}),Object(i.jsx)("span",{className:"c-avatar-status bg-success"})]})}),Object(i.jsxs)("div",{children:[Object(i.jsx)("small",{className:"text-muted",children:"John Doe"}),Object(i.jsx)("small",{className:"text-muted float-right mt-1",children:"Just now"})]}),Object(i.jsxs)("div",{className:"text-truncate font-weight-bold",children:[Object(i.jsx)("span",{className:"fa fa-exclamation text-danger"})," Important message"]}),Object(i.jsx)("div",{className:"small text-muted text-truncate",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt..."})]})}),Object(i.jsx)(c.C,{href:"#",children:Object(i.jsxs)("div",{className:"message",children:[Object(i.jsx)("div",{className:"pt-3 mr-3 float-left",children:Object(i.jsxs)("div",{className:"c-avatar",children:[Object(i.jsx)(c.R,{src:"avatars/6.jpg",className:"c-avatar-img",alt:"admin@bootstrapmaster.com"}),Object(i.jsx)("span",{className:"c-avatar-status bg-warning"})]})}),Object(i.jsxs)("div",{children:[Object(i.jsx)("small",{className:"text-muted",children:"Jane Dovve"}),Object(i.jsx)("small",{className:"text-muted float-right mt-1",children:"5 minutes ago"})]}),Object(i.jsx)("div",{className:"text-truncate font-weight-bold",children:"Lorem ipsum dolor sit amet"}),Object(i.jsx)("div",{className:"small text-muted text-truncate",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt..."})]})}),Object(i.jsx)(c.C,{href:"#",children:Object(i.jsxs)("div",{className:"message",children:[Object(i.jsx)("div",{className:"pt-3 mr-3 float-left",children:Object(i.jsxs)("div",{className:"c-avatar",children:[Object(i.jsx)(c.R,{src:"avatars/5.jpg",className:"c-avatar-img",alt:"admin@bootstrapmaster.com"}),Object(i.jsx)("span",{className:"c-avatar-status bg-danger"})]})}),Object(i.jsxs)("div",{children:[Object(i.jsx)("small",{className:"text-muted",children:"Janet Doe"}),Object(i.jsx)("small",{className:"text-muted float-right mt-1",children:"1:52 PM"})]}),Object(i.jsx)("div",{className:"text-truncate font-weight-bold",children:"Lorem ipsum dolor sit amet"}),Object(i.jsx)("div",{className:"small text-muted text-truncate",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt..."})]})}),Object(i.jsx)(c.C,{href:"#",children:Object(i.jsxs)("div",{className:"message",children:[Object(i.jsx)("div",{className:"pt-3 mr-3 float-left",children:Object(i.jsxs)("div",{className:"c-avatar",children:[Object(i.jsx)(c.R,{src:"avatars/4.jpg",className:"c-avatar-img",alt:"admin@bootstrapmaster.com"}),Object(i.jsx)("span",{className:"c-avatar-status bg-info"})]})}),Object(i.jsxs)("div",{children:[Object(i.jsx)("small",{className:"text-muted",children:"Joe Doe"}),Object(i.jsx)("small",{className:"text-muted float-right mt-1",children:"4:03 AM"})]}),Object(i.jsx)("div",{className:"text-truncate font-weight-bold",children:"Lorem ipsum dolor sit amet"}),Object(i.jsx)("div",{className:"small text-muted text-truncate",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt..."})]})}),Object(i.jsx)(c.C,{href:"#",className:"text-center border-top",children:Object(i.jsx)("strong",{children:"View all messages"})})]})]})},f=function(){return Object(i.jsxs)(c.z,{inNav:!0,className:"c-header-nav-item mx-2",children:[Object(i.jsxs)(c.E,{className:"c-header-nav-link",caret:!1,children:[Object(i.jsx)(u.a,{name:"cil-bell"}),Object(i.jsx)(c.b,{shape:"pill",color:"danger",children:5})]}),Object(i.jsxs)(c.D,{placement:"bottom-end",className:"pt-0",children:[Object(i.jsx)(c.C,{header:!0,tag:"div",className:"text-center",color:"light",children:Object(i.jsxs)("strong",{children:["You have ",5," notifications"]})}),Object(i.jsxs)(c.C,{children:[Object(i.jsx)(u.a,{name:"cil-user-follow",className:"mr-2 text-success"})," New user registered"]}),Object(i.jsxs)(c.C,{children:[Object(i.jsx)(u.a,{name:"cil-user-unfollow",className:"mr-2 text-danger"})," User deleted"]}),Object(i.jsxs)(c.C,{children:[Object(i.jsx)(u.a,{name:"cil-chart-pie",className:"mr-2 text-info"})," Sales report is ready"]}),Object(i.jsxs)(c.C,{children:[Object(i.jsx)(u.a,{name:"cil-basket",className:"mr-2 text-primary"})," New client"]}),Object(i.jsxs)(c.C,{children:[Object(i.jsx)(u.a,{name:"cil-speedometer",className:"mr-2 text-warning"})," Server overloaded"]}),Object(i.jsx)(c.C,{header:!0,tag:"div",color:"light",children:Object(i.jsx)("strong",{children:"Server"})}),Object(i.jsxs)(c.C,{className:"d-block",children:[Object(i.jsx)("div",{className:"text-uppercase mb-1",children:Object(i.jsx)("small",{children:Object(i.jsx)("b",{children:"CPU Usage"})})}),Object(i.jsx)(c.ub,{size:"xs",color:"info",value:25}),Object(i.jsx)("small",{className:"text-muted",children:"348 Processes. 1/4 Cores."})]}),Object(i.jsxs)(c.C,{className:"d-block",children:[Object(i.jsx)("div",{className:"text-uppercase mb-1",children:Object(i.jsx)("small",{children:Object(i.jsx)("b",{children:"Memory Usage"})})}),Object(i.jsx)(c.ub,{size:"xs",color:"warning",value:70}),Object(i.jsx)("small",{className:"text-muted",children:"11444GB/16384MB"})]}),Object(i.jsxs)(c.C,{className:"d-block",children:[Object(i.jsx)("div",{className:"text-uppercase mb-1",children:Object(i.jsx)("small",{children:Object(i.jsx)("b",{children:"SSD 1 Usage"})})}),Object(i.jsx)(c.ub,{size:"xs",color:"danger",value:90}),Object(i.jsx)("small",{className:"text-muted",children:"243GB/256GB"})]})]})]})},h=function(){return Object(i.jsxs)(c.z,{inNav:!0,className:"c-header-nav-item mx-2",children:[Object(i.jsxs)(c.E,{className:"c-header-nav-link",caret:!1,children:[Object(i.jsx)(u.a,{name:"cil-list"}),Object(i.jsx)(c.b,{shape:"pill",color:"warning",children:5})]}),Object(i.jsxs)(c.D,{placement:"bottom-end",className:"pt-0",children:[Object(i.jsx)(c.C,{header:!0,tag:"div",className:"text-center",color:"light",children:Object(i.jsxs)("strong",{children:["You have ",5," pending tasks"]})}),Object(i.jsxs)(c.C,{className:"d-block",children:[Object(i.jsxs)("div",{className:"small mb-1",children:["Upgrade NPM & Bower ",Object(i.jsx)("span",{className:"float-right",children:Object(i.jsx)("strong",{children:"0%"})})]}),Object(i.jsx)(c.ub,{size:"xs",color:"info",value:0})]}),Object(i.jsxs)(c.C,{className:"d-block",children:[Object(i.jsxs)("div",{className:"small mb-1",children:["ReactJS Version ",Object(i.jsx)("span",{className:"float-right",children:Object(i.jsx)("strong",{children:"25%"})})]}),Object(i.jsx)(c.ub,{size:"xs",color:"danger",value:25})]}),Object(i.jsxs)(c.C,{className:"d-block",children:[Object(i.jsxs)("div",{className:"small mb-1",children:["VueJS Version ",Object(i.jsx)("span",{className:"float-right",children:Object(i.jsx)("strong",{children:"50%"})})]}),Object(i.jsx)(c.ub,{size:"xs",color:"warning",value:50})]}),Object(i.jsxs)(c.C,{className:"d-block",children:[Object(i.jsxs)("div",{className:"small mb-1",children:["Add new layouts ",Object(i.jsx)("span",{className:"float-right",children:Object(i.jsx)("strong",{children:"75%"})})]}),Object(i.jsx)(c.ub,{size:"xs",color:"info",value:75})]}),Object(i.jsxs)(c.C,{className:"d-block",children:[Object(i.jsxs)("div",{className:"small mb-1",children:["Angular 2 Cli Version ",Object(i.jsx)("span",{className:"float-right",children:Object(i.jsx)("strong",{children:"100%"})})]}),Object(i.jsx)(c.ub,{size:"xs",color:"success",value:100})]}),Object(i.jsx)(c.C,{className:"text-center border-top",children:Object(i.jsx)("strong",{children:"View all tasks"})})]})]})},p=(r(537),r(710))},758:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var a=r(700);var n=r(701);function s(e){return function(e){if(Array.isArray(e))return Object(a.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(n.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},774:function(e,t,r){e.exports=r(912)},827:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function n(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}var s=t.isSafari=function(){return/^((?!chrome|android).)*safari/i.test(navigator.userAgent)},c=t.isJsons=function(e){return Array.isArray(e)&&e.every((function(e){return"object"===("undefined"===typeof e?"undefined":a(e))&&!(e instanceof Array)}))},i=t.isArrays=function(e){return Array.isArray(e)&&e.every((function(e){return Array.isArray(e)}))},o=t.jsonsHeaders=function(e){return Array.from(e.map((function(e){return Object.keys(e)})).reduce((function(e,t){return new Set([].concat(n(e),n(t)))}),[]))},l=t.jsons2arrays=function(e,t){var r=t=t||o(e),a=t;c(t)&&(r=t.map((function(e){return e.label})),a=t.map((function(e){return e.key})));var s=e.map((function(e){return a.map((function(t){return d(t,e)}))}));return[r].concat(n(s))},d=t.getHeaderValue=function(e,t){var r=e.replace(/\[([^\]]+)]/g,".$1").split(".").reduce((function(e,t,r,a){if(void 0!==e[t])return e[t];a.splice(1)}),t);return void 0===r?e in t?t[e]:"":r},u=t.elementOrEmpty=function(e){return e||0===e?e:""},j=t.joiner=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:",",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:'"';return e.filter((function(e){return e})).map((function(e){return e.map((function(e){return u(e)})).map((function(e){return""+r+e+r})).join(t)})).join("\n")},b=t.arrays2csv=function(e,t,r,a){return j(t?[t].concat(n(e)):e,r,a)},m=t.jsons2csv=function(e,t,r,a){return j(l(e,t),r,a)},f=t.string2csv=function(e,t,r,a){return t?t.join(r)+"\n"+e:e},h=t.toCSV=function(e,t,r,a){if(c(e))return m(e,t,r,a);if(i(e))return b(e,t,r,a);if("string"===typeof e)return f(e,t,r);throw new TypeError('Data should be a "String", "Array of arrays" OR "Array of objects" ')};t.buildURI=function(e,t,r,a,n){var c=h(e,r,a,n),i=s()?"application/csv":"text/csv",o=new Blob([t?"\ufeff":"",c],{type:i}),l="data:"+i+";charset=utf-8,"+(t?"\ufeff":"")+c,d=window.URL||window.webkitURL;return"undefined"===typeof d.createObjectURL?l:d.createObjectURL(o)}},828:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PropsNotForwarded=t.defaultProps=t.propTypes=void 0;var a,n=r(1),s=((a=n)&&a.__esModule,r(0));t.propTypes={data:(0,s.oneOfType)([s.string,s.array]).isRequired,headers:s.array,target:s.string,separator:s.string,filename:s.string,uFEFF:s.bool,onClick:s.func,asyncOnClick:s.bool},t.defaultProps={separator:",",filename:"generatedBy_react-csv.csv",uFEFF:!0,asyncOnClick:!1},t.PropsNotForwarded=["data","headers"]},912:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CSVLink=t.CSVDownload=void 0;var a=s(r(913)),n=s(r(914));function s(e){return e&&e.__esModule?e:{default:e}}t.CSVDownload=a.default,t.CSVLink=n.default},913:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,n=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),s=r(1),c=(a=s)&&a.__esModule?a:{default:a},i=r(827),o=r(828);var l=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.state={},r}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),n(t,[{key:"buildURI",value:function(){return i.buildURI.apply(void 0,arguments)}},{key:"componentDidMount",value:function(){var e=this.props,t=e.data,r=e.headers,a=e.separator,n=e.enclosingCharacter,s=e.uFEFF,c=e.target,i=e.specs,o=e.replace;this.state.page=window.open(this.buildURI(t,s,r,a,n),c,i,o)}},{key:"getWindow",value:function(){return this.state.page}},{key:"render",value:function(){return null}}]),t}(c.default.Component);l.defaultProps=Object.assign(o.defaultProps,{target:"_blank"}),l.propTypes=o.propTypes,t.default=l},914:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},s=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),c=r(1),i=(a=c)&&a.__esModule?a:{default:a},o=r(827),l=r(828);var d=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.buildURI=r.buildURI.bind(r),r.state={href:""},r}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),s(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.data,r=e.headers,a=e.separator,n=e.uFEFF,s=e.enclosingCharacter;this.setState({href:this.buildURI(t,n,r,a,s)})}},{key:"componentDidUpdate",value:function(e){if(this.props!==e){var t=this.props,r=t.data,a=t.headers,n=t.separator,s=t.uFEFF;this.setState({href:this.buildURI(r,s,a,n)})}}},{key:"buildURI",value:function(){return o.buildURI.apply(void 0,arguments)}},{key:"handleLegacy",value:function(e){if(window.navigator.msSaveOrOpenBlob){e.preventDefault();var t=this.props,r=t.data,a=t.headers,n=t.separator,s=t.filename,c=t.enclosingCharacter,i=t.uFEFF,l=new Blob([i?"\ufeff":"",(0,o.toCSV)(r,a,n,c)]);return window.navigator.msSaveBlob(l,s),!1}}},{key:"handleAsyncClick",value:function(e){var t=this;this.props.onClick(e,(function(r){!1!==r?t.handleLegacy(e):e.preventDefault()}))}},{key:"handleSyncClick",value:function(e){!1===this.props.onClick(e)?e.preventDefault():this.handleLegacy(e)}},{key:"handleClick",value:function(){var e=this;return function(t){if("function"===typeof e.props.onClick)return e.props.asyncOnClick?e.handleAsyncClick(t):e.handleSyncClick(t);e.handleLegacy(t)}}},{key:"render",value:function(){var e=this,t=this.props,r=(t.data,t.headers,t.separator,t.filename),a=(t.uFEFF,t.children),s=(t.onClick,t.asyncOnClick,t.enclosingCharacter,function(e,t){var r={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(r[a]=e[a]);return r}(t,["data","headers","separator","filename","uFEFF","children","onClick","asyncOnClick","enclosingCharacter"]));return i.default.createElement("a",n({download:r},s,{ref:function(t){return e.link=t},target:"_self",href:this.state.href,onClick:this.handleClick()}),a)}}]),t}(i.default.Component);d.defaultProps=l.defaultProps,d.propTypes=l.propTypes,t.default=d}}]);
//# sourceMappingURL=0.e432dccb.chunk.js.map