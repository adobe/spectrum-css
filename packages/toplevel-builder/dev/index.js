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
const logger = require('gulplog');
const browserSync = require('browser-sync');
const dirs = require('../lib/dirs')

const docs = require('../docs');
const subrunner = require('../subrunner');

function serve() {
  browserSync({
    startPath: 'docs/index.html',
    server: `${dirs.cwd}/dist/`
  });
}

/*
  Watch for changes to globs matching files within packages, execute task for that package, and copy/inject specified files
*/
function watchWithinPackages(glob, task, files) {
  logger.debug(`Watching ${glob}, will run ${task} and stream ${files}`);

  var watcher = gulp.watch(glob, {
    followSymlinks: false
  }, function handleChanged(done) {
    if (!changedFile) {
      done();
      return;
    }

    var package = changedFile.match(`${dirs.packages}\/(.*?)\/`)[1];

    subrunner.runPackageTask(package, task, (err) => {
      if (err) {
        changedFile = null;
        return done(err);
      }

      // Copy files
      gulp.src(`${dirs.packages}/${package}/dist/${files}`)
        .pipe(gulp.dest(`dist/components/${package}/`))
        .on('end', () => {
          // Inject
          gulp.src(`dist/components/${package}/${files}`)
            .pipe(browserSync.stream());

          changedFile = null;

          done();
        })
        .on('error', (err) => {
          changedFile = null;

          done(err);
        });
    });
  });

  let changedFile = null;
  watcher.on('change', (filePath) => {
    logger.debug(`Got change for ${filePath}`);

    if (changedFile === null) {
      changedFile = filePath;
    }
  });
}

function reload(cb) {
  browserSync.reload();
  cb();
}

function watchSite() {
  gulp.watch(
    `${dirs.builder}/site/*.pug`,
    gulp.series(
      docs.buildSite_pages,
      reload
    )
  );

  gulp.watch(
    `${dirs.builder}/site/includes/*.pug`,
    gulp.series(
      gulp.parallel(
        docs.buildSite_html,
        docs.buildDocs
      ),
      reload
    )
  );

  gulp.watch(
    `${dirs.builder}/docs/template.pug`,
    gulp.series(
      gulp.parallel(
        docs.buildDocs
      ),
      reload
    )
  );

  gulp.watch(
    [
      `${dirs.builder}/site/resources/css/*.css`,
      `${dirs.builder}/site/resources/js/*.js`
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

function watch() {
  serve();

  watchWithinPackages(`${dirs.packages}/*/{index,skin}.css`, 'buildVars', '*.css');

  // Todo: figure out how to build individual docs when things change
  // watchWithinPackages(
  //   [
  //     `${dirs.packages}/*/docs/*.yml`,
  //     `${dirs.packages}/*/docs.yml`
  //   ],
  //   'buildDocs_html',
  //   '*/*.html'
  // );

  watchSite();
}

exports.watch = watch;
