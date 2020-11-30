(this["webpackJsonpspacex-missions-app"]=this["webpackJsonpspacex-missions-app"]||[]).push([[0],{122:function(n,e,t){n.exports={DotLoading:"DotLoading_DotLoading__2UMnr","lds-ellipsis1":"DotLoading_lds-ellipsis1__2FFx7","lds-ellipsis2":"DotLoading_lds-ellipsis2__1jVz0","lds-ellipsis3":"DotLoading_lds-ellipsis3__24Uxw"}},141:function(n,e,t){},142:function(n,e,t){},161:function(n,e,t){"use strict";t.r(e);var r=t(1),i=t(0),c=t.n(i),a=t(18),o=t.n(a),s=(t(141),t(142),t(17)),d=t(197),j=t(52),u=t(6),l=t(7);function b(){var n=Object(u.a)(["\n  margin: 0 12px;\n  color: blue;\n  text-decoration: none;\n  &:hover {\n    text-decoration: underline;\n  }\n  &:active {\n    color: #ff8c00;\n  }\n"]);return b=function(){return n},n}function x(){var n=Object(u.a)(["\n  margin: 3px;\n"]);return x=function(){return n},n}function h(){var n=Object(u.a)(["\n  margin: 3px;\n"]);return h=function(){return n},n}function f(){var n=Object(u.a)(["\n  text-align: center;\n"]);return f=function(){return n},n}function O(){var n=Object(u.a)(["\n  text-align: center;\n"]);return O=function(){return n},n}function p(){var n=Object(u.a)(["\n  text-align: center;\n  color: white;\n  margin: 75px;\n\n  @media (max-width: 500px) {\n    margin: 30px;\n  }\n"]);return p=function(){return n},n}var m=l.a.h1(p()),g=l.a.h1(O()),v=l.a.h2(f()),w=Object(l.a)(g)(h()),k=Object(l.a)(v)(x()),y=l.a.a(b()),_=t(42),F=t(194),L=t(195),C=t(196),I=t(187);function M(){var n=Object(u.a)(["\n  text-align: center;\n"]);return M=function(){return n},n}function S(){var n=Object(u.a)(["\n  margin: 6px;\n  padding: 6px;\n\n  @media (max-width: 500px) {\n    margin: 2px;\n    padding: 2px;\n  }\n"]);return S=function(){return n},n}function A(){var n=Object(u.a)(["\n  align-items: center;\n"]);return A=function(){return n},n}function T(){var n=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return T=function(){return n},n}function D(){var n=Object(u.a)(["\n  justify-content: space-around;\n"]);return D=function(){return n},n}function B(){var n=Object(u.a)(["\n  justify-content: space-between;\n"]);return B=function(){return n},n}function E(){var n=Object(u.a)(["\n  justify-content: center;\n"]);return E=function(){return n},n}function z(){var n=Object(u.a)(["\n  display: flex;\n  align-items: center;\n"]);return z=function(){return n},n}var N=l.a.div(z()),P=Object(l.a)(N)(E()),R=Object(l.a)(N)(B()),V=Object(l.a)(N)(D()),G=l.a.div(T()),W=Object(l.a)(G)(A()),U=l.a.div(S());Object(l.a)(U)(M());function $(){var n=Object(u.a)(["\n  margin: 0px;\n  border-radius: 6px;\n  background-color: ",";\n  padding: 6px;\n\n  @media (max-width: 500px) {\n    margin: auto;\n  }\n"]);return $=function(){return n},n}function q(){var n=Object(u.a)(["\n  @media (max-width: 500) {\n    order: 2;\n  }\n"]);return q=function(){return n},n}function J(){var n=Object(u.a)(["\n  height: 100px;\n  @media (max-width: 500px) {\n    order: 1;\n    height: 75px;\n    margin-bottom: 12px;\n  }\n"]);return J=function(){return n},n}function Q(){var n=Object(u.a)(["\n  @media (max-width: 500px) {\n    flex-direction: column;\n  }\n"]);return Q=function(){return n},n}function H(){var n=Object(u.a)(["\n  margin-bottom: 24px;\n  width: 50%;\n  max-width: 50%;\n  &: hover {\n    transform: scale(1.02);\n    -webkit-transition: 500ms;\n  }\n\n  @media (max-width: 500px) {\n    width: 90%;\n    max-width: 90%;\n  }\n"]);return H=function(){return n},n}var X=Object(l.a)(I.a)(H()),K=Object(l.a)(R)(Q()),Y=l.a.img(J()),Z=l.a.h1(q()),nn=l.a.h4($(),(function(n){return n.isFavourite?"#ff8c00":"red"})),en=t(198),tn=t(191),rn=t(193),cn=t(124),an=t.n(cn),on=t(192),sn=t(32);function dn(){var n=Object(u.a)(["\n  query GetLaunch($id: ID!) {\n    launch(id: $id) {\n      links {\n        article: article_link\n        wikipedia\n        image: mission_patch_small\n        presskit\n        video: video_link\n        reddit: reddit_launch\n        launch_images: flickr_images\n      }\n      rocket {\n        details: rocket {\n          id\n          height {\n            meters\n          }\n          mass {\n            kg\n          }\n          name\n          description\n        }\n      }\n      launch_date_local\n      details\n      name: mission_name\n    }\n  }\n"]);return dn=function(){return n},n}function jn(){var n=Object(u.a)(["\n  query GetLaunches($offset: Int!, $limit: Int!) {\n    launches(offset: $offset, limit: $limit) {\n      name: mission_name\n      links {\n        image: mission_patch_small\n      }\n      details\n      id\n    }\n  }\n"]);return jn=function(){return n},n}var un=Object(sn.gql)(jn()),ln=Object(sn.gql)(dn()),bn=t(41);function xn(){var n=Object(u.a)(["\n  margin-left: 18px;\n  color: white;\n  font-size: 1.7rem;\n  text-shadow: 2px 2px 3px rgba(255, 140, 0, 0.75);\n  font-style: italic;\n  font-weight: bold;\n\n  @media (max-width: 500px) {\n    display: none;\n  }\n"]);return xn=function(){return n},n}function hn(){var n=Object(u.a)(["\n  height: 40px;\n  width: 40px;\n\n  @media (max-width: 500px) {\n    height: 36px;\n    width: 36px;\n  }\n"]);return hn=function(){return n},n}function fn(){var n=Object(u.a)(["\n  margin-left: 12px;\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  cursor: pointer;\n\n  @media (max-width: 500px) {\n    // margin-left: 3px;\n  }\n"]);return fn=function(){return n},n}function On(){var n=Object(u.a)(["\n  z-index: 100;\n  width: 100%;\n  display: flex;\n  margin: auto;\n  justify-content: space-between;\n  align-items: center;\n  position: fixed;\n  height: 64px;\n  color: white;\n  background-color: rgba(53, 63, 98, 1);\n  box-shadow: 0px 3px 5px 2px rgba(255, 140, 0, 0.5);\n\n  @media (max-width: 500px) {\n    height: 56px;\n  }\n"]);return On=function(){return n},n}var pn=l.a.div(On()),mn=Object(l.a)(bn.b)(fn()),gn=l.a.img(hn()),vn=l.a.p(xn()),wn=t.p+"static/media/rocket.88c7d7d6.svg";function kn(){var n=Object(u.a)(["\n  color: white;\n  text-decoration: none;\n  width: 100%;\n  font-size: 1.4rem;\n  font-style: italic;\n  border-radius: 12px;\n  padding: 6px 24px;\n  box-sizing: border-box;\n  display: block;\n  &:hover,\n  &:active,\n  &.active {\n    background-color: rgba(255, 140, 0, 1);\n    transition: 750ms ease-out;\n  }\n\n  @media (max-width: 500px) {\n    font-size: 1.1em;\n    padding: 6px 12px;\n  }\n"]);return kn=function(){return n},n}function yn(){var n=Object(u.a)(["\n  margin: 6px;\n  box-sizing: border-box;\n  display: block;\n  width: 100%;\n  background-color: rgba(255, 255, 255, 0);\n\n  @media (max-width: 500px) {\n    margin: 12px;\n  }\n"]);return yn=function(){return n},n}var _n=l.a.li(yn()),Fn=Object(l.a)(bn.b)(kn()),Ln=function(n){return Object(r.jsx)(_n,{children:Object(r.jsx)(Fn,{exact:!0,to:n.link,children:n.children})})};function Cn(){var n=Object(u.a)(["\n  margin: 0;\n  padding: 0;\n  flex-flow: row;\n  list-style: none;\n  display: flex;\n  align-items: center;\n  height: 100%;\n"]);return Cn=function(){return n},n}var In=l.a.ul(Cn()),Mn=function(){return Object(r.jsxs)(In,{children:[Object(r.jsx)(Ln,{link:"/SpacexMissionsApp/",children:"Missions"}),Object(r.jsx)(Ln,{link:"/SpacexMissionsApp/favourites",children:"Favourites"})]})},Sn=function(n){return Object(r.jsxs)(pn,{children:[Object(r.jsxs)(mn,{to:"/SpacexMissionsApp/",children:[Object(r.jsx)(gn,{src:wn}),Object(r.jsx)(vn,{children:"SpaceX Missions"})]}),Object(r.jsx)(Mn,{})]})};function An(){var n=Object(u.a)(["\n  &.inactive {\n    display: none;\n  }\n  &.active {\n    display: block;\n  }\n"]);return An=function(){return n},n}var Tn=l.a.div(An()),Dn=function(n){var e=n.index,t=n.activeIndex,i=n.children;return Object(r.jsx)(Tn,{className:e===t?"active":"inactive",children:i},e)},Bn=t(190);function En(){var n=Object(u.a)(["\n  text-transform: none;\n"]);return En=function(){return n},n}function zn(){var n=Object(u.a)(["\n  width: 14px;\n  height: 14px;\n  margin: 4px;\n  border-radius: 50%;\n  cursor: pointer;\n  &.active {\n    background-color: #ff8c00;\n  }\n  &.inactive {\n    background-color: #826b57;\n  }\n"]);return zn=function(){return n},n}function Nn(){var n=Object(u.a)(["\n  margin-top: 24px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  @media (max-width: 500px) {\n    justify-content: center;\n  }\n"]);return Nn=function(){return n},n}function Pn(){var n=Object(u.a)(["\n  // width: 35%;\n  // max-width: 35%;\n  // max-height: 50%;\n\n  width: 750px;\n\n  @media (max-width: 500px) {\n    // width: 90%;\n    // max-width: 90%;\n    width: unset;\n  }\n"]);return Pn=function(){return n},n}var Rn=l.a.div(Pn()),Vn=l.a.div(Nn()),Gn=l.a.div(zn()),Wn=Object(l.a)(Bn.a)(En()),Un=function(n){for(var e=Object(i.useState)(0),t=Object(_.a)(e,2),c=t[0],a=t[1],o=[],s=function(n){o.push(Object(r.jsx)(Gn,{className:c===n?"active":"inactive",onClick:function(){return e=n,console.log("dot click"),void a(e);var e}},n))},d=0;d<n.length;d++)s(d);return Object(r.jsxs)(Rn,{children:[n.children.map((function(n,e){return Object(r.jsx)(Dn,{activeIndex:c,index:e,children:n},e)})),Object(r.jsxs)(Vn,{children:[Object(r.jsx)(Wn,{color:"primary",onClick:function(){var e=c;e=e<1?n.length-1:e-=1,a(e)},children:"Prev"}),Object(r.jsx)("div",{style:{display:"flex"},children:o}),Object(r.jsx)(Wn,{color:"primary",onClick:function(){var e=c;e=e===n.length-1?0:e+=1,a(e)},children:"Next"})]})]})},$n=function(n){return Object(r.jsx)(i.Fragment,{children:n.children})},qn=t(85),Jn=t.n(qn),Qn=t(121),Hn=t.n(Qn),Xn=function(n){return Object(r.jsxs)(W,{style:{color:"white",marginBottom:"24px"},children:[Object(r.jsx)(Hn.a,{style:{fontSize:"200px"},color:"primary"}),Object(r.jsx)(g,{children:"There is no more missions"}),Object(r.jsx)(Bn.a,{variant:"contained",color:"primary",size:"large",startIcon:Object(r.jsx)(Jn.a,{}),endIcon:Object(r.jsx)(Jn.a,{}),onClick:n.onBackToTop,style:{color:"white",fontWeight:"bold",textTransform:"none"},children:"Back to top"})]})},Kn=t.p+"static/media/wave_true.415ee751.svg";function Yn(){var n=Object(u.a)(["\n  height: 40px;\n  @media (max-width: 500px) {\n    height: 35px;\n  }\n"]);return Yn=function(){return n},n}function Zn(){var n=Object(u.a)(["\n  letter-spacing: 2px;\n  @media (max-width: 500px) {\n    font-size: 1.3em;\n  }\n"]);return Zn=function(){return n},n}function ne(){var n=Object(u.a)(["\n  @media (max-width: 500px) {\n    flex-direction: column;\n  }\n"]);return ne=function(){return n},n}function ee(){var n=Object(u.a)(["\n  background-color: #ff8c00;\n  padding: 12px;\n"]);return ee=function(){return n},n}function te(){var n=Object(u.a)(["\n  margin: 0;\n  height: 80px;\n  background-image: url(",");\n  background-repeat: no-repeat;\n\n  @media (max-width: 500px) {\n    background-size: 100%;\n    background-repeat: repeat-x;\n    height: 10px;\n  }\n"]);return te=function(){return n},n}function re(){var n=Object(u.a)(["\n  color: white;\n"]);return re=function(){return n},n}var ie=l.a.div(re()),ce=l.a.div(te(),Kn),ae=l.a.div(ee()),oe=Object(l.a)(P)(ne()),se=l.a.h2(Zn()),de=l.a.img(Yn()),je=t.p+"static/media/linkedin.bbbc8086.svg",ue=t.p+"static/media/github.711608bd.svg",le=function(){var n=Object(i.useState)(!1),e=Object(_.a)(n,2),t=e[0],c=e[1];return Object(r.jsxs)(i.Fragment,{children:[Object(r.jsx)(en.a,{maxWidth:"lg",open:t,onClose:function(){return c(!1)},children:Object(r.jsx)(tn.a,{children:Object(r.jsxs)(W,{children:[Object(r.jsx)(v,{children:"Authors"}),Object(r.jsxs)("div",{children:["Icons made by",Object(r.jsx)("a",{href:"https://www.flaticon.com/authors/google",title:"Google",children:"Google"}),"from",Object(r.jsx)("a",{href:"https://www.flaticon.com/",title:"Flaticon",children:"www.flaticon.com"})]}),Object(r.jsx)("br",{}),Object(r.jsxs)("div",{children:["Icons made by",Object(r.jsx)("a",{href:"https://www.flaticon.com/authors/dave-gandy",title:"Dave Gandy",children:"Dave Gandy"}),"from",Object(r.jsx)("a",{href:"https://www.flaticon.com/",title:"Flaticon",children:"www.flaticon.com"})]}),Object(r.jsx)("br",{}),Object(r.jsxs)("div",{children:["Icons made by",Object(r.jsx)("a",{href:"https://www.flaticon.com/authors/freepik",title:"Freepik",children:"Freepik"}),"from",Object(r.jsx)("a",{href:"https://www.flaticon.com/",title:"Flaticon",children:"www.flaticon.com"})]}),Object(r.jsx)("br",{}),Object(r.jsxs)("div",{children:["Icons made by",Object(r.jsx)("a",{href:"https://www.flaticon.com/authors/vectors-market",title:"Vectors Market",children:"Vectors Market"}),"from",Object(r.jsx)("a",{href:"https://www.flaticon.com/",title:"Flaticon",children:"www.flaticon.com"})]})]})})}),Object(r.jsx)(Bn.a,{variant:"outlined",style:{color:"white",fontWeight:"bold",textTransform:"none"},onClick:function(){return c(!0)},children:window.width>=500?"Authors Graphics From Flaticon":"Authors Graphics"})]})},be=function(){return Object(r.jsx)(i.Fragment,{children:Object(r.jsxs)(ie,{children:[Object(r.jsx)(ce,{}),Object(r.jsx)(ae,{children:Object(r.jsxs)(R,{children:[Object(r.jsx)(P,{children:Object(r.jsx)(le,{})}),Object(r.jsxs)(oe,{children:[Object(r.jsx)(se,{style:{letterSpacing:"1px"},children:"Find me in:"}),Object(r.jsxs)(P,{children:[Object(r.jsx)(y,{href:"https://github.com/JakubPilkowski",target:"_blank",rel:"noreferrer",children:Object(r.jsx)(de,{src:ue,height:"40"})}),Object(r.jsx)(y,{href:"https://www.linkedin.com/in/jakub-pi\u0142kowski-4a14341b8/",target:"_blank",rel:"noreferrer",children:Object(r.jsx)(de,{src:je,height:"40"})})]})]})]})})]})})},xe=t(75),he=t.n(xe),fe=function(){return Object(r.jsxs)("div",{className:he.a.LoadingWrapper,children:[Object(r.jsx)("div",{className:he.a.LoadingContent,children:Object(r.jsxs)("div",{className:he.a.LoadingBeanContent,children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{})]})]})}),Object(r.jsx)("h2",{children:"Loading..."})]})},Oe=t(122),pe=t.n(Oe),me=function(){return Object(r.jsxs)("div",{className:pe.a.DotLoading,children:[Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{})]})};function ge(){var n=Object(u.a)(["\n  color: red;\n  background-color: #353f62;\n  border-radius: 24px;\n"]);return ge=function(){return n},n}var ve=Object(l.a)(W)(ge()),we=function(n){var e=n.response,t=e.status,i=e.statusText,c=e.url;return Object(r.jsx)(ve,{children:Object(r.jsxs)(U,{children:[Object(r.jsx)(w,{children:t?"Code: ".concat(t):"No status"}),Object(r.jsx)(k,{children:i?"Text: ".concat(i):"No status text"}),Object(r.jsx)(k,{children:c?"Url: ".concat(c):"No error text"})]})})},ke=function(){return Object(r.jsxs)(i.Fragment,{children:[Object(r.jsx)(m,{children:"Sorry, we dont have page like this"}),Object(r.jsx)(P,{children:Object(r.jsx)(Bn.a,{color:"primary",variant:"contained",style:{textTransform:"none",fontSize:"1rem"},href:"/",children:"Back to main page"})})]})},ye=t.p+"static/media/youtube.5213846a.svg",_e=t.p+"static/media/wikipedia.1c2fe7bb.png",Fe=t.p+"static/media/reddit-logo.ff5d737f.svg",Le=(t(152),t(123));function Ce(){var n=Object(u.a)(["\n  @media (max-width: 500px) {\n    display: none;\n  }\n"]);return Ce=function(){return n},n}function Ie(){var n=Object(u.a)(["\n  height: 50px;\n  @media (max-width: 500px) {\n    height: 40px;\n  }\n"]);return Ie=function(){return n},n}function Me(){var n=Object(u.a)(["\n  @media (max-width: 500px) {\n    margin: auto;\n  }\n"]);return Me=function(){return n},n}var Se=Object(l.a)(U)(Me()),Ae=l.a.img(Ie()),Te=Object(l.a)(W)(Ce()),De=function(n){var e=n.links,t=e.video,c=e.article,a=e.wikipedia,o=e.reddit,s=e.presskit,d=e.launch_images;return Object(r.jsxs)(i.Fragment,{children:[Object(r.jsx)(g,{children:"Additional info"}),Object(r.jsxs)(V,{children:[Object(r.jsxs)(W,{children:[Object(r.jsx)(v,{children:"Sources"}),Object(r.jsxs)(Se,{children:[Object(r.jsx)(y,{href:a,target:"_blank",rel:"noreferrer",children:Object(r.jsx)(Ae,{src:_e,alt:"Wikipedia"})}),Object(r.jsx)(y,{href:t,target:"_blank",rel:"noreferrer",children:Object(r.jsx)(Ae,{src:ye,alt:"Youtube"})}),Object(r.jsx)(y,{href:o,target:"_blank",rel:"noreferrer",children:Object(r.jsx)(Ae,{src:Fe,alt:"Icon"})})]}),Object(r.jsx)("h4",{style:{margin:"6px"},children:"Other links"}),Object(r.jsxs)(U,{children:[Object(r.jsx)(y,{href:c,target:"_blank",rel:"noreferrer",children:"Article"}),Object(r.jsx)(y,{href:s,target:"_blank",rel:"noreferrer",children:"Press Kit"})]})]}),Object(r.jsxs)(Te,{children:[Object(r.jsx)(v,{children:"Photos"}),Object(r.jsx)(Le.Carousel,{autoPlay:!0,infiniteLoop:!0,interval:2e3,showThumbs:!1,showArrows:!1,showIndicators:!1,showStatus:!1,renderThumbs:!1,width:200,children:d.map((function(n,e){return Object(r.jsx)("img",{src:n,height:"200",width:"250",alt:"Rocket launch ".concat(e+1)},e)}))})]})]})]})},Be=function(n){var e=n.click;return Object(r.jsx)(i.Fragment,{children:Object(r.jsxs)(W,{children:[Object(r.jsx)("h1",{children:"Favourites"}),Object(r.jsx)(Wn,{variant:"outlined",color:"primary",style:{marginBottom:"24px"},onClick:e,children:"Add to favourites"})]})})};function Ee(){var n=Object(u.a)(["\n  position: absolute;\n"]);return Ee=function(){return n},n}function ze(){var n=Object(u.a)(["\n  position: relative;\n  justify-content: flex-end;\n"]);return ze=function(){return n},n}function Ne(){var n=Object(u.a)(["\n  @media (max-width: 500px) {\n    text-align: center;\n  }\n"]);return Ne=function(){return n},n}function Pe(){var n=Object(u.a)(["\n  flex: 1;\n"]);return Pe=function(){return n},n}function Re(){var n=Object(u.a)(["\n  flex: 1;\n  @media (max-width: 500px) {\n    flex-direction: column;\n  }\n"]);return Re=function(){return n},n}function Ve(){var n=Object(u.a)(["\n  @media (max-width: 500px) {\n    flex-direction: column;\n  }\n"]);return Ve=function(){return n},n}var Ge=Object(l.a)(R)(Ve()),We=Object(l.a)(V)(Re()),Ue=l.a.div(Pe()),$e=l.a.h3(Ne()),qe=Object(l.a)(W)(ze()),Je=l.a.h4(Ee()),Qe=t.p+"static/media/rocket_height.ba6ab906.svg",He=t.p+"static/media/weight.983d62ff.svg",Xe=function(n){var e=n.details,t=e.name,c=e.description,a=e.height.meters,o=e.mass.kg;return Object(r.jsxs)(i.Fragment,{children:[Object(r.jsx)(g,{children:"Rocket info"}),Object(r.jsxs)(Ge,{children:[Object(r.jsxs)(Ue,{children:[Object(r.jsx)($e,{children:t}),Object(r.jsxs)("p",{children:[Object(r.jsx)("strong",{children:"Description:"})," ",c]})]}),Object(r.jsxs)(We,{children:[Object(r.jsxs)(W,{children:[Object(r.jsxs)(P,{children:[Object(r.jsxs)("h4",{children:[a,"m"]}),Object(r.jsx)("img",{src:Qe,height:"100",alt:"Rocket height"})]}),Object(r.jsx)("h4",{children:"Height"})]}),Object(r.jsxs)(W,{children:[Object(r.jsxs)(qe,{children:[Object(r.jsx)("img",{src:He,height:"100",alt:"Rocket mass"}),Object(r.jsxs)(Je,{children:[Math.round(o/100),"t"]})]}),Object(r.jsx)("h4",{children:"Mass"})]})]})]})]})};function Ke(){var n=Object(u.a)(["\n  @media (max-width: 500px) {\n    margin: 0;\n    text-align: center;\n  }\n"]);return Ke=function(){return n},n}function Ye(){var n=Object(u.a)(["\n  height: 125px;\n  @media (max-width: 500px) {\n    height: 100px;\n  }\n"]);return Ye=function(){return n},n}function Ze(){var n=Object(u.a)(["\n  @media (max-width: 500px) {\n    order: 1;\n    margin: 0;\n    padding: 0;\n  }\n"]);return Ze=function(){return n},n}function nt(){var n=Object(u.a)(["\n  @media (max-width: 500px) {\n    order: 2;\n    margin: 0;\n    padding: 0;\n  }\n"]);return nt=function(){return n},n}function et(){var n=Object(u.a)(["\n  @media (max-width: 500px) {\n    flex-direction: column;\n  }\n"]);return et=function(){return n},n}var tt=Object(l.a)(R)(et()),rt=Object(l.a)(U)(nt()),it=Object(l.a)(U)(Ze()),ct=l.a.img(Ye()),at=l.a.h4(Ke()),ot=function(n){var e=n.launch,t=e.details,c=e.name,a=e.launch_date_local,o=e.links.image;return Object(r.jsxs)(i.Fragment,{children:[Object(r.jsx)(g,{children:"Mission details"}),Object(r.jsxs)(tt,{children:[Object(r.jsxs)(rt,{children:[Object(r.jsx)("p",{children:t||"No Details"}),Object(r.jsxs)("p",{children:["Launch date: ",a.slice(0,10)]})]}),Object(r.jsxs)(it,{children:[Object(r.jsx)(ct,{src:o,alt:"".concat(c," mission")}),Object(r.jsx)(at,{children:c})]})]})]})},st=c.a.createContext({add:function(n){},remove:function(n){}}),dt=function(n){var e,t=n.id,c=n.isFavourite,a=n.onClose,o=Object(sn.useQuery)(ln,{variables:{id:t}}),s=o.error,d=o.loading,j=o.data;if(d)return Object(r.jsxs)(P,{children:[Object(r.jsx)(me,{}),Object(r.jsx)(v,{children:"Loading..."})]});if(s)return Object(r.jsx)(we,{response:s.networkError.response});if(!s&&!d){var u=j.launch;e=Object(r.jsx)(st.Consumer,{children:function(n){return Object(r.jsxs)(Un,{length:c?3:4,children:[Object(r.jsx)($n,{children:Object(r.jsx)(ot,{launch:u})}),Object(r.jsx)($n,{children:Object(r.jsx)(Xe,{details:u.rocket.details})}),Object(r.jsx)($n,{children:Object(r.jsx)(De,{links:u.links})}),c?null:Object(r.jsx)($n,{children:Object(r.jsx)(Be,{click:function(){return function(n,e){var r=n.name,i=n.details,c=n.links.image,o={id:t,name:r,details:i,image:c};e.add(o),a()}(u,n)}})})]})}})}return Object(r.jsx)(i.Fragment,{children:e})},jt=function(n){var e,t=n.id,c=n.name,a=n.details,o=n.image,s=n.isFavourite,d=n.mode,j=void 0===d?"default":d,u=Object(i.useState)(!1),l=Object(_.a)(u,2),b=l[0],x=l[1],h=function(){x(!1)};return e=a?a.length<200?a:a.slice(0,197)+"...":"Details empty",Object(r.jsxs)(W,{children:[Object(r.jsx)(en.a,{maxWidth:"lg",open:b,onClose:function(){return h()},children:Object(r.jsx)(tn.a,{children:Object(r.jsx)(dt,{id:t,isFavourite:s,onClose:function(){return h()}})})}),Object(r.jsx)(X,{style:{backgroundColor:"#826B57",color:"white",boxShadow:"0px 0px 3px 3px rgba(255, 140, 0, 1)"},children:Object(r.jsxs)(U,{children:[Object(r.jsx)(st.Consumer,{children:function(n){return Object(r.jsx)(on.a,{children:"default"===j?Object(r.jsx)(nn,{isFavourite:s,children:s?"In favourites":"Not in favourites"}):Object(r.jsx)(rn.a,{"aria-label":"delete",color:"primary",onClick:function(){return n.remove(t)},children:Object(r.jsx)(an.a,{fontSize:"large"})})})}}),Object(r.jsx)(F.a,{onClick:function(){x(!0)},children:Object(r.jsxs)(L.a,{children:[Object(r.jsxs)(K,{children:[Object(r.jsx)(Z,{children:c}),Object(r.jsx)(Y,{src:o,alt:"".concat(c," mission")})]}),Object(r.jsx)(C.a,{paragraph:!0,children:e})]})})]})})]})},ut=function(n){var e=n.favourites;return Object(r.jsxs)(i.Fragment,{children:[Object(r.jsx)(m,{children:"List of favourites"}),e.map((function(n){return Object(r.jsx)(jt,Object(j.a)(Object(j.a)({},n),{},{isFavourite:!0,mode:"favourites"}),n.id)}))]})},lt=t(125),bt=t.n(lt),xt=function(n){var e=n.favourites,t=Object(i.useState)(!0),c=Object(_.a)(t,2),a=c[0],o=c[1],s=Object(sn.useQuery)(un,{variables:{offset:0,limit:20}}),d=s.loading,u=s.error,l=s.data,b=s.fetchMore;if(d)return Object(r.jsx)(W,{style:{marginTop:"100px"},children:Object(r.jsx)(fe,{})});if(u)return Object(r.jsx)(we,{response:u.networkError.response});var x=l.launches.map((function(n,t){return Object(r.jsx)(jt,Object(j.a)(Object(j.a)({},n),{},{image:n.links.image,isFavourite:!!e.find((function(e){return e.id===n.id}))}),n.id)}));return Object(r.jsxs)(i.Fragment,{children:[Object(r.jsx)(m,{children:"Missions List"}),Object(r.jsxs)(bt.a,{pageStart:0,loadMore:function(){return b({variables:{offset:l.launches.length}}).then((function(n){0===n.data.launches.length&&o(!1)}))},threshold:50,hasMore:a,loader:Object(r.jsx)(P,{children:Object(r.jsx)(me,{})}),children:[x,a?null:Object(r.jsx)(Xn,{onBackToTop:function(){window.scrollTo({top:0,behavior:"smooth"})}})]})]})},ht=t.p+"static/media/background.289a486e.svg";function ft(){var n=Object(u.a)(["\n  min-height: 100vh;\n  padding-top: 80px;\n  @media (max-width: 500px) {\n    padding-top: 72px;\n  }\n"]);return ft=function(){return n},n}function Ot(){var n=Object(u.a)(["\n  min-height: 100vh;\n  background-image: url(",");\n  background-size: 60% 60%;\n  background-position: center;\n  background-attachment: fixed;\n  background-repeat: round;\n\n  @media (max-width: 500px) {\n    background-size: 50%;\n  }\n"]);return Ot=function(){return n},n}function pt(){var n=Object(u.a)(["\n  min-height: 100vh;\n  background: linear-gradient(rgba(15, 25, 59, 0.85), rgba(32, 44, 84, 0.85));\n  background-attachment: fixed;\n"]);return pt=function(){return n},n}var mt=l.a.div(pt()),gt=l.a.div(Ot(),ht),vt=l.a.div(ft()),wt=function(n){return Object(r.jsx)(gt,{children:Object(r.jsx)(mt,{children:Object(r.jsxs)(bn.a,{children:[Object(r.jsx)(Sn,{}),Object(r.jsx)(vt,{children:n.children}),Object(r.jsx)(be,{})]})})})},kt=t(128),yt=Object(kt.a)({palette:{primary:{main:"#ff8c00"}}}),_t=t(73);var Ft={addFavourite:function(n){return{type:"ADD_FAVOURITE",id:n.id,name:n.name,details:n.details,image:n.image}},removeFavourite:function(n){return{type:"REMOVE_FAVOURITE",id:n}}},Lt=Object(_t.b)((function(n){return n}),Ft)((function(n){var e=n.favourites,t=n.addFavourite,i=n.removeFavourite;return Object(r.jsx)(d.a,{theme:yt,children:Object(r.jsx)(wt,{children:Object(r.jsx)(st.Provider,{value:{add:function(n){return function(n){t(n)}(n)},remove:function(n){return function(n){i(n)}(n)}},children:Object(r.jsxs)(s.d,{children:[Object(r.jsx)(s.b,{path:"/SpacexMissionsApp/",exact:!0,component:function(){return Object(r.jsx)(xt,{favourites:e})}}),Object(r.jsx)(s.b,{path:"/SpacexMissionsApp/favourites",component:function(){return Object(r.jsx)(ut,{favourites:e})}}),Object(r.jsx)(s.b,{path:"/",component:ke}),Object(r.jsx)(s.b,{path:"/SpacexMissionsApp/",component:ke,children:Object(r.jsx)(s.a,{to:"/SpacexMissionsApp/pagenotfound"})})]})})})})})),Ct=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,199)).then((function(e){var t=e.getCLS,r=e.getFID,i=e.getFCP,c=e.getLCP,a=e.getTTFB;t(n),r(n),i(n),c(n),a(n)}))},It=t(35),Mt=t(129),St=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD_FAVOURITE":return[].concat(Object(Mt.a)(n),[{id:e.id,name:e.name,details:e.details,image:e.image}]);case"REMOVE_FAVOURITE":return n.filter((function(n){return n.id!==e.id}));default:return n}},At=Object(It.b)({favourites:St}),Tt=t(87),Dt=t(127),Bt={key:"spacex_storage",storage:t.n(Dt).a,whitelist:["favourites"]},Et=Object(Tt.a)(Bt,At),zt=Object(It.c)(Et),Nt=(Object(Tt.b)(zt),t(3)),Pt=new sn.ApolloClient({uri:"https://api.spacex.land/graphql/",cache:new sn.InMemoryCache({typePolicies:{Query:{fields:{launches:Object(Nt.H)()}}}})});o.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(_t.a,{store:zt,children:Object(r.jsx)(sn.ApolloProvider,{client:Pt,children:Object(r.jsx)(Lt,{})})})}),document.getElementById("root")),Ct()},75:function(n,e,t){n.exports={LoadingBeanContent:"BeanEaterLoading_LoadingBeanContent__3RPmX","ldio-1joo2rouwnn-1":"BeanEaterLoading_ldio-1joo2rouwnn-1__2_o02","ldio-1joo2rouwnn-2":"BeanEaterLoading_ldio-1joo2rouwnn-2__2IInk","ldio-1joo2rouwnn-3":"BeanEaterLoading_ldio-1joo2rouwnn-3___fvJ7",LoadingContent:"BeanEaterLoading_LoadingContent__1uxwD",LoadingWrapper:"BeanEaterLoading_LoadingWrapper__7lVwg"}}},[[161,1,2]]]);
//# sourceMappingURL=main.8fc4f447.chunk.js.map