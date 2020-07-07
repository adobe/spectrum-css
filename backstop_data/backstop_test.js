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

const scenarioConfigs = require('./backstop_scenarios');
const scenarios = [];
const excludedScenarios = new Set(['@spectrum-css/circleloader', '@spectrum-css/coachmark', 'index', 'getting-started']);
const themes = new Set().add('light');
const scales = new Set().add('medium');
const packageNameSet = new Set();
const packageDependentMap = new Map(require('./packageDependentMap'));

const LOCALHOST_MAC = 'host.docker.internal';
const LOCALHOST_LINUX = '127.0.0.1';

let isDocker = false;
let env = 'local';
let host = LOCALHOST_MAC;
let report = 'CI';
let captureLimit = 1;
let bitmapsRef = 'node_modules/@spectrum-css/spectrum-css-vr-test-asset/bitmaps_reference';

// Shared scenario configuration
const baseScenarioConfig = {
  referenceUrl: '',
  readyEvent: '',
  readySelector: 'html.wf-active',
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
  requireSameDimensions: true,
  retries: 3
};

const [...rest] = process.argv.slice(3); // Exclude 'node', 'backstop' and backstop sub command like 'test/approve'

// Process the arguments
rest.forEach(argv => {
  if (argv === '--moby') {
    isDocker = true;
  }
  else if (argv.startsWith('--env=')) {
    env = argv.slice('--env='.length);
  }
  else if (argv.startsWith('themes=')) {
    themes.clear();
    argv.slice('themes='.length).split(',').forEach(t => themes.add(t));
  }
  else if (argv.startsWith('scales=')) {
    scales.clear();
    argv.slice('scales='.length).split(',').forEach(s => scales.add(s));
  }
  else if (argv.startsWith('reference=')) {
    bitmapsRef = argv.slice('reference='.length);
  }
  else if (!argv.startsWith('--')) {
    packageNameSet.add(`@spectrum-css/${argv}`);
    packageDependentMap.get(`@spectrum-css/${argv}`).forEach(i => packageNameSet.add(i));
  }
});

// Identify the runtime environment and setup hostname, etc
if (isDocker === true) {
  host = (env === 'local' ? LOCALHOST_MAC : LOCALHOST_LINUX);
}
else {
  host = LOCALHOST_LINUX;
}

if (env === 'local') {
  report = 'browser';
}
else {
  report = 'CI';
}

// Generate vr testing scenarios
let testingScenarios = [];

if (packageNameSet.size > 0) {
  scenarioConfigs.forEach(s => {
    if (packageNameSet.has(s.package)) {
      testingScenarios.push(s);
    }
  });
  testingScenarios = testingScenarios.filter(i => !(excludedScenarios.has(i.package) || excludedScenarios.has(i.label)));
}
else {
  testingScenarios = scenarioConfigs.filter(i => !(excludedScenarios.has(i.package) || excludedScenarios.has(i.label)));
}

testingScenarios.map(specificScenarioConfig => {
  themes.forEach(t => {
    scales.forEach(s => {
      const config = {...specificScenarioConfig};
      config.label = `${config.label}-${t}-${s}`;
      config.url = `http://${host}:3000/docs/${config.url}`;
      config.readySelector = 'html.wf-active';
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
  onReadyScript: 'puppet/onReady.js',
  scenarios,
  paths: {
    bitmaps_reference: bitmapsRef,
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
  dockerCommandTemplate: 'docker run --rm -i -t=false --mount type=bind,source="{cwd}",target=/src --network host --shm-size 2048m jianliao/backstopjs:{version} {backstopCommand} {args}'
};
