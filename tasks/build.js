var gulp = require('gulp');

gulp.task('build',
  gulp.series(
    'lint',
    'clean',
    'icons',
    'copy-vars',
    'copy-loadIcons',
    'build-css',
    'build-docs'
  )
);

gulp.task('build-lite',
  gulp.series(
    'build-css',
    'build-docs'
  )
);
