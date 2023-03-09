const gulp = require('gulp');
const replace = require('gulp-replace');

const rimraf = require('rimraf');

/** Site */
function prepareSite_clean() {
  return rimraf('dist-site/', { preserveRoot: false });
}

function prepareSite_docs() {
  return gulp.src('dist/docs/**/*')
    .pipe(replace('../components/', 'components/'))
    .pipe(gulp.dest('dist-site/'));
}

function prepareSite_components() {
  return gulp.src('dist/components/**/*', {
    base: 'dist'
  })
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
