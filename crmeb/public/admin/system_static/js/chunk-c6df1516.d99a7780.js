(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-c6df1516"],{"3b95":function(t,e,a){},"85be":function(t,e,a){"use strict";var i=a("3b95");a.n(i).a},effd:function(t,e,a){"use strict";a.r(e);var i=a("f3f3"),n=(a("a15b"),a("2f62")),o=a("f8b7");i={data:function(){return{tbody:[],loading:!1,total:0,animal:0,pagination:{page:1,limit:30,order_id:"",add_time:""},timeVal:[],modal:!1,qrcode:null,name:"",spin:!1,pickerOptions:this.$timeOptions}},computed:Object(i.a)(Object(i.a)({},Object(n.d)("media",["isMobile"])),{},{labelWidth:function(){return this.isMobile?void 0:"80px"},labelPosition:function(){return this.isMobile?"top":"right"}}),created:function(){this.getOrderList()},methods:{onchangeCode:function(t){this.animal=t,this.qrcodeShow()},onchangeTime:function(t){this.pagination.page=1,this.timeVal=t||[],this.pagination.add_time=this.timeVal[0]&&this.timeVal?this.timeVal.join("-"):"",this.getOrderList()},getOrderList:function(){var t=this;this.loading=!0,Object(o.G)(this.pagination).then((function(e){t.loading=!1;e=e.data;var a=e.count;e=e.list;t.total=a,t.tbody=e})).catch((function(e){t.loading=!1,t.$message.error(e.msg)}))},nameSearch:function(){this.pagination.page=1,this.getOrderList()},orderSearch:function(){this.pagination.page=1,this.getOrderList()},qrcodeShow:function(){var t=this;this.modal=!0,this.spin=!0,Object(o.D)({type:this.animal}).then((function(e){t.spin=!1,t.qrcode=e.data})).catch((function(e){t.spin=!1,t.$message.error(e.msg)}))}}},a("85be"),n=a("2877"),a=Object(n.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-card",{staticClass:"ivu-mt",attrs:{bordered:!1,shadow:"never","body-style":{padding:0}}},[a("div",{staticClass:"padding-add"},[a("el-form",{ref:"pagination",attrs:{model:t.pagination,"label-width":t.labelWidth,"label-position":t.labelPosition,inline:""},nativeOn:{submit:function(t){t.preventDefault()}}},[a("el-form-item",{attrs:{label:"创建时间："}},[a("el-date-picker",{staticClass:"mr20",staticStyle:{width:"250px"},attrs:{clearable:"",type:"daterange",editable:!1,format:"yyyy/MM/dd","value-format":"yyyy/MM/dd","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":t.pickerOptions},on:{change:t.onchangeTime},model:{value:t.timeVal,callback:function(e){t.timeVal=e},expression:"timeVal"}})],1),a("el-form-item",{attrs:{label:"订单号：","label-for":"title"}},[a("el-input",{staticClass:"form_content_width",attrs:{clearable:"",placeholder:"请输入订单号"},model:{value:t.pagination.order_id,callback:function(e){t.$set(t.pagination,"order_id",e)},expression:"pagination.order_id"}})],1),a("el-form-item",{attrs:{label:"用户名：","label-for":"title"}},[a("el-input",{staticClass:"form_content_width",attrs:{clearable:"",placeholder:"请输入用户名"},model:{value:t.pagination.name,callback:function(e){t.$set(t.pagination,"name",e)},expression:"pagination.name"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:t.orderSearch}},[t._v("查询")])],1)],1)],1)]),a("el-card",{staticClass:"ivu-mt mt16",attrs:{bordered:!1,shadow:"never"}},[a("el-button",{attrs:{type:"primary"},on:{click:t.qrcodeShow}},[t._v("查看收款二维码")]),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"table",staticClass:"mt14",attrs:{data:t.tbody,"highlight-current-row":"","no-userFrom-text":"暂无数据","no-filtered-userFrom-text":"暂无筛选结果"}},[a("el-table-column",{attrs:{label:"订单号","min-width":"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.order_id))])]}}])}),a("el-table-column",{attrs:{label:"用户信息","min-width":"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.nickname)+" | "+t._s(e.row.uid))])]}}])}),a("el-table-column",{attrs:{label:"实际支付","min-width":"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.pay_price))])]}}])}),a("el-table-column",{attrs:{label:"优惠价格","min-width":"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.true_price))])]}}])}),a("el-table-column",{attrs:{label:"支付时间","min-width":"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.pay_time))])]}}])})],1),a("div",{staticClass:"acea-row row-right page"},[t.total?a("pagination",{attrs:{total:t.total,page:t.pagination.page,limit:t.pagination.limit},on:{"update:page":function(e){return t.$set(t.pagination,"page",e)},"update:limit":function(e){return t.$set(t.pagination,"limit",e)},pagination:t.getOrderList}}):t._e()],1)],1),a("el-dialog",{attrs:{visible:t.modal,title:"收款码",width:"540px"},on:{"update:visible":function(e){t.modal=e}}},[a("div",{directives:[{name:"viewer",rawName:"v-viewer"}],staticClass:"acea-row row-around code"},[a("div",{staticClass:"acea-row row-column-around row-between-wrapper"},[a("div",{staticClass:"QRpic"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.qrcode&&t.qrcode.wechat,expression:"qrcode && qrcode.wechat"}]})]),a("span",{staticClass:"mt10"},[t._v(t._s(t.animal?"公众号收款码":"公众号二维码"))])]),a("div",{staticClass:"acea-row row-column-around row-between-wrapper"},[a("div",{staticClass:"QRpic"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.qrcode&&t.qrcode.routine,expression:"qrcode && qrcode.routine"}]})]),a("span",{staticClass:"mt10"},[t._v(t._s(t.animal?"小程序收款码":"小程序二维码"))])])])])],1)}),[],!1,null,"0b97619e",null);e.default=a.exports}}]);