(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Recommend"],{"32bc":function(t,e,n){"use strict";n("aa05")},"51f5":function(t,e,n){},"75df":function(t,e,n){"use strict";n("904b")},"76cd":function(t,e,n){"use strict";n("51f5")},"904b":function(t,e,n){},aa05:function(t,e,n){},ac6a:function(t,e,n){"use strict";n("c681")},c0c7:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"jd_main"},[n("HeaderBar",{attrs:{title:"文章推荐",back:!0}}),n("section",{staticClass:"jd_recommend_list"},[n("RecommendItem",{attrs:{config:t.articleList[0]}}),t._l(t.articleList,(function(t){return n("RecommendSub",{key:t.id,attrs:{config:t}})}))],2)],1)},r=[],a=(n("6a61"),n("2e91")),c=n("49c9"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"jd_recommend_item",on:{click:t.goDetail}},[n("figure",{staticClass:"logo",style:{background:"url('"+t.config.articleCover+"') no-repeat center/cover"}},[n("span",{staticClass:"sign"},[t._v("今日热门")])]),n("article",{staticClass:"jd_recommend_info"},[n("h1",{staticClass:"title",domProps:{textContent:t._s(t.config.articleName)}}),n("div",{staticClass:"info",domProps:{textContent:t._s(t.config.articleIntroduction)}})])])},s=[],u={name:"recommendItem",props:{config:{default:function(){return{}},type:Object}},methods:{goDetail:function(){var t=this;t.$router.push({path:"recommendDetail",query:{id:t.config.id}})}}},l=u,d=(n("ac6a"),n("5d22")),f=Object(d["a"])(l,o,s,!1,null,"f18dc242",null),m=f.exports,g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"recommend-sub",on:{click:t.goDetail}},[n("figure",{staticClass:"logo",style:{background:"url('"+t.config.articleCover+"') no-repeat center/cover"}},[n("span",{staticClass:"sign"},[t._v("11111"+t._s(t.config.articleCategory))])]),n("article",{staticClass:"recommend-info"},[n("h1",{staticClass:"title"},[t._v(t._s(t.config.articleName))]),n("div",{staticClass:"statistics"},[n("span",[t._v("浏览量："+t._s(t.config.browseNum))]),n("span",[t._v("收藏了："+t._s(t.config.collectionNum))])]),n("article",{staticClass:"recommend-article"},[t._v(t._s(t.config.articleIntroduction))])])])},p=[],h={name:"recommendSub",props:{config:{default:function(){return{}},type:Object}},methods:{goDetail:function(){var t=this;t.$router.push({path:"recommendDetail",query:{id:t.config.id}})}}},v=h,b=(n("76cd"),Object(d["a"])(v,g,p,!1,null,"235089c0",null)),_=b.exports,C=n("ce0e"),w={name:"recommend",components:{RecommendItem:m,HeaderBar:C["a"],RecommendSub:_},data:function(){return{articleList:[]}},methods:{getArticleData:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var n,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t,n.Indicator.open(),e.prev=2,e.next=5,Object(c["n"])({pageSize:1e3,pageNum:1});case 5:i=e.sent,n.articleList=i.rows,e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](2),console.log(e.t0.message||"获取商品数据失败");case 12:return e.prev=12,n.Indicator.close(),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[2,9,12,15]])})))()}},mounted:function(){var t=this;t.getArticleData()}},O=w,x=(n("32bc"),Object(d["a"])(O,i,r,!1,null,"40b9f5a1",null));e["default"]=x.exports},c681:function(t,e,n){},ce0e:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"jd-header"},[n("span",{staticClass:"jd-header-item return-back",class:{show:t.back},on:{click:function(e){return e.stopPropagation(),t.returnBack(e)}}},[n("i")]),n("span",{staticClass:"jd-header-item",domProps:{textContent:t._s(t.title)}}),n("span",{staticClass:"jd-header-item",domProps:{textContent:t._s(t.subTitle)},on:{click:function(e){return e.stopPropagation(),t.subTitleEvent(e)}}})])},r=[],a=(n("cc16"),{props:{title:{default:function(){return""},type:String},back:{default:function(){return!1},type:Boolean},subTitle:{default:function(){return""},type:String}},methods:{returnBack:function(){var t=this;navigator.userAgent.indexOf("MSIE")>=0&&navigator.userAgent.indexOf("Opera")<0?history.length>0?(t.$emit("returnOriginal"),window.history.go(-1)):window.location.href="/home":navigator.userAgent.indexOf("Firefox")>=0||navigator.userAgent.indexOf("Opera")>=0||navigator.userAgent.indexOf("Safari")>=0||navigator.userAgent.indexOf("Chrome")>=0||navigator.userAgent.indexOf("WebKit")>=0?window.history.length>1?(t.$emit("returnOriginal"),window.history.go(-1)):window.location.href="/home":(t.$emit("returnOriginal"),window.history.go(-1))},subTitleEvent:function(){var t=this;t.$emit("handleEvent")}}}),c=a,o=(n("75df"),n("5d22")),s=Object(o["a"])(c,i,r,!1,null,"ca1424d4",null);e["a"]=s.exports}}]);
//# sourceMappingURL=Recommend.23830731.js.map