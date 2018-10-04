var gulp = require('gulp');

var browserSync = require('browser-sync').create();

function reload(done) {
  browserSync.reload();
  done();
}

function injectCSS() {
  return gulp.src('dist/*.css')
    .pipe(browserSync.stream());
}

function injectDocsResources() {
  return gulp.src('dist/docs/css/docs.css')
    .pipe(browserSync.stream());
}

function serve(done) {
  browserSync.init({
    port: 8080,
    ui: {
      port: 3000,
      weinre: {
        port: 3001
      }
    },
    startPath: 'docs/index.html',
    server: {
      baseDir: [
        './dist/'
      ],
      directory: true
    },
    watchOptions: {
      awaitWriteFinish: true
    }
  });
  done();
}

function watch() {
  gulp.watch('src/**/*.css', gulp.series('reload-css'));

  gulp.watch([
    'docs/**/*.yml',
    'topdoc/lib/template.pug',
    'topdoc/lib/index.js',
    'tasks/resources/docs/js/*.js'
  ], gulp.series('reload-docs'));

  gulp.watch([
    'tasks/resources/docs/css/*.css'
  ], gulp.series('reload-docs-css'));

  gulp.watch('icons/*.svg', gulp.series('reload-icons'));
}

gulp.task('reload-css', gulp.series('build-css', injectCSS));
gulp.task('reload-docs-css', gulp.series('build-docs:copy-site-resources', injectDocsResources));

gulp.task('reload-docs', gulp.series('build-docs', reload));
gulp.task('reload-icons', gulp.series('icons', reload));

gulp.task('dev', gulp.series('build', serve, watch));
