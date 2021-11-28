(this["webpackJsonprestaurants-find-on-map"]=this["webpackJsonprestaurants-find-on-map"]||[]).push([[0],{184:function(e,t,n){},186:function(e,t,n){},188:function(e,t,n){},261:function(e,t,n){},280:function(e,t,n){},281:function(e,t,n){},282:function(e,t,n){"use strict";n.r(t);var a,r=n(0),s=n.n(r),c=n(23),i=n.n(c),o=n(43),l=n(288),d=(n(184),n(285)),u=n(168),j=(n(186),n(6));!function(e){e.RESTAURANT_LIST="[RESTAURANT] List",e.SELECTED_RANDOM_RESTAURANT="[RESTAURANT] Random Selected",e.SELECTED_RESTAURANT="[RESTAURANT] Selected"}(a||(a={}));var b=n(7),O=d.a.Search;var h=function(){var e=Object(o.b)();return Object(b.jsx)("section",{children:Object(b.jsxs)("div",{className:"restaurant-finder",children:[Object(b.jsx)(u.a,{type:"primary",size:"large",onClick:function(){e({type:a.SELECTED_RANDOM_RESTAURANT,payload:""})},children:"Pick a Random Restaurant"}),Object(b.jsx)("span",{className:"alter-text",children:"Or"}),Object(b.jsx)(O,{placeholder:"Search restaurant by key word",loading:!1,size:"large"})]})})},p=n(5),v=n(283),g=n(286),x=(n(188),function(e){var t=Object(o.b)(),n=null===e||void 0===e?void 0:e.restaurant,r=n.name,s=n.iconUrl,c=n.address;return Object(b.jsx)(v.b.Item.Meta,{className:"restaurant-item",avatar:Object(b.jsx)(g.a,{src:s,size:80,shape:"square"}),title:Object(b.jsx)("span",{children:r}),description:Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("p",{style:{marginBottom:"5px"},children:c}),Object(b.jsx)(u.a,{type:"primary",size:"small",onClick:function(){e.openRestaurantDetails(),t({type:a.SELECTED_RESTAURANT,payload:null===e||void 0===e?void 0:e.restaurant})},children:"Details"})]})})}),f=n(284),m=n(287),y=n(289),A=(n(261),n(119));var T=function(e){var t=e.lat,n=e.lng,a=e.zoom,r=e.height,s=void 0===r?"260px":r,c=e.width,i=void 0===c?"100%":c;return Object(b.jsx)(A.b,{googleMapsApiKey:"".concat("AIzaSyCeIOoo4vPL3TbcUJjzyisBk0qRXZYqs5s"),children:Object(b.jsx)(A.a,{mapContainerStyle:{height:s,width:i},center:{lat:t,lng:n},zoom:a,children:Object(b.jsx)(A.c,{position:{lat:t,lng:n}})})})},E=f.a.Title;var R=function(e){var t=Object(o.c)((function(e){return e.restaurant.selectedRestaurant})),n=e.visible,a=e.onClose,r=t.name,s=t.category,c=t.geocode,i=t.address,l=t.popularity,d=t.price,u=t.rating,j=t.iconUrl,O=t.distance,h=t.details;return Object(b.jsxs)(m.a,{className:"restaurant-details-drawer",title:"Restaurant details",placement:"right",width:600,onClose:a,visible:n,style:{padding:0},children:[Object(b.jsx)(T,{lat:c.latitude,lng:c.longitude,zoom:16}),Object(b.jsxs)("div",{className:"restaurant-details",children:[Object(b.jsx)(E,{level:2,children:r}),Object(b.jsx)(E,{level:5,children:i}),!!h&&Object(b.jsx)("p",{children:h}),Object(b.jsxs)(y.b,{size:10,className:"categories",children:[Object(b.jsx)(g.a,{src:j}),Object(b.jsx)("span",{children:s})]}),Object(b.jsxs)("ul",{children:[!!O&&Object(b.jsxs)("li",{children:[Object(b.jsx)("b",{children:"Distance:"})," ",O,"Km"]}),!!l&&Object(b.jsxs)("li",{children:[Object(b.jsx)("b",{children:"Popularity:"})," ",l]}),!!d&&Object(b.jsxs)("li",{children:[Object(b.jsx)("b",{children:"Price:"})," ",d]}),!!u&&Object(b.jsxs)("li",{children:[Object(b.jsx)("b",{children:"Rating:"})," ",u]})]})]})]})};var N,S=function(){var e,t=Object(r.useState)(!1),n=Object(p.a)(t,2),a=n[0],s=n[1];e=Object(o.c)((function(e){return e.restaurant.restaurants}));var c=function(){s(!0)};return Object(b.jsxs)("section",{children:[Object(b.jsx)(v.b,{grid:{gutter:30,xs:1,sm:1,md:2,lg:2,xl:3,xxl:3},itemLayout:"vertical",dataSource:e,renderItem:function(e,t){return Object(b.jsx)(v.b.Item,{style:{marginBottom:"30px"},children:Object(b.jsx)(x,{restaurant:e,openRestaurantDetails:c})},t)}}),a?Object(b.jsx)(R,{visible:a,onClose:function(){s(!1)}}):""]})};!function(e){e.UPDATE_LOCATION_GEOCODE="[LOCATION] Update Geocode",e.UPDATE_LOCATION_RADIUS="[LOCATION] Update Radius"}(N||(N={}));var C=n(32),U=n.n(C),_=n(52),D=n(163),I=n.n(D),L=n(9),k=function(){function e(t){Object(j.a)(this,e),this.id=void 0,this.name=void 0,this.address=void 0,this.iconUrl=void 0,this.geocode=void 0,this.details=void 0,this.category=void 0,this.contact=void 0,this.popularity=void 0,this.price=void 0,this.rating=void 0,this.distance=void 0,this.id=t.fsq_id,this.name=t.name,this.address=this.generateAddress(t.location),this.geocode=t.geocodes.main,this.iconUrl=t.categories[0]?this.generateCategoryIconUrl(t.categories[0]):"",this.distance=(t.distance/1e3).toFixed(2),this.category=t.categories[0]?t.categories[0].name:null}return Object(L.a)(e,[{key:"generateAddress",value:function(e){var t=e.cross_street?" "+e.cross_street:"",n=e.locality?" "+e.locality:"";return(null===e||void 0===e?void 0:e.address)?null===e||void 0===e?void 0:e.address:e.country+t+n}},{key:"generateCategoryIconUrl",value:function(e){return e.icon.prefix+"120"+e.icon.suffix}}]),e}();function w(){return(w=Object(_.a)(U.a.mark((function e(){var t,n,a,r;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://my-json-server.typicode.com/ashikjs/restaurant-find-json-db",n="".concat("https://my-json-server.typicode.com/ashikjs/restaurant-find-json-db","/restaurants"),a={Accept:"application/json"},e.next=5,I.a.get(n,{headers:a});case 5:if(200!==(r=e.sent).status){e.next=8;break}return e.abrupt("return",null===(t=r.data)||void 0===t?void 0:t.map((function(e){return new k(e)})));case 8:return e.abrupt("return",null);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var P={latitude:23.7815271,longitude:90.3982979};var z=function(){var e=Object(o.b)();return e({type:N.UPDATE_LOCATION_GEOCODE,payload:P}),e({type:N.UPDATE_LOCATION_RADIUS,payload:300}),function(){return w.apply(this,arguments)}().then((function(t){e({type:a.RESTAURANT_LIST,payload:t})})).catch((function(e){console.info("GetAllRestaurants::",e)})),Object(b.jsxs)("div",{className:"Home wrapper-container",children:[Object(b.jsx)(h,{}),Object(b.jsx)(S,{})]})},M=(n(280),n(45));var F=function(){return Object(b.jsx)(M.c,{children:Object(b.jsx)("div",{className:"logo",children:Object(b.jsx)("img",{src:"images/logo.png",className:"App-logo",alt:"logo"})})})};var B=function(){return Object(b.jsx)(M.b,{style:{textAlign:"center"},children:"\xa9 2021 Today All Rights Reserved"})},G=l.a.Content;var q=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)(l.a,{className:"layout",children:[Object(b.jsx)(F,{}),Object(b.jsx)(G,{children:Object(b.jsx)("div",{className:"site-layout-content",children:Object(b.jsx)(z,{})})}),Object(b.jsx)(B,{})]})})},J=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,290)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),s(e),c(e)}))},K=n(85),H=n(164),V=n(1),X={geocode:{latitude:0,longitude:0},radius:0,categories:13e3,sort:"RELEVANCE",limit:50};var Y={restaurants:[],selectedRestaurant:null};var Z=Object(K.b)({location:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N.UPDATE_LOCATION_GEOCODE:return Object(V.a)(Object(V.a)({},e),{},{geocode:t.payload});case N.UPDATE_LOCATION_RADIUS:return Object(V.a)(Object(V.a)({},e),{},{radius:t.payload});default:return e}},restaurant:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case a.RESTAURANT_LIST:return Object(V.a)(Object(V.a)({},e),{},{restaurants:t.payload});case a.SELECTED_RANDOM_RESTAURANT:var n=Math.floor(Math.random()*e.restaurants.length);return Object(V.a)(Object(V.a)({},e),{},{selectedRestaurant:e.restaurants[n]});case a.SELECTED_RESTAURANT:return Object(V.a)(Object(V.a)({},e),{},{selectedRestaurant:t.payload});default:return e}}}),Q=Z,W=function(e){return function(t){return function(n){console.group(n.type),console.info("dispatching",n);var a=t(n);return console.log("next state",e.getState()),console.groupEnd(),a}}};n(281);var $=function(e){var t=Object(K.a)(W,H.a);return Object(K.c)(Q,e,t)}();i.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(o.a,{store:$,children:Object(b.jsx)(q,{})})}),document.getElementById("root")),J()}},[[282,1,2]]]);
//# sourceMappingURL=main.7fb4c47f.chunk.js.map