webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _css_adcloud_flexbox_grid_min_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../css/adcloud-flexbox-grid.min.css */ "./css/adcloud-flexbox-grid.min.css");
/* harmony import */ var _css_adcloud_flexbox_grid_min_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_css_adcloud_flexbox_grid_min_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _adobe_spectrum_css_dist_vars_spectrum_dark_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @adobe/spectrum-css/dist/vars/spectrum-dark.css */ "./node_modules/@adobe/spectrum-css/dist/vars/spectrum-dark.css");
/* harmony import */ var _adobe_spectrum_css_dist_vars_spectrum_dark_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_adobe_spectrum_css_dist_vars_spectrum_dark_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _adobe_spectrum_css_dist_vars_spectrum_darkest_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @adobe/spectrum-css/dist/vars/spectrum-darkest.css */ "./node_modules/@adobe/spectrum-css/dist/vars/spectrum-darkest.css");
/* harmony import */ var _adobe_spectrum_css_dist_vars_spectrum_darkest_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_adobe_spectrum_css_dist_vars_spectrum_darkest_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _adobe_spectrum_css_dist_vars_spectrum_light_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @adobe/spectrum-css/dist/vars/spectrum-light.css */ "./node_modules/@adobe/spectrum-css/dist/vars/spectrum-light.css");
/* harmony import */ var _adobe_spectrum_css_dist_vars_spectrum_light_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_adobe_spectrum_css_dist_vars_spectrum_light_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _adobe_spectrum_css_dist_vars_spectrum_lightest_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @adobe/spectrum-css/dist/vars/spectrum-lightest.css */ "./node_modules/@adobe/spectrum-css/dist/vars/spectrum-lightest.css");
/* harmony import */ var _adobe_spectrum_css_dist_vars_spectrum_lightest_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_adobe_spectrum_css_dist_vars_spectrum_lightest_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _adobe_spectrum_css_dist_vars_spectrum_large_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @adobe/spectrum-css/dist/vars/spectrum-large.css */ "./node_modules/@adobe/spectrum-css/dist/vars/spectrum-large.css");
/* harmony import */ var _adobe_spectrum_css_dist_vars_spectrum_large_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_adobe_spectrum_css_dist_vars_spectrum_large_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _adobe_spectrum_css_dist_vars_spectrum_medium_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @adobe/spectrum-css/dist/vars/spectrum-medium.css */ "./node_modules/@adobe/spectrum-css/dist/vars/spectrum-medium.css");
/* harmony import */ var _adobe_spectrum_css_dist_vars_spectrum_medium_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_adobe_spectrum_css_dist_vars_spectrum_medium_css__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _adobe_spectrum_css_dist_vars_spectrum_global_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @adobe/spectrum-css/dist/vars/spectrum-global.css */ "./node_modules/@adobe/spectrum-css/dist/vars/spectrum-global.css");
/* harmony import */ var _adobe_spectrum_css_dist_vars_spectrum_global_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_adobe_spectrum_css_dist_vars_spectrum_global_css__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _react_react_spectrum_FieldLabel__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @react/react-spectrum/FieldLabel */ "./node_modules/@react/react-spectrum/FieldLabel/index.js");
/* harmony import */ var _react_react_spectrum_FieldLabel__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_react_react_spectrum_FieldLabel__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _react_react_spectrum_Provider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @react/react-spectrum/Provider */ "./node_modules/@react/react-spectrum/Provider/index.js");
/* harmony import */ var _react_react_spectrum_Provider__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_react_react_spectrum_Provider__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _react_react_spectrum_Rule__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @react/react-spectrum/Rule */ "./node_modules/@react/react-spectrum/Rule/index.js");
/* harmony import */ var _react_react_spectrum_Rule__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_react_react_spectrum_Rule__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _react_react_spectrum_Select__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @react/react-spectrum/Select */ "./node_modules/@react/react-spectrum/Select/index.js");
/* harmony import */ var _react_react_spectrum_Select__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_react_react_spectrum_Select__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../components/Sidebar */ "./components/Sidebar.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _css_main_scss__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../css/main.scss */ "./css/main.scss");
/* harmony import */ var _css_main_scss__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_css_main_scss__WEBPACK_IMPORTED_MODULE_26__);








var _jsxFileName = "/Users/garthdb/Spectrum/spectrum-css/pages/_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement;


















 //import regeneratorRuntime from "regenerator-runtime";

var Layout =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(Layout, _React$Component);

  function Layout() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Layout);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Layout).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Layout, [{
    key: "render",
    value: function render() {
      var children = this.props.children;
      return __jsx("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_25___default()('afg-container-fluid', 'site-mainContainer'),
        style: {
          minHeight: '100vh',
          boxSizing: 'border-box'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, children, __jsx(_react_react_spectrum_Rule__WEBPACK_IMPORTED_MODULE_22___default.a, {
        variant: "small",
        style: {
          marginTop: '32px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }));
    }
  }]);

  return Layout;
}(react__WEBPACK_IMPORTED_MODULE_21___default.a.Component);

var MyApp =
/*#__PURE__*/
function (_App) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(MyApp, _App);

  function MyApp(props) {
    var _arguments = arguments;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, MyApp);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(MyApp).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this), "updateDimensions", function (e) {
      console.log(e); // this.setState((state, props) => {
      //   this.scaleSelector.current.state.value = scaleMQL.matches ? 'large' : 'medium';
      //   return {
      //     scale: scaleMQL.matches ? 'large' : 'medium'
      //   }
      // });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this), "updateTheme", function () {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'light';

      _this.setState(function (state, props) {
        return {
          theme: e
        };
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this), "handleScriptInject", function (_ref) {
      var scriptTags = _ref.scriptTags;

      if (scriptTags) {
        var scriptTag = scriptTags[0];
        scriptTag.onload = _this.handleOnLoad;
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this), "handleOnLoad", function () {
      window.onload = function () {
        loadIcons("".concat("", "/static/images/svg/spectrum-icons.svg"), function (err, svg) {
          if (err) {
            console.error('Loading Workflow icons failed: ' + error);
          }
        });
        loadIcons("".concat("", "/static/images/svg/spectrum-css-icons.svg"), function (err, svg) {
          if (err) {
            console.error('Loading UI icons failed: ' + error);
          }
        });
      };
    });

    _this.scaleSelector = react__WEBPACK_IMPORTED_MODULE_21___default.a.createRef();
    _this.state = {
      scale: 'medium',
      theme: 'light'
    };
    next_router__WEBPACK_IMPORTED_MODULE_16__["Router"].events.on('routeChangeComplete', function () {
      digitalData._set('page.pageInfo.siteSection', "".concat(_arguments[0].router.query.id, " Page"));

      digitalData._set('page.pageInfo.language', 'en-US');

      digitalData._set('page.pageInfo.geoRegion', 'US');

      digitalData._set('page.pageInfo.legacyMarketSegment', 'com');

      _satellite.track('state', {
        digitalData: digitalData._snapshot()
      });
    });
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(MyApp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.updateDimensions();
      this.updateTheme();
      var scaleMQL = window.matchMedia('(max-width: 768px)');
      scaleMQL.addListener(this.updateDimensions.bind(this));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps; //console.log(pageProps);

      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, __jsx(react_helmet__WEBPACK_IMPORTED_MODULE_19__["Helmet"], {
        script: [{
          src: "".concat("", "/static/javascript/loadicons/index.js")
        }],
        onChangeClientState: function onChangeClientState(newState, addedTags) {
          return _this2.handleScriptInject(addedTags);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, __jsx("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width",
        key: "viewport",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }), __jsx("link", {
        rel: "icon",
        type: "image/x-icon",
        href: "".concat("", "/static/favicon.ico"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }), __jsx("link", {
        type: "text/css",
        rel: "stylesheet",
        href: "https://wwwimages2.adobe.com/etc/beagle/public/globalnav/adobe-globalnav/latest/adobe-globalnav.min.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      })), __jsx(_react_react_spectrum_Provider__WEBPACK_IMPORTED_MODULE_20___default.a, {
        theme: this.state.theme,
        scale: this.state.scale,
        typekitId: "uma8ayv",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, __jsx("div", {
        className: 'flexContainer',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, __jsx(_components_Sidebar__WEBPACK_IMPORTED_MODULE_24__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      })), __jsx(Layout, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, __jsx("div", {
        className: "switcherContainer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, __jsx(_react_react_spectrum_FieldLabel__WEBPACK_IMPORTED_MODULE_18___default.a, {
        label: "Theme",
        labelFor: "theme-selector",
        position: "left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }, __jsx(_react_react_spectrum_Select__WEBPACK_IMPORTED_MODULE_23___default.a, {
        onChange: this.updateTheme,
        id: "theme-selector",
        "aria-label": "Theme selector",
        options: [{
          label: 'Lightest',
          value: 'lightest'
        }, {
          label: 'Light',
          value: 'light'
        }, {
          label: 'Dark',
          value: 'dark'
        }, {
          label: 'Darkest',
          value: 'darkest'
        }],
        defaultValue: "light",
        quiet: true,
        flexible: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      })), __jsx(_react_react_spectrum_FieldLabel__WEBPACK_IMPORTED_MODULE_18___default.a, {
        label: "Scale",
        labelFor: "scale-selector",
        position: "left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, __jsx(_react_react_spectrum_Select__WEBPACK_IMPORTED_MODULE_23___default.a, {
        ref: this.scaleSelector,
        id: "scale-selector",
        onChange: function onChange(e) {
          _this2.setState(function (state, props) {
            return {
              scale: e
            };
          });

          console.log(e);
        },
        "aria-label": "Scale selector",
        options: [{
          label: 'Medium',
          value: 'medium'
        }, {
          label: 'Large',
          value: 'large'
        }],
        quiet: true,
        flexible: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }))), __jsx(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }))))));
    }
  }]);

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_17___default.a);

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_16__["withRouter"])(MyApp));

/***/ })

})
//# sourceMappingURL=_app.js.54dd83218fd6442d5563.hot-update.js.map