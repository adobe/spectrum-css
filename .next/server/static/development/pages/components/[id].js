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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "./data/yml lazy recursive ^\\.\\/.*\\.yml$":
/*!******************************************************!*\
  !*** ./data/yml lazy ^\.\/.*\.yml$ namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./accordion.yml": [
		"./data/yml/accordion.yml",
		0
	],
	"./actionbar.yml": [
		"./data/yml/actionbar.yml",
		1
	],
	"./actionbutton.yml": [
		"./data/yml/actionbutton.yml",
		2
	],
	"./actionmenu.yml": [
		"./data/yml/actionmenu.yml",
		3
	],
	"./alert.yml": [
		"./data/yml/alert.yml",
		4
	],
	"./asset.yml": [
		"./data/yml/asset.yml",
		5
	],
	"./assetlist.yml": [
		"./data/yml/assetlist.yml",
		6
	],
	"./avatar.yml": [
		"./data/yml/avatar.yml",
		7
	],
	"./banner.yml": [
		"./data/yml/banner.yml",
		8
	],
	"./barloader.yml": [
		"./data/yml/barloader.yml",
		9
	],
	"./breadcrumb.yml": [
		"./data/yml/breadcrumb.yml",
		10
	],
	"./button-cta.yml": [
		"./data/yml/button-cta.yml",
		11
	],
	"./button-over-background.yml": [
		"./data/yml/button-over-background.yml",
		12
	],
	"./button-primary.yml": [
		"./data/yml/button-primary.yml",
		13
	],
	"./button-secondary.yml": [
		"./data/yml/button-secondary.yml",
		14
	],
	"./button-warning.yml": [
		"./data/yml/button-warning.yml",
		15
	],
	"./buttongroup.yml": [
		"./data/yml/buttongroup.yml",
		16
	],
	"./calendar.yml": [
		"./data/yml/calendar.yml",
		17
	],
	"./card-asset.yml": [
		"./data/yml/card-asset.yml",
		18
	],
	"./card-gallery.yml": [
		"./data/yml/card-gallery.yml",
		19
	],
	"./card.yml": [
		"./data/yml/card.yml",
		20
	],
	"./checkbox.yml": [
		"./data/yml/checkbox.yml",
		21
	],
	"./circleloader.yml": [
		"./data/yml/circleloader.yml",
		22
	],
	"./clearbutton.yml": [
		"./data/yml/clearbutton.yml",
		23
	],
	"./coachmark.yml": [
		"./data/yml/coachmark.yml",
		24
	],
	"./combobox.yml": [
		"./data/yml/combobox.yml",
		25
	],
	"./cyclebutton.yml": [
		"./data/yml/cyclebutton.yml",
		26
	],
	"./datepicker.yml": [
		"./data/yml/datepicker.yml",
		27
	],
	"./decoratedtextfield.yml": [
		"./data/yml/decoratedtextfield.yml",
		28
	],
	"./dial.yml": [
		"./data/yml/dial.yml",
		29
	],
	"./dialog.yml": [
		"./data/yml/dialog.yml",
		30
	],
	"./dropdown.yml": [
		"./data/yml/dropdown.yml",
		31
	],
	"./dropindicator.yml": [
		"./data/yml/dropindicator.yml",
		32
	],
	"./dropzone.yml": [
		"./data/yml/dropzone.yml",
		33
	],
	"./fieldgroup.yml": [
		"./data/yml/fieldgroup.yml",
		34
	],
	"./fieldlabel.yml": [
		"./data/yml/fieldlabel.yml",
		35
	],
	"./form.yml": [
		"./data/yml/form.yml",
		36
	],
	"./illustratedmessage.yml": [
		"./data/yml/illustratedmessage.yml",
		37
	],
	"./label.yml": [
		"./data/yml/label.yml",
		38
	],
	"./link.yml": [
		"./data/yml/link.yml",
		39
	],
	"./logicbutton.yml": [
		"./data/yml/logicbutton.yml",
		40
	],
	"./menu.yml": [
		"./data/yml/menu.yml",
		41
	],
	"./meter.yml": [
		"./data/yml/meter.yml",
		42
	],
	"./miller.yml": [
		"./data/yml/miller.yml",
		43
	],
	"./page.yml": [
		"./data/yml/page.yml",
		44
	],
	"./pagination-button-style.yml": [
		"./data/yml/pagination-button-style.yml",
		45
	],
	"./pagination-explicit.yml": [
		"./data/yml/pagination-explicit.yml",
		46
	],
	"./pagination-listing.yml": [
		"./data/yml/pagination-listing.yml",
		47
	],
	"./popover.yml": [
		"./data/yml/popover.yml",
		48
	],
	"./quickaction.yml": [
		"./data/yml/quickaction.yml",
		49
	],
	"./radio.yml": [
		"./data/yml/radio.yml",
		50
	],
	"./rating.yml": [
		"./data/yml/rating.yml",
		51
	],
	"./rule.yml": [
		"./data/yml/rule.yml",
		52
	],
	"./search.yml": [
		"./data/yml/search.yml",
		53
	],
	"./searchwithin.yml": [
		"./data/yml/searchwithin.yml",
		54
	],
	"./sidenav.yml": [
		"./data/yml/sidenav.yml",
		55
	],
	"./slider.yml": [
		"./data/yml/slider.yml",
		56
	],
	"./splitbutton.yml": [
		"./data/yml/splitbutton.yml",
		57
	],
	"./splitview.yml": [
		"./data/yml/splitview.yml",
		58
	],
	"./statuslight.yml": [
		"./data/yml/statuslight.yml",
		59
	],
	"./steplist.yml": [
		"./data/yml/steplist.yml",
		60
	],
	"./stepper.yml": [
		"./data/yml/stepper.yml",
		61
	],
	"./table.yml": [
		"./data/yml/table.yml",
		62
	],
	"./tabs.yml": [
		"./data/yml/tabs.yml",
		63
	],
	"./tags.yml": [
		"./data/yml/tags.yml",
		64
	],
	"./textarea.yml": [
		"./data/yml/textarea.yml",
		65
	],
	"./textfield.yml": [
		"./data/yml/textfield.yml",
		66
	],
	"./toast.yml": [
		"./data/yml/toast.yml",
		67
	],
	"./toggle.yml": [
		"./data/yml/toggle.yml",
		68
	],
	"./tool.yml": [
		"./data/yml/tool.yml",
		69
	],
	"./tooltip.yml": [
		"./data/yml/tooltip.yml",
		70
	],
	"./treeview.yml": [
		"./data/yml/treeview.yml",
		71
	],
	"./typography-deprecated.yml": [
		"./data/yml/typography-deprecated.yml",
		72
	],
	"./typography-international.yml": [
		"./data/yml/typography-international.yml",
		73
	],
	"./typography.yml": [
		"./data/yml/typography.yml",
		74
	],
	"./well.yml": [
		"./data/yml/well.yml",
		75
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
/* harmony import */ var _css_main_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../css/main.scss */ "./css/main.scss");
/* harmony import */ var _css_main_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_main_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/garthdb/Spectrum/spectrum-css/pages/components/[id].js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






async function loadData(id) {
  let data = await __webpack_require__("./data/yml lazy recursive ^\\.\\/.*\\.yml$")(`./${id}.yml`);
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
    let examplesList = 'no examples';

    if (this.props.pageData.hasOwnProperty('examples')) {
      examplesList = this.props.pageData.examples.map(function (example) {
        return __jsx("div", {
          key: example.slug,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          },
          __self: this
        }, __jsx("h3", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          },
          __self: this
        }, example.name), __jsx("pre", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          },
          __self: this
        }, __jsx("code", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          },
          __self: this
        }, example.markup)), __jsx("div", {
          dangerouslySetInnerHTML: {
            __html: example.markup
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          },
          __self: this
        }));
      });
    }

    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()('afg-container-fluid', _css_main_scss__WEBPACK_IMPORTED_MODULE_3___default.a.mainContainer),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, __jsx("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, this.props.pageData.name), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, this.props.pageData.description), __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, __jsx("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, "Examples"), examplesList))));
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

/***/ 5:
/*!****************************************!*\
  !*** multi ./pages/components/[id].js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/garthdb/Spectrum/spectrum-css/pages/components/[id].js */"./pages/components/[id].js");


/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

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

/***/ })

/******/ });
//# sourceMappingURL=[id].js.map