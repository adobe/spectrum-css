const gulp = require('gulp');
const builder = require('./tools/bundle-builder');
const test = require('./tools/test-builder');
const site = require('./site/gulpfile.js');
const subrunner = require('./tools/bundle-builder/subrunner');

Object.assign(exports, builder);
Object.assign(exports, test);
Object.assign(exports, site);

const path = require('path');
const fsp = require('fs').promises;
const semver = require('semver');

async function checkPeerDependencies() {
  let packagesDir = './components';

  async function readPackage(component) {
    return JSON.parse(await fsp.readFile(path.join(component, 'package.json')));
  }

  async function writePackage(component, package) {
    return await fsp.writeFile(path.join(component, 'package.json'), JSON.stringify(package, null, 2));
  }

  let components = (await fsp.readdir(packagesDir, { withFileTypes: true }))
    .filter((dirent) => dirent.isDirectory() || dirent.isSymbolicLink())
    .map((dirent) => path.join(packagesDir, dirent.name));

  await Promise.all(components.map(async (component) => {
    let package = await readPackage(component);

    if (package.peerDependencies) {
      Object.keys(package.peerDependencies).forEach((dependency) => {
        let devDepVer = package.devDependencies[dependency];
        let peerDepVer = package.peerDependencies[dependency];
        if (devDepVer) {
          if (!semver.satisfies(peerDepVer, devDepVer)) {
            throw new Error(`${component} has out of date peerDependencies ${dependency} (found ${peerDepVer}, does not satisfy ${devDepVer})`);
          }
        }
        else {
          throw new Error(`${component} has ${dependency} in peerDependencies, but not devDependencies!`);
        }
      });

      await writePackage(component, package);
    }
  }));
};

async function releaseBundles() {
  let bundlesDir = './bundles';

  let bundles = (await fsp.readdir(bundlesDir, { withFileTypes: true }))
    .filter((dirent) => dirent.isDirectory() || dirent.isSymbolicLink())
    .map((dirent) => path.join(process.cwd(), bundlesDir, dirent.name));

  await subrunner.runTaskOnPackages('release', bundles);
};

exports.checkPeerDependencies = checkPeerDependencies;

exports.version = gulp.series(
  checkPeerDependencies,
  builder.build
);

exports.dev = gulp.series(
  exports.copySiteResources,
  exports.dev
);

exports.devHeavy = gulp.series(
  exports.copySiteResources,
  exports.devHeavy
);

exports.releaseBundles = releaseBundles;

exports.prepare = site.copySiteResources;
