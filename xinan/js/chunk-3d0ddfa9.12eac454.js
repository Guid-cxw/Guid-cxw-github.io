(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3d0ddfa9","chunk-2d0bac31","chunk-2d0ba966","chunk-2d2176f7"],{"389d":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t._self._c;return e("el-dialog",{attrs:{visible:t.visible,title:t.$t("mail.config"),"close-on-click-modal":!1,"close-on-press-escape":!1},on:{"update:visible":function(e){t.visible=e}}},[e("el-form",{ref:"dataForm",attrs:{model:t.dataForm,rules:t.dataRule,"label-width":"120px"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.dataFormSubmitHandle()}}},[e("el-form-item",{attrs:{prop:"smtp",label:t.$t("mail.config")}},[e("el-input",{attrs:{placeholder:t.$t("mail.config")},model:{value:t.dataForm.smtp,callback:function(e){t.$set(t.dataForm,"smtp",e)},expression:"dataForm.smtp"}})],1),e("el-form-item",{attrs:{prop:"port",label:t.$t("mail.port")}},[e("el-input",{attrs:{placeholder:t.$t("mail.port")},model:{value:t.dataForm.port,callback:function(e){t.$set(t.dataForm,"port",e)},expression:"dataForm.port"}})],1),e("el-form-item",{attrs:{prop:"username",label:t.$t("mail.username")}},[e("el-input",{attrs:{placeholder:t.$t("mail.username")},model:{value:t.dataForm.username,callback:function(e){t.$set(t.dataForm,"username",e)},expression:"dataForm.username"}})],1),e("el-form-item",{attrs:{prop:"password",label:t.$t("mail.password")}},[e("el-input",{attrs:{placeholder:t.$t("mail.password")},model:{value:t.dataForm.password,callback:function(e){t.$set(t.dataForm,"password",e)},expression:"dataForm.password"}})],1)],1),e("template",{slot:"footer"},[e("el-button",{on:{click:function(e){t.visible=!1}}},[t._v(t._s(t.$t("cancel")))]),e("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.dataFormSubmitHandle()}}},[t._v(t._s(t.$t("confirm")))])],1)],2)},r=[],n=a("b047"),l=a.n(n),o={data:function(){return{visible:!1,dataForm:{smtp:"",port:"",username:"",password:""}}},computed:{dataRule:function(){return{smtp:[{required:!0,message:this.$t("validate.required"),trigger:"blur"}],port:[{required:!0,message:this.$t("validate.required"),trigger:"blur"}],username:[{required:!0,message:this.$t("validate.required"),trigger:"blur"}],password:[{required:!0,message:this.$t("validate.required"),trigger:"blur"}]}}},methods:{init:function(){var t=this;this.visible=!0,this.$nextTick((function(){t.$refs["dataForm"].resetFields(),t.getInfo()}))},getInfo:function(){var t=this;this.$http.get("/system/sys/mailtemplate/config").then((function(e){var a=e.data;if(0!==a.code)return t.$message.error(a.msg);t.dataForm=a.data})).catch((function(){}))},dataFormSubmitHandle:l()((function(){var t=this;this.$refs["dataForm"].validate((function(e){if(!e)return!1;t.$http.post("/system/sys/mailtemplate/saveConfig",t.dataForm).then((function(e){var a=e.data;if(0!==a.code)return t.$message.error(a.msg);t.$message({message:t.$t("prompt.success"),type:"success",duration:500,onClose:function(){t.visible=!1,t.$emit("refreshDataList")}})})).catch((function(){}))}))}),1e3,{leading:!0,trailing:!1})}},s=o,d=a("2877"),u=Object(d["a"])(s,i,r,!1,null,null,null);e["default"]=u.exports},"391f":function(t,e,a){"use strict";a.r(e);a("7f7f");var i=function(){var t=this,e=t._self._c;return e("el-dialog",{attrs:{visible:t.visible,title:t.dataForm.id?t.$t("update"):t.$t("add"),"close-on-click-modal":!1,"close-on-press-escape":!1},on:{"update:visible":function(e){t.visible=e}}},[e("el-form",{ref:"dataForm",attrs:{model:t.dataForm,rules:t.dataRule,"label-width":"120px"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.dataFormSubmitHandle()}}},[e("el-form-item",{attrs:{prop:"name",label:t.$t("mail.name")}},[e("el-input",{attrs:{placeholder:t.$t("mail.name")},model:{value:t.dataForm.name,callback:function(e){t.$set(t.dataForm,"name",e)},expression:"dataForm.name"}})],1),e("el-form-item",{attrs:{prop:"subject",label:t.$t("mail.subject")}},[e("el-input",{attrs:{placeholder:t.$t("mail.subject")},model:{value:t.dataForm.subject,callback:function(e){t.$set(t.dataForm,"subject",e)},expression:"dataForm.subject"}})],1),e("el-form-item",{attrs:{prop:"content",label:t.$t("mail.content")}},[e("div",{attrs:{id:"J_quillEditor"}}),e("el-upload",{staticStyle:{display:"none"},attrs:{action:t.uploadUrl,"show-file-list":!1,"before-upload":t.uploadBeforeUploadHandle,"on-success":t.uploadSuccessHandle}},[e("el-button",{ref:"uploadBtn",attrs:{type:"primary",size:"small"}},[t._v(t._s(t.$t("upload.button")))])],1)],1)],1),e("template",{slot:"footer"},[e("el-button",{on:{click:function(e){t.visible=!1}}},[t._v(t._s(t.$t("cancel")))]),e("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.dataFormSubmitHandle()}}},[t._v(t._s(t.$t("confirm")))])],1)],2)},r=[],n=(a("a78e"),a("b047")),l=a.n(n),o=(a("8096"),a("9339")),s=a.n(o),d={data:function(){return{visible:!1,quillEditor:null,quillEditorToolbarOptions:[["bold","italic","underline","strike"],["blockquote","code-block","image"],[{header:1},{header:2}],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{indent:"-1"},{indent:"+1"}],[{direction:"rtl"}],[{size:["small",!1,"large","huge"]}],[{header:[1,2,3,4,5,6,!1]}],[{color:[]},{background:[]}],[{font:[]}],[{align:[]}],["clean"]],uploadUrl:"",dataForm:{id:"",name:"",subject:"",content:""}}},computed:{dataRule:function(){var t=this,e=function(e,a,i){if(t.quillEditor.getLength()<=1)return i(new Error(t.$t("validate.required")));i()};return{name:[{required:!0,message:this.$t("validate.required"),trigger:"blur"}],subject:[{required:!0,message:this.$t("validate.required"),trigger:"blur"}],content:[{required:!0,message:this.$t("validate.required"),trigger:"blur"},{validator:e,trigger:"blur"}]}}},methods:{init:function(){var t=this;this.visible=!0,this.$nextTick((function(){t.quillEditor?t.quillEditor.deleteText(0,t.quillEditor.getLength()):t.quillEditorHandle(),t.$refs["dataForm"].resetFields(),t.dataForm.id&&t.getInfo()}))},quillEditorHandle:function(){var t=this;this.quillEditor=new s.a("#J_quillEditor",{modules:{toolbar:this.quillEditorToolbarOptions},theme:"snow"}),this.uploadUrl="".concat(window.SITE_CONFIG["apiURL"],"/system/sys/oss/upload?token=").concat(this.$getUserToken("token")),this.quillEditor.getModule("toolbar").addHandler("image",(function(){t.$refs.uploadBtn.$el.click()})),this.quillEditor.on("text-change",(function(){t.dataForm.content=t.quillEditor.root.innerHTML}))},uploadBeforeUploadHandle:function(t){if("image/jpg"!==t.type&&"image/jpeg"!==t.type&&"image/png"!==t.type&&"image/gif"!==t.type)return this.$message.error(this.$t("upload.tip",{format:"jpg、png、gif"})),!1},uploadSuccessHandle:function(t,e,a){if(0!==t.code)return this.$message.error(t.msg);this.quillEditor.insertEmbed(this.quillEditor.getSelection().index,"image",t.data.src)},getInfo:function(){var t=this;this.$http.get("/system/sys/mailtemplate/".concat(this.dataForm.id)).then((function(e){var a=e.data;if(0!==a.code)return t.$message.error(a.msg);t.dataForm=a.data,t.quillEditor.root.innerHTML=t.dataForm.content})).catch((function(){}))},dataFormSubmitHandle:l()((function(){var t=this;this.$refs["dataForm"].validate((function(e){if(!e)return!1;t.$http[t.dataForm.id?"put":"post"]("/system/sys/mailtemplate",t.dataForm,{headers:{"content-type":"application/x-www-form-urlencoded"}}).then((function(e){var a=e.data;if(0!==a.code)return t.$message.error(a.msg);t.$message({message:t.$t("prompt.success"),type:"success",duration:500,onClose:function(){t.visible=!1,t.$emit("refreshDataList")}})})).catch((function(){}))}))}),1e3,{leading:!0,trailing:!1})}},u=d,c=a("2877"),m=Object(c["a"])(u,i,r,!1,null,null,null);e["default"]=m.exports},"7a79":function(t,e,a){"use strict";a.r(e);a("7f7f");var i=function(){var t=this,e=t._self._c;return e("el-card",{staticClass:"aui-card--fill",attrs:{shadow:"never"}},[e("div",{staticClass:"mod-message__mail-template"},[e("el-form",{attrs:{inline:!0,model:t.dataForm},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.getDataList()}}},[e("el-form-item",[e("el-input",{attrs:{placeholder:t.$t("mail.name"),clearable:""},model:{value:t.dataForm.name,callback:function(e){t.$set(t.dataForm,"name",e)},expression:"dataForm.name"}})],1),e("el-form-item",[e("el-button",{on:{click:function(e){return t.getDataList()}}},[t._v(t._s(t.$t("query")))])],1),e("el-form-item",[e("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.addOrUpdateHandle()}}},[t._v(t._s(t.$t("add")))])],1),e("el-form-item",[e("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.configHandle()}}},[t._v(t._s(t.$t("mail.config")))])],1),e("el-form-item",[e("el-button",{attrs:{type:"danger"},on:{click:function(e){return t.deleteHandle()}}},[t._v(t._s(t.$t("deleteBatch")))])],1)],1),e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.dataListLoading,expression:"dataListLoading"}],staticStyle:{width:"100%"},attrs:{data:t.dataList,border:""},on:{"selection-change":t.dataListSelectionChangeHandle,"sort-change":t.dataListSortChangeHandle}},[e("el-table-column",{attrs:{type:"selection","header-align":"center",align:"center",width:"50"}}),e("el-table-column",{attrs:{prop:"name",label:t.$t("mail.name"),"header-align":"center",align:"center"}}),e("el-table-column",{attrs:{prop:"subject",label:t.$t("mail.subject"),"header-align":"center",align:"center"}}),e("el-table-column",{attrs:{prop:"createDate",label:t.$t("mail.createDate"),sortable:"custom","header-align":"center",align:"center",width:"180"}}),e("el-table-column",{attrs:{label:t.$t("handle"),fixed:"right","header-align":"center",align:"center",width:"150"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-button",{attrs:{type:"text",size:"small"},on:{click:function(e){return t.addOrUpdateHandle(a.row.id)}}},[t._v("\n                        "+t._s(t.$t("update"))+"\n                    ")]),e("el-button",{attrs:{type:"text",size:"small"},on:{click:function(e){return t.sendHandle(a.row.id)}}},[t._v("\n                        "+t._s(t.$t("mail.send"))+"\n                    ")]),e("el-button",{attrs:{type:"text",size:"small"},on:{click:function(e){return t.deleteHandle(a.row.id)}}},[t._v("\n                        "+t._s(t.$t("delete"))+"\n                    ")])]}}])})],1),e("el-pagination",{attrs:{"current-page":t.page,"page-sizes":[10,20,50,100],"page-size":t.limit,total:t.total,layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":t.pageSizeChangeHandle,"current-change":t.pageCurrentChangeHandle}}),t.addOrUpdateVisible?e("add-or-update",{ref:"addOrUpdate",on:{refreshDataList:t.getDataList}}):t._e(),t.configVisible?e("config",{ref:"config"}):t._e(),t.sendVisible?e("send",{ref:"send",on:{refreshDataList:t.getDataList}}):t._e()],1)])},r=[],n=a("e1a5"),l=a("391f"),o=a("389d"),s=a("c75b"),d={mixins:[n["a"]],data:function(){return{mixinViewModuleOptions:{getDataListURL:"/system/sys/mailtemplate/page",getDataListIsPage:!0,deleteURL:"/system/sys/mailtemplate",deleteIsBatch:!0},dataForm:{name:""},configVisible:!1,sendVisible:!1}},components:{AddOrUpdate:l["default"],Config:o["default"],Send:s["default"]},methods:{configHandle:function(){var t=this;this.configVisible=!0,this.$nextTick((function(){t.$refs.config.init()}))},sendHandle:function(t){var e=this;this.sendVisible=!0,this.$nextTick((function(){e.$refs.send.dataForm.id=t,e.$refs.send.init()}))}}},u=d,c=a("2877"),m=Object(c["a"])(u,i,r,!1,null,null,null);e["default"]=m.exports},c75b:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t._self._c;return e("el-dialog",{attrs:{visible:t.visible,title:t.$t("mail.send"),"close-on-click-modal":!1,"close-on-press-escape":!1},on:{"update:visible":function(e){t.visible=e}}},[e("el-form",{ref:"dataForm",attrs:{model:t.dataForm,rules:t.dataRule,"label-width":"120px"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.dataFormSubmitHandle()}}},[e("el-form-item",{attrs:{prop:"mailTo",label:t.$t("mail.mailTo")}},[e("el-input",{attrs:{placeholder:t.$t("mail.mailTo")},model:{value:t.dataForm.mailTo,callback:function(e){t.$set(t.dataForm,"mailTo",e)},expression:"dataForm.mailTo"}})],1),e("el-form-item",{attrs:{prop:"mailCc",label:t.$t("mail.mailCc")}},[e("el-input",{attrs:{placeholder:t.$t("mail.mailCc")},model:{value:t.dataForm.mailCc,callback:function(e){t.$set(t.dataForm,"mailCc",e)},expression:"dataForm.mailCc"}})],1),e("el-form-item",{attrs:{prop:"params",label:t.$t("mail.params")}},[e("el-input",{attrs:{placeholder:t.$t("mail.paramsTips")},model:{value:t.dataForm.params,callback:function(e){t.$set(t.dataForm,"params",e)},expression:"dataForm.params"}})],1)],1),e("template",{slot:"footer"},[e("el-button",{on:{click:function(e){t.visible=!1}}},[t._v(t._s(t.$t("cancel")))]),e("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.dataFormSubmitHandle()}}},[t._v(t._s(t.$t("confirm")))])],1)],2)},r=[],n=a("b047"),l=a.n(n),o=a("61f7"),s={data:function(){return{visible:!1,dataForm:{id:"",mailTo:"",mailCc:"",params:""}}},computed:{dataRule:function(){var t=this,e=function(e,a,i){if(!Object(o["a"])(a))return i(new Error(t.$t("validate.format",{attr:t.$t("user.email")})));i()};return{mailTo:[{required:!0,message:this.$t("validate.required"),trigger:"blur"},{validator:e,trigger:"blur"}]}}},methods:{init:function(){var t=this;this.visible=!0,this.$nextTick((function(){t.$refs["dataForm"].resetFields()}))},dataFormSubmitHandle:l()((function(){var t=this;this.$refs["dataForm"].validate((function(e){if(!e)return!1;t.$http.post("/system/sys/mailtemplate/send",t.dataForm,{headers:{"content-type":"application/x-www-form-urlencoded"}}).then((function(e){var a=e.data;if(0!==a.code)return t.$message.error(a.msg);t.$message({message:t.$t("prompt.success"),type:"success",duration:500,onClose:function(){t.visible=!1,t.$emit("refreshDataList")}})})).catch((function(){}))}))}),1e3,{leading:!0,trailing:!1})}},d=s,u=a("2877"),c=Object(u["a"])(d,i,r,!1,null,null,null);e["default"]=c.exports}}]);