/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * Spectrum CSS PostCSS Processor
 *
 * Generates Sass Mixins by automatic classnames with DNA tokens.
 * Provides support for v4 (t-shirt based) typography
 * and the legacy v3 (numeric based) typography.
 *
 * processes output also with task like:
 * SVG scaling, stripping of comments, post-css-focus-ring
 * and auto-prefixing for specific browsers.
 *
 * Structured in:
 *  - typographyTShirtSizes (v4)
 *  - typography (v3)
 *
 *  - typographyTShirtMargins (v4)
 *  - typographyMargins (v3)
 *
 *  - typographyTShirtColor(v4)
 *  - typographyColor(v3)
 *
 *   Shared functions for v4 are:
 *    - getTShirtTokenName
 *    - getTypographySizes
 *
 *   Shared functions for v3 & v4:
 *    - buildProperties
 *    - getTypographyMargins
 *
 * Lastly all the post-processing.
 *
 */
const postcssReal = require('postcss');

/**
 *  Helper: get a Spectrum CSS T-shirt class name
 *
 * @param {string} name DNA token name
 * @returns {string} Spectrum CSS t-shirt sized token name
 */
function getTShirtTokenName(name) {
  tokenName = name.replace(/\.?([A-Z]{,1}$ |[0-9])/g,
    function (x, y) {
      return '-' + y
    })
    .replace(/([A-Z]{1,})/g,
      function (x, y) {
        return '-' + y
      })
    .replace(/^-/, '');
  tokenName = tokenName.replace('.spectrum--', '');
  tokenName = tokenName.toLowerCase();
  return tokenName;
}

/**
 * Helper: get typography sizes
 * Shared with t-shirt and numeric sizes
 *
 * @param {string} name class name
 * @param {string} tokenName token name
 * @param {string} textTransformIgnore ignore text transforms
 * @param {boolean} [showIndicatorBorder=false] shows a blue border around the items. Useful for debugging.
 * @returns {string} CSS output
 */
function getTypographySizes(name, tokenName, textTransformIgnore, showIndicatorBorder=false) {
  var output = '';
  var propMap = {
    'font-size': 'text-size',
    'font-weight': 'text-font-weight',
    'line-height': 'text-line-height',
    'font-style': 'text-font-style',
    'letter-spacing': 'text-letter-spacing',
    'text-transform': 'text-transform',
  };

/**
 *  Build typography properties for a DNA token
 *
 * @param {string} tokenString name of the token
 * @returns {string} CSS rule for provided selector selector
 */
function buildProperties(tokenString) {
    var ruleString = '';
    Object.keys(propMap).forEach((key) => {
      if (!textTransformIgnore || key != 'text-transform') {
        ruleString += `  ${key}: var(--spectrum-${tokenString}-${propMap[key]});\n`;
      }
    });
    ruleString += '  margin-top: 0;\n  margin-bottom: 0;\n';
    return ruleString.toLowerCase();
  }

  var indicatorBorder = (showIndicatorBorder === true) ? 'border: solid 1px blue;' : '';

  // Add classnames as an alternative for <strong> and <em> for typography items with a classname.
  // -emphasis & -strong will be added to the last provided classname or to provided ID.
  // Example classname:  "em, .spectrum-Heading2--quiet-emphasis"
  emStrongClassName = (name.indexOf('.') !== -1) ? '.' + name.split('.').pop() : name;

  output = `${name} {
  ${indicatorBorder}
  ${buildProperties(tokenName)}
    em, ${emStrongClassName}-emphasis {
      ${buildProperties(`${tokenName}-emphasis`)}
    }
    strong, ${emStrongClassName}-strong {
      ${buildProperties(`${tokenName}-strong`)}
    }
  }`;
  return output;
}

/**
 * Helper: get typography margins
 * Shared with t-shirt and numeric sizes
 *
 * @param {*} name class name
 * @param {*} tokenName token name
 * @returns {string} CSS output
 */
function getTypographyMargins(name, tokenName) {
  var output = `${name} {
    margin-top: var(--spectrum-${tokenName}-margin-top);
    margin-bottom: var(--spectrum-${tokenName}-margin-bottom);
  }`;
  return output
}

/**
 * Helper: get typography colors
 *
 * @param {*} name class name
 * @param {*} tokenName token name
 * @param {boolean} [showIndicatorBackground=false]
 * @returns {string} CSS output
 */
function getTypographyColor(name, tokenName, showIndicatorBackground=false) {
  var indicatorBackground = (showIndicatorBackground === true) ? 'background-color: orange;' : '';
  var output = `${name} {
    ${indicatorBackground}
    color: var(--spectrum-${tokenName.toLowerCase()}-text-color);
  }`;
  return output;
}

/**
 * Add CSS nodes that are going to be processed with postcss
 *
 * @param {string} mixin name of the mixin
 * @param {string} css css injected in the mixing
 */
function addNodesToCSS(mixin, css) {
  var nodes = postcssReal.parse(css);
  nodes.nodes[0].append(mixin.nodes);
  mixin.replaceWith(nodes);
}

/**
 * Add postcss mixins
 *
 * @param {boolean} [keepVars=false] keeps DNA variables
 * @param {boolean} [notNested=true] nest or don't nest
 * @param {boolean} [secondNotNested=true]  catch stray
 * @param {boolean} [diff=false]  perform a diff
 */
function getProcessors(keepVars = false, notNested = true, secondNotNested = true, diff = false) {
  return [
    require('postcss-import'),
    require('postcss-mixins')({
      mixins: {

        /**
         * Generate typography t-shirt sizes
         *
         * @param {*} mixin mixin name
         * @param {*} name class name
         * @param {*} tokenName name of token
         * @param {*} textTransformIgnore  ignore text transform
         */
        typographyTShirtSizes: function (mixin, name, tokenName, textTransformIgnore) {
          if (!tokenName) {
            var tokenName = getTShirtTokenName(name);
          }

          var output = getTypographySizes(name, tokenName, textTransformIgnore, showIndicatorBorder = true);
          addNodesToCSS(mixin, output);
        },

        /**
        * generate typography numeric sizes
         * @param {*} mixin mixin name
         * @param {*} name class name
         * @param {*} tokenName name of token
         * @param {*} textTransformIgnore  ignore text transform
         */
        typography: function (mixin, name, tokenName, textTransformIgnore) {
          if (!tokenName) {
            tokenName = name.replace(/\.?([A-Z]|[0-9])/g, function (x, y) { return '-' + y.toLowerCase(); }).replace(/^-/, '');
            tokenName = tokenName.replace('.spectrum--', '');
          }

          var output = getTypographySizes(name, tokenName, textTransformIgnore, showIndicatorBorder = false);
          addNodesToCSS(mixin, output);
        },

        /**
         * Generate typography margins for t-shirt sizes
         *
         * @param {*} mixin mixin name
         * @param {*} name class name
         * @param {*} tokenName name of token
         */
        typographyTShirtMargins: function (mixin, name, tokenName) {
          if (!tokenName) {
            var tokenName = getTShirtTokenName(name);
          }
          var output = getTypographyMargins(name, tokenName);
          addNodesToCSS(mixin, output);
        },

        /**
         * Generate typography margins for numeric sizes
         *
         * @param {*} mixin mixin name
         * @param {*} name class name
         * @param {*} tokenName name of token
         */
        typographyMargins: function (mixin, name, tokenName) {
          if (!tokenName) {
            tokenName = name.replace(/\.?([A-Z]|[0-9])/g, function (x, y) { return '-' + y.toLowerCase(); }).replace(/^-/, '');
            tokenName = tokenName.replace('.spectrum--', '');
          }
          var output = getTypographyMargins(name, tokenName);
          addNodesToCSS(mixin, output);
        },

        /**
         * generate typography colors for t-shirt sizes
         *
         * @param {*} mixin mixin name
         * @param {*} name class name
         * @param {*} tokenName name of token
         */
        typographyTShirtColor: function (mixin, name, tokenName) {
          if (!tokenName) {
            var tokenName = getTShirtTokenName(name);
          }
          var output = getTypographyColor(name, tokenName, showIndicatorBackground = true);
          addNodesToCSS(mixin, output);
        },

        /**
         * generate typography colors for numeric sizes
         *
         * @param {*} mixin mixin name
         * @param {*} name class name
         * @param {*} tokenName name of token
         */
        typographyColor: function (mixin, name, tokenName) {
          if (!tokenName) {
            tokenName = name.replace(/\.?([A-Z]|[0-9])/g, function (x, y) { return '-' + y.toLowerCase(); }).replace(/^-/, '');
            tokenName = tokenName.replace('.spectrum--', '');
          }
          var output = getTypographyColor(name, tokenName, false);
          addNodesToCSS(mixin, output);
        }
      }
    }),
    require('postcss-nested'),
    require('postcss-inherit'),
    diff ? require('./plugins/postcss-varsonly')() : null,
    require('postcss-custom-properties')({
      noValueNotifications: 'error',
      warnings: !keepVars
    }),
    require('./plugins/postcss-custom-properties-passthrough')(),
    require('postcss-calc'),
    keepVars ? require('./plugins/postcss-custom-properties-mapping') : null,
    notNested ? require('./plugins/postcss-notnested')({ replace: '.spectrum' }) : null,
    require('postcss-svg'),
    require('postcss-functions')({
      functions: {
        noscale: function (value) {
          return value.toString().toUpperCase();
        },
        percent: function (value) {
          return parseInt(value, 10) / 100;
        }
      }
    }),
    require('./plugins/postcss-strip-comments')({ preserveTopdoc: false }),
    require('postcss-focus-ring'),
    secondNotNested ? require('./plugins/postcss-notnested')() : null, // Second one to catch all stray &
    require('postcss-discard-empty'),
    require('autoprefixer')({
      'browsers': [
        'IE >= 10',
        'last 2 Chrome versions',
        'last 2 Firefox versions',
        'last 2 Safari versions',
        'last 2 iOS versions'
      ]
    })
  ].filter(Boolean);
}

exports.getProcessors = getProcessors;
exports.processors = getProcessors(true);
exports.legacyProcessors = getProcessors();
