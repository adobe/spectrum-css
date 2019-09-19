const gulp = require('gulp');
const path = require('path');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const through = require('through2');
const postcss = require('postcss');
const fsp = require('fs').promises;
const dirs = require('../lib/dirs.js');

// Uhg share this with component-builder
function getVarsFromCSS(css) {
  let variableList = [];
  let root = postcss.parse(css);

  root.walkRules((rule, ruleIndex) => {
    rule.walkDecls((decl) => {
      let matches = decl.value.match(/--[\w-]+/g);
      if (matches) {
        matches.forEach(function(match) {
          if (variableList.indexOf(match) === -1) {
            variableList.push(match);
          }
        });
      }
    });
  });

  return variableList;
}

function getUsedVars() {
  return new Promise((resolve, reject) => {
    let variableList;

    gulp.src(`${dirs.components}/*/dist/index-vars.css`)
      .pipe(concat('everything.css'))
      .pipe(through.obj(function getAllVars(file, enc, cb) {
        variableList = getVarsFromCSS(file.contents.toString());

        cb(null, file);
      }))
      .on('finish', () => {
        resolve(variableList);
      })
      .on('error', reject);
  });
}

const varDir = path.join(dirs.components, 'vars', 'dist');
const componentCSSDir = path.join(varDir, 'components', 'index.css');
function buildUnique() {
  return new Promise(async (resolve, reject) => {
    // Read in all variables from components
    let variableList = await getUsedVars();

    // For each stop and scale, filter by used variables only
    gulp.src([
      path.join(varDir, '*.css'),
      '!' + path.join(varDir, 'index.css')
    ])
      .pipe(through.obj(function makeUnique(file, enc, cb) {
        let css = file.contents.toString();
        let root = postcss.parse(css);

        root.walkRules((rule, ruleIndex) => {
          rule.walkDecls((decl) => {
            if (variableList.indexOf(decl.prop) === -1) {
              decl.remove();
            }
          });
        });

        file.contents = Buffer.from(root.toString());

        // For each line variable, delete it if its not included
        cb(null, file);
      }))
      .pipe(rename((file) => {
        file.basename += '-unique';
      }))
      .pipe(gulp.dest('dist/vars/'))
      .on('finish', resolve)
      .on('error', reject);
  });
}

function copyVars() {
  return gulp.src(path.join(varDir, 'spectrum-*.css'))
    .pipe(gulp.dest('dist/vars/'))
}

exports.buildUnique = buildUnique;

exports.copyVars = gulp.parallel(
  buildUnique,
  copyVars
);
