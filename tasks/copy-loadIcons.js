var gulp = require('gulp');
var rename = require('gulp-rename');

gulp.task('copy-loadIcons', function() {
  // copy loadIcons.js to dist/icons
  return gulp.src(['node_modules/loadicons/index.js'])
    .pipe(rename('loadIcons.js'))
    .pipe(gulp.dest('dist/icons/'));
});
