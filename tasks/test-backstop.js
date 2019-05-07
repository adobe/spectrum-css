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
var gulp = require('gulp');
var backstop = require('backstopjs');

gulp.task('test-backstop', function() {
  var theScenarios = require('../backstop_data/build_data/backstopScenarios');

  return backstop('test',
    {
      config:
      {
        'id': 'spectrum_css',
        'viewports': [
          {
            'label': 'tablet',
            'width': 1024,
            'height': 768
          }
        ],
        'onBeforeScript': 'chromy/onBefore.js',
        'onReadyScript': 'chromy/onReady.js',
        'scenarios': theScenarios,
        'paths': {
          'bitmaps_reference': 'backstop_data/bitmaps_reference',
          'bitmaps_test': 'backstop_data/bitmaps_test',
          'engine_scripts': 'backstop_data/engine_scripts',
          'html_report': 'backstop_data/html_report',
          'ci_report': 'backstop_data/ci_report'
        },
        'report': ['browser'],
        'engine': 'chrome',
        'engineFlags': [],
        'asyncCaptureLimit': 5,
        'asyncCompareLimit': 5,
        'debug': false,
        'debugWindow': false
      }
    }).
    then(function() {
      console.log('Jobs done');
    }).catch(function (err) {
      console.log('i am err ' + err);
    });

});
