const fs = require("fs");
const { join } = require("path");

const test = require("ava");
const stylelint = require("stylelint");

const plugin = require("./index");
const { ruleName } = require("./index");

function compare(t, fixtureFilePath, options = {}) {
    const code = readFile(`./fixtures/${fixtureFilePath}`);
    return stylelint.lint({
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
    return fs.readFileSync(join(__dirname, filename), "utf8");
}

test("should throw an error for unused custom properties", async (t) => {
    const { results } = await compare(t, "unused.css");

    const warnings = results[0].warnings;
    t.is(warnings.length, 1);
    t.is(warnings[0].rule, ruleName);
});

test(`should not throw an error for unused custom properties`, async (t) => {
    const { results } = await compare(t, "passing.css");

    const warnings = results[0].warnings;
    t.is(warnings.length, 0);
});

test("should throw an error for unused custom properties with deep references", async (t) => {
    const { results } = await compare(t, "varRefs.css");

    // Should check warnings to ensure each of these failures was caught
    const expectedFailures = ["--selected", "--active", "--green"];

    const warnings = results[0].warnings;
    t.is(warnings.length, 3);
    t.is(warnings[0].rule, ruleName);

    // Check that each of the expected failures was caught
    expectedFailures.forEach((failure) => {
        t.true(warnings.some((warning) => warning.text.includes(failure)));
    });
});

test("should not throw an error for unused custom properties in ignore list", async (t) => {
    const { results } = await compare(t, "unused.css", {
        ignoreList: ["--prefix-component-size"],
    });

    const warnings = results[0].warnings;
    t.is(warnings.length, 0);
});

test("should not throw an error for unused custom properties wrapped in passthrough syntax", async (t) => {
    const { results } = await compare(t, "passthrough.css");

    const warnings = results[0].warnings;
    t.is(warnings.length, 0);
});

// @todo add tests for fix mode
