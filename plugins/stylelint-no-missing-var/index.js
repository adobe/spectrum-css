const stylelint = require("stylelint");

const ruleName = "custom-rule/no-missing-var";

const plugin = stylelint.createPlugin(ruleName, (enabled, options) => {
	return (root, result) => {
		root.walkDecls((decl) => {
			const value = decl.value.replace(/\s/g, ""); // Remove whitespace
			const regex = /(?<!var\(\S*)--\S+\b/;
			if (regex.test(value)) {
				const message = `Missing 'var' before custom property "${
					value.match(regex)[0]
				}"`;
				stylelint.utils.report({ message, node: decl, result, ruleName });
			}
		});
	};
});

module.exports = plugin;
