(function(e){function t(t){for(var n,a,r=t[0],c=t[1],u=t[2],l=0,d=[];l<r.length;l++)a=r[l],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&d.push(s[a][0]),s[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),o()}function o(){for(var e,t=0;t<i.length;t++){for(var o=i[t],n=!0,a=1;a<o.length;a++){var c=o[a];0!==s[c]&&(n=!1)}n&&(i.splice(t--,1),e=r(r.s=o[0]))}return e}var n={},s={app:0},i=[];function a(e){return r.p+"js/"+({about:"about"}[e]||e)+"."+{about:"f415d8e3"}[e]+".js"}function r(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.e=function(e){var t=[],o=s[e];if(0!==o)if(o)t.push(o[2]);else{var n=new Promise((function(t,n){o=s[e]=[t,n]}));t.push(o[2]=n);var i,c=document.createElement("script");c.charset="utf-8",c.timeout=120,r.nc&&c.setAttribute("nonce",r.nc),c.src=a(e);var u=new Error;i=function(t){c.onerror=c.onload=null,clearTimeout(l);var o=s[e];if(0!==o){if(o){var n=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+n+": "+i+")",u.name="ChunkLoadError",u.type=n,u.request=i,o[1](u)}s[e]=void 0}};var l=setTimeout((function(){i({type:"timeout",target:c})}),12e4);c.onerror=c.onload=i,document.head.appendChild(c)}return Promise.all(t)},r.m=e,r.c=n,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/ClientPage/",r.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var f=u;i.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"034f":function(e,t,o){"use strict";var n=o("85ec"),s=o.n(n);s.a},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("router-view")],1)},i=[],a=(o("034f"),o("2877")),r={},c=Object(a["a"])(r,s,i,!1,null,null,null),u=c.exports,l=o("9483");Object(l["a"])("".concat("/ClientPage/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});o("d3b7");var f=o("8c4f"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container",attrs:{id:"chat"}},[n("div",{staticClass:"row justify-content-end fixed-bottom",staticStyle:{"padding-right":"10px","padding-bottom":"20px"}},[n("div",{staticClass:"col chatroom"},[e.visible?n("Chat",{attrs:{id:"chat-window",participants:e.participants,myself:e.myself,messages:e.messages,"chat-title":e.chatTitle,placeholder:e.placeholder,profilePictureConfig:e.profilePictureConfig,colors:e.colors,"scroll-bottom":e.scrollBottom,"display-header":!0,"send-images":!1},on:{onMessageSubmit:e.onMessageSubmit,onType:e.onType,onClose:e.onClose}}):e._e()],1)]),e.visible?e._e():n("div",{staticClass:"row justify-content-end fixed-bottom",staticStyle:{"padding-right":"30px","padding-bottom":"10px"}},[n("img",{attrs:{src:o("8337")},on:{click:function(t){return e.onRoomOpen()}}})])])},p=[],m=(o("b0c0"),o("8aa5")),h=o.n(m),b=o("b9b9"),g=o.n(b),y=o("3ce5"),v=(o("c561"),{name:"Home",components:{Chat:y["Chat"]},data:function(){return{visible:!1,participants:[{name:"客服人員",id:1}],myself:{name:"我",id:2},messages:[],chatTitle:"客服系統",placeholder:"請輸入訊息",colors:{header:{bg:"#d30303",text:"#fff"},message:{myself:{bg:"#fff",text:"#bdb8b8"},others:{bg:"#fb4141",text:"#fff"},messagesDisplay:{bg:"#f7f3f3"}},submitIcon:"#b91010",submitImageIcon:"#b91010"},borderStyle:{topLeft:"10px",topRight:"10px",bottomLeft:"10px",bottomRight:"10px"},scrollBottom:{messageSent:!0,messageReceived:!1},displayHeader:!0,profilePictureConfig:{others:!1,myself:!1,styles:{width:"30px",height:"30px",borderRadius:"50%"}},messageText:"",firebaseConfig:{apiKey:"AIzaSyBNhudq5zJ3SGEuZl7ZccpWwDo_hv1iwfk",authDomain:"testing-vue-bb3af.firebaseapp.com",databaseURL:"https://testing-vue-bb3af.firebaseio.com",projectId:"testing-vue-bb3af",storageBucket:"testing-vue-bb3af.appspot.com",messagingSenderId:"403045099754",appId:"1:403045099754:web:8c1339ef83167be9244f93",measurementId:"G-6F3QCKLWTM"},db:null,rootRef:null,mychatroomRef:null}},created:function(){var e=this;h.a.initializeApp(this.firebaseConfig),this.database=h.a.database(),this.rootRef=this.database.ref("chatroom"),this.$cookies.isKey("user_session")?this.mychatroomRef=this.rootRef.child(this.$cookies.get("user_session")):(this.mychatroomRef=this.rootRef.push(),this.$cookies.set("user_session",this.mychatroomRef.key)),this.mychatroomRef.update({updateDatetime:g()(new Date,"yyyy-mm-dd HH:MM:ss")}),this.mychatroomRef.child("messages").on("child_added",(function(t){var o={};o.content=t.val().content,o.type="text";var n=new Date(Date.parse(t.val().datetime));o.timestamp={year:n.getFullYear(),month:n.getMonth(),day:n.getDate(),hour:n.getHours(),minute:n.getMinutes(),second:n.getSeconds(),millisecond:n.getMilliseconds()},t.val().nickname==e.myself.name?(o.participantId=2,o.myself=!0):(o.participantId=1,o.myself=!1),e.messages.push(o)}))},methods:{onRoomOpen:function(){this.visible=!0},onType:function(e){console.log(e)},onMessageSubmit:function(e){this.$cookies.set("user_session",this.mychatroomRef.key),this.mychatroomRef.update({isRead:!1}),this.mychatroomRef.child("messages").push().set({datetime:g()(new Date,"yyyy-mm-dd HH:MM:ss"),nickname:this.myself.name,content:e.content}),setTimeout((function(){e.uploaded=!0}),2e3)},onClose:function(){this.visible=!1}}}),w=v,x=(o("ffe9"),Object(a["a"])(w,d,p,!1,null,"773a28dd",null)),k=x.exports;n["default"].use(f["a"]);var C=[{path:"/",name:"Home",component:k},{path:"/about",name:"About",component:function(){return o.e("about").then(o.bind(null,"f820"))}}],R=new f["a"]({routes:C}),j=R,S=o("2f62");n["default"].use(S["a"]);var _=new S["a"].Store({state:{},mutations:{},actions:{},modules:{}}),O=o("5f5b"),M=(o("f9e3"),o("2dd8"),o("2b27")),P=o.n(M);n["default"].use(O["a"]),n["default"].use(P.a),n["default"].config.productionTip=!1,new n["default"]({router:j,store:_,render:function(e){return e(u)}}).$mount("#app")},7894:function(e,t,o){},8337:function(e,t,o){e.exports=o.p+"img/chatIcon.21aff95e.png"},"85ec":function(e,t,o){},ffe9:function(e,t,o){"use strict";var n=o("7894"),s=o.n(n);s.a}});
//# sourceMappingURL=app.35eb1402.js.map