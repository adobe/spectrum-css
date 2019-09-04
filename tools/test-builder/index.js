const {src, dest, task, series} = require('gulp');
const scenarioList = require('./plugins/scenarioList');
const fs = require('fs');
const {getPackages} = require('@lerna/project');
const PackageGraph = require('@lerna/package-graph');
const File = require('vinyl');

const buildBaseScenarioList = () =>
  src('dist/docs/*.html')
    .pipe(scenarioList())
    .pipe(dest('.'));

const addLocalDependents = async () => {
  const packages = await getPackages('.');
  const packageGraph = new PackageGraph(packages);
  const packageLocalDependentsSet
    = JSON.parse(fs.readFileSync('backstop_scenarios.json', 'utf8')).reduce((acc, current) => {
    if (!acc.has(current.package) && packageGraph.get(current.package)) {
      acc.set(current.package, Array.from(packageGraph.get(current.package).localDependents.keys()));
    }
    return acc;
  }, new Map());
  return fs.writeFile('packageDependentMap.json',
    JSON.stringify(Array.from(packageLocalDependentsSet.entries()), null, 2),
    (err) => {
      if (err) throw err;
    });
};

exports.buildBaseScenarioList = buildBaseScenarioList;
exports.addLocalDependents = addLocalDependents;

task('test:init', series(buildBaseScenarioList, addLocalDependents));
