module.exports = {
	"*.css": [
		"prettier --no-error-on-unmatched-pattern --ignore-unknown --log-level silent --write",
	],
	"*.{js,json}": [
		"eslint --fix --cache --no-error-on-unmatched-pattern --quiet --ignore-pattern \"!.storybook/\""
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
	".storybook/deprecated/*/*.yml": (files) => {
		return [
			...(files.map(file => `pajv test --valid -s ./schemas/documentation.schema.json -d "${file}"`) ?? []),
            `prettier --no-config --no-error-on-unmatched-pattern --ignore-unknown --log-level silent --write ${files.join(" ")}`
		];
	},
	"*.{md,mdx}": [
		"prettier --no-config --no-error-on-unmatched-pattern --ignore-unknown --log-level silent --write"
	]
};
