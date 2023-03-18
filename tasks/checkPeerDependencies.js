/*
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

/**
 * Validate peer deps for components; escapes before running lerna if they are not valid.
 **/
async function main(dirs = [path.join(rootDir, 'components')], verbose = false) {
    const promises = [];
    const report = [];
    for (const pkg of await fg(dirs.map(d => `${d}/*`), {
        onlyDirectories: true,
    })) {
        const packageJSON = await fsp.readFile(path.join(pkg, 'package.json'))
            .then(JSON.parse)
            .catch((err) => Promise.reject(`Error parsing ${path.relative(rootDir, pkg)}\n${err}`));

        const { name, peerDependencies, devDependencies } = packageJSON;
        report.push(name);
        if (verbose) console.log(`- ${name}`);

        if (!peerDependencies) continue;

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
                    report.push(`⚠️ ${name} has out of date peerDependencies ${dependency}: devDependency ${devDepVer} is greater than ${peerDepVer}`);
                }

                const newPeerDepVer = semver.coerce('^' + devDepVer.toString().replace(/-\d+$/, '').split('.').shift());
                packageJSON.peerDependencies[dependency] = `>=${newPeerDepVer.toString()}`;
                updated = true;
                report.push(`  ✔ Updated ${dependency} to >=${newPeerDepVer}`);
            } else {
                if (verbose) {
                    report.push(`⚠️ ${name} has out of date peerDependencies ${dependency}: devDependency ${devDepVer} is less than ${peerDepVer}`);
                }

                const newDevDepVer = semver.coerce('^' + peerDepVer.toString().replace(/-\d+$/, ''));
                packageJSON.devDependencies[dependency] = `^${newDevDepVer.toString()}`;
                updated = true;
                report.push(`  ✔ Updated ${dependency} to ^${newDevDepVer}`);
            }
        }

        if (!updated) continue;

        report.map(r => console.log(r));
        promises.push(fsp.writeFile(path.join(pkg, 'package.json'), `${JSON.stringify(packageJSON, null, 2)}\n`));
    }

    if (promises.length === 0) {
        console.log(`👍 All package dependencies aligned.`);
        process.exit(0);
    }

    return await Promise.all(promises);
};


const { _, verbose = false } = yargs(hideBin(process.argv))
    .alias('v', 'verbose')
    .argv;

main(_, verbose).catch((err) => {
    console.error(err);
    process.exit(1);
});
