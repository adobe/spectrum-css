export default {
	"components/*/*.css": [
		"prettier --no-error-on-unmatched-pattern --ignore-unknown --log-level silent --write",
		"stylelint --fix --cache --allow-empty-input --quiet"
	],
	"*.json": [
		"eslint --fix --cache --no-error-on-unmatched-pattern --quiet"
	],
	"components/*/stories/*.js": [
		"eslint --fix --cache --no-error-on-unmatched-pattern --quiet"
	],
	"plugins/*/*.js": [
		"eslint --fix --cache --no-error-on-unmatched-pattern --quiet"
	],
	"dist/*.css": [
		"prettier --no-config --no-error-on-unmatched-pattern --ignore-unknown --log-level silent --write"
	],
	"components/*/metadata/*.{yml,yaml}": (files) => {
		return [
			...(files.map(file => `pajv test --valid -s ./schemas/documentation.schema.json -d "${file}"`) ?? []),
            `prettier --no-config --no-error-on-unmatched-pattern --ignore-unknown --log-level silent --write ${files.join(" ")}`
		];
	},
	"*.md": [
		"prettier --no-config --no-error-on-unmatched-pattern --ignore-unknown --log-level silent --write"
	]
};
