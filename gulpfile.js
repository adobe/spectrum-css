const gulp = require('gulp');
const builder = require('./tools/bundle-builder');
const test = require('./tools/test-builder');
const site = require('./site/gulpfile.js');
const subrunner = require('./tools/bundle-builder/subrunner');
const through = require('through2');
const replace = require('gulp-replace');
const del = require('del');

Object.assign(exports, builder);
Object.assign(exports, test);
Object.assign(exports, site);

const path = require('path');
const fsp = require('fs').promises;
const semver = require('semver');

async function readPackage(component) {
  try {
    return JSON.parse(await fsp.readFile(path.join(component, 'package.json')));
  }
  catch(err) {
    console.trace();
    throw new Error(`Error while parsing JSON: for ${component}: ${err}`);
  }
}

async function writePackage(component, package) {
  return await fsp.writeFile(path.join(component, 'package.json'), JSON.stringify(package, null, 2));
}

async function checkPeerDependencies() {
  let packagesDir = './components';

  let components = (await fsp.readdir(packagesDir, { withFileTypes: true }))
    .filter((dirent) => dirent.isDirectory() || dirent.isSymbolicLink())
    .map((dirent) => path.join(packagesDir, dirent.name));

  await Promise.all(components.map(async (component) => {
    let package = await readPackage(component);

    if (package.peerDependencies) {
      Object.keys(package.peerDependencies).forEach((dependency) => {
        let devDepVer = package.devDependencies[dependency].replace('^', '');
        let peerDepVer = package.peerDependencies[dependency];
        if (devDepVer) {
          if (!semver.satisfies(devDepVer, peerDepVer)) {
            console.error(`${component} has out of date peerDependencies ${dependency} (found ${devDepVer}, does not satisfy ${peerDepVer})`);

            // Set a new peer dependency, stripping the beta version number
            let newPeerDepVer = '^' + devDepVer.replace(/-\d+$/, '');
            package.peerDependencies[dependency] = newPeerDepVer
            console.error(`  Updated ${dependency} to ${newPeerDepVer}`);
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

function graduatePeerDeps() {
  function isPrerelease(version) {
    return version.match(/-(alpha)|(beta)/);
  }

  return gulp.src('components/*/package.json')
   .pipe(through.obj(function translateJSON(file, enc, cb) {
      let data = JSON.parse(String(file.contents));

      if (data.peerDependencies) {
        for (let [peerDep, version] of Object.entries(data.peerDependencies)) {
          if (isPrerelease(version)) {
            version = version.replace('^', '');
            let newVersion = `^${semver.major(version)}.${semver.minor(version)}.${semver.patch(version)}`;
            console.log(`${data.name}: Graduating ${peerDep} to ${newVersion}`);
            data.peerDependencies[peerDep] = newVersion;
          }
        }
      }

      file.contents = Buffer.from(JSON.stringify(data, null, 2));

      cb(null, file);
    }))
    .pipe(gulp.dest('components/'));
}

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

async function readmeLint() {
  let packagesDir = './components';

  let components = (await fsp.readdir(packagesDir, { withFileTypes: true }))
    .filter((dirent) => dirent.isDirectory() || dirent.isSymbolicLink())
    .map((dirent) => path.join(packagesDir, dirent.name));

  await Promise.all(components.map(async(component) => {
    let hasReadme = await fsp.access(path.join(component, 'README.md')).then(v => true).catch(e => false);

    let package = await readPackage(component);
    if (!hasReadme) {
      console.log(`${package.name}: writing README...`);
      let content = `# ${package.name}
> ${package.description}

This package is part of the [Spectrum CSS project](https://github.com/adobe/spectrum-css).

See the [Spectrum CSS documentation](https://opensource.adobe.com/spectrum-css/) and [Spectrum CSS on GitHub](https://github.com/adobe/spectrum-css) for details.
`;

      await fsp.writeFile(path.join(component, 'README.md'), content);
    }
  }));
}

/** Site */
function prepareSite_clean() {
  return del('dist-site/');
}

function prepareSite_components() {
  return gulp.src('dist/components/**/*', {
    base: 'dist'
  })
    .pipe(gulp.dest('dist-site/'));
}

function prepareSite_docs() {
  return gulp.src('dist/docs/**/*')
    .pipe(replace('../components/', 'components/'))
    .pipe(gulp.dest('dist-site/'));
}

const prepareSite = gulp.series(
  prepareSite_clean,
  gulp.parallel(
    prepareSite_docs,
    prepareSite_components
  )
);

exports.prepareSite = prepareSite;
exports.graduatePeerDeps = graduatePeerDeps;
exports.readmeLint = readmeLint;
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

exports.buildDocs = builder.buildDocs;

exports.releaseBundles = releaseBundles;

exports.prepare = site.copySiteResources;
