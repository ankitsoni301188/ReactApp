(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[23,6,13,14],{402:function(e,s,t){"use strict";t.r(s);var c=t(38),r=t.n(c),a=t(58),n=t(737),l=t(699),i=t(1),o=t(15),d=t(21),j=(t(738),t(97)),b=(t(704),t(710),t(708),t(776)),m=t(6),u=function(e){switch(e){case"Active":return"success";case"Inactive":return"secondary";case"Pending":return"warning";case"Banned":return"danger";default:return"primary"}};s.default=function(e){var s=Object(o.g)(),t=Object(o.h)().search.match(/page=([0-9]+)/,""),c=Number(t&&t[1]?t[1]:1),x=Object(i.useState)(c),h=Object(l.a)(x,2),g=h[0],O=h[1],p=Object(i.useState)([]),N=Object(l.a)(p,2),f=N[0],v=N[1];Object(i.useEffect)((function(){c!==g&&O(c)}),[c,g]),Object(i.useEffect)((function(){e.fetched||k(),console.log("mount it!")}),[]);var y={method:"GET",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"}},k=function(){var e=Object(a.a)(r.a.mark((function e(){var s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=j.a.SYSTEM_SETTINGS.API_URL+"/users",e.next=4,fetch(s,y).then((function(e){return e.json()})).then((function(e){return j.a.UserList=e.response}));case 4:console.log("Data"+JSON.stringify(j.a.UserList));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(d.wb,{children:Object(m.jsx)(d.u,{xl:12,children:Object(m.jsxs)(d.j,{children:[Object(m.jsx)(d.n,{children:Object(m.jsxs)(d.wb,{children:[Object(m.jsx)(d.u,{children:Object(m.jsx)("h5",{children:"Users List: "})}),Object(m.jsx)(d.u,{children:Object(m.jsxs)("small",{className:"text-muted",children:["\xa0\xa0\xa0\xa0",Object(m.jsx)(b.CSVLink,{data:j.a.UserList,filename:"UserList.csv",className:"btn btn-primary float-right",headers:[{label:"UserName",key:"UserName"},{label:"Employee",key:"Employee"},{label:"Designation",key:"Designation"},{label:"PlaceofWorking",key:"PlaceofWorking"},{label:"Mandal",key:"Mandal"},{label:"District",key:"District"},{label:"DateofBirth",key:"DateofBirth"},{label:"Caste",key:"Caste"},{label:"NativeDistrict",key:"NativeDistrict"},{label:"Qualification",key:"Qualification"},{label:"VASAppointmentDate",key:"VASAppointmentDate"},{label:"VASWorkingFrom",key:"VASWorkingFrom"}],children:"Download CSV"})]})})]})}),Object(m.jsx)(d.k,{children:Object(m.jsx)(d.y,{items:j.a.UserList,fields:[{key:"UserName",_style:{width:"40%"}},"Employee",{key:"Designation",_style:{width:"20%"}},{key:"PlaceofWorking",_style:{width:"20%"}},{key:"Mandal",_style:{width:"20%"}},{key:"District",_style:{width:"20%"}},{key:"DateofBirth",_style:{width:"20%"}},{key:"Caste",_style:{width:"20%"}},{key:"NativeDistrict",_style:{width:"20%"}},{key:"Qualification",_style:{width:"20%"}},{key:"VASAppointmentDate",_style:{width:"20%"}},{key:"VASWorkingFrom",_style:{width:"20%"}},{key:"Password",_style:{width:"0%"}},{key:"show_details",label:"",_style:{width:"1%"},sorter:!1,filter:!1}],tableFilter:!0,itemsPerPageSelect:!0,itemsPerPage:5,hover:!0,sorter:!0,pagination:!0,activePage:g,clickableRows:!0,onRowClick:function(e){return s.push("/users/".concat(e.Userid))},scopedSlots:{status:function(e){return Object(m.jsx)("td",{children:Object(m.jsx)(d.b,{color:u(e.Status),children:e.status})})},show_details:function(e,s){return Object(m.jsx)("td",{className:"py-2",children:Object(m.jsx)(d.f,{color:"primary",variant:"outline",shape:"square",size:"sm",onClick:function(){!function(e){var s=f.indexOf(e),t=f.slice();-1!==s?t.splice(s,1):t=[].concat(Object(n.a)(f),[e]),v(t)}(s)},children:f.includes(s)?"Hide":"Show"})})},details:function(e,s){return Object(m.jsx)(d.v,{show:f.includes(s),children:Object(m.jsxs)(d.k,{children:[Object(m.jsx)("h4",{children:e.UserName}),Object(m.jsxs)("p",{className:"text-muted",children:["User since: ",e.Country,"  ",e.Userid]}),Object(m.jsx)(d.f,{size:"sm",color:"success",children:"Approve"}),Object(m.jsx)(d.f,{size:"sm",color:"danger",className:"ml-1",children:"Reject"})]})})}}})})]})})})})}},403:function(e,s,t){"use strict";t.r(s);var c=t(38),r=t.n(c),a=t(58),n=t(737),l=t(699),i=t(1),o=t(15),d=t(21),j=t(97),b=(t(704),t(710),t(708),t(776)),m=(t(67),t(185),t(6)),u=function(e){switch(e){case"Active":return"success";case"Inactive":return"secondary";case"Pending":return"warning";case"Banned":return"danger";default:return"primary"}};s.default=function(e){Object(o.g)();var s=Object(o.h)().search.match(/page=([0-9]+)/,""),t=Number(s&&s[1]?s[1]:1),c=Object(i.useState)(t),x=Object(l.a)(c,2),h=x[0],g=x[1],O=Object(i.useState)([]),p=Object(l.a)(O,2),N=p[0],f=p[1];Object(i.useEffect)((function(){t!==h&&g(t)}),[t,h]),Object(i.useEffect)((function(){e.fetched||v(),console.log("mount it!")}),[]);var v=function(){var e=Object(a.a)(r.a.mark((function e(){var s,t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s={method:"GET",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"http://localhost:5001"}},t=j.a.SYSTEM_SETTINGS.API_URL+"/format",e.next=4,fetch(t,s).then((function(e){return e.json()})).then((function(e){return j.a.Format1List=e.response}));case 4:console.log("Data"+JSON.stringify(j.a.Format1List));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(d.wb,{children:Object(m.jsx)(d.u,{xl:12,children:Object(m.jsxs)(d.j,{children:[Object(m.jsx)(d.n,{children:Object(m.jsxs)(d.wb,{children:[Object(m.jsx)(d.u,{children:Object(m.jsx)("h5",{children:"Format1 List: "})}),Object(m.jsx)(d.u,{children:Object(m.jsxs)("small",{className:"text-muted",children:["\xa0\xa0\xa0\xa0",Object(m.jsx)(b.CSVLink,{data:j.a.Format1List,filename:"Format1List.csv",className:"btn btn-primary float-right",headers:[{label:"FullName",key:"FullName"},{label:"RegistrationNo",key:"RegistrationNo"},{label:"FatherName",key:"FatherName"},{label:"DOB",key:"DOB"},{label:"MobileNo",key:"MobileNo"},{label:"AadharCardNo",key:"AadharCardNo"},{label:"NomineeName",key:"NomineeName"},{label:"NomineeRelationShip",key:"NomineeRelationShip"},{label:"Village",key:"Village"},{label:"District",key:"District"},{label:"Mandal",key:"Mandal"},{label:"PSBCSRegNo",key:"PSBCSRegNo"},{label:"PSBCSName",key:"PSBCSName"},{label:"SocietyMembershpNo",key:"SocietyMembershpNo"},{label:"VeterinarySergeon",key:"VeterinarySergeon"},{label:"VeterinaryAddress",key:"VeterinaryAddress"},{label:"VASMobileNo",key:"VASMobileNo"},{label:"VASEmail",key:"VASEmail"},{label:"GroudingDate",key:"GroudingDate"},{label:"GroudingPlace",key:"GroudingPlace"},{label:"SheepNos",key:"SheepNos"},{label:"TotalSheepValue",key:"TotalSheepValue"},{label:"InsuracePeriodFrom",key:"InsuracePeriodFrom"},{label:"InsuracePeriodTime",key:"InsuracePeriodTime"},{label:"InsuracePeriodTo",key:"InsuracePeriodTo"}],children:"Download CSV"})]})})]})}),Object(m.jsx)(d.k,{children:Object(m.jsx)(d.y,{items:j.a.Format1List,fields:[{key:"FullName"},{key:"RegistrationNo"},{key:"FatherName"},{key:"DOB"},{key:"MobileNo"},{key:"AadharCardNo"},{key:"NomineeName"},{key:"NomineeRelationShip"},{key:"Village"},{key:"District"},{key:"Mandal"},{key:"show_details",label:"",_style:{width:"1%"},sorter:!1,filter:!1}],tableFilter:!0,itemsPerPageSelect:!0,itemsPerPage:5,hover:!0,sorter:!0,pagination:!0,scopedSlots:{status:function(e){return Object(m.jsx)("td",{children:Object(m.jsx)(d.b,{color:u(e.Status),children:e.status})})},show_details:function(e,s){return Object(m.jsx)("td",{className:"py-2",children:Object(m.jsx)(d.f,{color:"primary",variant:"outline",shape:"square",size:"sm",onClick:function(){!function(e){var s=N.indexOf(e),t=N.slice();-1!==s?t.splice(s,1):t=[].concat(Object(n.a)(N),[e]),f(t)}(s)},show:"false",children:N.includes(s)?"Hide":"Show"})})},details:function(e,s){return Object(m.jsx)(d.v,{show:N.includes(s),children:Object(m.jsxs)(d.k,{children:[Object(m.jsxs)("h4",{children:["PSBCS Reg No:-  ",e.PSBCSRegNo]}),Object(m.jsx)(d.f,{size:"sm",color:"success",children:"Print"}),Object(m.jsx)(d.f,{size:"sm",color:"danger",className:"ml-1",children:"Delete"})]})})}}})})]})})})})}},404:function(e,s){},573:function(e,s,t){"use strict";t.r(s);var c=t(1),r=t(21),a=t(44),n=(t(46),t(745),t(728)),l=t(6),i=(Object(n.getStyle)("success"),Object(n.getStyle)("info"),Object(n.getStyle)("danger"),t(403)),o=(t(404),t(402)),d=Object(c.lazy)((function(){return t.e(37).then(t.bind(null,867))}));s.default=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(d,{}),Object(l.jsx)(i.default,{}),Object(l.jsx)(o.default,{}),Object(l.jsx)(r.wb,{children:Object(l.jsx)(r.u,{children:Object(l.jsxs)(r.j,{children:[Object(l.jsxs)(r.n,{children:["Traffic "," & "," Sales"]}),Object(l.jsxs)(r.k,{children:[Object(l.jsxs)(r.wb,{children:[Object(l.jsxs)(r.u,{xs:"12",md:"6",xl:"6",children:[Object(l.jsxs)(r.wb,{children:[Object(l.jsx)(r.u,{sm:"6",children:Object(l.jsxs)(r.i,{color:"info",children:[Object(l.jsx)("small",{className:"text-muted",children:"New Clients"}),Object(l.jsx)("br",{}),Object(l.jsx)("strong",{className:"h4",children:"9,123"})]})}),Object(l.jsx)(r.u,{sm:"6",children:Object(l.jsxs)(r.i,{color:"danger",children:[Object(l.jsx)("small",{className:"text-muted",children:"Recurring Clients"}),Object(l.jsx)("br",{}),Object(l.jsx)("strong",{className:"h4",children:"22,643"})]})})]}),Object(l.jsx)("hr",{className:"mt-0"}),Object(l.jsxs)("div",{className:"progress-group mb-4",children:[Object(l.jsx)("div",{className:"progress-group-prepend",children:Object(l.jsx)("span",{className:"progress-group-text",children:"Monday"})}),Object(l.jsxs)("div",{className:"progress-group-bars",children:[Object(l.jsx)(r.ub,{className:"progress-xs",color:"info",value:"34"}),Object(l.jsx)(r.ub,{className:"progress-xs",color:"danger",value:"78"})]})]}),Object(l.jsxs)("div",{className:"progress-group mb-4",children:[Object(l.jsx)("div",{className:"progress-group-prepend",children:Object(l.jsx)("span",{className:"progress-group-text",children:"Tuesday"})}),Object(l.jsxs)("div",{className:"progress-group-bars",children:[Object(l.jsx)(r.ub,{className:"progress-xs",color:"info",value:"56"}),Object(l.jsx)(r.ub,{className:"progress-xs",color:"danger",value:"94"})]})]}),Object(l.jsxs)("div",{className:"progress-group mb-4",children:[Object(l.jsx)("div",{className:"progress-group-prepend",children:Object(l.jsx)("span",{className:"progress-group-text",children:"Wednesday"})}),Object(l.jsxs)("div",{className:"progress-group-bars",children:[Object(l.jsx)(r.ub,{className:"progress-xs",color:"info",value:"12"}),Object(l.jsx)(r.ub,{className:"progress-xs",color:"danger",value:"67"})]})]}),Object(l.jsxs)("div",{className:"progress-group mb-4",children:[Object(l.jsx)("div",{className:"progress-group-prepend",children:Object(l.jsx)("span",{className:"progress-group-text",children:"Thursday"})}),Object(l.jsxs)("div",{className:"progress-group-bars",children:[Object(l.jsx)(r.ub,{className:"progress-xs",color:"info",value:"43"}),Object(l.jsx)(r.ub,{className:"progress-xs",color:"danger",value:"91"})]})]}),Object(l.jsxs)("div",{className:"progress-group mb-4",children:[Object(l.jsx)("div",{className:"progress-group-prepend",children:Object(l.jsx)("span",{className:"progress-group-text",children:"Friday"})}),Object(l.jsxs)("div",{className:"progress-group-bars",children:[Object(l.jsx)(r.ub,{className:"progress-xs",color:"info",value:"22"}),Object(l.jsx)(r.ub,{className:"progress-xs",color:"danger",value:"73"})]})]}),Object(l.jsxs)("div",{className:"progress-group mb-4",children:[Object(l.jsx)("div",{className:"progress-group-prepend",children:Object(l.jsx)("span",{className:"progress-group-text",children:"Saturday"})}),Object(l.jsxs)("div",{className:"progress-group-bars",children:[Object(l.jsx)(r.ub,{className:"progress-xs",color:"info",value:"53"}),Object(l.jsx)(r.ub,{className:"progress-xs",color:"danger",value:"82"})]})]}),Object(l.jsxs)("div",{className:"progress-group mb-4",children:[Object(l.jsx)("div",{className:"progress-group-prepend",children:Object(l.jsx)("span",{className:"progress-group-text",children:"Sunday"})}),Object(l.jsxs)("div",{className:"progress-group-bars",children:[Object(l.jsx)(r.ub,{className:"progress-xs",color:"info",value:"9"}),Object(l.jsx)(r.ub,{className:"progress-xs",color:"danger",value:"69"})]})]}),Object(l.jsx)("div",{className:"legend text-center",children:Object(l.jsxs)("small",{children:[Object(l.jsx)("sup",{className:"px-1",children:Object(l.jsx)(r.b,{shape:"pill",color:"info",children:"\xa0"})}),"New clients \xa0",Object(l.jsx)("sup",{className:"px-1",children:Object(l.jsx)(r.b,{shape:"pill",color:"danger",children:"\xa0"})}),"Recurring clients"]})})]}),Object(l.jsxs)(r.u,{xs:"12",md:"6",xl:"6",children:[Object(l.jsxs)(r.wb,{children:[Object(l.jsx)(r.u,{sm:"6",children:Object(l.jsxs)(r.i,{color:"warning",children:[Object(l.jsx)("small",{className:"text-muted",children:"Pageviews"}),Object(l.jsx)("br",{}),Object(l.jsx)("strong",{className:"h4",children:"78,623"})]})}),Object(l.jsx)(r.u,{sm:"6",children:Object(l.jsxs)(r.i,{color:"success",children:[Object(l.jsx)("small",{className:"text-muted",children:"Organic"}),Object(l.jsx)("br",{}),Object(l.jsx)("strong",{className:"h4",children:"49,123"})]})})]}),Object(l.jsx)("hr",{className:"mt-0"}),Object(l.jsxs)("div",{className:"progress-group mb-4",children:[Object(l.jsxs)("div",{className:"progress-group-header",children:[Object(l.jsx)(a.a,{className:"progress-group-icon",name:"cil-user"}),Object(l.jsx)("span",{className:"title",children:"Male"}),Object(l.jsx)("span",{className:"ml-auto font-weight-bold",children:"43%"})]}),Object(l.jsx)("div",{className:"progress-group-bars",children:Object(l.jsx)(r.ub,{className:"progress-xs",color:"warning",value:"43"})})]}),Object(l.jsxs)("div",{className:"progress-group mb-5",children:[Object(l.jsxs)("div",{className:"progress-group-header",children:[Object(l.jsx)(a.a,{className:"progress-group-icon",name:"cil-user-female"}),Object(l.jsx)("span",{className:"title",children:"Female"}),Object(l.jsx)("span",{className:"ml-auto font-weight-bold",children:"37%"})]}),Object(l.jsx)("div",{className:"progress-group-bars",children:Object(l.jsx)(r.ub,{className:"progress-xs",color:"warning",value:"37"})})]}),Object(l.jsxs)("div",{className:"progress-group",children:[Object(l.jsxs)("div",{className:"progress-group-header",children:[Object(l.jsx)(a.a,{className:"progress-group-icon",name:"cil-globe-alt"}),Object(l.jsx)("span",{className:"title",children:"Organic Search"}),Object(l.jsxs)("span",{className:"ml-auto font-weight-bold",children:["191,235 ",Object(l.jsx)("span",{className:"text-muted small",children:"(56%)"})]})]}),Object(l.jsx)("div",{className:"progress-group-bars",children:Object(l.jsx)(r.ub,{className:"progress-xs",color:"success",value:"56"})})]}),Object(l.jsxs)("div",{className:"progress-group",children:[Object(l.jsxs)("div",{className:"progress-group-header",children:[Object(l.jsx)(a.a,{name:"cib-facebook",className:"progress-group-icon"}),Object(l.jsx)("span",{className:"title",children:"Facebook"}),Object(l.jsxs)("span",{className:"ml-auto font-weight-bold",children:["51,223 ",Object(l.jsx)("span",{className:"text-muted small",children:"(15%)"})]})]}),Object(l.jsx)("div",{className:"progress-group-bars",children:Object(l.jsx)(r.ub,{className:"progress-xs",color:"success",value:"15"})})]}),Object(l.jsxs)("div",{className:"progress-group",children:[Object(l.jsxs)("div",{className:"progress-group-header",children:[Object(l.jsx)(a.a,{name:"cib-twitter",className:"progress-group-icon"}),Object(l.jsx)("span",{className:"title",children:"Twitter"}),Object(l.jsxs)("span",{className:"ml-auto font-weight-bold",children:["37,564 ",Object(l.jsx)("span",{className:"text-muted small",children:"(11%)"})]})]}),Object(l.jsx)("div",{className:"progress-group-bars",children:Object(l.jsx)(r.ub,{className:"progress-xs",color:"success",value:"11"})})]}),Object(l.jsxs)("div",{className:"progress-group",children:[Object(l.jsxs)("div",{className:"progress-group-header",children:[Object(l.jsx)(a.a,{name:"cib-linkedin",className:"progress-group-icon"}),Object(l.jsx)("span",{className:"title",children:"LinkedIn"}),Object(l.jsxs)("span",{className:"ml-auto font-weight-bold",children:["27,319 ",Object(l.jsx)("span",{className:"text-muted small",children:"(8%)"})]})]}),Object(l.jsx)("div",{className:"progress-group-bars",children:Object(l.jsx)(r.ub,{className:"progress-xs",color:"success",value:"8"})})]}),Object(l.jsx)("div",{className:"divider text-center",children:Object(l.jsx)(r.f,{color:"link",size:"sm",className:"text-muted",children:Object(l.jsx)(a.a,{name:"cil-options"})})})]})]}),Object(l.jsx)("br",{}),Object(l.jsxs)("table",{className:"table table-hover table-outline mb-0 d-none d-sm-table",children:[Object(l.jsx)("thead",{className:"thead-light",children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{className:"text-center",children:Object(l.jsx)(a.a,{name:"cil-people"})}),Object(l.jsx)("th",{children:"User"}),Object(l.jsx)("th",{className:"text-center",children:"Country"}),Object(l.jsx)("th",{children:"Usage"}),Object(l.jsx)("th",{className:"text-center",children:"Payment Method"}),Object(l.jsx)("th",{children:"Activity"})]})}),Object(l.jsxs)("tbody",{children:[Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{className:"text-center",children:Object(l.jsxs)("div",{className:"c-avatar",children:[Object(l.jsx)("img",{src:"avatars/1.jpg",className:"c-avatar-img",alt:"admin@bootstrapmaster.com"}),Object(l.jsx)("span",{className:"c-avatar-status bg-success"})]})}),Object(l.jsxs)("td",{children:[Object(l.jsx)("div",{children:"Yiorgos Avraamu"}),Object(l.jsxs)("div",{className:"small text-muted",children:[Object(l.jsx)("span",{children:"New"})," | Registered: Jan 1, 2015"]})]}),Object(l.jsx)("td",{className:"text-center",children:Object(l.jsx)(a.a,{height:25,name:"cif-us",title:"us",id:"us"})}),Object(l.jsxs)("td",{children:[Object(l.jsxs)("div",{className:"clearfix",children:[Object(l.jsx)("div",{className:"float-left",children:Object(l.jsx)("strong",{children:"50%"})}),Object(l.jsx)("div",{className:"float-right",children:Object(l.jsx)("small",{className:"text-muted",children:"Jun 11, 2015 - Jul 10, 2015"})})]}),Object(l.jsx)(r.ub,{className:"progress-xs",color:"success",value:"50"})]}),Object(l.jsx)("td",{className:"text-center",children:Object(l.jsx)(a.a,{height:25,name:"cib-cc-mastercard"})}),Object(l.jsxs)("td",{children:[Object(l.jsx)("div",{className:"small text-muted",children:"Last login"}),Object(l.jsx)("strong",{children:"10 sec ago"})]})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{className:"text-center",children:Object(l.jsxs)("div",{className:"c-avatar",children:[Object(l.jsx)("img",{src:"avatars/2.jpg",className:"c-avatar-img",alt:"admin@bootstrapmaster.com"}),Object(l.jsx)("span",{className:"c-avatar-status bg-danger"})]})}),Object(l.jsxs)("td",{children:[Object(l.jsx)("div",{children:"Avram Tarasios"}),Object(l.jsxs)("div",{className:"small text-muted",children:[Object(l.jsx)("span",{children:"Recurring"})," | Registered: Jan 1, 2015"]})]}),Object(l.jsx)("td",{className:"text-center",children:Object(l.jsx)(a.a,{height:25,name:"cif-br",title:"br",id:"br"})}),Object(l.jsxs)("td",{children:[Object(l.jsxs)("div",{className:"clearfix",children:[Object(l.jsx)("div",{className:"float-left",children:Object(l.jsx)("strong",{children:"10%"})}),Object(l.jsx)("div",{className:"float-right",children:Object(l.jsx)("small",{className:"text-muted",children:"Jun 11, 2015 - Jul 10, 2015"})})]}),Object(l.jsx)(r.ub,{className:"progress-xs",color:"info",value:"10"})]}),Object(l.jsx)("td",{className:"text-center",children:Object(l.jsx)(a.a,{height:25,name:"cib-cc-visa"})}),Object(l.jsxs)("td",{children:[Object(l.jsx)("div",{className:"small text-muted",children:"Last login"}),Object(l.jsx)("strong",{children:"5 minutes ago"})]})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{className:"text-center",children:Object(l.jsxs)("div",{className:"c-avatar",children:[Object(l.jsx)("img",{src:"avatars/3.jpg",className:"c-avatar-img",alt:"admin@bootstrapmaster.com"}),Object(l.jsx)("span",{className:"c-avatar-status bg-warning"})]})}),Object(l.jsxs)("td",{children:[Object(l.jsx)("div",{children:"Quintin Ed"}),Object(l.jsxs)("div",{className:"small text-muted",children:[Object(l.jsx)("span",{children:"New"})," | Registered: Jan 1, 2015"]})]}),Object(l.jsx)("td",{className:"text-center",children:Object(l.jsx)(a.a,{height:25,name:"cif-in",title:"in",id:"in"})}),Object(l.jsxs)("td",{children:[Object(l.jsxs)("div",{className:"clearfix",children:[Object(l.jsx)("div",{className:"float-left",children:Object(l.jsx)("strong",{children:"74%"})}),Object(l.jsx)("div",{className:"float-right",children:Object(l.jsx)("small",{className:"text-muted",children:"Jun 11, 2015 - Jul 10, 2015"})})]}),Object(l.jsx)(r.ub,{className:"progress-xs",color:"warning",value:"74"})]}),Object(l.jsx)("td",{className:"text-center",children:Object(l.jsx)(a.a,{height:25,name:"cib-stripe"})}),Object(l.jsxs)("td",{children:[Object(l.jsx)("div",{className:"small text-muted",children:"Last login"}),Object(l.jsx)("strong",{children:"1 hour ago"})]})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{className:"text-center",children:Object(l.jsxs)("div",{className:"c-avatar",children:[Object(l.jsx)("img",{src:"avatars/4.jpg",className:"c-avatar-img",alt:"admin@bootstrapmaster.com"}),Object(l.jsx)("span",{className:"c-avatar-status bg-secondary"})]})}),Object(l.jsxs)("td",{children:[Object(l.jsx)("div",{children:"En\xe9as Kwadwo"}),Object(l.jsxs)("div",{className:"small text-muted",children:[Object(l.jsx)("span",{children:"New"})," | Registered: Jan 1, 2015"]})]}),Object(l.jsx)("td",{className:"text-center",children:Object(l.jsx)(a.a,{height:25,name:"cif-fr",title:"fr",id:"fr"})}),Object(l.jsxs)("td",{children:[Object(l.jsxs)("div",{className:"clearfix",children:[Object(l.jsx)("div",{className:"float-left",children:Object(l.jsx)("strong",{children:"98%"})}),Object(l.jsx)("div",{className:"float-right",children:Object(l.jsx)("small",{className:"text-muted",children:"Jun 11, 2015 - Jul 10, 2015"})})]}),Object(l.jsx)(r.ub,{className:"progress-xs",color:"danger",value:"98"})]}),Object(l.jsx)("td",{className:"text-center",children:Object(l.jsx)(a.a,{height:25,name:"cib-paypal"})}),Object(l.jsxs)("td",{children:[Object(l.jsx)("div",{className:"small text-muted",children:"Last login"}),Object(l.jsx)("strong",{children:"Last month"})]})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{className:"text-center",children:Object(l.jsxs)("div",{className:"c-avatar",children:[Object(l.jsx)("img",{src:"avatars/5.jpg",className:"c-avatar-img",alt:"admin@bootstrapmaster.com"}),Object(l.jsx)("span",{className:"c-avatar-status bg-success"})]})}),Object(l.jsxs)("td",{children:[Object(l.jsx)("div",{children:"Agapetus Tade\xe1\u0161"}),Object(l.jsxs)("div",{className:"small text-muted",children:[Object(l.jsx)("span",{children:"New"})," | Registered: Jan 1, 2015"]})]}),Object(l.jsx)("td",{className:"text-center",children:Object(l.jsx)(a.a,{height:25,name:"cif-es",title:"es",id:"es"})}),Object(l.jsxs)("td",{children:[Object(l.jsxs)("div",{className:"clearfix",children:[Object(l.jsx)("div",{className:"float-left",children:Object(l.jsx)("strong",{children:"22%"})}),Object(l.jsx)("div",{className:"float-right",children:Object(l.jsx)("small",{className:"text-muted",children:"Jun 11, 2015 - Jul 10, 2015"})})]}),Object(l.jsx)(r.ub,{className:"progress-xs",color:"info",value:"22"})]}),Object(l.jsx)("td",{className:"text-center",children:Object(l.jsx)(a.a,{height:25,name:"cib-google-pay"})}),Object(l.jsxs)("td",{children:[Object(l.jsx)("div",{className:"small text-muted",children:"Last login"}),Object(l.jsx)("strong",{children:"Last week"})]})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{className:"text-center",children:Object(l.jsxs)("div",{className:"c-avatar",children:[Object(l.jsx)("img",{src:"avatars/6.jpg",className:"c-avatar-img",alt:"admin@bootstrapmaster.com"}),Object(l.jsx)("span",{className:"c-avatar-status bg-danger"})]})}),Object(l.jsxs)("td",{children:[Object(l.jsx)("div",{children:"Friderik D\xe1vid"}),Object(l.jsxs)("div",{className:"small text-muted",children:[Object(l.jsx)("span",{children:"New"})," | Registered: Jan 1, 2015"]})]}),Object(l.jsx)("td",{className:"text-center",children:Object(l.jsx)(a.a,{height:25,name:"cif-pl",title:"pl",id:"pl"})}),Object(l.jsxs)("td",{children:[Object(l.jsxs)("div",{className:"clearfix",children:[Object(l.jsx)("div",{className:"float-left",children:Object(l.jsx)("strong",{children:"43%"})}),Object(l.jsx)("div",{className:"float-right",children:Object(l.jsx)("small",{className:"text-muted",children:"Jun 11, 2015 - Jul 10, 2015"})})]}),Object(l.jsx)(r.ub,{className:"progress-xs",color:"success",value:"43"})]}),Object(l.jsx)("td",{className:"text-center",children:Object(l.jsx)(a.a,{height:25,name:"cib-cc-amex"})}),Object(l.jsxs)("td",{children:[Object(l.jsx)("div",{className:"small text-muted",children:"Last login"}),Object(l.jsx)("strong",{children:"Yesterday"})]})]})]})]})]})]})})})]})}},728:function(e,s){!function(e,s){for(var t in s)e[t]=s[t]}(s,function(e){var s={};function t(c){if(s[c])return s[c].exports;var r=s[c]={i:c,l:!1,exports:{}};return e[c].call(r.exports,r,r.exports,t),r.l=!0,r.exports}return t.m=e,t.c=s,t.d=function(e,s,c){t.o(e,s)||Object.defineProperty(e,s,{enumerable:!0,get:c})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,s){if(1&s&&(e=t(e)),8&s)return e;if(4&s&&"object"==typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(t.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&s&&"string"!=typeof e)for(var r in e)t.d(c,r,function(s){return e[s]}.bind(null,r));return c},t.n=function(e){var s=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(s,"a",s),s},t.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)},t.p="",t(t.s=0)}([function(e,s,t){"use strict";t.r(s),t.d(s,"deepObjectsMerge",(function(){return c})),t.d(s,"getColor",(function(){return i})),t.d(s,"getStyle",(function(){return l})),t.d(s,"hexToRgb",(function(){return o})),t.d(s,"hexToRgba",(function(){return d})),t.d(s,"makeUid",(function(){return j})),t.d(s,"omitByKeys",(function(){return b})),t.d(s,"pickByKeys",(function(){return m})),t.d(s,"rgbToHex",(function(){return u}));var c=function e(s,t){for(var c=0,r=Object.keys(t);c<r.length;c++){var a=r[c];t[a]instanceof Object&&Object.assign(t[a],e(s[a],t[a]))}return Object.assign(s||{},t),s},r=function(){for(var e={},s=document.styleSheets,t="",c=s.length-1;c>-1;c--){for(var r=s[c].cssRules,a=r.length-1;a>-1;a--)if(".ie-custom-properties"===r[a].selectorText){t=r[a].cssText;break}if(t)break}return(t=t.substring(t.lastIndexOf("{")+1,t.lastIndexOf("}"))).split(";").forEach((function(s){if(s){var t=s.split(": ")[0],c=s.split(": ")[1];t&&c&&(e["--".concat(t.trim())]=c.trim())}})),e},a=function(){return Boolean(document.documentMode)&&document.documentMode>=10},n=function(e){return e.match(/^--.*/i)},l=function(e){var s,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body;if(n(e)&&a()){var c=r();s=c[e]}else s=window.getComputedStyle(t,null).getPropertyValue(e).replace(/^\s/,"");return s},i=function(e){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body,t="--".concat(e),c=l(t,s);return c||e},o=function(e){if(void 0===e)throw new TypeError("Hex color is not defined");var s,t,c;if(!e.match(/^#(?:[0-9a-f]{3}){1,2}$/i))throw new Error("".concat(e," is not a valid hex color"));return 7===e.length?(s=parseInt(e.slice(1,3),16),t=parseInt(e.slice(3,5),16),c=parseInt(e.slice(5,7),16)):(s=parseInt(e.slice(1,2),16),t=parseInt(e.slice(2,3),16),c=parseInt(e.slice(3,5),16)),"rgba(".concat(s,", ").concat(t,", ").concat(c,")")},d=function(e){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;if(void 0===e)throw new TypeError("Hex color is not defined");var t,c,r,a=e.match(/^#(?:[0-9a-f]{3}){1,2}$/i);if(!a)throw new Error("".concat(e," is not a valid hex color"));return 7===e.length?(t=parseInt(e.slice(1,3),16),c=parseInt(e.slice(3,5),16),r=parseInt(e.slice(5,7),16)):(t=parseInt(e.slice(1,2),16),c=parseInt(e.slice(2,3),16),r=parseInt(e.slice(3,5),16)),"rgba(".concat(t,", ").concat(c,", ").concat(r,", ").concat(s/100,")")},j=function(){return"uid-"+Math.random().toString(36).substr(2)},b=function(e,s){for(var t={},c=Object.keys(e),r=0;r<c.length;r++)!s.includes(c[r])&&(t[c[r]]=e[c[r]]);return t},m=function(e,s){for(var t={},c=0;c<s.length;c++)t[s[c]]=e[s[c]];return t},u=function(e){if(void 0===e)throw new TypeError("Hex color is not defined");if("transparent"===e)return"#00000000";var s=e.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);if(!s)throw new Error("".concat(e," is not a valid rgb color"));var t="0".concat(parseInt(s[1],10).toString(16)),c="0".concat(parseInt(s[2],10).toString(16)),r="0".concat(parseInt(s[3],10).toString(16));return"#".concat(t.slice(-2)).concat(c.slice(-2)).concat(r.slice(-2))},x={deepObjectsMerge:c,getColor:i,getStyle:l,hexToRgb:o,hexToRgba:d,makeUid:j,omitByKeys:b,pickByKeys:m,rgbToHex:u};s.default=x}]))},738:function(e,s,t){"use strict";s.a=[{id:0,name:"John Doe",registered:"2018/01/01",role:"Guest",status:"Pending"},{id:1,name:"Samppa Nori",registered:"2018/01/01",role:"Member",status:"Active"},{id:2,name:"Estavan Lykos",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:3,name:"Chetan Mohamed",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:4,name:"Derick Maximinus",registered:"2018/03/01",role:"Member",status:"Pending"},{id:5,name:"Friderik D\xe1vid",registered:"2018/01/21",role:"Staff",status:"Active"},{id:6,name:"Yiorgos Avraamu",registered:"2018/01/01",role:"Member",status:"Active"},{id:7,name:"Avram Tarasios",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:8,name:"Quintin Ed",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:9,name:"En\xe9as Kwadwo",registered:"2018/03/01",role:"Member",status:"Pending"},{id:10,name:"Agapetus Tade\xe1\u0161",registered:"2018/01/21",role:"Staff",status:"Active"},{id:11,name:"Carwyn Fachtna",registered:"2018/01/01",role:"Member",status:"Active"},{id:12,name:"Nehemiah Tatius",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:13,name:"Ebbe Gemariah",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:14,name:"Eustorgios Amulius",registered:"2018/03/01",role:"Member",status:"Pending"},{id:15,name:"Leopold G\xe1sp\xe1r",registered:"2018/01/21",role:"Staff",status:"Active"},{id:16,name:"Pompeius Ren\xe9",registered:"2018/01/01",role:"Member",status:"Active"},{id:17,name:"Pa\u0109jo Jadon",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:18,name:"Micheal Mercurius",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:19,name:"Ganesha Dubhghall",registered:"2018/03/01",role:"Member",status:"Pending"},{id:20,name:"Hiroto \u0160imun",registered:"2018/01/21",role:"Staff",status:"Active"},{id:21,name:"Vishnu Serghei",registered:"2018/01/01",role:"Member",status:"Active"},{id:22,name:"Zbyn\u011bk Phoibos",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:23,name:"Aulus Agmundr",registered:"2018/01/01",role:"Member",status:"Pending"},{id:42,name:"Ford Prefect",registered:"2001/05/25",role:"Alien",status:"Don't panic!"}]}}]);
//# sourceMappingURL=23.e88a1e85.chunk.js.map