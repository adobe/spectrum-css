const fs = require("fs");
const { join } = require("path");

const test = require("ava");
const stylelint = require("stylelint");

const plugin = require("./index");
const { ruleName, messages } = require("./index");

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

test("should throw an error for missing or extra parentheses in calc values", async (t) => {
    const { results } = await compare(t, "missing-parenthesis.css");

    const warnings = results[0].warnings;

    t.is(warnings.length, 1);
    t.is(warnings[0].rule, ruleName);
    t.is(warnings[0].text, messages.expected("calc(100px - 10px"));
});

test(`should not throw an error for parenthesis usage`, async (t) => {
    const { results } = await compare(t, "passing.css");

    const warnings = results[0].warnings;
    t.is(warnings.length, 0);
});
