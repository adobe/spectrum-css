var gulp = require('gulp');
var path = require('path');
var svgmin = require('gulp-svgmin');
var rename = require('gulp-rename');
var svgstore = require('gulp-svgstore');
var replace = require('gulp-replace');
var svgcombiner = require('gulp-svgcombiner');
var del = require('del');

gulp.task('delete-icons', function() {
  return del('icons/**');
});

gulp.task('copy-icons-large', function() {
  return gulp.src('node_modules/@a4u/a4u-collection-essential-ui-icons-release/assets/UI_Icons_SVG_Large/*.svg')
    .pipe(gulp.dest('icons/large/'));
});

gulp.task('copy-icons-medium', function() {
  return gulp.src('node_modules/@a4u/a4u-collection-essential-ui-icons-release/assets/UI_Icons_SVG_Medium/*.svg')
    .pipe(gulp.dest('icons/medium/'));
});

gulp.task('clean-icons', function() {
  return gulp.src('icons/**/*.svg')
    .pipe(replace(/ data-name=".*?"/g, ''))
    .pipe(replace(/ id=".*?"/g, ''))
    .pipe(replace(/ class=".*?"/g, ''))
    .pipe(svgmin({
      plugins: [{
        collapseGroups: true
      }]
    }))
    .pipe(replace(/<defs>.*?<\/defs>/, ''))
    .pipe(replace(/<title>.*?<\/title>/, ''))
    .pipe(gulp.dest('icons/'));
});

// Only ran by Adobe
gulp.task('copy-icons',
  gulp.series(
    'delete-icons',
    gulp.parallel('copy-icons-medium', 'copy-icons-large'),
    'clean-icons'
  )
);

gulp.task('generate-combined-icons', function() {
  return gulp.src([
    'icons/medium/*.svg',
    'icons/large/*.svg'
  ])
    .pipe(svgcombiner({
      processName: function(filePath) {
        // Clean filename
        return path.basename(filePath, path.extname(filePath)).replace(/S_UI(.*?)_.*/, '$1');
      },
      processClass: function(filePath) {
        // Return the last directory
        return 'spectrum-UIIcon--' + path.dirname(filePath).split(path.sep).pop();
      }
    }))
    .pipe(gulp.dest('icons/combined/'));
});

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
    'generate-combined-icons',
    'generate-svgsprite'
  )
));
