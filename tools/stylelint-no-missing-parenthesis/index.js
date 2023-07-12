const stylelint = require("stylelint");

const ruleName = "custom-rule/no-missing-parenthesis";

const plugin = stylelint.createPlugin(ruleName, (enabled, options) => {
	return (root, result) => {
		root.walkDecls((decl) => {
			const value = decl.value;
			if (value.includes("calc")) {
				const openParenCount = (value.match(/\(/g) || []).length;
				const closeParenCount = (value.match(/\)/g) || []).length;
				if (openParenCount !== closeParenCount) {
					const message = `Missing or extra parentheses in "${value}"`;
					const node = decl.raws.value
						? decl.raws.value.raw.indexOf("calc")
						: decl.toString().indexOf("calc");
					stylelint.utils.report({ message, node: decl, result, ruleName });
				}
			}
		});
	};
});

module.exports = plugin;
