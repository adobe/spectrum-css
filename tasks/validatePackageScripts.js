const fs = require('fs');
const { promisify } = require('util');
const exec = promisify(require('child_process').exec);
const path = require('path');

// available assertions: https://github.com/avajs/ava/blob/main/docs/03-assertions.md
const test = require('ava');
// Using mock-fs to mock the filesystem for testing without actually writing to disk.
const mock = require('mock-fs');

const extendedTimeout = process.env.timeout || 800000;
const componentsDir = path.join(process.cwd(), 'components');

test.beforeEach(() => {
    mock({
        'components': mock.load(componentsDir, { lazy: false }),
    });
});

test.afterEach(mock.restore);

/** @type import('ava').MacroFn */
const run = test.macro(async (t, setup = null, timeout = 0) => {
    if (timeout > 0) t.timeout(timeout);
    if (setup) await exec(`yarn ${setup}`);
    return exec(`yarn ${t.title.trim()}`).then(() => {
        const sourceDir = fs.readdirSync(componentsDir, {
            withFileTypes: true,
        });

        if (!sourceDir) {
            return t.fail('No components found in components directory.');
        }

        for (const component of sourceDir) {
            if (!component.isDirectory()) continue;

            const componentDir = path.join(componentsDir, component.name);
            if (!fs.existsSync(path.join(componentDir, 'dist'))) {
                return t.fail(`${component.name} dist: not found`);
            }

            const pkgFile = path.join(componentDir, 'package.json');
            let pkg;
            try {
                pkg = JSON.parse(fs.readFileSync(pkgFile, 'utf8'));
            } catch (e) {
                return t.fail(`${component} package.json: ${e.message}`);
            }

            const isMigrated = pkg?.devDependencies?.['@spectrum-css/component-builder-simple'] !== undefined;

            const generatedFiles = fs.readdirSync(path.join(componentDir, 'dist')) || [];

            if (isMigrated) {
                // Migrated components should have the following files:
                t.like(generatedFiles, ['index-base.css', 'index-theme.css', 'index-vars.css', 'index.css', 'themes'], `${component.name}: generated files do not match the expected output.`);
            } else {
                // Legacy components should have the following files:
                t.like(generatedFiles, ['index-vars.css', 'vars.css', 'themes'], `${component.name}: generated files do not match the expected output.`);
            }
        }
    }).catch(t.fail);
});

/** Clean-up tasks */
// test.serial(`clean`, run);

/** Linters */
// test(`lint:components`, run);

/** Build tasks */
// @note this doesn't need a clean setup b/c it's included as a pre-task
test.serial(`build`, run, null, extendedTimeout);

// test.serial(`build:components`, run, `clean`, extendedTimeout);
// test.serial(`build:site`, run, `rimraf ./dist`);
// test.serial(`build:preview`, run, `rimraf ./tools/preview/storybook-static dist/preview`, extendedTimeout);
// test.serial(`version:build`, run, null, extendedTimeout);

// @note these don't need a clean setup b/c it's included as a pre-task
// test.serial(`build:all`, run, null, extendedTimeout * 2);
// @note ci is an alias of build:all
// test.serial(`ci-all`, run, null, extendedTimeout * 2);
