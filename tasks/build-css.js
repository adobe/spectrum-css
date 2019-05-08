/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var gulp = require('gulp');
var postcss = require('gulp-postcss');
var postcssReal = require('postcss');
var rename = require('gulp-rename');
var replace = require('gulp-replace');
var insert = require('gulp-insert');
var concat = require('gulp-concat');
var merge = require('merge-stream');
var plumb = require('./lib/plumb.js');
var notnested = require('./lib/postcss-notnested');
var fs = require('fs');

var colorStops = [
  'darkest',
  'dark',
  'light',
  'lightest'
];

function getProcessors(keepVars = false) {
  return [
    require('postcss-import'),
    require('postcss-mixins')({
      mixins: {
        typography: function(mixin, name, tokenName, textTransformIgnore) {
          if(!tokenName) {
            tokenName = name.replace(/\.?([A-Z]|[0-9])/g, function (x,y) { return '-' + y.toLowerCase(); }).replace(/^-/, '');
            tokenName = tokenName.replace('.spectrum--', '');
          }
          var output = '';
          var propMap = {
            'font-size': 'text-size',
            'font-weight': 'text-font-weight',
            'line-height': 'text-line-height',
            'font-style': 'text-font-style',
            'letter-spacing': 'text-letter-spacing',
            'text-transform': 'text-transform',
          };
          function buildProperties (tokeString) {
            var ruleString = '';
            Object.keys(propMap).forEach((key) => {
              if(!textTransformIgnore || key != 'text-transform') {
                ruleString += `  ${key}: var(--spectrum-${tokeString}-${propMap[key]});\n`;
              }
            });
            ruleString += '  margin-top: 0;\n  margin-bottom: 0;\n';
            return ruleString;
          }
          output = `${name} {
          ${buildProperties(tokenName)}
            em {
              ${buildProperties(`${tokenName}-emphasis`)}
            }
            strong {
              ${buildProperties(`${tokenName}-strong`)}
            }
          }`;
          var nodes = postcssReal.parse(output);
          nodes.nodes[0].append(mixin.nodes);
          mixin.replaceWith(nodes);
        },
        typographyColor: function(mixin, name, tokenName) {
          if(!tokenName) {
            tokenName = name.replace(/\.?([A-Z]|[0-9])/g, function (x,y) { return '-' + y.toLowerCase(); }).replace(/^-/, '');
            tokenName = tokenName.replace('.spectrum--', '');
          }
          var output = `${name} {
            color: var(--spectrum-${tokenName}-text-color);
          }`;
          var nodes = postcssReal.parse(output);
          nodes.nodes[0].append(mixin.nodes);
          mixin.replaceWith(nodes);
        },
        typographyMargins: function(mixin, name, tokenName) {
          if(!tokenName) {
            tokenName = name.replace(/\.?([A-Z]|[0-9])/g, function (x,y) { return '-' + y.toLowerCase(); }).replace(/^-/, '');
            tokenName = tokenName.replace('.spectrum--', '');
          }
          var output = `${name} {
            margin-top: var(--spectrum-${tokenName}-margin-top);
            margin-bottom: var(--spectrum-${tokenName}-margin-bottom);
          }`;
          var nodes = postcssReal.parse(output);
          nodes.nodes[0].append(mixin.nodes);
          mixin.replaceWith(nodes);
        },
      }
    }),
    require('postcss-nested'),
    require('postcss-inherit'),
    require('postcss-custom-properties')({
      noValueNotifications: 'error',
      warnings: !keepVars
    }),
    require('./lib/postcss-custom-properties-passthrough')(),
    require('postcss-calc'),
    keepVars ? require('./lib/postcss-custom-properties-mapping') : null,
    keepVars ? notnested({ replace: '.spectrum' }) : null,
    require('postcss-svg'),
    require('postcss-functions')({
      functions: {
        noscale: function(value) {
          return value.toString().toUpperCase();
        },
        percent: function(value) {
          return parseInt(value, 10) / 100;
        }
      }
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
  ].filter(Boolean);
}

var processors = getProcessors();
var varsProcessors = getProcessors(true);

/**
  Builds individual components (dimensions only)
*/
gulp.task('build-css:individual-components-md', function() {
  return gulp.src('src/*/index.css')
    .pipe(plumb())
    .pipe(insert.prepend('@import "../../vars/spectrum-medium.css";'))
    .pipe(insert.prepend('@import "../../vars/spectrum-global.css";\n'))
    .pipe(postcss(processors.concat([notnested()])))
    // .pipe(rename(function(path) {
    //   path.basename += '-md';
    // }))
    .pipe(gulp.dest('dist/components/'));
});

/**
  Builds individual components (dimensions only)
*/
gulp.task('build-css:individual-components-lg', function() {
  return gulp.src('src/*/index.css')
    .pipe(plumb())
    .pipe(insert.prepend('@import "../../vars/spectrum-large.css";'))
    .pipe(insert.prepend('@import "../../vars/spectrum-global.css";\n'))
    .pipe(postcss(processors.concat([notnested()])))
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
    .pipe(insert.prepend('@import "../../vars/spectrum-large.css";'))
    .pipe(insert.prepend('@import "../../vars/spectrum-global.css";\n'))
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
  function buildMultistopSkinFiles(colorStop) {
    return gulp.src([
      'src/*/skin.css',
      '!src/commons/skin.css'
    ])
      .pipe(plumb())
      .pipe(insert.prepend(`\n@import '../colorStops/spectrum-${colorStop}.css';\n.spectrum--${colorStop} {\n`))
      .pipe(insert.prepend('@import "../../vars/spectrum-global.css";\n'))
      .pipe(insert.append('}\n'))
      .pipe(postcss(processors))
      // Fix a nested + inherit bug
      .pipe(replace(`.spectrum--${colorStop} .spectrum--${colorStop}`, `.spectrum--${colorStop}`))
      .pipe(rename(function(path) {
        path.dirname += '/multiStops';
        path.basename = colorStop;
      }))
      .pipe(gulp.dest('dist/components/'));
  }

  return merge.apply(this, colorStops.map(buildMultistopSkinFiles));
});

function buildSkinFiles(colorStop, globs, prependString, appendString, dest) {
  prependString = prependString || '';
  appendString = appendString || '';
  dest = dest || 'dist/components/';

  return gulp.src(globs)
    .pipe(plumb())
    .pipe(insert.prepend(`@import '../colorStops/spectrum-${colorStop}.css';${prependString}`))
    .pipe(insert.prepend('@import "../../vars/spectrum-global.css";\n'))
    .pipe(insert.append(appendString))
    // Any stray & in colorstops should just apply to .spectrum
    .pipe(postcss(processors.concat([notnested({ replace: '.spectrum' })])))
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
    .pipe(insert.prepend('@import "../vars/spectrum-global.css";\n'))
    .pipe(postcss(processors))
    .pipe(gulp.dest('dist/'));
});

/**
  Builds core multistop files
*/
gulp.task('build-css:core-md-multistops', function() {
  return gulp.src('src/spectrum-core.css')
    .pipe(plumb())
    .pipe(insert.prepend('@import "../vars/spectrum-medium.css";'))
    .pipe(insert.prepend('@import "../vars/spectrum-global.css";\n'))
    .pipe(postcss(processors.concat([notnested()])))
    // .pipe(rename(function(path) {
    //   path.basename += '-md';
    // }))
    .pipe(gulp.dest('dist/'));
});

/**
  Builds core multistop files
*/
gulp.task('build-css:core-lg-multistops', function() {
  return gulp.src('src/spectrum-core.css')
    .pipe(plumb())
    .pipe(insert.prepend('@import "../vars/spectrum-large.css";'))
    .pipe(insert.prepend('@import "../vars/spectrum-global.css";\n'))
    .pipe(postcss(processors.concat([notnested()])))
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
      // 'dist/spectrum-core-md.css',
      'dist/spectrum-core.css',
      'dist/spectrum-' + colorStop + '.css'
    ])
      // .pipe(concat('spectrum-' + colorStop + '-md.css'))
      .pipe(concat('spectrum-' + colorStop + '.css'))
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

/**
 * Builds a version of each component that uses native CSS variables. Relies on the unique variables extracted from DNA.
 */
gulp.task('build-css:individual-components-vars', function() {
  function buildComponent(component) {
    return gulp.src([
      `src/${component}/index.css`,
      `src/${component}/skin.css`
    ], {
      allowEmpty: true // Allow missing skin.css
    })
      .pipe(plumb())
      .pipe(concat('index-vars.css'))
      .pipe(postcss(varsProcessors))
      .pipe(rename(function(path) {
        path.dirname += '/' + component;
      }))
      .pipe(gulp.dest('dist/components'));
  }

  return merge.apply(merge, fs.readdirSync('src').filter(name => {
    // Skip anything that's not a component directory
    return fs.statSync(`src/${name}`).isDirectory();
  }).map(buildComponent));
});

/**
 * Builds a list of unique variables from DNA for each theme and scale.
 */
gulp.task('build-css:unique-vars', function(cb) {
  let vars = require('./lib/vars');
  for (let theme in vars.themes) {
    fs.writeFileSync(`dist/vars/spectrum-${theme}-unique.css`, vars.generate(theme, vars.themes[theme]));
  }

  for (let scale in vars.scales) {
    fs.writeFileSync(`dist/vars/spectrum-${scale}-unique.css`, vars.generate(scale, vars.scales[scale]));
  }

  cb();
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
      'build-css:concat-core-diff',
      'build-css:unique-vars'
    ),
    'build-css:individual-components-vars'
  )
);

gulp.task('build-css-lite',
  gulp.series(
    gulp.parallel(
      'build-css:all-components-multistops',
      'build-css:core-md-multistops',
      'build-css:core-lg-multistops'
    ),
    gulp.parallel(
      'build-css:individual-components-diffscale',
      'build-css:build-multistops'
    ),
    gulp.parallel(
      'build-css:concat-core-diff'
    )
  )
);
