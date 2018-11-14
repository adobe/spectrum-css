var gulp = require('gulp');

gulp.task('copy-vars', function() {
  // copy root vars to dist/vars
  return gulp.src(['vars/**/*'])
    .pipe(gulp.dest('dist/vars'));
});
