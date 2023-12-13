const fs = require("fs");
const { join } = require("path");

const test = require("ava");
const postcss = require("postcss");

const selectorParser = require("postcss-selector-parser");

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
    return fs.readFileSync(join(__dirname, filename), "utf8");
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
        transform: (selector) => {
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
            return selectorParser((selectors) => {
                selectors.each((selector) => {
                    if (!selector.nodes.some((n) => n.type === "class" && n.value === "spectrum-Heading")) {
                        return selector;
                    }

                    ["h1", "h2", "h3"].forEach((tag) => {
                        const replacement = selectorParser.tag({
                            value: tag,
                            spaces: selector.spaces,
                        });

                        const newSelector = selector.clone({
                            nodes: selector.nodes.map((node) => {
                                if (node.type === "class" && node.value === "spectrum-Heading") {
                                    return replacement;
                                }
                                return node;
                            }),
                        });

                        selectors.insertBefore(selector, newSelector);
                    });

                    selector.remove();
                });
            }).processSync(selector, { lossless: false, updateSelector: true });
        },
    });
});
