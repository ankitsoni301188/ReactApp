(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[21],{537:function(e,t,c){"use strict";c.r(t);c(1);var n=c(711),a=c(6);t.default=function(){return Object(a.jsxs)("div",{className:"c-app c-default-layout",children:[Object(a.jsx)(n.e,{}),Object(a.jsxs)("div",{className:"c-wrapper",children:[Object(a.jsx)(n.c,{}),Object(a.jsx)("div",{className:"c-body",children:Object(a.jsx)(n.a,{})}),Object(a.jsx)(n.b,{})]})]})}},573:function(e,t,c){"use strict";c.r(t);var n=c(46),a=c(37),s=c.n(a),r=c(57),l=c(703),o=c(1),i=c(21),j=c(44),b=(c(868),c(704),c(15)),d=c(97),u=c(59),O=c.n(u),h=(c(185),c(770),c(786)),x=(c(871),c(6)),m=function(e){var t=Object(o.useState)(e),c=Object(l.a)(t,2),n=c[0],a=c[1];return{value:n,onChange:function(e){a(e.target.value)}}};t.default=function(e){var t=Object(b.g)(),c=Object(b.h)().search.match(/page=([0-9]+)/,""),a=Number(c&&c[1]?c[1]:1),u=Object(o.useState)(new Date),p=Object(l.a)(u,2),f=(p[0],p[1],Object(o.useState)(a)),g=Object(l.a)(f,2),v=g[0],S=g[1],N=Object(o.useState)(0),w=Object(l.a)(N,2),C=(w[0],w[1],m("")),y=(m(""),m("")),T=(m(""),m(""),m(""),m(""),m(""),m(""),m(""),m(""),m(""),m(""),m(""),m(""),m(""),m(""),m(""),m(""),m(""),m(""),m(""),m(""),m(""),m("")),k=m(""),A=(Object(o.useState)(0),Object(o.useState)(D)),I=Object(l.a)(A,2),D=I[0],V=I[1],L=Object(o.useState)(Y),E=Object(l.a)(L,2),Y=E[0],M=(E[1],m(""),m("")),P=m(""),_=m(""),F=m(""),R=Object(o.useState)(new Date),X=Object(l.a)(R,2),U=(X[0],X[1],Object(o.useState)(new Date)),G=Object(l.a)(U,2),H=(G[0],G[1],Object(o.useState)(new Date)),Q=Object(l.a)(H,2),B=(Q[0],Q[1],Object(o.useState)(z)),J=Object(l.a)(B,2),z=J[0],q=(J[1],Object(o.useState)(K)),$=Object(l.a)(q,2),K=$[0],W=$[1],Z=Object(o.useState)(te),ee=Object(l.a)(Z,2),te=ee[0],ce=ee[1],ne=Object(o.useState)(se),ae=Object(l.a)(ne,2),se=ae[0],re=ae[1],le=Object(o.useState)(ie),oe=Object(l.a)(le,2),ie=oe[0],je=(oe[1],function(e){M=e.value,console.log(M),d.a.Mandal=[],W(F),Oe(M)}),be=function(e){P=e.value,console.log(P),ce(P),d.a.Village=[],he(P)},de=function(e){_=e.value,console.log(te),console.log(z),re(_),console.log(_)},ue=function(){var e=Object(r.a)(s.a.mark((function e(){var t,c,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=new Headers).append("Content-Type","application/json; charset=utf-8"),t.append("Access-Control-Allow-Origin","*"),c=[],n=d.a.SYSTEM_SETTINGS.API_URL+"/common/District",e.next=7,fetch(n,t).then((function(e){return e.json()})).then((function(e){return c=e.response}));case 7:d.a.District=c,xe();case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Oe=function(){var e=Object(r.a)(s.a.mark((function e(t){var c,n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(c=new Headers).append("Content-Type","application/json; charset=utf-8"),c.append("Access-Control-Allow-Origin","*"),n=[],a=d.a.SYSTEM_SETTINGS.API_URL+"/common/Mandal/"+t,e.next=8,fetch(a,c).then((function(e){return e.json()})).then((function(e){return n=e}));case 8:d.a.Mandal=n;case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),he=function(){var e=Object(r.a)(s.a.mark((function e(t){var c,n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d.a.Village=[],(c=new Headers).append("Content-Type","application/json; charset=utf-8"),c.append("Access-Control-Allow-Origin","*"),n=[],a=d.a.SYSTEM_SETTINGS.API_URL+"/common/Village/"+t,e.next=9,fetch(a,c).then((function(e){return e.json()})).then((function(e){return n=e}));case 9:d.a.Village=n,d.a.Village=n;case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),xe=function(e){a!==e&&t.push("//format4?page=".concat(e))},me=Object(o.useState)(d.a.TagList),pe=Object(l.a)(me,2),fe=pe[0];pe[1];return Object(o.useEffect)((function(){a!==v&&S(a)}),[a,v]),Object(o.useEffect)((function(){}),[d.a.TagList,fe]),Object(x.jsx)(i.w,{children:Object(x.jsx)(i.wb,{className:"justify-content-center",children:Object(x.jsx)(i.u,{md:"12",lg:"12",xl:"12",children:Object(x.jsx)(i.j,{className:"mx-12",children:Object(x.jsx)(i.k,{className:"p-12",children:Object(x.jsxs)(i.J,{children:[Object(x.jsx)("h4",{className:"align-center",children:"Tag Loss"}),Object(x.jsx)("p",{className:"text-muted"}),Object(x.jsxs)(i.wb,{children:[Object(x.jsx)(i.u,{children:Object(x.jsxs)(i.V,{className:"mb-4",children:[Object(x.jsx)(i.X,{children:Object(x.jsx)(i.Y,{children:Object(x.jsx)(j.a,{name:"cil-map"})})}),Object(x.jsx)(i.S,Object(n.a)(Object(n.a)({type:"text"},T),{},{placeholder:"Enter Tag  No",autoComplete:"new-Landline"}))]})}),Object(x.jsx)(i.u,{children:Object(x.jsxs)(i.V,{className:"mb-4",children:[Object(x.jsx)(i.X,{children:Object(x.jsx)(i.Y,{children:Object(x.jsx)(j.a,{name:"cil-map"})})}),Object(x.jsx)(i.S,Object(n.a)(Object(n.a)({type:"text"},k),{},{placeholder:"Insurance No",autoComplete:"new-Landline",maxLength:"10"}))]})}),Object(x.jsx)(i.u,{md:"1",lg:"1",xl:"1",children:Object(x.jsx)(i.f,{className:"mb-1",color:"success",block:!0,onClick:function(){if(""===k.value||""===T.value)return O.a.fire({icon:"info",title:"Tag No Cant be Empty",showConfirmButton:!1,timer:1e3}),!1;var e={Sno:d.a.TagList.length+1,RamTagNo:k.value,SheepTagNo:T.value};d.a.TagList.push(e)},children:"Search"})})]}),Object(x.jsx)("hr",{}),Object(x.jsxs)(i.wb,{className:"justify-content-center",children:[Object(x.jsx)(i.u,{md:"4",lg:"4",xl:"4",children:Object(x.jsxs)(i.V,{className:"mb-3",children:[Object(x.jsx)(i.X,{children:Object(x.jsx)(i.Y,{children:Object(x.jsx)(j.a,{name:"cil-user"})})}),Object(x.jsx)(i.S,Object(n.a)(Object(n.a)({type:"text"},C),{},{placeholder:"Full Name of the Beneficiary",autoComplete:""}))]})}),Object(x.jsx)(i.u,{md:"4",lg:"4",xl:"4",children:Object(x.jsxs)(i.V,{className:"mb-3",children:[Object(x.jsx)(i.X,{children:Object(x.jsx)(i.Y,{children:Object(x.jsx)(j.a,{name:"cil-user"})})}),Object(x.jsx)(i.S,Object(n.a)(Object(n.a)({type:"text"},y),{},{placeholder:"FatherName",autoComplete:"new-password"}))]})}),Object(x.jsx)(i.u,{md:"4",lg:"4",xl:"4",children:Object(x.jsxs)(i.V,{className:"mb-3",children:[Object(x.jsx)(i.X,{children:Object(x.jsx)(i.Y,{children:Object(x.jsx)(j.a,{name:"cil-map"})})}),Object(x.jsx)(i.S,{type:"date",placeholder:"Loss Date",autoComplete:"new-password",value:D,onChange:function(e){return V(e.target.value)}})]})})]}),Object(x.jsxs)(i.wb,{className:"justify-content-center",children:[Object(x.jsx)(i.u,{md:"4",lg:"4",xl:"4",children:Object(x.jsx)(h.a,{options:d.a.District,placeholder:"Select District",onChange:je,onFocus:ue})}),Object(x.jsx)(i.u,{md:"4",lg:"4",xl:"4",children:Object(x.jsx)(h.a,{options:d.a.Mandal,placeholder:"Select Mandal",onFocus:Oe,onChange:be})}),Object(x.jsx)(i.u,{md:"4",lg:"4",xl:"4",children:Object(x.jsx)(h.a,{options:d.a.Village,placeholder:"Select Village",onFocus:he,onChange:de})})]}),Object(x.jsx)("hr",{}),Object(x.jsxs)(i.wb,{className:"justify-content-center",children:[Object(x.jsx)(i.u,{md:"5",lg:"5",xl:"5",children:Object(x.jsxs)(i.V,{className:"mb-3",children:[Object(x.jsx)(i.X,{children:Object(x.jsx)(i.Y,{children:Object(x.jsx)(j.a,{name:"cil-user"})})}),Object(x.jsx)(i.S,Object(n.a)(Object(n.a)({type:"text"},C),{},{placeholder:"VAS Sergeon Name",autoComplete:""}))]})}),Object(x.jsx)(i.u,{md:"1",lg:"1",xl:"1",children:"OR"}),Object(x.jsx)(i.u,{md:"6",lg:"6",xl:"6",children:Object(x.jsxs)(i.V,{className:"mb-3",children:[Object(x.jsx)(i.X,{children:Object(x.jsx)(i.Y,{children:Object(x.jsx)(j.a,{name:"cil-map"})})}),Object(x.jsx)(i.S,{type:"text",placeholder:"Sheep Society President Name",autoComplete:"new-password",value:D,onChange:function(e){return V(e.target.value)}})]})})]}),Object(x.jsxs)(i.wb,{className:"justify-content-center",children:[Object(x.jsx)(i.u,{md:"4",lg:"4",xl:"4",children:Object(x.jsx)(h.a,{options:d.a.District,placeholder:"Select District",onChange:je,onFocus:ue})}),Object(x.jsx)(i.u,{md:"4",lg:"4",xl:"4",children:Object(x.jsx)(h.a,{options:d.a.Mandal,placeholder:"Select Mandal",onFocus:Oe,onChange:be})}),Object(x.jsx)(i.u,{md:"4",lg:"4",xl:"4",children:Object(x.jsx)(h.a,{options:d.a.Village,placeholder:"Select Village",onFocus:he,onChange:de})})]}),Object(x.jsx)("hr",{}),Object(x.jsxs)(i.wb,{className:"justify-content-center",children:[Object(x.jsx)(i.u,{md:"3",lg:"3",xl:"3",children:Object(x.jsxs)(i.V,{className:"mb-3",children:[Object(x.jsx)(i.X,{children:Object(x.jsx)(i.Y,{children:Object(x.jsx)(j.a,{name:"cil-user"})})}),Object(x.jsx)(i.S,Object(n.a)(Object(n.a)({type:"text"},C),{},{placeholder:"Lossed Tag No",autoComplete:""}))]})}),Object(x.jsx)(i.u,{md:"3",lg:"3",xl:"3",children:Object(x.jsxs)(i.V,{className:"mb-3",children:[Object(x.jsx)(i.X,{children:Object(x.jsx)(i.Y,{children:Object(x.jsx)(j.a,{name:"cil-user"})})}),Object(x.jsx)(i.S,Object(n.a)(Object(n.a)({type:"text"},C),{},{placeholder:"Insuarance No",autoComplete:""}))]})}),Object(x.jsx)(i.u,{md:"3",lg:"3",xl:"3",children:Object(x.jsxs)(i.V,{className:"mb-3",children:[Object(x.jsx)(i.X,{children:Object(x.jsx)(i.Y,{children:Object(x.jsx)(j.a,{name:"cil-map"})})}),Object(x.jsx)(i.S,{type:"date",placeholder:"Request Date",autoComplete:"new-password",value:D,onChange:function(e){return V(e.target.value)}})]})}),Object(x.jsx)(i.u,{md:"3",lg:"3",xl:"3",children:Object(x.jsxs)(i.V,{className:"mb-3",children:[Object(x.jsx)(i.X,{children:Object(x.jsx)(i.Y,{children:Object(x.jsx)(j.a,{name:"cil-map"})})}),Object(x.jsx)(i.S,{type:"date",placeholder:"Retag  Date",autoComplete:"new-password",value:D,onChange:function(e){return V(e.target.value)}})]})})]}),Object(x.jsxs)(i.wb,{children:[Object(x.jsx)(i.u,{children:Object(x.jsx)(i.f,{color:"success",block:!0,children:"Submit"})}),Object(x.jsx)(i.u,{children:Object(x.jsx)(i.f,{color:"primary",block:!0,children:"Submit And Print"})}),Object(x.jsx)(i.u,{children:Object(x.jsx)(i.f,{color:"danger",block:!0,children:"Reset"})}),Object(x.jsx)(i.u,{children:Object(x.jsx)(i.f,{color:"info",block:!0,onClick:function(){e.history.push("/views/format4list")},children:"Tag Loss List"})})]})]})})})})})})}},701:function(e,t,c){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var c=0,n=new Array(t);c<t;c++)n[c]=e[c];return n}c.d(t,"a",(function(){return n}))},702:function(e,t,c){"use strict";c.d(t,"a",(function(){return a}));var n=c(701);function a(e,t){if(e){if("string"===typeof e)return Object(n.a)(e,t);var c=Object.prototype.toString.call(e).slice(8,-1);return"Object"===c&&e.constructor&&(c=e.constructor.name),"Map"===c||"Set"===c?Array.from(e):"Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?Object(n.a)(e,t):void 0}}},703:function(e,t,c){"use strict";c.d(t,"a",(function(){return a}));var n=c(702);function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var c=[],n=!0,a=!1,s=void 0;try{for(var r,l=e[Symbol.iterator]();!(n=(r=l.next()).done)&&(c.push(r.value),!t||c.length!==t);n=!0);}catch(o){a=!0,s=o}finally{try{n||null==l.return||l.return()}finally{if(a)throw s}}return c}}(e,t)||Object(n.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},704:function(e,t,c){"use strict";var n=c(37),a=c.n(n),s=c(57),r=(c(1),c(133)),l=c(21),o=c(44),i=c(401),j=c(97),b=c(711),d=c(6);c(719);t.a=function(){var e=Object(r.b)(),t=Object(r.c)((function(e){return e.sidebarShow})),c={method:"GET",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"http://localhost:3004"}},n=function(){var e=Object(s.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return[],t=j.a.SYSTEM_SETTINGS.API_URL+"/fetchPolicy/",e.next=4,fetch(t,c).then((function(e){return e.json()})).then((function(e){return e.response}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(d.jsxs)(l.M,{withSubheader:!0,children:[Object(d.jsx)(l.Qb,{inHeader:!0,className:"ml-md-3 d-lg-none",onClick:function(){var c=!![!1,"responsive"].includes(t)||"responsive";e({type:"set",sidebarShow:c})}}),Object(d.jsx)(l.Qb,{inHeader:!0,className:"ml-3 d-md-down-none",onClick:function(){var c=![!0,"responsive"].includes(t)&&"responsive";e({type:"set",sidebarShow:c})}}),Object(d.jsx)(l.N,{className:"mx-auto d-lg-none",to:"/"}),Object(d.jsxs)(l.O,{className:"d-md-down-none mr-auto",children:[Object(d.jsx)(l.P,{className:"px-3",children:Object(d.jsx)(l.Q,{to:"/views/dashboard",children:"Dashboard"})}),Object(d.jsx)(l.P,{className:"px-3",children:Object(d.jsx)(l.Q,{to:"/views/users",children:"Users"})}),Object(d.jsx)(l.P,{className:"px-3",children:Object(d.jsx)(l.Q,{onClick:n,children:"Fetch Policy"})})]}),Object(d.jsx)(l.O,{className:"px-3",children:Object(d.jsx)(b.d,{})}),Object(d.jsxs)(l.Gb,{className:"px-3 justify-content-between",children:[Object(d.jsx)(l.e,{className:"border-0 c-subheader-nav m-0 px-0 px-md-3",routes:i.a}),Object(d.jsxs)("div",{className:"d-md-down-none mfe-2 c-subheader-nav",children:[Object(d.jsx)(l.db,{className:"c-subheader-nav-link",href:"#",children:Object(d.jsx)(o.a,{name:"cil-speech",alt:"Settings"})}),Object(d.jsxs)(l.db,{className:"c-subheader-nav-link","aria-current":"page",to:"/dashboard",children:[Object(d.jsx)(o.a,{name:"cil-graph",alt:"Dashboard"}),"\xa0Dashboard"]}),Object(d.jsxs)(l.db,{className:"c-subheader-nav-link",href:"#",children:[Object(d.jsx)(o.a,{name:"cil-settings",alt:"Settings"}),"\xa0Settings"]})]})]})]})}},706:function(e,t,c){"use strict";var n=c(46),a=c(1),s=c.n(a),r=c(15),l=c(21),o=c(401),i=c(6),j=Object(i.jsx)("div",{className:"pt-3 text-center",children:Object(i.jsx)("div",{className:"sk-spinner sk-spinner-pulse"})}),b=function(){return Object(i.jsx)("main",{className:"c-main",children:Object(i.jsx)(l.w,{fluid:!0,children:Object(i.jsx)(a.Suspense,{fallback:j,children:Object(i.jsxs)(r.d,{children:[o.a.map((function(e,t){return e.component&&Object(i.jsx)(r.b,{path:e.path,exact:e.exact,name:e.name,render:function(t){return Object(i.jsx)(l.H,{children:Object(i.jsx)(e.component,Object(n.a)({},t))})}},t)})),Object(i.jsx)(r.a,{from:"/dashboard",to:"/views/dashboard"}),Object(i.jsx)(r.a,{from:"/login",to:"/pages/login"})]})})})})};t.a=s.a.memo(b)},707:function(e,t,c){"use strict";var n=c(1),a=c.n(n),s=c(133),r=c(21),l=c(44),o=c(6),i=[{_tag:"CSidebarNavItem",name:"Dashboard",to:"/views/dashboard",icon:Object(o.jsx)(l.a,{name:"cil-speedometer",customClasses:"c-sidebar-nav-icon"}),badge:{color:"info",text:""}},{_tag:"CSidebarNavItem",name:"Create User",to:"/register",icon:Object(o.jsx)(l.a,{name:"cil-user",customClasses:"c-sidebar-nav-icon"}),badge:{color:"info",text:""}},{_tag:"CSidebarNavItem",name:"Insurance Registration",to:"/views/format1",icon:Object(o.jsx)(l.a,{name:"cil-speedometer",customClasses:"c-sidebar-nav-icon"}),badge:{color:"info",text:""}},{_tag:"CSidebarNavItem",name:"Create Claim ",to:"/views/format3",icon:Object(o.jsx)(l.a,{name:"cil-speedometer",customClasses:"c-sidebar-nav-icon"}),badge:{color:"info",text:""}},{_tag:"CSidebarNavItem",name:"Tag Loss Form",to:"/views/format4",icon:Object(o.jsx)(l.a,{name:"cil-speedometer",customClasses:"c-sidebar-nav-icon"}),badge:{color:"info",text:""}}],j=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.sidebarShow}));return Object(o.jsxs)(r.yb,{show:t,onShowChange:function(t){return e({type:"set",sidebarShow:t})},children:[Object(o.jsx)(r.zb,{className:"d-md-down-none",to:"/dashboard",children:Object(o.jsx)("label",{children:"Fouress Insurance Broking Services Pvt Ltd "})}),Object(o.jsx)(r.Bb,{children:Object(o.jsx)(r.x,{items:i,components:{CSidebarNavDivider:r.Cb,CSidebarNavDropdown:r.Db,CSidebarNavItem:r.Eb,CSidebarNavTitle:r.Fb}})}),Object(o.jsx)(r.Ab,{className:"c-d-md-down-none"})]})};t.a=a.a.memo(j)},711:function(e,t,c){"use strict";c.d(t,"a",(function(){return n.a})),c.d(t,"b",(function(){return i})),c.d(t,"c",(function(){return j.a})),c.d(t,"d",(function(){return u})),c.d(t,"e",(function(){return O.a}));var n=c(706),a=c(1),s=c.n(a),r=c(21),l=c(6),o=function(){return Object(l.jsx)(r.I,{fixed:!1,children:Object(l.jsxs)("div",{children:[Object(l.jsx)("a",{href:"#",rel:"noopener noreferrer",children:"New India Assurance Co. Ltd. "}),Object(l.jsx)("span",{className:"ml-1",children:"(Please call on +91-7536825280 for Any Assistance)."})]})})},i=s.a.memo(o),j=c(704),b=(c(46),c(72),c(44)),d=c(15),u=function(e){var t=Object(d.g)();return Object(l.jsxs)(r.z,{inNav:!0,className:"c-header-nav-items mx-2",direction:"down",children:[Object(l.jsx)(r.E,{className:"c-header-nav-link",caret:!1,children:Object(l.jsx)("div",{className:"c-avatar",children:Object(l.jsx)(r.R,{src:"avatars/9.png",className:"c-avatar-img",alt:"abcd.com"})})}),Object(l.jsx)(r.D,{className:"pt-0",placement:"bottom-end",children:Object(l.jsxs)(r.C,{onClick:function(e){localStorage.clear(),t.push("/login")},children:[Object(l.jsx)(b.a,{name:"cil-lock-locked",className:"mfe-2"}),"Log Out"]})})]})},O=(c(537),c(707))},770:function(e,t,c){"use strict"}}]);
//# sourceMappingURL=21.986e9db0.chunk.js.map