(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[23],{537:function(e,t,a){"use strict";a.r(t);a(1);var n=a(708),r=a(6);t.default=function(){return Object(r.jsxs)("div",{className:"c-app c-default-layout",children:[Object(r.jsx)(n.e,{}),Object(r.jsxs)("div",{className:"c-wrapper",children:[Object(r.jsx)(n.c,{}),Object(r.jsx)("div",{className:"c-body",children:Object(r.jsx)(n.a,{})}),Object(r.jsx)(n.b,{})]})]})}},573:function(e,t,a){"use strict";a.r(t);var n=a(37),r=a.n(n),s=a(57),c=a(99),l=a(100),i=a(102),o=a(101),d=a(1),u=a(21),b=a(44),j=(a(870),a(704),a(97)),h=a(59),m=a.n(h),x=(a(185),a(770),a(787)),g=(a(873),a(816)),p=a(777),O=a.n(p),f=(a(819),a(6)),S=function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).SaveData=Object(s.a)(r.a.mark((function e(){var t,a,s,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=new Headers).append("Content-Type","application/json; charset=utf-8"),a={RegistrationNo:n.state.RegistrationNo,FullName:n.state.FullName,FatherName:n.state.AadharCardNo,LossDate:n.state.LossDate,District:n.state.District,Mandal:n.state.Mandal,Village:n.state.Village,VasName:n.state.VasName,PresidentName:n.state.PSBCSName,PDistrict:n.state.PDistrict,PMandal:n.state.PMandal,PVillage:n.state.PVillage,TagNo:n.state.TagNo,InsuranceNo:n.state.InsuranceNo,RequestDate:n.state.RequestDate,ReTagDate:n.state.ReTagDate,FarmerId:n.state.FarmerId,PolicyNo:n.state.PolicyNo,RamTagNo:n.state.ramtagno},s=JSON.stringify(a),console.log(s),c={method:"POST",mode:"cors",headers:t,body:s},e.next=9,fetch(j.a.SYSTEM_SETTINGS.API_URL+"/format/taglossins",c).then((function(e){return e.json()})).then((function(e){console.log(e),n.state.formid=e.id,m.a.fire({icon:"success",title:"TagDetail Saved, TagLoss No is "+e.id,showConfirmButton:!1,timer:1500}),console.log(e)}));case 9:case"end":return e.stop()}}),e)}))),n.gotolist=function(){n.props.history.push("/views/format4list")},n.home=function(){n.props.history.push("/views/dashboard")},n.handleDelete=function(e){var t=n.state.TagDetail.filter((function(t){return t.Sno!==e}));j.a.TagList=t},n.pageChange=function(){var e=Object(s.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.setState({page:t});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.AddTagNo=Object(s.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t={Sno:j.a.TagList.length+1,RamTagNo:n.state.ramtagno,SheepTagNo:n.state.sheeptagno,Age:n.state.AnimalAge,Amount:n.state.Amount},j.a.TagList.push(t),n.pageChange();case 4:case"end":return e.stop()}}),e)}))),n.selectDistrictValue=function(){var e=Object(s.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.setState({SelectedDistrict:t.value});case 2:j.a.Mandal=[],n.getMandal();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.selectMandalValue=function(){var e=Object(s.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.state.SelectedMandal=t.value,e.next=3,n.setState({SelectedMandal:t.value});case 3:console.log(n.state.SelectedMandal),j.a.Village=[],n.getVillage(n.state.SelectedMandal);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.selectVillageValue=function(){var e=Object(s.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.setState({SelectedVillage:t.value});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.getPolicy=Object(s.a)(r.a.mark((function e(){var t,a,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(n.state.SelectedTagNo),(t=new Headers).append("Content-Type","application/json; charset=utf-8"),t.append("Access-Control-Allow-Origin","*"),a=[],s=j.a.SYSTEM_SETTINGS.API_URL+"/common/GetPolicyByTagNoTagLoss/"+n.state.SelectedTagNo,e.next=8,fetch(s,t).then((function(e){return e.json()})).then((function(e){return a=e}));case 8:return j.a.PolicyDetails=a[0],console.log(j.a.PolicyDetails),e.next=13,n.setState({RegistrationNo:j.a.PolicyDetails.RegistrationNo});case 13:return e.next=15,n.setState({FullName:j.a.PolicyDetails.FullName});case 15:return e.next=17,n.setState({FatherName:j.a.PolicyDetails.FullName});case 17:return e.next=19,n.setState({District:j.a.PolicyDetails.District});case 19:return e.next=21,n.setState({Mandal:j.a.PolicyDetails.Mandal});case 21:return e.next=23,n.setState({Village:j.a.PolicyDetails.Village});case 23:return e.next=25,n.setState({FarmerId:j.a.PolicyDetails.FarmerId});case 25:return e.next=27,n.setState({ramtagno:j.a.PolicyDetails.RamTagNo});case 27:return e.next=29,n.setState({PolicyNo:j.a.PolicyDetails.PolicyNo});case 29:case"end":return e.stop()}}),e)}))),n.selectPolicyValue=function(e){n.state.SelectedPolicy=e.value,n.getPolicyDetails(n.state.SelectedPolicy)},n.getMandal=Object(s.a)(r.a.mark((function e(){var t,a,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=new Headers).append("Content-Type","application/json; charset=utf-8"),t.append("Access-Control-Allow-Origin","*"),a=[],s=j.a.SYSTEM_SETTINGS.API_URL+"/common/Mandal/"+n.state.SelectedDistrict,e.next=7,fetch(s,t).then((function(e){return e.json()})).then((function(e){return a=e}));case 7:return e.next=9,n.setState({arrMandal:a});case 9:case"end":return e.stop()}}),e)}))),n.getVillage=function(){var e=Object(s.a)(r.a.mark((function e(t){var a,s,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j.a.Village=[],(a=new Headers).append("Content-Type","application/json; charset=utf-8"),a.append("Access-Control-Allow-Origin","*"),s=[],c=j.a.SYSTEM_SETTINGS.API_URL+"/common/Village/"+t,e.next=9,fetch(c,a).then((function(e){return e.json()})).then((function(e){return s=e}));case 9:return e.next=11,n.setState({arrVillage:s});case 11:console.log(n.state.Village);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.getPolicyDetails=function(){var e=Object(s.a)(r.a.mark((function e(t){var a,s,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=new Headers).append("Content-Type","application/json; charset=utf-8"),a.append("Access-Control-Allow-Origin","*"),s=[],c=j.a.SYSTEM_SETTINGS.API_URL+"/format/searchById/"+t,e.next=7,fetch(c,a).then((function(e){return e.json()})).then((function(e){return s=e}));case 7:return j.a.PolicyDetails=s.response[0],console.log(j.a.PolicyDetails),e.next=11,n.setState({RegistrationNo:j.a.PolicyDetails.RegistrationNo});case 11:return e.next=13,n.setState({FullName:j.a.PolicyDetails.FullName});case 13:return e.next=15,n.setState({DOB:j.a.PolicyDetails.DOB});case 15:return e.next=17,n.setState({SelectedDistrict:j.a.PolicyDetails.District});case 17:return e.next=19,n.setState({SelectedMandal:j.a.PolicyDetails.Mandal});case 19:return e.next=21,n.setState({SelectedVillage:j.a.PolicyDetails.Village});case 21:return e.next=23,n.setState({PSBCSName:j.a.PolicyDetails.PSBCSName});case 23:return e.next=25,n.setState({AadharCardNo:j.a.PolicyDetails.AadharCardNo});case 25:return e.next=27,n.setState({InsuracePeriodFrom:j.a.PolicyDetails.InsuracePeriodFrom});case 27:return e.next=29,n.setState({InsuracePeriodTo:j.a.PolicyDetails.InsuracePeriodTo});case 29:return e.next=31,n.setState({FarmerId:j.a.PolicyDetails.FarmerId});case 31:return e.next=33,n.setState({ramtagno:j.a.PolicyDetails.RamTagNo});case 33:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.componentWillMount=function(){n.getDitrict()},n.createPDF=Object(s.a)(r.a.mark((function e(){var t,a,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return new g.a,t=window.open("","PRINT","height=750,width=700,top=100,left=150"),j.a.Format1obj=[],a={method:"GET",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"http://localhost:5008"}},s=j.a.SYSTEM_SETTINGS.API_URL+"/format/TagLoss/"+n.state.formid,e.next=7,fetch(s,a).then((function(e){return e.json()})).then((function(e){return j.a.Format1obj=e}));case 7:console.log(JSON.stringify(j.a.Format1obj.length)),console.log(j.a.Format1obj[0]),null!==j.a.Format1obj&&(t.document.write('<!doctype html><html><head><meta charset="utf-8"><title>Tag Loss Form </title><style>.invoice-box {max-width: 100%;margin: auto;padding: 0px;box-shadow: 0 0 10px rgba(0, 0, 0, .15); font-size: 16px;line-height: 24px;font-family: "Helvetica Neue", "Helvetica", Helvetica, Arial, sans-serif;color: #555;   }.invoice-box table {width: 100%; line-height: inherit;text-align: left;}.invoice-box table td { padding: 0px;vertical-align: top;}.invoice-box table tr td:nth-child(2) {}.invoice-box table tr.top table td {padding-bottom: 0px;}.invoice-box table tr.top table td.title {font-size: 45px;line-height: 45px;}.invoice-box table tr.information table td {padding-bottom: 40px;}.invoice-box table tr.heading td {background: #eee;border-bottom: 1px solid #ddd;font-weight: bold;}.invoice-box table tr.details td {padding-bottom: 0px;}.invoice-box table tr.item td{ border-bottom: 1px solid #eee;}.invoice-box table tr.item.last td {border-bottom: none;}.invoice-box table tr.total td:nth-child(2) {border-top: 2px solid #eee;font-weight: bold;} @media only screen and (max-width: 600px) {.invoice-box table tr.top table td {width: 100%;display: block;text-align: center;}.invoice-box table tr.information table td {width: 100%;display: block;text-align: center;}}   /** RTL **/table, th, td {border: 1px  black;}</style></head><body><div class="invoice-box"><div style="text-align:center;"><h4>NEW INDIA ASSURANCE COMPANY LIMITED</br> D.O.IX, UIIC TOWERS, BASHEERBAGH, HYDERABAD-500029 </br> TSSGDCFL SHEEP INSURANCE MASTER POLICY NO .... /UIIC2021</br> CERTIFICATE OF INSURANCE No</h4> </div><hr></hr><div style="text-align:center;">TAG LOSS INTIMATION FORM UNDER SRDP SCHEME OS TSSGDCFL </br><u>INTIMATION BY BENEFICIARY</u> </div><hr></hr><table><tr class="heading"><td>Tag Loss No : '+j.a.Format1obj[0].RegistrationNo+" ("+j.a.Format1obj[0].id+")</br></td><td>Tag Loss Date :"+O()(j.a.Format1obj[0].ClaimDate).format("DD MMM YYYY")+'</br></td></tr></table><table cellpadding="0" cellspacing="0"><tr class="top"><td colspan="2"><table><tr ><td colspan="2"></td></tr><tr  style=" border: 1px solid red;"><td ><table  class= "left"><tr border: 1px solid Black;><td width="20%" >Beneficiary Name:</td><td width="50%" style="text-align:left;">'+j.a.Format1obj[0].FullName+'</td></tr></table> </td><td style="text-align:left;"><table><tr><td width="50%">Village & Mandal</td><td width="50%" >'+j.a.Format1obj[0].AadharCardNo+'</td></tr><tr><td width="50%" >District</td><td width="50%" >'+j.a.Format1obj[0].District+'</td></tr></table></td></tr></table><hr></hr><div style="text-align:left;">To</br> The Veterinary Asst. Surgeon/Para-Veterinarial </br>Primary Veterinary Centre/SCAH,</br> <u>ABCD</u> <br> (or)</br> President </br>Name of Sheep Society: <u></u></br>Village: <u></u></br>Mandal: <u></u></br> </div><div "><h4 style="text-align:center"><u>Sub: LOSS OF EAR TAG NO.122355 OF MY SHEEP</u>  </h4><p><i>i hereby bring to your kind notice that sheep ear tag No. <u>12235</u> of my sheep covered </br>  under certificate of insurance No.<u>'+j.a.Format1obj[0].RegistrationNo+"("+j.a.Format1obj[0].id+') </u>is lost/broken on <u>22 July 2021</u> I request you to kindly retag my sheep.   </i></p> </div><div "><h4 style="text-align:center"><u>CERTIFICATE BY VAS/PARA-VETERINARIAN PRESIDENT OF PSBCS</u>  </h4> A) Date & Time of receipt of request from beneficiary : <u>Ankit</u> </br> B) Retagging Done On:  <u></u></br> C) Retagged ear tag No:  <u></u></br> D) Date of intimation about retagging to New India Assurance Pvt Ltd: : <u> 20 July 2021</u></br> </div><p><i>i hereby certify that above sheep belonging to Sri/Smt.  <u>Ankit </u> of <u>XXXX </u> Village, <u>YYYY </u>Mandal, <u>ZZZZZZZZZ District</u>   has been retagged with New Tag No.<u> 56552525 </u> replacing old tag no <u>22 July 2021</u>  </i></p><div style="text-align:right;"> </br>Signature on Beneficiary </i></p> </div><hr></hr></table><table><tr><td width="50%"> <i>Place:Agra </br>Date: </br></i></td><td width="50%" style="text-align:center" ></br></br> <i>Signature & Seal of VAS/ </br> Para-Veterinarian/President of Sheep Society</i></td></tr></table><table><tr><td><b></br></br></b></td><td></td></tr><tr ><td><b>Facsimille signature: </b> </br><b>For NEW INDIA ASSURANCE COMPANY LIMITED, </b> </br></br></br><b>(Authorised Signatory)</b> </br></td><td></td></tr></table></div></body></html>'),t.document.close(),t.focus(),t.print(),t.close());case 10:case"end":return e.stop()}}),e)}))),n.getDitrict=Object(s.a)(r.a.mark((function e(){var t,a,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=new Headers).append("Content-Type","application/json; charset=utf-8"),t.append("Access-Control-Allow-Origin","*"),a=[],s=j.a.SYSTEM_SETTINGS.API_URL+"/common/District",e.next=7,fetch(s,t).then((function(e){return e.json()})).then((function(e){return a=e.response}));case 7:return e.next=9,n.setState({arrDistrict:a});case 9:case"end":return e.stop()}}),e)}))),n.state={RegistrationNo:"",FullName:"",FatherName:"",LossDate:"",District:"",Mandal:"",Village:"",VasName:"",PresidentName:"",PDistrict:"",PMandal:"",PVillage:"",TagNo:"",InsuranceNo:"",RequestDate:"",ReTagDate:"",SelectedTagNo:"",ramtagno:"",PolicyNo:"",FarmerId:"",Remark:"",searchedPolicy:[],arrDistrict:[],arrMandal:[],arrVillage:[],hasError:!1},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return this.state.hasError?Object(f.jsx)("h1",{children:"Something went wrong."}):Object(f.jsx)(u.w,{children:Object(f.jsx)(u.wb,{className:"justify-content-center",children:Object(f.jsx)(u.u,{md:"12",lg:"12",xl:"12",children:Object(f.jsx)(u.j,{className:"mx-12",children:Object(f.jsx)(u.k,{className:"p-12",children:Object(f.jsxs)(u.J,{children:[Object(f.jsx)("h4",{className:"align-center",children:"Tag Loss"}),Object(f.jsx)("p",{className:"text-muted"}),Object(f.jsxs)(u.wb,{children:[Object(f.jsx)(u.u,{children:Object(f.jsxs)(u.V,{className:"mb-4",children:[Object(f.jsx)(u.X,{children:Object(f.jsxs)(u.Y,{style:{backgroundColor:"lightyellow",color:"grey"},children:[Object(f.jsx)(b.a,{name:"cil-map"}),"\xa0Tag No"]})}),Object(f.jsx)(u.S,{type:"text",placeholder:"Enter Tag  No",autoComplete:"new-Landline",value:this.state.SelectedTagNo,onChange:function(t){return e.setState({SelectedTagNo:t.target.value})}})]})}),Object(f.jsx)(u.u,{md:"1",lg:"1",xl:"1",children:Object(f.jsx)(u.f,{className:"mb-1",color:"success",block:!0,onClick:this.getPolicy,children:"Search"})}),Object(f.jsx)(u.u,{})]}),Object(f.jsx)("hr",{}),Object(f.jsxs)(u.wb,{className:"justify-content-center",children:[Object(f.jsx)(u.u,{md:"4",lg:"4",xl:"4",children:Object(f.jsxs)(u.V,{className:"mb-3",children:[Object(f.jsx)(u.X,{children:Object(f.jsxs)(u.Y,{style:{backgroundColor:"lightyellow",color:"grey"},children:[Object(f.jsx)(b.a,{name:"cil-user"}),"\xa0Full Name"]})}),Object(f.jsx)(u.S,{type:"text",placeholder:"Full Name of the Beneficiary",autoComplete:"",value:this.state.FullName,onChange:function(t){return e.setState({FullName:t.target.value})}})]})}),Object(f.jsx)(u.u,{md:"4",lg:"4",xl:"4",children:Object(f.jsxs)(u.V,{className:"mb-3",children:[Object(f.jsx)(u.X,{children:Object(f.jsxs)(u.Y,{style:{backgroundColor:"lightyellow",color:"grey"},children:[Object(f.jsx)(b.a,{name:"cil-user"}),"\xa0Father Name"]})}),Object(f.jsx)(u.S,{type:"text",placeholder:"FatherName",autoComplete:"new-password",value:this.state.FatherName,onChange:function(t){return e.setState({FatherName:t.target.value})}})]})}),Object(f.jsx)(u.u,{md:"4",lg:"4",xl:"4",children:Object(f.jsxs)(u.V,{className:"mb-3",children:[Object(f.jsx)(u.X,{children:Object(f.jsxs)(u.Y,{style:{backgroundColor:"lightyellow",color:"grey"},children:[Object(f.jsx)(b.a,{name:"cil-map"})," \xa0Loss Date"]})}),Object(f.jsx)(u.S,{type:"date",autoComplete:"new-password",value:this.state.LossDate,onChange:function(t){return e.setState({LossDate:t.target.value})}})]})})]}),Object(f.jsxs)(u.wb,{className:"justify-content-center",children:[Object(f.jsx)(u.u,{md:"4",lg:"4",xl:"4",children:Object(f.jsxs)(u.V,{children:[Object(f.jsx)(u.X,{children:Object(f.jsxs)(u.Y,{style:{backgroundColor:"lightyellow",color:"grey"},children:[Object(f.jsx)(b.a,{name:"cil-map"}),"\xa0District"]})}),Object(f.jsx)(u.S,{type:"text",placeholder:"Enter District",autoComplete:"new-Landline",value:this.state.District,onChange:function(t){return e.setState({District:t.target.value})}})]})}),Object(f.jsx)(u.u,{md:"4",lg:"4",xl:"4",children:Object(f.jsxs)(u.V,{children:[Object(f.jsx)(u.X,{children:Object(f.jsxs)(u.Y,{style:{backgroundColor:"lightyellow",color:"grey"},children:[Object(f.jsx)(b.a,{name:"cil-map"}),"\xa0Mandal"]})}),Object(f.jsx)(u.S,{type:"text",placeholder:"Enter Mandal",autoComplete:"new-Landline",value:this.state.Mandal,onChange:function(t){return e.setState({Mandal:t.target.value})}})]})}),Object(f.jsx)(u.u,{md:"4",lg:"4",xl:"4",children:Object(f.jsxs)(u.V,{children:[Object(f.jsx)(u.X,{children:Object(f.jsxs)(u.Y,{style:{backgroundColor:"lightyellow",color:"grey"},children:[Object(f.jsx)(b.a,{name:"cil-map"}),"\xa0Village"]})}),Object(f.jsx)(u.S,{type:"text",placeholder:"Enter Village",autoComplete:"new-Landline",value:this.state.Village,onChange:function(t){return e.setState({Village:t.target.value})}})]})})]}),Object(f.jsx)("hr",{}),Object(f.jsxs)(u.wb,{className:"justify-content-center",children:[Object(f.jsx)(u.u,{md:"5",lg:"5",xl:"5",children:Object(f.jsxs)(u.V,{className:"mb-3",children:[Object(f.jsx)(u.X,{children:Object(f.jsxs)(u.Y,{style:{backgroundColor:"lightyellow",color:"grey"},children:[Object(f.jsx)(b.a,{name:"cil-user"}),"\xa0VAS Name"]})}),Object(f.jsx)(u.S,{type:"text",placeholder:"VAS Sergeon Name",autoComplete:"",value:this.state.VasName,onChange:function(t){return e.setState({VasName:t.target.value})}})]})}),Object(f.jsx)(u.u,{md:"1",lg:"1",xl:"1",children:"OR"}),Object(f.jsx)(u.u,{md:"6",lg:"6",xl:"6",children:Object(f.jsxs)(u.V,{className:"mb-3",children:[Object(f.jsx)(u.X,{children:Object(f.jsxs)(u.Y,{style:{backgroundColor:"lightyellow",color:"grey"},children:[Object(f.jsx)(b.a,{name:"cil-map"})," \xa0President Name"]})}),Object(f.jsx)(u.S,{type:"text",placeholder:"Sheep Society President Name",autoComplete:"new-password",value:this.state.PresidentName,onChange:function(t){return e.setState({PresidentName:t.target.value})}})]})})]}),Object(f.jsxs)(u.wb,{className:"justify-content-center",children:[Object(f.jsx)(u.u,{md:"4",lg:"4",xl:"4",children:Object(f.jsx)(x.a,{options:this.state.arrDistrict,placeholder:"Select District",value:this.state.arrDistrict.find((function(t){return t.value==e.state.SelectedDistrict})),onChange:this.selectDistrictValue,onFocus:this.getDitrict})}),Object(f.jsx)(u.u,{md:"4",lg:"4",xl:"4",children:Object(f.jsx)(x.a,{options:this.state.arrMandal,placeholder:"Select Mandal",value:j.a.Mandal.find((function(t){return t.value==e.state.SelectedMandal})),onFocus:this.getMandal,onChange:this.selectMandalValue})}),Object(f.jsx)(u.u,{md:"4",lg:"4",xl:"4",children:Object(f.jsx)(x.a,{options:this.state.arrVillage,placeholder:"Select Village",onFocus:this.getVillage,value:this.state.arrVillage.find((function(t){return t.value==e.state.SelectedVillage})),onChange:this.selectVillageValue})})]}),Object(f.jsx)("hr",{}),Object(f.jsxs)(u.wb,{className:"justify-content-center",children:[Object(f.jsx)(u.u,{md:"3",lg:"3",xl:"3",children:Object(f.jsxs)(u.V,{className:"mb-3",children:[Object(f.jsx)(u.X,{children:Object(f.jsxs)(u.Y,{style:{backgroundColor:"lightyellow",color:"grey"},children:[Object(f.jsx)(b.a,{name:"cil-map"})," \xa0LossedTag No"]})}),Object(f.jsx)(u.S,{type:"text",placeholder:"Lossed Tag No",autoComplete:""})]})}),Object(f.jsx)(u.u,{md:"3",lg:"3",xl:"3",children:Object(f.jsxs)(u.V,{className:"mb-3",children:[Object(f.jsx)(u.X,{children:Object(f.jsxs)(u.Y,{style:{backgroundColor:"lightyellow",color:"grey"},children:[Object(f.jsx)(b.a,{name:"cil-map"})," \xa0Insuarance No"]})}),Object(f.jsx)(u.S,{type:"text",placeholder:"Insuarance No",autoComplete:""})]})}),Object(f.jsx)(u.u,{md:"3",lg:"3",xl:"3",children:Object(f.jsxs)(u.V,{className:"mb-3",children:[Object(f.jsx)(u.X,{children:Object(f.jsxs)(u.Y,{style:{backgroundColor:"lightyellow",color:"grey"},children:[Object(f.jsx)(b.a,{name:"cil-map"})," \xa0Request Date"]})}),Object(f.jsx)(u.S,{type:"date",autoComplete:"new-password",value:this.state.GroudingDate,onChange:function(t){return e.setState({GroudingDate:t.target.value})}})]})}),Object(f.jsx)(u.u,{md:"3",lg:"3",xl:"3",children:Object(f.jsxs)(u.V,{className:"mb-3",children:[Object(f.jsx)(u.X,{children:Object(f.jsxs)(u.Y,{style:{backgroundColor:"lightyellow",color:"grey"},children:[Object(f.jsx)(b.a,{name:"cil-map"})," \xa0Retag  Date"]})}),Object(f.jsx)(u.S,{type:"date",autoComplete:"new-password",value:this.state.GroudingDate,onChange:function(t){return e.setState({GroudingDate:t.target.value})}})]})})]}),Object(f.jsxs)(u.wb,{md:"12",lg:"12",xl:"12",children:[Object(f.jsx)(u.u,{md:"4",lg:"4",xl:"4",children:Object(f.jsxs)(u.V,{className:"mb-3",children:[Object(f.jsx)(u.X,{children:Object(f.jsxs)(u.Y,{style:{backgroundColor:"lightyellow",color:"grey"},children:[Object(f.jsx)(b.a,{name:"cil-map"}),"\xa0RamTag No"]})}),Object(f.jsx)(u.S,{type:"text",placeholder:"Enter RamTag No",autoComplete:"new-Landline",value:this.state.ramtagno,onChange:function(t){return e.setState({ramtagno:t.target.value})}})]})}),Object(f.jsx)(u.u,{md:"4",lg:"4",xl:"4",children:Object(f.jsxs)(u.V,{className:"mb-3",children:[Object(f.jsx)(u.X,{children:Object(f.jsxs)(u.Y,{style:{backgroundColor:"lightyellow",color:"grey"},children:[Object(f.jsx)(b.a,{name:"cil-map"}),"\xa0Policy No"]})}),Object(f.jsx)(u.S,{type:"text",placeholder:"Enter Policy No",autoComplete:"new-Landline",value:this.state.PolicyNo,onChange:function(t){return e.setState({PolicyNo:t.target.value})}})]})}),Object(f.jsx)(u.u,{md:"4",lg:"4",xl:"4",children:Object(f.jsxs)(u.V,{className:"mb-4",children:[Object(f.jsx)(u.X,{children:Object(f.jsxs)(u.Y,{style:{backgroundColor:"lightyellow",color:"grey"},children:[Object(f.jsx)(b.a,{name:"cil-map"}),"\xa0"]})}),Object(f.jsx)(u.S,{type:"text",placeholder:"Enter Remark",autoComplete:"new-Landline",value:this.state.Remark,onChange:function(t){return e.setState({Remark:t.target.value})}})]})})]}),Object(f.jsxs)(u.wb,{children:[Object(f.jsx)(u.u,{children:Object(f.jsx)(u.f,{color:"success",block:!0,onClick:this.SaveData,children:"Submit"})}),Object(f.jsx)(u.u,{children:Object(f.jsx)(u.f,{color:"primary",block:!0,onClick:this.createPDF,children:"Submit And Print"})}),Object(f.jsx)(u.u,{children:Object(f.jsx)(u.f,{color:"danger",block:!0,children:"Reset"})}),Object(f.jsx)(u.u,{children:Object(f.jsx)(u.f,{color:"info",block:!0,onClick:this.gotolist,children:"Tag Loss List"})})]})]})})})})})})}}]),a}(d.PureComponent);S.defaultProps={},t.default=S},704:function(e,t,a){"use strict";var n=a(37),r=a.n(n),s=a(57),c=a(700),l=a(1),i=a(132),o=a(21),d=a(44),u=a(401),b=a(97),j=a(708),h=a(6);a(718);t.a=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.sidebarShow})),a=Object(l.useState)(m),n=Object(c.a)(a,2),m=n[0],x=n[1],g=function(){var e=Object(s.a)(r.a.mark((function e(){var t,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x("Please Wait...."),(t=new Headers).append("Content-Type","application/json; charset=utf-8"),t.append("Access-Control-Allow-Origin","*"),[],a=b.a.SYSTEM_SETTINGS.API_URL+"/fetchPolicy/",e.next=9,fetch(a,t).then((function(e){return e.json()})).then((function(e){return e.response}));case 9:console.log("Data"+JSON.stringify(b.a.UserList)),x("Please Updated..");case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(h.jsxs)(o.M,{withSubheader:!0,children:[Object(h.jsx)(o.Qb,{inHeader:!0,className:"ml-md-3 d-lg-none",onClick:function(){var a=!![!1,"responsive"].includes(t)||"responsive";e({type:"set",sidebarShow:a})}}),Object(h.jsx)(o.Qb,{inHeader:!0,className:"ml-3 d-md-down-none",onClick:function(){var a=![!0,"responsive"].includes(t)&&"responsive";e({type:"set",sidebarShow:a})}}),Object(h.jsx)(o.N,{className:"mx-auto d-lg-none",to:"/"}),Object(h.jsxs)(o.O,{className:"d-md-down-none mr-auto",children:[Object(h.jsx)(o.P,{className:"px-3",children:Object(h.jsx)(o.Q,{to:"/views/dashboard",children:"Dashboard"})}),Object(h.jsx)(o.P,{className:"px-3",children:Object(h.jsx)(o.Q,{to:"/views/users",children:"Users"})}),Object(h.jsx)(o.P,{className:"px-3",children:Object(h.jsxs)(o.Q,{onClick:g,children:["Fetch Policy  ",m]})})]}),Object(h.jsx)(o.O,{className:"px-3",children:Object(h.jsx)(j.d,{})}),Object(h.jsxs)(o.Gb,{className:"px-3 justify-content-between",children:[Object(h.jsx)(o.e,{className:"border-0 c-subheader-nav m-0 px-0 px-md-3",routes:u.a}),Object(h.jsxs)("div",{className:"d-md-down-none mfe-2 c-subheader-nav",children:[Object(h.jsx)(o.db,{className:"c-subheader-nav-link",href:"#",children:Object(h.jsx)(d.a,{name:"cil-speech",alt:"Settings"})}),Object(h.jsxs)(o.db,{className:"c-subheader-nav-link","aria-current":"page",to:"/dashboard",children:[Object(h.jsx)(d.a,{name:"cil-graph",alt:"Dashboard"}),"\xa0Dashboard"]}),Object(h.jsxs)(o.db,{className:"c-subheader-nav-link",href:"#",children:[Object(h.jsx)(d.a,{name:"cil-settings",alt:"Settings"}),"\xa0Settings"]})]})]})]})}},705:function(e,t,a){"use strict";var n=a(46),r=a(1),s=a.n(r),c=a(15),l=a(21),i=a(401),o=a(6),d=Object(o.jsx)("div",{className:"pt-3 text-center",children:Object(o.jsx)("div",{className:"sk-spinner sk-spinner-pulse"})}),u=function(){return Object(o.jsx)("main",{className:"c-main",children:Object(o.jsx)(l.w,{fluid:!0,children:Object(o.jsx)(r.Suspense,{fallback:d,children:Object(o.jsxs)(c.d,{children:[i.a.map((function(e,t){return e.component&&Object(o.jsx)(c.b,{path:e.path,exact:e.exact,name:e.name,render:function(t){return Object(o.jsx)(l.H,{children:Object(o.jsx)(e.component,Object(n.a)({},t))})}},t)})),Object(o.jsx)(c.a,{from:"/dashboard",to:"/views/dashboard"}),Object(o.jsx)(c.a,{from:"/login",to:"/pages/login"})]})})})})};t.a=s.a.memo(u)},706:function(e,t,a){"use strict";var n=a(1),r=a.n(n),s=a(132),c=a(21),l=a(44),i=a(6),o=[{_tag:"CSidebarNavItem",name:"Dashboard",to:"/views/dashboard",icon:Object(i.jsx)(l.a,{name:"cil-speedometer",customClasses:"c-sidebar-nav-icon"}),badge:{color:"info",text:""}},{_tag:"CSidebarNavItem",name:"Create User",to:"/register",icon:Object(i.jsx)(l.a,{name:"cil-user",customClasses:"c-sidebar-nav-icon"}),badge:{color:"info",text:""}},{_tag:"CSidebarNavItem",name:"Insurance Registration",to:"/views/format1",icon:Object(i.jsx)(l.a,{name:"cil-speedometer",customClasses:"c-sidebar-nav-icon"}),badge:{color:"info",text:""}},{_tag:"CSidebarNavItem",name:"Create Claim ",to:"/views/format3",icon:Object(i.jsx)(l.a,{name:"cil-speedometer",customClasses:"c-sidebar-nav-icon"}),badge:{color:"info",text:""}},{_tag:"CSidebarNavItem",name:"Tag Loss Form",to:"/views/format4",icon:Object(i.jsx)(l.a,{name:"cil-speedometer",customClasses:"c-sidebar-nav-icon"}),badge:{color:"info",text:""}}],d=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.sidebarShow}));return Object(i.jsxs)(c.yb,{show:t,onShowChange:function(t){return e({type:"set",sidebarShow:t})},children:[Object(i.jsx)(c.zb,{className:"d-md-down-none",to:"/dashboard",children:Object(i.jsx)("label",{children:"Fouress Insurance Broking Services Pvt Ltd "})}),Object(i.jsx)(c.Bb,{children:Object(i.jsx)(c.x,{items:o,components:{CSidebarNavDivider:c.Cb,CSidebarNavDropdown:c.Db,CSidebarNavItem:c.Eb,CSidebarNavTitle:c.Fb}})}),Object(i.jsx)(c.Ab,{className:"c-d-md-down-none"})]})};t.a=r.a.memo(d)},708:function(e,t,a){"use strict";a.d(t,"a",(function(){return n.a})),a.d(t,"b",(function(){return o})),a.d(t,"c",(function(){return d.a})),a.d(t,"d",(function(){return j})),a.d(t,"e",(function(){return h.a}));var n=a(705),r=a(1),s=a.n(r),c=a(21),l=a(6),i=function(){return Object(l.jsx)(c.I,{fixed:!1,children:Object(l.jsxs)("div",{children:[Object(l.jsx)("a",{href:"#",rel:"noopener noreferrer",children:"Fouress Insurance Broking Service Pvt Ltd. "}),Object(l.jsx)("span",{className:"ml-1",children:"(Please call on +91-7536825280 for Any Assistance)."})]})})},o=s.a.memo(i),d=a(704),u=(a(46),a(72),a(44)),b=a(15),j=function(e){var t=Object(b.g)();return Object(l.jsxs)(c.z,{inNav:!0,className:"c-header-nav-items mx-2",direction:"down",children:[Object(l.jsx)(c.E,{className:"c-header-nav-link",caret:!1,children:Object(l.jsx)("div",{className:"c-avatar",children:Object(l.jsx)(c.R,{src:"avatars/9.png",className:"c-avatar-img",alt:"abcd.com"})})}),Object(l.jsxs)(c.D,{className:"pt-0",placement:"bottom-end",children:[Object(l.jsxs)(c.C,{children:[Object(l.jsx)(u.a,{name:"cil-user",className:"mfe-2"}),localStorage.getItem("username")]}),Object(l.jsxs)(c.C,{onClick:function(e){localStorage.clear(),t.push("/login")},children:[Object(l.jsx)(u.a,{name:"cil-lock-locked",className:"mfe-2"}),"Log Out"]})]})]})},h=(a(537),a(706))},770:function(e,t,a){"use strict"}}]);
//# sourceMappingURL=23.37152831.chunk.js.map