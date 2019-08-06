const scenarioConfigs = require('./backstop_scenarios');
const scenarios = [];
const excludedScenarios = new Set(['circleloader', 'coachmark']);
const themes = new Set();
const scales = new Set();

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

const [_, __, ___, ____, ...rest] = process.argv;

const components = new Set(rest);

(process.env.THEMES || 'light').split(',').forEach(t => themes.add(t));
(process.env.SCALES || 'medium').split(',').forEach(s => scales.add(s));

if (components.size > 0) {
  scenarioConfigs.filter(i => components.has(i.label)).map(specificScenarioConfig => {
    themes.forEach(t => {
      scales.forEach(s => scenarios.push(Object.assign({...baseScenarioConfig}, {
        label: `${specificScenarioConfig.label}-${t}-${s}`,
        url: `http://localhost:3000/docs/${specificScenarioConfig.url}`,
        scale: s,
        theme: t
      })));
    });
  });
} else {
  scenarioConfigs.filter(i => !excludedScenarios.has(i.label)).map(specificScenarioConfig => {
    themes.forEach(t => {
      scales.forEach(s => scenarios.push(Object.assign({...baseScenarioConfig}, {
        label: `${specificScenarioConfig.label}-${t}-${s}`,
        url: `http://localhost:3000/docs/${specificScenarioConfig.url}`,
        scale: s,
        theme: t
      })));
    });
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
    bitmaps_reference: `backstop_data/bitmaps_reference`,
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
