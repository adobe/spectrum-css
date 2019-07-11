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
const pug = require('gulp-pug');
const concat = require('gulp-concat');
const colors = require('colors');
const browserSync = require('browser-sync');
const depSolver = require('dependency-solver');
const cp = require('child_process');
const inq = require('inquirer');
const semver = require('semver');

function clean() {
  return del('dist/*');
};

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
  pkg: JSON.parse(fs.readFileSync(path.join('package.json'), 'utf8')),
  dependencyOrder: []
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

// Combined
function concatPackageFiles(taskName, input, output, directory) {
  let func = function() {
    let glob;
    if (Array.isArray(input)) {
      glob = [];

      data.dependencyOrder.forEach(function(dep) {
        let depName = dep.split('/').pop();
        input.forEach(function(file) {
          glob.push(`packages/${depName}/dist/${file}`);
        });
      });
    }
    else {
      glob = data.dependencyOrder.map(function(dep) {
        return `packages/${dep.split('/').pop()}/dist/${input}`;
      });
    }

    return gulp.src(glob, { allowEmpty: true })
      .pipe(concat(output))
      .pipe(gulp.dest(`dist/${directory || ''}`));
  };

  Object.defineProperty(func, 'name', { value: taskName, writable: false });

  return func;
}

function buildCombined_getDependencyOrder(done) {
  data.dependencyOrder = [];

  let dependencies = {};

  return gulp.src([
    'packages/*/package.json',
    '!packages/vars/package.json',
    '!packages/commons/package.json',
    '!packages/build/package.json'
  ])
  .pipe(through.obj(function readPackage(file, enc, cb) {
    let pkg;
    try {
      pkg = JSON.parse(String(file.contents));
    } catch (e) {
      return cb(e);
    }

    dependencies[pkg.name] = Object.keys(pkg.dependencies).filter(function(dep) {
      return dep.indexOf('@spectrum-css') === 0;
    });

    cb(null, file);
  }))
  .on('end', function() {
    data.dependencyOrder = depSolver.solve(dependencies);
    data.dependencyOrder = data.dependencyOrder.filter(function(dep) {
      return dep !== '@spectrum-css/vars';
    });

    logger.debug(`Dependency order: \n${data.dependencyOrder.join('\n')}`);
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

let build = gulp.series(
  clean,
  buildPackages,
  gulp.parallel(
    buildCombined,
    buildStandalone,
    buildSite
  )
);

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
  return cp.exec(command, handleExec(cb));
}

function handleExec(cb) {
  return function(err, stdout, stderr) {
    logger.info(stdout);

    if (err) {
      logger.error(stderr);
      return cb(err);
    }

    cb();
  }
}

// The version we'll actually release
let releaseVersion = null;

function bumpVersion(cb) {
  function getPackage() {
    return JSON.parse(fs.readFileSync('package.json', 'utf8'));
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

  if (package.version.match('-beta')) {
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

function release_copyPackages() {
  // Todo: don't copy common resources
  return gulp.src([
    'packages/*/dist/**',
    '!packages/*/dist/docs/**'
  ])
    .pipe(gulp.dest('dist/components/'));
};

let release = gulp.series(
  bumpVersion,
  // perform build
  // build,
  gulp.parallel(
    buildCombined,
    buildStandalone,
    buildSite,
    release_copyPackages
  ),
  // push tag
  function pushTag(cb) {
    exec(`git push origin v${releaseVersion}`, cb);
  },
  // push current branch
  execTask('pushBranch', 'git push'),
  // publish to npm
  execTask('npmPublish', 'npm publish'),
  // handle gh-pages
  execTask('checkoutPages', `git checkout gh-pages`),
  function copyPages(cb) {
    exec(`cp -r dist ${releaseVersion}`, cb);
  },
  // update gh-pages index files if not alpha release
  // ?
  function commitPages(cb) {
    exec(`git commit ${releaseVersion} -m "Deploy version ${releaseVersion}"`, cb);
  },
  execTask('pushPages', 'git push'),
  // Go back
  execTask('checkoutBranch', `git checkout -`)
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
  var watcher = gulp.watch(glob, { followSymlinks: false }, function handleChanged(done) {
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

exports.release = release;
exports.buildCombined = buildCombined;
exports.buildStandalone = buildStandalone;
exports.clean = clean;
exports.watch = startWatch;
exports.buildAll = buildPackages;
exports.build = build;
exports.default = build;
