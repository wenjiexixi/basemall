(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["subcontract/pages/addAddress/addAddress"],{"122a":function(t,e,n){"use strict";n.r(e);var r=n("83e5"),a=n.n(r);for(var i in r)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e["default"]=a.a},"83e5":function(t,e,n){"use strict";(function(t){function r(t){return r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=c(n("a34a")),i=n("9ab4"),o=n("60a3"),s=n("7fa4");function c(t){return t&&t.__esModule?t:{default:t}}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function f(t,e,n,r,a,i,o){try{var s=t[i](o),c=s.value}catch(u){return void n(u)}s.done?e(c):Promise.resolve(c).then(r,a)}function l(t){return function(){var e=this,n=arguments;return new Promise((function(r,a){var i=t.apply(e,n);function o(t){f(i,r,a,o,s,"next",t)}function s(t){f(i,r,a,o,s,"throw",t)}o(void 0)}))}}function d(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function h(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function p(t,e,n){return e&&h(t.prototype,e),n&&h(t,n),t}function v(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&y(t,e)}function y(t,e){return y=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},y(t,e)}function m(t){var e=k();return function(){var n,r=x(t);if(e){var a=x(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return b(this,n)}}function b(t,e){return!e||"object"!==r(e)&&"function"!==typeof e?w(t):e}function w(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function k(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function x(t){return x=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},x(t)}var g=function(e){v(r,e);var n=m(r);function r(){var t;return d(this,r),t=n.apply(this,arguments),t.addressList=[],t.addressForm={id:0,city:"",county:"",detailInfo:"",location:"",phone:"",province:"",userName:"",defaultStatus:"",postCode:""},t.areaList={province_list:{},city_list:{},county_list:{}},t.defaultArea="",t.showSelectLocation=!1,t}return p(r,[{key:"onLoad",value:function(){var t=l(a.default.mark((function t(e){var n,r,i,o=this;return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.addressForm=JSON.parse(e.addressForm),this.getDataList(),t.next=4,(0,s.getArea)({id:"",type:1});case 4:n=t.sent,r={},n.forEach((function(t){r[t.value]=t.label})),this.areaList.province_list=r,i=["北京市","重庆市","上海市","天津市"],i.find((function(t){return o.addressForm.province===t}))&&(this.addressForm.city="市辖区");case 10:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"getDataList",value:function(){var t=l(a.default.mark((function t(){var e;return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,(0,s.getAddressList)({type:1});case 2:e=t.sent,this.addressList=e;case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"selectLocation",value:function(){var t=l(a.default.mark((function t(){var e,n=this;return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.showSelectLocation=!0,t.t0=a.default.keys(this.areaList.province_list);case 2:if((t.t1=t.t0()).done){t.next=8;break}if(e=t.t1.value,this.areaList.province_list[e]!==this.addressForm.province){t.next=6;break}return t.delegateYield(a.default.mark((function t(){var r,i,o,c,u,f,l;return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r={},i={},o="",t.next=5,(0,s.getArea)({id:e,type:2});case 5:return c=t.sent,c.forEach((function(t){r[t.value]=t.label})),c.forEach((function(t){t.label===n.addressForm.city&&(o=t.value)})),t.next=10,(0,s.getArea)({id:o,type:3});case 10:u=t.sent,f="",u.forEach((function(t){i[t.value]=t.label,t.label===n.addressForm.county&&(f=t.value)})),l={province_list:n.areaList.province_list,city_list:r,county_list:i},n.areaList=l,n.defaultArea=f;case 16:case"end":return t.stop()}}),t)}))(),"t2",6);case 6:t.next=2;break;case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"fieldInput",value:function(t){this.setData(u({},"".concat(t.currentTarget.dataset.input),t.detail.value))}},{key:"onSelectClose",value:function(){this.showSelectLocation=!1}},{key:"onSelectConfirm",value:function(t){var e=t.detail.values;this.addressForm.province=e[0].name,this.addressForm.city=e[1].name,this.addressForm.county=e[2].name,this.showSelectLocation=!1}},{key:"provinceChange",value:function(){var t=l(a.default.mark((function t(e){var n,r;return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,(0,s.getArea)({id:e,type:2});case 2:return n=t.sent,r={},n.forEach((function(t){r[t.value]=t.label})),t.next=7,this.cityChange(n[0].value,r);case 7:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"cityChange",value:function(){var t=l(a.default.mark((function t(e,n){var r,i,o;return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,(0,s.getArea)({id:e,type:3});case 2:r=t.sent,i={},r.forEach((function(t){i[t.value]=t.label})),o={province_list:this.areaList.province_list,city_list:n,county_list:i},this.areaList=o;case 7:case"end":return t.stop()}}),t,this)})));function e(e,n){return t.apply(this,arguments)}return e}()},{key:"areaChange",value:function(){var t=l(a.default.mark((function t(e){var n,r,i;return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=e.detail,r=n.values,i=n.index,0===i&&this.provinceChange(r[i].code),1===i&&this.cityChange(r[i].code,this.areaList.city_list);case 3:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"beforeValuate",value:function(){return this.addressForm.userName?!(!this.addressForm.phone||!this.isPhone(this.addressForm.phone))||(t.showToast({title:"手机号不正确",icon:"none"}),!1):(t.showToast({title:"请输入收货人姓名",icon:"none"}),!1)}},{key:"addOrUpdateAddress",value:function(){var e=l(a.default.mark((function e(){var n,r,i,o,c=this;return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.beforeValuate()){e.next=2;break}return e.abrupt("return");case 2:if(n=this.addressForm.province,r=this.addressForm.city,i=this.addressForm.county,o=["北京市","重庆市","上海市","天津市"],o.find((function(t){return c.addressForm.province===t}))&&(this.addressForm.city="市辖区"),n&&r&&i){e.next=10;break}return t.showToast({title:"存在地址信息为空",icon:"none"}),e.abrupt("return");case 10:if(0===this.addressForm.id){e.next=25;break}return e.next=13,this.getLatAndLonByAddress();case 13:return e.prev=13,e.next=16,(0,s.updateAddress)(JSON.stringify(this.addressForm));case 16:t.showToast({title:"修改地址成功",icon:"none"}),t.navigateBack({delta:1}),e.next=23;break;case 20:e.prev=20,e.t0=e["catch"](13),"请勿添加相同地址"===e.t0?(t.showToast({title:"修改地址成功",icon:"none"}),t.navigateBack({delta:1})):t.showToast({title:e.t0,icon:"none"});case 23:e.next=37;break;case 25:return e.prev=25,e.next=28,this.getLatAndLonByAddress();case 28:return e.next=30,(0,s.addAddress)(JSON.stringify(this.addressForm));case 30:t.showToast({title:"添加地址成功",icon:"none"}),t.navigateBack({delta:1}),e.next=37;break;case 34:e.prev=34,e.t1=e["catch"](25),t.showToast({title:e.t1,icon:"none"});case 37:case"end":return e.stop()}}),e,this,[[13,20],[25,34]])})));function n(){return e.apply(this,arguments)}return n}()},{key:"getLatAndLonByAddress",value:function(){var t=l(a.default.mark((function t(){var e,n,r,i,o,c,u;return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=this.addressForm,n=e.province,r=e.city,i=e.county,o=e.detailInfo,c=n+r+i+o,t.next=4,(0,s.getLatAndLon)({site:c});case 4:u=t.sent,this.addressForm.location=u.location,this.addressForm.postCode=u.andlongitudeVo.adcode;case 7:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"isPhone",value:function(t){return!(!/^1(3|4|5|7|8)\d{9}$/.test(t)||!t.match(/^\d{11}$/))}}]),r}(o.Vue);g=(0,i.__decorate)([o.Component],g);var _=g;e.default=_}).call(this,n("543d")["default"])},a83a:function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return r}));var a=function(){var t=this,e=t.$createElement;t._self._c},i=[]},aa77:function(t,e,n){"use strict";var r=n("f3d1"),a=n.n(r);a.a},cf9c:function(t,e,n){"use strict";(function(t){n("6cdc");var e=r(n("d481"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},d481:function(t,e,n){"use strict";n.r(e);var r=n("a83a"),a=n("122a");for(var i in a)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(i);n("aa77");var o,s=n("f0c5"),c=Object(s["a"])(a["default"],r["b"],r["c"],!1,null,"62bcf38a",null,!1,r["a"],o);e["default"]=c.exports},f3d1:function(t,e,n){}},[["cf9c","common/runtime","common/vendor"]]]);