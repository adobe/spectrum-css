const scenarioConfigs = require('./backstop_scenarios');
const scenarios = [];
const excludedScenarios = new Set(['@spectrum-css/circleloader', '@spectrum-css/coachmark', 'index', 'getting-started']);
const themes = new Set().add('light');
const scales = new Set().add('medium');
const packageNameSet = new Set();
const packageDependentMap = new Map(require('./packageDependentMap'));

let isDocker = false;
let env = 'local';
let host = 'host.docker.internal';
let report = 'ci';
let captureLimit = 1;

// Shared scenario configuration
const baseScenarioConfig = {
  referenceUrl: '',
  readyEvent: '',
  readySelector: '',
  delay: 0,
  hideSelectors: [],
  removeSelectors: [],
  hoverSelector: '',
  clickSelector: '',
  postInteractionWait: 0,
  selectors: ['.spectrum-CSSExample-example'],
  selectorExpansion: true,
  expect: 0,
  misMatchThreshold: 0.1,
  requireSameDimensions: true
};

const [...rest] = process.argv.slice(3); // Exclude 'node', 'backstop' and backstop sub command like 'test/approve'

// Process the arguments
rest.forEach(argv => {
  if (argv === '--moby') {
    isDocker = true;
  } else if (argv.startsWith('--env=')) {
    env = argv.slice('--env='.length);
  } else if (argv.startsWith('themes=')) {
    themes.clear();
    argv.slice('themes='.length).split(',').forEach(t => themes.add(t));
  } else if (argv.startsWith('scales=')) {
    scales.clear();
    argv.slice('scales='.length).split(',').forEach(s => scales.add(s));
  } else if (!argv.startsWith('--')) {
    packageNameSet.add(`@spectrum-css/${argv}`);
    packageDependentMap.get(`@spectrum-css/${argv}`).forEach(i => packageNameSet.add(i));
  }
});

// Identify the runtime environment and setup hostname, etc
if (isDocker === true) {
  host = (env === 'local' ? 'host.docker.internal' : '127.0.0.1');
} else {
  host = '127.0.0.1';
}

if (env === 'local') {
  report = 'browser';
  captureLimit = 5;
} else {
  report = 'CI';
}

// Generate vr testing scenarios
let testingScenarios = [];

if (packageNameSet.size > 0) {
  scenarioConfigs.forEach(s => {
    if(packageNameSet.has(s.package)) {
      testingScenarios.push(s);
    }
  });
  testingScenarios = testingScenarios.filter(i => !(excludedScenarios.has(i.package) || excludedScenarios.has(i.label)));
} else {
  testingScenarios = scenarioConfigs.filter(i => !(excludedScenarios.has(i.package) || excludedScenarios.has(i.label)));
}

testingScenarios.map(specificScenarioConfig => {
  themes.forEach(t => {
    scales.forEach(s => {
      const config = {...specificScenarioConfig};
      config.label = `${config.label}-${t}-${s}`;
      config.url = `http://${host}:3000/docs/${config.url}`;
      config.scale = s;
      config.theme = t;
      scenarios.push(Object.assign({...baseScenarioConfig}, config));
    });
  });
});

module.exports = {
  id: 'Spectrum CSS',
  viewports: [
    {
      label: 'test',
      width: 2048,
      height: 40960
    }
  ],
  onBeforeScript: 'puppet/onBefore.js',
  onReadyScript: 'puppet/onReady.js',
  scenarios,
  paths: {
    bitmaps_reference: 'node_modules/@spectrum-css/spectrum-css-vr-test-asset/bitmaps_reference',
    bitmaps_test: 'backstop_data/bitmaps_test',
    engine_scripts: 'backstop_data/engine_scripts',
    html_report: 'backstop_data/html_report',
    ci_report: 'backstop_data/ci_report'
  },
  report: [`${report}`],
  engine: 'puppeteer',
  engineOptions: {
    args: ['--no-sandbox']
  },
  asyncCaptureLimit: captureLimit,
  asyncCompareLimit: 50,
  debug: false,
  debugWindow: false,
  dockerCommandTemplate: 'docker run --rm -it --mount type=bind,source="{cwd}",target=/src --network host --shm-size 2048m backstopjs/backstopjs:{version} {backstopCommand} {args}'
};
