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
const logger = require('gulplog');
const ext = require('replace-ext');
const yaml = require('js-yaml');
const through = require('through2');
const pug = require('gulp-pug');
const colors = require('colors');
const browserSync = require('browser-sync');

/*
  Run the specified gulp task for the given package
*/
function runPackageTask(package, task, callback) {
  var gulpfile = path.join(__dirname, 'packages', package, 'gulpfile.js');

  logger.warn(`Starting '${package.yellow}:${task.yellow}'...`);

  let packageDir = path.join(__dirname, 'packages', package)
  logger.debug(`Working directory changed to ${packageDir.magenta}`);
  process.chdir(packageDir);
  var tasks = require(`${gulpfile}`);

  if (tasks[task]) {
    tasks[task](function(err) {
      process.chdir(__dirname);
      logger.debug(`Working directory changed to ${__dirname.magenta}`);

      if (err) {
        logger.error(`Error running '${package.yellow}:${task.yellow}': ${err}`);

        callback(err);
      }
      else {
        logger.warn(`Finished '${package.yellow}:${task.yellow}'`);

        callback();
      }
    });
  }
  else {
    process.chdir(__dirname);
  }
}

/*
  Build all packages
*/
function buildPackages(done) {
  const packageDir = './packages';

  // Dependencies that are required for docs to render
  var docDependencies = [];
  var buildPkg = JSON.parse(fs.readFileSync(path.join(__dirname, 'packages/build', 'package.json'), 'utf8'));
  if (buildPkg.dependencies) {
    for (let depPkg in buildPkg.dependencies) {
      let deps = [];
      if (depPkg.indexOf('@spectrum-css') === 0) {
        let dependencyName = depPkg.split('/').pop();
        docDependencies.push(dependencyName);
      }
    }
  }

  // Get list of all packages
  var packages = fs.readdirSync(packageDir).filter(function(package) {
    // Drop vars from the list, we need to do it first
    if (package === 'vars' || docDependencies.indexOf(package) !== -1) {
      return false;
    }

    var stats = fs.statSync(path.join(packageDir, package));
    return stats.isDirectory();
  });

  // Build documentation dependencies first
  packages = docDependencies.concat(packages);

  // Add vars up in there first
  packages.unshift('vars');

  packages = packages.filter((package) => {
    return package !== 'build';
  });

  function getNextPackage() {
    return packages.shift();
  }

  function processPackage() {
    var package = getNextPackage();

    if (package) {
      runPackageTask(package, 'build', function(err) {
        processPackage();
      });
    }
    else {
      logger.warn('Build complete!'.bold.green);
      done();
    }
  }

  // Kick off a gulp build for each package
  processPackage();
};

var data = {
  nav: [],
  pkg: JSON.parse(fs.readFileSync(path.join('package.json'), 'utf8'))
};

function buildSite_getData(done) {
  data.nav = [];

  return gulp.src([
    'packages/*/docs.yml',
    'packages/*/docs/*.yml'
  ])
  .pipe(through.obj(function compilePug(file, enc, cb) {
    let componentData;
    try {
      componentData = yaml.safeLoad(String(file.contents));
    } catch (e) {
      return cb(e);
    }

    var packageName = file.dirname.replace('/docs', '').split('/').pop();

    var fileName = ext(file.basename, '.html');
    if (fileName === 'docs.html' || fileName === `${packageName}.html`) {
      fileName = 'index.html';
    }

    data.nav.push({
      name: componentData.name,
      component: packageName,
      example: path.basename(fileName, '.html'),
      url: `packages/${packageName}/dist/docs/${fileName}`
    });

    cb(null, file);
  }))
  .on('end', function() {
    data.nav = data.nav.sort(function(a, b) {
      return a.name <= b.name ? -1 : 1;
    });
    done();
  });
};

function buildSite_copyPackages() {
  // Todo: don't copy common resources
  return gulp.src([
    'packages/*/dist/**'
  ])
    .pipe(gulp.dest('dist/docs/packages/'));
};

function buildSite_copyResources() {
  return gulp.src('site/resources/**')
    .pipe(gulp.dest('dist/docs/'));
};

function buildSite_html() {
  return gulp.src('site/*.pug')
    .pipe(pug({
      locals: data
    }))
    .pipe(gulp.dest('dist/docs/'));
};

let buildSite_pages = gulp.series(
  buildSite_getData,
  buildSite_html
);

let buildSite_site = gulp.parallel(
  buildSite_copyResources,
  buildSite_pages
);

let buildSite = gulp.parallel(
  buildSite_copyPackages,
  buildSite_site
);

let build = gulp.series(
  buildPackages,
  buildSite
);

// dev
function serve() {
  browserSync({
    startPath: 'docs/index.html',
    server: './dist/'
  });
}

function watchSite() {
  gulp.watch(
    'site/*.pug',
    gulp.series(
      buildSite_pages,
      function reload(cb) {
        browserSync.reload();
        cb();
      }
    )
  );

  gulp.watch(
    [
      'site/resources/css/*.css',
      'site/resources/js/*.js',
    ],
    gulp.series(
      buildSite_copyResources,
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

/*
  Watch for changes to globs matching files within packages, execute task for that package, and copy/inject specified files
*/
function watchWithinPackages(glob, task, files) {
  var watcher = gulp.watch(glob, function handleChanged(done) {
    if (!changedFile) {
      done();
      return;
    }

    var package = changedFile.match(/packages\/(.*?)\//)[1];

    runPackageTask(package, task, function() {
      // Copy files
      gulp.src(`packages/${package}/dist/${files}`)
        .pipe(gulp.dest(`dist/docs/packages/${package}/dist/`))
        .on('end', function() {
          // Inject
          gulp.src(`dist/docs/packages/${package}/dist/${files}`)
            .pipe(browserSync.stream());

          changedFile = null;
          done();
        })
        .on('error', function(err) {
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

function startWatch() {
  serve();

  watchWithinPackages('packages/*/*.css', 'buildCSS', '*.css');

  watchWithinPackages(
    [
      'packages/*/docs/*.yml',
      'packages/*/docs.yml'
    ],
    'buildDocs_html',
    '*/*.html'
  );

  watchSite();
};

exports.dev = gulp.series(
  build,
  startWatch
);

exports.watch = startWatch;
exports.buildAll = buildPackages;
exports.build = build;
exports.default = build;
