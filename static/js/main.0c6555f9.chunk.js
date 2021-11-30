(this["webpackJsonprestaurants-find-on-map"]=this["webpackJsonprestaurants-find-on-map"]||[]).push([[0],{183:function(e,t,a){},184:function(e,t,a){},255:function(e,t,a){},278:function(e,t,a){},279:function(e,t,a){},280:function(e,t,a){},281:function(e,t,a){"use strict";a.r(t);var n,r=a(0),s=a.n(r),c=a(23),i=a.n(c),o=a(43),l=a(287),d=(a(183),a(5)),u=a(167),j=a(284),b=(a(184),a(6));!function(e){e.RESTAURANT_LIST="[RESTAURANT] List",e.SELECTED_RANDOM_RESTAURANT="[RESTAURANT] Random Selected",e.SELECTED_RESTAURANT="[RESTAURANT] Selected"}(n||(n={}));var O=a(7);function h(e){var t=Object(o.b)(),a=Object(r.useCallback)(function(e,t){var a,n=void 0;return function(){var r=arguments;clearTimeout(a),a=setTimeout((function(){e.apply(n,r)}),t)}}((function(t){return e.onSearchRestaurant(t.target.value)}),600),[]);return Object(O.jsx)("section",{children:Object(O.jsxs)("div",{className:"restaurant-finder",children:[Object(O.jsx)(u.a,{type:"primary",size:"large",onClick:function(){t({type:n.SELECTED_RANDOM_RESTAURANT,payload:""}),e.openRestaurantDetails()},"data-testid":"randomRestaurant",children:"Pick a Random Restaurant"}),Object(O.jsx)("span",{className:"alter-text",children:"Or"}),Object(O.jsx)(j.a,{allowClear:!0,onChange:a,placeholder:"Search by name or category",size:"large"})]})})}var p=s.a.memo(h),v=a(282),g=a(283),f=a(285),x=(a(255),g.a.Paragraph),m=function(e){var t=Object(o.b)(),a=null===e||void 0===e?void 0:e.restaurant,r=a.name,s=a.iconUrl,c=a.address,i=a.category;return Object(O.jsx)(v.b.Item.Meta,{className:"restaurant-item",avatar:Object(O.jsx)(f.a,{src:s,size:80,shape:"square",alt:i}),title:Object(O.jsx)(x,{ellipsis:!0,children:r}),description:Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(x,{ellipsis:!0,children:c}),Object(O.jsx)(u.a,{type:"primary",size:"small",onClick:function(){e.openRestaurantDetails(),t({type:n.SELECTED_RESTAURANT,payload:null===e||void 0===e?void 0:e.restaurant})},children:"Details"})]})})};function y(e){var t;return t=Object(o.c)((function(e){var t;return null===e||void 0===e||null===(t=e.restaurant)||void 0===t?void 0:t.restaurants})),e.skey&&(t=t.filter((function(t){var a,n;return-1!==(null===(a=t.name)||void 0===a?void 0:a.toLowerCase().indexOf(e.skey.toLowerCase()))||-1!==(null===(n=t.category)||void 0===n?void 0:n.toLowerCase().indexOf(e.skey.toLowerCase()))}))),Object(O.jsx)("section",{children:Object(O.jsx)(v.b,{grid:{gutter:30,xs:1,sm:1,md:2,lg:2,xl:3,xxl:3},itemLayout:"vertical",dataSource:t,renderItem:function(t,a){return Object(O.jsx)(v.b.Item,{style:{marginBottom:"30px"},children:Object(O.jsx)(m,{restaurant:t,openRestaurantDetails:e.openRestaurantDetails})},a)}})})}var A,T=s.a.memo(y);!function(e){e.UPDATE_LOCATION_GEOCODE="[LOCATION] Update Geocode",e.UPDATE_LOCATION_RADIUS="[LOCATION] Update Radius"}(A||(A={}));var R=a(32),E=a.n(R),C=a(50),N=a(161),S=a.n(N),D=a(9),U=function(){function e(t){Object(b.a)(this,e),this.id=void 0,this.name=void 0,this.address=void 0,this.iconUrl=void 0,this.geocode=void 0,this.details=void 0,this.category=void 0,this.contact=void 0,this.popularity=void 0,this.price=void 0,this.rating=void 0,this.distance=void 0,this.id=t.fsq_id,this.name=t.name,this.address=this.generateAddress(t.location),this.geocode=t.geocodes.main,this.iconUrl=t.categories[0]?this.generateCategoryIconUrl(t.categories[0]):"",this.distance=(t.distance/1e3).toFixed(2),this.category=t.categories[0]?t.categories[0].name:null}return Object(D.a)(e,[{key:"generateAddress",value:function(e){var t=e.cross_street?" "+e.cross_street:"",a=e.locality?" "+e.locality:"";return(null===e||void 0===e?void 0:e.address)?null===e||void 0===e?void 0:e.address:e.country+t+a}},{key:"generateCategoryIconUrl",value:function(e){return e.icon.prefix+"120"+e.icon.suffix}}]),e}();function L(){return(L=Object(C.a)(E.a.mark((function e(){var t,a,n,r;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://my-json-server.typicode.com/ashikjs/restaurant-find-json-db",a="".concat("https://my-json-server.typicode.com/ashikjs/restaurant-find-json-db","/restaurants"),n={Accept:"application/json"},e.next=5,S.a.get(a,{headers:n});case 5:if(200!==(r=e.sent).status){e.next=8;break}return e.abrupt("return",null===(t=r.data)||void 0===t?void 0:t.map((function(e){return new U(e)})));case 8:return e.abrupt("return",null);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var _=a(286),I=a(288),k=(a(278),a(118));function w(e){var t=e.lat,a=e.lng,n=e.zoom,r=e.height,s=void 0===r?"260px":r,c=e.width,i=void 0===c?"100%":c,o="AIzaSyCeIOoo4vPL3TbcUJjzyisBk0qRXZYqs5s",l=Object(k.c)({googleMapsApiKey:o}),d=l.isLoaded;return l.loadError?Object(O.jsx)("div",{children:"Map cannot be loaded right now, sorry."}):d?Object(O.jsx)(k.a,{mapContainerStyle:{height:s,width:i},center:{lat:t,lng:a},zoom:n,children:Object(O.jsx)(k.b,{position:{lat:t,lng:a}})}):Object(O.jsx)("p",{children:"Loading..."})}var P=s.a.memo(w),z=g.a.Title;function M(e){var t=Object(o.c)((function(e){return e.restaurant.selectedRestaurant})),a=e.visible,n=e.onClose,r=t.name,s=t.category,c=t.geocode,i=t.address,l=t.popularity,d=t.price,u=t.rating,j=t.iconUrl,b=t.distance,h=t.details;return Object(O.jsxs)(_.a,{className:"restaurant-details-drawer",title:"Restaurant details",placement:"right",width:600,onClose:n,visible:a,style:{padding:0},children:[Object(O.jsx)("div",{className:"map-wrapper",children:Object(O.jsx)(P,{lat:c.latitude,lng:c.longitude,zoom:16})}),Object(O.jsxs)("div",{className:"restaurant-details",children:[Object(O.jsx)(z,{level:2,children:r}),Object(O.jsx)(z,{level:5,children:i}),!!h&&Object(O.jsx)("p",{children:h}),Object(O.jsxs)(I.b,{size:10,className:"categories",children:[Object(O.jsx)(f.a,{src:j,alt:s}),Object(O.jsx)("span",{children:s})]}),Object(O.jsxs)("ul",{children:[!!b&&Object(O.jsxs)("li",{children:[Object(O.jsx)("b",{children:"Distance:"})," ",b,"Km"]}),!!l&&Object(O.jsxs)("li",{children:[Object(O.jsx)("b",{children:"Popularity:"})," ",l]}),!!d&&Object(O.jsxs)("li",{children:[Object(O.jsx)("b",{children:"Price:"})," ",d]}),!!u&&Object(O.jsxs)("li",{children:[Object(O.jsx)("b",{children:"Rating:"})," ",u]})]})]})]})}var F=s.a.memo(M),q={latitude:23.7815271,longitude:90.3982979};var B=function(){var e=Object(o.b)(),t=Object(r.useState)(!1),a=Object(d.a)(t,2),s=a[0],c=a[1],i=Object(r.useState)(!1),l=Object(d.a)(i,2),u=l[0],j=l[1],b=Object(r.useCallback)((function(){c(!0)}),[]),h=Object(r.useCallback)((function(e){j(e)}),[]),v=Object(r.useCallback)((function(){c(!1)}),[]);return Object(r.useEffect)((function(){e({type:A.UPDATE_LOCATION_GEOCODE,payload:q}),e({type:A.UPDATE_LOCATION_RADIUS,payload:300}),function(){return L.apply(this,arguments)}().then((function(t){e({type:n.RESTAURANT_LIST,payload:t})})).catch((function(e){console.info(e)}))}),[]),Object(O.jsxs)("div",{className:"Home wrapper-container",children:[Object(O.jsx)(p,{openRestaurantDetails:b,onSearchRestaurant:h}),Object(O.jsx)(T,{openRestaurantDetails:b,skey:u}),s?Object(O.jsx)(F,{visible:s,onClose:v}):""]})},G=(a(279),l.a.Header);var J=function(){return Object(O.jsx)(G,{children:Object(O.jsx)("div",{className:"logo",children:Object(O.jsx)("img",{src:"images/logo.png",className:"App-logo",alt:"logo"})})})},H=l.a.Footer;var K=function(){return Object(O.jsx)(H,{style:{textAlign:"center"},children:"\xa9 2021 Today All Rights Reserved"})},V=l.a.Content;var X=function(){return Object(O.jsx)("div",{className:"App",children:Object(O.jsxs)(l.a,{className:"layout",children:[Object(O.jsx)(J,{}),Object(O.jsx)(V,{children:Object(O.jsx)("div",{className:"site-layout-content",children:Object(O.jsx)(B,{})})}),Object(O.jsx)(K,{})]})})},Y=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,289)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),s(e),c(e)}))},Z=a(85),Q=a(163),W=a(1),$={geocode:{latitude:0,longitude:0},radius:0,categories:13e3,sort:"RELEVANCE",limit:50};var ee={restaurants:[],selectedRestaurant:null};var te=Object(Z.b)({location:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A.UPDATE_LOCATION_GEOCODE:return Object(W.a)(Object(W.a)({},e),{},{geocode:t.payload});case A.UPDATE_LOCATION_RADIUS:return Object(W.a)(Object(W.a)({},e),{},{radius:t.payload});default:return e}},restaurant:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case n.RESTAURANT_LIST:return Object(W.a)(Object(W.a)({},e),{},{restaurants:t.payload});case n.SELECTED_RANDOM_RESTAURANT:var a=Math.floor(Math.random()*e.restaurants.length);return Object(W.a)(Object(W.a)({},e),{},{selectedRestaurant:e.restaurants[a]});case n.SELECTED_RESTAURANT:return Object(W.a)(Object(W.a)({},e),{},{selectedRestaurant:t.payload});default:return e}}}),ae=te,ne=function(e){return function(t){return function(a){console.group(a.type),console.info("dispatching",a);var n=t(a);return console.log("next state",e.getState()),console.groupEnd(),n}}};a(280);var re=function(e){var t=Object(Z.a)(ne,Q.a);return Object(Z.c)(ae,e,t)}();i.a.render(Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)(o.a,{store:re,children:Object(O.jsx)(X,{})})}),document.getElementById("root")),Y()}},[[281,1,2]]]);
//# sourceMappingURL=main.0c6555f9.chunk.js.map