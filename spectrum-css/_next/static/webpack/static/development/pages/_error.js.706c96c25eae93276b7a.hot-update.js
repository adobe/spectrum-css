webpackHotUpdate("static/development/pages/_error.js",{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=%2FUsers%2Fgarthdb%2FSpectrum%2Fspectrum-css%2Fpages%2F_error.js!./":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=%2FUsers%2Fgarthdb%2FSpectrum%2Fspectrum-css%2Fpages%2F_error.js ***!
  \***********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/_error", function() {
      var mod = __webpack_require__(/*! ./pages/_error.js */ "./pages/_error.js")
      if(true) {
        module.hot.accept(/*! ./pages/_error.js */ "./pages/_error.js", function() {
          if(!next.router.components["/_error"]) return
          var updatedPage = __webpack_require__(/*! ./pages/_error.js */ "./pages/_error.js")
          next.router.update("/_error", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=next%2Fdist%2Fpages%2F_error!./":
false,

/***/ "./node_modules/next/dist/pages/_error.js":
false,

/***/ "./pages/_error.js":
/*!*************************!*\
  !*** ./pages/_error.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _css_error_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../css/error.scss */ "./css/error.scss");
/* harmony import */ var _css_error_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_css_error_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);





var _jsxFileName = "/Users/garthdb/Spectrum/spectrum-css/pages/_error.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;







var ErrorPage =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ErrorPage, _React$Component);

  function ErrorPage() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ErrorPage);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ErrorPage).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ErrorPage, [{
    key: "render",
    value: function render() {
      var response;

      switch (this.props.errorCode) {
        case 200: // Also display a 404 if someone requests /_error explicitly

        case 404:
          response = __jsx("div", {
            className: classnames__WEBPACK_IMPORTED_MODULE_8___default()('afg-row', _css_error_scss__WEBPACK_IMPORTED_MODULE_9___default.a.row),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 30
            },
            __self: this
          }, __jsx("div", {
            className: classnames__WEBPACK_IMPORTED_MODULE_8___default()("afg-col-xs-12", _css_error_scss__WEBPACK_IMPORTED_MODULE_9___default.a.container),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 31
            },
            __self: this
          }, __jsx("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 32
            },
            __self: this
          }, __jsx("img", {
            src: "".concat("", "/static/404.svg"),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 32
            },
            __self: this
          })), __jsx("div", {
            className: classnames__WEBPACK_IMPORTED_MODULE_8___default()('spectrum-Heading1--quiet', _css_error_scss__WEBPACK_IMPORTED_MODULE_9___default.a.header),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 33
            },
            __self: this
          }, "Error 404: page not found"), __jsx("div", {
            className: classnames__WEBPACK_IMPORTED_MODULE_8___default()('spectrum-Body4', _css_error_scss__WEBPACK_IMPORTED_MODULE_9___default.a.body),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 34
            },
            __self: this
          }, __jsx("em", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 34
            },
            __self: this
          }, "The page isn't available. Try checking the URL or visit a different page."))));
          break;

        case 500:
          response = __jsx("div", {
            className: classnames__WEBPACK_IMPORTED_MODULE_8___default()('afg-row', _css_error_scss__WEBPACK_IMPORTED_MODULE_9___default.a.row),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 42
            },
            __self: this
          }, __jsx("div", {
            className: classnames__WEBPACK_IMPORTED_MODULE_8___default()("afg-col-xs-12", _css_error_scss__WEBPACK_IMPORTED_MODULE_9___default.a.container),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 43
            },
            __self: this
          }, __jsx("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 44
            },
            __self: this
          }, __jsx("img", {
            src: "".concat("", "/static/404.svg"),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 44
            },
            __self: this
          })), __jsx("div", {
            className: classnames__WEBPACK_IMPORTED_MODULE_8___default()('spectrum-Heading1--quiet', _css_error_scss__WEBPACK_IMPORTED_MODULE_9___default.a.header),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 45
            },
            __self: this
          }, "An error has occurred"), __jsx("div", {
            className: classnames__WEBPACK_IMPORTED_MODULE_8___default()('spectrum-Body4', _css_error_scss__WEBPACK_IMPORTED_MODULE_9___default.a.body),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 46
            },
            __self: this
          }, __jsx("em", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 46
            },
            __self: this
          }, "Try reloading this page, and if the error persists, contact the Spectrum team to report it."))));
          break;

        default:
          response = __jsx("div", {
            className: classnames__WEBPACK_IMPORTED_MODULE_8___default()('afg-row', _css_error_scss__WEBPACK_IMPORTED_MODULE_9___default.a.row),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 54
            },
            __self: this
          }, __jsx("div", {
            className: classnames__WEBPACK_IMPORTED_MODULE_8___default()("afg-col-xs-12", _css_error_scss__WEBPACK_IMPORTED_MODULE_9___default.a.container),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 55
            },
            __self: this
          }, __jsx("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 56
            },
            __self: this
          }, __jsx("img", {
            src: "".concat("", "/static/404.svg"),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 56
            },
            __self: this
          })), __jsx("div", {
            className: classnames__WEBPACK_IMPORTED_MODULE_8___default()('spectrum-Heading1--quiet', _css_error_scss__WEBPACK_IMPORTED_MODULE_9___default.a.header),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 57
            },
            __self: this
          }, "Error 404: page not found"), __jsx("div", {
            className: classnames__WEBPACK_IMPORTED_MODULE_8___default()('spectrum-Body4', _css_error_scss__WEBPACK_IMPORTED_MODULE_9___default.a.body),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 58
            },
            __self: this
          }, __jsx("em", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 58
            },
            __self: this
          }, "Try reloading this page, and if the error persists, contact the Spectrum team to report it."))));
      }

      return response;
    }
  }], [{
    key: "propTypes",
    value: function propTypes() {
      return {
        errorCode: react__WEBPACK_IMPORTED_MODULE_5___default.a.PropTypes.number.isRequired,
        url: react__WEBPACK_IMPORTED_MODULE_5___default.a.PropTypes.string.isRequired
      };
    }
  }, {
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var res = _ref.res,
          xhr = _ref.xhr;
      var errorCode = res ? res.statusCode : xhr ? xhr.status : null;
      return {
        errorCode: errorCode
      };
    }
  }]);

  return ErrorPage;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_10__["withRouter"])(ErrorPage));

/***/ }),

/***/ 122:
/*!***************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F_error&absolutePagePath=%2FUsers%2Fgarthdb%2FSpectrum%2Fspectrum-css%2Fpages%2F_error.js ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2F_error&absolutePagePath=%2FUsers%2Fgarthdb%2FSpectrum%2Fspectrum-css%2Fpages%2F_error.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=%2FUsers%2Fgarthdb%2FSpectrum%2Fspectrum-css%2Fpages%2F_error.js!./");


/***/ })

})
//# sourceMappingURL=_error.js.706c96c25eae93276b7a.hot-update.js.map