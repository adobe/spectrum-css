module.exports = {
	"components/*/*.css": [
		"prettier --no-error-on-unmatched-pattern --ignore-unknown --loglevel silent --write",
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
		"prettier --no-config --no-error-on-unmatched-pattern --ignore-unknown --loglevel silent --write"
	],
	"*.md": [
		"prettier --no-config --no-error-on-unmatched-pattern --ignore-unknown --loglevel silent --write"
	]
};
