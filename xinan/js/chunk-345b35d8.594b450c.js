(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-345b35d8"],{3118:function(e,t,a){"use strict";a("5fc3")},"5fc3":function(e,t,a){},6725:function(e,t,a){"use strict";a("f350")},8158:function(e,t,a){},8167:function(e,t,a){"use strict";a("8158")},"86fb":function(e,t,a){"use strict";a("d116")},ae12:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"note-container"},[t("el-card",{staticClass:"aui-card--fill",attrs:{shadow:"never"}},[t("div",{staticClass:"change"},e._l(e.changeList,(function(a,n){return t("a",{key:n,class:{acitve:e.currentIndex===n},attrs:{href:"javascript:;"},on:{click:function(t){return e.changeTab(n)}}},[e._v("\n                "+e._s(a)+"\n            ")])})),0),0==e.currentIndex?t("record",{ref:"recordRef"}):e._e(),1==e.currentIndex?t("cheat",{ref:"cheatRef",attrs:{isTabActive:e.isTabActive}}):e._e(),2==e.currentIndex?t("telephoneFixed",{ref:"telephoneFixedRef"}):e._e()],1)],1)},r=[],l=a("ed94"),i=a("4e03"),o=a("bf31"),s={name:"workOderListIndex",data:function(){return{changeList:["涉案手机号码工单","12321诈骗工单","涉案固话工单"],currentIndex:0,isTabActive:""}},computed:{},watch:{},mounted:function(){},activated:function(){this.changeTab(this.currentIndex)},components:{cheat:l["default"],record:i["default"],telephoneFixed:o["default"]},methods:{changeTab:function(e){var t=this;this.currentIndex=e,this.isTabActive=e;var a={0:function(){t.$nextTick((function(){t.$refs["recordRef"].init()}))},1:function(){t.$nextTick((function(){t.$refs["cheatRef"].init()}))},2:function(){t.$nextTick((function(){t.$refs["telephoneFixedRef"].init()}))}};a[this.currentIndex]()}}},c=s,d=(a("6725"),a("2877")),u=Object(d["a"])(c,n,r,!1,null,"e9c88f10",null);t["default"]=u.exports},af85:function(e,t,a){"use strict";function n(e){var t={156:"中国",32e4:"江苏省",320100:"南京市",320200:"无锡市",320300:"徐州市",320400:"常州市",320500:"苏州市",320600:"南通市",320700:"连云港市",320800:"淮安市",320900:"盐城市",321e3:"扬州市",321100:"镇江市",321200:"泰州市",321300:"宿迁市"};return t[e]}a.d(t,"a",(function(){return n}))},bf31:function(e,t,a){"use strict";a.r(t);a("7f7f");var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"note-container"},[t("el-card",{staticClass:"aui-card--fill",attrs:{shadow:"never"}},[t("el-form",{ref:"studyForm",attrs:{inline:!0,model:e.dataForm},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.searchData()}}},[t("el-form-item",{attrs:{label:"涉案固话号码"}},[t("el-input",{attrs:{placeholder:"请输入涉案固话号码",clearable:""},model:{value:e.dataForm.involvedFixedPhone,callback:function(t){e.$set(e.dataForm,"involvedFixedPhone",t)},expression:"dataForm.involvedFixedPhone"}})],1),t("el-form-item",{attrs:{label:"受害者号码"}},[t("el-input",{attrs:{placeholder:"请输入受害者号码",clearable:""},model:{value:e.dataForm.victimPhone,callback:function(t){e.$set(e.dataForm,"victimPhone",t)},expression:"dataForm.victimPhone"}})],1),t("el-form-item",{attrs:{label:"日期"}},[t("el-date-picker",{attrs:{"value-format":"yyyy-MM-dd",type:"daterange","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":e.pickerOptions,"default-time":["00:00:00","23:59:59"],clearable:""},model:{value:e.dispositionTime,callback:function(t){e.dispositionTime=t},expression:"dispositionTime"}})],1),t("el-form-item",{attrs:{label:"运营商"}},[t("el-select",{attrs:{placeholder:"运营商",clearable:""},model:{value:e.dataForm.operator,callback:function(t){e.$set(e.dataForm,"operator",t)},expression:"dataForm.operator"}},e._l(e.moveOperatorList,(function(e){return t("el-option",{key:e.dictValue,attrs:{label:e.dictLabel,value:e.dictLabel}})})),1)],1),t("el-form-item",{attrs:{label:"固话类型"}},[t("el-select",{attrs:{clearable:""},model:{value:e.dataForm.fixedType,callback:function(t){e.$set(e.dataForm,"fixedType",t)},expression:"dataForm.fixedType"}},[t("el-option",{attrs:{label:"企业固话",value:"企业固话"}}),t("el-option",{attrs:{label:"个人固话",value:"个人固话"}})],1)],1),t("el-form-item",{attrs:{label:"归属市"}},[t("el-select",{attrs:{placeholder:"归属市",clearable:""},model:{value:e.dataForm.belongCity,callback:function(t){e.$set(e.dataForm,"belongCity",t)},expression:"dataForm.belongCity"}},e._l(e.locationTypeList,(function(e){return t("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),t("el-form-item",{attrs:{label:"案件类别"}},[t("el-select",{attrs:{placeholder:"案件类别",clearable:""},model:{value:e.dataForm.filingType,callback:function(t){e.$set(e.dataForm,"filingType",t)},expression:"dataForm.filingType"}},e._l(e.typeList,(function(e){return t("el-option",{key:e.code,attrs:{value:e.desc,label:e.desc}})})),1)],1),t("el-form-item",{attrs:{label:"有无通联"}},[t("el-select",{attrs:{placeholder:"有无通联",clearable:""},model:{value:e.dataForm.ifCommunications,callback:function(t){e.$set(e.dataForm,"ifCommunications",t)},expression:"dataForm.ifCommunications"}},e._l(e.effortList,(function(e){return t("el-option",{key:e.dictValue,attrs:{label:e.dictLabel,value:e.dictLabel}})})),1)],1),t("el-form-item",{attrs:{label:"工单编号"}},[t("el-input",{staticClass:"project-item",attrs:{placeholder:"请输入工单编号",clearable:""},model:{value:e.dataForm.serialNumber,callback:function(t){e.$set(e.dataForm,"serialNumber",t)},expression:"dataForm.serialNumber"}})],1),t("el-form-item",[t("el-checkbox",{attrs:{"true-label":1,"false-label":0},model:{value:e.dataForm.distinctType,callback:function(t){e.$set(e.dataForm,"distinctType",t)},expression:"dataForm.distinctType"}},[e._v("去重")])],1),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.searchData()}}},[e._v("查询")])],1),t("el-form-item",[t("el-button",{on:{click:function(t){return e.reset()}}},[e._v("重置")])],1)],1),t("div",{staticClass:"btn"},[t("el-button",{staticStyle:{"margin-right":"10px"},attrs:{type:"success"},on:{click:e.exportImport}},[e._v("批量导出")]),t("el-dropdown",{staticClass:"newDrop",attrs:{"split-button":"",type:"primary"},on:{command:e.downTemplate}},[t("el-upload",{staticClass:"upload-demo",attrs:{action:e.url,"on-success":e.handleSuccess,headers:{responseType:"arraybuffer",token:e.token},"file-list":e.fileList,"show-file-list":!1,accept:".XLS, .xls, .XLSX, .xlsx"}},[e._v("\n                    批量查询\n                    "),t("i",{staticClass:"el-icon-upload2 el-icon--right"})]),t("el-dropdown-menu",[t("el-dropdown-item",{attrs:{command:"downTemplate"}},[e._v("下载模板")])],1)],1),t("span",{staticClass:"hintTit"},[t("i",{directives:[{name:"show",rawName:"v-show",value:e.dataForm.phones.length>0,expression:"dataForm.phones.length > 0"}],staticClass:"el-icon-success",staticStyle:{"font-size":"25px"}})])],1),t("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.dataListLoading,expression:"dataListLoading"}],ref:"tables",staticClass:"tab",staticStyle:{width:"100%"},attrs:{data:e.dataList,"row-style":e.iRowStyle,"cell-style":e.iCellStyle,"header-row-style":e.iHeaderRowStyle,border:"","header-cell-style":{background:"rgba(194, 210, 255, 0.3)",color:"#040415"},"row-key":e.getRowsKey},on:{"selection-change":e.dataListSelectionChangeHandle}},[t("el-table-column",{attrs:{type:"selection","header-align":"center",align:"center",width:"50","reserve-selection":!0}}),t("el-table-column",{attrs:{prop:"serialNumber",align:"center",label:"工单编号",width:"180"}}),t("el-table-column",{attrs:{prop:"feedbackStatus",align:"center",label:"反馈状态",width:"180"},scopedSlots:e._u([{key:"default",fn:function(a){return[0==a.row.feedbackStatus?t("span",[e._v("未反馈")]):e._e(),1==a.row.feedbackStatus?t("span",[e._v("部分反馈")]):e._e(),2==a.row.feedbackStatus?t("span",[e._v("已反馈")]):e._e(),3==a.row.feedbackStatus?t("span",[e._v("超时反馈")]):e._e(),4==a.row.feedbackStatus?t("span",[e._v("反馈不通过")]):e._e()]}}])}),t("el-table-column",{staticClass:"date",attrs:{prop:"fixedDate",label:"日期",align:"center",width:"150"}}),t("el-table-column",{attrs:{prop:"involvedFixedPhone",label:"涉案固话号码",align:"center",width:"150"}}),t("el-table-column",{attrs:{prop:"filingType",label:"案件类别",align:"center",width:"250"}}),t("el-table-column",{attrs:{prop:"filingTime",label:"发案时间",align:"center",width:"300"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.filingTime))]}}])}),t("el-table-column",{attrs:{prop:"victimPhone",label:"受害人号码",align:"center",width:"130"}}),t("el-table-column",{attrs:{align:"center",label:"运营商（移动/非移动）",width:"170",prop:"operator"}}),t("el-table-column",{attrs:{align:"center",label:"归属省",width:"120",prop:"belongProvince"}}),t("el-table-column",{attrs:{align:"center",label:"归属市",width:"120",prop:"belongCity"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(e.formatCity(t.row.belongCity)))]}}])}),t("el-table-column",{attrs:{prop:"openCardProvince",align:"center",label:"开户省",width:"180"}}),t("el-table-column",{attrs:{prop:"openCardCity",align:"center",label:"开户市",width:"180"}}),t("el-table-column",{attrs:{prop:"openName",align:"center",label:"开户人姓名/公司名称",width:"180"}}),t("el-table-column",{attrs:{prop:"openCardCode",align:"center",label:"开户人身份证号",width:"180"}}),t("el-table-column",{attrs:{prop:"openRegisterAddress",align:"center",label:"开户登记地址",width:"180"}}),t("el-table-column",{attrs:{prop:"openOutlet",align:"center",label:"开户网点",width:"180"}}),t("el-table-column",{attrs:{prop:"openDate",align:"center",label:"开户日期",width:"180"}}),t("el-table-column",{attrs:{prop:"cardOpeningNumber",align:"center",label:"开卡工号",width:"180"}}),t("el-table-column",{attrs:{prop:"openChannelType",align:"center",label:"开户渠道类型",width:"180"}}),t("el-table-column",{attrs:{prop:"installProvince",align:"center",label:"装机省",width:"180"}}),t("el-table-column",{attrs:{prop:"installCity",align:"center",label:"装机市",width:"180"}}),t("el-table-column",{attrs:{prop:"installAddress",align:"center",label:"装机地址",width:"180"}}),t("el-table-column",{attrs:{prop:"bindingRelationship",align:"center",label:"绑定关系",width:"180"}}),t("el-table-column",{attrs:{prop:"fixedType",align:"center",label:"固话类型",width:"180"}}),t("el-table-column",{attrs:{prop:"remark",align:"center",label:"备注",width:"180"}}),t("el-table-column",{attrs:{prop:"ifCommunications",align:"center",label:"有无通联",width:"180"}}),t("el-table-column",{attrs:{prop:"checkRemark",align:"center",label:"核查说明",width:"180"}}),t("el-table-column",{attrs:{prop:"repeatCount",align:"center",label:"重复次数",width:"180"}}),t("el-table-column",{attrs:{label:"操作",align:"center",width:"200",fixed:"right"},scopedSlots:e._u([{key:"default",fn:function(a){return[e.$hasPermission("FixedPhone:search:Amend")?t("el-button",{attrs:{type:"text"},on:{click:function(t){return e.detail(a.row.id,"1")}}},[e._v("\n                        修改\n                    ")]):e._e(),t("el-button",{attrs:{type:"text"},on:{click:function(t){return e.detail(a.row.id,"2")}}},[e._v("详情")])]}}])})],1),t("el-pagination",{attrs:{"current-page":e.page,"page-sizes":[10,20,50,100],"page-size":e.limit,total:e.total,layout:"total, sizes, prev, pager, next, jumper"},on:{"update:currentPage":function(t){e.page=t},"update:current-page":function(t){e.page=t},"size-change":e.pageSizeChangeHandle,"current-change":e.pageCurrentChangeHandle}})],1)],1)},r=[],l=(a("8e6e"),a("ac6a"),a("456d"),a("c5f6"),a("ade3")),i=(a("28a5"),a("a481"),a("d7b1")),o=a("ed08"),s=(a("5d2d"),a("a865")),c=a("4328"),d=a.n(c),u=a("dea3"),p=a("af85");function m(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?m(Object(a),!0).forEach((function(t){Object(l["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):m(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var f={name:"workOderList",props:{},mixins:[i["a"]],data:function(){var e=this;return{dataForm:{filingType:"",involvedFixedPhone:"",victimPhone:"",startFixedDate:"",endFixedDate:"",belongCity:"",serialNumber:"",fixedType:"",operator:"",ifCommunications:"",phones:"",distinctType:0},pickerOptions:{disabledDate:function(t){var a=(new Date).getFullYear();return 1==e.dataForm.distinctType&&t.getFullYear()!==a}},dispositionTime:[],locationTypeList:[],id:"",pid:"320000",typeList:[],moveOperatorList:Object(o["b"])("moveOperator"),effortList:Object(o["b"])("effort"),fileList:[],url:"".concat(window.SITE_CONFIG["apiURL"],"/workorder/fixedWoBase/exportExcelPhoneList")}},computed:{formatTime:function(){function e(e,t){var a=0,n=[];while(a<e.length)n.push(e.slice(a,a+=t));return n}function t(e){var t=/(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/;return e.replace(t,"$1-$2-$3 $4:$5:$6")}return function(a){var n=a.split("-"),r=e(n,3),l=r[0].map((function(e){return e.split(":")})).join().split(","),i=r[1].map((function(e){return e.split(":")})).join().split(","),o=l.join(""),s=i.join("");return"".concat(t(o)," - ").concat(t(s))}},formatCity:function(){return function(e){return Object(p["a"])(e)}},token:function(){return this.$getUserToken("token")}},watch:{dispositionTime:function(e){this.dataForm.startFixedDate=null!==e?e[0]:"",this.dataForm.endFixedDate=null!==e?e[1]:""},"dataForm.distinctType":function(e,t){1==e&&this.$message.warning("只能选择当年的日期")}},mounted:function(){},activated:function(){},created:function(){this.getregionlist(),this.getType()},components:{},methods:{init:function(){this.getListData()},iRowStyle:function(e){e.row,e.rowIndex;return"height:30px"},iHeaderRowStyle:function(e){e.row,e.rowIndex;return"height:30px"},iCellStyle:function(e){e.row,e.column,e.rowIndex,e.columnIndex;return"padding:0px"},getType:function(){var e=this;this.$http.get("workorder/woFixedPhone/filingTypeEnum").then((function(t){e.typeList=t.data.data}))},getregionlist:function(){var e=this,t={pid:this.pid};Object(s["j"])(t).then((function(t){e.locationTypeList=t.data.data}))},reset:function(){this.dataForm=this.$options.data().dataForm,this.dispositionTime=[],this.getListData()},exportImport:function(){var e=this,t=[];this.dataListSelections.length>0&&(t=this.dataListSelections.map((function(e){return e.id}))),this.$confirm("根据检索条件，共计将导出".concat(t.length>0?t.length:this.total,"条数据, 是否继续?"),"批量导出",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",callback:function(){},beforeClose:function(a,n,r){if("confirm"!==a)return n.confirmButtonLoading=!1,void r();n.confirmButtonLoading=!0;var l=d.a.stringify(b(b({token:e.$getUserToken("token")},e.dataForm),{},{phoneIds:t.join()}));e.$http({method:"get",withCredentials:!1,timeout:36e4,responseType:"blob",url:"/workorder/woFixedPhone/export?".concat(l)}).then((function(t){var a=t.headers["content-type"].indexOf("application/json");if(-1!=a)return e.$message.error("存在两种工单类型，导出失败");Object(u["a"])(t.data,"涉案固话号码-反馈明细")})),n.confirmButtonLoading=!1,e.$refs["tables"].clearSelection(),r()}}).finally((function(){ctx.confirmButtonLoading=!1})).catch((function(){ctx.confirmButtonLoading=!1}))},getListData:function(){var e=this;this.dataListLoading=!0,this.$http.get("/workorder/fixedWoBase/fixedWoPageList",{params:b({page:this.page,limit:this.limit},this.dataForm)}).then((function(t){if(0!==t.data.code)return e.dataList=[],e.total=0,e.dataListLoading=!1,e.$message.error(t.data.msg);var a=t.data.data;e.total=Number(a.total),e.dataList=a.list,e.dataListLoading=!1}))},detail:function(e,t){this.$router.push({path:"/telephone-record-detail",query:{id:e,isFlag:t,inquire:1}})},downTemplate:function(e){"downTemplate"==e&&this.templateStencil()},templateStencil:function(){this.$http({method:"get",url:"/workorder/woInvolvedPhone/city/exportPhoneTemp",withCredentials:!1,timeout:36e4,responseType:"blob"}).then((function(e){Object(u["a"])(e.data,"导出涉案固话号码列表模板")}))},handleSuccess:function(e){this.dataList=e.data,this.total=e.data.length}}},h=f,g=(a("3118"),a("2877")),y=Object(g["a"])(h,n,r,!1,null,"4a2945a9",null);t["default"]=y.exports},d116:function(e,t,a){},ed94:function(e,t,a){"use strict";a.r(t);a("7f7f");var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"note-container"},[t("el-card",{staticClass:"aui-card--fill",attrs:{shadow:"never"}},[t("el-form",{ref:"studyForm",attrs:{inline:!0,model:e.dataForm},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.searchData()}}},[t("el-form-item",{attrs:{label:"被举报号码"}},[t("el-input",{staticClass:"project-item",attrs:{placeholder:"请输入被举报号码",clearable:""},model:{value:e.dataForm.reportedNumber,callback:function(t){e.$set(e.dataForm,"reportedNumber",t)},expression:"dataForm.reportedNumber"}})],1),t("el-form-item",{attrs:{label:"工单编号"}},[t("el-input",{staticClass:"project-item",attrs:{placeholder:"请输入工单编号",clearable:""},model:{value:e.dataForm.serialNumber,callback:function(t){e.$set(e.dataForm,"serialNumber",t)},expression:"dataForm.serialNumber"}})],1),t("el-form-item",{attrs:{label:"投诉渠道"}},[t("el-select",{attrs:{placeholder:"请选择投诉渠道",clearable:""},model:{value:e.dataForm.reportSourceType,callback:function(t){e.$set(e.dataForm,"reportSourceType",t)},expression:"dataForm.reportSourceType"}},e._l(e.locationTypeList,(function(e){return t("el-option",{key:e.dictValue,attrs:{label:e.dictLabel,value:e.dictValue}})})),1)],1),t("el-form-item",{attrs:{label:"被举报号码归属市"}},[t("el-select",{staticClass:"project-item",attrs:{placeholder:"请选择","collapse-tags":"",clearable:""},model:{value:e.dataForm.reportedNumberCity,callback:function(t){e.$set(e.dataForm,"reportedNumberCity",t)},expression:"dataForm.reportedNumberCity"}},e._l(e.citys,(function(e){return t("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),t("el-form-item",{attrs:{label:"举报人号码"}},[t("el-input",{staticClass:"project-item",attrs:{placeholder:"请输入举报人号码",clearable:""},model:{value:e.dataForm.reportingNumber,callback:function(t){e.$set(e.dataForm,"reportingNumber",t)},expression:"dataForm.reportingNumber"}})],1),t("el-form-item",{attrs:{label:"举报时间"}},[t("el-date-picker",{attrs:{"value-format":"yyyy-MM-dd",type:"daterange","start-placeholder":"开始日期","end-placeholder":"结束日期",clearable:""},model:{value:e.dispositionTime,callback:function(t){e.dispositionTime=t},expression:"dispositionTime"}})],1),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.searchData()}}},[e._v("查询")])],1),t("el-form-item",[t("el-button",{on:{click:function(t){return e.reset()}}},[e._v("重置")])],1)],1),t("div",{staticClass:"btn"},[t("el-button",{staticStyle:{"margin-right":"10px"},attrs:{type:"success"},on:{click:e.exportImport}},[e._v("批量导出")]),t("el-dropdown",{staticClass:"newDrop",attrs:{"split-button":"",type:"primary"},on:{command:e.downTemplate}},[t("el-upload",{staticClass:"upload-demo",attrs:{action:e.url,"on-success":e.handleSuccess,headers:{responseType:"arraybuffer",token:e.token},"file-list":e.fileList,"show-file-list":!1,accept:".XLS, .xls, .XLSX, .xlsx"}},[e._v("\n                        多号码查询\n                        "),t("i",{staticClass:"el-icon-upload2 el-icon--right"})]),t("el-dropdown-menu",[t("el-dropdown-item",{attrs:{command:"downTemplate"}},[e._v("下载模板")])],1)],1),t("span",{staticClass:"hintTit"},[t("i",{directives:[{name:"show",rawName:"v-show",value:e.dataForm.phones.length>0,expression:"dataForm.phones.length > 0"}],staticClass:"el-icon-success",staticStyle:{"font-size":"25px"}})])],1),t("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.dataListLoading,expression:"dataListLoading"}],ref:"tables",staticClass:"tab",staticStyle:{width:"100%"},attrs:{data:e.dataList,border:"","row-style":e.iRowStyle,"cell-style":e.iCellStyle,"header-row-style":e.iHeaderRowStyle,"header-cell-style":{background:"rgba(194, 210, 255, 0.3)",color:"#040415"},"row-key":e.getRowsKey},on:{"selection-change":e.dataListSelectionChangeHandle}},[t("el-table-column",{attrs:{type:"selection","header-align":"center",align:"center",width:"50","reserve-selection":!0}}),t("el-table-column",{attrs:{prop:"serialNumber",align:"center",label:"工单编号",width:"150"}}),t("el-table-column",{attrs:{prop:"approvalStatusStr",label:"审核状态",align:"center"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("div",[t("el-tag",{attrs:{type:e.isPass(a.row.approvalStatus).type}},[e._v("\n                                "+e._s(a.row.approvalStatusStr)+"\n                            ")])],1)]}}])}),t("el-table-column",{attrs:{prop:"reportSourceTypeStr",label:"投诉渠道",width:"100",align:"center"}}),t("el-table-column",{attrs:{prop:"reportedNumber",label:"被举报号码",width:"120",align:"center"}}),t("el-table-column",{attrs:{prop:"reportedNumberOperator",label:"被举报号码运营商",width:"140",align:"center"}}),t("el-table-column",{attrs:{prop:"reportedNumberCity",label:"被举报号码归属市",width:"140",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n                        "+e._s(e.cityList(t.row.reportedNumberCity)||t.row.reportedNumberCity)+"\n                    ")]}}])}),t("el-table-column",{attrs:{prop:"verificationType",label:"核查类型",align:"center"}}),t("el-table-column",{attrs:{prop:"reportingTime",label:"举报时间",width:"160",align:"center"}}),t("el-table-column",{attrs:{prop:"reportingNumber",label:"举报号码",width:"160",align:"center"}}),t("el-table-column",{attrs:{prop:"reportedNumberOperator",label:"举报号码运营商",align:"center"}}),t("el-table-column",{attrs:{prop:"reportedNumberProvince",label:"举报号码归属省",align:"center"}}),t("el-table-column",{attrs:{prop:"reportedNumberCity",label:"举报号码归属市",align:"center"}}),t("el-table-column",{attrs:{prop:"callTime",label:"来电时间",width:"170",align:"center"}}),t("el-table-column",{attrs:{prop:"callDuration",label:"通话时长（秒）",width:"120",align:"center"}}),t("el-table-column",{attrs:{prop:"badType",label:"不良类型",align:"center"}}),t("el-table-column",{attrs:{prop:"phoneType",label:"号码类型",align:"center"}}),t("el-table-column",{attrs:{prop:"networkChannelType",label:"入网渠道类型",align:"center"}}),t("el-table-column",{attrs:{prop:"reportContent",label:"举报内容",width:"250",align:"center"},scopedSlots:e._u([{key:"default",fn:function(a){var n=a.row;return[t("div",{staticClass:"ellipsis",attrs:{title:n.reportContent}},[e._v(e._s(n.reportContent))])]}}])}),t("el-table-column",{attrs:{prop:"districtsAndCounties",label:"区县",align:"center"}}),t("el-table-column",{attrs:{prop:"accessChannel",label:"入网渠道",width:"150",align:"center"}}),t("el-table-column",{attrs:{prop:"accessTime",label:"入网时间",width:"100",align:"center"}}),t("el-table-column",{attrs:{prop:"realCommunication",label:"是否真实通信",align:"center"}}),t("el-table-column",{attrs:{prop:"callPlace",label:"通话地",width:"120",align:"center"}}),t("el-table-column",{attrs:{prop:"baseStationNumber",label:"基站号",width:"100",align:"center"}}),t("el-table-column",{attrs:{prop:"locationCellNumber",label:"位置小区号",align:"center"}}),t("el-table-column",{attrs:{prop:"baseStationLocation",label:"基站位置",align:"center"}}),t("el-table-column",{attrs:{prop:"longitude",label:"经度",align:"center"}}),t("el-table-column",{attrs:{prop:"latitude",label:"纬度",align:"center"}}),t("el-table-column",{attrs:{prop:"addBlacklistBaseStation",label:"基站是否添加黑名单",align:"center"}}),t("el-table-column",{attrs:{prop:"useImei",label:"使用IMEI",width:"170",align:"center"}}),t("el-table-column",{attrs:{prop:"addBlacklistImei",label:"IMEI是否添加黑名单",align:"center"}}),t("el-table-column",{attrs:{prop:"username",label:"用户名称",align:"center"}}),t("el-table-column",{attrs:{prop:"identificationNumber",label:"证件号码",width:"170",align:"center"}}),t("el-table-column",{attrs:{prop:"identificationAddress",label:"证件地址",width:"170",align:"center"},scopedSlots:e._u([{key:"default",fn:function(a){var n=a.row;return[t("div",{staticClass:"ellipsis",attrs:{title:n.identificationAddress}},[e._v(e._s(n.identificationAddress))])]}}])}),t("el-table-column",{attrs:{prop:"isFraudulent",label:"研判是否涉诈",align:"center"}}),t("el-table-column",{attrs:{prop:"remark",label:"备注",align:"center"},scopedSlots:e._u([{key:"default",fn:function(a){var n=a.row;return[t("div",{staticClass:"ellipsis",attrs:{title:n.remark}},[e._v(e._s(n.remark))])]}}])}),t("el-table-column",{attrs:{label:"操作",align:"center",fixed:"right"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-button",{attrs:{type:"text"},on:{click:function(t){return e.detail(a.row.id)}}},[e._v("详情")])]}}])})],1),t("el-pagination",{attrs:{"current-page":e.page,"page-sizes":[10,20,50,100],"page-size":e.limit,total:e.total,layout:"total, sizes, prev, pager, next, jumper"},on:{"update:currentPage":function(t){e.page=t},"update:current-page":function(t){e.page=t},"size-change":e.pageSizeChangeHandle,"current-change":e.pageCurrentChangeHandle}})],1)],1)},r=[],l=(a("8e6e"),a("ac6a"),a("456d"),a("ade3")),i=(a("c5f6"),a("d7b1")),o=a("ed08"),s=a("4328"),c=a.n(s),d=a("dea3"),u=a("a865"),p=a("af85");function m(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?m(Object(a),!0).forEach((function(t){Object(l["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):m(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var f={name:"workOderList",props:{},mixins:[i["a"]],data:function(){return{dataForm:{phones:"",reportedNumber:"",reportedNumberCity:"",reportingNumber:"",startDate:"",endDate:"",reportSourceType:"",serialNumber:""},dispositionTime:[],locationTypeList:Object(o["b"])("reportSourceType"),id:"",type:"",cityList:p["a"],citys:[],pid:"320000",fileList:[],url:"".concat(window.SITE_CONFIG["apiURL"],"/workorder/woFraudulentPhone/exportExcelPhoneList")}},computed:{token:function(){return this.$getUserToken("token")},isPass:function(){return function(e){var t={};switch(Number(e)){case 0:t.txt="不通过",t.type="danger";break;case 1:t.txt="已通过",t.type="success";break;case-1:t.txt="待审核",t.type="info";break;default:t.txt="-",t.type="";break}return t}}},watch:{dispositionTime:function(e){this.dataForm.startDate=null!==e?e[0]:"",this.dataForm.endDate=null!==e?e[1]:""}},components:{},methods:{iRowStyle:function(e){e.row,e.rowIndex;return"height:30px"},iHeaderRowStyle:function(e){e.row,e.rowIndex;return"height:30px"},iCellStyle:function(e){e.row,e.column,e.rowIndex,e.columnIndex;return"padding:0px"},downTemplate:function(e){"downTemplate"==e&&this.templateStencil()},templateStencil:function(){this.$http({method:"get",url:"/workorder/woInvolvedPhone/city/exportPhoneTemp",withCredentials:!1,timeout:36e4,responseType:"blob"}).then((function(e){Object(d["a"])(e.data,"导出电话号码列表模板")}))},handleSuccess:function(e){this.dataList=e.data,this.total=e.data.length},init:function(){this.getListData(),this.getregionlist()},getregionlist:function(){var e=this,t={pid:this.pid};Object(u["j"])(t).then((function(t){e.citys=t.data.data}))},reset:function(){this.dataForm=this.$options.data().dataForm,this.daterange=[],this.dispositionTime=[],this.getListData()},getListData:function(){var e=this;this.dataListLoading=!0,this.$http.get("/workorder/woFraudulentPhone/queryFraudCodePage",{params:b({page:this.page,limit:this.limit},this.dataForm)}).then((function(t){if(0!==t.data.code)return e.dataList=[],e.total=0,e.dataListLoading=!1,e.$message.error(t.data.msg);var a=t.data.data;e.total=Number(a.total),e.dataList=a.list,e.dataListLoading=!1}))},detail:function(e){this.$router.push({path:"/cheat-detail",query:{id:e,inquire:1}})},exportImport:function(){var e=this,t=[];this.dataListSelections.length>0&&(t=this.dataListSelections.map((function(e){return e.id}))),this.$confirm("根据检索条件，共计将导出".concat(t.length>0?t.length:this.total,"条数据, 是否继续?"),"批量导出",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",callback:function(){},beforeClose:function(a,n,r){if("confirm"!==a)return n.confirmButtonLoading=!1,void r();n.confirmButtonLoading=!0;var l=c.a.stringify(b(b({token:e.$getUserToken("token")},e.dataForm),{},{cityIds:t.join()}));e.$http({method:"get",withCredentials:!1,timeout:36e4,responseType:"blob",url:"/workorder/woFraudulentPhone/export?".concat(l)}).then((function(t){var a=t.headers["content-type"].indexOf("application/json");if(-1!=a){var n=decodeURIComponent(t.headers["errormsg"]);return e.$message.error(n)}Object(d["a"])(t.data,"涉诈号码反馈")})),n.confirmButtonLoading=!1,e.$refs["tables"].clearSelection(),r()}}).finally((function(){ctx.confirmButtonLoading=!1})).catch((function(){ctx.confirmButtonLoading=!1}))}}},h=f,g=(a("8167"),a("86fb"),a("2877")),y=Object(g["a"])(h,n,r,!1,null,"58099d8e",null);t["default"]=y.exports},f350:function(e,t,a){}}]);