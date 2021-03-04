const postcss = require('postcss');

const defaultOptions = {
  map: {}
};

module.exports = function(options) {
  options = {
    ...defaultOptions,
    ...options
  };

  return {
    postcssPlugin: 'postcss-transformselectors',
    Rule(rule) {
      if (options.replace) {
        for (let {search, replace} of options.replace) {
          if (typeof search === 'string') {
            // always replace globally for strings
            search = new RegExp(search, 'g');
          }

          rule.selector = rule.selector.replace(search, replace);
        }
      }

      if (options.transform) {
        rule.selector = options.transform(rule.selector, rule);
      }
    }
  };
};

module.exports.postcss = true
