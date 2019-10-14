(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[33],{

/***/ "./data/yml/dropindicator.yml":
/*!************************************!*\
  !*** ./data/yml/dropindicator.yml ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

const doc = [({"name":"Drop Indicator", "description":"A Drop Indicator is used to show the insertion position into a list or table.", "examples":[({"id":"dropindicator", "name":"Standard", "markup":"<div style=\"display: flex; align-items: center\">\n  <div class=\"spectrum-DropIndicator spectrum-DropIndicator--vertical\" style=\"height: 300px; margin-right: 100px;\"></div>\n  <div class=\"spectrum-DropIndicator spectrum-DropIndicator--horizontal\" style=\"width: 300px;\"></div>\n</div>\n"})], "packageName":"dropindicator", "indexCSS":".spectrum-DropIndicator {\n  position: relative;\n}\n\n.spectrum-DropIndicator:before,\n  .spectrum-DropIndicator:after {\n    content: '';\n    position: absolute;\n    width: var(--spectrum-dropindicator-circle-size, var(--spectrum-global-dimension-static-size-150));\n    height: var(--spectrum-dropindicator-circle-size, var(--spectrum-global-dimension-static-size-150));\n    border-radius: 50%;\n    border: var(--spectrum-dropindicator-border-size, var(--spectrum-alias-border-size-thick)) solid;\n    box-sizing: border-box;\n  }\n\n.spectrum-DropIndicator--horizontal {\n  height: var(--spectrum-dropindicator-border-size, var(--spectrum-alias-border-size-thick));\n  margin: 0 var(--spectrum-dropindicator-circle-size, var(--spectrum-global-dimension-static-size-150));\n}\n\n.spectrum-DropIndicator--horizontal:before,\n  .spectrum-DropIndicator--horizontal:after {\n    top: calc(-1 * var(--spectrum-dropindicator-circle-size, var(--spectrum-global-dimension-static-size-150)) / 2 + var(--spectrum-dropindicator-border-size, var(--spectrum-alias-border-size-thick)) / 2);\n  }\n\n.spectrum-DropIndicator--horizontal:before {\n    left: calc(-1 * var(--spectrum-dropindicator-circle-size, var(--spectrum-global-dimension-static-size-150)));\n  }\n\n.spectrum-DropIndicator--horizontal:after {\n    right: calc(-1 * var(--spectrum-dropindicator-circle-size, var(--spectrum-global-dimension-static-size-150)));\n  }\n\n.spectrum-DropIndicator--vertical {\n  width: var(--spectrum-dropindicator-border-size, var(--spectrum-alias-border-size-thick));\n  margin: var(--spectrum-dropindicator-circle-size, var(--spectrum-global-dimension-static-size-150)) 0;\n}\n\n.spectrum-DropIndicator--vertical:before,\n  .spectrum-DropIndicator--vertical:after {\n    left: calc(-1 * var(--spectrum-dropindicator-circle-size, var(--spectrum-global-dimension-static-size-150)) / 2 + var(--spectrum-dropindicator-border-size, var(--spectrum-alias-border-size-thick)) / 2);\n  }\n\n.spectrum-DropIndicator--vertical:before {\n    top: calc(-1 * var(--spectrum-dropindicator-circle-size, var(--spectrum-global-dimension-static-size-150)));\n  }\n\n.spectrum-DropIndicator--vertical:after {\n    bottom: calc(-1 * var(--spectrum-dropindicator-circle-size, var(--spectrum-global-dimension-static-size-150)));\n  }\n\n.spectrum-DropIndicator {\n  background: var(--spectrum-dropindicator-border-color, var(--spectrum-global-color-blue-400));\n}\n\n.spectrum-DropIndicator:before,\n  .spectrum-DropIndicator:after {\n    border-color: var(--spectrum-dropindicator-circle-border-color, var(--spectrum-global-color-blue-400));\n  }\n", "peerDependencies":({"@spectrum-css/icon":"^2.0.0", "@spectrum-css/vars":"^2.0.0"}), "peerCSS":".spectrum-Icon,\n.spectrum-UIIcon {\n  display: inline-block;\n  color: inherit;\n  fill: currentColor;\n  pointer-events: none;\n}\n\n.spectrum-Icon:not(:root), .spectrum-UIIcon:not(:root) {\n    overflow: hidden;\n  }\n\n.spectrum-Icon--sizeXXS,\n  .spectrum-Icon--sizeXXS img,\n  .spectrum-Icon--sizeXXS svg {\n    height: calc(var(--spectrum-alias-workflow-icon-size, var(--spectrum-global-dimension-size-225)) / 2);\n    width: calc(var(--spectrum-alias-workflow-icon-size, var(--spectrum-global-dimension-size-225)) / 2);\n  }\n\n.spectrum-Icon--sizeXS,\n  .spectrum-Icon--sizeXS img,\n  .spectrum-Icon--sizeXS svg {\n    height: calc(var(--spectrum-global-dimension-size-300) / 2);\n    width: calc(var(--spectrum-global-dimension-size-300) / 2);\n  }\n\n.spectrum-Icon--sizeS,\n  .spectrum-Icon--sizeS img,\n  .spectrum-Icon--sizeS svg {\n    height: var(--spectrum-alias-workflow-icon-size, var(--spectrum-global-dimension-size-225));\n    width: var(--spectrum-alias-workflow-icon-size, var(--spectrum-global-dimension-size-225));\n  }\n\n.spectrum-Icon--sizeM,\n  .spectrum-Icon--sizeM img,\n  .spectrum-Icon--sizeM svg {\n    height: var(--spectrum-global-dimension-size-300);\n    width: var(--spectrum-global-dimension-size-300);\n  }\n\n.spectrum-Icon--sizeL,\n  .spectrum-Icon--sizeL img,\n  .spectrum-Icon--sizeL svg {\n    height: calc(var(--spectrum-alias-workflow-icon-size, var(--spectrum-global-dimension-size-225)) * 2);\n    width: calc(var(--spectrum-alias-workflow-icon-size, var(--spectrum-global-dimension-size-225)) * 2);\n  }\n\n.spectrum-Icon--sizeXL,\n  .spectrum-Icon--sizeXL img,\n  .spectrum-Icon--sizeXL svg {\n    height: calc(var(--spectrum-global-dimension-size-300) * 2);\n    width: calc(var(--spectrum-global-dimension-size-300) * 2);\n  }\n\n.spectrum-Icon--sizeXXL,\n  .spectrum-Icon--sizeXXL img,\n  .spectrum-Icon--sizeXXL svg {\n    height: calc(var(--spectrum-global-dimension-size-300) * 3);\n    width: calc(var(--spectrum-global-dimension-size-300) * 3);\n  }\n\n.spectrum--medium .spectrum-UIIcon--large {\n    display: none;\n  }\n\n.spectrum--medium .spectrum-UIIcon--medium {\n    display: inline;\n  }\n\n.spectrum--large .spectrum-UIIcon--medium {\n    display: none;\n  }\n\n.spectrum--large .spectrum-UIIcon--large {\n    display: inline;\n  }\n\n.spectrum--large {\n  --ui-icon-large-display: block;\n  --ui-icon-medium-display: none;\n}\n\n.spectrum--medium {\n  --ui-icon-medium-display: block;\n  --ui-icon-large-display: none;\n}\n\n.spectrum-UIIcon--large {\n  display: var(--ui-icon-large-display);\n}\n\n.spectrum-UIIcon--medium {\n  display: var(--ui-icon-medium-display);\n}\n\n.spectrum-UIIcon-AlertMedium {\n  width: var(--spectrum-icon-alert-medium-width, var(--spectrum-global-dimension-size-225));\n  height: var(--spectrum-icon-alert-medium-height, var(--spectrum-global-dimension-size-225));\n}\n\n.spectrum-UIIcon-AlertSmall {\n  width: var(--spectrum-icon-alert-small-width, var(--spectrum-global-dimension-size-175));\n  height: var(--spectrum-icon-alert-small-height, var(--spectrum-global-dimension-size-175));\n}\n\n.spectrum-UIIcon-ArrowDownSmall {\n  width: var(--spectrum-icon-arrow-down-small-width, var(--spectrum-global-dimension-size-100));\n  height: var(--spectrum-icon-arrow-down-small-height);\n}\n\n.spectrum-UIIcon-ArrowLeftMedium {\n  width: var(--spectrum-icon-arrow-left-medium-width, var(--spectrum-global-dimension-size-175));\n  height: var(--spectrum-icon-arrow-left-medium-height);\n}\n\n.spectrum-UIIcon-Asterisk {\n  width: var(--spectrum-fieldlabel-asterisk-size, var(--spectrum-global-dimension-size-100));\n  height: var(--spectrum-fieldlabel-asterisk-size, var(--spectrum-global-dimension-size-100));\n}\n\n.spectrum-UIIcon-CheckmarkMedium {\n  width: var(--spectrum-icon-checkmark-medium-width);\n  height: var(--spectrum-icon-checkmark-medium-height);\n}\n\n.spectrum-UIIcon-CheckmarkSmall {\n  width: var(--spectrum-icon-checkmark-small-width);\n  height: var(--spectrum-icon-checkmark-small-height);\n}\n\n.spectrum-UIIcon-ChevronDownMedium {\n  width: var(--spectrum-icon-chevron-down-medium-width);\n  height: var(--spectrum-icon-chevron-down-medium-height, var(--spectrum-global-dimension-size-75));\n}\n\n.spectrum-UIIcon-ChevronDownSmall {\n  width: var(--spectrum-icon-chevron-down-small-width, var(--spectrum-global-dimension-size-100));\n  height: var(--spectrum-icon-chevron-down-small-height, var(--spectrum-global-dimension-size-75));\n}\n\n.spectrum-UIIcon-ChevronLeftLarge {\n  width: var(--spectrum-icon-chevron-left-large-width);\n  height: var(--spectrum-icon-chevron-left-large-height, var(--spectrum-global-dimension-size-200));\n}\n\n.spectrum-UIIcon-ChevronLeftMedium {\n  width: var(--spectrum-icon-chevron-left-medium-width, var(--spectrum-global-dimension-size-75));\n  height: var(--spectrum-icon-chevron-left-medium-height);\n}\n\n.spectrum-UIIcon-ChevronRightLarge {\n  width: var(--spectrum-icon-chevron-right-large-width);\n  height: var(--spectrum-icon-chevron-right-large-height, var(--spectrum-global-dimension-size-200));\n}\n\n.spectrum-UIIcon-ChevronRightMedium {\n  width: var(--spectrum-icon-chevron-right-medium-width, var(--spectrum-global-dimension-size-75));\n  height: var(--spectrum-icon-chevron-right-medium-height);\n}\n\n.spectrum-UIIcon-ChevronRightSmall {\n  width: var(--spectrum-icon-chevron-right-small-width, var(--spectrum-global-dimension-size-75));\n  height: var(--spectrum-icon-chevron-right-small-height, var(--spectrum-global-dimension-size-100));\n}\n\n.spectrum-UIIcon-ChevronUpSmall {\n  width: var(--spectrum-icon-chevron-up-small-width, var(--spectrum-global-dimension-size-100));\n  height: var(--spectrum-icon-chevron-up-small-height, var(--spectrum-global-dimension-size-75));\n}\n\n.spectrum-UIIcon-CornerTriangle {\n  width: var(--spectrum-icon-cornertriangle-width, var(--spectrum-global-dimension-size-65));\n  height: var(--spectrum-icon-cornertriangle-height, var(--spectrum-global-dimension-size-65));\n}\n\n.spectrum-UIIcon-CrossLarge {\n  width: var(--spectrum-icon-cross-large-width);\n  height: var(--spectrum-icon-cross-large-height);\n}\n\n.spectrum-UIIcon-CrossMedium {\n  width: var(--spectrum-icon-cross-medium-width, var(--spectrum-global-dimension-size-100));\n  height: var(--spectrum-icon-cross-medium-height, var(--spectrum-global-dimension-size-100));\n}\n\n.spectrum-UIIcon-CrossSmall {\n  width: var(--spectrum-icon-cross-small-width, var(--spectrum-global-dimension-size-100));\n  height: var(--spectrum-icon-cross-small-height, var(--spectrum-global-dimension-size-100));\n}\n\n.spectrum-UIIcon-DashSmall {\n  width: var(--spectrum-icon-dash-small-width);\n  height: var(--spectrum-icon-dash-small-height);\n}\n\n.spectrum-UIIcon-DoubleGripper {\n  width: var(--spectrum-icon-doublegripper-width, var(--spectrum-global-dimension-size-200));\n  height: var(--spectrum-icon-doublegripper-height, var(--spectrum-global-dimension-size-50));\n}\n\n.spectrum-UIIcon-FolderBreadcrumb {\n  width: var(--spectrum-icon-folderbreadcrumb-width, var(--spectrum-global-dimension-size-225));\n  height: var(--spectrum-icon-folderbreadcrumb-height, var(--spectrum-global-dimension-size-225));\n}\n\n.spectrum-UIIcon-HelpMedium {\n  width: var(--spectrum-icon-info-medium-width, var(--spectrum-global-dimension-size-225));\n  height: var(--spectrum-icon-info-medium-height, var(--spectrum-global-dimension-size-225));\n}\n\n.spectrum-UIIcon-HelpSmall {\n  width: var(--spectrum-icon-info-small-width, var(--spectrum-global-dimension-size-175));\n  height: var(--spectrum-icon-info-small-height, var(--spectrum-global-dimension-size-175));\n}\n\n.spectrum-UIIcon-InfoMedium {\n  width: var(--spectrum-icon-info-medium-width, var(--spectrum-global-dimension-size-225));\n  height: var(--spectrum-icon-info-medium-height, var(--spectrum-global-dimension-size-225));\n}\n\n.spectrum-UIIcon-InfoSmall {\n  width: var(--spectrum-icon-info-small-width, var(--spectrum-global-dimension-size-175));\n  height: var(--spectrum-icon-info-small-height, var(--spectrum-global-dimension-size-175));\n}\n\n.spectrum-UIIcon-Magnifier {\n  width: var(--spectrum-icon-magnifier-width, var(--spectrum-global-dimension-size-200));\n  height: var(--spectrum-icon-magnifier-height, var(--spectrum-global-dimension-size-200));\n}\n\n.spectrum-UIIcon-SkipLeft {\n  width: var(--spectrum-icon-skip-left-width);\n  height: var(--spectrum-icon-skip-left-height);\n}\n\n.spectrum-UIIcon-SkipRight {\n  width: var(--spectrum-icon-skip-right-width);\n  height: var(--spectrum-icon-skip-right-height);\n}\n\n.spectrum-UIIcon-Star {\n  width: var(--spectrum-icon-star-width, var(--spectrum-global-dimension-size-225));\n  height: var(--spectrum-icon-star-height, var(--spectrum-global-dimension-size-225));\n}\n\n.spectrum-UIIcon-StarOutline {\n  width: var(--spectrum-icon-star-outline-width, var(--spectrum-global-dimension-size-225));\n  height: var(--spectrum-icon-star-outline-height, var(--spectrum-global-dimension-size-225));\n}\n\n.spectrum-UIIcon-SuccessMedium {\n  width: var(--spectrum-icon-success-medium-width, var(--spectrum-global-dimension-size-225));\n  height: var(--spectrum-icon-success-medium-height, var(--spectrum-global-dimension-size-225));\n}\n\n.spectrum-UIIcon-SuccessSmall {\n  width: var(--spectrum-icon-success-small-width, var(--spectrum-global-dimension-size-175));\n  height: var(--spectrum-icon-success-small-height, var(--spectrum-global-dimension-size-175));\n}\n\n.spectrum-UIIcon-TripleGripper {\n  width: var(--spectrum-icon-triplegripper-width);\n  height: var(--spectrum-icon-triplegripper-height, var(--spectrum-global-dimension-size-85));\n}\n"})];
module.exports = doc.length <= 1 ? doc[0] : doc;

/***/ })

}]);
//# sourceMappingURL=33.js.map