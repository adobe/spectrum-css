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

test("support options.replace", (t) => {
	return compare(t, "replace.css", "replace.css", {
		replace: [
			{ search: ".button", replace: ".btn" },
			{ search: ".card", replace: ".crd" },
		],
	});
});

test("support options.replace with regex", (t) => {
	return compare(t, "regex.css", "regex.css", {
		replace: [{ search: /\.(.*?)--([^ ]*?)/g, replace: ".$1_$2" }],
	});
});

test("support options.transform", (t) => {
	return compare(t, "transform.css", "transform.css", {
		transform: (selector, rule) => {
			return selector.toLowerCase();
		},
	});
});

test("support complex examples", (t) => {
	return compare(t, "complex.css", "complex.css", {
		replace: [
			{ search: ".spectrum-Heading--sizeXXL", replace: "h1" },
			{ search: ".spectrum-Heading--sizeXL", replace: "h2" },
			{ search: ".spectrum-Heading--sizeL", replace: "h3" },
		],
		transform: (selector) => {
			if (selector.startsWith(".spectrum-Heading")) {
				return selector
					.split(",")
					.map((selectorPart) => {
						return ["h1", "h2", "h3"]
							.map((h) => {
								return selectorPart.replace(".spectrum-Heading", h);
							})
							.join(",");
					})
					.join(",");
			}

			return selector;
		},
	});
});
