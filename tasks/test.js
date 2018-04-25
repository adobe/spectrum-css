var gulp = require('gulp');

gulp.task('test',
  gulp.series(
    'prepare-backstop',
    'build-backstop',
    'test-backstop'
  )
);