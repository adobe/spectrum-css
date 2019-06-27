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
const ext = require('replace-ext');
const yaml = require('js-yaml');
const through = require('through2');
const pug = require('gulp-pug');

gulp.task('build-packages', function(cb) {
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

  function getNextPackage() {
    return packages.shift();
  }

  function processPackage() {
    var package = getNextPackage();

    if (package) {
      var gulpfile = path.join(__dirname, packageDir, package, 'gulpfile.js');
      if (fs.existsSync(gulpfile)) {
        process.chdir(path.join(__dirname, packageDir, package));

        require(`${gulpfile}`);

        console.log(`Running build for ${package}...`);

        if (gulp.task('build')) {
          gulp.task('build')(function(err) {
            console.log(`Done building ${package}`);
            if (err) {
              throw err;
            }
            else {
              processPackage();
            }
          });
        }
        else {
          console.error(`Could not find build task for ${package}`);
        }
      }
      else {
        console.error(`Could not find gulpfile for ${package} at ${gulpfile}, skipping...`);

        processPackage();
      }
    }
    else {
      console.log('Build complete!');

      // Go back to the root dir, otherwise tasks will break
      process.chdir(__dirname);

      cb();
    }
  }

  // Kick off a gulp build for each package
  processPackage();
});


var data = {
  nav: [],
  pkg: JSON.parse(fs.readFileSync(path.join('package.json'), 'utf8'))
};

gulp.task('build-docs:getData', function(done) {
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
});

gulp.task('build-docs:copyPackages', function() {
  return gulp.src('packages/*/dist/**')
    .pipe(gulp.dest('dist/docs/packages/'));
});

gulp.task('build-docs:copyResources', function() {
  return gulp.src('site/resources/**')
    .pipe(gulp.dest('dist/docs/'));
});

gulp.task('build-docs:html', function buildHtml() {
  return gulp.src('./site/*.pug')
    .pipe(pug({
      locals: data
    }))
    .pipe(gulp.dest('dist/docs/'));
});

gulp.task('build-docs:site',
  gulp.parallel(
    'build-docs:copyResources',
    gulp.series(
      'build-docs:getData',
      'build-docs:html'
    )
  )
);

gulp.task('build-docs',
  gulp.parallel(
    'build-docs:copyPackages',
    'build-docs:site'
  )
);

gulp.task('build', gulp.series(
  'build-packages',
  'build-docs'
));

gulp.task('default', gulp.series('build'));
