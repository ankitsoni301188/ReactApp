(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[17],{181:function(a,e,n){"use strict";n.r(e);var t=n(128),o=n(37),c=n.n(o),i=n(57),l=n(99),r=n(100),s=n(94),h=n(102),u=n(101),p=n(1),m=n(21),b=n(44),d=(n(133),n(15)),f=n(97),j=n(59),g=n.n(j),v=(n(185),n(398),n(6)),y=function(a){Object(h.a)(n,a);var e=Object(u.a)(n);function n(a){var t;return Object(l.a)(this,n),(t=e.call(this,a)).login=Object(i.a)(c.a.mark((function a(){var e;return c.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(""!==t.state.username&&""!==t.state.password){a.next=3;break}return g.a.fire({icon:"info",title:"UserName And Password Can't Be Blank",showConfirmButton:!1,timer:1e3}),a.abrupt("return",!1);case 3:return console.log(t.state.username),console.log(t.state.password),e={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:t.state.username,password:t.state.password})},a.next=8,fetch(f.a.SYSTEM_SETTINGS.API_URL+"/users/authlogin",e).then((function(a){return a.json()})).then((function(a){console.log(a.error),null===a.error?(g.a.fire({icon:"success",title:"success",showConfirmButton:!1,timer:1500}),localStorage.setItem("itemName",!0),t.props.history.push("/dashboard")):(localStorage.setItem("itemName",""),g.a.fire({icon:"info",title:"Something Went Wrong",showConfirmButton:!1,timer:1500}))}));case 8:case"end":return a.stop()}}),a)}))),t.handleLogin=Object(i.a)(c.a.mark((function a(){return c.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(""!==t.state.username&&""!==t.state.password){a.next=3;break}return g.a.fire({icon:"info",title:"UserName And Password Can't Be Blank",showConfirmButton:!1,timer:1e3}),a.abrupt("return",!1);case 3:case"end":return a.stop()}}),a)}))),t.state={username:"",password:""},t.onInputchange=t.onInputchange.bind(Object(s.a)(t)),t.onSubmitForm=t.onSubmitForm.bind(Object(s.a)(t)),t}return Object(r.a)(n,[{key:"onInputchange",value:function(a){this.setState(Object(t.a)({},a.target.name,a.target.value))}},{key:"onSubmitForm",value:function(){console.log(this.state)}},{key:"render",value:function(){var a=this;return Object(v.jsx)("div",{className:"c-app c-default-layout flex-row align-items-center",children:Object(v.jsx)(m.w,{children:Object(v.jsx)(m.wb,{className:"justify-content-center",children:Object(v.jsx)(m.u,{md:"8",children:Object(v.jsxs)(m.m,{children:[Object(v.jsx)(m.j,{className:"p-4",children:Object(v.jsx)(m.k,{children:Object(v.jsxs)(m.J,{children:[Object(v.jsx)("h1",{children:"Login"}),Object(v.jsx)("p",{className:"text-muted",children:"Sign In to your account"}),Object(v.jsxs)(m.V,{className:"mb-3",children:[Object(v.jsx)(m.X,{children:Object(v.jsx)(m.Y,{children:Object(v.jsx)(b.a,{name:"cil-user"})})}),Object(v.jsx)(m.S,{type:"text",placeholder:"Username",autoComplete:"username",name:"username",value:this.state.username,onChange:this.onInputchange})]}),Object(v.jsxs)(m.V,{className:"mb-4",children:[Object(v.jsx)(m.X,{children:Object(v.jsx)(m.Y,{children:Object(v.jsx)(b.a,{name:"cil-lock-locked"})})}),Object(v.jsx)(m.S,{type:"password",placeholder:"Password",autoComplete:"current-password",name:"password",value:this.state.password,onChange:this.onInputchange})]}),Object(v.jsxs)(m.wb,{children:[Object(v.jsx)(m.u,{xs:"6",children:Object(v.jsx)(m.f,{color:"primary",className:"px-4",onClick:function(){return a.login()},children:"Login"})}),Object(v.jsx)(m.u,{xs:"6",className:"text-right",children:Object(v.jsx)(m.f,{color:"link",className:"px-0",children:"Forgot password?"})})]})]})})}),Object(v.jsx)(m.j,{className:"text-white bg-primary py-5 d-md-down-none",style:{width:"44%"},children:Object(v.jsx)(m.k,{className:"text-center",children:Object(v.jsx)(m.wb,{children:Object(v.jsxs)(m.u,{xs:"12",children:[Object(v.jsx)("h3",{children:"Fouress Insurance Broking Service Pvt Ltd."}),Object(v.jsx)("h5",{children:"(Sheep,Milch Cattle Insurance Management Systems)"}),Object(v.jsx)("h6",{children:" "})]})})})})]})})})})})}}]),n}(p.Component);e.default=Object(d.i)(y)},398:function(a,e,n){"use strict";n(1),n(43),n(15),n(181),n(6)},401:function(a,e,n){"use strict";var t=n(1),o=n.n(t),c=o.a.lazy((function(){return n.e(23).then(n.bind(null,543))})),i=o.a.lazy((function(){return n.e(36).then(n.bind(null,544))})),l=o.a.lazy((function(){return n.e(41).then(n.bind(null,545))})),r=o.a.lazy((function(){return n.e(26).then(n.bind(null,546))})),s=o.a.lazy((function(){return n.e(27).then(n.bind(null,547))})),h=o.a.lazy((function(){return n.e(28).then(n.bind(null,548))})),u=o.a.lazy((function(){return n.e(29).then(n.bind(null,549))})),p=o.a.lazy((function(){return n.e(42).then(n.bind(null,550))})),m=o.a.lazy((function(){return n.e(30).then(n.bind(null,551))})),b=o.a.lazy((function(){return n.e(31).then(n.bind(null,552))})),d=o.a.lazy((function(){return n.e(43).then(n.bind(null,553))})),f=o.a.lazy((function(){return n.e(32).then(n.bind(null,554))})),j=o.a.lazy((function(){return n.e(44).then(n.bind(null,555))})),g=o.a.lazy((function(){return n.e(45).then(n.bind(null,556))})),v=o.a.lazy((function(){return n.e(46).then(n.bind(null,557))})),y=o.a.lazy((function(){return n.e(33).then(n.bind(null,558))})),O=o.a.lazy((function(){return n.e(47).then(n.bind(null,559))})),x=o.a.lazy((function(){return n.e(56).then(n.bind(null,560))})),V=o.a.lazy((function(){return n.e(48).then(n.bind(null,561))})),w=o.a.lazy((function(){return n.e(49).then(n.bind(null,562))})),A=o.a.lazy((function(){return n.e(50).then(n.bind(null,563))})),C=o.a.lazy((function(){return Promise.all([n.e(1),n.e(8),n.e(51)]).then(n.bind(null,564))})),z=o.a.lazy((function(){return Promise.all([n.e(1),n.e(8),n.e(21),n.e(3),n.e(40)]).then(n.bind(null,575))})),S=o.a.lazy((function(){return Promise.resolve().then(n.bind(null,181))})),M=o.a.lazy((function(){return Promise.all([n.e(7),n.e(60),n.e(37)]).then(n.bind(null,565))})),L=o.a.lazy((function(){return Promise.all([n.e(7),n.e(59),n.e(38)]).then(n.bind(null,566))})),I=o.a.lazy((function(){return Promise.all([n.e(7),n.e(52)]).then(n.bind(null,539))})),N=o.a.lazy((function(){return n.e(34).then(n.bind(null,567))})),k=o.a.lazy((function(){return n.e(53).then(n.bind(null,568))})),P=o.a.lazy((function(){return n.e(35).then(n.bind(null,569))})),Z=o.a.lazy((function(){return n.e(24).then(n.bind(null,570))})),E=o.a.lazy((function(){return n.e(54).then(n.bind(null,571))})),T=o.a.lazy((function(){return Promise.all([n.e(1),n.e(8),n.e(25)]).then(n.bind(null,572))})),B=o.a.lazy((function(){return Promise.all([n.e(3),n.e(5)]).then(n.bind(null,406))})),H=o.a.lazy((function(){return Promise.all([n.e(1),n.e(0),n.e(2),n.e(9),n.e(11)]).then(n.bind(null,408))})),F=o.a.lazy((function(){return n.e(10).then(n.bind(null,402))})),R=o.a.lazy((function(){return Promise.all([n.e(1),n.e(0),n.e(2),n.e(4),n.e(12)]).then(n.bind(null,409))})),U=o.a.lazy((function(){return n.e(15).then(n.t.bind(null,403,7))})),D=o.a.lazy((function(){return Promise.all([n.e(1),n.e(0),n.e(2),n.e(4),n.e(22)]).then(n.bind(null,573))})),J=o.a.lazy((function(){return n.e(57).then(n.t.bind(null,574,7))})),G=o.a.lazy((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,407))})),q=[{path:"/views/dashboard",name:"Dashboard",component:z},{path:"/pages/page404",name:"page404",component:o.a.lazy((function(){return n.e(16).then(n.bind(null,542))}))},{path:"/views/theme",name:"Theme",component:Z,exact:!0},{path:"/theme/colors",name:"Colors",component:Z},{path:"/theme/typography",name:"Typography",component:E},{path:"/base",name:"Base",component:r,exact:!0},{path:"/base/breadcrumbs",name:"Breadcrumbs",component:l},{path:"/base/cards",name:"Cards",component:r},{path:"/base/carousels",name:"Carousel",component:s},{path:"/base/collapses",name:"Collapse",component:h},{path:"/base/forms",name:"Forms",component:u},{path:"/base/jumbotrons",name:"Jumbotrons",component:p},{path:"/base/list-groups",name:"List Groups",component:m},{path:"/base/navbars",name:"Navbars",component:b},{path:"/base/navs",name:"Navs",component:d},{path:"/base/paginations",name:"Paginations",component:f},{path:"/base/popovers",name:"Popovers",component:j},{path:"/base/progress-bar",name:"Progress Bar",component:g},{path:"/base/switches",name:"Switches",component:v},{path:"/base/tables",name:"Tables",component:i},{path:"/base/tabs",name:"Tabs",component:y},{path:"/base/tooltips",name:"Tooltips",component:O},{path:"/buttons",name:"Buttons",component:A,exact:!0},{path:"/buttons/buttons",name:"Buttons",component:A},{path:"/buttons/button-dropdowns",name:"Dropdowns",component:V},{path:"/buttons/button-groups",name:"Button Groups",component:w},{path:"/buttons/brand-buttons",name:"Brand Buttons",component:x},{path:"/charts",name:"Charts",component:C},{path:"/icons",exact:!0,name:"Icons",component:M},{path:"/icons/coreui-icons",name:"CoreUI Icons",component:M},{path:"/icons/flags",name:"Flags",component:L},{path:"/icons/brands",name:"Brands",component:I},{path:"/notifications",name:"Notifications",component:N,exact:!0},{path:"/notifications/alerts",name:"Alerts",component:N},{path:"/notifications/badges",name:"Badges",component:k},{path:"/notifications/modals",name:"Modals",component:P},{path:"/notifications/toaster",name:"Toaster",component:c},{path:"/widgets",name:"Widgets",component:T},{path:"/views/users",exact:!0,name:"Users",component:B},{path:"/views/format1",exact:!0,name:"Format1",component:H},{path:"/views/format1list",exact:!0,name:"Format1List",component:F},{path:"/views/format3",exact:!0,name:"Format3",component:R},{path:"/views/format3list",exact:!0,name:"Format3List",component:U},{path:"/views/format4",exact:!0,name:"Format4",component:D},{path:"/views/format4list",exact:!0,name:"Format4List",component:J},{path:"/pages/login",exact:!0,name:"Login",component:S},{path:"/users/:id",exact:!0,name:"User Details",component:G}];e.a=q},518:function(a,e){!function(){if("function"===typeof window.CustomEvent)return!1;function a(a,e){e=e||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(a,e.bubbles,e.cancelable,e.detail),n}a.prototype=window.Event.prototype,window.CustomEvent=a}(),Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(a){var e=this;do{if(Element.prototype.matches.call(e,a))return e;e=e.parentElement||e.parentNode}while(null!==e&&1===e.nodeType);return null})},523:function(a,e,n){},536:function(a,e,n){"use strict";n.r(e);n(136),n(145),n(146),n(147),n(148),n(149),n(150),n(151),n(152),n(153),n(154),n(155),n(156),n(157),n(158),n(197),n(199),n(200),n(201),n(202),n(203),n(204),n(206),n(207),n(160),n(211),n(212),n(86),n(215),n(216),n(218),n(219),n(220),n(221),n(222),n(223),n(224),n(225),n(226),n(227),n(228),n(229),n(230),n(231),n(165),n(110),n(233),n(235),n(236),n(237),n(238),n(239),n(240),n(241),n(243),n(244),n(245),n(246),n(247),n(248),n(249),n(250),n(167),n(251),n(252),n(253),n(255),n(257),n(258),n(259),n(260),n(261),n(262),n(264),n(265),n(267),n(268),n(269),n(271),n(272),n(273),n(274),n(275),n(276),n(277),n(279),n(280),n(281),n(282),n(283),n(284),n(285),n(286),n(169),n(287),n(288),n(294),n(295),n(296),n(297),n(298),n(299),n(300),n(301),n(302),n(303),n(304),n(305),n(306),n(307),n(171),n(308),n(309),n(173),n(310),n(311),n(312),n(313),n(118),n(314),n(315),n(318),n(319),n(320),n(321),n(323),n(324),n(325),n(326),n(327),n(328),n(329),n(330),n(331),n(332),n(333),n(334),n(335),n(336),n(337),n(338),n(339),n(340),n(341),n(342),n(348),n(349),n(350),n(351),n(352),n(353),n(354),n(355),n(356),n(357),n(358),n(359),n(360),n(361),n(362),n(363),n(364),n(365),n(366),n(367),n(368),n(369),n(370),n(371),n(372),n(373),n(374),n(375),n(376),n(377),n(378),n(379),n(380),n(122),n(382),n(422),n(424),n(425),n(426),n(427),n(428),n(430),n(431),n(432),n(433),n(434),n(435),n(436),n(437),n(439),n(440),n(441),n(442),n(443),n(444),n(445),n(446),n(447),n(448),n(449),n(450),n(451),n(452),n(453),n(454),n(455),n(456),n(457),n(458),n(459),n(460),n(461),n(462),n(463),n(465),n(467),n(468),n(469),n(470),n(471),n(472),n(473),n(474),n(475),n(476),n(477),n(478),n(479),n(480),n(481),n(482),n(483),n(484),n(485),n(486),n(487),n(488),n(489),n(490),n(491),n(492),n(493),n(494),n(495),n(496),n(497),n(499),n(386),n(387),n(388),n(501),n(502),n(503),n(504),n(505),n(506),n(507),n(389),n(391),n(392),n(393),n(394),n(396),n(178),n(509),n(514),n(518);var t=n(1),o=n.n(t),c=n(58),i=n.n(c),l=n(99),r=n(100),s=n(102),h=n(101),u=n(46),p=n(72),m=n(15),b=n(43),d=(n(523),n(97),n(398),n(401),n(6)),f=Object(d.jsx)("div",{className:"pt-3 text-center",children:Object(d.jsx)("div",{className:"sk-spinner sk-spinner-pulse"})}),j=o.a.lazy((function(){return n.e(14).then(n.bind(null,537))})),g=o.a.lazy((function(){return Promise.resolve().then(n.bind(null,181))})),v=o.a.lazy((function(){return n.e(13).then(n.bind(null,541))})),y=o.a.lazy((function(){return n.e(16).then(n.bind(null,542))})),O=o.a.lazy((function(){return n.e(58).then(n.bind(null,1282))})),x=function(){return localStorage.getItem("itemName")},V=function(a){var e=a.component,n=Object(p.a)(a,["component"]);return Object(d.jsx)(m.b,Object(u.a)(Object(u.a)({},n),{},{render:function(a){return x()?Object(d.jsx)(m.a,{to:"/dashboard"}):Object(d.jsx)(e,Object(u.a)({},a))}}))},w=function(a){var e=a.component,n=Object(p.a)(a,["component"]);return Object(d.jsx)(m.b,Object(u.a)(Object(u.a)({},n),{},{render:function(a){return x()?Object(d.jsx)(e,Object(u.a)({},a)):Object(d.jsx)(m.a,{to:"/login"})}}))},A=function(a){Object(s.a)(n,a);var e=Object(h.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(d.jsx)(b.a,{children:Object(d.jsx)(o.a.Suspense,{fallback:f,children:Object(d.jsxs)(m.d,{children:[Object(d.jsx)(V,{exact:!0,path:"/login",name:"Login Page",component:g}),Object(d.jsx)(m.b,{exact:!0,path:"/login",name:"Login Page",component:g}),Object(d.jsx)(m.b,{exact:!0,path:"/register",name:"Register Page",component:v}),Object(d.jsx)(m.b,{exact:!0,path:"/404",name:"Page 404",component:y}),Object(d.jsx)(m.b,{exact:!0,path:"/500",name:"Page 500",component:O}),Object(d.jsx)(w,{path:"/",name:"Home",component:j})]})})})}}]),n}(t.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var C=n(675),z=n(676),S=n(677),M=n(678),L=n(679),I=n(680),N=n(681),k=n(682),P=n(683),Z=n(684),E=n(685),T=n(686),B=n(687),H=n(688),F=n(689),R=n(690),U=n(691),D=n(692),J=n(693),G=n(694),q=n(695),Y=n(696),_=n(697),W=n(698),X=n(669),Q=n(670),K=n(671),$=n(672),aa=n(673),ea=n(674),na=n(580),ta=n(581),oa=n(582),ca=n(583),ia=n(584),la=n(578),ra=n(585),sa=n(579),ha=n(586),ua=n(587),pa=n(588),ma=n(589),ba=n(590),da=n(591),fa=n(592),ja=n(593),ga=n(594),va=n(595),ya=n(596),Oa=n(597),xa=n(598),Va=n(599),wa=n(600),Aa=n(601),Ca=n(602),za=n(603),Sa=n(604),Ma=n(605),La=n(606),Ia=n(607),Na=n(608),ka=n(609),Pa=n(610),Za=n(611),Ea=n(612),Ta=n(613),Ba=n(614),Ha=n(615),Fa=n(616),Ra=n(617),Ua=n(618),Da=n(619),Ja=n(620),Ga=n(621),qa=n(622),Ya=n(623),_a=n(624),Wa=n(625),Xa=n(626),Qa=n(627),Ka=n(628),$a=n(629),ae=n(630),ee=n(631),ne=n(632),te=n(633),oe=n(634),ce=n(635),ie=n(636),le=n(637),re=n(638),se=n(639),he=n(640),ue=n(641),pe=n(642),me=n(643),be=n(644),de=n(645),fe=n(646),je=n(647),ge=n(648),ve=n(649),ye=n(650),Oe=n(651),xe=n(652),Ve=n(653),we=n(654),Ae=n(655),Ce=n(656),ze=n(657),Se=n(658),Me=n(659),Le=n(660),Ie=n(661),Ne=n(662),ke=n(663),Pe=n(664),Ze=n(665),Ee=n(666),Te=n(667),Be=n(668),He=Object.assign({},{sygnet:["160 160",'\n  <title>coreui logo</title>\n  <g>\n    <g style="fill:#fff;">\n      <path d="M125,47.091,86,24.5743a12,12,0,0,0-12,0L35,47.091a12.0336,12.0336,0,0,0-6,10.3923v45.0334a12.0335,12.0335,0,0,0,6,10.3923l39,22.5166a11.9993,11.9993,0,0,0,12,0l39-22.5166a12.0335,12.0335,0,0,0,6-10.3923V57.4833A12.0336,12.0336,0,0,0,125,47.091Zm-2,55.4257a4,4,0,0,1-2,3.464L82,128.4974a4,4,0,0,1-4,0L39,105.9807a4,4,0,0,1-2-3.464V57.4833a4,4,0,0,1,2-3.4641L78,31.5025a4,4,0,0,1,4,0l39,22.5167a4,4,0,0,1,2,3.4641Z"/>\n      <path d="M103.0216,93.0379h-2.866a4,4,0,0,0-1.9246.4935L80.95,103.0167,61,91.4981V68.5206L80.95,57.002l17.2894,9.455a4,4,0,0,0,1.9192.4905h2.8632a2,2,0,0,0,2-2V62.2357a2,2,0,0,0-1.04-1.7547L84.793,49.9854a8.0391,8.0391,0,0,0-7.8428.09L57,61.5929A8.0243,8.0243,0,0,0,53,68.5216v22.976a8,8,0,0,0,4,6.9283l19.95,11.5185a8.0422,8.0422,0,0,0,7.8433.0879l19.19-10.5311a2,2,0,0,0,1.0378-1.7534v-2.71A2,2,0,0,0,103.0216,93.0379Z"/>\n    </g>\n  </g>\n'],logo:["608 134",'\n  <title>coreui react pro</title>\n  <g>\n    <g style="fill:#00a1ff">\n      <path d="M362.0177,90.1512,353.25,69.4149a.2507.2507,0,0,0-.2559-.1914H343.01a.2263.2263,0,0,0-.2559.2559V90.0233a.5657.5657,0,0,1-.64.64h-1.2163a.5652.5652,0,0,1-.64-.64V46.5028a.5655.5655,0,0,1,.64-.64H353.442a9.9792,9.9792,0,0,1,7.7437,3.2324A12.2,12.2,0,0,1,364.13,57.64a12.4389,12.4389,0,0,1-2.24,7.584,9.37,9.37,0,0,1-6.08,3.7441c-.1709.086-.2139.1915-.128.3194l8.7041,20.6084.064.2558q0,.5127-.5757.5118h-1.1523A.703.703,0,0,1,362.0177,90.1512ZM342.754,48.3593v18.496a.2259.2259,0,0,0,.2559.2559h10.3037a7.6713,7.6713,0,0,0,6.0166-2.5918,9.8807,9.8807,0,0,0,2.3037-6.8164,10.2875,10.2875,0,0,0-2.272-6.9756,7.6033,7.6033,0,0,0-6.0483-2.624H343.01A.2263.2263,0,0,0,342.754,48.3593Z"/>\n      <path d="M401.3263,48.1034H381.2945a.2262.2262,0,0,0-.2558.2559v18.496a.2259.2259,0,0,0,.2558.2559h13.8238a.5664.5664,0,0,1,.6406.64v.96a.5663.5663,0,0,1-.6406.6406H381.2945a.2263.2263,0,0,0-.2558.2559v18.56a.2258.2258,0,0,0,.2558.2558h20.0318a.5671.5671,0,0,1,.6406.6407v.96a.566.566,0,0,1-.6406.64H379.1827a.5653.5653,0,0,1-.64-.64V46.5028a.5656.5656,0,0,1,.64-.64h22.1436a.5664.5664,0,0,1,.6406.64v.96A.5663.5663,0,0,1,401.3263,48.1034Z"/>\n      <path d="M439.047,90.1512l-2.4317-8.832a.2971.2971,0,0,0-.32-.1924H419.5274a.2957.2957,0,0,0-.32.1924l-2.3681,8.7676a.6577.6577,0,0,1-.7036.5762H414.919a.5385.5385,0,0,1-.5756-.7041l12.0317-43.584a.6436.6436,0,0,1,.7041-.5117h1.6a.6442.6442,0,0,1,.7041.5117l12.16,43.584.0644.1923q0,.5127-.64.5118h-1.2163A.6428.6428,0,0,1,439.047,90.1512ZM419.9435,78.9188a.3031.3031,0,0,0,.2236.0967h15.4883a.3048.3048,0,0,0,.2236-.0967c.0645-.0635.0742-.1162.0322-.1592l-7.872-28.9287c-.043-.0849-.086-.1279-.128-.1279s-.0859.043-.1279.1279L419.9112,78.76C419.8683,78.8026,419.879,78.8553,419.9435,78.9188Z"/>\n      <path d="M456.6017,87.911a11.6372,11.6372,0,0,1-3.3277-8.7041V57.1913a11.4158,11.4158,0,0,1,3.36-8.5762,12.0941,12.0941,0,0,1,8.8-3.2637,12.2566,12.2566,0,0,1,8.8643,3.2315,11.3927,11.3927,0,0,1,3.36,8.6084v.64a.5663.5663,0,0,1-.6406.6407l-1.28.0634q-.6408,0-.64-.5761v-.8321a9.289,9.289,0,0,0-2.6558-6.9121,10.6734,10.6734,0,0,0-14.0161,0,9.2854,9.2854,0,0,0-2.6563,6.9121V79.3993a9.2808,9.2808,0,0,0,2.6563,6.9121,10.67,10.67,0,0,0,14.0161,0,9.2843,9.2843,0,0,0,2.6558-6.9121v-.7686q0-.5757.64-.5752l1.28.0635a.5667.5667,0,0,1,.6406.6406v.5118a11.4952,11.4952,0,0,1-3.36,8.64,13.6227,13.6227,0,0,1-17.6963,0Z"/>\n      <path d="M514.4376,46.5028v.96a.5658.5658,0,0,1-.64.6406H503.046a.2263.2263,0,0,0-.2559.2559v41.664a.566.566,0,0,1-.6406.64h-1.2158a.5652.5652,0,0,1-.64-.64V48.3593a.2266.2266,0,0,0-.2558-.2559H489.8619a.5656.5656,0,0,1-.64-.6406v-.96a.5656.5656,0,0,1,.64-.64H513.798A.5658.5658,0,0,1,514.4376,46.5028Z"/>\n      <path d="M522.0665,89.5116a2.8385,2.8385,0,0,1-.8-2.0488,2.9194,2.9194,0,0,1,.8-2.1114,2.7544,2.7544,0,0,1,2.08-.832,2.8465,2.8465,0,0,1,2.9438,2.9434,2.7541,2.7541,0,0,1-.832,2.08,2.9221,2.9221,0,0,1-2.1118.8008A2.754,2.754,0,0,1,522.0665,89.5116Z"/>\n      <path d="M542.4054,88.0077a11.3123,11.3123,0,0,1-3.2-8.416v-5.44a.5656.5656,0,0,1,.64-.64h1.2158a.5661.5661,0,0,1,.64.64v5.5039a9.1424,9.1424,0,0,0,2.5283,6.72,8.9745,8.9745,0,0,0,6.6875,2.5605,8.7908,8.7908,0,0,0,9.28-9.28V46.5028a.5655.5655,0,0,1,.64-.64h1.2163a.566.566,0,0,1,.64.64V79.5917a11.2545,11.2545,0,0,1-3.2325,8.416,13.0618,13.0618,0,0,1-17.0556,0Z"/>\n      <path d="M580.35,88.1034a10.4859,10.4859,0,0,1-3.36-8.1279v-1.792a.5663.5663,0,0,1,.64-.6407h1.0884a.5668.5668,0,0,1,.64.6407v1.6a8.5459,8.5459,0,0,0,2.752,6.6562,10.5353,10.5353,0,0,0,7.36,2.4961,9.8719,9.8719,0,0,0,6.9761-2.3681,8.2161,8.2161,0,0,0,2.56-6.336,8.4,8.4,0,0,0-1.12-4.416,11.3812,11.3812,0,0,0-3.3281-3.3926,71.6714,71.6714,0,0,0-6.1763-3.7119,71.0479,71.0479,0,0,1-6.24-3.84,12.1711,12.1711,0,0,1-3.4238-3.68,10.2614,10.2614,0,0,1-1.28-5.3438,9.8579,9.8579,0,0,1,3.0718-7.7441,12.0122,12.0122,0,0,1,8.32-2.752q5.6954,0,8.96,3.1036a10.8251,10.8251,0,0,1,3.2642,8.2246v1.6a.5658.5658,0,0,1-.64.64h-1.1519a.5652.5652,0,0,1-.64-.64V56.8075a8.8647,8.8647,0,0,0-2.624-6.6885,9.9933,9.9933,0,0,0-7.232-2.5273,9.37,9.37,0,0,0-6.5278,2.1435,7.8224,7.8224,0,0,0-2.3682,6.1123,7.8006,7.8006,0,0,0,1.0244,4.16,10.387,10.387,0,0,0,3.0078,3.0391,62.8714,62.8714,0,0,0,5.9522,3.4882,71.0575,71.0575,0,0,1,6.72,4.2559,13.4674,13.4674,0,0,1,3.648,3.9365,10.049,10.049,0,0,1,1.28,5.1836,10.7177,10.7177,0,0,1-3.2637,8.1924q-3.2637,3.0717-8.832,3.0723Q583.71,91.1757,580.35,88.1034Z"/>\n    </g>\n    <g style="fill:#3c4b64">\n      <g>\n        <path d="M99.835,36.0577l-39-22.5167a12,12,0,0,0-12,0l-39,22.5166a12.0339,12.0339,0,0,0-6,10.3924V91.4833a12.0333,12.0333,0,0,0,6,10.3923l39,22.5167a12,12,0,0,0,12,0l39-22.5167a12.0331,12.0331,0,0,0,6-10.3923V46.45A12.0334,12.0334,0,0,0,99.835,36.0577Zm-2,55.4256a4,4,0,0,1-2,3.4641l-39,22.5167a4.0006,4.0006,0,0,1-4,0l-39-22.5167a4,4,0,0,1-2-3.4641V46.45a4,4,0,0,1,2-3.4642l39-22.5166a4,4,0,0,1,4,0l39,22.5166a4,4,0,0,1,2,3.4642Z"/>\n        <path d="M77.8567,82.0046h-2.866a4,4,0,0,0-1.9247.4934L55.7852,91.9833,35.835,80.4648V57.4872l19.95-11.5185,17.2893,9.4549a3.9993,3.9993,0,0,0,1.9192.4906h2.8632a2,2,0,0,0,2-2V51.2024a2,2,0,0,0-1.04-1.7547L59.628,38.9521a8.0391,8.0391,0,0,0-7.8428.09L31.8346,50.56a8.0246,8.0246,0,0,0-4,6.9287v22.976a8,8,0,0,0,4,6.9283l19.95,11.5186a8.0429,8.0429,0,0,0,7.8433.0879l19.19-10.5312a2,2,0,0,0,1.0378-1.7533v-2.71A2,2,0,0,0,77.8567,82.0046Z"/>\n      </g>\n      <g>\n        <path d="M172.58,45.3618a15.0166,15.0166,0,0,0-15,14.9995V77.6387a15,15,0,0,0,30,0V60.3613A15.0166,15.0166,0,0,0,172.58,45.3618Zm7,32.2769a7,7,0,0,1-14,0V60.3613a7,7,0,0,1,14,0Z"/>\n        <path d="M135.9138,53.4211a7.01,7.01,0,0,1,7.8681,6.0752.9894.9894,0,0,0,.9843.865h6.03a1.0108,1.0108,0,0,0,.9987-1.0971,15.0182,15.0182,0,0,0-15.7162-13.8837,15.2881,15.2881,0,0,0-14.2441,15.4163V77.2037A15.288,15.288,0,0,0,136.0792,92.62a15.0183,15.0183,0,0,0,15.7162-13.8842,1.0107,1.0107,0,0,0-.9987-1.0971h-6.03a.9894.9894,0,0,0-.9843.865,7.01,7.01,0,0,1-7.8679,6.0757,7.1642,7.1642,0,0,1-6.0789-7.1849V60.6057A7.1638,7.1638,0,0,1,135.9138,53.4211Z"/>\n        <path d="M218.7572,72.9277a12.1585,12.1585,0,0,0,7.1843-11.0771V58.1494A12.1494,12.1494,0,0,0,213.7921,46H196.835a1,1,0,0,0-1,1V91a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V74h6.6216l7.9154,17.4138a1,1,0,0,0,.91.5862h6.5911a1,1,0,0,0,.91-1.4138Zm-.8157-11.0771A4.1538,4.1538,0,0,1,213.7926,66h-9.8511V54h9.8511a4.1538,4.1538,0,0,1,4.1489,4.1494Z"/>\n        <path d="M260.835,46h-26a1,1,0,0,0-1,1V91a1,1,0,0,0,1,1h26a1,1,0,0,0,1-1V85a1,1,0,0,0-1-1h-19V72h13a1,1,0,0,0,1-1V65a1,1,0,0,0-1-1h-13V54h19a1,1,0,0,0,1-1V47A1,1,0,0,0,260.835,46Z"/>\n        <path d="M298.835,46h-6a1,1,0,0,0-1,1V69.6475a7.0066,7.0066,0,1,1-14,0V47a1,1,0,0,0-1-1h-6a1,1,0,0,0-1,1V69.6475a15.0031,15.0031,0,1,0,30,0V47A1,1,0,0,0,298.835,46Z"/>\n        <rect x="307.835" y="46" width="8" height="38" rx="1"/>\n      </g>\n    </g>\n  </g>\n'],logoNegative:["608 134",'\n  <title>coreui react pro logo</title>\n  <g>\n    <g style="fill:#80d0ff;">\n      <path d="M362.0177,90.1512,353.25,69.4149a.2507.2507,0,0,0-.2559-.1914H343.01a.2263.2263,0,0,0-.2559.2559V90.0233a.5657.5657,0,0,1-.64.64h-1.2163a.5652.5652,0,0,1-.64-.64V46.5028a.5655.5655,0,0,1,.64-.64H353.442a9.9792,9.9792,0,0,1,7.7437,3.2324A12.2,12.2,0,0,1,364.13,57.64a12.4389,12.4389,0,0,1-2.24,7.584,9.37,9.37,0,0,1-6.08,3.7441c-.1709.086-.2139.1915-.128.3194l8.7041,20.6084.064.2558q0,.5127-.5757.5118h-1.1523A.703.703,0,0,1,362.0177,90.1512ZM342.754,48.3593v18.496a.2259.2259,0,0,0,.2559.2559h10.3037a7.6713,7.6713,0,0,0,6.0166-2.5918,9.8807,9.8807,0,0,0,2.3037-6.8164,10.2875,10.2875,0,0,0-2.272-6.9756,7.6033,7.6033,0,0,0-6.0483-2.624H343.01A.2263.2263,0,0,0,342.754,48.3593Z"/>\n      <path d="M401.3263,48.1034H381.2945a.2262.2262,0,0,0-.2558.2559v18.496a.2259.2259,0,0,0,.2558.2559h13.8238a.5664.5664,0,0,1,.6406.64v.96a.5663.5663,0,0,1-.6406.6406H381.2945a.2263.2263,0,0,0-.2558.2559v18.56a.2258.2258,0,0,0,.2558.2558h20.0318a.5671.5671,0,0,1,.6406.6407v.96a.566.566,0,0,1-.6406.64H379.1827a.5653.5653,0,0,1-.64-.64V46.5028a.5656.5656,0,0,1,.64-.64h22.1436a.5664.5664,0,0,1,.6406.64v.96A.5663.5663,0,0,1,401.3263,48.1034Z"/>\n      <path d="M439.047,90.1512l-2.4317-8.832a.2971.2971,0,0,0-.32-.1924H419.5274a.2957.2957,0,0,0-.32.1924l-2.3681,8.7676a.6577.6577,0,0,1-.7036.5762H414.919a.5385.5385,0,0,1-.5756-.7041l12.0317-43.584a.6436.6436,0,0,1,.7041-.5117h1.6a.6442.6442,0,0,1,.7041.5117l12.16,43.584.0644.1923q0,.5127-.64.5118h-1.2163A.6428.6428,0,0,1,439.047,90.1512ZM419.9435,78.9188a.3031.3031,0,0,0,.2236.0967h15.4883a.3048.3048,0,0,0,.2236-.0967c.0645-.0635.0742-.1162.0322-.1592l-7.872-28.9287c-.043-.0849-.086-.1279-.128-.1279s-.0859.043-.1279.1279L419.9112,78.76C419.8683,78.8026,419.879,78.8553,419.9435,78.9188Z"/>\n      <path d="M456.6017,87.911a11.6372,11.6372,0,0,1-3.3277-8.7041V57.1913a11.4158,11.4158,0,0,1,3.36-8.5762,12.0941,12.0941,0,0,1,8.8-3.2637,12.2566,12.2566,0,0,1,8.8643,3.2315,11.3927,11.3927,0,0,1,3.36,8.6084v.64a.5663.5663,0,0,1-.6406.6407l-1.28.0634q-.6408,0-.64-.5761v-.8321a9.289,9.289,0,0,0-2.6558-6.9121,10.6734,10.6734,0,0,0-14.0161,0,9.2854,9.2854,0,0,0-2.6563,6.9121V79.3993a9.2808,9.2808,0,0,0,2.6563,6.9121,10.67,10.67,0,0,0,14.0161,0,9.2843,9.2843,0,0,0,2.6558-6.9121v-.7686q0-.5757.64-.5752l1.28.0635a.5667.5667,0,0,1,.6406.6406v.5118a11.4952,11.4952,0,0,1-3.36,8.64,13.6227,13.6227,0,0,1-17.6963,0Z"/>\n      <path d="M514.4376,46.5028v.96a.5658.5658,0,0,1-.64.6406H503.046a.2263.2263,0,0,0-.2559.2559v41.664a.566.566,0,0,1-.6406.64h-1.2158a.5652.5652,0,0,1-.64-.64V48.3593a.2266.2266,0,0,0-.2558-.2559H489.8619a.5656.5656,0,0,1-.64-.6406v-.96a.5656.5656,0,0,1,.64-.64H513.798A.5658.5658,0,0,1,514.4376,46.5028Z"/>\n      <path d="M522.0665,89.5116a2.8385,2.8385,0,0,1-.8-2.0488,2.9194,2.9194,0,0,1,.8-2.1114,2.7544,2.7544,0,0,1,2.08-.832,2.8465,2.8465,0,0,1,2.9438,2.9434,2.7541,2.7541,0,0,1-.832,2.08,2.9221,2.9221,0,0,1-2.1118.8008A2.754,2.754,0,0,1,522.0665,89.5116Z"/>\n      <path d="M542.4054,88.0077a11.3123,11.3123,0,0,1-3.2-8.416v-5.44a.5656.5656,0,0,1,.64-.64h1.2158a.5661.5661,0,0,1,.64.64v5.5039a9.1424,9.1424,0,0,0,2.5283,6.72,8.9745,8.9745,0,0,0,6.6875,2.5605,8.7908,8.7908,0,0,0,9.28-9.28V46.5028a.5655.5655,0,0,1,.64-.64h1.2163a.566.566,0,0,1,.64.64V79.5917a11.2545,11.2545,0,0,1-3.2325,8.416,13.0618,13.0618,0,0,1-17.0556,0Z"/>\n      <path d="M580.35,88.1034a10.4859,10.4859,0,0,1-3.36-8.1279v-1.792a.5663.5663,0,0,1,.64-.6407h1.0884a.5668.5668,0,0,1,.64.6407v1.6a8.5459,8.5459,0,0,0,2.752,6.6562,10.5353,10.5353,0,0,0,7.36,2.4961,9.8719,9.8719,0,0,0,6.9761-2.3681,8.2161,8.2161,0,0,0,2.56-6.336,8.4,8.4,0,0,0-1.12-4.416,11.3812,11.3812,0,0,0-3.3281-3.3926,71.6714,71.6714,0,0,0-6.1763-3.7119,71.0479,71.0479,0,0,1-6.24-3.84,12.1711,12.1711,0,0,1-3.4238-3.68,10.2614,10.2614,0,0,1-1.28-5.3438,9.8579,9.8579,0,0,1,3.0718-7.7441,12.0122,12.0122,0,0,1,8.32-2.752q5.6954,0,8.96,3.1036a10.8251,10.8251,0,0,1,3.2642,8.2246v1.6a.5658.5658,0,0,1-.64.64h-1.1519a.5652.5652,0,0,1-.64-.64V56.8075a8.8647,8.8647,0,0,0-2.624-6.6885,9.9933,9.9933,0,0,0-7.232-2.5273,9.37,9.37,0,0,0-6.5278,2.1435,7.8224,7.8224,0,0,0-2.3682,6.1123,7.8006,7.8006,0,0,0,1.0244,4.16,10.387,10.387,0,0,0,3.0078,3.0391,62.8714,62.8714,0,0,0,5.9522,3.4882,71.0575,71.0575,0,0,1,6.72,4.2559,13.4674,13.4674,0,0,1,3.648,3.9365,10.049,10.049,0,0,1,1.28,5.1836,10.7177,10.7177,0,0,1-3.2637,8.1924q-3.2637,3.0717-8.832,3.0723Q583.71,91.1757,580.35,88.1034Z"/>\n    </g>\n\n    <g style="fill:#fff;">\n      <g>\n        <path d="M99.835,36.0577l-39-22.5167a12,12,0,0,0-12,0l-39,22.5166a12.0339,12.0339,0,0,0-6,10.3924V91.4833a12.0333,12.0333,0,0,0,6,10.3923l39,22.5167a12,12,0,0,0,12,0l39-22.5167a12.0331,12.0331,0,0,0,6-10.3923V46.45A12.0334,12.0334,0,0,0,99.835,36.0577Zm-2,55.4256a4,4,0,0,1-2,3.4641l-39,22.5167a4.0006,4.0006,0,0,1-4,0l-39-22.5167a4,4,0,0,1-2-3.4641V46.45a4,4,0,0,1,2-3.4642l39-22.5166a4,4,0,0,1,4,0l39,22.5166a4,4,0,0,1,2,3.4642Z"/>\n        <path d="M77.8567,82.0046h-2.866a4,4,0,0,0-1.9247.4934L55.7852,91.9833,35.835,80.4648V57.4872l19.95-11.5185,17.2893,9.4549a3.9993,3.9993,0,0,0,1.9192.4906h2.8632a2,2,0,0,0,2-2V51.2024a2,2,0,0,0-1.04-1.7547L59.628,38.9521a8.0391,8.0391,0,0,0-7.8428.09L31.8346,50.56a8.0246,8.0246,0,0,0-4,6.9287v22.976a8,8,0,0,0,4,6.9283l19.95,11.5186a8.0429,8.0429,0,0,0,7.8433.0879l19.19-10.5312a2,2,0,0,0,1.0378-1.7533v-2.71A2,2,0,0,0,77.8567,82.0046Z"/>\n      </g>\n      <g>\n        <path d="M172.58,45.3618a15.0166,15.0166,0,0,0-15,14.9995V77.6387a15,15,0,0,0,30,0V60.3613A15.0166,15.0166,0,0,0,172.58,45.3618Zm7,32.2769a7,7,0,0,1-14,0V60.3613a7,7,0,0,1,14,0Z"/>\n        <path d="M135.9138,53.4211a7.01,7.01,0,0,1,7.8681,6.0752.9894.9894,0,0,0,.9843.865h6.03a1.0108,1.0108,0,0,0,.9987-1.0971,15.0182,15.0182,0,0,0-15.7162-13.8837,15.2881,15.2881,0,0,0-14.2441,15.4163V77.2037A15.288,15.288,0,0,0,136.0792,92.62a15.0183,15.0183,0,0,0,15.7162-13.8842,1.0107,1.0107,0,0,0-.9987-1.0971h-6.03a.9894.9894,0,0,0-.9843.865,7.01,7.01,0,0,1-7.8679,6.0757,7.1642,7.1642,0,0,1-6.0789-7.1849V60.6057A7.1638,7.1638,0,0,1,135.9138,53.4211Z"/>\n        <path d="M218.7572,72.9277a12.1585,12.1585,0,0,0,7.1843-11.0771V58.1494A12.1494,12.1494,0,0,0,213.7921,46H196.835a1,1,0,0,0-1,1V91a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V74h6.6216l7.9154,17.4138a1,1,0,0,0,.91.5862h6.5911a1,1,0,0,0,.91-1.4138Zm-.8157-11.0771A4.1538,4.1538,0,0,1,213.7926,66h-9.8511V54h9.8511a4.1538,4.1538,0,0,1,4.1489,4.1494Z"/>\n        <path d="M260.835,46h-26a1,1,0,0,0-1,1V91a1,1,0,0,0,1,1h26a1,1,0,0,0,1-1V85a1,1,0,0,0-1-1h-19V72h13a1,1,0,0,0,1-1V65a1,1,0,0,0-1-1h-13V54h19a1,1,0,0,0,1-1V47A1,1,0,0,0,260.835,46Z"/>\n        <path d="M298.835,46h-6a1,1,0,0,0-1,1V69.6475a7.0066,7.0066,0,1,1-14,0V47a1,1,0,0,0-1-1h-6a1,1,0,0,0-1,1V69.6475a15.0031,15.0031,0,1,0,30,0V47A1,1,0,0,0,298.835,46Z"/>\n        <rect x="307.835" y="46" width="8" height="38" rx="1"/>\n      </g>\n    </g>\n  </g>\n']},{cilAlignCenter:na.a,cilAlignLeft:ta.a,cilAlignRight:oa.a,cilApplicationsSettings:ca.a,cilArrowRight:ia.a,cilArrowTop:la.a,cilAsterisk:ra.a,cilBan:sa.a,cilBasket:ha.a,cilBell:ua.a,cilBold:pa.a,cilBookmark:ma.a,cilCalculator:ba.a,cilCalendar:da.a,cilCloudDownload:fa.a,cilChartPie:ja.a,cilCheck:ga.a,cilChevronBottom:va.a,cilChevronLeft:ya.a,cilChevronRight:Oa.a,cilChevronTop:xa.a,cilCircle:Va.a,cilCheckCircle:wa.a,cilCode:Aa.a,cilCommentSquare:Ca.a,cilCreditCard:za.a,cilCursor:Sa.a,cilCursorMove:Ma.a,cilDrop:La.a,cilDollar:Ia.a,cilEnvelopeClosed:Na.a,cilEnvelopeLetter:ka.a,cilEnvelopeOpen:Pa.a,cilEuro:Za.a,cilGlobeAlt:Ea.a,cilGrid:Ta.a,cilFile:Ba.a,cilFullscreen:Ha.a,cilFullscreenExit:Fa.a,cilGraph:Ra.a,cilHome:Ua.a,cilInbox:Da.a,cilIndentDecrease:Ja.a,cilIndentIncrease:Ga.a,cilInputPower:qa.a,cilItalic:Ya.a,cilJustifyCenter:_a.a,cilJustifyLeft:Wa.a,cilLaptop:Xa.a,cilLayers:Qa.a,cilLightbulb:Ka.a,cilList:$a.a,cilListNumbered:ae.a,cilListRich:ee.a,cilLocationPin:ne.a,cilLockLocked:te.a,cilMagnifyingGlass:oe.a,cilMap:ce.a,cilMoon:ie.a,cilNotes:le.a,cilOptions:re.a,cilPaperclip:se.a,cilPaperPlane:he.a,cilPencil:ue.a,cilPeople:pe.a,cilPhone:me.a,cilPrint:be.a,cilPuzzle:de.a,cilSave:fe.a,cilScrubber:je.a,cilSettings:ge.a,cilShare:ve.a,cilShareAll:ye.a,cilShareBoxed:Oe.a,cilShieldAlt:xe.a,cilSpeech:Ve.a,cilSpeedometer:we.a,cilSpreadsheet:Ae.a,cilStar:Ce.a,cilSun:ze.a,cilTags:Se.a,cilTask:Me.a,cilTrash:Le.a,cilUnderline:Ie.a,cilUser:Ne.a,cilUserFemale:ke.a,cilUserFollow:Pe.a,cilUserUnfollow:Ze.a,cilX:Ee.a,cilXCircle:Te.a,cilWarning:Be.a},{cifUs:X.a,cifBr:Q.a,cifIn:K.a,cifFr:$.a,cifEs:aa.a,cifPl:ea.a},{cibSkype:C.a,cibFacebook:z.a,cibTwitter:S.a,cibLinkedin:M.a,cibFlickr:L.a,cibTumblr:I.a,cibXing:N.a,cibGithub:k.a,cibStackoverflow:P.a,cibYoutube:Z.a,cibDribbble:E.a,cibInstagram:T.a,cibPinterest:B.a,cibVk:H.a,cibYahoo:F.a,cibBehance:R.a,cibReddit:U.a,cibVimeo:D.a,cibCcMastercard:J.a,cibCcVisa:G.a,cibStripe:q.a,cibPaypal:Y.a,cibGooglePay:_.a,cibCcAmex:W.a}),Fe=n(133),Re=n(131),Ue={sidebarShow:"responsive"},De=Object(Re.b)((function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ue,e=arguments.length>1?arguments[1]:void 0,n=e.type,t=Object(p.a)(e,["type"]);switch(n){case"set":return Object(u.a)(Object(u.a)({},a),t);default:return a}}));o.a.icons=He,i.a.render(Object(d.jsx)(Fe.a,{store:De,children:Object(d.jsx)(A,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(a){a.unregister()}))},97:function(a,e,n){"use strict";n.d(e,"a",(function(){return t}));n(37),n(57),n(59),n(185);var t={ORGANISATION_SETTINGS:{COMPANYNAME:"Insurance Company"},SYSTEM_SETTINGS:{SOFTWARE_URL:"",API_URL:"https://zmlqcprooa.execute-api.us-east-1.amazonaws.com/production/api/v1"},USER_TOKEN:{TOKEN:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2xvY2FsaG9zdDo0NDMyOS8iLCJhdWQiOiJodHRwczovL2xvY2FsaG9zdDo0NDMyOS8ifQ.j9o8spUTqVaO91cB4pRLmok-gn2aIN34e7aUXb6wok0"},UserList:[],District:[],PolicyNo:[],PolicyDetails:{},Mandal:[],Village:[],Format1List:[],Format1obj:{},isAuthenticated:!1,TagList:[],API_HEADER:{headers:{"Content-Type":"application/json","Access-Control-Allow-Headers":"*","Access-Control-Allow-Origin":"*","Auth-Token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2xvY2FsaG9zdDo0NDMyOS8iLCJhdWQiOiJodHRwczovL2xvY2FsaG9zdDo0NDMyOS8ifQ.j9o8spUTqVaO91cB4pRLmok-gn2aIN34e7aUXb6wok0"}},DB:"TESTVI",USER_ID:"0",AUTH_TOKEN:"",USER_NAME:"ADMIN",SESSION_ID:"",FACTORY:"",FACTORY_NAME:"VIROLA INTERNATIONAL"}}},[[536,18,19]]]);
//# sourceMappingURL=main.dc7b2325.chunk.js.map