var gulp = require('gulp');
var del = require('del');

gulp.task('clean', function() {
  return del(['dist/**', 'backstop_data/build_data/**']);
});
