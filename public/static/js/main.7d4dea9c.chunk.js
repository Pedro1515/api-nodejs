(this["webpackJsonpcalendar-app"]=this["webpackJsonpcalendar-app"]||[]).push([[0],{114:function(e,t,a){},116:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),o=a.n(c),l=a(8),s=a(21),i=a(64),u=a(4),m="[ui] Open modal",d="[ui] Close modal",f="[event] Set Active",p="[event] Logout event",v="[event] Add new",b="[event] Clear active event",E="[event] Event updated",h="[event] Event deleted",g="[event] Events loaded",O="[auth] Finish checking login state",j="[auth] Login",y="[auth] Logout",w="[auth] submit Off",N="[auth] submit On",k={modalOpen:!1},x=a(54),S={events:[],activeEvent:null},C={checking:!0,disabledSubmit:!1},D=Object(s.c)({ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return Object(u.a)(Object(u.a)({},e),{},{modalOpen:!0});case d:return Object(u.a)(Object(u.a)({},e),{},{modalOpen:!1});default:return e}},calendar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(u.a)(Object(u.a)({},e),{},{activeEvent:t.payload});case v:return Object(u.a)(Object(u.a)({},e),{},{events:[].concat(Object(x.a)(e.events),[t.payload])});case b:return Object(u.a)(Object(u.a)({},e),{},{activeEvent:null});case E:return Object(u.a)(Object(u.a)({},e),{},{events:e.events.map((function(e){return e.id===t.payload.id?t.payload:e}))});case h:return Object(u.a)(Object(u.a)({},e),{},{events:e.events.filter((function(t){return t.id!==e.activeEvent.id})),activeEvent:null});case g:return Object(u.a)(Object(u.a)({},e),{},{events:Object(x.a)(t.payload)});case p:return Object(u.a)({},S);default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return Object(u.a)(Object(u.a)(Object(u.a)({},e),t.payload),{},{checking:!1});case O:return Object(u.a)(Object(u.a)({},e),{},{checking:!1});case y:return{checking:!1};case w:return Object(u.a)(Object(u.a)({},e),{},{disabledSubmit:!0});case N:return Object(u.a)(Object(u.a)({},e),{},{disabledSubmit:!1});default:return e}}}),T="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.d,P=Object(s.e)(D,T(Object(s.a)(i.a))),A=a(35),I=a(9),F=a(14),L=a(24),_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(n.useState)(e),a=Object(F.a)(t,2),r=a[0],c=a[1],o=function(){c(e)},l=function(e){var t=e.target;c(Object(u.a)(Object(u.a)({},r),{},Object(L.a)({},t.name,t.value)))};return[r,l,o]},R=a(12),G=a.n(R),H=a(20),V="https://mern-calendar-pj.herokuapp.com/api",J=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",n="".concat(V,"/").concat(e);return"GET"===a?fetch(n):fetch(n,{method:a,headers:{"Content-type":"application/json"},body:JSON.stringify(t)})},M=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",n="".concat(V,"/").concat(e),r=localStorage.getItem("token")||"";return"GET"===a?fetch(n,{method:a,headers:{"x-token":r}}):fetch(n,{method:a,headers:{"Content-type":"application/json","x-token":r},body:JSON.stringify(t)})},U=a(11),B=a.n(U),X=a(16),q=a.n(X),z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map((function(e){return Object(u.a)(Object(u.a)({},e),{},{end:q()(e.end).toDate(),start:q()(e.start).toDate()})}))},K=function(e){return{type:v,payload:e}},Q=function(){return{type:b}},W=function(e){return{type:E,payload:e}},Y=function(){return{type:h}},Z=function(e){return{type:g,payload:e}},$=function(){return{type:O}},ee=function(e){return{type:j,payload:e}},te=function(){return function(e){localStorage.clear(),e({type:p}),e(ae())}},ae=function(){return{type:y}},ne=function(){return{type:w}},re=function(){return{type:N}},ce=(a(77),function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.auth})).disabledSubmit,a=_({lEmail:"",lPassword:""}),n=Object(F.a)(a,2),c=n[0],o=n[1],s=_({rName:"",rEmail:"",rPassword1:"",rPassword2:""}),i=Object(F.a)(s,2),u=i[0],m=i[1],d=c.lEmail,f=c.lPassword,p=u.rName,v=u.rEmail,b=u.rPassword1,E=u.rPassword2;return r.a.createElement("div",{className:"container login-container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 login-form-1"},r.a.createElement("h3",null,"Ingreso"),r.a.createElement("form",{onSubmit:function(t){var a,n;e(ne()),t.preventDefault(),e((a=d,n=f,function(){var e=Object(H.a)(G.a.mark((function e(t){var r,c;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,J("auth",{email:a,password:n},"POST");case 3:return r=e.sent,e.next=6,r.json();case 6:(c=e.sent).ok?(localStorage.setItem("token",c.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(ee({uid:c.uid,name:c.name})),t(re())):c.msg?(B.a.fire("Error",c.msg,"error"),t(re())):c.errors.email?(B.a.fire("Error",c.errors.email.msg,"error"),t(re())):c.errors.password?(B.a.fire("Error",c.errors.password.msg,"error"),t(re())):(B.a.fire("Error","Fallo en el registro, intentar mas tarde","error"),t(re())),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(0),B.a.fire("Error","Fallo en el registro, intentar mas tarde","error"),t(re()),console.error("error catch in startLogin. "+e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()))}},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Correo",name:"lEmail",value:d,onChange:o})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"password",className:"form-control",placeholder:"Contrase\xf1a",name:"lPassword",value:f,onChange:o})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"submit",className:"btnSubmit",value:"Login",disabled:t})))),r.a.createElement("div",{className:"col-md-6 login-form-2"},r.a.createElement("h3",null,"Registro"),r.a.createElement("form",{onSubmit:function(t){if(e(ne()),t.preventDefault(),b!==E)return e(re()),B.a.fire("Error","Las contrase\xf1as deben de ser iguales","error");var a,n,r;e((a=v,n=b,r=p,function(){var e=Object(H.a)(G.a.mark((function e(t){var c,o;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,J("auth/new",{email:a,password:n,name:r},"POST");case 3:return c=e.sent,e.next=6,c.json();case 6:(o=e.sent).ok?(localStorage.setItem("token",o.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(ee({uid:o.uid,name:o.name})),t(re())):o.msg?(B.a.fire("Error",o.msg,"error"),t(re())):o.errors.name?(B.a.fire("Error",o.errors.name.msg,"error"),t(re())):o.errors.email?(B.a.fire("Error",o.errors.email.msg,"error"),t(re())):o.errors.password?(B.a.fire("Error",o.errors.password.msg,"error"),t(re())):(B.a.fire("Error","Fallo en el registro, intentar mas tarde","error"),t(re())),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(0),B.a.fire("Error","Fallo en el registro, intentar mas tarde","error"),t(re()),console.error("error catch in startRegister. "+e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()))}},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Nombre",name:"rName",value:p,onChange:m})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"email",className:"form-control",placeholder:"Correo",name:"rEmail",value:v,onChange:m})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"password",className:"form-control",placeholder:"Contrase\xf1a",name:"rPassword1",value:b,onChange:m})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"password",className:"form-control",placeholder:"Repita la contrase\xf1a",name:"rPassworda2",value:E,onChange:m})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"submit",className:"btnSubmit",value:"Crear cuenta",disabled:t}))))))}),oe=a(53),le=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.auth})).name;return r.a.createElement("div",{className:"navbar navbar-dark bg-dark mb-4"},r.a.createElement("span",{className:"navbar-brand"},t),r.a.createElement("button",{className:"btn btn-outline-danger",onClick:function(){e(te())}},r.a.createElement("i",{className:"fas fa-sign-out-alt"}),r.a.createElement("span",null," Salir")))},se={allDay:"Todo el d\xeda",previous:"<",next:">",today:"Hoy",month:"Mes",week:"Semana",day:"D\xeda",agenda:"Agenda",date:"Fecha",time:"Hora",event:"Evento",noEventsInRange:"No hay eventos en este rango",showMore:function(e){return"+ Ver m\xe1s (".concat(e,")")}},ie=function(e){var t=e.event,a=t.title,n=t.user;return r.a.createElement("div",null,r.a.createElement("strong",null," ",a," "),r.a.createElement("span",null,"- ",n.name," "))},ue=a(48),me=a.n(ue),de=a(49),fe=a.n(de),pe=function(){return{type:m}},ve={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}};me.a.setAppElement("#root");var be=q()().minutes(0).seconds(0).add(1,"hours"),Ee=be.clone().add(1,"hours"),he={title:"",notes:"",start:be.toDate(),end:Ee.toDate()},ge=function(){var e=Object(l.c)((function(e){return e.ui})).modalOpen,t=Object(l.c)((function(e){return e.calendar})).activeEvent,a=Object(l.b)(),c=Object(n.useState)(be.toDate()),o=Object(F.a)(c,2),s=o[0],i=o[1],m=Object(n.useState)(Ee.toDate()),f=Object(F.a)(m,2),p=f[0],v=f[1],b=Object(n.useState)(!0),E=Object(F.a)(b,2),h=E[0],g=E[1],O=Object(n.useState)(he),j=Object(F.a)(O,2),y=j[0],w=j[1],N=y.notes,k=y.title,x=y.start,S=y.end;Object(n.useEffect)((function(){w(t||he)}),[t,w]);var C=function(e){var t=e.target;w(Object(u.a)(Object(u.a)({},y),{},Object(L.a)({},t.name,t.value)))},D=function(){a({type:d}),a(Q()),w(he)};return r.a.createElement(me.a,{isOpen:e,onRequestClose:D,style:ve,closeTimeoutMS:200,className:"modal",overlayClassName:"modal-fondo",ariaHideApp:!1},r.a.createElement("h1",null," ",t?"Editar evento":"Nuevo evento"," "),r.a.createElement("hr",null),r.a.createElement("form",{className:"container",onSubmit:function(e){e.preventDefault();var n,r=q()(x),c=q()(S);return r.isSameOrAfter(c)?B.a.fire("Error","La fecha fin debe de ser mayor a la fecha de inicio","error"):k.trim().length<1?g(!1):(a(t?(n=y,function(){var e=Object(H.a)(G.a.mark((function e(t){var a,r;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,M("events/".concat(n.id),n,"PUT");case 3:return a=e.sent,e.next=6,a.json();case 6:(r=e.sent).ok?t(W(n)):B.a.fire("Error",r.msg,"error"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()):function(e){return function(){var t=Object(H.a)(G.a.mark((function t(a,n){var r,c,o,l,s;return G.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n().auth,c=r.uid,o=r.name,t.prev=1,t.next=4,M("events",e,"POST");case 4:return l=t.sent,t.next=7,l.json();case 7:s=t.sent,console.log(s),s.ok&&(e.id=s.evento.id,e.user={_id:c,name:o},console.log(e),a(K(e))),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(1),console.log(t.t0);case 15:case"end":return t.stop()}}),t,null,[[1,12]])})));return function(e,a){return t.apply(this,arguments)}}()}(y)),g(!0),void D())}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Fecha y hora inicio"),r.a.createElement(fe.a,{onChange:function(e){i(e),w(Object(u.a)(Object(u.a)({},y),{},{start:e}))},value:s,className:"form-control"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Fecha y hora fin"),r.a.createElement(fe.a,{onChange:function(e){v(e),w(Object(u.a)(Object(u.a)({},y),{},{end:e}))},value:p,minDate:s,className:"form-control"})),r.a.createElement("hr",null),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Titulo y notas"),r.a.createElement("input",{type:"text",className:"form-control ".concat(!h&&"is-invalid"," "),placeholder:"T\xedtulo del evento",name:"title",autoComplete:"off",value:k,onChange:C}),r.a.createElement("small",{id:"emailHelp",className:"form-text text-muted"},"Una descripci\xf3n corta")),r.a.createElement("div",{className:"form-group"},r.a.createElement("textarea",{type:"text",className:"form-control",placeholder:"Notas",rows:"5",name:"notes",value:N,onChange:C}),r.a.createElement("small",{id:"emailHelp",className:"form-text text-muted"},"Informaci\xf3n adicional")),r.a.createElement("button",{type:"submit",className:"btn btn-outline-primary btn-block"},r.a.createElement("i",{className:"far fa-save"}),r.a.createElement("span",null," Guardar"))))},Oe=(a(111),a(112),function(){var e=Object(l.b)();return r.a.createElement("button",{className:"btn btn-primary fab",onClick:function(){e(pe())}},r.a.createElement("i",{className:"fas fa-plus"}))}),je=function(){var e=Object(l.b)();return r.a.createElement("button",{className:"btn btn-danger fab-danger",onClick:function(){e(function(){var e=Object(H.a)(G.a.mark((function e(t,a){var n,r,c;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a().calendar.activeEvent.id,e.prev=1,e.next=4,M("events/".concat(n),{},"DELETE");case 4:return r=e.sent,e.next=7,r.json();case 7:c=e.sent,console.log("1"),c.ok?(t(Y()),console.log("2")):(console.log("3"),B.a.fire("Error",c.msg,"error")),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t,a){return e.apply(this,arguments)}}())}},r.a.createElement("i",{className:"fas fa-trash"}),r.a.createElement("span",null," Borrar evento "))};q.a.locale("es");var ye=Object(oe.b)(q.a),we=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.calendar})),a=t.events,c=t.activeEvent,o=Object(l.c)((function(e){return e.auth})).uid,s=Object(n.useState)(localStorage.getItem("lastView")||"month"),i=Object(F.a)(s,2),u=i[0],m=i[1];Object(n.useEffect)((function(){e(function(){var e=Object(H.a)(G.a.mark((function e(t){var a,n,r;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,M("events");case 3:return a=e.sent,e.next=6,a.json();case 6:n=e.sent,r=z(n.eventos),t(Z(r)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}())}),[e]);return r.a.createElement("div",{className:"calendar-screen"},r.a.createElement(le,null),r.a.createElement(oe.a,{localizer:ye,events:a,startAccessor:"start",endAccessor:"end",messages:se,eventPropGetter:function(e,t,a,n){return{style:{backgroundColor:o===e.user._id?"#367CF7":"#465660",borderRadius:"0px",opacity:.8,display:"block",color:"white"}}},onDoubleClickEvent:function(t){e(pe())},onSelectEvent:function(t){e({type:f,payload:t})},onView:function(e){m(e),localStorage.setItem("lastView",e)},onSelectSlot:function(t){e(Q())},selectable:!0,view:u,components:{event:ie}}),r.a.createElement(Oe,null),c&&r.a.createElement(je,null),r.a.createElement(ge,null))},Ne=a(39),ke=function(e){var t=e.isAuthenticated,a=e.component,n=Object(Ne.a)(e,["isAuthenticated","component"]);return r.a.createElement(I.b,Object.assign({},n,{component:function(e){return t?r.a.createElement(I.a,{to:"/"}):r.a.createElement(a,e)}}))},xe=function(e){var t=e.isAuthenticated,a=e.component,n=Object(Ne.a)(e,["isAuthenticated","component"]);return r.a.createElement(I.b,Object.assign({},n,{component:function(e){return t?r.a.createElement(a,e):r.a.createElement(I.a,{to:"/login"})}}))},Se=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.auth})),a=(t.checking,t.uid);return Object(n.useEffect)((function(){e(function(){var e=Object(H.a)(G.a.mark((function e(t){var a,n;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M("auth/renew");case 2:return a=e.sent,e.next=5,a.json();case 5:(n=e.sent).ok?(localStorage.setItem("token",n.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(ee({uid:n.uid,name:n.name}))):t($());case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),r.a.createElement(A.a,null,r.a.createElement("div",null,r.a.createElement(I.d,null,r.a.createElement(ke,{exact:!0,path:"/login",component:ce,isAuthenticated:!!a}),r.a.createElement(xe,{exact:!0,path:"/",component:we,isAuthenticated:!!a}),r.a.createElement(I.a,{to:"/"}))))},Ce=function(){return r.a.createElement(l.a,{store:P},r.a.createElement(Se,null))};a(114);o.a.render(r.a.createElement(Ce,null),document.getElementById("root"))},67:function(e,t,a){e.exports=a(116)},77:function(e,t,a){}},[[67,1,2]]]);
//# sourceMappingURL=main.7d4dea9c.chunk.js.map