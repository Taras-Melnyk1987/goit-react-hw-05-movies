"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[290,389],{9290:function(e,n,t){t.r(n),t.d(n,{MovieDetailsPage:function(){return x}});var r=t(5861),a=t(885),c=t(7757),s=t.n(c),u=t(2791),i=t(6871),o=t(501),l=t(3243),f=t(3020),p=t(6355),d=t(3389),v=t(184),x=function(){var e,n,t,c=(0,i.UO)().movieId,x=(0,u.useState)(!1),h=(0,a.Z)(x,2),g=h[0],m=h[1],j=(0,u.useState)(null),w=(0,a.Z)(j,2),_=w[0],b=w[1],y=(0,i.TH)();return(0,u.useEffect)((function(){function e(){return(e=(0,r.Z)(s().mark((function e(){var n,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.TP(c);case 3:n=e.sent,t=n.data,b(t),m(!1),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0),m(!1);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}m(!0),function(){e.apply(this,arguments)}()}),[c]),(0,v.jsxs)(d.MovieDetailsStyles,{children:[g&&(0,v.jsx)(f.aN,{}),_&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(o.rU,{to:null!==(e=null===y||void 0===y||null===(n=y.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/",state:{from:y},children:(0,v.jsx)(f.zx,{type:"button",text:"Go back",icon:(0,v.jsx)(p.neq,{})})}),(0,v.jsx)(f.xI,{info:_}),(0,v.jsx)(f.Lq,{location:null===y||void 0===y||null===(t=y.state)||void 0===t?void 0:t.from}),(0,v.jsxs)(i.Z5,{children:[(0,v.jsx)(i.AW,{path:"cast",element:(0,v.jsx)(f.RF,{cast:_.credits.cast})}),(0,v.jsx)(i.AW,{path:"reviews",element:(0,v.jsx)(f.Zv,{reviews:_.reviews})})]}),(0,v.jsx)(f._J,{children:(0,v.jsx)(i.j3,{})})]})]})}},3389:function(e,n,t){t.r(n),t.d(n,{MovieDetailsStyles:function(){return c}});var r,a=t(168),c=t(5751).default.div(r||(r=(0,a.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding-top: ",";\n  padding-bottom: ",";\n"])),(function(e){return(0,e.theme.spacing)(4)}),(function(e){return(0,e.theme.spacing)(4)}))},3243:function(e,n,t){t.d(n,{UF:function(){return o},gH:function(){return l},TP:function(){return f}});var r=t(5861),a=t(7757),c=t.n(a),s=t(4569),u=t.n(s);u().defaults.baseURL="https://api.themoviedb.org/3";var i="6f1bc6aab5795c267839d2d6fa4537b9",o=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u().get("/trending/movie/".concat(n,"?api_key=").concat(i,"&language=en-US&include_adult=false"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u().get("search/movie?api_key=".concat(i,"&query=").concat(n,"&language=en-US&include_adult=false"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u().get("movie/".concat(n,"?api_key=").concat(i,"&language=en-US&append_to_response=credits,reviews"));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=290.50911dd5.chunk.js.map