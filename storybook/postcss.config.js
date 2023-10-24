module.exports = (ctx) => ({
    ...ctx,
    plugins: {
        "postcss-import": {},
        "postcss-preset-env":
            ctx.mode !== "PRODUCTION"
                ? {
                      stage: 3,
                      env: ctx.mode,
                      features: {
                          "logical-properties-and-values": false,
                          clamp: true,
                          "color-functional-notation": true,
                          "dir-pseudo-class": { preserve: true },
                          "nesting-rules": false, // { noIsPseudoSelector: true },
                          // "focus-visible-pseudo-class": true,
                          // https://github.com/jsxtools/focus-within
                          "focus-within-pseudo-class": true,
                          "font-format-keywords": true,
                          "not-pseudo-class": true,
                          "opacity-percentage": true,
                          // https://github.com/csstools/postcss-plugins/tree/main/plugins/css-prefers-color-scheme
                          "prefers-color-scheme-query": true,
                      },
                  }
                : {},
        "postcss-discard-comments": {
            removeAll: true,
        },
        cssnano: {
            preset: [
                "lite",
                {
                    normalizeWhitespace: false,
                    discardComments: true,
                    orderedValues: {},
                    mergeRules: {},
                    uniqueSelectors: {},
                    cssDeclarationSorter: {},
                },
            ],
        },
        /* Ensure the license is at the top of the file */
        "postcss-licensing": {
            filename: "COPYRIGHT",
            cwd: __dirname,
            skipIfEmpty: true,
        },
        "@spectrum-tools/postcss-prettier": {},
        "postcss-reporter": {
            clearReportedMessages: true,
        },
    },
});
