(this.webpackJsonpreminders2=this.webpackJsonpreminders2||[]).push([[0],{11:function(e,t,n){e.exports=n(18)},16:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(4),i=n(6),r=n(9),o=n(7),c=n(1),l=n(2),u=n(10),d=n(0),s=n.n(d),m=n(8),h=n.n(m),p=(n(16),n(17),n(3)),f=n.n(p);var v=function(e){return s.a.createElement("div",null,s.a.createElement("h1",null,"Reminders",s.a.createElement("span",{id:"heading-full-stop"},".")),s.a.createElement("div",{id:"input-container"},s.a.createElement("input",{id:"text-input",autocomplete:"off",type:"text",placeholder:"Type a reminder...",onChange:e.onChange,value:e.newItem,"aria-label":"Type your reminders here"}),s.a.createElement("img",{id:"add-button",alt:"add button",src:f.a,onClick:e.onClick})),e.array.map((function(t){return s.a.createElement("div",{id:"item-container"},s.a.createElement("li",{key:t.id},s.a.createElement("span",{id:"bullet-point"},"."),s.a.createElement("span",{id:"list-text"},t.value)),s.a.createElement("img",{id:"remove-button",alt:"remove button",src:f.a,onClick:function(){return e.deleteItem(t.id)}}))})),document.addEventListener("keyup",(function(t){13===t.keyCode&&e.onClick()})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var y=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(r.a)(this,Object(o.a)(t).call(this,e))).state={array:[],newItem:""},n.handleChange=n.handleChange.bind(Object(c.a)(n)),n.handleClick=n.handleClick.bind(Object(c.a)(n)),n.deleteItem=n.deleteItem.bind(Object(c.a)(n)),n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){document.querySelector("#text-input").focus()}}]),Object(l.a)(t,[{key:"handleChange",value:function(e){this.setState({newItem:e.target.value})}},{key:"handleClick",value:function(){if(this.state.newItem){var e={id:1+Math.random(),value:this.state.newItem},t=Object(a.a)(this.state.array);t.push(e),this.setState({array:t,newItem:""}),document.querySelector("#text-input").focus()}}},{key:"deleteItem",value:function(e){var t=Object(a.a)(this.state.array).filter((function(t){return t.id!==e}));this.setState({array:t})}},{key:"render",value:function(){return s.a.createElement(v,{array:this.state.array,onChange:this.handleChange,onClick:this.handleClick,newItem:this.state.newItem,deleteItem:this.deleteItem})}}]),t}(s.a.Component);h.a.render(s.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},3:function(e,t,n){e.exports=n.p+"static/media/plus.a5cdd35d.svg"}},[[11,1,2]]]);
//# sourceMappingURL=main.8f66c47d.chunk.js.map