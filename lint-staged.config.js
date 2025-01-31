module.exports = {
	"*.css": [
		"stylelint --fix --cache --allow-empty-input --report-descriptionless-disables --report-invalid-scope-disables --report-needless-disables",
		"prettier --no-config --no-error-on-unmatched-pattern --ignore-unknown --log-level silent --write --config .prettierrc",
	],
	"*.{js,json}": [
		"eslint --fix --cache --no-error-on-unmatched-pattern --quiet"
	],
	"package.json": [
		"yarn constraints --fix"
	],
	"dist/*.css": [
		"prettier --no-config --no-error-on-unmatched-pattern --ignore-unknown --log-level silent --write --config .prettierrc"
	],
	"components/*/dist/metadata.json": (files) => {
		return [
			...(files.map(file => `pajv test --valid -s ./schemas/metadata.schema.json -d "${file}"`) ?? []),
		];
	},
	"*.{md,mdx}": [
		"prettier --no-config --no-error-on-unmatched-pattern --ignore-unknown --log-level silent --write --config .prettierrc"
	]
};
