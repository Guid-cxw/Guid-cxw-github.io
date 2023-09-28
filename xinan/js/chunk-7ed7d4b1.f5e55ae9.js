(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7ed7d4b1","chunk-fb916248","chunk-2d21f098"],{"0b8a":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"note-container"},[e("el-card",{staticClass:"aui-card--fill",attrs:{shadow:"never"}},[e("el-form",{ref:"studyForm",attrs:{inline:!0,model:t.dataForm},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.searchData()}}},[e("el-form-item",{attrs:{label:"统计月份"}},[e("el-date-picker",{attrs:{"value-format":"yyyy-MM",type:"month",placeholder:"请选择统计月份"},model:{value:t.dataForm.month,callback:function(e){t.$set(t.dataForm,"month",e)},expression:"dataForm.month"}})],1),e("el-form-item",[e("el-button",{on:{click:function(e){return t.searchData()}}},[t._v("查询")])],1),e("el-form-item",[e("el-button",{attrs:{type:"primary"},on:{click:t.uploadRinse}},[t._v("新增")])],1)],1),e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.dataListLoading,expression:"dataListLoading"}],ref:"tables",staticClass:"tab",staticStyle:{width:"100%"},attrs:{data:t.dataList,border:"","header-cell-style":{background:"rgba(194, 210, 255, 0.3)",color:"#040415"},"row-key":t.getRowsKey},on:{"selection-change":t.dataListSelectionChangeHandle}},[e("el-table-column",{attrs:{prop:"month",align:"center",label:"统计月份"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n                    "+t._s(e.row.month)+"\n                ")]}}])}),e("el-table-column",{attrs:{prop:"involvedNum",label:"总涉案量",align:"center"}}),e("el-table-column",{attrs:{prop:"fraudulenceNum",label:"总涉诈量",align:"center"}}),e("el-table-column",{attrs:{prop:"userCount",label:"通信用户总数（百万）",align:"center"}}),e("el-table-column",{attrs:{prop:"createDate",label:"创建时间",align:"center"}}),e("el-table-column",{attrs:{label:"操作",align:"center",width:"200",fixed:"right"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-button",{attrs:{type:"text"},on:{click:function(e){return t.detail(a.row.month)}}},[t._v("查看详情")]),e("el-button",{attrs:{type:"text"},on:{click:function(e){return t.deleteData(a.row.month)}}},[t._v("删除")])]}}])})],1),e("el-pagination",{attrs:{"current-page":t.page,"page-sizes":[10,20,50,100],"page-size":t.limit,total:t.total,layout:"total, sizes, prev, pager, next, jumper"},on:{"update:currentPage":function(e){t.page=e},"update:current-page":function(e){t.page=e},"size-change":t.pageSizeChangeHandle,"current-change":t.pageCurrentChangeHandle}})],1),t.taskVisible?e("task",{ref:"taskRef",attrs:{title:t.title},on:{downLoadTemplate:t.downLoadTemplate,refreshDataList:t.getListData}}):t._e()],1)},i=[],o=(a("8e6e"),a("ac6a"),a("456d"),a("c5f6"),a("ade3")),r=a("d7b1"),s=(a("ed08"),a("91d1")),l=a("dea3");function c(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function d(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?c(Object(a),!0).forEach((function(e){Object(o["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var u={name:"noteIndex",props:{},mixins:[r["a"]],data:function(){return{dataForm:{month:""},taskVisible:!1,title:""}},computed:{},watch:{},mounted:function(){},activated:function(){this.getListData()},components:{task:s["default"]},methods:{getListData:function(){var t=this;this.dataListLoading=!0,this.$http.get("/datamanage/cityKPIAssessment/page",{params:d({page:this.page,limit:this.limit},this.dataForm)}).then((function(e){if(0!==e.data.code)return t.dataList=[],t.total=0,t.dataListLoading=!1,t.$message.error(e.data.msg);var a=e.data.data;t.total=Number(a.total),t.dataList=a.list,t.dataListLoading=!1}))},deleteData:function(t){var e=this;this.$confirm("此操作将删除该数据，请确认操作！","删除",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",callback:function(){},beforeClose:function(a,n,i){"confirm"===a?e.$http.delete("/datamanage/cityKPIAssessment",{data:t}).then((function(t){if(0!==t.data.code)return i(),n.confirmButtonLoading=!1,e.$message.error(t.data.msg);n.confirmButtonLoading=!1,i(),e.$message.success("删除成功"),e.getListData()})):i()}}).finally((function(){ctx.confirmButtonLoading=!1})).catch((function(){ctx.confirmButtonLoading=!1})),this.page>1&&(this.total-1)%this.limit===0&&(this.page-=1)},uploadRinse:function(){var t=this;this.title="考核数据新增",this.taskVisible=!0,this.$nextTick((function(){t.$refs.taskRef.init()}))},downLoadTemplate:function(){this.$http({method:"get",url:"/datamanage/cityKPIAssessment/downExcel",withCredentials:!1,timeout:36e4,responseType:"blob",params:{}}).then((function(t){Object(l["a"])(t.data,"考核数据模板")}))},detail:function(t){var e=this;this.title="考核数据详情",this.taskVisible=!0,this.$nextTick((function(){e.$refs.taskRef.dataForm.month=t,e.$refs.taskRef.init(),e.$refs.taskRef.isFlag=!0}))}}},f=u,m=(a("6bc8"),a("2877")),p=Object(m["a"])(f,n,i,!1,null,"7baa3db0",null);e["default"]=p.exports},"3d38":function(t,e,a){"use strict";a("88f4")},"6bc8":function(t,e,a){"use strict";a("a377")},"88f4":function(t,e,a){},"91d1":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t._self._c;return e("div",[e("el-dialog",{attrs:{visible:t.visible,title:t.title,"close-on-click-modal":!1,"close-on-press-escape":!1,"append-to-body":"",top:"2%"},on:{"update:visible":function(e){t.visible=e},close:t.closeHandle}},[e("el-form",{ref:"dataForm",attrs:{model:t.dataForm,"label-width":"100px",rules:t.dataRule}},[e("el-form-item",{attrs:{label:"统计月份",prop:"month"}},[e("el-date-picker",{attrs:{"value-format":"yyyy-MM",type:"month",placeholder:"请选择统计月份",disabled:t.isFlag},model:{value:t.dataForm.month,callback:function(e){t.$set(t.dataForm,"month",e)},expression:"dataForm.month"}})],1),t.isFlag?t._e():e("el-form-item",{staticClass:"file-desc",attrs:{label:"数据统计表",prop:"file"}},[e("el-row",[e("el-col",[e("el-upload",{ref:"upload1",attrs:{headers:{responseType:"arraybuffer"},accept:".XLS,.xls,.XLSX,.xlsx",action:"#","file-list":t.fileList,"on-change":t.onChange,"on-remove":t.emoveFileHandleXF,"auto-upload":!1}},[e("el-button",{attrs:{slot:"trigger",size:"small",type:"primary"},slot:"trigger"},[t._v("点击上传")]),e("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v("\n                                只支持XLS、xls、XLSX、xlsx格式文件,文件大小不超过20M\n                            ")])],1)],1),e("el-col",[e("a",{staticClass:"download_box",attrs:{href:"javascript:;"},on:{click:t.downLoadTemplate}},[t._v("下载Excel模板")])])],1)],1)],1),t.isErrorFlag?e("div",{staticClass:"error-hint"},t._l(t.errorHintList,(function(a,n){return e("p",{key:n},[t._v(t._s(a))])})),0):t._e(),t.isFlag?[e("p",{staticClass:"txt"},[t._v("数据明细")]),e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.dataListLoading,expression:"dataListLoading"}],ref:"tables",staticClass:"tab",staticStyle:{width:"100%"},attrs:{data:t.dataList,border:"","header-cell-style":{background:"rgba(194, 210, 255, 0.3)",color:"#040415"}}},[e("el-table-column",{attrs:{prop:"city",align:"center",label:"地市（核减后）"}}),e("el-table-column",{attrs:{prop:"involvedNum",label:"涉案量",align:"center"}}),e("el-table-column",{attrs:{prop:"fraudulenceNum",label:"涉诈量",align:"center"}}),e("el-table-column",{attrs:{prop:"userCount",label:"通信用户总数（百万）",align:"center"}}),e("el-table-column",{attrs:{prop:"involvedRate",label:"涉案率",align:"center"}}),e("el-table-column",{attrs:{prop:"fraudulenceRate",label:"涉诈率",align:"center"}}),e("el-table-column",{attrs:{prop:"involvedScore",label:"涉案率得分",align:"center"}}),e("el-table-column",{attrs:{prop:"fraudulenceScore",label:"涉诈率得分",align:"center"}})],1)]:t._e(),t.isFlag?t._e():e("template",{slot:"footer"},[e("el-button",{attrs:{type:"primary",loading:t.btnLoading},on:{click:function(e){return t.dataFormSubmitHandle()}}},[t._v("保存")]),e("el-button",{on:{click:function(e){t.visible=!1}}},[t._v(t._s(t.$t("cancel")))])],1)],2)],1)},i=[],o=(a("7f7f"),a("a481"),{props:{title:{type:String,default:function(){return""}},downloadUrl:{type:String,default:function(){return""}}},data:function(){return{dataForm:{id:"",month:"",file:{}},fileList:[],visible:!1,isErrorFlag:!1,errorHintList:[],btnLoading:!1,isFlag:!1,dataListLoading:!1,dataList:[]}},computed:{dataRule:function(){var t=this,e=function(e,a,n){0===t.fileList.length?n(new Error("数据统计表不能上传为空")):n()};return{month:[{required:!0,message:"统计月份不能为空",trigger:"change"}],file:[{required:!0,validator:e,trigger:"change"}]}}},methods:{init:function(){this.visible=!0,this.isErrorFlag=!1,this.errorHintList=[],this.dataForm.month&&this.getListData()},closeHandle:function(){var t=this;this.fileList.length>0&&this.$refs.upload1.clearFiles(),this.fileList=[],this.visible=!1,this.isErrorFlag=!1,this.errorHintList=[],this.dataForm=this.$options.data().dataForm;var e=null;e&&clearTimeout(e),e=setTimeout((function(){t.isFlag=!1}),500),this.$refs["dataForm"].resetFields()},onChange:function(t,e){this.errorHint="",this.isErrorFlag=!1;var a=t.size/1024/1024<21;if(!a)return this.$message.warning("文件大小不能超过20M"),void(this.fileList=[]);var n=t.name.replace(/.+\./,""),i=["XLS","xls","XLSX","xlsx"];if(-1===i.indexOf(n.toLowerCase()))return this.$message.warning("请上传格式正确的文件"),void(this.fileList=[]);e.length>0?(this.fileList=[e[e.length-1]],this.dataForm.file=this.fileList[0].raw,this.$refs["dataForm"].clearValidate("file")):this.$refs["dataForm"].validateField("fileList")},emoveFileHandleXF:function(t){this.fileList=[],this.dataForm.file=null,this.errorHint="",this.isErrorFlag=!1},downLoadTemplate:function(){this.$emit("downLoadTemplate")},dataFormSubmitHandle:function(){var t=this;this.$refs["dataForm"].validate((function(e){if(!e)return!1;if(0!=t.fileList.length){t.btnLoading=!0;var a=new FormData;a.append("file",t.fileList[0].raw),a.append("month",t.dataForm.month),t.$http["post"]("/datamanage/cityKPIAssessment/import",a).then((function(e){var a=e.data;null==a.data.failedMessage||0==a.data.failedMessage.length?(t.$message.success(a.data.successMessage),t.isErrorFlag=!1,t.btnLoading=!1,t.closeHandle(),t.$emit("refreshDataList")):(t.errorHintList=a.data.failedMessage,t.isErrorFlag=!0,t.$message.error("导入失败"),t.$refs.upload1.clearFiles())})).catch((function(){t.btnLoading=!1}))}else t.$message.error("请上传文件")}))},getListData:function(){var t=this;this.dataListLoading=!0,this.$http.get("/datamanage/cityKPIAssessment/info",{params:{yearMon:this.dataForm.month}}).then((function(e){if(0!==e.data.code)return t.dataList=[],t.dataListLoading=!1,t.$message.error(e.data.msg);var a=e.data.data;t.dataList=a,t.dataListLoading=!1}))}}}),r=o,s=(a("3d38"),a("2877")),l=Object(s["a"])(r,n,i,!1,null,"7eee916e",null);e["default"]=l.exports},a377:function(t,e,a){},d7b1:function(t,e,a){"use strict";a("8e6e"),a("ac6a"),a("456d");var n=a("ade3"),i=a("4328"),o=a.n(i),r=a("dea3");function s(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?s(Object(a),!0).forEach((function(e){Object(n["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}e["a"]={data:function(){return Object(n["a"])({mixinViewModuleOptions:{exportExlUrl:""},dataList:[],dataListLoading:!1,page:1,limit:10,total:0,scrollTops:0,dataListSelections:[],uploadLoading:!1,uploadVisible:!1,title:"",url:"",downLoadUrl:""},"dataListSelections",[])},activated:function(){window.addEventListener("scroll",this.handleScroll,!0),this.listenerFunction()},deactivated:function(){window.removeEventListener("scroll",this.handleScroll,!0)},methods:{searchData:function(){this.dataListSelections.length>0&&this.$refs["tables"].clearSelection(),this.page=1,this.getListData()},pageSizeChangeHandle:function(t){this.page=1,this.limit=t,this.getListData()},pageCurrentChangeHandle:function(t){this.page=t,this.getListData()},getRowsKey:function(t){return t.id},dataListSelectionChangeHandle:function(t){this.dataListSelections=t},listenerFunction:function(){var t=this;this.$nextTick((function(){document.documentElement.scrollTop=t.scrollTops}))},getScrollPosition:function(){var t=document.documentElement.scrollTop;this.scrollTops=t},handleScroll:function(t){this.scrollTops=document.documentElement.scrollTop},exportExl:function(){var t=this,e=[];this.dataListSelections.length>0&&(e=this.dataListSelections.map((function(t){return t.id}))),this.$confirm("根据检索条件，共计将导出".concat(e.length>0?e.length:this.total,"条数据, 是否继续?"),"批量导出",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",callback:function(){},beforeClose:function(a,n,i){if("confirm"===a){n.confirmButtonLoading=!0;var s=o.a.stringify(l(l({token:t.$getUserToken("token")},t.dataForm),{},{ids:e.join()}));t.$http({method:"get",withCredentials:!1,timeout:36e4,responseType:"blob",url:"".concat(t.mixinViewModuleOptions.exportExlUrl,"?").concat(s)}).then((function(e){Object(r["a"])(e.data,t.$route.meta.title)})),n.confirmButtonLoading=!1,t.$refs["tables"].clearSelection(),i()}else i()}}).finally((function(){ctx.confirmButtonLoading=!1})).catch((function(){ctx.confirmButtonLoading=!1}))},del:function(t){var e=this,a=[];a.push(t),this.$confirm("此操作将删除该上报记录，请确认操作！","删除",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",callback:function(){},beforeClose:function(t,n,i){"confirm"===t?e.$http.post("/dataprocess/catAssist/delete",a).then((function(t){if(0!==t.data.code)return i(),n.confirmButtonLoading=!1,e.$message.error(t.data.msg);n.confirmButtonLoading=!1,i(),e.getListData(),e.$message.success("删除成功")})):i()}}).finally((function(){ctx.confirmButtonLoading=!1})).catch((function(){ctx.confirmButtonLoading=!1})),this.page>1&&(this.total-1)%this.limit===0&&(this.page-=1)}}}}}]);