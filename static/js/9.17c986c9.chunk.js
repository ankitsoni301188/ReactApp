(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[9,12],{408:function(e,t,a){"use strict";a.r(t);var c=a(46),s=a(38),n=a.n(s),l=a(58),r=a(699),i=a(1),o=a(21),d=a(44),j=(a(704),a(15)),b=a(97),m=a(67),h=a.n(m),x=(a(185),a(800),a(933),a(916)),O=a(981),u=a(806),p=a.n(u),g=(a(984),a(993),a(994)),f=a.n(g),N=(a(995),a(6)),v=function(e){var t=Object(i.useState)(e),a=Object(r.a)(t,2),c=a[0],s=a[1];return{value:c,onChange:function(e){s(e.target.value)}}};t.default=function(e){var t=Object(j.g)(),a=Object(j.h)().search.match(/page=([0-9]+)/,""),s=Number(a&&a[1]?a[1]:1),m=Object(i.useState)(0),u=Object(r.a)(m,2),g=u[0],w=u[1],S=Object(i.useState)(s),C=Object(r.a)(S,2),y=C[0],V=C[1],A=Object(i.useState)(0),T=Object(r.a)(A,2),F=T[0],I=(T[1],v("")),D=v(""),Y=v(""),k=v(""),M=v(""),L=v(""),P=v(""),E=v(""),R=v(""),B=v(""),G=v(""),U=v(""),X=v(""),H=v(""),z=v(""),_=v(""),J=v(""),Q=v(""),W=v(""),K=v(""),q=v(""),Z=v(""),$=v(""),ee=v(""),te=v(""),ae=(v(""),Object(i.useState)(0),v("")),ce=v(""),se=v(""),ne=v(""),le=Object(i.useState)(new Date),re=Object(r.a)(le,2),ie=re[0],oe=(re[1],Object(i.useState)(new Date)),de=Object(r.a)(oe,2),je=(de[0],de[1],Object(i.useState)(new Date)),be=Object(r.a)(je,2),me=(be[0],be[1],[{value:"M",label:"Male"},{value:"F",label:"Female"}]),he=Object(i.useState)(Oe),xe=Object(r.a)(he,2),Oe=xe[0],ue=xe[1],pe=Object(i.useState)(fe),ge=Object(r.a)(pe,2),fe=ge[0],Ne=ge[1],ve=Object(i.useState)(Se),we=Object(r.a)(ve,2),Se=we[0],Ce=we[1],ye=Object(i.useState)(Ae),Ve=Object(r.a)(ye,2),Ae=Ve[0],Te=Ve[1],Fe=function(){var e=Object(l.a)(n.a.mark((function e(){var t,a,c,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=new Headers).append("Content-Type","application/json; charset=utf-8"),t.append("Access-Control-Allow-Origin","*"),a={FullName:I.value,RegistrationNo:D.value,FatherName:Y.value,Age:k.value,DOB:ie,MobileNo:L.value,AadharCardNo:P.value,NomineeName:E.value,NomineeRelationShip:R.value,Village:Se,District:Oe,Mandal:fe,PSBCSRegNo:B.value,PSBCSName:G.value,SocietyMembershpNo:U.value,VeterinarySergeon:X.value,VeterinaryAddress:H.value,VASMobileNo:z.value,VASEmail:_.value,GroudingDate:J.value,GroudingPlace:Q.value,SheepNos:W.value,TotalSheepValue:K.value,InsuracePeriodFrom:q.value,InsuracePeriodTime:Z.value,InsuracePeriodTo:$.value,TagDetails:Ae},c=JSON.stringify(a),console.log(c),s={method:"POST",mode:"cors",headers:t,body:c},e.next=10,fetch(b.a.SYSTEM_SETTINGS.API_URL+"/format/ins",s).then((function(e){return e.json()})).then((function(e){console.log(e),F=e.id,e&&(h.a.fire({icon:"success",title:"Form No "+e.id+" Saved",showConfirmButton:!1,timer:1500}),console.log(e))})).catch((function(e){return console.log("error",e)}));case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Ie=function(){var e=Object(l.a)(n.a.mark((function e(){var t,a,c;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return new O.a,t=window.open("","PRINT","height=750,width=700,top=100,left=150"),b.a.Format1obj=[],a={method:"GET",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"http://localhost:5001"}},c=b.a.SYSTEM_SETTINGS.API_URL+"/format/"+F,e.next=8,fetch(c,a).then((function(e){return e.json()})).then((function(e){return b.a.Format1obj=e}));case 8:console.log(JSON.stringify(b.a.Format1obj.length)),null!==b.a.Format1obj&&(t.document.write('<!doctype html><html><head><meta charset="utf-8"><title>Format-1</title><style>.invoice-box {max-width: 100%;margin: auto;padding: 0px;border: 1px solid #eee;box-shadow: 0 0 10px rgba(0, 0, 0, .15); font-size: 16px;line-height: 24px;font-family: "Helvetica Neue", "Helvetica", Helvetica, Arial, sans-serif;color: #555;   }.invoice-box table {width: 100%; line-height: inherit;text-align: left;}.invoice-box table td { padding: 0px;vertical-align: top;}.invoice-box table tr td:nth-child(2) {text-align: right;}.invoice-box table tr.top table td {padding-bottom: 0px;}.invoice-box table tr.top table td.title {font-size: 45px;line-height: 45px;color: #333;}.invoice-box table tr.information table td {padding-bottom: 40px;}.invoice-box table tr.heading td {background: #eee;border-bottom: 1px solid #ddd;font-weight: bold;}.invoice-box table tr.details td {padding-bottom: 0px;}.invoice-box table tr.item td{ border-bottom: 1px solid #eee;}.invoice-box table tr.item.last td {border-bottom: none;}.invoice-box table tr.total td:nth-child(2) {border-top: 2px solid #eee;font-weight: bold;} @media only screen and (max-width: 600px) {.invoice-box table tr.top table td {width: 100%;display: block;text-align: center;}.invoice-box table tr.information table td {width: 100%;display: block;text-align: center;}}   /** RTL **/.rtl {direction: rtl;font-family: Tahoma, "Helvetica Neue", "Helvetica", Helvetica, Arial, sans-serif;}.rtl table {text-align: right;}.rtl table tr td:nth-child(2) {text-align: left; table, th, td { border: 1px solid ;}}</style></head><body><div class="invoice-box"><div style="text-align:center;"><h4>UNITED INDIA INSURANCE COMPANY LIMITED</br> D.O.IX, UIIC TOWERS, BASHEERBAGH, HYDERABAD-500029 </br> TSSGDCFL SHEEP INSURANCE MASTER POLICY NO .... /UIIC2021</br> CERTIFICATE OF INSURANCE No</h4> </div><hr></hr><table><tr class="heading"><td>Insurance No : '+b.a.Format1obj[0].RegistrationNo+" ("+b.a.Format1obj[0].id+')</br></td><td>Insurance Date :30/July/2022 </br></td></tr></table><table cellpadding="0" cellspacing="0"><tr class="top"><td colspan="2"><table><tr ><td colspan="2"></td></tr><tr class="heading"><td>Beneficiary Detail</td><td></td></tr><tr  style="0 !important;margin: 0 !important; border-collapse: collapse; border: 1px solid Black;"><td style="text-align:left;"><table ><tr><td width="50%" >Beneficiary Name:</td><td width="50%">'+b.a.Format1obj[0].FullName+'</td></tr><tr><td width="50%">Father Name:</td><td width="50%">'+b.a.Format1obj[0].FatherName+'</td></tr><tr><td width="50%">Moble No:</td><td width="50%">'+b.a.Format1obj[0].MobileNo+'</td></tr><tr><td width="50%">Nominee Name:</td><td width="50%">'+b.a.Format1obj[0].NomineeName+'</td></tr><tr><td width="50%">Village:</td><td width="50%">'+b.a.Format1obj[0].VillageName+'</td></tr><tr><td width="50%">District:</td><td width="50%">'+b.a.Format1obj[0].DistrictName+'</td></tr><tr><td width="50%">PSBCS Name:</td><td width="50%">'+b.a.Format1obj[0].PSBCSName+'</td></tr></table> </td><td style="text-align:left;"><table><tr><td width="50%">Beneficiary Reg No. :</td><td width="50%" >'+b.a.Format1obj[0].PSBCSName+'</td></tr><tr><td width="50%" >Age/DOB:</td><td width="50%" >'+b.a.Format1obj[0].Age+" / "+p()(b.a.Format1obj[0].DOB).format("DD MMM YYYY")+'</td></tr><tr><td width="50%" >AadharCard No:</td><td width="50%" >'+b.a.Format1obj[0].AadharCardNo+'</td></tr><tr><td width="50%" >RelationShip With Nominee:</td><td width="50%" >'+b.a.Format1obj[0].NomineeRelationShip+'</td></tr><tr><td width="50%" >Mandal:</td><td width="50%" >'+b.a.Format1obj[0].MandalName+'</td></tr><tr><td width="50%" >PSBCS Reg No:</td><td width="50%" >'+b.a.Format1obj[0].PSBCSRegNo+'</td></tr><tr><td width="50%" >SocietyMembership No:</td><td width="50%" >'+b.a.Format1obj[0].SocietyMembershpNo+'</td></tr></table></td></tr></table></td></tr><tr class="heading"><td> VAS Detail</td><td></td></tr><tr><td style="text-align:left;"><table ><tr><td width="50%" >VAS Name:</td><td width="50%">'+b.a.Format1obj[0].VeterinarySergeon+'</td></tr><tr><td width="50%">VAS MobileNo:</td><td width="50%">'+b.a.Format1obj[0].VASMobileNo+'</td></tr><tr><td width="50%">Grounding Date:</td><td width="50%">'+p()(b.a.Format1obj[0].GroudingDate).format("DD MMM YYYY")+'</td></tr><tr><td width="50%">Sheep Produced NOS:</td><td width="50%">'+b.a.Format1obj[0].SheepNos+'</td></table> </td><td style="text-align:left;"><table ><tr><td width="50%" >VAS Institution Address:</td><td width="50%">'+b.a.Format1obj[0].VeterinaryAddress+'</td></tr><tr><td width="50%">VAS Email:</td><td width="50%">'+b.a.Format1obj[0].VASEmail+'</td></tr><tr><td width="50%">Grounding Place:</td><td width="50%">'+b.a.Format1obj[0].GroudingPlace+'</td></tr><tr><td width="50%">Insurance Period(1 Year):</td><td width="50%">From: '+p()(b.a.Format1obj[0].InsuracePeriodFrom).format("DD MMM YYYY")+"</br> To: "+p()(b.a.Format1obj[0].InsuracePeriodTo).format("DD MMM YYYY")+'</td></tr></table> </td></tr><tr class="heading"><td> TAG Nos of Sheep (20 ewes)</td><td>Ram Tag No:</td></tr><tr><td style="text-align:left;">'+b.a.Format1obj[0].RamTagNo+' </td></tr><tr class="heading"><td>Item</td><td>Price</td></tr><tr class="item"><td><b>Total Amount of Sheep Produced</b></td><td><b>&#8377;'+b.a.Format1obj[0].TotalSheepValue+'</b></td></tr><tr class="total"><td><b>'+f.a.toWords(b.a.Format1obj[0].TotalSheepValue)+"/-</b></td><td>Total: &#8377;"+b.a.Format1obj[0].TotalSheepValue+'</td></tr></table><div style="padding-left:20px;"><p><i>I hereby certify that the above details are true to the best of our knowledge and all the above </br> sheep are healty & fit for insurance. I hereby certify that all the sheep are properly tagged with </br> the above members for uploading in to the software application. I have also counter signed the </br>  certificate of Insurance with above date.  </i></p></div><table><tr><td><b></br></b></td><td></td></tr><tr ><td><b>Signature of Beneficciary</b></td><td><b>Signature of VAS with seal </b></td></tr></table><div style="padding-left:20px;"><p><i> The above animals are insured from the above place of purchase till reaches destination </br> mentioned in this certificate of insurance and also for a period of one year from the date of  </br> purchase mentioned above.(Valida only when counter signed by VAS at the time of grounding the  </br> scheme).  </i></p></div><table><tr><td><b></br></br></b></td><td></td></tr><tr ><td><b>Facsimille signature: </b> </br><b>For United India Insurance Company Ltd, </b> </br><b>(Authorised Signatory)</b> </br></td><td></td></tr></table></div></body></html>'),t.document.close(),t.focus(),t.print(),t.close());case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),De=function(e){s!==e&&t.push("/views/format1?page=".concat(e))},Ye=Object(i.useState)(3),ke=Object(r.a)(Ye,2),Me=ke[0],Le=ke[1],Pe=function(e){ae=e.value,console.log(ce),Le(ce)};Object(i.useEffect)((function(){e.fetched||Re()}),[]);var Ee={method:"GET",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"}},Re=function(){var e=Object(l.a)(n.a.mark((function e(){var t,a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],a=b.a.SYSTEM_SETTINGS.API_URL+"/common/District",e.next=4,fetch(a,Ee).then((function(e){return e.json()})).then((function(e){return t=e.response}));case 4:b.a.District=t;case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Be=function(){var e=Object(l.a)(n.a.mark((function e(t){var a,c,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=new Headers).append("Content-Type","application/json; charset=utf-8"),a.append("Access-Control-Allow-Origin","*"),c=[],s=b.a.SYSTEM_SETTINGS.API_URL+"/common/Mandal/"+t,e.next=8,fetch(s,a).then((function(e){return e.json()})).then((function(e){return c=e}));case 8:De(),b.a.Mandal=c,De();case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Ge=function(){var e=Object(l.a)(n.a.mark((function e(t){var a,c,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b.a.Village=[],(a=new Headers).append("Content-Type","application/json; charset=utf-8"),a.append("Access-Control-Allow-Origin","*"),c=[],s=b.a.SYSTEM_SETTINGS.API_URL+"/common/Village/"+t,e.next=9,fetch(s,a).then((function(e){return e.json()})).then((function(e){return c=e}));case 9:b.a.Village=c,De(),b.a.Village=c,De();case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){w(b.a.TagList),De()}),[g]),Object(i.useEffect)((function(){Le(Me),De()}),[Me]),Object(i.useEffect)((function(){s!==y&&V(s)}),[s,y]),Object(N.jsx)("div",{className:"c-app c-default-layout flex-row align-items-center",children:Object(N.jsx)(o.w,{children:Object(N.jsx)(o.wb,{className:"justify-content-center",children:Object(N.jsx)(o.u,{md:"12",lg:"12",xl:"12",children:Object(N.jsx)(o.j,{className:"mx-12",children:Object(N.jsx)(o.k,{className:"p-12",children:Object(N.jsxs)(o.J,{children:[Object(N.jsx)("h4",{className:"align-center",children:"Format1"}),Object(N.jsx)("p",{className:"text-muted"}),Object(N.jsxs)(o.wb,{className:"justify-content-center",children:[Object(N.jsx)(o.u,{md:"4",lg:"4",xl:"4",children:Object(N.jsxs)(o.V,{className:"mb-3",children:[Object(N.jsx)(o.X,{children:Object(N.jsx)(o.Y,{children:Object(N.jsx)(d.a,{name:"cil-user"})})}),Object(N.jsx)(o.S,Object(c.a)(Object(c.a)({type:"text"},I),{},{placeholder:"Full Name of the Beneficiary",autoComplete:""}))]})}),Object(N.jsx)(o.u,{md:"4",lg:"4",xl:"4",children:Object(N.jsxs)(o.V,{className:"mb-3",children:[Object(N.jsx)(o.X,{children:Object(N.jsx)(o.Y,{children:Object(N.jsx)(d.a,{name:"cil-map"})})}),Object(N.jsx)(o.S,Object(c.a)(Object(c.a)({type:"text"},D),{},{placeholder:"Beneficiary Registration No",autoComplete:"email"}))]})}),Object(N.jsx)(o.u,{md:"4",lg:"4",xl:"4",children:Object(N.jsxs)(o.V,{className:"mb-3",children:[Object(N.jsx)(o.X,{children:Object(N.jsx)(o.Y,{children:Object(N.jsx)(d.a,{name:"cil-user"})})}),Object(N.jsx)(o.S,Object(c.a)(Object(c.a)({type:"text"},Y),{},{placeholder:"Father's Name",autoComplete:"new-password"}))]})})]}),Object(N.jsxs)(o.wb,{className:"justify-content-center",children:[Object(N.jsx)(o.u,{md:"4",lg:"4",xl:"4",children:Object(N.jsxs)(o.V,{className:"mb-3",children:[Object(N.jsx)(o.X,{children:Object(N.jsx)(o.Y,{children:Object(N.jsx)(d.a,{name:"cil-map"})})}),Object(N.jsx)(o.S,Object(c.a)(Object(c.a)({type:"text"},k),{},{placeholder:"Age",autoComplete:""}))]})}),Object(N.jsx)(o.u,{md:"4",lg:"4",xl:"4",children:Object(N.jsxs)(o.V,{className:"mb-3",children:[Object(N.jsx)(o.X,{children:Object(N.jsx)(o.Y,{children:Object(N.jsx)(d.a,{name:"cil-map"})})}),Object(N.jsx)(o.S,Object(c.a)(Object(c.a)({type:"date"},M),{},{placeholder:"Date of Birth ",autoComplete:"new-password"}))]})}),Object(N.jsx)(o.u,{md:"4",lg:"4",xl:"4",children:Object(N.jsxs)(o.V,{className:"mb-3",children:[Object(N.jsx)(o.X,{children:Object(N.jsx)(o.Y,{children:Object(N.jsx)(d.a,{name:"cil-map"})})}),Object(N.jsx)(o.S,Object(c.a)(Object(c.a)({type:"text"},L),{},{placeholder:"Mobile No.",autoComplete:"new-password"}))]})})]}),Object(N.jsxs)(o.wb,{className:"justify-content-center",children:[Object(N.jsx)(o.u,{md:"4",lg:"4",xl:"4",children:Object(N.jsxs)(o.V,{className:"mb-4",children:[Object(N.jsx)(o.X,{children:Object(N.jsx)(o.Y,{children:Object(N.jsx)(d.a,{name:"cil-map"})})}),Object(N.jsx)(o.S,Object(c.a)(Object(c.a)({type:"text"},P),{},{placeholder:"Aadhar Card no",autoComplete:"new-password",maxLength:"12"}))]})}),Object(N.jsx)(o.u,{md:"4",lg:"4",xl:"4",children:Object(N.jsxs)(o.V,{className:"mb-3",children:[Object(N.jsx)(o.X,{children:Object(N.jsx)(o.Y,{children:Object(N.jsx)(d.a,{name:"cil-map"})})}),Object(N.jsx)(o.S,Object(c.a)(Object(c.a)({type:"text"},E),{},{placeholder:"Name of the Nominee",autoComplete:"new-password"}))]})}),Object(N.jsx)(o.u,{md:"4",lg:"4",xl:"4",children:Object(N.jsx)(x.a,{options:me,placeholder:"Select Relationship with Nominee",value:me.find((function(e){return e.label==ae})),color:"primary",onChange:Pe})})]}),Object(N.jsxs)(o.wb,{className:"justify-content-center",children:[Object(N.jsx)(o.u,{md:"4",lg:"4",xl:"4",children:Object(N.jsx)(x.a,{options:b.a.District,placeholder:"Select District",onChange:function(e){ce=e.value,console.log(ce),b.a.Mandal=[],ue(ce),Be(ce),De()}})}),Object(N.jsx)(o.u,{md:"4",lg:"4",xl:"4",children:Object(N.jsx)(x.a,{options:b.a.Mandal,placeholder:"Select Mandal",onChange:function(e){se=e.value,console.log(se),Ne(se),b.a.Village=[],Ge(se),De()}})}),Object(N.jsx)(o.u,{md:"4",lg:"4",xl:"4",children:Object(N.jsx)(x.a,{options:b.a.Village,placeholder:"Select Village",onChange:function(e){ne=e.value,console.log(fe),console.log(Oe),Ce(ne),console.log(ne)}})})]}),Object(N.jsx)("br",{}),Object(N.jsxs)(o.wb,{className:"justify-content-center",children:[Object(N.jsx)(o.u,{md:"4",lg:"4",xl:"4",children:Object(N.jsxs)(o.V,{className:"mb-4",children:[Object(N.jsx)(o.X,{children:Object(N.jsx)(o.Y,{children:Object(N.jsx)(d.a,{name:"cil-map"})})}),Object(N.jsx)(o.S,Object(c.a)(Object(c.a)({type:"text"},B),{},{placeholder:"Enter PSBCS RegNo.",autoComplete:"new-Landline",maxLength:"10"}))]})}),Object(N.jsx)(o.u,{md:"4",lg:"4",xl:"4",children:Object(N.jsxs)(o.V,{className:"mb-3",children:[Object(N.jsx)(o.X,{children:Object(N.jsx)(o.Y,{children:Object(N.jsx)(d.a,{name:"cil-map"})})}),Object(N.jsx)(o.S,Object(c.a)(Object(c.a)({type:"text"},G),{},{placeholder:"Name of the PSBCS",autoComplete:"new-password",maxLength:"10"}))]})}),Object(N.jsx)(o.u,{md:"4",lg:"4",xl:"4",children:Object(N.jsxs)(o.V,{className:"mb-4",children:[Object(N.jsx)(o.X,{children:Object(N.jsx)(o.Y,{children:Object(N.jsx)(d.a,{name:"cil-map"})})}),Object(N.jsx)(o.S,Object(c.a)(Object(c.a)({type:"text"},U),{},{placeholder:"Society Membership No",autoComplete:"new-Landline",maxLength:"10"}))]})})]}),Object(N.jsx)("hr",{}),Object(N.jsxs)(o.wb,{className:"justify-content-center",children:[Object(N.jsx)(o.u,{md:"4",lg:"4",xl:"4",children:Object(N.jsxs)(o.V,{className:"mb-3",children:[Object(N.jsx)(o.X,{children:Object(N.jsx)(o.Y,{children:Object(N.jsx)(d.a,{name:"cil-map"})})}),Object(N.jsx)(o.S,Object(c.a)(Object(c.a)({type:"text"},X),{},{placeholder:"Name of Veterinary Asst. Surgeon",autoComplete:"new-password",maxLength:"10"}))]})}),Object(N.jsx)(o.u,{md:"4",lg:"4",xl:"4",children:Object(N.jsxs)(o.V,{className:"mb-4",children:[Object(N.jsx)(o.X,{children:Object(N.jsx)(o.Y,{children:Object(N.jsx)(d.a,{name:"cil-map"})})}),Object(N.jsx)(o.S,Object(c.a)(Object(c.a)({type:"text"},H),{},{placeholder:"Address of Veterinary Institution",autoComplete:"new-Landline",maxLength:"10"}))]})}),Object(N.jsx)(o.u,{md:"4",lg:"4",xl:"4",children:Object(N.jsxs)(o.V,{className:"mb-3",children:[Object(N.jsx)(o.X,{children:Object(N.jsx)(o.Y,{children:Object(N.jsx)(d.a,{name:"cil-map"})})}),Object(N.jsx)(o.S,Object(c.a)(Object(c.a)({type:"text"},z),{},{placeholder:"Mobile No of Veterinary Sugeron",autoComplete:"new-password",maxLength:"10"}))]})})]}),Object(N.jsxs)(o.wb,{className:"justify-content-center",children:[Object(N.jsx)(o.u,{md:"4",lg:"4",xl:"4",children:Object(N.jsxs)(o.V,{className:"mb-4",children:[Object(N.jsx)(o.X,{children:Object(N.jsx)(o.Y,{children:"@"})}),Object(N.jsx)(o.S,Object(c.a)(Object(c.a)({type:"email"},_),{},{placeholder:"Email Id of Veterinary Sugeron",autoComplete:"new-Landline"}))]})}),Object(N.jsx)(o.u,{md:"4",lg:"4",xl:"4",children:Object(N.jsxs)(o.V,{className:"mb-3",children:[Object(N.jsx)(o.X,{children:Object(N.jsx)(o.Y,{children:Object(N.jsx)(d.a,{name:"cil-map"})})}),Object(N.jsx)(o.S,Object(c.a)(Object(c.a)({type:"date"},J),{},{placeholder:"Date Of Grounding",autoComplete:"new-password",maxLength:"10"}))]})}),Object(N.jsx)(o.u,{md:"4",lg:"4",xl:"4",children:Object(N.jsxs)(o.V,{className:"mb-4",children:[Object(N.jsx)(o.X,{children:Object(N.jsx)(o.Y,{children:Object(N.jsx)(d.a,{name:"cil-map"})})}),Object(N.jsx)(o.S,Object(c.a)(Object(c.a)({type:"text"},Q),{},{placeholder:"Place of Grouding",autoComplete:"new-Landline",maxLength:"10"}))]})})]}),Object(N.jsxs)(o.wb,{className:"justify-content-left",children:[Object(N.jsx)(o.u,{md:"2",lg:"2",xl:"2",children:Object(N.jsxs)(o.V,{className:"mb-2",children:[Object(N.jsx)(o.X,{children:Object(N.jsx)(o.Y,{children:Object(N.jsx)(d.a,{name:"cil-map"})})}),Object(N.jsx)(o.S,Object(c.a)(Object(c.a)({type:"number"},W),{},{placeholder:"No of Sheep Produced",autoComplete:"new-password",maxLength:"10"}))]})}),Object(N.jsx)(o.u,{md:"2",lg:"2",xl:"2",children:Object(N.jsxs)(o.V,{className:"mb-3",children:[Object(N.jsx)(o.X,{children:Object(N.jsx)(o.Y,{children:Object(N.jsx)(d.a,{name:"cil-map"})})}),Object(N.jsx)(o.S,Object(c.a)(Object(c.a)({type:"text"},K),{},{placeholder:"Total Value Of Sheep",autoComplete:"new-Landline",maxLength:"10"}))]})}),Object(N.jsx)(o.u,{md:"3",lg:"3",xl:"3",children:Object(N.jsxs)(o.V,{children:[Object(N.jsx)(o.Y,{children:Object(N.jsx)(d.a,{name:"cil-map"})}),Object(N.jsx)(o.S,Object(c.a)(Object(c.a)({type:"date"},q),{},{placeholder:"Valid From",autoComplete:"new-Landline"}))]})}),Object(N.jsx)(o.u,{md:"2",lg:"2",xl:"2",children:Object(N.jsxs)(o.V,{className:"mb-4",children:[Object(N.jsx)(o.X,{children:Object(N.jsx)(o.Y,{children:Object(N.jsx)(d.a,{name:"cil-map"})})}),Object(N.jsx)(o.S,{type:"text",placeholder:"Enter Validity Time",autoComplete:"new-Landline",onChange:function(){var e=new Date(q.value);e.setDate(e.getDate()+365),$=e}})]})}),Object(N.jsx)(o.u,{md:"3",lg:"3",xl:"3",children:Object(N.jsxs)(o.V,{children:[Object(N.jsx)(o.Y,{children:Object(N.jsx)(d.a,{name:"cil-map"})}),Object(N.jsx)(o.S,Object(c.a)(Object(c.a)({type:"date"},$),{},{placeholder:"Valid Upto",autoComplete:"new-Landline"}))]})})]}),Object(N.jsx)(o.wb,{md:"12",lg:"12",xl:"12",children:Object(N.jsx)(o.u,{children:Object(N.jsxs)(o.V,{className:"mb-4",children:[Object(N.jsx)(o.X,{children:Object(N.jsx)(o.Y,{children:Object(N.jsx)(d.a,{name:"cil-map"})})}),Object(N.jsx)(o.S,Object(c.a)(Object(c.a)({type:"text"},ee),{},{placeholder:"Enter Remark",autoComplete:"new-Landline"}))]})})}),Object(N.jsxs)(o.wb,{children:[Object(N.jsx)(o.u,{children:Object(N.jsxs)(o.V,{className:"mb-4",children:[Object(N.jsx)(o.X,{children:Object(N.jsx)(o.Y,{children:Object(N.jsx)(d.a,{name:"cil-map"})})}),Object(N.jsx)(o.S,Object(c.a)(Object(c.a)({type:"text"},te),{},{placeholder:"Eneter Tag No of Sheep (20 ewes)",autoComplete:"new-Landline"}))]})}),Object(N.jsxs)(o.u,{children:[" ",Object(N.jsx)(x.a,{options:me,placeholder:"Select Authorise / Reject the User",value:me.find((function(e){return e.label==ae})),onChange:Pe})]}),Object(N.jsx)(o.u,{md:"2",lg:"2",xl:"2",children:Object(N.jsx)(o.f,{className:"mb-1",color:"success",block:!0,onClick:function(){if(""===te.value)return h.a.fire({icon:"info",title:"Tag No Cant be Empty",showConfirmButton:!1,timer:1e3}),!1;var e={Sno:b.a.TagList.length+1,TagNo:te.value,Gender:ae.value,LoginId:1};b.a.TagList.push(e),console.log(b.a.TagList),console.log(g),Te(b.a.TagList),De("")},children:"OK"})})]}),Object(N.jsxs)(o.wb,{children:[Object(N.jsx)(o.y,{items:g,fields:["Sno",{key:"TagNo",_classes:"font-weight-bold"},"Gender"],hover:!0,striped:!0,itemsPerPage:10,activePage:y,sts:!0,onRowClick:function(e){return t.push("/views/format1/".concat(e.Sno))},scopedSlots:{status:function(e){return Object(N.jsx)("td",{children:Object(N.jsx)(o.b,{color:"success",children:e.status})})}}}),Object(N.jsx)(o.sb,{activePage:y,onActivePageChange:De,pages:10,doubleArrows:!0,align:"center"})]}),Object(N.jsxs)(o.wb,{children:[Object(N.jsx)(o.u,{children:Object(N.jsx)(o.f,{color:"success",block:!0,onClick:Fe,children:"Submit"})}),Object(N.jsx)(o.u,{children:Object(N.jsx)(o.f,{color:"primary",block:!0,onClick:Ie,children:"Print"})}),Object(N.jsx)(o.u,{children:Object(N.jsx)(o.f,{color:"danger",block:!0,children:"Reset"})}),Object(N.jsx)(o.u,{children:Object(N.jsx)(o.f,{color:"info",block:!0,onClick:function(){e.history.push("/views/format1list")},children:"Format1 List"})})]})]})})})})})})})}},537:function(e,t,a){"use strict";a.r(t);a(1);var c=a(716),s=a(6);t.default=function(){return Object(s.jsxs)("div",{className:"c-app c-default-layout",children:[Object(s.jsx)(c.h,{}),Object(s.jsxs)("div",{className:"c-wrapper",children:[Object(s.jsx)(c.c,{}),Object(s.jsx)("div",{className:"c-body",children:Object(s.jsx)(c.a,{})}),Object(s.jsx)(c.b,{})]})]})}},704:function(e,t,a){"use strict";a(1);var c=a(133),s=a(21),n=a(44),l=a(401),r=a(716),i=a(6);t.a=function(){var e=Object(c.b)(),t=Object(c.c)((function(e){return e.sidebarShow}));return Object(i.jsxs)(s.M,{withSubheader:!0,children:[Object(i.jsx)(s.Qb,{inHeader:!0,className:"ml-md-3 d-lg-none",onClick:function(){var a=!![!1,"responsive"].includes(t)||"responsive";e({type:"set",sidebarShow:a})}}),Object(i.jsx)(s.Qb,{inHeader:!0,className:"ml-3 d-md-down-none",onClick:function(){var a=![!0,"responsive"].includes(t)&&"responsive";e({type:"set",sidebarShow:a})}}),Object(i.jsx)(s.N,{className:"mx-auto d-lg-none",to:"/"}),Object(i.jsxs)(s.O,{className:"d-md-down-none mr-auto",children:[Object(i.jsx)(s.P,{className:"px-3",children:Object(i.jsx)(s.Q,{to:"/views/dashboard",children:"Dashboard"})}),Object(i.jsx)(s.P,{className:"px-3",children:Object(i.jsx)(s.Q,{to:"/views/users",children:"Users"})}),Object(i.jsx)(s.P,{className:"px-3",children:Object(i.jsx)(s.Q,{children:"Settings"})})]}),Object(i.jsxs)(s.O,{className:"px-3",children:[Object(i.jsx)(r.f,{}),Object(i.jsx)(r.g,{}),Object(i.jsx)(r.e,{}),Object(i.jsx)(r.d,{})]}),Object(i.jsxs)(s.Gb,{className:"px-3 justify-content-between",children:[Object(i.jsx)(s.e,{className:"border-0 c-subheader-nav m-0 px-0 px-md-3",routes:l.a}),Object(i.jsxs)("div",{className:"d-md-down-none mfe-2 c-subheader-nav",children:[Object(i.jsx)(s.db,{className:"c-subheader-nav-link",href:"#",children:Object(i.jsx)(n.a,{name:"cil-speech",alt:"Settings"})}),Object(i.jsxs)(s.db,{className:"c-subheader-nav-link","aria-current":"page",to:"/dashboard",children:[Object(i.jsx)(n.a,{name:"cil-graph",alt:"Dashboard"}),"\xa0Dashboard"]}),Object(i.jsxs)(s.db,{className:"c-subheader-nav-link",href:"#",children:[Object(i.jsx)(n.a,{name:"cil-settings",alt:"Settings"}),"\xa0Settings"]})]})]})]})}},708:function(e,t,a){"use strict";var c=a(46),s=a(1),n=a.n(s),l=a(15),r=a(21),i=a(401),o=a(6),d=Object(o.jsx)("div",{className:"pt-3 text-center",children:Object(o.jsx)("div",{className:"sk-spinner sk-spinner-pulse"})}),j=function(){return Object(o.jsx)("main",{className:"c-main",children:Object(o.jsx)(r.w,{fluid:!0,children:Object(o.jsx)(s.Suspense,{fallback:d,children:Object(o.jsxs)(l.d,{children:[i.a.map((function(e,t){return e.component&&Object(o.jsx)(l.b,{path:e.path,exact:e.exact,name:e.name,render:function(t){return Object(o.jsx)(r.H,{children:Object(o.jsx)(e.component,Object(c.a)({},t))})}},t)})),Object(o.jsx)(l.a,{from:"/dashboard",to:"/views/dashboard"}),Object(o.jsx)(l.a,{from:"/login",to:"/pages/login"})]})})})})};t.a=n.a.memo(j)},710:function(e,t,a){"use strict";var c=a(1),s=a.n(c),n=a(133),l=a(21),r=a(44),i=a(6),o=[{_tag:"CSidebarNavItem",name:"Dashboard",to:"/views/dashboard",icon:Object(i.jsx)(r.a,{name:"cil-speedometer",customClasses:"c-sidebar-nav-icon"}),badge:{color:"info",text:""}},{_tag:"CSidebarNavItem",name:"Register",to:"/register",icon:Object(i.jsx)(r.a,{name:"cil-user",customClasses:"c-sidebar-nav-icon"}),badge:{color:"info",text:""}},{_tag:"CSidebarNavItem",name:"Format1",to:"/views/format1",icon:Object(i.jsx)(r.a,{name:"cil-speedometer",customClasses:"c-sidebar-nav-icon"}),badge:{color:"info",text:""}},{_tag:"CSidebarNavItem",name:"Format3",to:"/views/format3",icon:Object(i.jsx)(r.a,{name:"cil-speedometer",customClasses:"c-sidebar-nav-icon"}),badge:{color:"info",text:""}}],d=function(){var e=Object(n.b)(),t=Object(n.c)((function(e){return e.sidebarShow}));return Object(i.jsxs)(l.yb,{show:t,onShowChange:function(t){return e({type:"set",sidebarShow:t})},children:[Object(i.jsx)(l.zb,{className:"d-md-down-none",to:"/dashboard",children:Object(i.jsx)("label",{children:"Fouress Insurance Broking Services Pvt Ltd "})}),Object(i.jsx)(l.Bb,{children:Object(i.jsx)(l.x,{items:o,components:{CSidebarNavDivider:l.Cb,CSidebarNavDropdown:l.Db,CSidebarNavItem:l.Eb,CSidebarNavTitle:l.Fb}})}),Object(i.jsx)(l.Ab,{className:"c-d-md-down-none"})]})};t.a=s.a.memo(d)},716:function(e,t,a){"use strict";a.d(t,"a",(function(){return c.a})),a.d(t,"b",(function(){return o})),a.d(t,"c",(function(){return d.a})),a.d(t,"d",(function(){return m})),a.d(t,"e",(function(){return h})),a.d(t,"f",(function(){return x})),a.d(t,"g",(function(){return O})),a.d(t,"h",(function(){return u.a}));var c=a(708),s=a(1),n=a.n(s),l=a(21),r=a(6),i=function(){return Object(r.jsx)(l.I,{fixed:!1,children:Object(r.jsxs)("div",{children:[Object(r.jsx)("a",{href:"#",rel:"noopener noreferrer",children:"UNITED INDIA INSURANCE COMPANY LIMITED. "}),Object(r.jsx)("span",{className:"ml-1",children:"(Please call on +91-7536825280 for Any Assistance)."})]})})},o=n.a.memo(i),d=a(704),j=(a(46),a(72),a(44)),b=a(15),m=function(e){var t=Object(b.g)();return Object(r.jsxs)(l.z,{inNav:!0,className:"c-header-nav-items mx-2",direction:"down",children:[Object(r.jsx)(l.E,{className:"c-header-nav-link",caret:!1,children:Object(r.jsx)("div",{className:"c-avatar",children:Object(r.jsx)(l.R,{src:"avatars/9.png",className:"c-avatar-img",alt:"abcd.com"})})}),Object(r.jsx)(l.D,{className:"pt-0",placement:"bottom-end",children:Object(r.jsxs)(l.C,{onClick:function(e){localStorage.clear(),t.push("/login")},children:[Object(r.jsx)(j.a,{name:"cil-lock-locked",className:"mfe-2"}),"Log Out"]})})]})},h=function(){return Object(r.jsxs)(l.z,{inNav:!0,className:"c-header-nav-item mx-2",direction:"down",children:[Object(r.jsxs)(l.E,{className:"c-header-nav-link",caret:!1,children:[Object(r.jsx)(j.a,{name:"cil-envelope-open"}),Object(r.jsx)(l.b,{shape:"pill",color:"info",children:4})]}),Object(r.jsxs)(l.D,{className:"pt-0",placement:"bottom-end",children:[Object(r.jsx)(l.C,{header:!0,tag:"div",color:"light",children:Object(r.jsxs)("strong",{children:["You have ",4," messages"]})}),Object(r.jsx)(l.C,{href:"#",children:Object(r.jsxs)("div",{className:"message",children:[Object(r.jsx)("div",{className:"pt-3 mr-3 float-left",children:Object(r.jsxs)("div",{className:"c-avatar",children:[Object(r.jsx)(l.R,{src:"avatars/7.jpg",className:"c-avatar-img",alt:"admin@bootstrapmaster.com"}),Object(r.jsx)("span",{className:"c-avatar-status bg-success"})]})}),Object(r.jsxs)("div",{children:[Object(r.jsx)("small",{className:"text-muted",children:"John Doe"}),Object(r.jsx)("small",{className:"text-muted float-right mt-1",children:"Just now"})]}),Object(r.jsxs)("div",{className:"text-truncate font-weight-bold",children:[Object(r.jsx)("span",{className:"fa fa-exclamation text-danger"})," Important message"]}),Object(r.jsx)("div",{className:"small text-muted text-truncate",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt..."})]})}),Object(r.jsx)(l.C,{href:"#",children:Object(r.jsxs)("div",{className:"message",children:[Object(r.jsx)("div",{className:"pt-3 mr-3 float-left",children:Object(r.jsxs)("div",{className:"c-avatar",children:[Object(r.jsx)(l.R,{src:"avatars/6.jpg",className:"c-avatar-img",alt:"admin@bootstrapmaster.com"}),Object(r.jsx)("span",{className:"c-avatar-status bg-warning"})]})}),Object(r.jsxs)("div",{children:[Object(r.jsx)("small",{className:"text-muted",children:"Jane Dovve"}),Object(r.jsx)("small",{className:"text-muted float-right mt-1",children:"5 minutes ago"})]}),Object(r.jsx)("div",{className:"text-truncate font-weight-bold",children:"Lorem ipsum dolor sit amet"}),Object(r.jsx)("div",{className:"small text-muted text-truncate",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt..."})]})}),Object(r.jsx)(l.C,{href:"#",children:Object(r.jsxs)("div",{className:"message",children:[Object(r.jsx)("div",{className:"pt-3 mr-3 float-left",children:Object(r.jsxs)("div",{className:"c-avatar",children:[Object(r.jsx)(l.R,{src:"avatars/5.jpg",className:"c-avatar-img",alt:"admin@bootstrapmaster.com"}),Object(r.jsx)("span",{className:"c-avatar-status bg-danger"})]})}),Object(r.jsxs)("div",{children:[Object(r.jsx)("small",{className:"text-muted",children:"Janet Doe"}),Object(r.jsx)("small",{className:"text-muted float-right mt-1",children:"1:52 PM"})]}),Object(r.jsx)("div",{className:"text-truncate font-weight-bold",children:"Lorem ipsum dolor sit amet"}),Object(r.jsx)("div",{className:"small text-muted text-truncate",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt..."})]})}),Object(r.jsx)(l.C,{href:"#",children:Object(r.jsxs)("div",{className:"message",children:[Object(r.jsx)("div",{className:"pt-3 mr-3 float-left",children:Object(r.jsxs)("div",{className:"c-avatar",children:[Object(r.jsx)(l.R,{src:"avatars/4.jpg",className:"c-avatar-img",alt:"admin@bootstrapmaster.com"}),Object(r.jsx)("span",{className:"c-avatar-status bg-info"})]})}),Object(r.jsxs)("div",{children:[Object(r.jsx)("small",{className:"text-muted",children:"Joe Doe"}),Object(r.jsx)("small",{className:"text-muted float-right mt-1",children:"4:03 AM"})]}),Object(r.jsx)("div",{className:"text-truncate font-weight-bold",children:"Lorem ipsum dolor sit amet"}),Object(r.jsx)("div",{className:"small text-muted text-truncate",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt..."})]})}),Object(r.jsx)(l.C,{href:"#",className:"text-center border-top",children:Object(r.jsx)("strong",{children:"View all messages"})})]})]})},x=function(){return Object(r.jsxs)(l.z,{inNav:!0,className:"c-header-nav-item mx-2",children:[Object(r.jsxs)(l.E,{className:"c-header-nav-link",caret:!1,children:[Object(r.jsx)(j.a,{name:"cil-bell"}),Object(r.jsx)(l.b,{shape:"pill",color:"danger",children:5})]}),Object(r.jsxs)(l.D,{placement:"bottom-end",className:"pt-0",children:[Object(r.jsx)(l.C,{header:!0,tag:"div",className:"text-center",color:"light",children:Object(r.jsxs)("strong",{children:["You have ",5," notifications"]})}),Object(r.jsxs)(l.C,{children:[Object(r.jsx)(j.a,{name:"cil-user-follow",className:"mr-2 text-success"})," New user registered"]}),Object(r.jsxs)(l.C,{children:[Object(r.jsx)(j.a,{name:"cil-user-unfollow",className:"mr-2 text-danger"})," User deleted"]}),Object(r.jsxs)(l.C,{children:[Object(r.jsx)(j.a,{name:"cil-chart-pie",className:"mr-2 text-info"})," Sales report is ready"]}),Object(r.jsxs)(l.C,{children:[Object(r.jsx)(j.a,{name:"cil-basket",className:"mr-2 text-primary"})," New client"]}),Object(r.jsxs)(l.C,{children:[Object(r.jsx)(j.a,{name:"cil-speedometer",className:"mr-2 text-warning"})," Server overloaded"]}),Object(r.jsx)(l.C,{header:!0,tag:"div",color:"light",children:Object(r.jsx)("strong",{children:"Server"})}),Object(r.jsxs)(l.C,{className:"d-block",children:[Object(r.jsx)("div",{className:"text-uppercase mb-1",children:Object(r.jsx)("small",{children:Object(r.jsx)("b",{children:"CPU Usage"})})}),Object(r.jsx)(l.ub,{size:"xs",color:"info",value:25}),Object(r.jsx)("small",{className:"text-muted",children:"348 Processes. 1/4 Cores."})]}),Object(r.jsxs)(l.C,{className:"d-block",children:[Object(r.jsx)("div",{className:"text-uppercase mb-1",children:Object(r.jsx)("small",{children:Object(r.jsx)("b",{children:"Memory Usage"})})}),Object(r.jsx)(l.ub,{size:"xs",color:"warning",value:70}),Object(r.jsx)("small",{className:"text-muted",children:"11444GB/16384MB"})]}),Object(r.jsxs)(l.C,{className:"d-block",children:[Object(r.jsx)("div",{className:"text-uppercase mb-1",children:Object(r.jsx)("small",{children:Object(r.jsx)("b",{children:"SSD 1 Usage"})})}),Object(r.jsx)(l.ub,{size:"xs",color:"danger",value:90}),Object(r.jsx)("small",{className:"text-muted",children:"243GB/256GB"})]})]})]})},O=function(){return Object(r.jsxs)(l.z,{inNav:!0,className:"c-header-nav-item mx-2",children:[Object(r.jsxs)(l.E,{className:"c-header-nav-link",caret:!1,children:[Object(r.jsx)(j.a,{name:"cil-list"}),Object(r.jsx)(l.b,{shape:"pill",color:"warning",children:5})]}),Object(r.jsxs)(l.D,{placement:"bottom-end",className:"pt-0",children:[Object(r.jsx)(l.C,{header:!0,tag:"div",className:"text-center",color:"light",children:Object(r.jsxs)("strong",{children:["You have ",5," pending tasks"]})}),Object(r.jsxs)(l.C,{className:"d-block",children:[Object(r.jsxs)("div",{className:"small mb-1",children:["Upgrade NPM & Bower ",Object(r.jsx)("span",{className:"float-right",children:Object(r.jsx)("strong",{children:"0%"})})]}),Object(r.jsx)(l.ub,{size:"xs",color:"info",value:0})]}),Object(r.jsxs)(l.C,{className:"d-block",children:[Object(r.jsxs)("div",{className:"small mb-1",children:["ReactJS Version ",Object(r.jsx)("span",{className:"float-right",children:Object(r.jsx)("strong",{children:"25%"})})]}),Object(r.jsx)(l.ub,{size:"xs",color:"danger",value:25})]}),Object(r.jsxs)(l.C,{className:"d-block",children:[Object(r.jsxs)("div",{className:"small mb-1",children:["VueJS Version ",Object(r.jsx)("span",{className:"float-right",children:Object(r.jsx)("strong",{children:"50%"})})]}),Object(r.jsx)(l.ub,{size:"xs",color:"warning",value:50})]}),Object(r.jsxs)(l.C,{className:"d-block",children:[Object(r.jsxs)("div",{className:"small mb-1",children:["Add new layouts ",Object(r.jsx)("span",{className:"float-right",children:Object(r.jsx)("strong",{children:"75%"})})]}),Object(r.jsx)(l.ub,{size:"xs",color:"info",value:75})]}),Object(r.jsxs)(l.C,{className:"d-block",children:[Object(r.jsxs)("div",{className:"small mb-1",children:["Angular 2 Cli Version ",Object(r.jsx)("span",{className:"float-right",children:Object(r.jsx)("strong",{children:"100%"})})]}),Object(r.jsx)(l.ub,{size:"xs",color:"success",value:100})]}),Object(r.jsx)(l.C,{className:"text-center border-top",children:Object(r.jsx)("strong",{children:"View all tasks"})})]})]})},u=(a(537),a(710))},800:function(e,t,a){"use strict"}}]);
//# sourceMappingURL=9.17c986c9.chunk.js.map