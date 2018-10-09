var postcss = require('postcss');

module.exports = postcss.plugin('postcss-custom-properties-passthrough', function (opts) {
  opts = opts || {};

  return function (root, result) {
    root.walkRules((rule, ruleIndex) => {
      rule.walkDecls((decl) => {
        if (decl.value.match('xvar\(.*?\)')) {
          decl.value = decl.value.substr(1);
        }
        if (decl.prop.substr(0,3) === 'x--') {
          decl.prop = decl.prop.substr(1);
        }
      });
    });
  }
});
