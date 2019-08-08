const gulp = require('gulp');
const builder = require('./tools/bundle-builder');
const site = require('./site/gulpfile.js');
Object.assign(exports, builder);
Object.assign(exports, site);

const path = require('path');
const fsp = require('fs').promises;

async function updatePeerDependencies() {
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
          if (peerDepVer != devDepVer) {
            package.peerDependencies[dependency] = devDepVer;

            console.log(`${component} has out of date peerDependencies ${dependency} (found ${peerDepVer}, expected ${devDepVer})`);
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

exports.updatePeerDependencies = updatePeerDependencies;

exports.version = gulp.series(
  updatePeerDependencies,
  builder.build
);

exports.dev = gulp.series(
  exports.copySiteResources,
  exports.dev
);

exports.prepare = site.copySiteResources;
