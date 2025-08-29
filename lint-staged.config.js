module.exports = {
	"dist/*.css": [
		"prettier --no-error-on-unmatched-pattern --ignore-unknown --log-level silent --write --config .prettierrc",
	],
	"*.css": [
		"stylelint --fix --cache --allow-empty-input --report-descriptionless-disables --report-invalid-scope-disables --report-needless-disables",
		"prettier --no-error-on-unmatched-pattern --ignore-unknown --log-level silent --write --config .prettierrc",
	],
	"package.json": (files) => [
		"yarn constraints --fix",
		"yarn install --refresh-lockfile",
		`eslint --fix --cache --no-error-on-unmatched-pattern ${files.join(" ")}`,
		"git add yarn.lock",
	],
	"components/*/dist/metadata.json": (files) => {
		return [
			...(files.map(
				(file) =>
					`pajv test --valid -s ./schemas/metadata.schema.json -d "${file}"`,
			) ?? []),
		];
	},
	".github/renovate.json": () => [
		"yarn dlx --package renovate -- renovate-config-validator",
	],
	"*.{js,json}": ["eslint --fix --cache --no-error-on-unmatched-pattern"],
	"*.md": [
		"prettier --no-error-on-unmatched-pattern --ignore-unknown --log-level silent --write --config .prettierrc",
		"markdownlint --config .markdownlint.json --fix",
	],
	"*": [
		"prettier --no-error-on-unmatched-pattern --ignore-unknown --log-level silent --write --config .prettierrc",
	],
};
