(()=>{"use strict";var e={341:(e,n,t)=>{t.d(n,{Z:()=>p});var r=t(81),i=t.n(r),o=t(645),a=t.n(o),l=t(667),s=t.n(l),c=new URL(t(954),t.b),d=a()(i()),u=s()(c);d.push([e.id,`@font-face {\n  font-family: "rapscall-webfont";\n  src: url(${u});\n}\n\n* {\n  padding: 0;\n  margin: 0;\n}\n\nbody {\n  background-color: black;\n  height: 105vh;\n  min-height: 105vh;\n}\n\n.grids {\n  /* background-color: palevioletred; */\n  display: flex;\n  flex-wrap: wrap;\n  position: absolute;\n  justify-content: center;\n  top: 60%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  border: 2px solid white;\n  width: 80%;\n  height: 80%;\n}\n\n.grids > div {\n  flex: 1 0 0%;\n}\n\n.grids > div:first-child {\n  flex: 0 1 100%;\n}\n\n.player-grid,\n.AI-grid {\n  margin: 5%;\n  border: 2px solid white;\n  display: grid;\n  grid-template-rows: repeat(10, 1fr);\n  grid-template-columns: repeat(10, 1fr);\n  height: 50%;\n  width: 50%;\n}\n\n.player-grid-item,\n.AI-grid-item {\n  border: 1px solid white;\n  text-align: center;\n}\n\n.AI-grid-item {\n  cursor: pointer;\n}\n\n/*.has-ship {\n  background-color: blue;\n} */\n\n.player-has-ship {\n  background-color: blue;\n}\n\n.ai-has-ship {\n  background-color: black;\n}\n\n.hitted-cell {\n  background: rgba(235, 213, 17, 0.918);\n}\n\n.missed-cell {\n  background: green;\n}\n\n.sunk {\n  background-color: red;\n}\n\n.disabled-cell {\n  cursor: auto;\n}\n\n.place-ship-hover {\n  background-color: green;\n}\n\n.placed-ship {\n  background-color: red;\n}\n.restart {\n  display: none;\n  cursor: pointer;\n  padding: 0.5% 1.5%;\n  color: red;\n  background: transparent;\n  border: none;\n  font-size: 1.5em;\n  font-family: monospace;\n}\n\n.restart:hover {\n  transform: scale(1.5);\n  transition: all 0.3s ease-in-out 0.1s;\n}\n\n.visible {\n  display: block;\n}\n\n.info {\n  margin-top: 50px;\n  display: flex;\n  width: 50%;\n  flex-direction: column;\n  position: absolute;\n  left: 50%;\n  top: 5%;\n  transform: translate(-50%, -50%);\n  align-items: center;\n  justify-items: center;\n  gap: 7px;\n}\n\n.ships {\n  margin-top: 2%;\n  width: 100%;\n  align-self: flex-start;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n}\n\n.ships > *:not(:nth-child(2)) {\n  border: 1px solid white;\n  border-radius: 5%;\n  width: 20%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  align-content: center;\n  justify-content: center;\n}\n\n.ships > * > * {\n  color: white;\n  margin-top: 5%;\n}\n\n.placing-grid-container {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  position: absolute;\n  justify-content: space-around;\n  align-items: center;\n  align-content: center;\n  top: 70%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  border: 2px solid black;\n  min-width: 50%;\n  min-height: 50%;\n  z-index: 1;\n  background-color: black;\n  border: 1px solid white;\n}\n\n.start-grid {\n  border: 2px solid white;\n  display: grid;\n  grid-template-rows: repeat(10, 30px);\n  grid-template-columns: repeat(10, 30px);\n}\n\n.placing-cells-item {\n  border: 1px solid white;\n}\n\n.placing-grid-container h3 {\n  font-size: 2em;\n}\n\n.placing-grid-container button {\n  margin: 15px;\n  padding: 10px;\n  border-radius: 5%;\n  cursor: pointer;\n  color: white;\n  background: black;\n  border: 2px solid white;\n}\n\n.placing-grid-container button:hover {\n  background-color: red;\n}\n\n.no-pointer {\n  pointer-events: none;\n}\n\nh1 {\n  color: red;\n  font-family: "rapscall-webfont";\n  font-size: 5em;\n}\n\nh3 {\n  font-size: 1.3em;\n  color: red;\n  font-family: monospace;\n  letter-spacing: 3px;\n  font-weight: bolder;\n}\n\n.lineOver {\n  color: red;\n  text-decoration: line-through;\n}\n\n.health {\n  font-weight: bolder;\n}\n\n.grids p {\n  margin-top: 50%;\n  margin-bottom: 50%;\n  color: green;\n  font-weight: bolder;\n  border: none;\n  font-size: 1.3em;\n}\n\n.pressed-btn {\n  background-color: red !important;\n}\n`,""]);const p=d},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,i,o){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var l=0;l<this.length;l++){var s=this[l][0];null!=s&&(a[s]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);r&&a[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),i&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=i):d[4]="".concat(i)),n.push(d))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var o={},a=[],l=0;l<e.length;l++){var s=e[l],c=r.base?s[0]+r.base:s[0],d=o[c]||0,u="".concat(c," ").concat(d);o[c]=d+1;var p=t(u),h={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(h);else{var f=i(h,r);r.byIndex=l,n.splice(l,0,{identifier:u,updater:f,references:1})}a.push(u)}return a}function i(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,i){var o=r(e=e||[],i=i||{});return function(e){e=e||[];for(var a=0;a<o.length;a++){var l=t(o[a]);n[l].references--}for(var s=r(e,i),c=0;c<o.length;c++){var d=t(o[c]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}o=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,i&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},954:(e,n,t)=>{e.exports=t.p+"e36eef980c5e471524b6.woff"}},n={};function t(r){var i=n[r];if(void 0!==i)return i.exports;var o=n[r]={id:r,exports:{}};return e[r](o,o.exports,t),o.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var i=r.length-1;i>-1&&!e;)e=r[i--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),i=t.n(r),o=t(569),a=t.n(o),l=t(565),s=t.n(l),c=t(216),d=t.n(c),u=t(589),p=t.n(u),h=t(341),f={};function m(e,n,t){let r=0;return{length:e,hits:r,direction:n,name:t,getHits:()=>r,increaseHit:()=>{r++},isSunk:()=>r>=e}}function g(){let e=[],n=[],t=[],r=[];const i=()=>e,o=()=>t;return{placeShip:(t,r,i)=>!!((e,t,r)=>{let i=[],o=!1;for(let n=0;n<e.length;n++)"horizontal"===e.direction?i.push([t+n,r]):i.push([t,r+n]);return i.forEach((e=>{n.some(((n,t)=>n[0]===e[0]&&n[1]===e[1]))&&(o=!0)})),!1===o&&("horizontal"===e.direction?t+e.length-1<10:r+e.length-1<10)})(t,r,i)&&(((t,r,i)=>{if("horizontal"===t.direction)for(let o=0;o<t.length;o++)e.push([t,r+o,i]),n.push([r+o,i]);else for(let o=0;o<t.length;o++)e.push([t,r,i+o]),n.push([r,i+o])})(t,r,i),!0),receiveAttack:(e,a)=>{let[...l]=i(),s=l.find(((n,t)=>n[1]===e&&n[2]===a));return null!=s?(void 0===r.find(((n,t)=>n[0]===e&&n[1]===a))&&(r.push([e,a]),s[0].increaseHit()),!0):o().find(((n,t)=>n[0]===e&&n[1]===a))?void 0:(t.push([e,a]),n.push([e,a]),!1)},areAllSunk:()=>e.length===r.length,getCells:()=>n,getOccupiedCells:i,getHit:()=>r,getMissed:o}}f.styleTagTransform=p(),f.setAttributes=s(),f.insert=a().bind(null,"head"),f.domAPI=i(),f.insertStyleElement=d(),n()(h.Z,f),h.Z&&h.Z.locals&&h.Z.locals;let b=new Audio("../media/hit.mp3"),v=new Audio("../media/sunk.mp3");const y=document.querySelector(".grids");y.style.display="none";const x=document.querySelector(".player-msg");x.innerText="Your Turn";let w="x",S=0;const L=()=>0===S?4:1===S||2===S?3:2,k=document.querySelector(".player-grid"),M=document.querySelector(".AI-grid");let E,A,N;function T(){E=function(){let e="player";return{getTurn:()=>e,changeTurn:n=>{e=n},playerTurn:(n,t,r)=>{let i=n.receiveAttack(t,r);return void 0===i?"AlreadyMissed":i?i?"hit":void 0:(e="ai","missed")},AITurn:(e,n,t)=>{let r,i;return void 0===n&&void 0===t?(i=[Math.floor(10*Math.random()),Math.floor(10*Math.random())],r=e.receiveAttack(i[0],i[1])):(i=[n,t],r=e.receiveAttack(n,t)),void 0===r?[i,"AlreadyPlayed"]:void 0!==r&&!0!==r?[i,"missed"]:[i,"hit"]},getRandomAdjacent:(e,n,t)=>{let r=[[e+1,n],[e-1,n],[e,n+1],[e,n-1]].filter((e=>e[0]>=0&&e[0]<=9&&e[1]>=0&&e[1]<=9)),i=t.getMissed(),o=t.getHit(),a=i.concat(o);var l;return[((l=r.filter((e=>function(e){let n=!0;for(let t=0;t<a.length;t++)a[t][0]===e[0]&&a[t][1]===e[1]&&(n=!1);return n}(e))))[Math.floor(Math.random()*l.length)],l[Math.floor(Math.random()*l.length)])]}}}(),A=g(),N=g()}function q(e){if(!z()){let n;if("player"===E.getTurn()){let t=e.id.split(",");if(n=E.playerTurn(N,Number(t[0]),Number(t[1])),"hit"===n){let[...n]=N.getHit();[...n].forEach((n=>{if(n[0]===Number(t[0])&&n[1]===Number(t[1])){e.classList.add("hitted-cell"),e.classList.add("disabled-cell");try{b.play()}catch{console.log("ship sunked, hit sound Stopped")}}})),C("ai")}else e.classList.add("missed-cell"),e.classList.add("disabled-cell"),E.changeTurn("ai"),I(),x.innerText="Computer's turn"}}}function I(e){if(!z()){let n;if("ai"===E.getTurn())if(n=void 0===e?E.AITurn(A):E.AITurn(A,e[0],e[1]),"AlreadyPlayed"===n[1])I();else if("missed"===n[1])[...k.childNodes].forEach((e=>{let t=e.id.split(",");n[0][0]===Number(t[0])&&n[0][1]===Number(t[1])&&setTimeout((()=>{e.classList.add("missed-cell")}),1e3)}));else if("hit"===n[1]){let[e]=E.getRandomAdjacent(n[0][0],n[0][1],A);[...k.childNodes].forEach((e=>{let t=e.id.split(",");Number(t[0])===n[0][0]&&Number(t[1])===n[0][1]&&(e.classList.add("hitted-cell"),b.play())})),C("player"),I(e)}setTimeout((()=>{x.innerText="Your Turn",E.changeTurn("player")}),2e3)}}function C(e){"ai"===e?N.getOccupiedCells().forEach((n=>{n[0].isSunk()&&(j(n,e),O(n,e))})):A.getOccupiedCells().forEach((n=>{n[0].isSunk()&&(j(n,e),O(n,e))}))}!function(){const e=document.querySelector(".start-grid");for(let n=9;n>=0;n--)for(let t=0;t<10;t++){let r=document.createElement("div");e.appendChild(r).className="placing-cells-item",r.id=`${t},${n}`}}(),T(),function(){for(let e=9;e>=0;e--)for(let n=0;n<10;n++){let t=document.createElement("div");k.appendChild(t).className="player-grid-item",t.id=`${n},${e}`}for(let e=9;e>=0;e--)for(let n=0;n<10;n++){let t=document.createElement("div");M.appendChild(t).className="AI-grid-item",t.id=`${n},${e}`}}();const j=(e,n)=>{const t=window.document.querySelectorAll(".player-grid-item"),r=window.document.querySelectorAll(".AI-grid-item");"ai"===n?r.forEach((n=>{if(!n.classList.contains("sunk")&&n.classList.contains("ai-has-ship")){let t=n.id.split(",");Number(t[0])===e[1]&&Number(t[1])===e[2]&&(n.classList.add("sunk"),b.pause(),v.play())}})):t.forEach((n=>{if(!n.classList.contains("sunk")&&n.classList.contains("player-has-ship")){let t=n.id.split(",");Number(t[0])===e[1]&&Number(t[1])===e[2]&&(n.classList.add("sunk"),b.pause(),v.play())}}))},O=(e,n)=>{const t=document.querySelectorAll(".ai-ships"),r=document.querySelectorAll(".player-ships");"ai"===n?t.forEach((n=>{n.innerText===e[0].name&&n.classList.add("lineOver")})):r.forEach((n=>{n.innerText===e[0].name&&n.classList.add("lineOver")}))},z=()=>{if(N.areAllSunk()||A.areAllSunk())return $(),document.querySelector(".restart").classList.add("visible"),!0};function $(){const e=document.querySelector(".winner");A.areAllSunk()?e.innerText="AI Won":e.innerText="You Won"}const H=()=>{const e=window.document.querySelectorAll(".player-grid-item"),n=window.document.querySelectorAll(".AI-grid-item");e.forEach((e=>{e.classList.remove("player-has-ship","hitted-cell","missed-cell","disabled-cell","sunk")})),n.forEach((e=>{e.classList.remove("ai-has-ship","hitted-cell","missed-cell","disabled-cell","sunk")}));const t=document.querySelector(".ships").children;let r=t[0].children,i=t[2].children;[...r].forEach((e=>{e.classList.remove("lineOver")})),[...i].forEach((e=>{e.classList.remove("lineOver")}))},P=()=>{const e=document.querySelector(".winner");document.querySelector(".restart").classList.remove("visible"),e.innerText=""};[...M.childNodes].forEach((e=>{e.addEventListener("click",(function(){"player"!==E.getTurn()||e.classList.contains("disabled-cell")||q(e),z()&&$()}))}));const R=window.document.querySelector(".start-grid").childNodes;function Z(){R.forEach((e=>{e.classList.contains("placed-ship")&&e.classList.remove("placed-ship"),e.classList.contains("place-ship-hover")&&e.classList.remove("place-ship-hover")}))}[...R].forEach(((e,n)=>{e.addEventListener("mouseenter",(function(){S<4&&function(e,n){let t=e.id.split(","),r=L(),i=!0;if("x"===w){for(let e=0;e<r;e++)if(R[n+e]&&R[n+e].classList.contains("placed-ship")){i=!1;break}if(i&&Number(t[0])+r-1<=9)for(let e=0;e<r;e++)R[n+e].classList.add("place-ship-hover")}else{for(let e=0;e<r;e++)if(R[n-10*e]&&R[n-10*e].classList.contains("placed-ship")){i=!1;break}if(i&&Number(t[1])+r-1<=9)for(let e=0;e<r;e++)R[n-10*e].classList.add("place-ship-hover")}}(e,n)})),e.addEventListener("mouseleave",(function(){S<4&&function(e,n){let t=e.id.split(","),r=L();if("x"===w){if(Number(t[0])+r-1<=9)for(let e=0;e<r;e++)R[n+e].classList.remove("place-ship-hover")}else if(Number(t[1])+r-1<=9)for(let e=0;e<r;e++)R[n-10*e].classList.remove("place-ship-hover")}(e,n)})),e.addEventListener("click",(function(){e.classList.contains("place-ship-hover")&&S<4&&!e.classList.contains("placed-ship")&&(S++,function(e){let n=e.id.split(","),t="x"===w?"horizontal":"vertical";switch(S){case 1:let e=m(4,t,"battleship");A.placeShip(e,Number(n[0]),Number(n[1]));break;case 2:let r=m(3,t,"cruiser");A.placeShip(r,Number(n[0]),Number(n[1]));break;case 3:let i=m(3,t,"submarine");A.placeShip(i,Number(n[0]),Number(n[1]));break;case 4:let o=m(2,t,"patrol");A.placeShip(o,Number(n[0]),Number(n[1]))}}(e),R.forEach((e=>{e.classList.contains("place-ship-hover")&&e.classList.add("placed-ship")})))}))})),document.querySelector(".restart").addEventListener("click",(function(){y.style.display="none",H(),P(),T(),S=0,Z(),document.querySelector(".placing-grid-container").style.display="flex"}));const U=document.querySelector(".x"),_=document.querySelector(".y");U.addEventListener("click",(function(){w="x",U.classList.add("pressed-btn"),_.classList.remove("pressed-btn")})),_.addEventListener("click",(function(){w="y",_.classList.add("pressed-btn"),U.classList.remove("pressed-btn")}));const F=document.querySelector(".reset");document.querySelector(".place").addEventListener("click",(function(){S>=4&&(document.querySelector(".placing-grid-container").style.display="none",y.style.display="flex",function(){let e=["horizontal","vertical"],n=m(4,e[Math.floor(Math.random()*e.length)],"battleship"),t=m(3,e[Math.floor(Math.random()*e.length)],"cruiser"),r=m(3,e[Math.floor(Math.random()*e.length)],"submarine"),i=m(2,e[Math.floor(Math.random()*e.length)],"patrol");for(;!N.placeShip(n,Math.floor(10*Math.random()),Math.floor(10*Math.random())););for(;!N.placeShip(t,Math.floor(10*Math.random()),Math.floor(10*Math.random())););for(;!N.placeShip(r,Math.floor(10*Math.random()),Math.floor(10*Math.random())););for(;!N.placeShip(i,Math.floor(10*Math.random()),Math.floor(10*Math.random())););}(),function(){const e=window.document.querySelectorAll(".player-grid-item");let n=A.getCells();e.forEach(((e,t)=>{n.some((n=>n.toString()===e.id))&&e.classList.add("player-has-ship")}));const t=window.document.querySelectorAll(".AI-grid-item");let r=N.getCells();r.forEach((e=>{})),t.forEach(((e,n)=>{r.some((n=>n.toString()===e.id))&&e.classList.add("ai-has-ship")}))}())})),F.addEventListener("click",(function(){R.forEach((e=>{e.classList.remove("place-ship-hover","placed-ship")})),H(),P(),T(),S=0,Z()}))})()})();