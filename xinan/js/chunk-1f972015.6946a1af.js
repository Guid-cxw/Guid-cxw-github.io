(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1f972015","chunk-514be24a","chunk-2d21f098"],{"0cdf":function(t,e,a){"use strict";a("abe2")},"0e47":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t._self._c;return e("el-dialog",{attrs:{visible:t.visible,title:"IVR外呼详情",width:"1200px","close-on-click-modal":!1,"close-on-press-escape":!1,top:"2%"},on:{"update:visible":function(e){t.visible=e},close:t.closeHandle}},[e("el-form",{ref:"dataForm",attrs:{model:t.dataForm,inline:!0,"label-position":"right","label-width":"150px",disabled:""}},[e("div",{staticClass:"detail-desc"},[e("div",{staticClass:"detail-info"},[e("el-row",[e("el-col",{attrs:{span:8}},[e("el-form-item",{attrs:{label:"用户标识"}},[e("el-input",{model:{value:t.dataForm.userId,callback:function(e){t.$set(t.dataForm,"userId",e)},expression:"dataForm.userId"}})],1)],1),e("el-col",{attrs:{span:8}},[e("el-form-item",{attrs:{label:"预警号码"}},[e("el-input",{model:{value:t.dataForm.msisdn,callback:function(e){t.$set(t.dataForm,"msisdn",e)},expression:"dataForm.msisdn"}})],1)],1),e("el-col",{attrs:{span:8}},[e("el-form-item",{attrs:{label:"预警号码归属地市"}},[e("el-input",{model:{value:t.dataForm.regionId,callback:function(e){t.$set(t.dataForm,"regionId",e)},expression:"dataForm.regionId"}})],1)],1),e("el-col",{attrs:{span:8}},[e("el-form-item",{attrs:{label:"年龄"}},[e("el-input",{model:{value:t.dataForm.age,callback:function(e){t.$set(t.dataForm,"age",e)},expression:"dataForm.age"}})],1)],1),e("el-col",{attrs:{span:8}},[e("el-form-item",{staticClass:"fold_label",attrs:{label:"最近一次主叫的\n对端号码"}},[e("el-input",{model:{value:t.dataForm.otherParty,callback:function(e){t.$set(t.dataForm,"otherParty",e)},expression:"dataForm.otherParty"}})],1)],1),e("el-col",{attrs:{span:8}},[e("el-form-item",{attrs:{label:"被叫时间"}},[e("el-input",{model:{value:t.dataForm.callDate,callback:function(e){t.$set(t.dataForm,"callDate",e)},expression:"dataForm.callDate"}})],1)],1),e("el-col",{attrs:{span:8}},[e("el-form-item",{attrs:{label:"预警时间"}},[e("el-input",{model:{value:t.dataForm.warnTime,callback:function(e){t.$set(t.dataForm,"warnTime",e)},expression:"dataForm.warnTime"}})],1)],1),e("el-col",{attrs:{span:8}},[e("el-form-item",{attrs:{label:"预警模型编号"}},[e("el-input",{model:{value:t.dataForm.roamType,callback:function(e){t.$set(t.dataForm,"roamType",e)},expression:"dataForm.roamType"}})],1)],1),e("el-col",{attrs:{span:8}},[e("el-form-item",{attrs:{label:"预警模型名称"}},[e("el-input",{model:{value:t.dataForm.roamTypeDesc,callback:function(e){t.$set(t.dataForm,"roamTypeDesc",e)},expression:"dataForm.roamTypeDesc"}})],1)],1),e("el-col",{attrs:{span:8}},[e("el-form-item",{attrs:{label:"通话地"}},[e("el-input",{model:{value:t.dataForm.callArea,callback:function(e){t.$set(t.dataForm,"callArea",e)},expression:"dataForm.callArea"}})],1)],1),e("el-col",{attrs:{span:8}},[e("el-form-item",{attrs:{label:"通话基站"}},[e("el-input",{model:{value:t.dataForm.telephoneBaseStation,callback:function(e){t.$set(t.dataForm,"telephoneBaseStation",e)},expression:"dataForm.telephoneBaseStation"}})],1)],1),e("el-col",{attrs:{span:8}},[e("el-form-item",{attrs:{label:"通话小区"}},[e("el-input",{model:{value:t.dataForm.telephoneVillage,callback:function(e){t.$set(t.dataForm,"telephoneVillage",e)},expression:"dataForm.telephoneVillage"}})],1)],1),e("el-col",{attrs:{span:8}},[e("el-form-item",{attrs:{label:"IMEI"}},[e("el-input",{model:{value:t.dataForm.imei,callback:function(e){t.$set(t.dataForm,"imei",e)},expression:"dataForm.imei"}})],1)],1)],1)],1)])]),e("template",{slot:"footer"},[e("el-button",{on:{click:t.closeHandle}},[t._v("关闭")])],1)],2)},l=[],r=a("ade3"),o=a("ed08"),i={props:{message:{type:String}},data:function(){var t;return{visible:!1,id:"",dataForm:(t={outboundDate:"",calledPhone:"",warningPhone:"",warningPhoneCity:"",warnPhoneStatus:""},Object(r["a"])(t,"warnPhoneStatus",""),Object(r["a"])(t,"calledDate",""),Object(r["a"])(t,"calledDate",""),Object(r["a"])(t,"warnPhoneStatus",""),Object(r["a"])(t,"warnPhoneStatus",""),Object(r["a"])(t,"callArea",""),Object(r["a"])(t,"telephoneBaseStation",""),Object(r["a"])(t,"telephoneVillage",""),Object(r["a"])(t,"imei",""),t)}},components:{},computed:{},methods:{init:function(){this.visible=!0},closeHandle:function(){this.visible=!1,this.$emit("close")},detail:function(t){var e=this;this.dataForm=t;var a=["warnPhoneStatus"];a.forEach((function(t){null!==e.dataForm[t]&&(e.dataForm[t]=Object(o["c"])(t,String(e.dataForm[t])))}))}}},s=i,c=(a("0cdf"),a("2877")),d=Object(c["a"])(s,n,l,!1,null,null,null);e["default"]=d.exports},"705b":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"note-container"},[e("el-card",{staticClass:"aui-card--fill",attrs:{shadow:"never"}},[e("el-form",{ref:"studyForm",attrs:{inline:!0,model:t.dataForm},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.searchData()}}},[e("el-form-item",{attrs:{label:"预警号码"}},[e("el-input",{attrs:{placeholder:"预警号码",clearable:""},model:{value:t.dataForm.msisdn,callback:function(e){t.$set(t.dataForm,"msisdn",e)},expression:"dataForm.msisdn"}})],1),e("el-form-item",{attrs:{label:"预警号码归属地市",prop:"regionId"}},[e("el-select",{attrs:{clearable:"",placeholder:"请选择"},model:{value:t.dataForm.regionId,callback:function(e){t.$set(t.dataForm,"regionId",e)},expression:"dataForm.regionId"}},t._l(t.regionV2,(function(t){return e("el-option",{key:t.dictValue,attrs:{label:t.dictLabel,value:t.dictValue}})})),1)],1),e("el-form-item",{attrs:{label:"是否涉诈",prop:"isFraud"}},[e("el-select",{attrs:{placeholder:"请选择",clearable:""},model:{value:t.dataForm.isFraud,callback:function(e){t.$set(t.dataForm,"isFraud",e)},expression:"dataForm.isFraud"}},t._l(t.arr,(function(t){return e("el-option",{key:t.dictValue,attrs:{label:t.dictLabel,value:t.dictValue}})})),1)],1),e("el-form-item",{attrs:{label:"是否涉案"}},[e("el-select",{attrs:{placeholder:"请选择"},model:{value:t.dataForm.isInvolved,callback:function(e){t.$set(t.dataForm,"isInvolved",e)},expression:"dataForm.isInvolved"}},[e("el-option",{attrs:{label:"是",value:"1"}}),e("el-option",{attrs:{label:"否",value:"0"}})],1)],1),e("el-form-item",{attrs:{label:"是否接通"}},[e("el-select",{attrs:{placeholder:"请选择"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},[e("el-option",{attrs:{label:"是",value:"1"}}),e("el-option",{attrs:{label:"否",value:"0"}})],1)],1),e("el-form-item",{attrs:{label:"最近一次主叫的对端号码"}},[e("el-input",{attrs:{placeholder:"最近一次主叫的对端号码",clearable:""},model:{value:t.dataForm.otherParty,callback:function(e){t.$set(t.dataForm,"otherParty",e)},expression:"dataForm.otherParty"}})],1),e("el-form-item",{attrs:{label:"预警模型编码"}},[e("el-input",{attrs:{placeholder:"预警模型编码",clearable:""},model:{value:t.dataForm.roamType,callback:function(e){t.$set(t.dataForm,"roamType",e)},expression:"dataForm.roamType"}})],1),e("el-form-item",{attrs:{label:"预警模型名称"}},[e("el-input",{attrs:{placeholder:"预警模型名称",clearable:""},model:{value:t.dataForm.roamTypeDesc,callback:function(e){t.$set(t.dataForm,"roamTypeDesc",e)},expression:"dataForm.roamTypeDesc"}})],1),e("el-form-item",{attrs:{label:"通话地"}},[e("el-input",{attrs:{placeholder:"通话地",clearable:""},model:{value:t.dataForm.callArea,callback:function(e){t.$set(t.dataForm,"callArea",e)},expression:"dataForm.callArea"}})],1),e("el-form-item",{attrs:{label:"通话基站"}},[e("el-input",{attrs:{placeholder:"通话基站",clearable:""},model:{value:t.dataForm.telephoneBaseStation,callback:function(e){t.$set(t.dataForm,"telephoneBaseStation",e)},expression:"dataForm.telephoneBaseStation"}})],1),e("el-form-item",{attrs:{label:"通话小区"}},[e("el-input",{attrs:{placeholder:"通话小区",clearable:""},model:{value:t.dataForm.telephoneVillage,callback:function(e){t.$set(t.dataForm,"telephoneVillage",e)},expression:"dataForm.telephoneVillage"}})],1),e("el-form-item",{attrs:{label:"IMEI"}},[e("el-input",{attrs:{placeholder:"IMEI",clearable:""},model:{value:t.dataForm.imei,callback:function(e){t.$set(t.dataForm,"imei",e)},expression:"dataForm.imei"}})],1),e("el-form-item",{attrs:{label:"统计日期"}},[e("el-date-picker",{attrs:{type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","value-format":"yyyy-MM-dd"},model:{value:t.daterange,callback:function(e){t.daterange=e},expression:"daterange"}})],1),e("el-form-item",{attrs:{label:"被叫日期"}},[e("el-date-picker",{attrs:{type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","value-format":"yyyy-MM-dd"},model:{value:t.daterange4,callback:function(e){t.daterange4=e},expression:"daterange4"}})],1),e("el-form-item",{attrs:{label:"预警时间"}},[e("el-date-picker",{attrs:{type:"datetimerange","range-separator":"至","start-placeholder":"开始时间","end-placeholder":"结束时间","value-format":"yyyy-MM-dd HH:mm:ss"},model:{value:t.daterange3,callback:function(e){t.daterange3=e},expression:"daterange3"}})],1),e("el-form-item",[e("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.searchData()}}},[t._v("查询")])],1),e("el-form-item",[e("el-button",{on:{click:function(e){return t.resetting()}}},[t._v("重置")])],1)],1),e("div",{staticClass:"btn-desc"},[e("el-button",{attrs:{type:"success"},on:{click:t.exportExl}},[t._v("导出")]),e("el-button",{attrs:{type:"danger"},on:{click:t.delOutbound}},[t._v("删除")])],1),e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.dataListLoading,expression:"dataListLoading"}],ref:"tables",staticClass:"tab",staticStyle:{width:"100%"},attrs:{data:t.dataList,border:"","header-cell-style":{background:"rgba(194, 210, 255, 0.3)",color:"#040415"},"row-style":t.iRowStyle,"cell-style":t.iCellStyle,"header-row-style":t.iHeaderRowStyle,"row-key":t.getRowsKey},on:{"selection-change":t.dataListSelectionChangeHandle}},[e("el-table-column",{attrs:{type:"selection","header-align":"center",align:"center",width:"50","reserve-selection":!0}}),e("el-table-column",{attrs:{prop:"statDate",label:"统计日期",align:"center",width:"120"}}),e("el-table-column",{attrs:{prop:"userId",label:"用户标识",align:"center",width:"150"}}),e("el-table-column",{attrs:{prop:"msisdn",label:"预警号码",align:"center",width:"120"}}),e("el-table-column",{attrs:{prop:"regionId",label:"预警号码归属地市",align:"center",width:"140"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t.$getDictLabel("regionV2",e.row.regionId)))]}}])}),e("el-table-column",{attrs:{prop:"age",label:"年龄",align:"center",width:"120"}}),e("el-table-column",{attrs:{label:"是否涉诈",prop:"isFraud",align:"center"},scopedSlots:t._u([{key:"default",fn:function(a){var n=a.row;return[0==n.isFraud?e("span",[t._v("否")]):t._e(),1==n.isFraud?e("span",[t._v("是")]):t._e()]}}])}),e("el-table-column",{attrs:{prop:"isInvolved",label:"是否涉案"},scopedSlots:t._u([{key:"default",fn:function(a){return[1==a.row.isInvolved?e("span",[t._v("是")]):t._e(),0==a.row.isInvolved?e("span",[t._v("否")]):t._e()]}}])}),e("el-table-column",{attrs:{prop:"callResultCode",label:"是否接通"},scopedSlots:t._u([{key:"default",fn:function(a){return[a.row.callResultCode>=0&&a.row.callResultCode<=7?e("span",[t._v("是")]):e("span",[t._v("否")])]}}])}),e("el-table-column",{attrs:{prop:"otherParty",label:"最后一次主叫的对端号码",align:"center",width:"120"}}),e("el-table-column",{attrs:{prop:"callDate",label:"被叫时间",align:"center",width:"120"}}),e("el-table-column",{attrs:{prop:"warnTime",label:"预警时间",align:"center",width:"180"}}),e("el-table-column",{attrs:{prop:"roamType",label:"预警模型编码",align:"center",width:"120"}}),e("el-table-column",{attrs:{prop:"roamTypeDesc",label:"预警模型名称",align:"center",width:"150"}}),e("el-table-column",{attrs:{prop:"callArea",label:"通话地",align:"center",width:"140"}}),e("el-table-column",{attrs:{prop:"telephoneBaseStation",label:"通话基站",align:"center",width:"120"}}),e("el-table-column",{attrs:{prop:"telephoneVillage",label:"通话小区",align:"center",width:"120"}}),e("el-table-column",{attrs:{prop:"imei",label:"IMEI",align:"center",width:"150"}}),e("el-table-column",{attrs:{label:"操作",align:"center",width:"95",fixed:"right"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-button",{attrs:{type:"text"},on:{click:function(e){return t.detail(a.row)}}},[t._v("详情")])]}}])})],1),e("el-pagination",{attrs:{"current-page":t.page,"page-sizes":[10,20,50,100],"page-size":t.limit,total:t.total,layout:"total, sizes, prev, pager, next, jumper"},on:{"update:currentPage":function(e){t.page=e},"update:current-page":function(e){t.page=e},"size-change":t.pageSizeChangeHandle,"current-change":t.pageCurrentChangeHandle}})],1),t.detailVisible?e("detail",{ref:"detailRef",on:{close:function(e){t.detailVisible=!1}}}):t._e()],1)},l=[],r=(a("8e6e"),a("ac6a"),a("456d"),a("c5f6"),a("ade3")),o=a("d7b1"),i=a("0e47"),s=(a("dea3"),a("ed08")),c=a("a865");function d(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function u(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?d(Object(a),!0).forEach((function(e){Object(r["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var m={name:"outBound",props:{},mixins:[o["a"]],components:{detail:i["default"]},data:function(){return{mixinViewModuleOptions:{exportExlUrl:"/datamanage/ivrCall/export"},dataForm:{msisdn:"",otherParty:"",roamType:"",regionId:"",telephoneBaseStation:"",telephoneVillage:"",imei:"",roamTypeDesc:"",callArea:"",startstatDate:"",endstatDate:"",startwarnTime:"",endwarnTime:"",startcallDate:"",endcallDate:"",isFraud:"",isInvolved:""},warnPhoneStatuslist:Object(s["b"])("warnPhoneStatus"),isExlist:Object(s["b"])("isEx"),syncStatuslist:Object(s["b"])("syncStatus"),regionV2:Object(s["b"])("regionV2"),daterange:[],daterange2:[],daterange3:[],daterange4:[],pid:"320000",detailVisible:!1,locationTypeList:[],banBusinessType:[],arr:Object(s["b"])("isFraud")}},computed:{},watch:{daterange:function(t){this.dataForm.startstatDate=null!==t?t[0]:"",this.dataForm.endstatDate=null!==t?t[1]:""},daterange2:function(t){this.dataForm.outboundStartDate=null!==t?t[0]:"",this.dataForm.outboundEndDate=null!==t?t[1]:""},daterange3:function(t){this.dataForm.startwarnTime=null!==t?t[0]:"",this.dataForm.endwarnTime=null!==t?t[1]:""},daterange4:function(t){this.dataForm.startcallDate=null!==t?t[0]:"",this.dataForm.endcallDate=null!==t?t[1]:""}},mounted:function(){},created:function(){this.getregionlist()},activated:function(){this.getListData()},methods:{iRowStyle:function(t){t.row,t.rowIndex;return"height:30px"},iHeaderRowStyle:function(t){t.row,t.rowIndex;return"height:30px"},iCellStyle:function(t){t.row,t.column,t.rowIndex,t.columnIndex;return"padding:0px"},searchData:function(){this.page=1,this.getListData()},resetting:function(){this.dataForm=this.$options.data().dataForm,this.daterange=[],this.daterange2=[],this.daterange3=[],this.daterange4=[],this.getListData()},getregionlist:function(){var t=this,e={pid:this.pid};Object(c["j"])(e).then((function(e){t.locationTypeList=e.data.data}))},getListData:function(){var t=this;this.dataListLoading=!0,this.$http.get("/datamanage/ivrCall/page",{params:u({page:this.page,limit:this.limit},this.dataForm)}).then((function(e){if(0!==e.data.code)return t.dataList=[],t.total=0,t.dataListLoading=!1,t.$message.error(e.data.msg);var a=e.data.data;t.total=Number(a.total),t.dataList=a.list,t.dataListLoading=!1}))},detail:function(t){var e=this;this.detailVisible=!0,this.$nextTick((function(){e.$refs["detailRef"].init(),e.$refs["detailRef"].detail(t)}))},delOutbound:function(){var t=this,e=[];if(!(this.dataListSelections.length>0))return this.$message.warning("请勾选数据");e=this.dataListSelections.map((function(t){return t.id})),this.$confirm("根据检索条件，共计将删除".concat(e.length,"条数据, 是否继续?"),"删除",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",callback:function(){},beforeClose:function(a,n,l){"confirm"===a?t.$http.post("/datamanage/ivrCall/delete",e).then((function(e){if(0!==e.data.code)return l(),n.confirmButtonLoading=!1,t.$message.error(e.data.msg);n.confirmButtonLoading=!1,l(),t.getListData(),t.$refs["tables"].clearSelection(),t.$message.success("删除成功")})):l()}}).finally((function(){ctx.confirmButtonLoading=!1})).catch((function(){ctx.confirmButtonLoading=!1})),this.page>1&&(this.total-1)%this.limit===0&&(this.page-=1)}}},p=m,f=(a("9275"),a("2877")),b=Object(f["a"])(p,n,l,!1,null,"25a3e6e1",null);e["default"]=b.exports},9275:function(t,e,a){"use strict";a("bb86")},a865:function(t,e,a){"use strict";a.d(e,"j",(function(){return l})),a.d(e,"g",(function(){return r})),a.d(e,"h",(function(){return o})),a.d(e,"i",(function(){return i})),a.d(e,"a",(function(){return s})),a.d(e,"k",(function(){return c})),a.d(e,"d",(function(){return d})),a.d(e,"e",(function(){return u})),a.d(e,"b",(function(){return m})),a.d(e,"f",(function(){return p})),a.d(e,"c",(function(){return f}));var n=a("b775"),l=function(t){return Object(n["a"])({method:"GET",url:"/system/sys/region/list",params:t})},r=function(t){return Object(n["a"])({method:"GET",url:"/dataprocess/catAssist/page",params:t})},o=function(t){return Object(n["a"])({method:"get",url:"/dataprocess/catAssist/".concat(t)})},i=function(t){return Object(n["a"])({method:"get",url:"/dataprocess/catAssist/downLoadFile?".concat(t),withCredentials:!1,timeout:36e4,responseType:"blob"})},s=function(t){return Object(n["a"])({method:"POST",url:"/dataprocess/catAssist/delete",data:t})},c=function(t,e){return Object(n["a"])({method:"POST",url:t?"/dataprocess/catAssist/update":"/dataprocess/catAssist",data:e})};function d(t){return Object(n["a"])({method:"get",url:"/datamanage/dataStatOverview/exportReportDataStat",params:t,withCredentials:!1,timeout:36e4,responseType:"blob"})}function u(t){return Object(n["a"])({method:"get",url:"/datamanage/dataStatOverview/exportIssueDataStat",params:t,withCredentials:!1,timeout:36e4,responseType:"blob"})}function m(t){return Object(n["a"])({method:"get",url:"/datamanage/dataStatOverview/exportReportCmccStat",params:t,withCredentials:!1,timeout:36e4,responseType:"blob"})}function p(t){return Object(n["a"])({method:"get",url:"/datamanage/dataStatOverview/exportCmccStat",params:t,withCredentials:!1,timeout:36e4,responseType:"blob"})}function f(t){return Object(n["a"])({method:"get",url:"/datamanage/dataStatOverview/exportReportGroupDataStat",params:t,withCredentials:!1,timeout:36e4,responseType:"blob"})}},abe2:function(t,e,a){},bb86:function(t,e,a){},d7b1:function(t,e,a){"use strict";a("8e6e"),a("ac6a"),a("456d");var n=a("ade3"),l=a("4328"),r=a.n(l),o=a("dea3");function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){Object(n["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}e["a"]={data:function(){return Object(n["a"])({mixinViewModuleOptions:{exportExlUrl:""},dataList:[],dataListLoading:!1,page:1,limit:10,total:0,scrollTops:0,dataListSelections:[],uploadLoading:!1,uploadVisible:!1,title:"",url:"",downLoadUrl:""},"dataListSelections",[])},activated:function(){window.addEventListener("scroll",this.handleScroll,!0),this.listenerFunction()},deactivated:function(){window.removeEventListener("scroll",this.handleScroll,!0)},methods:{searchData:function(){this.dataListSelections.length>0&&this.$refs["tables"].clearSelection(),this.page=1,this.getListData()},pageSizeChangeHandle:function(t){this.page=1,this.limit=t,this.getListData()},pageCurrentChangeHandle:function(t){this.page=t,this.getListData()},getRowsKey:function(t){return t.id},dataListSelectionChangeHandle:function(t){this.dataListSelections=t},listenerFunction:function(){var t=this;this.$nextTick((function(){document.documentElement.scrollTop=t.scrollTops}))},getScrollPosition:function(){var t=document.documentElement.scrollTop;this.scrollTops=t},handleScroll:function(t){this.scrollTops=document.documentElement.scrollTop},exportExl:function(){var t=this,e=[];this.dataListSelections.length>0&&(e=this.dataListSelections.map((function(t){return t.id}))),this.$confirm("根据检索条件，共计将导出".concat(e.length>0?e.length:this.total,"条数据, 是否继续?"),"批量导出",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",callback:function(){},beforeClose:function(a,n,l){if("confirm"===a){n.confirmButtonLoading=!0;var i=r.a.stringify(s(s({token:t.$getUserToken("token")},t.dataForm),{},{ids:e.join()}));t.$http({method:"get",withCredentials:!1,timeout:36e4,responseType:"blob",url:"".concat(t.mixinViewModuleOptions.exportExlUrl,"?").concat(i)}).then((function(e){Object(o["a"])(e.data,t.$route.meta.title)})),n.confirmButtonLoading=!1,t.$refs["tables"].clearSelection(),l()}else l()}}).finally((function(){ctx.confirmButtonLoading=!1})).catch((function(){ctx.confirmButtonLoading=!1}))},del:function(t){var e=this,a=[];a.push(t),this.$confirm("此操作将删除该上报记录，请确认操作！","删除",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",callback:function(){},beforeClose:function(t,n,l){"confirm"===t?e.$http.post("/dataprocess/catAssist/delete",a).then((function(t){if(0!==t.data.code)return l(),n.confirmButtonLoading=!1,e.$message.error(t.data.msg);n.confirmButtonLoading=!1,l(),e.getListData(),e.$message.success("删除成功")})):l()}}).finally((function(){ctx.confirmButtonLoading=!1})).catch((function(){ctx.confirmButtonLoading=!1})),this.page>1&&(this.total-1)%this.limit===0&&(this.page-=1)}}}}}]);