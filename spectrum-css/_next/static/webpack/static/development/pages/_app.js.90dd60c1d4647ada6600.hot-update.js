webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/Sidebar.js":
/*!*******************************!*\
  !*** ./components/Sidebar.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _react_react_spectrum_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @react/react-spectrum/Button */ "./node_modules/@react/react-spectrum/Button/index.js");
/* harmony import */ var _react_react_spectrum_Button__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_react_react_spectrum_Button__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _react_react_spectrum_Icon_ShowMenu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @react/react-spectrum/Icon/ShowMenu */ "./node_modules/@react/react-spectrum/Icon/ShowMenu/index.js");
/* harmony import */ var _react_react_spectrum_Icon_ShowMenu__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_react_react_spectrum_Icon_ShowMenu__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _react_react_spectrum_SideNav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @react/react-spectrum/SideNav */ "./node_modules/@react/react-spectrum/SideNav/index.js");
/* harmony import */ var _react_react_spectrum_SideNav__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_react_react_spectrum_SideNav__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _data_newmenu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../data/newmenu */ "./data/newmenu.json");
var _data_newmenu__WEBPACK_IMPORTED_MODULE_13___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/newmenu */ "./data/newmenu.json", 1);
/* harmony import */ var _SiteSearch__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./SiteSearch */ "./components/SiteSearch.js");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! next/config */ "./node_modules/next/dist/next-server/lib/runtime-config.js");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Logo */ "./components/Logo.js");
/* harmony import */ var _css_sidebar_scss__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./css/sidebar.scss */ "./components/css/sidebar.scss");
/* harmony import */ var _css_sidebar_scss__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_css_sidebar_scss__WEBPACK_IMPORTED_MODULE_17__);







var _this = undefined,
    _jsxFileName = "/Users/garthdb/Spectrum/spectrum-css/components/Sidebar.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;













var createLinkProps = function createLinkProps(item) {
  if (item.linkType === "External") {
    return {
      href: item.url
    };
  }

  if (item.parent.split(",").includes("Components")) {
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

var SideNavRender = function SideNavRender(item, i, ref) {
  if (!item.children || item.children.length == 0) {
    return __jsx(_react_react_spectrum_SideNav__WEBPACK_IMPORTED_MODULE_10__["SideNavItem"], {
      value: item.url,
      label: item.title,
      key: i,
      style: {
        width: "200px"
      },
      ref: ref,
      renderLink: function renderLink(props) {
        delete props.href;

        if (item.linkType === "External") {
          return __jsx("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__["default"])({
            className: "spectrum-SideNav-itemLink"
          }, createLinkProps(item), {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 41
            },
            __self: this
          }), item.title);
        } else {
          return __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__["default"])({}, createLinkProps(item), {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 45
            },
            __self: this
          }), __jsx("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__["default"])({}, props, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 46
            },
            __self: this
          }), item.title));
        }
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    });
  } else {
    return __jsx(_react_react_spectrum_SideNav__WEBPACK_IMPORTED_MODULE_10__["SideNavItem"], {
      value: item.url,
      label: item.title,
      key: i,
      defaultExpanded: item.defaultExpanded,
      style: {
        width: "200px"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, item.children && item.children.map(function (childItem, childI) {
      var childRef = childItem.url === _this.props.router.query.id ? ref : undefined;
      return SideNavRender(childItem, childI, childRef);
    }));
  }
};

var Sidebar =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Sidebar, _React$Component);

  function Sidebar(props) {
    var _this2;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Sidebar);

    _this2 = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Sidebar).call(this, props));
    _this2.selectedItem = react__WEBPACK_IMPORTED_MODULE_6___default.a.createRef();
    _this2.state = {
      menuOpen: false
    };
    return _this2;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Sidebar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener("resize", this.updateDimensions.bind(this));
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var selected = _data_newmenu__WEBPACK_IMPORTED_MODULE_13__.key.find(function (item) {
        return item.url === nextProps.router.query.id;
      });

      if (selected) {
        var selectedParentSlug = selected.parent.split(",").find(function (item) {
          return item !== "top-level-menu-item" && item !== "WebsiteMenu";
        });
        var selectedParent = _data_newmenu__WEBPACK_IMPORTED_MODULE_13__.key.find(function (item) {
          return item.title === selectedParentSlug;
        });

        if (selectedParent) {
          selectedParent.defaultExpanded = true;
        }
      }
    }
  }, {
    key: "updateDimensions",
    value: function updateDimensions(e) {
      if (this.state.menuOpen && window.innerWidth >= 960) {
        this.closeMenu();
      }
    }
  }, {
    key: "openMenu",
    value: function openMenu() {
      this.setState({
        menuOpen: true
      });
    }
  }, {
    key: "closeMenu",
    value: function closeMenu() {
      this.setState({
        menuOpen: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_12___default()(_css_sidebar_scss__WEBPACK_IMPORTED_MODULE_17___default.a.overlay, this.state.menuOpen ? _css_sidebar_scss__WEBPACK_IMPORTED_MODULE_17___default.a.menuOpen : _css_sidebar_scss__WEBPACK_IMPORTED_MODULE_17___default.a.menuClosed),
        onClick: function onClick() {
          return _this3.closeMenu();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }), __jsx("div", {
        className: _css_sidebar_scss__WEBPACK_IMPORTED_MODULE_17___default.a.appHeader,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, __jsx(_react_react_spectrum_Button__WEBPACK_IMPORTED_MODULE_8___default.a, {
        variant: "tool",
        icon: __jsx(_react_react_spectrum_Icon_ShowMenu__WEBPACK_IMPORTED_MODULE_9___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 128
          },
          __self: this
        }),
        "aria-label": "Show",
        onClick: function onClick() {
          return _this3.openMenu();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      })), __jsx("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_12___default()(_css_sidebar_scss__WEBPACK_IMPORTED_MODULE_17___default.a.sideBar, this.state.menuOpen ? _css_sidebar_scss__WEBPACK_IMPORTED_MODULE_17___default.a.menuOpen : _css_sidebar_scss__WEBPACK_IMPORTED_MODULE_17___default.a.menuClosed),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }, __jsx("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_12___default()(_css_sidebar_scss__WEBPACK_IMPORTED_MODULE_17___default.a.spectrumSidebar),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }, __jsx("div", {
        className: _css_sidebar_scss__WEBPACK_IMPORTED_MODULE_17___default.a.header,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, __jsx(_Logo__WEBPACK_IMPORTED_MODULE_16__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }), __jsx(_SiteSearch__WEBPACK_IMPORTED_MODULE_14__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      })), __jsx("div", {
        className: _css_sidebar_scss__WEBPACK_IMPORTED_MODULE_17___default.a.navigation,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      }, __jsx(_react_react_spectrum_SideNav__WEBPACK_IMPORTED_MODULE_10__["SideNav"], {
        defaultValue: this.props.router.query.id,
        style: {
          width: "200px",
          marginBottom: 80
        },
        variant: "multiLevel",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }, _data_newmenu__WEBPACK_IMPORTED_MODULE_13__.menu[0].children.map(function (item, i) {
        var ref = item.url === _this3.props.router.query.id ? _this3.selectedItem : undefined;
        return SideNavRender(item, i, ref).bind(_this3);
      })), __jsx(_react_react_spectrum_SideNav__WEBPACK_IMPORTED_MODULE_10__["SideNav"], {
        style: {
          width: "200px",
          marginBottom: "40px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }, __jsx(_react_react_spectrum_SideNav__WEBPACK_IMPORTED_MODULE_10__["SideNavItem"], {
        value: "Spectrum",
        target: "_blank",
        href: "#",
        style: {
          width: "200px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }, "Spectrum"))))));
    }
  }]);

  return Sidebar;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_11__["withRouter"])(Sidebar));

/***/ })

})
//# sourceMappingURL=_app.js.90dd60c1d4647ada6600.hot-update.js.map