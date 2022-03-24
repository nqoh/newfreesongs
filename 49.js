(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[49],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/website/promote/artist_promote.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/website/promote/artist_promote.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/website/promote/artist_promote.vue?vue&type=template&id=deedcf14&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/website/promote/artist_promote.vue?vue&type=template&id=deedcf14& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
                  _c("br"),
                  _vm._v(" "),
                  _vm.show
                    ? _c("li", [
                        _c(
                          "b",
                          [
                            _vm._v(
                              "Reach up to 100 000 people,\n                "
                            ),
                            _c(
                              "router-link",
                              {
                                staticStyle: { color: "rgb(149,75,75)" },
                                attrs: { to: "/profile/ads" }
                              },
                              [_c("a", [_vm._v("advertise now")])]
                            )
                          ],
                          1
                        )
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  !_vm.show
                    ? _c("li", [
                        _c(
                          "b",
                          [
                            _vm._v(
                              "Reach up to 100 000 people,\n                "
                            ),
                            _c(
                              "router-link",
                              {
                                staticStyle: { color: "rgb(149,75,75)" },
                                attrs: { to: "/signup" }
                              },
                              [_c("a", [_vm._v("advertise now")])]
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
        _c("b", [_vm._v("Grow your fanbase.")])
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
          staticStyle: { "max-width": "250px", "max-height": "250px" },
          attrs: { src: "/thumbnails/artist.jpg" }
        })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _c("b", [_vm._v("Use credit card to promote your music")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [_c("b", [_vm._v("Grow your fanbase, world wide.")])])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/website/promote/artist_promote.vue":
/*!********************************************************************!*\
  !*** ./resources/js/components/website/promote/artist_promote.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _artist_promote_vue_vue_type_template_id_deedcf14___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./artist_promote.vue?vue&type=template&id=deedcf14& */ "./resources/js/components/website/promote/artist_promote.vue?vue&type=template&id=deedcf14&");
/* harmony import */ var _artist_promote_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./artist_promote.vue?vue&type=script&lang=js& */ "./resources/js/components/website/promote/artist_promote.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _artist_promote_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _artist_promote_vue_vue_type_template_id_deedcf14___WEBPACK_IMPORTED_MODULE_0__["render"],
  _artist_promote_vue_vue_type_template_id_deedcf14___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/website/promote/artist_promote.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/website/promote/artist_promote.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/website/promote/artist_promote.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_artist_promote_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./artist_promote.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/website/promote/artist_promote.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_artist_promote_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/website/promote/artist_promote.vue?vue&type=template&id=deedcf14&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/website/promote/artist_promote.vue?vue&type=template&id=deedcf14& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_artist_promote_vue_vue_type_template_id_deedcf14___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./artist_promote.vue?vue&type=template&id=deedcf14& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/website/promote/artist_promote.vue?vue&type=template&id=deedcf14&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_artist_promote_vue_vue_type_template_id_deedcf14___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_artist_promote_vue_vue_type_template_id_deedcf14___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);