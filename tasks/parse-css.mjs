import { parse } from "postcss";
import parser from "postcss-selector-parser";

import FuzzyMatching from "fuzzy-matching";

/**
 * For each color stop and scale, filter the variables for those matching
 * the component; this data is used later to report on and document available
 * variables
 * @param {string} contents
 * @returns {Promise<{ classNames: Set<string>, varDefinitions: Map<string, string[]>, usedVars: Set<string> }>}
 */
export async function parseCSS(contents) {
  // Pulls out all the variables used in the component and writes them to dist/vars.css & dist/vars.json
  const classNames = new Set();
  const varDefinitions = new Map();
  const usedVars = new Set();

  parse(contents).walkRules((rule) => {
    rule.walkDecls((decl) => {
      const value = decl.value.replace(/(\t|\n)/g, "").trim();

      if (decl.prop.startsWith("--")) {
        if (varDefinitions.has(decl.prop)) {
          varDefinitions.set(decl.prop, [
            ...varDefinitions.get(decl.prop),
            value,
          ]);
        } else {
          varDefinitions.set(decl.prop, [value]);
        }
      }

      const matches = value.match(/var\(.*?\)/g);
      if (!matches) return;
      matches.forEach((match) => {
        const varName = match
          .replace(/var\(\s*(--[\w\-]+)\s*,?.*?\)/, "$1")
          .trim();
        usedVars.add(varName);
      });
    });

    // Parse the selectors to find all the class names
    parser((selectors) => {
      selectors.walk((s, idx) => {
        if (s.type !== "class") return;
        if (idx > 0) return;
        if (/^spectrum-[A-Z][a-zA-Z]+$/.test(s.value)) {
          classNames.add(`.${s.value}`);
          return false;
        }
      }, true);
    }).processSync(rule.selector);
  });

  return {
    classNames,
    varDefinitions,
    usedVars,
  };
}

/**
 * For each color stop and scale, filter the variables for those matching
 * the component; this data is used later to report on and document available
 * variables
 * @param {Set} usedVars
 * @param {Object} options
 * @param {String} options.pkgName
 * @returns {{ mods: string[], a11y: string[], global: string[], component: string[] }}
 */
export function filterVars(usedVars, { pkgName }) {
  const mods = [...usedVars].filter((key) => key.startsWith("--mod"));
  const a11y = [...usedVars].filter((key) => key.startsWith("--highcontrast"));

  const global = [...usedVars].filter((key) => {
    if (mods.includes(key) || a11y.includes(key)) return false;
    const componentName = pkgName.split("/").pop().toLowerCase();

    const fm = new FuzzyMatching([componentName]);
    const keyCore = key.replace(/--spectrum-/, "").split("-");

    let corrected = fm.get(keyCore[0], { maxChanges: 1 });
    if (corrected?.value === componentName) return false;

    corrected = fm.get(`${keyCore[0]}-${keyCore[1]}`, { maxChanges: 1 });
    if (corrected?.value === componentName) return false;

    return key.includes("spectrum-global") || key.includes("spectrum-alias") || key.startsWith("--spectrum-");
  });

  /**
   * Check all used variables to find those relevant to only this component
   */
  const component = [...usedVars].filter(
    (key) => !(global.includes(key) || mods.includes(key) || a11y.includes(key))
  );

  return {
    mods: mods.sort(),
    a11y: a11y.sort(),
    global: global.sort(),
    component: component.sort(),
  };
}
