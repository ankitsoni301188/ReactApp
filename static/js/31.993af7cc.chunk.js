(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[31],{531:function(e,t,c){"use strict";c.r(t);var a=c(45),j=c(50),l=c.n(j),s=c(72),n=c(663),r=c(1),i=c(20),b=c(43),o=(c(664),c(16)),O=c(181),d=c(66),x=c.n(d),m=(c(182),c(680),c(6)),h=function(e){var t=Object(r.useState)(e),c=Object(n.a)(t,2),a=c[0],j=c[1];return{value:a,onChange:function(e){j(e.target.value)}}};t.default=function(e){var t=Object(o.g)(),c=Object(o.h)().search.match(/page=([0-9]+)/,""),j=Number(c&&c[1]?c[1]:1),d=Object(r.useState)(j),u=Object(n.a)(d,2),p=u[0],g=u[1],f=Object(r.useState)(0),N=Object(n.a)(f,2),y=(N[0],N[1],h("")),S=h(""),w=h(""),v=h(""),C=h(""),V=h(""),L=h(""),Y=h(""),X=h(""),T=h(""),A=h(""),P=h(""),k=h(""),E=h(""),R=h(""),B=h(""),I=h(""),M=h(""),F=h(""),D=h(""),G=h(""),J=h(""),_=h(""),U=h(""),H=h(""),K=h(""),W=(h(""),h("")),$=h(""),q=(Object(r.useState)(0),function(){var e=Object(s.a)(l.a.mark((function e(){var t,c,a,j;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=new Headers).append("Content-Type","application/json; charset=utf-8"),c={FullName:y.value,RegistrationNo:S.value,FatherName:w.value,Age:v.value,DOB:C.value,MobileNo:V.value,AadharCardNo:L.value,NomineeName:Y.value,NomineeRelationShip:X.value,Village:T.value,District:A.value,Mandal:P.value,PSBCSRegNo:k.value,PSBCSName:E.value,SocietyMembershpNo:R.value,VeterinarySergeon:B.value,VeterinaryAddress:I.value,VASMobileNo:M.value,VASEmail:F.value,GroudingDate:D.value,GroudingPlace:G.value,SheepNos:J.value,TotalSheepValue:_.value,InsuracePeriodFrom:U.value,InsuracePeriodTime:H.value,InsuracePeriodTo:K.value},a=JSON.stringify(c),console.log(a),j={method:"POST",mode:"no-cors",headers:t,body:a},e.next=9,fetch(O.a.SYSTEM_SETTINGS.API_URL+"/format/ins",j).then((function(e){return e.text()})).then((function(e){console.log(e),x.a.fire({icon:"success",title:"Form Saved"+e,showConfirmButton:!1,timer:1500}),console.log(e)}));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()),z=Object(r.useState)(O.a.TagList),Q=Object(n.a)(z,2),Z=Q[0];Q[1];return Object(r.useEffect)((function(){j!==p&&g(j)}),[j,p]),Object(r.useEffect)((function(){}),[O.a.TagList,Z]),Object(m.jsx)("div",{className:"c-app c-default-layout flex-row align-items-center",children:Object(m.jsx)(i.w,{children:Object(m.jsx)(i.wb,{className:"justify-content-center",children:Object(m.jsx)(i.u,{md:"12",lg:"12",xl:"12",children:Object(m.jsx)(i.j,{className:"mx-12",children:Object(m.jsx)(i.k,{className:"p-12",children:Object(m.jsxs)(i.J,{children:[Object(m.jsx)("h4",{className:"align-center",children:"Format1"}),Object(m.jsx)("p",{className:"text-muted"}),Object(m.jsxs)(i.wb,{className:"justify-content-center",children:[Object(m.jsx)(i.u,{md:"4",lg:"4",xl:"4",children:Object(m.jsxs)(i.V,{className:"mb-3",children:[Object(m.jsx)(i.X,{children:Object(m.jsx)(i.Y,{children:Object(m.jsx)(b.a,{name:"cil-user"})})}),Object(m.jsx)(i.S,Object(a.a)(Object(a.a)({type:"text"},y),{},{placeholder:"Full Name of the Beneficiary",autoComplete:""}))]})}),Object(m.jsx)(i.u,{md:"4",lg:"4",xl:"4",children:Object(m.jsxs)(i.V,{className:"mb-3",children:[Object(m.jsx)(i.X,{children:Object(m.jsx)(i.Y,{children:Object(m.jsx)(b.a,{name:"cil-map"})})}),Object(m.jsx)(i.S,Object(a.a)(Object(a.a)({type:"text"},S),{},{placeholder:"Beneficiary Registration No",autoComplete:"email"}))]})}),Object(m.jsx)(i.u,{md:"4",lg:"4",xl:"4",children:Object(m.jsxs)(i.V,{className:"mb-3",children:[Object(m.jsx)(i.X,{children:Object(m.jsx)(i.Y,{children:Object(m.jsx)(b.a,{name:"cil-user"})})}),Object(m.jsx)(i.S,Object(a.a)(Object(a.a)({type:"text"},w),{},{placeholder:"Father's Name",autoComplete:"new-password"}))]})})]}),Object(m.jsxs)(i.wb,{className:"justify-content-center",children:[Object(m.jsx)(i.u,{md:"4",lg:"4",xl:"4",children:Object(m.jsxs)(i.V,{className:"mb-3",children:[Object(m.jsx)(i.X,{children:Object(m.jsx)(i.Y,{children:Object(m.jsx)(b.a,{name:"cil-map"})})}),Object(m.jsx)(i.S,Object(a.a)(Object(a.a)({type:"text"},v),{},{placeholder:"Age",autoComplete:""}))]})}),Object(m.jsx)(i.u,{md:"4",lg:"4",xl:"4",children:Object(m.jsxs)(i.V,{className:"mb-3",children:[Object(m.jsx)(i.X,{children:Object(m.jsx)(i.Y,{children:Object(m.jsx)(b.a,{name:"cil-map"})})}),Object(m.jsx)(i.S,Object(a.a)(Object(a.a)({type:"text"},C),{},{placeholder:"Date of Birth",autoComplete:"email"}))]})}),Object(m.jsx)(i.u,{md:"4",lg:"4",xl:"4",children:Object(m.jsxs)(i.V,{className:"mb-3",children:[Object(m.jsx)(i.X,{children:Object(m.jsx)(i.Y,{children:Object(m.jsx)(b.a,{name:"cil-map"})})}),Object(m.jsx)(i.S,Object(a.a)(Object(a.a)({type:"text"},V),{},{placeholder:"Mobile No.",autoComplete:"new-password"}))]})})]}),Object(m.jsxs)(i.wb,{className:"justify-content-center",children:[Object(m.jsx)(i.u,{md:"4",lg:"4",xl:"4",children:Object(m.jsxs)(i.V,{className:"mb-4",children:[Object(m.jsx)(i.X,{children:Object(m.jsx)(i.Y,{children:Object(m.jsx)(b.a,{name:"cil-map"})})}),Object(m.jsx)(i.S,Object(a.a)(Object(a.a)({type:"text"},L),{},{placeholder:"Aadhar Card no",autoComplete:"new-password",maxLength:"12"}))]})}),Object(m.jsx)(i.u,{md:"4",lg:"4",xl:"4",children:Object(m.jsxs)(i.V,{className:"mb-3",children:[Object(m.jsx)(i.X,{children:Object(m.jsx)(i.Y,{children:Object(m.jsx)(b.a,{name:"cil-map"})})}),Object(m.jsx)(i.S,Object(a.a)(Object(a.a)({type:"text"},Y),{},{placeholder:"Name of the Nominee",autoComplete:"new-password"}))]})}),Object(m.jsx)(i.u,{md:"4",lg:"4",xl:"4",children:Object(m.jsxs)(i.V,{className:"mb-4",children:[Object(m.jsx)(i.X,{children:Object(m.jsx)(i.Y,{children:Object(m.jsx)(b.a,{name:"cil-map"})})}),Object(m.jsx)(i.S,Object(a.a)(Object(a.a)({type:"text"},X),{},{placeholder:"Relationship With Nominee",autoComplete:"new-Address2"}))]})})]}),Object(m.jsxs)(i.wb,{className:"justify-content-center",children:[Object(m.jsx)(i.u,{md:"4",lg:"4",xl:"4",children:Object(m.jsxs)(i.V,{className:"mb-3",children:[Object(m.jsx)(i.X,{children:Object(m.jsx)(i.Y,{children:Object(m.jsx)(b.a,{name:"cil-map"})})}),Object(m.jsx)(i.S,Object(a.a)(Object(a.a)({type:"text"},T),{},{placeholder:"Enter the City/Village",autoComplete:"new-password"}))]})}),Object(m.jsx)(i.u,{md:"4",lg:"4",xl:"4",children:Object(m.jsxs)(i.V,{className:"mb-3",children:[Object(m.jsx)(i.X,{children:Object(m.jsx)(i.Y,{children:Object(m.jsx)(b.a,{name:"cil-map"})})}),Object(m.jsx)(i.S,Object(a.a)(Object(a.a)({type:"text"},A),{},{placeholder:"Enter District",autoComplete:"new-password",maxLength:"10"}))]})}),Object(m.jsx)(i.u,{md:"4",lg:"4",xl:"4",children:Object(m.jsxs)(i.V,{className:"mb-4",children:[Object(m.jsx)(i.X,{children:Object(m.jsx)(i.Y,{children:Object(m.jsx)(b.a,{name:"cil-map"})})}),Object(m.jsx)(i.S,Object(a.a)(Object(a.a)({type:"text"},P),{},{placeholder:"Mandal",autoComplete:"new-Address2"}))]})})]}),Object(m.jsxs)(i.wb,{className:"justify-content-center",children:[Object(m.jsx)(i.u,{md:"4",lg:"4",xl:"4",children:Object(m.jsxs)(i.V,{className:"mb-4",children:[Object(m.jsx)(i.X,{children:Object(m.jsx)(i.Y,{children:Object(m.jsx)(b.a,{name:"cil-map"})})}),Object(m.jsx)(i.S,Object(a.a)(Object(a.a)({type:"text"},k),{},{placeholder:"Enter PSBCS RegNo.",autoComplete:"new-Landline",maxLength:"10"}))]})}),Object(m.jsx)(i.u,{md:"4",lg:"4",xl:"4",children:Object(m.jsxs)(i.V,{className:"mb-3",children:[Object(m.jsx)(i.X,{children:Object(m.jsx)(i.Y,{children:Object(m.jsx)(b.a,{name:"cil-map"})})}),Object(m.jsx)(i.S,Object(a.a)(Object(a.a)({type:"text"},E),{},{placeholder:"Name of the PSBCS",autoComplete:"new-password",maxLength:"10"}))]})}),Object(m.jsx)(i.u,{md:"4",lg:"4",xl:"4",children:Object(m.jsxs)(i.V,{className:"mb-4",children:[Object(m.jsx)(i.X,{children:Object(m.jsx)(i.Y,{children:Object(m.jsx)(b.a,{name:"cil-map"})})}),Object(m.jsx)(i.S,Object(a.a)(Object(a.a)({type:"text"},R),{},{placeholder:"Society Membership No",autoComplete:"new-Landline",maxLength:"10"}))]})})]}),Object(m.jsx)("hr",{}),Object(m.jsxs)(i.wb,{className:"justify-content-center",children:[Object(m.jsx)(i.u,{md:"4",lg:"4",xl:"4",children:Object(m.jsxs)(i.V,{className:"mb-3",children:[Object(m.jsx)(i.X,{children:Object(m.jsx)(i.Y,{children:Object(m.jsx)(b.a,{name:"cil-map"})})}),Object(m.jsx)(i.S,Object(a.a)(Object(a.a)({type:"text"},B),{},{placeholder:"Name of Veterinary Asst. Surgeon",autoComplete:"new-password",maxLength:"10"}))]})}),Object(m.jsx)(i.u,{md:"4",lg:"4",xl:"4",children:Object(m.jsxs)(i.V,{className:"mb-4",children:[Object(m.jsx)(i.X,{children:Object(m.jsx)(i.Y,{children:Object(m.jsx)(b.a,{name:"cil-map"})})}),Object(m.jsx)(i.S,Object(a.a)(Object(a.a)({type:"text"},I),{},{placeholder:"Address of Veterinary Institution",autoComplete:"new-Landline",maxLength:"10"}))]})}),Object(m.jsx)(i.u,{md:"4",lg:"4",xl:"4",children:Object(m.jsxs)(i.V,{className:"mb-3",children:[Object(m.jsx)(i.X,{children:Object(m.jsx)(i.Y,{children:Object(m.jsx)(b.a,{name:"cil-map"})})}),Object(m.jsx)(i.S,Object(a.a)(Object(a.a)({type:"text"},M),{},{placeholder:"Mobile No of Veterinary Sugeron",autoComplete:"new-password",maxLength:"10"}))]})})]}),Object(m.jsxs)(i.wb,{className:"justify-content-center",children:[Object(m.jsx)(i.u,{md:"4",lg:"4",xl:"4",children:Object(m.jsxs)(i.V,{className:"mb-4",children:[Object(m.jsx)(i.X,{children:Object(m.jsx)(i.Y,{children:"@"})}),Object(m.jsx)(i.S,Object(a.a)(Object(a.a)({type:"email"},F),{},{placeholder:"Email Id of Veterinary Sugeron",autoComplete:"new-Landline"}))]})}),Object(m.jsx)(i.u,{md:"4",lg:"4",xl:"4",children:Object(m.jsxs)(i.V,{className:"mb-3",children:[Object(m.jsx)(i.X,{children:Object(m.jsx)(i.Y,{children:Object(m.jsx)(b.a,{name:"cil-map"})})}),Object(m.jsx)(i.S,Object(a.a)(Object(a.a)({type:"text"},D),{},{placeholder:"Date Of Grounding",autoComplete:"new-password",maxLength:"10"}))]})}),Object(m.jsx)(i.u,{md:"4",lg:"4",xl:"4",children:Object(m.jsxs)(i.V,{className:"mb-4",children:[Object(m.jsx)(i.X,{children:Object(m.jsx)(i.Y,{children:Object(m.jsx)(b.a,{name:"cil-map"})})}),Object(m.jsx)(i.S,Object(a.a)(Object(a.a)({type:"text"},G),{},{placeholder:"Place of Grouding",autoComplete:"new-Landline",maxLength:"10"}))]})})]}),Object(m.jsxs)(i.wb,{className:"justify-content-center",children:[Object(m.jsx)(i.u,{md:"3",lg:"3",xl:"3",children:Object(m.jsxs)(i.V,{className:"mb-3",children:[Object(m.jsx)(i.X,{children:Object(m.jsx)(i.Y,{children:Object(m.jsx)(b.a,{name:"cil-map"})})}),Object(m.jsx)(i.S,Object(a.a)(Object(a.a)({type:"text"},J),{},{placeholder:"No of Sheep Produced",autoComplete:"new-password",maxLength:"10"}))]})}),Object(m.jsx)(i.u,{md:"3",lg:"3",xl:"3",children:Object(m.jsxs)(i.V,{className:"mb-4",children:[Object(m.jsx)(i.X,{children:Object(m.jsx)(i.Y,{children:Object(m.jsx)(b.a,{name:"cil-map"})})}),Object(m.jsx)(i.S,Object(a.a)(Object(a.a)({type:"text"},_),{},{placeholder:"Total Value Of Sheep",autoComplete:"new-Landline",maxLength:"10"}))]})}),Object(m.jsx)(i.u,{md:"2",lg:"2",xl:"2",children:Object(m.jsxs)(i.V,{className:"mb-3",children:[Object(m.jsx)(i.X,{children:Object(m.jsx)(i.Y,{children:Object(m.jsx)(b.a,{name:"cil-map"})})}),Object(m.jsx)(i.S,Object(a.a)(Object(a.a)({type:"text"},U),{},{placeholder:"Period From",autoComplete:"new-password",maxLength:"10"}))]})}),Object(m.jsx)(i.u,{md:"2",lg:"2",xl:"2",children:Object(m.jsxs)(i.V,{className:"mb-4",children:[Object(m.jsx)(i.X,{children:Object(m.jsx)(i.Y,{children:Object(m.jsx)(b.a,{name:"cil-map"})})}),Object(m.jsx)(i.S,Object(a.a)(Object(a.a)({type:"text"},H),{},{placeholder:" Validity Time",autoComplete:"new-Landline",maxLength:"10"}))]})}),Object(m.jsx)(i.u,{md:"2",lg:"2",xl:"2",children:Object(m.jsxs)(i.V,{className:"mb-4",children:[Object(m.jsx)(i.X,{children:Object(m.jsx)(i.Y,{children:Object(m.jsx)(b.a,{name:"cil-map"})})}),Object(m.jsx)(i.S,Object(a.a)(Object(a.a)({type:"text"},K),{},{placeholder:"Valid Till Date",autoComplete:"new-Landline",maxLength:"10"}))]})})]}),Object(m.jsx)(i.wb,{md:"12",lg:"12",xl:"12",children:Object(m.jsx)(i.u,{children:Object(m.jsxs)(i.V,{className:"mb-4",children:[Object(m.jsx)(i.X,{children:Object(m.jsx)(i.Y,{children:Object(m.jsx)(b.a,{name:"cil-map"})})}),Object(m.jsx)(i.S,Object(a.a)(Object(a.a)({type:"text"},S),{},{placeholder:"Enter Remark",autoComplete:"new-Landline"}))]})})}),Object(m.jsxs)(i.wb,{children:[Object(m.jsx)(i.u,{children:Object(m.jsxs)(i.V,{className:"mb-4",children:[Object(m.jsx)(i.X,{children:Object(m.jsx)(i.Y,{children:Object(m.jsx)(b.a,{name:"cil-map"})})}),Object(m.jsx)(i.S,Object(a.a)(Object(a.a)({type:"text"},W),{},{placeholder:"Eneter Tag No of Sheep (20 ewes)",autoComplete:"new-Landline"}))]})}),Object(m.jsx)(i.u,{md:"1",lg:"1",xl:"1",children:Object(m.jsx)(i.f,{className:"mb-1",color:"success",block:!0,onClick:function(){if(""===$.value||""===W.value)return x.a.fire({icon:"info",title:"Tag No Cant be Empty",showConfirmButton:!1,timer:1e3}),!1;var e={Sno:O.a.TagList.length+1,RamTagNo:$.value,SheepTagNo:W.value};O.a.TagList.push(e)},children:"OK"})}),Object(m.jsx)(i.u,{children:Object(m.jsxs)(i.V,{className:"mb-4",children:[Object(m.jsx)(i.X,{children:Object(m.jsx)(i.Y,{children:Object(m.jsx)(b.a,{name:"cil-map"})})}),Object(m.jsx)(i.S,Object(a.a)(Object(a.a)({type:"text"},$),{},{placeholder:"Eneter the Ram Tag No.",autoComplete:"new-Landline",maxLength:"10"}))]})})]}),Object(m.jsxs)(i.wb,{children:[Object(m.jsx)(i.y,{items:Z,fields:["Sno",{key:"RamTagNo",_classes:"font-weight-bold"},"SheepTagNo"],hover:!0,striped:!0,itemsPerPage:5,activePage:p,clickableRows:!0,onRowClick:function(e){return t.push("/format1/".concat(e.Sno))},scopedSlots:{status:function(e){return Object(m.jsx)("td",{children:Object(m.jsx)(i.b,{color:"success",children:e.status})})}}}),Object(m.jsx)(i.sb,{activePage:p,onActivePageChange:function(e){j!==e&&t.push("/format1?page=".concat(e))},pages:5,doubleArrows:!1,align:"center"})]}),Object(m.jsxs)(i.wb,{children:[Object(m.jsx)(i.u,{children:Object(m.jsx)(i.f,{color:"success",block:!0,onClick:q,children:"Submit"})}),Object(m.jsx)(i.u,{children:Object(m.jsx)(i.f,{color:"primary",block:!0,children:"Submit And Print"})}),Object(m.jsx)(i.u,{children:Object(m.jsx)(i.f,{color:"danger",block:!0,children:"Reset"})}),Object(m.jsx)(i.u,{children:Object(m.jsx)(i.f,{color:"info",block:!0,onClick:function(){e.history.push("/views/format1list")},children:"Format1 List"})})]})]})})})})})})})}},661:function(e,t,c){"use strict";function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var c=0,a=new Array(t);c<t;c++)a[c]=e[c];return a}c.d(t,"a",(function(){return a}))},662:function(e,t,c){"use strict";c.d(t,"a",(function(){return j}));var a=c(661);function j(e,t){if(e){if("string"===typeof e)return Object(a.a)(e,t);var c=Object.prototype.toString.call(e).slice(8,-1);return"Object"===c&&e.constructor&&(c=e.constructor.name),"Map"===c||"Set"===c?Array.from(e):"Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?Object(a.a)(e,t):void 0}}},663:function(e,t,c){"use strict";c.d(t,"a",(function(){return j}));var a=c(662);function j(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var c=[],a=!0,j=!1,l=void 0;try{for(var s,n=e[Symbol.iterator]();!(a=(s=n.next()).done)&&(c.push(s.value),!t||c.length!==t);a=!0);}catch(r){j=!0,l=r}finally{try{a||null==n.return||n.return()}finally{if(j)throw l}}return c}}(e,t)||Object(a.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},680:function(e,t,c){"use strict"}}]);
//# sourceMappingURL=31.993af7cc.chunk.js.map