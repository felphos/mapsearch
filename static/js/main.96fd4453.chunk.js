(this["webpackJsonpmapbox-search"]=this["webpackJsonpmapbox-search"]||[]).push([[0],{24:function(e,t,n){},25:function(e,t,n){},43:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),o=n(18),s=n.n(o),l=(n(24),n(19)),i=n(2),u=(n(25),n(3)),r=n.n(u),b=(n(43),n(0)),p=function(e){var t=e.latitude,n=e.longitude,c=Object(a.useState)(e.style),o=Object(i.a)(c,2),s=o[0],l=o[1];return Object(a.useEffect)((function(){r.a.accessToken="pk.eyJ1IjoiZmVscGhvcyIsImEiOiJja24wa3llb2wwNzUxMnZuendxb2lib2FkIn0.bVCYhQO1_ca4-1yEtvmYiw";var a=new r.a.Map({container:"map",style:s,center:[n,t],zoom:12}),c=new r.a.NavigationControl;a.addControl(c,"top-right"),e.changeMap(a)}),[]),Object(a.useEffect)((function(){l(e.style),e.map&&e.map.setStyle(e.style)}),[e.style,e.map]),Object(b.jsx)("div",{id:"map"})},d=(n(45),function(e){var t=Object(a.useState)(""),n=Object(i.a)(t,2),c=n[0],o=n[1];return Object(b.jsx)("div",{className:"search",children:Object(b.jsx)("form",{onSubmit:function(t){t.preventDefault();var n="https://api.mapbox.com/geocoding/v5/mapbox.places/".concat(c,".json?proximity=").concat(e.longitude,",").concat(e.latitude,"&access_token=").concat("pk.eyJ1IjoiZmVscGhvcyIsImEiOiJja24wa3llb2wwNzUxMnZuendxb2lib2FkIn0.bVCYhQO1_ca4-1yEtvmYiw");fetch(n).then((function(e){return e.json()})).then((function(t){if(t.features.length){var n=t.features[0],a=n.center[1],s=n.center[0];e.addPlaces(c,a,s),o("")}else console.log("Nothing found for ".concat(c))}))},children:Object(b.jsx)("input",{value:c,onChange:function(e){var t=e.target.value;o(t)},placeholder:"Add place..."})})})}),j=(n(46),function(e){var t=e.place,n=e.map;if(n){var a=new r.a.Popup({closeButton:!1});a.setHTML(t.name);var c=new r.a.Marker({color:"#2727e6"});c.setLngLat([t.longitude,t.latitude]),c.setPopup(a),c.addTo(n)}return Object(b.jsx)("div",{className:"place-item",onClick:function(){n.flyTo({center:[t.longitude,t.latitude],zoom:17})},children:t.name})}),m=function(e){var t=Object(a.useState)(e.places),n=Object(i.a)(t,2),c=n[0],o=n[1],s=Object(b.jsx)("div",{className:"no-results",children:"Nothing added yet"});return c.length>0&&(s=c.map((function(t,n){return Object(b.jsx)(j,{map:e.map,place:t},n)}))),Object(a.useEffect)((function(){c&&o(e.places)}),[e.places,c]),Object(b.jsx)("div",{className:"places",children:s})},f=(n(47),function(e){var t=[{name:"Satellite",url:"mapbox://styles/mapbox/satellite-streets-v11"},{name:"Light",url:"mapbox://styles/mapbox/light-v10"},{name:"Dark",url:"mapbox://styles/mapbox/dark-v10"}].map((function(t,n){var a="";return t.url===e.style&&(a="selected"),Object(b.jsx)("button",{className:a,onClick:function(){return e.changeStyle(t.url)},children:t.name},n)}));return Object(b.jsx)("div",{className:"toggler",children:t})});var h=function(){var e=Object(a.useState)(null),t=Object(i.a)(e,2),n=t[0],c=t[1],o=52.0786,s=4.2887,u=Object(a.useState)("mapbox://styles/mapbox/satellite-streets-v11"),r=Object(i.a)(u,2),j=r[0],h=r[1],O=Object(a.useState)([]),v=Object(i.a)(O,2),x=v[0],g=v[1];return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(d,{addPlaces:function(e,t,n){g([].concat(Object(l.a)(x),[{name:e,latitude:t,longitude:n}]))},latitude:o,longitude:s}),Object(b.jsx)(m,{map:n,places:x}),Object(b.jsx)(f,{changeStyle:function(e){h(e)},style:j}),Object(b.jsx)(p,{map:n,changeMap:function(e){c(e)},latitude:o,longitude:s,style:j})]})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,49)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),o(e),s(e)}))};s.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(h,{})}),document.getElementById("root")),O()}},[[48,1,2]]]);
//# sourceMappingURL=main.96fd4453.chunk.js.map