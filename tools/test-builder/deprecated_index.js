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

const {src, dest, task, series} = require('gulp');
const scenarioList = require('./plugins/scenarioList');
const fs = require('fs');
const {getPackages} = require('@lerna/project');
const { PackageGraph } = require('@lerna/package-graph');

const buildBaseScenarioList = () =>
  src('dist/docs/*.html')
    .pipe(scenarioList())
    .pipe(dest('.'));

const addLocalDependents = async () => {
  const packages = await getPackages('.');
  const packageGraph = new PackageGraph(packages);
  const packageLocalDependentsSet
    = JSON.parse(fs.readFileSync('backstop_data/backstop_scenarios.json', 'utf8')).reduce((acc, current) => {
    if (!acc.has(current.package) && packageGraph.get(current.package)) {
      acc.set(current.package, Array.from(packageGraph.get(current.package).localDependents.keys()));
    }
    return acc;
  }, new Map());
  return fs.writeFile('backstop_data/packageDependentMap.json',
    JSON.stringify(Array.from(packageLocalDependentsSet.entries()), null, 2),
    (err) => {
      if (err) throw err;
    });
};

exports.buildBaseScenarioList = buildBaseScenarioList;
exports.addLocalDependents = addLocalDependents;

task('test:init', series(buildBaseScenarioList, addLocalDependents));
