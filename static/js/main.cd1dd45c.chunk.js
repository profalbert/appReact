(window["webpackJsonpreact-kabzda-1"]=window["webpackJsonpreact-kabzda-1"]||[]).push([[1],{138:function(e,t,r){e.exports=r(227)},19:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"d",(function(){return g})),r.d(t,"b",(function(){return b})),r.d(t,"c",(function(){return v})),r.d(t,"e",(function(){return E}));var n=r(3),a=r.n(n),o=r(6),c=r(12),s=r(5),u=r(31);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(r,!0).forEach((function(t){Object(c.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var f={userId:null,email:null,login:null,isAuth:!1,captchaUrl:null,photos:null,API_KEY:null},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"auth/SET_USER_DATA":case"auth/GET_CAPTCHA_SUCCESS":case"auth/SET_PHOTOS_ME_SUCCESS":return l({},e,{},t.payload);default:return e}},d=function(e,t,r,n,a,o){return{type:"auth/SET_USER_DATA",payload:{userId:e,email:t,login:r,isAuth:n,captchaUrl:a,photos:o}}},m=function(e){return{type:"auth/GET_CAPTCHA_SUCCESS",payload:{captchaUrl:e}}},h=function(e){return{type:"auth/SET_PHOTOS_ME_SUCCESS",payload:{photos:e}}},g=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(r){var n,o,c,u,i;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.me(e);case 2:0===(n=t.sent).data.resultCode&&(o=n.data.data,c=o.id,u=o.email,i=o.login,r(_(u)).then(r(d(c,u,i,!0,null)),r(E(c,!0))));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},b=function(e,t,r,n,c){return function(){var i=Object(o.a)(a.a.mark((function o(i){var l,f,p;return a.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,s.a.login(e,t,r,n,c);case 2:0===(l=a.sent).data.resultCode?i(g(!0)):(10===l.data.resultCode&&i(O()),f=l.data.messages.length>0?l.data.messages[0]:"Some error",p=Object(u.b)("login",{_error:f}),i(p));case 4:case"end":return a.stop()}}),o)})));return function(e){return i.apply(this,arguments)}}()},v=function(){return function(){var e=Object(o.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.logout();case 2:0===e.sent.data.resultCode&&t(d(null,null,null,!1,null,null));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},O=function(){return function(){var e=Object(o.a)(a.a.mark((function e(t){var r,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.c.getCaptchaUrl();case 2:r=e.sent,n=r.data.url,t(m(n));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},E=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return function(){var r=Object(o.a)(a.a.mark((function r(n){var o;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,s.a.photoMe(e,t);case 2:o=r.sent,n(h(o.data.photos));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},_=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(r){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=null,"alb.adm.ru@gmail.com"===e?n="2f32f390-ae96-4e22-896c-29147e6b5143":"siseros589@mailhub.pro"===e&&(n="f4f61e33-1fba-45aa-93ff-8559cf05e371"),Object(s.d)(n);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},221:function(e,t,r){},222:function(e,t,r){},227:function(e,t,r){"use strict";r.r(t);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var n=r(18),a=r(63),o=r(77),c={},s=r(30),u=r(19),i=r(12);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(r,!0).forEach((function(t){Object(i.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var p={initialized:!1},d=r(85),m=r(84),h=Object(n.c)({profilePage:a.c,dialogsPage:o.a,sidebar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c;arguments.length>1&&arguments[1];return e},usersPage:s.g,auth:u.a,form:m.a,app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"app/INITIALIZED_SUCCESS":return f({},e,{initialized:!0});default:return e}}}),g=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||n.d,b=Object(n.e)(h,g(Object(n.a)(d.a)));window.__store__=b;var v=b,O=r(0),E=r.n(O),_=r(43),w=r.n(_),y=(r(221),r(57)),P=r(58),j=r(61),S=r(59),U=r(62),k=(r(222),r(60)),C=r(24),T=r.n(C),I=r(23),N=r(7),x=r(28),D=r(68),A=r.n(D),L=function(e){return E.a.createElement("header",{className:T.a.header},!e.isAuth&&E.a.createElement(I.a,{to:"/login"}),e.isAuth?!e.photosMe&&E.a.createElement("div",{className:T.a.headerPreloaderBlock},E.a.createElement(x.a,null))||E.a.createElement("div",{className:T.a.loginBlock},E.a.createElement(N.b,{className:T.a.headerImgIconA,to:"/profile"}," ",E.a.createElement("img",{src:null!==e.photosMe.small?e.photosMe.small:A.a,alt:"header-img"})," "),E.a.createElement("div",{className:T.a.loginBlockLine}," - ")," ",E.a.createElement(N.b,{to:"/profile"},e.login)):E.a.createElement("div",null),E.a.createElement("div",{className:T.a.logoutBlock},e.isAuth?E.a.createElement("div",null,E.a.createElement("button",{className:T.a.headerButton,onClick:function(){e.logout()}},"Logout")):E.a.createElement(N.b,{to:"/login"},"Login")))},B=r(26),G={logout:u.c,setPhotosMeThunk:u.e},M=Object(B.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login,authorizedUserId:e.auth.userId,photosMe:e.auth.photos}}),G)((function(e){var t=Object(O.useState)(e.photosMe),r=Object(k.a)(t,2),n=r[0],a=r[1],o=e.setPhotosMeThunk;return Object(O.useEffect)((function(){n||(a(e.photosMe),o(e.authorizedUserId,!0))}),[e.photosMe,n,e.authorizedUserId,o]),E.a.createElement(L,e)})),F=r(8),R=r.n(F),z=function(){return E.a.createElement("nav",{className:R.a.nav},E.a.createElement("ul",null,E.a.createElement("li",{className:"".concat(R.a.item)},E.a.createElement(N.b,{activeClassName:R.a.active,to:"/profile"},"Profile")),E.a.createElement("li",{className:R.a.item},E.a.createElement(N.b,{activeClassName:R.a.active,to:"/dialogs"},"Messages")),E.a.createElement("li",{className:R.a.item},E.a.createElement(N.b,{activeClassName:R.a.active,to:"/users"},"Users")),E.a.createElement("li",{className:R.a.item},E.a.createElement(N.b,{activeClassName:R.a.active,to:"/news"},"News")),E.a.createElement("li",{className:R.a.item},E.a.createElement(N.b,{activeClassName:R.a.active,to:"/music"},"Music")),E.a.createElement("li",{className:R.a.item},E.a.createElement(N.b,{activeClassName:R.a.active,to:"/settings"},"Settings"))))},H=r(51),W=r.n(H),V=function(e){return function(t){var r=E.a.createElement("div",{className:W.a.suspensePreloaderBlock},E.a.createElement("div",{className:W.a.suspensePreloader},E.a.createElement(x.a,null)));return E.a.createElement(E.a.Suspense,{fallback:r},E.a.createElement(e,t))}},Y=E.a.lazy((function(){return Promise.all([r.e(0),r.e(4)]).then(r.bind(null,301))})),Z=E.a.lazy((function(){return Promise.all([r.e(0),r.e(5)]).then(r.bind(null,303))})),K=E.a.lazy((function(){return r.e(7).then(r.bind(null,302))})),X=E.a.lazy((function(){return Promise.all([r.e(0),r.e(6)]).then(r.bind(null,300))})),Q=function(e){function t(){var e,r;Object(y.a)(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(r=Object(j.a)(this,(e=Object(S.a)(t)).call.apply(e,[this].concat(a)))).catchAllUnhandleErrors=function(e,t){console.log("Error! Reason: "+e)},r}return Object(U.a)(t,e),Object(P.a)(t,[{key:"componentDidMount",value:function(){this.props.initializeApp(),window.addEventListener("unhandledrejection",this.catchAllUnhandleErrors)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("unhandledrejection",this.catchAllUnhandleErrors)}},{key:"render",value:function(){return this.props.initialized?E.a.createElement("div",{className:"appMainWrapperContent"},E.a.createElement("div",{className:"appTextMobileBlockWrap"},E.a.createElement("div",{className:"appTextMobileBlock"},E.a.createElement("div",{className:"appTextMobile"},"Hello, this site is not available for viewing on tablet or mobile devices. ",E.a.createElement("div",null,"If you want to still see this site, access it through your computer! ",E.a.createElement("span",null,":)"))," "))),E.a.createElement("div",{className:"app-wrapper"},E.a.createElement(M,null),E.a.createElement(z,null),E.a.createElement("div",{className:"app-wrapper-content"},E.a.createElement(I.d,null,E.a.createElement(I.a,{exact:!0,from:"/",to:"/profile"}),E.a.createElement(I.b,{path:"/profile/:userId?",render:V((function(){return E.a.createElement(Y,null)}))}),E.a.createElement(I.b,{path:"/dialogs",render:V((function(){return E.a.createElement(Z,null)}))}),E.a.createElement(I.b,{path:"/users",render:V((function(){return E.a.createElement(K,null)}))}),E.a.createElement(I.b,{path:"/login",render:V((function(){return E.a.createElement(X,null)}))}),E.a.createElement(I.b,{path:"*",render:function(){return E.a.createElement("div",{className:"error404"},"404: NOT FOUND")}}))))):E.a.createElement("div",{className:"appPreloaderBlock"},E.a.createElement("div",{className:"appPreloader"},E.a.createElement(x.a,null)))}}]),t}(E.a.Component),J={initializeApp:function(){return function(e){var t=e(Object(u.d)(!0));Promise.all([t]).then((function(){e({type:"app/INITIALIZED_SUCCESS"})}))}}},q=Object(n.d)(I.g,Object(B.b)((function(e){return{initialized:e.app.initialized}}),J))(Q);w.a.render(E.a.createElement(N.a,null,E.a.createElement(B.a,{store:v},E.a.createElement(q,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},24:function(e,t,r){e.exports={header:"Header_header__2591E",headerButton:"Header_headerButton__2SlBb",loginBlock:"Header_loginBlock__21Qml",loginBlockLine:"Header_loginBlockLine__3lZMK",logoutBlock:"Header_logoutBlock__2fHrk",headerImgIconA:"Header_headerImgIconA__1LZn8",headerPreloaderBlock:"Header_headerPreloaderBlock__tz0kN"}},28:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(88),c=r.n(o),s=r(89),u=r.n(s);t.a=function(e){return a.a.createElement("div",{className:c.a.loader},a.a.createElement("img",{src:u.a,alt:"preloader"}))}},30:function(e,t,r){"use strict";var n=r(3),a=r.n(n),o=r(6),c=r(29),s=r(12),u=r(5);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var l=function(e,t,r,n){return e.map((function(e){return e[r]===t?function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(r,!0).forEach((function(t){Object(s.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e,{},n):e}))};function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(r,!0).forEach((function(t){Object(s.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}r.d(t,"g",(function(){return h})),r.d(t,"c",(function(){return v})),r.d(t,"e",(function(){return O})),r.d(t,"d",(function(){return E})),r.d(t,"b",(function(){return _})),r.d(t,"a",(function(){return y})),r.d(t,"f",(function(){return P}));var d="users/FOLLOW",m={users:[],pageSize:5,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return p({},e,{users:l(e.users,t.userId,"id",{followed:!0})});case"users/UNFOLLOW":return p({},e,{users:l(e.users,t.userId,"id",{followed:!1})});case"users/SET_USERS":return p({},e,{users:t.users});case"users/SET_CURRENT_PAGE":return p({},e,{currentPage:t.currentPage});case"users/SET_TOTAL_USERS_COUNT":return p({},e,{totalUsersCount:t.count});case"users/TOGGLE_IS_FETCHING":return p({},e,{isFetching:t.isFetching});case"users/TOGGLE_IS_FOLLOWING_PROGRESS":return p({},e,{followingInProgress:t.followingInProgress?[].concat(Object(c.a)(e.followingInProgress),[t.userId]):[e.followingInProgress.filter((function(e){return e!==t.userId}))]});default:return e}},g=function(e){return{type:d,userId:e}},b=function(e){return{type:"users/UNFOLLOW",userId:e}},v=function(e){return{type:"users/SET_CURRENT_PAGE",currentPage:e}},O=function(e){return{type:"users/TOGGLE_IS_FETCHING",isFetching:e}},E=function(e,t){return{type:"users/TOGGLE_IS_FOLLOWING_PROGRESS",followingInProgress:e,userId:t}},_=function(e,t,r){return function(){var n=Object(o.a)(a.a.mark((function n(o){var c;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o(O(!0)),o(v(e)),n.next=4,u.e.getUsers(e,t,r);case 4:c=n.sent,o({type:"users/SET_USERS",users:c.items}),o({type:"users/SET_TOTAL_USERS_COUNT",count:c.totalCount}),o(O(!1));case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},w=function(){var e=Object(o.a)(a.a.mark((function e(t,r,n,o){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(E(!0,r)),e.next=3,n(r);case 3:0===e.sent.data.resultCode&&(t(o(r)),t(E(!1,r)));case 5:case"end":return e.stop()}}),e)})));return function(t,r,n,a){return e.apply(this,arguments)}}(),y=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(r){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:w(r,e,u.e.follow.bind(u.e),g);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},P=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(r){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:w(r,e,u.e.unfollow.bind(u.e),b);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},5:function(e,t,r){"use strict";r.d(t,"d",(function(){return s})),r.d(t,"e",(function(){return u})),r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return l})),r.d(t,"c",(function(){return f}));var n=r(52),a=null,o=function(){return{baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"".concat(a)}}},c=n.create(o()),s=function(e){return a=e,c=n.create(o())},u={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return c.get("users?page=".concat(e,"&count=").concat(t),{withCredentials:r}).then((function(e){return e.data}))},follow:function(e){return c.post("follow/".concat(e))},unfollow:function(e){return c.delete("follow/".concat(e))}},i={me:function(e){return c.get("auth/me",{withCredentials:e})},photoMe:function(e,t){return c.get("/profile/".concat(e),{withCredentials:t})},login:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=arguments.length>3?arguments[3]:void 0,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;return c.post("auth/login",{email:e,password:t,rememberMe:r,withCredentials:n,captcha:a})},logout:function(){return c.delete("auth/login")}},l={getProfile:function(e){return c.get("profile/".concat(e))},getStatus:function(e){return c.get("profile/status/".concat(e))},updateStatus:function(e){return c.put("profile/status/",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),c.put("profile/photo/",t,{headers:{"Content-Type":"multipart/form-data"}})},saveProfile:function(e){return c.put("profile/",e)}},f={getCaptchaUrl:function(){return c.get("security/get-captcha-url")}}},51:function(e,t,r){e.exports={userPhoto:"Users_userPhoto__2uK85",User:"Users_User__dUQa0",UserImg:"Users_UserImg__qybXb",UserInfo:"Users_UserInfo__4XFcy",UserName:"Users_UserName__3dnxM",UserStatus:"Users_UserStatus__GQiVF",UserFollow:"Users_UserFollow__3ZwaE",UserFollowUnfol:"Users_UserFollowUnfol__37z_j",UserFollowFol:"Users_UserFollowFol__MAeLW",usersPreloader:"Users_usersPreloader__2_YUI",usersPreloaderBlock:"Users_usersPreloaderBlock__Ly-nY",usersWrapper:"Users_usersWrapper__3e7c2",suspensePreloaderBlock:"Users_suspensePreloaderBlock__2niDh",suspensePreloader:"Users_suspensePreloader__Bmf8p"}},63:function(e,t,r){"use strict";r.d(t,"c",(function(){return g})),r.d(t,"a",(function(){return b})),r.d(t,"f",(function(){return E})),r.d(t,"b",(function(){return _})),r.d(t,"g",(function(){return w})),r.d(t,"d",(function(){return y})),r.d(t,"e",(function(){return P}));var n=r(3),a=r.n(n),o=r(6),c=r(29),s=r(12),u=r(5),i=r(31),l=r(30),f=r(19);function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(r,!0).forEach((function(t){Object(s.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var m="profile/ADD-POST",h={posts:[{id:1,message:"Hi, how are you?",likesCount:12},{id:2,message:"It is my first post",likesCount:22},{id:3,message:"Good",likesCount:14},{id:4,message:"BB",likesCount:16}],profile:null,status:""},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:var r={id:e.posts.length+1,message:t.newPostText,likesCount:0};return d({},e,{posts:[].concat(Object(c.a)(e.posts),[r]),newPostText:""});case"profile/SET_USER_PROFILE":return d({},e,{profile:t.profile});case"profile/SET_STATUS":return d({},e,{status:t.status});case"profile/DELETE_POST":return d({},e,{posts:e.posts.filter((function(e){return e.id!==t.postId}))});case"profile/SAVE_PHOTO_SUCCESS":return d({},e,{profile:d({},e.profile,{photos:t.photos})});default:return e}},b=function(e){return{type:m,newPostText:e}},v=function(e){return{type:"profile/SET_USER_PROFILE",profile:e}},O=function(e){return{type:"profile/SET_STATUS",status:e}},E=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(r){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r(Object(l.e)(!0)),t.next=3,u.b.getProfile(e).catch((function(e){return r(v(e.data)),r(Object(l.e)(!1)),Promise.reject(e.response.data.message)}));case 3:n=t.sent,r(v(n.data)),r(Object(l.e)(!1));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},_=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(r){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.getStatus(e);case 2:n=t.sent,r(O(n.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},w=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(r){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.b.updateStatus(e);case 3:if(0!==(n=t.sent).data.resultCode){t.next=8;break}r(O(e)),t.next=9;break;case 8:return t.abrupt("return",Promise.reject(n.data.messages[0]));case 9:t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()},y=function(e,t){return function(){var r=Object(o.a)(a.a.mark((function r(n){var o;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,u.b.savePhoto(e);case 2:0===(o=r.sent).data.resultCode&&(n({type:"profile/SAVE_PHOTO_SUCCESS",photos:o.data.data.photos}),n(Object(f.e)(t,!0)));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},P=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(r,n){var o,c,s;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=n().auth.userId,t.next=3,u.b.saveProfile(e);case 3:if(0!==(c=t.sent).data.resultCode){t.next=8;break}r(E(o)),t.next=11;break;case 8:return s=Object(i.b)("edit-profile",{_error:"Error! Please check the entered data!"}),r(s),t.abrupt("return",Promise.reject(c.data.messages[0]));case 11:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}()}},68:function(e,t,r){e.exports=r.p+"static/media/user.316d47a9.svg"},77:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return i}));var n=r(29),a=r(12);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(r,!0).forEach((function(t){Object(a.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var s={messagesData:[{id:1,message:"Hi"},{id:2,message:"How are you doing?"},{id:3,message:"GG"},{id:4,message:"GG"},{id:5,message:"GG"},{id:6,message:"GG"}],dialogsData:[{id:1,name:"Dimych"},{id:2,name:"Andrey"},{id:3,name:"Sveta"},{id:4,name:"Sasha"},{id:5,name:"Valera"},{id:6,name:"Albert"}]},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"dialogs/SEND_MESSAGE":var r=t.newMessageBody;return c({},e,{messagesData:[].concat(Object(n.a)(e.messagesData),[{id:e.messagesData.length+1,message:r}])});default:return e}},i=function(e){return{type:"dialogs/SEND_MESSAGE",newMessageBody:e}}},8:function(e,t,r){e.exports={nav:"Navbar_nav__1kCje",item:"Navbar_item__30etw",active:"Navbar_active__Iz_6D"}},88:function(e,t,r){e.exports={loader:"Preloader_loader__29Yw2"}},89:function(e,t,r){e.exports=r.p+"static/media/preloader.eb09f74a.svg"}},[[138,2,3]]]);
//# sourceMappingURL=main.cd1dd45c.chunk.js.map