const gulp = require('gulp');
const fs = require('fs');
const del = require('del');

gulp.task('clean', function() {
  return del('dist/*');
});

gulp.task('build-prepare', function(cb) {
  var dir = 'dist';
  if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
  }
  cb();
});

// Builds a list of unique variables from DNA for each theme and scale.
gulp.task('build-vars', function(cb) {
  let vars = require('./');
  for (let theme in vars.themes) {
    fs.writeFileSync(`dist/spectrum-${theme}.css`, vars.generate(theme, vars.themes[theme]));
  }

  for (let scale in vars.scales) {
    fs.writeFileSync(`dist/spectrum-${scale}.css`, vars.generate(scale, vars.scales[scale]));
  }

  cb();
});

gulp.task('copy-metadata', function() {
  return gulp.src('vars/spectrum-metadata.json')
    .pipe(gulp.dest('dist/'))
});

gulp.task('default',
  gulp.series('clean', 'build-prepare',
    gulp.parallel(
      'build-vars',
      'copy-metadata'
    )
  )
);
