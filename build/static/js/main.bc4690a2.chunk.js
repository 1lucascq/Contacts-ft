(this["webpackJsonpestagio-betabit"]=this["webpackJsonpestagio-betabit"]||[]).push([[0],{101:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(29),i=n.n(r),s=(n(95),n(63)),o=n(14),u=(n(72),n(147)),j=n(25),l=n(20),d=n.n(l),b=n(150),x=n(148),p=n(152),O=n(138),f=n(153),h=n(155),m=Object(a.createContext)(),g=n(81),v=n.n(g),y=n(80),C=n.n(y),w={API_URL:"https://phonebook-betabit.herokuapp.com/contacts/"};function S(e){return N.apply(this,arguments)}function N(){return(N=Object(j.a)(d.a.mark((function e(t){var n,a,c,r,i,s,o;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.name,a=t.email,c=t.image,r=t.phone,i={headers:{"Content-Type":"application/json; charset=UTF-8"},method:"POST",body:JSON.stringify({name:n,email:a,image:c,phone:r})},e.next=5,fetch(w.API_URL,i);case 5:return s=e.sent,e.next=8,s.json();case 8:return o=e.sent,e.abrupt("return",o);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(e,t){return E.apply(this,arguments)}function E(){return(E=Object(j.a)(d.a.mark((function e(t,n){var a,c,r,i,s,o,u;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.edName,c=t.edEmail,r=t.edImage,i=t.edPhone,s={headers:{"Content-Type":"application/json; charset=UTF-8"},method:"PUT",body:JSON.stringify({name:a,email:c,image:r,phone:i})},e.next=5,fetch("".concat(w.API_URL).concat(n),s);case 5:return o=e.sent,e.next=8,o.json();case 8:return u=e.sent,e.abrupt("return",u);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(e){return I.apply(this,arguments)}function I(){return(I=Object(j.a)(d.a.mark((function e(t){var n,a,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{"Content-Type":"application/json; charset=UTF-8"},method:"DELETE"},e.next=4,fetch("".concat(w.API_URL).concat(t),n);case 4:return a=e.sent,e.next=7,a.json();case 7:return c=e.sent,console.log(c),e.abrupt("return",c);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var A=n(2);function P(){var e=Object(a.useContext)(m),t=e.data,n=e.setData,c=e.setEditData,r=e.setEditing;function i(){return(i=Object(j.a)(d.a.mark((function e(a){var c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T(a);case 2:c=t.filter((function(e){return e.id!==a})),n(c);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(A.jsx)("div",{children:Object(A.jsx)(u.a,{container:!0,direction:"column",alignItems:"center",justifyContent:"center",children:t.map((function(e){var n=e.id,a=e.name,s=e.email,o=e.image,u=e.phoneNumbers;return Object(A.jsx)(b.a,{sx:{display:"flex",justifyContent:"center"},id:n,children:Object(A.jsxs)(h.a,{sx:{display:"flex"},children:[Object(A.jsx)(x.a,{alt:"".concat(a," profile pic"),src:o,sx:{width:90,height:116,borderRadius:22,padding:1}}),Object(A.jsxs)(h.a,{sx:{display:"flex",flexDirection:"column",justifyContent:"center",gap:1,padding:3},children:[Object(A.jsx)(p.a,{sx:{textAlign:"left"},children:a}),Object(A.jsx)(p.a,{sx:{textAlign:"left"},children:s}),u.map((function(e){return Object(A.jsx)(p.a,{sx:{textAlign:"left"},children:e})})),Object(A.jsxs)(O.a,{direction:"row",spacing:6,justifyContent:"center",children:[Object(A.jsx)(f.a,{"aria-label":"delete",id:n,onClick:function(e){e.target;return function(e){return i.apply(this,arguments)}(n)},children:Object(A.jsx)(C.a,{})}),Object(A.jsx)(f.a,{"aria-label":"edit",id:n,onClick:function(e){e.target;return function(e){var n=t.find((function(t){return t.id===e}));c(n),r(!0)}(n)},children:Object(A.jsx)(v.a,{})})]})]})]})})}))})})}function V(){return Object(A.jsx)(P,{})}var D=function(){return Object(A.jsx)(u.a,{container:!0,spacing:2,direction:"column",alignItems:"center",justifyContent:"center",style:{minHeight:"100vh",minWidht:"80vw",marginTop:"2em"},children:Object(A.jsx)(V,{})})},U=n(8),L=n(154),R=n(143);function _(e){var t=e.value,n=e.fieldName,a=e.setValue;return Object(A.jsx)(R.a,{id:"outlined-basic",type:"text",label:n,name:n,defaultValue:t,onChange:function(e){return a(e.target.value)},required:!0,variant:"standard"})}var J=n(149),B=n(144),F={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:300,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4};function W(e){var t=e.newContact,n=e.id,c=Object(a.useContext)(m),r=c.editing,i=c.setEditing,s=Object(a.useState)(!1),o=Object(U.a)(s,2),u=o[0],l=o[1],b=Object(a.useState)(""),x=Object(U.a)(b,2),f=x[0],g=x[1];function v(){return(v=Object(j.a)(d.a.mark((function e(){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r){e.next=6;break}return e.next=3,k(t,n);case 3:e.t0=e.sent,e.next=9;break;case 6:return e.next=8,S(t);case 8:e.t0=e.sent;case 9:(a=e.t0).message?g(a.error||a.message.message):g("Dados Salvos!"),l(!0),r&&i(!1);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(A.jsxs)(O.a,{spacing:2,sx:{width:"100%"},children:[Object(A.jsx)(J.a,{variant:"outlined",onClick:function(){return v.apply(this,arguments)},sx:{marginTop:2},children:"Send"}),Object(A.jsx)(B.a,{open:u,onClose:function(){l(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:Object(A.jsx)(h.a,{sx:F,children:Object(A.jsx)(p.a,{id:"modal-modal-description",sx:{mt:0,textAlign:"center"},children:f})})})]})}function q(){var e=Object(a.useState)(""),t=Object(U.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),i=Object(U.a)(r,2),s=i[0],o=i[1],j=Object(a.useState)(""),l=Object(U.a)(j,2),d=l[0],b=l[1],x=Object(a.useState)(""),p=Object(U.a)(x,2),O=p[0],f=p[1],h={name:n,email:s,image:d,phone:O};return Object(A.jsx)("div",{children:Object(A.jsx)(u.a,{container:!0,direction:"column",alignItems:"center",justifyContent:"center",children:Object(A.jsxs)(L.a,{children:[Object(A.jsx)(_,{value:n,fieldName:"Name",setValue:c}),Object(A.jsx)(_,{value:s,fieldName:"Email",setValue:o}),Object(A.jsx)(_,{value:d,fieldName:"Image",setValue:b}),Object(A.jsx)(_,{value:O,fieldName:"Phone",setValue:f}),Object(A.jsx)(W,{newContact:h})]})})})}function H(){var e=Object(a.useContext)(m),t=e.editData,n=e.data,c=t.name,r=t.email,i=t.image,s=t.phoneNumbers[0],o=n.find((function(e){return e.name.toLowerCase()===c.toLowerCase()})).id,j=Object(a.useState)(c),l=Object(U.a)(j,2),d=l[0],b=l[1],x=Object(a.useState)(r),p=Object(U.a)(x,2),O=p[0],f=p[1],h=Object(a.useState)(i),g=Object(U.a)(h,2),v=g[0],y=g[1],C=Object(a.useState)(s),w=Object(U.a)(C,2),S=w[0],N=w[1],k={edName:d,edEmail:O,edImage:v,edPhone:S};return Object(A.jsx)("div",{children:Object(A.jsx)(u.a,{container:!0,direction:"column",alignItems:"center",justifyContent:"center",children:Object(A.jsxs)(L.a,{children:[Object(A.jsx)(_,{value:d,fieldName:"Name",setValue:b}),Object(A.jsx)(_,{value:O,fieldName:"Email",setValue:f}),Object(A.jsx)(_,{value:v,fieldName:"Image",setValue:y}),Object(A.jsx)(_,{value:S,fieldName:"Phone",setValue:N}),Object(A.jsx)(W,{newContact:k,id:o})]})})})}var M=function(){var e=Object(a.useContext)(m).editing;return Object(A.jsxs)("main",{className:"main-content",children:[Object(A.jsx)(p.a,{variant:"h2",gutterBottom:!0,sx:{textAlign:"center",marginTop:3},children:"NEW"}),e?Object(A.jsx)(H,{}):Object(A.jsx)(q,{}),Object(A.jsx)(p.a,{variant:"h2",gutterBottom:!0,sx:{textAlign:"center",marginTop:3},children:"CONTACTS"}),Object(A.jsx)(D,{})]})};var z=function(){return Object(A.jsx)(o.c,{children:Object(A.jsx)(o.a,{exact:!0,path:"/",element:Object(A.jsx)(M,{})})})};var G=function(e){var t=e.children,n=Object(a.useState)([]),c=Object(U.a)(n,2),r=c[0],i=c[1],s=Object(a.useState)([]),o=Object(U.a)(s,2),u=o[0],l=o[1],b=Object(a.useState)(!1),x=Object(U.a)(b,2),p=x[0],O=x[1];return Object(a.useEffect)((function(){function e(){return(e=Object(j.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(w.API_URL);case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,i(n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(A.jsx)(m.Provider,{value:{data:r,setData:i,editData:u,setEditData:l,editing:p,setEditing:O},children:t})};i.a.render(Object(A.jsx)(G,{children:Object(A.jsx)(s.a,{children:Object(A.jsx)(c.a.StrictMode,{children:Object(A.jsx)(z,{})})})}),document.getElementById("root"))},72:function(e,t,n){},95:function(e,t,n){}},[[101,1,2]]]);
//# sourceMappingURL=main.bc4690a2.chunk.js.map