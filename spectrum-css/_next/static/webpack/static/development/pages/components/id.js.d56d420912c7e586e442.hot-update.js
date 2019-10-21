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
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _css_resourceCard_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./css/resourceCard.scss */ "./components/css/resourceCard.scss");
/* harmony import */ var _css_resourceCard_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_css_resourceCard_scss__WEBPACK_IMPORTED_MODULE_9__);







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
      var props = this.props;
      return __jsx("a", {
        href: props.url,
        target: props.type === 'Spectrum' ? "_self" : "_blank",
        "aria-label": props.clickEvent ? "Download ".concat(props.componentName, " UI Kit") : undefined,
        className: _css_resourceCard_scss__WEBPACK_IMPORTED_MODULE_9___default.a.cardButton,
        tabIndex: "0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, __jsx("div", {
        className: _css_resourceCard_scss__WEBPACK_IMPORTED_MODULE_9___default.a.card,
        tabIndex: "-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, props.type === 'XD' ? __jsx("img", {
        className: _css_resourceCard_scss__WEBPACK_IMPORTED_MODULE_9___default.a.xdImage,
        src: "".concat("", "/static/thumbnail_xd@2x.png"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }) : undefined, props.type === 'CSS' ? __jsx("img", {
        className: _css_resourceCard_scss__WEBPACK_IMPORTED_MODULE_9___default.a.cssImage,
        src: "".concat("", "/static/thumbnail_css@2x.png"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }) : undefined, props.type === 'react' ? __jsx("img", {
        className: _css_resourceCard_scss__WEBPACK_IMPORTED_MODULE_9___default.a.reactImage,
        src: "".concat("", "/static/thumbnail_react@2x.png"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }) : undefined, props.type === 'Spectrum' ? __jsx("svg", {
        className: _css_resourceCard_scss__WEBPACK_IMPORTED_MODULE_9___default.a.spectrumImage,
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 66 66",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, __jsx("path", {
        className: "st0",
        d: "M17 19h32.6v28.8H17z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }), __jsx("path", {
        fill: "#e1251b",
        d: "M37.5 19l12.1 28.8V19H37.5zM17 19v28.8L29.1 19H17zm11 23h5.5l2.4 5.9h5l-7.8-18.3L28 42z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      })) : undefined, props.type === 'GitHub' ? __jsx("svg", {
        className: _css_resourceCard_scss__WEBPACK_IMPORTED_MODULE_9___default.a.githubImage,
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 66 66",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, __jsx("path", {
        d: "M51.95 33.48C51.95 23.27 43.67 15 33.47 15S15 23.28 15 33.48c0 7.89 5.01 14.9 12.46 17.47.53-.27.88-.79.95-1.38 0-1.02-.02-3.63-.02-3.63-.64.1-1.29.14-1.95.14a4.183 4.183 0 01-4.23-2.85 4.96 4.96 0 00-2.08-2.46c-.48-.31-.59-.67-.03-.77 2.55-.48 3.21 2.88 4.91 3.41 1.18.37 2.45.27 3.56-.28.16-.95.68-1.81 1.47-2.38-4.34-.41-6.91-1.91-8.24-4.32l-.14-.27-.33-.76-.1-.27c-.43-1.35-.63-2.77-.6-4.18a7.13 7.13 0 012.04-5.3 7.35 7.35 0 01.31-5.34s1.88-.39 5.42 2.14c1.92-.82 7.05-.89 9.48-.18 1.49-.98 4.21-2.37 5.31-1.98.3.48.94 1.87.39 4.92a8.573 8.573 0 012.32 6.12c0 1.28-.16 2.56-.47 3.8l-.16.54s-.09.26-.19.5l-.12.27c-1.29 2.81-3.92 3.86-8.19 4.3 1.38.87 1.78 1.95 1.78 4.89 0 2.94-.04 3.33-.03 4.01.08.57.42 1.07.92 1.35a18.52 18.52 0 0012.51-17.51z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      })) : undefined, props.type === 'NPM' ? __jsx("svg", {
        className: _css_resourceCard_scss__WEBPACK_IMPORTED_MODULE_9___default.a.npmImage,
        version: "1.1",
        id: "Layer_1",
        xmlns: "http://www.w3.org/2000/svg",
        x: 0,
        y: 0,
        viewBox: "0 0 66 66",
        xmlSpace: "preserve",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, __jsx("g", {
        id: "layer1",
        transform: "translate(8.305 24.74)",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, __jsx("path", {
        id: "path4951",
        fill: "#cb3837",
        d: "M13.73 19.26V16.5H0V0h49.39v16.5h-24.7v2.76H13.73z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }), __jsx("path", {
        id: "path4949",
        fill: "#fff",
        d: "M22.02 16.5v-2.77h5.43V2.77H16.51V16.5h5.51z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }), __jsx("path", {
        id: "path4947",
        fill: "#cb3837",
        d: "M22.02 5.53h2.67v5.43h-2.67V5.53z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }), __jsx("path", {
        id: "path4945",
        fill: "#fff",
        d: "M8.2 13.73v-8.2h2.76v8.2h2.76V2.77H2.79v10.95H8.2z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }), __jsx("path", {
        id: "path2998",
        fill: "#fff",
        d: "M35.66 13.73v-8.2h2.76v8.2h2.76v-8.2h2.76v8.2h2.76V2.77H30.22v10.95h5.44z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }))) : undefined), __jsx("div", {
        className: _css_resourceCard_scss__WEBPACK_IMPORTED_MODULE_9___default.a.content,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, __jsx("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_8___default()('spectrum-Body4', 'noMargin', _css_resourceCard_scss__WEBPACK_IMPORTED_MODULE_9___default.a.cardTitle),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, props.title), __jsx("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_8___default()('spectrum-Body5', 'noMargin', _css_resourceCard_scss__WEBPACK_IMPORTED_MODULE_9___default.a.cardSubTitle),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
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
//# sourceMappingURL=id.js.d56d420912c7e586e442.hot-update.js.map