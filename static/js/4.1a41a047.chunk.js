(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[4,6,14],{527:function(e,t,n){"use strict";n.r(t);n(1);var a=n(669),s=n(6);t.default=function(){return Object(s.jsxs)("div",{className:"c-app c-default-layout",children:[Object(s.jsx)(a.h,{}),Object(s.jsxs)("div",{className:"c-wrapper",children:[Object(s.jsx)(a.c,{}),Object(s.jsx)("div",{className:"c-body",children:Object(s.jsx)(a.a,{})}),Object(s.jsx)(a.b,{})]})]})}},528:function(e,t,n){"use strict";n.r(t);var a=n(50),s=n.n(a),r=n(72),c=n(672),i=n(663),o=n(1),l=n(16),d=n(20),u=(n(675),n(181)),m=(n(664),n(666),n(665),n(673)),b=n(6),j=function(e){switch(e){case"Active":return"success";case"Inactive":return"secondary";case"Pending":return"warning";case"Banned":return"danger";default:return"primary"}};t.default=function(e){Object(l.g)();var t=Object(l.h)().search.match(/page=([0-9]+)/,""),n=Number(t&&t[1]?t[1]:1),a=Object(o.useState)(n),h=Object(i.a)(a,2),f=h[0],p=h[1],x=Object(o.useState)([]),O=Object(i.a)(x,2),v=O[0],g=O[1];Object(o.useEffect)((function(){n!==f&&p(n)}),[n,f]),Object(o.useEffect)((function(){e.fetched||N(),console.log("mount it!")}),[]);var y={method:"GET",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"http://localhost:5001"}},N=function(){var e=Object(r.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=u.a.SYSTEM_SETTINGS.API_URL+"/users",e.next=4,fetch(t,y).then((function(e){return e.json()})).then((function(e){return u.a.UserList=e.response}));case 4:console.log("Data"+JSON.stringify(u.a.UserList));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(d.wb,{children:Object(b.jsx)(d.u,{xl:12,children:Object(b.jsxs)(d.j,{children:[Object(b.jsx)(d.n,{children:Object(b.jsxs)(d.wb,{children:[Object(b.jsx)(d.u,{children:Object(b.jsx)("h5",{children:"Users List: "})}),Object(b.jsx)(d.u,{children:Object(b.jsxs)("small",{className:"text-muted",children:["\xa0\xa0\xa0\xa0",Object(b.jsx)(m.CSVLink,{data:u.a.UserList,filename:"UserList.csv",className:"btn btn-primary float-right",headers:[{label:"First Name",key:"UserName"},{label:"Last Name",key:"LastName"},{label:"Country",key:"Country"},{label:"Status",key:"Status"}],children:"Download CSV"})]})})]})}),Object(b.jsx)(d.k,{children:Object(b.jsx)(d.y,{items:u.a.UserList,fields:[{key:"UserName",_style:{width:"40%"}},"LastName",{key:"Country",_style:{width:"20%"}},{key:"Status",_style:{width:"20%"}},{key:"show_details",label:"",_style:{width:"1%"},sorter:!1,filter:!1}],tableFilter:!0,itemsPerPageSelect:!0,itemsPerPage:5,hover:!0,sorter:!0,pagination:!0,scopedSlots:{status:function(e){return Object(b.jsx)("td",{children:Object(b.jsx)(d.b,{color:j(e.Status),children:e.status})})},show_details:function(e,t){return Object(b.jsx)("td",{className:"py-2",children:Object(b.jsx)(d.f,{color:"primary",variant:"outline",shape:"square",size:"sm",onClick:function(){!function(e){var t=v.indexOf(e),n=v.slice();-1!==t?n.splice(t,1):n=[].concat(Object(c.a)(v),[e]),g(n)}(t)},children:v.includes(t)?"Hide":"Show"})})},details:function(e,t){return Object(b.jsx)(d.v,{show:v.includes(t),children:Object(b.jsxs)(d.k,{children:[Object(b.jsx)("h4",{children:e.UserName}),Object(b.jsxs)("p",{className:"text-muted",children:["User since: ",e.Country,"  ",e.Userid]}),Object(b.jsx)(d.f,{size:"sm",color:"success",children:"Approve"}),Object(b.jsx)(d.f,{size:"sm",color:"danger",className:"ml-1",children:"Reject"})]})})}}})})]})})})})}},661:function(e,t,n){"use strict";function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}n.d(t,"a",(function(){return a}))},662:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(661);function s(e,t){if(e){if("string"===typeof e)return Object(a.a)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(a.a)(e,t):void 0}}},663:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(662);function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],a=!0,s=!1,r=void 0;try{for(var c,i=e[Symbol.iterator]();!(a=(c=i.next()).done)&&(n.push(c.value),!t||n.length!==t);a=!0);}catch(o){s=!0,r=o}finally{try{a||null==i.return||i.return()}finally{if(s)throw r}}return n}}(e,t)||Object(a.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},664:function(e,t,n){"use strict";n(1);var a=n(129),s=n(20),r=n(43),c=n(667),i=n(669),o=n(6);t.a=function(){var e=Object(a.b)(),t=Object(a.c)((function(e){return e.sidebarShow}));return Object(o.jsxs)(s.M,{withSubheader:!0,children:[Object(o.jsx)(s.Qb,{inHeader:!0,className:"ml-md-3 d-lg-none",onClick:function(){var n=!![!1,"responsive"].includes(t)||"responsive";e({type:"set",sidebarShow:n})}}),Object(o.jsx)(s.Qb,{inHeader:!0,className:"ml-3 d-md-down-none",onClick:function(){var n=![!0,"responsive"].includes(t)&&"responsive";e({type:"set",sidebarShow:n})}}),Object(o.jsx)(s.N,{className:"mx-auto d-lg-none",to:"/",children:Object(o.jsx)(r.a,{name:"logo",height:"48",alt:"Logo"})}),Object(o.jsxs)(s.O,{className:"d-md-down-none mr-auto",children:[Object(o.jsx)(s.P,{className:"px-3",children:Object(o.jsx)(s.Q,{to:"/views/dashboard",children:"Dashboard"})}),Object(o.jsx)(s.P,{className:"px-3",children:Object(o.jsx)(s.Q,{to:"/views/users",children:"Users"})}),Object(o.jsx)(s.P,{className:"px-3",children:Object(o.jsx)(s.Q,{children:"Settings"})})]}),Object(o.jsxs)(s.O,{className:"px-3",children:[Object(o.jsx)(i.f,{}),Object(o.jsx)(i.g,{}),Object(o.jsx)(i.e,{}),Object(o.jsx)(i.d,{})]}),Object(o.jsxs)(s.Gb,{className:"px-3 justify-content-between",children:[Object(o.jsx)(s.e,{className:"border-0 c-subheader-nav m-0 px-0 px-md-3",routes:c.a}),Object(o.jsxs)("div",{className:"d-md-down-none mfe-2 c-subheader-nav",children:[Object(o.jsx)(s.db,{className:"c-subheader-nav-link",href:"#",children:Object(o.jsx)(r.a,{name:"cil-speech",alt:"Settings"})}),Object(o.jsxs)(s.db,{className:"c-subheader-nav-link","aria-current":"page",to:"/dashboard",children:[Object(o.jsx)(r.a,{name:"cil-graph",alt:"Dashboard"}),"\xa0Dashboard"]}),Object(o.jsxs)(s.db,{className:"c-subheader-nav-link",href:"#",children:[Object(o.jsx)(r.a,{name:"cil-settings",alt:"Settings"}),"\xa0Settings"]})]})]})]})}},665:function(e,t,n){"use strict";var a=n(45),s=n(1),r=n.n(s),c=n(16),i=n(20),o=n(667),l=n(6),d=Object(l.jsx)("div",{className:"pt-3 text-center",children:Object(l.jsx)("div",{className:"sk-spinner sk-spinner-pulse"})}),u=function(){return Object(l.jsx)("main",{className:"c-main",children:Object(l.jsx)(i.w,{fluid:!0,children:Object(l.jsx)(s.Suspense,{fallback:d,children:Object(l.jsxs)(c.d,{children:[o.a.map((function(e,t){return e.component&&Object(l.jsx)(c.b,{path:e.path,exact:e.exact,name:e.name,render:function(t){return Object(l.jsx)(i.H,{children:Object(l.jsx)(e.component,Object(a.a)({},t))})}},t)})),Object(l.jsx)(c.a,{from:"/",to:"/view/dashboard"})]})})})})};t.a=r.a.memo(u)},666:function(e,t,n){"use strict";var a=n(1),s=n.n(a),r=n(129),c=n(20),i=n(43),o=n(6),l=[{_tag:"CSidebarNavItem",name:"Dashboard",to:"/views/dashboard",icon:Object(o.jsx)(i.a,{name:"cil-speedometer",customClasses:"c-sidebar-nav-icon"}),badge:{color:"info",text:""}},{_tag:"CSidebarNavItem",name:"Register",to:"/register",icon:Object(o.jsx)(i.a,{name:"cil-user",customClasses:"c-sidebar-nav-icon"}),badge:{color:"info",text:""}},{_tag:"CSidebarNavItem",name:"Format1",to:"/views/format1",icon:Object(o.jsx)(i.a,{name:"cil-speedometer",customClasses:"c-sidebar-nav-icon"}),badge:{color:"info",text:""}},{_tag:"CSidebarNavItem",name:"Format3",to:"/views/format3",icon:Object(o.jsx)(i.a,{name:"cil-speedometer",customClasses:"c-sidebar-nav-icon"}),badge:{color:"info",text:""}}],d=function(){var e=Object(r.b)(),t=Object(r.c)((function(e){return e.sidebarShow}));return Object(o.jsxs)(c.yb,{show:t,onShowChange:function(t){return e({type:"set",sidebarShow:t})},children:[Object(o.jsx)(c.zb,{className:"d-md-down-none",to:"/dashboard",children:Object(o.jsx)("label",{children:"Fouress Insurance Broking Services Pvt Ltd "})}),Object(o.jsx)(c.Bb,{children:Object(o.jsx)(c.x,{items:l,components:{CSidebarNavDivider:c.Cb,CSidebarNavDropdown:c.Db,CSidebarNavItem:c.Eb,CSidebarNavTitle:c.Fb}})}),Object(o.jsx)(c.Ab,{className:"c-d-md-down-none"})]})};t.a=s.a.memo(d)},667:function(e,t,n){"use strict";var a=n(1),s=n.n(a),r=s.a.lazy((function(){return n.e(18).then(n.bind(null,686))})),c=s.a.lazy((function(){return n.e(32).then(n.bind(null,687))})),i=s.a.lazy((function(){return n.e(36).then(n.bind(null,688))})),o=s.a.lazy((function(){return n.e(21).then(n.bind(null,689))})),l=s.a.lazy((function(){return n.e(22).then(n.bind(null,690))})),d=s.a.lazy((function(){return n.e(23).then(n.bind(null,691))})),u=s.a.lazy((function(){return n.e(24).then(n.bind(null,692))})),m=s.a.lazy((function(){return n.e(37).then(n.bind(null,693))})),b=s.a.lazy((function(){return n.e(25).then(n.bind(null,694))})),j=s.a.lazy((function(){return n.e(26).then(n.bind(null,695))})),h=s.a.lazy((function(){return n.e(38).then(n.bind(null,696))})),f=s.a.lazy((function(){return n.e(27).then(n.bind(null,697))})),p=s.a.lazy((function(){return n.e(39).then(n.bind(null,698))})),x=s.a.lazy((function(){return n.e(40).then(n.bind(null,699))})),O=s.a.lazy((function(){return n.e(41).then(n.bind(null,700))})),v=s.a.lazy((function(){return n.e(28).then(n.bind(null,701))})),g=s.a.lazy((function(){return n.e(42).then(n.bind(null,702))})),y=s.a.lazy((function(){return n.e(52).then(n.bind(null,703))})),N=s.a.lazy((function(){return n.e(43).then(n.bind(null,704))})),w=s.a.lazy((function(){return n.e(44).then(n.bind(null,705))})),C=s.a.lazy((function(){return n.e(45).then(n.bind(null,706))})),k=s.a.lazy((function(){return Promise.all([n.e(0),n.e(46)]).then(n.bind(null,707))})),S=s.a.lazy((function(){return Promise.all([n.e(0),n.e(13)]).then(n.bind(null,716))})),P=s.a.lazy((function(){return Promise.all([n.e(2),n.e(55),n.e(33)]).then(n.bind(null,708))})),A=s.a.lazy((function(){return Promise.all([n.e(2),n.e(54),n.e(34)]).then(n.bind(null,709))})),z=s.a.lazy((function(){return Promise.all([n.e(2),n.e(47)]).then(n.bind(null,674))})),_=s.a.lazy((function(){return n.e(29).then(n.bind(null,710))})),F=s.a.lazy((function(){return n.e(48).then(n.bind(null,711))})),U=s.a.lazy((function(){return n.e(30).then(n.bind(null,712))})),L=s.a.lazy((function(){return n.e(19).then(n.bind(null,713))})),D=s.a.lazy((function(){return n.e(49).then(n.bind(null,714))})),I=s.a.lazy((function(){return Promise.all([n.e(0),n.e(20)]).then(n.bind(null,715))})),M=s.a.lazy((function(){return n.e(14).then(n.bind(null,528))})),E=s.a.lazy((function(){return n.e(31).then(n.bind(null,531))})),T=s.a.lazy((function(){return n.e(16).then(n.bind(null,529))})),R=s.a.lazy((function(){return Promise.all([n.e(3),n.e(51)]).then(n.bind(null,532))})),B=s.a.lazy((function(){return n.e(7).then(n.t.bind(null,530,7))})),V=s.a.lazy((function(){return n.e(1).then(n.bind(null,533))})),J=[{path:"/views/dashboard",name:"Dashboard",component:S},{path:"/pages/page404",name:"page404",component:s.a.lazy((function(){return n.e(8).then(n.bind(null,684))}))},{path:"/views/theme",name:"Theme",component:L,exact:!0},{path:"/theme/colors",name:"Colors",component:L},{path:"/theme/typography",name:"Typography",component:D},{path:"/base",name:"Base",component:o,exact:!0},{path:"/base/breadcrumbs",name:"Breadcrumbs",component:i},{path:"/base/cards",name:"Cards",component:o},{path:"/base/carousels",name:"Carousel",component:l},{path:"/base/collapses",name:"Collapse",component:d},{path:"/base/forms",name:"Forms",component:u},{path:"/base/jumbotrons",name:"Jumbotrons",component:m},{path:"/base/list-groups",name:"List Groups",component:b},{path:"/base/navbars",name:"Navbars",component:j},{path:"/base/navs",name:"Navs",component:h},{path:"/base/paginations",name:"Paginations",component:f},{path:"/base/popovers",name:"Popovers",component:p},{path:"/base/progress-bar",name:"Progress Bar",component:x},{path:"/base/switches",name:"Switches",component:O},{path:"/base/tables",name:"Tables",component:c},{path:"/base/tabs",name:"Tabs",component:v},{path:"/base/tooltips",name:"Tooltips",component:g},{path:"/buttons",name:"Buttons",component:C,exact:!0},{path:"/buttons/buttons",name:"Buttons",component:C},{path:"/buttons/button-dropdowns",name:"Dropdowns",component:N},{path:"/buttons/button-groups",name:"Button Groups",component:w},{path:"/buttons/brand-buttons",name:"Brand Buttons",component:y},{path:"/charts",name:"Charts",component:k},{path:"/icons",exact:!0,name:"Icons",component:P},{path:"/icons/coreui-icons",name:"CoreUI Icons",component:P},{path:"/icons/flags",name:"Flags",component:A},{path:"/icons/brands",name:"Brands",component:z},{path:"/notifications",name:"Notifications",component:_,exact:!0},{path:"/notifications/alerts",name:"Alerts",component:_},{path:"/notifications/badges",name:"Badges",component:F},{path:"/notifications/modals",name:"Modals",component:U},{path:"/notifications/toaster",name:"Toaster",component:r},{path:"/widgets",name:"Widgets",component:I},{path:"/views/users",exact:!0,name:"Users",component:M},{path:"/views/format1",exact:!0,name:"Format1",component:E},{path:"/views/format1list",exact:!0,name:"Format1List",component:T},{path:"/views/format3",exact:!0,name:"Format3",component:R},{path:"/views/format3list",exact:!0,name:"Format3List",component:B},{path:"/users/:id",exact:!0,name:"User Details",component:V}];t.a=J},669:function(e,t,n){"use strict";n.d(t,"a",(function(){return a.a})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return d.a})),n.d(t,"d",(function(){return m})),n.d(t,"e",(function(){return b})),n.d(t,"f",(function(){return j})),n.d(t,"g",(function(){return h})),n.d(t,"h",(function(){return f.a}));var a=n(665),s=n(1),r=n.n(s),c=n(20),i=n(6),o=function(){return Object(i.jsxs)(c.I,{fixed:!1,children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("a",{href:"https://coreui.io",target:"_blank",rel:"noopener noreferrer",children:"CoreUI"}),Object(i.jsx)("span",{className:"ml-1",children:"\xa9 2020 creativeLabs."})]}),Object(i.jsxs)("div",{className:"mfs-auto",children:[Object(i.jsx)("span",{className:"mr-1",children:"Powered by"}),Object(i.jsx)("a",{href:"https://coreui.io/react",target:"_blank",rel:"noopener noreferrer",children:"CoreUI for React"})]})]})},l=r.a.memo(o),d=n(664),u=n(43),m=function(){return Object(i.jsxs)(c.z,{inNav:!0,className:"c-header-nav-items mx-2",direction:"down",children:[Object(i.jsx)(c.E,{className:"c-header-nav-link",caret:!1,children:Object(i.jsx)("div",{className:"c-avatar",children:Object(i.jsx)(c.R,{src:"avatars/6.jpg",className:"c-avatar-img",alt:"admin@bootstrapmaster.com"})})}),Object(i.jsxs)(c.D,{className:"pt-0",placement:"bottom-end",children:[Object(i.jsx)(c.C,{header:!0,tag:"div",color:"light",className:"text-center",children:Object(i.jsx)("strong",{children:"Account"})}),Object(i.jsxs)(c.C,{children:[Object(i.jsx)(u.a,{name:"cil-bell",className:"mfe-2"}),"Updates",Object(i.jsx)(c.b,{color:"info",className:"mfs-auto",children:"42"})]}),Object(i.jsxs)(c.C,{children:[Object(i.jsx)(u.a,{name:"cil-envelope-open",className:"mfe-2"}),"Messages",Object(i.jsx)(c.b,{color:"success",className:"mfs-auto",children:"42"})]}),Object(i.jsxs)(c.C,{children:[Object(i.jsx)(u.a,{name:"cil-task",className:"mfe-2"}),"Tasks",Object(i.jsx)(c.b,{color:"danger",className:"mfs-auto",children:"42"})]}),Object(i.jsxs)(c.C,{children:[Object(i.jsx)(u.a,{name:"cil-comment-square",className:"mfe-2"}),"Comments",Object(i.jsx)(c.b,{color:"warning",className:"mfs-auto",children:"42"})]}),Object(i.jsx)(c.C,{header:!0,tag:"div",color:"light",className:"text-center",children:Object(i.jsx)("strong",{children:"Settings"})}),Object(i.jsxs)(c.C,{children:[Object(i.jsx)(u.a,{name:"cil-user",className:"mfe-2"}),"Profile"]}),Object(i.jsxs)(c.C,{children:[Object(i.jsx)(u.a,{name:"cil-settings",className:"mfe-2"}),"Settings"]}),Object(i.jsxs)(c.C,{children:[Object(i.jsx)(u.a,{name:"cil-credit-card",className:"mfe-2"}),"Payments",Object(i.jsx)(c.b,{color:"secondary",className:"mfs-auto",children:"42"})]}),Object(i.jsxs)(c.C,{children:[Object(i.jsx)(u.a,{name:"cil-file",className:"mfe-2"}),"Projects",Object(i.jsx)(c.b,{color:"primary",className:"mfs-auto",children:"42"})]}),Object(i.jsx)(c.C,{divider:!0}),Object(i.jsxs)(c.C,{children:[Object(i.jsx)(u.a,{name:"cil-lock-locked",className:"mfe-2"}),"Lock Account"]})]})]})},b=function(){return Object(i.jsxs)(c.z,{inNav:!0,className:"c-header-nav-item mx-2",direction:"down",children:[Object(i.jsxs)(c.E,{className:"c-header-nav-link",caret:!1,children:[Object(i.jsx)(u.a,{name:"cil-envelope-open"}),Object(i.jsx)(c.b,{shape:"pill",color:"info",children:4})]}),Object(i.jsxs)(c.D,{className:"pt-0",placement:"bottom-end",children:[Object(i.jsx)(c.C,{header:!0,tag:"div",color:"light",children:Object(i.jsxs)("strong",{children:["You have ",4," messages"]})}),Object(i.jsx)(c.C,{href:"#",children:Object(i.jsxs)("div",{className:"message",children:[Object(i.jsx)("div",{className:"pt-3 mr-3 float-left",children:Object(i.jsxs)("div",{className:"c-avatar",children:[Object(i.jsx)(c.R,{src:"avatars/7.jpg",className:"c-avatar-img",alt:"admin@bootstrapmaster.com"}),Object(i.jsx)("span",{className:"c-avatar-status bg-success"})]})}),Object(i.jsxs)("div",{children:[Object(i.jsx)("small",{className:"text-muted",children:"John Doe"}),Object(i.jsx)("small",{className:"text-muted float-right mt-1",children:"Just now"})]}),Object(i.jsxs)("div",{className:"text-truncate font-weight-bold",children:[Object(i.jsx)("span",{className:"fa fa-exclamation text-danger"})," Important message"]}),Object(i.jsx)("div",{className:"small text-muted text-truncate",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt..."})]})}),Object(i.jsx)(c.C,{href:"#",children:Object(i.jsxs)("div",{className:"message",children:[Object(i.jsx)("div",{className:"pt-3 mr-3 float-left",children:Object(i.jsxs)("div",{className:"c-avatar",children:[Object(i.jsx)(c.R,{src:"avatars/6.jpg",className:"c-avatar-img",alt:"admin@bootstrapmaster.com"}),Object(i.jsx)("span",{className:"c-avatar-status bg-warning"})]})}),Object(i.jsxs)("div",{children:[Object(i.jsx)("small",{className:"text-muted",children:"Jane Dovve"}),Object(i.jsx)("small",{className:"text-muted float-right mt-1",children:"5 minutes ago"})]}),Object(i.jsx)("div",{className:"text-truncate font-weight-bold",children:"Lorem ipsum dolor sit amet"}),Object(i.jsx)("div",{className:"small text-muted text-truncate",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt..."})]})}),Object(i.jsx)(c.C,{href:"#",children:Object(i.jsxs)("div",{className:"message",children:[Object(i.jsx)("div",{className:"pt-3 mr-3 float-left",children:Object(i.jsxs)("div",{className:"c-avatar",children:[Object(i.jsx)(c.R,{src:"avatars/5.jpg",className:"c-avatar-img",alt:"admin@bootstrapmaster.com"}),Object(i.jsx)("span",{className:"c-avatar-status bg-danger"})]})}),Object(i.jsxs)("div",{children:[Object(i.jsx)("small",{className:"text-muted",children:"Janet Doe"}),Object(i.jsx)("small",{className:"text-muted float-right mt-1",children:"1:52 PM"})]}),Object(i.jsx)("div",{className:"text-truncate font-weight-bold",children:"Lorem ipsum dolor sit amet"}),Object(i.jsx)("div",{className:"small text-muted text-truncate",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt..."})]})}),Object(i.jsx)(c.C,{href:"#",children:Object(i.jsxs)("div",{className:"message",children:[Object(i.jsx)("div",{className:"pt-3 mr-3 float-left",children:Object(i.jsxs)("div",{className:"c-avatar",children:[Object(i.jsx)(c.R,{src:"avatars/4.jpg",className:"c-avatar-img",alt:"admin@bootstrapmaster.com"}),Object(i.jsx)("span",{className:"c-avatar-status bg-info"})]})}),Object(i.jsxs)("div",{children:[Object(i.jsx)("small",{className:"text-muted",children:"Joe Doe"}),Object(i.jsx)("small",{className:"text-muted float-right mt-1",children:"4:03 AM"})]}),Object(i.jsx)("div",{className:"text-truncate font-weight-bold",children:"Lorem ipsum dolor sit amet"}),Object(i.jsx)("div",{className:"small text-muted text-truncate",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt..."})]})}),Object(i.jsx)(c.C,{href:"#",className:"text-center border-top",children:Object(i.jsx)("strong",{children:"View all messages"})})]})]})},j=function(){return Object(i.jsxs)(c.z,{inNav:!0,className:"c-header-nav-item mx-2",children:[Object(i.jsxs)(c.E,{className:"c-header-nav-link",caret:!1,children:[Object(i.jsx)(u.a,{name:"cil-bell"}),Object(i.jsx)(c.b,{shape:"pill",color:"danger",children:5})]}),Object(i.jsxs)(c.D,{placement:"bottom-end",className:"pt-0",children:[Object(i.jsx)(c.C,{header:!0,tag:"div",className:"text-center",color:"light",children:Object(i.jsxs)("strong",{children:["You have ",5," notifications"]})}),Object(i.jsxs)(c.C,{children:[Object(i.jsx)(u.a,{name:"cil-user-follow",className:"mr-2 text-success"})," New user registered"]}),Object(i.jsxs)(c.C,{children:[Object(i.jsx)(u.a,{name:"cil-user-unfollow",className:"mr-2 text-danger"})," User deleted"]}),Object(i.jsxs)(c.C,{children:[Object(i.jsx)(u.a,{name:"cil-chart-pie",className:"mr-2 text-info"})," Sales report is ready"]}),Object(i.jsxs)(c.C,{children:[Object(i.jsx)(u.a,{name:"cil-basket",className:"mr-2 text-primary"})," New client"]}),Object(i.jsxs)(c.C,{children:[Object(i.jsx)(u.a,{name:"cil-speedometer",className:"mr-2 text-warning"})," Server overloaded"]}),Object(i.jsx)(c.C,{header:!0,tag:"div",color:"light",children:Object(i.jsx)("strong",{children:"Server"})}),Object(i.jsxs)(c.C,{className:"d-block",children:[Object(i.jsx)("div",{className:"text-uppercase mb-1",children:Object(i.jsx)("small",{children:Object(i.jsx)("b",{children:"CPU Usage"})})}),Object(i.jsx)(c.ub,{size:"xs",color:"info",value:25}),Object(i.jsx)("small",{className:"text-muted",children:"348 Processes. 1/4 Cores."})]}),Object(i.jsxs)(c.C,{className:"d-block",children:[Object(i.jsx)("div",{className:"text-uppercase mb-1",children:Object(i.jsx)("small",{children:Object(i.jsx)("b",{children:"Memory Usage"})})}),Object(i.jsx)(c.ub,{size:"xs",color:"warning",value:70}),Object(i.jsx)("small",{className:"text-muted",children:"11444GB/16384MB"})]}),Object(i.jsxs)(c.C,{className:"d-block",children:[Object(i.jsx)("div",{className:"text-uppercase mb-1",children:Object(i.jsx)("small",{children:Object(i.jsx)("b",{children:"SSD 1 Usage"})})}),Object(i.jsx)(c.ub,{size:"xs",color:"danger",value:90}),Object(i.jsx)("small",{className:"text-muted",children:"243GB/256GB"})]})]})]})},h=function(){return Object(i.jsxs)(c.z,{inNav:!0,className:"c-header-nav-item mx-2",children:[Object(i.jsxs)(c.E,{className:"c-header-nav-link",caret:!1,children:[Object(i.jsx)(u.a,{name:"cil-list"}),Object(i.jsx)(c.b,{shape:"pill",color:"warning",children:5})]}),Object(i.jsxs)(c.D,{placement:"bottom-end",className:"pt-0",children:[Object(i.jsx)(c.C,{header:!0,tag:"div",className:"text-center",color:"light",children:Object(i.jsxs)("strong",{children:["You have ",5," pending tasks"]})}),Object(i.jsxs)(c.C,{className:"d-block",children:[Object(i.jsxs)("div",{className:"small mb-1",children:["Upgrade NPM & Bower ",Object(i.jsx)("span",{className:"float-right",children:Object(i.jsx)("strong",{children:"0%"})})]}),Object(i.jsx)(c.ub,{size:"xs",color:"info",value:0})]}),Object(i.jsxs)(c.C,{className:"d-block",children:[Object(i.jsxs)("div",{className:"small mb-1",children:["ReactJS Version ",Object(i.jsx)("span",{className:"float-right",children:Object(i.jsx)("strong",{children:"25%"})})]}),Object(i.jsx)(c.ub,{size:"xs",color:"danger",value:25})]}),Object(i.jsxs)(c.C,{className:"d-block",children:[Object(i.jsxs)("div",{className:"small mb-1",children:["VueJS Version ",Object(i.jsx)("span",{className:"float-right",children:Object(i.jsx)("strong",{children:"50%"})})]}),Object(i.jsx)(c.ub,{size:"xs",color:"warning",value:50})]}),Object(i.jsxs)(c.C,{className:"d-block",children:[Object(i.jsxs)("div",{className:"small mb-1",children:["Add new layouts ",Object(i.jsx)("span",{className:"float-right",children:Object(i.jsx)("strong",{children:"75%"})})]}),Object(i.jsx)(c.ub,{size:"xs",color:"info",value:75})]}),Object(i.jsxs)(c.C,{className:"d-block",children:[Object(i.jsxs)("div",{className:"small mb-1",children:["Angular 2 Cli Version ",Object(i.jsx)("span",{className:"float-right",children:Object(i.jsx)("strong",{children:"100%"})})]}),Object(i.jsx)(c.ub,{size:"xs",color:"success",value:100})]}),Object(i.jsx)(c.C,{className:"text-center border-top",children:Object(i.jsx)("strong",{children:"View all tasks"})})]})]})},f=(n(527),n(666))},670:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function s(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var r=t.isSafari=function(){return/^((?!chrome|android).)*safari/i.test(navigator.userAgent)},c=t.isJsons=function(e){return Array.isArray(e)&&e.every((function(e){return"object"===("undefined"===typeof e?"undefined":a(e))&&!(e instanceof Array)}))},i=t.isArrays=function(e){return Array.isArray(e)&&e.every((function(e){return Array.isArray(e)}))},o=t.jsonsHeaders=function(e){return Array.from(e.map((function(e){return Object.keys(e)})).reduce((function(e,t){return new Set([].concat(s(e),s(t)))}),[]))},l=t.jsons2arrays=function(e,t){var n=t=t||o(e),a=t;c(t)&&(n=t.map((function(e){return e.label})),a=t.map((function(e){return e.key})));var r=e.map((function(e){return a.map((function(t){return d(t,e)}))}));return[n].concat(s(r))},d=t.getHeaderValue=function(e,t){var n=e.replace(/\[([^\]]+)]/g,".$1").split(".").reduce((function(e,t,n,a){if(void 0!==e[t])return e[t];a.splice(1)}),t);return void 0===n?e in t?t[e]:"":n},u=t.elementOrEmpty=function(e){return e||0===e?e:""},m=t.joiner=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:",",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:'"';return e.filter((function(e){return e})).map((function(e){return e.map((function(e){return u(e)})).map((function(e){return""+n+e+n})).join(t)})).join("\n")},b=t.arrays2csv=function(e,t,n,a){return m(t?[t].concat(s(e)):e,n,a)},j=t.jsons2csv=function(e,t,n,a){return m(l(e,t),n,a)},h=t.string2csv=function(e,t,n,a){return t?t.join(n)+"\n"+e:e},f=t.toCSV=function(e,t,n,a){if(c(e))return j(e,t,n,a);if(i(e))return b(e,t,n,a);if("string"===typeof e)return h(e,t,n);throw new TypeError('Data should be a "String", "Array of arrays" OR "Array of objects" ')};t.buildURI=function(e,t,n,a,s){var c=f(e,n,a,s),i=r()?"application/csv":"text/csv",o=new Blob([t?"\ufeff":"",c],{type:i}),l="data:"+i+";charset=utf-8,"+(t?"\ufeff":"")+c,d=window.URL||window.webkitURL;return"undefined"===typeof d.createObjectURL?l:d.createObjectURL(o)}},671:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PropsNotForwarded=t.defaultProps=t.propTypes=void 0;var a,s=n(1),r=((a=s)&&a.__esModule,n(0));t.propTypes={data:(0,r.oneOfType)([r.string,r.array]).isRequired,headers:r.array,target:r.string,separator:r.string,filename:r.string,uFEFF:r.bool,onClick:r.func,asyncOnClick:r.bool},t.defaultProps={separator:",",filename:"generatedBy_react-csv.csv",uFEFF:!0,asyncOnClick:!1},t.PropsNotForwarded=["data","headers"]},672:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(661);var s=n(662);function r(e){return function(e){if(Array.isArray(e))return Object(a.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(s.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},673:function(e,t,n){e.exports=n(676)},675:function(e,t,n){"use strict";t.a=[{id:0,name:"John Doe",registered:"2018/01/01",role:"Guest",status:"Pending"},{id:1,name:"Samppa Nori",registered:"2018/01/01",role:"Member",status:"Active"},{id:2,name:"Estavan Lykos",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:3,name:"Chetan Mohamed",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:4,name:"Derick Maximinus",registered:"2018/03/01",role:"Member",status:"Pending"},{id:5,name:"Friderik D\xe1vid",registered:"2018/01/21",role:"Staff",status:"Active"},{id:6,name:"Yiorgos Avraamu",registered:"2018/01/01",role:"Member",status:"Active"},{id:7,name:"Avram Tarasios",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:8,name:"Quintin Ed",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:9,name:"En\xe9as Kwadwo",registered:"2018/03/01",role:"Member",status:"Pending"},{id:10,name:"Agapetus Tade\xe1\u0161",registered:"2018/01/21",role:"Staff",status:"Active"},{id:11,name:"Carwyn Fachtna",registered:"2018/01/01",role:"Member",status:"Active"},{id:12,name:"Nehemiah Tatius",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:13,name:"Ebbe Gemariah",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:14,name:"Eustorgios Amulius",registered:"2018/03/01",role:"Member",status:"Pending"},{id:15,name:"Leopold G\xe1sp\xe1r",registered:"2018/01/21",role:"Staff",status:"Active"},{id:16,name:"Pompeius Ren\xe9",registered:"2018/01/01",role:"Member",status:"Active"},{id:17,name:"Pa\u0109jo Jadon",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:18,name:"Micheal Mercurius",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:19,name:"Ganesha Dubhghall",registered:"2018/03/01",role:"Member",status:"Pending"},{id:20,name:"Hiroto \u0160imun",registered:"2018/01/21",role:"Staff",status:"Active"},{id:21,name:"Vishnu Serghei",registered:"2018/01/01",role:"Member",status:"Active"},{id:22,name:"Zbyn\u011bk Phoibos",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:23,name:"Aulus Agmundr",registered:"2018/01/01",role:"Member",status:"Pending"},{id:42,name:"Ford Prefect",registered:"2001/05/25",role:"Alien",status:"Don't panic!"}]},676:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CSVLink=t.CSVDownload=void 0;var a=r(n(677)),s=r(n(678));function r(e){return e&&e.__esModule?e:{default:e}}t.CSVDownload=a.default,t.CSVLink=s.default},677:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,s=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n(1),c=(a=r)&&a.__esModule?a:{default:a},i=n(670),o=n(671);var l=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={},n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),s(t,[{key:"buildURI",value:function(){return i.buildURI.apply(void 0,arguments)}},{key:"componentDidMount",value:function(){var e=this.props,t=e.data,n=e.headers,a=e.separator,s=e.enclosingCharacter,r=e.uFEFF,c=e.target,i=e.specs,o=e.replace;this.state.page=window.open(this.buildURI(t,r,n,a,s),c,i,o)}},{key:"getWindow",value:function(){return this.state.page}},{key:"render",value:function(){return null}}]),t}(c.default.Component);l.defaultProps=Object.assign(o.defaultProps,{target:"_blank"}),l.propTypes=o.propTypes,t.default=l},678:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),c=n(1),i=(a=c)&&a.__esModule?a:{default:a},o=n(670),l=n(671);var d=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.buildURI=n.buildURI.bind(n),n.state={href:""},n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.data,n=e.headers,a=e.separator,s=e.uFEFF,r=e.enclosingCharacter;this.setState({href:this.buildURI(t,s,n,a,r)})}},{key:"componentDidUpdate",value:function(e){if(this.props!==e){var t=this.props,n=t.data,a=t.headers,s=t.separator,r=t.uFEFF;this.setState({href:this.buildURI(n,r,a,s)})}}},{key:"buildURI",value:function(){return o.buildURI.apply(void 0,arguments)}},{key:"handleLegacy",value:function(e){if(window.navigator.msSaveOrOpenBlob){e.preventDefault();var t=this.props,n=t.data,a=t.headers,s=t.separator,r=t.filename,c=t.enclosingCharacter,i=t.uFEFF,l=new Blob([i?"\ufeff":"",(0,o.toCSV)(n,a,s,c)]);return window.navigator.msSaveBlob(l,r),!1}}},{key:"handleAsyncClick",value:function(e){var t=this;this.props.onClick(e,(function(n){!1!==n?t.handleLegacy(e):e.preventDefault()}))}},{key:"handleSyncClick",value:function(e){!1===this.props.onClick(e)?e.preventDefault():this.handleLegacy(e)}},{key:"handleClick",value:function(){var e=this;return function(t){if("function"===typeof e.props.onClick)return e.props.asyncOnClick?e.handleAsyncClick(t):e.handleSyncClick(t);e.handleLegacy(t)}}},{key:"render",value:function(){var e=this,t=this.props,n=(t.data,t.headers,t.separator,t.filename),a=(t.uFEFF,t.children),r=(t.onClick,t.asyncOnClick,t.enclosingCharacter,function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(t,["data","headers","separator","filename","uFEFF","children","onClick","asyncOnClick","enclosingCharacter"]));return i.default.createElement("a",s({download:n},r,{ref:function(t){return e.link=t},target:"_self",href:this.state.href,onClick:this.handleClick()}),a)}}]),t}(i.default.Component);d.defaultProps=l.defaultProps,d.propTypes=l.propTypes,t.default=d}}]);
//# sourceMappingURL=4.1a41a047.chunk.js.map