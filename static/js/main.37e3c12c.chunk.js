(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports={nav:"Navbar_nav__Snzz_",item:"Navbar_item__2QKsO",activeLink:"Navbar_activeLink__27s_-"}},128:function(e,t,n){"use strict";n.d(t,"b",function(){return i});var r=n(47),a=n(15);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}var c={messages:[{id:1,message:"Hello! It is my first message!"},{id:2,message:"How are you??"},{id:3,message:"Hello!"}],dialogs:[{name:"Dasha",id:"1"},{name:"Nastya",id:"2"},{name:"Veronika",id:"3"},{name:"Kristina",id:"4"},{name:"Darya",id:"5"}]},i=function(e){return{type:"dialogs/SEND-MESSAGE",newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"dialogs/SEND-MESSAGE":var n=t.newMessageBody;return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(n,!0).forEach(function(t){Object(a.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},e,{messages:[].concat(Object(r.a)(e.messages),[{id:4,message:n}])});default:return e}}},134:function(e,t,n){e.exports=n.p+"static/media/preloader.5a2a7610.svg"},135:function(e,t,n){e.exports={preloaderImg:"preloader_preloaderImg__3opLB"}},138:function(e,t,n){e.exports=n.p+"static/media/cat.26bce32a.svg"},166:function(e,t,n){e.exports=n(293)},171:function(e,t,n){},172:function(e,t,n){},25:function(e,t,n){"use strict";n.d(t,"b",function(){return l}),n.d(t,"a",function(){return p}),n.d(t,"c",function(){return f});var r=n(48),a=n(0),o=n.n(a),c=n(43),i=n.n(c),s=n(90),u=function(e){e.input;var t=e.meta,n=(e.child,Object(r.a)(e,["input","meta","child"])),a=t.touched&&t.error;return o.a.createElement("div",{className:i.a.formControl+" "+(a?i.a.error:"")},o.a.createElement("div",null,n.children),a&&o.a.createElement("span",null," ",t.error))},l=function(e){var t=e.input,n=(e.meta,e.child,Object(r.a)(e,["input","meta","child"]));return o.a.createElement(u,e,o.a.createElement("textarea",Object.assign({className:i.a.wrapperTextarea},t,n)))},p=function(e){var t=e.input,n=(e.meta,e.child,Object(r.a)(e,["input","meta","child"]));return o.a.createElement(u,e,o.a.createElement("input",Object.assign({},t,n)))},f=function(e,t,n,r){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return o.a.createElement("div",null,o.a.createElement(s.a,Object.assign({placeholder:e,name:t,validate:n,component:r},a))," ",c)}},293:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(67),c=n.n(o);n(171),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=n(36),s=n(37),u=n(39),l=n(38),p=n(40),f=(n(172),n(10)),m=n.n(f),g=n(11),d=function(){return a.a.createElement("nav",{className:m.a.nav},a.a.createElement("div",{className:"".concat(m.a.item," ").concat(m.a.active)},"  ",a.a.createElement(g.b,{to:"/profile",activeClassName:m.a.activeLink}," Profile ")," "),a.a.createElement("div",{className:"".concat(m.a.item," ").concat(m.a.active)}," ",a.a.createElement(g.b,{to:"/dialogs",activeClassName:m.a.activeLink}," Messages ")," "),a.a.createElement("div",{className:"".concat(m.a.item," ").concat(m.a.active)}," ",a.a.createElement(g.b,{to:"/users",activeClassName:m.a.activeLink}," Users ")," "),a.a.createElement("div",{className:"".concat(m.a.item," ").concat(m.a.active)},"  ",a.a.createElement(g.b,{to:"/profile"}," News ")," "),a.a.createElement("div",{className:"".concat(m.a.item," ").concat(m.a.active)},"  ",a.a.createElement(g.b,{to:"/profile"}," Music ")," "),a.a.createElement("div",{className:"".concat(m.a.item," ").concat(m.a.active)},"  ",a.a.createElement(g.b,{to:"/profile"}," Settings ")," "))},b=n(30),h=n(19),v=n(48),O=n(15),E=n(96),w=n(49),P=n.n(w),y=n(133),j=n.n(y),S=function(e){for(var t=e.totalItemsCount,n=e.pageSize,o=e.currentPage,c=e.onPageChanged,i=e.portionSize,s=void 0===i?5:i,u=Math.ceil(t/n),l=[],p=1;p<=u;p++)l.push(p);var f=Math.ceil(u/s),m=Object(r.useState)(1),d=Object(E.a)(m,2),b=d[0],h=d[1],v=(b-1)*s+1,w=b*s;return a.a.createElement("div",{className:P.a.paginator},b>1&&a.a.createElement("button",{className:P.a.btnPaginator,onClick:function(){return h(b-1)}},"Prev"),l.filter(function(e){return e>=v&&e<=w}).map(function(e){return a.a.createElement(g.b,{to:"/users",className:j()(Object(O.a)({},P.a.selectedPage,o===e),P.a.pageNumber),key:e,onClick:function(t){c(e)}}," ",e," ")}),f>b&&a.a.createElement("button",{className:P.a.btnPaginator,onClick:function(){h(b+1)}},"Next "))},_=n(31),C=n.n(_),N=n(99),k=n.n(N),U=function(e){var t=e.user,n=e.followingInProgress,r=e.unfollow,o=e.follow;return a.a.createElement("div",{className:C.a.userWrapper},a.a.createElement("span",null,a.a.createElement("div",null,a.a.createElement(g.b,{to:"/profile/"+t.id},a.a.createElement("img",{alt:"",src:null!=t.photos.small?t.photos.small:k.a,className:C.a.userPhoto}))),a.a.createElement("div",null,t.followed?a.a.createElement("button",{className:C.a.followingBtn,disabled:n.some(function(e){return e===t.id}),onClick:function(){r(t.id)}}," Unfollow "):a.a.createElement("button",{className:C.a.followingBtn,disabled:n.some(function(e){return e===t.id}),onClick:function(){o(t.id)}}," Follow "))),a.a.createElement("span",null,a.a.createElement("span",null,a.a.createElement("div",{className:C.a.userName},"  ",t.name," "),a.a.createElement("div",null,"  ",t.status," ")),a.a.createElement("span",null,a.a.createElement("div",{className:C.a.userLocation},"  ","Belarus"," "),a.a.createElement("div",{className:C.a.userLocation},"  ","Minsk"," "))))},I=function(e){var t=e.currentPage,n=e.totalUsersCount,r=e.pageSize,o=e.onPageChanged,c=e.users,i=Object(v.a)(e,["currentPage","totalUsersCount","pageSize","onPageChanged","users"]);return a.a.createElement("div",null,a.a.createElement(S,{currentPage:t,totalItemsCount:n,pageSize:r,onPageChanged:o}),a.a.createElement("div",null,c.map(function(e){return a.a.createElement(U,{key:e.id,user:e,followingInProgress:i.followingInProgress,unfollow:i.unfollow,follow:i.follow})})))},T=n(42),x=n(6),L=n.n(x),D=n(13),A=n(47),R=n(9);function F(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}var z=function(e,t,n,r){return e.map(function(e){return e[n]===t?function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?F(n,!0).forEach(function(t){Object(O.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):F(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},e,{},r):e})};function B(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function G(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?B(n,!0).forEach(function(t){Object(O.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):B(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var M={users:[],pageSize:5,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},H=function(e){return{type:"users/SET-CURRENT-PAGE",currentPage:e}},W=function(e){return{type:"users/FOLLOW",userId:e}},J=function(e){return{type:"users/UNFOLLOW",userId:e}},V=function(e){return{type:"users/TOGGLE-IS-FETCHING",isFetching:e}},q=function(e,t){return{type:"users/TOGGLE-IS-FOLLOWING-PROGRESS",isFetching:e,userId:t}},K=function(){var e=Object(D.a)(L.a.mark(function e(t,n,r,a){return L.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t(q(!0,n)),e.next=3,r(n);case 3:0===e.sent.data.resultCode&&t(a(n)),t(q(!1,n));case 6:case"end":return e.stop()}},e)}));return function(t,n,r,a){return e.apply(this,arguments)}}(),X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"users/FOLLOW":return G({},e,{users:z(e.users,t.userId,"id",{followed:!0})});case"users/UNFOLLOW":return G({},e,{users:z(e.users,t.userId,"id",{followed:!1})});case"users/SET-USERS":return G({},e,{users:t.users});case"users/SET-CURRENT-PAGE":return G({},e,{currentPage:t.currentPage});case"users/SET-TOTAL-USERS-COUNT":return G({},e,{totalUsersCount:t.count});case"users/TOGGLE-IS-FETCHING":return G({},e,{isFetching:t.isFetching});case"users/TOGGLE-IS-FOLLOWING-PROGRESS":return G({},e,{followingInProgress:t.isFetching?[].concat(Object(A.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter(function(e){return e!==t.userId})});default:return e}},Z=n(8),Q=n(137),Y=Object(Q.a)(function(e){return e.usersPage.users},function(e){return e.filter(function(e){return!0})}),$=function(e){return e.usersPage.pageSize},ee=function(e){return e.usersPage.totalUsersCount},te=function(e){return e.usersPage.currentPage},ne=function(e){return e.usersPage.isFetching},re=function(e){return e.usersPage.followingInProgress},ae=function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(a)))).onPageChanged=function(e){var t=n.props.pageSize;n.props.requestUsers(e,t)},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.requestUsers(t,n)}},{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,this.props.isFetching?a.a.createElement(T.a,null):null,a.a.createElement(I,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress}))}}]),t}(a.a.Component),oe=Object(Z.d)(Object(h.b)(function(e){return{users:Y(e),pageSize:$(e),totalUsersCount:ee(e),currentPage:te(e),isFetching:ne(e),followingInProgress:re(e)}},{follow:function(e){return function(){var t=Object(D.a)(L.a.mark(function t(n){return L.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:K(n,e,R.d.follow.bind(R.d),W);case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(D.a)(L.a.mark(function t(n){return L.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:K(n,e,R.d.follow.bind(R.d),J);case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:H,toggleFollowingProgress:q,requestUsers:function(e,t){return function(){var n=Object(D.a)(L.a.mark(function n(r){var a;return L.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r(V(!0)),r(H(e)),n.next=4,R.d.getUsers(e,t);case 4:a=n.sent,r(V(!1)),r({type:"users/SET-USERS",users:a.items}),r({type:"users/SET-TOTAL-USERS-COUNT",count:a.totalCount});case 8:case"end":return n.stop()}},n)}));return function(e){return n.apply(this,arguments)}}()}}))(ae),ce=n(72),ie=n.n(ce),se=n(138),ue=n.n(se),le=function(e){return a.a.createElement("header",{className:ie.a.header},a.a.createElement("img",{alt:"",src:ue.a}),a.a.createElement("div",{className:ie.a.loginBlock},e.isAuth?a.a.createElement("div",null," ",e.login,a.a.createElement("button",{onClick:e.logout},"Log out")):a.a.createElement(g.b,{className:ie.a.loginBtnRegistration,to:"/login"}," Login ")))},pe=n(32);function fe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}var me={userId:null,email:null,login:null,isAuth:!1,captchaUrl:null},ge=function(e,t,n,r){return{type:"auth/SET-USER-DATA",payload:{userId:e,email:t,login:n,isAuth:r}}},de=function(e){return{type:"auth/GET-CAPTCHA-URL-SUCCESS",payload:{captchaUrl:e}}},be=function(){return function(){var e=Object(D.a)(L.a.mark(function e(t){var n,r,a,o,c;return L.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.a.me();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,a=r.id,o=r.email,c=r.login,t(ge(a,o,c,!0)));case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},he=function(){return function(){var e=Object(D.a)(L.a.mark(function e(t){var n,r;return L.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.c.getCaptchaUrl();case 2:n=e.sent,r=n.data.url,t(de(r));case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"auth/SET-USER-DATA":case"auth/GET-CAPTCHA-URL-SUCCESS":return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?fe(n,!0).forEach(function(t){Object(O.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):fe(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},e,{},t.payload);default:return e}},Oe=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return a.a.createElement(le,this.props)}}]),t}(a.a.Component),Ee=Object(h.b)(function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}},{logout:function(){return function(){var e=Object(D.a)(L.a.mark(function e(t){return L.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.a.logout();case 2:0===e.sent.data.resultCode&&t(ge(null,null,null,!1));case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}})(Oe),we=n(129),Pe=n(25),ye=n(65),je=n(43),Se=n.n(je),_e=n(57),Ce=n.n(_e),Ne=Object(we.a)({form:"login"})(function(e){var t=e.handleSubmit,n=e.error,r=e.captchaUrl;return a.a.createElement("div",null,a.a.createElement("div",{className:Ce.a.wrapperTestsData},a.a.createElement("span",null," Please, enter  "),a.a.createElement("span",null," test email : free@samuraijs.com "),a.a.createElement("span",null," test login : free ")),a.a.createElement("form",{onSubmit:t},Object(Pe.c)("Email","email",[ye.b],Pe.a),Object(Pe.c)("Password","password",[ye.b],Pe.a,{type:"password"}),a.a.createElement("div",{className:Ce.a.rememberMe},Object(Pe.c)(null,"rememberMe",[],Pe.a,{type:"checkbox"},"remember me")),r&&a.a.createElement("img",{alt:"",src:r}),r&&Object(Pe.c)("Symbols from image","captcha",[ye.b],Pe.a,{}),n&&a.a.createElement("div",{className:Se.a.formSummaryError},n),a.a.createElement("div",null,a.a.createElement("button",{className:Ce.a.loginButtonRegistration},"Login"))))}),ke=Object(h.b)(function(e){return{isAuth:e.auth.isAuth,captchaUrl:e.auth.captchaUrl}},{login:function(e,t,n,r){return function(){var a=Object(D.a)(L.a.mark(function a(o){var c,i;return L.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,R.a.login(e,t,n,r);case 2:0===(c=a.sent).data.resultCode?o(be()):(10===c.data.resultCode&&o(he()),i=c.data.messages.length>0?c.data.messages[0]:"Some error",o(Object(pe.a)("login",{_error:i})));case 4:case"end":return a.stop()}},a)}));return function(e){return a.apply(this,arguments)}}()}})(function(e){return e.isAuth?a.a.createElement(b.a,{to:"/profile"}):a.a.createElement("div",null,a.a.createElement("h1",{className:Ce.a.login}," Login "),a.a.createElement(Ne,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe,t.captcha)},captchaUrl:e.captchaUrl}))});function Ue(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}var Ie={initialized:!1},Te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie;switch((arguments.length>1?arguments[1]:void 0).type){case"app/INITIALIZED-SUCCESS":return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ue(n,!0).forEach(function(t){Object(O.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ue(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},e,{initialized:!0});default:return e}},xe=n(95),Le=n(128),De={},Ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:De;arguments.length>1&&arguments[1];return e},Re=n(140),Fe=n(130),ze=Object(Z.c)({profilePage:xe.b,dialogsPage:Le.a,sidebar:Ae,usersPage:X,auth:ve,form:Fe.a,app:Te}),Be=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Z.d,Ge=Object(Z.e)(ze,Be(Object(Z.a)(Re.a)));window.__store__=Ge;var Me=Ge,He=function(e){return function(t){return a.a.createElement(a.a.Suspense,{fallback:a.a.createElement(T.a,null)},a.a.createElement(e,t))}},We=a.a.lazy(function(){return n.e(4).then(n.bind(null,301))}),Je=a.a.lazy(function(){return n.e(3).then(n.bind(null,300))}),Ve=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?a.a.createElement("div",{className:"app"},a.a.createElement("div",{className:"app-wrapper"},a.a.createElement(Ee,null),a.a.createElement(d,null),a.a.createElement("div",{className:"app-wrapper-content"},a.a.createElement(b.d,null,a.a.createElement(b.b,{exact:!0,path:"/",render:function(){return a.a.createElement(b.a,{to:"/profile"})}}),a.a.createElement(b.b,{path:"/dialogs",render:He(We)}),a.a.createElement(b.b,{path:"/profile/:userId?",render:He(Je)}),a.a.createElement(b.b,{path:"/users",render:function(){return a.a.createElement(oe,null)}}),a.a.createElement(b.b,{path:"/login",render:function(){return a.a.createElement(ke,null)}}))))):a.a.createElement(T.a,null)}}]),t}(r.Component),qe=Object(Z.d)(b.g,Object(h.b)(function(e){return{initialized:e.app.initialized}},{initializeApp:function(){return function(e){var t=e(be());Promise.all([t]).then(function(){e({type:"app/INITIALIZED-SUCCESS"})})}}}))(Ve),Ke=function(e){return a.a.createElement(g.a,null,a.a.createElement(h.a,{store:Me},a.a.createElement(qe,null)))};c.a.render(a.a.createElement(Ke,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},31:function(e,t,n){e.exports={userPhoto:"Users_userPhoto__3Ns-z",userWrapper:"Users_userWrapper__3tr4X",followingBtn:"Users_followingBtn__QgzCv",userName:"Users_userName__1VWYu",userLocation:"Users_userLocation__LkSuE"}},42:function(e,t,n){"use strict";var r=n(134),a=n.n(r),o=n(0),c=n.n(o),i=n(135),s=n.n(i);t.a=function(e){return c.a.createElement("div",null,c.a.createElement("img",{alt:"",className:s.a.preloaderImg,src:a.a}))}},43:function(e,t,n){e.exports={formControl:"FormControls_formControl__ji3Ag",error:"FormControls_error__3S0JZ",formSummaryError:"FormControls_formSummaryError__1Cp-X",saveBtn:"FormControls_saveBtn__2Yhyz"}},49:function(e,t,n){e.exports={selectedPage:"Paginator_selectedPage__17ZLh",paginator:"Paginator_paginator__2RzwL",pageNumber:"Paginator_pageNumber__1AkI0",btnPaginator:"Paginator_btnPaginator__1URMU"}},57:function(e,t,n){e.exports={login:"Login_login__39AAQ",rememberMe:"Login_rememberMe__aiHgl",loginButtonRegistration:"Login_loginButtonRegistration__3HaRd",wrapperTestsData:"Login_wrapperTestsData__2H81x"}},65:function(e,t,n){"use strict";n.d(t,"b",function(){return r}),n.d(t,"a",function(){return a});var r=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t&&t.length>e)return"Max length is ".concat(e," symbols")}}},72:function(e,t,n){e.exports={header:"Header_header__2iosn",loginBtnRegistration:"Header_loginBtnRegistration__fJvcF",loginBlock:"Header_loginBlock__1K7Jj"}},9:function(e,t,n){"use strict";n.d(t,"d",function(){return o}),n.d(t,"b",function(){return c}),n.d(t,"a",function(){return i}),n.d(t,"c",function(){return s});var r=n(136),a=n.n(r).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"36ea6627-56ac-4237-9f9d-072de037a59c"}}),o={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return a.get("users?page=".concat(e,"&count=").concat(t)).then(function(e){return e.data})},follow:function(e){return a.post("follow/".concat(e))},unfollow:function(e){return a.delete("follow/".concat(e))},getProfile:function(e){return console.warn("Obsolete method. Please profileAPI object"),c.getProfile(e)}},c={getProfile:function(e){return a.get("profile/".concat(e))},getStatus:function(e){return a.get("profile/status/".concat(e))},updateStatus:function(e){return a.put("profile/status",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),a.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})},saveProfile:function(e){return a.put("profile",e)}},i={me:function(){return a.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return a.post("auth/login",{email:e,password:t,rememberMe:n,captcha:r})},logout:function(){return a.delete("auth/login")}},s={getCaptchaUrl:function(){return a.get("security/get-captcha-url")}}},95:function(e,t,n){"use strict";n.d(t,"a",function(){return m}),n.d(t,"d",function(){return d}),n.d(t,"c",function(){return b}),n.d(t,"g",function(){return h}),n.d(t,"e",function(){return v}),n.d(t,"f",function(){return O});var r=n(6),a=n.n(r),o=n(13),c=n(47),i=n(15),s=n(9),u=n(32);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(n,!0).forEach(function(t){Object(i.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var f={posts:[{id:1,message:"It is my first post",likesCount:50},{id:2,message:"I am a beautiful",likesCount:10},{id:3,message:"Do you have a cat?",likesCount:0},{id:4,message:"Hello!",likesCount:5}],profile:null,status:""},m=function(e){return{type:"profile/ADD-POST",newPostText:e}},g=function(e){return{type:"profile/SET-STATUS",status:e}},d=function(e){return function(){var t=Object(o.a)(a.a.mark(function t(n){var r;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.d.getProfile(e);case 2:r=t.sent,n({type:"profile/SET-USER-PROFILE",profile:r.data});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},b=function(e){return function(){var t=Object(o.a)(a.a.mark(function t(n){var r;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.getStatus(e);case 2:r=t.sent,n(g(r.data));case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(o.a)(a.a.mark(function t(n){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.b.updateStatus(e);case 3:0===t.sent.data.resultCode&&n(g(e)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),alert("error");case 10:case"end":return t.stop()}},t,null,[[0,7]])}));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(o.a)(a.a.mark(function t(n){var r;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.savePhoto(e);case 2:0===(r=t.sent).data.resultCode&&n({type:"profile/SAVE-PHOTO-SUCCESS",photos:r.data.data.photos});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(o.a)(a.a.mark(function t(n,r){var o,c;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return o=r().auth.userId,t.next=3,s.b.saveProfile(e);case 3:if(0!==(c=t.sent).data.resultCode){t.next=8;break}n(d(o)),t.next=11;break;case 8:return n(Object(u.a)("edit-profile",{_error:c.data.messages[0]})),console.log(c.data),t.abrupt("return",Promise.reject(c.data.messages[0]));case 11:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"profile/ADD-POST":var n={id:5,message:t.newPostText,likesCount:0};return p({},e,{posts:[].concat(Object(c.a)(e.posts),[n]),newPostText:""});case"profile/SET-USER-PROFILE":return p({},e,{profile:t.profile});case"profile/SET-STATUS":return p({},e,{status:t.status});case"profile/DELETE-POST":return p({},e,{posts:e.posts.filter(function(e){return e.id!==t.postId})});case"profile/SAVE-PHOTO-SUCCESS":return p({},e,{profile:p({},e.profile,{photos:t.photos})});default:return e}}},99:function(e,t,n){e.exports=n.p+"static/media/userPhoto.9306807e.svg"}},[[166,1,2]]]);
//# sourceMappingURL=main.37e3c12c.chunk.js.map