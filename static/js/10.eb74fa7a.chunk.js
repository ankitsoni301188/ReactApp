(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[10],{409:function(e,t,c){"use strict";c.r(t);var s=c(46),a=c(723),n=c(37),l=c.n(n),r=c(57),j=c(703),i=c(1),o=c(21),b=c(44),d=(c(868),c(704),c(15)),m=c(97),x=c(59),O=c.n(x),h=(c(185),c(770),c(786)),u=(c(871),c(6)),p=function(e){var t=Object(i.useState)(e),c=Object(j.a)(t,2),s=c[0],a=c[1];return{value:s,onChange:function(e){a(e.target.value)}}};t.default=function(e){var t=Object(d.g)(),c=Object(d.h)().search.match(/page=([0-9]+)/,""),n=Number(c&&c[1]?c[1]:1),x=Object(i.useState)(new Date),f=Object(j.a)(x,2),g=(f[0],f[1],Object(i.useState)(n)),v=Object(j.a)(g,2),N=v[0],w=v[1],S=Object(i.useState)(0),C=Object(j.a)(S,2),y=(C[0],C[1],p("")),k=p(""),A=p(""),L=(p(""),p(""),p(""),p("")),T=p(""),D=p(""),V=(p(""),p(""),p(""),p(""),p(""),p(""),p(""),p(""),p(""),p(""),p(""),p(""),p(""),p(""),p(""),p("")),E=p(""),I=(Object(i.useState)(0),Object(i.useState)(Y)),P=Object(j.a)(I,2),Y=P[0],R=P[1],M=(p(""),p("")),X=p(""),_=p(""),z=p(""),F=Object(i.useState)(new Date),U=Object(j.a)(F,2),B=(U[0],U[1],Object(i.useState)(new Date)),J=Object(j.a)(B,2),G=(J[0],J[1],Object(i.useState)(new Date)),H=Object(j.a)(G,2),Q=(H[0],H[1],Object(i.useState)(q)),K=Object(j.a)(Q,2),q=K[0],W=(K[1],Object(i.useState)($)),Z=Object(j.a)(W,2),$=Z[0],ee=Z[1],te=Object(i.useState)(se),ce=Object(j.a)(te,2),se=ce[0],ae=ce[1],ne=Object(i.useState)(re),le=Object(j.a)(ne,2),re=le[0],je=le[1],ie=Object(i.useState)(be),oe=Object(j.a)(ie,2),be=oe[0],de=(oe[1],function(){var e=Object(r.a)(l.a.mark((function e(){var t,c,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=new Headers).append("Content-Type","application/json; charset=utf-8"),t.append("Access-Control-Allow-Origin","*"),c=[],s=m.a.SYSTEM_SETTINGS.API_URL+"/common/District",e.next=7,fetch(s,t).then((function(e){return e.json()})).then((function(e){return c=e.response}));case 7:m.a.District=c,Oe();case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()),me=function(){var e=Object(r.a)(l.a.mark((function e(t){var c,s,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(c=new Headers).append("Content-Type","application/json; charset=utf-8"),c.append("Access-Control-Allow-Origin","*"),s=[],a=m.a.SYSTEM_SETTINGS.API_URL+"/common/Mandal/"+t,e.next=8,fetch(a,c).then((function(e){return e.json()})).then((function(e){return s=e}));case 8:m.a.Mandal=s;case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),xe=function(){var e=Object(r.a)(l.a.mark((function e(t){var c,s,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m.a.Village=[],(c=new Headers).append("Content-Type","application/json; charset=utf-8"),c.append("Access-Control-Allow-Origin","*"),s=[],a=m.a.SYSTEM_SETTINGS.API_URL+"/common/Village/"+t,e.next=9,fetch(a,c).then((function(e){return e.json()})).then((function(e){return s=e}));case 9:m.a.Village=s,m.a.Village=s;case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Oe=function(e){t.push("/format3?page=".concat(e))},he=function(){if(""===E.value||""===V.value)return O.a.fire({icon:"info",title:"Tag No Cant be Empty",showConfirmButton:!1,timer:1e3}),!1;var e={Sno:m.a.TagList.length+1,RamTagNo:E.value,SheepTagNo:V.value};m.a.TagList.push(e)},ue=Object(i.useState)(m.a.TagList),pe=Object(j.a)(ue,2),fe=pe[0];pe[1];return Object(i.useEffect)((function(){n!==N&&w(n)}),[n,N]),Object(i.useEffect)((function(){}),[m.a.TagList,fe]),Object(u.jsx)(o.w,{children:Object(u.jsx)(o.wb,{className:"justify-content-center",children:Object(u.jsx)(o.u,{md:"12",lg:"12",xl:"12",children:Object(u.jsx)(o.j,{className:"mx-12",children:Object(u.jsx)(o.k,{className:"p-12",children:Object(u.jsxs)(o.J,{children:[Object(u.jsx)("h4",{className:"align-center",children:"Format3 (Claim Form)"}),Object(u.jsx)("p",{className:"text-muted"}),Object(u.jsxs)(o.wb,{children:[Object(u.jsx)(o.u,{children:Object(u.jsxs)(o.V,{className:"mb-4",children:[Object(u.jsx)(o.X,{children:Object(u.jsx)(o.Y,{children:Object(u.jsx)(b.a,{name:"cil-map"})})}),Object(u.jsx)(o.S,Object(s.a)(Object(s.a)({type:"text"},V),{},{placeholder:"Enter Aadhar Card No",autoComplete:"new-Landline"}))]})}),Object(u.jsx)(o.u,{children:Object(u.jsxs)(o.V,{className:"mb-4",children:[Object(u.jsx)(o.X,{children:Object(u.jsx)(o.Y,{children:Object(u.jsx)(b.a,{name:"cil-map"})})}),Object(u.jsx)(o.S,Object(s.a)(Object(s.a)({type:"text"},E),{},{placeholder:"Eneter District",autoComplete:"new-Landline",maxLength:"10"}))]})}),Object(u.jsx)(o.u,{children:Object(u.jsxs)(o.V,{className:"mb-4",children:[Object(u.jsx)(o.X,{children:Object(u.jsx)(o.Y,{children:Object(u.jsx)(b.a,{name:"cil-map"})})}),Object(u.jsx)(o.S,Object(s.a)(Object(s.a)({type:"text"},E),{},{placeholder:"Eneter Village",autoComplete:"new-Landline",maxLength:"10"}))]})}),Object(u.jsx)(o.u,{children:Object(u.jsxs)(o.V,{className:"mb-3",children:[Object(u.jsx)(o.X,{children:Object(u.jsx)(o.Y,{children:Object(u.jsx)(b.a,{name:"cil-map"})})}),Object(u.jsx)(o.S,Object(s.a)(Object(s.a)({type:"text"},E),{},{placeholder:"Eneter Mandal",autoComplete:"new-Landline",maxLength:"10"}))]})}),Object(u.jsx)(o.u,{md:"1",lg:"1",xl:"1",children:Object(u.jsx)(o.f,{className:"mb-1",color:"success",block:!0,onClick:he,children:"Search"})})]}),Object(u.jsx)("hr",{}),Object(u.jsxs)(o.wb,{className:"justify-content-center",children:[Object(u.jsx)(o.u,{md:"4",lg:"4",xl:"4",children:Object(u.jsxs)(o.V,{className:"mb-3",children:[Object(u.jsx)(o.X,{children:Object(u.jsx)(o.Y,{children:Object(u.jsx)(b.a,{name:"cil-user"})})}),Object(u.jsx)(o.S,Object(s.a)(Object(s.a)({type:"text"},y),{},{placeholder:"Full Name of the Beneficiary",autoComplete:""}))]})}),Object(u.jsx)(o.u,{md:"4",lg:"4",xl:"4",children:Object(u.jsxs)(o.V,{className:"mb-3",children:[Object(u.jsx)(o.X,{children:Object(u.jsx)(o.Y,{children:Object(u.jsx)(b.a,{name:"cil-map"})})}),Object(u.jsx)(o.S,Object(s.a)(Object(s.a)({type:"text"},k),{},{placeholder:"Aadhar Card No",autoComplete:"email"}))]})}),Object(u.jsx)(o.u,{md:"4",lg:"4",xl:"4",children:Object(u.jsxs)(o.V,{className:"mb-3",children:[Object(u.jsx)(o.X,{children:Object(u.jsx)(o.Y,{children:Object(u.jsx)(b.a,{name:"cil-user"})})}),Object(u.jsx)(o.S,Object(s.a)(Object(s.a)({type:"text"},A),{},{placeholder:"Village",autoComplete:"new-password"}))]})})]}),Object(u.jsxs)(o.wb,{className:"justify-content-center",children:[Object(u.jsx)(o.u,{md:"4",lg:"4",xl:"4",children:Object(u.jsx)(h.a,{options:m.a.District,placeholder:"Select District",onChange:function(e){M=e.value,console.log(M),m.a.Mandal=[],ee(z),me(M)},onFocus:de})}),Object(u.jsx)(o.u,{md:"4",lg:"4",xl:"4",children:Object(u.jsx)(h.a,{options:m.a.Mandal,placeholder:"Select Mandal",onFocus:me,onChange:function(e){X=e.value,console.log(X),ae(X),m.a.Village=[],xe(X)}})}),Object(u.jsx)(o.u,{md:"4",lg:"4",xl:"4",children:Object(u.jsx)(h.a,{options:m.a.Village,placeholder:"Select Village",onFocus:xe,onChange:function(e){_=e.value,console.log(se),console.log(q),je(_),console.log(_)}})})]}),Object(u.jsx)("br",{}),Object(u.jsxs)(o.wb,{className:"justify-content-center",children:[Object(u.jsx)(o.u,{md:"4",lg:"4",xl:"4",children:Object(u.jsxs)(o.V,{className:"mb-4",children:[Object(u.jsx)(o.X,{children:Object(u.jsx)(o.Y,{children:Object(u.jsx)(b.a,{name:"cil-map"})})}),Object(u.jsx)(o.S,Object(s.a)(Object(s.a)({type:"text"},L),{},{placeholder:"Name of the PSBCS",autoComplete:"new-password",maxLength:"12"}))]})}),Object(u.jsx)(o.u,{md:"4",lg:"4",xl:"4",children:Object(u.jsxs)(o.V,{className:"mb-3",children:[Object(u.jsx)(o.X,{children:Object(u.jsx)(o.Y,{children:Object(u.jsx)(b.a,{name:"cil-map"})})}),Object(u.jsx)(o.S,Object(s.a)(Object(s.a)({type:"text"},T),{},{placeholder:"Policy From",autoComplete:"new-password"}))]})}),Object(u.jsx)(o.u,{md:"4",lg:"4",xl:"4",children:Object(u.jsxs)(o.V,{className:"mb-4",children:[Object(u.jsx)(o.X,{children:Object(u.jsx)(o.Y,{children:Object(u.jsx)(b.a,{name:"cil-map"})})}),Object(u.jsx)(o.S,Object(s.a)(Object(s.a)({type:"text"},D),{},{placeholder:"Policy To",autoComplete:"new-Address2"}))]})})]}),Object(u.jsxs)(o.wb,{className:"justify-content-center",children:[Object(u.jsx)(o.u,{md:"4",lg:"4",xl:"4",children:Object(u.jsxs)(o.V,{className:"mb-3",children:[Object(u.jsx)(o.X,{children:Object(u.jsx)(o.Y,{children:Object(u.jsx)(b.a,{name:"cil-map"})})}),Object(u.jsx)(o.S,Object(s.a)(Object(s.a)({type:"text"},re),{},{placeholder:"Date and Time of Animal Death",autoComplete:"new-password"}))]})}),Object(u.jsx)(o.u,{md:"4",lg:"4",xl:"4",children:Object(u.jsxs)(o.V,{className:"mb-3",children:[Object(u.jsx)(o.X,{children:Object(u.jsx)(o.Y,{children:Object(u.jsx)(b.a,{name:"cil-map"})})}),Object(u.jsx)(o.S,Object(s.a)(Object(s.a)({type:"text"},q),{},{placeholder:"Date and Time of Claim Intimation",autoComplete:"new-password",maxLength:"10"}))]})}),Object(u.jsx)(o.u,{md:"4",lg:"4",xl:"4",children:Object(u.jsxs)(o.V,{className:"mb-4",children:[Object(u.jsx)(o.X,{children:Object(u.jsx)(o.Y,{children:Object(u.jsx)(b.a,{name:"cil-map"})})}),Object(u.jsx)(o.S,Object(s.a)(Object(s.a)({type:"text"},se),{},{placeholder:"Description of Animal Death",autoComplete:"new-Address2"}))]})})]}),Object(u.jsxs)(o.wb,{children:[Object(u.jsx)(o.u,{children:Object(u.jsxs)(o.V,{className:"mb-4",children:[Object(u.jsx)(o.X,{children:Object(u.jsx)(o.Y,{children:Object(u.jsx)(b.a,{name:"cil-map"})})}),Object(u.jsx)(o.S,Object(s.a)(Object(s.a)({type:"text"},V),{},{placeholder:"Eneter Tag No of Sheep",autoComplete:"new-Landline"}))]})}),Object(u.jsx)(o.u,{children:Object(u.jsxs)(o.V,{className:"mb-4",children:[Object(u.jsx)(o.X,{children:Object(u.jsx)(o.Y,{children:Object(u.jsx)(b.a,{name:"cil-map"})})}),Object(u.jsx)(o.S,Object(s.a)(Object(s.a)({type:"text"},E),{},{placeholder:"Eve/Ram",autoComplete:"new-Landline",maxLength:"10"}))]})}),Object(u.jsx)(o.u,{children:Object(u.jsxs)(o.V,{className:"mb-4",children:[Object(u.jsx)(o.X,{children:Object(u.jsx)(o.Y,{children:Object(u.jsx)(b.a,{name:"cil-map"})})}),Object(u.jsx)(o.S,Object(s.a)(Object(s.a)({type:"text"},E),{},{placeholder:"Age of Animal",autoComplete:"new-Landline",maxLength:"10"}))]})}),Object(u.jsx)(o.u,{children:Object(u.jsxs)(o.V,{className:"mb-4",children:[Object(u.jsx)(o.X,{children:Object(u.jsx)(o.Y,{children:Object(u.jsx)(b.a,{name:"cil-map"})})}),Object(u.jsx)(o.S,Object(s.a)(Object(s.a)({type:"text"},E),{},{placeholder:"Sum Insurance(Rs.)",autoComplete:"new-Landline",maxLength:"10"}))]})}),Object(u.jsx)(o.u,{md:"1",lg:"1",xl:"1",children:Object(u.jsx)(o.f,{className:"mb-1",color:"success",block:!0,onClick:he,children:"OK"})})]}),Object(u.jsxs)(o.wb,{children:[Object(u.jsx)(o.y,{items:fe,fields:["Sno",{key:"Ear Tag No.",_classes:"font-weight-bold"},"Eve/Ram","Age of Animal","Sum Insurance (Rs)."],hover:!0,striped:!0,itemsPerPage:5,activePage:N,clickableRows:!0,onRowClick:function(e){return function(e){var t=Object(a.a)(Y).filter((function(t){return t.Sno!==e}));m.a.TagList=t,R(""),R(m.a.TagList),Oe(),console.log(fe)}(e.Sno)},scopedSlots:{status:function(e){return Object(u.jsx)("td",{children:Object(u.jsx)(o.b,{color:"success",children:e.status})})}}}),Object(u.jsx)(o.sb,{activePage:N,onActivePageChange:Oe,pages:5,doubleArrows:!1,align:"center"})]}),Object(u.jsxs)(o.wb,{children:[Object(u.jsx)(o.u,{children:Object(u.jsx)(o.f,{color:"success",block:!0,children:"Submit"})}),Object(u.jsx)(o.u,{children:Object(u.jsx)(o.f,{color:"primary",block:!0,children:"Submit And Print"})}),Object(u.jsx)(o.u,{children:Object(u.jsx)(o.f,{color:"danger",block:!0,children:"Reset"})}),Object(u.jsx)(o.u,{children:Object(u.jsx)(o.f,{color:"info",block:!0,onClick:function(){e.history.push("/views/format3list")},children:"Claim List"})})]})]})})})})})})}},537:function(e,t,c){"use strict";c.r(t);c(1);var s=c(711),a=c(6);t.default=function(){return Object(a.jsxs)("div",{className:"c-app c-default-layout",children:[Object(a.jsx)(s.h,{}),Object(a.jsxs)("div",{className:"c-wrapper",children:[Object(a.jsx)(s.c,{}),Object(a.jsx)("div",{className:"c-body",children:Object(a.jsx)(s.a,{})}),Object(a.jsx)(s.b,{})]})]})}},704:function(e,t,c){"use strict";var s=c(37),a=c.n(s),n=c(57),l=(c(1),c(133)),r=c(21),j=c(44),i=c(401),o=c(97),b=c(711),d=c(6);c(719);t.a=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.sidebarShow})),c={method:"GET",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"http://localhost:3004"}},s=function(){var e=Object(n.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return[],t=o.a.SYSTEM_SETTINGS.API_URL+"/fetchPolicy/",e.next=4,fetch(t,c).then((function(e){return e.json()})).then((function(e){return e.response}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(d.jsxs)(r.M,{withSubheader:!0,children:[Object(d.jsx)(r.Qb,{inHeader:!0,className:"ml-md-3 d-lg-none",onClick:function(){var c=!![!1,"responsive"].includes(t)||"responsive";e({type:"set",sidebarShow:c})}}),Object(d.jsx)(r.Qb,{inHeader:!0,className:"ml-3 d-md-down-none",onClick:function(){var c=![!0,"responsive"].includes(t)&&"responsive";e({type:"set",sidebarShow:c})}}),Object(d.jsx)(r.N,{className:"mx-auto d-lg-none",to:"/"}),Object(d.jsxs)(r.O,{className:"d-md-down-none mr-auto",children:[Object(d.jsx)(r.P,{className:"px-3",children:Object(d.jsx)(r.Q,{to:"/views/dashboard",children:"Dashboard"})}),Object(d.jsx)(r.P,{className:"px-3",children:Object(d.jsx)(r.Q,{to:"/views/users",children:"Users"})}),Object(d.jsx)(r.P,{className:"px-3",children:Object(d.jsx)(r.Q,{onClick:s,children:"Fetch Policy"})})]}),Object(d.jsxs)(r.O,{className:"px-3",children:[Object(d.jsx)(b.f,{}),Object(d.jsx)(b.g,{}),Object(d.jsx)(b.e,{}),Object(d.jsx)(b.d,{})]}),Object(d.jsxs)(r.Gb,{className:"px-3 justify-content-between",children:[Object(d.jsx)(r.e,{className:"border-0 c-subheader-nav m-0 px-0 px-md-3",routes:i.a}),Object(d.jsxs)("div",{className:"d-md-down-none mfe-2 c-subheader-nav",children:[Object(d.jsx)(r.db,{className:"c-subheader-nav-link",href:"#",children:Object(d.jsx)(j.a,{name:"cil-speech",alt:"Settings"})}),Object(d.jsxs)(r.db,{className:"c-subheader-nav-link","aria-current":"page",to:"/dashboard",children:[Object(d.jsx)(j.a,{name:"cil-graph",alt:"Dashboard"}),"\xa0Dashboard"]}),Object(d.jsxs)(r.db,{className:"c-subheader-nav-link",href:"#",children:[Object(d.jsx)(j.a,{name:"cil-settings",alt:"Settings"}),"\xa0Settings"]})]})]})]})}},706:function(e,t,c){"use strict";var s=c(46),a=c(1),n=c.n(a),l=c(15),r=c(21),j=c(401),i=c(6),o=Object(i.jsx)("div",{className:"pt-3 text-center",children:Object(i.jsx)("div",{className:"sk-spinner sk-spinner-pulse"})}),b=function(){return Object(i.jsx)("main",{className:"c-main",children:Object(i.jsx)(r.w,{fluid:!0,children:Object(i.jsx)(a.Suspense,{fallback:o,children:Object(i.jsxs)(l.d,{children:[j.a.map((function(e,t){return e.component&&Object(i.jsx)(l.b,{path:e.path,exact:e.exact,name:e.name,render:function(t){return Object(i.jsx)(r.H,{children:Object(i.jsx)(e.component,Object(s.a)({},t))})}},t)})),Object(i.jsx)(l.a,{from:"/dashboard",to:"/views/dashboard"}),Object(i.jsx)(l.a,{from:"/login",to:"/pages/login"})]})})})})};t.a=n.a.memo(b)},707:function(e,t,c){"use strict";var s=c(1),a=c.n(s),n=c(133),l=c(21),r=c(44),j=c(6),i=[{_tag:"CSidebarNavItem",name:"Dashboard",to:"/views/dashboard",icon:Object(j.jsx)(r.a,{name:"cil-speedometer",customClasses:"c-sidebar-nav-icon"}),badge:{color:"info",text:""}},{_tag:"CSidebarNavItem",name:"Register",to:"/register",icon:Object(j.jsx)(r.a,{name:"cil-user",customClasses:"c-sidebar-nav-icon"}),badge:{color:"info",text:""}},{_tag:"CSidebarNavItem",name:"Format1",to:"/views/format1",icon:Object(j.jsx)(r.a,{name:"cil-speedometer",customClasses:"c-sidebar-nav-icon"}),badge:{color:"info",text:""}},{_tag:"CSidebarNavItem",name:"Format3",to:"/views/format3",icon:Object(j.jsx)(r.a,{name:"cil-speedometer",customClasses:"c-sidebar-nav-icon"}),badge:{color:"info",text:""}},{_tag:"CSidebarNavItem",name:"Format4",to:"/views/format4",icon:Object(j.jsx)(r.a,{name:"cil-speedometer",customClasses:"c-sidebar-nav-icon"}),badge:{color:"info",text:""}}],o=function(){var e=Object(n.b)(),t=Object(n.c)((function(e){return e.sidebarShow}));return Object(j.jsxs)(l.yb,{show:t,onShowChange:function(t){return e({type:"set",sidebarShow:t})},children:[Object(j.jsx)(l.zb,{className:"d-md-down-none",to:"/dashboard",children:Object(j.jsx)("label",{children:"Fouress Insurance Broking Services Pvt Ltd "})}),Object(j.jsx)(l.Bb,{children:Object(j.jsx)(l.x,{items:i,components:{CSidebarNavDivider:l.Cb,CSidebarNavDropdown:l.Db,CSidebarNavItem:l.Eb,CSidebarNavTitle:l.Fb}})}),Object(j.jsx)(l.Ab,{className:"c-d-md-down-none"})]})};t.a=a.a.memo(o)},711:function(e,t,c){"use strict";c.d(t,"a",(function(){return s.a})),c.d(t,"b",(function(){return i})),c.d(t,"c",(function(){return o.a})),c.d(t,"d",(function(){return m})),c.d(t,"e",(function(){return x})),c.d(t,"f",(function(){return O})),c.d(t,"g",(function(){return h})),c.d(t,"h",(function(){return u.a}));var s=c(706),a=c(1),n=c.n(a),l=c(21),r=c(6),j=function(){return Object(r.jsx)(l.I,{fixed:!1,children:Object(r.jsxs)("div",{children:[Object(r.jsx)("a",{href:"#",rel:"noopener noreferrer",children:"UNITED INDIA INSURANCE COMPANY LIMITED. "}),Object(r.jsx)("span",{className:"ml-1",children:"(Please call on +91-7536825280 for Any Assistance)."})]})})},i=n.a.memo(j),o=c(704),b=(c(46),c(72),c(44)),d=c(15),m=function(e){var t=Object(d.g)();return Object(r.jsxs)(l.z,{inNav:!0,className:"c-header-nav-items mx-2",direction:"down",children:[Object(r.jsx)(l.E,{className:"c-header-nav-link",caret:!1,children:Object(r.jsx)("div",{className:"c-avatar",children:Object(r.jsx)(l.R,{src:"avatars/9.png",className:"c-avatar-img",alt:"abcd.com"})})}),Object(r.jsx)(l.D,{className:"pt-0",placement:"bottom-end",children:Object(r.jsxs)(l.C,{onClick:function(e){localStorage.clear(),t.push("/login")},children:[Object(r.jsx)(b.a,{name:"cil-lock-locked",className:"mfe-2"}),"Log Out"]})})]})},x=function(){return Object(r.jsxs)(l.z,{inNav:!0,className:"c-header-nav-item mx-2",direction:"down",children:[Object(r.jsxs)(l.E,{className:"c-header-nav-link",caret:!1,children:[Object(r.jsx)(b.a,{name:"cil-envelope-open"}),Object(r.jsx)(l.b,{shape:"pill",color:"info",children:4})]}),Object(r.jsxs)(l.D,{className:"pt-0",placement:"bottom-end",children:[Object(r.jsx)(l.C,{header:!0,tag:"div",color:"light",children:Object(r.jsxs)("strong",{children:["You have ",4," messages"]})}),Object(r.jsx)(l.C,{href:"#",children:Object(r.jsxs)("div",{className:"message",children:[Object(r.jsx)("div",{className:"pt-3 mr-3 float-left",children:Object(r.jsxs)("div",{className:"c-avatar",children:[Object(r.jsx)(l.R,{src:"avatars/7.jpg",className:"c-avatar-img",alt:"admin@bootstrapmaster.com"}),Object(r.jsx)("span",{className:"c-avatar-status bg-success"})]})}),Object(r.jsxs)("div",{children:[Object(r.jsx)("small",{className:"text-muted",children:"John Doe"}),Object(r.jsx)("small",{className:"text-muted float-right mt-1",children:"Just now"})]}),Object(r.jsxs)("div",{className:"text-truncate font-weight-bold",children:[Object(r.jsx)("span",{className:"fa fa-exclamation text-danger"})," Important message"]}),Object(r.jsx)("div",{className:"small text-muted text-truncate",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt..."})]})}),Object(r.jsx)(l.C,{href:"#",children:Object(r.jsxs)("div",{className:"message",children:[Object(r.jsx)("div",{className:"pt-3 mr-3 float-left",children:Object(r.jsxs)("div",{className:"c-avatar",children:[Object(r.jsx)(l.R,{src:"avatars/6.jpg",className:"c-avatar-img",alt:"admin@bootstrapmaster.com"}),Object(r.jsx)("span",{className:"c-avatar-status bg-warning"})]})}),Object(r.jsxs)("div",{children:[Object(r.jsx)("small",{className:"text-muted",children:"Jane Dovve"}),Object(r.jsx)("small",{className:"text-muted float-right mt-1",children:"5 minutes ago"})]}),Object(r.jsx)("div",{className:"text-truncate font-weight-bold",children:"Lorem ipsum dolor sit amet"}),Object(r.jsx)("div",{className:"small text-muted text-truncate",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt..."})]})}),Object(r.jsx)(l.C,{href:"#",children:Object(r.jsxs)("div",{className:"message",children:[Object(r.jsx)("div",{className:"pt-3 mr-3 float-left",children:Object(r.jsxs)("div",{className:"c-avatar",children:[Object(r.jsx)(l.R,{src:"avatars/5.jpg",className:"c-avatar-img",alt:"admin@bootstrapmaster.com"}),Object(r.jsx)("span",{className:"c-avatar-status bg-danger"})]})}),Object(r.jsxs)("div",{children:[Object(r.jsx)("small",{className:"text-muted",children:"Janet Doe"}),Object(r.jsx)("small",{className:"text-muted float-right mt-1",children:"1:52 PM"})]}),Object(r.jsx)("div",{className:"text-truncate font-weight-bold",children:"Lorem ipsum dolor sit amet"}),Object(r.jsx)("div",{className:"small text-muted text-truncate",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt..."})]})}),Object(r.jsx)(l.C,{href:"#",children:Object(r.jsxs)("div",{className:"message",children:[Object(r.jsx)("div",{className:"pt-3 mr-3 float-left",children:Object(r.jsxs)("div",{className:"c-avatar",children:[Object(r.jsx)(l.R,{src:"avatars/4.jpg",className:"c-avatar-img",alt:"admin@bootstrapmaster.com"}),Object(r.jsx)("span",{className:"c-avatar-status bg-info"})]})}),Object(r.jsxs)("div",{children:[Object(r.jsx)("small",{className:"text-muted",children:"Joe Doe"}),Object(r.jsx)("small",{className:"text-muted float-right mt-1",children:"4:03 AM"})]}),Object(r.jsx)("div",{className:"text-truncate font-weight-bold",children:"Lorem ipsum dolor sit amet"}),Object(r.jsx)("div",{className:"small text-muted text-truncate",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt..."})]})}),Object(r.jsx)(l.C,{href:"#",className:"text-center border-top",children:Object(r.jsx)("strong",{children:"View all messages"})})]})]})},O=function(){return Object(r.jsxs)(l.z,{inNav:!0,className:"c-header-nav-item mx-2",children:[Object(r.jsxs)(l.E,{className:"c-header-nav-link",caret:!1,children:[Object(r.jsx)(b.a,{name:"cil-bell"}),Object(r.jsx)(l.b,{shape:"pill",color:"danger",children:5})]}),Object(r.jsxs)(l.D,{placement:"bottom-end",className:"pt-0",children:[Object(r.jsx)(l.C,{header:!0,tag:"div",className:"text-center",color:"light",children:Object(r.jsxs)("strong",{children:["You have ",5," notifications"]})}),Object(r.jsxs)(l.C,{children:[Object(r.jsx)(b.a,{name:"cil-user-follow",className:"mr-2 text-success"})," New user registered"]}),Object(r.jsxs)(l.C,{children:[Object(r.jsx)(b.a,{name:"cil-user-unfollow",className:"mr-2 text-danger"})," User deleted"]}),Object(r.jsxs)(l.C,{children:[Object(r.jsx)(b.a,{name:"cil-chart-pie",className:"mr-2 text-info"})," Sales report is ready"]}),Object(r.jsxs)(l.C,{children:[Object(r.jsx)(b.a,{name:"cil-basket",className:"mr-2 text-primary"})," New client"]}),Object(r.jsxs)(l.C,{children:[Object(r.jsx)(b.a,{name:"cil-speedometer",className:"mr-2 text-warning"})," Server overloaded"]}),Object(r.jsx)(l.C,{header:!0,tag:"div",color:"light",children:Object(r.jsx)("strong",{children:"Server"})}),Object(r.jsxs)(l.C,{className:"d-block",children:[Object(r.jsx)("div",{className:"text-uppercase mb-1",children:Object(r.jsx)("small",{children:Object(r.jsx)("b",{children:"CPU Usage"})})}),Object(r.jsx)(l.ub,{size:"xs",color:"info",value:25}),Object(r.jsx)("small",{className:"text-muted",children:"348 Processes. 1/4 Cores."})]}),Object(r.jsxs)(l.C,{className:"d-block",children:[Object(r.jsx)("div",{className:"text-uppercase mb-1",children:Object(r.jsx)("small",{children:Object(r.jsx)("b",{children:"Memory Usage"})})}),Object(r.jsx)(l.ub,{size:"xs",color:"warning",value:70}),Object(r.jsx)("small",{className:"text-muted",children:"11444GB/16384MB"})]}),Object(r.jsxs)(l.C,{className:"d-block",children:[Object(r.jsx)("div",{className:"text-uppercase mb-1",children:Object(r.jsx)("small",{children:Object(r.jsx)("b",{children:"SSD 1 Usage"})})}),Object(r.jsx)(l.ub,{size:"xs",color:"danger",value:90}),Object(r.jsx)("small",{className:"text-muted",children:"243GB/256GB"})]})]})]})},h=function(){return Object(r.jsxs)(l.z,{inNav:!0,className:"c-header-nav-item mx-2",children:[Object(r.jsxs)(l.E,{className:"c-header-nav-link",caret:!1,children:[Object(r.jsx)(b.a,{name:"cil-list"}),Object(r.jsx)(l.b,{shape:"pill",color:"warning",children:5})]}),Object(r.jsxs)(l.D,{placement:"bottom-end",className:"pt-0",children:[Object(r.jsx)(l.C,{header:!0,tag:"div",className:"text-center",color:"light",children:Object(r.jsxs)("strong",{children:["You have ",5," pending tasks"]})}),Object(r.jsxs)(l.C,{className:"d-block",children:[Object(r.jsxs)("div",{className:"small mb-1",children:["Upgrade NPM & Bower ",Object(r.jsx)("span",{className:"float-right",children:Object(r.jsx)("strong",{children:"0%"})})]}),Object(r.jsx)(l.ub,{size:"xs",color:"info",value:0})]}),Object(r.jsxs)(l.C,{className:"d-block",children:[Object(r.jsxs)("div",{className:"small mb-1",children:["ReactJS Version ",Object(r.jsx)("span",{className:"float-right",children:Object(r.jsx)("strong",{children:"25%"})})]}),Object(r.jsx)(l.ub,{size:"xs",color:"danger",value:25})]}),Object(r.jsxs)(l.C,{className:"d-block",children:[Object(r.jsxs)("div",{className:"small mb-1",children:["VueJS Version ",Object(r.jsx)("span",{className:"float-right",children:Object(r.jsx)("strong",{children:"50%"})})]}),Object(r.jsx)(l.ub,{size:"xs",color:"warning",value:50})]}),Object(r.jsxs)(l.C,{className:"d-block",children:[Object(r.jsxs)("div",{className:"small mb-1",children:["Add new layouts ",Object(r.jsx)("span",{className:"float-right",children:Object(r.jsx)("strong",{children:"75%"})})]}),Object(r.jsx)(l.ub,{size:"xs",color:"info",value:75})]}),Object(r.jsxs)(l.C,{className:"d-block",children:[Object(r.jsxs)("div",{className:"small mb-1",children:["Angular 2 Cli Version ",Object(r.jsx)("span",{className:"float-right",children:Object(r.jsx)("strong",{children:"100%"})})]}),Object(r.jsx)(l.ub,{size:"xs",color:"success",value:100})]}),Object(r.jsx)(l.C,{className:"text-center border-top",children:Object(r.jsx)("strong",{children:"View all tasks"})})]})]})},u=(c(537),c(707))},723:function(e,t,c){"use strict";c.d(t,"a",(function(){return n}));var s=c(701);var a=c(702);function n(e){return function(e){if(Array.isArray(e))return Object(s.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(a.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},770:function(e,t,c){"use strict"}}]);
//# sourceMappingURL=10.eb74fa7a.chunk.js.map