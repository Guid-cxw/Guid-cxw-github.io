(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5d3aaabb","chunk-2d21f098"],{"41ff":function(t,e,n){"use strict";n("71c6")},"490b":function(t,e,n){"use strict";n.r(e);n("c5f6");var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"gather-task"},[e("el-dialog",{staticClass:"Dialog",attrs:{visible:t.diaLogClose,title:t.title,"close-on-click-modal":!1,"close-on-press-escape":!1},on:{"update:visible":function(e){t.diaLogClose=e},close:t.closeDialog}},[e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.dataListLoading,expression:"dataListLoading"}],ref:"tables",staticClass:"tab",staticStyle:{width:"90%",margin:"0 auto"},attrs:{data:t.dataList,border:"","header-cell-style":{background:"rgba(194, 210, 255, 0.3)",color:"#040415"},"row-key":t.getRowsKey},on:{"selection-change":t.dataListSelectionChangeHandle}},[e("el-table-column",{attrs:{prop:"city",align:"center",label:"地市公司"}}),e("el-table-column",{attrs:{prop:"feedbackUsername",label:"反馈人",align:"center"}}),e("el-table-column",{attrs:{prop:"feedbackDate",label:"反馈时间",align:"center"}}),e("el-table-column",{attrs:{prop:"feedbackStatus",label:"反馈状态",align:"center"},scopedSlots:t._u([{key:"default",fn:function(n){return[e("el-tag",{attrs:{type:t.feedbackStatusType(Number(n.row.feedbackStatus)).type}},[t._v("\n                        "+t._s(t.feedbackStatusType(Number(n.row.feedbackStatus)).txt)+"\n                    ")])]}}])})],1)],1)],1)},i=[],o=n("d7b1"),s={name:"feedback",components:{},props:{detailId:{type:String,default:""}},mixins:[o["a"]],data:function(){return{diaLogClose:!1,isFlag:!1,timer:null,title:"反馈列表"}},computed:{feedbackStatusType:function(){return function(t){var e={};switch(Number(t)){case 0:e.txt="未反馈",e.type="danger";break;case 1:e.txt="已反馈",e.type="success";break;default:e.txt="-",e.type="info";break}return e}}},created:function(){},mounted:function(){},methods:{init:function(){var t=this;this.diaLogClose=!0,this.$nextTick((function(){t.getListData()}))},closeDialog:function(){var t=this;this.diaLogClose=!1,this.timer&&clearTimeout(this.timer),this.timer=setTimeout((function(){t.isFlag=!1}),500)},getListData:function(){var t=this;this.dataListLoading=!0,this.$http.get("/workorder/wobase/feedback/list",{params:{id:this.detailId}}).then((function(e){if(0!==e.data.code)return t.dataList=[],t.dataListLoading=!1,t.$message.error(e.data.msg);var n=e.data.data;t.dataList=n,t.dataListLoading=!1}))}}},c=s,r=(n("41ff"),n("2877")),l=Object(r["a"])(c,a,i,!1,null,"380e0c6e",null);e["default"]=l.exports},"71c6":function(t,e,n){},d7b1:function(t,e,n){"use strict";n("8e6e"),n("ac6a"),n("456d");var a=n("ade3"),i=n("4328"),o=n.n(i),s=n("dea3");function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){Object(a["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}e["a"]={data:function(){return Object(a["a"])({mixinViewModuleOptions:{exportExlUrl:""},dataList:[],dataListLoading:!1,page:1,limit:10,total:0,scrollTops:0,dataListSelections:[],uploadLoading:!1,uploadVisible:!1,title:"",url:"",downLoadUrl:""},"dataListSelections",[])},activated:function(){window.addEventListener("scroll",this.handleScroll,!0),this.listenerFunction()},deactivated:function(){window.removeEventListener("scroll",this.handleScroll,!0)},methods:{searchData:function(){this.dataListSelections.length>0&&this.$refs["tables"].clearSelection(),this.page=1,this.getListData()},pageSizeChangeHandle:function(t){this.page=1,this.limit=t,this.getListData()},pageCurrentChangeHandle:function(t){this.page=t,this.getListData()},getRowsKey:function(t){return t.id},dataListSelectionChangeHandle:function(t){this.dataListSelections=t},listenerFunction:function(){var t=this;this.$nextTick((function(){document.documentElement.scrollTop=t.scrollTops}))},getScrollPosition:function(){var t=document.documentElement.scrollTop;this.scrollTops=t},handleScroll:function(t){this.scrollTops=document.documentElement.scrollTop},exportExl:function(){var t=this,e=[];this.dataListSelections.length>0&&(e=this.dataListSelections.map((function(t){return t.id}))),this.$confirm("根据检索条件，共计将导出".concat(e.length>0?e.length:this.total,"条数据, 是否继续?"),"批量导出",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",callback:function(){},beforeClose:function(n,a,i){if("confirm"===n){a.confirmButtonLoading=!0;var c=o.a.stringify(r(r({token:t.$getUserToken("token")},t.dataForm),{},{ids:e.join()}));t.$http({method:"get",withCredentials:!1,timeout:36e4,responseType:"blob",url:"".concat(t.mixinViewModuleOptions.exportExlUrl,"?").concat(c)}).then((function(e){Object(s["a"])(e.data,t.$route.meta.title)})),a.confirmButtonLoading=!1,t.$refs["tables"].clearSelection(),i()}else i()}}).finally((function(){ctx.confirmButtonLoading=!1})).catch((function(){ctx.confirmButtonLoading=!1}))},del:function(t){var e=this,n=[];n.push(t),this.$confirm("此操作将删除该上报记录，请确认操作！","删除",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",callback:function(){},beforeClose:function(t,a,i){"confirm"===t?e.$http.post("/dataprocess/catAssist/delete",n).then((function(t){if(0!==t.data.code)return i(),a.confirmButtonLoading=!1,e.$message.error(t.data.msg);a.confirmButtonLoading=!1,i(),e.getListData(),e.$message.success("删除成功")})):i()}}).finally((function(){ctx.confirmButtonLoading=!1})).catch((function(){ctx.confirmButtonLoading=!1})),this.page>1&&(this.total-1)%this.limit===0&&(this.page-=1)}}}}}]);