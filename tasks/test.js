var gulp = require('gulp');

gulp.task('test',
  gulp.series(
    'build-backstop',
    'test-backstop'
  )
);