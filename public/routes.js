(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["routes"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/website/aboutus/aboutus.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/website/aboutus/aboutus.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modal_modal_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modal/modal.vue */ "./resources/js/components/website/modal/modal.vue");
/* harmony import */ var v_offline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! v-offline */ "./node_modules/v-offline/dist/v-offline.esm.js");
/* harmony import */ var _website_login_mobile_login_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../website/login/mobile_login.vue */ "./resources/js/components/website/login/mobile_login.vue");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../app */ "./resources/js/app.js");
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
  components: {
    appRegister: _modal_modal_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  metaInfo: {
    title: 'AboutUs',
    meta: [{
      name: 'Description',
      content: 'We are a music platform, we provide our services for' + ' artists who are looking for an easy way to store music files online than share and distribute it in' + ' various social media platforms.'
    }]
  },
  created: function created() {
    _app__WEBPACK_IMPORTED_MODULE_3__["buss"].$emit('setColor', '');
    window.scrollTo(0, 0);
  }
});

/***/ }),

/***/ "./node_modules/v-offline/dist/v-offline.esm.js":
/*!******************************************************!*\
  !*** ./node_modules/v-offline/dist/v-offline.esm.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var EVENTS = ['online', 'offline', 'load'];

var script = {
  name: 'VOffline',
  props: {
    slotName: {
      type: String,
      required: false,
      default: 'online'
    },
    onlineClass: {
      type: String,
      required: false,
      default: ''
    },
    offlineClass: {
      type: String,
      required: false,
      default: ''
    }
  },
  data: function data() {
    return {
      isOnline: navigator.onLine || false
    };
  },
  computed: {
    computedClass: function computedClass() {
      return this.isOnline ? this.onlineClass : this.offlineClass;
    }
  },
  created: function created() {
    var _this = this;

    EVENTS.forEach(function (event) {
      return window.addEventListener(event, _this.updateOnlineStatus);
    });
  },
  beforeDestroy: function beforeDestroy() {
    var _this2 = this;

    EVENTS.forEach(function (event) {
      return window.removeEventListener(event, _this2.updateOnlineStatus);
    });
  },

  methods: {
    updateOnlineStatus: function updateOnlineStatus() {
      this.isOnline = navigator.onLine || false;
      this.$emit('detected-condition', this.isOnline);
    }
  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  if (typeof shadowMode !== 'boolean') {
    createInjectorSSR = createInjector;
    createInjector = shadowMode;
    shadowMode = false;
  }

  var options = typeof script === 'function' ? script.options : script;

  if (template && template.render) {
    options.render = template.render;
    options.staticRenderFns = template.staticRenderFns;
    options._compiled = true;

    if (isFunctionalTemplate) {
      options.functional = true;
    }
  }

  if (scopeId) {
    options._scopeId = scopeId;
  }

  var hook;

  if (moduleIdentifier) {
    hook = function hook(context) {
      context = context || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;

      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
      }

      if (style) {
        style.call(this, createInjectorSSR(context));
      }

      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    };

    options._ssrRegister = hook;
  } else if (style) {
    hook = shadowMode ? function () {
      style.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
    } : function (context) {
      style.call(this, createInjector(context));
    };
  }

  if (hook) {
    if (options.functional) {
      var originalRender = options.render;

      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      var existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }

  return script;
}

var normalizeComponent_1 = normalizeComponent;

var __vue_script__ = script;

var __vue_render__ = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { class: _vm.computedClass }, [_vm._t(_vm.slotName)], 2);
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

var __vue_inject_styles__ = undefined;

var __vue_scope_id__ = undefined;

var __vue_module_identifier__ = undefined;

var __vue_is_functional_template__ = false;


var VOffline = normalizeComponent_1({ render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ }, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, undefined, undefined);

/* harmony default export */ __webpack_exports__["default"] = (VOffline);


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/website/aboutus/aboutus.vue?vue&type=template&id=5263d458&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/website/aboutus/aboutus.vue?vue&type=template&id=5263d458& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "container-fluid", staticStyle: { padding: "5px" } },
      [
        _c("hr"),
        _vm._v(" "),
        _c("div", { staticClass: "sub-container" }, [
          _c("h1", { attrs: { align: "center" } }, [_vm._v(" About Us ")])
        ]),
        _vm._v(" "),
        _c("hr"),
        _vm._v(" "),
        _c("div", { staticClass: "sub-container" }, [
          _c(
            "p",
            {
              staticStyle: { "font-size": "140%" },
              attrs: { align: "center" }
            },
            [
              _vm._v("\n            NqobileWe are a Music Social Media."),
              _c("br"),
              _vm._v(
                "\n            We pride ourselves in giving music lovers a home to interact and\n            connect with other music lovers from all-over the world."
              ),
              _c("br"),
              _vm._v("\n\n            info@olovamp3.com "),
              _c("br"),
              _vm._v("\n            webmaster@olovamp3.com ")
            ]
          )
        ]),
        _vm._v(" "),
        _c("hr")
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/website/aboutus/aboutus.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/website/aboutus/aboutus.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _aboutus_vue_vue_type_template_id_5263d458___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aboutus.vue?vue&type=template&id=5263d458& */ "./resources/js/components/website/aboutus/aboutus.vue?vue&type=template&id=5263d458&");
/* harmony import */ var _aboutus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aboutus.vue?vue&type=script&lang=js& */ "./resources/js/components/website/aboutus/aboutus.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _aboutus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _aboutus_vue_vue_type_template_id_5263d458___WEBPACK_IMPORTED_MODULE_0__["render"],
  _aboutus_vue_vue_type_template_id_5263d458___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/website/aboutus/aboutus.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/website/aboutus/aboutus.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/website/aboutus/aboutus.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_aboutus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./aboutus.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/website/aboutus/aboutus.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_aboutus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/website/aboutus/aboutus.vue?vue&type=template&id=5263d458&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/website/aboutus/aboutus.vue?vue&type=template&id=5263d458& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_aboutus_vue_vue_type_template_id_5263d458___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./aboutus.vue?vue&type=template&id=5263d458& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/website/aboutus/aboutus.vue?vue&type=template&id=5263d458&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_aboutus_vue_vue_type_template_id_5263d458___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_aboutus_vue_vue_type_template_id_5263d458___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);