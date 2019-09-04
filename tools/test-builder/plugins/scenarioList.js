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
      if(!acc.find(i => current.label === i.label)) {
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
