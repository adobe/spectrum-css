var postcss = require('postcss');
const fs = require('fs');

const customPropertyRegExp = /^--[A-z][\w-]*$/;

function getVars(file) {
  let contents = fs.readFileSync(file, 'utf8');
  let root = postcss.parse(contents);

  let vars = {};
  root.walkRules((rule, ruleIndex) => {
    rule.walkDecls((decl) => {
      if (customPropertyRegExp.test(decl.prop)) {
        vars[decl.prop] = decl.value;
      }
    });
  });

  return vars;
}

function getUniqueVars(vars) {
  let unique = {};
  for (let key in vars) {
    if (!unique[vars[key]]) {
      unique[vars[key]] = [key];
    } else {
      unique[vars[key]].push(key);
    }
  }

  let uniqueVars = {};
  let mapping = {};
  for (let val in unique) {
    uniqueVars[unique[val][0]] = val;
    for (let key of unique[val]) {
      mapping[key] = unique[val][0];
    }
  }

  return {vars, uniqueVars, mapping};
}

function getVariableMappings(themes) {
  let themeVars = {};
  for (let theme of themes) {
    let vars = getVars(`vars/spectrum-${theme}.css`);
    let unique = getUniqueVars(vars);
    themeVars[theme] = unique;
  }

  let {vars, mapping, uniqueVars} = themeVars[themes[0]];
  let static = {};
  for (let v in mapping) {
    let mapped = mapping[v];
    let matches = themes.every(t => {
      let v2 = themeVars[t].mapping[v];
      return mapped === v2 || themeVars[t].vars[v] === themeVars[t].vars[v2];
    });

    if (!matches) {
      throw new Error('Non matching variable across themes');
    }

    let val = vars[v];
    // if (themes.every(t => themeVars[t].vars[v] === val)) {
    //   static[v] = val;
    // }
  }

  vars = {};
  // let static = {};
  for (let theme in themeVars) {
    vars[theme] = {};
    for (let v in uniqueVars) {
      let val = uniqueVars[v];
      // if (themes.every(t => themeVars[t].vars[v] === val)) {
      //   static[v] = val;
      // } else {
        vars[theme][v] = themeVars[theme].vars[v];
      // }
    }
  }
  
  return {mapping, vars, static};
}

let themes = getVariableMappings(['dark', 'darkest', 'light', 'lightest', 'middark', 'midlight']);
let scales = getVariableMappings(['large', 'medium']);

exports.themes = themes.vars;
exports.scales = scales.vars;
exports.mapping = Object.assign({}, themes.mapping, scales.mapping);
exports.static = Object.assign({}, themes.static, scales.static);

console.log(exports.static)

exports.generate = function generate(theme, vars) {
  return `.spectrum--${theme} {\n${Object.keys(vars).map(v => `  ${v}: ${vars[v]};`).join('\n')}\n}`;
};
