const postcss = require('postcss');
const valueParser = require('postcss-value-parser');

function getUsedVars(root) {
  const usedAnywhere = [];
  const usedInProps = [];
  const variableRelationships = {};

  root.walkRules((rule, ruleIndex) => {
    rule.walkDecls((decl) => {
      const usedInDecl = [];

      const isVar = decl.prop.startsWith('--');
      const matches = decl.value.match(/var\(.*?\)/g);
      if (matches) {
        // Parse value and get a list of variables used
        const parsed = valueParser(decl.value);
        parsed.walk(node => {
          if (node.type === 'function' && node.value === 'var') {
            if (node.nodes.length) {
              const varName = node.nodes[0].value;
              usedInDecl.push(varName);
              usedAnywhere.push(varName);
              if (!isVar) {
                usedInProps.push(varName);
              }
            }
          }
        });
      }

      // Store every variable referenced by this var
      if (isVar && usedInDecl.length) {
        for (let varName of usedInDecl) {
          variableRelationships[varName] = variableRelationships[varName] || [];
          variableRelationships[varName].push(decl.prop);
        }
      }
    });
  });

  return {
    usedAnywhere,
    usedInProps,
    variableRelationships
  };
}

function dropUnused(root, {
  usedAnywhere,
  usedInProps,
  variableRelationships
}) {
  root.walkRules((rule, ruleIndex) => {
    rule.walkDecls((decl) => {
      if (decl.prop.startsWith('--')) {
        const varName = decl.prop;
        // Definitely drop it if it's never used
        if (!usedAnywhere.includes(varName)) {
          decl.remove();
        }
        else if (!usedInProps.includes(varName)) {
          // Drop a variable if everything that references it has been removed
          let relatedVars = variableRelationships[varName];
          if (relatedVars && relatedVars.length) {
            let keep = false;
            // Check if everything that references this variable has been removed
            for (let relatedVar of relatedVars) {
              if (usedAnywhere.includes(relatedVar)) {
                keep = true;
                break;
              }
            }
            if (!keep) {
              decl.remove();
            }
          }
        }
      }
    });
  });
}

function process(root) {
  // Find all used variables
  const variableUsage = getUsedVars(root);

  // Drop unused variable definitions
  dropUnused(root, variableUsage);
}

module.exports = postcss.plugin('postcss-dropunusedvars', function() {
  return (root, result) => {
    process(root);
  }
});
