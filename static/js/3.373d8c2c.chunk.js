(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{294:function(e,t,a){e.exports={descriptionBlock:"ProfileInfo_descriptionBlock__oo9fj",status:"ProfileInfo_status__3hJBy",wrapperStatus:"ProfileInfo_wrapperStatus__1voON"}},296:function(e,t,a){e.exports={posts:"MyPosts_posts__2Inyp",postsBlock:"MyPosts_postsBlock__Qc36M"}},297:function(e,t,a){e.exports={item:"Post_item__38eC3",iconUser:"Post_iconUser__3gonP",like:"Post_like__1cxbK",likeText:"Post_likeText__G4_Kw"}},298:function(e,t,a){e.exports=a.p+"static/media/like.8d818e4e.svg"},299:function(e,t,a){"use strict";a.r(t);var s=a(34),n=a(35),o=a(37),r=a(36),u=a(38),c=a(0),i=a.n(c),l=a(294),p=a.n(l),m=a(40),f=a(128),d=function(e){var t=Object(c.useState)(!1),a=Object(f.a)(t,2),s=a[0],n=a[1],o=Object(c.useState)(e.status),r=Object(f.a)(o,2),u=r[0],l=r[1];Object(c.useEffect)(function(){l(e.status)},[e.status]);return i.a.createElement("div",null,!s&&i.a.createElement("div",{className:p.a.wrapperStatus},i.a.createElement("span",{className:p.a.status,onDoubleClick:function(){n(!0)}}," ",e.status||"---------","  ")),s&&i.a.createElement("div",null,i.a.createElement("input",{value:u,onChange:function(e){l(e.currentTarget.value)},autoFocus:!0,onBlur:function(){n(!1),e.updateStatus(u)}})))},b=function(e){var t=e.profile,a=e.status,s=e.updateStatus;return t?i.a.createElement("div",null,i.a.createElement("div",{className:p.a.descriptionBlock},i.a.createElement("img",{src:t.photos.large}),i.a.createElement(d,{status:a,updateStatus:s}))):i.a.createElement(m.a,null)},E=a(296),h=a.n(E),_=a(297),v=a.n(_),P=a(298),g=a.n(P),k=function(e){return i.a.createElement("div",{className:v.a.item},i.a.createElement("img",{className:v.a.iconUser,src:"https://avatars.mds.yandex.net/get-pdb/812271/11fbe7bf-4689-4f95-839f-9451e3d26c0a/s375",alt:""}),e.message,i.a.createElement("div",null,i.a.createElement("span",{className:v.a.likeText},i.a.createElement("img",{className:v.a.like,src:g.a})," ",e.likesCount)))},j=a(126),O=a(127),S=a(56),w=a(66),x=i.a.memo(function(e){var t=e.posts.map(function(e){return i.a.createElement(k,{key:e.id,message:e.message,likesCount:e.likesCount})});i.a.createRef();return i.a.createElement("div",{className:h.a.postsBlock},i.a.createElement("h3",{className:h.a.postsBlock}," My posts "),i.a.createElement(y,{onSubmit:function(t){e.addPost(t.newPostText)}}),i.a.createElement("div",{className:h.a.posts},t))}),N=Object(S.a)(50),y=Object(O.a)({form:"AddNewPostForm"})(function(e){return i.a.createElement("form",{onSubmit:e.handleSubmit},i.a.createElement("div",null,i.a.createElement(j.a,{component:w.b,placeholder:"Post message",name:"newPostText",validate:[S.b,N]})),i.a.createElement("div",null,i.a.createElement("button",null,"Add post")))}),B=x,I=a(12),T=a(93),C=Object(I.b)(function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}},function(e){return{addPost:function(t){e(Object(T.a)(t))}}})(B),U=function(e){return i.a.createElement("div",null,i.a.createElement(b,{profile:e.profile,status:e.status,updateStatus:e.updateStatus}),i.a.createElement(C,null),"   ")},M=(a(96),a(29)),A=(a(17),a(7)),J=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(n.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUsersProfile(e),this.props.getStatus(e)}},{key:"render",value:function(){return i.a.createElement(U,Object.assign({},this.props,{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),t}(i.a.Component);t.default=Object(A.d)(Object(I.b)(function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}},{getUsersProfile:T.d,getStatus:T.c,updateStatus:T.e}),M.f)(J)}}]);
//# sourceMappingURL=3.373d8c2c.chunk.js.map