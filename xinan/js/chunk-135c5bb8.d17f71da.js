(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-135c5bb8","chunk-2d21f098"],{"4e9a":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"note-container"},[e("el-card",{staticClass:"aui-card--fill",attrs:{shadow:"never"}},[e("el-form",{ref:"studyForm",attrs:{inline:!0,model:t.dataForm},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.searchData()}}},[e("el-form-item",{attrs:{label:"上报时间"}},[e("el-date-picker",{attrs:{"value-format":"yyyy-MM-dd",type:"daterange","start-placeholder":"开始时间","end-placeholder":"结束时间",clearable:""},model:{value:t.daterange,callback:function(e){t.daterange=e},expression:"daterange"}})],1),e("el-form-item",{staticClass:"lag",attrs:{label:"上报状态"}},[e("el-select",{attrs:{placeholder:"请选择项目状态",clearable:""},model:{value:t.dataForm.reportStatus,callback:function(e){t.$set(t.dataForm,"reportStatus",e)},expression:"dataForm.reportStatus"}},t._l(t.projectStatusList,(function(t){return e("el-option",{key:t.dictValue,attrs:{label:t.dictLabel,value:t.dictValue}})})),1)],1),e("el-form-item",[e("el-input",{attrs:{placeholder:"按核查工单号检索",clearable:""},model:{value:t.dataForm.baseId,callback:function(e){t.$set(t.dataForm,"baseId",e)},expression:"dataForm.baseId"}})],1),e("el-form-item",[e("el-input",{attrs:{placeholder:"按被举报号码检索",clearable:""},model:{value:t.dataForm.reportedNumber,callback:function(e){t.$set(t.dataForm,"reportedNumber",e)},expression:"dataForm.reportedNumber"}})],1),e("el-form-item",[e("el-input",{attrs:{placeholder:"按id就行检索",clearable:""},model:{value:t.dataForm.recordId,callback:function(e){t.$set(t.dataForm,"recordId",e)},expression:"dataForm.recordId"}})],1),e("el-form-item",[e("el-button",{on:{click:function(e){return t.searchData()}}},[t._v("查询")])],1),e("el-form-item",[e("el-button",{attrs:{type:"success"},on:{click:t.exportExl}},[t._v("导出")])],1)],1),e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.dataListLoading,expression:"dataListLoading"}],ref:"tables",staticClass:"tab",staticStyle:{width:"100%"},attrs:{data:t.dataList,border:"","header-cell-style":{background:"rgba(194, 210, 255, 0.3)",color:"#040415"},"row-key":t.getRowsKey},on:{"selection-change":t.dataListSelectionChangeHandle}},[e("el-table-column",{attrs:{type:"selection","header-align":"center",align:"center",width:"50","reserve-selection":!0}}),e("el-table-column",{attrs:{prop:"baseId",align:"center",label:"核查工单号",width:"250"}}),e("el-table-column",{attrs:{prop:"recordId",label:"ID",align:"center",width:"150"}}),e("el-table-column",{attrs:{prop:"reportSourceTypeName",label:"投诉渠道",align:"center",width:"100"}}),e("el-table-column",{attrs:{prop:"reportingNumber",label:"举报号码",align:"center",width:"200"}}),e("el-table-column",{attrs:{prop:"reportedNumber",label:"被举报号码",align:"center",width:"180"}}),e("el-table-column",{attrs:{prop:"reportedNumberCityStr",label:"被举报号码归属市",align:"center",width:"180"}}),e("el-table-column",{attrs:{prop:"reportingTime",label:"举报时间",align:"center",width:"200"}}),e("el-table-column",{attrs:{prop:"reportStatusName",label:"上报状态",align:"center"}}),e("el-table-column",{attrs:{prop:"statDate",label:"上报时间",align:"center",width:"200"}}),e("el-table-column",{attrs:{label:"操作",align:"center",width:"200",fixed:"right"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-button",{attrs:{type:"text"},on:{click:function(e){return t.Lookdetail(a.row.id)}}},[t._v("查看详情")])]}}])})],1),e("el-pagination",{attrs:{"current-page":t.page,"page-sizes":[10,20,50,100],"page-size":t.limit,total:t.total,layout:"total, sizes, prev, pager, next, jumper"},on:{"update:currentPage":function(e){t.page=e},"update:current-page":function(e){t.page=e},"size-change":t.pageSizeChangeHandle,"current-change":t.pageCurrentChangeHandle}})],1)],1)},r=[],o=(a("8e6e"),a("ac6a"),a("456d"),a("ade3")),i=a("d7b1"),l=a("ed08");function c(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?c(Object(a),!0).forEach((function(e){Object(o["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var d={props:{},mixins:[i["a"]],data:function(){return{mixinViewModuleOptions:{exportExlUrl:"/datamanage/report/woFraudulentPhone/export"},daterange:[],dataForm:{startDate:"",endDate:"",reportStatus:"",baseId:"",reportedNumber:"",recordId:""},projectStatusList:Object(l["b"])("reportStatus"),dataList:[],page:1,limit:10,total:0}},computed:{},activated:function(){this.getListData()},created:function(){},watch:{daterange:function(t){this.dataForm.startDate=null!==t?t[0]:"",this.dataForm.endDate=null!==t?t[1]:""}},mounted:function(){},methods:{getListData:function(){var t=this;this.dataListLoading=!0,this.$http.get("/datamanage/report/woFraudulentPhone/page",{params:s({page:this.page,limit:this.limit},this.dataForm)}).then((function(e){if(0!=e.data.code)return t.dataListLoading=!1,t.$message.error(e.data.msg);t.dataList=e.data.data.list,t.total=e.data.data.total,t.dataListLoading=!1}))},Lookdetail:function(t){this.$router.push({path:"/12321reportdata-details",query:{id:t}})}}},u=d,p=(a("a496"),a("2877")),m=Object(p["a"])(u,n,r,!1,null,"15e62fe9",null);e["default"]=m.exports},5352:function(t,e,a){},a496:function(t,e,a){"use strict";a("5352")},d7b1:function(t,e,a){"use strict";a("8e6e"),a("ac6a"),a("456d");var n=a("ade3"),r=a("4328"),o=a.n(r),i=a("dea3");function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function c(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){Object(n["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}e["a"]={data:function(){return Object(n["a"])({mixinViewModuleOptions:{exportExlUrl:""},dataList:[],dataListLoading:!1,page:1,limit:10,total:0,scrollTops:0,dataListSelections:[],uploadLoading:!1,uploadVisible:!1,title:"",url:"",downLoadUrl:""},"dataListSelections",[])},activated:function(){window.addEventListener("scroll",this.handleScroll,!0),this.listenerFunction()},deactivated:function(){window.removeEventListener("scroll",this.handleScroll,!0)},methods:{searchData:function(){this.dataListSelections.length>0&&this.$refs["tables"].clearSelection(),this.page=1,this.getListData()},pageSizeChangeHandle:function(t){this.page=1,this.limit=t,this.getListData()},pageCurrentChangeHandle:function(t){this.page=t,this.getListData()},getRowsKey:function(t){return t.id},dataListSelectionChangeHandle:function(t){this.dataListSelections=t},listenerFunction:function(){var t=this;this.$nextTick((function(){document.documentElement.scrollTop=t.scrollTops}))},getScrollPosition:function(){var t=document.documentElement.scrollTop;this.scrollTops=t},handleScroll:function(t){this.scrollTops=document.documentElement.scrollTop},exportExl:function(){var t=this,e=[];this.dataListSelections.length>0&&(e=this.dataListSelections.map((function(t){return t.id}))),this.$confirm("根据检索条件，共计将导出".concat(e.length>0?e.length:this.total,"条数据, 是否继续?"),"批量导出",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",callback:function(){},beforeClose:function(a,n,r){if("confirm"===a){n.confirmButtonLoading=!0;var l=o.a.stringify(c(c({token:t.$getUserToken("token")},t.dataForm),{},{ids:e.join()}));t.$http({method:"get",withCredentials:!1,timeout:36e4,responseType:"blob",url:"".concat(t.mixinViewModuleOptions.exportExlUrl,"?").concat(l)}).then((function(e){Object(i["a"])(e.data,t.$route.meta.title)})),n.confirmButtonLoading=!1,t.$refs["tables"].clearSelection(),r()}else r()}}).finally((function(){ctx.confirmButtonLoading=!1})).catch((function(){ctx.confirmButtonLoading=!1}))},del:function(t){var e=this,a=[];a.push(t),this.$confirm("此操作将删除该上报记录，请确认操作！","删除",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",callback:function(){},beforeClose:function(t,n,r){"confirm"===t?e.$http.post("/dataprocess/catAssist/delete",a).then((function(t){if(0!==t.data.code)return r(),n.confirmButtonLoading=!1,e.$message.error(t.data.msg);n.confirmButtonLoading=!1,r(),e.getListData(),e.$message.success("删除成功")})):r()}}).finally((function(){ctx.confirmButtonLoading=!1})).catch((function(){ctx.confirmButtonLoading=!1})),this.page>1&&(this.total-1)%this.limit===0&&(this.page-=1)}}}}}]);