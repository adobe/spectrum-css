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

const gulp = require('gulp');
const through = require('through2');
const postcss = require('postcss');
const logger = require('gulplog');
const fsp = require('fs').promises;
const path = require('path');

// Todo: get these values from a common place?
let colorStops = [
  'darkest',
  'dark',
  'light',
  'lightest'
];

let scales = [
  'medium',
  'large'
];

function getVars(css) {
  let variableList = [];
  let root = postcss.parse(css);

  root.walkRules((rule, ruleIndex) => {
    rule.walkDecls((decl) => {
      let matches = decl.value.match(/var\(.*?\)/g);
      if (matches) {
        matches.forEach(function(match) {
          let varName = match.replace(/var\((--[\w\-]+),?\s*(.*)\)/, '$1').trim();
          if (variableList.indexOf(varName) === -1) {
            variableList.push(varName);
          }
        });
      }
    });
  });
  return variableList;
}

function getVarValues(css) {
  let root = postcss.parse(css);
  let variables = {};

  root.walkRules((rule, ruleIndex) => {
    rule.walkDecls((decl) => {
      variables[decl.prop] = decl.value;
    });
  });

  return variables;
}

function getClassNames(contents, pkgName) {
  let root = postcss.parse(contents);
  let classNames = [];

  function addClassname(className) {
    if (classNames.indexOf(className) === -1) {
      classNames.push(className);
    }
  }

  let result = root.walkRules((rule, ruleIndex) => {
    let selector = rule.selectors[0];

    if (pkgName === 'page') {
      className = '';
      return 'false';
    }

    rule.selectors.forEach((fullSelector) => {
      // Skip compound selectors, they may not start with the component itself
      if (fullSelector.match(/~|\+/)) {
        return true;
      }

      let selector = fullSelector.split(' ').shift();

      if (rule.type === 'rule') {
        let matches = selector.match(/^\.spectrum-[\w]+/);
        if (matches) {
          let modSelector = matches[0]
          addClassname(modSelector);
        }
      }
    });
  });

  if (classNames.length === 0) {
    logger.error(`Could not find classNames for ${pkgName}, assuming no classNames`);
    classNames.push('');
  }

  logger.debug(`Found classNames ${classNames.join(', ')} for ${pkgName}`);

  return classNames;
}

async function getVariables(colorStop) {
  const varDir = path.join(process.cwd(), 'node_modules', '@spectrum-css', 'vars');
  let css = await fsp.readFile(path.join(varDir, 'css', `spectrum-${colorStop}.css`));
  let vars = getVarValues(css);
  return { colorStop: colorStop, vars: vars };
}

function getVariableDeclarations(classNames, modifier, vars) {
  let varNames = Object.keys(vars);
  if (varNames.length) {
    return `
${classNames.map((className) => `.spectrum--${modifier} ${className}`).join(',\n')} {
${varNames.map((varName) => `  ${varName}: ${vars[varName]};`).join('\n')}
}
`;
  }

  return '';
}

function bakeVars() {
  return gulp.src([
    'dist/index-vars.css'
  ])
  .pipe(through.obj(async function doBake(file, enc, cb) {
    let pkg = JSON.parse(await fsp.readFile(path.join('package.json')));
    let pkgName = pkg.name.split('/').pop();
    let classNames = getClassNames(file.contents, pkgName);

    // Find all custom properties used in the component
    let variableList = getVars(file.contents);

    // For each color stop and scale, filter the variables for those matching the component
    let vars = await Promise.all(colorStops.concat(scales).map(getVariables));
    vars.forEach((varSet) => {
      let {colorStop, vars} = varSet;

      let usedVars = {};
      for (let varName in vars) {
        if (variableList.indexOf(varName) !== -1) {
          if (varName.indexOf('spectrum-global') !== -1) {
            logger.warn(`${pkg.name} directly uses global variable ${varName}`);
          }
          usedVars[varName] = vars[varName];
        }
      }

      let contents = getVariableDeclarations(classNames, colorStop, usedVars);
      let newFile = file.clone({contents: false});
      newFile.path = path.join(file.base, `spectrum-${colorStop}.css`);
      newFile.contents = Buffer.from(contents);
      this.push(newFile);
    });

    cb(null);
  }))
  .pipe(gulp.dest('dist/vars/'));
}

exports.bakeVars = bakeVars;
