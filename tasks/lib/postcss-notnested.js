var postcss = require('postcss');

module.exports = postcss.plugin('postcss-notnested', function (opts) {
  opts = opts || {};

  // Match ampersands at the start of a given selector
  var re = /^&.*/m;

  return function (root, result) {
    root.walkRules((rule, ruleIndex) => {
      var matchFound = false;
      var selectors = rule.selectors;
      if (selectors) {
        for (var i = selectors.length - 1; i >= 0; i--) {
          var selector = selectors[i];
          if (re.test(selector)) {
            // Kill the selector with the stray ampersand -- it's not nested!
            selectors.splice(i, 1);
            matchFound = true;
          }
        }
        if (matchFound) {
          rule.selectors = selectors;
        }
      }
    });
  }
});
