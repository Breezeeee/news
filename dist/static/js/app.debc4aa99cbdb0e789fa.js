webpackJsonp([1],{Kmee:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("7+uW"),n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]},r=i("VU/8")({name:"app"},n,!1,function(t){i("Kmee")},null,null).exports,o=i("/ocq"),a={name:"Hello",methods:{sort:function(){for(var t=this.newsArr.length,e=0;e<t;e++){for(var i=this.newsArr[e].heat,s=e,n=e;n<t;n++)this.newsArr[n].heat>=i&&(i=this.newsArr[n].heat,s=n);var r=this.newsArr[e];this.newsArr[e]=this.newsArr[s],this.newsArr[s]=r}},createNews:function(t,e,i){var s=Object();s.region=t,s.content=e,s.heat=i,s.cmt=0,this.newsArr.push(s),this.sort()},init:function(){this.createNews("Af","Andrew Harding: What Ramaphosa victory means for South Africa",30),this.createNews("As","Asia is driving the Bitcoin craze?",70),this.createNews("Eu","UK to soften Brexit impact on European banks!",70),this.createNews("Am","Kobe Bryant Jersey Retirement on Dec.19th!",100),this.inited=1},delete_n_next:function(){return-1===this.pos?(alert("No news to delete!"),!1):("Am"===this.g_region&&(this.newsArr.splice(this.pos,1),this.Am_click()),"As"===this.g_region&&(this.newsArr.splice(this.pos,1),this.As_click()),"Af"===this.g_region&&(this.newsArr.splice(this.pos,1),this.Af_click()),"Eu"===this.g_region&&(this.newsArr.splice(this.pos,1),this.Eu_click()),!0)},like:function(){if(0!==this.inited){var t=this.newsArr[this.pos];if(0===t.cmt){t.cmt=1,t.heat+=1;var e="Success! The heat of the news is now "+t.heat.toString()+".";return alert(e),this.g_heat+=1,!0}return alert("Sorry, you have already commented on this news."),!1}alert("You cannot comment on this.")},dislike:function(){if(0!==this.inited){var t=this.newsArr[this.pos];if(0===t.cmt){t.cmt=1,t.heat-=1;var e="Success! The heat of the news is now "+t.heat.toString()+".";return alert(e),this.g_heat-=1,!0}return alert("Sorry, you have already commented on this news."),!1}alert("You cannot comment on this.")},pub_click:function(){for(var t,e,i=arguments.length>0&&void 0!==arguments[0]&&arguments[0],s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Asia";;){if(null===(t=i?s:prompt("Please input the region of your news","Asia")))return!1;if("asia"===(t=t.toLowerCase())){t="As";break}if("america"===t){t="Am";break}if("europe"===t){t="Eu";break}if("africa"===t){t="Af";break}alert('Error! Only "America", "Africa", "Europe", "Asia" are valid inputs.')}for(;null===(e=i?"SJTU SE Group3 did a good job in their project!":prompt("Please describe the news:","SJTU SE Group3 did a good job in their project!")););this.createNews(t,e,0),alert("Success!")},Am_click:function(){0===this.inited&&this.init();for(var t=0,e=0;e<this.newsArr.length;e++)if("Am"===this.newsArr[e].region){t=1,this.pos=e,this.g_region="Am",this.g_heat=this.newsArr[e].heat,this.message=this.newsArr[e].content;break}0===t&&(this.message="No news from America",this.g_heat=0,this.pos=-1)},Af_click:function(){0===this.inited&&this.init();for(var t=0,e=0;e<this.newsArr.length;e++)if("Af"===this.newsArr[e].region){t=1,this.pos=e,this.g_region="Af",this.g_heat=this.newsArr[e].heat,this.message=this.newsArr[e].content;break}0===t&&(this.message="No news from Africa",this.g_heat=0,this.pos=-1)},As_click:function(){0===this.inited&&this.init();for(var t=0,e=0;e<this.newsArr.length;e++)if("As"===this.newsArr[e].region){t=1,this.pos=e,this.g_region="As",this.message=this.newsArr[e].content,this.g_heat=this.newsArr[e].heat;break}0===t&&(this.message="No news from Asia",this.g_heat=0,this.pos=-1)},Eu_click:function(){0===this.inited&&this.init();for(var t=0,e=0;e<this.newsArr.length;e++)if("Eu"===this.newsArr[e].region){t=1,this.pos=e,this.g_region="Eu",this.message=this.newsArr[e].content,this.g_heat=this.newsArr[e].heat;break}0===t&&(this.message="No news from Europe",this.g_heat=0,this.pos=-1)}},data:function(){return{pos:0,g_heat:0,inited:0,g_region:0,message:"Click on the map to fetch news!",newsArr:[]}}},h={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"hello"},[i("div",{staticClass:"textFrame"},[i("h2",{style:{}},[t._v("News")]),t._v(" "),i("h3",{staticStyle:{color:"red"}},[t._v("HEAT: "+t._s(t.g_heat))]),t._v(" "),i("div",{staticStyle:{height:"65vmin"}},[t._v(t._s(t.message))]),t._v(" "),i("button",{staticClass:"next",on:{click:function(e){t.delete_n_next()}}},[t._v("Delete and Next")]),t._v(" "),i("button",{staticClass:"like",on:{click:function(e){t.dislike()}}},[t._v("Dislike")]),t._v(" "),i("button",{staticClass:"like",on:{click:function(e){t.like()}}},[t._v("Like")])]),t._v(" "),i("div",{staticClass:"title"},[t._v("The world is in your eyes.")]),t._v(" "),i("button",{staticClass:"AMB",on:{click:function(e){t.Am_click()}}},[t._v("America")]),t._v(" "),i("button",{staticClass:"ASB",on:{click:function(e){t.As_click()}}},[t._v("Asia & Pacific")]),t._v(" "),i("button",{staticClass:"EUB",on:{click:function(e){t.Eu_click()}}},[t._v("Europe")]),t._v(" "),i("br"),t._v(" "),i("button",{staticClass:"AFB",on:{click:function(e){t.Af_click()}}},[t._v("Africa")]),t._v(" "),i("button",{staticClass:"PUB",on:{click:function(e){t.pub_click()}}},[t._v("Publish my news")])])},staticRenderFns:[]},c=i("VU/8")(a,h,!1,function(t){i("nyIa")},"data-v-13535a70",null).exports;s.a.use(o.a);var l=new o.a({routes:[{path:"/",name:"Hello",component:c}]});s.a.config.productionTip=!1,new s.a({el:"#app",router:l,template:"<App/>",components:{App:r}})},nyIa:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.debc4aa99cbdb0e789fa.js.map