(this.webpackJsonplabreakview=this.webpackJsonplabreakview||[]).push([[0],{29:function(e,t,n){e.exports=n(92)},34:function(e,t,n){},92:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(10),i=n.n(o),c=(n(34),n(15)),s=n.n(c),l=n(28),u=n(27),d=n.n(u),f=n(7),h=n.n(f),m=(n(91),"http://food.engjole.net/labreak");var v=function(){var e=r.a.useState([]),t=Object(l.a)(e,2),n=t[0],a=t[1];r.a.useEffect((function(){!function(){var e;s.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.awrap(fetch(m).then((function(e){return e.json()})));case 2:e=t.sent,a(e),console.log(e);case 5:case"end":return t.stop()}}))}()}),[]);var o=[{dataField:"name",text:"Restaurant Name",sort:!0,filter:Object(f.textFilter)()},{dataField:"cuisine",text:"Cuisine",sort:!0,filter:Object(f.textFilter)()},{dataField:"pricerange",text:"Price",sort:!0,filter:Object(f.textFilter)()},{dataField:"neighborhood1",text:"Neighborhood",sort:!0,filter:Object(f.textFilter)()}];return r.a.createElement("div",{class:"container"},r.a.createElement(d.a,{keyField:"name",data:n,columns:o,filter:h()()}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[29,1,2]]]);
//# sourceMappingURL=main.85fe318d.chunk.js.map