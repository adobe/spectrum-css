module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"static/development/pages/components/[id].js": 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../../../..//" + ({}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/garthdb/Spectrum/spectrum-css/components/Header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const pathPrefix =  false ? undefined : '';
const linkStyle = {
  marginRight: 15
};
function Header() {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: `${pathPrefix}/`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("a", {
    style: linkStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Home")));
}

/***/ }),

/***/ "./components/MyLayout.js":
/*!********************************!*\
  !*** ./components/MyLayout.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
var _jsxFileName = "/Users/garthdb/Spectrum/spectrum-css/components/MyLayout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function Layout(props) {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, props.children);
}

/***/ }),

/***/ "./components/Sidebar.js":
/*!*******************************!*\
  !*** ./components/Sidebar.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _react_react_spectrum_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react/react-spectrum/Button */ "@react/react-spectrum/Button");
/* harmony import */ var _react_react_spectrum_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_react_react_spectrum_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _react_react_spectrum_Icon_ShowMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @react/react-spectrum/Icon/ShowMenu */ "@react/react-spectrum/Icon/ShowMenu");
/* harmony import */ var _react_react_spectrum_Icon_ShowMenu__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_react_react_spectrum_Icon_ShowMenu__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _react_react_spectrum_SideNav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @react/react-spectrum/SideNav */ "@react/react-spectrum/SideNav");
/* harmony import */ var _react_react_spectrum_SideNav__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_react_react_spectrum_SideNav__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _data_newmenu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../data/newmenu */ "./data/newmenu.json");
var _data_newmenu__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/newmenu */ "./data/newmenu.json", 1);
/* harmony import */ var _css_sidebar_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./css/sidebar.scss */ "./components/css/sidebar.scss");
/* harmony import */ var _css_sidebar_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_css_sidebar_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _SiteSearch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./SiteSearch */ "./components/SiteSearch.js");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/config */ "next/config");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_11__);

var _jsxFileName = "/Users/garthdb/Spectrum/spectrum-css/components/Sidebar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;











const pathPrefix =  false ? undefined : '';

class Sidebar extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "openMenu", () => {
      this.setState({
        menuOpen: true
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "closeMenu", () => {
      this.setState({
        menuOpen: false
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "navigate", (slug, type) => {
      if (type === 'Internal') {
        next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push(`/guideline?id=${slug}`, `${pathPrefix}/components/${slug}/`);
        this.setState({
          menuOpen: false
        });
      } else {
        window.open(slug, '_blank');
      }
    });

    this.selectedItem = react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef();
    let selected = _data_newmenu__WEBPACK_IMPORTED_MODULE_8__.key.find(item => {
      return item.url === props.router.query.id;
    });
    this.state = {
      menuOpen: false,
      selectedParents: selected ? selected.parent.split(',') : new Array()
    };
  }

  componentWillReceiveProps(nextProps) {
    //console.log(nextProps.router.query.id);
    let selected = _data_newmenu__WEBPACK_IMPORTED_MODULE_8__.key.find(item => {
      return item.url === nextProps.router.query.id;
    });
    this.setState({
      selectedParents: selected ? selected.parent.split(',') : new Array()
    }); //Perform some operation
    //this.setState({someState: someValue });
  }

  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_7___default()(_css_sidebar_scss__WEBPACK_IMPORTED_MODULE_9___default.a.overlay, this.state.menuOpen ? _css_sidebar_scss__WEBPACK_IMPORTED_MODULE_9___default.a.menuOpen : _css_sidebar_scss__WEBPACK_IMPORTED_MODULE_9___default.a.menuClosed),
      onClick: () => this.closeMenu(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }), __jsx("div", {
      className: _css_sidebar_scss__WEBPACK_IMPORTED_MODULE_9___default.a.appHeader,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, __jsx(_react_react_spectrum_Button__WEBPACK_IMPORTED_MODULE_3___default.a, {
      variant: "tool",
      icon: __jsx(_react_react_spectrum_Icon_ShowMenu__WEBPACK_IMPORTED_MODULE_4___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }),
      "aria-label": "Show",
      onClick: () => this.openMenu(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    })), __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_7___default()(_css_sidebar_scss__WEBPACK_IMPORTED_MODULE_9___default.a.sideBar, this.state.menuOpen ? _css_sidebar_scss__WEBPACK_IMPORTED_MODULE_9___default.a.menuOpen : _css_sidebar_scss__WEBPACK_IMPORTED_MODULE_9___default.a.menuClosed),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_7___default()(_css_sidebar_scss__WEBPACK_IMPORTED_MODULE_9___default.a.spectrumSidebar),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, __jsx("div", {
      className: _css_sidebar_scss__WEBPACK_IMPORTED_MODULE_9___default.a.header,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/guideline?id=home",
      as: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }, __jsx("img", {
      src: `${pathPrefix}/static/logo.png`,
      alt: "Spectrum Logo",
      srcSet: `${pathPrefix}/static/logo@2x.png 2x`,
      className: _css_sidebar_scss__WEBPACK_IMPORTED_MODULE_9___default.a.logo,
      onClick: () => this.navigate('home', "Internal"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }))), __jsx(_SiteSearch__WEBPACK_IMPORTED_MODULE_10__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    })), __jsx("div", {
      className: _css_sidebar_scss__WEBPACK_IMPORTED_MODULE_9___default.a.navigation,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }, __jsx(_react_react_spectrum_SideNav__WEBPACK_IMPORTED_MODULE_5__["SideNav"], {
      defaultValue: this.props.router.query.id,
      style: {
        width: '200px',
        marginBottom: 80
      },
      variant: "multiLevel",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, _data_newmenu__WEBPACK_IMPORTED_MODULE_8__.menu[0].children.map((item, i) => {
      return __jsx(_react_react_spectrum_SideNav__WEBPACK_IMPORTED_MODULE_5__["SideNavItem"], {
        defaultExpanded: this.state.selectedParents.includes(item.title) ? true : false,
        value: item.url,
        label: item.title,
        key: i,
        style: {
          width: '200px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, item.children && item.children.map((mi, i) => {
        return __jsx(_react_react_spectrum_SideNav__WEBPACK_IMPORTED_MODULE_5__["SideNavItem"], {
          value: mi.url,
          label: mi.title,
          key: i,
          onClick: () => {
            mi.linkType !== 'group' ? this.navigate(mi.url, mi.linkType) : undefined; // mi.url ? this.navigate(mi.url, 'Internal'): undefined
          },
          style: {
            width: '200px'
          },
          defaultExpanded: this.state.selectedParents.includes(item.title),
          ref: this.props.router.query.id === mi.url ? this.selectedItem : undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94
          },
          __self: this
        }, mi.linkType === 'group' && mi.children.map((mi3, i) => {
          return __jsx(_react_react_spectrum_SideNav__WEBPACK_IMPORTED_MODULE_5__["SideNavItem"], {
            value: mi3.url,
            key: i,
            label: mi3.title,
            onClick: () => this.navigate(mi3.url, mi3.linkType),
            style: {
              width: '200px'
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 109
            },
            __self: this
          });
        }));
      }));
    })), __jsx(_react_react_spectrum_SideNav__WEBPACK_IMPORTED_MODULE_5__["SideNav"], {
      style: {
        width: '200px',
        marginBottom: '40px'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123
      },
      __self: this
    }, __jsx(_react_react_spectrum_SideNav__WEBPACK_IMPORTED_MODULE_5__["SideNavItem"], {
      value: "Contributions",
      target: "_blank",
      href: "https://spectrum-contributions.corp.adobe.com",
      style: {
        width: '200px'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124
      },
      __self: this
    }, "Contributions"))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_6__["withRouter"])(Sidebar));

/***/ }),

/***/ "./components/SiteSearch.js":
/*!**********************************!*\
  !*** ./components/SiteSearch.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _react_react_spectrum_Search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react/react-spectrum/Search */ "@react/react-spectrum/Search");
/* harmony import */ var _react_react_spectrum_Search__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_react_react_spectrum_Search__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./css/siteSearch.scss */ "./components/css/siteSearch.scss");
/* harmony import */ var _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lunr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lunr */ "lunr");
/* harmony import */ var lunr__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lunr__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _data_search_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../data/search_store */ "./data/search_store.json");
var _data_search_store__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/search_store */ "./data/search_store.json", 1);
/* harmony import */ var _data_search_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../data/search_index */ "./data/search_index.json");
var _data_search_index__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/search_index */ "./data/search_index.json", 1);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/config */ "next/config");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_9__);

var _jsxFileName = "/Users/garthdb/Spectrum/spectrum-css/components/SiteSearch.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;









class SiteSearch extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "resetSearch", () => {
      this.setState({
        menuOpen: false,
        results: [],
        usageGuidelines: [],
        components: [],
        foundation: [],
        files: [],
        behaviors: [],
        contributions: [],
        resources: [],
        tutorials: [],
        searchVal: '',
        numResults: 0,
        kbSelectedIndex: 1,
        kbSelectedLink: undefined,
        kbSelectedType: undefined
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleKeyPress", e => {
      //console.log('keypress function');
      if (this.state.menuOpen && this.state.searchVal.length) {
        switch (e.key) {
          case "ArrowDown":
            this.setState({
              kbSelectedIndex: this.state.kbSelectedIndex == this.state.numResults ? this.state.numResults : this.state.kbSelectedIndex + 1
            });
            break;

          case "ArrowUp":
            this.setState({
              kbSelectedIndex: this.state.kbSelectedIndex == 1 ? 1 : this.state.kbSelectedIndex - 1
            });
            break;

          case "Enter":
            this.navigate(this.selectedSlug, this.selectedSlugType, this.selectedQuery);
            this.resetSearch();
            document.activeElement.blur();
            break;

          default: // do nothing

        }
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "navigate", (slug, type, query) => {
      let q = query ? `#${query.replace(/ /g, "-")}` : '#';

      if (type === 'Internal') {
        next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push(`/page/${slug}${q}`);
        this.setState({
          menuOpen: false
        });
      } else if (type === 'File') {
        window.open(slug);
      } else {
        window.open(slug, '_blank');
      }

      this.search("");
      this.setState({
        menuOpen: false,
        searchVal: ''
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "search", val => {
      this.setState({
        searchVal: val
      });
      let usageGuidelines = [];
      let components = [];
      let foundation = [];
      let behaviors = [];
      let files = [];
      let contributions = [];
      let resources = [];
      let tutorials = [];
      let r = [];

      if (val.length > 2) {
        let searchParam = `${val.trim()} ${val.trim()}*`;
        r = this.idx.search(searchParam + '*');
      }

      let length = 0;
      r.forEach((item, i) => {
        let storeItem = _data_search_store__WEBPACK_IMPORTED_MODULE_7__[item.ref];

        if (storeItem.type == 'usageGuideline') {
          length++;
          usageGuidelines.push(storeItem);
        } else if (storeItem.type == 'page' && storeItem.pageType === 'Component') {
          length++;
          components.push(storeItem);
        } else if (storeItem.type == 'Behavior') {
          length++;
          behaviors.push(storeItem);
        } else if (storeItem.type == 'page' && storeItem.pageType === 'Foundation') {
          length++;
          foundation.push(storeItem);
        } else if (storeItem.type == 'page' && storeItem.pageType === 'Resources') {
          length++;
          resources.push(storeItem);
        } else if (storeItem.type === 'Tutorial') {
          length++;
          tutorials.push(storeItem);
        } else if (storeItem.type === 'xd') {
          length++;
          files.push(storeItem);
        } else if (storeItem.type === 'contribution') {
          length++;
          contributions.push(storeItem);
        }
      });
      this.setState({
        results: r,
        usageGuidelines: usageGuidelines,
        components: components,
        behaviors: behaviors,
        foundation: foundation,
        files: files,
        contributions: contributions,
        resources: resources,
        tutorials: tutorials,
        numResults: length
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "closeMenu", e => {
      setTimeout(function () {
        this.setState({
          menuOpen: false
        });
      }.bind(this), 100);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "focus", e => {
      this.setState({
        menuOpen: true
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "getSelected", (index, slug, type, query) => {
      //TODO: this needs to be improved - data model for results weren't set up well for keyboard focus
      if (this.state.numResults && index === this.state.kbSelectedIndex) {
        this.selectedSlug = slug;
        this.selectedSlugType = type;
        this.selectedQuery = query;
        document.getElementById(`${index}_search`) ? document.getElementById(`${index}_search`).scrollIntoView(false) : undefined;
        return _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_5___default.a.selected;
      }
    });

    this.state = {
      menuOpen: false,
      results: [],
      usageGuidelines: [],
      components: [],
      foundation: [],
      files: [],
      behaviors: [],
      contributions: [],
      resources: [],
      tutorials: [],
      searchVal: '',
      numResults: 0,
      kbSelectedIndex: 1,
      kbSelectedLink: undefined,
      kbSelectedType: undefined,
      searchIndex: undefined,
      searchLoaded: true
    };
    this.selectedSlug = undefined;
    this.selectedQuery = undefined;
    this.selectedSlugType = 'Internal'; //const res = await fetch(`${publicRuntimeConfig.API}/getSearchIndex`)
    //const data = await res.json();

    this.idx = lunr__WEBPACK_IMPORTED_MODULE_6___default.a.Index.load(_data_search_index__WEBPACK_IMPORTED_MODULE_8__); //console.log(search_index);
    //this.setState({searchIndex: data});
  }

  async componentDidMount() {
    document.addEventListener("keyup", e => this.handleKeyPress(e));
  }

  render() {
    let searchIndex = 0;
    return __jsx("div", {
      className: _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_5___default.a.searchContainer,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 211
      },
      __self: this
    }, __jsx("div", {
      className: _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_5___default.a.overlay,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 212
      },
      __self: this
    }), __jsx(_react_react_spectrum_Search__WEBPACK_IMPORTED_MODULE_2___default.a, {
      placeholder: "Search",
      defaultValue: "",
      value: this.state.searchVal,
      style: {
        width: '100%'
      },
      onChange: e => {
        this.search(e);
      },
      onFocus: e => {
        this.focus(e);
      },
      onKeyPress: e => {
        this.handleKeyPress(e);
      },
      disabled: !this.state.searchLoaded,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 213
      },
      __self: this
    }), __jsx("div", {
      onClick: e => {
        this.closeMenu();
      },
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_5___default.a.overlay, this.state.menuOpen && this.state.searchVal.length > 2 ? _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_5___default.a.overlayOpen : undefined),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 224
      },
      __self: this
    }), __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_5___default.a.results, this.state.menuOpen && this.state.searchVal.length > 2 ? _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_5___default.a.open : undefined),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 225
      },
      __self: this
    }, this.state.numResults === 0 ? __jsx("div", {
      className: _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_5___default.a.noResultsContainer,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 228
      },
      __self: this
    }, __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()('spectrum-Heading2--quiet', _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_5___default.a.noResults),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 229
      },
      __self: this
    }, "No results found"), __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()('spectrum-Body4', _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_5___default.a.noResulsSub),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 230
      },
      __self: this
    }, __jsx("em", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 230
      },
      __self: this
    }, "Try another search term."))) : undefined, this.state.foundation.length ? __jsx("div", {
      className: _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_5___default.a.resultContainer,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 234
      },
      __self: this
    }, __jsx("div", {
      className: _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_5___default.a.header,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 235
      },
      __self: this
    }, __jsx("h4", {
      className: "spectrum-Heading--subtitle3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 235
      },
      __self: this
    }, "Foundation")), __jsx("ul", {
      className: _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_5___default.a.resultSet,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 236
      },
      __self: this
    }, this.state.foundation.map((result, i) => __jsx("li", {
      id: `${searchIndex++}_search`,
      key: i,
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()('spectrum-Body4', _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_5___default.a.listItem, this.getSelected(searchIndex, result.slug, 'Internal')),
      onClick: () => {
        this.navigate(result.slug, 'Internal');
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 238
      },
      __self: this
    }, result.name)))) : undefined, this.state.components.length ? __jsx("div", {
      className: _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_5___default.a.resultContainer,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 248
      },
      __self: this
    }, __jsx("div", {
      className: _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_5___default.a.header,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 249
      },
      __self: this
    }, __jsx("h4", {
      className: "spectrum-Heading--subtitle3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 249
      },
      __self: this
    }, "Components")), __jsx("ul", {
      className: _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_5___default.a.resultSet,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 250
      },
      __self: this
    }, this.state.components.map((result, i) => __jsx("li", {
      id: `${searchIndex++}_search`,
      key: i,
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()('spectrum-Body4', _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_5___default.a.listItem, this.getSelected(searchIndex, result.slug, 'Internal')),
      onClick: () => {
        this.navigate(result.slug, 'Internal');
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 252
      },
      __self: this
    }, result.name)))) : undefined, this.state.resources.length ? __jsx("div", {
      className: _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_5___default.a.resultContainer,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 263
      },
      __self: this
    }, __jsx("div", {
      className: _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_5___default.a.header,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 264
      },
      __self: this
    }, __jsx("h4", {
      className: "spectrum-Heading--subtitle3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 264
      },
      __self: this
    }, "Resources")), __jsx("ul", {
      className: _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_5___default.a.resultSet,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 265
      },
      __self: this
    }, this.state.resources.map((result, i) => __jsx("li", {
      id: `${searchIndex++}_search`,
      key: i,
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()('spectrum-Body4', _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_5___default.a.listItem, this.getSelected(searchIndex, result.slug, 'Internal')),
      onClick: () => {
        this.navigate(result.slug, 'Internal');
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 267
      },
      __self: this
    }, result.name)))) : undefined, this.state.usageGuidelines.length ? __jsx("div", {
      className: _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_5___default.a.resultContainer,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 277
      },
      __self: this
    }, __jsx("div", {
      className: _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_5___default.a.header,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 278
      },
      __self: this
    }, __jsx("h4", {
      className: "spectrum-Heading--subtitle3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 278
      },
      __self: this
    }, "Usage Guidelines")), __jsx("ul", {
      className: _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_5___default.a.resultSet,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 279
      },
      __self: this
    }, this.state.usageGuidelines.map((result, i) => __jsx("li", {
      id: `${searchIndex++}_search`,
      key: i,
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()('spectrum-Body4', _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_5___default.a.listItem, this.getSelected(searchIndex, result.slug, 'Internal', result.query)),
      onClick: () => {
        this.navigate(result.slug, 'Internal', result.query);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 282
      },
      __self: this
    }, __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()("spectrum-Body5", _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_5___default.a.subHeader),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 283
      },
      __self: this
    }, result.pageType, " > ", result.name), __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 284
      },
      __self: this
    }, result.display_description))))) : undefined, this.state.behaviors.length ? __jsx("div", {
      className: _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_5___default.a.resultContainer,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 293
      },
      __self: this
    }, __jsx("div", {
      className: _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_5___default.a.header,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 294
      },
      __self: this
    }, __jsx("h4", {
      className: "spectrum-Heading--subtitle3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 294
      },
      __self: this
    }, "Behaviors")), __jsx("ul", {
      className: _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_5___default.a.resultSet,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 295
      },
      __self: this
    }, this.state.behaviors.map((result, i) => __jsx("li", {
      id: `${searchIndex++}_search`,
      key: i,
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()('spectrum-Body4', _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_5___default.a.listItem, this.getSelected(searchIndex, result.slug, 'Internal', result.query)),
      onClick: () => {
        this.navigate(result.slug, 'Internal', result.query);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 298
      },
      __self: this
    }, __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()("spectrum-Body5", _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_5___default.a.subHeader),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 299
      },
      __self: this
    }, result.pageType, " > ", result.name), __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 300
      },
      __self: this
    }, result.display_description))))) : undefined, this.state.files.length ? __jsx("div", {
      className: _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_5___default.a.resultContainer,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 309
      },
      __self: this
    }, __jsx("div", {
      className: _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_5___default.a.header,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 310
      },
      __self: this
    }, __jsx("h4", {
      className: "spectrum-Heading--subtitle3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 310
      },
      __self: this
    }, "Downloads")), __jsx("ul", {
      className: _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_5___default.a.resultSet,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 311
      },
      __self: this
    }, this.state.files.map((result, i) => __jsx("li", {
      id: `${searchIndex++}_search`,
      key: i,
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()('spectrum-Body4', _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_5___default.a.listItem, this.getSelected(searchIndex, `https://spectrum-resources.corp.adobe.com/resources/Latest/${result.slug}`, 'File')),
      onClick: () => {
        this.navigate(`https://spectrum-resources.corp.adobe.com/resources/Latest/${result.slug}`, 'File');
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 314
      },
      __self: this
    }, __jsx("div", {
      className: _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_5___default.a.file,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 315
      },
      __self: this
    }, __jsx("div", {
      className: _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_5___default.a.icon,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 316
      },
      __self: this
    }, __jsx("img", {
      src: "/static/icon_xd_small@2x.png",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 316
      },
      __self: this
    })), result.slug))))) : undefined, this.state.tutorials.length ? __jsx("div", {
      className: _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_5___default.a.resultContainer,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 326
      },
      __self: this
    }, __jsx("div", {
      className: _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_5___default.a.header,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 327
      },
      __self: this
    }, __jsx("h4", {
      className: "spectrum-Heading--subtitle3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 327
      },
      __self: this
    }, "Tutorials")), __jsx("ul", {
      className: _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_5___default.a.resultSet,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 328
      },
      __self: this
    }, this.state.tutorials.map((result, i) => __jsx("li", {
      id: `${searchIndex++}_search`,
      key: i,
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()('spectrum-Body4', _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_5___default.a.listItem, this.getSelected(searchIndex, result.slug, 'External')),
      onClick: () => {
        this.navigate(result.slug, 'External');
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 331
      },
      __self: this
    }, result.name)))) : undefined, this.state.contributions.length ? __jsx("div", {
      className: _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_5___default.a.resultContainer,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 339
      },
      __self: this
    }, __jsx("div", {
      className: _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_5___default.a.header,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 340
      },
      __self: this
    }, __jsx("h4", {
      className: "spectrum-Heading--subtitle3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 340
      },
      __self: this
    }, "Contributions")), __jsx("ul", {
      className: _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_5___default.a.resultSet,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 341
      },
      __self: this
    }, this.state.contributions.map((result, i) => __jsx("li", {
      id: `${searchIndex++}_search`,
      key: i,
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()('spectrum-Body4', _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_5___default.a.listItem, this.getSelected(searchIndex, `https://spectrum-contributions.corp.adobe.com/submissions/${result.slug}`, 'External')),
      onClick: () => {
        this.navigate(`https://spectrum-contributions.corp.adobe.com/submissions/${result.slug}`, 'External');
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 344
      },
      __self: this
    }, __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 345
      },
      __self: this
    }, result.description))))) : undefined));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (SiteSearch);

/***/ }),

/***/ "./components/css/sidebar.scss":
/*!*************************************!*\
  !*** ./components/css/sidebar.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"appHeader": "appHeader___1ukmz",
	"overlay": "overlay___ohheB",
	"menuClosed": "menuClosed___1538U",
	"sideBar": "sideBar___oMpBa",
	"menuOpen": "menuOpen___3cldn",
	"spectrumSidebar": "spectrumSidebar___3o3U6",
	"header": "header___pV9wH",
	"logo": "logo___KrQMx",
	"navigation": "navigation___342Gc"
};

/***/ }),

/***/ "./components/css/siteSearch.scss":
/*!****************************************!*\
  !*** ./components/css/siteSearch.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"searchContainer": "searchContainer___dkLfp",
	"results": "results___32tIF",
	"overlay": "overlay___1EmJy",
	"overlayOpen": "overlayOpen___34lcn",
	"resultSet": "resultSet___PS6Uv",
	"resultContainer": "resultContainer___1hN6D",
	"listItem": "listItem___3WtxC",
	"open": "open___2qSsY",
	"subHeader": "subHeader___3iQ92",
	"header": "header___1ogAZ",
	"file": "file___1MQ8X",
	"icon": "icon___1XYNe",
	"noResultsContainer": "noResultsContainer___1K1ze",
	"noResults": "noResults___2sLgM",
	"noResultsSub": "noResultsSub___2l0NW",
	"selected": "selected___1pcvc"
};

/***/ }),

/***/ "./css/main.scss":
/*!***********************!*\
  !*** ./css/main.scss ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"mainContainer": "mainContainer___1oSej",
	"flexContainer": "flexContainer___3jqgw",
	"pageHeading": "pageHeading___efYON"
};

/***/ }),

/***/ "./data/newmenu.json":
/*!***************************!*\
  !*** ./data/newmenu.json ***!
  \***************************/
/*! exports provided: menu, key, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"menu\":[{\"title\":\"WebsiteMenu\",\"url\":\"header-WebsiteMenu\",\"linkType\":\"group\",\"parent\":\"top-level-menu-item\",\"children\":[{\"title\":\"Components\",\"url\":\"header-Components\",\"linkType\":\"group\",\"parent\":\"top-level-menu-item,WebsiteMenu\",\"children\":[{\"title\":\"Bar Loader\",\"url\":\"barloader\",\"linkType\":\"Internal\",\"parent\":\"top-level-menu-item,WebsiteMenu,Components\"},{\"title\":\"Checkbox\",\"url\":\"checkbox\",\"linkType\":\"Internal\",\"parent\":\"top-level-menu-item,WebsiteMenu,Components\"}]}]}],\"key\":[{\"title\":\"WebsiteMenu\",\"url\":\"header-WebsiteMenu\",\"linkType\":\"group\",\"parent\":\"top-level-menu-item\"},{\"title\":\"Components\",\"url\":\"header-Components\",\"linkType\":\"group\",\"parent\":\"top-level-menu-item,WebsiteMenu\"},{\"title\":\"Bar Loader\",\"url\":\"barloader\",\"linkType\":\"Internal\",\"parent\":\"top-level-menu-item,WebsiteMenu,Components\"},{\"title\":\"Checkbox\",\"url\":\"checkbox\",\"linkType\":\"Internal\",\"parent\":\"top-level-menu-item,WebsiteMenu,Components\"}]}");

/***/ }),

/***/ "./data/search_index.json":
/*!********************************!*\
  !*** ./data/search_index.json ***!
  \********************************/
/*! exports provided: version, fields, fieldVectors, invertedIndex, pipeline, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"version\":\"2.3.6\",\"fields\":[\"description\"],\"fieldVectors\":[[\"description/0\",[0,5.432,1,5.809]],[\"description/1\",[2,5.455,3,4.404,4,3.69]],[\"description/2\",[5,1.883,6,3.601,7,3.036,8,4.229,9,2.547]],[\"description/3\",[10,7.682]],[\"description/4\",[11,3.768,12,4.58]],[\"description/5\",[13,5.151,14,5.432]],[\"description/6\",[15,6.38,16,4.58]],[\"description/7\",[17,6.38,18,5.809]],[\"description/8\",[19,6.38,20,3.048]],[\"description/9\",[21,6.38,22,5.151]],[\"description/10\",[20,2.276,23,3.42,24,2.666,25,3.847]],[\"description/11\",[26,5.809,27,6.38]],[\"description/12\",[28,6.38,29,5.151]],[\"description/13\",[20,3.048,30,6.38]],[\"description/14\",[31,7.682]],[\"description/15\",[22,5.151,32,4.203]],[\"description/16\",[33,6.38,34,4.927]],[\"description/17\",[35,7.682]],[\"description/18\",[7,3.42,36,4.057,37,4.765,38,4.765]],[\"description/19\",[39,7.682]],[\"description/20\",[40,6.38,41,4.44]],[\"description/21\",[41,4.44,42,6.38]],[\"description/22\",[20,3.048,43,5.809]],[\"description/23\",[44,6.38,45,4.315]],[\"description/24\",[46,4.967,47,4.967,48,5.455]],[\"description/25\",[45,3.69,49,4.645,50,4.053]],[\"description/26\",[4,3.69,45,3.69,51,4.404]],[\"description/27\",[24,3.57,52,4.315]],[\"description/28\",[20,2.276,43,4.338,53,4.057,54,4.765]],[\"description/29\",[45,4.315,55,3.351]],[\"description/30\",[9,3.842,13,5.151]],[\"description/31\",[49,4.645,56,3.796,57,5.455]],[\"description/32\",[49,5.432,56,4.44]],[\"description/33\",[5,2.429,13,4.404,58,5.455]],[\"description/34\",[47,3.85,59,4.229,60,4.229,61,3.85,62,3.266]],[\"description/35\",[50,3.142,63,3.601,64,4.229,65,4.229,66,4.229]],[\"description/36\",[4,4.315,12,4.58]],[\"description/37\",[67,7.682]],[\"description/38\",[7,3.42,45,3.223,68,4.338,69,4.765]],[\"description/39\",[70,6.994]],[\"description/40\",[7,2.479,62,4.182,71,4.931,72,2.336,73,3.453]],[\"description/41\",[74,6.994]],[\"description/42\",[75,7.682]],[\"description/43\",[76,7.682]],[\"description/44\",[41,2.403,46,4.931,51,2.788,77,3.453,78,3.144,79,2.788]],[\"description/45\",[80,7.682]],[\"description/46\",[81,6.38,82,6.38]],[\"description/47\",[83,5.432,84,5.809]],[\"description/48\",[3,5.151,29,5.151]],[\"description/49\",[85,6.38,86,5.432]],[\"description/50\",[87,7.682]],[\"description/51\",[3,5.151,88,6.38]],[\"description/52\",[89,6.38,90,6.38]],[\"description/53\",[41,3.316,62,3.679,91,4.338,92,4.765]],[\"description/54\",[62,4.213,93,5.455,94,4.967]],[\"description/55\",[20,3.048,95,6.38]],[\"description/56\",[23,3.916,29,4.404,96,4.645]],[\"description/57\",[7,3.036,97,6.326,98,4.229,99,2.6]],[\"description/58\",[25,4.404,72,3.69,100,5.455]],[\"description/59\",[101,7.682]],[\"description/60\",[102,4.74,103,4.927]],[\"description/61\",[104,5.809,105,5.809]],[\"description/62\",[7,3.036,106,3.85,107,4.229,108,3.601,109,4.229]],[\"description/63\",[36,5.432,110,4.74]],[\"description/64\",[111,6.38,112,6.38]],[\"description/65\",[113,5.151,114,6.38]],[\"description/66\",[70,5.809,115,6.38]],[\"description/67\",[36,5.432,116,6.38]],[\"description/68\",[79,5.151,99,3.922]],[\"description/69\",[99,3.922,117,3.57]],[\"description/70\",[96,5.432,118,4.58]],[\"description/71\",[0,5.432,119,5.809]],[\"description/72\",[120,7.682]],[\"description/73\",[121,6.38,122,6.38]],[\"description/74\",[123,5.432,124,6.38]],[\"description/75\",[123,5.432,125,6.38]],[\"description/76\",[126,6.38,127,6.38]],[\"description/77\",[11,2.814,12,3.42,128,4.765,129,3.679]],[\"description/78\",[110,4.74,130,6.38]],[\"description/79\",[9,3.285,131,4.404,132,5.455]],[\"description/80\",[13,5.151,133,6.38]],[\"description/81\",[32,3.594,53,4.645,86,4.645]],[\"description/82\",[134,6.38,135,6.38]],[\"description/83\",[22,5.151,136,6.38]],[\"description/84\",[23,4.58,24,3.57]],[\"description/85\",[96,6.541]],[\"description/86\",[137,7.682]],[\"description/87\",[26,5.809,68,5.809]],[\"description/88\",[41,4.44,138,6.38]],[\"description/89\",[50,4.74,139,6.38]],[\"description/90\",[41,4.44,140,4.927]],[\"description/91\",[117,3.052,141,4.967,142,5.455]],[\"description/92\",[20,2.276,55,2.502,143,4.765,144,3.063]],[\"description/93\",[145,4.008,146,5.151]],[\"description/94\",[56,4.44,147,5.809]],[\"description/95\",[148,7.682]],[\"description/96\",[102,2.825,123,6.047,149,3.802,150,2.936]],[\"description/97\",[4,3.69,151,5.455,152,4.645]],[\"description/98\",[52,3.69,146,4.404,153,5.455]],[\"description/99\",[29,5.151,113,5.151]],[\"description/100\",[9,3.842,113,5.151]],[\"description/101\",[20,3.048,113,5.151]],[\"description/102\",[52,3.69,154,5.455,155,4.967]],[\"description/103\",[5,2.841,156,6.38]],[\"description/104\",[16,4.58,146,5.151]],[\"description/105\",[9,3.842,16,4.58]],[\"description/106\",[20,3.048,157,5.809]],[\"description/107\",[0,4.645,119,4.967,158,5.455]],[\"description/108\",[159,6.38,160,4.927]],[\"description/109\",[20,2.276,161,3.316,162,4.765,163,3.679]],[\"description/110\",[55,2.865,146,4.404,150,4.213]],[\"description/111\",[164,6.541]],[\"description/112\",[117,4.299]],[\"description/113\",[117,3.052,165,2.639,166,4.404]],[\"description/114\",[167,7.682]],[\"description/115\",[117,3.57,168,5.809]],[\"description/116\",[169,6.38,170,6.38]],[\"description/117\",[20,2.606,55,2.865,145,3.427]],[\"description/118\",[5,2.429,145,3.427,171,2.745]],[\"description/119\",[20,2.02,55,2.221,144,2.719,145,2.657,171,2.128]],[\"description/120\",[145,4.008,172,4.927]],[\"description/121\",[20,2.276,55,2.502,145,2.993,173,4.765]],[\"description/122\",[24,2.127,55,1.997,144,2.444,145,2.389,174,3.461,175,3.461]],[\"description/123\",[24,2.366,145,2.657,175,3.85,176,3.142,177,3.601]],[\"description/124\",[61,6.994]],[\"description/125\",[5,2.122,9,4.16,178,2.993]],[\"description/126\",[9,2.869,178,2.993,179,3.847,180,3.063]],[\"description/127\",[5,2.122,9,2.869,171,2.398,178,2.993]],[\"description/128\",[9,2.869,178,2.993,181,3.54,182,3.223]],[\"description/129\",[9,2.869,178,2.993,183,3.54,184,2.993]],[\"description/130\",[9,1.757,178,1.833,184,1.833,185,2.484,186,2.484,187,3.295,188,2.356,189,2.484]],[\"description/131\",[9,2.547,178,2.657,190,3.601,191,3.415,192,2.943]],[\"description/132\",[5,1.299,9,2.851,178,1.833,193,2.094,194,2.484,195,2.356,196,2.168,197,2.356]],[\"description/133\",[12,4.58,129,4.927]],[\"description/134\",[179,5.151,180,4.102]],[\"description/135\",[5,2.841,171,3.211]],[\"description/136\",[12,3.036,20,2.02,23,3.036,129,3.266,198,3.142]],[\"description/137\",[32,4.203,199,6.38]],[\"description/138\",[32,3.594,200,4.967,201,4.967]],[\"description/139\",[32,3.594,201,4.967,202,4.967]],[\"description/140\",[203,6.38,204,6.38]],[\"description/141\",[183,4.74,184,4.008]],[\"description/142\",[102,3.54,103,3.679,205,3.679,206,3.42]],[\"description/143\",[207,7.682]],[\"description/144\",[190,4.645,191,4.404,192,3.796]],[\"description/145\",[12,2.479,129,2.667,193,2.479,194,2.94,195,2.788,196,2.565,197,2.788]],[\"description/146\",[20,3.67]],[\"description/147\",[180,4.102,208,4.927]],[\"description/148\",[179,5.151,180,4.102]],[\"description/149\",[5,2.841,171,3.211]],[\"description/150\",[20,2.606,144,3.507,171,2.745]],[\"description/151\",[20,2.02,209,1.863,210,4.229,211,3.601,212,4.229]],[\"description/152\",[20,2.02,144,2.719,213,3.036,214,4.229,215,3.85]],[\"description/153\",[14,3.601,20,2.02,144,2.719,176,3.142,216,4.229]],[\"description/154\",[206,5.515]],[\"description/155\",[5,2.429,209,2.402,217,4.645]],[\"description/156\",[209,2.402,218,4.967,219,4.967]],[\"description/157\",[117,3.052,165,2.639,220,5.455]],[\"description/158\",[24,3.052,209,2.402,221,5.455]],[\"description/159\",[24,2.366,209,1.863,222,4.229,223,3.601,224,4.229]],[\"description/160\",[32,2.786,196,3.142,225,3.266,226,4.229,227,4.229]],[\"description/161\",[45,4.315,56,4.44]],[\"description/162\",[72,5.196]],[\"description/163\",[187,4.44,228,6.38]],[\"description/164\",[74,6.994]],[\"description/165\",[163,4.927,229,5.432]],[\"description/166\",[230,6.38,231,6.38]],[\"description/167\",[232,5.932]],[\"description/168\",[5,2.841,171,3.211]],[\"description/169\",[181,4.74,182,4.315]],[\"description/170\",[233,6.541]],[\"description/171\",[209,2.402,232,4.213,234,4.967]],[\"description/172\",[161,4.44,232,4.927]],[\"description/173\",[140,4.927,235,6.38]],[\"description/174\",[236,5.809,237,5.809]],[\"description/175\",[238,7.682]],[\"description/176\",[239,6.38,240,4.927]],[\"description/177\",[187,4.44,241,6.38]],[\"description/178\",[242,5.432,243,5.432]],[\"description/179\",[165,2.046,213,3.036,242,3.601,243,3.601,244,3.601]],[\"description/180\",[245,6.38,246,6.38]],[\"description/181\",[1,5.809,56,4.44]],[\"description/182\",[165,2.639,247,5.455,248,5.455]],[\"description/183\",[56,4.44,71,5.809]],[\"description/184\",[56,4.44,147,5.809]],[\"description/185\",[52,5.196]],[\"description/186\",[249,5.932]],[\"description/187\",[52,4.315,171,3.211]],[\"description/188\",[5,2.841,171,3.211]],[\"description/189\",[52,4.315,250,5.809]],[\"description/190\",[52,2.572,165,1.839,209,1.674,223,3.237,251,3.802,252,3.802]],[\"description/191\",[52,4.315,253,5.432]],[\"description/192\",[24,3.052,209,2.402,254,4.967]],[\"description/193\",[24,3.052,165,2.639,209,2.402]],[\"description/194\",[4,4.315,84,5.809]],[\"description/195\",[11,3.222,23,3.916,99,3.354]],[\"description/196\",[11,2.814,99,2.929,179,3.847,180,3.063]],[\"description/197\",[5,2.122,11,2.814,99,2.929,171,2.398]],[\"description/198\",[11,2.814,99,2.929,183,3.54,184,2.993]],[\"description/199\",[11,1.723,99,1.794,184,1.833,185,2.484,186,2.484,187,3.295,188,2.356,189,2.484]],[\"description/200\",[11,2.245,99,2.337,102,2.825,103,2.936,205,2.936,206,2.729]],[\"description/201\",[11,2.498,99,2.6,180,2.719,255,4.229,256,3.85]],[\"description/202\",[11,2.498,99,2.6,190,3.601,191,3.415,192,2.943]],[\"description/203\",[11,1.868,23,2.27,99,1.944,193,2.27,194,2.693,195,2.554,196,2.35,197,2.554]],[\"description/204\",[257,7.682]],[\"description/205\",[110,4.74,258,5.432]],[\"description/206\",[110,4.053,165,2.639,166,4.404]],[\"description/207\",[240,4.927,259,4.44]],[\"description/208\",[260,7.682]],[\"description/209\",[24,3.052,209,2.402,261,5.455]],[\"description/210\",[176,4.053,262,5.455,263,5.455]],[\"description/211\",[24,3.052,165,2.639,240,4.213]],[\"description/212\",[187,4.44,188,5.151]],[\"description/213\",[264,7.682]],[\"description/214\",[117,4.299]],[\"description/215\",[249,5.932]],[\"description/216\",[5,2.841,265,6.38]],[\"description/217\",[5,2.841,164,5.432]],[\"description/218\",[83,4.645,266,5.455,267,5.455]],[\"description/219\",[104,5.809,268,6.38]],[\"description/220\",[269,6.994]],[\"description/221\",[270,5.432,271,3.842]],[\"description/222\",[5,2.429,171,2.745,271,3.285]],[\"description/223\",[270,4.645,271,3.285,272,3.796]],[\"description/224\",[184,4.008,271,3.842]],[\"description/225\",[193,4.58,273,5.151]],[\"description/226\",[5,2.841,171,3.211]],[\"description/227\",[180,3.507,209,2.402,254,4.967]],[\"description/228\",[205,4.213,206,3.916,274,4.967]],[\"description/229\",[5,1.883,205,3.266,258,3.601,275,3.85,276,4.229]],[\"description/230\",[55,1.997,193,2.729,213,2.729,273,3.07,277,3.802,278,3.802]],[\"description/231\",[160,3.679,209,2.098,279,4.338,280,3.54]],[\"description/232\",[281,6.38,282,5.809]],[\"description/233\",[14,2.94,55,1.814,165,1.671,209,1.521,282,3.144,283,3.453,284,3.453]],[\"description/234\",[55,1.997,193,2.729,273,3.07,285,3.237,286,3.461,287,3.802]],[\"description/235\",[55,1.814,141,3.144,165,1.671,197,2.788,288,3.453,289,3.453,290,3.453]],[\"description/236\",[211,5.432,291,5.809]],[\"description/237\",[45,3.69,271,3.285,272,3.796]],[\"description/238\",[5,2.429,171,2.745,271,3.285]],[\"description/239\",[45,2.861,271,2.547,272,4.402,292,3.266]],[\"description/240\",[184,4.008,271,3.842]],[\"description/241\",[293,6.38,294,6.38]],[\"description/242\",[244,4.645,295,3.916,296,5.455]],[\"description/243\",[79,3.415,165,2.046,244,3.601,295,3.036,297,3.601]],[\"description/244\",[94,3.85,295,3.036,298,4.229,299,3.85,300,4.229]],[\"description/245\",[24,2.666,295,3.42,297,4.057,301,4.765]],[\"description/246\",[24,2.366,79,3.415,165,2.046,295,3.036,297,3.601]],[\"description/247\",[165,2.639,295,3.916,302,5.455]],[\"description/248\",[165,2.639,295,3.916,303,5.455]],[\"description/249\",[145,4.008,304,6.38]],[\"description/250\",[24,4.299]],[\"description/251\",[6,5.432,117,3.57]],[\"description/252\",[155,4.967,180,3.507,208,4.213]],[\"description/253\",[108,5.432,305,4.927]],[\"description/254\",[140,2.936,178,2.389,305,2.936,306,3.237,307,3.237,308,3.237]],[\"description/255\",[11,3.222,117,3.052,225,4.213]],[\"description/256\",[229,6.541]],[\"description/257\",[63,4.057,213,3.42,309,4.765,310,3.847]],[\"description/258\",[131,3.847,213,3.42,310,3.847,311,4.338]],[\"description/259\",[131,3.415,209,1.863,310,3.415,312,3.85,313,3.415]],[\"description/260\",[176,4.053,213,3.916,314,5.455]],[\"description/261\",[165,2.305,209,2.098,315,4.765,316,4.765]],[\"description/262\",[18,4.338,209,2.098,317,3.679,318,4.338]],[\"description/263\",[7,2.729,182,2.572,209,1.674,319,3.802,320,3.802,321,3.802]],[\"description/264\",[271,3.285,272,3.796,292,4.213]],[\"description/265\",[3,3.07,86,3.237,209,1.674,271,2.29,272,2.646,292,2.936]],[\"description/266\",[209,1.521,271,2.08,272,2.403,292,2.667,322,3.453,323,3.144,324,3.453]],[\"description/267\",[50,5.707]],[\"description/268\",[117,3.57,325,5.809]],[\"description/269\",[208,4.927,326,6.38]],[\"description/270\",[140,2.936,178,2.389,305,2.936,306,3.237,307,3.237,308,3.237]],[\"description/271\",[11,3.222,117,3.052,225,4.213]],[\"description/272\",[91,4.338,209,2.098,327,4.765,328,4.765]],[\"description/273\",[329,6.203]],[\"description/274\",[160,4.927,280,4.74]],[\"description/275\",[249,5.932]],[\"description/276\",[32,4.203,329,5.151]],[\"description/277\",[330,6.994]],[\"description/278\",[176,4.053,240,4.213,331,5.455]],[\"description/279\",[51,3.415,157,3.85,164,3.601,209,1.863,332,4.229]],[\"description/280\",[165,2.046,209,1.863,333,4.229,334,4.229,335,4.229]],[\"description/281\",[176,4.053,191,4.404,192,3.796]],[\"description/282\",[131,3.415,209,1.863,310,3.415,312,3.85,313,3.415]],[\"description/283\",[5,1.883,209,1.863,313,3.415,336,4.229,337,4.229]],[\"description/284\",[165,2.305,180,3.063,338,4.765,339,4.765]],[\"description/285\",[205,3.679,215,4.338,340,4.765,341,4.765]],[\"description/286\",[165,2.639,209,2.402,342,5.455]],[\"description/287\",[5,2.122,165,2.305,343,4.765,344,4.765]],[\"description/288\",[345,6.203]],[\"description/289\",[209,2.098,275,4.338,345,3.847,346,4.765]],[\"description/290\",[62,4.213,347,5.455,348,5.455]],[\"description/291\",[349,6.38,350,6.38]],[\"description/292\",[110,4.74,351,6.38]],[\"description/293\",[110,4.053,165,2.639,166,4.404]],[\"description/294\",[117,3.052,165,2.639,352,5.455]],[\"description/295\",[240,4.927,259,4.44]],[\"description/296\",[106,5.809,165,3.086]],[\"description/297\",[259,3.316,299,4.338,353,3.679,354,4.338]],[\"description/298\",[163,4.927,355,5.432]],[\"description/299\",[5,2.841,171,3.211]],[\"description/300\",[25,4.404,209,2.402,256,4.967]],[\"description/301\",[5,2.429,163,4.213,355,4.645]],[\"description/302\",[356,6.38,357,6.38]],[\"description/303\",[358,5.707]],[\"description/304\",[83,4.057,195,3.847,358,5.131]],[\"description/305\",[41,3.796,358,5.65]],[\"description/306\",[102,3.54,166,3.847,358,5.131]],[\"description/307\",[358,5.131,359,4.765,360,4.338]],[\"description/308\",[20,2.606,358,5.65]],[\"description/309\",[20,3.048,198,4.74]],[\"description/310\",[5,2.841,171,3.211]],[\"description/311\",[181,4.74,182,4.315]],[\"description/312\",[233,6.541]],[\"description/313\",[20,1.816,196,2.825,198,2.825,209,1.674,361,3.802,362,3.802]],[\"description/314\",[20,2.276,144,3.063,184,2.993,198,3.54]],[\"description/315\",[363,6.994]],[\"description/316\",[145,4.827]],[\"description/317\",[187,2.943,360,3.85,364,4.229,365,4.229,366,4.229]],[\"description/318\",[367,7.682]],[\"description/319\",[34,4.927,117,3.57]],[\"description/320\",[208,4.927,368,6.38]],[\"description/321\",[108,5.432,305,4.927]],[\"description/322\",[140,2.936,178,2.389,305,2.936,306,3.237,307,3.237,308,3.237]],[\"description/323\",[183,4.74,184,4.008]],[\"description/324\",[11,3.222,117,3.052,225,4.213]],[\"description/325\",[56,5.346]],[\"description/326\",[4,4.315,152,5.432]],[\"description/327\",[180,4.102,208,4.927]],[\"description/328\",[5,2.841,171,3.211]],[\"description/329\",[165,2.305,180,3.063,369,4.765,370,4.765]],[\"description/330\",[209,2.402,274,4.967,371,5.455]],[\"description/331\",[206,5.515]],[\"description/332\",[209,2.402,218,4.967,219,4.967]],[\"description/333\",[24,2.366,78,3.85,103,3.266,209,1.863,223,3.601]],[\"description/334\",[4,2.861,5,1.883,24,2.366,103,3.266,372,4.229]],[\"description/335\",[25,4.404,209,2.402,311,4.967]],[\"description/336\",[102,3.54,253,4.057,373,4.338,374,4.765]],[\"description/337\",[32,5.061]],[\"description/338\",[280,4.74,375,6.38]],[\"description/339\",[280,4.74,376,6.38]],[\"description/340\",[213,5.515]],[\"description/341\",[323,6.994]],[\"description/342\",[160,3.679,217,4.057,280,5.131]],[\"description/343\",[160,3.679,280,5.131,377,4.765]],[\"description/344\",[249,5.932]],[\"description/345\",[32,4.203,329,5.151]],[\"description/346\",[161,5.346]],[\"description/347\",[5,2.841,171,3.211]],[\"description/348\",[181,4.74,182,4.315]],[\"description/349\",[233,6.541]],[\"description/350\",[161,3.796,209,2.402,234,4.967]],[\"description/351\",[20,2.606,161,3.796,198,4.053]],[\"description/352\",[161,4.44,232,4.927]],[\"description/353\",[144,3.063,161,3.316,174,4.338,184,2.993]],[\"description/354\",[378,7.682]],[\"description/355\",[187,4.44,379,6.38]],[\"description/356\",[34,5.932]],[\"description/357\",[177,5.432,182,4.315]],[\"description/358\",[5,2.841,171,3.211]],[\"description/359\",[183,4.74,184,4.008]],[\"description/360\",[184,2.169,185,2.94,186,2.94,187,3.769,188,2.788,189,2.94]],[\"description/361\",[5,1.883,196,3.142,285,3.601,380,4.229,381,4.229]],[\"description/362\",[182,2.572,269,3.461,279,3.461,382,3.802,383,3.802,384,3.802]],[\"description/363\",[182,3.69,385,5.455,386,5.455]],[\"description/364\",[387,6.203]],[\"description/365\",[387,5.151,388,6.38]],[\"description/366\",[217,5.432,387,5.151]],[\"description/367\",[181,4.74,182,4.315]],[\"description/368\",[259,2.943,313,3.415,389,4.229,390,4.229,391,4.229]],[\"description/369\",[22,5.151,72,4.315]],[\"description/370\",[192,4.44,317,4.927]],[\"description/371\",[50,3.142,192,2.943,317,3.266,353,3.266,392,4.229]],[\"description/372\",[192,3.316,259,3.316,317,3.679,393,4.765]],[\"description/373\",[55,3.351,150,4.927]],[\"description/374\",[20,2.606,55,2.865,171,2.745]],[\"description/375\",[5,2.122,24,2.666,181,3.54,259,3.316]],[\"description/376\",[55,2.502,63,4.057,353,3.679,394,4.765]],[\"description/377\",[55,2.502,105,4.338,150,3.679,209,2.098]],[\"description/378\",[55,2.865,165,2.639,395,5.455]],[\"description/379\",[16,5.515]],[\"description/380\",[5,2.841,171,3.211]],[\"description/381\",[16,3.916,144,3.507,171,2.745]],[\"description/382\",[55,2.865,285,4.645,396,5.455]],[\"description/383\",[16,3.036,144,2.719,373,3.85,397,4.229,398,4.229]],[\"description/384\",[41,5.346]],[\"description/385\",[172,5.932]],[\"description/386\",[5,2.841,171,3.211]],[\"description/387\",[249,5.932]],[\"description/388\",[200,4.967,202,4.967,399,5.455]],[\"description/389\",[400,6.38,401,6.38]],[\"description/390\",[24,2.666,172,3.679,209,2.098,402,4.765]],[\"description/391\",[206,5.515]],[\"description/392\",[165,2.305,168,4.338,258,4.057,403,4.765]],[\"description/393\",[55,2.221,165,2.046,172,3.266,353,3.266,404,4.229]],[\"description/394\",[72,5.196]],[\"description/395\",[5,2.841,171,3.211]],[\"description/396\",[20,2.606,144,3.507,171,2.745]],[\"description/397\",[72,3.69,209,2.402,318,4.967]],[\"description/398\",[72,3.69,165,2.639,253,4.645]],[\"description/399\",[118,5.515]],[\"description/400\",[5,2.841,171,3.211]],[\"description/401\",[72,4.315,118,4.58]],[\"description/402\",[177,6.541]],[\"description/403\",[4,2.572,51,3.07,118,2.729,259,2.646,353,2.936,354,3.461]],[\"description/404\",[206,5.515]],[\"description/405\",[53,3.601,55,2.221,225,3.266,259,2.943,405,4.229]],[\"description/406\",[55,2.502,165,2.305,183,3.54,406,4.765]],[\"description/407\",[118,4.58,407,6.38]],[\"description/408\",[118,4.58,250,5.809]],[\"description/409\",[286,5.809,408,6.38]],[\"description/410\",[345,5.151,409,6.38]],[\"description/411\",[20,3.67]],[\"description/412\",[20,2.606,55,2.865,145,3.427]],[\"description/413\",[45,3.69,271,3.285,272,3.796]],[\"description/414\",[271,3.285,272,3.796,292,4.213]],[\"description/415\",[193,4.58,273,5.151]],[\"description/416\",[6,5.432,117,3.57]],[\"description/417\",[34,4.927,117,3.57]],[\"description/418\",[117,3.57,325,5.809]],[\"description/419\",[12,4.58,129,4.927]],[\"description/420\",[72,5.196]],[\"description/421\",[192,4.44,317,4.927]],[\"description/422\",[11,3.222,23,3.916,99,3.354]],[\"description/423\",[345,6.203]],[\"description/424\",[270,5.432,271,3.842]],[\"description/425\",[55,3.351,150,4.927]],[\"description/426\",[20,3.048,198,4.74]],[\"description/427\",[387,6.203]],[\"description/428\",[4,4.315,152,5.432]],[\"description/429\",[34,5.932]],[\"description/430\",[163,4.927,355,5.432]],[\"description/431\",[232,5.932]],[\"description/432\",[229,6.541]],[\"description/433\",[52,5.196]],[\"description/434\",[16,5.515]],[\"description/435\",[5,2.122,9,4.16,178,2.993]],[\"description/436\",[118,5.515]],[\"description/437\",[145,4.827]],[\"description/438\",[172,5.932]],[\"description/439\",[161,5.346]],[\"description/440\",[117,4.299]],[\"description/441\",[330,6.994]],[\"description/442\",[211,5.432,291,5.809]],[\"description/443\",[363,6.994]],[\"description/444\",[236,5.809,237,5.809]],[\"description/445\",[242,5.432,243,5.432]],[\"description/446\",[32,5.061]],[\"description/447\",[329,6.203]],[\"description/448\",[50,5.707]]],\"invertedIndex\":[[\"\",{\"_index\":7,\"description\":{\"2\":{},\"18\":{},\"38\":{},\"40\":{},\"57\":{},\"62\":{},\"263\":{}}}],[\"1\",{\"_index\":65,\"description\":{\"35\":{}}}],[\"2\",{\"_index\":210,\"description\":{\"151\":{}}}],[\"accordion\",{\"_index\":35,\"description\":{\"17\":{}}}],[\"action\",{\"_index\":55,\"description\":{\"29\":{},\"92\":{},\"110\":{},\"117\":{},\"119\":{},\"121\":{},\"122\":{},\"230\":{},\"233\":{},\"234\":{},\"235\":{},\"373\":{},\"374\":{},\"376\":{},\"377\":{},\"378\":{},\"382\":{},\"393\":{},\"405\":{},\"406\":{},\"412\":{},\"425\":{}}}],[\"action(\",{\"_index\":224,\"description\":{\"159\":{}}}],[\"ad\",{\"_index\":334,\"description\":{\"280\":{}}}],[\"adjust\",{\"_index\":332,\"description\":{\"279\":{}}}],[\"adobe’\",{\"_index\":366,\"description\":{\"317\":{}}}],[\"advanc\",{\"_index\":33,\"description\":{\"16\":{}}}],[\"affect\",{\"_index\":162,\"description\":{\"109\":{}}}],[\"alert\",{\"_index\":22,\"description\":{\"9\":{},\"15\":{},\"83\":{},\"369\":{}}}],[\"align\",{\"_index\":213,\"description\":{\"152\":{},\"179\":{},\"230\":{},\"257\":{},\"258\":{},\"260\":{},\"340\":{}}}],[\"allow\",{\"_index\":285,\"description\":{\"234\":{},\"361\":{},\"382\":{}}}],[\"altern\",{\"_index\":265,\"description\":{\"216\":{}}}],[\"ambigu\",{\"_index\":377,\"description\":{\"343\":{}}}],[\"anatomi\",{\"_index\":57,\"description\":{\"31\":{}}}],[\"anim\",{\"_index\":249,\"description\":{\"186\":{},\"215\":{},\"275\":{},\"344\":{},\"387\":{}}}],[\"api\",{\"_index\":241,\"description\":{\"177\":{}}}],[\"appear\",{\"_index\":399,\"description\":{\"388\":{}}}],[\"applic\",{\"_index\":236,\"description\":{\"174\":{},\"444\":{}}}],[\"appropri\",{\"_index\":256,\"description\":{\"201\":{},\"300\":{}}}],[\"approv\",{\"_index\":261,\"description\":{\"209\":{}}}],[\"area\",{\"_index\":6,\"description\":{\"2\":{},\"251\":{},\"416\":{}}}],[\"artboard\",{\"_index\":137,\"description\":{\"86\":{}}}],[\"asset\",{\"_index\":42,\"description\":{\"21\":{}}}],[\"auto\",{\"_index\":408,\"description\":{\"409\":{}}}],[\"avail\",{\"_index\":391,\"description\":{\"368\":{}}}],[\"avatar\",{\"_index\":120,\"description\":{\"72\":{}}}],[\"avoid\",{\"_index\":373,\"description\":{\"336\":{},\"383\":{}}}],[\"badg\",{\"_index\":67,\"description\":{\"37\":{}}}],[\"banner\",{\"_index\":136,\"description\":{\"83\":{}}}],[\"bar\",{\"_index\":45,\"description\":{\"23\":{},\"25\":{},\"26\":{},\"29\":{},\"38\":{},\"161\":{},\"237\":{},\"239\":{},\"413\":{}}}],[\"base\",{\"_index\":214,\"description\":{\"152\":{}}}],[\"be\",{\"_index\":277,\"description\":{\"230\":{}}}],[\"behavior\",{\"_index\":305,\"description\":{\"253\":{},\"254\":{},\"270\":{},\"321\":{},\"322\":{}}}],[\"below\",{\"_index\":392,\"description\":{\"371\":{}}}],[\"bi\",{\"_index\":293,\"description\":{\"241\":{}}}],[\"blue\",{\"_index\":153,\"description\":{\"98\":{}}}],[\"bodi\",{\"_index\":275,\"description\":{\"229\":{},\"289\":{}}}],[\"box\",{\"_index\":12,\"description\":{\"4\":{},\"36\":{},\"77\":{},\"133\":{},\"136\":{},\"145\":{},\"419\":{}}}],[\"brand\",{\"_index\":351,\"description\":{\"292\":{}}}],[\"breadcrumb\",{\"_index\":74,\"description\":{\"41\":{},\"164\":{}}}],[\"bulk\",{\"_index\":396,\"description\":{\"382\":{}}}],[\"button\",{\"_index\":20,\"description\":{\"8\":{},\"10\":{},\"13\":{},\"22\":{},\"28\":{},\"55\":{},\"92\":{},\"101\":{},\"106\":{},\"109\":{},\"117\":{},\"119\":{},\"121\":{},\"136\":{},\"146\":{},\"150\":{},\"151\":{},\"152\":{},\"153\":{},\"308\":{},\"309\":{},\"313\":{},\"314\":{},\"351\":{},\"374\":{},\"396\":{},\"411\":{},\"412\":{},\"426\":{}}}],[\"calendar\",{\"_index\":31,\"description\":{\"14\":{}}}],[\"canva\",{\"_index\":81,\"description\":{\"46\":{}}}],[\"capit\",{\"_index\":191,\"description\":{\"131\":{},\"144\":{},\"202\":{},\"281\":{}}}],[\"card\",{\"_index\":41,\"description\":{\"20\":{},\"21\":{},\"44\":{},\"53\":{},\"88\":{},\"90\":{},\"305\":{},\"384\":{}}}],[\"carousel\",{\"_index\":70,\"description\":{\"39\":{},\"66\":{}}}],[\"case\",{\"_index\":219,\"description\":{\"156\":{},\"332\":{}}}],[\"chang\",{\"_index\":352,\"description\":{\"294\":{}}}],[\"chat\",{\"_index\":116,\"description\":{\"67\":{}}}],[\"checkbox\",{\"_index\":161,\"description\":{\"109\":{},\"172\":{},\"346\":{},\"350\":{},\"351\":{},\"352\":{},\"353\":{},\"439\":{}}}],[\"checkerboard\",{\"_index\":122,\"description\":{\"73\":{}}}],[\"checklist\",{\"_index\":87,\"description\":{\"50\":{}}}],[\"checkmark\",{\"_index\":302,\"description\":{\"247\":{}}}],[\"choos\",{\"_index\":255,\"description\":{\"201\":{}}}],[\"circl\",{\"_index\":292,\"description\":{\"239\":{},\"264\":{},\"265\":{},\"266\":{},\"414\":{}}}],[\"circular\",{\"_index\":327,\"description\":{\"272\":{}}}],[\"clear\",{\"_index\":217,\"description\":{\"155\":{},\"342\":{},\"366\":{}}}],[\"cloud\",{\"_index\":47,\"description\":{\"24\":{},\"34\":{}}}],[\"coach\",{\"_index\":273,\"description\":{\"225\":{},\"230\":{},\"234\":{},\"415\":{}}}],[\"color\",{\"_index\":117,\"description\":{\"69\":{},\"91\":{},\"112\":{},\"113\":{},\"115\":{},\"157\":{},\"214\":{},\"251\":{},\"255\":{},\"268\":{},\"271\":{},\"294\":{},\"319\":{},\"324\":{},\"416\":{},\"417\":{},\"418\":{},\"440\":{}}}],[\"column\",{\"_index\":18,\"description\":{\"7\":{},\"262\":{}}}],[\"combin\",{\"_index\":372,\"description\":{\"334\":{}}}],[\"combo\",{\"_index\":129,\"description\":{\"77\":{},\"133\":{},\"136\":{},\"145\":{},\"419\":{}}}],[\"comment\",{\"_index\":75,\"description\":{\"42\":{}}}],[\"common\",{\"_index\":394,\"description\":{\"376\":{}}}],[\"commun\",{\"_index\":168,\"description\":{\"115\":{},\"392\":{}}}],[\"compon\",{\"_index\":244,\"description\":{\"179\":{},\"242\":{},\"243\":{}}}],[\"composit\",{\"_index\":298,\"description\":{\"244\":{}}}],[\"concis\",{\"_index\":206,\"description\":{\"142\":{},\"154\":{},\"200\":{},\"228\":{},\"331\":{},\"391\":{},\"404\":{}}}],[\"condens\",{\"_index\":370,\"description\":{\"329\":{}}}],[\"confirm\",{\"_index\":288,\"description\":{\"235\":{}}}],[\"connect\",{\"_index\":143,\"description\":{\"92\":{}}}],[\"consist\",{\"_index\":254,\"description\":{\"192\":{},\"227\":{}}}],[\"contact\",{\"_index\":367,\"description\":{\"318\":{}}}],[\"content\",{\"_index\":215,\"description\":{\"152\":{},\"285\":{}}}],[\"context\",{\"_index\":384,\"description\":{\"362\":{}}}],[\"control\",{\"_index\":82,\"description\":{\"46\":{}}}],[\"cooldown\",{\"_index\":401,\"description\":{\"389\":{}}}],[\"copi\",{\"_index\":346,\"description\":{\"289\":{}}}],[\"correct\",{\"_index\":267,\"description\":{\"218\":{}}}],[\"creat\",{\"_index\":166,\"description\":{\"113\":{},\"206\":{},\"293\":{},\"306\":{}}}],[\"crop\",{\"_index\":106,\"description\":{\"62\":{},\"296\":{}}}],[\"crucial\",{\"_index\":403,\"description\":{\"392\":{}}}],[\"custom\",{\"_index\":389,\"description\":{\"368\":{}}}],[\"cycl\",{\"_index\":30,\"description\":{\"13\":{}}}],[\"dash\",{\"_index\":320,\"description\":{\"263\":{}}}],[\"data\",{\"_index\":310,\"description\":{\"257\":{},\"258\":{},\"259\":{},\"282\":{}}}],[\"date\",{\"_index\":97,\"description\":{\"57\":{}}}],[\"deep\",{\"_index\":374,\"description\":{\"336\":{}}}],[\"definit\",{\"_index\":156,\"description\":{\"103\":{}}}],[\"delay\",{\"_index\":202,\"description\":{\"139\":{},\"388\":{}}}],[\"depend\",{\"_index\":287,\"description\":{\"234\":{}}}],[\"deprec\",{\"_index\":304,\"description\":{\"249\":{}}}],[\"describ\",{\"_index\":402,\"description\":{\"390\":{}}}],[\"descript\",{\"_index\":371,\"description\":{\"330\":{}}}],[\"design\",{\"_index\":187,\"description\":{\"130\":{},\"163\":{},\"177\":{},\"199\":{},\"212\":{},\"317\":{},\"355\":{},\"360\":{}}}],[\"detail\",{\"_index\":127,\"description\":{\"76\":{}}}],[\"develop\",{\"_index\":409,\"description\":{\"410\":{}}}],[\"dexter\",{\"_index\":115,\"description\":{\"66\":{}}}],[\"dial\",{\"_index\":101,\"description\":{\"59\":{}}}],[\"dialog\",{\"_index\":72,\"description\":{\"40\":{},\"58\":{},\"162\":{},\"369\":{},\"394\":{},\"397\":{},\"398\":{},\"401\":{},\"420\":{}}}],[\"direct\",{\"_index\":300,\"description\":{\"244\":{}}}],[\"direction\",{\"_index\":294,\"description\":{\"241\":{}}}],[\"disabl\",{\"_index\":397,\"description\":{\"383\":{}}}],[\"dismiss\",{\"_index\":286,\"description\":{\"234\":{},\"409\":{}}}],[\"display\",{\"_index\":225,\"description\":{\"160\":{},\"255\":{},\"271\":{},\"324\":{},\"405\":{}}}],[\"divid\",{\"_index\":317,\"description\":{\"262\":{},\"370\":{},\"371\":{},\"372\":{},\"421\":{}}}],[\"don't\",{\"_index\":165,\"description\":{\"113\":{},\"157\":{},\"179\":{},\"182\":{},\"190\":{},\"193\":{},\"206\":{},\"211\":{},\"233\":{},\"235\":{},\"243\":{},\"246\":{},\"247\":{},\"248\":{},\"261\":{},\"280\":{},\"284\":{},\"286\":{},\"287\":{},\"293\":{},\"294\":{},\"296\":{},\"329\":{},\"378\":{},\"392\":{},\"393\":{},\"398\":{},\"406\":{}}}],[\"don’t\",{\"_index\":259,\"description\":{\"207\":{},\"295\":{},\"297\":{},\"368\":{},\"372\":{},\"375\":{},\"403\":{},\"405\":{}}}],[\"dot\",{\"_index\":114,\"description\":{\"65\":{}}}],[\"down\",{\"_index\":307,\"description\":{\"254\":{},\"270\":{},\"322\":{}}}],[\"drag\",{\"_index\":68,\"description\":{\"38\":{},\"87\":{}}}],[\"draggabl\",{\"_index\":28,\"description\":{\"12\":{}}}],[\"drop\",{\"_index\":26,\"description\":{\"11\":{},\"87\":{}}}],[\"dropdown\",{\"_index\":23,\"description\":{\"10\":{},\"56\":{},\"84\":{},\"136\":{},\"195\":{},\"203\":{},\"422\":{}}}],[\"dynam\",{\"_index\":133,\"description\":{\"80\":{}}}],[\"edit\",{\"_index\":388,\"description\":{\"365\":{}}}],[\"emphas\",{\"_index\":233,\"description\":{\"170\":{},\"312\":{},\"349\":{}}}],[\"emphasi\",{\"_index\":335,\"description\":{\"280\":{}}}],[\"en\",{\"_index\":319,\"description\":{\"263\":{}}}],[\"equival\",{\"_index\":268,\"description\":{\"219\":{}}}],[\"error\",{\"_index\":83,\"description\":{\"47\":{},\"218\":{},\"304\":{}}}],[\"exclus\",{\"_index\":362,\"description\":{\"313\":{}}}],[\"experi\",{\"_index\":46,\"description\":{\"24\":{},\"44\":{}}}],[\"explain\",{\"_index\":278,\"description\":{\"230\":{}}}],[\"featur\",{\"_index\":226,\"description\":{\"160\":{}}}],[\"field\",{\"_index\":9,\"description\":{\"2\":{},\"30\":{},\"79\":{},\"100\":{},\"105\":{},\"125\":{},\"126\":{},\"127\":{},\"128\":{},\"129\":{},\"130\":{},\"131\":{},\"132\":{},\"435\":{}}}],[\"file\",{\"_index\":111,\"description\":{\"64\":{}}}],[\"fill\",{\"_index\":263,\"description\":{\"210\":{}}}],[\"filter\",{\"_index\":58,\"description\":{\"33\":{}}}],[\"finger\",{\"_index\":308,\"description\":{\"254\":{},\"270\":{},\"322\":{}}}],[\"first\",{\"_index\":78,\"description\":{\"44\":{},\"333\":{}}}],[\"flexibl\",{\"_index\":208,\"description\":{\"147\":{},\"252\":{},\"269\":{},\"320\":{},\"327\":{}}}],[\"float\",{\"_index\":147,\"description\":{\"94\":{},\"184\":{}}}],[\"flow\",{\"_index\":94,\"description\":{\"54\":{},\"244\":{}}}],[\"fluid\",{\"_index\":154,\"description\":{\"102\":{}}}],[\"follow\",{\"_index\":190,\"description\":{\"131\":{},\"144\":{},\"202\":{}}}],[\"font\",{\"_index\":164,\"description\":{\"111\":{},\"217\":{},\"279\":{}}}],[\"footer\",{\"_index\":119,\"description\":{\"71\":{},\"107\":{}}}],[\"form\",{\"_index\":195,\"description\":{\"132\":{},\"145\":{},\"203\":{},\"304\":{}}}],[\"forum\",{\"_index\":138,\"description\":{\"88\":{}}}],[\"frame\",{\"_index\":237,\"description\":{\"174\":{},\"444\":{}}}],[\"framework\",{\"_index\":38,\"description\":{\"18\":{}}}],[\"full\",{\"_index\":71,\"description\":{\"40\":{},\"183\":{}}}],[\"fulli\",{\"_index\":343,\"description\":{\"287\":{}}}],[\"galleri\",{\"_index\":88,\"description\":{\"51\":{}}}],[\"gap\",{\"_index\":246,\"description\":{\"180\":{}}}],[\"ghost\",{\"_index\":85,\"description\":{\"49\":{}}}],[\"gray\",{\"_index\":359,\"description\":{\"307\":{}}}],[\"grid\",{\"_index\":243,\"description\":{\"178\":{},\"179\":{},\"445\":{}}}],[\"group\",{\"_index\":144,\"description\":{\"92\":{},\"119\":{},\"122\":{},\"150\":{},\"152\":{},\"153\":{},\"314\":{},\"353\":{},\"381\":{},\"383\":{},\"396\":{}}}],[\"guid\",{\"_index\":109,\"description\":{\"62\":{}}}],[\"handl\",{\"_index\":108,\"description\":{\"62\":{},\"253\":{},\"321\":{}}}],[\"header\",{\"_index\":50,\"description\":{\"25\":{},\"35\":{},\"89\":{},\"267\":{},\"371\":{},\"448\":{}}}],[\"height\",{\"_index\":155,\"description\":{\"102\":{},\"252\":{}}}],[\"help\",{\"_index\":269,\"description\":{\"220\":{},\"362\":{}}}],[\"hold\",{\"_index\":175,\"description\":{\"122\":{},\"123\":{}}}],[\"home\",{\"_index\":92,\"description\":{\"53\":{}}}],[\"hot\",{\"_index\":380,\"description\":{\"361\":{}}}],[\"hour\",{\"_index\":170,\"description\":{\"116\":{}}}],[\"hud\",{\"_index\":95,\"description\":{\"55\":{}}}],[\"hue\",{\"_index\":328,\"description\":{\"272\":{}}}],[\"icon\",{\"_index\":24,\"description\":{\"10\":{},\"27\":{},\"84\":{},\"122\":{},\"123\":{},\"158\":{},\"159\":{},\"192\":{},\"193\":{},\"209\":{},\"211\":{},\"245\":{},\"246\":{},\"250\":{},\"333\":{},\"334\":{},\"375\":{},\"390\":{}}}],[\"icon'\",{\"_index\":262,\"description\":{\"210\":{}}}],[\"iconographi\",{\"_index\":260,\"description\":{\"208\":{}}}],[\"illustr\",{\"_index\":110,\"description\":{\"63\":{},\"78\":{},\"205\":{},\"206\":{},\"292\":{},\"293\":{}}}],[\"imag\",{\"_index\":299,\"description\":{\"244\":{},\"297\":{}}}],[\"immedi\",{\"_index\":200,\"description\":{\"138\":{},\"388\":{}}}],[\"import\",{\"_index\":252,\"description\":{\"190\":{}}}],[\"includ\",{\"_index\":183,\"description\":{\"129\":{},\"141\":{},\"198\":{},\"323\":{},\"359\":{},\"406\":{}}}],[\"inclus\",{\"_index\":188,\"description\":{\"130\":{},\"199\":{},\"212\":{},\"360\":{}}}],[\"inconsist\",{\"_index\":283,\"description\":{\"233\":{}}}],[\"indent\",{\"_index\":342,\"description\":{\"286\":{}}}],[\"indic\",{\"_index\":160,\"description\":{\"108\":{},\"231\":{},\"274\":{},\"342\":{},\"343\":{}}}],[\"individu\",{\"_index\":296,\"description\":{\"242\":{}}}],[\"inform\",{\"_index\":258,\"description\":{\"205\":{},\"229\":{},\"392\":{}}}],[\"input\",{\"_index\":178,\"description\":{\"125\":{},\"126\":{},\"127\":{},\"128\":{},\"129\":{},\"130\":{},\"131\":{},\"132\":{},\"254\":{},\"270\":{},\"322\":{},\"435\":{}}}],[\"insid\",{\"_index\":404,\"description\":{\"393\":{}}}],[\"instal\",{\"_index\":134,\"description\":{\"82\":{}}}],[\"intern\",{\"_index\":379,\"description\":{\"355\":{}}}],[\"isol\",{\"_index\":173,\"description\":{\"121\":{}}}],[\"item\",{\"_index\":103,\"description\":{\"60\":{},\"142\":{},\"200\":{},\"333\":{},\"334\":{}}}],[\"justifi\",{\"_index\":344,\"description\":{\"287\":{}}}],[\"k9\",{\"_index\":49,\"description\":{\"25\":{},\"31\":{},\"32\":{}}}],[\"keep\",{\"_index\":205,\"description\":{\"142\":{},\"200\":{},\"228\":{},\"229\":{},\"285\":{}}}],[\"keyboard\",{\"_index\":104,\"description\":{\"61\":{},\"219\":{}}}],[\"kit\",{\"_index\":231,\"description\":{\"166\":{}}}],[\"label\",{\"_index\":184,\"description\":{\"129\":{},\"130\":{},\"141\":{},\"198\":{},\"199\":{},\"224\":{},\"240\":{},\"314\":{},\"323\":{},\"353\":{},\"359\":{},\"360\":{}}}],[\"larg\",{\"_index\":398,\"description\":{\"383\":{}}}],[\"launch\",{\"_index\":201,\"description\":{\"138\":{},\"139\":{}}}],[\"left\",{\"_index\":63,\"description\":{\"35\":{},\"257\":{},\"376\":{}}}],[\"length\",{\"_index\":368,\"description\":{\"320\":{}}}],[\"less\",{\"_index\":186,\"description\":{\"130\":{},\"199\":{},\"360\":{}}}],[\"level\",{\"_index\":223,\"description\":{\"159\":{},\"190\":{},\"333\":{}}}],[\"light\",{\"_index\":355,\"description\":{\"298\":{},\"301\":{},\"430\":{}}}],[\"limit\",{\"_index\":324,\"description\":{\"266\":{}}}],[\"line\",{\"_index\":21,\"description\":{\"9\":{}}}],[\"link\",{\"_index\":345,\"description\":{\"288\":{},\"289\":{},\"410\":{},\"423\":{}}}],[\"list\",{\"_index\":29,\"description\":{\"12\":{},\"48\":{},\"56\":{},\"99\":{}}}],[\"load\",{\"_index\":86,\"description\":{\"49\":{},\"81\":{},\"265\":{}}}],[\"loader\",{\"_index\":272,\"description\":{\"223\":{},\"237\":{},\"239\":{},\"264\":{},\"265\":{},\"266\":{},\"413\":{},\"414\":{}}}],[\"logic\",{\"_index\":19,\"description\":{\"8\":{}}}],[\"loup\",{\"_index\":306,\"description\":{\"254\":{},\"270\":{},\"322\":{}}}],[\"make\",{\"_index\":369,\"description\":{\"329\":{}}}],[\"manag\",{\"_index\":112,\"description\":{\"64\":{}}}],[\"mani\",{\"_index\":250,\"description\":{\"189\":{},\"408\":{}}}],[\"map\",{\"_index\":80,\"description\":{\"45\":{}}}],[\"mark\",{\"_index\":193,\"description\":{\"132\":{},\"145\":{},\"203\":{},\"225\":{},\"230\":{},\"234\":{},\"415\":{}}}],[\"maximum\",{\"_index\":212,\"description\":{\"151\":{}}}],[\"meet\",{\"_index\":364,\"description\":{\"317\":{}}}],[\"menu\",{\"_index\":102,\"description\":{\"60\":{},\"96\":{},\"142\":{},\"200\":{},\"306\":{},\"336\":{}}}],[\"messag\",{\"_index\":36,\"description\":{\"18\":{},\"63\":{},\"67\":{}}}],[\"meter\",{\"_index\":270,\"description\":{\"221\":{},\"223\":{},\"424\":{}}}],[\"miller\",{\"_index\":17,\"description\":{\"7\":{}}}],[\"mind\",{\"_index\":245,\"description\":{\"180\":{}}}],[\"minim\",{\"_index\":151,\"description\":{\"97\":{}}}],[\"minimum\",{\"_index\":179,\"description\":{\"126\":{},\"134\":{},\"148\":{},\"196\":{}}}],[\"minor\",{\"_index\":194,\"description\":{\"132\":{},\"145\":{},\"203\":{}}}],[\"mirror\",{\"_index\":295,\"description\":{\"242\":{},\"243\":{},\"244\":{},\"245\":{},\"246\":{},\"247\":{},\"248\":{}}}],[\"miss\",{\"_index\":321,\"description\":{\"263\":{}}}],[\"mix\",{\"_index\":181,\"description\":{\"128\":{},\"169\":{},\"311\":{},\"348\":{},\"367\":{},\"375\":{}}}],[\"mobil\",{\"_index\":51,\"description\":{\"26\":{},\"44\":{},\"279\":{},\"403\":{}}}],[\"modal\",{\"_index\":39,\"description\":{\"19\":{}}}],[\"mode\",{\"_index\":125,\"description\":{\"75\":{}}}],[\"modifi\",{\"_index\":247,\"description\":{\"182\":{}}}],[\"more\",{\"_index\":53,\"description\":{\"28\":{},\"81\":{},\"405\":{}}}],[\"motion\",{\"_index\":363,\"description\":{\"315\":{},\"443\":{}}}],[\"movement\",{\"_index\":301,\"description\":{\"245\":{}}}],[\"multi\",{\"_index\":128,\"description\":{\"77\":{}}}],[\"multilin\",{\"_index\":8,\"description\":{\"2\":{}}}],[\"multipl\",{\"_index\":407,\"description\":{\"407\":{}}}],[\"mutual\",{\"_index\":361,\"description\":{\"313\":{}}}],[\"name\",{\"_index\":284,\"description\":{\"233\":{}}}],[\"nav\",{\"_index\":64,\"description\":{\"35\":{}}}],[\"navig\",{\"_index\":4,\"description\":{\"1\":{},\"26\":{},\"36\":{},\"97\":{},\"194\":{},\"326\":{},\"334\":{},\"403\":{},\"428\":{}}}],[\"necessari\",{\"_index\":221,\"description\":{\"158\":{}}}],[\"need\",{\"_index\":381,\"description\":{\"361\":{}}}],[\"nest\",{\"_index\":253,\"description\":{\"191\":{},\"336\":{},\"398\":{}}}],[\"new\",{\"_index\":357,\"description\":{\"302\":{}}}],[\"notif\",{\"_index\":76,\"description\":{\"43\":{}}}],[\"number\",{\"_index\":313,\"description\":{\"259\":{},\"282\":{},\"283\":{},\"368\":{}}}],[\"numer\",{\"_index\":131,\"description\":{\"79\":{},\"258\":{},\"259\":{},\"282\":{}}}],[\"object\",{\"_index\":291,\"description\":{\"236\":{},\"442\":{}}}],[\"offic\",{\"_index\":169,\"description\":{\"116\":{}}}],[\"oldstyl\",{\"_index\":336,\"description\":{\"283\":{}}}],[\"on\",{\"_index\":405,\"description\":{\"405\":{}}}],[\"onboard\",{\"_index\":77,\"description\":{\"44\":{}}}],[\"opac\",{\"_index\":121,\"description\":{\"73\":{}}}],[\"option\",{\"_index\":196,\"description\":{\"132\":{},\"145\":{},\"160\":{},\"203\":{},\"313\":{},\"361\":{}}}],[\"order\",{\"_index\":216,\"description\":{\"153\":{}}}],[\"organ\",{\"_index\":60,\"description\":{\"34\":{}}}],[\"over\",{\"_index\":354,\"description\":{\"297\":{},\"403\":{}}}],[\"overflow\",{\"_index\":171,\"description\":{\"118\":{},\"119\":{},\"127\":{},\"135\":{},\"149\":{},\"150\":{},\"168\":{},\"187\":{},\"188\":{},\"197\":{},\"222\":{},\"226\":{},\"238\":{},\"299\":{},\"310\":{},\"328\":{},\"347\":{},\"358\":{},\"374\":{},\"380\":{},\"381\":{},\"386\":{},\"395\":{},\"396\":{},\"400\":{}}}],[\"overrid\",{\"_index\":220,\"description\":{\"157\":{}}}],[\"overus\",{\"_index\":393,\"description\":{\"372\":{}}}],[\"page\",{\"_index\":84,\"description\":{\"47\":{},\"194\":{}}}],[\"pagin\",{\"_index\":113,\"description\":{\"65\":{},\"99\":{},\"100\":{},\"101\":{}}}],[\"panel\",{\"_index\":56,\"description\":{\"31\":{},\"32\":{},\"94\":{},\"161\":{},\"181\":{},\"183\":{},\"184\":{},\"325\":{}}}],[\"paragraph\",{\"_index\":338,\"description\":{\"284\":{}}}],[\"partial\",{\"_index\":235,\"description\":{\"173\":{}}}],[\"pattern\",{\"_index\":139,\"description\":{\"89\":{}}}],[\"photo\",{\"_index\":15,\"description\":{\"6\":{}}}],[\"picker\",{\"_index\":99,\"description\":{\"57\":{},\"68\":{},\"69\":{},\"195\":{},\"196\":{},\"197\":{},\"198\":{},\"199\":{},\"200\":{},\"201\":{},\"202\":{},\"203\":{},\"422\":{}}}],[\"place\",{\"_index\":353,\"description\":{\"297\":{},\"371\":{},\"376\":{},\"393\":{},\"403\":{}}}],[\"placement\",{\"_index\":177,\"description\":{\"123\":{},\"357\":{},\"402\":{}}}],[\"platform\",{\"_index\":239,\"description\":{\"176\":{}}}],[\"player\",{\"_index\":90,\"description\":{\"52\":{}}}],[\"point\",{\"_index\":341,\"description\":{\"285\":{}}}],[\"pointer\",{\"_index\":135,\"description\":{\"82\":{}}}],[\"popov\",{\"_index\":32,\"description\":{\"15\":{},\"81\":{},\"137\":{},\"138\":{},\"139\":{},\"160\":{},\"276\":{},\"337\":{},\"345\":{},\"446\":{}}}],[\"positive/neg\",{\"_index\":386,\"description\":{\"363\":{}}}],[\"prefix\",{\"_index\":385,\"description\":{\"363\":{}}}],[\"presenc\",{\"_index\":142,\"description\":{\"91\":{}}}],[\"prevent\",{\"_index\":266,\"description\":{\"218\":{}}}],[\"principl\",{\"_index\":238,\"description\":{\"175\":{}}}],[\"product\",{\"_index\":158,\"description\":{\"107\":{}}}],[\"progress\",{\"_index\":271,\"description\":{\"221\":{},\"222\":{},\"223\":{},\"224\":{},\"237\":{},\"238\":{},\"239\":{},\"240\":{},\"264\":{},\"265\":{},\"266\":{},\"413\":{},\"414\":{},\"424\":{}}}],[\"provid\",{\"_index\":383,\"description\":{\"362\":{}}}],[\"quick\",{\"_index\":150,\"description\":{\"96\":{},\"110\":{},\"373\":{},\"377\":{},\"425\":{}}}],[\"radio\",{\"_index\":198,\"description\":{\"136\":{},\"309\":{},\"313\":{},\"314\":{},\"351\":{},\"426\":{}}}],[\"radiu\",{\"_index\":326,\"description\":{\"269\":{}}}],[\"rail\",{\"_index\":1,\"description\":{\"0\":{},\"181\":{}}}],[\"rang\",{\"_index\":98,\"description\":{\"57\":{}}}],[\"rate\",{\"_index\":387,\"description\":{\"364\":{},\"365\":{},\"366\":{},\"427\":{}}}],[\"reader\",{\"_index\":348,\"description\":{\"290\":{}}}],[\"rectangular\",{\"_index\":375,\"description\":{\"338\":{}}}],[\"redund\",{\"_index\":406,\"description\":{\"406\":{}}}],[\"relat\",{\"_index\":174,\"description\":{\"122\":{},\"353\":{}}}],[\"repres\",{\"_index\":297,\"description\":{\"243\":{},\"245\":{},\"246\":{}}}],[\"requir\",{\"_index\":197,\"description\":{\"132\":{},\"145\":{},\"203\":{},\"235\":{}}}],[\"respect\",{\"_index\":176,\"description\":{\"123\":{},\"153\":{},\"210\":{},\"260\":{},\"278\":{},\"281\":{}}}],[\"respons\",{\"_index\":242,\"description\":{\"178\":{},\"179\":{},\"445\":{}}}],[\"review\",{\"_index\":185,\"description\":{\"130\":{},\"199\":{},\"360\":{}}}],[\"right\",{\"_index\":311,\"description\":{\"258\":{},\"335\":{}}}],[\"rotat\",{\"_index\":107,\"description\":{\"62\":{}}}],[\"rtl\",{\"_index\":378,\"description\":{\"354\":{}}}],[\"rule\",{\"_index\":192,\"description\":{\"131\":{},\"144\":{},\"202\":{},\"281\":{},\"370\":{},\"371\":{},\"372\":{},\"421\":{}}}],[\"save\",{\"_index\":203,\"description\":{\"140\":{}}}],[\"scale\",{\"_index\":240,\"description\":{\"176\":{},\"207\":{},\"211\":{},\"278\":{},\"295\":{}}}],[\"scorecard\",{\"_index\":257,\"description\":{\"204\":{}}}],[\"screen\",{\"_index\":62,\"description\":{\"34\":{},\"40\":{},\"53\":{},\"54\":{},\"290\":{}}}],[\"scroll\",{\"_index\":44,\"description\":{\"23\":{}}}],[\"search\",{\"_index\":13,\"description\":{\"5\":{},\"30\":{},\"33\":{},\"80\":{}}}],[\"select\",{\"_index\":11,\"description\":{\"4\":{},\"77\":{},\"195\":{},\"196\":{},\"197\":{},\"198\":{},\"199\":{},\"200\":{},\"201\":{},\"202\":{},\"203\":{},\"255\":{},\"271\":{},\"324\":{},\"422\":{}}}],[\"sentenc\",{\"_index\":218,\"description\":{\"156\":{},\"332\":{}}}],[\"share\",{\"_index\":123,\"description\":{\"74\":{},\"75\":{},\"96\":{}}}],[\"sheet\",{\"_index\":124,\"description\":{\"74\":{}}}],[\"shell\",{\"_index\":48,\"description\":{\"24\":{}}}],[\"short\",{\"_index\":340,\"description\":{\"285\":{}}}],[\"shortcut\",{\"_index\":105,\"description\":{\"61\":{},\"377\":{}}}],[\"show\",{\"_index\":279,\"description\":{\"231\":{},\"362\":{}}}],[\"side\",{\"_index\":152,\"description\":{\"97\":{},\"326\":{},\"428\":{}}}],[\"size\",{\"_index\":157,\"description\":{\"106\":{},\"279\":{}}}],[\"skip\",{\"_index\":281,\"description\":{\"232\":{}}}],[\"slash\",{\"_index\":303,\"description\":{\"248\":{}}}],[\"slider\",{\"_index\":34,\"description\":{\"16\":{},\"319\":{},\"356\":{},\"417\":{},\"429\":{}}}],[\"small\",{\"_index\":322,\"description\":{\"266\":{}}}],[\"sourc\",{\"_index\":280,\"description\":{\"231\":{},\"274\":{},\"338\":{},\"339\":{},\"342\":{},\"343\":{}}}],[\"space\",{\"_index\":323,\"description\":{\"266\":{},\"341\":{}}}],[\"sparingli\",{\"_index\":318,\"description\":{\"262\":{},\"397\":{}}}],[\"spectrum\",{\"_index\":365,\"description\":{\"317\":{}}}],[\"split\",{\"_index\":43,\"description\":{\"22\":{},\"28\":{}}}],[\"squar\",{\"_index\":376,\"description\":{\"339\":{}}}],[\"standalon\",{\"_index\":234,\"description\":{\"171\":{},\"350\":{}}}],[\"standard\",{\"_index\":40,\"description\":{\"20\":{}}}],[\"star\",{\"_index\":390,\"description\":{\"368\":{}}}],[\"start\",{\"_index\":61,\"description\":{\"34\":{},\"124\":{}}}],[\"startscreen\",{\"_index\":130,\"description\":{\"78\":{}}}],[\"state\",{\"_index\":140,\"description\":{\"90\":{},\"173\":{},\"254\":{},\"270\":{},\"322\":{}}}],[\"statu\",{\"_index\":163,\"description\":{\"109\":{},\"165\":{},\"298\":{},\"301\":{},\"430\":{}}}],[\"steplist\",{\"_index\":148,\"description\":{\"95\":{}}}],[\"stepper\",{\"_index\":132,\"description\":{\"79\":{}}}],[\"string\",{\"_index\":337,\"description\":{\"283\":{}}}],[\"stripe\",{\"_index\":316,\"description\":{\"261\":{}}}],[\"structur\",{\"_index\":264,\"description\":{\"213\":{}}}],[\"style\",{\"_index\":211,\"description\":{\"151\":{},\"236\":{},\"442\":{}}}],[\"subsequ\",{\"_index\":227,\"description\":{\"160\":{}}}],[\"succinct\",{\"_index\":276,\"description\":{\"229\":{}}}],[\"suggest\",{\"_index\":204,\"description\":{\"140\":{}}}],[\"summari\",{\"_index\":126,\"description\":{\"76\":{}}}],[\"suppress\",{\"_index\":199,\"description\":{\"137\":{}}}],[\"switch\",{\"_index\":232,\"description\":{\"167\":{},\"171\":{},\"172\":{},\"352\":{},\"431\":{}}}],[\"system\",{\"_index\":360,\"description\":{\"307\":{},\"317\":{}}}],[\"tab\",{\"_index\":52,\"description\":{\"27\":{},\"98\":{},\"102\":{},\"185\":{},\"187\":{},\"189\":{},\"190\":{},\"191\":{},\"433\":{}}}],[\"tabl\",{\"_index\":229,\"description\":{\"165\":{},\"256\":{},\"432\":{}}}],[\"tabular\",{\"_index\":312,\"description\":{\"259\":{},\"282\":{}}}],[\"tag\",{\"_index\":16,\"description\":{\"6\":{},\"104\":{},\"105\":{},\"379\":{},\"381\":{},\"383\":{},\"434\":{}}}],[\"taken\",{\"_index\":290,\"description\":{\"235\":{}}}],[\"takeov\",{\"_index\":73,\"description\":{\"40\":{}}}],[\"taxonomi\",{\"_index\":37,\"description\":{\"18\":{}}}],[\"team\",{\"_index\":189,\"description\":{\"130\":{},\"199\":{},\"360\":{}}}],[\"templat\",{\"_index\":248,\"description\":{\"182\":{}}}],[\"text\",{\"_index\":5,\"description\":{\"2\":{},\"33\":{},\"103\":{},\"118\":{},\"125\":{},\"127\":{},\"132\":{},\"135\":{},\"149\":{},\"155\":{},\"168\":{},\"188\":{},\"197\":{},\"216\":{},\"217\":{},\"222\":{},\"226\":{},\"229\":{},\"238\":{},\"283\":{},\"287\":{},\"299\":{},\"301\":{},\"310\":{},\"328\":{},\"334\":{},\"347\":{},\"358\":{},\"361\":{},\"375\":{},\"380\":{},\"386\":{},\"395\":{},\"400\":{},\"435\":{}}}],[\"textual\",{\"_index\":309,\"description\":{\"257\":{}}}],[\"they'v\",{\"_index\":289,\"description\":{\"235\":{}}}],[\"thin\",{\"_index\":339,\"description\":{\"284\":{}}}],[\"think\",{\"_index\":347,\"description\":{\"290\":{}}}],[\"thumb\",{\"_index\":69,\"description\":{\"38\":{}}}],[\"thumbnail\",{\"_index\":96,\"description\":{\"56\":{},\"70\":{},\"85\":{}}}],[\"time\",{\"_index\":79,\"description\":{\"44\":{},\"68\":{},\"243\":{},\"246\":{}}}],[\"titl\",{\"_index\":274,\"description\":{\"228\":{},\"330\":{}}}],[\"toast\",{\"_index\":118,\"description\":{\"70\":{},\"399\":{},\"401\":{},\"403\":{},\"407\":{},\"408\":{},\"436\":{}}}],[\"token\",{\"_index\":228,\"description\":{\"163\":{}}}],[\"tone\",{\"_index\":350,\"description\":{\"291\":{}}}],[\"tool\",{\"_index\":145,\"description\":{\"93\":{},\"117\":{},\"118\":{},\"119\":{},\"120\":{},\"121\":{},\"122\":{},\"123\":{},\"249\":{},\"316\":{},\"412\":{},\"437\":{}}}],[\"tooltip\",{\"_index\":172,\"description\":{\"120\":{},\"385\":{},\"390\":{},\"393\":{},\"438\":{}}}],[\"top\",{\"_index\":222,\"description\":{\"159\":{}}}],[\"touch\",{\"_index\":159,\"description\":{\"108\":{}}}],[\"tour\",{\"_index\":282,\"description\":{\"232\":{},\"233\":{}}}],[\"track\",{\"_index\":91,\"description\":{\"53\":{},\"272\":{}}}],[\"transpar\",{\"_index\":167,\"description\":{\"114\":{}}}],[\"tray\",{\"_index\":329,\"description\":{\"273\":{},\"276\":{},\"345\":{},\"447\":{}}}],[\"tree\",{\"_index\":2,\"description\":{\"1\":{}}}],[\"truncat\",{\"_index\":207,\"description\":{\"143\":{}}}],[\"tutori\",{\"_index\":358,\"description\":{\"303\":{},\"304\":{},\"305\":{},\"306\":{},\"307\":{},\"308\":{}}}],[\"type\",{\"_index\":331,\"description\":{\"278\":{}}}],[\"typographi\",{\"_index\":330,\"description\":{\"277\":{},\"441\":{}}}],[\"ui\",{\"_index\":230,\"description\":{\"166\":{}}}],[\"underlin\",{\"_index\":333,\"description\":{\"280\":{}}}],[\"unifi\",{\"_index\":149,\"description\":{\"96\":{}}}],[\"unit\",{\"_index\":382,\"description\":{\"362\":{}}}],[\"up\",{\"_index\":66,\"description\":{\"35\":{}}}],[\"updat\",{\"_index\":146,\"description\":{\"93\":{},\"98\":{},\"104\":{},\"110\":{}}}],[\"upsel\",{\"_index\":93,\"description\":{\"54\":{}}}],[\"us\",{\"_index\":209,\"description\":{\"151\":{},\"155\":{},\"156\":{},\"158\":{},\"159\":{},\"171\":{},\"190\":{},\"192\":{},\"193\":{},\"209\":{},\"227\":{},\"231\":{},\"233\":{},\"259\":{},\"261\":{},\"262\":{},\"263\":{},\"265\":{},\"266\":{},\"272\":{},\"279\":{},\"280\":{},\"282\":{},\"283\":{},\"286\":{},\"289\":{},\"300\":{},\"313\":{},\"330\":{},\"332\":{},\"333\":{},\"335\":{},\"350\":{},\"377\":{},\"390\":{},\"397\":{}}}],[\"user\",{\"_index\":141,\"description\":{\"91\":{},\"235\":{}}}],[\"valu\",{\"_index\":182,\"description\":{\"128\":{},\"169\":{},\"263\":{},\"311\":{},\"348\":{},\"357\":{},\"362\":{},\"363\":{},\"367\":{}}}],[\"vari\",{\"_index\":251,\"description\":{\"190\":{}}}],[\"variant\",{\"_index\":54,\"description\":{\"28\":{}}}],[\"variat\",{\"_index\":25,\"description\":{\"10\":{},\"58\":{},\"300\":{},\"335\":{}}}],[\"vertic\",{\"_index\":314,\"description\":{\"260\":{}}}],[\"video\",{\"_index\":89,\"description\":{\"52\":{}}}],[\"view\",{\"_index\":3,\"description\":{\"1\":{},\"48\":{},\"51\":{},\"265\":{}}}],[\"voic\",{\"_index\":349,\"description\":{\"291\":{}}}],[\"warmup\",{\"_index\":400,\"description\":{\"389\":{}}}],[\"warn\",{\"_index\":100,\"description\":{\"58\":{}}}],[\"web\",{\"_index\":0,\"description\":{\"0\":{},\"71\":{},\"107\":{}}}],[\"well\",{\"_index\":10,\"description\":{\"3\":{}}}],[\"what'\",{\"_index\":356,\"description\":{\"302\":{}}}],[\"wheel\",{\"_index\":325,\"description\":{\"268\":{},\"418\":{}}}],[\"width\",{\"_index\":180,\"description\":{\"126\":{},\"134\":{},\"147\":{},\"148\":{},\"196\":{},\"201\":{},\"227\":{},\"252\":{},\"284\":{},\"327\":{},\"329\":{}}}],[\"within\",{\"_index\":14,\"description\":{\"5\":{},\"153\":{},\"233\":{}}}],[\"wrap\",{\"_index\":395,\"description\":{\"378\":{}}}],[\"xd\",{\"_index\":59,\"description\":{\"34\":{}}}],[\"zebra\",{\"_index\":315,\"description\":{\"261\":{}}}],[\"zone\",{\"_index\":27,\"description\":{\"11\":{}}}]],\"pipeline\":[\"stemmer\"]}");

/***/ }),

/***/ "./data/search_store.json":
/*!********************************!*\
  !*** ./data/search_store.json ***!
  \********************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360, 361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390, 391, 392, 393, 394, 395, 396, 397, 398, 399, 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425, 426, 427, 428, 429, 430, 431, 432, 433, 434, 435, 436, 437, 438, 439, 440, 441, 442, 443, 444, 445, 446, 447, 448, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":0,\"name\":\"Web Rails\",\"slug\":\"web-rails\",\"description\":\"Web Rails\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":1,\"name\":\"Tree View Navigation\",\"slug\":\"tree-view-navigation\",\"description\":\"Tree View Navigation\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":2,\"name\":\"Text Areas & Multiline Fields\",\"slug\":\"text-areas-multiline-fields\",\"description\":\"Text Areas & Multiline Fields\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":3,\"name\":\"Wells\",\"slug\":\"wells\",\"description\":\"Wells\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":4,\"name\":\"Select Boxes\",\"slug\":\"select-boxes\",\"description\":\"Select Boxes\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":5,\"name\":\"Search Within\",\"slug\":\"search-within\",\"description\":\"Search Within\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":6,\"name\":\"Photo Tag\",\"slug\":\"photo-tag\",\"description\":\"Photo Tag\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":7,\"name\":\"Miller Columns\",\"slug\":\"miller-columns\",\"description\":\"Miller Columns\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":8,\"name\":\"Logic Button\",\"slug\":\"logic-button\",\"description\":\"Logic Button\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":9,\"name\":\"In-Line Alerts\",\"slug\":\"in-line-alerts\",\"description\":\"In-Line Alerts\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":10,\"name\":\"Dropdowns (Icon Button Variation)\",\"slug\":\"dropdowns-icon-button-variation\",\"description\":\"Dropdowns (Icon Button Variation)\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":11,\"name\":\"Drop Zone\",\"slug\":\"drop-zone\",\"description\":\"Drop Zone\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":12,\"name\":\"Draggable List\",\"slug\":\"draggable-list\",\"description\":\"Draggable List\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":13,\"name\":\"Cycle Button\",\"slug\":\"cycle-button\",\"description\":\"Cycle Button\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":14,\"name\":\"Calendar \",\"slug\":\"calendar\",\"description\":\"Calendar \",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":15,\"name\":\"Alert Popovers\",\"slug\":\"alert-popovers\",\"description\":\"Alert Popovers\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":16,\"name\":\"Advanced Sliders\",\"slug\":\"advanced-sliders\",\"description\":\"Advanced Sliders\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":17,\"name\":\"Accordion\",\"slug\":\"accordion\",\"description\":\"Accordion\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":18,\"name\":\"Messaging Taxonomy & Framework\",\"slug\":\"messaging-taxonomy-framework\",\"description\":\"Messaging Taxonomy & Framework\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":19,\"name\":\"Modals\",\"slug\":\"modals\",\"description\":\"Modals\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":20,\"name\":\"Standard Cards\",\"slug\":\"standard-cards\",\"description\":\"Standard Cards\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":21,\"name\":\"Asset Cards\",\"slug\":\"asset-cards\",\"description\":\"Asset Cards\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":22,\"name\":\"Split Button\",\"slug\":\"split-button\",\"description\":\"Split Button\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":23,\"name\":\"Scroll Bars\",\"slug\":\"scroll-bars\",\"description\":\"Scroll Bars\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":24,\"name\":\"Experience Cloud Shell\",\"slug\":\"experience-cloud-shell\",\"description\":\"Experience Cloud Shell\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":25,\"name\":\"K9 Header Bar\",\"slug\":\"k9-header-bar\",\"description\":\"K9 Header Bar\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":26,\"name\":\"Mobile Navigation Bars\",\"slug\":\"mobile-navigation-bars\",\"description\":\"Mobile Navigation Bars\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":27,\"name\":\"Icon-only Tabs\",\"slug\":\"icon-only-tabs\",\"description\":\"Icon-only Tabs\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":28,\"name\":\"Split Button (More Variant)\",\"slug\":\"split-button-more-variant\",\"description\":\"Split Button (More Variant)\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":29,\"name\":\"Action Bar\",\"slug\":\"action-bar\",\"description\":\"Action Bar\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":30,\"name\":\"Search Field\",\"slug\":\"search-field\",\"description\":\"Search Field\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":31,\"name\":\"K9 Panel Anatomy\",\"slug\":\"k9-panel-anatomy\",\"description\":\"K9 Panel Anatomy\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":32,\"name\":\"K9 Panel\",\"slug\":\"k9-panel\",\"description\":\"K9 Panel\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":33,\"name\":\"Search and Text Filters\",\"slug\":\"search-and-text-filters\",\"description\":\"Search and Text Filters\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":34,\"name\":\"XD Cloud organizer and start screen\",\"slug\":\"xd-cloud-organizer-and-start-screen\",\"description\":\"XD Cloud organizer and start screen\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":35,\"name\":\"Left Nav, Header, and 1-up\",\"slug\":\"left-nav-header-and-1-up\",\"description\":\"Left Nav, Header, and 1-up\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":36,\"name\":\"Navigation Boxes\",\"slug\":\"navigation-boxes\",\"description\":\"Navigation Boxes\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":37,\"name\":\"Badges\",\"slug\":\"badges\",\"description\":\"Badges\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":38,\"name\":\"Drag Bars & Thumbs\",\"slug\":\"drag-bars-thumbs\",\"description\":\"Drag Bars & Thumbs\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":39,\"name\":\"Carousel\",\"slug\":\"carousel\",\"description\":\"Carousel\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":40,\"name\":\"Full Screen Dialog & Full Screen Takeover\",\"slug\":\"full-screen-dialog-full-screen-takeover\",\"description\":\"Full Screen Dialog & Full Screen Takeover\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":41,\"name\":\"Breadcrumbs\",\"slug\":\"breadcrumbs\",\"description\":\"Breadcrumbs\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":42,\"name\":\"Commenting\",\"slug\":\"commenting\",\"description\":\"Commenting\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":43,\"name\":\"Notifications\",\"slug\":\"notifications\",\"description\":\"Notifications\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":44,\"name\":\"Mobile Onboarding Experience (First Time Experience Cards) \",\"slug\":\"mobile-onboarding-experience-first-time-experience-cards\",\"description\":\"Mobile Onboarding Experience (First Time Experience Cards) \",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":45,\"name\":\"Map\",\"slug\":\"map\",\"description\":\"Map\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":46,\"name\":\"On-Canvas Controls\",\"slug\":\"on-canvas-controls\",\"description\":\"On-Canvas Controls\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":47,\"name\":\"Error Pages\",\"slug\":\"error-pages\",\"description\":\"Error Pages\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":48,\"name\":\"List View\",\"slug\":\"list-view\",\"description\":\"List View\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":49,\"name\":\"Ghost Loading\",\"slug\":\"ghost-loading\",\"description\":\"Ghost Loading\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":50,\"name\":\"Checklist\",\"slug\":\"checklist\",\"description\":\"Checklist\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":51,\"name\":\"Gallery View\",\"slug\":\"gallery-view\",\"description\":\"Gallery View\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":52,\"name\":\"Video Player\",\"slug\":\"video-player\",\"description\":\"Video Player\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":53,\"name\":\"Tracking card in home screen\",\"slug\":\"tracking-card-in-home-screen\",\"description\":\"Tracking card in home screen\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":54,\"name\":\"Upsell flows and screens\",\"slug\":\"upsell-flows-and-screens\",\"description\":\"Upsell flows and screens\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":55,\"name\":\"HUD Button\",\"slug\":\"hud-button\",\"description\":\"HUD Button\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":56,\"name\":\"Dropdown Thumbnail List\",\"slug\":\"dropdown-thumbnail-list\",\"description\":\"Dropdown Thumbnail List\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":57,\"name\":\"Date & Date Range Picker\",\"slug\":\"date-date-range-picker\",\"description\":\"Date & Date Range Picker\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":58,\"name\":\"Dialog (Warning Variation)\",\"slug\":\"dialog-warning-variation\",\"description\":\"Dialog (Warning Variation)\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":59,\"name\":\"Dial\",\"slug\":\"dial\",\"description\":\"Dial\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":60,\"name\":\"Menu Items\",\"slug\":\"menu-items\",\"description\":\"Menu Items\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":61,\"name\":\"Keyboard Shortcuts\",\"slug\":\"keyboard-shortcuts\",\"description\":\"Keyboard Shortcuts\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":62,\"name\":\"Crop / Rotate Handles and Guides\",\"slug\":\"crop-rotate-handles-and-guides\",\"description\":\"Crop / Rotate Handles and Guides\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":63,\"name\":\"Illustrated Message\",\"slug\":\"illustrated-message\",\"description\":\"Illustrated Message\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":64,\"name\":\"File Management\",\"slug\":\"file-management\",\"description\":\"File Management\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":65,\"name\":\"Pagination Dots\",\"slug\":\"pagination-dots\",\"description\":\"Pagination Dots\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":66,\"name\":\"Carousel-Dexter\",\"slug\":\"carousel-dexter\",\"description\":\"Carousel-Dexter\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":67,\"name\":\"Chat messaging\",\"slug\":\"chat-messaging\",\"description\":\"Chat messaging\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":68,\"name\":\"Time Picker\",\"slug\":\"time-picker\",\"description\":\"Time Picker\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":69,\"name\":\"Color Picker\",\"slug\":\"color-picker\",\"description\":\"Color Picker\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":70,\"name\":\"Toast with Thumbnail\",\"slug\":\"toast-with-thumbnail\",\"description\":\"Toast with Thumbnail\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":71,\"name\":\"Web Footer\",\"slug\":\"web-footer\",\"description\":\"Web Footer\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":72,\"name\":\"Avatars\",\"slug\":\"avatars\",\"description\":\"Avatars\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":73,\"name\":\"Opacity Checkerboard\",\"slug\":\"opacity-checkerboard\",\"description\":\"Opacity Checkerboard\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":74,\"name\":\"Share Sheet\",\"slug\":\"share-sheet\",\"description\":\"Share Sheet\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":75,\"name\":\"Share Mode\",\"slug\":\"share-mode\",\"description\":\"Share Mode\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":76,\"name\":\"Summary Details\",\"slug\":\"summary-details\",\"description\":\"Summary Details\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":77,\"name\":\"Multi-select Combo Box\",\"slug\":\"multi-select-combo-box\",\"description\":\"Multi-select Combo Box\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":78,\"name\":\"Startscreen Illustrations\",\"slug\":\"startscreen-illustrations\",\"description\":\"Startscreen Illustrations\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":79,\"name\":\"Numeric Stepper Field\",\"slug\":\"numeric-stepper-field\",\"description\":\"Numeric Stepper Field\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":80,\"name\":\"Dynamic Search\",\"slug\":\"dynamic-search\",\"description\":\"Dynamic Search\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":81,\"name\":\"Popover Load More\",\"slug\":\"popover-load-more\",\"description\":\"Popover Load More\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":82,\"name\":\"Installer Pointer\",\"slug\":\"installer-pointer\",\"description\":\"Installer Pointer\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":83,\"name\":\"Banner Alerts\",\"slug\":\"banner-alerts\",\"description\":\"Banner Alerts\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":84,\"name\":\"Dropdown with Icons\",\"slug\":\"dropdown-with-icons\",\"description\":\"Dropdown with Icons\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":85,\"name\":\"Thumbnail\",\"slug\":\"thumbnail\",\"description\":\"Thumbnail\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":86,\"name\":\"Artboards\",\"slug\":\"artboards\",\"description\":\"Artboards\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":87,\"name\":\"Drag and Drop\",\"slug\":\"drag-and-drop\",\"description\":\"Drag and Drop\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":88,\"name\":\"Forum Cards\",\"slug\":\"forum-cards\",\"description\":\"Forum Cards\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":89,\"name\":\"Header Pattern\",\"slug\":\"header-pattern\",\"description\":\"Header Pattern\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":90,\"name\":\"Card States\",\"slug\":\"card-states\",\"description\":\"Card States\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":91,\"name\":\"User Presence Colors\",\"slug\":\"user-presence-colors\",\"description\":\"User Presence Colors\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":92,\"name\":\"Connected Action Button Group\",\"slug\":\"connected-action-button-group\",\"description\":\"Connected Action Button Group\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":93,\"name\":\"Tool Update\",\"slug\":\"tool-update\",\"description\":\"Tool Update\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":94,\"name\":\"Floating Panels\",\"slug\":\"floating-panels\",\"description\":\"Floating Panels\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":95,\"name\":\"Steplist\",\"slug\":\"steplist\",\"description\":\"Steplist\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":96,\"name\":\"Unified Sharing - Quick Share and Share Menu\",\"slug\":\"unified-sharing-quick-share-and-share-menu\",\"description\":\"Unified Sharing - Quick Share and Share Menu\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":97,\"name\":\"Minimized Side Navigation\",\"slug\":\"minimized-side-navigation\",\"description\":\"Minimized Side Navigation\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":98,\"name\":\"Blue Tabs Update\",\"slug\":\"blue-tabs-update\",\"description\":\"Blue Tabs Update\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":99,\"name\":\"Pagination List\",\"slug\":\"pagination-list\",\"description\":\"Pagination List\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":100,\"name\":\"Pagination Field\",\"slug\":\"pagination-field\",\"description\":\"Pagination Field\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":101,\"name\":\"Pagination Button\",\"slug\":\"pagination-button\",\"description\":\"Pagination Button\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":102,\"name\":\"Fluid Height Tabs\",\"slug\":\"fluid-height-tabs\",\"description\":\"Fluid Height Tabs\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":103,\"name\":\"Text With Definition\",\"slug\":\"text-with-definition\",\"description\":\"Text With Definition\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":104,\"name\":\"Tag Updates\",\"slug\":\"tag-updates\",\"description\":\"Tag Updates\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":105,\"name\":\"Tag Fields\",\"slug\":\"tag-fields\",\"description\":\"Tag Fields\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":106,\"name\":\"Button Sizes\",\"slug\":\"button-sizes\",\"description\":\"Button Sizes\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":107,\"name\":\"Footer (web products)\",\"slug\":\"footer-web-products\",\"description\":\"Footer (web products)\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":108,\"name\":\"Touch indicator\",\"slug\":\"touch-indicator\",\"description\":\"Touch indicator\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":109,\"name\":\"checkbox affects button status\",\"slug\":\"checkbox-affects-button-status\",\"description\":\"checkbox affects button status\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":110,\"name\":\"Quick actions update\",\"slug\":\"quick-actions-update\",\"description\":\"Quick actions update\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":111,\"name\":\"Fonts\",\"slug\":\"fonts\",\"description\":\"Fonts \",\"pageType\":\"Resources\",\"query\":\"\",\"type\":\"page\"},{\"id\":112,\"name\":\"Color\",\"slug\":\"color\",\"description\":\"Color \",\"pageType\":\"Foundation\",\"query\":\"\",\"type\":\"page\"},{\"id\":113,\"name\":\"Color\",\"slug\":\"color\",\"description\":\"Don't create your own colors \",\"display_description\":\"Don't create your own colors\",\"pageType\":\"Foundation\",\"query\":\"Don't create your own colors\",\"type\":\"usageGuideline\"},{\"id\":114,\"name\":\"Color\",\"slug\":\"color\",\"description\":\"Transparency \",\"display_description\":\"Transparency\",\"pageType\":\"Foundation\",\"query\":\"Transparency\",\"type\":\"usageGuideline\"},{\"id\":115,\"name\":\"Color\",\"slug\":\"color\",\"description\":\"Communicating with color \",\"display_description\":\"Communicating with color\",\"pageType\":\"Foundation\",\"query\":\"Communicating with color\",\"type\":\"usageGuideline\"},{\"id\":116,\"name\":\"Office hours\",\"slug\":\"office-hours\",\"description\":\"Office hours \",\"pageType\":\"Guidelines\",\"query\":\"\",\"type\":\"page\"},{\"id\":117,\"name\":\"Action button\",\"slug\":\"action-button\",\"description\":\"Action button tool\",\"pageType\":\"Component\",\"query\":\"\",\"type\":\"page\"},{\"id\":118,\"name\":\"Action button\",\"slug\":\"action-button\",\"description\":\"Text overflow tool\",\"display_description\":\"Text overflow\",\"pageType\":\"Component\",\"query\":\"Text overflow\",\"type\":\"Behavior\"},{\"id\":119,\"name\":\"Action button\",\"slug\":\"action-button\",\"description\":\"Action button group overflow tool\",\"display_description\":\"Action button group overflow\",\"pageType\":\"Component\",\"query\":\"Action button group overflow\",\"type\":\"Behavior\"},{\"id\":120,\"name\":\"Action button\",\"slug\":\"action-button\",\"description\":\"Tooltips tool\",\"display_description\":\"Tooltips\",\"pageType\":\"Component\",\"query\":\"Tooltips\",\"type\":\"usageGuideline\"},{\"id\":121,\"name\":\"Action button\",\"slug\":\"action-button\",\"description\":\"Isolated action buttons tool\",\"display_description\":\"Isolated action buttons\",\"pageType\":\"Component\",\"query\":\"Isolated action buttons\",\"type\":\"usageGuideline\"},{\"id\":122,\"name\":\"Action button\",\"slug\":\"action-button\",\"description\":\"Only group related actions with a hold icon tool\",\"display_description\":\"Only group related actions with a hold icon\",\"pageType\":\"Component\",\"query\":\"Only group related actions with a hold icon\",\"type\":\"usageGuideline\"},{\"id\":123,\"name\":\"Action button\",\"slug\":\"action-button\",\"description\":\"Respect hold icon placement tool\",\"display_description\":\"Respect hold icon placement\",\"pageType\":\"Component\",\"query\":\"Respect hold icon placement\",\"type\":\"usageGuideline\"},{\"id\":124,\"name\":\"Get started\",\"slug\":\"get-started\",\"description\":\"Get started \",\"pageType\":\"Guidelines\",\"query\":\"\",\"type\":\"page\"},{\"id\":125,\"name\":\"Text field\",\"slug\":\"text-field\",\"description\":\"Text field input field\",\"pageType\":\"Component\",\"query\":\"\",\"type\":\"page\"},{\"id\":126,\"name\":\"Text field\",\"slug\":\"text-field\",\"description\":\"Minimum width input field\",\"display_description\":\"Minimum width\",\"pageType\":\"Component\",\"query\":\"Minimum width\",\"type\":\"Behavior\"},{\"id\":127,\"name\":\"Text field\",\"slug\":\"text-field\",\"description\":\"Text overflow input field\",\"display_description\":\"Text overflow\",\"pageType\":\"Component\",\"query\":\"Text overflow\",\"type\":\"Behavior\"},{\"id\":128,\"name\":\"Text field\",\"slug\":\"text-field\",\"description\":\"Mixed value input field\",\"display_description\":\"Mixed value\",\"pageType\":\"Component\",\"query\":\"Mixed value\",\"type\":\"Behavior\"},{\"id\":129,\"name\":\"Text field\",\"slug\":\"text-field\",\"description\":\"Include a label input field\",\"display_description\":\"Include a label\",\"pageType\":\"Component\",\"query\":\"Include a label\",\"type\":\"usageGuideline\"},{\"id\":130,\"name\":\"Text field\",\"slug\":\"text-field\",\"description\":\"Review label-less designs with Inclusive Design team input field\",\"display_description\":\"Review label-less designs with Inclusive Design team\",\"pageType\":\"Component\",\"query\":\"Review label-less designs with Inclusive Design team\",\"type\":\"usageGuideline\"},{\"id\":131,\"name\":\"Text field\",\"slug\":\"text-field\",\"description\":\"Follow capitalization rules input field\",\"display_description\":\"Follow capitalization rules\",\"pageType\":\"Component\",\"query\":\"Follow capitalization rules\",\"type\":\"usageGuideline\"},{\"id\":132,\"name\":\"Text field\",\"slug\":\"text-field\",\"description\":\"Mark the minority of text fields in a form as optional or required input field\",\"display_description\":\"Mark the minority of text fields in a form as optional or required\",\"pageType\":\"Component\",\"query\":\"Mark the minority of text fields in a form as optional or required\",\"type\":\"usageGuideline\"},{\"id\":133,\"name\":\"Combo box\",\"slug\":\"combo-box\",\"description\":\"Combo box \",\"pageType\":\"Component\",\"query\":\"\",\"type\":\"page\"},{\"id\":134,\"name\":\"Combo box\",\"slug\":\"combo-box\",\"description\":\"Minimum width \",\"display_description\":\"Minimum width\",\"pageType\":\"Component\",\"query\":\"Minimum width\",\"type\":\"Behavior\"},{\"id\":135,\"name\":\"Combo box\",\"slug\":\"combo-box\",\"description\":\"Text overflow \",\"display_description\":\"Text overflow\",\"pageType\":\"Component\",\"query\":\"Text overflow\",\"type\":\"Behavior\"},{\"id\":136,\"name\":\"Combo box\",\"slug\":\"combo-box\",\"description\":\"Combo box, dropdown, or radio buttons? \",\"display_description\":\"Combo box, dropdown, or radio buttons?\",\"pageType\":\"Component\",\"query\":\"Combo box, dropdown, or radio buttons?\",\"type\":\"usageGuideline\"},{\"id\":137,\"name\":\"Combo box\",\"slug\":\"combo-box\",\"description\":\"Suppressing the popover \",\"display_description\":\"Suppressing the popover\",\"pageType\":\"Component\",\"query\":\"Suppressing the popover\",\"type\":\"usageGuideline\"},{\"id\":138,\"name\":\"Combo box\",\"slug\":\"combo-box\",\"description\":\"Immediate popover launch \",\"display_description\":\"Immediate popover launch\",\"pageType\":\"Component\",\"query\":\"Immediate popover launch\",\"type\":\"usageGuideline\"},{\"id\":139,\"name\":\"Combo box\",\"slug\":\"combo-box\",\"description\":\"Delayed popover launch \",\"display_description\":\"Delayed popover launch\",\"pageType\":\"Component\",\"query\":\"Delayed popover launch\",\"type\":\"usageGuideline\"},{\"id\":140,\"name\":\"Combo box\",\"slug\":\"combo-box\",\"description\":\"Saving suggestions \",\"display_description\":\"Saving suggestions\",\"pageType\":\"Component\",\"query\":\"Saving suggestions\",\"type\":\"usageGuideline\"},{\"id\":141,\"name\":\"Combo box\",\"slug\":\"combo-box\",\"description\":\"Include a label \",\"display_description\":\"Include a label\",\"pageType\":\"Component\",\"query\":\"Include a label\",\"type\":\"usageGuideline\"},{\"id\":142,\"name\":\"Combo box\",\"slug\":\"combo-box\",\"description\":\"Keep menu items concise \",\"display_description\":\"Keep menu items concise\",\"pageType\":\"Component\",\"query\":\"Keep menu items concise\",\"type\":\"usageGuideline\"},{\"id\":143,\"name\":\"Combo box\",\"slug\":\"combo-box\",\"description\":\"Truncation \",\"display_description\":\"Truncation\",\"pageType\":\"Component\",\"query\":\"Truncation\",\"type\":\"usageGuideline\"},{\"id\":144,\"name\":\"Combo box\",\"slug\":\"combo-box\",\"description\":\"Follow capitalization rules \",\"display_description\":\"Follow capitalization rules\",\"pageType\":\"Component\",\"query\":\"Follow capitalization rules\",\"type\":\"usageGuideline\"},{\"id\":145,\"name\":\"Combo box\",\"slug\":\"combo-box\",\"description\":\"Mark the minority of combo boxes in a form as optional or required \",\"display_description\":\"Mark the minority of combo boxes in a form as optional or required\",\"pageType\":\"Component\",\"query\":\"Mark the minority of combo boxes in a form as optional or required\",\"type\":\"usageGuideline\"},{\"id\":146,\"name\":\"Button\",\"slug\":\"button\",\"description\":\"Button \",\"pageType\":\"Component\",\"query\":\"\",\"type\":\"page\"},{\"id\":147,\"name\":\"Button\",\"slug\":\"button\",\"description\":\"Flexible width \",\"display_description\":\"Flexible width\",\"pageType\":\"Component\",\"query\":\"Flexible width\",\"type\":\"Behavior\"},{\"id\":148,\"name\":\"Button\",\"slug\":\"button\",\"description\":\"Minimum width \",\"display_description\":\"Minimum width\",\"pageType\":\"Component\",\"query\":\"Minimum width\",\"type\":\"Behavior\"},{\"id\":149,\"name\":\"Button\",\"slug\":\"button\",\"description\":\"Text overflow \",\"display_description\":\"Text overflow\",\"pageType\":\"Component\",\"query\":\"Text overflow\",\"type\":\"Behavior\"},{\"id\":150,\"name\":\"Button\",\"slug\":\"button\",\"description\":\"Button group overflow \",\"display_description\":\"Button group overflow\",\"pageType\":\"Component\",\"query\":\"Button group overflow\",\"type\":\"Behavior\"},{\"id\":151,\"name\":\"Button\",\"slug\":\"button\",\"description\":\"Use 2 button styles maximum \",\"display_description\":\"Use 2 button styles maximum\",\"pageType\":\"Component\",\"query\":\"Use 2 button styles maximum\",\"type\":\"usageGuideline\"},{\"id\":152,\"name\":\"Button\",\"slug\":\"button\",\"description\":\"Align button groups based on content \",\"display_description\":\"Align button groups based on content\",\"pageType\":\"Component\",\"query\":\"Align button groups based on content\",\"type\":\"usageGuideline\"},{\"id\":153,\"name\":\"Button\",\"slug\":\"button\",\"description\":\"Respect button order within a group \",\"display_description\":\"Respect button order within a group\",\"pageType\":\"Component\",\"query\":\"Respect button order within a group\",\"type\":\"usageGuideline\"},{\"id\":154,\"name\":\"Button\",\"slug\":\"button\",\"description\":\"Be concise \",\"display_description\":\"Be concise\",\"pageType\":\"Component\",\"query\":\"Be concise\",\"type\":\"usageGuideline\"},{\"id\":155,\"name\":\"Button\",\"slug\":\"button\",\"description\":\"Use clear text \",\"display_description\":\"Use clear text\",\"pageType\":\"Component\",\"query\":\"Use clear text\",\"type\":\"usageGuideline\"},{\"id\":156,\"name\":\"Button\",\"slug\":\"button\",\"description\":\"Use sentence case \",\"display_description\":\"Use sentence case\",\"pageType\":\"Component\",\"query\":\"Use sentence case\",\"type\":\"usageGuideline\"},{\"id\":157,\"name\":\"Button\",\"slug\":\"button\",\"description\":\"Don't override color \",\"display_description\":\"Don't override color\",\"pageType\":\"Component\",\"query\":\"Don't override color\",\"type\":\"usageGuideline\"},{\"id\":158,\"name\":\"Button\",\"slug\":\"button\",\"description\":\"Use icons only when necessary \",\"display_description\":\"Use icons only when necessary\",\"pageType\":\"Component\",\"query\":\"Use icons only when necessary\",\"type\":\"usageGuideline\"},{\"id\":159,\"name\":\"Button\",\"slug\":\"button\",\"description\":\"Use icons for top-level action(s) only \",\"display_description\":\"Use icons for top-level action(s) only\",\"pageType\":\"Component\",\"query\":\"Use icons for top-level action(s) only\",\"type\":\"usageGuideline\"},{\"id\":160,\"name\":\"Button\",\"slug\":\"button\",\"description\":\"Display a popover when featuring subsequent options \",\"display_description\":\"Display a popover when featuring subsequent options\",\"pageType\":\"Component\",\"query\":\"Display a popover when featuring subsequent options\",\"type\":\"usageGuideline\"},{\"id\":161,\"name\":\"Bar panel\",\"slug\":\"bar-panel\",\"description\":\"Bar panel \",\"pageType\":\"Guidelines\",\"query\":\"\",\"type\":\"page\"},{\"id\":162,\"name\":\"Dialogs\",\"slug\":\"dialogs\",\"description\":\"Dialogs \",\"pageType\":\"Guidelines\",\"query\":\"\",\"type\":\"page\"},{\"id\":163,\"name\":\"Design Tokens\",\"slug\":\"design-tokens\",\"description\":\"Design Tokens \",\"pageType\":\"Guidelines\",\"query\":\"\",\"type\":\"page\"},{\"id\":164,\"name\":\"Breadcrumbs\",\"slug\":\"breadcrumbs\",\"description\":\"Breadcrumbs \",\"pageType\":\"Guidelines\",\"query\":\"\",\"type\":\"page\"},{\"id\":165,\"name\":\"Status table\",\"slug\":\"status-table\",\"description\":\"Status table \",\"pageType\":\"Guidelines\",\"query\":\"\",\"type\":\"page\"},{\"id\":166,\"name\":\"UI kits\",\"slug\":\"ui-kits\",\"description\":\"UI kits \",\"pageType\":\"Resources\",\"query\":\"\",\"type\":\"page\"},{\"id\":167,\"name\":\"Switch\",\"slug\":\"switch\",\"description\":\"Switch \",\"pageType\":\"Component\",\"query\":\"\",\"type\":\"page\"},{\"id\":168,\"name\":\"Switch\",\"slug\":\"switch\",\"description\":\"Text overflow \",\"display_description\":\"Text overflow\",\"pageType\":\"Component\",\"query\":\"Text overflow\",\"type\":\"Behavior\"},{\"id\":169,\"name\":\"Switch\",\"slug\":\"switch\",\"description\":\"Mixed value \",\"display_description\":\"Mixed value\",\"pageType\":\"Component\",\"query\":\"Mixed value\",\"type\":\"Behavior\"},{\"id\":170,\"name\":\"Switch\",\"slug\":\"switch\",\"description\":\"Emphasized or not? \",\"display_description\":\"Emphasized or not?\",\"pageType\":\"Component\",\"query\":\"Emphasized or not?\",\"type\":\"usageGuideline\"},{\"id\":171,\"name\":\"Switch\",\"slug\":\"switch\",\"description\":\"When to use a standalone switch? \",\"display_description\":\"When to use a standalone switch?\",\"pageType\":\"Component\",\"query\":\"When to use a standalone switch?\",\"type\":\"usageGuideline\"},{\"id\":172,\"name\":\"Switch\",\"slug\":\"switch\",\"description\":\"Switch or checkbox? \",\"display_description\":\"Switch or checkbox?\",\"pageType\":\"Component\",\"query\":\"Switch or checkbox?\",\"type\":\"usageGuideline\"},{\"id\":173,\"name\":\"Switch\",\"slug\":\"switch\",\"description\":\"No partial state \",\"display_description\":\"No partial state\",\"pageType\":\"Component\",\"query\":\"No partial state\",\"type\":\"usageGuideline\"},{\"id\":174,\"name\":\"Application frame\",\"slug\":\"application-frame\",\"description\":\"Application frame \",\"pageType\":\"Foundation\",\"query\":\"\",\"type\":\"page\"},{\"id\":175,\"name\":\"Principles\",\"slug\":\"principles\",\"description\":\"Principles \",\"pageType\":\"Guidelines\",\"query\":\"\",\"type\":\"page\"},{\"id\":176,\"name\":\"Platform scale\",\"slug\":\"platform-scale\",\"description\":\"Platform scale \",\"pageType\":\"Foundation\",\"query\":\"\",\"type\":\"page\"},{\"id\":177,\"name\":\"Design API\",\"slug\":\"design-api\",\"description\":\"Design API \",\"pageType\":\"Search Exclude\",\"query\":\"\",\"type\":\"page\"},{\"id\":178,\"name\":\"Responsive grid\",\"slug\":\"responsive-grid\",\"description\":\"Responsive grid \",\"pageType\":\"Foundation\",\"query\":\"\",\"type\":\"page\"},{\"id\":179,\"name\":\"Responsive grid\",\"slug\":\"responsive-grid\",\"description\":\"Don't align every component to the responsive grid \",\"display_description\":\"Don't align every component to the responsive grid\",\"pageType\":\"Foundation\",\"query\":\"Don't align every component to the responsive grid\",\"type\":\"usageGuideline\"},{\"id\":180,\"name\":\"Responsive grid\",\"slug\":\"responsive-grid\",\"description\":\"Mind the gaps \",\"display_description\":\"Mind the gaps\",\"pageType\":\"Foundation\",\"query\":\"Mind the gaps\",\"type\":\"usageGuideline\"},{\"id\":181,\"name\":\"Responsive grid\",\"slug\":\"responsive-grid\",\"description\":\"Panels and rails \",\"display_description\":\"Panels and rails\",\"pageType\":\"Foundation\",\"query\":\"Panels and rails\",\"type\":\"usageGuideline\"},{\"id\":182,\"name\":\"Responsive grid\",\"slug\":\"responsive-grid\",\"description\":\"Don't modify the templates \",\"display_description\":\"Don't modify the templates\",\"pageType\":\"Foundation\",\"query\":\"Don't modify the templates\",\"type\":\"usageGuideline\"},{\"id\":183,\"name\":\"Full panel\",\"slug\":\"full-panel\",\"description\":\"Full panel \",\"pageType\":\"Guidelines\",\"query\":\"\",\"type\":\"page\"},{\"id\":184,\"name\":\"Floating panel\",\"slug\":\"floating-panel\",\"description\":\"Floating panel \",\"pageType\":\"Guidelines\",\"query\":\"\",\"type\":\"page\"},{\"id\":185,\"name\":\"Tabs\",\"slug\":\"tabs\",\"description\":\"Tabs \",\"pageType\":\"Component\",\"query\":\"\",\"type\":\"page\"},{\"id\":186,\"name\":\"Tabs\",\"slug\":\"tabs\",\"description\":\"Animation \",\"display_description\":\"Animation\",\"pageType\":\"Component\",\"query\":\"Animation\",\"type\":\"Behavior\"},{\"id\":187,\"name\":\"Tabs\",\"slug\":\"tabs\",\"description\":\"Tab overflow \",\"display_description\":\"Tab overflow\",\"pageType\":\"Component\",\"query\":\"Tab overflow\",\"type\":\"Behavior\"},{\"id\":188,\"name\":\"Tabs\",\"slug\":\"tabs\",\"description\":\"Text overflow \",\"display_description\":\"Text overflow\",\"pageType\":\"Component\",\"query\":\"Text overflow\",\"type\":\"Behavior\"},{\"id\":189,\"name\":\"Tabs\",\"slug\":\"tabs\",\"description\":\"Too many tabs \",\"display_description\":\"Too many tabs\",\"pageType\":\"Component\",\"query\":\"Too many tabs\",\"type\":\"usageGuideline\"},{\"id\":190,\"name\":\"Tabs\",\"slug\":\"tabs\",\"description\":\"Don't use tabs for varying levels of importance \",\"display_description\":\"Don't use tabs for varying levels of importance\",\"pageType\":\"Component\",\"query\":\"Don't use tabs for varying levels of importance\",\"type\":\"usageGuideline\"},{\"id\":191,\"name\":\"Tabs\",\"slug\":\"tabs\",\"description\":\"Nested tabs \",\"display_description\":\"Nested tabs\",\"pageType\":\"Component\",\"query\":\"Nested tabs\",\"type\":\"usageGuideline\"},{\"id\":192,\"name\":\"Tabs\",\"slug\":\"tabs\",\"description\":\"Use icons consistently \",\"display_description\":\"Use icons consistently\",\"pageType\":\"Component\",\"query\":\"Use icons consistently\",\"type\":\"usageGuideline\"},{\"id\":193,\"name\":\"Tabs\",\"slug\":\"tabs\",\"description\":\"Don't only use icons \",\"display_description\":\"Don't only use icons\",\"pageType\":\"Component\",\"query\":\"Don't only use icons\",\"type\":\"usageGuideline\"},{\"id\":194,\"name\":\"Tabs\",\"slug\":\"tabs\",\"description\":\"On-page navigation \",\"display_description\":\"On-page navigation\",\"pageType\":\"Component\",\"query\":\"On-page navigation\",\"type\":\"usageGuideline\"},{\"id\":195,\"name\":\"Dropdown\",\"slug\":\"dropdown\",\"description\":\"Dropdown select picker\",\"pageType\":\"Component\",\"query\":\"\",\"type\":\"page\"},{\"id\":196,\"name\":\"Dropdown\",\"slug\":\"dropdown\",\"description\":\"Minimum width select picker\",\"display_description\":\"Minimum width\",\"pageType\":\"Component\",\"query\":\"Minimum width\",\"type\":\"Behavior\"},{\"id\":197,\"name\":\"Dropdown\",\"slug\":\"dropdown\",\"description\":\"Text overflow select picker\",\"display_description\":\"Text overflow\",\"pageType\":\"Component\",\"query\":\"Text overflow\",\"type\":\"Behavior\"},{\"id\":198,\"name\":\"Dropdown\",\"slug\":\"dropdown\",\"description\":\"Include a label select picker\",\"display_description\":\"Include a label\",\"pageType\":\"Component\",\"query\":\"Include a label\",\"type\":\"usageGuideline\"},{\"id\":199,\"name\":\"Dropdown\",\"slug\":\"dropdown\",\"description\":\"Review label-less designs with Inclusive Design team select picker\",\"display_description\":\"Review label-less designs with Inclusive Design team\",\"pageType\":\"Component\",\"query\":\"Review label-less designs with Inclusive Design team\",\"type\":\"usageGuideline\"},{\"id\":200,\"name\":\"Dropdown\",\"slug\":\"dropdown\",\"description\":\"Keep menu items concise select picker\",\"display_description\":\"Keep menu items concise\",\"pageType\":\"Component\",\"query\":\"Keep menu items concise\",\"type\":\"usageGuideline\"},{\"id\":201,\"name\":\"Dropdown\",\"slug\":\"dropdown\",\"description\":\"Choose an appropriate width select picker\",\"display_description\":\"Choose an appropriate width\",\"pageType\":\"Component\",\"query\":\"Choose an appropriate width\",\"type\":\"usageGuideline\"},{\"id\":202,\"name\":\"Dropdown\",\"slug\":\"dropdown\",\"description\":\"Follow capitalization rules select picker\",\"display_description\":\"Follow capitalization rules\",\"pageType\":\"Component\",\"query\":\"Follow capitalization rules\",\"type\":\"usageGuideline\"},{\"id\":203,\"name\":\"Dropdown\",\"slug\":\"dropdown\",\"description\":\"Mark the minority of dropdowns in a form as optional or required select picker\",\"display_description\":\"Mark the minority of dropdowns in a form as optional or required\",\"pageType\":\"Component\",\"query\":\"Mark the minority of dropdowns in a form as optional or required\",\"type\":\"usageGuideline\"},{\"id\":204,\"name\":\"Scorecards\",\"slug\":\"scorecards\",\"description\":\"Scorecards \",\"pageType\":\"Guidelines\",\"query\":\"\",\"type\":\"page\"},{\"id\":205,\"name\":\"Informational illustrations\",\"slug\":\"informational-illustrations\",\"description\":\"Informational illustrations \",\"pageType\":\"Foundation\",\"query\":\"\",\"type\":\"page\"},{\"id\":206,\"name\":\"Informational illustrations\",\"slug\":\"informational-illustrations\",\"description\":\"Don't create your own illustration \",\"display_description\":\"Don't create your own illustration\",\"pageType\":\"Foundation\",\"query\":\"Don't create your own illustration\",\"type\":\"usageGuideline\"},{\"id\":207,\"name\":\"Informational illustrations\",\"slug\":\"informational-illustrations\",\"description\":\"Don’t scale \",\"display_description\":\"Don’t scale\",\"pageType\":\"Foundation\",\"query\":\"Don’t scale\",\"type\":\"usageGuideline\"},{\"id\":208,\"name\":\"Iconography\",\"slug\":\"iconography\",\"description\":\"Iconography \",\"pageType\":\"Foundation\",\"query\":\"\",\"type\":\"page\"},{\"id\":209,\"name\":\"Iconography\",\"slug\":\"iconography\",\"description\":\"Use approved icons only \",\"display_description\":\"Use approved icons only\",\"pageType\":\"Foundation\",\"query\":\"Use approved icons only\",\"type\":\"usageGuideline\"},{\"id\":210,\"name\":\"Iconography\",\"slug\":\"iconography\",\"description\":\"Respect an icon's fill \",\"display_description\":\"Respect an icon's fill\",\"pageType\":\"Foundation\",\"query\":\"Respect an icon's fill\",\"type\":\"usageGuideline\"},{\"id\":211,\"name\":\"Iconography\",\"slug\":\"iconography\",\"description\":\"Don't scale icons \",\"display_description\":\"Don't scale icons\",\"pageType\":\"Foundation\",\"query\":\"Don't scale icons\",\"type\":\"usageGuideline\"},{\"id\":212,\"name\":\"Inclusive design\",\"slug\":\"inclusive-design\",\"description\":\"Inclusive design \",\"pageType\":\"Foundation\",\"query\":\"\",\"type\":\"page\"},{\"id\":213,\"name\":\"Inclusive design\",\"slug\":\"inclusive-design\",\"description\":\"Structure \",\"display_description\":\"Structure\",\"pageType\":\"Foundation\",\"query\":\"Structure\",\"type\":\"usageGuideline\"},{\"id\":214,\"name\":\"Inclusive design\",\"slug\":\"inclusive-design\",\"description\":\"Color \",\"display_description\":\"Color\",\"pageType\":\"Foundation\",\"query\":\"Color\",\"type\":\"usageGuideline\"},{\"id\":215,\"name\":\"Inclusive design\",\"slug\":\"inclusive-design\",\"description\":\"Animation \",\"display_description\":\"Animation\",\"pageType\":\"Foundation\",\"query\":\"Animation\",\"type\":\"usageGuideline\"},{\"id\":216,\"name\":\"Inclusive design\",\"slug\":\"inclusive-design\",\"description\":\"Text alternatives \",\"display_description\":\"Text alternatives\",\"pageType\":\"Foundation\",\"query\":\"Text alternatives\",\"type\":\"usageGuideline\"},{\"id\":217,\"name\":\"Inclusive design\",\"slug\":\"inclusive-design\",\"description\":\"Fonts and text \",\"display_description\":\"Fonts and text\",\"pageType\":\"Foundation\",\"query\":\"Fonts and text\",\"type\":\"usageGuideline\"},{\"id\":218,\"name\":\"Inclusive design\",\"slug\":\"inclusive-design\",\"description\":\"Error prevention and correction \",\"display_description\":\"Error prevention and correction\",\"pageType\":\"Foundation\",\"query\":\"Error prevention and correction\",\"type\":\"usageGuideline\"},{\"id\":219,\"name\":\"Inclusive design\",\"slug\":\"inclusive-design\",\"description\":\"Keyboard equivalents \",\"display_description\":\"Keyboard equivalents\",\"pageType\":\"Foundation\",\"query\":\"Keyboard equivalents\",\"type\":\"usageGuideline\"},{\"id\":220,\"name\":\"How We Can Help\",\"slug\":\"how-we-can-help\",\"description\":\"How We Can Help \",\"pageType\":\"Guidelines\",\"query\":\"\",\"type\":\"page\"},{\"id\":221,\"name\":\"Meter\",\"slug\":\"meter\",\"description\":\"Meter progress\",\"pageType\":\"Component\",\"query\":\"\",\"type\":\"page\"},{\"id\":222,\"name\":\"Meter\",\"slug\":\"meter\",\"description\":\"Text overflow progress\",\"display_description\":\"Text overflow\",\"pageType\":\"Component\",\"query\":\"Text overflow\",\"type\":\"Behavior\"},{\"id\":223,\"name\":\"Meter\",\"slug\":\"meter\",\"description\":\"Loader or meter? progress\",\"display_description\":\"Loader or meter?\",\"pageType\":\"Component\",\"query\":\"Loader or meter?\",\"type\":\"usageGuideline\"},{\"id\":224,\"name\":\"Meter\",\"slug\":\"meter\",\"description\":\"Labels progress\",\"display_description\":\"Labels\",\"pageType\":\"Component\",\"query\":\"Labels\",\"type\":\"usageGuideline\"},{\"id\":225,\"name\":\"Coach mark\",\"slug\":\"coach-mark\",\"description\":\"Coach mark \",\"pageType\":\"Component\",\"query\":\"\",\"type\":\"page\"},{\"id\":226,\"name\":\"Coach mark\",\"slug\":\"coach-mark\",\"description\":\"Text overflow \",\"display_description\":\"Text overflow\",\"pageType\":\"Component\",\"query\":\"Text overflow\",\"type\":\"Behavior\"},{\"id\":227,\"name\":\"Coach mark\",\"slug\":\"coach-mark\",\"description\":\"Use a consistent width \",\"display_description\":\"Use a consistent width\",\"pageType\":\"Component\",\"query\":\"Use a consistent width\",\"type\":\"usageGuideline\"},{\"id\":228,\"name\":\"Coach mark\",\"slug\":\"coach-mark\",\"description\":\"Keep titles concise \",\"display_description\":\"Keep titles concise\",\"pageType\":\"Component\",\"query\":\"Keep titles concise\",\"type\":\"usageGuideline\"},{\"id\":229,\"name\":\"Coach mark\",\"slug\":\"coach-mark\",\"description\":\"Keep body text succinct and informative \",\"display_description\":\"Keep body text succinct and informative\",\"pageType\":\"Component\",\"query\":\"Keep body text succinct and informative\",\"type\":\"usageGuideline\"},{\"id\":230,\"name\":\"Coach mark\",\"slug\":\"coach-mark\",\"description\":\"Align coach marks with the action being explained \",\"display_description\":\"Align coach marks with the action being explained\",\"pageType\":\"Component\",\"query\":\"Align coach marks with the action being explained\",\"type\":\"usageGuideline\"},{\"id\":231,\"name\":\"Coach mark\",\"slug\":\"coach-mark\",\"description\":\"Use an indicator to show the source \",\"display_description\":\"Use an indicator to show the source\",\"pageType\":\"Component\",\"query\":\"Use an indicator to show the source\",\"type\":\"usageGuideline\"},{\"id\":232,\"name\":\"Coach mark\",\"slug\":\"coach-mark\",\"description\":\"Skip tour \",\"display_description\":\"Skip tour\",\"pageType\":\"Component\",\"query\":\"Skip tour\",\"type\":\"usageGuideline\"},{\"id\":233,\"name\":\"Coach mark\",\"slug\":\"coach-mark\",\"description\":\"Don't use inconsistent action names within a tour \",\"display_description\":\"Don't use inconsistent action names within a tour\",\"pageType\":\"Component\",\"query\":\"Don't use inconsistent action names within a tour\",\"type\":\"usageGuideline\"},{\"id\":234,\"name\":\"Coach mark\",\"slug\":\"coach-mark\",\"description\":\"Allow dismissal when a coach mark is depending on an action \",\"display_description\":\"Allow dismissal when a coach mark is depending on an action\",\"pageType\":\"Component\",\"query\":\"Allow dismissal when a coach mark is depending on an action\",\"type\":\"usageGuideline\"},{\"id\":235,\"name\":\"Coach mark\",\"slug\":\"coach-mark\",\"description\":\"Don't require users to confirm that they've taken an action \",\"display_description\":\"Don't require users to confirm that they've taken an action\",\"pageType\":\"Component\",\"query\":\"Don't require users to confirm that they've taken an action\",\"type\":\"usageGuideline\"},{\"id\":236,\"name\":\"Object styles\",\"slug\":\"object-styles\",\"description\":\"Object styles \",\"pageType\":\"Foundation\",\"query\":\"\",\"type\":\"page\"},{\"id\":237,\"name\":\"Bar loader\",\"slug\":\"bar-loader\",\"description\":\"Bar loader progress\",\"pageType\":\"Component\",\"query\":\"\",\"type\":\"page\"},{\"id\":238,\"name\":\"Bar loader\",\"slug\":\"bar-loader\",\"description\":\"Text overflow progress\",\"display_description\":\"Text overflow\",\"pageType\":\"Component\",\"query\":\"Text overflow\",\"type\":\"Behavior\"},{\"id\":239,\"name\":\"Bar loader\",\"slug\":\"bar-loader\",\"description\":\"Bar loader or circle loader? progress\",\"display_description\":\"Bar loader or circle loader?\",\"pageType\":\"Component\",\"query\":\"Bar loader or circle loader?\",\"type\":\"usageGuideline\"},{\"id\":240,\"name\":\"Bar loader\",\"slug\":\"bar-loader\",\"description\":\"Labels progress\",\"display_description\":\"Labels\",\"pageType\":\"Component\",\"query\":\"Labels\",\"type\":\"usageGuideline\"},{\"id\":241,\"name\":\"Bi-directionality\",\"slug\":\"bi-directionality\",\"description\":\"Bi-directionality \",\"pageType\":\"Foundation\",\"query\":\"\",\"type\":\"page\"},{\"id\":242,\"name\":\"Bi-directionality\",\"slug\":\"bi-directionality\",\"description\":\"Mirror individual components \",\"display_description\":\"Mirror individual components\",\"pageType\":\"Foundation\",\"query\":\"Mirror individual components\",\"type\":\"usageGuideline\"},{\"id\":243,\"name\":\"Bi-directionality\",\"slug\":\"bi-directionality\",\"description\":\"Don't mirror components that represent time \",\"display_description\":\"Don't mirror components that represent time\",\"pageType\":\"Foundation\",\"query\":\"Don't mirror components that represent time\",\"type\":\"usageGuideline\"},{\"id\":244,\"name\":\"Bi-directionality\",\"slug\":\"bi-directionality\",\"description\":\"Mirror composite images with directional flow \",\"display_description\":\"Mirror composite images with directional flow\",\"pageType\":\"Foundation\",\"query\":\"Mirror composite images with directional flow\",\"type\":\"usageGuideline\"},{\"id\":245,\"name\":\"Bi-directionality\",\"slug\":\"bi-directionality\",\"description\":\"Mirror icons that represent movement \",\"display_description\":\"Mirror icons that represent movement\",\"pageType\":\"Foundation\",\"query\":\"Mirror icons that represent movement\",\"type\":\"usageGuideline\"},{\"id\":246,\"name\":\"Bi-directionality\",\"slug\":\"bi-directionality\",\"description\":\"Don't mirror icons that represent time \",\"display_description\":\"Don't mirror icons that represent time\",\"pageType\":\"Foundation\",\"query\":\"Don't mirror icons that represent time\",\"type\":\"usageGuideline\"},{\"id\":247,\"name\":\"Bi-directionality\",\"slug\":\"bi-directionality\",\"description\":\"Don't mirror checkmarks \",\"display_description\":\"Don't mirror checkmarks\",\"pageType\":\"Foundation\",\"query\":\"Don't mirror checkmarks\",\"type\":\"usageGuideline\"},{\"id\":248,\"name\":\"Bi-directionality\",\"slug\":\"bi-directionality\",\"description\":\"Don't mirror slashes \",\"display_description\":\"Don't mirror slashes\",\"pageType\":\"Foundation\",\"query\":\"Don't mirror slashes\",\"type\":\"usageGuideline\"},{\"id\":249,\"name\":\"Tool (deprecated)\",\"slug\":\"tool\",\"description\":\"Tool (deprecated) \",\"pageType\":\"Component\",\"query\":\"\",\"type\":\"page\"},{\"id\":250,\"name\":\"Icons\",\"slug\":\"icons-dev\",\"description\":\"Icons \",\"pageType\":\"Guidelines\",\"query\":\"\",\"type\":\"page\"},{\"id\":251,\"name\":\"Color area\",\"slug\":\"color-area\",\"description\":\"Color area \",\"pageType\":\"Component\",\"query\":\"\",\"type\":\"page\"},{\"id\":252,\"name\":\"Color area\",\"slug\":\"color-area\",\"description\":\"Flexible width and height \",\"display_description\":\"Flexible width and height\",\"pageType\":\"Component\",\"query\":\"Flexible width and height\",\"type\":\"Behavior\"},{\"id\":253,\"name\":\"Color area\",\"slug\":\"color-area\",\"description\":\"Handle behavior \",\"display_description\":\"Handle behavior\",\"pageType\":\"Component\",\"query\":\"Handle behavior\",\"type\":\"Behavior\"},{\"id\":254,\"name\":\"Color area\",\"slug\":\"color-area\",\"description\":\"Loupe behavior (down state, finger input) \",\"display_description\":\"Loupe behavior (down state, finger input)\",\"pageType\":\"Component\",\"query\":\"Loupe behavior (down state, finger input)\",\"type\":\"Behavior\"},{\"id\":255,\"name\":\"Color area\",\"slug\":\"color-area\",\"description\":\"Display color selection \",\"display_description\":\"Display color selection\",\"pageType\":\"Component\",\"query\":\"Display color selection\",\"type\":\"usageGuideline\"},{\"id\":256,\"name\":\"Table\",\"slug\":\"table\",\"description\":\"Table \",\"pageType\":\"Component\",\"query\":\"\",\"type\":\"page\"},{\"id\":257,\"name\":\"Table\",\"slug\":\"table\",\"description\":\"Left align textual data \",\"display_description\":\"Left align textual data\",\"pageType\":\"Component\",\"query\":\"Left align textual data\",\"type\":\"usageGuideline\"},{\"id\":258,\"name\":\"Table\",\"slug\":\"table\",\"description\":\"Right align numerical data \",\"display_description\":\"Right align numerical data\",\"pageType\":\"Component\",\"query\":\"Right align numerical data\",\"type\":\"usageGuideline\"},{\"id\":259,\"name\":\"Table\",\"slug\":\"table\",\"description\":\"Use tabular numbers for numerical data \",\"display_description\":\"Use tabular numbers for numerical data\",\"pageType\":\"Component\",\"query\":\"Use tabular numbers for numerical data\",\"type\":\"usageGuideline\"},{\"id\":260,\"name\":\"Table\",\"slug\":\"table\",\"description\":\"Respect vertical alignment \",\"display_description\":\"Respect vertical alignment\",\"pageType\":\"Component\",\"query\":\"Respect vertical alignment\",\"type\":\"usageGuideline\"},{\"id\":261,\"name\":\"Table\",\"slug\":\"table\",\"description\":\"Don't use zebra stripes \",\"display_description\":\"Don't use zebra stripes\",\"pageType\":\"Component\",\"query\":\"Don't use zebra stripes\",\"type\":\"usageGuideline\"},{\"id\":262,\"name\":\"Table\",\"slug\":\"table\",\"description\":\"Use column dividers sparingly \",\"display_description\":\"Use column dividers sparingly\",\"pageType\":\"Component\",\"query\":\"Use column dividers sparingly\",\"type\":\"usageGuideline\"},{\"id\":263,\"name\":\"Table\",\"slug\":\"table\",\"description\":\"Use an en dash (–) for missing values \",\"display_description\":\"Use an en dash (–) for missing values\",\"pageType\":\"Component\",\"query\":\"Use an en dash (–) for missing values\",\"type\":\"usageGuideline\"},{\"id\":264,\"name\":\"Circle loader\",\"slug\":\"circle-loader\",\"description\":\"Circle loader progress\",\"pageType\":\"Component\",\"query\":\"\",\"type\":\"page\"},{\"id\":265,\"name\":\"Circle loader\",\"slug\":\"circle-loader\",\"description\":\"Use circle loaders for loading views progress\",\"display_description\":\"Use circle loaders for loading views\",\"pageType\":\"Component\",\"query\":\"Use circle loaders for loading views\",\"type\":\"usageGuideline\"},{\"id\":266,\"name\":\"Circle loader\",\"slug\":\"circle-loader\",\"description\":\"Use small circle loaders when space is limited progress\",\"display_description\":\"Use small circle loaders when space is limited\",\"pageType\":\"Component\",\"query\":\"Use small circle loaders when space is limited\",\"type\":\"usageGuideline\"},{\"id\":267,\"name\":\"Headers\",\"slug\":\"headers\",\"description\":\"Headers \",\"pageType\":\"Guidelines\",\"query\":\"\",\"type\":\"page\"},{\"id\":268,\"name\":\"Color wheel\",\"slug\":\"color-wheel\",\"description\":\"Color wheel \",\"pageType\":\"Component\",\"query\":\"\",\"type\":\"page\"},{\"id\":269,\"name\":\"Color wheel\",\"slug\":\"color-wheel\",\"description\":\"Flexible radius \",\"display_description\":\"Flexible radius\",\"pageType\":\"Component\",\"query\":\"Flexible radius\",\"type\":\"Behavior\"},{\"id\":270,\"name\":\"Color wheel\",\"slug\":\"color-wheel\",\"description\":\"Loupe behavior (down state, finger input) \",\"display_description\":\"Loupe behavior (down state, finger input)\",\"pageType\":\"Component\",\"query\":\"Loupe behavior (down state, finger input)\",\"type\":\"Behavior\"},{\"id\":271,\"name\":\"Color wheel\",\"slug\":\"color-wheel\",\"description\":\"Display color selection \",\"display_description\":\"Display color selection\",\"pageType\":\"Component\",\"query\":\"Display color selection\",\"type\":\"usageGuideline\"},{\"id\":272,\"name\":\"Color wheel\",\"slug\":\"color-wheel\",\"description\":\"Use the circular track for hues only \",\"display_description\":\"Use the circular track for hues only\",\"pageType\":\"Component\",\"query\":\"Use the circular track for hues only\",\"type\":\"usageGuideline\"},{\"id\":273,\"name\":\"Trays\",\"slug\":\"trays\",\"description\":\"Trays \",\"pageType\":\"Foundation\",\"query\":\"\",\"type\":\"page\"},{\"id\":274,\"name\":\"Trays\",\"slug\":\"trays\",\"description\":\"Source indication \",\"display_description\":\"Source indication\",\"pageType\":\"Foundation\",\"query\":\"Source indication\",\"type\":\"Behavior\"},{\"id\":275,\"name\":\"Trays\",\"slug\":\"trays\",\"description\":\"Animation \",\"display_description\":\"Animation\",\"pageType\":\"Foundation\",\"query\":\"Animation\",\"type\":\"Behavior\"},{\"id\":276,\"name\":\"Trays\",\"slug\":\"trays\",\"description\":\"Trays or popovers? \",\"display_description\":\"Trays or popovers?\",\"pageType\":\"Foundation\",\"query\":\"Trays or popovers?\",\"type\":\"usageGuideline\"},{\"id\":277,\"name\":\"Typography\",\"slug\":\"typography\",\"description\":\"Typography \",\"pageType\":\"Foundation\",\"query\":\"\",\"type\":\"page\"},{\"id\":278,\"name\":\"Typography\",\"slug\":\"typography\",\"description\":\"Respect our type scale \",\"display_description\":\"Respect our type scale\",\"pageType\":\"Foundation\",\"query\":\"Respect our type scale\",\"type\":\"usageGuideline\"},{\"id\":279,\"name\":\"Typography\",\"slug\":\"typography\",\"description\":\"Use and adjust mobile font sizes \",\"display_description\":\"Use and adjust mobile font sizes\",\"pageType\":\"Foundation\",\"query\":\"Use and adjust mobile font sizes\",\"type\":\"usageGuideline\"},{\"id\":280,\"name\":\"Typography\",\"slug\":\"typography\",\"description\":\"Don't use underlines for adding emphasis \",\"display_description\":\"Don't use underlines for adding emphasis\",\"pageType\":\"Foundation\",\"query\":\"Don't use underlines for adding emphasis\",\"type\":\"usageGuideline\"},{\"id\":281,\"name\":\"Typography\",\"slug\":\"typography\",\"description\":\"Respect capitalization rules \",\"display_description\":\"Respect capitalization rules\",\"pageType\":\"Foundation\",\"query\":\"Respect capitalization rules\",\"type\":\"usageGuideline\"},{\"id\":282,\"name\":\"Typography\",\"slug\":\"typography\",\"description\":\"Use tabular numbers for numerical data \",\"display_description\":\"Use tabular numbers for numerical data\",\"pageType\":\"Foundation\",\"query\":\"Use tabular numbers for numerical data\",\"type\":\"usageGuideline\"},{\"id\":283,\"name\":\"Typography\",\"slug\":\"typography\",\"description\":\"Use oldstyle numbers in strings of text \",\"display_description\":\"Use oldstyle numbers in strings of text\",\"pageType\":\"Foundation\",\"query\":\"Use oldstyle numbers in strings of text\",\"type\":\"usageGuideline\"},{\"id\":284,\"name\":\"Typography\",\"slug\":\"typography\",\"description\":\"Don't let paragraph widths get too thin \",\"display_description\":\"Don't let paragraph widths get too thin\",\"pageType\":\"Foundation\",\"query\":\"Don't let paragraph widths get too thin\",\"type\":\"usageGuideline\"},{\"id\":285,\"name\":\"Typography\",\"slug\":\"typography\",\"description\":\"Keep content short and to the point \",\"display_description\":\"Keep content short and to the point\",\"pageType\":\"Foundation\",\"query\":\"Keep content short and to the point\",\"type\":\"usageGuideline\"},{\"id\":286,\"name\":\"Typography\",\"slug\":\"typography\",\"description\":\"Don't use indentation \",\"display_description\":\"Don't use indentation\",\"pageType\":\"Foundation\",\"query\":\"Don't use indentation\",\"type\":\"usageGuideline\"},{\"id\":287,\"name\":\"Typography\",\"slug\":\"typography\",\"description\":\"Don't fully-justify text \",\"display_description\":\"Don't fully-justify text\",\"pageType\":\"Foundation\",\"query\":\"Don't fully-justify text\",\"type\":\"usageGuideline\"},{\"id\":288,\"name\":\"Link\",\"slug\":\"link\",\"description\":\"Link \",\"pageType\":\"Component\",\"query\":\"\",\"type\":\"page\"},{\"id\":289,\"name\":\"Link\",\"slug\":\"link\",\"description\":\"Use links in body copy \",\"display_description\":\"Use links in body copy\",\"pageType\":\"Component\",\"query\":\"Use links in body copy\",\"type\":\"usageGuideline\"},{\"id\":290,\"name\":\"Link\",\"slug\":\"link\",\"description\":\"Think about screen readers \",\"display_description\":\"Think about screen readers\",\"pageType\":\"Component\",\"query\":\"Think about screen readers\",\"type\":\"usageGuideline\"},{\"id\":291,\"name\":\"Voice and tone\",\"slug\":\"voice-and-tone\",\"description\":\"Voice and tone \",\"pageType\":\"Foundation\",\"query\":\"\",\"type\":\"page\"},{\"id\":292,\"name\":\"Brand illustrations\",\"slug\":\"brand-illustrations\",\"description\":\"Brand illustrations \",\"pageType\":\"Foundation\",\"query\":\"\",\"type\":\"page\"},{\"id\":293,\"name\":\"Brand illustrations\",\"slug\":\"brand-illustrations\",\"description\":\"Don't create your own illustration \",\"display_description\":\"Don't create your own illustration\",\"pageType\":\"Foundation\",\"query\":\"Don't create your own illustration\",\"type\":\"usageGuideline\"},{\"id\":294,\"name\":\"Brand illustrations\",\"slug\":\"brand-illustrations\",\"description\":\"Don't change colors \",\"display_description\":\"Don't change colors\",\"pageType\":\"Foundation\",\"query\":\"Don't change colors\",\"type\":\"usageGuideline\"},{\"id\":295,\"name\":\"Brand illustrations\",\"slug\":\"brand-illustrations\",\"description\":\"Don’t scale \",\"display_description\":\"Don’t scale\",\"pageType\":\"Foundation\",\"query\":\"Don’t scale\",\"type\":\"usageGuideline\"},{\"id\":296,\"name\":\"Brand illustrations\",\"slug\":\"brand-illustrations\",\"description\":\"Don't crop \",\"display_description\":\"Don't crop\",\"pageType\":\"Foundation\",\"query\":\"Don't crop\",\"type\":\"usageGuideline\"},{\"id\":297,\"name\":\"Brand illustrations\",\"slug\":\"brand-illustrations\",\"description\":\"Don’t place over an image \",\"display_description\":\"Don’t place over an image\",\"pageType\":\"Foundation\",\"query\":\"Don’t place over an image\",\"type\":\"usageGuideline\"},{\"id\":298,\"name\":\"Status light\",\"slug\":\"status-light\",\"description\":\"Status light \",\"pageType\":\"Component\",\"query\":\"\",\"type\":\"page\"},{\"id\":299,\"name\":\"Status light\",\"slug\":\"status-light\",\"description\":\"Text overflow \",\"display_description\":\"Text overflow\",\"pageType\":\"Component\",\"query\":\"Text overflow\",\"type\":\"Behavior\"},{\"id\":300,\"name\":\"Status light\",\"slug\":\"status-light\",\"description\":\"Use the appropriate variation \",\"display_description\":\"Use the appropriate variation\",\"pageType\":\"Component\",\"query\":\"Use the appropriate variation\",\"type\":\"usageGuideline\"},{\"id\":301,\"name\":\"Status light\",\"slug\":\"status-light\",\"description\":\"Status light text \",\"display_description\":\"Status light text\",\"pageType\":\"Component\",\"query\":\"Status light text\",\"type\":\"usageGuideline\"},{\"id\":302,\"name\":\"What's new\",\"slug\":\"whats-new\",\"description\":\"What's new \",\"pageType\":\"Guidelines\",\"query\":\"\",\"type\":\"page\"},{\"id\":303,\"name\":\"Tutorials\",\"slug\":\"tutorials\",\"description\":\"Tutorials \",\"pageType\":\"Search Exclude\",\"query\":\"\",\"type\":\"page\"},{\"id\":304,\"name\":\"Form errors\",\"slug\":\"https://xd.adobe.com/view/da1889a3-ed5e-4d8f-589e-59c98ff9786e-ac29/\",\"description\":\"Form errors tutorial tutorials\",\"pageType\":\"Tutorial\",\"query\":\"\",\"type\":\"Tutorial\"},{\"id\":305,\"name\":\"What is a card?\",\"slug\":\"https://xd.adobe.com/view/5822223b-9cc1-4a9a-6068-45d640aad59c-2e13/\",\"description\":\"What is a card? tutorial tutorials\",\"pageType\":\"Tutorial\",\"query\":\"\",\"type\":\"Tutorial\"},{\"id\":306,\"name\":\"Create a menu\",\"slug\":\"https://xd.adobe.com/view/25649b74-51dc-4a95-66b8-832c0c37b505-5355/\",\"description\":\"Create a menu tutorial tutorials\",\"pageType\":\"Tutorial\",\"query\":\"\",\"type\":\"Tutorial\"},{\"id\":307,\"name\":\"Gray system\",\"slug\":\"https://xd.adobe.com/view/79f3095c-9bee-4717-768f-629ad7f25997-0fc2/\",\"description\":\"Gray system tutorial tutorials\",\"pageType\":\"Tutorial\",\"query\":\"\",\"type\":\"Tutorial\"},{\"id\":308,\"name\":\"Buttons\",\"slug\":\"https://xd.adobe.com/view/b6b8b32a-d5db-4994-7db4-78b8d09cef4e-c089/\",\"description\":\"Buttons tutorial tutorials\",\"pageType\":\"Tutorial\",\"query\":\"\",\"type\":\"Tutorial\"},{\"id\":309,\"name\":\"Radio button\",\"slug\":\"radio-button\",\"description\":\"Radio button \",\"pageType\":\"Component\",\"query\":\"\",\"type\":\"page\"},{\"id\":310,\"name\":\"Radio button\",\"slug\":\"radio-button\",\"description\":\"Text overflow \",\"display_description\":\"Text overflow\",\"pageType\":\"Component\",\"query\":\"Text overflow\",\"type\":\"Behavior\"},{\"id\":311,\"name\":\"Radio button\",\"slug\":\"radio-button\",\"description\":\"Mixed value \",\"display_description\":\"Mixed value\",\"pageType\":\"Component\",\"query\":\"Mixed value\",\"type\":\"Behavior\"},{\"id\":312,\"name\":\"Radio button\",\"slug\":\"radio-button\",\"description\":\"Emphasized or not? \",\"display_description\":\"Emphasized or not?\",\"pageType\":\"Component\",\"query\":\"Emphasized or not?\",\"type\":\"usageGuideline\"},{\"id\":313,\"name\":\"Radio button\",\"slug\":\"radio-button\",\"description\":\"Use radio buttons for mutually exclusive options \",\"display_description\":\"Use radio buttons for mutually exclusive options\",\"pageType\":\"Component\",\"query\":\"Use radio buttons for mutually exclusive options\",\"type\":\"usageGuideline\"},{\"id\":314,\"name\":\"Radio button\",\"slug\":\"radio-button\",\"description\":\"Label groups of radio buttons \",\"display_description\":\"Label groups of radio buttons\",\"pageType\":\"Component\",\"query\":\"Label groups of radio buttons\",\"type\":\"usageGuideline\"},{\"id\":315,\"name\":\"Motion\",\"slug\":\"motion\",\"description\":\"Motion \",\"pageType\":\"Foundation\",\"query\":\"\",\"type\":\"page\"},{\"id\":316,\"name\":\"Tools\",\"slug\":\"tools\",\"description\":\"Tools \",\"pageType\":\"Resources\",\"query\":\"\",\"type\":\"page\"},{\"id\":317,\"name\":\"Meet Spectrum, Adobe’s design system\",\"slug\":\"home\",\"description\":\"Meet Spectrum, Adobe’s design system \",\"pageType\":\"Index\",\"query\":\"\",\"type\":\"page\"},{\"id\":318,\"name\":\"Contact us\",\"slug\":\"contact-us\",\"description\":\"Contact us \",\"pageType\":\"Guidelines\",\"query\":\"\",\"type\":\"page\"},{\"id\":319,\"name\":\"Color slider\",\"slug\":\"color-slider\",\"description\":\"Color slider \",\"pageType\":\"Component\",\"query\":\"\",\"type\":\"page\"},{\"id\":320,\"name\":\"Color slider\",\"slug\":\"color-slider\",\"description\":\"Flexible length \",\"display_description\":\"Flexible length\",\"pageType\":\"Component\",\"query\":\"Flexible length\",\"type\":\"Behavior\"},{\"id\":321,\"name\":\"Color slider\",\"slug\":\"color-slider\",\"description\":\"Handle behavior \",\"display_description\":\"Handle behavior\",\"pageType\":\"Component\",\"query\":\"Handle behavior\",\"type\":\"Behavior\"},{\"id\":322,\"name\":\"Color slider\",\"slug\":\"color-slider\",\"description\":\"Loupe behavior (down state, finger input) \",\"display_description\":\"Loupe behavior (down state, finger input)\",\"pageType\":\"Component\",\"query\":\"Loupe behavior (down state, finger input)\",\"type\":\"Behavior\"},{\"id\":323,\"name\":\"Color slider\",\"slug\":\"color-slider\",\"description\":\"Include labels \",\"display_description\":\"Include labels\",\"pageType\":\"Component\",\"query\":\"Include labels\",\"type\":\"usageGuideline\"},{\"id\":324,\"name\":\"Color slider\",\"slug\":\"color-slider\",\"description\":\"Display color selection \",\"display_description\":\"Display color selection\",\"pageType\":\"Component\",\"query\":\"Display color selection\",\"type\":\"usageGuideline\"},{\"id\":325,\"name\":\"Panels\",\"slug\":\"panels\",\"description\":\"Panels \",\"pageType\":\"Guidelines\",\"query\":\"\",\"type\":\"page\"},{\"id\":326,\"name\":\"Side navigation\",\"slug\":\"side-navigation\",\"description\":\"Side navigation \",\"pageType\":\"Component\",\"query\":\"\",\"type\":\"page\"},{\"id\":327,\"name\":\"Side navigation\",\"slug\":\"side-navigation\",\"description\":\"Flexible width \",\"display_description\":\"Flexible width\",\"pageType\":\"Component\",\"query\":\"Flexible width\",\"type\":\"Behavior\"},{\"id\":328,\"name\":\"Side navigation\",\"slug\":\"side-navigation\",\"description\":\"Text overflow \",\"display_description\":\"Text overflow\",\"pageType\":\"Component\",\"query\":\"Text overflow\",\"type\":\"Behavior\"},{\"id\":329,\"name\":\"Side navigation\",\"slug\":\"side-navigation\",\"description\":\"Don't make the width too condensed \",\"display_description\":\"Don't make the width too condensed\",\"pageType\":\"Component\",\"query\":\"Don't make the width too condensed\",\"type\":\"usageGuideline\"},{\"id\":330,\"name\":\"Side navigation\",\"slug\":\"side-navigation\",\"description\":\"Use descriptive titles \",\"display_description\":\"Use descriptive titles\",\"pageType\":\"Component\",\"query\":\"Use descriptive titles\",\"type\":\"usageGuideline\"},{\"id\":331,\"name\":\"Side navigation\",\"slug\":\"side-navigation\",\"description\":\"Be concise \",\"display_description\":\"Be concise\",\"pageType\":\"Component\",\"query\":\"Be concise\",\"type\":\"usageGuideline\"},{\"id\":332,\"name\":\"Side navigation\",\"slug\":\"side-navigation\",\"description\":\"Use sentence case \",\"display_description\":\"Use sentence case\",\"pageType\":\"Component\",\"query\":\"Use sentence case\",\"type\":\"usageGuideline\"},{\"id\":333,\"name\":\"Side navigation\",\"slug\":\"side-navigation\",\"description\":\"Use icons in first-level items only \",\"display_description\":\"Use icons in first-level items only\",\"pageType\":\"Component\",\"query\":\"Use icons in first-level items only\",\"type\":\"usageGuideline\"},{\"id\":334,\"name\":\"Side navigation\",\"slug\":\"side-navigation\",\"description\":\"Combining icon and text-only navigation items \",\"display_description\":\"Combining icon and text-only navigation items\",\"pageType\":\"Component\",\"query\":\"Combining icon and text-only navigation items\",\"type\":\"usageGuideline\"},{\"id\":335,\"name\":\"Side navigation\",\"slug\":\"side-navigation\",\"description\":\"Use the right variation \",\"display_description\":\"Use the right variation\",\"pageType\":\"Component\",\"query\":\"Use the right variation\",\"type\":\"usageGuideline\"},{\"id\":336,\"name\":\"Side navigation\",\"slug\":\"side-navigation\",\"description\":\"Avoid deep nested menus \",\"display_description\":\"Avoid deep nested menus\",\"pageType\":\"Component\",\"query\":\"Avoid deep nested menus\",\"type\":\"usageGuideline\"},{\"id\":337,\"name\":\"Popovers\",\"slug\":\"popovers\",\"description\":\"Popovers \",\"pageType\":\"Foundation\",\"query\":\"\",\"type\":\"page\"},{\"id\":338,\"name\":\"Popovers\",\"slug\":\"popovers\",\"description\":\"Rectangular source \",\"display_description\":\"Rectangular source\",\"pageType\":\"Foundation\",\"query\":\"Rectangular source\",\"type\":\"Behavior\"},{\"id\":339,\"name\":\"Popovers\",\"slug\":\"popovers\",\"description\":\"Square source \",\"display_description\":\"Square source\",\"pageType\":\"Foundation\",\"query\":\"Square source\",\"type\":\"Behavior\"},{\"id\":340,\"name\":\"Popovers\",\"slug\":\"popovers\",\"description\":\"Alignment \",\"display_description\":\"Alignment\",\"pageType\":\"Foundation\",\"query\":\"Alignment\",\"type\":\"Behavior\"},{\"id\":341,\"name\":\"Popovers\",\"slug\":\"popovers\",\"description\":\"Spacing \",\"display_description\":\"Spacing\",\"pageType\":\"Foundation\",\"query\":\"Spacing\",\"type\":\"Behavior\"},{\"id\":342,\"name\":\"Popovers\",\"slug\":\"popovers\",\"description\":\"Source indication: clear source \",\"display_description\":\"Source indication: clear source\",\"pageType\":\"Foundation\",\"query\":\"Source indication: clear source\",\"type\":\"Behavior\"},{\"id\":343,\"name\":\"Popovers\",\"slug\":\"popovers\",\"description\":\"Source indication: ambiguous source \",\"display_description\":\"Source indication: ambiguous source\",\"pageType\":\"Foundation\",\"query\":\"Source indication: ambiguous source\",\"type\":\"Behavior\"},{\"id\":344,\"name\":\"Popovers\",\"slug\":\"popovers\",\"description\":\"Animation \",\"display_description\":\"Animation\",\"pageType\":\"Foundation\",\"query\":\"Animation\",\"type\":\"Behavior\"},{\"id\":345,\"name\":\"Popovers\",\"slug\":\"popovers\",\"description\":\"Popovers or trays? \",\"display_description\":\"Popovers or trays?\",\"pageType\":\"Foundation\",\"query\":\"Popovers or trays?\",\"type\":\"usageGuideline\"},{\"id\":346,\"name\":\"Checkbox\",\"slug\":\"checkbox\",\"description\":\"Checkbox \",\"pageType\":\"Component\",\"query\":\"\",\"type\":\"page\"},{\"id\":347,\"name\":\"Checkbox\",\"slug\":\"checkbox\",\"description\":\"Text overflow \",\"display_description\":\"Text overflow\",\"pageType\":\"Component\",\"query\":\"Text overflow\",\"type\":\"Behavior\"},{\"id\":348,\"name\":\"Checkbox\",\"slug\":\"checkbox\",\"description\":\"Mixed value \",\"display_description\":\"Mixed value\",\"pageType\":\"Component\",\"query\":\"Mixed value\",\"type\":\"Behavior\"},{\"id\":349,\"name\":\"Checkbox\",\"slug\":\"checkbox\",\"description\":\"Emphasized or not? \",\"display_description\":\"Emphasized or not?\",\"pageType\":\"Component\",\"query\":\"Emphasized or not?\",\"type\":\"usageGuideline\"},{\"id\":350,\"name\":\"Checkbox\",\"slug\":\"checkbox\",\"description\":\"When to use a standalone checkbox? \",\"display_description\":\"When to use a standalone checkbox?\",\"pageType\":\"Component\",\"query\":\"When to use a standalone checkbox?\",\"type\":\"usageGuideline\"},{\"id\":351,\"name\":\"Checkbox\",\"slug\":\"checkbox\",\"description\":\"Checkbox or radio button? \",\"display_description\":\"Checkbox or radio button?\",\"pageType\":\"Component\",\"query\":\"Checkbox or radio button?\",\"type\":\"usageGuideline\"},{\"id\":352,\"name\":\"Checkbox\",\"slug\":\"checkbox\",\"description\":\"Checkbox or switch? \",\"display_description\":\"Checkbox or switch?\",\"pageType\":\"Component\",\"query\":\"Checkbox or switch?\",\"type\":\"usageGuideline\"},{\"id\":353,\"name\":\"Checkbox\",\"slug\":\"checkbox\",\"description\":\"Label groups of related checkboxes \",\"display_description\":\"Label groups of related checkboxes\",\"pageType\":\"Component\",\"query\":\"Label groups of related checkboxes\",\"type\":\"usageGuideline\"},{\"id\":354,\"name\":\"Checkbox\",\"slug\":\"checkbox\",\"description\":\"RTL \",\"display_description\":\"RTL\",\"pageType\":\"Component\",\"query\":\"RTL\",\"type\":\"Behavior\"},{\"id\":355,\"name\":\"International design\",\"slug\":\"international-design\",\"description\":\"International design \",\"pageType\":\"Foundation\",\"query\":\"\",\"type\":\"page\"},{\"id\":356,\"name\":\"Slider\",\"slug\":\"slider\",\"description\":\"Slider \",\"pageType\":\"Component\",\"query\":\"\",\"type\":\"page\"},{\"id\":357,\"name\":\"Slider\",\"slug\":\"slider\",\"description\":\"Value placement \",\"display_description\":\"Value placement\",\"pageType\":\"Component\",\"query\":\"Value placement\",\"type\":\"Behavior\"},{\"id\":358,\"name\":\"Slider\",\"slug\":\"slider\",\"description\":\"Text overflow \",\"display_description\":\"Text overflow\",\"pageType\":\"Component\",\"query\":\"Text overflow\",\"type\":\"Behavior\"},{\"id\":359,\"name\":\"Slider\",\"slug\":\"slider\",\"description\":\"Include a label \",\"display_description\":\"Include a label\",\"pageType\":\"Component\",\"query\":\"Include a label\",\"type\":\"usageGuideline\"},{\"id\":360,\"name\":\"Slider\",\"slug\":\"slider\",\"description\":\"Review label-less designs with Inclusive Design team \",\"display_description\":\"Review label-less designs with Inclusive Design team\",\"pageType\":\"Component\",\"query\":\"Review label-less designs with Inclusive Design team\",\"type\":\"usageGuideline\"},{\"id\":361,\"name\":\"Slider\",\"slug\":\"slider\",\"description\":\"Allow a hot text option when needed \",\"display_description\":\"Allow a hot text option when needed\",\"pageType\":\"Component\",\"query\":\"Allow a hot text option when needed\",\"type\":\"usageGuideline\"},{\"id\":362,\"name\":\"Slider\",\"slug\":\"slider\",\"description\":\"Show value units to help provide context \",\"display_description\":\"Show value units to help provide context\",\"pageType\":\"Component\",\"query\":\"Show value units to help provide context\",\"type\":\"usageGuideline\"},{\"id\":363,\"name\":\"Slider\",\"slug\":\"slider\",\"description\":\"Prefix positive/negative values \",\"display_description\":\"Prefix positive/negative values\",\"pageType\":\"Component\",\"query\":\"Prefix positive/negative values\",\"type\":\"usageGuideline\"},{\"id\":364,\"name\":\"Rating\",\"slug\":\"rating\",\"description\":\"Rating \",\"pageType\":\"Component\",\"query\":\"\",\"type\":\"page\"},{\"id\":365,\"name\":\"Rating\",\"slug\":\"rating\",\"description\":\"Editing rating \",\"display_description\":\"Editing rating\",\"pageType\":\"Component\",\"query\":\"Editing rating\",\"type\":\"Behavior\"},{\"id\":366,\"name\":\"Rating\",\"slug\":\"rating\",\"description\":\"Clearing rating \",\"display_description\":\"Clearing rating\",\"pageType\":\"Component\",\"query\":\"Clearing rating\",\"type\":\"Behavior\"},{\"id\":367,\"name\":\"Rating\",\"slug\":\"rating\",\"description\":\"Mixed value \",\"display_description\":\"Mixed value\",\"pageType\":\"Component\",\"query\":\"Mixed value\",\"type\":\"Behavior\"},{\"id\":368,\"name\":\"Rating\",\"slug\":\"rating\",\"description\":\"Don’t customize the number of stars available \",\"display_description\":\"Don’t customize the number of stars available\",\"pageType\":\"Component\",\"query\":\"Don’t customize the number of stars available\",\"type\":\"usageGuideline\"},{\"id\":369,\"name\":\"Alert Dialog\",\"slug\":\"alert-dialog\",\"description\":\"Alert Dialog \",\"pageType\":\"Guidelines\",\"query\":\"\",\"type\":\"page\"},{\"id\":370,\"name\":\"Divider\",\"slug\":\"divider\",\"description\":\"Divider rule\",\"pageType\":\"Component\",\"query\":\"\",\"type\":\"page\"},{\"id\":371,\"name\":\"Divider\",\"slug\":\"divider\",\"description\":\"Place a divider below a header rule\",\"display_description\":\"Place a divider below a header\",\"pageType\":\"Component\",\"query\":\"Place a divider below a header\",\"type\":\"usageGuideline\"},{\"id\":372,\"name\":\"Divider\",\"slug\":\"divider\",\"description\":\"Don’t overuse dividers rule\",\"display_description\":\"Don’t overuse dividers\",\"pageType\":\"Component\",\"query\":\"Don’t overuse dividers\",\"type\":\"usageGuideline\"},{\"id\":373,\"name\":\"Quick actions\",\"slug\":\"quick-actions\",\"description\":\"Quick actions \",\"pageType\":\"Component\",\"query\":\"\",\"type\":\"page\"},{\"id\":374,\"name\":\"Quick actions\",\"slug\":\"quick-actions\",\"description\":\"Action button overflow \",\"display_description\":\"Action button overflow\",\"pageType\":\"Component\",\"query\":\"Action button overflow\",\"type\":\"Behavior\"},{\"id\":375,\"name\":\"Quick actions\",\"slug\":\"quick-actions\",\"description\":\"Don’t mix icons and text \",\"display_description\":\"Don’t mix icons and text\",\"pageType\":\"Component\",\"query\":\"Don’t mix icons and text\",\"type\":\"usageGuideline\"},{\"id\":376,\"name\":\"Quick actions\",\"slug\":\"quick-actions\",\"description\":\"Place the most common actions to the left \",\"display_description\":\"Place the most common actions to the left\",\"pageType\":\"Component\",\"query\":\"Place the most common actions to the left\",\"type\":\"usageGuideline\"},{\"id\":377,\"name\":\"Quick actions\",\"slug\":\"quick-actions\",\"description\":\"Use quick actions as shortcuts only \",\"display_description\":\"Use quick actions as shortcuts only\",\"pageType\":\"Component\",\"query\":\"Use quick actions as shortcuts only\",\"type\":\"usageGuideline\"},{\"id\":378,\"name\":\"Quick actions\",\"slug\":\"quick-actions\",\"description\":\"Don't wrap actions \",\"display_description\":\"Don't wrap actions\",\"pageType\":\"Component\",\"query\":\"Don't wrap actions\",\"type\":\"usageGuideline\"},{\"id\":379,\"name\":\"Tag\",\"slug\":\"tag\",\"description\":\"Tag \",\"pageType\":\"Component\",\"query\":\"\",\"type\":\"page\"},{\"id\":380,\"name\":\"Tag\",\"slug\":\"tag\",\"description\":\"Text overflow \",\"display_description\":\"Text overflow\",\"pageType\":\"Component\",\"query\":\"Text overflow\",\"type\":\"Behavior\"},{\"id\":381,\"name\":\"Tag\",\"slug\":\"tag\",\"description\":\"Tag group overflow \",\"display_description\":\"Tag group overflow\",\"pageType\":\"Component\",\"query\":\"Tag group overflow\",\"type\":\"Behavior\"},{\"id\":382,\"name\":\"Tag\",\"slug\":\"tag\",\"description\":\"Allow bulk actions \",\"display_description\":\"Allow bulk actions\",\"pageType\":\"Component\",\"query\":\"Allow bulk actions\",\"type\":\"usageGuideline\"},{\"id\":383,\"name\":\"Tag\",\"slug\":\"tag\",\"description\":\"Avoid disabling a large group of tags \",\"display_description\":\"Avoid disabling a large group of tags\",\"pageType\":\"Component\",\"query\":\"Avoid disabling a large group of tags\",\"type\":\"usageGuideline\"},{\"id\":384,\"name\":\"Cards\",\"slug\":\"cards\",\"description\":\"Cards \",\"pageType\":\"Guidelines\",\"query\":\"\",\"type\":\"page\"},{\"id\":385,\"name\":\"Tooltip\",\"slug\":\"tooltip\",\"description\":\"Tooltip \",\"pageType\":\"Component\",\"query\":\"\",\"type\":\"page\"},{\"id\":386,\"name\":\"Tooltip\",\"slug\":\"tooltip\",\"description\":\"Text overflow \",\"display_description\":\"Text overflow\",\"pageType\":\"Component\",\"query\":\"Text overflow\",\"type\":\"Behavior\"},{\"id\":387,\"name\":\"Tooltip\",\"slug\":\"tooltip\",\"description\":\"Animation \",\"display_description\":\"Animation\",\"pageType\":\"Component\",\"query\":\"Animation\",\"type\":\"Behavior\"},{\"id\":388,\"name\":\"Tooltip\",\"slug\":\"tooltip\",\"description\":\"Immediate or delayed appearance \",\"display_description\":\"Immediate or delayed appearance\",\"pageType\":\"Component\",\"query\":\"Immediate or delayed appearance\",\"type\":\"Behavior\"},{\"id\":389,\"name\":\"Tooltip\",\"slug\":\"tooltip\",\"description\":\"Warmup and cooldown \",\"display_description\":\"Warmup and cooldown\",\"pageType\":\"Component\",\"query\":\"Warmup and cooldown\",\"type\":\"Behavior\"},{\"id\":390,\"name\":\"Tooltip\",\"slug\":\"tooltip\",\"description\":\"Use tooltips to describe icons \",\"display_description\":\"Use tooltips to describe icons\",\"pageType\":\"Component\",\"query\":\"Use tooltips to describe icons\",\"type\":\"usageGuideline\"},{\"id\":391,\"name\":\"Tooltip\",\"slug\":\"tooltip\",\"description\":\"Be concise \",\"display_description\":\"Be concise\",\"pageType\":\"Component\",\"query\":\"Be concise\",\"type\":\"usageGuideline\"},{\"id\":392,\"name\":\"Tooltip\",\"slug\":\"tooltip\",\"description\":\"Don't communicate crucial information \",\"display_description\":\"Don't communicate crucial information\",\"pageType\":\"Component\",\"query\":\"Don't communicate crucial information\",\"type\":\"usageGuideline\"},{\"id\":393,\"name\":\"Tooltip\",\"slug\":\"tooltip\",\"description\":\"Don't place actions inside a tooltip \",\"display_description\":\"Don't place actions inside a tooltip\",\"pageType\":\"Component\",\"query\":\"Don't place actions inside a tooltip\",\"type\":\"usageGuideline\"},{\"id\":394,\"name\":\"Dialog\",\"slug\":\"dialog\",\"description\":\"Dialog \",\"pageType\":\"Component\",\"query\":\"\",\"type\":\"page\"},{\"id\":395,\"name\":\"Dialog\",\"slug\":\"dialog\",\"description\":\"Text overflow \",\"display_description\":\"Text overflow\",\"pageType\":\"Component\",\"query\":\"Text overflow\",\"type\":\"Behavior\"},{\"id\":396,\"name\":\"Dialog\",\"slug\":\"dialog\",\"description\":\"Button group overflow \",\"display_description\":\"Button group overflow\",\"pageType\":\"Component\",\"query\":\"Button group overflow\",\"type\":\"Behavior\"},{\"id\":397,\"name\":\"Dialog\",\"slug\":\"dialog\",\"description\":\"Use dialogs sparingly \",\"display_description\":\"Use dialogs sparingly\",\"pageType\":\"Component\",\"query\":\"Use dialogs sparingly\",\"type\":\"usageGuideline\"},{\"id\":398,\"name\":\"Dialog\",\"slug\":\"dialog\",\"description\":\"Don't nest dialogs \",\"display_description\":\"Don't nest dialogs\",\"pageType\":\"Component\",\"query\":\"Don't nest dialogs\",\"type\":\"usageGuideline\"},{\"id\":399,\"name\":\"Toast\",\"slug\":\"toast\",\"description\":\"Toast \",\"pageType\":\"Component\",\"query\":\"\",\"type\":\"page\"},{\"id\":400,\"name\":\"Toast\",\"slug\":\"toast\",\"description\":\"Text overflow \",\"display_description\":\"Text overflow\",\"pageType\":\"Component\",\"query\":\"Text overflow\",\"type\":\"Behavior\"},{\"id\":401,\"name\":\"Toast\",\"slug\":\"toast\",\"description\":\"Toast or dialog? \",\"display_description\":\"Toast or dialog?\",\"pageType\":\"Component\",\"query\":\"Toast or dialog?\",\"type\":\"usageGuideline\"},{\"id\":402,\"name\":\"Toast\",\"slug\":\"toast\",\"description\":\"Placement \",\"display_description\":\"Placement\",\"pageType\":\"Component\",\"query\":\"Placement\",\"type\":\"usageGuideline\"},{\"id\":403,\"name\":\"Toast\",\"slug\":\"toast\",\"description\":\"Don’t place mobile toasts over navigation \",\"display_description\":\"Don’t place mobile toasts over navigation\",\"pageType\":\"Component\",\"query\":\"Don’t place mobile toasts over navigation\",\"type\":\"usageGuideline\"},{\"id\":404,\"name\":\"Toast\",\"slug\":\"toast\",\"description\":\"Be concise \",\"display_description\":\"Be concise\",\"pageType\":\"Component\",\"query\":\"Be concise\",\"type\":\"usageGuideline\"},{\"id\":405,\"name\":\"Toast\",\"slug\":\"toast\",\"description\":\"Don’t display more than one action \",\"display_description\":\"Don’t display more than one action\",\"pageType\":\"Component\",\"query\":\"Don’t display more than one action\",\"type\":\"usageGuideline\"},{\"id\":406,\"name\":\"Toast\",\"slug\":\"toast\",\"description\":\"Don't include a redundant action \",\"display_description\":\"Don't include a redundant action\",\"pageType\":\"Component\",\"query\":\"Don't include a redundant action\",\"type\":\"usageGuideline\"},{\"id\":407,\"name\":\"Toast\",\"slug\":\"toast\",\"description\":\"Multiple toasts \",\"display_description\":\"Multiple toasts\",\"pageType\":\"Component\",\"query\":\"Multiple toasts\",\"type\":\"usageGuideline\"},{\"id\":408,\"name\":\"Toast\",\"slug\":\"toast\",\"description\":\"Too many toasts \",\"display_description\":\"Too many toasts\",\"pageType\":\"Component\",\"query\":\"Too many toasts\",\"type\":\"usageGuideline\"},{\"id\":409,\"name\":\"Toast\",\"slug\":\"toast\",\"description\":\"Auto-dismiss \",\"display_description\":\"Auto-dismiss\",\"pageType\":\"Component\",\"query\":\"Auto-dismiss\",\"type\":\"usageGuideline\"},{\"id\":410,\"name\":\"Developer links\",\"slug\":\"developer-links\",\"description\":\"Developer links \",\"pageType\":\"Guidelines\",\"query\":\"\",\"type\":\"page\"},{\"id\":411,\"name\":\"Button\",\"slug\":\"Button-v5.1.0.xd\",\"description\":\"Button \",\"pageType\":\"file\",\"query\":\"\",\"type\":\"xd\"},{\"id\":412,\"name\":\"Action button\",\"slug\":\"Action-button-v5.2.0.xd\",\"description\":\"Action button tool\",\"pageType\":\"file\",\"query\":\"\",\"type\":\"xd\"},{\"id\":413,\"name\":\"Bar loader\",\"slug\":\"Bar-loader-v5.1.0.xd\",\"description\":\"Bar loader progress\",\"pageType\":\"file\",\"query\":\"\",\"type\":\"xd\"},{\"id\":414,\"name\":\"Circle loader\",\"slug\":\"Circle-loader-v5.0.0.xd\",\"description\":\"Circle loader progress\",\"pageType\":\"file\",\"query\":\"\",\"type\":\"xd\"},{\"id\":415,\"name\":\"Coach mark\",\"slug\":\"Coach-mark-v5.1.0.xd\",\"description\":\"Coach mark \",\"pageType\":\"file\",\"query\":\"\",\"type\":\"xd\"},{\"id\":416,\"name\":\"Color area\",\"slug\":\"Color-area-v1.0.0.xd\",\"description\":\"Color area \",\"pageType\":\"file\",\"query\":\"\",\"type\":\"xd\"},{\"id\":417,\"name\":\"Color slider\",\"slug\":\"Color-slider-v1.0.0.xd\",\"description\":\"Color slider \",\"pageType\":\"file\",\"query\":\"\",\"type\":\"xd\"},{\"id\":418,\"name\":\"Color wheel\",\"slug\":\"Color-wheel-v1.0.0.xd\",\"description\":\"Color wheel \",\"pageType\":\"file\",\"query\":\"\",\"type\":\"xd\"},{\"id\":419,\"name\":\"Combo box\",\"slug\":\"Combo-box-v5.1.0.xd\",\"description\":\"Combo box \",\"pageType\":\"file\",\"query\":\"\",\"type\":\"xd\"},{\"id\":420,\"name\":\"Dialog\",\"slug\":\"Dialog-v5.1.0.xd\",\"description\":\"Dialog \",\"pageType\":\"file\",\"query\":\"\",\"type\":\"xd\"},{\"id\":421,\"name\":\"Divider\",\"slug\":\"Divider-v6.1.0.xd\",\"description\":\"Divider rule\",\"pageType\":\"file\",\"query\":\"\",\"type\":\"xd\"},{\"id\":422,\"name\":\"Dropdown\",\"slug\":\"Dropdown-v5.1.0.xd\",\"description\":\"Dropdown select picker\",\"pageType\":\"file\",\"query\":\"\",\"type\":\"xd\"},{\"id\":423,\"name\":\"Link\",\"slug\":\"Link-v6.0.0.xd\",\"description\":\"Link \",\"pageType\":\"file\",\"query\":\"\",\"type\":\"xd\"},{\"id\":424,\"name\":\"Meter\",\"slug\":\"Meter-v5.1.0.xd\",\"description\":\"Meter progress\",\"pageType\":\"file\",\"query\":\"\",\"type\":\"xd\"},{\"id\":425,\"name\":\"Quick actions\",\"slug\":\"Quick-actions-v5.0.1.xd\",\"description\":\"Quick actions \",\"pageType\":\"file\",\"query\":\"\",\"type\":\"xd\"},{\"id\":426,\"name\":\"Radio button\",\"slug\":\"Radio-button-v6.1.0.xd\",\"description\":\"Radio button \",\"pageType\":\"file\",\"query\":\"\",\"type\":\"xd\"},{\"id\":427,\"name\":\"Rating\",\"slug\":\"Rating-v2.0.0.xd\",\"description\":\"Rating \",\"pageType\":\"file\",\"query\":\"\",\"type\":\"xd\"},{\"id\":428,\"name\":\"Side navigation\",\"slug\":\"Side-navigation-v5.0.1.xd\",\"description\":\"Side navigation \",\"pageType\":\"file\",\"query\":\"\",\"type\":\"xd\"},{\"id\":429,\"name\":\"Slider\",\"slug\":\"Slider-v5.1.0.xd\",\"description\":\"Slider \",\"pageType\":\"file\",\"query\":\"\",\"type\":\"xd\"},{\"id\":430,\"name\":\"Status light\",\"slug\":\"Status-light-v5.1.0.xd\",\"description\":\"Status light \",\"pageType\":\"file\",\"query\":\"\",\"type\":\"xd\"},{\"id\":431,\"name\":\"Switch\",\"slug\":\"Switch-v6.1.0.xd\",\"description\":\"Switch \",\"pageType\":\"file\",\"query\":\"\",\"type\":\"xd\"},{\"id\":432,\"name\":\"Table\",\"slug\":\"Table-v5.0.0.xd\",\"description\":\"Table \",\"pageType\":\"file\",\"query\":\"\",\"type\":\"xd\"},{\"id\":433,\"name\":\"Tabs\",\"slug\":\"Tabs-v5.1.0.xd\",\"description\":\"Tabs \",\"pageType\":\"file\",\"query\":\"\",\"type\":\"xd\"},{\"id\":434,\"name\":\"Tag\",\"slug\":\"Tag-v5.1.0.xd\",\"description\":\"Tag \",\"pageType\":\"file\",\"query\":\"\",\"type\":\"xd\"},{\"id\":435,\"name\":\"Text field\",\"slug\":\"Text-field-v5.1.0.xd\",\"description\":\"Text field input field\",\"pageType\":\"file\",\"query\":\"\",\"type\":\"xd\"},{\"id\":436,\"name\":\"Toast\",\"slug\":\"Toast-v5.0.0.xd\",\"description\":\"Toast \",\"pageType\":\"file\",\"query\":\"\",\"type\":\"xd\"},{\"id\":437,\"name\":\"Tool\",\"slug\":\"Tool-v5.0.0.xd\",\"description\":\"Tool \",\"pageType\":\"file\",\"query\":\"\",\"type\":\"xd\"},{\"id\":438,\"name\":\"Tooltip\",\"slug\":\"Tooltip-v5.1.0.xd\",\"description\":\"Tooltip \",\"pageType\":\"file\",\"query\":\"\",\"type\":\"xd\"},{\"id\":439,\"name\":\"Checkbox\",\"slug\":\"Checkbox-v6.1.0.xd\",\"description\":\"Checkbox \",\"pageType\":\"file\",\"query\":\"\",\"type\":\"xd\"},{\"id\":440,\"name\":\"Color\",\"slug\":\"Color-v5.0.0.xd\",\"description\":\"Color \",\"pageType\":\"file\",\"query\":\"\",\"type\":\"xd\"},{\"id\":441,\"name\":\"Typography\",\"slug\":\"Typography-v5.0.0.xd\",\"description\":\"Typography \",\"pageType\":\"file\",\"query\":\"\",\"type\":\"xd\"},{\"id\":442,\"name\":\"Object styles\",\"slug\":\"Object-styles-v5.0.0.xd\",\"description\":\"Object styles \",\"pageType\":\"file\",\"query\":\"\",\"type\":\"xd\"},{\"id\":443,\"name\":\"Motion\",\"slug\":\"Motion-v5.0.0.xd\",\"description\":\"Motion \",\"pageType\":\"file\",\"query\":\"\",\"type\":\"xd\"},{\"id\":444,\"name\":\"Application frame\",\"slug\":\"Application-frame-v5.0.0.xd\",\"description\":\"Application frame \",\"pageType\":\"file\",\"query\":\"\",\"type\":\"xd\"},{\"id\":445,\"name\":\"Responsive grid\",\"slug\":\"Responsive-grid-v5.0.0.xd\",\"description\":\"Responsive grid \",\"pageType\":\"file\",\"query\":\"\",\"type\":\"xd\"},{\"id\":446,\"name\":\"Popovers\",\"slug\":\"Popovers-v5.0.0.xd\",\"description\":\"Popovers \",\"pageType\":\"file\",\"query\":\"\",\"type\":\"xd\"},{\"id\":447,\"name\":\"Trays\",\"slug\":\"Trays-v5.0.0.xd\",\"description\":\"Trays \",\"pageType\":\"file\",\"query\":\"\",\"type\":\"xd\"},{\"id\":448,\"name\":\"Headers\",\"slug\":\"Headers-v1.0.0.xd\",\"description\":\"Headers \",\"pageType\":\"file\",\"query\":\"\",\"type\":\"xd\"}]");

/***/ }),

/***/ "./data/yml lazy recursive ^\\.\\/.*\\.yml$":
/*!******************************************************!*\
  !*** ./data/yml lazy ^\.\/.*\.yml$ namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./barloader.yml": [
		"./data/yml/barloader.yml",
		0
	],
	"./checkbox.yml": [
		"./data/yml/checkbox.yml",
		1
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__.t(id, 7);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./data/yml lazy recursive ^\\.\\/.*\\.yml$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            _Object$defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! next-server/dist/lib/router/rewrite-url-for-export */ "next-server/dist/lib/router/rewrite-url-for-export");

var _utils = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");
/* global __NEXT_DATA__ */


function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new _map.default();
const IntersectionObserver = false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    observer.unobserve(el);
    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    const {
      pathname
    } = window.location;
    const {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    const href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

    };

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (true) {
      if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
        props.href = (0, _rewriteUrlForExport.rewriteUrlForNextExport)(props.href);
      }
    }

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (true) {
  const warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  const exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {
      const value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! next-server/dist/lib/router/router */ "next-server/dist/lib/router/router"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! next-server/dist/lib/router-context */ "next-server/dist/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    const router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      const eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

function withRouter(ComposedComponent) {
  class WithRouteWrapper extends _react.default.Component {
    constructor() {
      super(...arguments);
      this.context = void 0;
    }

    render() {
      return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
        router: this.context.router
      }, this.props));
    }

  }

  WithRouteWrapper.displayName = void 0;
  WithRouteWrapper.getInitialProps = void 0;
  WithRouteWrapper.contextTypes = {
    router: _propTypes.default.object
  };
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouteWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouteWrapper;
}

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/components/[id].js":
/*!**********************************!*\
  !*** ./pages/components/[id].js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_MyLayout_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/MyLayout.js */ "./components/MyLayout.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _react_react_spectrum_Provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @react/react-spectrum/Provider */ "@react/react-spectrum/Provider");
/* harmony import */ var _react_react_spectrum_Provider__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_react_react_spectrum_Provider__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Sidebar */ "./components/Sidebar.js");
/* harmony import */ var _css_main_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../css/main.scss */ "./css/main.scss");
/* harmony import */ var _css_main_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_css_main_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "/Users/garthdb/Spectrum/spectrum-css/pages/components/[id].js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










async function loadData(id) {
  let data = await __webpack_require__("./data/yml lazy recursive ^\\.\\/.*\\.yml$")(`./${id}.yml`);
  console.log({
    data
  });
  return "poop";
}

class Page extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props); //console.log(publicRuntimeConfig.ENVIRONMENT);
  }

  static async getInitialProps() {
    const node_env = "development";
    return {
      node_env
    };
  }

  render() {
    var examplesList = this.props.pageData.examples.map(function (example) {
      return __jsx("div", {
        key: example.slug,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, __jsx("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, example.name), __jsx("pre", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, __jsx("code", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, example.markup)), __jsx("div", {
        dangerouslySetInnerHTML: {
          __html: example.markup
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }));
    });
    return __jsx(_components_MyLayout_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, __jsx(react_helmet__WEBPACK_IMPORTED_MODULE_4__["Helmet"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, __jsx("meta", {
      name: "viewport",
      content: "initial-scale=1.0, width=device-width",
      key: "viewport",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }), __jsx("link", {
      rel: "icon",
      type: "image/x-icon",
      href: "/static/favicon.png",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }), __jsx("link", {
      type: "text/css",
      rel: "stylesheet",
      href: "https://wwwimages2.adobe.com/etc/beagle/public/globalnav/adobe-globalnav/latest/adobe-globalnav.min.css",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    })), __jsx(_react_react_spectrum_Provider__WEBPACK_IMPORTED_MODULE_5___default.a, {
      theme: "light",
      scale: "medium",
      typekitId: "uma8ayv",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, __jsx("div", {
      style: {
        display: "flex"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, __jsx("div", {
      style: {
        width: "248px"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, __jsx(_components_Sidebar__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    })), __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_8___default()('afg-container-fluid', _css_main_scss__WEBPACK_IMPORTED_MODULE_7___default.a.mainContainer),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, __jsx("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, this.props.pageData.name), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, this.props.pageData.description), __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, __jsx("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, "Examples"), examplesList)))));
  }

}

Page.getInitialProps = async function (context) {
  const {
    id
  } = context.query;
  const pageData = await __webpack_require__("./data/yml lazy recursive ^\\.\\/.*\\.yml$")(`./${id}.yml`);
  return {
    pageData: pageData.default
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(Page));

/***/ }),

/***/ 3:
/*!****************************************!*\
  !*** multi ./pages/components/[id].js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/garthdb/Spectrum/spectrum-css/pages/components/[id].js */"./pages/components/[id].js");


/***/ }),

/***/ "@react/react-spectrum/Button":
/*!***********************************************!*\
  !*** external "@react/react-spectrum/Button" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@react/react-spectrum/Button");

/***/ }),

/***/ "@react/react-spectrum/Icon/ShowMenu":
/*!******************************************************!*\
  !*** external "@react/react-spectrum/Icon/ShowMenu" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@react/react-spectrum/Icon/ShowMenu");

/***/ }),

/***/ "@react/react-spectrum/Provider":
/*!*************************************************!*\
  !*** external "@react/react-spectrum/Provider" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@react/react-spectrum/Provider");

/***/ }),

/***/ "@react/react-spectrum/Search":
/*!***********************************************!*\
  !*** external "@react/react-spectrum/Search" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@react/react-spectrum/Search");

/***/ }),

/***/ "@react/react-spectrum/SideNav":
/*!************************************************!*\
  !*** external "@react/react-spectrum/SideNav" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@react/react-spectrum/SideNav");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "lunr":
/*!***********************!*\
  !*** external "lunr" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lunr");

/***/ }),

/***/ "next-server/dist/lib/router-context":
/*!******************************************************!*\
  !*** external "next-server/dist/lib/router-context" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router-context");

/***/ }),

/***/ "next-server/dist/lib/router/rewrite-url-for-export":
/*!*********************************************************************!*\
  !*** external "next-server/dist/lib/router/rewrite-url-for-export" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/rewrite-url-for-export");

/***/ }),

/***/ "next-server/dist/lib/router/router":
/*!*****************************************************!*\
  !*** external "next-server/dist/lib/router/router" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/router");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "next/config":
/*!******************************!*\
  !*** external "next/config" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/config");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=[id].js.map