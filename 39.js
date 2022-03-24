(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[39],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/website/profile/sales/sales.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/website/profile/sales/sales.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      music: [],
      totalDownloads: 0,
      priceCurrency: []
    };
  },
  created: function created() {
    _app__WEBPACK_IMPORTED_MODULE_0__["buss"].$emit('setColor', '');
    this.getResults();
    this.getTotalPrice();
  },
  beforeCreate: function beforeCreate() {
    var _this = this;

    $.get('/api/getPriceCurrency', function (response) {
      _this.priceCurrency = response;
    });
  },
  methods: {
    getTotalPrice: function getTotalPrice() {
      var _this2 = this;

      $.get('/api/getTotalPaid', function (downloads) {
        _this2.totalDownloads = downloads;
      });
    },
    getResults: function getResults(page) {
      var _this3 = this;

      if (typeof page === 'undefined') {
        page = 1;
      }

      $.get('/api/getPaidMusic?page=' + page, function (data) {
        _this3.music = data;
      });
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
    }
  },
  metaInfo: {
    title: 'Sales'
  },
  mounted: function mounted() {
    this.WidowSize();
    window.addEventListener('resize', this.WidowSize);
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/website/profile/sales/sales.vue?vue&type=style&index=0&id=6d9b68f4&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/website/profile/sales/sales.vue?vue&type=style&index=0&id=6d9b68f4&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.prev[data-v-6d9b68f4] {\n    width: 30px;\n    float: left;\n    color: rgb(149, 75, 75);\n    background: #eed5b7;\n    margin-top: 12px;\n    cursor: pointer;\n    outline: none;\n    padding: 0px;\n    align-content: center;\n    height: 30px;\n    border: 1px solid rgb(149, 75, 75);\n}\n.next[data-v-6d9b68f4] {\n    width: 30px;\n    float: right;\n    color: rgb(149, 75, 75);\n    background: #eed5b7;\n    cursor: pointer;\n    outline: none;\n    margin-top: -25px;\n    padding: 0px;\n    align-content: center;\n    height: 30px;\n    border: 1px solid rgb(149, 75, 75);\n}\nh2[data-v-6d9b68f4] {\n    font-weight: bold;\n    font-size: 22px;\n    margin-top: 25px;\n    color: rgb(149, 75, 75);\n    margin-left: 50%;\n}\nh4[data-v-6d9b68f4] {\n    align-content: center;\n    font-weight: bold;\n    color: rgb(149, 75, 75);\n}\nimg[data-v-6d9b68f4] {\n    width: 80px;\n    float: left\n}\n.icon_and_label[data-v-6d9b68f4] {\n    display: inline-block;\n    padding-top: 6px\n}\nsmall[data-v-6d9b68f4] {\n    font-size: 11px;\n    padding-top: 6px;\n}\np[data-v-6d9b68f4] {\n    margin: -3px 0px 0px 0px;\n}\nh1 a[data-v-6d9b68f4] {\n    text-decoration: underline;\n    font-style: italic;\n    color: #954b4b;\n}\n\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/website/profile/sales/sales.vue?vue&type=style&index=0&id=6d9b68f4&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/website/profile/sales/sales.vue?vue&type=style&index=0&id=6d9b68f4&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--6-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./sales.vue?vue&type=style&index=0&id=6d9b68f4&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/website/profile/sales/sales.vue?vue&type=style&index=0&id=6d9b68f4&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/website/profile/sales/sales.vue?vue&type=template&id=6d9b68f4&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/website/profile/sales/sales.vue?vue&type=template&id=6d9b68f4&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticStyle: { margin: "0px" } }, [
    _c(
      "span",
      { staticStyle: { margin: "-10px auto", "font-size": "13px" } },
      [
        _vm._v(
          "You will paid on the 7th if you reach R500.00 or more. Make sure your "
        ),
        _c("router-link", { attrs: { to: "/profile/payment/settings" } }, [
          _vm._v("payment details")
        ]),
        _vm._v(" are correct")
      ],
      1
    ),
    _c("br", { staticStyle: { "line-height": "1" } }),
    _vm._v(" "),
    _c(
      "span",
      {
        staticStyle: {
          float: "right",
          "margin-right": "5%",
          "font-size": "13px"
        }
      },
      [
        _c("b", [
          _vm._v(
            "Total Sales :\n       " +
              _vm._s(_vm.priceCurrency.currency) +
              " " +
              _vm._s(
                (
                  ((_vm.totalDownloads * _vm.priceCurrency.price) / 100) *
                  75
                ).toFixed(2)
              )
          )
        ])
      ]
    ),
    _c("br", { staticStyle: { "line-height": ".1" } }),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "row" },
      _vm._l(_vm.music.data, function(track, i) {
        return _c(
          "div",
          {
            staticClass: "col-xl-6 col-md-6 col-lg-6 col-sm-12 col-12",
            staticStyle: { "padding-bottom": "20px" }
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
                  _c(
                    "router-link",
                    { attrs: { to: "/" + track.username, append: "" } },
                    [_vm._v(_vm._s(_vm._f("Ucfirst")(track.name)))]
                  )
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c(
              "p",
              [
                _c(
                  "router-link",
                  { attrs: { to: "/" + track.download_code } },
                  [
                    _c("b", [
                      _vm._v(
                        _vm._s(_vm.priceCurrency.currency) +
                          " " +
                          _vm._s(_vm.priceCurrency.price.toFixed(2))
                      )
                    ])
                  ]
                ),
                _vm._v("  "),
                _c("b", [_vm._v(_vm._s(track.downloads))]),
                _vm._v(
                  "\n                Purchases    " +
                    _vm._s(_vm.priceCurrency.currency) +
                    " " +
                    _vm._s(
                      (
                        ((track.downloads * _vm.priceCurrency.price) / 100) *
                        75
                      ).toFixed(2)
                    ) +
                    "\n            "
                )
              ],
              1
            )
          ],
          1
        )
      }),
      0
    ),
    _vm._v(" "),
    _c("div", { staticStyle: { clear: "both" } }, [
      _vm.music.current_page > 1
        ? _c(
            "button",
            {
              staticClass: "prev",
              on: {
                click: function($event) {
                  return _vm.getResults(_vm.music.current_page - 1)
                }
              }
            },
            [_vm._v(" <")]
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.music.current_page != _vm.music.last_page
        ? _c("h2", [_vm._v(_vm._s(_vm.music.current_page) + " ")])
        : _vm._e(),
      _vm._v(" "),
      _vm.music.current_page != _vm.music.last_page
        ? _c(
            "button",
            {
              staticClass: "next",
              on: {
                click: function($event) {
                  return _vm.getResults(_vm.music.current_page + 1)
                }
              }
            },
            [_vm._v(" >  ")]
          )
        : _vm._e()
    ]),
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
    }),
    _vm._v(" "),
    _vm.music.data == ""
      ? _c("p", { staticClass: "nothing", attrs: { align: "center" } }, [
          _vm._v("You have no new paid music.")
        ])
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/website/profile/sales/sales.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/website/profile/sales/sales.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sales_vue_vue_type_template_id_6d9b68f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sales.vue?vue&type=template&id=6d9b68f4&scoped=true& */ "./resources/js/components/website/profile/sales/sales.vue?vue&type=template&id=6d9b68f4&scoped=true&");
/* harmony import */ var _sales_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sales.vue?vue&type=script&lang=js& */ "./resources/js/components/website/profile/sales/sales.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _sales_vue_vue_type_style_index_0_id_6d9b68f4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sales.vue?vue&type=style&index=0&id=6d9b68f4&scoped=true&lang=css& */ "./resources/js/components/website/profile/sales/sales.vue?vue&type=style&index=0&id=6d9b68f4&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _sales_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _sales_vue_vue_type_template_id_6d9b68f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _sales_vue_vue_type_template_id_6d9b68f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6d9b68f4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/website/profile/sales/sales.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/website/profile/sales/sales.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/website/profile/sales/sales.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sales_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./sales.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/website/profile/sales/sales.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sales_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/website/profile/sales/sales.vue?vue&type=style&index=0&id=6d9b68f4&scoped=true&lang=css&":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/components/website/profile/sales/sales.vue?vue&type=style&index=0&id=6d9b68f4&scoped=true&lang=css& ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_sales_vue_vue_type_style_index_0_id_6d9b68f4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader??ref--6-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./sales.vue?vue&type=style&index=0&id=6d9b68f4&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/website/profile/sales/sales.vue?vue&type=style&index=0&id=6d9b68f4&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_sales_vue_vue_type_style_index_0_id_6d9b68f4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_sales_vue_vue_type_style_index_0_id_6d9b68f4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_sales_vue_vue_type_style_index_0_id_6d9b68f4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_sales_vue_vue_type_style_index_0_id_6d9b68f4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_sales_vue_vue_type_style_index_0_id_6d9b68f4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/website/profile/sales/sales.vue?vue&type=template&id=6d9b68f4&scoped=true&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/website/profile/sales/sales.vue?vue&type=template&id=6d9b68f4&scoped=true& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_sales_vue_vue_type_template_id_6d9b68f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./sales.vue?vue&type=template&id=6d9b68f4&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/website/profile/sales/sales.vue?vue&type=template&id=6d9b68f4&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_sales_vue_vue_type_template_id_6d9b68f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_sales_vue_vue_type_template_id_6d9b68f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);