/*!
Copyright 2023 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

const path = require('path');
const fsp = require('fs').promises;

const fg = require('fast-glob');
const semver = require('semver');

const yargs = require('yargs');
const { hideBin } = require('yargs/helpers');

const rootDir = process.cwd();

const rootPkg = require(path.join(rootDir, 'package.json'));
const expectedHomepage = (name) => `${rootPkg.homepage}${name && !rootPkg.homepage.endsWith('/') ? `/${name}` : name}`;

/**
 * Validate peer deps for components; escapes before running lerna if they are not valid.
 **/
async function main(dirs = [`${path.join(rootDir, 'components')}/*`], verbose = false) {
    const promises = [];
    for (const pkg of await fg(dirs.map(d => path.dirname(d)), {
        onlyDirectories: true,
    })) {
        const report = [];
        let updated = false;
        const packagePath = path.join(pkg, 'package.json');
        const packageJSON = await fsp.readFile(packagePath).then(JSON.parse);
        if (!packageJSON) {
            console.error(`Unable to read package.json for ${packagePath}`);
            continue;
        }

        const { name, license, publishConfig, repository, author, homepage, bugs, main, peerDependencies, devDependencies } = packageJSON;
        if (!name) {
            console.error(`Unable to read name for ${packagePath}`);
            continue;
        }
        if (verbose) report.push(`- ${name}`);

        /* Validate expected license */
        if (!license || license !== rootPkg.license) {
            packageJSON.license = rootPkg.license;
            if (verbose) report.push(`    Adding license=${packageJSON.license}`);
            updated = true;
        }

        /* Validate expected publish access */
        if (!publishConfig || publishConfig.access != 'public') {
            packageJSON.publishConfig = {
                ...packageJSON.publishConfig,
                access: 'public',
            };
            if (verbose) report.push(`    Adding publishConfig.access=public`);
            updated = true;
        }

        /* Validate repository */
        if (
            !repository ||
            !repository.directory ||
            !repository.type ||
            !repository.url ||
            repository.type !== rootPkg.repository?.type ||
            repository.url !== rootPkg.repository?.url
        ) {
            packageJSON.repository = {
                ...rootPkg.repository,
                directory: path.relative(rootDir, pkg),
            };
            if (verbose) report.push(`    Adding repository details=${JSON.stringify(packageJSON.repository)}`);
            updated = true;
        }

        /* Validate author */
        if (!author || author !== rootPkg.author) {
            packageJSON.author = rootPkg.author;
            if (verbose) report.push(`    Adding author=${packageJSON.author}`);
            updated = true;
        }

        /* Validate homepage */
        if (!homepage) {
            packageJSON.homepage = expectedHomepage(name.split('/').pop());
            if (verbose) report.push(`    Adding homepage=${packageJSON.homepage}`);
            updated = true;
        }

        /* Validate bugs url */
        if (!bugs || !bugs.url || bugs.url !== rootPkg.bugs?.url) {
            packageJSON.bugs = rootPkg.bugs;
            if (verbose) report.push(`    Adding bugs.url=${JSON.stringify(packageJSON.bugs)}`);
            updated = true;
        }

        /* Validate main */
        if (!main) {
            packageJSON.main = 'dist/index-vars.css';
            if (verbose) report.push(`    Adding main=dist/index-vars.css`);
            updated = true;
        }

        const peerDepsCheck = await checkPeerDependencies(peerDependencies, devDependencies, verbose);
        if (peerDepsCheck) {
            ['peerDependencies', 'devDependencies'].forEach((dep) => {
                if (peerDepsCheck[dep]) {
                    packageJSON[dep] = peerDepsCheck[dep];
                    updated = true;
                }
            });
        }

        if (!updated) continue;

        report.map(r => console.log(r));
        promises.push(fsp.writeFile(packagePath, JSON.stringify(packageJSON, null, 2)));
    }

    if (promises.length === 0) {
        console.log(`👍 All package.json metadata validated.`);
        process.exit(0);
    }

    return await Promise.all(promises);
};


/**
 * Validate peer deps for components; escapes before running lerna if they are not valid.
 **/
async function checkPeerDependencies(peerDependencies, devDependencies, verbose = false) {
    if (!peerDependencies) return;

    const report = [];
    let updated;
    for (const dependency of Object.keys(peerDependencies)) {
        if (!devDependencies) continue;
        const devDepVer = semver.coerce(devDependencies[dependency]?.replace('^', ''));
        if (devDepVer === null) continue;
        if (semver.satisfies(devDepVer, peerDependencies[dependency])) continue;

        // Set a new peer dependency or bump the dev dependency to align them
        const peerDepVer = semver.coerce(peerDependencies[dependency]);
        if (semver.gt(devDepVer, peerDepVer)) {
            if (verbose) {
                report.push(`    ⚠️ Out of date peerDependencies ${dependency}: devDependency ${devDepVer.toString()} is greater than ${peerDepVer.toString()}`);
            }

            const newPeerDepVer = semver.coerce('^' + devDepVer.toString()?.replace(/-\d+$/, '')?.split('.')?.shift());
            peerDependencies[dependency] = `>=${newPeerDepVer.toString()}`;
            updated = true;
            report.push(`    ✔ Updated ${dependency} to >=${newPeerDepVer.toString()}`);
        } else {
            if (verbose) {
                report.push(`    ⚠️ Out of date peerDependencies ${dependency}: devDependency ${devDepVer.toString()} is less than ${peerDepVer.toString()}`);
            }

            const newDevDepVer = semver.coerce('^' + peerDepVer.toString().replace(/-\d+$/, ''));
            devDependencies[dependency] = `^${newDevDepVer.toString()}`;
            updated = true;
            report.push(`    ✔ Updated ${dependency} to ^${newDevDepVer}`);
        }
    }

    if (!updated) return;

    report.map(r => console.log(r));
    return { peerDependencies, devDependencies };
};

const { _, verbose = false } = yargs(hideBin(process.argv))
    .alias('v', 'verbose')
    .argv;

main(_, verbose).catch((err) => {
    console.error(err);
    process.exit(1);
});
