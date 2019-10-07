webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/Sidebar.js":
/*!*******************************!*\
  !*** ./components/Sidebar.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _react_react_spectrum_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @react/react-spectrum/Button */ "./node_modules/@react/react-spectrum/Button/index.js");
/* harmony import */ var _react_react_spectrum_Button__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_react_react_spectrum_Button__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _react_react_spectrum_Icon_ShowMenu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @react/react-spectrum/Icon/ShowMenu */ "./node_modules/@react/react-spectrum/Icon/ShowMenu/index.js");
/* harmony import */ var _react_react_spectrum_Icon_ShowMenu__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_react_react_spectrum_Icon_ShowMenu__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _react_react_spectrum_SideNav__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @react/react-spectrum/SideNav */ "./node_modules/@react/react-spectrum/SideNav/index.js");
/* harmony import */ var _react_react_spectrum_SideNav__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_react_react_spectrum_SideNav__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _data_newmenu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../data/newmenu */ "./data/newmenu.json");
var _data_newmenu__WEBPACK_IMPORTED_MODULE_15___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/newmenu */ "./data/newmenu.json", 1);
/* harmony import */ var _css_sidebar_scss__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./css/sidebar.scss */ "./components/css/sidebar.scss");
/* harmony import */ var _css_sidebar_scss__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_css_sidebar_scss__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _SiteSearch__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./SiteSearch */ "./components/SiteSearch.js");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! next/config */ "./node_modules/next-server/dist/lib/runtime-config.js");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_18__);








var _jsxFileName = "/Users/garthdb/Spectrum/spectrum-css/components/Sidebar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;












var createLinkProps = function createLinkProps(item) {
  if (item.linkType === 'External') {
    return {
      href: item.url
    };
  }

  if (item.parent.split(',').includes('Components')) {
    return {
      href: "/components/id?id=".concat(item.url),
      as: "".concat("", "/components/").concat(item.url)
    };
  }

  return {
    href: "/".concat(item.url),
    as: "".concat("", "/").concat(item.url)
  };
};

var Sidebar =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Sidebar, _React$Component);

  function Sidebar(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Sidebar);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Sidebar).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "openMenu", function () {
      _this.setState({
        menuOpen: true
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "closeMenu", function () {
      _this.setState({
        menuOpen: false
      });
    });

    _this.selectedItem = react__WEBPACK_IMPORTED_MODULE_8___default.a.createRef();
    _this.state = {
      menuOpen: false
    };
    console.log(_this.props.router.query.id);
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Sidebar, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, __jsx("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_14___default()(_css_sidebar_scss__WEBPACK_IMPORTED_MODULE_16___default.a.overlay, this.state.menuOpen ? _css_sidebar_scss__WEBPACK_IMPORTED_MODULE_16___default.a.menuOpen : _css_sidebar_scss__WEBPACK_IMPORTED_MODULE_16___default.a.menuClosed),
        onClick: function onClick() {
          return _this2.closeMenu();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }), __jsx("div", {
        className: _css_sidebar_scss__WEBPACK_IMPORTED_MODULE_16___default.a.appHeader,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, __jsx(_react_react_spectrum_Button__WEBPACK_IMPORTED_MODULE_10___default.a, {
        variant: "tool",
        icon: __jsx(_react_react_spectrum_Icon_ShowMenu__WEBPACK_IMPORTED_MODULE_11___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          },
          __self: this
        }),
        "aria-label": "Show",
        onClick: function onClick() {
          return _this2.openMenu();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      })), __jsx("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_14___default()(_css_sidebar_scss__WEBPACK_IMPORTED_MODULE_16___default.a.sideBar, this.state.menuOpen ? _css_sidebar_scss__WEBPACK_IMPORTED_MODULE_16___default.a.menuOpen : _css_sidebar_scss__WEBPACK_IMPORTED_MODULE_16___default.a.menuClosed),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, __jsx("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_14___default()(_css_sidebar_scss__WEBPACK_IMPORTED_MODULE_16___default.a.spectrumSidebar),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, __jsx("div", {
        className: _css_sidebar_scss__WEBPACK_IMPORTED_MODULE_16___default.a.header,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/",
        as: "".concat("", "/"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, __jsx("img", {
        src: "".concat("", "/static/logo.png"),
        alt: "Spectrum Logo",
        srcSet: "".concat("", "/static/logo@2x.png 2x"),
        className: _css_sidebar_scss__WEBPACK_IMPORTED_MODULE_16___default.a.logo,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }))), __jsx(_SiteSearch__WEBPACK_IMPORTED_MODULE_17__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      })), __jsx("div", {
        className: _css_sidebar_scss__WEBPACK_IMPORTED_MODULE_16___default.a.navigation,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, __jsx(_react_react_spectrum_SideNav__WEBPACK_IMPORTED_MODULE_12__["SideNav"], {
        defaultValue: this.props.router.query.id,
        style: {
          width: '200px',
          marginBottom: 80
        },
        variant: "multiLevel",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, _data_newmenu__WEBPACK_IMPORTED_MODULE_15__.menu[0].children.map(function (item, i) {
        if (!item.children || item.children.length == 0) {
          return __jsx(_react_react_spectrum_SideNav__WEBPACK_IMPORTED_MODULE_12__["SideNavItem"], {
            value: item.url,
            label: item.title,
            key: i,
            style: {
              width: '200px'
            },
            ref: item.url === _this2.props.router.query.id ? _this2.selectedItem : undefined,
            renderLink: function renderLink(props) {
              delete props.href;
              return __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, createLinkProps(item), {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 74
                },
                __self: this
              }), __jsx("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 75
                },
                __self: this
              }), item.title));
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 69
            },
            __self: this
          });
        } else {
          return __jsx(_react_react_spectrum_SideNav__WEBPACK_IMPORTED_MODULE_12__["SideNavItem"], {
            value: item.url,
            label: item.title,
            key: i,
            defaultExpanded: false,
            style: {
              width: '200px'
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 82
            },
            __self: this
          }, item.children && item.children.map(function (childItem, childI) {
            return __jsx(_react_react_spectrum_SideNav__WEBPACK_IMPORTED_MODULE_12__["SideNavItem"], {
              value: childItem.url,
              label: childItem.title,
              key: childI,
              style: {
                width: '200px'
              },
              ref: childItem.url === _this2.props.router.query.id ? _this2.selectedItem : undefined,
              renderLink: function renderLink(props) {
                delete props.href;
                return __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, createLinkProps(childItem), {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 92
                  },
                  __self: this
                }), __jsx("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 93
                  },
                  __self: this
                }), childItem.title));
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 87
              },
              __self: this
            });
          }));
        }
      })), __jsx(_react_react_spectrum_SideNav__WEBPACK_IMPORTED_MODULE_12__["SideNav"], {
        style: {
          width: '200px',
          marginBottom: '40px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, __jsx(_react_react_spectrum_SideNav__WEBPACK_IMPORTED_MODULE_12__["SideNavItem"], {
        value: "Spectrum",
        target: "_blank",
        href: "#",
        style: {
          width: '200px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, "Spectrum"))))));
    }
  }]);

  return Sidebar;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component); // return(
//   <CustomNavItem item={item} index={i} pageSlug={this.props.router.query.id} selectedRef={this.selectedItem}/>
// )


/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_13__["withRouter"])(Sidebar));

/***/ })

})
//# sourceMappingURL=_app.js.a26b06b0fa5f22b819e4.hot-update.js.map