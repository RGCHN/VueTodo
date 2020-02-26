(function(t){function e(e){for(var o,a,l=e[0],i=e[1],s=e[2],u=0,d=[];u<l.length;u++)a=l[u],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&d.push(r[a][0]),r[a]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o]);f&&f(e);while(d.length)d.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],o=!0,a=1;a<n.length;a++){var l=n[a];0!==r[l]&&(o=!1)}o&&(c.splice(e--,1),t=i(i.s=n[0]))}return t}var o={},a={app:0},r={app:0},c=[];function l(t){return i.p+"js/"+({}[t]||t)+"."+{"chunk-76e8d64e":"f0369ec9"}[t]+".js"}function i(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n={"chunk-76e8d64e":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var o="css/"+({}[t]||t)+"."+{"chunk-76e8d64e":"7b8503cd"}[t]+".css",r=i.p+o,c=document.getElementsByTagName("link"),l=0;l<c.length;l++){var s=c[l],u=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(u===o||u===r))return e()}var d=document.getElementsByTagName("style");for(l=0;l<d.length;l++){s=d[l],u=s.getAttribute("data-href");if(u===o||u===r)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var o=e&&e.target&&e.target.src||r,c=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=o,delete a[t],f.parentNode.removeChild(f),n(c)},f.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){a[t]=0})));var o=r[t];if(0!==o)if(o)e.push(o[2]);else{var c=new Promise((function(e,n){o=r[t]=[e,n]}));e.push(o[2]=c);var s,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=l(t);var d=new Error;s=function(e){u.onerror=u.onload=null,clearTimeout(f);var n=r[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",d.name="ChunkLoadError",d.type=o,d.request=a,n[1](d)}r[t]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:u})}),12e4);u.onerror=u.onload=s,document.head.appendChild(u)}return Promise.all(e)},i.m=t,i.c=o,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var d=0;d<s.length;d++)e(s[d]);var f=u;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"07a5":function(t,e,n){},"227f":function(t,e,n){},"299e":function(t,e,n){"use strict";var o=n("c129"),a=n.n(o);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("main-header"),n("main-todo"),n("Footer")],1)},r=[],c=(n("d3b7"),function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),l=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"main-header"},[n("h1",{staticClass:"title"},[t._v("TodoList")])])}],i={name:"MainHeader"},s=i,u=(n("5cc3"),n("2877")),d=Object(u["a"])(s,c,l,!1,null,"516cbc10",null),f=d.exports,p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-todo"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],staticClass:"add-todo",attrs:{type:"text",placeholder:"what to do ?",autofocus:""},domProps:{value:t.content},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addTodo(e)},input:function(e){e.target.composing||(t.content=e.target.value)}}}),t._l(t.filterData,(function(e,o){return n("new-item",{key:o,attrs:{"todo-data":e},on:{del:t.handleDel}})})),n("todo-info",{attrs:{totalItem:t.totalItem},on:{toggleState:t.handleToggleState,ClearCompleted:t.handleClear}})],2)},m=[],h=(n("4de4"),n("c740"),n("a434"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["item",t.todoData.completed?"completed":""]},[n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.todoData.completed,expression:"todoData.completed"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.todoData.completed)?t._i(t.todoData.completed,null)>-1:t.todoData.completed},on:{change:function(e){var n=t.todoData.completed,o=e.target,a=!!o.checked;if(Array.isArray(n)){var r=null,c=t._i(n,r);o.checked?c<0&&t.$set(t.todoData,"completed",n.concat([r])):c>-1&&t.$set(t.todoData,"completed",n.slice(0,c).concat(n.slice(c+1)))}else t.$set(t.todoData,"completed",a)}}}),t._v(" "+t._s(t.todoData.content)+" ")]),n("button",{on:{click:t.delItem}})])}),v=[],g={name:"todoItem",props:{todoData:Object},methods:{delItem:function(){this.$emit("del",this.todoData.id)}}},b=g,_=(n("b9bb"),Object(u["a"])(b,h,v,!1,null,"cdebf3f0",null)),y=_.exports,C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"todo-info"},[t.totalItem>1?n("span",{staticClass:"total"},[t._v(t._s(t.totalItem)+" items left")]):n("span",{staticClass:"total"},[t._v(t._s(t.totalItem)+" item left")]),n("div",{staticClass:"tabs"},t._l(t.states,(function(e,o){return n("a",{key:o,class:t.state===e?"ac":"",on:{click:function(n){return t.toggleState(e)}}},[t._v(" "+t._s(e)+" ")])})),0),n("button",{staticClass:"clear",on:{click:t.ClearCompleted}},[t._v("Clear Completed")])])},D=[],k=(n("a9e3"),{name:"todoInfo",props:{totalItem:Number},data:function(){return{states:["all","active","completed"],state:"all"}},methods:{toggleState:function(t){this.state=t,this.$emit("toggleState",t)},ClearCompleted:function(){this.$emit("ClearCompleted")}}}),w=k,O=(n("ce32"),Object(u["a"])(w,C,D,!1,null,"4e7ad44d",null)),x=O.exports,j={name:"MainTodo",components:{newItem:y,todoInfo:x},data:function(){return{content:"",todoData:[],totalItem:0,filter:"all"}},computed:{filterData:function(){switch(this.filter){case"all":return this.todoData;case"active":return this.todoData.filter((function(t){return!1===t.completed}));case"completed":return this.todoData.filter((function(t){return!0===t.completed}));default:return null}}},watch:{todoData:{deep:!0,handler:function(){this.totalItem=this.todoData.filter((function(t){return!1===t.completed})).length}}},methods:{addTodo:function(){if(""!==this.content){var t=this.todoData.length;this.todoData.unshift({id:t,content:this.content,completed:!1}),this.content=""}},handleDel:function(t){this.todoData.splice(this.todoData.findIndex((function(e){return e.id===t})),1)},handleToggleState:function(t){this.filter=t},handleClear:function(){this.todoData=this.todoData.filter((function(t){return!1===t.completed}))}}},E=j,I=(n("299e"),Object(u["a"])(E,p,m,!1,null,"e56aadda",null)),S=I.exports,T=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},$=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("footer",{staticClass:"main-footer"},[t._v(" Written By ChenR ")])])}],P={name:"Footer"},A=P,M=(n("fa90"),Object(u["a"])(A,T,$,!1,null,"735a4bf6",null)),N=M.exports;n.e("chunk-76e8d64e").then(n.t.bind(null,"aede",7));var L={name:"App",components:{MainHeader:f,MainTodo:S,Footer:N}},B=L,F=Object(u["a"])(B,a,r,!1,null,null,null),H=F.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(t){return t(H)}}).$mount("#app")},"5cc3":function(t,e,n){"use strict";var o=n("e168"),a=n.n(o);a.a},"773f":function(t,e,n){},b9bb:function(t,e,n){"use strict";var o=n("07a5"),a=n.n(o);a.a},c129:function(t,e,n){},ce32:function(t,e,n){"use strict";var o=n("773f"),a=n.n(o);a.a},e168:function(t,e,n){},fa90:function(t,e,n){"use strict";var o=n("227f"),a=n.n(o);a.a}});
//# sourceMappingURL=app.f89e5b96.js.map