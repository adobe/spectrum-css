var gulp = require('gulp');
var postcss = require('gulp-postcss');
var rename = require('gulp-rename');
var replace = require('gulp-replace');
var insert = require('gulp-insert');
var concat = require('gulp-concat');
var merge = require('merge-stream');
var plumb = require('./lib/plumb.js');

var colorStops = [
  'darkest',
  'dark',
  'light',
  'lightest'
];

var processors = [
  require('postcss-import'),
  require('postcss-nested'),
  require('postcss-inherit'),
  require('postcss-custom-properties')({noValueNotifications: 'error'}),
  require('postcss-calc'),
  require('postcss-svg'),
  require('postcss-functions')({
    functions: {
      noscale: function(value) {
        return value.toString().toUpperCase();
      }
    }
  }),
  require('postcss-pxtorem')({
    rootValue: 16,
    propList: ['*'],
    minPixelValue: 1,
    selectorBlackList: [/^html$/]
  }),
  require('postcss-focus-ring'),
  require('autoprefixer')({
    'browsers': [
      'IE >= 10',
      'last 2 Chrome versions',
      'last 2 Firefox versions',
      'last 2 Safari versions',
      'last 2 iOS versions'
    ]
  })
];

/**
  Builds individual components (dimensions only)
*/
gulp.task('build-css:individual-components-md', function() {
  return gulp.src('src/*/index.css')
    .pipe(plumb())
    .pipe(insert.prepend('@import "../../dist/vars/spectrum-medium.css";'))
    .pipe(postcss(processors))
    .pipe(rename(function(path) {
      path.basename += '-md';
    }))
    .pipe(gulp.dest('dist/components/'));
});

/**
  Builds individual components (dimensions only)
*/
gulp.task('build-css:individual-components-lg', function() {
  return gulp.src('src/*/index.css')
    .pipe(plumb())
    .pipe(insert.prepend('@import "../../dist/vars/spectrum-large.css";'))
    .pipe(postcss(processors))
    .pipe(rename(function(path) {
      path.basename += '-lg';
    }))
    .pipe(gulp.dest('dist/components/'));
});

/**
  Diffs md and large
*/
gulp.task('build-css:individual-components-diffscale', function() {
  return gulp.src('src/*/index.css')
    .pipe(plumb())
    // Get var statements only
    .pipe(postcss([
      require('./lib/postcss-varsonly')()
    ]))
    // Use large variables
    .pipe(insert.prepend('@import "../../dist/vars/spectrum-large.css";'))
    // Build
    .pipe(postcss(processors))
    // Wrap in large
    .pipe(insert.prepend('.spectrum--large {\n'))
    .pipe(insert.append('\n}\n'))
    // Stay as pixels
    .pipe(postcss([
      require('postcss-nested'),
      require('postcss-remtopx'),
      require('postcss-discard-empty')
    ]))
    .pipe(rename(function(path) {
      path.basename += '-diff';
    }))
    .pipe(gulp.dest('dist/components/'));
});

/**
  Builds all skin files individually against each colorstop for each component with outer descendant selectors
  This enables the use of multiple colorstops on the same page
*/
gulp.task('build-css:individual-components-multistops', function() {
  function buildSkinFiles(colorStop) {
    return gulp.src([
      'src/*/skin.css',
      '!src/commons/skin.css'
    ])
      .pipe(plumb())
      .pipe(insert.prepend(`\n@import '../colorStops/spectrum-${colorStop}.css';\n.spectrum--${colorStop} {\n`))
      .pipe(insert.append('}\n'))
      .pipe(postcss(processors))
      .pipe(rename(function(path) {
        path.dirname += '/multiStops';
        path.basename = colorStop;
      }))
      .pipe(gulp.dest('dist/components/'));
  }

  return merge.apply(this, colorStops.map(buildSkinFiles));
});

function buildSkinFiles(colorStop, globs, prependString, appendString, dest) {
  prependString = prependString || '';
  appendString = appendString || '';
  dest = dest || 'dist/components/';

  return gulp.src(globs)
    .pipe(plumb())
    .pipe(insert.prepend(`\n@import '../colorStops/spectrum-${colorStop}.css';${prependString}`))
    .pipe(insert.append(appendString))
    .pipe(postcss(processors))
    .pipe(replace(/^&/gm, '.spectrum')) // Any stray & in colorstops should just apply to .spectrum
    .pipe(rename(function(path) {
      path.dirname += '/colorStops';
      path.basename = colorStop;
    }))
    .pipe(gulp.dest(dest));
}

/**
  Builds all skin files individually against each colorstop for each component
  This increases performance, but does not allow multiple colorstops on the same page
*/
gulp.task('build-css:individual-components-colorstops', function() {
  function buildComponentSkinFiles(colorStop) {
    return buildSkinFiles(colorStop, [
      'src/*/skin.css',
      '!src/page/skin.css' // Process separately
    ]);
  }
  return merge.apply(this, colorStops.map(buildComponentSkinFiles));
});

/**
  Build page skin files separately
*/
gulp.task('build-css:page-component-colorstops', function() {
  function buildPageSkinFiles(colorStop) {
    return buildSkinFiles(colorStop, 'src/page/skin.css', '.spectrum {\n', '\n}', 'dist/components/page/');
  }
  return merge.apply(this, colorStops.map(buildPageSkinFiles));
});

/**
  Builds all components and all color stops for all components
  This task results in unresolved multistop files that require build-css:build-multistops to be ready-to-use
*/
gulp.task('build-css:all-components-multistops', function() {
  return gulp.src([
    'src/spectrum-*.css',
    '!src/spectrum-core.css'
  ])
    .pipe(plumb())
    .pipe(postcss(processors))
    .pipe(gulp.dest('dist/'));
});

/**
  Builds core multistop files
*/
gulp.task('build-css:core-md-multistops', function() {
  return gulp.src('src/spectrum-core.css')
    .pipe(plumb())
    .pipe(insert.prepend('@import "../dist/vars/spectrum-medium.css";'))
    .pipe(postcss(processors))
    .pipe(rename(function(path) {
      path.basename += '-md';
    }))
    .pipe(gulp.dest('dist/'));
});

/**
  Builds core multistop files
*/
gulp.task('build-css:core-lg-multistops', function() {
  return gulp.src('src/spectrum-core.css')
    .pipe(plumb())
    .pipe(insert.prepend('@import "../dist/vars/spectrum-large.css";'))
    .pipe(postcss(processors))
    .pipe(rename(function(path) {
      path.basename += '-lg';
    }))
    .pipe(gulp.dest('dist/'));
});

/**
  Builds standalone multistop CSS files
*/
gulp.task('build-css:build-multistops', function() {
  function buildMultistops(colorStop) {
    return gulp.src('dist/spectrum-' + colorStop + '.css')
      .pipe(plumb())
      // Simply wrap the file in the colorstop
      // This is a workaround for the fact that postcss-import and postcss-nested can't play together
      .pipe(insert.prepend(`.spectrum--${colorStop} {\n`))
      .pipe(insert.append('}\n'))
      .pipe(postcss([require('postcss-nested')]))
      .pipe(gulp.dest('dist/'));
  }

  return merge.apply(this, colorStops.map(buildMultistops));
});

/**
  Builds standalone single colorstop CSS files
*/
gulp.task('build-css:concat-standalone-md', function() {
  function concatStandalone(colorStop) {
    return gulp.src([
      'dist/spectrum-core-md.css',
      'dist/spectrum-' + colorStop + '.css'
    ])
      .pipe(concat('spectrum-' + colorStop + '-md.css'))
      // Replace instances of & that refer to the colorstop selector with .secptrum
      .pipe(replace(/^&/gm, '.spectrum'))
      .pipe(gulp.dest('dist/standalone'));
  }

  return merge.apply(this, colorStops.map(concatStandalone));
});

gulp.task('build-css:concat-standalone-lg', function() {
  function concatStandalone(colorStop) {
    return gulp.src([
      'dist/spectrum-core-lg.css',
      'dist/spectrum-' + colorStop + '.css'
    ])
      .pipe(concat('spectrum-' + colorStop + '-lg.css'))
      // Replace instances of & that refer to the colorstop selector with .secptrum
      .pipe(replace(/^&/gm, '.spectrum'))
      .pipe(gulp.dest('dist/standalone'));
  }

  return merge.apply(this, colorStops.map(concatStandalone));
});

gulp.task('build-css:concat-core-diff', function() {
  return gulp.src([
    'src/components.css'
  ])
    .pipe(replace(/@import '(.*?)\/index\.css';/g, '@import "../dist/components/$1/index-diff.css";'))
    .pipe(postcss([
      require('postcss-import')
    ]))
    .pipe(rename('spectrum-core-diff.css'))
    .pipe(gulp.dest('dist/'));
});


gulp.task('build-css',
  gulp.series(
    gulp.parallel(
      'build-css:individual-components-md',
      'build-css:individual-components-lg',
      'build-css:individual-components-multistops',
      'build-css:individual-components-colorstops',
      'build-css:page-component-colorstops',
      'build-css:all-components-multistops',
      'build-css:core-md-multistops',
      'build-css:core-lg-multistops'
    ),
    gulp.parallel(
      'build-css:individual-components-diffscale',
      'build-css:concat-standalone-md',
      'build-css:concat-standalone-lg',
      'build-css:build-multistops'
    ),
    gulp.parallel(
      'build-css:concat-core-diff'
    )
  )
);
