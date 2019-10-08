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
const exec = require('./lib/exec');
const dirs = require('./lib/dirs');

const docs = require('./docs');
const dev = require('./dev');
const subrunner = require('./subrunner');
const release = require('./release');
const vars = require('./vars');

function clean() {
  let globs = [
    'dist/*'
  ];

  // Don't delete the dist folder inside of installed packages
  if (process.cwd() === dirs.topLevel) {
    globs.push(`${dirs.components}/*/dist/*`);
  }

  return del(globs);
}

// Combined
function concatPackageFiles(taskName, input, output, directory) {
  let func = function() {
    let glob;
    if (Array.isArray(input)) {
      glob = [];

      dependencyOrder.forEach(function(dep) {
        input.forEach(function(file) {
          glob.push(dirs.resolve(dep) + `/${file}`);
        });
      });
    }
    else {
      glob = dependencyOrder.map(function(dep) {
        return dirs.resolve(dep) + `/${input}`;
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
  dependencyOrder = await depUtils.getFolderDependencyOrder(dirs.components);
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
    `${dirs.components}/*/dist/**`,
    `!${dirs.components}/*/dist/docs/**`
  ])
    .pipe(rename(function(file) {
      file.dirname = file.dirname.replace('/dist', '');
    }))
    .pipe(gulp.dest('dist/components/'));
}

function copyIcons() {
  // lerna bug: require.resolve() won't find spectrum-icons within spectrum-css-compat, so we have to assume it's at the top level
  // note: maybe it needs a package.main?
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

  if (process.cwd() === dirs.topLevel) {
    // Run a build for all packages first
    return gulp.series(
      subrunner.buildComponents,
      builtTasks
    );
  }

  // They're already built, just include the output
  return builtTasks;
}

let build = gulp.series(
  clean,
  buildIfTopLevel(),
  vars.copyVars
);

let buildLite = gulp.series(
  clean,
  function buildComponentsLite() {
    return subrunner.runTaskOnAllComponents('buildLite');
  },
  gulp.parallel(
    docs.build,
    copyIcons,
    copyPackages
  )
);

let buildHeavy = gulp.series(
  clean,
  function buildComponentsLite() {
    return subrunner.runTaskOnAllComponents('buildHeavy');
  },
  gulp.parallel(
    docs.build,
    copyIcons,
    copyPackages
  )
);

let devTask;
if (process.cwd() === dirs.topLevel) {
  // Build all packages if at the top level
  devTask = gulp.series(
    buildLite,
    dev.watch
  );
}
else {
  // Otherwise, just start watching
  devTask = gulp.series(
    clean,
    gulp.parallel(
      docs.build,
      copyIcons,
      copyPackages
    ),
    dev.watch
  );
}

exports.devHeavy = gulp.series(
  buildHeavy,
  dev.watch
);

exports.copyVars = vars.copyVars;

exports.prePack = gulp.series(
  build,
  release.releaseBackwardsCompat
);

exports.release = gulp.series(
  release.updateAndTagRelease,
  exec.task('yarnInstall', 'yarn install --frozen-lockfile'),
  build,
  exec.task('npmPublish', 'npm publish'),
  exec.task('gitPush', 'git push'),
  release.ghPages
);

exports.generateChangelog = release.generateChangelog;
exports.buildUniqueVars = vars.buildUnique;

exports.ghPages = release.ghPages;
exports.postPublish = release.releaseBackwardsCompatCleanup;

exports.buildComponents = subrunner.buildComponents;
exports.buildCombined = buildCombined;
exports.buildStandalone = buildStandalone;
exports.buildLite = buildLite;
exports.dev = devTask;
exports.clean = clean;
exports.build = build;
exports.watch = dev.watch;
exports.default = build;
