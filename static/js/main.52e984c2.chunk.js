(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{16:function(e,t,n){e.exports=n(30)},21:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(6),c=n.n(a),i=(n(21),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function s(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n(22);var l=n(7),u=n(5),h=n(14),d=n(15),f=n(1),b=n(2),p=n(4),m=n(3),v=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(e){var r;return Object(f.a)(this,n),(r=t.call(this,e)).incrementCount=function(){r.setState((function(e){return{count:e.count+1}}))},r.state={count:0},r}return Object(b.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return this.state.count!==t.count}},{key:"render",value:function(){return o.a.createElement("button",{id:"counter",color:this.props.color,onClick:this.incrementCount},"Count: ",this.state.count)}}]),n}(r.Component),g=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(){return Object(f.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return!1}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h1",{className:"f1"},"RoboFriends"),o.a.createElement(v,null))}}]),n}(r.Component),E=function(e){var t=e.name,n=e.email,r=e.id;return o.a.createElement("div",{className:"tc bg-light-green dib  br3 pa3 ma2 grow bw2 shadow-5"},o.a.createElement("img",{alt:"Robots",src:"https://robohash.org/".concat(r,"?size=200x200")}),o.a.createElement("div",null,o.a.createElement("h2",null,t),o.a.createElement("p",null,n)))},O=function(e){var t=e.robots;return o.a.createElement("div",null,t.map((function(e){return o.a.createElement(E,{key:e.id,id:e.id,name:e.name,email:e.email})})))},y=function(e){var t=e.searchChange;return o.a.createElement("div",{className:"pa2"},o.a.createElement("input",{"aria-label":"Search Robots",className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t}))},w=function(e){return o.a.createElement("div",{style:{overflowY:"scroll",border:"5px solid black",height:"800px"}},e.children)},R=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(e){var r;return Object(f.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(b.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?o.a.createElement("h1",null,"Oooops. That is not good"):this.props.children}}]),n}(r.Component),j=(n(28),function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(f.a)(this,n);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).filterRobots=function(){return e.props.robots.filter((function(t){return t.name.toLowerCase().includes(e.props.searchField.toLowerCase())}))},e}return Object(b.a)(n,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e,t=this.props,n=t.onSearchChange,r=t.isPending,a=this.filterRobots();return e=a.length?o.a.createElement(w,null,o.a.createElement(R,null,o.a.createElement(O,{robots:a}))):o.a.createElement("h1",null,"Oooops. No robots with that name"),r?o.a.createElement("h1",null,"Loading"):o.a.createElement("div",{className:"tc"},o.a.createElement(g,null),o.a.createElement(y,{searchChange:n}),e)}}]),n}(r.Component)),C=(n(29),function(){return function(e){var t;e({type:"REQUEST_ROBOTS_PENDING"}),(t="https://jsonplaceholder.typicode.com/users",fetch(t).then((function(e){return e.json()}))).then((function(t){e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})})).catch((function(t){return e({type:"REQUEST_ROBOTS_FAILED",payload:t})}))}}),S=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(){return Object(f.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){return o.a.createElement(j,this.props)}}]),n}(r.Component),k=Object(l.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}}),(function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.currentTarget.value})},onRequestRobots:function(){return e(C())}}}))(S),T={searchField:""},_={isPending:!1,robots:[],error:""},N=Object(h.createLogger)(),U=Object(u.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object.assign({},e,{isPending:!1,robots:t.payload});case"REQUEST_ROBOTS_FAILED":return Object.assign({},e,{isPending:!1,error:t.payload});default:return e}}}),A=Object(u.d)(U,Object(u.a)(d.a,N));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(l.a,{store:A},o.a.createElement(k,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/Robofriends",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/Robofriends","/service-worker.js");i?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):s(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):s(t,e)}))}}()}},[[16,1,2]]]);
//# sourceMappingURL=main.52e984c2.chunk.js.map