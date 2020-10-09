const postcss = require('postcss');

function getVariable(varName, config) {
  return varName.replace(config.find, config.replace);
}

function getPattern(pattern) {
  const match = pattern.match(/^\/(.*?)\/(.*?)$/, '');
  if (match) {
    const [, stringPattern, flags] = match;
    pattern = RegExp(stringPattern, flags);
  }
  return pattern;
}

function remapVars(rule) {
  // Read in config
  let config = {};
  rule.each((node) => {
    config[node.prop.toLowerCase()] = node.value;
  });

  // Support regexp
  config.find = getPattern(config.find);

  const filterPatterns = [];
  if (config.filter) {
    // Support multiple filters split by commas with whitespace
    for (let filterPattern of config.filter.split(',')) {
      filterPatterns.push(getPattern(filterPattern.trim()));
    }
  }

  let outVariables = {};

  // Check for matching variables
  varLoop: for (let varName of allVariables) {
    if (varName.match(config.find)) {
      filterLoop: for (let filterPattern of filterPatterns) {
        if (varName.match(filterPattern)) {
          // Skip this variable
          continue varLoop;
        }
      }
      outVariables[getVariable(varName, config)] = varName;
    }
  }

  // Remap in output
  for (let [varName, value] of Object.entries(outVariables)) {
    const decl = postcss.decl({
      prop: varName,
      value: `var(${value})`
    });
    decl.raws.before = rule.raws.before;
    decl.raws.semicolon = true;

    rule.parent.insertBefore(rule, decl);
  }

  // Close out the rule with a semicolon
  rule.parent.raws.semicolon = true;

  // Drop the original rule
  rule.remove();
}

function isVar(node) {
  return node.type === 'decl' && node.prop.startsWith('--');
}

function getVarName(node) {
  return node.prop;
}

function processRule(rule) {
  // Check for vars
  rule.each((node) => {
    if (isVar(node)) {
      allVariables.push(getVarName(node));
    }
  });
}

function processAtRule(rule) {
  const operation = rule.name.toLowerCase();

  if (operation === 'remapvars') {
    remapVars(rule);
  }
}

function process(root) {
  // Gather all variables
  root.walkRules((rule) => {
    processRule(rule);
  });

  // Remap variables where requested
  root.walkAtRules((rule) => {
    processAtRule(rule);
  });
}

let allVariables;
module.exports = postcss.plugin('postcss-remapvars', function() {
  allVariables = [];
  return (root, result) => {
    process(root);
  }
});
