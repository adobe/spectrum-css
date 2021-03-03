const postcss = require('postcss');
const valueParser = require('postcss-value-parser');

function getUsedVars(root) {
  const variableList = [];

  root.walkRules((rule, ruleIndex) => {
    rule.walkDecls((decl) => {
      const matches = decl.value.match(/var\(.*?\)/g);
      if (matches) {
        // Parse value and get a list of variables used
        const parsed = valueParser(decl.value);
        parsed.walk(node => {
          if (node.type === 'function' && node.value === 'var') {
            if (node.nodes.length) {
              const varName = node.nodes[0].value;
              variableList.push(varName);
            }
          }
        });
      }
    });
  });

  return variableList;
}

function dropUnused(root, variableList) {
  root.walkRules((rule, ruleIndex) => {
    rule.walkDecls((decl) => {
      if (decl.prop.startsWith('--')) {
        if (!variableList.includes(decl.prop)) {
          decl.remove();
        }
      }
    });
  });
}

function process(root) {
  // Find all used variables
  const variableList = getUsedVars(root);

  // Drop unused variable definitions
  dropUnused(root, variableList);
}

let allVariables;
module.exports = postcss.plugin('postcss-remapvars', function() {
  allVariables = [];
  return (root, result) => {
    process(root);
  }
});
