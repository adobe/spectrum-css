const gulp = require('gulp');
const builder = require('./tools/bundle-builder');
const test = require('./tools/test-builder');
const site = require('./site/gulpfile.js');
const subrunner = require('./tools/bundle-builder/subrunner');
const through = require('through2');

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

function packageLint() {
  return gulp.src('components/*/package.json')
   .pipe(through.obj(function translateJSON(file, enc, cb) {
      let data = JSON.parse(String(file.contents));

      if (!data.license) {
        data.license = 'Apache-2.0';
        console.log(`${data.name}: Adding license=${data.license}`);
      }

      if (!data.publishConfig || data.publishConfig.access != 'public') {
        console.log(`${data.name}: Adding publishConfig.access=public`);
        data.publishConfig = data.publishConfig || {};
        data.publishConfig.access = 'public';
      }

      if (!data.repository) {
        console.error(`${data.name}: missing repository field!`);
      }
      else if (!data.repository.directory) {
        data.repository.directory = 'components/' + data.name.split('/').pop();
        console.log(`${data.name}: Adding missing repository.directory=${data.repository.directory}`);
      }

      if (data.author === '') {
        console.log(`${data.name}: author field empty, deleting`);
        delete data.author;
      }

      if (!data.homepage) {
        data.homepage = 'https://opensource.adobe.com/spectrum-css/';
        console.log(`${data.name}: Adding homepage=${data.homepage}`);
      }

      file.contents = Buffer.from(JSON.stringify(data, null, 2));

      cb(null, file);
    }))
    .pipe(gulp.dest('components/'));
}

exports.packageLint = packageLint;

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
