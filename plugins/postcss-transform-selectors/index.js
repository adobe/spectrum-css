const processed = Symbol("processed");

/** @type import('postcss').PluginCreator */
module.exports = ({ replace, transform }) => ({
    postcssPlugin: "postcss-transform-selectors",
    Rule(rule) {
        /* Skip if this has already been processed */
        if (rule[processed]) return;

        const warn = (message, word) =>
            rule.warn(message, {
                word,
                index: rule.sourceIndex,
                endIndex: rule.sourceIndex + rule.selector.length,
            });

        let hasUpdated = false;
        let selectors = rule.selectors.map((selector) => {
            if (typeof replace === "undefined" && typeof transform === "undefined") {
                return selector;
            }

            let updatedValue = selector.toString();
            if (typeof replace !== "undefined") {
                if (!Array.isArray(replace)) {
                    if (typeof replace === "string") {
                        replace = [
                            {
                                search: "*", // replace all
                                replace,
                            },
                        ];
                    } else {
                        warn(`Invalid replace type "${typeof replace}", expects an array or string`, replace);
                    }
                } else {
                    for (let r of replace) {
                        if (typeof r.replace !== "string") {
                            warn(`Invalid replace type "${typeof r.replace}", expects a string`, r.replace);
                            continue;
                        }

                        if (typeof r.search === "string") {
                            // always replace globally for strings
                            r.search = new RegExp(r.search, "g");
                        }

                        updatedValue = updatedValue.replace(r.search, r.replace);
                    }
                }
            }

            if (typeof transform === "function") {
                updatedValue = transform(updatedValue, rule);
            }

            hasUpdated = Boolean(updatedValue !== selector.toString());

            return updatedValue;
        });

        if (!hasUpdated) return;

        rule.assign({
            // This allows us to pass in comma separated selectors during the transform
            selectors: selectors.map((selector) => selector.split(",").map((s) => s.trim())).flat(),
        });
        rule[processed] = true;
    },
});

module.exports.postcss = true;
