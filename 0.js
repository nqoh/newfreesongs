(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/App.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/App.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _website_header_header_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./website/header/header.vue */ "./resources/js/components/website/header/header.vue");
/* harmony import */ var _website_footer_footer_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./website/footer/footer.vue */ "./resources/js/components/website/footer/footer.vue");
/* harmony import */ var _website_modal_modal_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./website/modal/modal.vue */ "./resources/js/components/website/modal/modal.vue");
/* harmony import */ var v_offline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! v-offline */ "./node_modules/v-offline/dist/v-offline.esm.js");
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
  components: {
    appHeader: _website_header_header_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    appFooter: _website_footer_footer_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    appModal: _website_modal_modal_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    offline: v_offline__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {};
  },
  methods: {
    handleConnectivityChange: function handleConnectivityChange(status) {
      // console.log(status);
      if (status) {
        _('state').innerHTML = "You back Online";
        $('#state').removeClass('fadeIn');
        setTimeout(function () {
          $('#state').addClass('fadeOut');
        }, 2000); //  $('#state').addClass('fadeOut')

        /* $('#state').removeClass('fadeOut')*/
      } else {
        $('#state').addClass('fadeIn');
        $('#state').removeClass('fadeOut');
        _('state').innerHTML = "You are Offline";
        _('state').style.display = "block";
      }
    }
  },

  /* head: {
       title: {
           inner: 'It will be a pleasure'
       },
       meta: [
           { property: 'fb:app_id', content: '265391744215464' },
           { property: 'og:title', content: 'Content Title' },
           // with shorthand
           { p: 'og:image', c: 'http://olova.olovamp3.com/pictures/nqobile.jpg' },
           ],
       link: [
           { rel: 'canonical', href: 'http://olova.olovamp3.com/nqobile', id: 'canonical' },
             ]
   },*/
  metaInfo: {
    title: 'MMusic From All-Over',
    titleTemplate: '%s | OlovaMp3 ',
    meta: [{
      name: 'viewport',
      content: "width=device-width, initial-scale=1"
    }, {
      property: "og:image",
      content: "http://olova.olovamp3.com/pictures/nqobile.jpg"
    }, {
      property: "og:title",
      content: "Download OlovaMp3"
    }, {
      property: "fb:app_id",
      content: "265391744215464"
    }],
    link: [{
      rel: "stylesheet",
      href: "../../../../../../css/animate.min.css"
    }, {
      rel: "section",
      href: "{!! asset('thumbnails/favicon.ico')!!}"
    }, {
      rel: "canonical",
      href: "https://www.olova.olovamp3.com/nqobile"
    }]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/website/footer/footer.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/website/footer/footer.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
    return {};
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/website/header/header.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/website/header/header.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
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
function _(x) {
  return document.getElementById(x);
}


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      id: 0,
      name: 'Sign Up',
      username: '',
      logedin: false,
      dataList: this.$session.get('data'),
      image: '/pictures/newuser.gif',
      color: 'white'
    };
  },
  created: function created() {
    var _this = this;

    _app__WEBPACK_IMPORTED_MODULE_0__["buss"].$on('userLogin', function () {
      if (_this.$session.has('id') && _this.$session.has('name') && _this.$session.has('username')) {
        _this.setSessions();
      } else {
        _this.Refreshsessions();
      }
    });
    this.Refreshsessions(); //  this.getSearchDataList();

    this.setColor();
    _app__WEBPACK_IMPORTED_MODULE_0__["buss"].$on('setColor', function () {
      _this.setColor();
    });
  },
  methods: {
    setColor: function setColor() {
      var _this2 = this;

      $.get('/api/setColor/', function (response) {
        if (response.message !== 0 || response.alert !== 0) {
          _this2.color = 'green';
        } else {
          _this2.color = 'white';
        }
      });
    },
    Refreshsessions: function Refreshsessions() {
      var _this3 = this;

      $.get('/api/getSessions', function (sessions) {
        if (sessions[0] !== null && sessions[1] !== null && sessions[2] !== null) {
          _this3.$session.start();

          _this3.$session.set('id', sessions[1]);

          _this3.$session.set('name', sessions[0]);

          _this3.$session.set('username', sessions[2]);

          _this3.$session.set('email', sessions[3]);

          _this3.setSessions();
        } else {
          _this3.id = 0;
          _this3.name = 'Sign Up';
          _this3.username = '';
          _this3.logedin = false;
        }
      });
    },
    Search: function Search() {
      this.$router.push('/search/' + _('search').value);
      _app__WEBPACK_IMPORTED_MODULE_0__["buss"].$emit('search', _('search').value);
    },
    getSearchDataList: function getSearchDataList() {
      var _this4 = this;

      $.get('/api/searchDataList', function (response) {
        _this4.$session.start();

        _this4.$session.set('data', response);
      });
    },
    setSessions: function setSessions() {
      var _this5 = this;

      this.id = this.$session.get('id');
      this.name = this.$session.get('name');
      this.username = "/profile/" + this.$session.get('username');
      this.logedin = true;
      $.get('/api/getUserImage/' + this.id, function (image) {
        _this5.image = image;
      });
      _app__WEBPACK_IMPORTED_MODULE_0__["buss"].$emit('MobileLogin', this.logedin);
    },
    LogOut: function LogOut() {
      var _this6 = this;

      this.id = 0;
      this.name = 'Sign Up';
      this.username = '';
      this.logedin = false;
      this.$session.destroy();
      $.get('/api/DestroySessions', function (data) {
        _app__WEBPACK_IMPORTED_MODULE_0__["buss"].$emit('account_type', '');
        _app__WEBPACK_IMPORTED_MODULE_0__["buss"].$emit('MobileLogin', _this6.logedin);

        _this6.$router.push('/');
      });
    },
    logIn: function logIn() {
      _app__WEBPACK_IMPORTED_MODULE_0__["buss"].$emit('login', 'Log In');
      $("[data-toggle=modal]").trigger({
        type: "click"
      });
    },
    signUp: function signUp() {
      _app__WEBPACK_IMPORTED_MODULE_0__["buss"].$emit('signup', "Sign Up");
      $("[data-toggle=modal]").trigger({
        type: "click"
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/website/footer/footer.vue?vue&type=style&index=0&id=b4230140&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/website/footer/footer.vue?vue&type=style&index=0&id=b4230140&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.container-fluid > .footer-box[data-v-b4230140]{\r\n    padding: 0px;\n}\n.footer-box div[data-v-b4230140]{\r\n    background: #b05f3c;\r\n    padding: 0px\n}\n#footer[data-v-b4230140]{\r\n    color: white\n}\n#footer a[data-v-b4230140]{\r\n    color:#eed5b7\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/website/header/header.vue?vue&type=style&index=0&id=de34e9c0&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/website/header/header.vue?vue&type=style&index=0&id=de34e9c0&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n#white[data-v-de34e9c0]{\n    color: white;\n}\n#green[data-v-de34e9c0]{\n    color: lightgreen;\n}\n.signup[data-v-de34e9c0] {\n    font-weight: bold;\n    color: white;\n    cursor: pointer;\n    padding: 0px\n}\n.logo-container[data-v-de34e9c0] {\n    background: #b05f3c;\n    border: none;\n    border-radius: 0px;\n    margin: 0px;\n    padding: 0px;\n}\n.navbar[data-v-de34e9c0] {\n    margin-top: 2px;\n    background: #b05f3c;\n    padding: 0px;\n}\n.navbar li[data-v-de34e9c0] {\n    float: right;\n}\n.has-search .form-control[data-v-de34e9c0] {\n    padding-left: 2.375rem;\n    margin-right: 50%\n}\n.navbar-expand .navbar-nav .nav-link[data-v-de34e9c0] {\n    padding-right: 0.2rem;\n    padding-left: 0.2rem;\n}\n.has-search .form-control-feedback[data-v-de34e9c0] {\n    position: absolute;\n    z-index: 2;\n    display: block;\n    width: 2.375rem;\n    height: 2.375rem;\n    line-height: 2.375rem;\n    outline: none;\n    text-align: center;\n    pointer-events: none;\n    color: #aaa;\n}\n.form-control[data-v-de34e9c0] {\n    outline: none;\n    border: none;\n    height: 30px\n}\n.input-group-text[data-v-de34e9c0] {\n    border: none;\n    cursor: pointer;\n    height: 30px;\n    width: 33px;\n    background: rgb(149, 75, 75);\n}\n.input-group-text[data-v-de34e9c0] {\n    background-image: url(\"/thumbnails/searr.png\")\n}\n.input-group-text[data-v-de34e9c0]:hover {\n    background-image: url(\"/thumbnails/seeer1.png\")\n}\n.desktop_search_box[data-v-de34e9c0] {\n    margin-left: 3%;\n    padding: 0;\n}\n.mobile_search_box[data-v-de34e9c0] {\n    width: 50%;\n    margin-left: 6%;\n    padding: 0;\n}\n.d-sm-none[data-v-de34e9c0] {\n    padding: 0px;\n    width: 40%;\n    margin-right: 1%;\n    margin-left: 6%;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/website/footer/footer.vue?vue&type=style&index=0&id=b4230140&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/website/footer/footer.vue?vue&type=style&index=0&id=b4230140&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./footer.vue?vue&type=style&index=0&id=b4230140&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/website/footer/footer.vue?vue&type=style&index=0&id=b4230140&scoped=true&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/website/header/header.vue?vue&type=style&index=0&id=de34e9c0&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/website/header/header.vue?vue&type=style&index=0&id=de34e9c0&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./header.vue?vue&type=style&index=0&id=de34e9c0&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/website/header/header.vue?vue&type=style&index=0&id=de34e9c0&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/App.vue?vue&type=template&id=332fccf4&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/App.vue?vue&type=template&id=332fccf4& ***!
  \******************************************************************************************************************************************************************************************************/
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
    [
      _c("app-header"),
      _vm._v(" "),
      _c("router-view"),
      _vm._v(" "),
      _c("app-footer"),
      _vm._v(" "),
      _c("app-modal"),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "animated fadeIn",
          staticStyle: {
            background: "#eed5b7",
            border: "1px solid #d19275",
            padding: "10px",
            display: "none",
            right: "0px",
            bottom: "5px",
            color: "#954b4b",
            position: "fixed"
          },
          attrs: { id: "state" }
        },
        [_vm._v("\n        You are offline\n    ")]
      ),
      _vm._v(" "),
      _c("offline", {
        on: { "detected-condition": _vm.handleConnectivityChange }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/website/footer/footer.vue?vue&type=template&id=b4230140&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/website/footer/footer.vue?vue&type=template&id=b4230140&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
    {
      staticClass: "container-fluid",
      staticStyle: { padding: "0px 5px 0px 5px", margin: "0px" }
    },
    [
      _c("div", { staticClass: "footer-box" }, [
        _c("div", { attrs: { align: "center" } }, [
          _c(
            "p",
            { attrs: { id: "footer" } },
            [
              _vm._v("OlovaMp3 © " + _vm._s(new Date().getFullYear()) + "   "),
              _c("router-link", { attrs: { to: "/contactus" } }, [
                _c("a", [_c("b", [_vm._v("Contact Us")])])
              ]),
              _vm._v(" - "),
              _c("router-link", { attrs: { to: "/aboutus" } }, [
                _c("a", [_c("b", [_vm._v("About Us")])])
              ]),
              _vm._v(" -\n                "),
              _c("router-link", { attrs: { to: "/privacy" } }, [
                _c("a", [_c("b", [_vm._v("Privacy Policy")])])
              ]),
              _vm._v(" - "),
              _c("router-link", { attrs: { to: "/help" } }, [
                _c("a", [_c("b", [_vm._v("Help")])])
              ]),
              _vm._v("\n                - "),
              _c("router-link", { attrs: { to: "/copyright" } }, [
                _c("a", [_c("b", [_vm._v("Copyright")])])
              ]),
              _vm._v(" - "),
              _c("router-link", { attrs: { to: "/terms" } }, [
                _c("a", [_c("b", [_vm._v("Terms and Conditions")])])
              ]),
              _vm._m(0),
              _vm._v(" "),
              _vm._m(1),
              _vm._v(" "),
              _vm._m(2),
              _vm._v(" "),
              _c("br"),
              _vm._v(" Music Social Media\n            ")
            ],
            1
          )
        ])
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        attrs: {
          href: "https://www.facebook.com/pages/Mp3Olova/1512466575638686",
          shape: "rect",
          alt: "Like OlovaMp3"
        }
      },
      [
        _c("img", {
          staticStyle: { width: "21px", height: "17px" },
          attrs: { src: "/thumbnails/faceb.png" }
        })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        attrs: {
          href: "https://twitter.com/OlovaMp3",
          shape: "rect",
          alt: "follow OlovaMp3"
        }
      },
      [
        _c("img", {
          staticStyle: { width: "21px", height: "17px" },
          attrs: { src: "/thumbnails/twit.png" }
        })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        attrs: {
          href: "https://www.instagram.com/olovamp3",
          shape: "rect",
          alt: "follow OlovaMp3"
        }
      },
      [
        _c("img", {
          staticStyle: { width: "21px", height: "17px" },
          attrs: { src: "/thumbnails/insta.png" }
        })
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/website/header/header.vue?vue&type=template&id=de34e9c0&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/website/header/header.vue?vue&type=template&id=de34e9c0&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
    {
      staticClass: "container-fluid",
      staticStyle: { padding: "5px 5px 0px 5px", margin: "0px" }
    },
    [
      _c("router-link", { attrs: { to: "/" } }, [
        _c("a", { attrs: { href: "#" } }, [
          _c("div", { staticClass: "alert logo-container" }, [
            _c("img", {
              staticClass: "card-img embed-responsive",
              attrs: { src: "/thumbnails/logo.png" }
            })
          ])
        ])
      ]),
      _vm._v(" "),
      _c("nav", { staticClass: "navbar navbar-expand " }, [
        _c(
          "div",
          {
            staticClass:
              "input-group desktop_search_box col-xl-4 col-lg-4 col-md-5 col-sm-6 col-6"
          },
          [
            _c("input", {
              staticClass: "form-control awesomplete",
              staticStyle: { "padding-right": "8%" },
              attrs: {
                type: "text",
                id: "search",
                data: _vm.dataList,
                placeholder: "Search..."
              },
              on: {
                keyup: function($event) {
                  if (
                    !$event.type.indexOf("key") &&
                    _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                  ) {
                    return null
                  }
                  return _vm.Search()
                },
                "~keyup": function($event) {
                  return _vm.getSearchDataList()
                }
              }
            }),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "input-group-prepend",
                on: {
                  click: function($event) {
                    return _vm.Search()
                  }
                }
              },
              [
                _c("span", {
                  staticClass: "input-group-text",
                  attrs: { id: "mm" }
                })
              ]
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "ul",
          { staticClass: "navbar-nav  embed-responsive" },
          [
            _c(
              "span",
              {
                staticClass: "d-none d-xl-block d-lg-block col-md-12",
                staticStyle: { padding: "0px" }
              },
              [
                !_vm.logedin
                  ? _c("li", { staticClass: "nav-item" }, [
                      _c(
                        "a",
                        {
                          staticClass: "nav-link",
                          staticStyle: {
                            cursor: "pointer",
                            "font-weight": "bold",
                            color: "white"
                          },
                          on: {
                            click: function($event) {
                              return _vm.logIn()
                            }
                          }
                        },
                        [_vm._v("Log In")]
                      )
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.logedin
                  ? _c("li", { staticClass: "nav-item" }, [
                      _c(
                        "a",
                        {
                          staticClass: "nav-link",
                          staticStyle: {
                            "font-weight": "bold",
                            color: "white",
                            cursor: "pointer"
                          },
                          on: {
                            click: function($event) {
                              return _vm.LogOut()
                            }
                          }
                        },
                        [_vm._v("Log Out")]
                      )
                    ])
                  : _vm._e()
              ]
            ),
            _vm._v(" "),
            !_vm.logedin
              ? _c(
                  "span",
                  {
                    staticClass: "d-none d-xl-none d-lg-none d-block",
                    staticStyle: { padding: "0px" }
                  },
                  [_vm._m(0)]
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.logedin
              ? _c(
                  "span",
                  {
                    staticClass: "d-none d-xl-none d-lg-none d-block",
                    staticStyle: { padding: "0px" }
                  },
                  [
                    _c("li", [
                      _c(
                        "a",
                        {
                          staticClass: "nav-link",
                          staticStyle: {
                            cursor: "pointer",
                            "font-weight": "bold",
                            color: "white"
                          },
                          on: {
                            click: function($event) {
                              return _vm.LogOut()
                            }
                          }
                        },
                        [_vm._v("Log Out")]
                      )
                    ])
                  ]
                )
              : _vm._e(),
            _vm._v(" "),
            _c("span", {
              staticStyle: { display: "none" },
              attrs: {
                "data-toggle": "modal",
                "data-target": "#signup",
                "aria-hidden": "true"
              }
            }),
            _vm._v(" "),
            _vm._m(1),
            _vm._v(" "),
            _c(
              "span",
              {
                staticClass: "d-none d-xl-block d-lg-block  col-md-12",
                staticStyle: { padding: "0px" }
              },
              [
                !_vm.logedin
                  ? _c("li", { staticClass: "nav-item" }, [
                      _c(
                        "a",
                        {
                          staticClass: "nav-link",
                          staticStyle: {
                            "font-weight": "bold",
                            color: "white",
                            cursor: "pointer"
                          },
                          on: {
                            click: function($event) {
                              return _vm.signUp()
                            }
                          }
                        },
                        [_vm._v("Sign Up")]
                      )
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.logedin
                  ? _c(
                      "li",
                      { staticClass: "nav-item" },
                      [
                        _c("router-link", { attrs: { to: "/profile/feeds" } }, [
                          _c(
                            "a",
                            {
                              staticClass: "nav-link",
                              staticStyle: {
                                "font-weight": "bold",
                                cursor: "pointer"
                              },
                              attrs: { id: _vm.color }
                            },
                            [
                              _vm._v(
                                "\n                            " +
                                  _vm._s(
                                    _vm.name.charAt(0).toUpperCase() +
                                      _vm.name.slice(1)
                                  )
                              )
                            ]
                          )
                        ])
                      ],
                      1
                    )
                  : _vm._e()
              ]
            ),
            _vm._v(" "),
            !_vm.logedin
              ? _c(
                  "span",
                  {
                    staticClass: "d-none d-xl-none d-lg-none d-block",
                    staticStyle: { padding: "0px" }
                  },
                  [
                    _c("router-link", { attrs: { to: "/signup", tag: "li" } }, [
                      _c(
                        "a",
                        {
                          staticClass: "nav-link",
                          staticStyle: { "font-weight": "bold", color: "white" }
                        },
                        [_vm._v("Sign Up")]
                      )
                    ])
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.logedin
              ? _c(
                  "span",
                  {
                    staticClass:
                      "d-none d-xl-none d-lg-none d-md-block d-block",
                    staticStyle: { padding: "0px" }
                  },
                  [
                    _c(
                      "router-link",
                      { attrs: { to: "/profile/feeds", tag: "li" } },
                      [
                        _c(
                          "a",
                          {
                            staticClass: "nav-link",
                            staticStyle: { "font-weight": "bold" },
                            attrs: { id: _vm.color }
                          },
                          [
                            _vm._v(
                              _vm._s(
                                _vm.name.charAt(0).toUpperCase() +
                                  _vm.name.slice(1).substr(0, 7)
                              )
                            )
                          ]
                        )
                      ]
                    )
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _c(
              "router-link",
              {
                staticClass: "nav-item",
                attrs: { to: "/profile/feeds", tag: "li" }
              },
              [
                _c("a", [
                  _vm.username
                    ? _c("img", {
                        staticClass:
                          "d-none d-xl-block  d-lg-block d-md-block d-sm-block d-none",
                        staticStyle: { width: "40px" },
                        attrs: { src: _vm.image }
                      })
                    : _vm._e()
                ])
              ]
            )
          ],
          1
        )
      ])
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _c(
        "a",
        {
          staticClass: "nav-link",
          staticStyle: { "font-weight": "bold", color: "white" },
          attrs: { href: "#login" }
        },
        [_vm._v("Log In")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "li",
      { staticClass: "nav-item", staticStyle: { margin: "0px" } },
      [
        _c("a", { staticClass: "nav-link", staticStyle: { color: "white" } }, [
          _vm._v("|")
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/App.vue":
/*!*****************************************!*\
  !*** ./resources/js/components/App.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_vue_vue_type_template_id_332fccf4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=332fccf4& */ "./resources/js/components/App.vue?vue&type=template&id=332fccf4&");
/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ "./resources/js/components/App.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _App_vue_vue_type_template_id_332fccf4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _App_vue_vue_type_template_id_332fccf4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/App.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/App.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/components/App.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/App.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/App.vue?vue&type=template&id=332fccf4&":
/*!************************************************************************!*\
  !*** ./resources/js/components/App.vue?vue&type=template&id=332fccf4& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_332fccf4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=332fccf4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/App.vue?vue&type=template&id=332fccf4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_332fccf4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_332fccf4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/website/footer/footer.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/website/footer/footer.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _footer_vue_vue_type_template_id_b4230140_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer.vue?vue&type=template&id=b4230140&scoped=true& */ "./resources/js/components/website/footer/footer.vue?vue&type=template&id=b4230140&scoped=true&");
/* harmony import */ var _footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.vue?vue&type=script&lang=js& */ "./resources/js/components/website/footer/footer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _footer_vue_vue_type_style_index_0_id_b4230140_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer.vue?vue&type=style&index=0&id=b4230140&scoped=true&lang=css& */ "./resources/js/components/website/footer/footer.vue?vue&type=style&index=0&id=b4230140&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _footer_vue_vue_type_template_id_b4230140_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _footer_vue_vue_type_template_id_b4230140_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "b4230140",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/website/footer/footer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/website/footer/footer.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/website/footer/footer.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./footer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/website/footer/footer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/website/footer/footer.vue?vue&type=style&index=0&id=b4230140&scoped=true&lang=css&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/components/website/footer/footer.vue?vue&type=style&index=0&id=b4230140&scoped=true&lang=css& ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_style_index_0_id_b4230140_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./footer.vue?vue&type=style&index=0&id=b4230140&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/website/footer/footer.vue?vue&type=style&index=0&id=b4230140&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_style_index_0_id_b4230140_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_style_index_0_id_b4230140_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_style_index_0_id_b4230140_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_style_index_0_id_b4230140_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_style_index_0_id_b4230140_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/website/footer/footer.vue?vue&type=template&id=b4230140&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/website/footer/footer.vue?vue&type=template&id=b4230140&scoped=true& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_template_id_b4230140_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./footer.vue?vue&type=template&id=b4230140&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/website/footer/footer.vue?vue&type=template&id=b4230140&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_template_id_b4230140_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_template_id_b4230140_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/website/header/header.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/website/header/header.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header_vue_vue_type_template_id_de34e9c0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.vue?vue&type=template&id=de34e9c0&scoped=true& */ "./resources/js/components/website/header/header.vue?vue&type=template&id=de34e9c0&scoped=true&");
/* harmony import */ var _header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.vue?vue&type=script&lang=js& */ "./resources/js/components/website/header/header.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _header_vue_vue_type_style_index_0_id_de34e9c0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header.vue?vue&type=style&index=0&id=de34e9c0&scoped=true&lang=css& */ "./resources/js/components/website/header/header.vue?vue&type=style&index=0&id=de34e9c0&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _header_vue_vue_type_template_id_de34e9c0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _header_vue_vue_type_template_id_de34e9c0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "de34e9c0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/website/header/header.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/website/header/header.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/website/header/header.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./header.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/website/header/header.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/website/header/header.vue?vue&type=style&index=0&id=de34e9c0&scoped=true&lang=css&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/components/website/header/header.vue?vue&type=style&index=0&id=de34e9c0&scoped=true&lang=css& ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_id_de34e9c0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./header.vue?vue&type=style&index=0&id=de34e9c0&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/website/header/header.vue?vue&type=style&index=0&id=de34e9c0&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_id_de34e9c0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_id_de34e9c0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_id_de34e9c0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_id_de34e9c0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_id_de34e9c0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/website/header/header.vue?vue&type=template&id=de34e9c0&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/website/header/header.vue?vue&type=template&id=de34e9c0&scoped=true& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_template_id_de34e9c0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./header.vue?vue&type=template&id=de34e9c0&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/website/header/header.vue?vue&type=template&id=de34e9c0&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_template_id_de34e9c0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_template_id_de34e9c0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);