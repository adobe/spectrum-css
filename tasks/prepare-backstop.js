var gulp = require('gulp');
var fs = require('fs');
var insert = require('gulp-insert');
var path = require('path');
var replace = require('gulp-replace');

gulp.task('prepare-backstop:fix-spectrum-icons', function() {
  // backstopjs runs the docs website off of file uri so the requests to the 
  // svg files will create errors which will then keep chrome processes running

  // to get around this and allow the svg icons to work, just read the svg file and
  // embed it in the head of the index.html
  var spectrumCSSIconsPath = path.resolve(__dirname, '../dist/icons/spectrum-css-icons.svg');
  var spectrumCSSPath = path.resolve(__dirname, '../dist/icons/spectrum-icons.svg');

  var spectrumCSSIcons = fs.readFileSync(spectrumCSSIconsPath, 'utf8');
  var spectrumCSS = fs.readFileSync(spectrumCSSPath, 'utf8');

  return gulp.src('./dist/docs/index.html')
    .pipe(insert.prepend(spectrumCSSIcons + '\n' + spectrumCSS))
    .pipe(replace(/<svg xmlns="http:\/\/www.w3.org\/2000\/svg">/g, '<svg xmlns="http://www.w3.org/2000/svg" style="display:none">'))
    .pipe(gulp.dest('./dist/docs'));
});

gulp.task('prepare-backstop:disable-load-icon', function() {
  return gulp.src('./dist/docs/js/docs.js')
    .pipe(replace(/AdobeSpectrum\.loadIcons.*/g), '')
    .pipe(gulp.dest('./dist/docs/js/'));
});

gulp.task('prepare-backstop',
  gulp.series(
    'prepare-backstop:fix-spectrum-icons',
    'prepare-backstop:disable-load-icon'
  )
);