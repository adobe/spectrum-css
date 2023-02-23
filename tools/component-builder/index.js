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

const del = require("del")

const css = require("./css")
const docs = require("./docs")

async function clean() {
  return del("dist/*")
}

const build = async () => {
  await clean()
  await Promise.all([css.buildVars(), docs.buildDocs()])
}

const buildLite = async () => {
  return new Promise((resolve, reject) => {
    Promise.all([
      clean(),
      css.buildIndexVars() // done till here
    ]).then(() => {
      resolve();
    }).catch(err => {
      reject(err);
    });
  });
}

const buildMedium = async () => {
  return new Promise((resolve, reject) => {
    Promise.all([
      clean(),
      css.buildVars()
    ]).then(() => {
      resolve();
    }).catch(err => {
      reject(err);
    });
  });
}

const buildHeavy = async () => {
  return new Promise((resolve, reject) => {
    Promise.all([
      clean(),
      css.buildCSS()
    ]).then(() => {
      resolve();
    }).catch(err => {
      reject(err);
    });
  });
}

exports.default = build
exports.build = build
exports.buildLite = buildLite
exports.buildMedium = buildMedium
exports.buildHeavy = buildHeavy
exports.clean = clean

exports.buildCSS = css.buildCSS
exports.buildVars = css.buildVars

exports.buildDocs = docs.buildDocs
exports.buildDocs_html = docs.buildDocs_html
