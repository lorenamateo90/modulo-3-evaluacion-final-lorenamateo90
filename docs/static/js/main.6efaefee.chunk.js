(this.webpackJsonpmytemplete=this.webpackJsonpmytemplete||[]).push([[0],{23:function(e,t,c){},24:function(e,t,c){},30:function(e,t,c){},31:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(1),i=c.n(a),s=c(16),r=c.n(s),l=c(10),j=(c(23),function(){return fetch("https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json").then((function(e){return e.json()})).then((function(e){return e.results.map((function(e){return{id:e.id,name:e.name,species:e.species,image:e.image,status:e.status,episodes:e.episode.length,origin:e.origin.name}}))}))}),o=c(2),d=function(){return Object(n.jsx)("div",{className:"loading"})},m=c(7),u=(c(24),function(e){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(m.b,{to:"/character/".concat(e.id),children:Object(n.jsxs)("li",{className:"item__card--list",id:e.id,children:[Object(n.jsx)("img",{className:"item__card--img",src:e.character.image,alt:"Foto de ".concat(e.character.name),title:"Foto de ".concat(e.character.name)}),Object(n.jsx)("h4",{className:"item__card--title",children:e.character.name}),Object(n.jsx)("p",{className:"item__card--description",children:e.character.species})]},e.id)})})}),h=(c(30),c(8)),b=function(e){var t=e.characters.map((function(e){return Object(n.jsx)(u,{id:e.id,character:e},e.id)}));return Object(n.jsx)("section",{children:Object(n.jsx)("ul",{className:"list",children:t})})};b.prototype={characters:c.n(h).a.array};var O=b,x=(c(31),function(e){return Object(n.jsxs)("div",{className:"form",children:[Object(n.jsx)("label",{className:"form__label",htmlFor:"name",children:"Find your favorite character"}),Object(n.jsx)("input",{className:"form__input-text",type:"text",name:"name",id:"name",onChange:function(t){e.handleFilter({value:t.target.value,key:"nameFilter"})}})]})}),p=(c(32),function(e){return Object(n.jsx)("section",{children:Object(n.jsx)("form",{className:"form",onSubmit:function(e){e.preventDefault(e)},children:Object(n.jsx)(x,{handleFilter:e.handleFilter,nameFilter:e.nameFilter})})})}),f=(c(33),function(e){return console.log(e.image),Object(n.jsx)("div",{className:"container",children:Object(n.jsx)("div",{className:"detail",children:Object(n.jsxs)("section",{className:"detail__section",children:[Object(n.jsx)("img",{className:"detail__img",src:e.image,alt:e.name}),Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{className:"detail__name",children:e.name}),Object(n.jsx)("li",{children:e.species}),Object(n.jsx)("li",{children:e.origin}),Object(n.jsx)("li",{children:e.episodes}),Object(n.jsx)("li",{children:e.status})]}),Object(n.jsx)(m.b,{to:"/",children:Object(n.jsx)("div",{className:"button",children:Object(n.jsx)("p",{children:"Back"})})})]})})})}),g=c.p+"static/media/logo.de13d484.png",v=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),c=t[0],i=t[1],s=Object(a.useState)(""),r=Object(l.a)(s,2),m=r[0],u=r[1],h=Object(a.useState)(!1),b=Object(l.a)(h,2),x=b[0],v=b[1];Object(a.useEffect)((function(){v(!0),j().then((function(e){i(e),v(!1)}))}),[]);var N=c.filter((function(e){return e.name.toUpperCase().includes(m.toUpperCase())}));c.sort((function(e,t){return e.name<t.name?-1:e.name>t.name?1:0}));return Object(n.jsxs)("div",{className:"container",children:[!0===x?Object(n.jsx)(d,{}):null,Object(n.jsxs)("div",{children:[Object(n.jsx)("header",{className:"header",children:Object(n.jsx)("img",{src:g,alt:"Rick and Morty",title:"Rick and Morty"})}),Object(n.jsxs)("main",{children:[Object(n.jsx)(p,{handleFilter:function(e){"nameFilter"===e.key&&u(e.value)}}),Object(n.jsxs)(o.c,{children:[Object(n.jsx)(o.a,{exact:!0,path:"/",children:Object(n.jsx)(O,{nameFilter:m,characters:N})}),Object(n.jsx)(o.a,{path:"/character/:id",component:function(e){var t=parseInt(e.match.params.id),a=c.find((function(e){return t===e.id}));return a?Object(n.jsx)(f,{image:a.image,name:a.name,species:a.species,origin:a.origin,episodes:a.episodes,status:a.status}):Object(n.jsx)("p",{children:"El personaje que busca no existe"})}})]})]})]})]})};r.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(m.a,{children:Object(n.jsx)(v,{})})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.6efaefee.chunk.js.map