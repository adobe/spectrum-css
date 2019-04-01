var postcss = require('postcss');
var valueParser = require('postcss-value-parser');
var {mapping, static} = require('./vars');

// match custom property inclusions
const customPropertiesRegExp = /(^|[^\w-])var\([\W\w]+\)/;

module.exports = postcss.plugin('postcss-custom-properties-mapping', function () {
  return function (root, result) {
    root.walkRules((rule, ruleIndex) => {
      rule.walkDecls((decl) => {
        if (customPropertiesRegExp.test(decl.value)) {
          let value = valueParser(decl.value);

          value.walk((node, index, nodes) => {
            if (node.type === 'function' && node.value === 'var' && node.nodes.length === 1) {
              let v = node.nodes[0].value;

              // If the value is static, replace the variable with the value.
              // Otherwise, change the variable name to the mapped name.
              if (static[v]) {
                nodes.splice(index, 1, ...valueParser(`var(${v}, ${static[v]})`).nodes);
              } else if (mapping[v]) {
                nodes.splice(index, 1, ...valueParser(`var(${v}, var(${mapping[v]}))`).nodes);
              }
            }
          });

          decl.value = value.toString();
        }
      });
    });
  }
});
