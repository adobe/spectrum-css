/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

const fsp = require('fs').promises;
const path = require('path');
const depSolver = require('dependency-solver');

/*
  Given a package path, get its dependencies

  @param {string} packages - package directory

  @return {Object} An object mapping the package name to its dependencies, or null if no dependencies
*/
async function getDependencies(package) {
  let pkg = JSON.parse(await fsp.readFile(path.join(package, 'package.json')));

  let dependencies = [];

  if (pkg.dependencies) {
    dependencies = Object.keys(pkg.dependencies);
  }

  if (pkg.devDependencies) {
    dependencies = dependencies.concat(Object.keys(pkg.devDependencies));
  }

  dependencies = dependencies.filter((dep) => {
    return (
      dep.indexOf('@spectrum-css') === 0 &&
      dep !== '@spectrum-css/bundle-builder' &&
      dep !== '@spectrum-css/component-builder'
    );
  });

  return { name: pkg.name, dependencies: dependencies };
}

/*
  Given a list of package paths, solve the dependency order

  @param {string[]} packages - package directories

  @return {string[]} The solved dependency order
*/
async function solveDependencies(packages) {
  async function getDependenciesForSolver(package) {
    let { name, dependencies } = await getDependencies(package);

    if (dependencies.length === 0) {
      return null;
    }

    return { [name]: dependencies };
  }

  let depArray = (await Promise.all(packages.map(getDependenciesForSolver)))
    .filter(Boolean);

  let dependencies = {};
  depArray.forEach((dep) => {
    Object.assign(dependencies, dep);
  });

  return depSolver.solve(dependencies);
}

/*
  Get the list of all packages in given directory

  @param {string} packageDir - package directory

  @return {Object} An array of package names in dependency order
*/
async function getPackageDependencyOrder(packageDir) {
  let { name, dependencies } = await getDependencies(packageDir);

  return solveDependencies(dependencies.map((dep) => `${packageDir}/node_modules/${dep}`));
}

/*
  Get the list of all packages in given directory

  @param {string} packagesDir - directory of packages

  @return {Object} An array of package names in dependency order
*/
async function getFolderDependencyOrder(packagesDir) {
  // Get list of all packages
  let packages = (await fsp.readdir(packagesDir, { withFileTypes: true }))
    .filter((dirent) => dirent.isDirectory() || dirent.isSymbolicLink())
    .map((dirent) => path.join(packagesDir, dirent.name));

  return solveDependencies(packages);
}

exports.getDependencies = getDependencies;
exports.solveDependencies = solveDependencies;
exports.getFolderDependencyOrder = getFolderDependencyOrder;
exports.getPackageDependencyOrder = getPackageDependencyOrder;
