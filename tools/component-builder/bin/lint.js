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

const fs = require('fs');
const fsp = require('fs').promises;
const path = require('path');

const postcss = require('postcss');

const { concatFiles, getTokensInCSS, getAllVars } = require('./utilities.js');

async function lintCSS(glob, coreTokens, { name }) {
    const content = await concatFiles(glob);
    const root = postcss.parse(content);

    // Get tokens defined inside of the component and used by the component
    const { definedTokens, usedTokens } = getTokensInCSS(root);

    // Make sure the component doesn't use any undefined tokens
    usedTokens.forEach(tokenName => {
        if (!coreTokens[tokenName] && !definedTokens[tokenName] && !tokenName.startsWith('--mod') && !tokenName.startsWith('--highcontrast')) {
            console.log(`⚠️  ${name} uses undefined token ${tokenName}`);
        }

        if (tokenName.includes('spectrum-global')) {
            console.log(`⚠️  ${name} directly uses global variable ${tokenName}`);
        }
    });

    // Make sure all tokens defined in the component are used
    Object.keys(definedTokens).forEach(tokenName => {
        if (!usedTokens.includes(tokenName)) {
            console.log(`⚠️  ${name} defines ${tokenName}, but never uses it`);
        }
    });

    return Promise.resolve();
}

module.exports = async function lint() {
    const pkgPath = path.join(process.cwd(), 'package.json');
    // Not a package, skip it
    if (!fs.existsSync(pkgPath)) return;

    const pkg = await fsp.readFile(pkgPath).then(JSON.parse).catch(() => ({}));
    const { name, peerDependencies } = pkg;

    // We don't lint token packages
    if (['vars', 'tokens'].every(n => name.endsWith(n))) return;

    // If there are no peer dependencies, skip it
    if (!peerDependencies) return;

    const isLegacy = Object.keys(peerDependencies)?.includes('@spectrum-css/vars');

    /* Resolve core tokens first from the current working directory, or if not found, from the root of the monorepo */
    const coreTokensFile = resolve('@spectrum-css/tokens', {
        paths: [process.cwd(), path.join(process.cwd(), '../../')]
    });
    const coreTokenContent = fs.readFileSync(coreTokensFile, 'utf8');
    const coreTokenRoot = postcss.parse(coreTokenContent);
    const { definedTokens } = getTokensInCSS(coreTokenRoot);

    return lintCSS(!isLegacy ? [
        'themes/*.css',
        'index.css'
    ] : [
        'index.css',
        'skin.css',
    ], {
        ...isLegacy ? await getAllVars([
            `css/themes/*.css`,
            `css/scales/*.css`,
            `css/components/*.css`,
            `css/globals/*.css`,
            `custom.css`
        ]) : {},
        ...definedTokens
    }, pkg);
}
