webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/SiteSearch.js":
/*!**********************************!*\
  !*** ./components/SiteSearch.js ***!
  \**********************************/
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
/* harmony import */ var _react_react_spectrum_Search__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @react/react-spectrum/Search */ "./node_modules/@react/react-spectrum/Search/index.js");
/* harmony import */ var _react_react_spectrum_Search__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_react_react_spectrum_Search__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./css/siteSearch.scss */ "./components/css/siteSearch.scss");
/* harmony import */ var _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var lunr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lunr */ "./node_modules/lunr/lunr.js");
/* harmony import */ var lunr__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lunr__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _data_search_store__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../data/search_store */ "./data/search_store.json");
var _data_search_store__WEBPACK_IMPORTED_MODULE_13___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/search_store */ "./data/search_store.json", 1);
/* harmony import */ var _data_search_index__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../data/search_index */ "./data/search_index.json");
var _data_search_index__WEBPACK_IMPORTED_MODULE_14___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/search_index */ "./data/search_index.json", 1);







var _jsxFileName = "/Users/garthdb/Spectrum/spectrum-css/components/SiteSearch.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;








var SiteSearch =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(SiteSearch, _React$Component);

  function SiteSearch(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SiteSearch);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(SiteSearch).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "resetSearch", function () {
      _this.setState({
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
        searchVal: "",
        numResults: 0,
        kbSelectedIndex: 0,
        kbSelectedLink: undefined,
        kbSelectedType: undefined
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "focusOnSearchItem", function (index) {
      _this.setState({
        kbSelectedIndex: index
      });

      var searchEl = document.getElementById("".concat(index, "_search"));

      if (searchEl) {
        searchEl.focus();
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleSearchKeyPress", function (e) {
      if (_this.state.numResults !== 0) {
        switch (e.key) {
          case "Enter":
            if (_this.state.numResults !== 0) {
              // Navigate to the first search result
              var searchEl = document.getElementById('0_search');
              searchEl.click();
            }

            break;

          case "Tab":
          case "ArrowDown":
            _this.openMenu();

            _this.focusOnSearchItem(0);

            e.preventDefault();
            break;
        }
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleKeyPress", function (e) {
      if (_this.state.menuOpen) {
        var index;

        switch (e.key) {
          case "ArrowDown":
            index = _this.state.kbSelectedIndex == _this.state.numResults - 1 ? 0 : _this.state.kbSelectedIndex + 1;

            _this.focusOnSearchItem(index);

            e.preventDefault();
            break;

          case "ArrowUp":
            index = _this.state.kbSelectedIndex == 0 ? _this.state.numResults - 1 : _this.state.kbSelectedIndex - 1;

            _this.focusOnSearchItem(index);

            e.preventDefault();
            break;

          case "Home":
            _this.focusOnSearchItem(0);

            e.preventDefault();
            break;

          case "End":
            _this.focusOnSearchItem(_this.state.numResults - 1);

            e.preventDefault();
            break;

          case "Tab":
            if (e.shiftKey && _this.state.kbSelectedIndex == 0) {
              e.preventDefault();

              _this.focusOnSearch();
            }

            break;

          case "Escape":
            _this.focusOnSearch();

            _this.closeMenu();

            e.preventDefault();
            break;
        }
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "focusOnSearch", function () {
      var field = _this.searchContainer.current.querySelector('.spectrum-Search-input');

      if (field) {
        field.focus();
      }

      _this.setState({
        kbSelectedIndex: -1
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "getHREF", function (slug, type, query) {
      var q = query ? "#".concat(query.replace(/ /g, "-")) : "#";

      if (type === "Internal") {
        return "/page/".concat(slug).concat(q);
      }

      return slug;
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "search", function (val) {
      _this.setState({
        searchVal: val
      });

      var usageGuidelines = [];
      var components = [];
      var foundation = [];
      var behaviors = [];
      var files = [];
      var contributions = [];
      var resources = [];
      var tutorials = [];
      var r = [];

      if (val.length > 2) {
        var searchParam = "".concat(val.trim(), " ").concat(val.trim(), "*");
        r = _this.idx.search(searchParam + "*");
      }

      var length = 0;
      r.forEach(function (item, i) {
        var storeItem = _data_search_store__WEBPACK_IMPORTED_MODULE_13__[item.ref];

        if (storeItem.type == "usageGuideline") {
          length++;
          usageGuidelines.push(storeItem);
        } else if (storeItem.type === "page" && storeItem.pageType === "Component") {
          length++;
          components.push(storeItem);
        } else if (storeItem.type === "Behavior") {
          length++;
          behaviors.push(storeItem);
        } else if (storeItem.type === "page" && storeItem.pageType === "Foundation") {
          length++;
          foundation.push(storeItem);
        } else if (storeItem.type === "page" && storeItem.pageType === "Resources") {
          length++;
          resources.push(storeItem);
        } else if (storeItem.type === "Tutorial") {
          length++;
          tutorials.push(storeItem);
        } else if (storeItem.type === "xd") {
          length++;
          files.push(storeItem);
        } else if (storeItem.type === "contribution") {
          length++;
          contributions.push(storeItem);
        }
      });

      _this.setState({
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "closeMenu", function (e) {
      setTimeout(function () {
        this.setState({
          menuOpen: false,
          kbSelectedIndex: 0
        }); // Workaround: React Spectrum incorrectly assigns this attribute to the <input>, it should be on the outer <div>

        var searchComponent = this.searchContainer.current.querySelector('.spectrum-Search');
        searchComponent.setAttribute('aria-expanded', 'false');
      }.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this)), 100);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "openMenu", function () {
      _this.setState({
        menuOpen: true
      }); // Workaround: React Spectrum incorrectly assigns this attribute to the <input>, it should be on the outer <div>


      var searchComponent = _this.searchContainer.current.querySelector('.spectrum-Search');

      searchComponent.setAttribute('aria-expanded', 'true');
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "getHighlighted", function (index) {
      if (index === _this.state.kbSelectedIndex) {
        return _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_11___default.a['is-highlighted'];
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "componentDidMount", function () {
      // Workaround: React Spectrum incorrectly assigns the following attributes to the <input>, they should be on the outer <div>
      var searchComponent = _this.searchContainer.current.querySelector('.spectrum-Search');

      searchComponent.setAttribute('aria-haspopup', 'listbox');
      searchComponent.setAttribute('aria-owns', 'search-results-listbox');
      searchComponent.setAttribute('aria-expanded', 'false'); // Workaround: React Spectrum incorrectly assigns searchbox here, it needs to be textbox or aXe has a conniption

      var searchInput = _this.searchContainer.current.querySelector('.spectrum-Search-input');

      searchInput.setAttribute('role', 'textbox');
      searchInput.setAttribute('type', 'text');
    });

    _this.state = {
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
      searchVal: "",
      numResults: 0,
      kbSelectedIndex: 0,
      kbSelectedLink: undefined,
      kbSelectedType: undefined,
      searchIndex: undefined,
      searchLoaded: true
    };
    _this.searchContainer = react__WEBPACK_IMPORTED_MODULE_7___default.a.createRef(); //const res = await fetch(`${publicRuntimeConfig.API}/getSearchIndex`)
    //const data = await res.json();

    _this.idx = lunr__WEBPACK_IMPORTED_MODULE_12___default.a.Index.load(_data_search_index__WEBPACK_IMPORTED_MODULE_14__); //this.setState({searchIndex: data});

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SiteSearch, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var searchIndex = -1;
      return __jsx("div", {
        className: _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_11___default.a.searchContainer,
        ref: this.searchContainer,
        role: "search",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 276
        },
        __self: this
      }, __jsx("div", {
        className: _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_11___default.a.overlay,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 281
        },
        __self: this
      }), __jsx(_react_react_spectrum_Search__WEBPACK_IMPORTED_MODULE_8___default.a, {
        role: "combobox",
        "aria-autocomplete": "list",
        "aria-label": "Search",
        placeholder: "Search",
        defaultValue: "",
        value: this.state.searchVal,
        style: {
          width: "100%"
        },
        onChange: function onChange(e) {
          _this2.search(e);

          _this2.openMenu();
        },
        onFocus: function onFocus(e) {
          _this2.openMenu();
        },
        onKeyDown: function onKeyDown(e) {
          _this2.handleSearchKeyPress(e);
        },
        disabled: !this.state.searchLoaded,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 282
        },
        __self: this
      }), __jsx("div", {
        onClick: function onClick(e) {
          _this2.closeMenu();
        },
        className: classnames__WEBPACK_IMPORTED_MODULE_10___default()(_css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_11___default.a.overlay, this.state.menuOpen && this.state.searchVal.length > 2 ? _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_11___default.a.overlayOpen : undefined),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 302
        },
        __self: this
      }), __jsx("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_10___default()(_css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_11___default.a.results, this.state.menuOpen && this.state.searchVal.length > 2 ? _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_11___default.a.open : undefined),
        onKeyDown: this.handleKeyPress,
        id: "search-results-listbox",
        role: "listbox",
        "aria-label": "Search",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 313
        },
        __self: this
      }, this.state.numResults === 0 ? __jsx("div", {
        className: _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_11___default.a.noResultsContainer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 326
        },
        __self: this
      }, __jsx("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_10___default()("spectrum-Heading2--quiet", _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_11___default.a.noResults),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 327
        },
        __self: this
      }, "No results found"), __jsx("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_10___default()("spectrum-Body4", _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_11___default.a.noResulsSub),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 335
        },
        __self: this
      }, __jsx("em", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 336
        },
        __self: this
      }, "Try another search term."))) : undefined, this.state.foundation.length ? __jsx("div", {
        className: _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_11___default.a.resultContainer,
        role: "group",
        "aria-labelledby": "results_Foundation",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 343
        },
        __self: this
      }, __jsx("div", {
        className: _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_11___default.a.header,
        role: "presentation",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 344
        },
        __self: this
      }, __jsx("h4", {
        className: "spectrum-Heading--subtitle3",
        "aria-hidden": "true",
        id: "results_Foundation",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 345
        },
        __self: this
      }, "Foundation")), __jsx("ul", {
        className: _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_11___default.a.resultSet,
        role: "presentation",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 347
        },
        __self: this
      }, this.state.foundation.map(function (result, i) {
        return __jsx("li", {
          key: i,
          role: "presentation",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 349
          },
          __self: this
        }, __jsx("a", {
          role: "option",
          id: "".concat(++searchIndex, "_search"),
          className: classnames__WEBPACK_IMPORTED_MODULE_10___default()("spectrum-Body4", _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_11___default.a.listItem, _this2.getHighlighted(searchIndex)),
          href: _this2.getHREF(result.slug, "Internal"),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 349
          },
          __self: this
        }, result.name));
      }))) : undefined, this.state.components.length ? __jsx("div", {
        className: _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_11___default.a.resultContainer,
        role: "group",
        "aria-labelledby": "results_Components",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 368
        },
        __self: this
      }, __jsx("div", {
        className: _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_11___default.a.header,
        role: "presentation",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 369
        },
        __self: this
      }, __jsx("h4", {
        className: "spectrum-Heading--subtitle3",
        "aria-hidden": "true",
        id: "results_Components",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 370
        },
        __self: this
      }, "Components")), __jsx("ul", {
        className: _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_11___default.a.resultSet,
        role: "presentation",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 372
        },
        __self: this
      }, this.state.components.map(function (result, i) {
        return __jsx("li", {
          key: i,
          role: "presentation",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 374
          },
          __self: this
        }, __jsx("a", {
          role: "option",
          id: "".concat(++searchIndex, "_search"),
          className: classnames__WEBPACK_IMPORTED_MODULE_10___default()("spectrum-Body4", _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_11___default.a.listItem, _this2.getHighlighted(searchIndex)),
          href: _this2.getHREF(result.slug, "Internal"),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 374
          },
          __self: this
        }, result.name));
      }))) : undefined, this.state.resources.length ? __jsx("div", {
        className: _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_11___default.a.resultContainer,
        role: "group",
        "aria-labelledby": "results_Resources",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 394
        },
        __self: this
      }, __jsx("div", {
        className: _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_11___default.a.header,
        role: "presentation",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 395
        },
        __self: this
      }, __jsx("h4", {
        className: "spectrum-Heading--subtitle3",
        "aria-hidden": "true",
        id: "results_Resources",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 396
        },
        __self: this
      }, "Resources")), __jsx("ul", {
        className: _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_11___default.a.resultSet,
        role: "presentation",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 398
        },
        __self: this
      }, this.state.resources.map(function (result, i) {
        return __jsx("li", {
          key: i,
          role: "presentation",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 400
          },
          __self: this
        }, __jsx("a", {
          role: "option",
          id: "".concat(++searchIndex, "_search"),
          className: classnames__WEBPACK_IMPORTED_MODULE_10___default()("spectrum-Body4", _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_11___default.a.listItem, _this2.getHighlighted(searchIndex)),
          href: _this2.getHREF(result.slug, "Internal"),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 400
          },
          __self: this
        }, result.name));
      }))) : undefined, this.state.usageGuidelines.length ? __jsx("div", {
        className: _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_11___default.a.resultContainer,
        role: "group",
        "aria-labelledby": "results_UsageGuidelines",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 419
        },
        __self: this
      }, __jsx("div", {
        className: _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_11___default.a.header,
        role: "presentation",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 420
        },
        __self: this
      }, __jsx("h4", {
        className: "spectrum-Heading--subtitle3",
        "aria-hidden": "true",
        id: "results_UsageGuidelines",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 421
        },
        __self: this
      }, "Usage Guidelines")), __jsx("ul", {
        className: _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_11___default.a.resultSet,
        role: "presentation",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 423
        },
        __self: this
      }, this.state.usageGuidelines.map(function (result, i) {
        return __jsx("li", {
          key: i,
          role: "presentation",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 425
          },
          __self: this
        }, __jsx("a", {
          role: "option",
          id: "".concat(++searchIndex, "_search"),
          className: classnames__WEBPACK_IMPORTED_MODULE_10___default()("spectrum-Body4", _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_11___default.a.listItem, _this2.getHighlighted(searchIndex)),
          href: _this2.getHREF(result.slug, "Internal", result.query),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 425
          },
          __self: this
        }, __jsx("div", {
          className: classnames__WEBPACK_IMPORTED_MODULE_10___default()("spectrum-Body5", _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_11___default.a.subHeader),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 435
          },
          __self: this
        }, result.pageType, " ", __jsx("span", {
          "aria-hidden": "true",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 438
          },
          __self: this
        }, ">"), " ", result.name), __jsx("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 440
          },
          __self: this
        }, result.display_description)));
      }))) : undefined, this.state.behaviors.length ? __jsx("div", {
        className: _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_11___default.a.resultContainer,
        role: "group",
        "aria-labelledby": "results_Behaviors",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 450
        },
        __self: this
      }, __jsx("div", {
        className: _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_11___default.a.header,
        role: "presentation",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 451
        },
        __self: this
      }, __jsx("h4", {
        className: "spectrum-Heading--subtitle3",
        "aria-hidden": "true",
        id: "results_Behaviors",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 452
        },
        __self: this
      }, "Behaviors")), __jsx("ul", {
        className: _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_11___default.a.resultSet,
        role: "presentation",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 454
        },
        __self: this
      }, this.state.behaviors.map(function (result, i) {
        return __jsx("li", {
          key: i,
          role: "presentation",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 456
          },
          __self: this
        }, __jsx("a", {
          role: "option",
          id: "".concat(++searchIndex, "_search"),
          className: classnames__WEBPACK_IMPORTED_MODULE_10___default()("spectrum-Body4", _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_11___default.a.listItem, _this2.getHighlighted(searchIndex)),
          href: _this2.getHREF(result.slug, "Internal", result.query),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 456
          },
          __self: this
        }, __jsx("div", {
          className: classnames__WEBPACK_IMPORTED_MODULE_10___default()("spectrum-Body5", _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_11___default.a.subHeader),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 466
          },
          __self: this
        }, result.pageType, " ", __jsx("span", {
          "aria-hidden": "true",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 469
          },
          __self: this
        }, ">"), " ", result.name), __jsx("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 471
          },
          __self: this
        }, result.display_description)));
      }))) : undefined, this.state.files.length ? __jsx("div", {
        className: _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_11___default.a.resultContainer,
        role: "group",
        "aria-labelledby": "results_Downloads",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 481
        },
        __self: this
      }, __jsx("div", {
        className: _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_11___default.a.header,
        role: "presentation",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 482
        },
        __self: this
      }, __jsx("h4", {
        className: "spectrum-Heading--subtitle3",
        "aria-hidden": "true",
        id: "results_Downloads",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 483
        },
        __self: this
      }, "Downloads")), __jsx("ul", {
        className: _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_11___default.a.resultSet,
        role: "presentation",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 485
        },
        __self: this
      }, this.state.files.map(function (result, i) {
        return __jsx("li", {
          key: i,
          role: "presentation",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 487
          },
          __self: this
        }, __jsx("a", {
          role: "option",
          id: "".concat(++searchIndex, "_search"),
          className: classnames__WEBPACK_IMPORTED_MODULE_10___default()("spectrum-Body4", _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_11___default.a.listItem, _this2.getHighlighted(searchIndex)),
          target: "_blank",
          href: _this2.getHREF("/static/resources/Latest/".concat(result.slug), "File"),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 487
          },
          __self: this
        }, __jsx("div", {
          className: _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_11___default.a.file,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 498
          },
          __self: this
        }, __jsx("div", {
          className: _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_11___default.a.icon,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 499
          },
          __self: this
        }, __jsx("img", {
          src: "/static/icon_xd_small@2x.png",
          alt: "XD File",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 500
          },
          __self: this
        })), result.slug)));
      }))) : undefined, this.state.tutorials.length ? __jsx("div", {
        className: _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_11___default.a.resultContainer,
        role: "group",
        "aria-labelledby": "results_Tutorials",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 512
        },
        __self: this
      }, __jsx("div", {
        className: _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_11___default.a.header,
        role: "presentation",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 513
        },
        __self: this
      }, __jsx("h4", {
        className: "spectrum-Heading--subtitle3",
        "aria-hidden": "true",
        id: "results_Tutorials",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 514
        },
        __self: this
      }, "Tutorials")), __jsx("ul", {
        className: _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_11___default.a.resultSet,
        role: "presentation",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 516
        },
        __self: this
      }, this.state.tutorials.map(function (result, i) {
        return __jsx("li", {
          key: i,
          role: "presentation",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 518
          },
          __self: this
        }, __jsx("a", {
          role: "option",
          id: "".concat(++searchIndex, "_search"),
          className: classnames__WEBPACK_IMPORTED_MODULE_10___default()("spectrum-Body4", _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_11___default.a.listItem, _this2.getHighlighted(searchIndex)),
          target: "_blank",
          onClick: _this2.getHREF(result.slug, "External"),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 518
          },
          __self: this
        }, result.name));
      }))) : undefined, this.state.contributions.length ? __jsx("div", {
        className: _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_11___default.a.resultContainer,
        role: "group",
        "aria-labelledby": "results_Contributions",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 538
        },
        __self: this
      }, __jsx("div", {
        className: _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_11___default.a.header,
        role: "presentation",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 539
        },
        __self: this
      }, __jsx("h4", {
        className: "spectrum-Heading--subtitle3",
        "aria-hidden": "true",
        id: "results_Contributions",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 540
        },
        __self: this
      }, "Contributions")), __jsx("ul", {
        className: _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_11___default.a.resultSet,
        role: "presentation",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 542
        },
        __self: this
      }, this.state.contributions.map(function (result, i) {
        return __jsx("li", {
          key: i,
          role: "presentation",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 544
          },
          __self: this
        }, __jsx("a", {
          role: "option",
          id: "".concat(++searchIndex, "_search"),
          className: classnames__WEBPACK_IMPORTED_MODULE_10___default()("spectrum-Body4", _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_11___default.a.listItem, _this2.getHighlighted(searchIndex)),
          target: "_blank",
          href: _this2.getHREF("https://spectrum-contributions.corp.adobe.com/submissions/".concat(result.slug), "External"),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 544
          },
          __self: this
        }, __jsx("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 558
          },
          __self: this
        }, result.description)));
      }))) : undefined));
    }
  }]);

  return SiteSearch;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (SiteSearch);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js":
false,

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
false

})
//# sourceMappingURL=_app.js.bab19f62ccc2ef245e5b.hot-update.js.map