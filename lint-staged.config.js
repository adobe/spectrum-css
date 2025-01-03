module.exports = {
	"*.css": [
		"stylelint --fix --cache --allow-empty-input --report-descriptionless-disables --report-invalid-scope-disables --report-needless-disables",
		"prettier --no-config --no-error-on-unmatched-pattern --ignore-unknown --log-level silent --write --config .prettierrc",
	],
	"*.{js,json}": [
		"eslint --fix --cache --no-error-on-unmatched-pattern --quiet --ignore-pattern \"!.storybook/\""
	],
	"dist/*.css": [
		"prettier --no-config --no-error-on-unmatched-pattern --ignore-unknown --log-level silent --write --config .prettierrc"
	],
	"components/*/metadata/metadata.json": (files) => {
		return [
			...(files.map(file => `pajv test --valid -s ./schemas/metadata.schema.json -d "${file}"`) ?? []),
			`prettier --no-config --no-error-on-unmatched-pattern --ignore-unknown --log-level silent --write ${files.join(" ")} --config .prettierrc`
		];
	},
	"*.{md,mdx}": [
		"prettier --no-config --no-error-on-unmatched-pattern --ignore-unknown --log-level silent --write --config .prettierrc"
	]
};
