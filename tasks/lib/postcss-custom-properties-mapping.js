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
            if (node.type === 'function' && node.value === 'var') {
              let v = node.nodes[0].value;
              if (static[v]) {
                nodes.splice(index, 1, ...valueParser(static[v]).nodes);
              } else if (mapping[v]) {
                node.nodes[0].value = mapping[v];
              }
            }
          });

          decl.value = value.toString();
        }
      });
    });
  }
});
