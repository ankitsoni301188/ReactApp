(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[8,11],{408:function(e,t,a){"use strict";a.r(t);var c=a(46),s=a(38),l=a.n(s),r=a(58),i=a(699),n=a(1),d=a(21),j=a(44),o=(a(704),a(15)),b=a(97),m=a(67),h=a.n(m),x=(a(185),a(796),a(925),a(973)),O=a(6),u=function(e){var t=Object(n.useState)(e),a=Object(i.a)(t,2),c=a[0],s=a[1];return{value:c,onChange:function(e){s(e.target.value)}}};t.default=function(e){var t=Object(o.g)(),a=Object(o.h)().search.match(/page=([0-9]+)/,""),s=Number(a&&a[1]?a[1]:1),m=Object(n.useState)(s),p=Object(i.a)(m,2),g=p[0],N=p[1],f=Object(n.useState)(0),v=Object(i.a)(f,2),w=v[0],S=(v[1],u("")),y=u(""),C=u(""),T=u(""),V=u(""),A=u(""),F=u(""),I=u(""),L=u(""),k=u(""),P=u(""),D=u(""),E=u(""),Y=u(""),R=u(""),B=u(""),X=u(""),M=u(""),U=u(""),G=u(""),z=u(""),H=u(""),J=u(""),_=u(""),Q=u(""),W=u(""),K=(u(""),u("")),q=u(""),Z=(Object(n.useState)(0),["orange","red","blue","purple"]),$=function(){var e=Object(r.a)(l.a.mark((function e(){var t,a,c,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=new Headers).append("Content-Type","application/json; charset=utf-8"),t.append("Access-Control-Allow-Origin","*"),a={FullName:S.value,RegistrationNo:y.value,FatherName:C.value,Age:T.value,DOB:V.value,MobileNo:A.value,AadharCardNo:F.value,NomineeName:I.value,NomineeRelationShip:L.value,Village:k.value,District:P.value,Mandal:D.value,PSBCSRegNo:E.value,PSBCSName:Y.value,SocietyMembershpNo:R.value,VeterinarySergeon:B.value,VeterinaryAddress:X.value,VASMobileNo:M.value,VASEmail:U.value,GroudingDate:G.value,GroudingPlace:z.value,SheepNos:H.value,TotalSheepValue:J.value,InsuracePeriodFrom:_.value,InsuracePeriodTime:Q.value,InsuracePeriodTo:W.value},c=JSON.stringify(a),console.log(c),s={method:"POST",mode:"cors",headers:t,body:c},e.next=10,fetch(b.a.SYSTEM_SETTINGS.API_URL+"/format/ins",s).then((function(e){return e.json()})).then((function(e){console.log(e),w=e.id,e&&(h.a.fire({icon:"success",title:"Form No "+e.id+" Saved",showConfirmButton:!1,timer:1500}),console.log(e))})).catch((function(e){return console.log("error",e)}));case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ee=function(){var e=Object(r.a)(l.a.mark((function e(){var t,a,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return new x.a,t=window.open("","PRINT","height=750,width=700,top=100,left=150"),b.a.Format1obj=[],a={method:"GET",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"http://localhost:5001"}},c=b.a.SYSTEM_SETTINGS.API_URL+"/format/"+w,e.next=8,fetch(c,a).then((function(e){return e.json()})).then((function(e){return b.a.Format1obj=e}));case 8:console.log(JSON.stringify(b.a.Format1obj.length)),null!==b.a.Format1obj&&(t.document.write('<!doctype html><html><head><meta charset="utf-8"><title>Format-1</title><style>.invoice-box {max-width: 100%;margin: auto;padding: 0px;border: 1px solid #eee;box-shadow: 0 0 10px rgba(0, 0, 0, .15); font-size: 16px;line-height: 24px;font-family: "Helvetica Neue", "Helvetica", Helvetica, Arial, sans-serif;color: #555;   }.invoice-box table {width: 100%; line-height: inherit;text-align: left;}.invoice-box table td { padding: 0px;vertical-align: top;}.invoice-box table tr td:nth-child(2) {text-align: right;}.invoice-box table tr.top table td {padding-bottom: 0px;}.invoice-box table tr.top table td.title {font-size: 45px;line-height: 45px;color: #333;}.invoice-box table tr.information table td {padding-bottom: 40px;}.invoice-box table tr.heading td {background: #eee;border-bottom: 1px solid #ddd;font-weight: bold;}.invoice-box table tr.details td {padding-bottom: 0px;}.invoice-box table tr.item td{ border-bottom: 1px solid #eee;}.invoice-box table tr.item.last td {border-bottom: none;}.invoice-box table tr.total td:nth-child(2) {border-top: 2px solid #eee;font-weight: bold;} @media only screen and (max-width: 600px) {.invoice-box table tr.top table td {width: 100%;display: block;text-align: center;}.invoice-box table tr.information table td {width: 100%;display: block;text-align: center;}}   /** RTL **/.rtl {direction: rtl;font-family: Tahoma, "Helvetica Neue", "Helvetica", Helvetica, Arial, sans-serif;}.rtl table {text-align: right;}.rtl table tr td:nth-child(2) {text-align: left; table, th, td { border: 1px solid ;}}</style></head><body><div class="invoice-box"><div style="text-align:center;"><h4>UNITED INDIA INSURANCE COMPANY LIMITED</br> D.O.IX, UIIC TOWERS, BASHEERBAGH, HYDERABAD-500029 </br> TSSGDCFL SHEEP INSURANCE MASTER POLICY NO .... /UIIC2021</br> CERTIFICATE OF INSURANCE No</h4> </div><hr></hr><table><tr class="heading"><td>Insurance No : '+b.a.Format1obj[0].RegistrationNo+" ("+b.a.Format1obj[0].id+')</br></td><td>Insurance Date :30/July/2022 </br></td></tr></table><table cellpadding="0" cellspacing="0"><tr class="top"><td colspan="2"><table><tr ><td colspan="2"></td></tr><tr class="heading"><td>Beneficiary Detail</td><td></td></tr><tr  style="0 !important;margin: 0 !important; border-collapse: collapse; border: 1px solid Black;"><td style="text-align:left;"><table ><tr><td width="50%" >Beneficiary Name :</td><td width="50%">'+b.a.Format1obj[0].FullName+'</td></tr><tr><td width="50%">Father Name :</td><td width="50%">'+b.a.Format1obj[0].FatherName+'</td></tr><tr><td width="50%">Moble No :</td><td width="50%">'+b.a.Format1obj[0].MobileNo+'</td></tr><tr><td width="50%">Nominee Name:</td><td width="50%">'+b.a.Format1obj[0].NomineeName+'</td></tr><tr><td width="50%">Village :</td><td width="50%">'+b.a.Format1obj[0].Village+'</td></tr><tr><td width="50%">District :</td><td width="50%">'+b.a.Format1obj[0].District+'</td></tr><tr><td width="50%">PSBCS Name:</td><td width="50%">'+b.a.Format1obj[0].PSBCSName+'</td></tr></table> </td><td style="text-align:left;"><table><tr><td width="50%">Beneficiary Reg No. :</td><td width="50%" >'+b.a.Format1obj[0].PSBCSName+'</td></tr><tr><td width="50%" >Age / DOB :</td><td width="50%" >'+b.a.Format1obj[0].Age+" / "+b.a.Format1obj[0].DOB+'</td></tr><tr><td width="50%" >Aadhar Card No :</td><td width="50%" >'+b.a.Format1obj[0].AadharCardNo+'</td></tr><tr><td width="50%" >RelationShip With Nominee :</td><td width="50%" >'+b.a.Format1obj[0].NomineeRelationShip+'</td></tr><tr><td width="50%" >Mandal :</td><td width="50%" >'+b.a.Format1obj[0].Mandal+'</td></tr><tr><td width="50%" >PSBCS Reg No.:</td><td width="50%" >'+b.a.Format1obj[0].PSBCSRegNo+'</td></tr><tr><td width="50%" >Society Membership No. :</td><td width="50%" >'+b.a.Format1obj[0].SocietyMembershpNo+'</td></tr></table></td></tr></table></td></tr><tr class="heading"><td> VAS Detail</td><td></td></tr><tr><td style="text-align:left;"><table ><tr><td width="50%" >VAS Name :</td><td width="50%">'+b.a.Format1obj[0].VeterinarySergeon+'</td></tr><tr><td width="50%">VAS MobileNo :</td><td width="50%">'+b.a.Format1obj[0].VASMobileNo+'</td></tr><tr><td width="50%">Grounding Date :</td><td width="50%">'+b.a.Format1obj[0].GroudingDate+'</td></tr><tr><td width="50%">Sheep Produced NOS</td><td width="50%">'+b.a.Format1obj[0].SheepNos+'</td></table> </td><td style="text-align:left;"><table ><tr><td width="50%" >VAS Institution Address :</td><td width="50%">'+b.a.Format1obj[0].VeterinaryAddress+'</td></tr><tr><td width="50%">VAS Email :</td><td width="50%">'+b.a.Format1obj[0].VASEmail+'</td></tr><tr><td width="50%">Grounding Place:</td><td width="50%">'+b.a.Format1obj[0].GroudingPlace+'</td></tr><tr><td width="50%">Insurance Period(1 Year):</td><td width="50%">From : '+b.a.Format1obj[0].InsuracePeriodFrom+"</br> To : "+b.a.Format1obj[0].InsuracePeriodTo+'</td></tr></table> </td></tr><tr class="heading"><td> TAG Nos of Sheep (20 ewes)</td><td>Ram Tag No:</td></tr><tr><td style="text-align:left;"><table style="text-align:left;"><tr><td width="50%" >TS100009697301</td><td width="50%">TS100009697302</td></tr><tr><td width="50%">TS100009697303</td><td width="50%">TS100009697304</td></tr><tr><td width="50%">TS100009697305</td><td width="50%">TS100009697306</td></tr><tr><td width="50%">TS100009697307</td><td width="50%">TS100009697308</td></tr><tr><td width="50%">TS100009697309</td><td width="50%">TS100009697310</td></tr></table> </td><td style="text-align:right;"><table style="text-align:center;" ><tr><td width="50%" style="text-align:center;"> &emsp;&emsp;&emsp;   TS100009697311</td><td width="50%">TS100009697312</td></tr><tr><td width="50%" style="text-align:center;"> &emsp;&emsp;&emsp;   TS100009697313</td><td width="50%">TS100009697314</td></tr><tr><td width="50%" style="text-align:center;"> &emsp;&emsp;&emsp;  TS100009697315</td><td width="50%">TS100009697316</td></tr><tr><td width="50%" style="text-align:center;"> &emsp;&emsp;&emsp;  TS100009697317</td><td width="50%">TS100009697318 </td></tr><tr><td width="50%" style="text-align:center;">&emsp;&emsp;&emsp;   TS100009697319</td><td width="50%">TS100009697320</td></tr></table> </td></tr><tr class="heading"><td>Item</td><td>Price</td></tr><tr class="item"><td><b>Total Amount of Sheep Produced</b></td><td><b>&#8377;'+b.a.Format1obj[0].TotalSheepValue+'</b></td></tr><tr class="total"><td><b>ONE LACS TEN THOUSAND ONLY/-</b></td><td>Total: &#8377;'+b.a.Format1obj[0].TotalSheepValue+'</td></tr></table><div style="padding-left:20px;"><p><i>I hereby certify that the above details are true to the best of our knowledge and all the above </br> sheep are healty & fit for insurance. I hereby certify that all the sheep are properly tagged with </br> the above members for uploading in to the software application. I have also counter signed the </br>  certificate of Insurance with above date.  </i></p></div><table><tr><td><b></br></b></td><td></td></tr><tr ><td><b>Signature of Beneficciary</b></td><td><b>Signature of VAS with seal </b></td></tr></table><div style="padding-left:20px;"><p><i> The above animals are insured from the above place of purchase till reaches destination </br> mentioned in this certificate of insurance and also for a period of one year from the date of  </br> purchase mentioned above.(Valida only when counter signed by VAS at the time of grounding the  </br> scheme).  </i></p></div><table><tr><td><b></br></br></b></td><td></td></tr><tr ><td><b>Facsimille signature: </b> </br><b>For United India Insurance Company Ltd, </b> </br><b>(Authorised Signatory)</b> </br></td><td></td></tr></table></div></body></html>'),t.document.close(),t.focus(),t.print(),t.close());case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),te=Object(n.useState)(b.a.TagList),ae=Object(i.a)(te,2),ce=ae[0];ae[1];return Object(n.useEffect)((function(){s!==g&&N(s)}),[s,g]),Object(n.useEffect)((function(){}),[b.a.TagList,ce]),Object(O.jsx)("div",{className:"c-app c-default-layout flex-row align-items-center",children:Object(O.jsx)(d.w,{children:Object(O.jsx)(d.wb,{className:"justify-content-center",children:Object(O.jsx)(d.u,{md:"12",lg:"12",xl:"12",children:Object(O.jsx)(d.j,{className:"mx-12",children:Object(O.jsx)(d.k,{className:"p-12",children:Object(O.jsxs)(d.J,{children:[Object(O.jsx)("h4",{className:"align-center",children:"Format1"}),Object(O.jsx)("p",{className:"text-muted"}),Object(O.jsxs)(d.wb,{className:"justify-content-center",children:[Object(O.jsx)(d.u,{md:"4",lg:"4",xl:"4",children:Object(O.jsxs)(d.V,{className:"mb-3",children:[Object(O.jsx)(d.X,{children:Object(O.jsx)(d.Y,{children:Object(O.jsx)(j.a,{name:"cil-user"})})}),Object(O.jsx)(d.S,Object(c.a)(Object(c.a)({type:"text"},S),{},{placeholder:"Full Name of the Beneficiary",autoComplete:""}))]})}),Object(O.jsx)(d.u,{md:"4",lg:"4",xl:"4",children:Object(O.jsxs)(d.V,{className:"mb-3",children:[Object(O.jsx)(d.X,{children:Object(O.jsx)(d.Y,{children:Object(O.jsx)(j.a,{name:"cil-map"})})}),Object(O.jsx)(d.S,Object(c.a)(Object(c.a)({type:"text"},y),{},{placeholder:"Beneficiary Registration No",autoComplete:"email"}))]})}),Object(O.jsx)(d.u,{md:"4",lg:"4",xl:"4",children:Object(O.jsxs)(d.V,{className:"mb-3",children:[Object(O.jsx)(d.X,{children:Object(O.jsx)(d.Y,{children:Object(O.jsx)(j.a,{name:"cil-user"})})}),Object(O.jsx)(d.S,Object(c.a)(Object(c.a)({type:"text"},C),{},{placeholder:"Father's Name",autoComplete:"new-password"}))]})})]}),Object(O.jsxs)(d.wb,{className:"justify-content-center",children:[Object(O.jsx)(d.u,{md:"4",lg:"4",xl:"4",children:Object(O.jsxs)(d.V,{className:"mb-3",children:[Object(O.jsx)(d.X,{children:Object(O.jsx)(d.Y,{children:Object(O.jsx)(j.a,{name:"cil-map"})})}),Object(O.jsx)(d.S,Object(c.a)(Object(c.a)({type:"text"},T),{},{placeholder:"Age",autoComplete:""}))]})}),Object(O.jsx)(d.u,{md:"4",lg:"4",xl:"4",children:Object(O.jsxs)(d.V,{className:"mb-3",children:[Object(O.jsx)(d.X,{children:Object(O.jsx)(d.Y,{children:Object(O.jsx)(j.a,{name:"cil-map"})})}),Object(O.jsx)(d.S,Object(c.a)(Object(c.a)({type:"text"},V),{},{placeholder:"Date of Birth",autoComplete:"email"}))]})}),Object(O.jsx)(d.u,{md:"4",lg:"4",xl:"4",children:Object(O.jsxs)(d.V,{className:"mb-3",children:[Object(O.jsx)(d.X,{children:Object(O.jsx)(d.Y,{children:Object(O.jsx)(j.a,{name:"cil-map"})})}),Object(O.jsx)(d.S,Object(c.a)(Object(c.a)({type:"text"},A),{},{placeholder:"Mobile No.",autoComplete:"new-password"}))]})})]}),Object(O.jsxs)(d.wb,{className:"justify-content-center",children:[Object(O.jsx)(d.u,{md:"4",lg:"4",xl:"4",children:Object(O.jsxs)(d.V,{className:"mb-4",children:[Object(O.jsx)(d.X,{children:Object(O.jsx)(d.Y,{children:Object(O.jsx)(j.a,{name:"cil-map"})})}),Object(O.jsx)(d.S,Object(c.a)(Object(c.a)({type:"text"},F),{},{placeholder:"Aadhar Card no",autoComplete:"new-password",maxLength:"12"}))]})}),Object(O.jsx)(d.u,{md:"4",lg:"4",xl:"4",children:Object(O.jsxs)(d.V,{className:"mb-3",children:[Object(O.jsx)(d.X,{children:Object(O.jsx)(d.Y,{children:Object(O.jsx)(j.a,{name:"cil-map"})})}),Object(O.jsx)(d.S,Object(c.a)(Object(c.a)({type:"text"},I),{},{placeholder:"Name of the Nominee",autoComplete:"new-password"}))]})}),Object(O.jsx)(d.u,{md:"4",lg:"4",xl:"4",children:Object(O.jsxs)(d.V,{className:"mb-4",children:[Object(O.jsx)(d.X,{children:Object(O.jsx)(d.Y,{children:Object(O.jsx)(j.a,{name:"cil-map"})})}),Object(O.jsx)(d.S,{type:"autoComplete",id:"username",name:Z,autoComplete:Z,data:Z}),Object(O.jsx)(d.W,{children:Object(O.jsx)(d.Y,{className:"bg-info text-white",children:Object(O.jsx)(j.a,{name:"cilUser"})})})]})})]}),Object(O.jsxs)(d.wb,{className:"justify-content-center",children:[Object(O.jsx)(d.u,{md:"4",lg:"4",xl:"4",children:Object(O.jsxs)(d.V,{className:"mb-3",children:[Object(O.jsx)(d.X,{children:Object(O.jsx)(d.Y,{children:Object(O.jsx)(j.a,{name:"cil-map"})})}),Object(O.jsx)(d.S,Object(c.a)(Object(c.a)({type:"text"},k),{},{placeholder:"Enter the City/Village",autoComplete:"new-password"}))]})}),Object(O.jsx)(d.u,{md:"4",lg:"4",xl:"4",children:Object(O.jsxs)(d.V,{className:"mb-3",children:[Object(O.jsx)(d.X,{children:Object(O.jsx)(d.Y,{children:Object(O.jsx)(j.a,{name:"cil-map"})})}),Object(O.jsx)(d.S,Object(c.a)(Object(c.a)({type:"text"},P),{},{placeholder:"Enter District",autoComplete:"new-password",maxLength:"10"}))]})}),Object(O.jsx)(d.u,{md:"4",lg:"4",xl:"4",children:Object(O.jsxs)(d.V,{className:"mb-4",children:[Object(O.jsx)(d.X,{children:Object(O.jsx)(d.Y,{children:Object(O.jsx)(j.a,{name:"cil-map"})})}),Object(O.jsx)(d.S,Object(c.a)(Object(c.a)({type:"text"},D),{},{placeholder:"Mandal",autoComplete:"new-Address2"}))]})})]}),Object(O.jsxs)(d.wb,{className:"justify-content-center",children:[Object(O.jsx)(d.u,{md:"4",lg:"4",xl:"4",children:Object(O.jsxs)(d.V,{className:"mb-4",children:[Object(O.jsx)(d.X,{children:Object(O.jsx)(d.Y,{children:Object(O.jsx)(j.a,{name:"cil-map"})})}),Object(O.jsx)(d.S,Object(c.a)(Object(c.a)({type:"text"},E),{},{placeholder:"Enter PSBCS RegNo.",autoComplete:"new-Landline",maxLength:"10"}))]})}),Object(O.jsx)(d.u,{md:"4",lg:"4",xl:"4",children:Object(O.jsxs)(d.V,{className:"mb-3",children:[Object(O.jsx)(d.X,{children:Object(O.jsx)(d.Y,{children:Object(O.jsx)(j.a,{name:"cil-map"})})}),Object(O.jsx)(d.S,Object(c.a)(Object(c.a)({type:"text"},Y),{},{placeholder:"Name of the PSBCS",autoComplete:"new-password",maxLength:"10"}))]})}),Object(O.jsx)(d.u,{md:"4",lg:"4",xl:"4",children:Object(O.jsxs)(d.V,{className:"mb-4",children:[Object(O.jsx)(d.X,{children:Object(O.jsx)(d.Y,{children:Object(O.jsx)(j.a,{name:"cil-map"})})}),Object(O.jsx)(d.S,Object(c.a)(Object(c.a)({type:"text"},R),{},{placeholder:"Society Membership No",autoComplete:"new-Landline",maxLength:"10"}))]})})]}),Object(O.jsx)("hr",{}),Object(O.jsxs)(d.wb,{className:"justify-content-center",children:[Object(O.jsx)(d.u,{md:"4",lg:"4",xl:"4",children:Object(O.jsxs)(d.V,{className:"mb-3",children:[Object(O.jsx)(d.X,{children:Object(O.jsx)(d.Y,{children:Object(O.jsx)(j.a,{name:"cil-map"})})}),Object(O.jsx)(d.S,Object(c.a)(Object(c.a)({type:"text"},B),{},{placeholder:"Name of Veterinary Asst. Surgeon",autoComplete:"new-password",maxLength:"10"}))]})}),Object(O.jsx)(d.u,{md:"4",lg:"4",xl:"4",children:Object(O.jsxs)(d.V,{className:"mb-4",children:[Object(O.jsx)(d.X,{children:Object(O.jsx)(d.Y,{children:Object(O.jsx)(j.a,{name:"cil-map"})})}),Object(O.jsx)(d.S,Object(c.a)(Object(c.a)({type:"text"},X),{},{placeholder:"Address of Veterinary Institution",autoComplete:"new-Landline",maxLength:"10"}))]})}),Object(O.jsx)(d.u,{md:"4",lg:"4",xl:"4",children:Object(O.jsxs)(d.V,{className:"mb-3",children:[Object(O.jsx)(d.X,{children:Object(O.jsx)(d.Y,{children:Object(O.jsx)(j.a,{name:"cil-map"})})}),Object(O.jsx)(d.S,Object(c.a)(Object(c.a)({type:"text"},M),{},{placeholder:"Mobile No of Veterinary Sugeron",autoComplete:"new-password",maxLength:"10"}))]})})]}),Object(O.jsxs)(d.wb,{className:"justify-content-center",children:[Object(O.jsx)(d.u,{md:"4",lg:"4",xl:"4",children:Object(O.jsxs)(d.V,{className:"mb-4",children:[Object(O.jsx)(d.X,{children:Object(O.jsx)(d.Y,{children:"@"})}),Object(O.jsx)(d.S,Object(c.a)(Object(c.a)({type:"email"},U),{},{placeholder:"Email Id of Veterinary Sugeron",autoComplete:"new-Landline"}))]})}),Object(O.jsx)(d.u,{md:"4",lg:"4",xl:"4",children:Object(O.jsxs)(d.V,{className:"mb-3",children:[Object(O.jsx)(d.X,{children:Object(O.jsx)(d.Y,{children:Object(O.jsx)(j.a,{name:"cil-map"})})}),Object(O.jsx)(d.S,Object(c.a)(Object(c.a)({type:"text"},G),{},{placeholder:"Date Of Grounding",autoComplete:"new-password",maxLength:"10"}))]})}),Object(O.jsx)(d.u,{md:"4",lg:"4",xl:"4",children:Object(O.jsxs)(d.V,{className:"mb-4",children:[Object(O.jsx)(d.X,{children:Object(O.jsx)(d.Y,{children:Object(O.jsx)(j.a,{name:"cil-map"})})}),Object(O.jsx)(d.S,Object(c.a)(Object(c.a)({type:"text"},z),{},{placeholder:"Place of Grouding",autoComplete:"new-Landline",maxLength:"10"}))]})})]}),Object(O.jsxs)(d.wb,{className:"justify-content-center",children:[Object(O.jsx)(d.u,{md:"3",lg:"3",xl:"3",children:Object(O.jsxs)(d.V,{className:"mb-3",children:[Object(O.jsx)(d.X,{children:Object(O.jsx)(d.Y,{children:Object(O.jsx)(j.a,{name:"cil-map"})})}),Object(O.jsx)(d.S,Object(c.a)(Object(c.a)({type:"text"},H),{},{placeholder:"No of Sheep Produced",autoComplete:"new-password",maxLength:"10"}))]})}),Object(O.jsx)(d.u,{md:"3",lg:"3",xl:"3",children:Object(O.jsxs)(d.V,{className:"mb-4",children:[Object(O.jsx)(d.X,{children:Object(O.jsx)(d.Y,{children:Object(O.jsx)(j.a,{name:"cil-map"})})}),Object(O.jsx)(d.S,Object(c.a)(Object(c.a)({type:"text"},J),{},{placeholder:"Total Value Of Sheep",autoComplete:"new-Landline",maxLength:"10"}))]})}),Object(O.jsx)(d.u,{md:"2",lg:"2",xl:"2",children:Object(O.jsxs)(d.V,{className:"mb-3",children:[Object(O.jsx)(d.X,{children:Object(O.jsx)(d.Y,{children:Object(O.jsx)(j.a,{name:"cil-map"})})}),Object(O.jsx)(d.S,Object(c.a)(Object(c.a)({type:"text"},_),{},{placeholder:"Period From",autoComplete:"new-password",maxLength:"10"}))]})}),Object(O.jsx)(d.u,{md:"2",lg:"2",xl:"2",children:Object(O.jsxs)(d.V,{className:"mb-4",children:[Object(O.jsx)(d.X,{children:Object(O.jsx)(d.Y,{children:Object(O.jsx)(j.a,{name:"cil-map"})})}),Object(O.jsx)(d.S,Object(c.a)(Object(c.a)({type:"text"},Q),{},{placeholder:" Validity Time",autoComplete:"new-Landline",maxLength:"10"}))]})}),Object(O.jsx)(d.u,{md:"2",lg:"2",xl:"2",children:Object(O.jsxs)(d.V,{className:"mb-4",children:[Object(O.jsx)(d.X,{children:Object(O.jsx)(d.Y,{children:Object(O.jsx)(j.a,{name:"cil-map"})})}),Object(O.jsx)(d.S,Object(c.a)(Object(c.a)({type:"text"},W),{},{placeholder:"Valid Till Date",autoComplete:"new-Landline",maxLength:"10"}))]})})]}),Object(O.jsx)(d.wb,{md:"12",lg:"12",xl:"12",children:Object(O.jsx)(d.u,{children:Object(O.jsxs)(d.V,{className:"mb-4",children:[Object(O.jsx)(d.X,{children:Object(O.jsx)(d.Y,{children:Object(O.jsx)(j.a,{name:"cil-map"})})}),Object(O.jsx)(d.S,Object(c.a)(Object(c.a)({type:"text"},y),{},{placeholder:"Enter Remark",autoComplete:"new-Landline"}))]})})}),Object(O.jsxs)(d.wb,{children:[Object(O.jsx)(d.u,{children:Object(O.jsxs)(d.V,{className:"mb-4",children:[Object(O.jsx)(d.X,{children:Object(O.jsx)(d.Y,{children:Object(O.jsx)(j.a,{name:"cil-map"})})}),Object(O.jsx)(d.S,Object(c.a)(Object(c.a)({type:"text"},K),{},{placeholder:"Eneter Tag No of Sheep (20 ewes)",autoComplete:"new-Landline"}))]})}),Object(O.jsx)(d.u,{md:"1",lg:"1",xl:"1",children:Object(O.jsx)(d.f,{className:"mb-1",color:"success",block:!0,onClick:function(){if(""===q.value||""===K.value)return h.a.fire({icon:"info",title:"Tag No Cant be Empty",showConfirmButton:!1,timer:1e3}),!1;var e={Sno:b.a.TagList.length+1,RamTagNo:q.value,SheepTagNo:K.value};b.a.TagList.push(e)},children:"OK"})}),Object(O.jsx)(d.u,{children:Object(O.jsxs)(d.V,{className:"mb-4",children:[Object(O.jsx)(d.X,{children:Object(O.jsx)(d.Y,{children:Object(O.jsx)(j.a,{name:"cil-map"})})}),Object(O.jsx)(d.S,Object(c.a)(Object(c.a)({type:"text"},q),{},{placeholder:"Eneter the Ram Tag No.",autoComplete:"new-Landline",maxLength:"10"}))]})})]}),Object(O.jsxs)(d.wb,{children:[Object(O.jsx)(d.y,{items:ce,fields:["Sno",{key:"RamTagNo",_classes:"font-weight-bold"},"SheepTagNo"],hover:!0,striped:!0,itemsPerPage:5,activePage:g,clickableRows:!0,onRowClick:function(e){return t.push("/format1/".concat(e.Sno))},scopedSlots:{status:function(e){return Object(O.jsx)("td",{children:Object(O.jsx)(d.b,{color:"success",children:e.status})})}}}),Object(O.jsx)(d.sb,{activePage:g,onActivePageChange:function(e){s!==e&&t.push("/format1?page=".concat(e))},pages:5,doubleArrows:!1,align:"center"})]}),Object(O.jsxs)(d.wb,{children:[Object(O.jsx)(d.u,{children:Object(O.jsx)(d.f,{color:"success",block:!0,onClick:$,children:"Submit"})}),Object(O.jsx)(d.u,{children:Object(O.jsx)(d.f,{color:"primary",block:!0,onClick:ee,children:"Print"})}),Object(O.jsx)(d.u,{children:Object(O.jsx)(d.f,{color:"danger",block:!0,children:"Reset"})}),Object(O.jsx)(d.u,{children:Object(O.jsx)(d.f,{color:"info",block:!0,onClick:function(){e.history.push("/views/format1list")},children:"Format1 List"})})]})]})})})})})})})}},537:function(e,t,a){"use strict";a.r(t);a(1);var c=a(716),s=a(6);t.default=function(){return Object(s.jsxs)("div",{className:"c-app c-default-layout",children:[Object(s.jsx)(c.h,{}),Object(s.jsxs)("div",{className:"c-wrapper",children:[Object(s.jsx)(c.c,{}),Object(s.jsx)("div",{className:"c-body",children:Object(s.jsx)(c.a,{})}),Object(s.jsx)(c.b,{})]})]})}},704:function(e,t,a){"use strict";a(1);var c=a(133),s=a(21),l=a(44),r=a(401),i=a(716),n=a(6);t.a=function(){var e=Object(c.b)(),t=Object(c.c)((function(e){return e.sidebarShow}));return Object(n.jsxs)(s.M,{withSubheader:!0,children:[Object(n.jsx)(s.Qb,{inHeader:!0,className:"ml-md-3 d-lg-none",onClick:function(){var a=!![!1,"responsive"].includes(t)||"responsive";e({type:"set",sidebarShow:a})}}),Object(n.jsx)(s.Qb,{inHeader:!0,className:"ml-3 d-md-down-none",onClick:function(){var a=![!0,"responsive"].includes(t)&&"responsive";e({type:"set",sidebarShow:a})}}),Object(n.jsx)(s.N,{className:"mx-auto d-lg-none",to:"/",children:Object(n.jsx)(l.a,{name:"logo",height:"48",alt:"Logo"})}),Object(n.jsxs)(s.O,{className:"d-md-down-none mr-auto",children:[Object(n.jsx)(s.P,{className:"px-3",children:Object(n.jsx)(s.Q,{to:"/views/dashboard",children:"Dashboard"})}),Object(n.jsx)(s.P,{className:"px-3",children:Object(n.jsx)(s.Q,{to:"/views/users",children:"Users"})}),Object(n.jsx)(s.P,{className:"px-3",children:Object(n.jsx)(s.Q,{children:"Settings"})})]}),Object(n.jsxs)(s.O,{className:"px-3",children:[Object(n.jsx)(i.f,{}),Object(n.jsx)(i.g,{}),Object(n.jsx)(i.e,{}),Object(n.jsx)(i.d,{})]}),Object(n.jsxs)(s.Gb,{className:"px-3 justify-content-between",children:[Object(n.jsx)(s.e,{className:"border-0 c-subheader-nav m-0 px-0 px-md-3",routes:r.a}),Object(n.jsxs)("div",{className:"d-md-down-none mfe-2 c-subheader-nav",children:[Object(n.jsx)(s.db,{className:"c-subheader-nav-link",href:"#",children:Object(n.jsx)(l.a,{name:"cil-speech",alt:"Settings"})}),Object(n.jsxs)(s.db,{className:"c-subheader-nav-link","aria-current":"page",to:"/dashboard",children:[Object(n.jsx)(l.a,{name:"cil-graph",alt:"Dashboard"}),"\xa0Dashboard"]}),Object(n.jsxs)(s.db,{className:"c-subheader-nav-link",href:"#",children:[Object(n.jsx)(l.a,{name:"cil-settings",alt:"Settings"}),"\xa0Settings"]})]})]})]})}},708:function(e,t,a){"use strict";var c=a(46),s=a(1),l=a.n(s),r=a(15),i=a(21),n=a(401),d=a(6),j=Object(d.jsx)("div",{className:"pt-3 text-center",children:Object(d.jsx)("div",{className:"sk-spinner sk-spinner-pulse"})}),o=function(){return Object(d.jsx)("main",{className:"c-main",children:Object(d.jsx)(i.w,{fluid:!0,children:Object(d.jsx)(s.Suspense,{fallback:j,children:Object(d.jsxs)(r.d,{children:[n.a.map((function(e,t){return e.component&&Object(d.jsx)(r.b,{path:e.path,exact:e.exact,name:e.name,render:function(t){return Object(d.jsx)(i.H,{children:Object(d.jsx)(e.component,Object(c.a)({},t))})}},t)})),Object(d.jsx)(r.a,{from:"/dashboard",to:"/views/dashboard"}),Object(d.jsx)(r.a,{from:"/login",to:"/pages/login"})]})})})})};t.a=l.a.memo(o)},710:function(e,t,a){"use strict";var c=a(1),s=a.n(c),l=a(133),r=a(21),i=a(44),n=a(6),d=[{_tag:"CSidebarNavItem",name:"Dashboard",to:"/views/dashboard",icon:Object(n.jsx)(i.a,{name:"cil-speedometer",customClasses:"c-sidebar-nav-icon"}),badge:{color:"info",text:""}},{_tag:"CSidebarNavItem",name:"Register",to:"/register",icon:Object(n.jsx)(i.a,{name:"cil-user",customClasses:"c-sidebar-nav-icon"}),badge:{color:"info",text:""}},{_tag:"CSidebarNavItem",name:"Format1",to:"/views/format1",icon:Object(n.jsx)(i.a,{name:"cil-speedometer",customClasses:"c-sidebar-nav-icon"}),badge:{color:"info",text:""}},{_tag:"CSidebarNavItem",name:"Format3",to:"/views/format3",icon:Object(n.jsx)(i.a,{name:"cil-speedometer",customClasses:"c-sidebar-nav-icon"}),badge:{color:"info",text:""}}],j=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.sidebarShow}));return Object(n.jsxs)(r.yb,{show:t,onShowChange:function(t){return e({type:"set",sidebarShow:t})},children:[Object(n.jsx)(r.zb,{className:"d-md-down-none",to:"/dashboard",children:Object(n.jsx)("label",{children:"Fouress Insurance Broking Services Pvt Ltd "})}),Object(n.jsx)(r.Bb,{children:Object(n.jsx)(r.x,{items:d,components:{CSidebarNavDivider:r.Cb,CSidebarNavDropdown:r.Db,CSidebarNavItem:r.Eb,CSidebarNavTitle:r.Fb}})}),Object(n.jsx)(r.Ab,{className:"c-d-md-down-none"})]})};t.a=s.a.memo(j)},716:function(e,t,a){"use strict";a.d(t,"a",(function(){return c.a})),a.d(t,"b",(function(){return d})),a.d(t,"c",(function(){return j.a})),a.d(t,"d",(function(){return m})),a.d(t,"e",(function(){return h})),a.d(t,"f",(function(){return x})),a.d(t,"g",(function(){return O})),a.d(t,"h",(function(){return u.a}));var c=a(708),s=a(1),l=a.n(s),r=a(21),i=a(6),n=function(){return Object(i.jsx)(r.I,{fixed:!1,children:Object(i.jsxs)("div",{children:[Object(i.jsx)("a",{href:"#",rel:"noopener noreferrer",children:"UNITED INDIA INSURANCE COMPANY LIMITED. "}),Object(i.jsx)("span",{className:"ml-1",children:"(Please call on +91-7536825280 for Any Assistance)."})]})})},d=l.a.memo(n),j=a(704),o=(a(46),a(72),a(44)),b=a(15),m=function(e){var t=Object(b.g)();return Object(i.jsxs)(r.z,{inNav:!0,className:"c-header-nav-items mx-2",direction:"down",children:[Object(i.jsx)(r.E,{className:"c-header-nav-link",caret:!1,children:Object(i.jsx)("div",{className:"c-avatar",children:Object(i.jsx)(r.R,{src:"avatars/9.png",className:"c-avatar-img",alt:"abcd.com"})})}),Object(i.jsx)(r.D,{className:"pt-0",placement:"bottom-end",children:Object(i.jsxs)(r.C,{onClick:function(e){localStorage.clear(),t.push("/login")},children:[Object(i.jsx)(o.a,{name:"cil-lock-locked",className:"mfe-2"}),"Log Out"]})})]})},h=function(){return Object(i.jsxs)(r.z,{inNav:!0,className:"c-header-nav-item mx-2",direction:"down",children:[Object(i.jsxs)(r.E,{className:"c-header-nav-link",caret:!1,children:[Object(i.jsx)(o.a,{name:"cil-envelope-open"}),Object(i.jsx)(r.b,{shape:"pill",color:"info",children:4})]}),Object(i.jsxs)(r.D,{className:"pt-0",placement:"bottom-end",children:[Object(i.jsx)(r.C,{header:!0,tag:"div",color:"light",children:Object(i.jsxs)("strong",{children:["You have ",4," messages"]})}),Object(i.jsx)(r.C,{href:"#",children:Object(i.jsxs)("div",{className:"message",children:[Object(i.jsx)("div",{className:"pt-3 mr-3 float-left",children:Object(i.jsxs)("div",{className:"c-avatar",children:[Object(i.jsx)(r.R,{src:"avatars/7.jpg",className:"c-avatar-img",alt:"admin@bootstrapmaster.com"}),Object(i.jsx)("span",{className:"c-avatar-status bg-success"})]})}),Object(i.jsxs)("div",{children:[Object(i.jsx)("small",{className:"text-muted",children:"John Doe"}),Object(i.jsx)("small",{className:"text-muted float-right mt-1",children:"Just now"})]}),Object(i.jsxs)("div",{className:"text-truncate font-weight-bold",children:[Object(i.jsx)("span",{className:"fa fa-exclamation text-danger"})," Important message"]}),Object(i.jsx)("div",{className:"small text-muted text-truncate",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt..."})]})}),Object(i.jsx)(r.C,{href:"#",children:Object(i.jsxs)("div",{className:"message",children:[Object(i.jsx)("div",{className:"pt-3 mr-3 float-left",children:Object(i.jsxs)("div",{className:"c-avatar",children:[Object(i.jsx)(r.R,{src:"avatars/6.jpg",className:"c-avatar-img",alt:"admin@bootstrapmaster.com"}),Object(i.jsx)("span",{className:"c-avatar-status bg-warning"})]})}),Object(i.jsxs)("div",{children:[Object(i.jsx)("small",{className:"text-muted",children:"Jane Dovve"}),Object(i.jsx)("small",{className:"text-muted float-right mt-1",children:"5 minutes ago"})]}),Object(i.jsx)("div",{className:"text-truncate font-weight-bold",children:"Lorem ipsum dolor sit amet"}),Object(i.jsx)("div",{className:"small text-muted text-truncate",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt..."})]})}),Object(i.jsx)(r.C,{href:"#",children:Object(i.jsxs)("div",{className:"message",children:[Object(i.jsx)("div",{className:"pt-3 mr-3 float-left",children:Object(i.jsxs)("div",{className:"c-avatar",children:[Object(i.jsx)(r.R,{src:"avatars/5.jpg",className:"c-avatar-img",alt:"admin@bootstrapmaster.com"}),Object(i.jsx)("span",{className:"c-avatar-status bg-danger"})]})}),Object(i.jsxs)("div",{children:[Object(i.jsx)("small",{className:"text-muted",children:"Janet Doe"}),Object(i.jsx)("small",{className:"text-muted float-right mt-1",children:"1:52 PM"})]}),Object(i.jsx)("div",{className:"text-truncate font-weight-bold",children:"Lorem ipsum dolor sit amet"}),Object(i.jsx)("div",{className:"small text-muted text-truncate",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt..."})]})}),Object(i.jsx)(r.C,{href:"#",children:Object(i.jsxs)("div",{className:"message",children:[Object(i.jsx)("div",{className:"pt-3 mr-3 float-left",children:Object(i.jsxs)("div",{className:"c-avatar",children:[Object(i.jsx)(r.R,{src:"avatars/4.jpg",className:"c-avatar-img",alt:"admin@bootstrapmaster.com"}),Object(i.jsx)("span",{className:"c-avatar-status bg-info"})]})}),Object(i.jsxs)("div",{children:[Object(i.jsx)("small",{className:"text-muted",children:"Joe Doe"}),Object(i.jsx)("small",{className:"text-muted float-right mt-1",children:"4:03 AM"})]}),Object(i.jsx)("div",{className:"text-truncate font-weight-bold",children:"Lorem ipsum dolor sit amet"}),Object(i.jsx)("div",{className:"small text-muted text-truncate",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt..."})]})}),Object(i.jsx)(r.C,{href:"#",className:"text-center border-top",children:Object(i.jsx)("strong",{children:"View all messages"})})]})]})},x=function(){return Object(i.jsxs)(r.z,{inNav:!0,className:"c-header-nav-item mx-2",children:[Object(i.jsxs)(r.E,{className:"c-header-nav-link",caret:!1,children:[Object(i.jsx)(o.a,{name:"cil-bell"}),Object(i.jsx)(r.b,{shape:"pill",color:"danger",children:5})]}),Object(i.jsxs)(r.D,{placement:"bottom-end",className:"pt-0",children:[Object(i.jsx)(r.C,{header:!0,tag:"div",className:"text-center",color:"light",children:Object(i.jsxs)("strong",{children:["You have ",5," notifications"]})}),Object(i.jsxs)(r.C,{children:[Object(i.jsx)(o.a,{name:"cil-user-follow",className:"mr-2 text-success"})," New user registered"]}),Object(i.jsxs)(r.C,{children:[Object(i.jsx)(o.a,{name:"cil-user-unfollow",className:"mr-2 text-danger"})," User deleted"]}),Object(i.jsxs)(r.C,{children:[Object(i.jsx)(o.a,{name:"cil-chart-pie",className:"mr-2 text-info"})," Sales report is ready"]}),Object(i.jsxs)(r.C,{children:[Object(i.jsx)(o.a,{name:"cil-basket",className:"mr-2 text-primary"})," New client"]}),Object(i.jsxs)(r.C,{children:[Object(i.jsx)(o.a,{name:"cil-speedometer",className:"mr-2 text-warning"})," Server overloaded"]}),Object(i.jsx)(r.C,{header:!0,tag:"div",color:"light",children:Object(i.jsx)("strong",{children:"Server"})}),Object(i.jsxs)(r.C,{className:"d-block",children:[Object(i.jsx)("div",{className:"text-uppercase mb-1",children:Object(i.jsx)("small",{children:Object(i.jsx)("b",{children:"CPU Usage"})})}),Object(i.jsx)(r.ub,{size:"xs",color:"info",value:25}),Object(i.jsx)("small",{className:"text-muted",children:"348 Processes. 1/4 Cores."})]}),Object(i.jsxs)(r.C,{className:"d-block",children:[Object(i.jsx)("div",{className:"text-uppercase mb-1",children:Object(i.jsx)("small",{children:Object(i.jsx)("b",{children:"Memory Usage"})})}),Object(i.jsx)(r.ub,{size:"xs",color:"warning",value:70}),Object(i.jsx)("small",{className:"text-muted",children:"11444GB/16384MB"})]}),Object(i.jsxs)(r.C,{className:"d-block",children:[Object(i.jsx)("div",{className:"text-uppercase mb-1",children:Object(i.jsx)("small",{children:Object(i.jsx)("b",{children:"SSD 1 Usage"})})}),Object(i.jsx)(r.ub,{size:"xs",color:"danger",value:90}),Object(i.jsx)("small",{className:"text-muted",children:"243GB/256GB"})]})]})]})},O=function(){return Object(i.jsxs)(r.z,{inNav:!0,className:"c-header-nav-item mx-2",children:[Object(i.jsxs)(r.E,{className:"c-header-nav-link",caret:!1,children:[Object(i.jsx)(o.a,{name:"cil-list"}),Object(i.jsx)(r.b,{shape:"pill",color:"warning",children:5})]}),Object(i.jsxs)(r.D,{placement:"bottom-end",className:"pt-0",children:[Object(i.jsx)(r.C,{header:!0,tag:"div",className:"text-center",color:"light",children:Object(i.jsxs)("strong",{children:["You have ",5," pending tasks"]})}),Object(i.jsxs)(r.C,{className:"d-block",children:[Object(i.jsxs)("div",{className:"small mb-1",children:["Upgrade NPM & Bower ",Object(i.jsx)("span",{className:"float-right",children:Object(i.jsx)("strong",{children:"0%"})})]}),Object(i.jsx)(r.ub,{size:"xs",color:"info",value:0})]}),Object(i.jsxs)(r.C,{className:"d-block",children:[Object(i.jsxs)("div",{className:"small mb-1",children:["ReactJS Version ",Object(i.jsx)("span",{className:"float-right",children:Object(i.jsx)("strong",{children:"25%"})})]}),Object(i.jsx)(r.ub,{size:"xs",color:"danger",value:25})]}),Object(i.jsxs)(r.C,{className:"d-block",children:[Object(i.jsxs)("div",{className:"small mb-1",children:["VueJS Version ",Object(i.jsx)("span",{className:"float-right",children:Object(i.jsx)("strong",{children:"50%"})})]}),Object(i.jsx)(r.ub,{size:"xs",color:"warning",value:50})]}),Object(i.jsxs)(r.C,{className:"d-block",children:[Object(i.jsxs)("div",{className:"small mb-1",children:["Add new layouts ",Object(i.jsx)("span",{className:"float-right",children:Object(i.jsx)("strong",{children:"75%"})})]}),Object(i.jsx)(r.ub,{size:"xs",color:"info",value:75})]}),Object(i.jsxs)(r.C,{className:"d-block",children:[Object(i.jsxs)("div",{className:"small mb-1",children:["Angular 2 Cli Version ",Object(i.jsx)("span",{className:"float-right",children:Object(i.jsx)("strong",{children:"100%"})})]}),Object(i.jsx)(r.ub,{size:"xs",color:"success",value:100})]}),Object(i.jsx)(r.C,{className:"text-center border-top",children:Object(i.jsx)("strong",{children:"View all tasks"})})]})]})},u=(a(537),a(710))},796:function(e,t,a){"use strict"}}]);
//# sourceMappingURL=8.3a399c57.chunk.js.map