const fs = require("fs");
const { join } = require("path");

const test = require("ava");
const stylelint = require("stylelint");

const plugin = require("./index");
const { ruleName } = require("./index");

async function compare(_, fixtureFilePath) {
	const code = readFile(`./fixtures/${fixtureFilePath}`);
	return stylelint.lint({
		code,
		config: {
			plugins: [plugin],
			rules: {
				[ruleName]: true,
			},
		},
	});
}

function readFile(filename) {
	return fs.readFileSync(join(__dirname, filename), "utf8");
}

test("should throw an error for missing \"var\" before custom properties", async (t) => {
	const { results } = await compare(t, "missing-var.css");

	const warnings = results[0].warnings;

	t.is(warnings.length, 2);
	t.is(warnings[0].rule, ruleName);

	// @todo Validate specific messages
	// t.is(warnings[0].text, messages.expected("--spectrum-well-color"));
	// t.is(warnings[1].text, messages.expected("--spectrum-well-background-color"));
});

test("should not throw an error for \"var\" usage", async (t) => {
	const { results } = await compare(t, "passing.css");

	const warnings = results[0].warnings;
	t.is(warnings.length, 0);
});
