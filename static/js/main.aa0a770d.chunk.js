(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[9],{181:function(a,e,t){"use strict";t.d(e,"a",(function(){return n}));t(50),t(72),t(66),t(182);var n={ORGANISATION_SETTINGS:{COMPANYNAME:"Insurance Company"},SYSTEM_SETTINGS:{SOFTWARE_URL:"",API_URL:"https://zmlqcprooa.execute-api.us-east-1.amazonaws.com/production/api/v1"},USER_TOKEN:{TOKEN:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2xvY2FsaG9zdDo0NDMyOS8iLCJhdWQiOiJodHRwczovL2xvY2FsaG9zdDo0NDMyOS8ifQ.j9o8spUTqVaO91cB4pRLmok-gn2aIN34e7aUXb6wok0"},UserList:[],Format1List:[],isAuthenticated:!1,TagList:[],API_HEADER:{headers:{"Content-Type":"application/json","Access-Control-Allow-Headers":"*","Access-Control-Allow-Origin":"*","Auth-Token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2xvY2FsaG9zdDo0NDMyOS8iLCJhdWQiOiJodHRwczovL2xvY2FsaG9zdDo0NDMyOS8ifQ.j9o8spUTqVaO91cB4pRLmok-gn2aIN34e7aUXb6wok0"}},DB:"TESTVI",USER_ID:"0",AUTH_TOKEN:"",USER_NAME:"ADMIN",SESSION_ID:"",FACTORY:"",FACTORY_NAME:"VIROLA INTERNATIONAL"}},183:function(a,e,t){"use strict";t.r(e);var n=t(124),c=t(122),i=t(123),l=t(93),o=t(127),r=t(126),s=t(1),h=t(36),d=t(20),p=t(43),u=(t(129),t(181),t(66)),b=t.n(u),j=(t(182),t(396),t(6)),m=function(a){Object(o.a)(t,a);var e=Object(r.a)(t);function t(a){var n;return Object(c.a)(this,t),(n=e.call(this,a)).login=function(){if(""===n.state.username||""===n.state.password)return b.a.fire({icon:"info",title:"UserName And Password Can't Be Blank",showConfirmButton:!1,timer:1e3}),!1;console.log(n.state.username),console.log(n.state.password),localStorage.setItem("itemName",!0),n.props.history.push("/")},n.handleLogin=function(){if(""===n.state.username||""===n.state.password)return b.a.fire({icon:"info",title:"UserName And Password Can't Be Blank",showConfirmButton:!1,timer:1e3}),!1;if(""===n.state.password)return b.a.fire({icon:"info",title:"PLEASE ENTER PASSWORD",showConfirmButton:!1,timer:1e3}),!1},n.state={username:"",password:""},n.onInputchange=n.onInputchange.bind(Object(l.a)(n)),n.onSubmitForm=n.onSubmitForm.bind(Object(l.a)(n)),n}return Object(i.a)(t,[{key:"onInputchange",value:function(a){this.setState(Object(n.a)({},a.target.name,a.target.value))}},{key:"onSubmitForm",value:function(){console.log(this.state)}},{key:"render",value:function(){var a=this;return Object(j.jsx)("div",{className:"c-app c-default-layout flex-row align-items-center",children:Object(j.jsx)(d.w,{children:Object(j.jsx)(d.wb,{className:"justify-content-center",children:Object(j.jsx)(d.u,{md:"8",children:Object(j.jsxs)(d.m,{children:[Object(j.jsx)(d.j,{className:"p-4",children:Object(j.jsx)(d.k,{children:Object(j.jsxs)(d.J,{children:[Object(j.jsx)("h1",{children:"Login"}),Object(j.jsx)("p",{className:"text-muted",children:"Sign In to your account"}),Object(j.jsxs)(d.V,{className:"mb-3",children:[Object(j.jsx)(d.X,{children:Object(j.jsx)(d.Y,{children:Object(j.jsx)(p.a,{name:"cil-user"})})}),Object(j.jsx)(d.S,{type:"text",placeholder:"Username",autoComplete:"username",name:"username",value:this.state.username,onChange:this.onInputchange})]}),Object(j.jsxs)(d.V,{className:"mb-4",children:[Object(j.jsx)(d.X,{children:Object(j.jsx)(d.Y,{children:Object(j.jsx)(p.a,{name:"cil-lock-locked"})})}),Object(j.jsx)(d.S,{type:"password",placeholder:"Password",autoComplete:"current-password",name:"password",value:this.state.password,onChange:this.onInputchange})]}),Object(j.jsxs)(d.wb,{children:[Object(j.jsx)(d.u,{xs:"6",children:Object(j.jsx)(d.f,{color:"primary",className:"px-4",onClick:function(){return a.login()},children:"Login"})}),Object(j.jsx)(d.u,{xs:"6",className:"text-right",children:Object(j.jsx)(d.f,{color:"link",className:"px-0",children:"Forgot password?"})})]})]})})}),Object(j.jsx)(d.j,{className:"text-white bg-primary py-5 d-md-down-none",style:{width:"44%"},children:Object(j.jsx)(d.k,{className:"text-center",children:Object(j.jsx)(d.wb,{children:Object(j.jsxs)(d.u,{xs:"12",children:[Object(j.jsx)("h2",{children:"Fouress Insurance Broking Services Pvt Ltd"}),Object(j.jsx)("h5",{children:"(Sheep,Milch Cattle Insurance Management Systems)"}),Object(j.jsx)("h6",{children:" "}),Object(j.jsx)(h.b,{to:"/register",children:Object(j.jsx)(d.f,{color:"success",className:"mt-3",active:!0,tabIndex:-1,children:"Register Now!"})})]})})})})]})})})})})}}]),t}(s.Component);e.default=m},396:function(a,e,t){"use strict";t(1),t(36),t(16),t(183),t(6)},506:function(a,e){!function(){if("function"===typeof window.CustomEvent)return!1;function a(a,e){e=e||{bubbles:!1,cancelable:!1,detail:void 0};var t=document.createEvent("CustomEvent");return t.initCustomEvent(a,e.bubbles,e.cancelable,e.detail),t}a.prototype=window.Event.prototype,window.CustomEvent=a}(),Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(a){var e=this;do{if(Element.prototype.matches.call(e,a))return e;e=e.parentElement||e.parentNode}while(null!==e&&1===e.nodeType);return null})},511:function(a,e,t){},526:function(a,e,t){"use strict";t.r(e);t(133),t(142),t(143),t(144),t(145),t(146),t(147),t(148),t(149),t(150),t(151),t(152),t(153),t(154),t(155),t(194),t(196),t(197),t(198),t(199),t(200),t(201),t(203),t(204),t(157),t(208),t(209),t(86),t(212),t(213),t(215),t(216),t(217),t(218),t(219),t(220),t(221),t(222),t(223),t(224),t(225),t(226),t(227),t(228),t(162),t(104),t(230),t(232),t(233),t(234),t(235),t(236),t(237),t(238),t(240),t(241),t(242),t(243),t(244),t(245),t(246),t(247),t(164),t(248),t(249),t(250),t(252),t(254),t(255),t(256),t(257),t(258),t(259),t(261),t(262),t(264),t(265),t(266),t(268),t(269),t(270),t(271),t(272),t(273),t(274),t(276),t(277),t(278),t(279),t(280),t(281),t(282),t(283),t(166),t(284),t(285),t(291),t(292),t(293),t(294),t(295),t(296),t(297),t(298),t(299),t(300),t(301),t(302),t(303),t(304),t(168),t(305),t(306),t(170),t(307),t(308),t(309),t(310),t(112),t(311),t(312),t(315),t(316),t(317),t(318),t(320),t(321),t(322),t(323),t(324),t(325),t(326),t(327),t(328),t(329),t(330),t(331),t(332),t(333),t(334),t(335),t(336),t(337),t(338),t(339),t(345),t(346),t(347),t(348),t(349),t(350),t(351),t(352),t(353),t(354),t(355),t(356),t(357),t(358),t(359),t(360),t(361),t(362),t(363),t(364),t(365),t(366),t(367),t(368),t(369),t(370),t(371),t(372),t(373),t(374),t(375),t(376),t(377),t(116),t(379),t(410),t(412),t(413),t(414),t(415),t(416),t(418),t(419),t(420),t(421),t(422),t(423),t(424),t(425),t(427),t(428),t(429),t(430),t(431),t(432),t(433),t(434),t(435),t(436),t(437),t(438),t(439),t(440),t(441),t(442),t(443),t(444),t(445),t(446),t(447),t(448),t(449),t(450),t(451),t(453),t(455),t(456),t(457),t(458),t(459),t(460),t(461),t(462),t(463),t(464),t(465),t(466),t(467),t(468),t(469),t(470),t(471),t(472),t(473),t(474),t(475),t(476),t(477),t(478),t(479),t(480),t(481),t(482),t(483),t(484),t(485),t(487),t(383),t(384),t(385),t(489),t(490),t(491),t(492),t(493),t(494),t(495),t(386),t(388),t(389),t(390),t(391),t(393),t(175),t(497),t(502),t(506);var n=t(1),c=t.n(n),i=t(57),l=t.n(i),o=t(122),r=t(123),s=t(127),h=t(126),d=t(45),p=t(71),u=t(16),b=t(36),j=(t(511),t(181),t(396),t(6)),m=Object(j.jsx)("div",{className:"pt-3 text-center",children:Object(j.jsx)("div",{className:"sk-spinner sk-spinner-pulse"})}),v=c.a.lazy((function(){return t.e(6).then(t.bind(null,527))})),O=c.a.lazy((function(){return Promise.resolve().then(t.bind(null,183))})),g=c.a.lazy((function(){return t.e(5).then(t.bind(null,536))})),f=c.a.lazy((function(){return t.e(8).then(t.bind(null,684))})),x=c.a.lazy((function(){return t.e(53).then(t.bind(null,759))})),V=function(){return localStorage.getItem("itemName")},A=function(a){var e=a.component,t=Object(p.a)(a,["component"]);return Object(j.jsx)(u.b,Object(d.a)(Object(d.a)({},t),{},{render:function(a){return V()?Object(j.jsx)(u.a,{to:"/"}):Object(j.jsx)(e,Object(d.a)({},a))}}))},w=function(a){var e=a.component,t=Object(p.a)(a,["component"]);return Object(j.jsx)(u.b,Object(d.a)(Object(d.a)({},t),{},{render:function(a){return V()?Object(j.jsx)(e,Object(d.a)({},a)):Object(j.jsx)(u.a,{to:"/login"})}}))},y=function(a){Object(s.a)(t,a);var e=Object(h.a)(t);function t(){return Object(o.a)(this,t),e.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return Object(j.jsx)(b.a,{children:Object(j.jsx)(c.a.Suspense,{fallback:m,children:Object(j.jsxs)(u.d,{children:[Object(j.jsx)(A,{exact:!0,path:"/login",name:"Login Page",component:O}),Object(j.jsx)(u.b,{exact:!0,path:"/register",name:"Register Page",component:g}),Object(j.jsx)(u.b,{exact:!0,path:"/404",name:"Page 404",component:f}),Object(j.jsx)(u.b,{exact:!0,path:"/500",name:"Page 500",component:x}),Object(j.jsx)(w,{path:"/",name:"Home",component:v})]})})})}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var C=t(636),M=t(637),S=t(638),L=t(639),I=t(640),N=t(641),k=t(642),E=t(643),Z=t(644),H=t(645),T=t(646),P=t(647),R=t(648),U=t(649),B=t(650),F=t(651),z=t(652),D=t(653),J=t(654),q=t(655),G=t(656),Y=t(657),_=t(658),X=t(659),W=t(630),Q=t(631),K=t(632),$=t(633),aa=t(634),ea=t(635),ta=t(541),na=t(542),ca=t(543),ia=t(544),la=t(545),oa=t(539),ra=t(546),sa=t(540),ha=t(547),da=t(548),pa=t(549),ua=t(550),ba=t(551),ja=t(552),ma=t(553),va=t(554),Oa=t(555),ga=t(556),fa=t(557),xa=t(558),Va=t(559),Aa=t(560),wa=t(561),ya=t(562),Ca=t(563),Ma=t(564),Sa=t(565),La=t(566),Ia=t(567),Na=t(568),ka=t(569),Ea=t(570),Za=t(571),Ha=t(572),Ta=t(573),Pa=t(574),Ra=t(575),Ua=t(576),Ba=t(577),Fa=t(578),za=t(579),Da=t(580),Ja=t(581),qa=t(582),Ga=t(583),Ya=t(584),_a=t(585),Xa=t(586),Wa=t(587),Qa=t(588),Ka=t(589),$a=t(590),ae=t(591),ee=t(592),te=t(593),ne=t(594),ce=t(595),ie=t(596),le=t(597),oe=t(598),re=t(599),se=t(600),he=t(601),de=t(602),pe=t(603),ue=t(604),be=t(605),je=t(606),me=t(607),ve=t(608),Oe=t(609),ge=t(610),fe=t(611),xe=t(612),Ve=t(613),Ae=t(614),we=t(615),ye=t(616),Ce=t(617),Me=t(618),Se=t(619),Le=t(620),Ie=t(621),Ne=t(622),ke=t(623),Ee=t(624),Ze=t(625),He=t(626),Te=t(627),Pe=t(628),Re=t(629),Ue=Object.assign({},{sygnet:["160 160",'\n  <title>coreui logo</title>\n  <g>\n    <g style="fill:#fff;">\n      <path d="M125,47.091,86,24.5743a12,12,0,0,0-12,0L35,47.091a12.0336,12.0336,0,0,0-6,10.3923v45.0334a12.0335,12.0335,0,0,0,6,10.3923l39,22.5166a11.9993,11.9993,0,0,0,12,0l39-22.5166a12.0335,12.0335,0,0,0,6-10.3923V57.4833A12.0336,12.0336,0,0,0,125,47.091Zm-2,55.4257a4,4,0,0,1-2,3.464L82,128.4974a4,4,0,0,1-4,0L39,105.9807a4,4,0,0,1-2-3.464V57.4833a4,4,0,0,1,2-3.4641L78,31.5025a4,4,0,0,1,4,0l39,22.5167a4,4,0,0,1,2,3.4641Z"/>\n      <path d="M103.0216,93.0379h-2.866a4,4,0,0,0-1.9246.4935L80.95,103.0167,61,91.4981V68.5206L80.95,57.002l17.2894,9.455a4,4,0,0,0,1.9192.4905h2.8632a2,2,0,0,0,2-2V62.2357a2,2,0,0,0-1.04-1.7547L84.793,49.9854a8.0391,8.0391,0,0,0-7.8428.09L57,61.5929A8.0243,8.0243,0,0,0,53,68.5216v22.976a8,8,0,0,0,4,6.9283l19.95,11.5185a8.0422,8.0422,0,0,0,7.8433.0879l19.19-10.5311a2,2,0,0,0,1.0378-1.7534v-2.71A2,2,0,0,0,103.0216,93.0379Z"/>\n    </g>\n  </g>\n'],logo:["608 134",'\n  <title>coreui react pro</title>\n  <g>\n    <g style="fill:#00a1ff">\n      <path d="M362.0177,90.1512,353.25,69.4149a.2507.2507,0,0,0-.2559-.1914H343.01a.2263.2263,0,0,0-.2559.2559V90.0233a.5657.5657,0,0,1-.64.64h-1.2163a.5652.5652,0,0,1-.64-.64V46.5028a.5655.5655,0,0,1,.64-.64H353.442a9.9792,9.9792,0,0,1,7.7437,3.2324A12.2,12.2,0,0,1,364.13,57.64a12.4389,12.4389,0,0,1-2.24,7.584,9.37,9.37,0,0,1-6.08,3.7441c-.1709.086-.2139.1915-.128.3194l8.7041,20.6084.064.2558q0,.5127-.5757.5118h-1.1523A.703.703,0,0,1,362.0177,90.1512ZM342.754,48.3593v18.496a.2259.2259,0,0,0,.2559.2559h10.3037a7.6713,7.6713,0,0,0,6.0166-2.5918,9.8807,9.8807,0,0,0,2.3037-6.8164,10.2875,10.2875,0,0,0-2.272-6.9756,7.6033,7.6033,0,0,0-6.0483-2.624H343.01A.2263.2263,0,0,0,342.754,48.3593Z"/>\n      <path d="M401.3263,48.1034H381.2945a.2262.2262,0,0,0-.2558.2559v18.496a.2259.2259,0,0,0,.2558.2559h13.8238a.5664.5664,0,0,1,.6406.64v.96a.5663.5663,0,0,1-.6406.6406H381.2945a.2263.2263,0,0,0-.2558.2559v18.56a.2258.2258,0,0,0,.2558.2558h20.0318a.5671.5671,0,0,1,.6406.6407v.96a.566.566,0,0,1-.6406.64H379.1827a.5653.5653,0,0,1-.64-.64V46.5028a.5656.5656,0,0,1,.64-.64h22.1436a.5664.5664,0,0,1,.6406.64v.96A.5663.5663,0,0,1,401.3263,48.1034Z"/>\n      <path d="M439.047,90.1512l-2.4317-8.832a.2971.2971,0,0,0-.32-.1924H419.5274a.2957.2957,0,0,0-.32.1924l-2.3681,8.7676a.6577.6577,0,0,1-.7036.5762H414.919a.5385.5385,0,0,1-.5756-.7041l12.0317-43.584a.6436.6436,0,0,1,.7041-.5117h1.6a.6442.6442,0,0,1,.7041.5117l12.16,43.584.0644.1923q0,.5127-.64.5118h-1.2163A.6428.6428,0,0,1,439.047,90.1512ZM419.9435,78.9188a.3031.3031,0,0,0,.2236.0967h15.4883a.3048.3048,0,0,0,.2236-.0967c.0645-.0635.0742-.1162.0322-.1592l-7.872-28.9287c-.043-.0849-.086-.1279-.128-.1279s-.0859.043-.1279.1279L419.9112,78.76C419.8683,78.8026,419.879,78.8553,419.9435,78.9188Z"/>\n      <path d="M456.6017,87.911a11.6372,11.6372,0,0,1-3.3277-8.7041V57.1913a11.4158,11.4158,0,0,1,3.36-8.5762,12.0941,12.0941,0,0,1,8.8-3.2637,12.2566,12.2566,0,0,1,8.8643,3.2315,11.3927,11.3927,0,0,1,3.36,8.6084v.64a.5663.5663,0,0,1-.6406.6407l-1.28.0634q-.6408,0-.64-.5761v-.8321a9.289,9.289,0,0,0-2.6558-6.9121,10.6734,10.6734,0,0,0-14.0161,0,9.2854,9.2854,0,0,0-2.6563,6.9121V79.3993a9.2808,9.2808,0,0,0,2.6563,6.9121,10.67,10.67,0,0,0,14.0161,0,9.2843,9.2843,0,0,0,2.6558-6.9121v-.7686q0-.5757.64-.5752l1.28.0635a.5667.5667,0,0,1,.6406.6406v.5118a11.4952,11.4952,0,0,1-3.36,8.64,13.6227,13.6227,0,0,1-17.6963,0Z"/>\n      <path d="M514.4376,46.5028v.96a.5658.5658,0,0,1-.64.6406H503.046a.2263.2263,0,0,0-.2559.2559v41.664a.566.566,0,0,1-.6406.64h-1.2158a.5652.5652,0,0,1-.64-.64V48.3593a.2266.2266,0,0,0-.2558-.2559H489.8619a.5656.5656,0,0,1-.64-.6406v-.96a.5656.5656,0,0,1,.64-.64H513.798A.5658.5658,0,0,1,514.4376,46.5028Z"/>\n      <path d="M522.0665,89.5116a2.8385,2.8385,0,0,1-.8-2.0488,2.9194,2.9194,0,0,1,.8-2.1114,2.7544,2.7544,0,0,1,2.08-.832,2.8465,2.8465,0,0,1,2.9438,2.9434,2.7541,2.7541,0,0,1-.832,2.08,2.9221,2.9221,0,0,1-2.1118.8008A2.754,2.754,0,0,1,522.0665,89.5116Z"/>\n      <path d="M542.4054,88.0077a11.3123,11.3123,0,0,1-3.2-8.416v-5.44a.5656.5656,0,0,1,.64-.64h1.2158a.5661.5661,0,0,1,.64.64v5.5039a9.1424,9.1424,0,0,0,2.5283,6.72,8.9745,8.9745,0,0,0,6.6875,2.5605,8.7908,8.7908,0,0,0,9.28-9.28V46.5028a.5655.5655,0,0,1,.64-.64h1.2163a.566.566,0,0,1,.64.64V79.5917a11.2545,11.2545,0,0,1-3.2325,8.416,13.0618,13.0618,0,0,1-17.0556,0Z"/>\n      <path d="M580.35,88.1034a10.4859,10.4859,0,0,1-3.36-8.1279v-1.792a.5663.5663,0,0,1,.64-.6407h1.0884a.5668.5668,0,0,1,.64.6407v1.6a8.5459,8.5459,0,0,0,2.752,6.6562,10.5353,10.5353,0,0,0,7.36,2.4961,9.8719,9.8719,0,0,0,6.9761-2.3681,8.2161,8.2161,0,0,0,2.56-6.336,8.4,8.4,0,0,0-1.12-4.416,11.3812,11.3812,0,0,0-3.3281-3.3926,71.6714,71.6714,0,0,0-6.1763-3.7119,71.0479,71.0479,0,0,1-6.24-3.84,12.1711,12.1711,0,0,1-3.4238-3.68,10.2614,10.2614,0,0,1-1.28-5.3438,9.8579,9.8579,0,0,1,3.0718-7.7441,12.0122,12.0122,0,0,1,8.32-2.752q5.6954,0,8.96,3.1036a10.8251,10.8251,0,0,1,3.2642,8.2246v1.6a.5658.5658,0,0,1-.64.64h-1.1519a.5652.5652,0,0,1-.64-.64V56.8075a8.8647,8.8647,0,0,0-2.624-6.6885,9.9933,9.9933,0,0,0-7.232-2.5273,9.37,9.37,0,0,0-6.5278,2.1435,7.8224,7.8224,0,0,0-2.3682,6.1123,7.8006,7.8006,0,0,0,1.0244,4.16,10.387,10.387,0,0,0,3.0078,3.0391,62.8714,62.8714,0,0,0,5.9522,3.4882,71.0575,71.0575,0,0,1,6.72,4.2559,13.4674,13.4674,0,0,1,3.648,3.9365,10.049,10.049,0,0,1,1.28,5.1836,10.7177,10.7177,0,0,1-3.2637,8.1924q-3.2637,3.0717-8.832,3.0723Q583.71,91.1757,580.35,88.1034Z"/>\n    </g>\n    <g style="fill:#3c4b64">\n      <g>\n        <path d="M99.835,36.0577l-39-22.5167a12,12,0,0,0-12,0l-39,22.5166a12.0339,12.0339,0,0,0-6,10.3924V91.4833a12.0333,12.0333,0,0,0,6,10.3923l39,22.5167a12,12,0,0,0,12,0l39-22.5167a12.0331,12.0331,0,0,0,6-10.3923V46.45A12.0334,12.0334,0,0,0,99.835,36.0577Zm-2,55.4256a4,4,0,0,1-2,3.4641l-39,22.5167a4.0006,4.0006,0,0,1-4,0l-39-22.5167a4,4,0,0,1-2-3.4641V46.45a4,4,0,0,1,2-3.4642l39-22.5166a4,4,0,0,1,4,0l39,22.5166a4,4,0,0,1,2,3.4642Z"/>\n        <path d="M77.8567,82.0046h-2.866a4,4,0,0,0-1.9247.4934L55.7852,91.9833,35.835,80.4648V57.4872l19.95-11.5185,17.2893,9.4549a3.9993,3.9993,0,0,0,1.9192.4906h2.8632a2,2,0,0,0,2-2V51.2024a2,2,0,0,0-1.04-1.7547L59.628,38.9521a8.0391,8.0391,0,0,0-7.8428.09L31.8346,50.56a8.0246,8.0246,0,0,0-4,6.9287v22.976a8,8,0,0,0,4,6.9283l19.95,11.5186a8.0429,8.0429,0,0,0,7.8433.0879l19.19-10.5312a2,2,0,0,0,1.0378-1.7533v-2.71A2,2,0,0,0,77.8567,82.0046Z"/>\n      </g>\n      <g>\n        <path d="M172.58,45.3618a15.0166,15.0166,0,0,0-15,14.9995V77.6387a15,15,0,0,0,30,0V60.3613A15.0166,15.0166,0,0,0,172.58,45.3618Zm7,32.2769a7,7,0,0,1-14,0V60.3613a7,7,0,0,1,14,0Z"/>\n        <path d="M135.9138,53.4211a7.01,7.01,0,0,1,7.8681,6.0752.9894.9894,0,0,0,.9843.865h6.03a1.0108,1.0108,0,0,0,.9987-1.0971,15.0182,15.0182,0,0,0-15.7162-13.8837,15.2881,15.2881,0,0,0-14.2441,15.4163V77.2037A15.288,15.288,0,0,0,136.0792,92.62a15.0183,15.0183,0,0,0,15.7162-13.8842,1.0107,1.0107,0,0,0-.9987-1.0971h-6.03a.9894.9894,0,0,0-.9843.865,7.01,7.01,0,0,1-7.8679,6.0757,7.1642,7.1642,0,0,1-6.0789-7.1849V60.6057A7.1638,7.1638,0,0,1,135.9138,53.4211Z"/>\n        <path d="M218.7572,72.9277a12.1585,12.1585,0,0,0,7.1843-11.0771V58.1494A12.1494,12.1494,0,0,0,213.7921,46H196.835a1,1,0,0,0-1,1V91a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V74h6.6216l7.9154,17.4138a1,1,0,0,0,.91.5862h6.5911a1,1,0,0,0,.91-1.4138Zm-.8157-11.0771A4.1538,4.1538,0,0,1,213.7926,66h-9.8511V54h9.8511a4.1538,4.1538,0,0,1,4.1489,4.1494Z"/>\n        <path d="M260.835,46h-26a1,1,0,0,0-1,1V91a1,1,0,0,0,1,1h26a1,1,0,0,0,1-1V85a1,1,0,0,0-1-1h-19V72h13a1,1,0,0,0,1-1V65a1,1,0,0,0-1-1h-13V54h19a1,1,0,0,0,1-1V47A1,1,0,0,0,260.835,46Z"/>\n        <path d="M298.835,46h-6a1,1,0,0,0-1,1V69.6475a7.0066,7.0066,0,1,1-14,0V47a1,1,0,0,0-1-1h-6a1,1,0,0,0-1,1V69.6475a15.0031,15.0031,0,1,0,30,0V47A1,1,0,0,0,298.835,46Z"/>\n        <rect x="307.835" y="46" width="8" height="38" rx="1"/>\n      </g>\n    </g>\n  </g>\n'],logoNegative:["608 134",'\n  <title>coreui react pro logo</title>\n  <g>\n    <g style="fill:#80d0ff;">\n      <path d="M362.0177,90.1512,353.25,69.4149a.2507.2507,0,0,0-.2559-.1914H343.01a.2263.2263,0,0,0-.2559.2559V90.0233a.5657.5657,0,0,1-.64.64h-1.2163a.5652.5652,0,0,1-.64-.64V46.5028a.5655.5655,0,0,1,.64-.64H353.442a9.9792,9.9792,0,0,1,7.7437,3.2324A12.2,12.2,0,0,1,364.13,57.64a12.4389,12.4389,0,0,1-2.24,7.584,9.37,9.37,0,0,1-6.08,3.7441c-.1709.086-.2139.1915-.128.3194l8.7041,20.6084.064.2558q0,.5127-.5757.5118h-1.1523A.703.703,0,0,1,362.0177,90.1512ZM342.754,48.3593v18.496a.2259.2259,0,0,0,.2559.2559h10.3037a7.6713,7.6713,0,0,0,6.0166-2.5918,9.8807,9.8807,0,0,0,2.3037-6.8164,10.2875,10.2875,0,0,0-2.272-6.9756,7.6033,7.6033,0,0,0-6.0483-2.624H343.01A.2263.2263,0,0,0,342.754,48.3593Z"/>\n      <path d="M401.3263,48.1034H381.2945a.2262.2262,0,0,0-.2558.2559v18.496a.2259.2259,0,0,0,.2558.2559h13.8238a.5664.5664,0,0,1,.6406.64v.96a.5663.5663,0,0,1-.6406.6406H381.2945a.2263.2263,0,0,0-.2558.2559v18.56a.2258.2258,0,0,0,.2558.2558h20.0318a.5671.5671,0,0,1,.6406.6407v.96a.566.566,0,0,1-.6406.64H379.1827a.5653.5653,0,0,1-.64-.64V46.5028a.5656.5656,0,0,1,.64-.64h22.1436a.5664.5664,0,0,1,.6406.64v.96A.5663.5663,0,0,1,401.3263,48.1034Z"/>\n      <path d="M439.047,90.1512l-2.4317-8.832a.2971.2971,0,0,0-.32-.1924H419.5274a.2957.2957,0,0,0-.32.1924l-2.3681,8.7676a.6577.6577,0,0,1-.7036.5762H414.919a.5385.5385,0,0,1-.5756-.7041l12.0317-43.584a.6436.6436,0,0,1,.7041-.5117h1.6a.6442.6442,0,0,1,.7041.5117l12.16,43.584.0644.1923q0,.5127-.64.5118h-1.2163A.6428.6428,0,0,1,439.047,90.1512ZM419.9435,78.9188a.3031.3031,0,0,0,.2236.0967h15.4883a.3048.3048,0,0,0,.2236-.0967c.0645-.0635.0742-.1162.0322-.1592l-7.872-28.9287c-.043-.0849-.086-.1279-.128-.1279s-.0859.043-.1279.1279L419.9112,78.76C419.8683,78.8026,419.879,78.8553,419.9435,78.9188Z"/>\n      <path d="M456.6017,87.911a11.6372,11.6372,0,0,1-3.3277-8.7041V57.1913a11.4158,11.4158,0,0,1,3.36-8.5762,12.0941,12.0941,0,0,1,8.8-3.2637,12.2566,12.2566,0,0,1,8.8643,3.2315,11.3927,11.3927,0,0,1,3.36,8.6084v.64a.5663.5663,0,0,1-.6406.6407l-1.28.0634q-.6408,0-.64-.5761v-.8321a9.289,9.289,0,0,0-2.6558-6.9121,10.6734,10.6734,0,0,0-14.0161,0,9.2854,9.2854,0,0,0-2.6563,6.9121V79.3993a9.2808,9.2808,0,0,0,2.6563,6.9121,10.67,10.67,0,0,0,14.0161,0,9.2843,9.2843,0,0,0,2.6558-6.9121v-.7686q0-.5757.64-.5752l1.28.0635a.5667.5667,0,0,1,.6406.6406v.5118a11.4952,11.4952,0,0,1-3.36,8.64,13.6227,13.6227,0,0,1-17.6963,0Z"/>\n      <path d="M514.4376,46.5028v.96a.5658.5658,0,0,1-.64.6406H503.046a.2263.2263,0,0,0-.2559.2559v41.664a.566.566,0,0,1-.6406.64h-1.2158a.5652.5652,0,0,1-.64-.64V48.3593a.2266.2266,0,0,0-.2558-.2559H489.8619a.5656.5656,0,0,1-.64-.6406v-.96a.5656.5656,0,0,1,.64-.64H513.798A.5658.5658,0,0,1,514.4376,46.5028Z"/>\n      <path d="M522.0665,89.5116a2.8385,2.8385,0,0,1-.8-2.0488,2.9194,2.9194,0,0,1,.8-2.1114,2.7544,2.7544,0,0,1,2.08-.832,2.8465,2.8465,0,0,1,2.9438,2.9434,2.7541,2.7541,0,0,1-.832,2.08,2.9221,2.9221,0,0,1-2.1118.8008A2.754,2.754,0,0,1,522.0665,89.5116Z"/>\n      <path d="M542.4054,88.0077a11.3123,11.3123,0,0,1-3.2-8.416v-5.44a.5656.5656,0,0,1,.64-.64h1.2158a.5661.5661,0,0,1,.64.64v5.5039a9.1424,9.1424,0,0,0,2.5283,6.72,8.9745,8.9745,0,0,0,6.6875,2.5605,8.7908,8.7908,0,0,0,9.28-9.28V46.5028a.5655.5655,0,0,1,.64-.64h1.2163a.566.566,0,0,1,.64.64V79.5917a11.2545,11.2545,0,0,1-3.2325,8.416,13.0618,13.0618,0,0,1-17.0556,0Z"/>\n      <path d="M580.35,88.1034a10.4859,10.4859,0,0,1-3.36-8.1279v-1.792a.5663.5663,0,0,1,.64-.6407h1.0884a.5668.5668,0,0,1,.64.6407v1.6a8.5459,8.5459,0,0,0,2.752,6.6562,10.5353,10.5353,0,0,0,7.36,2.4961,9.8719,9.8719,0,0,0,6.9761-2.3681,8.2161,8.2161,0,0,0,2.56-6.336,8.4,8.4,0,0,0-1.12-4.416,11.3812,11.3812,0,0,0-3.3281-3.3926,71.6714,71.6714,0,0,0-6.1763-3.7119,71.0479,71.0479,0,0,1-6.24-3.84,12.1711,12.1711,0,0,1-3.4238-3.68,10.2614,10.2614,0,0,1-1.28-5.3438,9.8579,9.8579,0,0,1,3.0718-7.7441,12.0122,12.0122,0,0,1,8.32-2.752q5.6954,0,8.96,3.1036a10.8251,10.8251,0,0,1,3.2642,8.2246v1.6a.5658.5658,0,0,1-.64.64h-1.1519a.5652.5652,0,0,1-.64-.64V56.8075a8.8647,8.8647,0,0,0-2.624-6.6885,9.9933,9.9933,0,0,0-7.232-2.5273,9.37,9.37,0,0,0-6.5278,2.1435,7.8224,7.8224,0,0,0-2.3682,6.1123,7.8006,7.8006,0,0,0,1.0244,4.16,10.387,10.387,0,0,0,3.0078,3.0391,62.8714,62.8714,0,0,0,5.9522,3.4882,71.0575,71.0575,0,0,1,6.72,4.2559,13.4674,13.4674,0,0,1,3.648,3.9365,10.049,10.049,0,0,1,1.28,5.1836,10.7177,10.7177,0,0,1-3.2637,8.1924q-3.2637,3.0717-8.832,3.0723Q583.71,91.1757,580.35,88.1034Z"/>\n    </g>\n\n    <g style="fill:#fff;">\n      <g>\n        <path d="M99.835,36.0577l-39-22.5167a12,12,0,0,0-12,0l-39,22.5166a12.0339,12.0339,0,0,0-6,10.3924V91.4833a12.0333,12.0333,0,0,0,6,10.3923l39,22.5167a12,12,0,0,0,12,0l39-22.5167a12.0331,12.0331,0,0,0,6-10.3923V46.45A12.0334,12.0334,0,0,0,99.835,36.0577Zm-2,55.4256a4,4,0,0,1-2,3.4641l-39,22.5167a4.0006,4.0006,0,0,1-4,0l-39-22.5167a4,4,0,0,1-2-3.4641V46.45a4,4,0,0,1,2-3.4642l39-22.5166a4,4,0,0,1,4,0l39,22.5166a4,4,0,0,1,2,3.4642Z"/>\n        <path d="M77.8567,82.0046h-2.866a4,4,0,0,0-1.9247.4934L55.7852,91.9833,35.835,80.4648V57.4872l19.95-11.5185,17.2893,9.4549a3.9993,3.9993,0,0,0,1.9192.4906h2.8632a2,2,0,0,0,2-2V51.2024a2,2,0,0,0-1.04-1.7547L59.628,38.9521a8.0391,8.0391,0,0,0-7.8428.09L31.8346,50.56a8.0246,8.0246,0,0,0-4,6.9287v22.976a8,8,0,0,0,4,6.9283l19.95,11.5186a8.0429,8.0429,0,0,0,7.8433.0879l19.19-10.5312a2,2,0,0,0,1.0378-1.7533v-2.71A2,2,0,0,0,77.8567,82.0046Z"/>\n      </g>\n      <g>\n        <path d="M172.58,45.3618a15.0166,15.0166,0,0,0-15,14.9995V77.6387a15,15,0,0,0,30,0V60.3613A15.0166,15.0166,0,0,0,172.58,45.3618Zm7,32.2769a7,7,0,0,1-14,0V60.3613a7,7,0,0,1,14,0Z"/>\n        <path d="M135.9138,53.4211a7.01,7.01,0,0,1,7.8681,6.0752.9894.9894,0,0,0,.9843.865h6.03a1.0108,1.0108,0,0,0,.9987-1.0971,15.0182,15.0182,0,0,0-15.7162-13.8837,15.2881,15.2881,0,0,0-14.2441,15.4163V77.2037A15.288,15.288,0,0,0,136.0792,92.62a15.0183,15.0183,0,0,0,15.7162-13.8842,1.0107,1.0107,0,0,0-.9987-1.0971h-6.03a.9894.9894,0,0,0-.9843.865,7.01,7.01,0,0,1-7.8679,6.0757,7.1642,7.1642,0,0,1-6.0789-7.1849V60.6057A7.1638,7.1638,0,0,1,135.9138,53.4211Z"/>\n        <path d="M218.7572,72.9277a12.1585,12.1585,0,0,0,7.1843-11.0771V58.1494A12.1494,12.1494,0,0,0,213.7921,46H196.835a1,1,0,0,0-1,1V91a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V74h6.6216l7.9154,17.4138a1,1,0,0,0,.91.5862h6.5911a1,1,0,0,0,.91-1.4138Zm-.8157-11.0771A4.1538,4.1538,0,0,1,213.7926,66h-9.8511V54h9.8511a4.1538,4.1538,0,0,1,4.1489,4.1494Z"/>\n        <path d="M260.835,46h-26a1,1,0,0,0-1,1V91a1,1,0,0,0,1,1h26a1,1,0,0,0,1-1V85a1,1,0,0,0-1-1h-19V72h13a1,1,0,0,0,1-1V65a1,1,0,0,0-1-1h-13V54h19a1,1,0,0,0,1-1V47A1,1,0,0,0,260.835,46Z"/>\n        <path d="M298.835,46h-6a1,1,0,0,0-1,1V69.6475a7.0066,7.0066,0,1,1-14,0V47a1,1,0,0,0-1-1h-6a1,1,0,0,0-1,1V69.6475a15.0031,15.0031,0,1,0,30,0V47A1,1,0,0,0,298.835,46Z"/>\n        <rect x="307.835" y="46" width="8" height="38" rx="1"/>\n      </g>\n    </g>\n  </g>\n']},{cilAlignCenter:ta.a,cilAlignLeft:na.a,cilAlignRight:ca.a,cilApplicationsSettings:ia.a,cilArrowRight:la.a,cilArrowTop:oa.a,cilAsterisk:ra.a,cilBan:sa.a,cilBasket:ha.a,cilBell:da.a,cilBold:pa.a,cilBookmark:ua.a,cilCalculator:ba.a,cilCalendar:ja.a,cilCloudDownload:ma.a,cilChartPie:va.a,cilCheck:Oa.a,cilChevronBottom:ga.a,cilChevronLeft:fa.a,cilChevronRight:xa.a,cilChevronTop:Va.a,cilCircle:Aa.a,cilCheckCircle:wa.a,cilCode:ya.a,cilCommentSquare:Ca.a,cilCreditCard:Ma.a,cilCursor:Sa.a,cilCursorMove:La.a,cilDrop:Ia.a,cilDollar:Na.a,cilEnvelopeClosed:ka.a,cilEnvelopeLetter:Ea.a,cilEnvelopeOpen:Za.a,cilEuro:Ha.a,cilGlobeAlt:Ta.a,cilGrid:Pa.a,cilFile:Ra.a,cilFullscreen:Ua.a,cilFullscreenExit:Ba.a,cilGraph:Fa.a,cilHome:za.a,cilInbox:Da.a,cilIndentDecrease:Ja.a,cilIndentIncrease:qa.a,cilInputPower:Ga.a,cilItalic:Ya.a,cilJustifyCenter:_a.a,cilJustifyLeft:Xa.a,cilLaptop:Wa.a,cilLayers:Qa.a,cilLightbulb:Ka.a,cilList:$a.a,cilListNumbered:ae.a,cilListRich:ee.a,cilLocationPin:te.a,cilLockLocked:ne.a,cilMagnifyingGlass:ce.a,cilMap:ie.a,cilMoon:le.a,cilNotes:oe.a,cilOptions:re.a,cilPaperclip:se.a,cilPaperPlane:he.a,cilPencil:de.a,cilPeople:pe.a,cilPhone:ue.a,cilPrint:be.a,cilPuzzle:je.a,cilSave:me.a,cilScrubber:ve.a,cilSettings:Oe.a,cilShare:ge.a,cilShareAll:fe.a,cilShareBoxed:xe.a,cilShieldAlt:Ve.a,cilSpeech:Ae.a,cilSpeedometer:we.a,cilSpreadsheet:ye.a,cilStar:Ce.a,cilSun:Me.a,cilTags:Se.a,cilTask:Le.a,cilTrash:Ie.a,cilUnderline:Ne.a,cilUser:ke.a,cilUserFemale:Ee.a,cilUserFollow:Ze.a,cilUserUnfollow:He.a,cilX:Te.a,cilXCircle:Pe.a,cilWarning:Re.a},{cifUs:W.a,cifBr:Q.a,cifIn:K.a,cifFr:$.a,cifEs:aa.a,cifPl:ea.a},{cibSkype:C.a,cibFacebook:M.a,cibTwitter:S.a,cibLinkedin:L.a,cibFlickr:I.a,cibTumblr:N.a,cibXing:k.a,cibGithub:E.a,cibStackoverflow:Z.a,cibYoutube:H.a,cibDribbble:T.a,cibInstagram:P.a,cibPinterest:R.a,cibVk:U.a,cibYahoo:B.a,cibBehance:F.a,cibReddit:z.a,cibVimeo:D.a,cibCcMastercard:J.a,cibCcVisa:q.a,cibStripe:G.a,cibPaypal:Y.a,cibGooglePay:_.a,cibCcAmex:X.a}),Be=t(129),Fe=t(125),ze={sidebarShow:"responsive"},De=Object(Fe.b)((function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ze,e=arguments.length>1?arguments[1]:void 0,t=e.type,n=Object(p.a)(e,["type"]);switch(t){case"set":return Object(d.a)(Object(d.a)({},a),n);default:return a}}));c.a.icons=Ue,l.a.render(Object(j.jsx)(Be.a,{store:De,children:Object(j.jsx)(y,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(a){a.unregister()}))}},[[526,10,11]]]);
//# sourceMappingURL=main.aa0a770d.chunk.js.map