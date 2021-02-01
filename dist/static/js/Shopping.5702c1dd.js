(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Shopping"],{"2c01":function(t,e,a){},6005:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"jd_main jd_shopping"},[a("section",{staticClass:"jd_shopping_card"},[a("HeaderBar",{staticClass:"shopping-header",attrs:{title:"购物车",subTitle:"删除",back:!0},on:{handleEvent:t.handleDeleteCart}})],1),a("section",{staticClass:"jd_shopping_list"},[t._m(0),t._l(t.cartData.cartList,(function(e){return a("section",{key:e.id,staticClass:"jd_shopping_item",class:{selected:e.select},on:{click:function(a){return t.selectItem(e)}}},[a("div",{staticClass:"radio"}),a("figure",{staticClass:"logo",style:{background:"url('"+e.primaryPicUrl+"') no-repeat center/cover"}}),a("article",{staticClass:"shopping-detail"},[a("h1",{staticClass:"title",domProps:{textContent:t._s(e.goodsName)}}),a("div",{staticClass:"des"},[t._v("规格：6个/份 重量： 1kg")]),a("div",{staticClass:"price"},[t._v("￥"+t._s(e.retailPrice))])]),a("div",{staticClass:"changeNum"},[a("span",{staticClass:"minus",on:{click:function(a){return a.stopPropagation(),t.changeNum(e,0)}}},[t._v("-")]),a("span",{staticClass:"num"},[t._v(t._s(e.number))]),a("span",{staticClass:"add",on:{click:function(a){return a.stopPropagation(),t.changeNum(e,1)}}},[t._v("+")])])])}))],2),a("section",{staticClass:"jd_shopping_buy"},[a("span",{staticClass:"select_all",class:{selected:t.selectAll},on:{click:t.selectAllGoods}},[a("i",{staticClass:"icon"}),t._v(" 全选 ")]),a("span",{staticClass:"price"},[a("div",{staticClass:"jd_title"},[a("span",[t._v("合计：")]),a("span",{staticClass:"num"},[t._v("￥"+t._s(t.cartData.goodsAmount))])]),a("div",{staticClass:"jd_subTitle"},[t._v("已优惠："+t._s(t.cartData.goodsDiscount)+"元")])]),a("span",{staticClass:"submit",on:{click:t.submitOrder}},[t._v("去结算")])])])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h1",{staticClass:"jd_shopping_title"},[a("figure",{staticClass:"logo"}),a("span",[t._v("关东臻品")])])}],c=(a("df47"),a("6a61"),a("2e91")),r=a("d211"),i=a("ce0e"),l=a("49c9"),o=a("cf6b"),u={name:"shopping",components:{HeaderBar:i["a"]},data:function(){return{cartOriginalData:{},cartData:{},selectData:[]}},mounted:function(){var t=this;t.getGoodCartList()},computed:{selectAll:function(){var t=this,e=!0;if(t.cartData&&t.cartData.cartList&&t.cartData.cartList.length)for(var a=0;a<t.cartData.cartList.length;a++){var s=t.cartData.cartList[a];0===parseInt(s.select,10)&&(e=!1)}else e=!1;return e}},methods:Object(r["a"])(Object(r["a"])({},Object(o["b"])(["saveGoodCart"])),{},{selectAllGoods:function(){var t=this;if(t.selectData.length){t.selectData=[];for(var e=0;e<t.cartData.cartList.length;e++){var a=t.cartData.cartList[e];a.select=0}}else{t.selectData=JSON.parse(JSON.stringify(t.cartData.cartList));for(var s=0;s<t.selectData.length;s++){var n=t.selectData[s];n.select=1,t.cartData.cartList[s].select=1}}},submitOrder:function(){for(var t=this,e=[],a=0;a<t.selectData.length;a++){var s=t.selectData[a],n={goodsId:s.goodsId,goodsNum:s.number};e.push(n)}e.length?(console.log(e),t.saveGoodCart(e),setTimeout((function(){t.$router.push({path:"purchase",query:{type:1}})}),300)):t.Toast("请选择您要购买的商品")},changeNum:function(t,e){var a=this;e?t.number++:t.number>1&&t.number--,a.changeItemNumber(t)},changeItemNumber:function(t){for(var e=this,a=[],s=!1,n=0;n<e.selectData.length;n++){var c=e.selectData[n];t.id!==c.id||(t.select=1,c.number=t.number,s=!0)}s||(t.select=1),a.push(t),e.selectData=a},handleDeleteCart:function(){var t=this;t.selectData.length&&t.MessageBox.confirm("您确定要".concat(t.selectAll?"清空":"删除","购物车商品")).then(Object(c["a"])(regeneratorRuntime.mark((function e(){var a,s,n,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.selectAll){e.next=8;break}return console.log("清空购物车"),e.next=4,Object(l["h"])();case 4:e.sent,e.next=22;break;case 8:for(a=[],s=0;s<t.selectData.length;s++)n=t.selectData[s],a.push(n.id);if(!a.length){e.next=22;break}return e.prev=11,e.next=14,Object(l["i"])({ids:a.join(",")});case 14:c=e.sent,console.log(c),e.next=22;break;case 19:e.prev=19,e.t0=e["catch"](11),t.Toast(e.t0.message||"删除失败");case 22:case"end":return e.stop()}}),e,null,[[11,19]])}))))},selectItem:function(t){for(var e=this,a=[],s=!1,n=0;n<e.selectData.length;n++){var c=e.selectData[n];t.id!==c.id||(t.select=0,s=!0)}s||(t.select=1,a.push(t)),e.selectData=a},getGoodCartList:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var a,s,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=t,e.prev=1,e.next=4,Object(l["t"])();case 4:s=e.sent,n=function(t){for(var e=[],a=JSON.parse(JSON.stringify(t.cartList)),s=0;s<a.length;s++){var n=a[s];n.select=0,e.push(n)}return t.cartList=e,t},a.cartOriginalData=n(s.rows),a.cartData=JSON.parse(JSON.stringify(a.cartOriginalData)),e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](1),console.log(e.t0.message||"获取tab数据失败");case 13:case"end":return e.stop()}}),e,null,[[1,10]])})))()}})},p=u,d=(a("b678"),a("5d22")),h=Object(d["a"])(p,s,n,!1,null,"afb117b8",null);e["default"]=h.exports},"668b":function(t,e,a){"use strict";a("2c01")},aebb:function(t,e,a){},b678:function(t,e,a){"use strict";a("aebb")},ce0e:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"jd-header"},[a("span",{staticClass:"jd-header-item return-back",class:{show:t.back},on:{click:function(e){return e.stopPropagation(),t.returnBack(e)}}},[a("i")]),a("span",{staticClass:"jd-header-item",domProps:{textContent:t._s(t.title)}}),a("span",{staticClass:"jd-header-item",domProps:{textContent:t._s(t.subTitle)},on:{click:function(e){return e.stopPropagation(),t.subTitleEvent(e)}}})])},n=[],c={props:{title:{default:function(){return""},type:String},back:{default:function(){return!1},type:Boolean},subTitle:{default:function(){return""},type:String}},methods:{returnBack:function(){var t=this;t.$emit("returnOriginal"),t.$router.back(-1)},subTitleEvent:function(){var t=this;t.$emit("handleEvent")}}},r=c,i=(a("668b"),a("5d22")),l=Object(i["a"])(r,s,n,!1,null,"dbf454be",null);e["a"]=l.exports}}]);
//# sourceMappingURL=Shopping.5702c1dd.js.map