(function(t){function e(e){for(var n,c,o=e[0],l=e[1],s=e[2],u=0,f=[];u<o.length;u++)c=o[u],Object.prototype.hasOwnProperty.call(i,c)&&i[c]&&f.push(i[c][0]),i[c]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);d&&d(e);while(f.length)f.shift()();return r.push.apply(r,s||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,o=1;o<a.length;o++){var l=a[o];0!==i[l]&&(n=!1)}n&&(r.splice(e--,1),t=c(c.s=a[0]))}return t}var n={},i={app:0},r=[];function c(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=t,c.c=n,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(a,n,function(e){return t[e]}.bind(null,n));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/traintime-vue/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var s=0;s<o.length;s++)e(o[s]);var d=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"07a6":function(t,e,a){},"0a0b":function(t,e,a){"use strict";a("e66c")},"38a2":function(t,e,a){"use strict";a("489a")},"489a":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("7a23");function i(t,e,a,i,r,c){var o=Object(n["C"])("metainfo"),l=Object(n["C"])("router-view");return Object(n["v"])(),Object(n["f"])(n["b"],null,[Object(n["j"])(o,null,{title:Object(n["H"])((function(t){var e=t.content;return[Object(n["i"])(Object(n["E"])("".concat(e)),1)]})),_:1}),Object(n["j"])(l)],64)}var r=a("213a"),c={data:function(){return{}},setup:function(){Object(r["b"])({title:"火車動態時刻",htmlAttrs:{lang:"en",amp:!0}})}},o=(a("0a0b"),a("d959")),l=a.n(o);const s=l()(c,[["render",i]]);var d=s,u=a("6c02"),f={class:"container"};function p(t,e,a,i,r,c){var o=Object(n["C"])("PageTitle"),l=Object(n["C"])("NavBar"),s=Object(n["C"])("TrainInfoTable");return Object(n["v"])(),Object(n["f"])("div",f,[Object(n["j"])(o,{pageTitle:r.pageTitle},null,8,["pageTitle"]),Object(n["j"])(l,{stationDataAry:r.stationDataAry},null,8,["stationDataAry"]),Object(n["j"])(s,{stationDataAry:r.stationDataAry},null,8,["stationDataAry"])])}a("d3b7"),a("159b");var b=a("bc3a"),v=a.n(b),T={class:"anchor-area"},m=["href"];function j(t,e,a,i,r,c){return Object(n["v"])(),Object(n["f"])("div",T,[(Object(n["v"])(!0),Object(n["f"])(n["b"],null,Object(n["B"])(a.stationDataAry,(function(t){return Object(n["v"])(),Object(n["f"])("a",{href:"#station_"+t.stationId,class:"anchor",key:t.stationId},Object(n["E"])(t.stationName),9,m)})),128))])}var O={name:"NavBar",data:function(){return{}},props:{stationDataAry:{type:Array}}};a("bcbd");const h=l()(O,[["render",j],["__scopeId","data-v-61c38023"]]);var g=h,y=["id"],D={class:"station-title"},S={class:"train-info-area"},E=Object(n["h"])('<div class="t-row head" data-v-0a7f628e><div class="t-head cell-size-small" data-v-0a7f628e>發車時間</div><div class="t-head cell-size-small" data-v-0a7f628e>北上/南下</div><div class="t-head cell-size-small" data-v-0a7f628e>車次</div><div class="t-head" data-v-0a7f628e>車種</div><div class="t-head cell-size-small" data-v-0a7f628e>開往</div><div class="t-head cell-size-small" data-v-0a7f628e>準點/誤點</div></div>',1),N={class:"t-cell","data-title":"發車時間"},w={class:"t-cell","data-title":"北上/南下"},I={class:"t-cell","data-title":"車次"},_={class:"t-cell","data-title":"車種"},A={class:"t-cell","data-title":"開往"},Z={class:"t-cell","data-title":"準點/誤點"};function C(t,e,a,i,r,c){return Object(n["v"])(!0),Object(n["f"])(n["b"],null,Object(n["B"])(a.stationDataAry,(function(t){return Object(n["v"])(),Object(n["f"])("div",{class:"station-info-area",id:"station_"+t.stationId,key:t.stationId},[Object(n["g"])("div",D,Object(n["E"])(t.stationName)+"站",1),Object(n["g"])("div",S,[E,(Object(n["v"])(!0),Object(n["f"])(n["b"],null,Object(n["B"])(t.trainInfo,(function(e){return Object(n["v"])(),Object(n["f"])("div",{class:Object(n["r"])(["t-row cell",t.markDirection==e.Direction?"mark":""]),key:e.TrainNo},[Object(n["g"])("div",N,Object(n["E"])(c.getTime(e.ScheduledDepartureTime)),1),Object(n["g"])("div",w,Object(n["E"])(c.getDirection(e.Direction)),1),Object(n["g"])("div",I,Object(n["E"])(e.TrainNo),1),Object(n["g"])("div",_,Object(n["E"])(e.TrainTypeName.Zh_tw),1),Object(n["g"])("div",A,Object(n["E"])(e.EndingStationName.Zh_tw),1),Object(n["g"])("div",Z,Object(n["E"])(c.getDelayTime(e.DelayTime)),1)],2)})),128))])],8,y)})),128)}a("ac1f"),a("5319");var P={name:"TrainInfoTable",data:function(){return{}},props:{stationDataAry:{type:Array}},methods:{getDelayTime:function(t){return 0==t?"準點":t+" min"},getDirection:function(t){return 0==t?"北上":"南下"},getTime:function(t){return t.replace(/(:\d{2}| [AP]M)$/,"")}}};a("38a2");const k=l()(P,[["render",C],["__scopeId","data-v-0a7f628e"]]);var x=k,B={class:"page-title-area"};function L(t,e,a,i,r,c){return Object(n["v"])(),Object(n["f"])("div",null,[Object(n["g"])("div",B,Object(n["E"])(a.pageTitle),1)])}var U={name:"PageTitle",data:function(){return{}},props:{pageTitle:{type:String}}};a("64b7");const z=l()(U,[["render",L],["__scopeId","data-v-4adfb0f9"]]);var M=z,J={name:"HomeView",components:{NavBar:g,TrainInfoTable:x,PageTitle:M},data:function(){return{pageTitle:"火車動態資訊",stationDataAry:[{stationId:1070,stationName:"鶯歌",markDirection:"0"},{stationId:1020,stationName:"板橋",markDirection:"1"},{stationId:1e3,stationName:"台北",markDirection:"1"}],isDev:this.isDev}},mounted:function(){this.loadStationData()},methods:{loadStationData:function(){var t=this.isDev;this.stationDataAry.forEach((function(e){if(t){var a=[{StationID:"1070",StationName:{Zh_tw:"鶯歌",En:"Yingge"},TrainNo:"513",Direction:1,TrainTypeID:"1110",TrainTypeCode:"4",TrainTypeName:{Zh_tw:"莒光(無身障座位)",En:"Chu-Kuang Express"},TripLine:2,EndingStationID:"5050",EndingStationName:{Zh_tw:"潮州",En:"Chaozhou"},ScheduledArrivalTime:"11:44:00",ScheduledDepartureTime:"11:45:00",DelayTime:0,SrcUpdateTime:"2021-12-19T11:39:36+08:00",UpdateTime:"2021-12-19T11:40:14+08:00"},{StationID:"1070",StationName:{Zh_tw:"鶯歌",En:"Yingge"},TrainNo:"1172",Direction:0,TrainTypeID:"1131",TrainTypeCode:"6",TrainTypeName:{Zh_tw:"區間",En:"Local Train"},TripLine:0,EndingStationID:"0900",EndingStationName:{Zh_tw:"基隆",En:"Keelung"},ScheduledArrivalTime:"11:53:00",ScheduledDepartureTime:"11:54:00",DelayTime:6,SrcUpdateTime:"2021-12-19T11:38:36+08:00",UpdateTime:"2021-12-19T11:40:14+08:00"},{StationID:"1070",StationName:{Zh_tw:"鶯歌",En:"Yingge"},TrainNo:"1167",Direction:1,TrainTypeID:"1131",TrainTypeCode:"6",TrainTypeName:{Zh_tw:"區間",En:"Local Train"},TripLine:0,EndingStationID:"1150",EndingStationName:{Zh_tw:"北湖",En:"Beihu"},ScheduledArrivalTime:"11:57:00",ScheduledDepartureTime:"11:58:00",DelayTime:0,SrcUpdateTime:"2021-12-19T11:37:16+08:00",UpdateTime:"2021-12-19T11:40:14+08:00"},{StationID:"1070",StationName:{Zh_tw:"鶯歌",En:"Yingge"},TrainNo:"1178",Direction:0,TrainTypeID:"1131",TrainTypeCode:"6",TrainTypeName:{Zh_tw:"區間",En:"Local Train"},TripLine:1,EndingStationID:"0900",EndingStationName:{Zh_tw:"基隆",En:"Keelung"},ScheduledArrivalTime:"12:07:00",ScheduledDepartureTime:"12:08:00",DelayTime:0,SrcUpdateTime:"2021-12-19T11:39:48+08:00",UpdateTime:"2021-12-19T11:40:14+08:00"}];e["trainInfo"]=a}else v.a.get("https://ptx.transportdata.tw/MOTC/v2/Rail/TRA/LiveBoard/Station/"+e.stationId+"?$top=1000&$format=JSON").then((function(t){e["trainInfo"]=JSON.parse(t.request.response)})).catch((function(t){console.log(t)})).then((function(){}))}))}}};const Y=l()(J,[["render",p]]);var K=Y,$=[{path:"/",name:"home",component:K}],H=Object(u["a"])({history:Object(u["b"])("/traintime-vue/"),routes:$}),R=H,q=Object(n["e"])(d);q.config.globalProperties.isDev=!1,q.use(R),q.use(Object(r["a"])()),q.mount("#app")},"5df4":function(t,e,a){},"64b7":function(t,e,a){"use strict";a("07a6")},bcbd:function(t,e,a){"use strict";a("5df4")},e66c:function(t,e,a){}});
//# sourceMappingURL=app.e70a5782.js.map