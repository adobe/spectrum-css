webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/HeroImage.js":
/*!*********************************!*\
  !*** ./components/HeroImage.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_heroImage_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/heroImage.scss */ "./components/css/heroImage.scss");
/* harmony import */ var _css_heroImage_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_heroImage_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ResponsiveImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ResponsiveImage */ "./components/ResponsiveImage.js");
var _jsxFileName = "/Users/garthdb/Spectrum/spectrum-css/components/HeroImage.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var HeroImage = function HeroImage(props) {
  return __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('afg-row', _css_heroImage_scss__WEBPACK_IMPORTED_MODULE_1___default.a.row),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('afg-col-xs-12 afg-col-sm-12', _css_heroImage_scss__WEBPACK_IMPORTED_MODULE_1___default.a.heroImage),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_css_heroImage_scss__WEBPACK_IMPORTED_MODULE_1___default.a.heroContainer, _css_heroImage_scss__WEBPACK_IMPORTED_MODULE_1___default.a[props.style]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx(_ResponsiveImage__WEBPACK_IMPORTED_MODULE_4__["default"], {
    alt: props.desktop.description,
    image: props.desktop.file,
    imageMobile: props.mobile ? props.mobile.file : undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (HeroImage);

/***/ }),

/***/ "./components/ResponsiveImage.js":
/*!***************************************!*\
  !*** ./components/ResponsiveImage.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_responsiveImage_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css/responsiveImage.scss */ "./components/css/responsiveImage.scss");
/* harmony import */ var _css_responsiveImage_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_responsiveImage_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/garthdb/Spectrum/spectrum-css/components/ResponsiveImage.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var ResponsiveImage = function ResponsiveImage(props) {
  return __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('responsiveImage', props.imageMobile ? _css_responsiveImage_scss__WEBPACK_IMPORTED_MODULE_3___default.a.hasMobile : undefined, _css_responsiveImage_scss__WEBPACK_IMPORTED_MODULE_3___default.a.responsiveImage, props.imageStyle ? _css_responsiveImage_scss__WEBPACK_IMPORTED_MODULE_3___default.a[props.imageStyle] : undefined),
    style: {
      "minHeight": props.minHeight ? props.image.details.image.height / 2 + 'px' : undefined
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("img", {
    key: props.image.url,
    alt: props.alt === '[blank]' ? '' : props.alt,
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_css_responsiveImage_scss__WEBPACK_IMPORTED_MODULE_3___default.a.desktop, _css_responsiveImage_scss__WEBPACK_IMPORTED_MODULE_3___default.a[props.sizeBy]),
    src: 'https:' + props.image.url + '?w=' + Math.round(props.image.details.image.width / 2) + '&h=' + Math.round(props.image.details.image.height / 2),
    srcSet: 'https:' + props.image.url + ' 2x',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), props.imageMobile ? __jsx("img", {
    alt: props.alt === '[blank]' ? '' : props.alt,
    className: _css_responsiveImage_scss__WEBPACK_IMPORTED_MODULE_3___default.a.mobile,
    key: props.imageMobile.url,
    src: 'https://' + props.imageMobile.url + '?w=' + Math.round(props.imageMobile.details.image.width / 2) + '&h=' + Math.round(props.imageMobile.details.image.height / 2),
    srcSet: 'https://' + props.imageMobile.url + ' 2x',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }) : undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (ResponsiveImage);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_PageHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/PageHeader */ "./components/PageHeader.js");
/* harmony import */ var _components_HeroImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/HeroImage */ "./components/HeroImage.js");
var _jsxFileName = "/Users/garthdb/Spectrum/spectrum-css/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var Home = function Home() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_helmet__WEBPACK_IMPORTED_MODULE_1__["Helmet"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("meta", {
    name: "Description",
    content: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Spectrum CSS")), __jsx(_components_PageHeader__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Meet Spectrum CSS",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), __jsx("p", {
    className: "spectrum-Body2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Spectrum CSS is an open-source implementation of Spectrum, Adobe\u2019s design system. It includes components and resources to make applications more cohesive."), __jsx(_components_HeroImage__WEBPACK_IMPORTED_MODULE_3__["default"], {
    desktop: page.fields.heroImageDesktop.fields,
    mobile: page.fields.heroImageMobile ? page.fields.heroImageMobile.fields : undefined,
    style: page.fields.heroImageStyle ? page.fields.heroImageStyle : 'Standard',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.9d153463fbd904f9a480.hot-update.js.map