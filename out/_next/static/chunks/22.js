(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

/***/ "./data/yml/checkbox.yml":
/*!*******************************!*\
  !*** ./data/yml/checkbox.yml ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

const doc = [({"name":"Checkbox", "status":"Verified", "description":"Checkboxes allow users to select multiple items from a list of individual items, or mark one individual item as selected.", "examples":[({"id":"checkbox-default", "name":"Standard", "markup":"<label class=\"spectrum-Checkbox\">\n  <input type=\"checkbox\" class=\"spectrum-Checkbox-input\" id=\"checkbox-0\">\n  <span class=\"spectrum-Checkbox-box\">\n    <svg class=\"spectrum-Icon spectrum-UIIcon-CheckmarkSmall spectrum-Checkbox-checkmark\" focusable=\"false\" aria-hidden=\"true\">\n      <use xlink:href=\"#spectrum-css-icon-CheckmarkSmall\" />\n    </svg>\n    <svg class=\"spectrum-Icon spectrum-UIIcon-DashSmall spectrum-Checkbox-partialCheckmark\" focusable=\"false\" aria-hidden=\"true\">\n      <use xlink:href=\"#spectrum-css-icon-DashSmall\" />\n    </svg>\n  </span>\n  <span class=\"spectrum-Checkbox-label\">Checkbox</span>\n</label>\n<label class=\"spectrum-Checkbox\">\n  <input type=\"checkbox\" class=\"spectrum-Checkbox-input\" id=\"checkbox-1\" checked>\n  <span class=\"spectrum-Checkbox-box\">\n    <svg class=\"spectrum-Icon spectrum-UIIcon-CheckmarkSmall spectrum-Checkbox-checkmark\" focusable=\"false\" aria-hidden=\"true\">\n      <use xlink:href=\"#spectrum-css-icon-CheckmarkSmall\" />\n    </svg>\n    <svg class=\"spectrum-Icon spectrum-UIIcon-DashSmall spectrum-Checkbox-partialCheckmark\" focusable=\"false\" aria-hidden=\"true\">\n      <use xlink:href=\"#spectrum-css-icon-DashSmall\" />\n    </svg>\n  </span>\n  <span class=\"spectrum-Checkbox-label\">Checkbox</span>\n</label>\n<label class=\"spectrum-Checkbox is-indeterminate\">\n  <input type=\"checkbox\" class=\"spectrum-Checkbox-input\" id=\"checkbox-2\">\n  <span class=\"spectrum-Checkbox-box\">\n    <svg class=\"spectrum-Icon spectrum-UIIcon-CheckmarkSmall spectrum-Checkbox-checkmark\" focusable=\"false\" aria-hidden=\"true\">\n      <use xlink:href=\"#spectrum-css-icon-CheckmarkSmall\" />\n    </svg>\n    <svg class=\"spectrum-Icon spectrum-UIIcon-DashSmall spectrum-Checkbox-partialCheckmark\" focusable=\"false\" aria-hidden=\"true\">\n      <use xlink:href=\"#spectrum-css-icon-DashSmall\" />\n    </svg>\n  </span>\n  <span class=\"spectrum-Checkbox-label\">Checkbox</span>\n</label>\n<br>\n<label class=\"spectrum-Checkbox\">\n  <input type=\"checkbox\" class=\"spectrum-Checkbox-input\" id=\"checkbox-0\">\n  <span class=\"spectrum-Checkbox-box\">\n    <svg class=\"spectrum-Icon spectrum-UIIcon-CheckmarkSmall spectrum-Checkbox-checkmark\" focusable=\"false\" aria-hidden=\"true\">\n      <use xlink:href=\"#spectrum-css-icon-CheckmarkSmall\" />\n    </svg>\n    <svg class=\"spectrum-Icon spectrum-UIIcon-DashSmall spectrum-Checkbox-partialCheckmark\" focusable=\"false\" aria-hidden=\"true\">\n      <use xlink:href=\"#spectrum-css-icon-DashSmall\" />\n    </svg>\n  </span>\n  <span class=\"spectrum-Checkbox-label\">Checkbox with an extrordinarily long label please don't do this but if you did it should truncate text when it gets longer than the container which contains the checkbox which has an unacceptably long label</span>\n</label>\n"}), ({"id":"checkbox-quiet", "name":"Quiet", "markup":"<label class=\"spectrum-Checkbox spectrum-Checkbox--quiet\">\n  <input type=\"checkbox\" class=\"spectrum-Checkbox-input\" id=\"checkbox-0\">\n  <span class=\"spectrum-Checkbox-box\">\n    <svg class=\"spectrum-Icon spectrum-UIIcon-CheckmarkSmall spectrum-Checkbox-checkmark\" focusable=\"false\" aria-hidden=\"true\">\n      <use xlink:href=\"#spectrum-css-icon-CheckmarkSmall\" />\n    </svg>\n    <svg class=\"spectrum-Icon spectrum-UIIcon-DashSmall spectrum-Checkbox-partialCheckmark\" focusable=\"false\" aria-hidden=\"true\">\n      <use xlink:href=\"#spectrum-css-icon-DashSmall\" />\n    </svg>\n  </span>\n  <span class=\"spectrum-Checkbox-label\">Checkbox</span>\n</label>\n<label class=\"spectrum-Checkbox spectrum-Checkbox--quiet\">\n  <input type=\"checkbox\" class=\"spectrum-Checkbox-input\" id=\"checkbox-1\" checked>\n  <span class=\"spectrum-Checkbox-box\">\n    <svg class=\"spectrum-Icon spectrum-UIIcon-CheckmarkSmall spectrum-Checkbox-checkmark\" focusable=\"false\" aria-hidden=\"true\">\n      <use xlink:href=\"#spectrum-css-icon-CheckmarkSmall\" />\n    </svg>\n    <svg class=\"spectrum-Icon spectrum-UIIcon-DashSmall spectrum-Checkbox-partialCheckmark\" focusable=\"false\" aria-hidden=\"true\">\n      <use xlink:href=\"#spectrum-css-icon-DashSmall\" />\n    </svg>\n  </span>\n  <span class=\"spectrum-Checkbox-label\">Checkbox</span>\n</label>\n<label class=\"spectrum-Checkbox spectrum-Checkbox--quiet is-indeterminate\">\n  <input type=\"checkbox\" class=\"spectrum-Checkbox-input\" id=\"checkbox-2\">\n  <span class=\"spectrum-Checkbox-box\">\n    <svg class=\"spectrum-Icon spectrum-UIIcon-CheckmarkSmall spectrum-Checkbox-checkmark\" focusable=\"false\" aria-hidden=\"true\">\n      <use xlink:href=\"#spectrum-css-icon-CheckmarkSmall\" />\n    </svg>\n    <svg class=\"spectrum-Icon spectrum-UIIcon-DashSmall spectrum-Checkbox-partialCheckmark\" focusable=\"false\" aria-hidden=\"true\">\n      <use xlink:href=\"#spectrum-css-icon-DashSmall\" />\n    </svg>\n  </span>\n  <span class=\"spectrum-Checkbox-label\">Checkbox</span>\n</label>\n<br>\n<label class=\"spectrum-Checkbox spectrum-Checkbox--quiet\">\n  <input type=\"checkbox\" class=\"spectrum-Checkbox-input\" id=\"checkbox-0\">\n  <span class=\"spectrum-Checkbox-box\">\n    <svg class=\"spectrum-Icon spectrum-UIIcon-CheckmarkSmall spectrum-Checkbox-checkmark\" focusable=\"false\" aria-hidden=\"true\">\n      <use xlink:href=\"#spectrum-css-icon-CheckmarkSmall\" />\n    </svg>\n    <svg class=\"spectrum-Icon spectrum-UIIcon-DashSmall spectrum-Checkbox-partialCheckmark\" focusable=\"false\" aria-hidden=\"true\">\n      <use xlink:href=\"#spectrum-css-icon-DashSmall\" />\n    </svg>\n  </span>\n  <span class=\"spectrum-Checkbox-label\">Checkbox with an extrordinarily long label please don't do this but if you did it should truncate text when it gets longer than the container which contains the checkbox which has an unacceptably long label</span>\n</label>\n"}), ({"id":"checkbox-disabled", "name":"Disabled", "markup":"<label class=\"spectrum-Checkbox is-disabled\">\n  <input type=\"checkbox\" class=\"spectrum-Checkbox-input\" id=\"checkbox-3\" disabled>\n  <span class=\"spectrum-Checkbox-box\">\n    <svg class=\"spectrum-Icon spectrum-UIIcon-CheckmarkSmall spectrum-Checkbox-checkmark\" focusable=\"false\" aria-hidden=\"true\">\n      <use xlink:href=\"#spectrum-css-icon-CheckmarkSmall\" />\n    </svg>\n    <svg class=\"spectrum-Icon spectrum-UIIcon-DashSmall spectrum-Checkbox-partialCheckmark\" focusable=\"false\" aria-hidden=\"true\">\n      <use xlink:href=\"#spectrum-css-icon-DashSmall\" />\n    </svg>\n  </span>\n  <span class=\"spectrum-Checkbox-label\">Checkbox</span>\n</label>\n<label class=\"spectrum-Checkbox is-disabled\">\n  <input type=\"checkbox\" class=\"spectrum-Checkbox-input\" id=\"checkbox-4\" disabled checked>\n  <span class=\"spectrum-Checkbox-box\">\n    <svg class=\"spectrum-Icon spectrum-UIIcon-CheckmarkSmall spectrum-Checkbox-checkmark\" focusable=\"false\" aria-hidden=\"true\">\n      <use xlink:href=\"#spectrum-css-icon-CheckmarkSmall\" />\n    </svg>\n    <svg class=\"spectrum-Icon spectrum-UIIcon-DashSmall spectrum-Checkbox-partialCheckmark\" focusable=\"false\" aria-hidden=\"true\">\n      <use xlink:href=\"#spectrum-css-icon-DashSmall\" />\n    </svg>\n  </span>\n  <span class=\"spectrum-Checkbox-label\">Checkbox</span>\n</label>\n<label class=\"spectrum-Checkbox is-disabled is-indeterminate\">\n  <input type=\"checkbox\" class=\"spectrum-Checkbox-input\" id=\"checkbox-5\" disabled>\n  <span class=\"spectrum-Checkbox-box\">\n    <svg class=\"spectrum-Icon spectrum-UIIcon-CheckmarkSmall spectrum-Checkbox-checkmark\" focusable=\"false\" aria-hidden=\"true\">\n      <use xlink:href=\"#spectrum-css-icon-CheckmarkSmall\" />\n    </svg>\n    <svg class=\"spectrum-Icon spectrum-UIIcon-DashSmall spectrum-Checkbox-partialCheckmark\" focusable=\"false\" aria-hidden=\"true\">\n      <use xlink:href=\"#spectrum-css-icon-DashSmall\" />\n    </svg>\n  </span>\n  <span class=\"spectrum-Checkbox-label\">Checkbox</span>\n</label>\n"}), ({"id":"checkbox-error", "name":"Error", "markup":"<label class=\"spectrum-Checkbox is-invalid\">\n  <input type=\"checkbox\" class=\"spectrum-Checkbox-input\" id=\"checkbox-0\">\n  <span class=\"spectrum-Checkbox-box\">\n    <svg class=\"spectrum-Icon spectrum-UIIcon-CheckmarkSmall spectrum-Checkbox-checkmark\" focusable=\"false\" aria-hidden=\"true\">\n      <use xlink:href=\"#spectrum-css-icon-CheckmarkSmall\" />\n    </svg>\n    <svg class=\"spectrum-Icon spectrum-UIIcon-DashSmall spectrum-Checkbox-partialCheckmark\" focusable=\"false\" aria-hidden=\"true\">\n      <use xlink:href=\"#spectrum-css-icon-DashSmall\" />\n    </svg>\n  </span>\n  <span class=\"spectrum-Checkbox-label\">Checkbox</span>\n</label>\n<label class=\"spectrum-Checkbox is-invalid\">\n  <input type=\"checkbox\" class=\"spectrum-Checkbox-input\" id=\"checkbox-1\" checked>\n  <span class=\"spectrum-Checkbox-box\">\n    <svg class=\"spectrum-Icon spectrum-UIIcon-CheckmarkSmall spectrum-Checkbox-checkmark\" focusable=\"false\" aria-hidden=\"true\">\n      <use xlink:href=\"#spectrum-css-icon-CheckmarkSmall\" />\n    </svg>\n    <svg class=\"spectrum-Icon spectrum-UIIcon-DashSmall spectrum-Checkbox-partialCheckmark\" focusable=\"false\" aria-hidden=\"true\">\n      <use xlink:href=\"#spectrum-css-icon-DashSmall\" />\n    </svg>\n  </span>\n  <span class=\"spectrum-Checkbox-label\">Checkbox</span>\n</label>\n<label class=\"spectrum-Checkbox is-invalid is-indeterminate\">\n  <input type=\"checkbox\" class=\"spectrum-Checkbox-input\" id=\"checkbox-2\">\n  <span class=\"spectrum-Checkbox-box\">\n    <svg class=\"spectrum-Icon spectrum-UIIcon-CheckmarkSmall spectrum-Checkbox-checkmark\" focusable=\"false\" aria-hidden=\"true\">\n      <use xlink:href=\"#spectrum-css-icon-CheckmarkSmall\" />\n    </svg>\n    <svg class=\"spectrum-Icon spectrum-UIIcon-DashSmall spectrum-Checkbox-partialCheckmark\" focusable=\"false\" aria-hidden=\"true\">\n      <use xlink:href=\"#spectrum-css-icon-DashSmall\" />\n    </svg>\n  </span>\n  <span class=\"spectrum-Checkbox-label\">Checkbox</span>\n</label>\n"})]})];
module.exports = doc.length <= 1 ? doc[0] : doc;

/***/ })

}]);
//# sourceMappingURL=22.js.map