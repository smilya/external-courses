!function(n){var t={};function e(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=n,e.c=t,e.d=function(n,t,r){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:r})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var o in n)e.d(r,o,function(t){return n[t]}.bind(null,o));return r},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=17)}([function(n,t,e){"use strict";n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e=function(n,t){var e=n[1]||"",r=n[3];if(!r)return e;if(t&&"function"==typeof btoa){var o=(s=r,a=btoa(unescape(encodeURIComponent(JSON.stringify(s)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(l," */")),i=r.sources.map((function(n){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(n," */")}));return[e].concat(i).concat([o]).join("\n")}var s,a,l;return[e].join("\n")}(t,n);return t[2]?"@media ".concat(t[2]," {").concat(e,"}"):e})).join("")},t.i=function(n,e,r){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(o[s]=!0)}for(var a=0;a<n.length;a++){var l=[].concat(n[a]);r&&o[l[0]]||(e&&(l[2]?l[2]="".concat(e," and ").concat(l[2]):l[2]=e),t.push(l))}},t}},function(n,t,e){var r=e(2),o=e(3);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var i={insert:"head",singleton:!1},s=(r(o,i),o.locals?o.locals:{});n.exports=s},function(n,t,e){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var n={};return function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}n[t]=e}return n[t]}}(),s=[];function a(n){for(var t=-1,e=0;e<s.length;e++)if(s[e].identifier===n){t=e;break}return t}function l(n,t){for(var e={},r=[],o=0;o<n.length;o++){var i=n[o],l=t.base?i[0]+t.base:i[0],u=e[l]||0,c="".concat(l," ").concat(u);e[l]=u+1;var d=a(c),p={css:i[1],media:i[2],sourceMap:i[3]};-1!==d?(s[d].references++,s[d].updater(p)):s.push({identifier:c,updater:b(p,t),references:1}),r.push(c)}return r}function u(n){var t=document.createElement("style"),r=n.attributes||{};if(void 0===r.nonce){var o=e.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(n){t.setAttribute(n,r[n])})),"function"==typeof n.insert)n.insert(t);else{var s=i(n.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(t)}return t}var c,d=(c=[],function(n,t){return c[n]=t,c.filter(Boolean).join("\n")});function p(n,t,e,r){var o=e?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(n.styleSheet)n.styleSheet.cssText=d(t,o);else{var i=document.createTextNode(o),s=n.childNodes;s[t]&&n.removeChild(s[t]),s.length?n.insertBefore(i,s[t]):n.appendChild(i)}}function f(n,t,e){var r=e.css,o=e.media,i=e.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}var _=null,m=0;function b(n,t){var e,r,o;if(t.singleton){var i=m++;e=_||(_=u(t)),r=p.bind(null,e,i,!1),o=p.bind(null,e,i,!0)}else e=u(t),r=f.bind(null,e,t),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)};return r(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;r(n=t)}else o()}}n.exports=function(n,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var e=l(n=n||[],t);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var r=0;r<e.length;r++){var o=a(e[r]);s[o].references--}for(var i=l(n,t),u=0;u<e.length;u++){var c=a(e[u]);0===s[c].references&&(s[c].updater(),s.splice(c,1))}e=i}}}},function(n,t,e){var r=e(0),o=e(4),i=e(9),s=e(10),a=e(11),l=e(12),u=e(13),c=e(14),d=e(15),p=e(16);(t=r(!1)).i(o),t.i(i),t.i(s),t.i(a),t.i(l),t.i(u),t.i(c),t.i(d),t.i(p),t.push([n.i,"",""]),n.exports=t},function(n,t,e){var r=e(0),o=e(5),i=e(6),s=e(7),a=e(8);t=r(!1);var l=o(i),u=o(s),c=o(a);t.push([n.i,"@font-face {\r\n  font-family: 'Roboto';\r\n  src: local('Roboto Regular'), local('Roboto-Regular'),\r\n      url("+l+") format('woff2'),\r\n      url("+u+") format('woff'),\r\n      url("+c+") format('truetype');\r\n  font-weight: 400;\r\n  font-style: normal;\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n  font-family: \"Roboto\";\r\n  font-weight: 400;\r\n  font-style: normal;\r\n  font-size: 18px;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\nhtml {\r\n  overflow-x: hidden;\r\n  overflow-y: hidden;\r\n}\r\n\r\n.container {\r\n  margin: 0 auto;\r\n}",""]),n.exports=t},function(n,t,e){"use strict";n.exports=function(n,t){return t||(t={}),"string"!=typeof(n=n&&n.__esModule?n.default:n)?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),t.hash&&(n+=t.hash),/["'() \t\n]/.test(n)||t.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n)}},function(n,t,e){"use strict";e.r(t),t.default=e.p+"./fonts/Roboto-Regular.woff2"},function(n,t,e){"use strict";e.r(t),t.default=e.p+"./fonts/Roboto-Regular.woff"},function(n,t,e){"use strict";e.r(t),t.default=e.p+"./fonts/Roboto-Regular.ttf"},function(n,t,e){(t=e(0)(!1)).push([n.i,".header {\r\n  background-color:  #0067A3;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 8px 0 8px 18px;\r\n}\r\n\r\n.header__menu {\r\n  margin-right: 14px;\r\n}\r\n\r\n.header__title {\r\n  font-size: 28px;\r\n  color: white;\r\n  flex-grow: 1;\r\n}\r\n\r\n.header__newListButton {\r\n  margin-right: 50px;\r\n}",""]),n.exports=t},function(n,t,e){(t=e(0)(!1)).push([n.i,".menu__burger {\r\n  display: inline-flex;\r\n  flex-wrap: wrap;\r\n  align-items: center;\r\n  padding: 4px;\r\n  width: 36px;\r\n  cursor: pointer;\r\n}\r\n\r\n.menu__burgerCircle {\r\n  width: 7px;\r\n  height: 7px;\r\n  border: 1px solid white;\r\n  border-radius: 50%;\r\n  margin-right: 3px;\r\n}\r\n\r\n.menu__burgerCircle:nth-of-type(3) {\r\n  margin-top: 3px;\r\n  margin-bottom: 3px;\r\n}\r\n\r\n.menu__burgerLine {\r\n  width: 18px;\r\n  height: 1px;\r\n  background-color: white;\r\n}",""]),n.exports=t},function(n,t,e){(t=e(0)(!1)).push([n.i,".newListButton {\r\n  cursor: pointer;\r\n  background-color: white;\r\n  border-radius: 5px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding: 6px 9px;\r\n}\r\n\r\n.newListButton:active {\r\n  transform: translate(1px, 1px);\r\n}\r\n\r\n.newListButton__title {\r\n  margin: 0 13px;\r\n  font-size: 18px;\r\n}\r\n",""]),n.exports=t},function(n,t,e){(t=e(0)(!1)).push([n.i,".account {\r\n  display: inline-flex;\r\n  align-items: center;\r\n  cursor: pointer;\r\n  position: relative;\r\n}\r\n\r\n.account__icon {\r\n  background-color: white;\r\n  width: 38px;\r\n  height: 38px;\r\n  border-radius: 50%;\r\n  user-select: none;\r\n}\r\n\r\n.account__dropdown {\r\n  border-left: 2px solid white;\r\n  border-bottom: 2px solid white;\r\n  width: 8px;\r\n  height: 8px;\r\n  transform: rotate(-45deg);\r\n  margin: 0 5px 3px;\r\n}\r\n\r\n.account__dropdown--open {\r\n  transform: rotate(135deg);\r\n}\r\n\r\n.account__menu {\r\n  background-color: #0067A3;\r\n  position: absolute;\r\n  top: calc(100% + 8px);\r\n  right: 0;\r\n  z-index: 5;\r\n}\r\n\r\n.account__menuItem {\r\n  list-style-type: none;\r\n  color: white;\r\n  padding: 8px 15px;\r\n}\r\n\r\n.account__menuItem:hover {\r\n  background-color: white;\r\n  color: #0067A3;\r\n  font-weight: bold;\r\n}",""]),n.exports=t},function(n,t,e){(t=e(0)(!1)).push([n.i,".main {\r\n  background-color: #0079BF;\r\n  height: calc(100vh - 57px - 56px);\r\n  \r\n  padding: 20px;\r\n  display: flex;  \r\n  overflow-x: auto;\r\n}\r\n\r\n.main__tasks {\r\n  margin-right: 24px;\r\n}\r\n\r\n.main::-webkit-scrollbar {\r\n  height: 12px;\r\n}\r\n\r\n.main::-webkit-scrollbar-track {\r\n  background-color: white;\r\n}\r\n\r\n.main::-webkit-scrollbar-thumb {\r\n  background-color: #CBCBCB;\r\n  border-radius: 5px;\r\n}",""]),n.exports=t},function(n,t,e){(t=e(0)(!1)).push([n.i,".footer {\r\n  background-color:  #0067A3;\r\n  color: white;\r\n  font-size: 18px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 0 6px 0 49px;\r\n}\r\n\r\n.footer__tasksMonitor {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.footer__p {\r\n  padding: 17px 18px;\r\n}",""]),n.exports=t},function(n,t,e){(t=e(0)(!1)).push([n.i,'.tasks {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: start;\r\n  width: 282px;\r\n  max-height: calc(100vh - 57px - 56px - 40px);\r\n  background-color: #EBECF0;\r\n  border-radius: 10px;\r\n  padding: 12px 0 10px 12px;\r\n} \r\n\r\n.tasks__header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  margin-bottom: 5px;\r\n  min-width: 270px;\r\n}\r\n\r\n.tasks__menu {\r\n  padding: 3px 5px;\r\n  vertical-align: top;\r\n  cursor: pointer;\r\n  margin-right: 8px;\r\n  position: relative;\r\n}\r\n\r\n.tasks__menu::before {\r\n  content: "\\2026";\r\n  font-size: 32px;\r\n  line-height: 0;\r\n  vertical-align: top;\r\n  z-index: 2;\r\n  position: relative;\r\n}\r\n\r\n.tasks__menuList {\r\n  list-style-type: none;\r\n  /* border: 2px solid #0079BF; */\r\n  border: 3px solid #EBECF0;\r\n  border-radius: 5px;\r\n  background-color: white;\r\n  position: absolute;\r\n  right: -3px;\r\n  top: 0;\r\n  padding-top: 10px;\r\n  padding-bottom: 3px;\r\n  z-index: 1;\r\n}\r\n\r\n.tasks__menuItem {\r\n  padding: 5px 12px;\r\n}\r\n\r\n.tasks__menuItem:hover {\r\n  font-weight: 700;\r\n}\r\n\r\n.tasks__titleInput {\r\n  outline: none;\r\n  border: none;\r\n  border: 1px solid white;\r\n  border-left: none;\r\n  border-right: none;\r\n  background-color: #EBECF0;;\r\n  width: 80%;\r\n}\r\n\r\n.tasks__container {\r\n height: 100%;\r\n  overflow-y: auto;\r\n  padding-right: 12px;\r\n}\r\n\r\n.tasks__container::-webkit-scrollbar {\r\n  width: 12px; background-color: white;\r\n}\r\n.tasks__container::-webkit-scrollbar-thumb {\r\n  background: #CBCBCB;\r\n  border-radius: 5px;\r\n}\r\n.tasks__container::-webkit-scrollbar-track {\r\n  background-color: white;\r\n}\r\n\r\n.tasks__input:not(:first-of-type) {\r\n  margin-top: 10px;\r\n}\r\n\r\n.tasks__button {\r\n  background: transparent;\r\n  border: none;\r\n  outline: none;\r\n  padding: 4px 4px 0 0;\r\n  align-self: start;\r\n  cursor: pointer;\r\n  color: #5E6C84;\r\n  margin-top: 8px;\r\n  line-height: 1px;\r\n  user-select: none;\r\n  height: 25px;\r\n  overflow: hidden;\r\n}\r\n\r\n.tasks__symbol {\r\n  font-size: 26px;\r\n  line-height: 10px;\r\n  position: relative;\r\n  top: 2px;\r\n  left: 2px;\r\n  color: #5E6C84;\r\n}\r\n\r\n.tasks__button:hover:not(.tasks__button--disabled) {\r\n  color: black;\r\n}\r\n\r\n.tasks__button:hover:not(.tasks__button--disabled) .tasks__symbol {\r\n  color: black;\r\n  font-weight: 700;\r\n}\r\n\r\n.tasks__button--disabled {\r\n  color: white;\r\n  cursor: default;\r\n}\r\n\r\n.tasks__button--disabled .tasks__symbol {\r\n  color: white;\r\n}\r\n\r\n.tasks__onEmptyBanner {\r\n   flex-basis: 100%;\r\n   text-align: center;\r\n   align-self: center; \r\n   position: relative;\r\n   top: -5%;\r\n   font-size: 24px;\r\n   color: white;\r\n}',""]),n.exports=t},function(n,t,e){(t=e(0)(!1)).push([n.i,'.input {\r\n  display: inline-block;\r\n  padding: 7px 8px;\r\n  border-radius: 5px;\r\n  background-color: white;\r\n  width: 100%;\r\n}\r\n\r\n.input__element {\r\n  font-size: 18px;\r\n  line-height: 21px;\r\n  font-family: "Roboto";  \r\n}\r\n\r\n.input__area {\r\n  height: 21px;\r\n  resize: none;  \r\n  border: none;\r\n  outline: none;  \r\n  overflow: hidden;  \r\n  display: block;\r\n  width: 100%;\r\n}\r\n\r\n.input__area:disabled {\r\n  background-color: #fff;\r\n}\r\n\r\n.input__comparator {\r\n  min-height: 21px;\r\n  position: absolute;\r\n  visibility: hidden; \r\n}\r\n\r\n.input__dropdown {\r\n  outline: none;\r\n  padding-left: 10px;\r\n}\r\n\r\n.input__dropdownItem {\r\n  color: #5E6C84;\r\n  list-style-type: none;  \r\n  margin-top: 3px;\r\n  line-height: 110%;\r\n}\r\n\r\n.input__dropdownItem:hover {\r\n  cursor: pointer;\r\n  color: black;\r\n  font-weight: 700;\r\n}',""]),n.exports=t},function(n,t,e){"use strict";e.r(t);e(1);let r=[{title:"backlog",issues:[{id:"issue1",name:"Sprint bugfix"},{id:"issue3",name:"Hard bugfix"}]},{title:"ready",issues:[{id:"issue2",name:"Foo"}]},{title:"in progress",issues:[]},{title:"finished",issues:[]}];function o(n,t){let e="issue"+(function(n){let t=[];for(let e of n)for(let n of e.issues)t.push(parseInt(n.id.match(/\d+/)));return Math.max(...t)}(n)+1),r={id:e};for(let e of n)e.title===t&&e.issues.push(r);return e}function i(n,t){let e;for(let r of n)for(let n=0;n<r.issues.length;n++)r.issues[n].id===t&&(e=r.issues[n],r.issues.splice(n,1));return e}function s(){let n=document.querySelector(".main"),t=document.querySelector(".tasks__onEmptyBanner");if(!n.childElementCount){let t=document.createElement("p");t.innerHTML="There are no tasklists available.<br>Use 'Create new list' button to add one.",t.classList.add("tasks__onEmptyBanner"),n.append(t)}for(let e of n.children)if(e.firstElementChild.classList.contains("tasks")&&t)return void t.remove()}function a(n){let t=n.querySelector(".input__area");t.addEventListener("input",(function(){let n=this.nextElementSibling;n.innerHTML=this.value,t.style.height=n.offsetHeight+"px",n.style.width=t.offsetWidth+"px"}),!1)}function l(n,t){let e=n.querySelector(".tasks__button"),o=function(){let n=document.createElement("div");return n.classList.value="tasks__input input",n.innerHTML='\n      <textarea class="input__area input__element" disabled></textarea>\n      <p class="input__comparator input__element"></p>        \n  ',n}();if(e.before(o),a(o),t&&t.name){o.querySelector(".input__area").value=t.name}return t&&t.id&&o.setAttribute("id",t.id),n.id===r[0].title&&(o.querySelector(".input__area").removeAttribute("disabled"),o.querySelector(".input__area").addEventListener("blur",u)),o}function u(n){let t=n.target.closest(".input").id,e=n.target.value.trim(),o=function(n,t){for(let e of n)for(let n of e.issues)if(n.id===t)return n.name}(r,t);""===e&&(n.target.closest(".input").remove(),i(r,t)),e!==o&&(!function(n,t,e){for(let r of n)for(let n of r.issues)n.id===t&&(n.name=e)}(r,t,e),h(),p(r))}function c(){let n=document.querySelector(".input__dropdown"),t=n.closest(".tasks");return n.remove(),t}function d(n){let t=document.querySelectorAll(".input__area");for(let e of t)e.closest(".tasks").id===n[0].title?e.removeAttribute("disabled"):e.setAttribute("disabled",!0)}function p(n){let t=document.querySelectorAll(".input"),e=0,r=0;for(let o of t)o.closest(".tasks").id===n[0].title&&e++,o.closest(".tasks").id===n[n.length-1].title&&r++;document.getElementById("activeTasks").innerText=e,document.getElementById("finishedTasks").innerText=r}function f(n){let t=function(){let n=document.createElement("div");return n.innerHTML='\n    <div class="tasks main__tasks">\n      <div class="tasks__header">\n        <span class="tasks__title"></span>\n        <div class="tasks__menu"></div>\n      </div>\n      <div class="tasks__container">\n        <button class="tasks__button"><span class="tasks__symbol">+</span> Add card</button> \n      </div>\n    </div>',n}();return document.querySelector(".main").append(t),t.querySelector(".tasks__title").innerText=b(n.title),t.firstElementChild}function _(){let n=document.createElement("div");n.innerHTML='\n  <div class="tasks main__tasks">\n    <div class="tasks__header">\n      <input class="tasks__titleInput" type="text">\n      <div class="tasks__menu"></div>\n    </div>\n    <div class="tasks__container">\n      <button class="tasks__button"><span class="tasks__symbol">+</span> Add card</button> \n    </div>\n  </div>',document.querySelector(".main").prepend(n),s();let t=document.querySelector(".tasks__titleInput");return t.addEventListener("blur",m),t.addEventListener("keydown",n=>{"Enter"===n.code&&t.blur()}),t.focus(),n}function m(){let n=document.querySelector(".tasks__titleInput"),t=n.closest(".tasks");if(""===n.value)t.parentElement.remove(),s();else{t.id=n.value.toLowerCase();let e=document.createElement("span");e.innerText=b(n.value),e.classList.add("tasks__title"),n.parentElement.replaceChild(e,n),function(n,t){let e={title:t,issues:[]};n.unshift(e)}(r,t.id),h(),d(r),p(r)}}function b(n){let t=[],e=n.split(" ");for(let n of e){let e=n.split("");e[0]=e[0].toUpperCase(),t.push(e.join(""))}return t.join(" ")}function h(){let n=document.querySelectorAll(".tasks");for(let t=1;t<n.length;t++){let e=n[t-1].querySelectorAll(".tasks__input"),r=n[t].querySelector(".tasks__button");0===e.length?r.classList.add("tasks__button--disabled"):r.classList.remove("tasks__button--disabled")}}!function(){let n=!1,t=document.querySelector(".account"),e=document.querySelector(".account__dropdown"),r=document.createElement("ul");r.classList.add("account__menu"),r.innerHTML='\n    <li class="account__menuItem">Account</li>\n    <li class="account__menuItem">Tasks</li>\n    <li class="account__menuItem">Settings</li>\n    <li class="account__menuItem">Log out</li>\n  ',document.body.addEventListener("click",o=>{n?(n=!1,e.classList.remove("account__dropdown--open"),r.remove()):o.target.closest(".account")&&(n=!0,e.classList.add("account__dropdown--open"),t.append(r))})}(),document.body.addEventListener("click",n=>{if(document.querySelector(".input__dropdown"))if(n.target.classList.contains("input__dropdownItem")){let t=n.target.innerText,e=n.target.closest(".tasks").querySelector(".tasks__title").innerText.toLowerCase(),o=n.target.closest(".input");o.querySelector(".input__area").value=t,o.querySelector(".input__area").dispatchEvent(new Event("input")),c();let s=function(n,t){for(let e of n)for(let n of e.issues)if(n.name===t)return n.id}(r,t);o.setAttribute("id",s),document.getElementById(s).remove();let a=i(r,s);!function(n,t,e){for(let r of n)r.title===t&&r.issues.push(e)}(r,e,a),h(),p(r)}else c().querySelector(".input:last-of-type").remove()}),document.body.addEventListener("click",n=>{if(n.target.classList.contains("tasks__button")&&!n.target.classList.contains("tasks__button--disabled"))if(n.target.closest(".tasks").id===r[0].title){let t=n.target.closest(".tasks"),e=l(t);a(e),e.querySelector(".input__area").focus();let i=o(r,t.id);e.setAttribute("id",i),e.querySelector(".input__area").addEventListener("blur",u)}else{let t=n.target.closest(".tasks");l(t).querySelector(".input__area").value="Choose from the list:",function(n){let t=document.createElement("ul");t.setAttribute("tabindex",1),t.classList.add("input__dropdown");let e=function(n,t){for(let e=0;e<n.length;e++)if(n[e].title===t)return n[e-1].issues}(r,n.id);for(let n of e){let e=document.createElement("li");e.classList.add("input__dropdownItem"),e.innerText=n.name,t.append(e)}n.querySelector(".tasks__input:last-of-type").append(t)}(t)}}),document.body.addEventListener("keydown",n=>{"Enter"===n.key&&n.target.classList.contains("input__area")&&n.target.blur()}),function(n){for(let t of n){let n=f(t),e=n.querySelector(".tasks__title").innerText.toLowerCase();n.setAttribute("id",e);for(let e of t.issues)l(n,e)}}(r),s(),h(),p(r),document.querySelector(".newListButton").addEventListener("click",_),function(){let n=!1;document.body.addEventListener("click",t=>{if(n){let t=document.querySelector(".tasks__menuList");t&&t.remove(),n=!1}else if(!n&&t.target.classList.contains("tasks__menu")){let e='\n        <li id="tasks-delete" class="tasks__menuItem">Delete</li>\n        <li id="tasks-print" class="tasks__menuItem">Print</li>',o=document.createElement("ul");o.classList.add("tasks__menuList"),o.innerHTML=e,t.target.append(o),n=!0,o.addEventListener("click",n=>{var t,e;"tasks-delete"===n.target.id&&(t=r,e=n.target.closest(".tasks"),function(n,t){for(let e=0;e<n.length;e++)n[e].title===t&&n.splice(e,1)}(t,e.id),e.parentElement.remove(),h(),s(),p(t),d(r))})}})}();e.p,e.p}]); // eslint-disable-line