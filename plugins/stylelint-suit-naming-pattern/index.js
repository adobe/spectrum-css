const stylelint = require("stylelint");
const parser = require("postcss-selector-parser");
const ruleName = "custom-rule/suit-naming-pattern";

const messages = stylelint.utils.ruleMessages(ruleName, {
	wrongCapitalization: (className) =>
		`Component Class name "${className}" should follow the SUIT-style naming conventions with the ".spectrum" prefix.`,
	wrongUtilityClassName: (className) =>
		`Utility Class name "${className}" should follow the SUIT-style naming conventions with the ".u-camelCase" prefix.`,
});
const utilityClassPattern = /^u-[a-z]+[a-zA-Z0-9]+/;

const suitClassPattern =
	/^spectrum(--(?:express|light|lightest|dark|darkest|medium|large))?((-[A-Z][a-zA-Z0-9]+)([-]{1,2}((\S*\d+\S*)[a-zA-Z0-9]+|[a-z][a-zA-Z0-9-]+]*(?!\d)))?(\s|,\s)?)?$/;

module.exports = stylelint.createPlugin(ruleName, () => {
	return (root, result) => {
		root.walkRules(async (rule) => {
			await parser((selectors) => {
				selectors.walkClasses((selectorNode) => {
					const selector = selectorNode.value;
					if (
						selector.startsWith("spectrum") &&
						!suitClassPattern.test(selector)
					) {
						stylelint.utils.report({
							message: messages.wrongCapitalization(selector),
							node: rule,
							result,
							ruleName,
						});
					} else if (
						selector.startsWith("u-") &&
						!utilityClassPattern.test(selector)
					) {
						stylelint.utils.report({
							message: messages.wrongUtilityClassName(selector),
							node: rule,
							result,
							ruleName,
						});
					}
				});
			}).process(rule.selector);
		});
	};
});

module.exports.ruleName = ruleName;
module.exports.messages = messages;
