const postcss = require('postcss');

function process(root) {
  const selectorMap = {};
  root.walkAtRules(container => {
    if (container.name === 'container') {
      const [, identifier, value] = container.params.match(/\(\s*--(.*?)\s*[:=]\s*(.*?)\s*\)/);

      const identifierKey = `${identifier}-${value}`;

      // Walk all declarations, find their selector, store in map
      container.walkDecls(decl => {
        const selectorPath = [];
        let parent = decl.parent;
        while (parent !== container) {
          selectorPath.push(parent.selector);
          parent = parent.parent;
        }
        const valueNode = selectorMap[selectorPath.join(' ')] = selectorMap[selectorPath.join(' ')] || {};
        const identifierNode = valueNode[decl.prop] = valueNode[decl.prop] || {};

        identifierNode[identifierKey] = decl.value;
      });

      container.remove();
    }
  });

  // Process each selector
  for (let [selector, props] of Object.entries(selectorMap)) {
    // todo: put it back in the right place
    const rule = postcss.rule({
      selector
    });

    for (let [prop, values] of Object.entries(props)) {
      const variableList = [];
      for (let [identifier, value] of Object.entries(values)) {
        const variableName = `--${identifier}-${prop.replace(/^--/, '')}`;
        variableList.push(variableName);
        const decl = postcss.decl({
          prop: variableName,
          value: `var(--${identifier}) ${value}`
        });

        rule.append(decl);
      }

      // Add the final rule
      let varString = '';
      variableList.reverse().forEach((variable, i) => {
        varString += `var(${variable}`;
        if (i !== variableList.length - 1) {
          varString += ', ';
        }
      });
      varString += ')'.repeat(variableList.length);

      const decl = postcss.decl({
        prop,
        value: varString
      });

      rule.append(decl);
    }

    root.append(rule);
  }
}

module.exports = postcss.plugin('postcss-containerizer', function() {
  return (root, result) => {
    process(root);
  }
});
