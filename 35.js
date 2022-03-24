(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[35],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/website/profile/music/explore.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/website/profile/music/explore.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../app */ "./resources/js/app.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      music: [],
      num: 10,
      responsive: '',
      priceCurrency: []
    };
  },
  created: function created() {
    var _this = this;

    _app__WEBPACK_IMPORTED_MODULE_0__["buss"].$emit('setColor', '');
    $.get('/api/getPriceCurrency', function (response) {
      _this.priceCurrency = response;
    });
    this.getResults();
  },
  methods: {
    getResults: function getResults() {
      var _this2 = this;

      $.get('/api/getExploreMusic/' + 0, function (data) {
        for (var i = 0; i < data.length; i++) {
          _this2.music.push(data[i]);
        }
      });
    },
    LoardMoreMusic: function LoardMoreMusic(num) {
      var _this3 = this;

      var element = document.getElementById('wrap');

      if (element.scrollHeight - element.scrollTop === element.clientHeight) {
        $.get('/api/getExploreMusic/' + num, function (data) {
          if (data.length > 0) {
            for (var i = 0; i < data.length; i++) {
              _this3.music.push(data[i]);
            }

            _this3.num += 10;
          }
        });
      }
    },
    WidowSize: function WidowSize() {
      var _this4 = this;

      if (this.$refs.desktop.clientWidth > 1 && this.responsive !== 'desktop') {
        this.responsive = "desktop";
        $.get('/api/setResultSession/6', function () {
          _this4.getResults();
        });
      }

      if (this.$refs.mobile.clientWidth > 1 && this.responsive !== 'mobile') {
        this.responsive = "mobile";
        $.get('/api/setResultSession/5', function () {
          _this4.getResults();
        });
      }
    },
    metaInfo: {
      title: 'Explore New Music'
    }
  },
  mounted: function mounted() {
    this.WidowSize();
    window.addEventListener('resize', this.WidowSize);
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/website/profile/music/explore.vue?vue&type=style&index=0&id=4c6f9ad8&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/website/profile/music/explore.vue?vue&type=style&index=0&id=4c6f9ad8&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nh2[data-v-4c6f9ad8] {\n    font-weight: bold;\n    font-size: 22px;\n    margin-top: 25px;\n    color: rgb(149, 75, 75);\n    margin-left: 48.5%;\n}\nh4[data-v-4c6f9ad8] {\n    align-content: center;\n    font-weight: bold;\n    color: rgb(149, 75, 75);\n}\n.row[data-v-4c6f9ad8]{\n    height: 480px;\n    overflow: auto;\n}\n.row[data-v-4c6f9ad8]::-webkit-scrollbar {\n    width: 6px;\n    background-color: transparent;\n}\n.row[data-v-4c6f9ad8]::-webkit-scrollbar-thumb {\n    background-color: rgb(149, 75, 75);\n}\n.row[data-v-4c6f9ad8]::-webkit-scrollbar-track {\n    /*    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);*/\n    background-color: transparent;\n}\nimg[data-v-4c6f9ad8] {\n    width: 80px;\n    float: left\n}\n.icon_and_label[data-v-4c6f9ad8] {\n    display: inline-block;\n    padding-top: 6px\n}\nsmall[data-v-4c6f9ad8] {\n    font-size: 11px;\n    padding-top: 6px;\n}\np[data-v-4c6f9ad8] {\n    margin: -3px 0px 0px 0px;\n}\nh1 a[data-v-4c6f9ad8] {\n    text-decoration: underline;\n    font-style: italic;\n    color: #954b4b;\n}\n\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/website/profile/music/explore.vue?vue&type=style&index=0&id=4c6f9ad8&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/website/profile/music/explore.vue?vue&type=style&index=0&id=4c6f9ad8&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--6-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./explore.vue?vue&type=style&index=0&id=4c6f9ad8&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/website/profile/music/explore.vue?vue&type=style&index=0&id=4c6f9ad8&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/website/profile/music/explore.vue?vue&type=template&id=4c6f9ad8&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/website/profile/music/explore.vue?vue&type=template&id=4c6f9ad8&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticStyle: { margin: "10px" } }, [
    _c(
      "div",
      {
        staticClass: "row",
        attrs: { id: "wrap" },
        on: {
          scroll: function($event) {
            return _vm.LoardMoreMusic(_vm.num)
          }
        }
      },
      _vm._l(_vm.music, function(track) {
        return _c(
          "div",
          {
            staticClass: "col-xl-6 col-md-6 col-lg-6 col-sm-12 col-12",
            staticStyle: { "padding-bottom": "27px" }
          },
          [
            _c("router-link", { attrs: { to: "/" + track.download_code } }, [
              _c("img", { attrs: { src: track.album_art } })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "icon_and_label" }, [
              _c("div", { staticClass: "icon" }),
              _vm._v(" "),
              _c("small", [_vm._v(_vm._s(track.track.substr(0, 27)))])
            ]),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _c("div", { staticClass: "icon_and_label" }, [
              _c("div", { staticClass: "size" }),
              _vm._v(" "),
              _c("small", [
                _vm._v(
                  " " +
                    _vm._s((track.size / 1000000).toFixed(2)) +
                    " Mb | " +
                    _vm._s(track.duration) +
                    " Min"
                )
              ])
            ]),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _c("div", { staticClass: "icon_and_label" }, [
              _c("div", { staticClass: "by" }),
              _vm._v(" "),
              _c(
                "small",
                [
                  _c("b", [_vm._v("By :")]),
                  _vm._v(" "),
                  _c("router-link", { attrs: { to: "/" + track.username } }, [
                    _vm._v(
                      _vm._s(_vm._f("Ucfirst")(track.name)) +
                        "  | \n                    "
                    ),
                    _c(
                      "span",
                      {
                        staticStyle: {
                          opacity: ".4",
                          "font-size": "12px",
                          color: "black"
                        }
                      },
                      [_vm._v(_vm._s(_vm._f("formatDate")(track.created_at)))]
                    )
                  ])
                ],
                1
              )
            ]),
            _vm._v(" "),
            track.price == "0"
              ? _c(
                  "p",
                  [
                    _c(
                      "router-link",
                      { attrs: { to: "/" + track.download_code } },
                      [_c("b", [_vm._v("Download")])]
                    ),
                    _vm._v(" "),
                    _c("b", [_vm._v(_vm._s(track.downloads))]),
                    _vm._v(" downloads\n                "),
                    _c(
                      "router-link",
                      { attrs: { to: "/lyrics/" + track.download_code } },
                      [_c("b", [_vm._v("Lyrics")])]
                    )
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            track.price == "1"
              ? _c(
                  "p",
                  [
                    _c(
                      "router-link",
                      { attrs: { to: "/" + track.download_code } },
                      [
                        _c("b", [
                          _vm._v(
                            _vm._s(_vm.priceCurrency.currency) +
                              "\n                    " +
                              _vm._s(_vm.priceCurrency.price.toFixed(2)) +
                              " Buy"
                          )
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c("b", [_vm._v(_vm._s(track.downloads))]),
                    _vm._v(" Purchases\n                "),
                    _c(
                      "router-link",
                      { attrs: { to: "/lyrics/" + track.download_code } },
                      [_c("b", [_vm._v("Lyrics")])]
                    )
                  ],
                  1
                )
              : _vm._e()
          ],
          1
        )
      }),
      0
    ),
    _vm._v(" "),
    _c("div", {
      ref: "desktop",
      staticClass: "d-none d-xl-block  d-lg-block  d-md-block col-md-12"
    }),
    _vm._v(" "),
    _c("div", {
      ref: "mobile",
      staticClass: "d-none d-xl-none d-lg-none d-md-none d-block col-sm-12",
      staticStyle: { padding: "5px 5px 0px 5px" }
    })
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/website/profile/music/explore.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/components/website/profile/music/explore.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _explore_vue_vue_type_template_id_4c6f9ad8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./explore.vue?vue&type=template&id=4c6f9ad8&scoped=true& */ "./resources/js/components/website/profile/music/explore.vue?vue&type=template&id=4c6f9ad8&scoped=true&");
/* harmony import */ var _explore_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./explore.vue?vue&type=script&lang=js& */ "./resources/js/components/website/profile/music/explore.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _explore_vue_vue_type_style_index_0_id_4c6f9ad8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./explore.vue?vue&type=style&index=0&id=4c6f9ad8&scoped=true&lang=css& */ "./resources/js/components/website/profile/music/explore.vue?vue&type=style&index=0&id=4c6f9ad8&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _explore_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _explore_vue_vue_type_template_id_4c6f9ad8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _explore_vue_vue_type_template_id_4c6f9ad8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4c6f9ad8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/website/profile/music/explore.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/website/profile/music/explore.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/website/profile/music/explore.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_explore_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./explore.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/website/profile/music/explore.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_explore_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/website/profile/music/explore.vue?vue&type=style&index=0&id=4c6f9ad8&scoped=true&lang=css&":
/*!****************************************************************************************************************************!*\
  !*** ./resources/js/components/website/profile/music/explore.vue?vue&type=style&index=0&id=4c6f9ad8&scoped=true&lang=css& ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_explore_vue_vue_type_style_index_0_id_4c6f9ad8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader??ref--6-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./explore.vue?vue&type=style&index=0&id=4c6f9ad8&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/website/profile/music/explore.vue?vue&type=style&index=0&id=4c6f9ad8&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_explore_vue_vue_type_style_index_0_id_4c6f9ad8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_explore_vue_vue_type_style_index_0_id_4c6f9ad8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_explore_vue_vue_type_style_index_0_id_4c6f9ad8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_explore_vue_vue_type_style_index_0_id_4c6f9ad8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_explore_vue_vue_type_style_index_0_id_4c6f9ad8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/website/profile/music/explore.vue?vue&type=template&id=4c6f9ad8&scoped=true&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/website/profile/music/explore.vue?vue&type=template&id=4c6f9ad8&scoped=true& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_explore_vue_vue_type_template_id_4c6f9ad8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./explore.vue?vue&type=template&id=4c6f9ad8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/website/profile/music/explore.vue?vue&type=template&id=4c6f9ad8&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_explore_vue_vue_type_template_id_4c6f9ad8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_explore_vue_vue_type_template_id_4c6f9ad8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);