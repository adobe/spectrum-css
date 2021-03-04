const postcss = require('postcss');

function dropDupes(root, variableList) {
  root.walkRules((rule, ruleIndex) => {
    let seen = {};
    rule.walkDecls((decl) => {
      if (decl.prop.startsWith('--')) {
        if (seen[decl.prop]) {
          seen[decl.prop].remove();
        }

        seen[decl.prop] = decl;
      }
    });
  });
}

module.exports = postcss.plugin('postcss-dropdupedvars', function() {
  return (root, result) => {
    dropDupes(root);
  }
});
