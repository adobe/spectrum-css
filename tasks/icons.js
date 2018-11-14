var gulp = require('gulp');
var rename = require('gulp-rename');
var svgstore = require('gulp-svgstore');

gulp.task('generate-svgsprite', function() {
  return gulp.src('icons/combined/*.svg')
    .pipe(rename(function(filePath) {
      filePath.basename = 'spectrum-css-icon-' + filePath.basename;
    }))
    .pipe(svgstore({
      inlineSvg: true
    }))
    .pipe(rename('spectrum-css-icons.svg'))
    .pipe(gulp.dest('dist/icons/'));
});

function getSVGSpriteTask(size) {
  return function() {
    return gulp.src(`icons/${size}/*.svg`)
      .pipe(rename(function(filePath) {
        filePath.basename = 'spectrum-css-icon-' + filePath.basename.replace(/S_UI(.*?)_.*/, '$1');
      }))
      .pipe(svgstore({
        inlineSvg: true
      }))
      .pipe(rename(`spectrum-css-icons-${size}.svg`))
      .pipe(gulp.dest('dist/icons/'));
  };
}

gulp.task('generate-svgsprite-medium', getSVGSpriteTask('medium'));
gulp.task('generate-svgsprite-large', getSVGSpriteTask('large'));

gulp.task('icons', gulp.parallel(
  'generate-svgsprite-medium',
  'generate-svgsprite-large',
  gulp.series(
    'generate-svgsprite'
  )
));
