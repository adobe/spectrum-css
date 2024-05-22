import { readFileSync } from "fs";
import { join } from "path";
import { fileURLToPath } from "url";
const __dirname = fileURLToPath(new URL(".", import.meta.url));

import test from "ava";
import stylelint from "stylelint";
const { lint } = stylelint;

import plugin from "./index.js";
const { ruleName } = plugin;

async function compare(t, fixtureFilePath, options = {}) {
	const code = readFile(`./fixtures/${fixtureFilePath}`);
	return lint({
		code,
		config: {
			plugins: [plugin],
			rules: {
				[ruleName]: [true, options],
			},
		},
	});
}

function readFile(filename) {
	return readFileSync(join(__dirname, filename), "utf8");
}

test("should throw an error for unknown custom properties", async (t) => {
	const { results } = await compare(t, "unknown-prop.css");

	const warnings = results[0].warnings;

	t.is(warnings.length, 2);
	t.is(warnings[0].rule, ruleName);
});

test("should not throw an error for unknown custom properties", async (t) => {
	const { results } = await compare(t, "passing.css");

	const warnings = results[0].warnings;
	t.is(warnings.length, 0);
});
