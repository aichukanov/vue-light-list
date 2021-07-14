(function(e){function t(t){for(var i,a,o=t[0],c=t[1],u=t[2],h=0,d=[];h<o.length;h++)a=o[h],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&d.push(s[a][0]),s[a]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);l&&l(t);while(d.length)d.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],i=!0,o=1;o<n.length;o++){var c=n[o];0!==s[c]&&(i=!1)}i&&(r.splice(t--,1),e=a(a.s=n[0]))}return e}var i={},s={app:0},r=[];function a(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=i,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)a.d(n,i,function(t){return e[t]}.bind(null,i));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/vue-light-list/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var l=c;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"1f61":function(e,t,n){},"2e2f":function(e,t,n){"use strict";n("1f61")},"48ca":function(e,t,n){},"4d3a":function(e,t,n){"use strict";n("48ca")},7297:function(e,t,n){"use strict";n("79ef")},"79ef":function(e,t,n){},"9a8d":function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"room-wrapper"},[n("div",{staticClass:"settings-wrapper"},[n("div",{staticClass:"settings-row"},[e._v(" Usual list "),n("switch-button",{staticClass:"lightlist-switcher",attrs:{disabled:!e.areHeightsInitialized,title:e.disabledSwitchTitle},on:{input:function(t){return e.onSwitchMode()}},model:{value:e.lightListEnabled,callback:function(t){e.lightListEnabled=t},expression:"lightListEnabled"}}),e._v(" Light list ")],1),n("div",{staticClass:"settings-row"},[e._v(" Count of rows "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.rowCount,expression:"rowCount"}],staticClass:"row-count",attrs:{autofocus:""},domProps:{value:e.rowCount},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.updateMessageList()},input:function(t){t.target.composing||(e.rowCount=t.target.value)}}})]),n("div",{staticClass:"settings-row reload-button-wrapper"},[n("button",{staticClass:"button-reload",attrs:{title:"Create new message list"},on:{click:function(t){return e.updateMessageList()}}},[e._v(" ↻ Spent "+e._s(e.lastReloadTime)+" ms to render the list with "+e._s(e.messages.length)+" messages. Click to measure again ")])])]),n("div",{ref:"scrollArea",staticClass:"message-list-wrapper",on:{scroll:e.onScroll}},[e.isStubShown?n("div",{style:e.topStubStyle}):e._e(),e._l(e.visibleMessages,(function(t){var i=t.id,s=t.text,r=t.userName;return n("message-row",{key:i,staticClass:"list-element",attrs:{userName:r,text:s},on:{remove:function(t){return e.remove(i)}}})})),e.isStubShown?n("div",{style:e.bottomStubStyle}):e._e()],2)])},r=[],a=n("1da1"),o=n("d4ec"),c=n("bee2"),u=n("262e"),l=n("2caf"),h=(n("96cf"),n("fb6a"),n("c740"),n("a434"),n("9ab4")),d=n("1b40"),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"message__wrapper"},[n("user-avatar",{attrs:{userName:e.userName}}),n("span",{staticClass:"message__text"},[e._v(" "+e._s(e.text)+" "),n("button",{staticClass:"message__remove",on:{click:function(t){return e.$emit("remove")}}},[e._v(" ✖ ")])])],1)},p=[],b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"message__user-avatar",attrs:{title:e.userName}},[e._v(" "+e._s(e.avatarText)+" ")])},g=[],v=n("3835"),m=(n("a15b"),n("d81d"),n("1276"),n("ac1f"),function(e){Object(u["a"])(n,e);var t=Object(l["a"])(n);function n(){return Object(o["a"])(this,n),t.apply(this,arguments)}return Object(c["a"])(n,[{key:"avatarText",get:function(){return this.userName.split(" ").map((function(e){var t=Object(v["a"])(e,1),n=t[0];return n})).join("")}}]),n}(d["c"]));Object(h["a"])([Object(d["b"])({type:String,required:!0})],m.prototype,"userName",void 0),m=Object(h["a"])([d["a"]],m);var y=m,w=y,k=(n("ffdf"),n("2877")),O=Object(k["a"])(w,b,g,!1,null,null,null),j=O.exports,_=function(e){Object(u["a"])(n,e);var t=Object(l["a"])(n);function n(){return Object(o["a"])(this,n),t.apply(this,arguments)}return n}(d["c"]);Object(h["a"])([Object(d["b"])({type:String,required:!0})],_.prototype,"userName",void 0),Object(h["a"])([Object(d["b"])({type:String,required:!0})],_.prototype,"text",void 0),_=Object(h["a"])([Object(d["a"])({components:{UserAvatar:j}})],_);var C=_,S=C,x=(n("4d3a"),Object(k["a"])(S,f,p,!1,null,null,null)),E=x.exports,T=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",{staticClass:"switch",class:e.switchClasses},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.checked,expression:"checked"}],attrs:{type:"checkbox",disabled:e.disabled},domProps:{checked:Array.isArray(e.checked)?e._i(e.checked,null)>-1:e.checked},on:{change:function(t){var n=e.checked,i=t.target,s=!!i.checked;if(Array.isArray(n)){var r=null,a=e._i(n,r);i.checked?a<0&&(e.checked=n.concat([r])):a>-1&&(e.checked=n.slice(0,a).concat(n.slice(a+1)))}else e.checked=s}}}),n("span",{staticClass:"slider"})])},H=[],M=function(e){Object(u["a"])(n,e);var t=Object(l["a"])(n);function n(){return Object(o["a"])(this,n),t.apply(this,arguments)}return Object(c["a"])(n,[{key:"switchClasses",get:function(){return{switch__disabled:this.disabled}}},{key:"checked",get:function(){return this.value},set:function(e){this.disabled||this.$emit("input",e)}}]),n}(d["c"]);Object(h["a"])([Object(d["b"])({type:Boolean,required:!0})],M.prototype,"value",void 0),Object(h["a"])([Object(d["b"])({type:Boolean,default:!1})],M.prototype,"disabled",void 0),M=Object(h["a"])([d["a"]],M);var L=M,$=L,A=(n("7297"),Object(k["a"])($,T,H,!1,null,null,null)),R=A.exports,N=(n("99af"),["Phoebe Buffay","Joey Tribbiani","Chandler Bing","Ross Geller","Rachel Green","Monica Geller"]),P=function(e){var t=N[Math.floor(Math.random()*N.length)],n=1e5*Math.random();return{id:n,userName:t,text:"".concat(e,". ").concat(t," sent a message with id ").concat(n)}};function q(e){var t=[],n=0;while(n<e)t.push(P(++n));return t}var B=function(e){Object(u["a"])(n,e);var t=Object(l["a"])(n);function n(){var e;return Object(o["a"])(this,n),e=t.apply(this,arguments),e.messages=[],e.lightListEnabled=!1,e.lastReloadTime=null,e.rowCount=2500,e.timeTracker=null,e.rowHeight=0,e.scrollAreaHeight=0,e.scrollTop=0,e}return Object(c["a"])(n,[{key:"isStubShown",get:function(){return this.lightListEnabled&&!this.isEmptyList&&this.areHeightsInitialized}},{key:"topStubStyle",get:function(){if(!this.isStubShown)return null;var e=this.hiddenElementsCount*this.rowHeight;return e<0&&(e=0),{height:"".concat(e,"px")}}},{key:"bottomStubStyle",get:function(){if(!this.isStubShown)return null;var e=(this.messages.length-this.hiddenElementsCount-this.visibleElementsCount)*this.rowHeight;return e<0&&(e=0),{height:"".concat(e,"px")}}},{key:"visibleMessages",get:function(){return this.lightListEnabled?this.messages.slice(this.hiddenElementsCount,this.hiddenElementsCount+this.visibleElementsCount):this.messages}},{key:"isEmptyList",get:function(){return 0===this.messages.length}},{key:"areHeightsInitialized",get:function(){return this.rowHeight>0&&this.scrollAreaHeight>0}},{key:"disabledSwitchTitle",get:function(){return this.areHeightsInitialized?null:"Switching is disabled until at least one item in the list is rendered"}},{key:"visibleElementsCount",get:function(){return Math.ceil(this.scrollAreaHeight/this.rowHeight)}},{key:"hiddenElementsCount",get:function(){return Math.floor(this.scrollTop/this.rowHeight)}},{key:"mounted",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t,n=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.updateMessageList(),e.next=3,this.$nextTick();case 3:this.isEmptyList?t=this.$watch((function(){return n.isEmptyList}),(function(){n.lightListEnabled||n.isEmptyList||(n.initHeights(),t())})):this.initHeights();case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"updateMessageList",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.timeTracker=(new Date).getTime(),this.messages=q(this.rowCount),e.next=4,this.$nextTick();case 4:this.lastReloadTime=(new Date).getTime()-this.timeTracker;case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"onScroll",value:function(){this.scrollTop=this.$refs.scrollArea.scrollTop}},{key:"onSwitchMode",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.messages=[],e.next=3,this.$nextTick;case 3:this.updateMessageList();case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"remove",value:function(e){var t=this.messages.findIndex((function(t){var n=t.id;return n===e}));t>=0&&this.messages.splice(t,1)}},{key:"initHeights",value:function(){var e=this.$refs.scrollArea;this.scrollAreaHeight=e.clientHeight,this.rowHeight=e.querySelector(".list-element").clientHeight}}]),n}(d["c"]);B=Object(h["a"])([Object(d["a"])({components:{MessageRow:E,SwitchButton:R}})],B);var I=B,z=I,G=(n("2e2f"),Object(k["a"])(z,s,r,!1,null,null,null)),J=G.exports;new i["a"]({render:function(e){return e(J)}}).$mount("#app")},ffdf:function(e,t,n){"use strict";n("9a8d")}});