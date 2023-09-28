(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3ce9d46e","chunk-3c855ce8","chunk-2d21f098","chunk-2d224922"],{2398:function(e,t,a){},3575:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e._self._c;return t("div",[t("el-card",{staticClass:"aui-card--fill",attrs:{shadow:"never"}},[t("el-form",{ref:"studyForm",attrs:{inline:!0,model:e.dataForm},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.searchData()}}},[t("el-form-item",{attrs:{label:"反馈来源"}},[t("el-select",{attrs:{placeholder:"反馈来源",clearable:""},model:{value:e.dataForm.appealSource,callback:function(t){e.$set(e.dataForm,"appealSource",t)},expression:"dataForm.appealSource"}},e._l(e.Sourcefeedback,(function(e){return t("el-option",{key:e.dictLabel,attrs:{label:e.dictLabel,value:e.dictValue}})})),1)],1),t("el-form-item",{attrs:{label:"白名单ID"}},[t("el-input",{attrs:{placeholder:"请输入白名单ID",clearable:""},model:{value:e.dataForm.whiteId,callback:function(t){e.$set(e.dataForm,"whiteId",t)},expression:"dataForm.whiteId"}})],1),t("el-form-item",{attrs:{label:"白名单类型"}},[t("el-select",{attrs:{placeholder:"请选择白名单类型",clearable:""},on:{change:e.typeChange},model:{value:e.dataForm.type,callback:function(t){e.$set(e.dataForm,"type",t)},expression:"dataForm.type"}},e._l(e.WhiteListType,(function(e){return t("el-option",{key:e.dictValue,attrs:{label:e.dictLabel,value:e.dictValue}})})),1)],1),t("el-form-item",{attrs:{label:"白名单资源类型"}},[t("el-select",{attrs:{placeholder:"请选择白名单资源类型",clearable:""},on:{focus:e.selFocus},model:{value:e.dataForm.whiteType,callback:function(t){e.$set(e.dataForm,"whiteType",t)},expression:"dataForm.whiteType"}},e._l(e.resourceList,(function(e){return t("el-option",{key:e.dictValue,attrs:{label:e.dictLabel,value:e.dictValue}})})),1)],1),t("el-form-item",{attrs:{label:"关键信息"}},[t("el-input",{attrs:{placeholder:"请输入关键信息",clearable:""},model:{value:e.dataForm.whiteContent,callback:function(t){e.$set(e.dataForm,"whiteContent",t)},expression:"dataForm.whiteContent"}})],1),t("el-form-item",{attrs:{label:"受害人号码"}},[t("el-input",{attrs:{placeholder:"请输入受害人号码",clearable:""},model:{value:e.dataForm.relateNumber,callback:function(t){e.$set(e.dataForm,"relateNumber",t)},expression:"dataForm.relateNumber"}})],1),t("el-form-item",{attrs:{label:"上报状态"}},[t("el-select",{attrs:{placeholder:"请选择上报状态",clearable:""},model:{value:e.dataForm.reportStatus,callback:function(t){e.$set(e.dataForm,"reportStatus",t)},expression:"dataForm.reportStatus"}},e._l(e.reportTypeList,(function(e){return t("el-option",{key:e.dictValue,attrs:{label:e.dictLabel,value:e.dictValue}})})),1)],1),t("el-form-item",{attrs:{label:"上报时间"}},[t("el-date-picker",{attrs:{"value-format":"yyyy-MM-dd HH:mm:ss",type:"datetimerange","start-placeholder":"开始时间","end-placeholder":"结束时间",clearable:""},model:{value:e.daterange,callback:function(t){e.daterange=t},expression:"daterange"}})],1),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.searchData()}}},[e._v("查询")]),t("el-button",{on:{click:function(t){return e.reset()}}},[e._v("重置")]),t("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.createDialog()}}},[e._v("新增上报")]),t("el-button",{attrs:{type:"success"},on:{click:e.exportExl}},[e._v("导出")])],1)],1),t("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.dataListLoading,expression:"dataListLoading"}],ref:"tables",staticClass:"tab",staticStyle:{width:"100%"},attrs:{data:e.dataList,border:"","header-cell-style":{background:"rgba(194, 210, 255, 0.3)",color:"#040415"},"row-key":e.getRowsKey},on:{"selection-change":e.dataListSelectionChangeHandle}},[t("el-table-column",{attrs:{type:"selection",width:"40"}}),t("el-table-column",{attrs:{prop:"appealSource",align:"center",label:"反馈来源"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n                    "+e._s(null!=t.row.appealSource?e.appealSource(t.row.appealSource):"")+"\n                ")]}}])}),t("el-table-column",{attrs:{prop:"whiteId",align:"center",label:"白名单ID"}}),t("el-table-column",{attrs:{prop:"type",label:"白名单类型",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n                    "+e._s(null!=t.row.type?e.type(t.row.type):"")+"\n                ")]}}])}),t("el-table-column",{attrs:{prop:"whiteType",label:"白名单资源类型",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[1==t.row.type?[e._v("\n                        "+e._s(null!=t.row.whiteType?e.number(t.row.whiteType):"")+"\n                    ")]:e._e(),2==t.row.type?[e._v("\n                        "+e._s(null!=t.row.type?e.ip(t.row.whiteType):"")+"\n                    ")]:e._e()]}}])}),t("el-table-column",{attrs:{prop:"whiteContent",label:"关键信息",align:"center"}}),t("el-table-column",{attrs:{prop:"relateNumber",label:"受害人号码",align:"center"}}),t("el-table-column",{attrs:{prop:"reportStatus",label:"上报状态",align:"center"}}),t("el-table-column",{attrs:{prop:"appealTime",label:"上报时间",align:"center"}}),t("el-table-column",{attrs:{prop:"commandId",label:"上报批次号",align:"center"}}),t("el-table-column",{attrs:{label:"操作",align:"center",fixed:"right"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-button",{attrs:{type:"text"},on:{click:function(t){return e.detail(a.row.id)}}},[e._v("详情")])]}}])})],1),t("el-pagination",{attrs:{"current-page":e.page,"page-sizes":[10,20,50,100],"page-size":e.limit,total:e.total,layout:"total, sizes, prev, pager, next, jumper"},on:{"update:currentPage":function(t){e.page=t},"update:current-page":function(t){e.page=t},"size-change":e.pageSizeChangeHandle,"current-change":e.pageCurrentChangeHandle}})],1),t("sonDiog",{ref:"sonDiogRef",on:{getListData:e.getListData}})],1)},n=[],o=(a("8e6e"),a("ac6a"),a("456d"),a("c5f6"),a("ade3")),i=a("e166"),l=a("ed08"),c=a("d7b1"),s=a("d62d");function u(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?u(Object(a),!0).forEach((function(t){Object(o["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var p={mixins:[c["a"]],data:function(){return{mixinViewModuleOptions:{exportExlUrl:"/datamanage/whiteProblem/export"},daterange:[],dataForm:{appealSource:"",whiteId:"",type:"",whiteType:"",whiteContent:"",relateNumber:"",reportStatus:"",startDate:"",endDate:""},Sourcefeedback:i["Sourcefeedback"],WhiteListType:i["WhiteListType"],resourceList:[],reportTypeList:Object(l["b"])("reportStatus")}},components:{sonDiog:s["default"]},computed:{appealSource:function(){return function(e){return Object(i["getLabel"])(i["Sourcefeedback"],e)}},type:function(){return function(e){return Object(i["getLabel"])(i["WhiteListType"],e)}},number:function(){return function(e){return Object(i["getLabel"])(i["numberList"],e)}},ip:function(){return function(e){return Object(i["getLabel"])(i["ipList"],e)}}},watch:{daterange:function(e){this.dataForm.startDate=null!==e?e[0]:"",this.dataForm.endDate=null!==e?e[1]:""}},activated:function(){this.getListData()},methods:{reset:function(){this.dataForm=this.$options.data().dataForm,this.daterange=[],this.getListData(),this.typeChange()},getListData:function(){var e=this;this.dataListLoading=!0,this.$http.get("/datamanage/whiteProblem/page",{params:d({page:this.page,limit:this.limit},this.dataForm)}).then((function(t){if(0!==t.data.code)return e.dataList=[],e.total=0,e.dataListLoading=!1,e.$message.error(t.data.msg);var a=t.data.data;e.total=Number(a.total),e.dataList=a.list,e.dataListLoading=!1}))},createDialog:function(){this.$refs["sonDiogRef"].creatItem()},detail:function(e){this.$refs["sonDiogRef"].editShow(e),this.$refs["sonDiogRef"].isFlag=!0,this.$refs["sonDiogRef"].title="白名单问题详情"},selFocus:function(){0==this.resourceList.length&&this.$message.warning("请先选择白名单类型")},typeChange:function(e){1==e?this.resourceList=i["numberList"]:2==e?this.resourceList=i["ipList"]:(this.resourceList=[],this.dataForm.whiteType="")}}},m=p,f=a("2877"),b=Object(f["a"])(m,r,n,!1,null,"57495a92",null);t["default"]=b.exports},"80c9":function(e,t,a){"use strict";a("2398")},a865:function(e,t,a){"use strict";a.d(t,"j",(function(){return n})),a.d(t,"g",(function(){return o})),a.d(t,"h",(function(){return i})),a.d(t,"i",(function(){return l})),a.d(t,"a",(function(){return c})),a.d(t,"k",(function(){return s})),a.d(t,"d",(function(){return u})),a.d(t,"e",(function(){return d})),a.d(t,"b",(function(){return p})),a.d(t,"f",(function(){return m})),a.d(t,"c",(function(){return f}));var r=a("b775"),n=function(e){return Object(r["a"])({method:"GET",url:"/system/sys/region/list",params:e})},o=function(e){return Object(r["a"])({method:"GET",url:"/dataprocess/catAssist/page",params:e})},i=function(e){return Object(r["a"])({method:"get",url:"/dataprocess/catAssist/".concat(e)})},l=function(e){return Object(r["a"])({method:"get",url:"/dataprocess/catAssist/downLoadFile?".concat(e),withCredentials:!1,timeout:36e4,responseType:"blob"})},c=function(e){return Object(r["a"])({method:"POST",url:"/dataprocess/catAssist/delete",data:e})},s=function(e,t){return Object(r["a"])({method:"POST",url:e?"/dataprocess/catAssist/update":"/dataprocess/catAssist",data:t})};function u(e){return Object(r["a"])({method:"get",url:"/datamanage/dataStatOverview/exportReportDataStat",params:e,withCredentials:!1,timeout:36e4,responseType:"blob"})}function d(e){return Object(r["a"])({method:"get",url:"/datamanage/dataStatOverview/exportIssueDataStat",params:e,withCredentials:!1,timeout:36e4,responseType:"blob"})}function p(e){return Object(r["a"])({method:"get",url:"/datamanage/dataStatOverview/exportReportCmccStat",params:e,withCredentials:!1,timeout:36e4,responseType:"blob"})}function m(e){return Object(r["a"])({method:"get",url:"/datamanage/dataStatOverview/exportCmccStat",params:e,withCredentials:!1,timeout:36e4,responseType:"blob"})}function f(e){return Object(r["a"])({method:"get",url:"/datamanage/dataStatOverview/exportReportGroupDataStat",params:e,withCredentials:!1,timeout:36e4,responseType:"blob"})}},af85:function(e,t,a){"use strict";function r(e){var t={156:"中国",32e4:"江苏省",320100:"南京市",320200:"无锡市",320300:"徐州市",320400:"常州市",320500:"苏州市",320600:"南通市",320700:"连云港市",320800:"淮安市",320900:"盐城市",321e3:"扬州市",321100:"镇江市",321200:"泰州市",321300:"宿迁市"};return t[e]}a.d(t,"a",(function(){return r}))},d62d:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e._self._c;return t("div",{staticClass:"gather-task"},[t("el-dialog",{staticClass:"Dialog",attrs:{visible:e.diaLogClose,title:e.title,"close-on-click-modal":!1,"close-on-press-escape":!1},on:{"update:visible":function(t){e.diaLogClose=t},close:e.closeDialog}},[t("div",{staticClass:"info-desc"},[t("el-form",{ref:"ruleForm",staticClass:"demo-form",attrs:{model:e.dataForm,disabled:e.isFlag,"label-width":"130px"}},[t("el-form-item",{attrs:{label:"问题上报时间",prop:"appealTime"}},[t("el-date-picker",{attrs:{"value-format":"yyyy-MM-dd HH:mm:ss",type:"datetime",placeholder:"选择问题上报时间",clearable:""},model:{value:e.dataForm.appealTime,callback:function(t){e.$set(e.dataForm,"appealTime",t)},expression:"dataForm.appealTime"}})],1),t("el-form-item",{attrs:{label:"反馈来源",prop:"appealSource"}},[t("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择反馈来源",clearable:""},on:{change:e.sourceChange},model:{value:e.dataForm.appealSource,callback:function(t){e.$set(e.dataForm,"appealSource",t)},expression:"dataForm.appealSource"}},e._l(e.Sourcefeedback,(function(e){return t("el-option",{key:e.dictValue,attrs:{label:e.dictLabel,value:e.dictValue,clearable:""}})})),1)],1),t("el-form-item",{attrs:{label:"反馈来源拓展",prop:"appealSourceExtend"}},[t("el-input",{attrs:{placeholder:"请输入反馈来源拓展",clearable:""},model:{value:e.dataForm.appealSourceExtend,callback:function(t){e.$set(e.dataForm,"appealSourceExtend",t)},expression:"dataForm.appealSourceExtend"}}),t("el-alert",{directives:[{name:"show",rawName:"v-show",value:e.hintShow,expression:"hintShow"}],attrs:{title:"当反馈来源为其他时，填写具体问题来源",type:"warning"}})],1),t("el-form-item",{attrs:{label:"白名单ID",prop:"whiteId"}},[t("el-input",{attrs:{oninput:"value=value.replace(/[^\\d]/g,'')",placeholder:"请输入白名单ID",clearable:""},model:{value:e.dataForm.whiteId,callback:function(t){e.$set(e.dataForm,"whiteId",t)},expression:"dataForm.whiteId"}})],1),t("el-form-item",{attrs:{label:"白名单类型",prop:"type"}},[t("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择白名单类型",clearable:""},on:{change:e.typeChange},model:{value:e.dataForm.type,callback:function(t){e.$set(e.dataForm,"type",t)},expression:"dataForm.type"}},e._l(e.WhiteListType,(function(e){return t("el-option",{key:e.dictValue,attrs:{label:e.dictLabel,value:e.dictValue}})})),1)],1),t("el-form-item",{attrs:{label:"白名单资源类型",prop:"whiteType"}},[t("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择白名单类型",clearable:""},on:{focus:e.selFocus},model:{value:e.dataForm.whiteType,callback:function(t){e.$set(e.dataForm,"whiteType",t)},expression:"dataForm.whiteType"}},e._l(e.resourceList,(function(e){return t("el-option",{key:e.dictValue,attrs:{label:e.dictLabel,value:e.dictValue}})})),1)],1),t("el-form-item",{attrs:{label:"关键信息",prop:"whiteContent"}},[t("el-input",{attrs:{placeholder:"请输入关键信息",clearable:""},model:{value:e.dataForm.whiteContent,callback:function(t){e.$set(e.dataForm,"whiteContent",t)},expression:"dataForm.whiteContent"}})],1),t("el-form-item",{attrs:{label:"受害人号码",prop:"relateNumber"}},[t("el-input",{attrs:{oninput:"value=value.replace(/[^\\d]/g,'')",placeholder:"请输入受害人号码",clearable:""},model:{value:e.dataForm.relateNumber,callback:function(t){e.$set(e.dataForm,"relateNumber",t)},expression:"dataForm.relateNumber"}})],1),t("el-form-item",{attrs:{label:"通联开始时间",prop:"startTime"}},[t("el-date-picker",{attrs:{"value-format":"yyyy-MM-dd HH:mm:ss",type:"datetime",placeholder:"选择通联开始时间",clearable:""},model:{value:e.dataForm.startTime,callback:function(t){e.$set(e.dataForm,"startTime",t)},expression:"dataForm.startTime"}})],1),t("el-form-item",{attrs:{label:"通联结束时间",prop:"endTime"}},[t("el-date-picker",{attrs:{clearable:"","value-format":"yyyy-MM-dd HH:mm:ss",type:"datetime",placeholder:"选择通联开始时间"},model:{value:e.dataForm.endTime,callback:function(t){e.$set(e.dataForm,"endTime",t)},expression:"dataForm.endTime"}})],1),t("el-form-item",{attrs:{label:"关联涉诈类型",prop:"relateNumber"}},[t("el-input",{attrs:{placeholder:"请输入关联涉诈类型",clearable:""},model:{value:e.dataForm.fruadType,callback:function(t){e.$set(e.dataForm,"fruadType",t)},expression:"dataForm.fruadType"}})],1),t("el-form-item",{attrs:{label:"联系人姓名",prop:"questionerName"}},[t("el-input",{attrs:{placeholder:"请输入联系人姓名",clearable:""},model:{value:e.dataForm.questionerName,callback:function(t){e.$set(e.dataForm,"questionerName",t)},expression:"dataForm.questionerName"}})],1),t("el-form-item",{attrs:{label:"联系人电话",prop:"questionerPhone"}},[t("el-input",{attrs:{oninput:"value=value.replace(/[^\\d]/g,'')",placeholder:"请输入联系人电话",clearable:""},model:{value:e.dataForm.questionerPhone,callback:function(t){e.$set(e.dataForm,"questionerPhone",t)},expression:"dataForm.questionerPhone"}})],1),t("el-form-item",{attrs:{label:"问题内容",prop:"content"}},[t("el-input",{attrs:{type:"textarea",placeholder:"请输入问题内容",clearable:""},model:{value:e.dataForm.content,callback:function(t){e.$set(e.dataForm,"content",t)},expression:"dataForm.content"}})],1)],1)],1),e.isFlag?e._e():t("div",{staticClass:"footer-content"},[t("el-button",{on:{click:e.closeDialog}},[e._v("取消")]),t("el-button",{attrs:{type:"primary",loading:e.btnLoading},on:{click:e.winningAdd}},[e._v("确认")])],1)])],1)},n=[],o=(a("8e6e"),a("ac6a"),a("456d"),a("ade3")),i=a("e166");a("ed08"),a("a865"),a("af85"),a("4328");function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){Object(o["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var s={name:"issueDetail",components:{},props:{},data:function(){return{btnLoading:!1,diaLogClose:!1,dataForm:{appealTime:"",appealSource:"",appealSourceExtend:"",whiteId:"",type:"",whiteType:"",whiteContent:"",relateNumber:"",startTime:"",endTime:"",content:"",questionerName:"",questionerPhone:"",fruadType:""},Sourcefeedback:i["Sourcefeedback"],WhiteListType:i["WhiteListType"],resourceList:[],hintShow:!1,isFlag:!1,timer:null,title:"",id:""}},computed:{rules:function(){return{}}},created:function(){},mounted:function(){},methods:{creatItem:function(){this.dataForm=this.$options.data().dataForm,this.title="新增白名单问题",this.diaLogClose=!0},closeDialog:function(){var e=this;this.hintShow=!1,this.diaLogClose=!1,this.timer&&clearTimeout(this.timer),this.timer=setTimeout((function(){e.isFlag=!1,e.title=""}),500)},editShow:function(e){this.diaLogClose=!0,this.id=e,this.winningEdit()},winningAdd:function(){var e=this;this.$refs["ruleForm"].validate((function(t){if(!t)return!1;e.btnLoading=!0,e.$http.post("/datamanage/whiteProblem/save",c({},e.dataForm)).then((function(t){if(e.btnLoading=!1,0!==t.data.code)return e.$message.error(t.data.msg);e.diaLogClose=!1,e.$message.success("新增成功"),e.$emit("getListData")})).catch((function(){e.btnLoading=!1}))}))},winningEdit:function(){var e=this;this.$http.get("/datamanage/whiteProblem/".concat(this.id)).then((function(t){e.btnLoading=!1;var a=t.data.code;0==a?(e.dataForm=e.hookUtils(t.data.data),e.typeChange(t.data.data.type)):e.$message.warning(t.data.msg)}))},selFocus:function(){0==this.resourceList.length&&this.$message.warning("请先选择白名单类型")},typeChange:function(e){1==e?this.resourceList=i["numberList"]:2==e?this.resourceList=i["ipList"]:(this.resourceList=[],this.dataForm.whiteType="")},sourceChange:function(e){this.hintShow=99==e},hookUtils:function(e){var t=JSON.parse(JSON.stringify(e));for(var a in e)"number"==typeof e[a]?t[a]=String(e[a]):t[a]=e[a];return t}}},u=s,d=(a("80c9"),a("2877")),p=Object(d["a"])(u,r,n,!1,null,"245e6a4e",null);t["default"]=p.exports},d7b1:function(e,t,a){"use strict";a("8e6e"),a("ac6a"),a("456d");var r=a("ade3"),n=a("4328"),o=a.n(n),i=a("dea3");function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){Object(r["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}t["a"]={data:function(){return Object(r["a"])({mixinViewModuleOptions:{exportExlUrl:""},dataList:[],dataListLoading:!1,page:1,limit:10,total:0,scrollTops:0,dataListSelections:[],uploadLoading:!1,uploadVisible:!1,title:"",url:"",downLoadUrl:""},"dataListSelections",[])},activated:function(){window.addEventListener("scroll",this.handleScroll,!0),this.listenerFunction()},deactivated:function(){window.removeEventListener("scroll",this.handleScroll,!0)},methods:{searchData:function(){this.dataListSelections.length>0&&this.$refs["tables"].clearSelection(),this.page=1,this.getListData()},pageSizeChangeHandle:function(e){this.page=1,this.limit=e,this.getListData()},pageCurrentChangeHandle:function(e){this.page=e,this.getListData()},getRowsKey:function(e){return e.id},dataListSelectionChangeHandle:function(e){this.dataListSelections=e},listenerFunction:function(){var e=this;this.$nextTick((function(){document.documentElement.scrollTop=e.scrollTops}))},getScrollPosition:function(){var e=document.documentElement.scrollTop;this.scrollTops=e},handleScroll:function(e){this.scrollTops=document.documentElement.scrollTop},exportExl:function(){var e=this,t=[];this.dataListSelections.length>0&&(t=this.dataListSelections.map((function(e){return e.id}))),this.$confirm("根据检索条件，共计将导出".concat(t.length>0?t.length:this.total,"条数据, 是否继续?"),"批量导出",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",callback:function(){},beforeClose:function(a,r,n){if("confirm"===a){r.confirmButtonLoading=!0;var l=o.a.stringify(c(c({token:e.$getUserToken("token")},e.dataForm),{},{ids:t.join()}));e.$http({method:"get",withCredentials:!1,timeout:36e4,responseType:"blob",url:"".concat(e.mixinViewModuleOptions.exportExlUrl,"?").concat(l)}).then((function(t){Object(i["a"])(t.data,e.$route.meta.title)})),r.confirmButtonLoading=!1,e.$refs["tables"].clearSelection(),n()}else n()}}).finally((function(){ctx.confirmButtonLoading=!1})).catch((function(){ctx.confirmButtonLoading=!1}))},del:function(e){var t=this,a=[];a.push(e),this.$confirm("此操作将删除该上报记录，请确认操作！","删除",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",callback:function(){},beforeClose:function(e,r,n){"confirm"===e?t.$http.post("/dataprocess/catAssist/delete",a).then((function(e){if(0!==e.data.code)return n(),r.confirmButtonLoading=!1,t.$message.error(e.data.msg);r.confirmButtonLoading=!1,n(),t.getListData(),t.$message.success("删除成功")})):n()}}).finally((function(){ctx.confirmButtonLoading=!1})).catch((function(){ctx.confirmButtonLoading=!1})),this.page>1&&(this.total-1)%this.limit===0&&(this.page-=1)}}}},e166:function(e,t,a){"use strict";a.r(t),a.d(t,"getLabel",(function(){return l})),a.d(t,"Sourcefeedback",(function(){return r})),a.d(t,"WhiteListType",(function(){return n})),a.d(t,"ipList",(function(){return i})),a.d(t,"numberList",(function(){return o}));a("7514");var r=[{dictLabel:"公安通报关联",dictValue:"1"},{dictLabel:"用户举报关联",dictValue:"2"},{dictLabel:"涉诈线索发现",dictValue:"3"},{dictLabel:"其他",dictValue:"99"}],n=[{dictLabel:"码号",dictValue:"1"},{dictLabel:"域名/网址/IP",dictValue:"2"}],o=[{dictLabel:"手机号",dictValue:"1"},{dictLabel:"固话",dictValue:"2"},{dictLabel:"短信端口号",dictValue:"3"}],i=[{dictLabel:"域名",dictValue:"1"},{dictLabel:"网址",dictValue:"2"},{dictLabel:"IP地址",dictValue:"3"}];function l(e,t){var a=e.find((function(e){return e.dictValue===t+""}));return a?a.dictLabel:t}}}]);