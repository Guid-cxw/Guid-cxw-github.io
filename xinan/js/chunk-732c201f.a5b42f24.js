(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-732c201f"],{9615:function(e,t,i){"use strict";i("9d9d")},"9d9d":function(e,t,i){},aa10:function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e._self._c;return t("div",[t("el-dialog",{attrs:{visible:e.visible,width:"700px",title:e.title,"close-on-click-modal":!1,"close-on-press-escape":!1,"append-to-body":""},on:{"update:visible":function(t){e.visible=t},close:e.closeHandle}},[t("el-divider",{attrs:{"content-position":"left"}},[e._v("通信惩戒下发名单表")]),t("el-row",{staticClass:"row-flex"},[t("el-col",[t("el-upload",{ref:"upload1",staticClass:"upload-demo",attrs:{action:"#",headers:{responseType:"arraybuffer"},"file-list":e.fileList,"auto-upload":!1,accept:".XLS,.xls,.XLSX,.xlsx","on-change":e.onChange,"on-remove":e.emoveFileHandleXF}},[t("el-button",{attrs:{slot:"trigger",size:"small",type:"primary"},slot:"trigger"},[e._v("上传")]),t("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("\n                        只支持XLS、xls、XLSX、xlsx格式文件,文件大小不超过20M\n                    ")])],1)],1),t("el-col",[t("a",{staticClass:"download_box",attrs:{href:"javascript:;"},on:{click:function(t){return e.downLoadTemplate("1")}}},[e._v("下载Excel模板")])])],1),t("el-divider",{attrs:{"content-position":"left"}},[e._v("通信惩戒处置反馈表")]),t("el-row",{staticClass:"row-flex"},[t("el-col",[t("el-upload",{ref:"upload2",staticClass:"upload-demo",attrs:{action:"#",headers:{responseType:"arraybuffer"},"file-list":e.appendixFile,"auto-upload":!1,accept:".XLS,.xls,.XLSX,.xlsx","on-change":e.onChangeAccessory,"on-remove":e.emoveFileHandleCZ}},[t("el-button",{attrs:{slot:"trigger",size:"small",type:"primary"},slot:"trigger"},[e._v("上传")]),t("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("\n                        只支持XLS、xls、XLSX、xlsx格式文件,文件大小不超过20M\n                    ")])],1)],1),t("el-col",[t("a",{staticClass:"download_box",attrs:{href:"javascript:;"},on:{click:function(t){return e.downLoadTemplate("2")}}},[e._v("下载Excel模板")])])],1),e.isErrorFlag?t("div",{staticClass:"error-hint"},e._l(e.errorHintList,(function(i,s){return t("p",{key:s},[e._v(e._s(i))])})),0):e._e(),t("template",{slot:"footer"},[t("el-button",{attrs:{type:"primary",loading:e.btnLoading},on:{click:function(t){return e.dataFormSubmitHandle()}}},[e._v("保存")]),t("el-button",{on:{click:function(t){e.visible=!1}}},[e._v(e._s(e.$t("cancel")))])],1)],2)],1)},a=[],l=(i("7f7f"),i("a481"),i("b047")),n=i.n(l),r={props:{title:{type:String,default:function(){return""}},downloadUrl:{type:String,default:function(){return""}}},data:function(){return{fileList:[],appendixFile:[],visible:!1,isErrorFlag:!1,errorHintList:[],token:this.$getUserToken("token"),btnLoading:!1}},methods:{init:function(){this.fileList=[],this.appendixFile=[],this.visible=!0,this.isErrorFlag=!1,this.errorHintList=[]},closeHandle:function(){(this.fileList.length>0||this.appendixFile.length>0)&&(this.$refs.upload1.clearFiles(),this.$refs.upload2.clearFiles()),this.fileList=[],this.appendixFile=[],this.visible=!1,this.isErrorFlag=!1,this.errorHintList=[]},onChange:function(e,t){this.errorHint="",this.isErrorFlag=!1;var i=e.size/1024/1024<21;if(!i)return this.$message.warning("文件大小不能超过20M"),void(this.fileList=[]);var s=e.name.replace(/.+\./,""),a=["XLS","xls","XLSX","xlsx"];if(-1===a.indexOf(s.toLowerCase()))return this.$message.warning("请上传格式正确的文件"),void(this.fileList=[]);t.length>0&&(this.fileList=[t[t.length-1]])},onChangeAccessory:function(e,t){this.errorHint="",this.isErrorFlag=!1;var i=e.size/1024/1024<21;if(!i)return this.$message.warning("文件大小不能超过20M"),void(this.appendixFile=[]);var s=e.name.replace(/.+\./,""),a=["XLS","xls","XLSX","xlsx"];if(-1===a.indexOf(s.toLowerCase()))return this.$message.warning("请上传格式正确的文件"),void(this.appendixFile=[]);t.length>0&&(this.appendixFile=[t[t.length-1]])},emoveFileHandleXF:function(e){this.fileList=[],this.errorHint="",this.isErrorFlag=!1},emoveFileHandleCZ:function(e){this.appendixFile=[],this.errorHint="",this.isErrorFlag=!1},successHandle:function(e){null==e.data.failedMessage||0==e.data.failedMessage.length?(this.$message.success("导入成功"),this.$emit("on-upload-success"),this.isErrorFlag=!1):(this.errorHintList=e.data.failedMessage,this.isErrorFlag=!0,null==e.data.successMessage?this.$message.error("导入失败"):this.$message.success(e.data.successMessage),this.$emit("refreshDataList"),this.$refs.upload.clearFiles())},downLoadTemplate:function(e){this.$emit("downLoadTemplate",e)},dataFormSubmitHandle:n()((function(){var e=this;if(0!=this.fileList.length&&0!=this.appendixFile.length){this.btnLoading=!0;var t=new FormData;t.append("file",this.fileList[0].raw),t.append("files",this.appendixFile[0].raw),this.$http["post"]("/datamanage/disciplinaryIssueList/importExcel",t).then((function(t){var i=t.data;if(0!==i.code)return e.btnLoading=!1,e.isErrorFlag=!0,e.errorHint=i.msg,e.fileList=[],e.appendixFile=[],e.$message.error(i.msg);e.btnLoading=!1,e.$message({message:e.$t("prompt.success"),type:"success",duration:500,onClose:function(){e.visible=!1,e.closeHandle(),e.$emit("refreshDataList")}})})).catch((function(){e.btnLoading=!1}))}else this.$message.error("请上传文件")}),1e3,{leading:!0,trailing:!1})}},o=r,d=(i("9615"),i("2877")),c=Object(d["a"])(o,s,a,!1,null,"1ae3f653",null);t["default"]=c.exports}}]);