(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[46],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/website/profile/settings/security_settings.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/website/profile/settings/security_settings.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************/
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
function _(x) {
  return document.getElementById(x);
}


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      CPassword: '',
      NPassword: '',
      RPassword: ''
    };
  },
  created: function created() {
    _app__WEBPACK_IMPORTED_MODULE_0__["buss"].$emit('setColor', '');
  },
  watch: {
    CPassword: function CPassword(val) {
      if (val.length >= 6) {
        $.get('/getPassword/' + val, function (data) {
          if (data !== 'Ok') {
            _('ErrorCPassword').innerHTML = "Invalid Password";
            _('CPassword').style.border = "1px solid red";
            _("CPassword").value = "";

            _('CPassword').focus();
          } else {
            _('ErrorCPassword').innerHTML = "";
            _('CPassword').style.border = "1px solid #954b4b";
          }
        });
      } else {
        _('ErrorCPassword').innerHTML = "Invalid Password";
        _('CPassword').style.border = "1px solid red";

        _('CPassword').focus();
      }
    },
    NPassword: function NPassword(val) {
      if (val.length >= 6) {
        _('ErrorNPassword').innerHTML = "";
        _('NPassword').style.border = "1px solid #954b4b";
      } else {
        _('ErrorNPassword').innerHTML = "6 or more characters";
        _('NPassword').style.border = "1px solid red";

        _('NPassword').focus();
      }
    },
    RPassword: function RPassword(val) {
      if (val.match(this.RPassword) && val.length >= 6) {
        _('ErrorRPassword').innerHTML = "";
        _('RPassword').style.border = "1px solid #954b4b";
      } else {
        _('ErrorRPassword').innerHTML = "Password do not match";
        _('RPassword').style.border = "1px solid red";

        _('RPassword').focus();
      }
    }
  },
  methods: {
    changePasswrod: function changePasswrod() {
      if (this.RPassword !== "" && this.CPassword !== "" && this.NPassword) {
        var formData = new FormData();
        formData.append('CPassword', this.CPassword);
        formData.append('NPassword', this.NPassword);
        formData.append('RPassword', this.RPassword);
        var vm = this;
        $.ajaxSetup({
          headers: {
            'X-CSRF-Token': $('meta[name=_token]').attr('content')
          }
        });
        $.ajax({
          url: "/setPassword",
          data: formData,
          type: 'POST',
          contentType: false,
          cache: false,
          processData: false,
          success: function success(response) {
            if (response !== "Ok") {
              _('status').innerHTML = response;
              _('status').style.color = 'red';
            } else {
              _('status').innerHTML = "Password changed";
              _('status').style.color = 'green';
            }
          }
        });
      } else {
        _('status').innerHTML = "All fields required";
        _('status').style.color = 'red';
      }
    }
  },
  metaInfo: {
    title: 'Security'
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/website/profile/settings/security_settings.vue?vue&type=template&id=65d395fb&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/website/profile/settings/security_settings.vue?vue&type=template&id=65d395fb& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c("h2", [_vm._v("Change Password")]),
    _vm._v(" "),
    _c("div", { staticClass: "col-xl-4 col-md-6 col-lg-6 col-sm-9 col-9" }, [
      _c("span", { attrs: { id: "status" } }),
      _vm._v(" "),
      _c("div", { staticClass: "form-group" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.CPassword,
              expression: "CPassword"
            }
          ],
          staticClass: "form-control",
          attrs: { type: "password", id: "CPassword" },
          domProps: { value: _vm.CPassword },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.CPassword = $event.target.value
            }
          }
        })
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "col-xl-4 col-md-6 col-lg-6 col-sm-9 col-9" }, [
      _c("div", { staticClass: "form-group" }, [
        _vm._m(1),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.NPassword,
              expression: "NPassword"
            }
          ],
          staticClass: "form-control",
          attrs: { type: "password", id: "NPassword" },
          domProps: { value: _vm.NPassword },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.NPassword = $event.target.value
            }
          }
        })
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "col-xl-4 col-md-6 col-lg-6 col-sm-9 col-9" }, [
      _c("div", { staticClass: "form-group" }, [
        _vm._m(2),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.RPassword,
              expression: "RPassword"
            }
          ],
          staticClass: "form-control",
          attrs: { type: "password", id: "=RPassword" },
          domProps: { value: _vm.RPassword },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.RPassword = $event.target.value
            }
          }
        })
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticStyle: { clear: "both", "margin-left": "15px" } }, [
      _c(
        "button",
        {
          staticClass: "btn",
          on: {
            click: function($event) {
              return _vm.changePasswrod()
            }
          }
        },
        [_vm._v("Save")]
      )
    ]),
    _vm._v(" "),
    _c("br"),
    _vm._v(" "),
    _c(
      "p",
      { attrs: { align: "center" } },
      [
        _c(
          "router-link",
          { attrs: { to: "/profile/security/settings/deactivate" } },
          [
            _c("a", { staticStyle: { "font-size": "20px" } }, [
              _vm._v("Deactivate Account")
            ])
          ]
        )
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { fo: "Cell_Number" } }, [
      _vm._v("Current Password: "),
      _c("span", { staticClass: "star", attrs: { id: "ErrorCPassword" } })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { fo: "Cell_Number" } }, [
      _vm._v("New Password: "),
      _c("span", { staticClass: "star", attrs: { id: "ErrorNPassword" } })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { fo: "Cell_Number" } }, [
      _vm._v("Re-type Password: "),
      _c("span", { staticClass: "star", attrs: { id: "ErrorRPassword" } })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/website/profile/settings/security_settings.vue":
/*!********************************************************************************!*\
  !*** ./resources/js/components/website/profile/settings/security_settings.vue ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _security_settings_vue_vue_type_template_id_65d395fb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./security_settings.vue?vue&type=template&id=65d395fb& */ "./resources/js/components/website/profile/settings/security_settings.vue?vue&type=template&id=65d395fb&");
/* harmony import */ var _security_settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./security_settings.vue?vue&type=script&lang=js& */ "./resources/js/components/website/profile/settings/security_settings.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _security_settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _security_settings_vue_vue_type_template_id_65d395fb___WEBPACK_IMPORTED_MODULE_0__["render"],
  _security_settings_vue_vue_type_template_id_65d395fb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/website/profile/settings/security_settings.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/website/profile/settings/security_settings.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/website/profile/settings/security_settings.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_security_settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./security_settings.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/website/profile/settings/security_settings.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_security_settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/website/profile/settings/security_settings.vue?vue&type=template&id=65d395fb&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/website/profile/settings/security_settings.vue?vue&type=template&id=65d395fb& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_security_settings_vue_vue_type_template_id_65d395fb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./security_settings.vue?vue&type=template&id=65d395fb& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/website/profile/settings/security_settings.vue?vue&type=template&id=65d395fb&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_security_settings_vue_vue_type_template_id_65d395fb___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_security_settings_vue_vue_type_template_id_65d395fb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);