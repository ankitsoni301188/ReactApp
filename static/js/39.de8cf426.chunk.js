(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[39,14],{402:function(e,s,c){"use strict";c.r(s);var a=c(37),t=c.n(a),r=c(57),l=c(723),j=c(703),i=c(1),n=c(15),d=c(21),b=c(97),o=(c(704),c(707),c(706),c(766)),x=(c(59),c(185),c(6)),m=function(e){switch(e){case"Active":return"success";case"Inactive":return"secondary";case"Pending":return"warning";case"Banned":return"danger";default:return"primary"}};s.default=function(e){Object(n.g)();var s=Object(n.h)().search.match(/page=([0-9]+)/,""),c=Number(s&&s[1]?s[1]:1),a=Object(i.useState)(c),h=Object(j.a)(a,2),O=h[0],u=h[1],g=Object(i.useState)([]),p=Object(j.a)(g,2),N=p[0],v=p[1];Object(i.useEffect)((function(){c!==O&&u(c)}),[c,O]),Object(i.useEffect)((function(){e.fetched||f(),console.log("mount it!")}),[]);var f=function(){var e=Object(r.a)(t.a.mark((function e(){var s,c;return t.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s={method:"GET",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"http://localhost:5001"}},c=b.a.SYSTEM_SETTINGS.API_URL+"/format",e.next=4,fetch(c,s).then((function(e){return e.json()})).then((function(e){return b.a.Format1List=e.response}));case 4:console.log("Data"+JSON.stringify(b.a.Format1List));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(d.wb,{children:Object(x.jsx)(d.u,{xl:12,children:Object(x.jsxs)(d.j,{children:[Object(x.jsx)(d.n,{children:Object(x.jsxs)(d.wb,{children:[Object(x.jsx)(d.u,{children:Object(x.jsx)("h5",{children:"Format1 List: "})}),Object(x.jsx)(d.u,{children:Object(x.jsxs)("small",{className:"text-muted",children:["\xa0\xa0\xa0\xa0",Object(x.jsx)(o.CSVLink,{data:b.a.Format1List,filename:"Format1List.csv",className:"btn btn-primary float-right",headers:[{label:"FullName",key:"FullName"},{label:"RegistrationNo",key:"RegistrationNo"},{label:"FatherName",key:"FatherName"},{label:"DOB",key:"DOB"},{label:"MobileNo",key:"MobileNo"},{label:"AadharCardNo",key:"AadharCardNo"},{label:"NomineeName",key:"NomineeName"},{label:"NomineeRelationShip",key:"NomineeRelationShip"},{label:"Village",key:"Village"},{label:"District",key:"District"},{label:"Mandal",key:"Mandal"},{label:"PSBCSRegNo",key:"PSBCSRegNo"},{label:"PSBCSName",key:"PSBCSName"},{label:"SocietyMembershpNo",key:"SocietyMembershpNo"},{label:"VeterinarySergeon",key:"VeterinarySergeon"},{label:"VeterinaryAddress",key:"VeterinaryAddress"},{label:"VASMobileNo",key:"VASMobileNo"},{label:"VASEmail",key:"VASEmail"},{label:"GroudingDate",key:"GroudingDate"},{label:"GroudingPlace",key:"GroudingPlace"},{label:"SheepNos",key:"SheepNos"},{label:"TotalSheepValue",key:"TotalSheepValue"},{label:"InsuracePeriodFrom",key:"InsuracePeriodFrom"},{label:"InsuracePeriodTime",key:"InsuracePeriodTime"},{label:"InsuracePeriodTo",key:"InsuracePeriodTo"}],children:"Download CSV"})]})})]})}),Object(x.jsx)(d.k,{children:Object(x.jsx)(d.y,{items:b.a.Format1List,fields:[{key:"FullName"},{key:"RegistrationNo"},{key:"FatherName"},{key:"DOB"},{key:"MobileNo"},{key:"AadharCardNo"},{key:"NomineeName"},{key:"NomineeRelationShip"},{key:"Village"},{key:"District"},{key:"Mandal"},{key:"show_details",label:"",_style:{width:"1%"},sorter:!1,filter:!1}],tableFilter:!0,itemsPerPageSelect:!0,itemsPerPage:5,hover:!0,sorter:!0,pagination:!0,scopedSlots:{status:function(e){return Object(x.jsx)("td",{children:Object(x.jsx)(d.b,{color:m(e.Status),children:e.status})})},show_details:function(e,s){return Object(x.jsx)("td",{className:"py-2",children:Object(x.jsx)(d.f,{color:"primary",variant:"outline",shape:"square",size:"sm",onClick:function(){!function(e){var s=N.indexOf(e),c=N.slice();-1!==s?c.splice(s,1):c=[].concat(Object(l.a)(N),[e]),v(c)}(s)},show:"false",children:N.includes(s)?"Hide":"Show"})})},details:function(e,s){return Object(x.jsx)(d.v,{show:N.includes(s),children:Object(x.jsxs)(d.k,{children:[Object(x.jsxs)("h4",{children:["PSBCS Reg No:-  ",e.PSBCSRegNo]}),Object(x.jsx)(d.f,{size:"sm",color:"success",children:"Print"}),Object(x.jsx)(d.f,{size:"sm",color:"danger",className:"ml-1",children:"Delete"})]})})}}})})]})})})})}},403:function(e,s){},575:function(e,s,c){"use strict";c.r(s);var a=c(1),t=c(21),r=c(44),l=(c(46),c(749),c(732)),j=c(6),i=(Object(l.getStyle)("success"),Object(l.getStyle)("info"),Object(l.getStyle)("danger"),c(402)),n=(c(403),c(406)),d=Object(a.lazy)((function(){return c.e(38).then(c.bind(null,875))}));s.default=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(d,{}),Object(j.jsx)(i.default,{}),Object(j.jsx)(n.default,{}),Object(j.jsx)(t.wb,{children:Object(j.jsx)(t.u,{children:Object(j.jsxs)(t.j,{children:[Object(j.jsxs)(t.n,{children:["Traffic "," & "," Sales"]}),Object(j.jsxs)(t.k,{children:[Object(j.jsxs)(t.wb,{children:[Object(j.jsxs)(t.u,{xs:"12",md:"6",xl:"6",children:[Object(j.jsxs)(t.wb,{children:[Object(j.jsx)(t.u,{sm:"6",children:Object(j.jsxs)(t.i,{color:"info",children:[Object(j.jsx)("small",{className:"text-muted",children:"New Clients"}),Object(j.jsx)("br",{}),Object(j.jsx)("strong",{className:"h4",children:"9,123"})]})}),Object(j.jsx)(t.u,{sm:"6",children:Object(j.jsxs)(t.i,{color:"danger",children:[Object(j.jsx)("small",{className:"text-muted",children:"Recurring Clients"}),Object(j.jsx)("br",{}),Object(j.jsx)("strong",{className:"h4",children:"22,643"})]})})]}),Object(j.jsx)("hr",{className:"mt-0"}),Object(j.jsxs)("div",{className:"progress-group mb-4",children:[Object(j.jsx)("div",{className:"progress-group-prepend",children:Object(j.jsx)("span",{className:"progress-group-text",children:"Monday"})}),Object(j.jsxs)("div",{className:"progress-group-bars",children:[Object(j.jsx)(t.ub,{className:"progress-xs",color:"info",value:"34"}),Object(j.jsx)(t.ub,{className:"progress-xs",color:"danger",value:"78"})]})]}),Object(j.jsxs)("div",{className:"progress-group mb-4",children:[Object(j.jsx)("div",{className:"progress-group-prepend",children:Object(j.jsx)("span",{className:"progress-group-text",children:"Tuesday"})}),Object(j.jsxs)("div",{className:"progress-group-bars",children:[Object(j.jsx)(t.ub,{className:"progress-xs",color:"info",value:"56"}),Object(j.jsx)(t.ub,{className:"progress-xs",color:"danger",value:"94"})]})]}),Object(j.jsxs)("div",{className:"progress-group mb-4",children:[Object(j.jsx)("div",{className:"progress-group-prepend",children:Object(j.jsx)("span",{className:"progress-group-text",children:"Wednesday"})}),Object(j.jsxs)("div",{className:"progress-group-bars",children:[Object(j.jsx)(t.ub,{className:"progress-xs",color:"info",value:"12"}),Object(j.jsx)(t.ub,{className:"progress-xs",color:"danger",value:"67"})]})]}),Object(j.jsxs)("div",{className:"progress-group mb-4",children:[Object(j.jsx)("div",{className:"progress-group-prepend",children:Object(j.jsx)("span",{className:"progress-group-text",children:"Thursday"})}),Object(j.jsxs)("div",{className:"progress-group-bars",children:[Object(j.jsx)(t.ub,{className:"progress-xs",color:"info",value:"43"}),Object(j.jsx)(t.ub,{className:"progress-xs",color:"danger",value:"91"})]})]}),Object(j.jsxs)("div",{className:"progress-group mb-4",children:[Object(j.jsx)("div",{className:"progress-group-prepend",children:Object(j.jsx)("span",{className:"progress-group-text",children:"Friday"})}),Object(j.jsxs)("div",{className:"progress-group-bars",children:[Object(j.jsx)(t.ub,{className:"progress-xs",color:"info",value:"22"}),Object(j.jsx)(t.ub,{className:"progress-xs",color:"danger",value:"73"})]})]}),Object(j.jsxs)("div",{className:"progress-group mb-4",children:[Object(j.jsx)("div",{className:"progress-group-prepend",children:Object(j.jsx)("span",{className:"progress-group-text",children:"Saturday"})}),Object(j.jsxs)("div",{className:"progress-group-bars",children:[Object(j.jsx)(t.ub,{className:"progress-xs",color:"info",value:"53"}),Object(j.jsx)(t.ub,{className:"progress-xs",color:"danger",value:"82"})]})]}),Object(j.jsxs)("div",{className:"progress-group mb-4",children:[Object(j.jsx)("div",{className:"progress-group-prepend",children:Object(j.jsx)("span",{className:"progress-group-text",children:"Sunday"})}),Object(j.jsxs)("div",{className:"progress-group-bars",children:[Object(j.jsx)(t.ub,{className:"progress-xs",color:"info",value:"9"}),Object(j.jsx)(t.ub,{className:"progress-xs",color:"danger",value:"69"})]})]}),Object(j.jsx)("div",{className:"legend text-center",children:Object(j.jsxs)("small",{children:[Object(j.jsx)("sup",{className:"px-1",children:Object(j.jsx)(t.b,{shape:"pill",color:"info",children:"\xa0"})}),"New clients \xa0",Object(j.jsx)("sup",{className:"px-1",children:Object(j.jsx)(t.b,{shape:"pill",color:"danger",children:"\xa0"})}),"Recurring clients"]})})]}),Object(j.jsxs)(t.u,{xs:"12",md:"6",xl:"6",children:[Object(j.jsxs)(t.wb,{children:[Object(j.jsx)(t.u,{sm:"6",children:Object(j.jsxs)(t.i,{color:"warning",children:[Object(j.jsx)("small",{className:"text-muted",children:"Pageviews"}),Object(j.jsx)("br",{}),Object(j.jsx)("strong",{className:"h4",children:"78,623"})]})}),Object(j.jsx)(t.u,{sm:"6",children:Object(j.jsxs)(t.i,{color:"success",children:[Object(j.jsx)("small",{className:"text-muted",children:"Organic"}),Object(j.jsx)("br",{}),Object(j.jsx)("strong",{className:"h4",children:"49,123"})]})})]}),Object(j.jsx)("hr",{className:"mt-0"}),Object(j.jsxs)("div",{className:"progress-group mb-4",children:[Object(j.jsxs)("div",{className:"progress-group-header",children:[Object(j.jsx)(r.a,{className:"progress-group-icon",name:"cil-user"}),Object(j.jsx)("span",{className:"title",children:"Male"}),Object(j.jsx)("span",{className:"ml-auto font-weight-bold",children:"43%"})]}),Object(j.jsx)("div",{className:"progress-group-bars",children:Object(j.jsx)(t.ub,{className:"progress-xs",color:"warning",value:"43"})})]}),Object(j.jsxs)("div",{className:"progress-group mb-5",children:[Object(j.jsxs)("div",{className:"progress-group-header",children:[Object(j.jsx)(r.a,{className:"progress-group-icon",name:"cil-user-female"}),Object(j.jsx)("span",{className:"title",children:"Female"}),Object(j.jsx)("span",{className:"ml-auto font-weight-bold",children:"37%"})]}),Object(j.jsx)("div",{className:"progress-group-bars",children:Object(j.jsx)(t.ub,{className:"progress-xs",color:"warning",value:"37"})})]}),Object(j.jsxs)("div",{className:"progress-group",children:[Object(j.jsxs)("div",{className:"progress-group-header",children:[Object(j.jsx)(r.a,{className:"progress-group-icon",name:"cil-globe-alt"}),Object(j.jsx)("span",{className:"title",children:"Organic Search"}),Object(j.jsxs)("span",{className:"ml-auto font-weight-bold",children:["191,235 ",Object(j.jsx)("span",{className:"text-muted small",children:"(56%)"})]})]}),Object(j.jsx)("div",{className:"progress-group-bars",children:Object(j.jsx)(t.ub,{className:"progress-xs",color:"success",value:"56"})})]}),Object(j.jsxs)("div",{className:"progress-group",children:[Object(j.jsxs)("div",{className:"progress-group-header",children:[Object(j.jsx)(r.a,{name:"cib-facebook",className:"progress-group-icon"}),Object(j.jsx)("span",{className:"title",children:"Facebook"}),Object(j.jsxs)("span",{className:"ml-auto font-weight-bold",children:["51,223 ",Object(j.jsx)("span",{className:"text-muted small",children:"(15%)"})]})]}),Object(j.jsx)("div",{className:"progress-group-bars",children:Object(j.jsx)(t.ub,{className:"progress-xs",color:"success",value:"15"})})]}),Object(j.jsxs)("div",{className:"progress-group",children:[Object(j.jsxs)("div",{className:"progress-group-header",children:[Object(j.jsx)(r.a,{name:"cib-twitter",className:"progress-group-icon"}),Object(j.jsx)("span",{className:"title",children:"Twitter"}),Object(j.jsxs)("span",{className:"ml-auto font-weight-bold",children:["37,564 ",Object(j.jsx)("span",{className:"text-muted small",children:"(11%)"})]})]}),Object(j.jsx)("div",{className:"progress-group-bars",children:Object(j.jsx)(t.ub,{className:"progress-xs",color:"success",value:"11"})})]}),Object(j.jsxs)("div",{className:"progress-group",children:[Object(j.jsxs)("div",{className:"progress-group-header",children:[Object(j.jsx)(r.a,{name:"cib-linkedin",className:"progress-group-icon"}),Object(j.jsx)("span",{className:"title",children:"LinkedIn"}),Object(j.jsxs)("span",{className:"ml-auto font-weight-bold",children:["27,319 ",Object(j.jsx)("span",{className:"text-muted small",children:"(8%)"})]})]}),Object(j.jsx)("div",{className:"progress-group-bars",children:Object(j.jsx)(t.ub,{className:"progress-xs",color:"success",value:"8"})})]}),Object(j.jsx)("div",{className:"divider text-center",children:Object(j.jsx)(t.f,{color:"link",size:"sm",className:"text-muted",children:Object(j.jsx)(r.a,{name:"cil-options"})})})]})]}),Object(j.jsx)("br",{}),Object(j.jsxs)("table",{className:"table table-hover table-outline mb-0 d-none d-sm-table",children:[Object(j.jsx)("thead",{className:"thead-light",children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{className:"text-center",children:Object(j.jsx)(r.a,{name:"cil-people"})}),Object(j.jsx)("th",{children:"User"}),Object(j.jsx)("th",{className:"text-center",children:"Country"}),Object(j.jsx)("th",{children:"Usage"}),Object(j.jsx)("th",{className:"text-center",children:"Payment Method"}),Object(j.jsx)("th",{children:"Activity"})]})}),Object(j.jsxs)("tbody",{children:[Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{className:"text-center",children:Object(j.jsxs)("div",{className:"c-avatar",children:[Object(j.jsx)("img",{src:"avatars/1.jpg",className:"c-avatar-img",alt:"admin@bootstrapmaster.com"}),Object(j.jsx)("span",{className:"c-avatar-status bg-success"})]})}),Object(j.jsxs)("td",{children:[Object(j.jsx)("div",{children:"Yiorgos Avraamu"}),Object(j.jsxs)("div",{className:"small text-muted",children:[Object(j.jsx)("span",{children:"New"})," | Registered: Jan 1, 2015"]})]}),Object(j.jsx)("td",{className:"text-center",children:Object(j.jsx)(r.a,{height:25,name:"cif-us",title:"us",id:"us"})}),Object(j.jsxs)("td",{children:[Object(j.jsxs)("div",{className:"clearfix",children:[Object(j.jsx)("div",{className:"float-left",children:Object(j.jsx)("strong",{children:"50%"})}),Object(j.jsx)("div",{className:"float-right",children:Object(j.jsx)("small",{className:"text-muted",children:"Jun 11, 2015 - Jul 10, 2015"})})]}),Object(j.jsx)(t.ub,{className:"progress-xs",color:"success",value:"50"})]}),Object(j.jsx)("td",{className:"text-center",children:Object(j.jsx)(r.a,{height:25,name:"cib-cc-mastercard"})}),Object(j.jsxs)("td",{children:[Object(j.jsx)("div",{className:"small text-muted",children:"Last login"}),Object(j.jsx)("strong",{children:"10 sec ago"})]})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{className:"text-center",children:Object(j.jsxs)("div",{className:"c-avatar",children:[Object(j.jsx)("img",{src:"avatars/2.jpg",className:"c-avatar-img",alt:"admin@bootstrapmaster.com"}),Object(j.jsx)("span",{className:"c-avatar-status bg-danger"})]})}),Object(j.jsxs)("td",{children:[Object(j.jsx)("div",{children:"Avram Tarasios"}),Object(j.jsxs)("div",{className:"small text-muted",children:[Object(j.jsx)("span",{children:"Recurring"})," | Registered: Jan 1, 2015"]})]}),Object(j.jsx)("td",{className:"text-center",children:Object(j.jsx)(r.a,{height:25,name:"cif-br",title:"br",id:"br"})}),Object(j.jsxs)("td",{children:[Object(j.jsxs)("div",{className:"clearfix",children:[Object(j.jsx)("div",{className:"float-left",children:Object(j.jsx)("strong",{children:"10%"})}),Object(j.jsx)("div",{className:"float-right",children:Object(j.jsx)("small",{className:"text-muted",children:"Jun 11, 2015 - Jul 10, 2015"})})]}),Object(j.jsx)(t.ub,{className:"progress-xs",color:"info",value:"10"})]}),Object(j.jsx)("td",{className:"text-center",children:Object(j.jsx)(r.a,{height:25,name:"cib-cc-visa"})}),Object(j.jsxs)("td",{children:[Object(j.jsx)("div",{className:"small text-muted",children:"Last login"}),Object(j.jsx)("strong",{children:"5 minutes ago"})]})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{className:"text-center",children:Object(j.jsxs)("div",{className:"c-avatar",children:[Object(j.jsx)("img",{src:"avatars/3.jpg",className:"c-avatar-img",alt:"admin@bootstrapmaster.com"}),Object(j.jsx)("span",{className:"c-avatar-status bg-warning"})]})}),Object(j.jsxs)("td",{children:[Object(j.jsx)("div",{children:"Quintin Ed"}),Object(j.jsxs)("div",{className:"small text-muted",children:[Object(j.jsx)("span",{children:"New"})," | Registered: Jan 1, 2015"]})]}),Object(j.jsx)("td",{className:"text-center",children:Object(j.jsx)(r.a,{height:25,name:"cif-in",title:"in",id:"in"})}),Object(j.jsxs)("td",{children:[Object(j.jsxs)("div",{className:"clearfix",children:[Object(j.jsx)("div",{className:"float-left",children:Object(j.jsx)("strong",{children:"74%"})}),Object(j.jsx)("div",{className:"float-right",children:Object(j.jsx)("small",{className:"text-muted",children:"Jun 11, 2015 - Jul 10, 2015"})})]}),Object(j.jsx)(t.ub,{className:"progress-xs",color:"warning",value:"74"})]}),Object(j.jsx)("td",{className:"text-center",children:Object(j.jsx)(r.a,{height:25,name:"cib-stripe"})}),Object(j.jsxs)("td",{children:[Object(j.jsx)("div",{className:"small text-muted",children:"Last login"}),Object(j.jsx)("strong",{children:"1 hour ago"})]})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{className:"text-center",children:Object(j.jsxs)("div",{className:"c-avatar",children:[Object(j.jsx)("img",{src:"avatars/4.jpg",className:"c-avatar-img",alt:"admin@bootstrapmaster.com"}),Object(j.jsx)("span",{className:"c-avatar-status bg-secondary"})]})}),Object(j.jsxs)("td",{children:[Object(j.jsx)("div",{children:"En\xe9as Kwadwo"}),Object(j.jsxs)("div",{className:"small text-muted",children:[Object(j.jsx)("span",{children:"New"})," | Registered: Jan 1, 2015"]})]}),Object(j.jsx)("td",{className:"text-center",children:Object(j.jsx)(r.a,{height:25,name:"cif-fr",title:"fr",id:"fr"})}),Object(j.jsxs)("td",{children:[Object(j.jsxs)("div",{className:"clearfix",children:[Object(j.jsx)("div",{className:"float-left",children:Object(j.jsx)("strong",{children:"98%"})}),Object(j.jsx)("div",{className:"float-right",children:Object(j.jsx)("small",{className:"text-muted",children:"Jun 11, 2015 - Jul 10, 2015"})})]}),Object(j.jsx)(t.ub,{className:"progress-xs",color:"danger",value:"98"})]}),Object(j.jsx)("td",{className:"text-center",children:Object(j.jsx)(r.a,{height:25,name:"cib-paypal"})}),Object(j.jsxs)("td",{children:[Object(j.jsx)("div",{className:"small text-muted",children:"Last login"}),Object(j.jsx)("strong",{children:"Last month"})]})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{className:"text-center",children:Object(j.jsxs)("div",{className:"c-avatar",children:[Object(j.jsx)("img",{src:"avatars/5.jpg",className:"c-avatar-img",alt:"admin@bootstrapmaster.com"}),Object(j.jsx)("span",{className:"c-avatar-status bg-success"})]})}),Object(j.jsxs)("td",{children:[Object(j.jsx)("div",{children:"Agapetus Tade\xe1\u0161"}),Object(j.jsxs)("div",{className:"small text-muted",children:[Object(j.jsx)("span",{children:"New"})," | Registered: Jan 1, 2015"]})]}),Object(j.jsx)("td",{className:"text-center",children:Object(j.jsx)(r.a,{height:25,name:"cif-es",title:"es",id:"es"})}),Object(j.jsxs)("td",{children:[Object(j.jsxs)("div",{className:"clearfix",children:[Object(j.jsx)("div",{className:"float-left",children:Object(j.jsx)("strong",{children:"22%"})}),Object(j.jsx)("div",{className:"float-right",children:Object(j.jsx)("small",{className:"text-muted",children:"Jun 11, 2015 - Jul 10, 2015"})})]}),Object(j.jsx)(t.ub,{className:"progress-xs",color:"info",value:"22"})]}),Object(j.jsx)("td",{className:"text-center",children:Object(j.jsx)(r.a,{height:25,name:"cib-google-pay"})}),Object(j.jsxs)("td",{children:[Object(j.jsx)("div",{className:"small text-muted",children:"Last login"}),Object(j.jsx)("strong",{children:"Last week"})]})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{className:"text-center",children:Object(j.jsxs)("div",{className:"c-avatar",children:[Object(j.jsx)("img",{src:"avatars/6.jpg",className:"c-avatar-img",alt:"admin@bootstrapmaster.com"}),Object(j.jsx)("span",{className:"c-avatar-status bg-danger"})]})}),Object(j.jsxs)("td",{children:[Object(j.jsx)("div",{children:"Friderik D\xe1vid"}),Object(j.jsxs)("div",{className:"small text-muted",children:[Object(j.jsx)("span",{children:"New"})," | Registered: Jan 1, 2015"]})]}),Object(j.jsx)("td",{className:"text-center",children:Object(j.jsx)(r.a,{height:25,name:"cif-pl",title:"pl",id:"pl"})}),Object(j.jsxs)("td",{children:[Object(j.jsxs)("div",{className:"clearfix",children:[Object(j.jsx)("div",{className:"float-left",children:Object(j.jsx)("strong",{children:"43%"})}),Object(j.jsx)("div",{className:"float-right",children:Object(j.jsx)("small",{className:"text-muted",children:"Jun 11, 2015 - Jul 10, 2015"})})]}),Object(j.jsx)(t.ub,{className:"progress-xs",color:"success",value:"43"})]}),Object(j.jsx)("td",{className:"text-center",children:Object(j.jsx)(r.a,{height:25,name:"cib-cc-amex"})}),Object(j.jsxs)("td",{children:[Object(j.jsx)("div",{className:"small text-muted",children:"Last login"}),Object(j.jsx)("strong",{children:"Yesterday"})]})]})]})]})]})]})})})]})}}}]);
//# sourceMappingURL=39.de8cf426.chunk.js.map