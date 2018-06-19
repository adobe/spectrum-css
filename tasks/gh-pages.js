var gulp = require('gulp');
var replace = require('gulp-replace');
var git = require('gulp-git');
var fs = require('fs');
var template = require('gulp-template');
var package = JSON.parse(fs.readFileSync('./package.json'));

/**
 * Replace the redirect path to latest version
 */
gulp.task('gh-pages:prepare-docs', function () {
  return gulp.src('tasks/resources/docs/index.html')
    .pipe(template({ version: package.version }))
    .pipe(gulp.dest('./'));
});

/**
 * Publish change to gh-pages
 */
gulp.task('gh-pages:publish', function (cb) {

  // Move files
  gulp.src('dist/**')
    .pipe(gulp.dest(package.version))
    .on('end', function () {

      // Add new files
      gulp.src([
        package.version
      ])
        .pipe(git.add())
        .on('end', function () {
          // Commit
          gulp.src([
            package.version + '/**',
            'index.html'
          ])
            .pipe(git.add())
            .pipe(git.commit('Deploy version ' + package.version))
            .on('end', function () {
              // Push
              git.push('origin', 'gh-pages', cb);
            });
        });
    });
});

gulp.task('gh-pages:checkout-gh-pages', function (cb) {
  git.checkout('gh-pages', cb);
});

gulp.task('gh-pages:checkout-master', function (cb) {
  git.checkout('master', cb);
});

gulp.task('gh-pages',
  gulp.series(
    'gh-pages:checkout-gh-pages',
    'gh-pages:prepare-docs',
    'gh-pages:publish',
    'gh-pages:checkout-master'
  )
);