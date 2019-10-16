webpackHotUpdate("static/development/pages/components/id.js",{

/***/ "./components/SubHeader.js":
/*!*********************************!*\
  !*** ./components/SubHeader.js ***!
  \*********************************/
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _css_subHeader_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./css/subHeader.scss */ "./components/css/subHeader.scss");
/* harmony import */ var _css_subHeader_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_css_subHeader_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Markdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Markdown */ "./components/Markdown.js");
/* harmony import */ var _react_react_spectrum_Rule__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @react/react-spectrum/Rule */ "./node_modules/@react/react-spectrum/Rule/index.js");
/* harmony import */ var _react_react_spectrum_Rule__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_react_react_spectrum_Rule__WEBPACK_IMPORTED_MODULE_10__);





var _jsxFileName = "/Users/garthdb/Spectrum/spectrum-css/components/SubHeader.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;







var SubHeader =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(SubHeader, _React$Component);

  function SubHeader() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SubHeader);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(SubHeader).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SubHeader, [{
    key: "render",
    value: function render() {
      var title = this.props.title ? this.props.title : 'Missing title';
      var parentClass = this.props.className || '';
      return __jsx("h3", {
        className: classnames__WEBPACK_IMPORTED_MODULE_8___default()('spectrum-Heading4', _css_subHeader_scss__WEBPACK_IMPORTED_MODULE_7___default.a.subHeader, _css_subHeader_scss__WEBPACK_IMPORTED_MODULE_7___default.a.header, parentClass),
        id: title.split(" ").join("-"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, this.props.title, __jsx("span", {
        className: _css_subHeader_scss__WEBPACK_IMPORTED_MODULE_7___default.a.headingAnchor,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, __jsx("a", {
        className: classnames__WEBPACK_IMPORTED_MODULE_8___default()("spectrum-Link", _css_subHeader_scss__WEBPACK_IMPORTED_MODULE_7___default.a.anchor),
        href: '#' + title.split(" ").join("-"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, "#")), this.props.children);
    }
  }]);

  return SubHeader;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (SubHeader);

/***/ })

})
//# sourceMappingURL=id.js.b88c1e912f9df8ad17f4.hot-update.js.map