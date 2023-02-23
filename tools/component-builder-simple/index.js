/*
Copyright 2022 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
const fs = require('fs')
const del = require('del');
const css = require('./css');
const path = require("path");

function clean() {
  return del('dist/*');
}

async function copyIndex() {
  const indexCSS = fs.readFileSync(path.join('dist', 'index.css'), 'utf8');
  fs.writeFileSync(path.join('dist', 'index-vars.css'), indexCSS);
}


const build = async () => {
  try {
      await clean();
      await css.buildCSS();
      await copyIndex()
  } catch (err) {
      console.error("Error in component buildersimple " + err);
  }
}

exports.default = build;
exports.build = build;
exports.buildLite = build;
exports.buildMedium = build;
exports.buildHeavy = build;
exports.clean = clean;
exports.buildCSS = build;
