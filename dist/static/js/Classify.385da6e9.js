(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Classify"],{"2c01":function(t,e,n){},"668b":function(t,e,n){"use strict";n("2c01")},"6fc1":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"jd_main jd_classify"},[n("HeaderBar",{attrs:{title:"分类",back:!0}}),n("section",{staticClass:"jd_classify_container"},[n("div",{staticClass:"jd_tab"},t._l(t.tabData,(function(e,a){return n("span",{key:e.id,staticClass:"jd_tab_item",class:{active:a===t.tabIndex},domProps:{textContent:t._s(e.name)},on:{click:function(e){return t.changeTab(a)}}})})),0),n("section",{staticClass:"jd_content"},t._l(t.goodList,(function(e){return n("span",{key:e.id,staticClass:"jd_content_item",on:{click:function(n){return t.goToDetail(e)}}},[n("figure",{staticClass:"jd_logo",style:{background:"url('"+e.primaryPicUrl+"') no-repeat center/cover"}}),n("h1",{staticClass:"title",domProps:{textContent:t._s(e.name)}})])})),0)])],1)},r=[],s=(n("6a61"),n("2e91")),i=n("49c9"),c=n("ce0e"),o={name:"classify",components:{HeaderBar:c["a"]},data:function(){return{tabData:[],goodList:[],loadEnd:!1,tabIndex:0,tabConfig:{}}},watch:{tabConfig:{handler:function(t){var e=this;e.getGoodsData(t.id)},deep:!0}},mounted:function(){var t=this;t.getOrderList()},methods:{goToDetail:function(t){var e=this;e.$router.push({path:"commodity",query:{id:t.id}})},getGoodsData:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var a,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e,a.Indicator.open(),n.prev=2,n.next=5,Object(i["v"])({pageSize:1e3,id:t,pageNum:1});case 5:r=n.sent,a.goodList=r.rows[0].goodsList,n.next=12;break;case 9:n.prev=9,n.t0=n["catch"](2),console.log(n.t0.message||"获取商品数据失败");case 12:return n.prev=12,a.loadEnd=!0,a.Indicator.close(),n.finish(12);case 16:case"end":return n.stop()}}),n,null,[[2,9,12,16]])})))()},changeTab:function(t){var e=this;e.tabIndex!==t&&(e.tabIndex=t,e.tabConfig=e.tabData[t])},getOrderList:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t,e.prev=1,e.next=4,Object(i["w"])({pageSize:1e3,pageNum:1});case 4:a=e.sent,n.tabData=a.rows,n.tabConfig=n.tabData[n.tabIndex],e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](1),n.Toast(e.t0.msg||"获取分类信息失败");case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))()}}},u=o,l=(n("9310"),n("5d22")),d=Object(l["a"])(u,a,r,!1,null,"3e9165aa",null);e["default"]=d.exports},9310:function(t,e,n){"use strict";n("f19f")},ce0e:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"jd-header"},[n("span",{staticClass:"jd-header-item return-back",class:{show:t.back},on:{click:function(e){return e.stopPropagation(),t.returnBack(e)}}},[n("i")]),n("span",{staticClass:"jd-header-item",domProps:{textContent:t._s(t.title)}}),n("span",{staticClass:"jd-header-item",domProps:{textContent:t._s(t.subTitle)},on:{click:function(e){return e.stopPropagation(),t.subTitleEvent(e)}}})])},r=[],s={props:{title:{default:function(){return""},type:String},back:{default:function(){return!1},type:Boolean},subTitle:{default:function(){return""},type:String}},methods:{returnBack:function(){var t=this;t.$emit("returnOriginal"),t.$router.back(-1)},subTitleEvent:function(){var t=this;t.$emit("handleEvent")}}},i=s,c=(n("668b"),n("5d22")),o=Object(c["a"])(i,a,r,!1,null,"dbf454be",null);e["a"]=o.exports},f19f:function(t,e,n){}}]);
//# sourceMappingURL=Classify.385da6e9.js.map