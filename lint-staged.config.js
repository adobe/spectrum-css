module.exports = {
	"*.css": [
		"stylelint --fix --cache --allow-empty-input --report-descriptionless-disables --report-invalid-scope-disables --report-needless-disables",
		"prettier --no-config --no-error-on-unmatched-pattern --ignore-unknown --log-level silent --write --config .prettierrc",
	],
	"*.{js,json},!package.json": [
		"eslint --fix --cache --no-error-on-unmatched-pattern"
	],
	"*.{md,mdx}": [
		"prettier --no-error-on-unmatched-pattern --ignore-unknown --log-level silent --write --config .prettierrc",
		"markdownlint --config .markdownlint.json --fix"
	],
	"package.json": (files) => ([
		"yarn constraints --fix",
		"yarn install --refresh-lockfile",
		`eslint --fix --cache --no-error-on-unmatched-pattern ${files.join(" ")}`,
		"git add yarn.lock"
	]),
	"dist/*.css": [
		"prettier --no-error-on-unmatched-pattern --ignore-unknown --log-level silent --write --config .prettierrc"
	],
	"components/*/dist/metadata.json": (files) => {
		return [
			...(files.map(file => `pajv test --valid -s ./schemas/metadata.schema.json -d "${file}"`) ?? []),
		];
	},
	".github/renovate.json": () => ([
		"yarn dlx --package renovate -- renovate-config-validator"
	])
};
