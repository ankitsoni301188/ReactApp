(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[5],{407:function(e,t,a){"use strict";a.r(t);var r=a(46),n=a(38),s=a.n(n),i=a(58),c=a(699),l=a(1),d=a(21),o=a(44),u=a(97),j=(a(738),a(834)),b=a(67),h=a.n(b),m=(a(185),a(6)),O=function(e){var t=Object(l.useState)(e),a=Object(c.a)(t,2),r=a[0],n=a[1];return{value:r,onChange:function(e){n(e.target.value)}}};t.default=function(e){var t=e.match,a=u.a.UserList.find((function(e){return e.Userid.toString()===t.params.id})),n=a?Object.entries(a):[["Userid",Object(m.jsxs)("span",{children:[Object(m.jsx)(o.a,{className:"text-muted",name:"cui-icon-ban"})," Not found"]})]];console.log(n);var b=O(""),g=O(""),x=[{value:1,label:"Active"},{value:0,label:"InActive"}],f=[{value:1,label:"Authorised"},{value:0,label:"Reject"}],v=[{value:1,label:"Admin"},{value:2,label:"SPOC"},{value:3,label:"Insuracnce Company"},{value:5,label:"Data Entry Users"},{value:5,label:"Others"}],p=Object(l.useState)(3),A=Object(c.a)(p,2),S=A[0],w=A[1],U=Object(l.useState)(3),y=Object(c.a)(U,2),C=y[0],M=y[1],P=Object(l.useState)(3),k=Object(c.a)(P,2),D=k[0],N=k[1],E=function(){var e=Object(i.a)(s.a.mark((function e(t){var a,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=new Headers).append("Content-Type","application/json; charset=utf-8"),r={method:"PUT",headers:a,body:t},e.next=5,fetch(u.a.SYSTEM_SETTINGS.API_URL+"/users/updateuser",r).then((function(e){return e.text()})).then((function(e){console.log(e),e&&(h.a.fire({icon:"success",title:"Form Saved"+e,showConfirmButton:!1,timer:1500}),console.log(e))}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)(d.wb,{children:[Object(m.jsx)(d.u,{lg:6,children:Object(m.jsxs)(d.j,{children:[Object(m.jsx)(d.n,{style:{backgroundColor:"purple",textAlign:"center",color:"white",fontWeight:"bold",fontSize:"18px"},children:"Update Login Details"}),Object(m.jsxs)(d.k,{children:[Object(m.jsx)(d.wb,{children:Object(m.jsx)(d.u,{children:Object(m.jsxs)(d.V,{className:"mb-4",children:[Object(m.jsx)(d.X,{children:Object(m.jsx)(d.Y,{children:Object(m.jsx)(o.a,{name:"cil-user",color:"blue"})})}),Object(m.jsx)(d.S,Object(r.a)(Object(r.a)({type:"text"},b),{},{placeholder:"Enter UserName",autoComplete:"new-Landline"}))]})})}),Object(m.jsx)(d.wb,{children:Object(m.jsx)(d.u,{children:Object(m.jsxs)(d.V,{className:"mb-4",children:[Object(m.jsx)(d.X,{children:Object(m.jsx)(d.Y,{children:Object(m.jsx)(o.a,{name:"cil-map"})})}),Object(m.jsx)(d.S,Object(r.a)(Object(r.a)({type:"text"},g),{},{placeholder:"Eneter Password",autoComplete:"new-Landline",maxLength:"10"}))]})})}),Object(m.jsx)(d.wb,{children:Object(m.jsxs)(d.u,{children:[Object(m.jsx)(d.wb,{children:Object(m.jsxs)(d.u,{children:[" ",Object(m.jsx)(j.a,Object(r.a)(Object(r.a)({options:x,placeholder:"Select Active / Inactive the User",value:x.find((function(e){return e.value===C}))},S.value),{},{onChange:function(e,t){M(e.value)}}))]})}),Object(m.jsx)("br",{}),Object(m.jsx)(d.wb,{children:Object(m.jsxs)(d.u,{children:[" ",Object(m.jsx)(j.a,Object(r.a)(Object(r.a)({options:f,placeholder:"Select Authorise / Reject the User",value:f.find((function(e){return e.value===S}))},S.value),{},{onChange:function(e,t){w(e.value)}}))]})}),Object(m.jsx)("br",{}),Object(m.jsx)(d.wb,{children:Object(m.jsxs)(d.u,{children:[" ",Object(m.jsx)(j.a,Object(r.a)(Object(r.a)({options:v,placeholder:"Define the User Role Category ",value:v.find((function(e){return e.value===D}))},S.value),{},{onChange:function(e,t){N(e.value)}}))]})}),Object(m.jsx)("br",{})]})}),Object(m.jsx)(d.wb,{children:Object(m.jsx)(d.u,{md:"12",lg:"12",xl:"12",children:Object(m.jsx)(d.f,{className:"mb-1",color:"success",block:!0,onClick:function(){var e={user_id:a.Userid,user_name:b.value,pswrd:g.value,isAuth:S,isActive:C,roleId:D,updatedBy:1},t=JSON.stringify(e);E(t)},children:"Update User"})})})]})]})}),Object(m.jsx)(d.u,{lg:6,children:Object(m.jsxs)(d.j,{children:[Object(m.jsx)(d.n,{style:{backgroundColor:"navy",textAlign:"center",color:"white",fontWeight:"bold",fontSize:"18px"},children:"User Detail"}),Object(m.jsx)(d.k,{children:Object(m.jsx)("table",{className:"table table-striped table-hover",children:Object(m.jsx)("tbody",{children:n.map((function(e,t){var a=Object(c.a)(e,2),r=a[0],n=a[1];return"Userid"==r||"UpdateDate"==r||"Password"==r||"UpdateDate"==r?null:Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:"".concat(r,":")}),Object(m.jsx)("td",{children:Object(m.jsx)("strong",{children:n})})]},t.toString())}))})})})]})})]})}},738:function(e,t,a){"use strict";t.a=[{id:0,name:"John Doe",registered:"2018/01/01",role:"Guest",status:"Pending"},{id:1,name:"Samppa Nori",registered:"2018/01/01",role:"Member",status:"Active"},{id:2,name:"Estavan Lykos",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:3,name:"Chetan Mohamed",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:4,name:"Derick Maximinus",registered:"2018/03/01",role:"Member",status:"Pending"},{id:5,name:"Friderik D\xe1vid",registered:"2018/01/21",role:"Staff",status:"Active"},{id:6,name:"Yiorgos Avraamu",registered:"2018/01/01",role:"Member",status:"Active"},{id:7,name:"Avram Tarasios",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:8,name:"Quintin Ed",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:9,name:"En\xe9as Kwadwo",registered:"2018/03/01",role:"Member",status:"Pending"},{id:10,name:"Agapetus Tade\xe1\u0161",registered:"2018/01/21",role:"Staff",status:"Active"},{id:11,name:"Carwyn Fachtna",registered:"2018/01/01",role:"Member",status:"Active"},{id:12,name:"Nehemiah Tatius",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:13,name:"Ebbe Gemariah",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:14,name:"Eustorgios Amulius",registered:"2018/03/01",role:"Member",status:"Pending"},{id:15,name:"Leopold G\xe1sp\xe1r",registered:"2018/01/21",role:"Staff",status:"Active"},{id:16,name:"Pompeius Ren\xe9",registered:"2018/01/01",role:"Member",status:"Active"},{id:17,name:"Pa\u0109jo Jadon",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:18,name:"Micheal Mercurius",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:19,name:"Ganesha Dubhghall",registered:"2018/03/01",role:"Member",status:"Pending"},{id:20,name:"Hiroto \u0160imun",registered:"2018/01/21",role:"Staff",status:"Active"},{id:21,name:"Vishnu Serghei",registered:"2018/01/01",role:"Member",status:"Active"},{id:22,name:"Zbyn\u011bk Phoibos",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:23,name:"Aulus Agmundr",registered:"2018/01/01",role:"Member",status:"Pending"},{id:42,name:"Ford Prefect",registered:"2001/05/25",role:"Alien",status:"Don't panic!"}]}}]);
//# sourceMappingURL=5.b7a18263.chunk.js.map