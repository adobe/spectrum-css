var gulp = require('gulp');

// Include all tasks
require('./tasks/lint');
require('./tasks/load-dna');
require('./tasks/icons');
require('./tasks/build-css');
require('./tasks/build-docs');
require('./tasks/clean');
require('./tasks/gh-pages');
require('./tasks/build');
require('./tasks/dev');
require('./tasks/build-backstop');
require('./tasks/test-backstop');
require('./tasks/prepare-backstop');
require('./tasks/test');

gulp.task('default', gulp.series('build'));
