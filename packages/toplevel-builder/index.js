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

const gulp = require('gulp');
const del = require('del');
const concat = require('gulp-concat');
const rename = require('gulp-rename');

const depUtils = require('./lib/depUtils');
const dirs = require('./lib/dirs');

const docs = require('./docs');
const dev = require('./dev');
const subrunner = require('./subrunner');
const release = require('./release');

function clean() {
  return del([
    'dist/*',
    `${dirs.packages}/*/dist/*`
  ]);
};

// Combined
function concatPackageFiles(taskName, input, output, directory) {
  let func = function() {
    let glob;
    if (Array.isArray(input)) {
      glob = [];

      dependencyOrder.forEach(function(dep) {
        let depName = dep.split('/').pop();
        input.forEach(function(file) {
          glob.push(`${dirs.packages}/${depName}/dist/${file}`);
        });
      });
    }
    else {
      glob = dependencyOrder.map(function(dep) {
        return `${dirs.packages}/${dep.split('/').pop()}/dist/${input}`;
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
async function getDependencyOrder(done) {
  dependencyOrder = await depUtils.getFolderDependencyOrder(dirs.packages);
}

let buildCombined = gulp.series(
  getDependencyOrder,
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
  getDependencyOrder,
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

function copyPackages() {
  return gulp.src([
    `${dirs.packages}/*/dist/**`,
    `!${dirs.packages}/*/dist/docs/**`
  ])
    .pipe(rename(function(file) {
      file.dirname = file.dirname.replace('/dist', '');
    }))
    .pipe(gulp.dest('dist/components/'));
}

function copyIcons() {
  // lerna bug: require.resolve() won't find spectrum-icons within spectrum-css-compat, so we have to assume it's at the top level
  return gulp.src([
    `${dirs.topLevel}/node_modules/@spectrum/spectrum-icons/dist/svg/**`,
    `${dirs.topLevel}/node_modules/@spectrum/spectrum-icons/dist/lib/**`
  ])
    .pipe(gulp.dest('dist/icons/'));
};

function buildIfTopLevel() {
  let builtTasks = gulp.parallel(
    docs.build,
    buildCombined,
    buildStandalone,
    copyIcons,
    copyPackages
  );

  if (dirs.cwd === dirs.topLevel) {
    // Run a build for all packages first
    return gulp.series(
      subrunner.buildPackages,
      builtTasks
    );
  }

  // They're already built, just include the output
  return builtTasks;
}

let build = gulp.series(
  clean,
  buildIfTopLevel()
);

let devTask = gulp.series(
  clean,
  function buildPackagesLite() {
    return subrunner.runTaskOnAllPackages('buildLite');
  },
  gulp.parallel(
    docs.build,
    copyIcons,
    copyPackages
  ),
  dev.watch
);

exports.prePack = gulp.series(
  build,
  release.releaseBackwardsCompat
);

exports.ghPages = release.ghPages;
exports.postPublish = gulp.series(
  release.releaseBackwardsCompatCleanup,
  release.ghPages
);

exports.release = release.release;

exports.buildPackages = subrunner.buildPackages;
exports.buildCombined = buildCombined;
exports.buildStandalone = buildStandalone;
exports.dev = devTask;
exports.clean = clean;
exports.build = build;
exports.watch = dev.watch;
exports.default = build;
