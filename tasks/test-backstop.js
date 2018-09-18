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
        'asyncCaptureLimit': 10,
        'asyncCompareLimit': 10,
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