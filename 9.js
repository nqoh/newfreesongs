(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{339:function(t,e,r){var n=r(374);"string"==typeof n&&(n=[[t.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};r(4)(n,o);n.locals&&(t.exports=n.locals)},373:function(t,e,r){"use strict";var n=r(339);r.n(n).a},374:function(t,e,r){(t.exports=r(3)(!1)).push([t.i,"\n.link[data-v-49391c04]{\n    cursor: pointer;\n    color: #954b4b;\n}\n.link[data-v-49391c04]:hover{\n    text-decoration: underline;\n}\na[data-v-49391c04] {\n    color: rgb(149, 75, 75);\n    margin-top: -15px;\n    cursor: pointer;\n}\n.nothing[data-v-49391c04] {\n    font-style: italic;\n    margin: 20px auto;\n    font-size: 20px;\n}\n.notBox[data-v-49391c04] {\n    height: 500px;\n    overflow: auto;\n}\n.notBox[data-v-49391c04] {\n    height: 430px;\n    width: 100%;\n    padding: 3px;\n    overflow: auto;\n}\n.notBox[data-v-49391c04]::-webkit-scrollbar {\n    width: 6px;\n    background-color: transparent;\n}\n.notBox[data-v-49391c04]::-webkit-scrollbar-thumb {\n    background-color: rgb(149, 75, 75);\n}\n.notBox[data-v-49391c04]::-webkit-scrollbar-track {\n    /*    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);*/\n    background-color: transparent;\n}\n",""])},444:function(t,e,r){"use strict";r.r(e);var n=r(0),o={data:function(){return{num:10,member:[],show:!0}},created:function(){this.getAlerts(),n.buss.$emit("setColor","")},methods:{ClearAll:function(){var t=this;$.get("/api/clearAll/",(function(e){n.buss.$emit("Closeloading",""),"Ok"===e&&t.getAlerts()}))},LoardMoreAlerts:function(t){var e=this,r=document.getElementById("wrap");r.scrollHeight-r.scrollTop===r.clientHeight&&$.get("/api/alerts/"+t,(function(t){if(t.length>0){for(var r=0;r<t.length;r++)e.member=t;e.num+=10}}))},getAlerts:function(){var t=this;$.get("/api/alerts/0",(function(e){n.buss.$emit("Closeloading",""),0!==e.length?(t.member=e,t.show=!0):t.show=!1}))},deleteAlert:function(t){var e=this;$.get("/api/deleteAlert/"+t,(function(t){"Ok"===t&&e.getAlerts()}))}},metaInfo:{title:"Notifications"}},a=(r(373),r(1)),l=Object(a.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"notBox",attrs:{id:"wrap"},on:{scroll:function(e){return t.LoardMoreAlerts(t.num)}}},[t._l(t.member,(function(e,n){return t.show?r("div",["fan"==t.member[n].alert?r("div",[t._m(0,!0),t._v(" "),r("p",{staticStyle:{"margin-left":"4px"},attrs:{align:"center"}},[t._v("Hi "+t._s(t._f("Ucfirst")(t.member[n].name))+" tell us more about you\n                "),t._m(1,!0)]),t._v(" "),r("hr"),t._v(" "),t._m(2,!0),t._v(" "),t._m(3,!0),t._v(" "),r("p",{attrs:{align:"center"}},[r("a",{staticStyle:{color:"rgb(149,75,75)"},on:{click:function(e){return t.deleteAlert(t.member[n].alert_id)}}},[t._v("Delete")])])]):t._e(),t._v(" "),"artist"==t.member[n].alert?r("div",[t._m(4,!0),t._v(" "),r("p",{staticStyle:{"margin-left":"4px"},attrs:{align:"center"}},[t._v("Hi "+t._s(t._f("Ucfirst")(t.member[n].name))+" tell us more about you\n                "),r("router-link",{staticStyle:{color:"rgb(149,75,75)"},attrs:{to:"/profile/edit"}},[r("a",[t._v("Edit profile")])])],1),t._v(" "),r("hr"),t._v(" "),t._m(5,!0),t._v(" "),t._m(6,!0),t._v(" "),r("p",{attrs:{align:"center"}},[r("a",{staticStyle:{color:"rgb(149,75,75)"},on:{click:function(e){return t.deleteAlert(t.member[n].alert_id)}}},[t._v("Delete")])])]):t._e(),t._v(" "),"follow"==t.member[n].alert?r("p",[r("router-link",{staticStyle:{color:"rgb(149,75,75)"},attrs:{to:"/"+t.member[n].username}},[t._v(t._s(t._f("Ucfirst")(t.member[n].name))+"\n            ")]),t._v(" "),r("span",[t._v("\n                started following you")]),t._v(" "),r("span",{staticStyle:{opacity:".5","font-size":"10px"}},[t._v(t._s(t._f("formatDate")(t.member[n].created_at)))]),t._v(" "),r("a",{staticStyle:{color:"rgb(149,75,75)"},on:{click:function(e){return t.deleteAlert(t.member[n].alert_id)}}},[t._v("Delete")]),t._v(" "),r("br")],1):t._e(),t._v(" "),"unfollow"==t.member[n].alert?r("p",[r("router-link",{staticStyle:{color:"rgb(149,75,75)"},attrs:{to:"/"+t.member[n].username}},[t._v(t._s(t._f("Ucfirst")(t.member[n].name))+"\n            ")]),t._v(" "),r("span",[t._v("\n                has unfollowed you ")]),t._v(" "),r("span",{staticStyle:{opacity:".5","font-size":"10px"}},[t._v(t._s(t._f("formatDate")(t.member[n].created_at)))]),t._v(" \n            "),r("a",{staticStyle:{color:"rgb(149,75,75)"},on:{click:function(e){return t.deleteAlert(t.member[n].alert_id)}}},[t._v("Delete")]),t._v(" "),r("br")],1):t._e(),t._v(" "),"playlist"==t.member[n].alert?r("p",[r("router-link",{staticStyle:{color:"rgb(149,75,75)"},attrs:{to:"/"+t.member[n].username}},[t._v(t._s(t._f("Ucfirst")(t.member[n].name))+"\n            ")]),t._v(" "),r("span",[t._v(" Playlisted your song")]),t._v(" "),r("span",{staticStyle:{opacity:".5","font-size":"10px"}},[t._v(t._s(t._f("formatDate")(t.member[n].created_at))+"\n            ")]),t._v(" "),r("a",{staticStyle:{color:"rgb(149,75,75)"},on:{click:function(e){return t.deleteAlert(t.member[n].alert_id)}}},[t._v("Delete")]),t._v(" "),r("br")],1):t._e(),t._v(" "),"upload"==t.member[n].alert.substring(0,6)?r("p",[r("router-link",{staticStyle:{color:"rgb(149,75,75)"},attrs:{to:"/"+t.member[n].username}},[t._v(t._s(t._f("Ucfirst")(t.member[n].name))+"\n            ")]),t._v(" "),r("span",[t._v(" Uploaded new track "),r("a",{attrs:{href:"https://bogiyo.com/"+t.member[n].alert.substring(6,11)}},[t._v("Download")])]),t._v(" "),r("span",{staticStyle:{opacity:".5","font-size":"10px"}},[t._v(t._s(t._f("formatDate")(t.member[n].created_at))+"\n            ")]),t._v(" "),r("a",{staticStyle:{color:"rgb(149,75,75)"},on:{click:function(e){return t.deleteAlert(t.member[n].alert_id)}}},[t._v("Delete")]),t._v(" "),r("br")],1):t._e(),t._v(" "),"comment"==t.member[n].alert.substring(0,7)?r("p",[r("router-link",{staticStyle:{color:"rgb(149,75,75)"},attrs:{to:"/"+t.member[n].username}},[t._v(t._s(t._f("Ucfirst")(t.member[n].name))+"\n            ")]),t._v(" "),r("span",[t._v(" commented on  "),r("a",{attrs:{href:"https://bogiyo.com/"+t.member[n].alert.substring(7,12)}},[t._v("\n                "+t._s(t.member[n].alert.substring(12,t.member[n].alert.length)))])]),t._v(" "),r("span",{staticStyle:{opacity:".5","font-size":"10px"}},[t._v(t._s(t._f("formatDate")(t.member[n].created_at))+"\n            ")]),t._v(" "),r("a",{staticStyle:{color:"rgb(149,75,75)"},on:{click:function(e){return t.deleteAlert(t.member[n].alert_id)}}},[t._v("Delete")]),t._v(" "),r("br")],1):t._e()]):t._e()})),t._v(" "),t.show?t._e():r("p",{staticClass:"nothing",attrs:{align:"center"}},[t._v("You have no new notifications.")])],2),t._v(" "),t.show?r("p",{staticClass:"link",staticStyle:{"margin-bottom":"0px"},attrs:{align:"center"},on:{click:function(e){return t.ClearAll()}}},[t._v("Clear All")]):t._e()])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticStyle:{"font-size":"16px"},attrs:{align:"center"}},[e("u",[e("b",[this._v("Welcome to Bogiyo")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticStyle:{color:"rgb(149,75,75)"},attrs:{href:"/profile/edit"}},[e("a",[this._v("Edit profile")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticStyle:{"font-size":"16px"},attrs:{align:"center"}},[e("u",[this._v("As a fan you can")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[t._v("Make money now,\n                    "),r("a",{staticStyle:{color:"rgb(149,75,75)"},attrs:{href:"/fan/promote"}},[r("a",[t._v("learn more")])])]),t._v(" "),r("br"),t._v(" "),r("li",[t._v("Add songs to your playlist to download or listen to later")]),t._v(" "),r("br"),t._v(" "),r("li",[t._v("Comment on any song uploaded")]),t._v(" "),r("br"),t._v(" "),r("li",[t._v("Follow artists and fans")]),t._v(" "),r("br"),t._v(" "),r("li",[t._v("Share your lounge")]),t._v(" "),r("br"),t._v(" "),r("li",[t._v("Send and receive messages")]),t._v(" "),r("br"),t._v(" "),r("li",[t._v("Add info about your self and more...")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticStyle:{"font-size":"16px"},attrs:{align:"center"}},[e("u",[e("b",[this._v("Welcome to Bogiyo")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticStyle:{"font-size":"16px"},attrs:{align:"center"}},[e("u",[this._v("As an Artist you can")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[t._v("Grow your fan base,\n                    "),r("a",{staticStyle:{color:"rgb(149,75,75)"},attrs:{href:"/artist/promote"}},[r("a",[t._v("promote")])]),t._v("\n                    your\n                    music\n                ")]),t._v(" "),r("br"),t._v(" "),r("li",[t._v("Sell your music,\n                    "),r("a",{staticStyle:{color:"rgb(149,75,75)"},attrs:{href:"/store"}},[r("a",[t._v("learn more")])])]),t._v(" "),r("br"),t._v(" "),r("li",[t._v("Edit your album art,lyrics and more..")]),t._v(" "),r("br"),t._v(" "),r("li",[t._v("Share your lounge and your music")]),t._v(" "),r("br"),t._v(" "),r("li",[t._v("Upload and delete your music")]),t._v(" "),r("br"),t._v(" "),r("li",[t._v("Edit your lyrics")]),t._v(" "),r("br"),t._v(" "),r("li",[t._v("Add songs to your playlist to download or listen to later")]),t._v(" "),r("br"),t._v(" "),r("li",[t._v("Comment on any song uploaded")]),t._v(" "),r("br")])}],!1,null,"49391c04",null);e.default=l.exports}}]);