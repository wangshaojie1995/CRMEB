(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8b23c4a2"],{"4f01":function(t,e,n){},7820:function(t,e,n){"use strict";n("4f01")},"8c03":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"customer"},[n("Form",{ref:"formValidate",attrs:{model:t.formValidate,"label-width":100},nativeOn:{submit:function(t){t.preventDefault()}}},[n("Row",{attrs:{gutter:24,type:"flex"}},[n("Col",{staticClass:"ivu-text-left",attrs:{span:"24"}},[n("FormItem",{attrs:{label:"搜索日期："}},[n("RadioGroup",{staticClass:"mr",attrs:{type:"button"},on:{"on-change":function(e){return t.selectChange(t.formValidate.data)}},model:{value:t.formValidate.data,callback:function(e){t.$set(t.formValidate,"data",e)},expression:"formValidate.data"}},t._l(t.fromList.fromTxt,(function(e,r){return n("Radio",{key:r,attrs:{label:e.val}},[t._v(t._s(e.text))])})),1),n("DatePicker",{staticStyle:{width:"200px"},attrs:{editable:!1,value:t.timeVal,format:"yyyy/MM/dd",type:"daterange",placement:"bottom-end",placeholder:"自定义时间"},on:{"on-change":t.onchangeTime}})],1)],1),n("Col",{staticClass:"ivu-text-left",attrs:{span:"12"}},[n("FormItem",{attrs:{label:"用户名称："}},[n("Input",{staticStyle:{width:"90%"},attrs:{search:"","enter-button":"",placeholder:"请输入用户名称"},on:{"on-search":t.userSearchs},model:{value:t.formValidate.nickname,callback:function(e){t.$set(t.formValidate,"nickname",e)},expression:"formValidate.nickname"}})],1)],1)],1)],1),n("Table",{ref:"selection",attrs:{loading:t.loading2,"highlight-row":"","no-userFrom-text":"暂无数据","no-filtered-userFrom-text":"暂无筛选结果",columns:t.columns4,data:t.tableList2},scopedSlots:t._u([{key:"headimgurl",fn:function(t){var e=t.row;t.index;return[n("div",{directives:[{name:"viewer",rawName:"v-viewer"}],staticClass:"tabBox_img"},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.headimgurl,expression:"row.headimgurl"}]})])]}},{key:"sex",fn:function(e){var r=e.row;e.index;return[n("span",{directives:[{name:"show",rawName:"v-show",value:1===r.sex,expression:"row.sex ===1"}]},[t._v("男")]),n("span",{directives:[{name:"show",rawName:"v-show",value:2===r.sex,expression:"row.sex ===2"}]},[t._v("女")]),n("span",{directives:[{name:"show",rawName:"v-show",value:0===r.sex,expression:"row.sex ===0"}]},[t._v("保密")])]}},{key:"country",fn:function(e){var r=e.row;e.index;return[n("span",[t._v(t._s(r.country+r.province+r.city))])]}},{key:"subscribe",fn:function(e){var r=e.row;e.index;return[n("span",{domProps:{textContent:t._s(1===r.subscribe?"关注":"未关注")}})]}}])}),n("div",{staticClass:"acea-row row-right page"},[n("Page",{attrs:{total:t.total2,"show-elevator":"","show-total":"","page-size":t.formValidate.limit},on:{"on-change":t.pageChange2}})],1)],1)},a=[],i=(n("96cf"),n("1da1")),o=n("90e7"),u={name:"index",data:function(){var t=this;return{formValidate:{page:1,limit:15,data:"",nickname:""},tableList2:[],timeVal:[],fromList:{title:"选择时间",custom:!0,fromTxt:[{text:"全部",val:""},{text:"今天",val:"today"},{text:"昨天",val:"yesterday"},{text:"最近7天",val:"lately7"},{text:"最近30天",val:"lately30"},{text:"本月",val:"month"},{text:"本年",val:"year"}]},currentid:0,productRow:{},columns4:[{title:"选择",key:"chose",width:60,align:"center",render:function(e,n){var r=n.row.uid,a=!1;a=t.currentid===r;var i=t;return e("div",[e("Radio",{props:{value:a},on:{"on-change":function(){if(i.currentid=r,t.productRow=n.row,t.productRow.uid)if("image"===t.$route.query.fodder){var e={image:t.productRow.headimgurl,uid:t.productRow.uid};form_create_helper.set("image",e),form_create_helper.close("image")}else t.$emit("imageObject",{image:t.productRow.headimgurl,uid:t.productRow.uid});else t.$Message.warning("请先选择商品")}}})])}},{title:"ID",key:"uid",width:80},{title:"微信用户名称",key:"nickname",minWidth:180},{title:"客服头像",slot:"headimgurl",minWidth:60},{title:"性别",slot:"sex",minWidth:60},{title:"地区",slot:"country",minWidth:120},{title:"是否关注公众号",slot:"subscribe",minWidth:120}],loading2:!1,total2:0}},created:function(){},mounted:function(){this.getListService()},methods:{onchangeTime:function(t){this.timeVal=t,this.formValidate.data=this.timeVal.join("-"),this.getListService()},selectChange:function(t){this.formValidate.data=t,this.timeVal=[],this.getListService()},getListService:function(){var t=this;this.loading2=!0,Object(o["kefucreateApi"])(this.formValidate).then(function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(n){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:r=n.data,t.tableList2=r.list,t.total2=r.count,t.tableList2.map((function(t){t._isChecked=!1})),t.loading2=!1;case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.loading2=!1,t.$Message.error(e.msg)}))},pageChange2:function(t){this.formValidate.page=t,this.getListService()},userSearchs:function(){this.formValidate.page=1,this.getListService()}}},c=u,s=(n("7820"),n("2877")),d=Object(s["a"])(c,r,a,!1,null,"225069fe",null);e["default"]=d.exports},"90e7":function(t,e,n){"use strict";n.d(e,"m",(function(){return a})),n.d(e,"g",(function(){return i})),n.d(e,"I",(function(){return o})),n.d(e,"H",(function(){return u})),n.d(e,"f",(function(){return c})),n.d(e,"y",(function(){return s})),n.d(e,"M",(function(){return d})),n.d(e,"a",(function(){return l})),n.d(e,"s",(function(){return f})),n.d(e,"x",(function(){return m})),n.d(e,"C",(function(){return h})),n.d(e,"B",(function(){return g})),n.d(e,"A",(function(){return p})),n.d(e,"z",(function(){return v})),n.d(e,"D",(function(){return b})),n.d(e,"F",(function(){return w})),n.d(e,"r",(function(){return x})),n.d(e,"G",(function(){return j})),n.d(e,"j",(function(){return y})),n.d(e,"h",(function(){return O})),n.d(e,"i",(function(){return _})),n.d(e,"k",(function(){return k})),n.d(e,"l",(function(){return V})),n.d(e,"v",(function(){return C})),n.d(e,"w",(function(){return L})),n.d(e,"t",(function(){return R})),n.d(e,"u",(function(){return S})),n.d(e,"q",(function(){return T})),n.d(e,"n",(function(){return $})),n.d(e,"p",(function(){return F})),n.d(e,"e",(function(){return P})),n.d(e,"b",(function(){return E})),n.d(e,"c",(function(){return G})),n.d(e,"J",(function(){return I})),n.d(e,"K",(function(){return M})),n.d(e,"L",(function(){return N})),n.d(e,"E",(function(){return W})),n.d(e,"d",(function(){return z}));var r=n("6b6c");function a(t){return Object(r["a"])({url:"setting/config/header_basics",method:"get",params:t})}function i(t,e){return Object(r["a"])({url:e,method:"get",params:t})}function o(t){return Object(r["a"])({url:t.url,method:"get",params:t.data})}function u(){return Object(r["a"])({url:"notify/sms/temp/create",method:"get"})}function c(t){return Object(r["a"])({url:"serve/login",method:"post",data:t})}function s(t){return Object(r["a"])({url:"serve/modify",method:"post",data:t})}function d(t){return Object(r["a"])({url:"serve/update_phone",method:"post",data:t})}function l(t){return Object(r["a"])({url:"serve/captcha",method:"post",data:t})}function f(t){return Object(r["a"])({url:"serve/register",method:"post",data:t})}function m(){return Object(r["a"])({url:"serve/info",method:"get"})}function h(t){return Object(r["a"])({url:"serve/sms/sign",method:"PUT",data:t})}function g(t){return Object(r["a"])({url:"serve/record",method:"get",params:t})}function p(t){return Object(r["a"])({url:"serve/open",method:"get",params:t})}function v(t){return Object(r["a"])({url:"serve/opn_express",method:"post",data:t})}function b(t){return Object(r["a"])({url:"serve/sms/open",method:"get",params:t})}function w(t){return Object(r["a"])({url:"serve/meal_list",method:"get",params:t})}function x(t){return Object(r["a"])({url:"serve/pay_meal",method:"post",data:t})}function j(t){return Object(r["a"])({url:"notify/sms/record",method:"get",params:t})}function y(t){return Object(r["a"])({url:"freight/express",method:"get",params:t})}function O(){return Object(r["a"])({url:"/freight/express/create",method:"get"})}function _(t){return Object(r["a"])({url:"freight/express/".concat(t,"/edit"),method:"get"})}function k(t){return Object(r["a"])({url:"freight/express/set_status/".concat(t.id,"/").concat(t.status),method:"PUT"})}function V(){return Object(r["a"])({url:"freight/express/sync_express",method:"get"})}function C(t){return Object(r["a"])({url:"setting/role",method:"GET",params:t})}function L(t){return Object(r["a"])({url:"setting/role/set_status/".concat(t.id,"/").concat(t.status),method:"PUT"})}function R(t){return Object(r["a"])({url:"setting/role/".concat(t.id),method:"post",data:t})}function S(t){return Object(r["a"])({url:"setting/role/".concat(t,"/edit"),method:"get"})}function T(){return Object(r["a"])({url:"setting/role/create",method:"get"})}function $(){return Object(r["a"])({url:"notify/sms/is_login",method:"GET"})}function F(){return Object(r["a"])({url:"notify/sms/logout",method:"GET"})}function P(t){return Object(r["a"])({url:"setting/city/list/".concat(t),method:"get"})}function E(t){return Object(r["a"])({url:"setting/city/add/".concat(t),method:"get"})}function G(t){return Object(r["a"])({url:"setting/city/".concat(t,"/edit"),method:"get"})}function I(t){return Object(r["a"])({url:"setting/shipping_templates/list",method:"get",params:t})}function M(t){return Object(r["a"])({url:"setting/shipping_templates/city_list",method:"get"})}function N(t,e){return Object(r["a"])({url:"setting/shipping_templates/save/".concat(t),method:"post",data:e})}function W(t){return Object(r["a"])({url:"setting/shipping_templates/".concat(t,"/edit"),method:"get"})}function z(){return Object(r["a"])({url:"setting/city/clean_cache",method:"get"})}}}]);