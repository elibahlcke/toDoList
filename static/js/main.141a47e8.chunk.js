(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(7),i=n.n(s),o=n(8),d=n(4),r=(n(13),n(0)),l=function(e){var t=Object(c.useState)(""),n=Object(d.a)(t,2),a=n[0],s=n[1],i=e.handleAddItem;return Object(r.jsx)("form",{onSubmit:function(e){e.preventDefault(),i({done:!1,id:(+new Date).toString(),description:a}),s("")},children:Object(r.jsx)("div",{className:"todo-list",children:Object(r.jsxs)("div",{className:"file-input",children:[Object(r.jsx)("input",{type:"text",className:"text",value:a,onChange:function(e){return s(e.target.value)}}),Object(r.jsx)("button",{className:"button violet",disabled:a?"":"disabled",children:"Add"})]})})})},j=n(6),u=function(e){var t=e.onChange,n=e.data,a=n.id,s=n.description,i=n.done;return Object(r.jsx)(c.Fragment,{children:Object(r.jsxs)("label",{className:"todo new-item",children:[Object(r.jsx)("input",{type:"checkbox",className:"todo__state",name:a,defaultChecked:i,onChange:t}),Object(r.jsx)("div",{className:"todo__text",children:s})]})})},b=function(e){var t=e.list,n=e.setList,c=function(e){var c=e.target,a=c.name,s=c.checked,i=t.map((function(e){return Object(j.a)(Object(j.a)({},e),{},{done:e.id===a?s:e.done})}));n(i)},a=t.map((function(e){return Object(r.jsx)(u,{data:e,onChange:c},e.id)}));return Object(r.jsxs)("div",{className:"todo-list",children:[t.length?a:"No Tasks",t.length?Object(r.jsx)("p",{children:Object(r.jsx)("button",{className:"button blue",onClick:function(e){var c=t.filter((function(e){return!e.done}));n(c)},children:"Delete all done tasks."})}):null]})},h=(n(15),function(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),n=t[0],a=t[1];return Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)(l,{handleAddItem:function(e){a([].concat(Object(o.a)(n),[e]))}}),Object(r.jsx)(b,{list:n,setList:a})]})});n(16);var O=function(){return Object(r.jsx)("div",{className:"app",children:Object(r.jsx)(h,{})})};i.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(O,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.141a47e8.chunk.js.map