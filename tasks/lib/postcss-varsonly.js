var postcss = require('postcss');

module.exports = postcss.plugin('postcss-varsonly', function (opts) {
  opts = opts || {};

  return function (root, result) {
    // Delete all comments
    root.walkComments((comment) => {
      comment.remove();
    });

    // Process each rule
    root.walkRules((rule, ruleIndex) => {
      // Don't break variable declarations
      if (rule.selector === ':root') {
        return;
      }

      // Check every declaration
      rule.walkDecls((decl) => {
        // Remove if not varaible
        if (!decl.value.match('var\(.*?\)')) {
          decl.remove();
        }
      });

      // Delete the rule if it's empty
      if (rule.nodes.length === 0) {
        rule.remove();
      }
    });
  }
});