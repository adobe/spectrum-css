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

const through = require('through2');
const File = require('vinyl');
const path = require('path');
const fs = require('fs');

const sortByLabel = (a, b) => {
  if (a.label > b.label)
    return 1;
  else if (a.label < b.label)
    return -1;
  else
    return 0;
};

module.exports = () => {
  let scenarios = [];

  function createScenario(file, encoding, cb) {
    const fileName = path.basename(file.basename, path.extname(file.basename));
    const componentName = fileName.split('-')[0];
    const packageName = `@spectrum-css/${componentName}`;
    scenarios.push({
      label: fileName,
      url: file.basename,
      package: packageName
    });

    cb();
  }

  function createScenarioList(cb) {
    scenarios = scenarios.sort(sortByLabel);

    const existingScenarioList = JSON
      .parse(fs.readFileSync('backstop_scenarios.json', 'utf8'))
      .sort(sortByLabel);

    const combinedScenarioList = scenarios.reduce((acc, current) => {
      if (!acc.find(i => current.label === i.label)) {
        acc.push(current);
      }
      return acc;
    }, existingScenarioList).sort(sortByLabel);

    const file = new File('utf8');
    file.contents = Buffer.from(JSON.stringify(combinedScenarioList, null, 2));
    file.path = 'backstop_scenarios.json';
    this.push(file);

    cb();
  }

  return through.obj(createScenario, createScenarioList);
};
