(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[43],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/website/promote/fan_promote.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/website/promote/fan_promote.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../app */ "./resources/js/app.js");
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
      show: false
    };
  },
  created: function created() {
    _app__WEBPACK_IMPORTED_MODULE_0__["buss"].$emit('setColor', '');

    if (this.$session.has('id')) {
      this.show = true;
    } else {
      this.show = false;
    }
  },
  metaInfo: {
    title: 'How to Promote'
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/website/promote/fan_promote.vue?vue&type=style&index=0&id=4dda63d6&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/website/promote/fan_promote.vue?vue&type=style&index=0&id=4dda63d6&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nul li[data-v-4dda63d6]{\n    margin-top: 30px;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/website/promote/fan_promote.vue?vue&type=style&index=0&id=4dda63d6&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/website/promote/fan_promote.vue?vue&type=style&index=0&id=4dda63d6&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./fan_promote.vue?vue&type=style&index=0&id=4dda63d6&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/website/promote/fan_promote.vue?vue&type=style&index=0&id=4dda63d6&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/website/promote/fan_promote.vue?vue&type=template&id=4dda63d6&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/website/promote/fan_promote.vue?vue&type=template&id=4dda63d6&scoped=true& ***!
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
  return _c(
    "div",
    { staticClass: "container-fluid", staticStyle: { padding: "5px" } },
    [
      _c("hr"),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _c("hr"),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "sub-container", staticStyle: { height: "auto" } },
        [
          _c("div", { staticClass: "row" }, [
            _vm._m(1),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-6", staticStyle: { padding: "0px" } },
              [
                _c("ul", [
                  _vm._m(2),
                  _c("br"),
                  _vm._v(" "),
                  _vm._m(3),
                  _vm._v(" "),
                  _vm.show
                    ? _c("li", [
                        _c(
                          "b",
                          [
                            _vm._v(
                              "Receive your unique link\n                "
                            ),
                            _c(
                              "router-link",
                              {
                                staticStyle: { color: "rgb(149,75,75)" },
                                attrs: { to: "/profile/earnings" }
                              },
                              [_c("a", [_vm._v("here")])]
                            )
                          ],
                          1
                        ),
                        _c("br")
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  !_vm.show
                    ? _c("li", [
                        _c(
                          "b",
                          [
                            _vm._v(
                              "Receive your unique link\n                "
                            ),
                            _c(
                              "router-link",
                              {
                                staticStyle: { color: "rgb(149,75,75)" },
                                attrs: { to: "/signup" }
                              },
                              [_c("a", [_vm._v("here")])]
                            )
                          ],
                          1
                        ),
                        _c("br")
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm._m(4),
                  _vm._v(" "),
                  _vm.show
                    ? _c("li", [
                        _c(
                          "b",
                          [
                            _vm._v("keep track of your\n                "),
                            _c(
                              "router-link",
                              {
                                staticStyle: { color: "rgb(149,75,75)" },
                                attrs: { to: "/profile/earnings" }
                              },
                              [_c("a", [_vm._v("earnings")])]
                            )
                          ],
                          1
                        ),
                        _c("br")
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  !_vm.show
                    ? _c("li", [
                        _c(
                          "b",
                          [
                            _vm._v("keep track of your\n                "),
                            _c(
                              "router-link",
                              {
                                staticStyle: { color: "rgb(149,75,75)" },
                                attrs: { to: "/signup" }
                              },
                              [_c("a", [_vm._v("earnings")])]
                            )
                          ],
                          1
                        )
                      ])
                    : _vm._e()
                ])
              ]
            )
          ])
        ]
      )
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "sub-container" }, [
      _c("h1", { attrs: { align: "center" } }, [_vm._v(" Promotions  ")]),
      _vm._v(" "),
      _c("h2", { attrs: { align: "center" } }, [
        _c("b", [_vm._v("Earn money by promoting music.")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "col-6", staticStyle: { padding: "0px 0px 0px 3px" } },
      [
        _c("img", {
          staticClass: "card-img",
          staticStyle: { "max-width": "380px", "max-height": "380px" },
          attrs: { src: "/thumbnails/fan.png" }
        })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "span",
      { staticStyle: { "font-size": "26px", color: "rgb(149,75,75)" } },
      [_c("b", [_vm._v("Follow these 4 easy steps")])]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [_c("b", [_vm._v("Purchase any song ")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _c("b", [
        _vm._v("Start sharing your promo link on your social media platform. ")
      ]),
      _c("br")
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/website/promote/fan_promote.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/website/promote/fan_promote.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fan_promote_vue_vue_type_template_id_4dda63d6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fan_promote.vue?vue&type=template&id=4dda63d6&scoped=true& */ "./resources/js/components/website/promote/fan_promote.vue?vue&type=template&id=4dda63d6&scoped=true&");
/* harmony import */ var _fan_promote_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fan_promote.vue?vue&type=script&lang=js& */ "./resources/js/components/website/promote/fan_promote.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _fan_promote_vue_vue_type_style_index_0_id_4dda63d6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fan_promote.vue?vue&type=style&index=0&id=4dda63d6&scoped=true&lang=css& */ "./resources/js/components/website/promote/fan_promote.vue?vue&type=style&index=0&id=4dda63d6&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _fan_promote_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _fan_promote_vue_vue_type_template_id_4dda63d6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _fan_promote_vue_vue_type_template_id_4dda63d6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4dda63d6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/website/promote/fan_promote.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/website/promote/fan_promote.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/website/promote/fan_promote.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_fan_promote_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./fan_promote.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/website/promote/fan_promote.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_fan_promote_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/website/promote/fan_promote.vue?vue&type=style&index=0&id=4dda63d6&scoped=true&lang=css&":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/components/website/promote/fan_promote.vue?vue&type=style&index=0&id=4dda63d6&scoped=true&lang=css& ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_fan_promote_vue_vue_type_style_index_0_id_4dda63d6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./fan_promote.vue?vue&type=style&index=0&id=4dda63d6&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/website/promote/fan_promote.vue?vue&type=style&index=0&id=4dda63d6&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_fan_promote_vue_vue_type_style_index_0_id_4dda63d6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_fan_promote_vue_vue_type_style_index_0_id_4dda63d6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_fan_promote_vue_vue_type_style_index_0_id_4dda63d6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_fan_promote_vue_vue_type_style_index_0_id_4dda63d6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_fan_promote_vue_vue_type_style_index_0_id_4dda63d6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/website/promote/fan_promote.vue?vue&type=template&id=4dda63d6&scoped=true&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/website/promote/fan_promote.vue?vue&type=template&id=4dda63d6&scoped=true& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_fan_promote_vue_vue_type_template_id_4dda63d6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./fan_promote.vue?vue&type=template&id=4dda63d6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/website/promote/fan_promote.vue?vue&type=template&id=4dda63d6&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_fan_promote_vue_vue_type_template_id_4dda63d6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_fan_promote_vue_vue_type_template_id_4dda63d6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);