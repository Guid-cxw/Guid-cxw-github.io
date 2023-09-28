(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0e64758c","chunk-2d21f098"],{"0c39":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"note-container"},[e("el-card",{staticClass:"aui-card--fill",attrs:{shadow:"never"}},[e("el-form",{ref:"studyForm",attrs:{inline:!0,model:t.dataForm},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.searchData()}}},[e("el-form-item",{attrs:{label:"业务系统上报时间"}},[e("el-date-picker",{attrs:{"value-format":"yyyy-MM-dd HH:mm:ss",type:"datetimerange","start-placeholder":"开始时间","end-placeholder":"结束时间",clearable:""},model:{value:t.daterange,callback:function(e){t.daterange=e},expression:"daterange"}})],1),e("el-form-item",{staticClass:"lag",attrs:{label:"接口类型"}},[e("el-select",{attrs:{placeholder:"请选择接口类型",clearable:""},model:{value:t.dataForm.reportType,callback:function(e){t.$set(t.dataForm,"reportType",e)},expression:"dataForm.reportType"}},t._l(t.typeup,(function(t){return e("el-option",{key:t.dictValue,attrs:{label:t.dictLabel,value:t.dictValue}})})),1)],1),e("el-form-item",{attrs:{label:"上报集团日期"}},[e("el-date-picker",{attrs:{"value-format":"yyyy-MM-dd",type:"date",placeholder:"选择上报日期"},model:{value:t.dataForm.reportDate,callback:function(e){t.$set(t.dataForm,"reportDate",e)},expression:"dataForm.reportDate"}})],1),e("el-form-item",[e("el-button",{on:{click:function(e){return t.searchData()}}},[t._v("查询")])],1),e("el-form-item",[e("el-button",{attrs:{type:"success"},on:{click:t.exportImport}},[t._v("导出")])],1)],1),e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.dataListLoading,expression:"dataListLoading"}],ref:"tables",staticClass:"tab",staticStyle:{width:"100%"},attrs:{data:t.dataList,border:"","header-cell-style":{background:"rgba(194, 210, 255, 0.3)",color:"#040415"},"row-key":t.getRowsKey},on:{"selection-change":t.dataListSelectionChangeHandle}},[e("el-table-column",{attrs:{align:"center",label:"序号",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n                    "+t._s((t.page-1)*t.limit+e.$index+1)+"\n                ")]}}])}),e("el-table-column",{attrs:{prop:"reportType",align:"center",label:"接口类型"}}),e("el-table-column",{attrs:{prop:"reportService",label:"业务系统",align:"center"}}),e("el-table-column",{attrs:{prop:"serviceSysDate",label:"业务系统上报时间",align:"center"}}),e("el-table-column",{attrs:{prop:"reportCount",label:"数量",align:"center"}}),e("el-table-column",{attrs:{prop:"reportDate",label:"上报集团日期",align:"center"}})],1),e("el-pagination",{attrs:{"current-page":t.page,"page-sizes":[10,20,50,100],"page-size":t.limit,total:t.total,layout:"total, sizes, prev, pager, next, jumper"},on:{"update:currentPage":function(e){t.page=e},"update:current-page":function(e){t.page=e},"size-change":t.pageSizeChangeHandle,"current-change":t.pageCurrentChangeHandle}})],1)],1)},o=[],r=(a("8e6e"),a("ac6a"),a("456d"),a("ade3")),i=a("d7b1"),c=a("ed08"),l=a("dea3"),s=a("4328"),d=a.n(s);function u(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?u(Object(a),!0).forEach((function(e){Object(r["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var f={name:"noteIndex",props:{},mixins:[i["a"]],data:function(){return{daterange:[],dataForm:{reportType:"",commandId:"",reportStatus:"",reportDate:"",serviceSysEndDate:"",serviceSysStartDate:""},reportStatus:Object(c["b"])("reportStatus"),typeup:Object(c["b"])("typeup")}},computed:{},watch:{daterange:function(t){this.dataForm.serviceSysStartDate=null!==t?t[0]:"",this.dataForm.serviceSysEndDate=null!==t?t[1]:""}},mounted:function(){},activated:function(){this.getListData()},methods:{getListData:function(){var t=this;this.dataListLoading=!0,this.$http.get("/datamanage/reportData/v2/page",{params:p({page:this.page,limit:this.limit},this.dataForm)}).then((function(e){if(0!=e.data.code)return t.dataListLoading=!1,t.$message.error(e.data.msg);t.dataList=e.data.data.list,t.total=e.data.data.total,t.dataListLoading=!1}))},exportImport:function(){var t=this;this.dataListSelections.length>0&&this.dataListSelections.map((function(t){return t.id})),this.$confirm("是否继续导出数据？","批量导出",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",callback:function(){},beforeClose:function(e,a,n){if("confirm"!==e)return a.confirmButtonLoading=!1,void n();a.confirmButtonLoading=!0;var o=d.a.stringify(p({token:t.$getUserToken("token")},t.dataForm));t.$http({method:"get",withCredentials:!1,timeout:36e4,responseType:"blob",url:"/datamanage/reportData/export?".concat(o)}).then((function(e){var a=e.headers["content-type"].indexOf("application/json");if(-1!=a){var n=decodeURIComponent(e.headers["errormsg"]);return t.$message.error(n)}Object(l["a"])(e.data,"数据上报情况统计-".concat(t.$moment().format("YYYY-MM-DD")),".xlsx")})),a.confirmButtonLoading=!1,t.$refs["tables"].clearSelection(),n()}}).finally((function(){ctx.confirmButtonLoading=!1})).catch((function(){ctx.confirmButtonLoading=!1}))}}},m=f,g=(a("bd79"),a("2877")),h=Object(g["a"])(m,n,o,!1,null,"fcefc66a",null);e["default"]=h.exports},a99d:function(t,e,a){},bd79:function(t,e,a){"use strict";a("a99d")},d7b1:function(t,e,a){"use strict";a("8e6e"),a("ac6a"),a("456d");var n=a("ade3"),o=a("4328"),r=a.n(o),i=a("dea3");function c(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?c(Object(a),!0).forEach((function(e){Object(n["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}e["a"]={data:function(){return Object(n["a"])({mixinViewModuleOptions:{exportExlUrl:""},dataList:[],dataListLoading:!1,page:1,limit:10,total:0,scrollTops:0,dataListSelections:[],uploadLoading:!1,uploadVisible:!1,title:"",url:"",downLoadUrl:""},"dataListSelections",[])},activated:function(){window.addEventListener("scroll",this.handleScroll,!0),this.listenerFunction()},deactivated:function(){window.removeEventListener("scroll",this.handleScroll,!0)},methods:{searchData:function(){this.dataListSelections.length>0&&this.$refs["tables"].clearSelection(),this.page=1,this.getListData()},pageSizeChangeHandle:function(t){this.page=1,this.limit=t,this.getListData()},pageCurrentChangeHandle:function(t){this.page=t,this.getListData()},getRowsKey:function(t){return t.id},dataListSelectionChangeHandle:function(t){this.dataListSelections=t},listenerFunction:function(){var t=this;this.$nextTick((function(){document.documentElement.scrollTop=t.scrollTops}))},getScrollPosition:function(){var t=document.documentElement.scrollTop;this.scrollTops=t},handleScroll:function(t){this.scrollTops=document.documentElement.scrollTop},exportExl:function(){var t=this,e=[];this.dataListSelections.length>0&&(e=this.dataListSelections.map((function(t){return t.id}))),this.$confirm("根据检索条件，共计将导出".concat(e.length>0?e.length:this.total,"条数据, 是否继续?"),"批量导出",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",callback:function(){},beforeClose:function(a,n,o){if("confirm"===a){n.confirmButtonLoading=!0;var c=r.a.stringify(l(l({token:t.$getUserToken("token")},t.dataForm),{},{ids:e.join()}));t.$http({method:"get",withCredentials:!1,timeout:36e4,responseType:"blob",url:"".concat(t.mixinViewModuleOptions.exportExlUrl,"?").concat(c)}).then((function(e){Object(i["a"])(e.data,t.$route.meta.title)})),n.confirmButtonLoading=!1,t.$refs["tables"].clearSelection(),o()}else o()}}).finally((function(){ctx.confirmButtonLoading=!1})).catch((function(){ctx.confirmButtonLoading=!1}))},del:function(t){var e=this,a=[];a.push(t),this.$confirm("此操作将删除该上报记录，请确认操作！","删除",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",callback:function(){},beforeClose:function(t,n,o){"confirm"===t?e.$http.post("/dataprocess/catAssist/delete",a).then((function(t){if(0!==t.data.code)return o(),n.confirmButtonLoading=!1,e.$message.error(t.data.msg);n.confirmButtonLoading=!1,o(),e.getListData(),e.$message.success("删除成功")})):o()}}).finally((function(){ctx.confirmButtonLoading=!1})).catch((function(){ctx.confirmButtonLoading=!1})),this.page>1&&(this.total-1)%this.limit===0&&(this.page-=1)}}}}}]);