import { readFileSync } from "fs";
import { join } from "path";
import { fileURLToPath } from "url";
const __dirname = fileURLToPath(new URL(".", import.meta.url));

import test from "ava";
import stylelint from "stylelint";
const { lint } = stylelint;

import plugin from "./index.js";
const { ruleName } = plugin;

async function compare(_, fixtureFilePath) {
	const code = readFile(`./fixtures/${fixtureFilePath}`);
	return lint({
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
	return readFileSync(join(__dirname, filename), "utf8");
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
