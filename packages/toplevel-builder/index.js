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

const fs = require('fs');
const path = require('path');
const gulp = require('gulp');
const del = require('del');
const logger = require('gulplog');
const ext = require('replace-ext');
const yaml = require('js-yaml');
const through = require('through2');
const concat = require('gulp-concat');
const colors = require('colors');
const browserSync = require('browser-sync');
const depSolver = require('dependency-solver');
const cp = require('child_process');
const inq = require('inquirer');
const semver = require('semver');
const rename = require('gulp-rename');

let cwd = process.cwd();
let builderDir = __dirname;

function clean() {
  return del('dist/*');
};

let docs = require('./docs');

// Combined
function concatPackageFiles(taskName, input, output, directory) {
  let func = function() {
    let glob;
    if (Array.isArray(input)) {
      glob = [];

      dependencyOrder.forEach(function(dep) {
        let depName = dep.split('/').pop();
        input.forEach(function(file) {
          glob.push(`${cwd}/node_modules/@spectrum-css/${depName}/dist/${file}`);
        });
      });
    }
    else {
      glob = dependencyOrder.map(function(dep) {
        return `${cwd}/node_modules/@spectrum-css/${dep.split('/').pop()}/dist/${input}`;
      });
    }

    return gulp.src(glob, { allowEmpty: true })
      .pipe(concat(output))
      .pipe(gulp.dest(`dist/${directory || ''}`));
  };

  Object.defineProperty(func, 'name', { value: taskName, writable: false });

  return func;
}

var dependencyOrder = null;

function buildCombined_getDependencyOrder(done) {
  dependencyOrder = [];

  let dependencies = {};

  return gulp.src([
    `${cwd}/node_modules/@spectrum-css/*/package.json`,
    `!${cwd}/node_modules/@spectrum-css/vars/package.json`
  ])
  .pipe(through.obj(function readPackage(file, enc, cb) {
    let pkg;
    try {
      pkg = JSON.parse(String(file.contents));
    } catch (e) {
      return cb(e);
    }

    if (pkg.dependencies) {
      dependencies[pkg.name] = Object.keys(pkg.dependencies).filter(function(dep) {
        return dep.indexOf('@spectrum-css') === 0;
      });
    }

    cb(null, file);
  }))
  .on('end', function() {
    dependencyOrder = depSolver.solve(dependencies);
    dependencyOrder = dependencyOrder.filter(function(dep) {
      return dep !== '@spectrum-css/vars';
    });

    logger.debug(`Dependency order: \n${dependencyOrder.join('\n')}`);
    done();
  });
};

let buildCombined = gulp.series(
  buildCombined_getDependencyOrder,
  gulp.parallel(
    concatPackageFiles('buildCombined_core', 'index.css', 'spectrum-core.css'),
    concatPackageFiles('buildCombined_large', 'index-lg.css', 'spectrum-core-lg.css'),
    concatPackageFiles('buildCombined_diff', 'index-diff.css', 'spectrum-core-diff.css'),
    concatPackageFiles('buildCombined_light', 'multiStops/light.css', 'spectrum-light.css'),
    concatPackageFiles('buildCombined_lightest', 'multiStops/lightest.css', 'spectrum-lightest.css'),
    concatPackageFiles('buildCombined_dark', 'multiStops/dark.css', 'spectrum-dark.css'),
    concatPackageFiles('buildCombined_darkest', 'multiStops/darkest.css', 'spectrum-darkest.css')
  )
);

let buildStandalone = gulp.series(
  buildCombined_getDependencyOrder,
  gulp.parallel(
    concatPackageFiles('buildStandalone_light', ['index.css', 'colorStops/light.css' ], 'spectrum-light.css', 'standalone/'),
    concatPackageFiles('buildStandalone_lightest', ['index.css', 'colorStops/lightest.css' ], 'spectrum-lightest.css', 'standalone/'),
    concatPackageFiles('buildStandalone_dark', ['index.css', 'colorStops/dark.css' ], 'spectrum-dark.css', 'standalone/'),
    concatPackageFiles('buildStandalone_darkest', ['index.css', 'colorStops/darkest.css' ], 'spectrum-darkest.css', 'standalone/'),
    concatPackageFiles('buildStandalone_lightLarge', ['index-lg.css', 'colorStops/light.css' ], 'spectrum-light-lg.css', 'standalone/'),
    concatPackageFiles('buildStandalone_lightestLarge', ['index-lg.css', 'colorStops/lightest.css' ], 'spectrum-lightest-lg.css', 'standalone/'),
    concatPackageFiles('buildStandalone_darkLarge', ['index-lg.css', 'colorStops/dark.css' ], 'spectrum-dark-lg.css', 'standalone/'),
    concatPackageFiles('buildStandalone_darkestLarge', ['index-lg.css', 'colorStops/darkest.css' ], 'spectrum-darkest-lg.css', 'standalone/'),
  )
);

function release_copyPackages() {
  return gulp.src([
    `${cwd}/node_modules/@spectrum-css/*/dist/**`,
    `!${cwd}/node_modules/@spectrum-css/*/dist/docs/**`
  ])
    .pipe(rename(function(file) {
      file.dirname = file.dirname.replace('/dist', '');
    }))
    .pipe(gulp.dest('dist/components/'));
};

// release
function execTask(taskName, command) {
  // return a function
  var func = function(cb) {
    exec(command, cb);
  };

  Object.defineProperty(func, 'name', { value: taskName, writable: false });

  return func;
}

function exec(command, cb) {
  // Execute immediately
  let commandProcess = cp.exec(command, handleExec(cb));
  commandProcess.stdout.pipe(process.stdout);
  commandProcess.stderr.pipe(process.stderr);
  return commandProcess;
}

function handleExec(cb) {
  return function(err, stdout, stderr) {
    if (err) {
      return cb(err);
    }

    cb();
  }
}

// The version we'll actually release
let releaseVersion = null;

function bumpVersion(cb) {
  function getPackage() {
    return JSON.parse(fs.readFileSync(`${cwd}/package.json`, 'utf8'));
  }

  function doVersionBump() {
    exec(`npm version ${releaseVersion}`, cb);
  }

  let package = getPackage();

  // Potential versions
  let patchVersion = semver.inc(package.version, 'patch');
  let minorVersion = semver.inc(package.version, 'minor');
  let majorVersion = semver.inc(package.version, 'major');
  let preVersion = semver.inc(package.version, 'prerelease', 'alpha');
  let preMajorVersion = semver.inc(package.version, 'premajor', 'alpha');
  let preMinorVersion = semver.inc(package.version, 'preminor', 'alpha');
  let prePatchVersion = semver.inc(package.version, 'prepatch', 'alpha');

  let choices = [
    {
      name: 'patch - ' + patchVersion,
      value: patchVersion
    },
    {
      name: 'minor - ' + minorVersion,
      value: minorVersion
    },
    {
      name: 'major - ' + majorVersion,
      value: majorVersion
    }
  ];

  if (package.version.match('-alpha')) {
    choices = [
      {
        name: 'prerelease - ' + preVersion,
        value: preVersion
      },
      {
        name: 'release - ' + patchVersion,
        value: patchVersion
      }
    ];
  }

  choices = choices.concat([
    {
      name: 'prepatch - ' + prePatchVersion,
      value: prePatchVersion
    },
    {
      name: 'preminor - ' + preMinorVersion,
      value: preMinorVersion
    },
    {
      name: 'premajor - ' + preMajorVersion,
      value: preMajorVersion
    }
  ]);

  inq.prompt([{
    type: 'list',
    name: 'version',
    message: 'What version would you like?',
    choices: choices
  }])
  .then(function(res) {
    releaseVersion = res.version;

    doVersionBump();
  });
}

let releaseBackwardsCompatCleanup = exports.releaseBackwardsCompatCleanup = function releaseBackwardsCompatCleanup() {
  return del([
    // Don't bother deleting dist/icons, we want it in gh-pages output
    'icons',
    'vars'
  ]);
};

let releaseBackwardsCompat = exports.releaseBackwardsCompat = gulp.parallel(
  gulp.series(
    releaseBackwardsCompatCleanup,

    gulp.parallel(
      function releaseBackwardsCompat_copyWorkflowIcons() {
        return gulp.src([
          `${cwd}/node_modules/@spectrum/spectrum-icons/dist/svg/**`,
          `${cwd}/node_modules/@spectrum/spectrum-icons/dist/lib/**`
        ])
          .pipe(gulp.dest('dist/icons/'));
      },
      function releaseBackwardsCompat_copyUIIcons() {
        return gulp.src(
          `${cwd}/node_modules/@spectrum-css/icons/{medium,large,combined}/**`
        )
          .pipe(gulp.dest('icons/'));
      },
      function releaseBackwardsCompat_copyVars() {
        return gulp.src(
          `${cwd}/node_modules/@spectrum-css/vars/vars/**`
        )
          .pipe(gulp.dest('vars/'));
      }
    )
  )
);

// These tasks assume they're being run in the root and will copy and publish github pages
let ghPages = gulp.series(
  execTask('checkoutPages', `git checkout gh-pages`),
  function copyPages(cb) {
    exec(`cp -r dist ${releaseVersion}`, cb);
  },
  // todo: update gh-pages index files if not alpha release
  function addPages(cb) {
    exec(`git add ${releaseVersion}`, cb);
  },
  function commitPages(cb) {
    exec(`git commit -q -m "Deploy version ${releaseVersion}"`, cb);
  },
  execTask('pushPages', 'git push'),
  // Go back
  execTask('checkoutBranch', `git checkout -`)
);

// Stand in release task we probably won't use
let release = gulp.series(
  bumpVersion,
  // build happens automatically after the version bump with npm scripts
  // push tag
  function pushTag(cb) {
    exec(`git push origin v${releaseVersion}`, cb);
  },
  // push current branch
  execTask('pushBranch', 'git push'),
  // Backwards compat
  releaseBackwardsCompat,
  // publish to npm
  function npmPublish(cb) {
    let npmTag = '';
    if (releaseVersion.indexOf('alpha') !== -1) {
      npmTag = '--tag alpha';
    }
    exec(`npm publish ${npmTag}`, cb);
  },
  releaseBackwardsCompatCleanup,
  ghPages
);

// dev
function serve() {
  browserSync({
    startPath: 'docs/index.html',
    server: `${cwd}/dist/`
  });
}

function watchSite() {
  gulp.watch(
    `${builderDir}/site/*.pug`,
    gulp.series(
      docs.buildSite_pages,
      function reload(cb) {
        browserSync.reload();
        cb();
      }
    )
  );

  gulp.watch(
    `${builderDir}/site/includes/*.pug`,
    gulp.series(
      gulp.parallel(
        docs.buildSite_html,
        docs.buildDocs
      ),
      function reload(cb) {
        browserSync.reload();
        cb();
      }
    )
  );

  gulp.watch(
    `${builderDir}/docs/template.pug`,
    gulp.series(
      gulp.parallel(
        docs.buildDocs
      ),
      function reload(cb) {
        browserSync.reload();
        cb();
      }
    )
  );

  gulp.watch(
    [
      `${builderDir}/site/resources/css/*.css`,
      `${builderDir}/site/resources/js/*.js`
    ],
    gulp.series(
      docs.buildSite_copyResources,
      function injectSiteResources() {
        return gulp.src([
          'dist/docs/css/**/*.css',
          'dist/docs/js/**/*.js'
        ])
          .pipe(browserSync.stream());
      }
    )
  );
}

function startWatch() {
  serve();

  watchSite();
};

let build = exports.build = gulp.series(
  clean,
  gulp.parallel(
    buildCombined,
    buildStandalone,
    docs.build,
    release_copyPackages
  )
);

exports.dev = gulp.series(
  clean,
  gulp.parallel(
    docs.build,
    release_copyPackages,
  ),
  startWatch
);

exports.watch = startWatch;

exports.prePack = gulp.series(
  build,
  releaseBackwardsCompat
);

exports.postPublish = gulp.series(
  releaseBackwardsCompatCleanup,
  // Disabled for now until we decide where to publish docs
  // ghPages
);

exports.release = release;
exports.buildCombined = buildCombined;
exports.buildStandalone = buildStandalone;
exports.clean = clean;
exports.watch = startWatch;
exports.default = build;
