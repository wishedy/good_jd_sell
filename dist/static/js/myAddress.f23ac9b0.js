(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["myAddress"],{"2c01":function(e,t,s){},"3b9d":function(e,t,s){},"3c0f":function(e,t,s){"use strict";s("dbe8")},"668b":function(e,t,s){"use strict";s("2c01")},6714:function(e,t,s){"use strict";s("f83a")},"9b5a":function(e,t,s){"use strict";s("3b9d")},b86c:function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",{staticClass:"rouchi-myAddress"},[s("HeaderBar",{attrs:{title:"我的收获地址",back:!0}}),s("section",{directives:[{name:"show",rawName:"v-show",value:e.loadEnd,expression:"loadEnd"}],staticClass:"address-list"},e._l(e.list,(function(t){return s("AddressItem",{key:t.id,attrs:{config:t},on:{handleDelete:e.deleteAddress},nativeOn:{click:function(s){return e.selectAddress(t)}}})})),1),0===e.list.length&&e.loadEnd?s("EmptyAddress"):e._e()],1)},r=[],a=(s("6a61"),s("2e91")),i=s("49c9"),o=s("ce0e"),c=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",{staticClass:"address-item"},[s("div",{staticClass:"user-info"},[s("span",{staticClass:"lable-title"},[e._v("收货人：")]),s("span",{staticClass:"user-receiverName",domProps:{textContent:e._s(e.config.receiverName)}}),s("span",{staticClass:"user-mobile",domProps:{textContent:e._s(e.config.mobile)}}),1===parseInt(e.config.is_default,10)?s("span",{staticClass:"defaultAddress"},[s("i",[e._v("默认")])]):e._e()]),s("div",{staticClass:"user-address"},[s("article",{staticClass:"address-content",domProps:{textContent:e._s("收货地址："+(e.config.province?e.config.province:"")+(e.config.city?e.config.city:"")+"-"+(e.config.district?e.config.district:"")+(e.config.address?e.config.address:""))}}),s("div",{staticClass:"handle-bar"},[s("span",{staticClass:"handle-delete icon",on:{click:function(t){return t.stopPropagation(),e.deleteAddress(t)}}}),s("span",{staticClass:"handle-edit icon",on:{click:function(t){return t.stopPropagation(),e.editAddress(t)}}})])])])},d=[],u={receiverName:"addressItem",props:{config:{default:function(){return{}},type:Object}},methods:{deleteAddress:function(){var e=this;e.$emit("handleDelete",{addr_id:e.config.id})},editAddress:function(){var e=this;e.$router.push({name:"address",query:{id:e.config.id}})}}},l=u,f=(s("6714"),s("5d22")),p=Object(f["a"])(l,c,d,!1,null,"0dbe0fdb",null),m=p.exports,h=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",{staticClass:"empty-address",on:{click:e.addAddress}},[s("figure",{staticClass:"logo"}),s("p",{staticClass:"des"},[e._v("暂无收货地址～点击添加")])])},v=[],g={name:"emptyAddress",methods:{addAddress:function(){var e=this;e.$router.push({name:"address"})}}},b=g,C=(s("3c0f"),Object(f["a"])(b,h,v,!1,null,"597af8dc",null)),w=C.exports,_={name:"myAddress",components:{AddressItem:m,EmptyAddress:w,HeaderBar:o["a"]},data:function(){var e=this,t=e.$route.query.goodNo;return{goodNo:t,loadEnd:!0,list:[]}},mounted:function(){var e=this;document.title="",e.getList()},methods:{selectAddress:function(e){var t=this;t.goodNo&&this.$router.push({path:"/orderDetail/"+t.goodNo,query:{addrId:e.id}})},deleteAddress:function(e){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:s=t,s.MessageBox({title:"提示",message:"确定要删除该收货地址吗？",showCancelButton:!0,showConfirmButton:!0,cancelButtonText:"取消",confirmButtonText:"确定"}).then(function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:"confirm"===t&&(n=null,console.log(n),n&&(s.Toast("已删除"),s.getList()));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 2:case"end":return e.stop()}}),e)})))()},addAddress:function(){var e=this;e.$router.push({name:"address"})},getList:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var s,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return s=e,s.Indicator.open(),t.prev=2,t.next=5,Object(i["s"])();case 5:n=t.sent,console.log(n),s.list=n.rows,t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](2),console.log(t.t0.msg||"获取商品数据失败");case 13:return t.prev=13,s.loadEnd=!0,s.Indicator.close(),t.finish(13);case 17:case"end":return t.stop()}}),t,null,[[2,10,13,17]])})))()}}},k=_,A=(s("9b5a"),Object(f["a"])(k,n,r,!1,null,"7829b931",null));t["default"]=A.exports},ce0e:function(e,t,s){"use strict";var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",{staticClass:"jd-header"},[s("span",{staticClass:"jd-header-item return-back",class:{show:e.back},on:{click:function(t){return t.stopPropagation(),e.returnBack(t)}}},[s("i")]),s("span",{staticClass:"jd-header-item",domProps:{textContent:e._s(e.title)}}),s("span",{staticClass:"jd-header-item",domProps:{textContent:e._s(e.subTitle)},on:{click:function(t){return t.stopPropagation(),e.subTitleEvent(t)}}})])},r=[],a={props:{title:{default:function(){return""},type:String},back:{default:function(){return!1},type:Boolean},subTitle:{default:function(){return""},type:String}},methods:{returnBack:function(){var e=this;e.$emit("returnOriginal"),e.$router.back(-1)},subTitleEvent:function(){var e=this;e.$emit("handleEvent")}}},i=a,o=(s("668b"),s("5d22")),c=Object(o["a"])(i,n,r,!1,null,"dbf454be",null);t["a"]=c.exports},dbe8:function(e,t,s){},f83a:function(e,t,s){}}]);
//# sourceMappingURL=myAddress.f23ac9b0.js.map