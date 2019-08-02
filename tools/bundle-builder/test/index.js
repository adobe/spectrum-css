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

const browserSync = require('browser-sync');
const {cwd} = require('../lib/dirs');
const {build} = require('../docs');
const {series} = require('gulp');
const {readdir, writeFileSync} = require('fs');
const {extname} = require('path');

const generateBackstopScenarios = (cb) => {
  const result = [];
  readdir('./dist/docs', (err, items) => {
    items.filter(fileName => extname(fileName) === '.html').map(fileName => {
      result.push({
        label: fileName.split('.')[0],
        url: fileName
      });
    });
    writeFileSync('./backstop_scenarios.json', JSON.stringify(result, null, 2), 'utf8');
  });
  cb();
};

const serveWithoutNotify = () => {
  browserSync({
    startPath: 'docs/index.html',
    server: `${cwd}/dist/`,
    notify: false
  });
};

const serveTest = series(
  build,
  serveWithoutNotify
);

exports.serveWithoutNotify = serveWithoutNotify;
exports.serveTest = serveTest;
exports.generateBackstopScenarios = generateBackstopScenarios;
