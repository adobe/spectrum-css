const scenarioConfigs = require('./backstop_scenarios');
const scenarios = [];

// Shared scenario configuration
const baseScenarioConfig = {
  cookiePath: 'backstop_data/engine_scripts/cookies.json',
  referenceUrl: '',
  readyEvent: '',
  readySelector: '',
  delay: 0,
  hideSelectors: [],
  removeSelectors: ['.spectrum-Site-sideBar', '.spectrum-CSSComponent-description'],
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
} else {
  scenarioConfigs.map(specificScenarioConfig => {
    specificScenarioConfig.url = `http://localhost:3000/docs/${specificScenarioConfig.url}`;
    scenarios.push(Object.assign({...baseScenarioConfig}, specificScenarioConfig));
  });
}

module.exports = {
  id: 'Spectrum CSS',
  viewports: [
    {
      label: 'desktop',
      width: 1440,
      height: 1080
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
  report: ['browser'],
  engine: 'puppeteer',
  engineOptions: {
    args: ['--no-sandbox']
  },
  asyncCaptureLimit: 5,
  asyncCompareLimit: 50,
  debug: false,
  debugWindow: false
};
