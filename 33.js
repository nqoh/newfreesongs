(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[33],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/website/profile/inbox/messages.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/website/profile/inbox/messages.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
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
      num: 10,
      messageInput: '',
      error: '',
      messages: [],
      myId: this.$session.get('id')
    };
  },
  created: function created() {
    this.getResults();
    _app__WEBPACK_IMPORTED_MODULE_0__["buss"].$emit('setColor', '');
  },
  methods: {
    SendMessage: function SendMessage() {
      if (this.messageInput !== "") {
        var formData = new FormData();
        formData.append('from_member_id', this.$route.params.id);
        formData.append('message', this.messageInput);
        var vm = this;
        $.ajaxSetup({
          headers: {
            'X-CSRF-Token': $('meta[name=_token]').attr('content')
          }
        });
        $.ajax({
          url: "/send/message",
          data: formData,
          type: 'POST',
          contentType: false,
          cache: false,
          processData: false,
          success: function success(response) {
            if (response === "Ok") {
              vm.messageInput = "";
              _app__WEBPACK_IMPORTED_MODULE_0__["buss"].$emit('setColor', '');
              vm.getResults(0);
            }
          }
        });
      }
    },
    LoardMoreMessages: function LoardMoreMessages(num) {
      var _this = this;

      var element = document.getElementById('wrap');

      if (element.scrollHeight - element.scrollTop === element.clientHeight) {
        $.get('/api/readMessages/' + this.$route.params.id + '/' + num, function (data) {
          if (data.messages.length > 0) {
            for (var i = 0; i < data.messages.length; i++) {
              _this.messages.push(data.messages[i]);
            }

            _this.num += 10;
          }
        });
      }
    },
    getResults: function getResults(page) {
      var _this2 = this;

      if (typeof page === 'undefined') {
        page = 1;
      }

      $.get('/api/readMessages/' + this.$route.params.id + '/' + 0, function (data) {
        _this2.messages = data.messages;
        _this2.error = data.error;
      });
    }
  },
  metaInfo: {
    title: 'Messages'
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/website/profile/inbox/messages.vue?vue&type=style&index=0&id=2a84954c&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/website/profile/inbox/messages.vue?vue&type=style&index=0&id=2a84954c&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.msg[data-v-2a84954c] {\n    height: 50px;\n    margin: 0px;\n}\n.btn[data-v-2a84954c] {\n    height: 50px;\n    margin-left: 2px\n}\n.alert[data-v-2a84954c] {\n    box-shadow: 0px 0px 2px 0px rgb(149, 75, 75);\n    padding: 5px;\n}\n.col-10[data-v-2a84954c] {\n    padding: 2px 0px 0px 0px;\n}\n.col-10 div[data-v-2a84954c] {\n    margin-left: 10px;\n    opacity: .6;\n}\n.msgBox[data-v-2a84954c] {\n    height: 430px;\n    width: 100%;\n    padding: 3px;\n    overflow: auto;\n}\n.msgBox[data-v-2a84954c]::-webkit-scrollbar {\n    width: 6px;\n    background-color: transparent;\n}\n.msgBox[data-v-2a84954c]::-webkit-scrollbar-thumb {\n    background-color: rgb(149, 75, 75);\n}\n.msgBox[data-v-2a84954c]::-webkit-scrollbar-track {\n/*    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);*/\n    background-color: transparent;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/website/profile/inbox/messages.vue?vue&type=style&index=0&id=2a84954c&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/website/profile/inbox/messages.vue?vue&type=style&index=0&id=2a84954c&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--6-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./messages.vue?vue&type=style&index=0&id=2a84954c&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/website/profile/inbox/messages.vue?vue&type=style&index=0&id=2a84954c&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/website/profile/inbox/messages.vue?vue&type=template&id=2a84954c&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/website/profile/inbox/messages.vue?vue&type=template&id=2a84954c&scoped=true& ***!
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
    _c(
      "div",
      { staticClass: "row", staticStyle: { padding: "0px 0px 0px 11%" } },
      [
        _c(
          "p",
          {
            staticStyle: { color: "red", "font-size": "20px" },
            attrs: { align: "center" }
          },
          [_vm._v(_vm._s(_vm.error))]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "form-group col-8",
            staticStyle: { padding: "0px", margin: "0px" },
            attrs: { align: "center" }
          },
          [
            _vm.error == ""
              ? _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.messageInput,
                      expression: "messageInput"
                    }
                  ],
                  staticClass: "form-control msg",
                  staticStyle: { padding: "0px" },
                  domProps: { value: _vm.messageInput },
                  on: {
                    keyup: function($event) {
                      if (
                        !$event.type.indexOf("key") &&
                        _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                      ) {
                        return null
                      }
                      return _vm.SendMessage()
                    },
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.messageInput = $event.target.value
                    }
                  }
                })
              : _vm._e()
          ]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "col-4", staticStyle: { padding: "0px" } }, [
          _vm.error == ""
            ? _c(
                "button",
                {
                  staticClass: "btn",
                  on: {
                    click: function($event) {
                      return _vm.SendMessage()
                    }
                  }
                },
                [_vm._v("Send")]
              )
            : _vm._e()
        ])
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "msgBox",
        attrs: { id: "wrap" },
        on: {
          scroll: function($event) {
            return _vm.LoardMoreMessages(_vm.num)
          }
        }
      },
      _vm._l(_vm.messages, function(message) {
        return _c("div", [
          message.from_member_id != _vm.myId
            ? _c(
                "div",
                { staticClass: "col-10", staticStyle: { float: "left" } },
                [
                  _c("div", [
                    _c("span", [
                      _vm._v(
                        " " +
                          _vm._s(_vm._f("formatDate")(message.created_at)) +
                          " "
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("p", {
                    staticClass: "alert",
                    domProps: { innerHTML: _vm._s(message.message) }
                  })
                ]
              )
            : _vm._e(),
          _vm._v(" "),
          message.from_member_id == _vm.myId
            ? _c(
                "div",
                { staticClass: "col-10", staticStyle: { float: "right" } },
                [
                  _c("div", [
                    _c("span", [
                      _vm._v(
                        " " +
                          _vm._s(_vm._f("formatDate")(message.created_at)) +
                          " "
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("p", {
                    staticClass: "alert",
                    domProps: { innerHTML: _vm._s(message.message) }
                  })
                ]
              )
            : _vm._e()
        ])
      }),
      0
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/website/profile/inbox/messages.vue":
/*!********************************************************************!*\
  !*** ./resources/js/components/website/profile/inbox/messages.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _messages_vue_vue_type_template_id_2a84954c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./messages.vue?vue&type=template&id=2a84954c&scoped=true& */ "./resources/js/components/website/profile/inbox/messages.vue?vue&type=template&id=2a84954c&scoped=true&");
/* harmony import */ var _messages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./messages.vue?vue&type=script&lang=js& */ "./resources/js/components/website/profile/inbox/messages.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _messages_vue_vue_type_style_index_0_id_2a84954c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./messages.vue?vue&type=style&index=0&id=2a84954c&scoped=true&lang=css& */ "./resources/js/components/website/profile/inbox/messages.vue?vue&type=style&index=0&id=2a84954c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _messages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _messages_vue_vue_type_template_id_2a84954c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _messages_vue_vue_type_template_id_2a84954c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2a84954c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/website/profile/inbox/messages.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/website/profile/inbox/messages.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/website/profile/inbox/messages.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_messages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./messages.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/website/profile/inbox/messages.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_messages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/website/profile/inbox/messages.vue?vue&type=style&index=0&id=2a84954c&scoped=true&lang=css&":
/*!*****************************************************************************************************************************!*\
  !*** ./resources/js/components/website/profile/inbox/messages.vue?vue&type=style&index=0&id=2a84954c&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_messages_vue_vue_type_style_index_0_id_2a84954c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader??ref--6-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./messages.vue?vue&type=style&index=0&id=2a84954c&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/website/profile/inbox/messages.vue?vue&type=style&index=0&id=2a84954c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_messages_vue_vue_type_style_index_0_id_2a84954c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_messages_vue_vue_type_style_index_0_id_2a84954c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_messages_vue_vue_type_style_index_0_id_2a84954c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_messages_vue_vue_type_style_index_0_id_2a84954c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_messages_vue_vue_type_style_index_0_id_2a84954c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/website/profile/inbox/messages.vue?vue&type=template&id=2a84954c&scoped=true&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/website/profile/inbox/messages.vue?vue&type=template&id=2a84954c&scoped=true& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_messages_vue_vue_type_template_id_2a84954c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./messages.vue?vue&type=template&id=2a84954c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/website/profile/inbox/messages.vue?vue&type=template&id=2a84954c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_messages_vue_vue_type_template_id_2a84954c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_messages_vue_vue_type_template_id_2a84954c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);