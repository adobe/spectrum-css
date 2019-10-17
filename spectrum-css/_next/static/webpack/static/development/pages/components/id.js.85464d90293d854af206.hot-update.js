webpackHotUpdate("static/development/pages/components/id.js",{

/***/ "./pages/components/id.js":
/*!********************************!*\
  !*** ./pages/components/id.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _css_hljs_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../css/hljs.scss */ "./css/hljs.scss");
/* harmony import */ var _css_hljs_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_css_hljs_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_highlight_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-highlight.js */ "./node_modules/react-highlight.js/dist/main.js");
/* harmony import */ var react_highlight_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_highlight_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _react_react_spectrum_Link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @react/react-spectrum/Link */ "./node_modules/@react/react-spectrum/Link/index.js");
/* harmony import */ var _react_react_spectrum_Link__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_react_react_spectrum_Link__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_Markdown__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/Markdown */ "./components/Markdown.js");
/* harmony import */ var _components_PageHeader__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/PageHeader */ "./components/PageHeader.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _components_ResourceCard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/ResourceCard */ "./components/ResourceCard.js");
/* harmony import */ var _components_Section__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../components/Section */ "./components/Section.js");
/* harmony import */ var _components_Status__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../components/Status */ "./components/Status.js");
/* harmony import */ var _react_react_spectrum_StatusLight__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @react/react-spectrum/StatusLight */ "./node_modules/@react/react-spectrum/StatusLight/index.js");
/* harmony import */ var _react_react_spectrum_StatusLight__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_react_react_spectrum_StatusLight__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _components_SubHeader__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../components/SubHeader */ "./components/SubHeader.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _components_css_componentPage_scss__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../components/css/componentPage.scss */ "./components/css/componentPage.scss");
/* harmony import */ var _components_css_componentPage_scss__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_components_css_componentPage_scss__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _components_css_page_scss__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../components/css/page.scss */ "./components/css/page.scss");
/* harmony import */ var _components_css_page_scss__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_components_css_page_scss__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_24__);








var _jsxFileName = "/Users/garthdb/Spectrum/spectrum-css/pages/components/id.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;


















function loadData(_x) {
  return _loadData.apply(this, arguments);
}

function _loadData() {
  _loadData = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7__["default"])(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(id) {
    var data;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return __webpack_require__("./data/yml lazy recursive ^\\.\\/.*\\.yml$")("./".concat(id, ".yml"));

          case 2:
            data = _context3.sent;
            return _context3.abrupt("return", data);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _loadData.apply(this, arguments);
}

var Markup =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Markup, _React$Component);

  function Markup(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Markup);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Markup).call(this, props));
    _this.clickHander = _this.clickHander.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.state = {
      openFlag: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Markup, [{
    key: "clickHander",
    value: function clickHander(e) {
      this.setState(function (state, props) {
        return {
          openFlag: !state.openFlag
        };
      });
      event.preventDefault();
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        className: _components_css_componentPage_scss__WEBPACK_IMPORTED_MODULE_22___default.a.markup,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, __jsx(react_highlight_js__WEBPACK_IMPORTED_MODULE_11___default.a, {
        language: "html",
        className: classnames__WEBPACK_IMPORTED_MODULE_21___default()('spectrum-Code4', _components_css_componentPage_scss__WEBPACK_IMPORTED_MODULE_22___default.a.markupPre, {
          'is-open': this.state.openFlag
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, this.props.children), __jsx(_react_react_spectrum_Link__WEBPACK_IMPORTED_MODULE_12___default.a, {
        className: _components_css_componentPage_scss__WEBPACK_IMPORTED_MODULE_22___default.a.toggle,
        href: "#",
        onClick: this.clickHander,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, !this.state.openFlag ? 'Show markup' : 'Hide markup'));
    }
  }]);

  return Markup;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

var Variant =
/*#__PURE__*/
function (_React$Component2) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Variant, _React$Component2);

  function Variant() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Variant);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Variant).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Variant, [{
    key: "render",
    value: function render() {
      return __jsx("article", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, __jsx(_components_SubHeader__WEBPACK_IMPORTED_MODULE_20__["default"], {
        title: this.props.example.name,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, __jsx(_components_Status__WEBPACK_IMPORTED_MODULE_18__["default"], {
        className: _components_css_componentPage_scss__WEBPACK_IMPORTED_MODULE_22___default.a.subHeadStatusLight,
        status: this.props.example.status,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      })), this.props.example.description ? __jsx(_components_Markdown__WEBPACK_IMPORTED_MODULE_13__["default"], {
        source: this.props.example.description,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }) : undefined, this.props.example.details ? __jsx(_components_Markdown__WEBPACK_IMPORTED_MODULE_13__["default"], {
        source: this.props.example.details,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }) : undefined, this.props.example.markup ? __jsx("section", {
        className: _components_css_componentPage_scss__WEBPACK_IMPORTED_MODULE_22___default.a.exampleContainer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, __jsx("div", {
        className: _components_css_componentPage_scss__WEBPACK_IMPORTED_MODULE_22___default.a.example,
        dangerouslySetInnerHTML: {
          __html: this.props.example.markup
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }), __jsx(Markup, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, this.props.example.markup)) : undefined);
    }
  }]);

  return Variant;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

var Page =
/*#__PURE__*/
function (_React$Component3) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Page, _React$Component3);

  function Page(props) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Page);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Page).call(this, props));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Page, [{
    key: "render",
    value: function render() {
      var componentStatus = this.props.pageData.status || "Contribution";
      return __jsx("div", {
        style: {
          overflow: 'hidden'
        },
        className: _components_css_page_scss__WEBPACK_IMPORTED_MODULE_23___default.a.pageContainer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, __jsx(react_helmet__WEBPACK_IMPORTED_MODULE_10__["Helmet"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, __jsx("meta", {
        name: "Description",
        content: this.props.pageData.description,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }), __jsx("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, " ", this.props.pageData.name, " - Spectrum CSS"), __jsx("style", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, "".concat(this.props.pageData.peerCSS).concat(this.props.pageData.indexCSS))), __jsx(_components_PageHeader__WEBPACK_IMPORTED_MODULE_14__["default"], {
        title: this.props.pageData.name,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }), __jsx("table", {
        className: _components_css_componentPage_scss__WEBPACK_IMPORTED_MODULE_22___default.a.detailsTable,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, __jsx("tbody", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, __jsx("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, __jsx("th", {
        className: "spectrum-Body--secondary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, "Component status"), __jsx("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, __jsx(_components_Status__WEBPACK_IMPORTED_MODULE_18__["default"], {
        style: {
          position: "relative",
          left: "-11px"
        },
        status: componentStatus,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }))), __jsx("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, __jsx("th", {
        className: "spectrum-Body--secondary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, "Last released"), __jsx("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, "October 8, 2019")), __jsx("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, __jsx("th", {
        className: "spectrum-Body--secondary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, "Current version"), __jsx("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, this.props.pageData.packageName, "@", this.props.pageData.packageVersion)))), __jsx("div", {
        className: _components_css_componentPage_scss__WEBPACK_IMPORTED_MODULE_22___default.a.resourceCards,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, __jsx(_components_ResourceCard__WEBPACK_IMPORTED_MODULE_16__["default"], {
        type: "Spectrum",
        url: "#",
        title: "View guidelines",
        subTitle: "Spectrum",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }), __jsx(_components_ResourceCard__WEBPACK_IMPORTED_MODULE_16__["default"], {
        type: "GitHub",
        url: "https://github.com/adobe/spectrum-css/tree/master/components/".concat(this.props.pageData.packageSlug),
        title: "View repository",
        subTitle: "Github",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }), __jsx(_components_ResourceCard__WEBPACK_IMPORTED_MODULE_16__["default"], {
        type: "NPM",
        url: "https://www.npmjs.com/package/".concat(this.props.pageData.packageName),
        title: "View package",
        subTitle: "NPM",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      })), this.props.pageData.description ? __jsx(_components_Section__WEBPACK_IMPORTED_MODULE_17__["default"], {
        title: 'Usage notes',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, __jsx(_components_Markdown__WEBPACK_IMPORTED_MODULE_13__["default"], {
        source: this.props.pageData.description,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      })) : undefined, __jsx(_components_Section__WEBPACK_IMPORTED_MODULE_17__["default"], {
        title: 'Variants',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }, this.props.pageData.examples.map(function (example, index) {
        example.status = example.status || componentStatus;
        return __jsx(Variant, {
          key: "".concat(example.id, "-").concat(index),
          example: example,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 145
          },
          __self: this
        });
      }, this)));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7__["default"])(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var node_env;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                node_env = "development";
                return _context.abrupt("return", {
                  node_env: node_env
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps() {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Page;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

Page.getInitialProps =
/*#__PURE__*/
function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7__["default"])(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(context) {
    var id, pageData;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id = context.query.id;
            _context2.next = 3;
            return loadData(id);

          case 3:
            pageData = _context2.sent;
            return _context2.abrupt("return", {
              pageData: pageData["default"]
            });

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x2) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_24__["withRouter"])(Page));

/***/ })

})
//# sourceMappingURL=id.js.85464d90293d854af206.hot-update.js.map