(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-890a438e","chunk-0538a25d","chunk-7348fcc8","chunk-7348fcc8","chunk-2d21f098"],{2663:function(t,e,a){},"334d":function(t,e,a){},3985:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t._self._c;return e("div",[e("el-dialog",{attrs:{visible:t.visible,width:"40%",title:t.title,"close-on-click-modal":!1,"close-on-press-escape":!1,"append-to-body":""},on:{"update:visible":function(e){t.visible=e},close:t.closedialog}},[e("el-upload",{ref:"upload",staticClass:"model_upload_box",attrs:{drag:"",action:t.url,headers:{responseType:"arraybuffer"},"file-list":t.fileList,"auto-upload":!1,"on-change":t.onChange,accept:".XLS, .xls, .XLSX, .xlsx"}},[e("i",{staticClass:"el-icon-upload"}),e("div",{staticClass:"el-upload__text",domProps:{innerHTML:t._s("将文件拖到此处，或<em>点击导入</em>")}}),e("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e("div",[t._v("只支持XLS、xls、XLSX、xlsx格式文件,文件大小不超过20M")])])]),t.isErrorFlag?e("div",{staticClass:"error-hint"},[e("p",[t._v(t._s(t.errorHint))])]):t._e(),e("div",{staticClass:"upload-btn"},[e("p",{staticClass:"red"},[t._v(t._s(t.errormessage))]),e("el-button",{on:{click:t.requestChange}},[t._v("确定上传")])],1)],1)],1)},i=[],o=(a("7f7f"),a("a481"),{props:{title:{type:String,default:function(){return""}},url:{type:String,default:function(){return"#"}},downloadUrl:{type:String,default:function(){return""}}},data:function(){return{fileList:[],xls:".xls",xlsx:".xlsx",visible:!1,isErrorFlag:!1,errorHint:"",errormessage:"",uploadUrl:"",id:""}},methods:{closedialog:function(){this.visible=!1},init:function(){this.visible=!0,this.fileList=[],this.errormessage=""},onChange:function(t,e){this.errormessage="";var a=t.size/1024/1024<21;if(!a)return this.$message.warning("文件大小不能超过20M"),void(this.fileList=[]);var n=t.name.replace(/.+\./,""),i=["XLS","xls","XLSX","xlsx"];if(-1===i.indexOf(n.toLowerCase()))return this.$message.warning("请上传格式正确的文件"),void(this.fileList=[]);e.length>0&&(this.fileList=[e[e.length-1]])},requestChange:function(){var t=this;if(0==this.fileList.length)return this.$message.error("请上传文件");var e=new FormData;e.append("file",this.fileList[0].raw),this.id.length>0&&e.append("cityId",this.id),this.$http.post(this.uploadUrl,e).then((function(e){if(0!=e.data.code)return t.errormessage=e.data.msg,t.$message.error(e.data.msg);t.$message.success(e.data.msg),t.visible=!1,t.errormessage="",t.$emit("getData")}))},downLoadTemplate:function(){this.$emit("downLoadTemplate")}}}),r=o,s=(a("9feb"),a("2877")),l=Object(s["a"])(r,n,i,!1,null,"45dc9114",null);e["default"]=l.exports},"52b9":function(t,e,a){"use strict";a.r(e);a("7f7f");var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"note-container"},[e("el-card",{staticClass:"aui-card--fill",attrs:{shadow:"never"}},[e("div",{staticClass:"head-desc",attrs:{slot:"header"},slot:"header"},[e("span",[t._v("涉案固话号码反馈列表")]),e("el-button",{on:{click:t.backpage}},[t._v("返回")])],1),e("el-form",{ref:"studyForm",attrs:{inline:!0,model:t.dataForm},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.searchData()}}},[e("el-form-item",{attrs:{label:"涉案固话号码"}},[e("el-input",{attrs:{clearable:""},model:{value:t.dataForm.involvedFixedPhone,callback:function(e){t.$set(t.dataForm,"involvedFixedPhone",e)},expression:"dataForm.involvedFixedPhone"}})],1),e("el-form-item",{attrs:{label:"受害人号码"}},[e("el-input",{attrs:{clearable:""},model:{value:t.dataForm.victimPhone,callback:function(e){t.$set(t.dataForm,"victimPhone",e)},expression:"dataForm.victimPhone"}})],1),e("el-form-item",{attrs:{label:"固话类型"}},[e("el-select",{attrs:{clearable:""},model:{value:t.dataForm.fixedType,callback:function(e){t.$set(t.dataForm,"fixedType",e)},expression:"dataForm.fixedType"}},[e("el-option",{attrs:{label:"企业固话",value:"企业固话"}}),e("el-option",{attrs:{label:"个人固话",value:"个人固话"}})],1)],1),e("el-form-item",{attrs:{label:"日期"}},[e("el-date-picker",{attrs:{"value-format":"yyyy-MM-dd",type:"daterange","start-placeholder":"开始时间","end-placeholder":"结束时间",clearable:""},model:{value:t.daterange,callback:function(e){t.daterange=e},expression:"daterange"}})],1),t._e(),e("el-form-item",[e("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.searchData()}}},[t._v("查询")])],1),e("el-form-item",[e("el-button",{on:{click:t.resetting}},[t._v("重置")])],1),e("el-form-item",[e("el-button",{attrs:{type:"success"},on:{click:t.exportExl}},[t._v("批量导出")])],1),e("el-form-item",[e("el-button",{attrs:{type:"danger"},on:{click:t.uploadRinse}},[t._v("批量导入")])],1)],1),e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.dataListLoading,expression:"dataListLoading"}],ref:"tables",staticClass:"tab",staticStyle:{width:"100%"},attrs:{data:t.dataList,border:"","header-cell-style":{background:"rgba(194, 210, 255, 0.3)",color:"#040415"},"row-key":t.getRowsKey,"row-style":t.iRowStyle,"cell-style":t.iCellStyle,"header-row-style":t.iHeaderRowStyle},on:{"selection-change":t.dataListSelectionChangeHandle}},[e("el-table-column",{attrs:{type:"selection","header-align":"center",align:"center",width:"50","reserve-selection":!0}}),e("el-table-column",{attrs:{prop:"serialNumber",align:"center",label:"工单编号",width:"180"}}),e("el-table-column",{attrs:{prop:"approvalStatus",label:"审核状态",align:"center",width:"100"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-tag",{directives:[{name:"show",rawName:"v-show",value:-1==a.row.approvalStatus,expression:"scope.row.approvalStatus == -1"}],attrs:{type:"info"}},[t._v("待审核")]),e("el-tag",{directives:[{name:"show",rawName:"v-show",value:1==a.row.approvalStatus,expression:"scope.row.approvalStatus == 1"}],attrs:{type:"success"}},[t._v("已通过")]),e("el-tag",{directives:[{name:"show",rawName:"v-show",value:0==a.row.approvalStatus,expression:"scope.row.approvalStatus == 0"}],attrs:{type:"warning"}},[t._v("未通过")])]}}])}),e("el-table-column",{attrs:{prop:"feedbackStatus",label:"反馈状态",align:"center",width:"100"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-tag",{directives:[{name:"show",rawName:"v-show",value:2==a.row.feedbackStatus,expression:"scope.row.feedbackStatus == 2"}],attrs:{type:"success"}},[t._v("已反馈")]),e("el-tag",{directives:[{name:"show",rawName:"v-show",value:0==a.row.feedbackStatus,expression:"scope.row.feedbackStatus == 0"}],attrs:{type:"warning"}},[t._v("未反馈")])]}}])}),e("el-table-column",{attrs:{prop:"fixedDate",label:"日期",align:"center",width:"150"}}),e("el-table-column",{attrs:{prop:"belongCityStr",label:"地市",align:"center",width:"150"}}),e("el-table-column",{attrs:{prop:"involvedFixedPhone",label:"涉案固话号码",align:"center",width:"120"}}),e("el-table-column",{attrs:{prop:"filingType",label:"案件类别",align:"center",width:"200"}}),e("el-table-column",{attrs:{prop:"filingTime",label:"发案时间",align:"center",width:"300"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.filingTime))]}}])}),e("el-table-column",{attrs:{prop:"victimPhone",label:"受害人号码",align:"center",width:"120"}}),e("el-table-column",{attrs:{label:"操作",align:"center",fixed:"right"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-button",{attrs:{type:"text"},on:{click:function(e){return t.Lookdetail(a.row.id)}}},[t._v("查看详情")]),e("el-button",{directives:[{name:"show",rawName:"v-show",value:"是"==a.row.isLocalDen,expression:"scope.row.isLocalDen == `是`"}],attrs:{type:"text"},on:{click:function(e){return t.following(a.row)}}},[t._v("\n                        跟踪\n                    ")])]}}])})],1),e("el-pagination",{attrs:{"current-page":t.page,"page-sizes":[10,20,50,100],"page-size":t.limit,total:t.total,layout:"total, sizes, prev, pager, next, jumper"},on:{"update:currentPage":function(e){t.page=e},"update:current-page":function(e){t.page=e},"size-change":t.pageSizeChangeHandle,"current-change":t.pageCurrentChangeHandle}})],1),t.uploadVisible?e("batch-up",{ref:"upload",attrs:{title:t.title},on:{getData:t.getListData}}):t._e()],1)},i=[],o=(a("8e6e"),a("ac6a"),a("456d"),a("ade3")),r=(a("28a5"),a("a481"),a("d7b1")),s=(a("ed08"),a("a865")),l=a("3985"),c=a("5d2d"),d=a("4328"),u=a.n(d),p=a("dea3");function f(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function h(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?f(Object(a),!0).forEach((function(e){Object(o["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):f(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var m={props:{},mixins:[r["a"]],components:{batchUp:l["default"]},data:function(){return{errormessage:"",id:"",daterange:[],dataForm:{involvedFixedPhone:"",victimPhone:"",fixedType:"",startFixedDate:"",endFixedDate:""},citys:[],pid:"320000",title:"导入项目",uploadVisible:!1}},created:function(){},computed:{formatTime:function(){function t(t,e){var a=0,n=[];while(a<t.length)n.push(t.slice(a,a+=e));return n}function e(t){var e=/(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/;return t.replace(e,"$1-$2-$3 $4:$5:$6")}return function(a){var n=a.split("-"),i=t(n,3),o=i[0].map((function(t){return t.split(":")})).join().split(","),r=i[1].map((function(t){return t.split(":")})).join().split(","),s=o.join(""),l=r.join("");return"".concat(e(s)," - ").concat(e(l))}}},activated:function(){var t=Object(c["a"])("case-id");this.id!=t&&(this.id=t,this.$refs["tables"].clearSelection()),this.getregionlist(),this.getListData()},watch:{daterange:function(t){this.dataForm.startFixedDate=null!==t?t[0]:"",this.dataForm.endFixedDate=null!==t?t[1]:""}},mounted:function(){},methods:{getData:function(){this.getListData()},iRowStyle:function(t){t.row,t.rowIndex;return"height:30px"},iHeaderRowStyle:function(t){t.row,t.rowIndex;return"height:30px"},iCellStyle:function(t){t.row,t.column,t.rowIndex,t.columnIndex;return"padding:0px"},exportExl:function(){var t=this,e=[];this.dataListSelections.length>0&&(e=this.dataListSelections.map((function(t){return t.id}))),this.$confirm("根据检索条件，共计将导出".concat(e.length>0?e.length:this.total,"条数据, 是否继续?"),"批量导出",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",callback:function(){},beforeClose:function(a,n,i){if("confirm"===a){n.confirmButtonLoading=!0;var o=u.a.stringify(h(h({token:t.$getUserToken("token")},t.dataForm),{},{ids:e.join(),cityId:t.id}));t.$http({method:"get",withCredentials:!1,timeout:36e4,responseType:"blob",url:"/workorder/woFixedPhone/city/export?".concat(o)}).then((function(t){Object(p["a"])(t.data,"涉案固话号码反馈")})),n.confirmButtonLoading=!1,t.$refs["tables"].clearSelection(),i()}else i()}}).finally((function(){ctx.confirmButtonLoading=!1})).catch((function(){ctx.confirmButtonLoading=!1}))},backpage:function(){var t=this;this.$store.state.contentTabs=this.$store.state.contentTabs.filter((function(e){return e.name!==t.$store.state.contentTabsActiveName})),this.$router.push({path:"/telephoneWorkOrder-FeedBack-repairback"})},following:function(t){this.$router.push({path:"/following",query:{id:t.id,isFeedbackPolice:t.isFeedbackPolice,denIsDestroyed:t.denIsDestroyed,denDestroyDate:t.denDestroyDate}})},uploadRinse:function(){var t=this;this.title="导入项目",this.uploadVisible=!0,this.$nextTick((function(){t.$refs.upload.uploadUrl="/workorder/woFixedPhone/city/import/update",t.$refs.upload.id=t.id,t.$refs.upload.init()}))},requestChange:function(t){var e=this;if(0==t.length)return this.$message.error("请上传文件");var a=new FormData;a.append("file",t[0].raw),a.append("cityId",this.id),this.$http.post("/workorder/woFixedPhone/city/import/update",a).then((function(t){if(0!=t.data.code)return e.errormessage=t.data.msg,e.$message.error(t.data.msg);e.$message.success("上传成功"),e.uploadVisible=!1,e.errormessage="",e.getListData()}))},resetting:function(){this.dataForm=this.$options.data().dataForm,this.daterange=[],this.getListData()},getregionlist:function(){var t=this,e={pid:this.pid};Object(s["j"])(e).then((function(e){t.citys=e.data.data}))},getListData:function(){var t=this;this.dataListLoading=!0,this.$http.get("/workorder/woFixedPhone/city/page",{params:h(h({page:this.page,limit:this.limit},this.dataForm),{},{cityId:this.id})}).then((function(e){if(0!=e.data.code)return t.dataListLoading=!1,t.$message.error(e.data.msg);t.dataList=e.data.data.list,t.total=e.data.data.total,t.dataListLoading=!1}))},Lookdetail:function(t){this.$router.push({path:"/telephone-data-details",query:{id:t}})},dialog:function(){this.uploadVisible=!1,this.errormessage=""}}},g=m,b=(a("9784"),a("2877")),v=Object(b["a"])(g,n,i,!1,null,"594fb650",null);e["default"]=v.exports},"5d2d":function(t,e,a){"use strict";a.d(e,"a",(function(){return i})),a.d(e,"b",(function(){return o}));var n=a("53ca"),i=function(t){var e=window.sessionStorage.getItem(t);try{return JSON.parse(e)}catch(a){return e}},o=function(t,e){"object"===Object(n["a"])(e)&&(e=JSON.stringify(e)),window.sessionStorage.setItem(t,e)}},9784:function(t,e,a){"use strict";a("334d")},"9feb":function(t,e,a){"use strict";a("2663")},a865:function(t,e,a){"use strict";a.d(e,"j",(function(){return i})),a.d(e,"g",(function(){return o})),a.d(e,"h",(function(){return r})),a.d(e,"i",(function(){return s})),a.d(e,"a",(function(){return l})),a.d(e,"k",(function(){return c})),a.d(e,"d",(function(){return d})),a.d(e,"e",(function(){return u})),a.d(e,"b",(function(){return p})),a.d(e,"f",(function(){return f})),a.d(e,"c",(function(){return h}));var n=a("b775"),i=function(t){return Object(n["a"])({method:"GET",url:"/system/sys/region/list",params:t})},o=function(t){return Object(n["a"])({method:"GET",url:"/dataprocess/catAssist/page",params:t})},r=function(t){return Object(n["a"])({method:"get",url:"/dataprocess/catAssist/".concat(t)})},s=function(t){return Object(n["a"])({method:"get",url:"/dataprocess/catAssist/downLoadFile?".concat(t),withCredentials:!1,timeout:36e4,responseType:"blob"})},l=function(t){return Object(n["a"])({method:"POST",url:"/dataprocess/catAssist/delete",data:t})},c=function(t,e){return Object(n["a"])({method:"POST",url:t?"/dataprocess/catAssist/update":"/dataprocess/catAssist",data:e})};function d(t){return Object(n["a"])({method:"get",url:"/datamanage/dataStatOverview/exportReportDataStat",params:t,withCredentials:!1,timeout:36e4,responseType:"blob"})}function u(t){return Object(n["a"])({method:"get",url:"/datamanage/dataStatOverview/exportIssueDataStat",params:t,withCredentials:!1,timeout:36e4,responseType:"blob"})}function p(t){return Object(n["a"])({method:"get",url:"/datamanage/dataStatOverview/exportReportCmccStat",params:t,withCredentials:!1,timeout:36e4,responseType:"blob"})}function f(t){return Object(n["a"])({method:"get",url:"/datamanage/dataStatOverview/exportCmccStat",params:t,withCredentials:!1,timeout:36e4,responseType:"blob"})}function h(t){return Object(n["a"])({method:"get",url:"/datamanage/dataStatOverview/exportReportGroupDataStat",params:t,withCredentials:!1,timeout:36e4,responseType:"blob"})}},d7b1:function(t,e,a){"use strict";a("8e6e"),a("ac6a"),a("456d");var n=a("ade3"),i=a("4328"),o=a.n(i),r=a("dea3");function s(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?s(Object(a),!0).forEach((function(e){Object(n["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}e["a"]={data:function(){return Object(n["a"])({mixinViewModuleOptions:{exportExlUrl:""},dataList:[],dataListLoading:!1,page:1,limit:10,total:0,scrollTops:0,dataListSelections:[],uploadLoading:!1,uploadVisible:!1,title:"",url:"",downLoadUrl:""},"dataListSelections",[])},activated:function(){window.addEventListener("scroll",this.handleScroll,!0),this.listenerFunction()},deactivated:function(){window.removeEventListener("scroll",this.handleScroll,!0)},methods:{searchData:function(){this.dataListSelections.length>0&&this.$refs["tables"].clearSelection(),this.page=1,this.getListData()},pageSizeChangeHandle:function(t){this.page=1,this.limit=t,this.getListData()},pageCurrentChangeHandle:function(t){this.page=t,this.getListData()},getRowsKey:function(t){return t.id},dataListSelectionChangeHandle:function(t){this.dataListSelections=t},listenerFunction:function(){var t=this;this.$nextTick((function(){document.documentElement.scrollTop=t.scrollTops}))},getScrollPosition:function(){var t=document.documentElement.scrollTop;this.scrollTops=t},handleScroll:function(t){this.scrollTops=document.documentElement.scrollTop},exportExl:function(){var t=this,e=[];this.dataListSelections.length>0&&(e=this.dataListSelections.map((function(t){return t.id}))),this.$confirm("根据检索条件，共计将导出".concat(e.length>0?e.length:this.total,"条数据, 是否继续?"),"批量导出",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",callback:function(){},beforeClose:function(a,n,i){if("confirm"===a){n.confirmButtonLoading=!0;var s=o.a.stringify(l(l({token:t.$getUserToken("token")},t.dataForm),{},{ids:e.join()}));t.$http({method:"get",withCredentials:!1,timeout:36e4,responseType:"blob",url:"".concat(t.mixinViewModuleOptions.exportExlUrl,"?").concat(s)}).then((function(e){Object(r["a"])(e.data,t.$route.meta.title)})),n.confirmButtonLoading=!1,t.$refs["tables"].clearSelection(),i()}else i()}}).finally((function(){ctx.confirmButtonLoading=!1})).catch((function(){ctx.confirmButtonLoading=!1}))},del:function(t){var e=this,a=[];a.push(t),this.$confirm("此操作将删除该上报记录，请确认操作！","删除",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",callback:function(){},beforeClose:function(t,n,i){"confirm"===t?e.$http.post("/dataprocess/catAssist/delete",a).then((function(t){if(0!==t.data.code)return i(),n.confirmButtonLoading=!1,e.$message.error(t.data.msg);n.confirmButtonLoading=!1,i(),e.getListData(),e.$message.success("删除成功")})):i()}}).finally((function(){ctx.confirmButtonLoading=!1})).catch((function(){ctx.confirmButtonLoading=!1})),this.page>1&&(this.total-1)%this.limit===0&&(this.page-=1)}}}}}]);