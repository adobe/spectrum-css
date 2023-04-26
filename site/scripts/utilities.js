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

const { json } = require('npm-registry-fetch');

const { readFile } = require("fs").promises;

function isMigrated(dependencies) {
  if (!dependencies) return false;
  if (dependencies["@spectrum-css/component-builder-simple"] || dependencies["@spectrum-css/tokens"]) return true;
  return false;
};

function isComponentPackage(dependencyName) {
  return dependencyName && dependencyName.startsWith('@spectrum-css') && !dependencyName.includes('-builder');
};

async function getDependencies(packageName, pages) {
    /** First check if this dependency data was already determined */
    const pageData = pages.find((page) => page.packageName === packageName) || {};
    if (pageData.dependencies) return { name: packageName, dependencies: pageData.dependencies };

    /** If not, fetch the data from the package.json */
    const { name, devDependencies } = await readFile(require.resolve(`${packageName}/package.json`), "utf8").then(JSON.parse).catch(console.warn);
    /** If not, fetch the data from the package.json */
    const dep = Object.keys(devDependencies).filter(isComponentPackage) || [];
    if (!dep) return { name, dependencies: [] };

    return { name, dependencies: dep };
}

async function getReleaseDate(pkgName, version = 'latest', locale = 'en-US', dateFormat = { year: 'numeric', month: 'long', day: 'numeric' }) {
    return json(pkgName)
      .then((data) => {
        const datetime = data.time[version];
        return new Date(datetime).toLocaleDateString(locale, dateFormat);
      })
      .catch(() => {
        // console.log(`Could not determine date of release for ${pkgName}@${version}`);
        return 'Unreleased';
      });
}

module.exports = { getDependencies, getReleaseDate, isMigrated, isComponentPackage };
