webpackHotUpdate("static/development/pages/components/id.js",{

/***/ "./components/ResourceCard.js":
/*!************************************!*\
  !*** ./components/ResourceCard.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _css_resourceCard_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./css/resourceCard.scss */ "./components/css/resourceCard.scss");
/* harmony import */ var _css_resourceCard_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_css_resourceCard_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);







var _jsxFileName = "/Users/garthdb/Spectrum/spectrum-css/components/ResourceCard.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;



var ResourceCard =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(ResourceCard, _React$Component);

  function ResourceCard(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ResourceCard);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ResourceCard).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "goToResource", function (url) {
      window.open(url, "_blank");
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ResourceCard, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var props = this.props;
      return __jsx("button", {
        "aria-label": props.clickEvent ? "Download ".concat(props.componentName, " UI Kit") : undefined,
        className: _css_resourceCard_scss__WEBPACK_IMPORTED_MODULE_8___default.a.cardButton,
        tabindex: "0",
        onClick: props.clickEvent ? function (e) {
          props.clickEvent();
        } : function () {
          return _this2.goToResource(props.url);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, __jsx("div", {
        className: _css_resourceCard_scss__WEBPACK_IMPORTED_MODULE_8___default.a.card,
        tabindex: "-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, props.type === 'XD' ? __jsx("img", {
        src: "/static/thumbnail_xd@2x.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }) : undefined, props.type === 'CSS' ? __jsx("img", {
        src: "/static/thumbnail_css@2x.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }) : undefined, props.type === 'react' ? __jsx("img", {
        src: "/static/thumbnail_react@2x.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }) : undefined, props.type === 'Spectrum' ? __jsx("img", {
        src: "/static/thumbnail_spectrum.svg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }) : undefined, props.type === 'GitHub' ? __jsx("img", {
        src: "/static/thumbnail_github.svg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }) : undefined, props.type === 'NPM' ? __jsx("img", {
        src: "".concat("", "/static/thumbnail_npm.svg"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }) : undefined), __jsx("div", {
        className: _css_resourceCard_scss__WEBPACK_IMPORTED_MODULE_8___default.a.content,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, __jsx("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_9___default()('spectrum-Body4', 'noMargin', _css_resourceCard_scss__WEBPACK_IMPORTED_MODULE_8___default.a.cardTitle),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, props.title), __jsx("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_9___default()('spectrum-Body5', 'noMargin', _css_resourceCard_scss__WEBPACK_IMPORTED_MODULE_8___default.a.cardSubTitle),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, props.subTitle))));
    }
  }]);

  return ResourceCard;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ResourceCard);

/***/ })

})
//# sourceMappingURL=id.js.a28722d5b4585ca36d17.hot-update.js.map