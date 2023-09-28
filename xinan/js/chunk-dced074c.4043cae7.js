(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-dced074c","chunk-2d21f098","chunk-2d22cffa","chunk-2d0e97ee"],{"3ff8":function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t._self._c;return e("div",[e("el-card",{staticClass:"aui-card--fill",attrs:{shadow:"never"}},[e("el-form",{ref:"studyForm",attrs:{inline:!0,model:t.dataForm},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.searchData()}}},[e("el-form-item",{attrs:{label:"质态类型"}},[e("el-select",{attrs:{placeholder:"质态类型",clearable:""},model:{value:t.dataForm.dataType,callback:function(e){t.$set(t.dataForm,"dataType",e)},expression:"dataForm.dataType"}},t._l(t.forList,(function(t){return e("el-option",{key:t.dictValue,attrs:{label:t.dictLabel,value:t.dictValue}})})),1)],1),e("el-form-item",{attrs:{label:"渠道编码"}},[e("el-input",{attrs:{placeholder:"渠道编码",clearable:""},model:{value:t.dataForm.channelCode,callback:function(e){t.$set(t.dataForm,"channelCode",e)},expression:"dataForm.channelCode"}})],1),e("el-form-item",{attrs:{label:"渠道名称"}},[e("el-input",{attrs:{placeholder:"渠道名称",clearable:""},model:{value:t.dataForm.channelName,callback:function(e){t.$set(t.dataForm,"channelName",e)},expression:"dataForm.channelName"}})],1),e("el-form-item",{attrs:{label:"渠道类型"}},[e("el-select",{attrs:{placeholder:"质态类型",clearable:""},model:{value:t.dataForm.channelLevel,callback:function(e){t.$set(t.dataForm,"channelLevel",e)},expression:"dataForm.channelLevel"}},t._l(t.channel,(function(t){return e("el-option",{key:t.dictValue,attrs:{label:t.dictLabel,value:t.dictValue}})})),1)],1),e("el-form-item",{attrs:{label:"地区"}},[e("el-select",{attrs:{placeholder:"地区",clearable:""},model:{value:t.dataForm.city,callback:function(e){t.$set(t.dataForm,"city",e)},expression:"dataForm.city"}},t._l(t.MotoPlaceServicelist,(function(t){return e("el-option",{key:t.dictLabel,attrs:{label:t.dictValue,value:t.dictLabel}})})),1)],1),e("el-form-item",{attrs:{label:"日期"}},[e("el-date-picker",{attrs:{"value-format":"yyyy-MM-dd",type:"daterange","start-placeholder":"开始时间","end-placeholder":"结束时间",clearable:""},model:{value:t.daterange,callback:function(e){t.daterange=e},expression:"daterange"}})],1),e("el-form-item",[e("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.searchData()}}},[t._v("查询")]),e("el-button",{on:{click:function(e){return t.reset()}}},[t._v("重置")]),e("el-button",{attrs:{type:"success"},on:{click:function(e){return t.exportExl()}}},[t._v("导出")])],1)],1),e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.dataListLoading,expression:"dataListLoading"}],ref:"tables",staticClass:"tab",staticStyle:{width:"100%"},attrs:{data:t.dataList,border:"","header-cell-style":{background:"rgba(194, 210, 255, 0.3)",color:"#040415"},"row-key":t.getRowsKey},on:{"selection-change":t.dataListSelectionChangeHandle}},[e("el-table-column",{attrs:{type:"selection",width:"40"}}),e("el-table-column",{attrs:{prop:"createDate",align:"center",label:"日期"}}),e("el-table-column",{attrs:{prop:"dataType",align:"center",label:"质态类型"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t.isdataType(e.row.dataType)))]}}])}),e("el-table-column",{attrs:{prop:"dataNum",label:"数量",align:"center"}}),e("el-table-column",{attrs:{prop:"channelCode",label:"渠道编码",align:"center"}}),e("el-table-column",{attrs:{prop:"channelName",label:"渠道名称",align:"center"}}),e("el-table-column",{attrs:{prop:"statusDetail",label:"渠道等级",align:"center"}}),e("el-table-column",{attrs:{prop:"channelLevel",label:"渠道类型",align:"center"}}),e("el-table-column",{attrs:{prop:"city",label:"地区",align:"center"}})],1),e("el-pagination",{attrs:{"current-page":t.page,"page-sizes":[10,20,50,100],"page-size":t.limit,total:t.total,layout:"total, sizes, prev, pager, next, jumper"},on:{"update:currentPage":function(e){t.page=e},"update:current-page":function(e){t.page=e},"size-change":t.pageSizeChangeHandle,"current-change":t.pageCurrentChangeHandle}})],1)],1)},i=[],c=(a("8e6e"),a("ac6a"),a("456d"),a("c5f6"),a("ade3")),n=a("d7b1"),r=a("8e7b"),d=a("f62f"),o=a("ed08");function u(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,l)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?u(Object(a),!0).forEach((function(e){Object(c["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var b={mixins:[n["a"]],data:function(){var t;return{mixinViewModuleOptions:{exportExlUrl:"/datamanage/channelMassState/export"},forList:d["forList"],jiangsuList:r["jiangsuList"],channelType:d["channelType"],dataList:[],dataListLoading:!1,daterange:[],clienttypeList:[{label:"个人",value:"个人"},{label:"集团",value:"集团"}],channel:Object(o["b"])("channel"),dataForm:(t={startDate:"",endDate:""},Object(c["a"])(t,"startDate",""),Object(c["a"])(t,"dataType",""),Object(c["a"])(t,"channelName",""),Object(c["a"])(t,"channelLevel",""),Object(c["a"])(t,"city",""),t),MotoPlaceServicelist:[{dictLabel:"全省",dictValue:"全省"},{dictLabel:"南京",dictValue:"南京"},{dictLabel:"无锡",dictValue:"无锡"},{dictLabel:"徐州",dictValue:"徐州"},{dictLabel:"苏州",dictValue:"苏州"},{dictLabel:"南通",dictValue:"南通"},{dictLabel:"连云港",dictValue:"连云港"},{dictLabel:"淮安",dictValue:"淮安"},{dictLabel:"盐城",dictValue:"盐城"},{dictLabel:"扬州",dictValue:"扬州"},{dictLabel:"镇江",dictValue:"镇江"},{dictLabel:"泰州",dictValue:"泰州"},{dictLabel:"宿迁",dictValue:"宿迁"},{dictLabel:"常州",dictValue:"常州"}]}},activated:function(){this.getListData()},watch:{daterange:function(t){this.dataForm.startDate=null!==t?t[0]:"",this.dataForm.endDate=null!==t?t[1]:""}},computed:{isdataType:function(){return function(t){return 1==t?"一证多号总量":2==t?"新增（同一渠道60岁以上）":3==t?"新增（同一渠道20岁以下）":"渠道发展户籍外地比例"}}},methods:{reset:function(){this.dataForm=this.$options.data().dataForm,this.daterange=[],this.getListData()},getListData:function(){var t=this;this.dataListLoading=!0,this.$http.get("/datamanage/channelMassState/page",{params:s({page:this.page,limit:this.limit},this.dataForm)}).then((function(e){if(0!==e.data.code)return t.dataList=[],t.total=0,t.dataListLoading=!1,t.$message.error(e.data.msg);var a=e.data.data;t.total=Number(a.total),t.dataList=a.list,t.dataListLoading=!1}))}}},p=b,f=a("2877"),L=Object(f["a"])(p,l,i,!1,null,"09fd9f2f",null);e["default"]=L.exports},"8e7b":function(t,e,a){"use strict";a.r(e),a.d(e,"jiangsuList",(function(){return l}));var l=[{dictLabel:"025",dictValue:"南京市"},{dictLabel:"0510",dictValue:"无锡市"},{dictLabel:"0516",dictValue:"徐州市"},{dictLabel:"0512",dictValue:"苏州市"},{dictLabel:"0513",dictValue:"南通市"},{dictLabel:"0518",dictValue:"连云港市"},{dictLabel:"0517",dictValue:"淮安市"},{dictLabel:"0515",dictValue:"盐城市"},{dictLabel:"0514",dictValue:"扬州市"},{dictLabel:"0511",dictValue:"镇江市"},{dictLabel:"0523",dictValue:"泰州市"},{dictLabel:"0527",dictValue:"宿迁市"},{dictLabel:"0519",dictValue:"常州市"}]},d7b1:function(t,e,a){"use strict";a("8e6e"),a("ac6a"),a("456d");var l=a("ade3"),i=a("4328"),c=a.n(i),n=a("dea3");function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,l)}return a}function d(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){Object(l["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}e["a"]={data:function(){return Object(l["a"])({mixinViewModuleOptions:{exportExlUrl:""},dataList:[],dataListLoading:!1,page:1,limit:10,total:0,scrollTops:0,dataListSelections:[],uploadLoading:!1,uploadVisible:!1,title:"",url:"",downLoadUrl:""},"dataListSelections",[])},activated:function(){window.addEventListener("scroll",this.handleScroll,!0),this.listenerFunction()},deactivated:function(){window.removeEventListener("scroll",this.handleScroll,!0)},methods:{searchData:function(){this.dataListSelections.length>0&&this.$refs["tables"].clearSelection(),this.page=1,this.getListData()},pageSizeChangeHandle:function(t){this.page=1,this.limit=t,this.getListData()},pageCurrentChangeHandle:function(t){this.page=t,this.getListData()},getRowsKey:function(t){return t.id},dataListSelectionChangeHandle:function(t){this.dataListSelections=t},listenerFunction:function(){var t=this;this.$nextTick((function(){document.documentElement.scrollTop=t.scrollTops}))},getScrollPosition:function(){var t=document.documentElement.scrollTop;this.scrollTops=t},handleScroll:function(t){this.scrollTops=document.documentElement.scrollTop},exportExl:function(){var t=this,e=[];this.dataListSelections.length>0&&(e=this.dataListSelections.map((function(t){return t.id}))),this.$confirm("根据检索条件，共计将导出".concat(e.length>0?e.length:this.total,"条数据, 是否继续?"),"批量导出",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",callback:function(){},beforeClose:function(a,l,i){if("confirm"===a){l.confirmButtonLoading=!0;var r=c.a.stringify(d(d({token:t.$getUserToken("token")},t.dataForm),{},{ids:e.join()}));t.$http({method:"get",withCredentials:!1,timeout:36e4,responseType:"blob",url:"".concat(t.mixinViewModuleOptions.exportExlUrl,"?").concat(r)}).then((function(e){Object(n["a"])(e.data,t.$route.meta.title)})),l.confirmButtonLoading=!1,t.$refs["tables"].clearSelection(),i()}else i()}}).finally((function(){ctx.confirmButtonLoading=!1})).catch((function(){ctx.confirmButtonLoading=!1}))},del:function(t){var e=this,a=[];a.push(t),this.$confirm("此操作将删除该上报记录，请确认操作！","删除",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",callback:function(){},beforeClose:function(t,l,i){"confirm"===t?e.$http.post("/dataprocess/catAssist/delete",a).then((function(t){if(0!==t.data.code)return i(),l.confirmButtonLoading=!1,e.$message.error(t.data.msg);l.confirmButtonLoading=!1,i(),e.getListData(),e.$message.success("删除成功")})):i()}}).finally((function(){ctx.confirmButtonLoading=!1})).catch((function(){ctx.confirmButtonLoading=!1})),this.page>1&&(this.total-1)%this.limit===0&&(this.page-=1)}}}},f62f:function(t,e,a){"use strict";a.r(e),a.d(e,"forList",(function(){return l})),a.d(e,"forListCity",(function(){return i})),a.d(e,"channelType",(function(){return c})),a.d(e,"CardType",(function(){return n})),a.d(e,"NetworkAccessCardType",(function(){return r}));var l=[{dictLabel:"一证多号总量",dictValue:"1"},{dictLabel:"新增（同一渠道60岁以上）",dictValue:"2"},{dictLabel:"新增（同一渠道20岁以下）",dictValue:"3"},{dictLabel:"渠道发展户籍外地比例",dictValue:"4"}],i=[{dictLabel:"同一证件多地开卡",dictValue:"1"},{dictLabel:"同一证件多厅开卡",dictValue:"2"},{dictLabel:"同一证件反复开卡注销",dictValue:"3"},{dictLabel:"低高龄入网号码",dictValue:"4"},{dictLabel:"个人代办批量委托开卡或过户",dictValue:"5"},{dictLabel:"新入网用户6个月内过户",dictValue:"6"},{dictLabel:"涉案及关联号码",dictValue:"7"}],c=[{dictLabel:"电子渠道",dictValue:"1"},{dictLabel:"实体渠道",dictValue:"2"},{dictLabel:"其他",dictValue:"3"}],n=[{dictLabel:"身份证",dictValue:"1"},{dictLabel:"其他",dictValue:"2"}],r=[{dictLabel:"营业执照",dictValue:"1"},{dictLabel:" 驾驶证",dictValue:"2"},{dictLabel:"退伍证",dictValue:"3"},{dictLabel:"港澳身份证",dictValue:"4"},{dictLabel:"户口簿",dictValue:"5"},{dictLabel:"居民身份证",dictValue:"6"},{dictLabel:"介绍信",dictValue:"7"},{dictLabel:"VIP卡",dictValue:"8"},{dictLabel:"手机号(资料不全)",dictValue:"9"},{dictLabel:"军官证",dictValue:"10"},{dictLabel:"护照",dictValue:"11"},{dictLabel:"武装警察身份证件",dictValue:"12"},{dictLabel:"回乡证",dictValue:"13"},{dictLabel:"士兵证",dictValue:"14"},{dictLabel:"学生证",dictValue:"15"},{dictLabel:"台胞证",dictValue:"16"},{dictLabel:"教师证",dictValue:"17"},{dictLabel:"临时身份证",dictValue:"18"},{dictLabel:"工作证",dictValue:"19"},{dictLabel:"暂住证",dictValue:"20"},{dictLabel:"居留证",dictValue:"21"},{dictLabel:"船民证",dictValue:"22"},{dictLabel:"港澳通行证",dictValue:"23"},{dictLabel:"残疾证",dictValue:"24"},{dictLabel:"边民出入境通行证",dictValue:"25"},{dictLabel:"社团法人登记证",dictValue:"26"},{dictLabel:"组织机构代码证",dictValue:"27"},{dictLabel:"外交人员身份证",dictValue:"28"},{dictLabel:"事业单位法人登记证",dictValue:"29"},{dictLabel:"船民证",dictValue:"30"},{dictLabel:"资料冲突待补录证件",dictValue:"31"},{dictLabel:"单位证明",dictValue:"32"},{dictLabel:"统一社会信用代码证书",dictValue:"33"}]}}]);