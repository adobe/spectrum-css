const postcss = require("postcss");
const valueParser = require("postcss-value-parser");

function getUsedVars(root) {
	const usedAnywhere = [];
	const usedInProps = [];
	const variableRelationships = {};

	root.walkRules((rule) => {
		rule.walkDecls((decl) => {
			const usedInDecl = [];
			const isVar = decl.prop.startsWith("--");
			const matches = decl.value.match(/var\(.*?\)/g);
			if (matches) {
				// Parse value and get a list of variables used
				const parsed = valueParser(decl.value);
				parsed.walk((node) => {
					if (node.type === "function" && node.value === "var") {
						if (node.nodes.length) {
							const varName = node.nodes[0].value;
							usedInDecl.push(varName);
							usedAnywhere.push(varName);
							if (!isVar) {
								usedInProps.push(varName);
							}
						}
					}
				});
			}

			// Store every variable referenced by this var
			if (isVar && usedInDecl.length) {
				for (let varName of usedInDecl) {
					variableRelationships[varName] = variableRelationships[varName] || [];
					variableRelationships[varName].push(decl.prop);
				}
			}
		});
	});

	return {
		usedAnywhere,
		usedInProps,
		variableRelationships,
	};
}

function dropUnused(
	root,
	{ usedAnywhere, usedInProps, variableRelationships },
	fix = true
) {
	root.walkRules((rule) => {
		rule.walkDecls((decl) => {
			if (!decl.prop.startsWith("--")) return;

			const varName = decl.prop;

			// Note if it seems like this variable is unused
			if (!usedAnywhere.includes(varName)) {
				if (!fix)
					decl.warn(root.toResult(), "Possible unused variable definition", {
						word: varName,
						index: decl.sourceIndex,
					});
				else decl.remove();

				return;
			}

			if (!usedInProps.includes(varName)) {
				// Drop a variable if everything that references it has been removed
				const relatedVars = variableRelationships[varName];

				if (!relatedVars || relatedVars.length === 0) return;

				// Check if everything that references this variable has been removed
				const keep = Object.entries(relatedVars).reduce(
					(keep, [, relatedVar]) => {
						if (usedAnywhere.includes(relatedVar)) return true;
						else return keep;
					},
					false
				);

				if (keep) return;

				if (fix) decl.remove();
				else {
					decl.warn(root.toResult(), "Possible unused variable definition", {
						word: varName,
						index: decl.sourceIndex,
					});
				}
			}
		});
	});
}

module.exports = postcss.plugin(
	"postcss-dropunusedvars",
	function (options = {}) {
		return (root) => {
			const fix = options.fix ?? true;
			// Drop unused variable definitions
			dropUnused(root, getUsedVars(root), fix);
		};
	}
);
