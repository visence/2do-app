(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,t,o){e.exports=o(40)},39:function(e,t,o){},40:function(e,t,o){"use strict";o.r(t);var a=o(0),n=o.n(a),r=o(24),i=o.n(r),l=o(18),c=o(5),d=o(6),u=o(8),s=o(7),p=o(9),m=o(14),f=o(10),b=o(11),h=o.n(b);var v={textAlign:"center",background:"#333",color:"#fff",padding:"8px",fontFamily:"Courier"},y={color:"#fff",textDecoration:"none",fontFamily:"Tahoma",margin:"5px"},g=function(){return n.a.createElement("header",{style:v},n.a.createElement("h1",null,"ToDo List"),n.a.createElement(m.b,{style:y,to:"/"},"Home"),n.a.createElement(m.b,{style:y,to:"/about"},"About"))},E=o(27),j=function(e){function t(){var e,o;Object(c.a)(this,t);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(o=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(n)))).state={title:""},o.onChange=function(e){return o.setState(Object(E.a)({},e.target.name,e.target.value))},o.onSubmit=function(e){e.preventDefault(),o.props.addTodo(o.state.title),o.setState({title:""})},o}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return n.a.createElement("form",{style:{display:"flex"},onSubmit:this.onSubmit},n.a.createElement("input",{type:"text",name:"title",style:{flex:"10",padding:"10px"},placeholder:"Add Todo...",value:this.state.title,onChange:this.onChange}),n.a.createElement("input",{type:"submit",value:"Add",className:"btn-sbmt",style:{flex:"1",padding:"10px"}}))}}]),t}(a.Component),O=function(e){function t(e){var o;return Object(c.a)(this,t),(o=Object(u.a)(this,Object(s.a)(t).call(this,e))).getStyle=function(){return{backgroundColor:"#f3f3f3",padding:"10px",borderBottom:"1px solid #ccc",textDecoration:o.props.todo.completed?"line-through":"none",fontStyle:o.props.todo.completed?"italic":"normal",color:o.props.todo.completed?"#888":"#000"}},o.state={},o}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props.todo,t=e.id,o=e.title;return n.a.createElement("p",{style:this.getStyle()},n.a.createElement("input",{type:"checkbox",onChange:this.props.markComplete.bind(this,t)}),o,n.a.createElement("button",{onClick:this.props.delTodo.bind(this,t),style:x},"x"))}}]),t}(a.Component),x={border:"none",background:"#f00",color:"#fff",padding:"4px 7.5px",float:"right",cursor:"pointer"},k=O,C=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return this.props.todos.map(function(t){return n.a.createElement(k,{todo:t,key:t.id,markComplete:e.props.markComplete,delTodo:e.props.delTodo})})}}]),t}(a.Component);var T=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("h2",{style:{padding:"20px"}},"About page"),n.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas soluta numquam praesentium enim minus corporis ducimus provident fuga id impedit, porro optio error ab quibusdam et deserunt dolore beatae tenetur a quis modi, sit voluptatem. Porro quia culpa maxime, eveniet voluptate iusto, beatae itaque consectetur laboriosam soluta mollitia alias quae?"))},S=(o(39),function(e){function t(){var e,o;Object(c.a)(this,t);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(o=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(n)))).state={todos:[{id:h.a.v4(),title:"Weep not for roads untraveled",completed:!1},{id:h.a.v4(),title:"Weep not for sights unseen",completed:!1},{id:h.a.v4(),title:"May your love never end",completed:!1},{id:h.a.v4(),title:"And if you need a friend",completed:!1},{id:h.a.v4(),title:"There is a seat here alongside me",completed:!1}]},o.markComplete=function(e){o.setState({todos:o.state.todos.map(function(t){return t.id===e&&(t.completed=!t.completed),t})})},o.delTodo=function(e){o.setState({todos:Object(l.a)(o.state.todos.filter(function(t){return t.id!==e}))})},o.addTodo=function(e){var t={id:h.a.v4(),title:e,completed:!1};o.setState({todos:[].concat(Object(l.a)(o.state.todos),[t])})},o}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement(m.a,null,n.a.createElement("div",{className:"App"},n.a.createElement("div",{className:"container"},n.a.createElement(g,null),n.a.createElement(f.a,{exact:!0,path:"/",render:function(t){return n.a.createElement(n.a.Fragment,null,n.a.createElement(j,{addTodo:e.addTodo}),n.a.createElement(C,{todos:e.state.todos,markComplete:e.markComplete,delTodo:e.delTodo}))}}),n.a.createElement(f.a,{path:"/about",component:T}))))}}]),t}(a.Component));i.a.render(n.a.createElement(S,null),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.6ce6352d.chunk.js.map