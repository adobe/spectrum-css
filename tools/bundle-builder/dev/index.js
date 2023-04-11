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

const gulp = require('gulp');
const logger = require('gulplog');
const path = require('path');
const dirs = require('../lib/dirs');

const subrunner = require('../subrunner');
const bundleBuilder = require('../index.js');

function getPackageFromPath(filePath) {
  return filePath.match(`${dirs.components}\/(.*?)\/`)[1];
}

/*
  Watch for changes to globs matching files within packages, execute task for that package, and copy/inject specified files
*/
function watchWithinPackages(glob, task, files) {
  logger.debug(`Watching ${glob}, will run ${task} and stream ${files}`);

  let watcher = gulp.watch(glob, {
    // Otherwise we get infinite loops because chokidar gets all crazy with symlinked deps
    followSymlinks: false
  }, function handleChanged(done) {
    if (!changedFile) {
      done();
      return;
    }

    let packageName = getPackageFromPath(changedFile);
    let packageDir = path.join(dirs.components, packageName);

    if (typeof task === 'function') {
      task(changedFile, packageName, (err) => {
        done(err);
        changedFile = null;
      });
    }
    else {
      subrunner.runComponentTask(packageDir, task, (err) => {
        if (err) {
          changedFile = null;
          return done(err);
        }

        // Copy files
        gulp.src(`${dirs.components}/${packageName}/dist/${files}`)
          .pipe(gulp.dest(`dist/components/${packageName}/`))
          .on('end', () => {
            logger.debug(`Injecting files from ${packageName}/:\n  ${files}`);
            changedFile = null;
            done();
          })
          .on('error', (err) => {
            changedFile = null;

            done(err);
          });
      });
    }
  });

  let changedFile = null;
  watcher.on('change', (filePath) => {
    logger.debug(`Got change for ${filePath}`);

    if (changedFile === null) {
      changedFile = filePath;
    }
  });
}

function watchCommons() {
  gulp.watch(
    [`${dirs.components}/commons/*.css`],
    gulp.series(bundleBuilder.buildDepenenciesOfCommons, bundleBuilder.copyPackages)
  );
}

function watch() {
  watchCommons();
  watchWithinPackages(`${dirs.components}/*/{index,skin}.css`, 'buildMedium', '*.css');
  watchWithinPackages(`${dirs.components}/*/themes/{spectrum,express}.css`, 'buildMedium', '*.css');
}

exports.watch = watch;
