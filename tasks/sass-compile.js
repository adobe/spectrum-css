var gulp = require('gulp');
var sass = require('gulp-sass');
var del = require('del');

gulp.task('sass-compiling-validate', function () {
  return gulp.src(['dist/**/*.css', '!dist/docs/**/*.css'])
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('clean-sass-compile', function () {
  return del('dist/css');
});
