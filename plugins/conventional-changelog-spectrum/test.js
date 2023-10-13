"use strict";

const path = require("path");

const preset = require(".");

const conventionalChangelogCore = require("conventional-changelog-core");

const test = require("ava");

const simpleGit = require("simple-git");
const mock = require("mock-fs");

const through = require("through2");

let git;
test.beforeEach(async () => {
    mock({
        "tmp/git-templates": {},
    });

    git = simpleGit("tmp");

    /* eslint-disable no-console */
    await git
        .init({
            template: "git-templates",
        })
        .status()
        .then((report) => console.log(report))
        .catch((err) => console.error(err));
    /* eslint-enable no-console */
});

test.afterEach(() => {
    mock.restore();
});

function compare(t, { config = { config: preset }, commits = [] } = {}, checks = []) {
    let i = 0;
    for (const commit of commits) {
        git.commit(commit.message, commit.body);
    }

    return conventionalChangelogCore(config)
        .on("error", t.fail)
        .pipe(
            through(
                (chunk, _, cb) => {
                    chunk = chunk.toString();

                    for (const check of checks) {
                        check(chunk);
                    }

                    i++;
                    cb();
                },
                () => t.is(i, 1),
            ),
        );
}

test.serial("should work if there is no semver tag", (t) => {
    compare(
        t,
        {
            commits: [
                {
                    message: "build: first build setup",
                    body: "BREAKING CHANGE: New build system.",
                },
                {
                    message: "ci(travis): add TravisCI pipeline",
                    body: "BREAKING CHANGE: Continuously integrated.",
                },
                {
                    message: "feat: amazing new module",
                    body: "BREAKING CHANGE: Not backward compatible.",
                },
                {
                    message: "fix(compile): avoid a bug",
                    body: "BREAKING CHANGE: The Change is huge.",
                },
                {
                    message: "perf(ngOptions): make it faster",
                    body: " closes #1, #2",
                },
                {
                    message: "revert(ngOptions): bad commit",
                },
                {
                    message: "fix(*): oops",
                },
            ],
        },
        [
            (chunk) => t.regex(chunk, "first build setup"),
            (chunk) => t.regex(chunk, "**travis:** add TravisCI pipeline"),
            (chunk) => t.regex(chunk, "**travis:** Continuously integrated."),
            (chunk) => t.regex(chunk, "amazing new module"),
            (chunk) => t.regex(chunk, "**compile:** avoid a bug"),
            (chunk) => t.regex(chunk, "make it faster"),
            (chunk) =>
                t.regex(
                    chunk,
                    ", closes [#1](https://github.com/conventional-changelog/conventional-changelog/issues/1) [#2](https://github.com/conventional-changelog/conventional-changelog/issues/2)",
                ),
            (chunk) => t.regex(chunk, "New build system."),
            (chunk) => t.regex(chunk, "Not backward compatible."),
            (chunk) => t.regex(chunk, "**compile:** The Change is huge."),
            (chunk) => t.regex(chunk, "Build System"),
            (chunk) => t.regex(chunk, "Continuous Integration"),
            (chunk) => t.regex(chunk, "Features"),
            (chunk) => t.regex(chunk, "Bug Fixes"),
            (chunk) => t.regex(chunk, "Performance Improvements"),
            (chunk) => t.regex(chunk, "Reverts"),
            (chunk) => t.regex(chunk, "bad commit"),
            (chunk) => t.regex(chunk, "BREAKING CHANGE"),

            (chunk) => t.regex(chunk, "ci"),
            (chunk) => t.regex(chunk, "feat"),
            (chunk) => t.regex(chunk, "fix"),
            (chunk) => t.regex(chunk, "perf"),
            (chunk) => t.regex(chunk, "revert"),
            (chunk) => t.regex(chunk, "***:**"),
            (chunk) => t.regex(chunk, ": Not backward compatible."),
        ],
    );
});

test.serial("should replace #[0-9]+ with GitHub issue URL", (t) => {
    compare(
        t,
        {
            commits: [
                {
                    message: "feat(awesome): addresses the issue brought up in #133",
                },
            ],
        },
        [
            (chunk) =>
                t.regex(chunk, "[#133](https://github.com/conventional-changelog/conventional-changelog/issues/133)"),
        ],
    );
});

test.serial("should remove the issues that already appear in the subject", (t) => {
    compare(
        t,
        {
            commits: [
                {
                    message: "feat(awesome): fix #88",
                },
            ],
        },
        [
            (chunk) =>
                t.regex(chunk, "[#88](https://github.com/conventional-changelog/conventional-changelog/issues/88)"),
            (chunk) =>
                t.regex(
                    chunk,
                    "closes [#88](https://github.com/conventional-changelog/conventional-changelog/issues/88)",
                ),
        ],
    );
});

test.serial("should replace @username with GitHub user URL", (t) => {
    compare(
        t,
        {
            commits: [
                {
                    message: "feat(awesome): issue brought up by @bcoe! on Friday",
                },
            ],
        },
        [(chunk) => t.regex(chunk, "[@bcoe](https://github.com/bcoe)")],
    );
});

test.serial("should not discard commit if there is BREAKING CHANGE", (t) => {
    compare(
        t,
        {
            commits: [
                {
                    message: "build(npm): edit build script",
                    body: "BREAKING CHANGE: The Change is huge.",
                },
                {
                    message: "ci(travis): setup travis",
                    body: "BREAKING CHANGE: The Change is huge.",
                },
                {
                    message: "docs(readme): make it clear",
                    body: "BREAKING CHANGE: The Change is huge.",
                },
                {
                    message: "style(whitespace): make it easier to read",
                    body: "BREAKING CHANGE: The Change is huge.",
                },
                {
                    message: "refactor(code): change a lot of code",
                    body: "BREAKING CHANGE: The Change is huge.",
                },
                {
                    message: "test(*): more tests",
                    body: "BREAKING CHANGE: The Change is huge.",
                },
            ],
        },
        [
            (chunk) => t.regex(chunk, "Continuous Integration"),
            (chunk) => t.regex(chunk, "Build System"),
            (chunk) => t.regex(chunk, "Documentation"),
            (chunk) => t.regex(chunk, "Styles"),
            (chunk) => t.regex(chunk, "Code Refactoring"),
            (chunk) => t.regex(chunk, "Tests"),
        ],
    );
});

test.serial("should work if there is a semver tag", (t) => {
    git.tag(["v1.0.0"]);

    compare(
        t,
        {
            commits: [
                {
                    message: "feat: some more features",
                },
            ],
        },
        [(chunk) => t.regex(chunk, "some more features"), (chunk) => t.regex(chunk, "BREAKING")],
    );
});

test.serial("should work with unknown host", (t) => {
    compare(
        t,
        {
            config: {
                config: preset,
                pkg: {
                    path: path.join(__dirname, "fixtures/_unknown-host.json"),
                },
            },
            commits: [
                {
                    message: "feat(*): implementing #5 by @dlmr",
                    body: " closes #10",
                },
            ],
        },
        [(chunk) => t.regex(chunk, "(http://unknown/compare"), (chunk) => t.regex(chunk, "](http://unknown/commits/")],
    );
});

test.serial("should work specifying where to find a package.json using conventional-changelog-core", (t) => {
    compare(
        t,
        {
            config: {
                config: preset,
                pkg: {
                    path: path.join(__dirname, "fixtures/_known-host.json"),
                },
            },
        },
        [
            (chunk) => t.regex(chunk, "(https://github.com/conventional-changelog/example/compare"),
            (chunk) => t.regex(chunk, "](https://github.com/conventional-changelog/example/commit/"),
            (chunk) => t.regex(chunk, "](https://github.com/conventional-changelog/example/issues/"),
        ],
    );
});

test.serial("should fallback to the closest package.json when not providing a location for a package.json", (t) => {
    compare(t, {}, [
        (chunk) => t.regex(chunk, "(https://github.com/conventional-changelog/conventional-changelog/compare"),
        (chunk) => t.regex(chunk, "](https://github.com/conventional-changelog/conventional-changelog/commit/"),
        (chunk) => t.regex(chunk, "](https://github.com/conventional-changelog/conventional-changelog/issues/"),
    ]);
});

test.serial("should support non public GitHub repository locations", (t) => {
    compare(
        t,
        {
            config: {
                config: preset,
                pkg: {
                    path: path.join(__dirname, "fixtures/_ghe-host.json"),
                },
            },
        },
        [
            (chunk) => t.regex(chunk, "(https://github.internal.example.com/dlmr"),
            (chunk) => t.regex(chunk, "(https://github.internal.example.com/conventional-changelog/internal/compare"),
            (chunk) => t.regex(chunk, "](https://github.internal.example.com/conventional-changelog/internal/commit/"),
            (chunk) =>
                t.regex(chunk, "5](https://github.internal.example.com/conventional-changelog/internal/issues/5"),
            (chunk) =>
                t.regex(
                    chunk,
                    " closes [#10](https://github.internal.example.com/conventional-changelog/internal/issues/10)",
                ),
        ],
    );
});

test.serial("should only replace with link to user if it is an username", (t) => {
    compare(
        t,
        {
            commits: [
                {
                    message: "fix: use npm@5 (@username)",
                },
                {
                    message: "build(deps): bump @dummy/package from 7.1.2 to 8.0.0",
                    body: "BREAKING CHANGE: The Change is huge.",
                },
            ],
        },
        [
            (chunk) => t.regex(chunk, "(https://github.com/5"),
            (chunk) => t.regex(chunk, "(https://github.com/username"),
            (chunk) => t.regex(chunk, "[@dummy](https://github.com/dummy)/package"),
            (chunk) => t.regex(chunk, "bump @dummy/package from"),
        ],
    );
});
