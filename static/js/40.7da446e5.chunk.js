(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[40],{748:function(e,t,o){"use strict";var a=o(46),r=o(72),n=(o(1),o(738)),s=o(753),l=o(6),c=function(e){var t=e.borderColor,o=e.backgroundColor,c=e.pointHoverBackgroundColor,i=e.dataPoints,d=e.label,b=e.pointed,j=Object(r.a)(e,["borderColor","backgroundColor","pointHoverBackgroundColor","dataPoints","label","pointed"]),h=c||("transparent"!==o?o:t),p=[{data:i,borderColor:Object(n.getColor)(t),backgroundColor:Object(n.getColor)(o),pointBackgroundColor:Object(n.getColor)(h),pointHoverBackgroundColor:Object(n.getColor)(h),label:d}],x={scales:{xAxes:[{offset:!0,gridLines:{color:"transparent",zeroLineColor:"transparent"},ticks:{fontSize:2,fontColor:"transparent"}}],yAxes:[{display:!1,ticks:{display:!1,min:Math.min.apply(Math,i)-5,max:Math.max.apply(Math,i)+5}}]},elements:{line:{borderWidth:1},point:{radius:4,hitRadius:10,hoverRadius:4}}},g={scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]},elements:{line:{borderWidth:2},point:{radius:0,hitRadius:10,hoverRadius:4}}},O=function(){var e=b?x:g;return Object.assign({},e,{maintainAspectRatio:!1,legend:{display:!1}})}(),m=Object(n.deepObjectsMerge)(p,j.datasets||{}),u=Object(n.deepObjectsMerge)(O,j.options||{});return Object(l.jsx)(s.c,Object(a.a)(Object(a.a)({},j),{},{datasets:m,options:u,labels:d}))};c.defaultProps={borderColor:"rgba(255,255,255,.55)",backgroundColor:"transparent",dataPoints:[10,22,34,46,58,70,46,23,45,78,34,12],label:"Sales"},t.a=c},800:function(e,t,o){"use strict";var a=o(46),r=o(72),n=(o(1),o(738)),s=o(753),l=o(6),c=function(e){var t=e.backgroundColor,o=e.pointHoverBackgroundColor,c=e.dataPoints,i=e.label,d=(e.pointed,Object(r.a)(e,["backgroundColor","pointHoverBackgroundColor","dataPoints","label","pointed"])),b=[{data:c,backgroundColor:Object(n.getColor)(t),pointHoverBackgroundColor:Object(n.getColor)(o),label:i,barPercentage:.5,categoryPercentage:1}],j={maintainAspectRatio:!1,legend:{display:!1},scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]}};return Object(l.jsx)(s.a,Object(a.a)(Object(a.a)({},d),{},{datasets:b,options:j,labels:i}))};c.defaultProps={backgroundColor:"rgba(0,0,0,.2)",dataPoints:[10,22,34,46,58,70,46,23,45,78,34,12],label:"Sales"},t.a=c},877:function(e,t,o){"use strict";o.r(t);o(1);var a=o(21),r=o(44),n=o(748),s=o(800),l=o(6);t.default=function(){return Object(l.jsxs)(a.wb,{children:[Object(l.jsx)(a.u,{sm:"6",lg:"3",children:Object(l.jsx)(a.Ub,{color:"gradient-primary",header:"101",text:"Insurance Registration",footerSlot:Object(l.jsx)(n.a,{pointed:!0,className:"c-chart-wrapper mt-3 mx-3",style:{height:"70px"},dataPoints:[65,59,84,84,51,55,40],pointHoverBackgroundColor:"primary",label:"Total Monthly Insurance",labels:"months"}),children:Object(l.jsxs)(a.z,{children:[Object(l.jsx)(a.E,{color:"transparent",children:Object(l.jsx)(r.a,{name:"cil-settings"})}),Object(l.jsxs)(a.D,{className:"pt-0",placement:"bottom-end",children:[Object(l.jsx)(a.C,{children:"Action"}),Object(l.jsx)(a.C,{children:"Another action"}),Object(l.jsx)(a.C,{children:"Something else here..."}),Object(l.jsx)(a.C,{disabled:!0,children:"Disabled action"})]})]})})}),Object(l.jsx)(a.u,{sm:"6",lg:"3",children:Object(l.jsx)(a.Ub,{color:"gradient-info",header:"50",text:"Total Claims",footerSlot:Object(l.jsx)(n.a,{pointed:!0,className:"mt-3 mx-3",style:{height:"70px"},dataPoints:[1,18,9,17,34,22,11],pointHoverBackgroundColor:"info",options:{elements:{line:{tension:1e-5}}},label:"Total Monthly Claims",labels:"months"}),children:Object(l.jsxs)(a.z,{children:[Object(l.jsx)(a.E,{caret:!1,color:"transparent",children:Object(l.jsx)(r.a,{name:"cil-location-pin"})}),Object(l.jsxs)(a.D,{className:"pt-0",placement:"bottom-end",children:[Object(l.jsx)(a.C,{children:"Action"}),Object(l.jsx)(a.C,{children:"Another action"}),Object(l.jsx)(a.C,{children:"Something else here..."}),Object(l.jsx)(a.C,{disabled:!0,children:"Disabled action"})]})]})})}),Object(l.jsx)(a.u,{sm:"6",lg:"3",children:Object(l.jsx)(a.Ub,{color:"gradient-warning",header:"48",text:"Total Tag Loss",footerSlot:Object(l.jsx)(n.a,{className:"mt-3",style:{height:"70px"},backgroundColor:"rgba(255,255,255,.2)",dataPoints:[78,81,80,45,34,12,40],options:{elements:{line:{borderWidth:2.5}}},pointHoverBackgroundColor:"warning",label:"Total Monthly Tag Loss",labels:"months"}),children:Object(l.jsxs)(a.z,{children:[Object(l.jsx)(a.E,{color:"transparent",children:Object(l.jsx)(r.a,{name:"cil-settings"})}),Object(l.jsxs)(a.D,{className:"pt-0",placement:"bottom-end",children:[Object(l.jsx)(a.C,{children:"Action"}),Object(l.jsx)(a.C,{children:"Another action"}),Object(l.jsx)(a.C,{children:"Something else here..."}),Object(l.jsx)(a.C,{disabled:!0,children:"Disabled action"})]})]})})}),Object(l.jsx)(a.u,{sm:"6",lg:"3",children:Object(l.jsx)(a.Ub,{color:"gradient-danger",header:"35",text:"Tota Pending Users",footerSlot:Object(l.jsx)(s.a,{className:"mt-3 mx-3",style:{height:"70px"},backgroundColor:"rgb(250, 152, 152)",label:"Total Monthly Pending Users",labels:"months"}),children:Object(l.jsxs)(a.z,{children:[Object(l.jsx)(a.E,{caret:!0,className:"text-white",color:"transparent",children:Object(l.jsx)(r.a,{name:"cil-settings"})}),Object(l.jsxs)(a.D,{className:"pt-0",placement:"bottom-end",children:[Object(l.jsx)(a.C,{children:"Action"}),Object(l.jsx)(a.C,{children:"Another action"}),Object(l.jsx)(a.C,{children:"Something else here..."}),Object(l.jsx)(a.C,{disabled:!0,children:"Disabled action"})]})]})})})]})}}}]);
//# sourceMappingURL=40.7da446e5.chunk.js.map