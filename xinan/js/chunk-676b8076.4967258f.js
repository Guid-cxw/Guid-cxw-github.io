(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-676b8076"],{4508:function(a,t,e){"use strict";e("fb12")},9875:function(a,t,e){"use strict";e.r(t);var o=function(){var a=this,t=a._self._c;return t("div",{staticClass:"business-container"},[t("el-card",{staticClass:"aui-card--fill",attrs:{shadow:"never"}},[t("div",{staticClass:"head-desc",attrs:{slot:"header"},slot:"header"},[t("span",[a._v("涉诈号码详情")]),t("el-button",{on:{click:a.backPage}},[a._v("返回")])],1),t("el-form",{ref:"dataForm",attrs:{model:a.dataForm,inline:!0,"label-position":"right","label-width":"130px",disabled:""}},[t("div",{staticClass:"detail-desc"},[t("div",{staticClass:"detail-info"},[t("h3",{staticClass:"tit"},[a._v("号码基本信息")]),t("el-row",[t("el-col",{attrs:{span:8}},[t("el-form-item",{attrs:{label:"电话号码"}},[t("el-input",{model:{value:a.dataForm.phoneNumber,callback:function(t){a.$set(a.dataForm,"phoneNumber",t)},expression:"dataForm.phoneNumber"}})],1)],1),t("el-col",{attrs:{span:8}},[t("el-form-item",{attrs:{label:"主叫归属运营商"}},[t("el-input",{model:{value:a.dataForm.isp,callback:function(t){a.$set(a.dataForm,"isp",t)},expression:"dataForm.isp"}})],1)],1),t("el-col",{attrs:{span:8}},[t("el-form-item",{attrs:{label:"归属地"}},[t("el-input",{model:{value:a.dataForm.location,callback:function(t){a.$set(a.dataForm,"location",t)},expression:"dataForm.location"}})],1)],1),t("el-col",{attrs:{span:8}},[t("el-form-item",{attrs:{label:"涉诈号码来源"}},[t("el-input",{model:{value:a.dataForm.originalType,callback:function(t){a.$set(a.dataForm,"originalType",t)},expression:"dataForm.originalType"}})],1)],1),t("el-col",{attrs:{span:8}},[t("el-form-item",{attrs:{label:"标记次数"}},[t("el-input",{model:{value:a.dataForm.markNum,callback:function(t){a.$set(a.dataForm,"markNum",t)},expression:"dataForm.markNum"}})],1)],1),t("el-col",{attrs:{span:8}},[t("el-form-item",{attrs:{label:"涉诈号码来源扩展"}},[t("el-input",{model:{value:a.dataForm.originalTypeExtend,callback:function(t){a.$set(a.dataForm,"originalTypeExtend",t)},expression:"dataForm.originalTypeExtend"}})],1)],1),t("el-col",{attrs:{span:8}},[t("el-form-item",{attrs:{label:"发现时间"}},[t("el-input",{model:{value:a.dataForm.foundTime,callback:function(t){a.$set(a.dataForm,"foundTime",t)},expression:"dataForm.foundTime"}})],1)],1)],1)],1)]),t("div",{staticClass:"detail-desc"},[t("div",{staticClass:"detail-info"},[t("h3",{staticClass:"tit"},[a._v("号码处置信息")]),t("el-row",[t("el-col",{attrs:{span:8}},[t("el-form-item",{attrs:{label:"处置状态"}},[t("el-input",{model:{value:a.dataForm.dispositionStatus,callback:function(t){a.$set(a.dataForm,"dispositionStatus",t)},expression:"dataForm.dispositionStatus"}})],1)],1),t("el-col",{attrs:{span:8}},[t("el-form-item",{attrs:{label:"处置时间"}},[t("el-input",{model:{value:a.dataForm.dispositionTime,callback:function(t){a.$set(a.dataForm,"dispositionTime",t)},expression:"dataForm.dispositionTime"}})],1)],1)],1)],1)]),t("div",{staticClass:"detail-desc"},[t("div",{staticClass:"detail-info"},[t("h3",{staticClass:"tit"},[a._v("诈骗分类信息")]),t("el-row",[t("el-col",{attrs:{span:8}},[t("el-form-item",{attrs:{label:"信息二级分类"}},[t("el-input",{model:{value:a.dataForm.infoTypeTwoName,callback:function(t){a.$set(a.dataForm,"infoTypeTwoName",t)},expression:"dataForm.infoTypeTwoName"}})],1)],1),t("el-col",{attrs:{span:8}},[t("el-form-item",{attrs:{label:"信息三级分类"}},[t("el-input",{model:{value:a.dataForm.fakeCategoryName,callback:function(t){a.$set(a.dataForm,"fakeCategoryName",t)},expression:"dataForm.fakeCategoryName"}})],1)],1),t("el-col",{attrs:{span:8}},[t("el-form-item",{attrs:{label:"信息四级分类"}},[t("el-input",{model:{value:a.dataForm.fakeTarget,callback:function(t){a.$set(a.dataForm,"fakeTarget",t)},expression:"dataForm.fakeTarget"}})],1)],1),t("el-col",{attrs:{span:8}},[t("el-form-item",{attrs:{label:"诈骗类型"}},[t("el-input",{model:{value:a.dataForm.fraudTypeName,callback:function(t){a.$set(a.dataForm,"fraudTypeName",t)},expression:"dataForm.fraudTypeName"}})],1)],1)],1)],1)]),t("div",{staticClass:"detail-desc"},[t("div",{staticClass:"detail-info"},[t("h3",{staticClass:"tit"},[a._v("上报信息")]),t("el-row",[t("el-col",{attrs:{span:8}},[t("el-form-item",{attrs:{label:"上报批次id"}},[t("el-input",{model:{value:a.dataForm.commandId,callback:function(t){a.$set(a.dataForm,"commandId",t)},expression:"dataForm.commandId"}})],1)],1),t("el-col",{attrs:{span:8}},[t("el-form-item",{attrs:{label:"上报集团日期"}},[t("el-input",{model:{value:a.dataForm.reportDate,callback:function(t){a.$set(a.dataForm,"reportDate",t)},expression:"dataForm.reportDate"}})],1)],1)],1)],1)])]),t("div",{staticClass:"card-footer"},[t("el-button",{on:{click:a.backPage}},[a._v("关闭")])],1)],1)],1)},i=[],s=(e("7f7f"),e("ed08")),l=e("af85"),r={name:"detailNoteData",components:{},data:function(){return{dataForm:{phoneNumber:"",isp:"",location:"",originalType:"",markNum:"",originalTypeExtend:"",foundTime:"",dispositionStatus:"",dispositionTime:"",infoTypeTwoName:"",fakeCategoryName:"",fakeTarget:"",fraudTypeName:"",commandId:"",reportDate:""},id:""}},computed:{},watch:{},created:function(){},activated:function(){this.id!=this.$route.query.id&&(this.id=this.$route.query.id,this.getdataForm())},mounted:function(){},methods:{backPage:function(){var a=this;this.$store.state.contentTabs=this.$store.state.contentTabs.filter((function(t){return t.name!==a.$store.state.contentTabsActiveName})),this.$router.push({path:"dataset-data1-number"})},getdataForm:function(){var a=this;this.$http.get("/datamanage/fraudulentPhone/info",{params:{id:this.$route.query.id}}).then((function(t){a.dataForm=t.data.data;var e=["originalType","isp","originalTypeExtend","fakeCategory","infoTypeTwo","dispositionStatus","fraudType"];e.forEach((function(t){null!==a.dataForm[t]&&(a.dataForm[t]=Object(s["c"])(t,String(a.dataForm[t])))}));var o=["dstCity","dstProvince","dstCountry"];o.forEach((function(t){null!==a.dataForm[t]&&(a.dataForm[t]=Object(l["a"])(String(a.dataForm[t]))?Object(l["a"])(String(a.dataForm[t])):a.dataForm[t])}))}))}}},n=r,d=(e("4508"),e("2877")),m=Object(d["a"])(n,o,i,!1,null,"08ce03b2",null);t["default"]=m.exports},af85:function(a,t,e){"use strict";function o(a){var t={156:"中国",32e4:"江苏省",320100:"南京市",320200:"无锡市",320300:"徐州市",320400:"常州市",320500:"苏州市",320600:"南通市",320700:"连云港市",320800:"淮安市",320900:"盐城市",321e3:"扬州市",321100:"镇江市",321200:"泰州市",321300:"宿迁市"};return t[a]}e.d(t,"a",(function(){return o}))},fb12:function(a,t,e){}}]);