var postcss = require('postcss');

module.exports = postcss.plugin('postcss-notnested', function (opts) {
  opts = opts || {};

  // Match ampersands at the start of a given selector
  var re = /^&.*/;

  return function (root, result) {
    root.walkRules((rule, ruleIndex) => {
      if (rule.selectors) {
        if (opts.replace) {
          var replaced = false;
          var selectors = rule.selectors.map(selector => {
            if (re.test(selector)) {
              replaced = true;
              return selector.replace(re, opts.replace);
            }
            else {
              return selector;
            }
          });

          if (replaced) {
            rule.selectors = selectors;
          }
        }
        else {
          var selectors = rule.selectors.filter(selector => {
            // Kill the selector with the stray ampersand -- it's not nested!
            return !re.test(selector)
          });

          if (selectors.length == 0) {
            // If no selectors remain, remove the rule completely
            rule.remove();
          }
          else if (selectors.length != rule.selectors.length) {
            // Only replace the selectors if we changed something (avoids extra work for every selector)
            rule.selectors = selectors;
          }
        }
      }
    });
  }
});
