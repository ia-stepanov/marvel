(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[6],{109:function(e,t,c){},110:function(e,t,c){},111:function(e,t,c){},217:function(e,t,c){},228:function(e,t,c){"use strict";c.r(t);var a=c(34),r=c(1),n=c(47),s=c(44),i=c(66),o=(c(109),c.p+"static/media/mjolnir.61f31e18.png"),l=c(0),u=function(e){var t=e.data,c=t.name,a=t.description,r=t.thumbnail,n=t.homepage,s=t.wiki,i={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===r&&(i={objectFit:"contain"}),Object(l.jsxs)("div",{className:"randomchar__block",children:[Object(l.jsx)("img",{src:r,alt:"Random character",className:"randomchar__img",style:i}),Object(l.jsxs)("div",{className:"randomchar__info",children:[Object(l.jsx)("p",{className:"randomchar__name",children:c}),Object(l.jsx)("p",{className:"randomchar__descr",children:a}),Object(l.jsxs)("div",{className:"randomchar__btns",children:[Object(l.jsx)("a",{href:n,className:"button button__main",children:Object(l.jsx)("div",{className:"inner",children:"homepage"})}),Object(l.jsx)("a",{href:s,className:"button button__secondary",children:Object(l.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]})},j=function(){var e=Object(r.useState)(null),t=Object(a.a)(e,2),c=t[0],n=t[1],j=Object(s.a)(),h=j.getCharacter,b=j.clearError,d=j.process,m=j.setProcess;Object(r.useEffect)((function(){p();var e=setInterval(p,6e4);return function(){clearInterval(e)}}),[]);var O=function(e){n(e)},p=function(){b();var e=Math.floor(400*Math.random())+1011e3;h(e).then(O).then((function(){return m("confirmed")}))};return Object(l.jsxs)("div",{className:"randomchar",children:[Object(i.a)(d,u,c),Object(l.jsxs)("div",{className:"randomchar__static",children:[Object(l.jsxs)("p",{className:"randomchar__title",children:["Random character for today!",Object(l.jsx)("br",{}),"Do you want to get to know him better?"]}),Object(l.jsx)("p",{className:"randomchar__title",children:"Or choose another one"}),Object(l.jsx)("button",{onClick:p,className:"button button__main",children:Object(l.jsx)("div",{className:"inner",children:"try it"})}),Object(l.jsx)("img",{src:o,alt:"mjolnir",className:"randomchar__decoration"})]})]})},h=c(40),b=c(49),d=c(41),m=c(229),O=c(231),p=c(13),f=c(38),x=(c(110),function(e){var t=Object(r.useState)([]),c=Object(a.a)(t,2),n=c[0],i=c[1],o=Object(r.useState)(!1),u=Object(a.a)(o,2),j=u[0],x=u[1],v=Object(r.useState)(210),_=Object(a.a)(v,2),g=_[0],N=_[1],k=Object(r.useState)(!1),w=Object(a.a)(k,2),y=w[0],C=w[1],E=Object(s.a)(),S=E.getAllCharacters,F=E.process,P=E.setProcess;Object(r.useEffect)((function(){T(g,!0)}),[]);var T=function(e,t){x(!t),S(e).then(I).then((function(){return P("confirmed")}))},I=function(){var e=Object(d.a)(Object(h.a)().mark((function e(t){var c;return Object(h.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c=!1,t.length<9&&(c=!0),i([].concat(Object(b.a)(n),Object(b.a)(t))),x(!1),N(g+9),C(c);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=Object(r.useRef)([]),q=function(e){M.current.forEach((function(e){return e.classList.remove("char__item_selected")})),M.current[e].classList.add("char__item_selected"),M.current[e].focus()},A=Object(r.useMemo)((function(){return function(e,t,c){switch(e){case"waiting":return Object(l.jsx)(p.a,{});case"loading":return c?Object(l.jsx)(t,{}):Object(l.jsx)(p.a,{});case"confirmed":return Object(l.jsx)(t,{});case"error":return Object(l.jsx)(f.a,{});default:throw new Error("Unexpected process state")}}(F,(function(){return function(t){var c=t.map((function(t,c){var a={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===t.thumbnail&&(a={objectFit:"unset"}),Object(l.jsx)(m.a,{timeout:500,classNames:"char__item",children:Object(l.jsxs)("li",{className:"char__item",tabIndex:0,ref:function(e){return M.current[c]=e},onClick:function(){e.onCharSelected(t.id),q(c)},onKeyPress:function(a){" "!==a.key&&"Enter"!==a.key||(e.onCharSelected(t.id),q(c))},children:[Object(l.jsx)("img",{src:t.thumbnail,alt:t.name,style:a}),Object(l.jsx)("div",{className:"char__name",children:t.name})]})},t.id)}));return Object(l.jsx)("ul",{className:"char__grid",children:Object(l.jsx)(O.a,{component:null,children:c})})}(n)}),j)}),[F]);return Object(l.jsxs)("div",{className:"char__list",children:[A,Object(l.jsx)("button",{disabled:j,style:{display:y?"none":"block"},className:"button button__main button__long",onClick:function(){return T(g)},children:Object(l.jsx)("div",{className:"inner",children:"load more"})})]})}),v=(c(111),function(e){var t=e.data,c=t.name,a=t.description,r=t.thumbnail,n=t.homepage,s=t.wiki,i=t.comics,o={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===r&&(o={objectFit:"contain"}),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"char__basics",children:[Object(l.jsx)("img",{src:r,alt:c,style:o}),Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"char__info-name",children:c}),Object(l.jsxs)("div",{className:"char__btns",children:[Object(l.jsx)("a",{href:n,className:"button button__main",children:Object(l.jsx)("div",{className:"inner",children:"homepage"})}),Object(l.jsx)("a",{href:s,className:"button button__secondary",children:Object(l.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]}),Object(l.jsx)("div",{className:"char__descr",children:a}),Object(l.jsx)("div",{className:"char__comics",children:"Comics:"}),Object(l.jsxs)("ul",{className:"char__comics-list",children:[i.length>0?null:"There is no comics with this character",i.map((function(e,t){if(!(t>9))return Object(l.jsx)("li",{className:"char__comics-item",children:e.name},t)}))]})]})}),_=function(e){var t=Object(r.useState)(null),c=Object(a.a)(t,2),n=c[0],o=c[1],u=Object(s.a)(),j=u.getCharacter,h=u.clearError,b=u.process,d=u.setProcess;Object(r.useEffect)((function(){m()}),[e.charId]);var m=function(){var t=e.charId;t&&(h(),j(t).then(O).then((function(){return d("confirmed")})))},O=function(e){o(e)};return Object(l.jsx)("div",{className:"char__info",children:Object(i.a)(b,v,n)})},g=c(221),N=c(222),k=c(8),w=(c(217),function(){var e=Object(r.useState)(null),t=Object(a.a)(e,2),c=t[0],n=t[1],i=Object(s.a)(),o=i.loading,u=i.error,j=i.getCharacterByName,h=i.clearError,b=function(e){n(e)},d=u?Object(l.jsx)("div",{className:"char__search-critical-error",children:Object(l.jsx)(f.a,{})}):null,m=c?c.length>0?Object(l.jsxs)("div",{className:"char__search-wrapper",children:[Object(l.jsxs)("div",{className:"char__search-success",children:["There is! Visit ",c[0].name," page?"]}),Object(l.jsx)(k.b,{to:"/characters/".concat(c[0].id),className:"button button__secondary",children:Object(l.jsx)("div",{className:"inner",children:"To page"})})]}):Object(l.jsx)("div",{className:"char__search-error",children:"The character was not found. Check the name and try again"}):null;return Object(l.jsxs)("div",{className:"char__search-form",children:[Object(l.jsx)(g.d,{initialValues:{charName:""},validationSchema:N.a({charName:N.b().required("This field is required")}),onSubmit:function(e){var t,c=e.charName;t=c,h(),j(t).then(b)},children:Object(l.jsxs)(g.c,{children:[Object(l.jsx)("label",{className:"char__search-label",htmlFor:"charName",children:"Or find a character by name:"}),Object(l.jsxs)("div",{className:"char__search-wrapper",children:[Object(l.jsx)(g.b,{id:"charName",name:"charName",type:"text",placeholder:"Enter name"}),Object(l.jsx)("button",{type:"submit",className:"button button__main",disabled:o,children:Object(l.jsx)("div",{className:"inner",children:"find"})})]}),Object(l.jsx)(g.a,{component:"div",className:"char__search-error",name:"charName"})]})}),m,d]})}),y=c(35),C=c(36),E=c(43),S=c(45),F=function(e){Object(E.a)(c,e);var t=Object(S.a)(c);function c(){var e;Object(y.a)(this,c);for(var a=arguments.length,r=new Array(a),n=0;n<a;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))).state={error:!1},e}return Object(C.a)(c,[{key:"componentDidCatch",value:function(e,t){this.setState({error:!0})}},{key:"render",value:function(){return this.state.error?Object(l.jsx)(f.a,{}):this.props.children}}]),c}(r.Component),P=F,T=c.p+"static/media/vision.067d4ae1.png";t.default=function(){var e=Object(r.useState)(null),t=Object(a.a)(e,2),c=t[0],s=t[1];return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(n.b,{children:[Object(l.jsxs)(n.a,{children:[Object(l.jsx)("meta",{name:"description",content:"Marvel information portal"}),Object(l.jsx)("title",{children:"Marvel Information Portal"})]}),Object(l.jsx)(P,{children:Object(l.jsx)(j,{})}),Object(l.jsxs)("div",{className:"char__content",children:[Object(l.jsx)(P,{children:Object(l.jsx)(x,{onCharSelected:function(e){s(e)}})}),Object(l.jsxs)("div",{children:[Object(l.jsx)(P,{children:Object(l.jsx)(_,{charId:c})}),Object(l.jsx)(P,{children:Object(l.jsx)(w,{})})]})]}),Object(l.jsx)("img",{className:"bg-decoration",src:T,alt:"vision"})]})})}},38:function(e,t,c){"use strict";var a=c.p+"static/media/error.42292aa1.gif",r=c(0);t.a=function(){return Object(r.jsx)("img",{style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"},src:a,alt:"Error"})}},44:function(e,t,c){"use strict";var a=c(40),r=c(41),n=c(34),s=c(1);t.a=function(){var e=function(){var e=Object(s.useState)("waiting"),t=Object(n.a)(e,2),c=t[0],i=t[1],o=Object(s.useCallback)(function(){var e=Object(r.a)(Object(a.a)().mark((function e(t){var c,r,n,s,o,l=arguments;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=l.length>1&&void 0!==l[1]?l[1]:"GET",r=l.length>2&&void 0!==l[2]?l[2]:null,n=l.length>3&&void 0!==l[3]?l[3]:{"Content-Type":"application/json"},i("loading"),e.prev=4,e.next=7,fetch(t,{method:c,body:r,headers:n});case 7:if((s=e.sent).ok){e.next=10;break}throw new Error("Could not fetch ".concat(t,", status: ").concat(s.status));case 10:return e.next=12,s.json();case 12:return o=e.sent,e.abrupt("return",o);case 16:throw e.prev=16,e.t0=e.catch(4),i("error"),e.t0;case 20:case"end":return e.stop()}}),e,null,[[4,16]])})));return function(t){return e.apply(this,arguments)}}(),[]);return{request:o,clearError:Object(s.useCallback)((function(){i("loading")}),[]),process:c,setProcess:i}}(),t=e.request,c=e.clearError,i=e.process,o=e.setProcess,l="https://gateway.marvel.com:443/v1/public/",u="apikey=".concat("37e3f8e34073086314dd008a55fef3c7"),j=function(){var e=Object(r.a)(Object(a.a)().mark((function e(){var c,r,n=arguments;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=n.length>0&&void 0!==n[0]?n[0]:210,e.next=3,t("".concat(l,"characters?limit=9&offset=").concat(c,"&").concat(u));case 3:return r=e.sent,e.abrupt("return",r.data.results.map(O));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=Object(r.a)(Object(a.a)().mark((function e(c){var r;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t("".concat(l,"characters?name=").concat(c,"&").concat(u));case 2:return r=e.sent,e.abrupt("return",r.data.results.map(O));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(r.a)(Object(a.a)().mark((function e(c){var r;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t("".concat(l,"characters/").concat(c,"?").concat(u));case 2:return r=e.sent,e.abrupt("return",O(r.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(r.a)(Object(a.a)().mark((function e(){var c,r,n=arguments;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=n.length>0&&void 0!==n[0]?n[0]:0,e.next=3,t("".concat(l,"comics?orderBy=issueNumber&limit=8&offset=").concat(c,"&").concat(u));case 3:return r=e.sent,e.abrupt("return",r.data.results.map(p));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=Object(r.a)(Object(a.a)().mark((function e(c){var r;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t("".concat(l,"comics/").concat(c,"?").concat(u));case 2:return r=e.sent,e.abrupt("return",p(r.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(e){return{id:e.id,name:e.name,description:e.description?"".concat(e.description.slice(0,210),"..."):"There is no description for this character",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,wiki:e.urls[1].url,comics:e.comics.items}},p=function(e){return{id:e.id,title:e.title,description:e.description||"There is no description",pageCount:e.pageCount?"".concat(e.pageCount," p."):"No information about the number of pages",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,language:e.textObjects.language||"en-us",price:e.prices[0].price?"".concat(e.prices[0].price,"$"):"not available"}};return{clearError:c,process:i,setProcess:o,getAllCharacters:j,getCharacterByName:h,getCharacter:b,getAllComics:d,getComic:m}}},66:function(e,t,c){"use strict";var a=c(13),r=c(38),n=(c(67),c(0)),s=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),Object(n.jsxs)("div",{className:"skeleton",children:[Object(n.jsxs)("div",{className:"pulse skeleton__header",children:[Object(n.jsx)("div",{className:"pulse skeleton__circle"}),Object(n.jsx)("div",{className:"pulse skeleton__mini"})]}),Object(n.jsx)("div",{className:"pulse skeleton__block"}),Object(n.jsx)("div",{className:"pulse skeleton__block"}),Object(n.jsx)("div",{className:"pulse skeleton__block"})]})]})};t.a=function(e,t,c){switch(e){case"waiting":return Object(n.jsx)(s,{});case"loading":return Object(n.jsx)(a.a,{});case"confirmed":return Object(n.jsx)(t,{data:c});case"error":return Object(n.jsx)(r.a,{});default:throw new Error("Unexpected process state")}}},67:function(e,t,c){}}]);
//# sourceMappingURL=6.7408f3ec.chunk.js.map