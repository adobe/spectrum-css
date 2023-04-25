const gulp = require('gulp');
const builder = require('./tools/bundle-builder');
const site = require('./site/gulpfile.js');
const replace = require('gulp-replace');
const del = require('del');

Object.assign(exports, builder);
Object.assign(exports, site);

/** Site */
function prepareSite_clean() {
  return del('dist-site/');
}

function prepareSite_components() {
  return gulp.src('dist/components/**/*', {
    base: 'dist'
  })
    .pipe(gulp.dest('dist-site/'));
}

function prepareSite_docs() {
  return gulp.src('dist/docs/**/*')
    .pipe(replace('../components/', 'components/'))
    .pipe(gulp.dest('dist-site/'));
}

exports.prepareSite = gulp.series(
  builder.buildDocs,
  site.copySiteResources,
  prepareSite_clean,
  gulp.parallel(
    prepareSite_docs,
    prepareSite_components
  )
);

exports.dev = gulp.series(
  exports.copySiteResources,
  exports.dev
);

exports.devHeavy = gulp.series(
  exports.copySiteResources,
  exports.devHeavy
);

exports['watch-relaunch'] = function() {
  process.env['BROWSERSYNC_OPEN'] = true;
  exports.watch();
}

exports.buildDocs = gulp.series(
  builder.buildDocs,
  site.copySiteResources
);
