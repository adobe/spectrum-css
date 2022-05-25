const postcss = require('postcss');

function getName(selector, prop) {
  // This regex is designed to pull spectrum-ActionButton out of a selector
  let baseSelectorMatch = selector.match(/^\.([a-z]+-[\A-Z][^-. ]+)/);
  if (baseSelectorMatch) {
    const [, baseSelector] = baseSelectorMatch;
    const baseSelectorRegExp = new RegExp(baseSelector, 'gi');
    prop = prop.replace(baseSelectorRegExp, '');
    selector = baseSelector + selector.replace(baseSelectorRegExp, '');
  }

  selector = selector.replace(/is-/g, '');

  let selectorParts = selector.replace(/\s+/g, '').replace(/,/g, '').split('.');

  return `--system-` + (`${selectorParts.join('-')}-${prop.substr(2)}`).replace(/-+/g, '-').toLowerCase();
}

function process(root, options) {
  const selectorMap = {};

  let lastRule = null;
  root.walkAtRules(container => {
    if (container.name === 'container') {
      const [, identifierName, identifierValue] = container.params.match(/\(\s*--(.*?)\s*[:=]\s*(.*?)\s*\)/);

      const rule = postcss.rule({
        selector: `.${(options && typeof options.processIdentifier === 'function') ? options.processIdentifier(identifierValue, identifierName) : identifierValue}`,
        source: container.source
      });

      container.parent.insertAfter(container, rule);

      container.walkDecls(decl => {
        if (decl.prop.startsWith('--')) {
          // Process rules that match multiple selectors separately to avoid weird var names and edge cases
          // note: this doesn't support :where() and is likely brittle!
          const selectors = decl.parent.selector.split(/\s*,\s*/);
          selectors.forEach(selector => {
            const variableName = typeof options.getName === 'function' ? options.getName(selector, decl.prop) : getName(selector, decl.prop);
            const newDecl = decl.clone({
              prop: variableName
            });
            newDecl.raws.before = '\n  ';
            rule.append(newDecl);

            const selectorNode = selectorMap[selector] = selectorMap[selector] || {};

            // Check for fallbacks
            // todo: use valueparser instead of a regex
            const fallbackMatch = decl.value.match(/var\(\s*(.*?)\s*,\s*var\(\s*(.*?)\s*\)\)/);
            if (fallbackMatch) {
              const [, override, fallback] = fallbackMatch;

              // The final declaration should have the override present
              selectorNode[decl.prop] = `var(${override}, var(${variableName}))`;

              // The system-level declaration should only have the fallback
              newDecl.value = `var(${fallback})`;
            }
            else {
              selectorNode[decl.prop] = `var(${variableName})`;
            }
          })
        }
      });

      container.remove();

      lastRule = rule;
    }
  });

  for (let [selector, props] of Object.entries(selectorMap)) {
    const rule = postcss.rule({
      selector
    });

    for (let [prop, value] of Object.entries(props)) {
      const decl = postcss.decl({
        prop,
        value
      });
      decl.raws.before = '\n  ';

      rule.append(decl);
    }

    lastRule.parent.insertAfter(lastRule, rule);
    lastRule = rule;
  }
}

module.exports = postcss.plugin('postcss-splitinator', function(options) {
  return (root, result) => process(root, options)
});
