(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0bb7c89b"],{"26ef":function(e,a,t){},"4d86":function(e,a,t){"use strict";t("7f7f");var l=function(){var e=this,a=e._self._c;return a("div",[a("el-form",{ref:"ruleRef",attrs:{inline:e.formConfig.inline,"label-width":e.formConfig.labelWidth,model:e.dataForm,disabled:e.isDisabled}},[a("el-row",e._l(e.formDataList,(function(t){return a("el-col",{key:t.prop,attrs:{span:8}},[a("el-form-item",{class:t.label.length>=e.formConfig.labelLength?"fold_label_line":"",attrs:{label:t.label,prop:t.prop,rules:t.rule}},["input"===t.type?a("el-input",{attrs:{type:t.type,placeholder:t.placeholder,clearable:""},model:{value:e.dataForm[t.prop],callback:function(a){e.$set(e.dataForm,t.prop,a)},expression:"dataForm[item.prop]"}}):e._e(),"radio"===t.type?a("el-radio-group",{attrs:{clearable:""},model:{value:e.dataForm[t.prop],callback:function(a){e.$set(e.dataForm,t.prop,a)},expression:"dataForm[item.prop]"}},e._l(t.options,(function(t,l){return a("el-radio",{key:l,attrs:{label:t.label}},[e._v("\n                            "+e._s(t.name)+"\n                        ")])})),1):e._e(),"checkbox"===t.type?a("el-checkbox-group",{model:{value:e.dataForm[t.prop],callback:function(a){e.$set(e.dataForm,t.prop,a)},expression:"dataForm[item.prop]"}},e._l(t.options,(function(t,l){return a("el-checkbox",{key:l,attrs:{label:t.label}},[e._v("\n                            "+e._s(t.name)+"\n                        ")])})),1):e._e(),"textarea"===t.type?a("el-input",{attrs:{placeholder:t.placeholder,clearable:"",type:t.type},model:{value:e.dataForm[t.prop],callback:function(a){e.$set(e.dataForm,t.prop,a)},expression:"dataForm[item.prop]"}}):e._e(),"select"===t.type?a("el-select",{attrs:{placeholder:t.placeholder,clearable:""},on:{change:e.change,focus:e.focus},model:{value:e.dataForm[t.prop],callback:function(a){e.$set(e.dataForm,t.prop,a)},expression:"dataForm[item.prop]"}},e._l(t.options,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1):e._e(),"deptSelect"===t.type?a("el-select",{attrs:{placeholder:t.placeholder,clearable:""},on:{change:e.change,focus:e.focus},model:{value:e.dataForm[t.prop],callback:function(a){e.$set(e.dataForm,t.prop,a)},expression:"dataForm[item.prop]"}},e._l(t.options,(function(e){return a("el-option",{key:e.dictValue,attrs:{label:e.dictLabel,value:e.dictValue}})})),1):e._e(),"datetime"===t.type?a("el-date-picker",{attrs:{type:"datetime","value-format":"yyyy-MM-dd HH:mm:ss",placeholder:t.placeholder,clearable:""},model:{value:e.dataForm[t.prop],callback:function(a){e.$set(e.dataForm,t.prop,a)},expression:"dataForm[item.prop]"}}):e._e(),"number"===t.type?a("el-input-number",{attrs:{min:0,controls:!1,placeholder:t.placeholder,clearable:""},model:{value:e.dataForm[t.prop],callback:function(a){e.$set(e.dataForm,t.prop,a)},expression:"dataForm[item.prop]"}}):e._e(),"timePicker"===t.type?a("el-time-picker",{attrs:{"is-range":"","value-format":"HH:mm:ss",format:"HH:mm:ss","range-separator":"至","start-placeholder":t.startTimeText,"end-placeholder":t.endTimeText,clearable:""},model:{value:e.dataForm[t.prop],callback:function(a){e.$set(e.dataForm,t.prop,a)},expression:"dataForm[item.prop]"}}):e._e(),"daterange"===t.type?a("el-date-picker",{attrs:{"value-format":"yyyy-MM-dd",type:"daterange","range-separator":"至","start-placeholder":t.startTimeText,"end-placeholder":t.endTimeText,clearable:""},model:{value:e.dataForm[t.prop],callback:function(a){e.$set(e.dataForm,t.prop,a)},expression:"dataForm[item.prop]"}}):e._e(),"datetimerange"===t.type?a("el-date-picker",{attrs:{"value-format":"yyyy-MM-dd HH:mm:ss",format:"yyyy-MM-dd HH:mm:ss",type:"datetimerange","range-separator":"至","start-placeholder":t.startTimeText,"end-placeholder":t.endTimeText,clearable:""},model:{value:e.dataForm[t.prop],callback:function(a){e.$set(e.dataForm,t.prop,a)},expression:"dataForm[item.prop]"}}):e._e(),"cascader"===t.type?a("el-cascader",{attrs:{options:t.options,props:e.optionProps,placeholder:t.placeholder,clearable:"",filterable:""},model:{value:e.dataForm[t.prop],callback:function(a){e.$set(e.dataForm,t.prop,a)},expression:"dataForm[item.prop]"}}):e._e()],1),e.formConfig.btnFlag?a("el-form-item",e._l(e.formConfig.btnArr,(function(t,l){return a("el-button",{key:l,attrs:{type:t.type},on:{click:function(a){return e.handle(t.flagName)}}},[e._v("\n                        "+e._s(t.btnName)+"\n                    ")])})),1):e._e()],1)})),1)],1)],1)},o=[],r={props:{formConfig:{typeof:Object,default:function(){return{}}},dataForm:{typeof:Object,default:function(){return{}}},formDataList:{typeof:Array,default:function(){return[]}},isDisabled:{typeof:Boolean,default:!1}},data:function(){return{optionProps:{value:"value",label:"label",children:"children",emitPath:!1,checkStrictly:!0,expandTrigger:"hover"}}},methods:{handle:function(e){this.$emit("handleFn",e)},change:function(){this.$emit("changeSelect")},focus:function(){this.$emit("focusSelect")},submitForm:function(){var e=this,a=Boolean;return this.$refs["ruleRef"].validate((function(t){t?a=!0:(e.$message.warning("请把信息填写完整！"),a=!1)})),a}}},n=r,i=(t("7f23"),t("2877")),s=Object(i["a"])(n,l,o,!1,null,"192effa5",null);a["a"]=s.exports},"685f":function(e,a,t){},"7f23":function(e,a,t){"use strict";t("685f")},"81ef":function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));t("a481"),t("28a5");function l(e){var a={"是":"是","否":"否"},t=["（","(","（省份）","（地市）"];t.forEach((function(a){-1!==e.label.indexOf(a)&&-1===e.label.indexOf("（省份）")&&-1===e.label.indexOf("（地市）")&&(e.label=e.label.split(a)[0])}));var l={};return"input"==e.type?l.placeholder="请输入".concat(e.label.replace(/\s*/g,"")):"select"==e.type?(l.placeholder="请选择",e.value=a[e.value]||"",l.options=[{label:"否",value:"否"},{label:"是",value:"是"}]):"datetime"==e.type&&(l.placeholder="请选择"),l.type=e.type,l.prop=e.prop,l.label=e.label.replace(/\s*/g,""),l.value=e.value,0==e.feedbackAllowNull&&(l.rule=[{required:!0,message:"".concat(l.placeholder),trigger:"blur"}]),l}},8243:function(e,a,t){"use strict";t.r(a);t("7f7f");var l=function(){var e=this,a=e._self._c;return a("div",{staticClass:"business-container"},[a("el-card",{staticClass:"aui-card--fill",attrs:{shadow:"never"}},[a("div",{staticClass:"head-desc",attrs:{slot:"header"},slot:"header"},[a("span",[e._v("涉案固话号码详情")]),a("el-button",{on:{click:e.backPage}},[e._v("返回")])],1),a("el-form",{ref:"dataForm",attrs:{disabled:"",model:e.dataForm,inline:!0,"label-position":"right","label-width":"130px"}},[a("div",{staticClass:"detail-desc"},[a("div",{staticClass:"detail-info"},[a("h3",{staticClass:"tit"},[e._v("基础信息")]),a("el-row",[a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"日期"}},[a("el-input",{model:{value:e.dataForm.fixedDate,callback:function(a){e.$set(e.dataForm,"fixedDate",a)},expression:"dataForm.fixedDate"}})],1)],1),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"涉案固话号码"}},[a("el-input",{model:{value:e.dataForm.involvedFixedPhone,callback:function(a){e.$set(e.dataForm,"involvedFixedPhone",a)},expression:"dataForm.involvedFixedPhone"}})],1)],1),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"发案时间"}},[a("el-input",{model:{value:e.dataForm.filingTime,callback:function(a){e.$set(e.dataForm,"filingTime",a)},expression:"dataForm.filingTime"}})],1)],1),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"受害人号码"}},[a("el-input",{model:{value:e.dataForm.victimPhone,callback:function(a){e.$set(e.dataForm,"victimPhone",a)},expression:"dataForm.victimPhone"}})],1)],1),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"归属市"}},[a("el-input",{model:{value:e.dataForm.belongCityStr,callback:function(a){e.$set(e.dataForm,"belongCityStr",a)},expression:"dataForm.belongCityStr"}})],1)],1),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"案件类别",prop:"filingType"}},[a("el-input",{attrs:{placeholder:"案件类别"},model:{value:e.dataForm.filingType,callback:function(a){e.$set(e.dataForm,"filingType",a)},expression:"dataForm.filingType"}})],1)],1)],1)],1)]),a("div",{staticClass:"detail-desc"},[a("div",{staticClass:"detail-info"},[a("h3",{staticClass:"tit"},[e._v("核查反馈信息")]),a("el-row",{staticStyle:{display:"none"}},[a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"是否真实通信"}},[a("el-input",{model:{value:e.dataForm.isRealCommunication,callback:function(a){e.$set(e.dataForm,"isRealCommunication",a)},expression:"dataForm.isRealCommunication"}})],1)],1),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"诈骗类型"}},[a("el-input",{model:{value:e.dataForm.telecomFraud,callback:function(a){e.$set(e.dataForm,"telecomFraud",a)},expression:"dataForm.telecomFraud"}})],1)],1),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"通话地"}},[a("el-input",{model:{value:e.dataForm.callAddress,callback:function(a){e.$set(e.dataForm,"callAddress",a)},expression:"dataForm.callAddress"}})],1)],1),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"通话基站号CI"}},[a("el-input",{model:{value:e.dataForm.callBaseStationCi,callback:function(a){e.$set(e.dataForm,"callBaseStationCi",a)},expression:"dataForm.callBaseStationCi"}})],1)],1),a("el-col",{attrs:{span:8}},[a("el-form-item",{staticClass:"fold_label",attrs:{label:"通话位置小区号\nLAC"}},[a("el-input",{model:{value:e.dataForm.callResidentialQuartersLac,callback:function(a){e.$set(e.dataForm,"callResidentialQuartersLac",a)},expression:"dataForm.callResidentialQuartersLac"}})],1)],1),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"2G or 4G网络"}},[a("el-input",{model:{value:e.dataForm.network,callback:function(a){e.$set(e.dataForm,"network",a)},expression:"dataForm.network"}})],1)],1),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"交换机号"}},[a("el-input",{model:{value:e.dataForm.exchangeNumber,callback:function(a){e.$set(e.dataForm,"exchangeNumber",a)},expression:"dataForm.exchangeNumber"}})],1)],1),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"IMEI号"}},[a("el-input",{model:{value:e.dataForm.judgeResult,callback:function(a){e.$set(e.dataForm,"judgeResult",a)},expression:"dataForm.judgeResult"}})],1)],1),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"研判结果"}},[a("el-input",{model:{value:e.dataForm.judgeResult,callback:function(a){e.$set(e.dataForm,"judgeResult",a)},expression:"dataForm.judgeResult"}})],1)],1),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"研判说明"}},[a("el-input",{model:{value:e.dataForm.judgeExplain,callback:function(a){e.$set(e.dataForm,"judgeExplain",a)},expression:"dataForm.judgeExplain"}})],1)],1),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"处置结果"}},[a("el-input",{model:{value:e.dataForm.disposalResults,callback:function(a){e.$set(e.dataForm,"disposalResults",a)},expression:"dataForm.disposalResults"}})],1)],1),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"处置时间"}},[a("el-input",{model:{value:e.dataForm.disposalTime,callback:function(a){e.$set(e.dataForm,"disposalTime",a)},expression:"dataForm.disposalTime"}})],1)],1),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"未处置原因"}},[a("el-input",{model:{value:e.dataForm.notDisposalReason,callback:function(a){e.$set(e.dataForm,"notDisposalReason",a)},expression:"dataForm.notDisposalReason"}})],1)],1),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"是否二次认证"}},[a("el-input",{model:{value:e.dataForm.isSecondCertification,callback:function(a){e.$set(e.dataForm,"isSecondCertification",a)},expression:"dataForm.isSecondCertification"}})],1)],1),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"姓名"}},[a("el-input",{model:{value:e.dataForm.name,callback:function(a){e.$set(e.dataForm,"name",a)},expression:"dataForm.name"}})],1)],1),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"证件号码"}},[a("el-input",{model:{value:e.dataForm.identificationNumber,callback:function(a){e.$set(e.dataForm,"identificationNumber",a)},expression:"dataForm.identificationNumber"}})],1)],1),a("el-col",{attrs:{span:8}},[a("el-form-item",{staticClass:"fold_label",attrs:{label:"该用户证件是否\n添加黑名单"}},[a("el-input",{model:{value:e.dataForm.isBlacklist,callback:function(a){e.$set(e.dataForm,"isBlacklist",a)},expression:"dataForm.isBlacklist"}})],1)],1),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"客户不良级别"}},[a("el-input",{model:{value:e.dataForm.badLevel,callback:function(a){e.$set(e.dataForm,"badLevel",a)},expression:"dataForm.badLevel"}})],1)],1),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"不加黑名单原因"}},[a("el-input",{model:{value:e.dataForm.notBlacklistReason,callback:function(a){e.$set(e.dataForm,"notBlacklistReason",a)},expression:"dataForm.notBlacklistReason"}})],1)],1),a("el-col",{attrs:{span:8}},[a("el-form-item",{staticClass:"fold_label",attrs:{label:"开户工号人员的\n开卡情况反查"}},[a("el-input",{model:{value:e.dataForm.situationCounterCheck,callback:function(a){e.$set(e.dataForm,"situationCounterCheck",a)},expression:"dataForm.situationCounterCheck"}})],1)],1),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"重复次数"}},[a("el-input",{model:{value:e.dataForm.repeatCount,callback:function(a){e.$set(e.dataForm,"repeatCount",a)},expression:"dataForm.repeatCount"}})],1)],1),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"备注"}},[a("el-input",{model:{value:e.dataForm.personNumber,callback:function(a){e.$set(e.dataForm,"personNumber",a)},expression:"dataForm.personNumber"}})],1)],1),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"个人号/中间号"}},[a("el-input",{model:{value:e.dataForm.personNumber,callback:function(a){e.$set(e.dataForm,"personNumber",a)},expression:"dataForm.personNumber"}})],1)],1)],1),a("form-test-row",{ref:"publicForm",attrs:{formConfig:e.formConfig,dataForm:e.testForm,formDataList:e.formDataList}})],1)]),a("div",{staticClass:"detail-desc"},[a("div",{staticClass:"detail-info"},[a("el-row",[a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"不通过原因"}},[a("el-input",{model:{value:e.dataForm.notPassingReason,callback:function(a){e.$set(e.dataForm,"notPassingReason",a)},expression:"dataForm.notPassingReason"}})],1)],1)],1)],1)])]),a("div",{staticClass:"btn"},[a("el-button",{attrs:{type:"primary"},on:{click:e.feedback}},[e._v("保存")]),a("el-button",{on:{click:e.backPage}},[e._v("关闭")])],1)],1)],1)},o=[],r=(t("8e6e"),t("ac6a"),t("456d"),t("ade3")),n=(t("ed08"),t("4d86")),i=t("81ef");function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);a&&(l=l.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,l)}return t}function c(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){Object(r["a"])(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var d={components:{formTestRow:n["a"]},data:function(){return{formConfig:{inline:!0,btnFlag:!1,labelWidth:"130px",labelLength:9},testForm:{},formDataList:[],dataForm:{fixedDate:"",involvedFixedPhone:"",belongCityStr:"",filingTime:"",victimPhone:"",filingType:"",isRealCommunication:"",telecomFraud:"",callAddress:"",callBaseStationCi:"",callResidentialQuartersLac:"",network:"",exchangeNumber:"",imeiNo:"",judgeResult:"",judgeExplain:"",disposalResults:"",disposalTime:"",notDisposalReason:"",isSecondCertification:"",name:"",identificationNumber:"",isBlacklist:"",badLevel:"",notBlacklistReason:"",situationCounterCheck:"",repeatCount:"",remark:"",personNumber:"",notPassingReason:""},id:""}},computed:{},watch:{},created:function(){},activated:function(){this.id!=this.$route.query.id&&(this.id=this.$route.query.id),this.getdataForm(),this.getDynamicForm()},mounted:function(){},methods:{backPage:function(){var e=this;this.$store.state.contentTabs=this.$store.state.contentTabs.filter((function(a){return a.name!==e.$store.state.contentTabsActiveName})),this.$router.push({path:"/telephone-FeedBack"})},getdataForm:function(){var e=this;this.$http.get("/workorder/woFixedPhone/city/info",{params:{id:this.$route.query.id}}).then((function(a){e.dataForm=a.data.data,e.dataForm.filingTime=a.data.data.filingTime}))},getDynamicForm:function(){var e=this;this.$http.get("/workorder/woFixedPhone/dynamic/feedback",{params:{id:this.id}}).then((function(a){if(0!=a.data.code)return e.testForm={},e.formDataList=[],e.$message.error(a.data.msg);var t={};e.formDataList=a.data.data.map((function(e){var a=Object(i["a"])(e);return t[e.prop]=e.value,a})),e.testForm=t}))},feedback:function(){var e=this,a=this.$refs["publicForm"].submitForm();a&&this.$http.post("/workorder/woFixedPhone/dynamic/update",c({id:this.id},this.testForm)).then((function(a){if(0!=a.data.code)return e.$message.error(a.data.msg);e.$message.success("保存成功"),e.backPage()}))}}},m=d,p=(t("e119"),t("2877")),u=Object(p["a"])(m,l,o,!1,null,"6171f173",null);a["default"]=u.exports},e119:function(e,a,t){"use strict";t("26ef")}}]);