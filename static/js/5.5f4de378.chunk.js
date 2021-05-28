(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[5],{700:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r(701);function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,o=!1,a=void 0;try{for(var i,u=e[Symbol.iterator]();!(n=(i=u.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(c){o=!0,a=c}finally{try{n||null==u.return||u.return()}finally{if(o)throw a}}return r}}(e,t)||Object(n.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},701:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r(702);function o(e,t){if(e){if("string"===typeof e)return Object(n.a)(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Object(n.a)(e,t):void 0}}},702:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}r.d(t,"a",(function(){return n}))},718:function(e,t,r){window,e.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}({"./xmlParser.js":function(e,t){function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.exports=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,o;return t=e,(n=[{key:"_parseFromString",value:function(e){var t=this,r=(e=this._encodeCDATAValues(e)).replace(/\s{2,}/g," ").replace(/\\t\\n\\r/g,"").replace(/>/g,">\n").replace(/\]\]/g,"]]\n"),n=[];return r.split("\n").map((function(e){if((e=e.trim())&&!(e.indexOf("?xml")>-1))if(0==e.indexOf("<")&&e.indexOf("CDATA")<0){var r=t._parseTag(e);n.push(r),e.match(/\/\s*>$/)&&n.push(t._parseTag("</"+r.name+">"))}else n[n.length-1].value+=" ".concat(t._parseValue(e))})),this._convertTagsArrayToTree(n)[0]}},{key:"_encodeCDATAValues",value:function(e){for(var t=new RegExp(/<!\[CDATA\[([^\]\]]+)\]\]/gi),r=t.exec(e);r;)r.length>1&&(e=e.replace(r[1],encodeURIComponent(r[1]))),r=t.exec(e);return e}},{key:"_getElementsByTagName",value:function(e){var t=[];return"*"!=e&&this.name.toLowerCase()!==e.toLowerCase()||t.push(this),this.children.map((function(r){t=t.concat(r.getElementsByTagName(e))})),t}},{key:"_parseTag",value:function(e,t){var r=e.match(/([^\s]*)=('([^']*?)'|"([^"]*?)")|([\/?\w\-\:]+)/g),n={name:r.shift().replace(/\/\s*$/,""),attributes:{},children:[],value:"",getElementsByTagName:this._getElementsByTagName};return r.map((function(e){var t=e.split("=");if(!(t.length<2)){var r=t[0],o="";o=2===t.length?t[1]:(t=t.slice(1)).join("="),n.attributes[r]="string"==typeof o?o.replace(/^"/g,"").replace(/^'/g,"").replace(/"$/g,"").replace(/'$/g,"").trim():o}})),n}},{key:"_parseValue",value:function(e){return e.indexOf("CDATA")<0?e.trim():e.substring(e.lastIndexOf("[")+1,e.indexOf("]"))}},{key:"_convertTagsArrayToTree",value:function(e){for(var t=[];e.length>0;){var r=e.shift();if(r.value.indexOf("</")>-1||r.name.match(/\/$/))r.name=r.name.replace(/\/$/,"").trim(),r.value=r.value.substring(0,r.value.indexOf("</")).trim(),t.push(r);else{if(0==r.name.indexOf("/"))break;t.push(r),r.children=this._convertTagsArrayToTree(e),r.value=decodeURIComponent(r.value.trim())}}return t}},{key:"_toString",value:function(e){var t=this,r=this._convertTagToText(e);return e.children.length>0&&(e.children.map((function(e){r+=t._toString(e)})),r+="</"+e.name+">"),r}},{key:"_convertTagToText",value:function(e){var t="<"+e.name;for(var r in e.attributes)t+=" "+r+'="'+e.attributes[r]+'"';return e.value.length>0?t+=">"+e.value:t+=">",0===e.children.length&&(t+="</"+e.name+">"),t}},{key:"parseFromString",value:function(e){return this._parseFromString(e)}},{key:"toString",value:function(e){return this._toString(e)}}])&&r(t.prototype,n),o&&r(t,o),e}()},0:function(e,t,r){e.exports=r("./xmlParser.js")}})},720:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function o(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}var a=t.isSafari=function(){return/^((?!chrome|android).)*safari/i.test(navigator.userAgent)},i=t.isJsons=function(e){return Array.isArray(e)&&e.every((function(e){return"object"===("undefined"===typeof e?"undefined":n(e))&&!(e instanceof Array)}))},u=t.isArrays=function(e){return Array.isArray(e)&&e.every((function(e){return Array.isArray(e)}))},c=t.jsonsHeaders=function(e){return Array.from(e.map((function(e){return Object.keys(e)})).reduce((function(e,t){return new Set([].concat(o(e),o(t)))}),[]))},l=t.jsons2arrays=function(e,t){var r=t=t||c(e),n=t;i(t)&&(r=t.map((function(e){return e.label})),n=t.map((function(e){return e.key})));var a=e.map((function(e){return n.map((function(t){return s(t,e)}))}));return[r].concat(o(a))},s=t.getHeaderValue=function(e,t){var r=e.replace(/\[([^\]]+)]/g,".$1").split(".").reduce((function(e,t,r,n){if(void 0!==e[t])return e[t];n.splice(1)}),t);return void 0===r?e in t?t[e]:"":r},f=t.elementOrEmpty=function(e){return e||0===e?e:""},p=t.joiner=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:",",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:'"';return e.filter((function(e){return e})).map((function(e){return e.map((function(e){return f(e)})).map((function(e){return""+r+e+r})).join(t)})).join("\n")},d=t.arrays2csv=function(e,t,r,n){return p(t?[t].concat(o(e)):e,r,n)},y=t.jsons2csv=function(e,t,r,n){return p(l(e,t),r,n)},v=t.string2csv=function(e,t,r,n){return t?t.join(r)+"\n"+e:e},h=t.toCSV=function(e,t,r,n){if(i(e))return y(e,t,r,n);if(u(e))return d(e,t,r,n);if("string"===typeof e)return v(e,t,r);throw new TypeError('Data should be a "String", "Array of arrays" OR "Array of objects" ')};t.buildURI=function(e,t,r,n,o){var i=h(e,r,n,o),u=a()?"application/csv":"text/csv",c=new Blob([t?"\ufeff":"",i],{type:u}),l="data:"+u+";charset=utf-8,"+(t?"\ufeff":"")+i,s=window.URL||window.webkitURL;return"undefined"===typeof s.createObjectURL?l:s.createObjectURL(c)}},721:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PropsNotForwarded=t.defaultProps=t.propTypes=void 0;var n,o=r(1),a=((n=o)&&n.__esModule,r(0));t.propTypes={data:(0,a.oneOfType)([a.string,a.array]).isRequired,headers:a.array,target:a.string,separator:a.string,filename:a.string,uFEFF:a.bool,onClick:a.func,asyncOnClick:a.bool},t.defaultProps={separator:",",filename:"generatedBy_react-csv.csv",uFEFF:!0,asyncOnClick:!1},t.PropsNotForwarded=["data","headers"]},723:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r(702);var o=r(701);function a(e){return function(e){if(Array.isArray(e))return Object(n.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(o.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},726:function(e,t,r){e.exports=r(729)},729:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CSVLink=t.CSVDownload=void 0;var n=a(r(730)),o=a(r(731));function a(e){return e&&e.__esModule?e:{default:e}}t.CSVDownload=n.default,t.CSVLink=o.default},730:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=r(1),i=(n=a)&&n.__esModule?n:{default:n},u=r(720),c=r(721);var l=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.state={},r}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"buildURI",value:function(){return u.buildURI.apply(void 0,arguments)}},{key:"componentDidMount",value:function(){var e=this.props,t=e.data,r=e.headers,n=e.separator,o=e.enclosingCharacter,a=e.uFEFF,i=e.target,u=e.specs,c=e.replace;this.state.page=window.open(this.buildURI(t,a,r,n,o),i,u,c)}},{key:"getWindow",value:function(){return this.state.page}},{key:"render",value:function(){return null}}]),t}(i.default.Component);l.defaultProps=Object.assign(c.defaultProps,{target:"_blank"}),l.propTypes=c.propTypes,t.default=l},731:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=r(1),u=(n=i)&&n.__esModule?n:{default:n},c=r(720),l=r(721);var s=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.buildURI=r.buildURI.bind(r),r.state={href:""},r}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.data,r=e.headers,n=e.separator,o=e.uFEFF,a=e.enclosingCharacter;this.setState({href:this.buildURI(t,o,r,n,a)})}},{key:"componentDidUpdate",value:function(e){if(this.props!==e){var t=this.props,r=t.data,n=t.headers,o=t.separator,a=t.uFEFF;this.setState({href:this.buildURI(r,a,n,o)})}}},{key:"buildURI",value:function(){return c.buildURI.apply(void 0,arguments)}},{key:"handleLegacy",value:function(e){if(window.navigator.msSaveOrOpenBlob){e.preventDefault();var t=this.props,r=t.data,n=t.headers,o=t.separator,a=t.filename,i=t.enclosingCharacter,u=t.uFEFF,l=new Blob([u?"\ufeff":"",(0,c.toCSV)(r,n,o,i)]);return window.navigator.msSaveBlob(l,a),!1}}},{key:"handleAsyncClick",value:function(e){var t=this;this.props.onClick(e,(function(r){!1!==r?t.handleLegacy(e):e.preventDefault()}))}},{key:"handleSyncClick",value:function(e){!1===this.props.onClick(e)?e.preventDefault():this.handleLegacy(e)}},{key:"handleClick",value:function(){var e=this;return function(t){if("function"===typeof e.props.onClick)return e.props.asyncOnClick?e.handleAsyncClick(t):e.handleSyncClick(t);e.handleLegacy(t)}}},{key:"render",value:function(){var e=this,t=this.props,r=(t.data,t.headers,t.separator,t.filename),n=(t.uFEFF,t.children),a=(t.onClick,t.asyncOnClick,t.enclosingCharacter,function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}(t,["data","headers","separator","filename","uFEFF","children","onClick","asyncOnClick","enclosingCharacter"]));return u.default.createElement("a",o({download:r},a,{ref:function(t){return e.link=t},target:"_self",href:this.state.href,onClick:this.handleClick()}),n)}}]),t}(u.default.Component);s.defaultProps=l.defaultProps,s.propTypes=l.propTypes,t.default=s}}]);
//# sourceMappingURL=5.5f4de378.chunk.js.map