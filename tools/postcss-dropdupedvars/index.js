const postcss = require('postcss');

module.exports = postcss.plugin('postcss-dropdupedvars', function() {
  return (root) => {
    root.walkRules((rule) => {
      let seen = {};
      rule.walkDecls((decl) => {
        if (!decl.prop.startsWith('--')) return;
        if (seen[decl.prop]) {
          decl.warn(root.toResult(), `Dropping duplicate variable ${decl.prop}`);
          seen[decl.prop].remove();
        }

        seen[decl.prop] = decl;
      });
    });
  }
});
