var postcss = require('postcss');

module.exports = postcss.plugin('postcss-notnested', function (opts) {
  opts = opts || {};

  // Match ampersands at the start of a given selector
  var re = /^&.*/m;

  return function (root, result) {
    root.walkRules((rule, ruleIndex) => {
      var matchFound = false;
      if (rule.selectors) {
        var selectors = rule.selectors.filter(selector => {
          // Kill the selector with the stray ampersand -- it's not nested!
          return !re.test(selector)
        });

        // Only replace the selectors if we changed something (avoids extra work for every selector)
        if (selectors.length != rule.selectors.length) {
          rule.selectors = selectors;
        }
      }
    });
  }
});
