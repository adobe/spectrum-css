const fs = require("fs");
const { join } = require("path");

const test = require("ava");
const postcss = require("postcss");

const plugin = require("./index.js");

function compare(
    t,
    fixtureFilePath,
    expectedFilePath,
    options = {
        processIdentifier: (identifier) => {
            if (identifier !== "spectrum") {
                return `spectrum--${identifier}`;
            }
            return identifier;
        },
    },
) {
    return postcss([plugin(options)])
        .process(readFile(`./fixtures/${fixtureFilePath}`), {
            from: fixtureFilePath,
        })
        .then((result) => {
            const actual = result.css;
            const expected = readFile(`./expected/${expectedFilePath}`);
            t.is(actual, expected);
            t.is(result.warnings().length, 0);
        });
}

function readFile(filename) {
    return fs.readFileSync(join(__dirname, filename), "utf8");
}

test("create basic output", (t) => {
    return compare(t, "basic.css", "basic.css");
});
