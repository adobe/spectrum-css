const fs = require("fs");
const test = require("ava");
const postcss = require("postcss");
const plugin = require("./index.js");

function compare(t, fixtureFilePath, expectedFilePath, options = {}) {
	return postcss([plugin(options)])
		.process(readFile(`./fixtures/${fixtureFilePath}`), {
			from: fixtureFilePath,
		})
		.then((result) => {
			const expected = result.css;
			const actual = readFile(`./expected/${expectedFilePath}`);
			t.is(expected, actual);
			t.is(result.warnings().length, 0);
		});
}

function readFile(filename) {
	return fs.readFileSync(filename, "utf8");
}

test("drop unused vars", (t) => {
	return compare(t, "unused.css", "unused.css");
});

test("drop unused vars, even if referenced by other vars", (t) => {
	return compare(t, "varRefs.css", "varRefs.css");
});
