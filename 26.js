(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{364:function(t,e,n){var o=n(420);"string"==typeof o&&(o=[[t.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(4)(o,i);o.locals&&(t.exports=o.locals)},419:function(t,e,n){"use strict";var o=n(364);n.n(o).a},420:function(t,e,n){(t.exports=n(3)(!1)).push([t.i,"\n.form-control[data-v-30357634] {\n     float: left;\n     border-right: none;\n}\nh3[data-v-30357634]{\n     color: #954b4b;\n}\n.input-group-append[data-v-30357634] {\n     cursor: pointer;\n     outline: none;\n     border:none;\n}\n.btn_promote[data-v-30357634] {\n     padding: 8px;\n     width: 200px;\n     border-radius: 20px;\n     outline: none;\n     font-size: 20px;\n     color: #eed5b7;\n     background-color: #d19275;\n}\n.input-group-text[data-v-30357634] {\n     background-color: #954b4b;\n     font-weight: bold;\n     color: white;\n     outline: none;\n     border: none;\n}\n",""])},459:function(t,e,n){"use strict";n.r(e);var o=n(0),i={data:function(){return{download_link:"",delete_link:"",track_id:"",promo:this.$session.get("FreePromo"),priceCurrency:[]}},created:function(){o.buss.$emit("setColor","")},beforeCreate:function(){var t=this;$.get("/api/getPriceCurrency",(function(e){t.priceCurrency=e})),$.get("/api/broadcastEmail",(function(t){})),$.get("/api/trackSessions",(function(e){null!==e[0]&&null!==e[1]?(t.download_link=e[0],t.delete_link=e[1],t.track_id=e[2]):t.$router.push("/profile/upload/music")}))},methods:{Promote:function(){this.$router.push("/profile/ads/promote/"+this.track_id)},StartPromote:function(){if(this.promo){document.getElementById("btnPromo").innerHTML='<div align="center" style="margin: 0px 5px 0px 10px"  class="loader loader--style7" title="Please wait..."><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"width="12px" height="15px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve"><rect x="0" y="0" width="4" height="20" fill="#eed5b7"><animate attributeName="opacity" attributeType="XML"values="1; .2; 1"begin="0s" dur="0.6s" repeatCount="indefinite" /> </rect> <rect x="7" y="0" width="4" height="20" fill="#eed5b7"><animate attributeName="opacity" attributeType="XML" values="1; .2; 1" begin="0.2s" dur="0.6s" repeatCount="indefinite" /></rect><rect x="14" y="0" width="4" height="20" fill="#eed5b7"><animate attributeName="opacity" attributeType="XML"values="1; .2; 1" begin="0.4s" dur="0.6s" repeatCount="indefinite" /></rect></svg></div>';var t=new FormData;t.append("download_code",this.download_link),$.ajaxSetup({headers:{"X-CSRF-Token":$("meta[name=_token]").attr("content")}});var e=this;$.ajax({url:"/FreePromo",data:t,type:"POST",contentType:!1,cache:!1,processData:!1,success:function(t){"Ok"==t&&(document.getElementById("btnPromo").innerHTML="Done ! Wait...",e.$session.remove("FreePromo"),e.$router.push("/profile/ads/overview/"))}})}},downloadLink:function(){document.getElementById("download_link").select(),document.execCommand("copy"),document.getElementById("DownloadLink").innerHTML="Copied!",setTimeout((function(){document.getElementById("DownloadLink").innerHTML="Copy"}),2e3)},deleteLink:function(){document.getElementById("delete_link").select(),document.execCommand("copy"),document.getElementById("DeleteLink").innerHTML="Copied!",setTimeout((function(){document.getElementById("DeleteLink").innerHTML="Copy"}),2e3)}},metaInfo:{title:"Music Uploaded"}},r=(n(419),n(1)),a=Object(r.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),t._v(" "),n("div",{staticStyle:{"margin-left":"0%","margin-top":"10%"}},[n("div",{staticClass:"form-group col-xl-7 col-lg-7 col-md-6 col-sm-4"},[n("label",[t._v("Download Link :")]),t._v(" "),n("input",{staticClass:"form-control",staticStyle:{float:"left"},attrs:{type:"text",id:"download_link"},domProps:{value:"bogiyo.com/"+t.download_link}}),t._v(" "),n("div",{staticClass:"input-group-append"},[n("span",{staticClass:"input-group-text",attrs:{id:"DownloadLink"},on:{click:function(e){return t.downloadLink()}}},[t._v("Copy")])])]),t._v(" "),n("div",{staticClass:"form-group col-xl-7 col-lg-7 col-md-6 col-sm-4"},[n("label",[t._v("Delete Link :")]),t._v(" "),n("input",{staticClass:"form-control",staticStyle:{float:"left"},attrs:{type:"text",id:"delete_link"},domProps:{value:"bogiyo.com/d/"+t.delete_link}}),t._v(" "),n("div",{staticClass:"input-group-append"},[n("span",{staticClass:"input-group-text",attrs:{id:"DeleteLink"},on:{click:function(e){return t.deleteLink()}}},[t._v("Copy")])])])]),t._v(" "),n("div",[n("ul",[t._m(1),t._v(" "),n("div",{staticStyle:{width:"100%","margin-top":"0px"}},[n("a",{attrs:{href:"https://www.facebook.com/sharer.php?u=http://bogiyo.com/"+t.download_link}},[n("img",{attrs:{src:"/thumbnails/fbshare.png",width:"70",height:"20",title:"Share on facebook"}})]),t._v("\n\n                           \n                        "),n("a",{attrs:{href:"whatsapp://send?text=https://www.bogiyo.com/"+t.download_link}},[n("img",{attrs:{src:"/thumbnails/download.jpg",width:"70",height:"20",title:"Share on WhatsApp"}})]),t._v("\n\n                           \n                        "),n("a",{attrs:{href:"https://twitter.com/share?url=http%3A%2F%2Fbogiyo.com/"+t.download_link}},[n("img",{attrs:{src:"/thumbnails/twitter.png",width:"70",height:"20",title:"Share on twitter"}})])]),n("br"),t._v(" "),t.promo?n("li",[n("b",[t._v("Promote this track for free")])]):t._e(),t._v(" "),t.promo?n("button",{staticClass:"btn_promote",attrs:{id:"btnPromo"},on:{click:function(e){return t.StartPromote()}}},[n("b",[t._v("Promote Now")])]):t._e(),t._v(" "),t.promo?t._e():n("li",[n("b",[t._v("Promote this track for only "+t._s(t.priceCurrency.currency)+" "+t._s(t.priceCurrency.price.toFixed(2)))])]),t._v(" "),t.promo?t._e():n("button",{staticClass:"btn_promote",on:{click:function(e){return t.Promote()}}},[n("b",[t._v("Promote Now")])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{align:"center"}},[e("h3",{attrs:{align:"center"}},[this._v("Track Uploaded")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("b",[this._v("Share Download link on Social Networks")])])}],!1,null,"30357634",null);e.default=a.exports}}]);