const fs = require("fs");
const { join } = require("path");

const test = require("ava");
const stylelint = require("stylelint");

const plugin = require("./index");
const { ruleName, messages } = require("./index");

async function compare(t, fixtureFilePath) {
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

test("should throw an error for unknown custom properties", async (t) => {
    const { results } = await compare(t, "unknown-prop.css");

    const warnings = results[0].warnings;

    t.is(warnings.length, 1);
    t.is(warnings[0].rule, ruleName);
    t.is(warnings[0].text, messages.expected("--prefix-component-size"));
});

test(`should not throw an error for unknown custom properties`, async (t) => {
    const { results } = await compare(t, "passing.css");

    const warnings = results[0].warnings;
    t.is(warnings.length, 0);
});
