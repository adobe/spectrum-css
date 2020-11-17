const postcss = require('postcss');

function getUsedVars(root) {
  let variableList = [];

  root.walkRules((rule, ruleIndex) => {
    rule.walkDecls((decl) => {
      let matches = decl.value.match(/var\(.*?\)/g);
      if (matches) {
        matches.forEach(function (match) {
          let varName = match.replace(/var\((--[\w\-]+),?.*?\)/, '$1').trim();
          if (variableList.indexOf(varName) === -1) {
            variableList.push(varName);
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
        if (!variableList.includes(decl.prop) && !isException(decl.prop)) {
          decl.remove();
        }
      }
    });
  });
}

function process(root) {
  // Find all used variables
  let variableList = getUsedVars(root);

  // Drop unused variable definitions
  dropUnused(root, variableList);
}

const noop = () => {};

let allVariables;
let isException;
module.exports = postcss.plugin('postcss-remapvars', (opts = {}) => {
  allVariables = [];
  isException = opts.isException || noop;
  return (root, result) => {
    process(root);
  }
});
