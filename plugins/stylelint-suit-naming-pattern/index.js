/*!
Copyright 2023 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

const parser = require("postcss-selector-parser");

const stylelint = require("stylelint");

const ruleName = "spectrum-tools/suit-naming-pattern";
const messages = stylelint.utils.ruleMessages(ruleName, {
  missingPrefix: (selector) =>
    `Expected class to be prefixed with 'spectrum-', received '${selector}.'`,
  componentFormat: (selector) =>
    `Expected class for a component to follow 'spectrum-<ComponentName>[-descendentName][--modifierName]', received '${selector}' instead.`,
  contextFormat: (selector) =>
    `Expected class for contexts to follow 'spectrum--<context>', received '${selector}' instead.`,
  utilityFormat: (selector) =>
    `Expected class for utilities to follow 'is-<utilityName>', received '${selector}' instead.`,
});

const pattern = {
  utility: /^is-[a-z]+[a-zA-Z0-9]+/,
  component:
    /^spectrum-?([A-Z][a-zA-Z0-9]+)*([-]{1,2}((S*d+S*)[a-zA-Z0-9]+|[a-z][a-zA-Z0-9-]+]*(?!d))?(?!s|\n|,=))?$/,
  context:
    /^spectrum(?:--(express|light|lightest|dark|darkest|medium|large))?$/,
};

const rule = (enabled) => {
  return (root, result) => {
    if (!enabled) return;

    root.walkRules(async (rule) => {
      if (!rule.selector) return;

      return await parser((selectors) => {
        if (!selectors) return;

        selectors.walkClasses((selectorNode) => {
          const selector = selectorNode.value;

          /* If the selector matches any of the allowed patterns, throw no errors */
          if (
            pattern.component.test(selector) ||
            pattern.context.test(selector) ||
            pattern.utility.test(selector)
          ) {
            return;
          }

          // If it starts with "u-" or "is-" we can assume it was aiming to be utility
          if (
            (selector.startsWith("u-") ||
              selector.startsWith("is-") ||
              ["clicked", "active", "focus", "hover"].some((state) =>
                selector.toLowerCase().split("-").includes(state),
              )) &&
            !pattern.utility.test(selector)
          ) {
            stylelint.utils.report({
              message: messages.contextFormat,
              messageArgs: [selector],
              node: rule,
              result,
              ruleName,
            });
            return;
          }

          if (!selector.startsWith("spectrum")) {
            stylelint.utils.report({
              message: messages.missingPrefix,
              messageArgs: [selector],
              node: rule,
              result,
              ruleName,
            });
            return;
          }

          // If the selector includes a context keyword but doesn't match the context pattern
          if (
            [
              "express",
              "light",
              "lightest",
              "dark",
              "darkest",
              "medium",
              "large",
            ].some((context) =>
              selector.toLowerCase().split("-").includes(context),
            ) &&
            !pattern.context.test(selector)
          ) {
            stylelint.utils.report({
              message: messages.contextFormat,
              messageArgs: [selector],
              node: rule,
              result,
              ruleName,
            });
            return;
          }

          // The component format is the most commonly used pattern so it's our default message
          stylelint.utils.report({
            message: messages.componentFormat,
            messageArgs: [selector],
            node: rule,
            result,
            ruleName,
          });
        });
      }).process(rule.selector);
    });
  };
};

rule.ruleName = ruleName;
rule.messages = messages;

module.exports = stylelint.createPlugin(ruleName, rule);
