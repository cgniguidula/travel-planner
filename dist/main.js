!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){"use strict";var o,r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),c=[];function a(e){for(var t=-1,n=0;n<c.length;n++)if(c[n].identifier===e){t=n;break}return t}function l(e,t){for(var n={},o=[],r=0;r<e.length;r++){var i=e[r],l=t.base?i[0]+t.base:i[0],s=n[l]||0,u="".concat(l," ").concat(s);n[l]=s+1;var d=a(u),f={css:i[1],media:i[2],sourceMap:i[3]};-1!==d?(c[d].references++,c[d].updater(f)):c.push({identifier:u,updater:m(f,t),references:1}),o.push(u)}return o}function s(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var r=n.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var c=i(e.insert||"head");if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");c.appendChild(t)}return t}var u,d=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function f(e,t,n,o){var r=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=d(t,r);else{var i=document.createTextNode(r),c=e.childNodes;c[t]&&e.removeChild(c[t]),c.length?e.insertBefore(i,c[t]):e.appendChild(i)}}function p(e,t,n){var o=n.css,r=n.media,i=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var v=null,h=0;function m(e,t){var n,o,r;if(t.singleton){var i=h++;n=v||(v=s(t)),o=f.bind(null,n,i,!1),r=f.bind(null,n,i,!0)}else n=s(t),o=p.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=r());var n=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var r=a(n[o]);c[r].references--}for(var i=l(e,t),s=0;s<n.length;s++){var u=a(n[s]);0===c[u].references&&(c[u].updater(),c.splice(u,1))}n=i}}}},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(r[c]=!0)}for(var a=0;a<e.length;a++){var l=[].concat(e[a]);o&&r[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},function(e,t,n){"use strict";var o=n(1),r=n.n(o)()((function(e){return e[1]}));r.push([e.i,":root{--main-color: #2f4454;--accent-color-1: #2e151b;--accent-color-2: #da7b93;--accent-color-3: #376e6f;--accent-color-4: #1c3334;--accent-color-5: #f2f2f2;--default-text-color:white}\n",""]),t.a=r},function(e,t,n){"use strict";var o=n(1),r=n.n(o)()((function(e){return e[1]}));r.push([e.i,"@media (max-width: 700px){h1{font-size:10vh}}@media (min-width: 700px){h1{font-size:8vh}}#new-trip-section{display:none;background-color:var(--accent-color-5);position:absolute;top:10vh;height:80vh;width:80vw;border-radius:3%}#new-trip-form{display:flex;justify-content:center;flex-direction:column;padding-left:10%;padding-right:10%}header{display:flex;justify-content:center;flex-direction:row}body{background-color:var(--main-color)}#new-btn-wrapper{display:flex;justify-content:center;flex-direction:row}#new-btn{height:4vh}h1{font-family:'Raleway', sans-serif;font-weight:200;color:var(--default-text-color)}.trip-card{border:1px solid red;display:grid}\n",""]),t.a=r},function(e,t,n){"use strict";n.r(t),n.d(t,"init",(function(){return r}));const o=async function(e={}){console.log(JSON.stringify(e));const t=await fetch("http://localhost:8000/submitForm",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});try{return await t.json()}catch(e){console.log("There was an error: "+e)}},r=function(){const e=document.getElementById("cancel-btn"),t=document.getElementById("save-btn"),n=document.getElementById("new-btn");e.addEventListener("click",(function(e){document.getElementById("new-trip-section").style.display="none"})),t.addEventListener("click",(function(e){!function(){console.log("Trying to save trip....");const e={city:document.getElementById("city").value,state:document.getElementById("state").value,country:document.getElementById("country").value};o(e).then((function(e){console.log("----------Data received on client side!--------"),console.log(e)}))}()})),n.addEventListener("click",(function(e){document.getElementById("new-trip-section").style.display="block"}))};var i=n(0),c=n.n(i),a=n(2),l={insert:"head",singleton:!1},s=(c()(a.a,l),a.a.locals,n(3)),u={insert:"head",singleton:!1};c()(s.a,u),s.a.locals;window.addEventListener("DOMContentLoaded",r)}]);