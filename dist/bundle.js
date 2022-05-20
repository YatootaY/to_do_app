(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>s});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([e.id,":root{\n  --white: #C3C9E9;\n  --black: #131B23;\n  --light-green: #90EE90;\n  --light-red: #FF7F7F;\n}\n\nhtml,body{\n  margin: 0;\n  padding: 0;\n  font-family: 'Roboto', sans-serif;\n  background-color: white;\n  color: white;\n}\n\na{\n  text-decoration: none;\n  color: inherit;\n}\n\nh1,h2,h3,p, input{\n  padding: 0;\n  margin: 0;\n}\n\nbody{\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n}\n\n.header{\n  background-color: var(--black);\n  display: flex;\n  padding: 20px 50px;\n}\n\n.contents{\n  display: flex;\n  flex-grow: 1;\n}\n\n.nav{\n  background-color: #d7dcf7;\n  width: 25vw;\n  box-sizing: border-box;\n  padding: 30px;\n  display: flex;\n  flex-direction: column;\n  gap:20px;\n  color: var(--black);\n}\n\n.projects-list p{\n  padding: 10px 5px;\n  border-radius: 5px;\n  border: none;\n  cursor: pointer;\n  font-weight: 300;\n}\n\n.defaults p{\n  font-weight: normal;\n}\n\n.projects-list p:hover{\n  background-color: var(--white);\n}\n\n.add-projects{\n  padding: 10px 5px;\n  font-weight: bold;\n  cursor: pointer;\n  border-radius: 5px;\n  border: none;\n}\n\n.add-projects:hover{\n  background-color: var(--white);\n}\n\n.active{\n  background-color: var(--white);\n}\n\n\n.tasks{\n  display: flex;\n  flex-direction: column;\n  gap:20px;\n  color: var(--black);\n  flex-grow: 1;\n  padding: 30px 100px;\n}\n\n.each-task{\n  display: flex;\n  align-items: center;\n  padding: 15px 10px;\n  gap:20px;\n  border-radius: 5px;\n  border: none;\n  font-size: 18px;\n}\n\n.each-task:hover{\n  background-color: var(--white);\n}\n\n.grow{\n  flex-grow: 1;\n}\n\n.done{\n  width: 20px;\n  height: 20px;\n}\n\n.title,.done,.time{\n  cursor: pointer;\n}\n\n.add-tasks{\n  padding: 15px 15px;\n  font-weight: bold;\n  cursor: pointer;\n  border-radius: 5px;\n  border: none;\n}\n\n.add-tasks:hover{\n  background-color: var(--white);\n}\n\n.input-field{\n  display: flex;\n  flex-direction: column;\n  gap:10px;\n}\n\n.input-field div{\n  display: flex;\n  justify-content: space-between;\n  margin-top: 10px;\n  gap:20px;\n}\n\n.yes, .no{\n  flex-grow: 1;\n  border: none;\n  padding: 15px 10px;\n  margin: 0;\n  text-decoration: none;\n  color: var(--black);\n  font-weight: bold;\n  font-family: inherit;\n  font-size: 1rem;\n  cursor: pointer;\n}\n\n.yes{\n  background-color: var(--light-green);\n}\n\n.no{\n  background-color: var(--light-red);\n}\n\n\n.input{\n  padding: 10px 5px;\n  border-radius: 5px;\n  border: 1px solid #aaa;\n}\n\ninput:focus{\n  outline: none;\n}\n\nbutton{\n  -webkit-appearance: none;\n}\n\n/* FOOTER */\n\n\nfooter{\n  font-weight: bold;\n  background-color: var(--black);\n  padding: 20px;\n  text-align: center;\n  font-size: 15px;\n  color: white;\n  font-weight: normal;\n}\n",""]);const s=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],d=r.base?c[0]+r.base:c[0],l=a[d]||0,p="".concat(d," ").concat(l);a[d]=l+1;var u=t(p),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)n[u].references++,n[u].updater(f);else{var h=o(f,r);r.byIndex=s,n.splice(s,0,{identifier:p,updater:h,references:1})}i.push(p)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=t(a[i]);n[s].references--}for(var c=r(e,o),d=0;d<a.length;d++){var l=t(a[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=c}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),o=t.n(r),a=t(569),i=t.n(a),s=t(565),c=t.n(s),d=t(216),l=t.n(d),p=t(589),u=t.n(p),f=t(426),h={};h.styleTagTransform=u(),h.setAttributes=c(),h.insert=i().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=l(),n()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;class g{constructor(e,n="None"){this.title=e,this.description=n,this.tasks=[]}setTitle(e){this.title=e}getTitle(){return this.title}setDescription(e){this.description=e}getDescription(){return this.description}setTasks(e){this.tasks=e}getTasks(){return this.tasks}getTask(e){return this.tasks.find((n=>n.getTitle==e))}addTask(e){this.tasks.find((n=>n.getTitle==e.title))||this.tasks.push(e)}deleteTask(e){this.tasks=this.tasks.filter((n=>n.getTitle!=e))}}class m{static saveData(e,n){localStorage.setItem(e,JSON.stringify(n))}static createNewProjectData(e){let n=new g(e);m.saveData(e,n),console.log(m.getData(e).getTitle())}static getData(e){const n=JSON.parse(localStorage.getItem(e)),t=new g(n.title);return t.setDescription=n.description,t.setTasks=n.tasks,t}static getAllData(){const e={};for(let n=0;n<localStorage.length;n++)e[localStorage.key(n)]=m.getData(localStorage.key(n));return e}}class v{static loadHomePage(){v.loadProjects()}static loadProjects(){v.loadDefaultProjects(),v.loadNewProjects(),v.setProjectBtn()}static loadNewProjects(){const e=m.getAllData();Object.keys(e).forEach((n=>{"Urgent"!==n&&"Family"!==n&&"Work"!==n&&v.addNewProject(e[n].getTitle())}))}static loadDefaultProjects(){["Urgent","Family","Work"].forEach((e=>{localStorage.length<=0&&m.createNewProjectData(e),v.addDefaultProject(e)}))}static addNewProject(e){const n=document.getElementById("new-projects"),t=document.createElement("p");t.textContent=e,v.makeShowTasksBtn(t),n.appendChild(t)}static addDefaultProject(e){const n=document.querySelector(".defaults"),t=document.createElement("p");t.textContent=e,v.makeShowTasksBtn(t),n.appendChild(t)}static setProjectBtn(){const e=document.querySelector(".nav"),n=document.querySelector(".add-projects"),t=v.createInputField();n.addEventListener("click",(n=>{e.appendChild(t)}));const r=t.querySelector(".input");t.querySelector(".yes").addEventListener("click",(e=>{""!=r.value&&(m.createNewProjectData(title),v.addNewProject(r.value),r.value="",t.parentElement.removeChild(t))}))}static createInputField(){const e=document.createElement("div");e.classList.add("input-field");const n=document.createElement("input");n.classList.add("input"),n.setAttribute("type","text");const t=document.createElement("div"),r=document.createElement("button");r.textContent="Yes";const o=document.createElement("button");return o.textContent="Cancel",o.addEventListener("click",(n=>{e.parentElement.removeChild(e)})),r.classList.add("yes"),o.classList.add("no"),t.appendChild(r),t.appendChild(o),e.appendChild(n),e.appendChild(t),e}static makeShowTasksBtn(e){e.addEventListener("click",(n=>{v.makeTaskInterface(e.textContent)}))}static makeTaskInterface(e){const n=document.querySelector(".tasks");n.textContent="";const t=document.createElement("h2"),r=document.createElement("div");r.classList.add("add-tasks"),r.textContent="+ Add Task",v.setTaskBtn(e,r),t.textContent=e,n.appendChild(t),n.appendChild(r)}static setTaskBtn(e,n){const t=document.querySelector(".tasks"),r=v.createInputField();n.addEventListener("click",(e=>{t.appendChild(r)}))}}document.addEventListener("DOMContentLoaded",v.loadHomePage)})()})();