const scenarioConfigs = require('./backstop_scenarios');
const scenarios = [];
const excludedScenarios = ['circleloader', 'coachmark'];

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

const [a, b, c, d, ...rest] = process.argv; // Only the argument after 4th matter

if (rest.length > 0) {
  scenarioConfigs.filter(i => rest.includes(i.label)).map(specificScenarioConfig => {
    specificScenarioConfig.url = `http://localhost:3000/docs/${specificScenarioConfig.url}`;
    scenarios.push(Object.assign({...baseScenarioConfig}, specificScenarioConfig));
  });
}
else {
  scenarioConfigs.map(specificScenarioConfig => {
    specificScenarioConfig.url = `http://localhost:3000/docs/${specificScenarioConfig.url}`;
    if (!excludedScenarios.includes(specificScenarioConfig.label)) {
      scenarios.push(Object.assign({...baseScenarioConfig}, specificScenarioConfig));
    }
  });
}

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
    bitmaps_reference: 'backstop_data/bitmaps_reference',
    bitmaps_test: 'backstop_data/bitmaps_test',
    engine_scripts: 'backstop_data/engine_scripts',
    html_report: 'backstop_data/html_report',
    ci_report: 'backstop_data/ci_report'
  },
  report: ['json'],
  engine: 'puppeteer',
  engineOptions: {
    args: ['--no-sandbox']
  },
  asyncCaptureLimit: 5,
  asyncCompareLimit: 50,
  debug: false,
  debugWindow: false
};
