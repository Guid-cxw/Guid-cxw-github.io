(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3c855ce8","chunk-2d224922"],{2398:function(e,t,a){},"80c9":function(e,t,a){"use strict";a("2398")},a865:function(e,t,a){"use strict";a.d(t,"j",(function(){return o})),a.d(t,"g",(function(){return i})),a.d(t,"h",(function(){return n})),a.d(t,"i",(function(){return l})),a.d(t,"a",(function(){return c})),a.d(t,"k",(function(){return s})),a.d(t,"d",(function(){return d})),a.d(t,"e",(function(){return u})),a.d(t,"b",(function(){return p})),a.d(t,"f",(function(){return m})),a.d(t,"c",(function(){return b}));var r=a("b775"),o=function(e){return Object(r["a"])({method:"GET",url:"/system/sys/region/list",params:e})},i=function(e){return Object(r["a"])({method:"GET",url:"/dataprocess/catAssist/page",params:e})},n=function(e){return Object(r["a"])({method:"get",url:"/dataprocess/catAssist/".concat(e)})},l=function(e){return Object(r["a"])({method:"get",url:"/dataprocess/catAssist/downLoadFile?".concat(e),withCredentials:!1,timeout:36e4,responseType:"blob"})},c=function(e){return Object(r["a"])({method:"POST",url:"/dataprocess/catAssist/delete",data:e})},s=function(e,t){return Object(r["a"])({method:"POST",url:e?"/dataprocess/catAssist/update":"/dataprocess/catAssist",data:t})};function d(e){return Object(r["a"])({method:"get",url:"/datamanage/dataStatOverview/exportReportDataStat",params:e,withCredentials:!1,timeout:36e4,responseType:"blob"})}function u(e){return Object(r["a"])({method:"get",url:"/datamanage/dataStatOverview/exportIssueDataStat",params:e,withCredentials:!1,timeout:36e4,responseType:"blob"})}function p(e){return Object(r["a"])({method:"get",url:"/datamanage/dataStatOverview/exportReportCmccStat",params:e,withCredentials:!1,timeout:36e4,responseType:"blob"})}function m(e){return Object(r["a"])({method:"get",url:"/datamanage/dataStatOverview/exportCmccStat",params:e,withCredentials:!1,timeout:36e4,responseType:"blob"})}function b(e){return Object(r["a"])({method:"get",url:"/datamanage/dataStatOverview/exportReportGroupDataStat",params:e,withCredentials:!1,timeout:36e4,responseType:"blob"})}},af85:function(e,t,a){"use strict";function r(e){var t={156:"中国",32e4:"江苏省",320100:"南京市",320200:"无锡市",320300:"徐州市",320400:"常州市",320500:"苏州市",320600:"南通市",320700:"连云港市",320800:"淮安市",320900:"盐城市",321e3:"扬州市",321100:"镇江市",321200:"泰州市",321300:"宿迁市"};return t[e]}a.d(t,"a",(function(){return r}))},d62d:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e._self._c;return t("div",{staticClass:"gather-task"},[t("el-dialog",{staticClass:"Dialog",attrs:{visible:e.diaLogClose,title:e.title,"close-on-click-modal":!1,"close-on-press-escape":!1},on:{"update:visible":function(t){e.diaLogClose=t},close:e.closeDialog}},[t("div",{staticClass:"info-desc"},[t("el-form",{ref:"ruleForm",staticClass:"demo-form",attrs:{model:e.dataForm,disabled:e.isFlag,"label-width":"130px"}},[t("el-form-item",{attrs:{label:"问题上报时间",prop:"appealTime"}},[t("el-date-picker",{attrs:{"value-format":"yyyy-MM-dd HH:mm:ss",type:"datetime",placeholder:"选择问题上报时间",clearable:""},model:{value:e.dataForm.appealTime,callback:function(t){e.$set(e.dataForm,"appealTime",t)},expression:"dataForm.appealTime"}})],1),t("el-form-item",{attrs:{label:"反馈来源",prop:"appealSource"}},[t("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择反馈来源",clearable:""},on:{change:e.sourceChange},model:{value:e.dataForm.appealSource,callback:function(t){e.$set(e.dataForm,"appealSource",t)},expression:"dataForm.appealSource"}},e._l(e.Sourcefeedback,(function(e){return t("el-option",{key:e.dictValue,attrs:{label:e.dictLabel,value:e.dictValue,clearable:""}})})),1)],1),t("el-form-item",{attrs:{label:"反馈来源拓展",prop:"appealSourceExtend"}},[t("el-input",{attrs:{placeholder:"请输入反馈来源拓展",clearable:""},model:{value:e.dataForm.appealSourceExtend,callback:function(t){e.$set(e.dataForm,"appealSourceExtend",t)},expression:"dataForm.appealSourceExtend"}}),t("el-alert",{directives:[{name:"show",rawName:"v-show",value:e.hintShow,expression:"hintShow"}],attrs:{title:"当反馈来源为其他时，填写具体问题来源",type:"warning"}})],1),t("el-form-item",{attrs:{label:"白名单ID",prop:"whiteId"}},[t("el-input",{attrs:{oninput:"value=value.replace(/[^\\d]/g,'')",placeholder:"请输入白名单ID",clearable:""},model:{value:e.dataForm.whiteId,callback:function(t){e.$set(e.dataForm,"whiteId",t)},expression:"dataForm.whiteId"}})],1),t("el-form-item",{attrs:{label:"白名单类型",prop:"type"}},[t("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择白名单类型",clearable:""},on:{change:e.typeChange},model:{value:e.dataForm.type,callback:function(t){e.$set(e.dataForm,"type",t)},expression:"dataForm.type"}},e._l(e.WhiteListType,(function(e){return t("el-option",{key:e.dictValue,attrs:{label:e.dictLabel,value:e.dictValue}})})),1)],1),t("el-form-item",{attrs:{label:"白名单资源类型",prop:"whiteType"}},[t("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择白名单类型",clearable:""},on:{focus:e.selFocus},model:{value:e.dataForm.whiteType,callback:function(t){e.$set(e.dataForm,"whiteType",t)},expression:"dataForm.whiteType"}},e._l(e.resourceList,(function(e){return t("el-option",{key:e.dictValue,attrs:{label:e.dictLabel,value:e.dictValue}})})),1)],1),t("el-form-item",{attrs:{label:"关键信息",prop:"whiteContent"}},[t("el-input",{attrs:{placeholder:"请输入关键信息",clearable:""},model:{value:e.dataForm.whiteContent,callback:function(t){e.$set(e.dataForm,"whiteContent",t)},expression:"dataForm.whiteContent"}})],1),t("el-form-item",{attrs:{label:"受害人号码",prop:"relateNumber"}},[t("el-input",{attrs:{oninput:"value=value.replace(/[^\\d]/g,'')",placeholder:"请输入受害人号码",clearable:""},model:{value:e.dataForm.relateNumber,callback:function(t){e.$set(e.dataForm,"relateNumber",t)},expression:"dataForm.relateNumber"}})],1),t("el-form-item",{attrs:{label:"通联开始时间",prop:"startTime"}},[t("el-date-picker",{attrs:{"value-format":"yyyy-MM-dd HH:mm:ss",type:"datetime",placeholder:"选择通联开始时间",clearable:""},model:{value:e.dataForm.startTime,callback:function(t){e.$set(e.dataForm,"startTime",t)},expression:"dataForm.startTime"}})],1),t("el-form-item",{attrs:{label:"通联结束时间",prop:"endTime"}},[t("el-date-picker",{attrs:{clearable:"","value-format":"yyyy-MM-dd HH:mm:ss",type:"datetime",placeholder:"选择通联开始时间"},model:{value:e.dataForm.endTime,callback:function(t){e.$set(e.dataForm,"endTime",t)},expression:"dataForm.endTime"}})],1),t("el-form-item",{attrs:{label:"关联涉诈类型",prop:"relateNumber"}},[t("el-input",{attrs:{placeholder:"请输入关联涉诈类型",clearable:""},model:{value:e.dataForm.fruadType,callback:function(t){e.$set(e.dataForm,"fruadType",t)},expression:"dataForm.fruadType"}})],1),t("el-form-item",{attrs:{label:"联系人姓名",prop:"questionerName"}},[t("el-input",{attrs:{placeholder:"请输入联系人姓名",clearable:""},model:{value:e.dataForm.questionerName,callback:function(t){e.$set(e.dataForm,"questionerName",t)},expression:"dataForm.questionerName"}})],1),t("el-form-item",{attrs:{label:"联系人电话",prop:"questionerPhone"}},[t("el-input",{attrs:{oninput:"value=value.replace(/[^\\d]/g,'')",placeholder:"请输入联系人电话",clearable:""},model:{value:e.dataForm.questionerPhone,callback:function(t){e.$set(e.dataForm,"questionerPhone",t)},expression:"dataForm.questionerPhone"}})],1),t("el-form-item",{attrs:{label:"问题内容",prop:"content"}},[t("el-input",{attrs:{type:"textarea",placeholder:"请输入问题内容",clearable:""},model:{value:e.dataForm.content,callback:function(t){e.$set(e.dataForm,"content",t)},expression:"dataForm.content"}})],1)],1)],1),e.isFlag?e._e():t("div",{staticClass:"footer-content"},[t("el-button",{on:{click:e.closeDialog}},[e._v("取消")]),t("el-button",{attrs:{type:"primary",loading:e.btnLoading},on:{click:e.winningAdd}},[e._v("确认")])],1)])],1)},o=[],i=(a("8e6e"),a("ac6a"),a("456d"),a("ade3")),n=a("e166");a("ed08"),a("a865"),a("af85"),a("4328");function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){Object(i["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var s={name:"issueDetail",components:{},props:{},data:function(){return{btnLoading:!1,diaLogClose:!1,dataForm:{appealTime:"",appealSource:"",appealSourceExtend:"",whiteId:"",type:"",whiteType:"",whiteContent:"",relateNumber:"",startTime:"",endTime:"",content:"",questionerName:"",questionerPhone:"",fruadType:""},Sourcefeedback:n["Sourcefeedback"],WhiteListType:n["WhiteListType"],resourceList:[],hintShow:!1,isFlag:!1,timer:null,title:"",id:""}},computed:{rules:function(){return{}}},created:function(){},mounted:function(){},methods:{creatItem:function(){this.dataForm=this.$options.data().dataForm,this.title="新增白名单问题",this.diaLogClose=!0},closeDialog:function(){var e=this;this.hintShow=!1,this.diaLogClose=!1,this.timer&&clearTimeout(this.timer),this.timer=setTimeout((function(){e.isFlag=!1,e.title=""}),500)},editShow:function(e){this.diaLogClose=!0,this.id=e,this.winningEdit()},winningAdd:function(){var e=this;this.$refs["ruleForm"].validate((function(t){if(!t)return!1;e.btnLoading=!0,e.$http.post("/datamanage/whiteProblem/save",c({},e.dataForm)).then((function(t){if(e.btnLoading=!1,0!==t.data.code)return e.$message.error(t.data.msg);e.diaLogClose=!1,e.$message.success("新增成功"),e.$emit("getListData")})).catch((function(){e.btnLoading=!1}))}))},winningEdit:function(){var e=this;this.$http.get("/datamanage/whiteProblem/".concat(this.id)).then((function(t){e.btnLoading=!1;var a=t.data.code;0==a?(e.dataForm=e.hookUtils(t.data.data),e.typeChange(t.data.data.type)):e.$message.warning(t.data.msg)}))},selFocus:function(){0==this.resourceList.length&&this.$message.warning("请先选择白名单类型")},typeChange:function(e){1==e?this.resourceList=n["numberList"]:2==e?this.resourceList=n["ipList"]:(this.resourceList=[],this.dataForm.whiteType="")},sourceChange:function(e){this.hintShow=99==e},hookUtils:function(e){var t=JSON.parse(JSON.stringify(e));for(var a in e)"number"==typeof e[a]?t[a]=String(e[a]):t[a]=e[a];return t}}},d=s,u=(a("80c9"),a("2877")),p=Object(u["a"])(d,r,o,!1,null,"245e6a4e",null);t["default"]=p.exports},e166:function(e,t,a){"use strict";a.r(t),a.d(t,"getLabel",(function(){return l})),a.d(t,"Sourcefeedback",(function(){return r})),a.d(t,"WhiteListType",(function(){return o})),a.d(t,"ipList",(function(){return n})),a.d(t,"numberList",(function(){return i}));a("7514");var r=[{dictLabel:"公安通报关联",dictValue:"1"},{dictLabel:"用户举报关联",dictValue:"2"},{dictLabel:"涉诈线索发现",dictValue:"3"},{dictLabel:"其他",dictValue:"99"}],o=[{dictLabel:"码号",dictValue:"1"},{dictLabel:"域名/网址/IP",dictValue:"2"}],i=[{dictLabel:"手机号",dictValue:"1"},{dictLabel:"固话",dictValue:"2"},{dictLabel:"短信端口号",dictValue:"3"}],n=[{dictLabel:"域名",dictValue:"1"},{dictLabel:"网址",dictValue:"2"},{dictLabel:"IP地址",dictValue:"3"}];function l(e,t){var a=e.find((function(e){return e.dictValue===t+""}));return a?a.dictLabel:t}}}]);