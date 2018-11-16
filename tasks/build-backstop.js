var gulp = require('gulp');
var merge = require('gulp-merge-json');
var argv = require('yargs').argv;
var rename = require('gulp-rename');
var insert = require('gulp-insert');
var fs = require('fs');
var path = require('path');
var yaml = require('gulp-yaml');
var replace = require('gulp-replace');

// json helper function to get nested values based on key
// from: http://techslides.com/how-to-parse-and-search-json-in-javascript
function getValues(obj, key) {
  var objects = [];
  for (var i in obj) {
    if (!obj.hasOwnProperty(i)) continue;
    if (typeof obj[i] == 'object') {
      objects = objects.concat(getValues(obj[i], key));
    } 
    else if (i == key) {
      objects.push(obj[i]);
    }
  }
  return objects;
}

// return the html svg symbol given an id
function getSVGSymbol(file, id) {
  var pattern = '<symbol id="' + id + '"(.*?)>(.*?)</symbol>';
  var regex = new RegExp(pattern, 'g');
  return file.match(regex);
}

gulp.task('build-backstop:generate-backstop-docs', function() {
  var componentList = [];

  if(argv.component) {
    // apparently yargs only puts things in arrays when there's more than one
    if(Array.isArray(argv.component)) {
      for(var i=0;i<argv.component.length;i++) {
        componentList.push('docs/**/' + argv.component[i] + '/*.yml');
      }
    } 
    else {
      componentList.push('docs/**/' + argv.component + '/*.yml');
    }
  } 
  else {
    componentList = ['docs/**/*.yml'];
  }

  return gulp.src(componentList)
    // use the yaml files to grab their markup data and then write them to a special ./dist/backstop_docs_test/
    .pipe(yaml())
    .pipe(gulp.dest('./backstop_data/build_data/current_components'))
    .pipe(insert.transform(function(contents) {
      var markupOut = '';
      var markupValues = getValues(JSON.parse(contents), 'markup');

      for(var i=0; i<markupValues.length; i++) {
        markupOut += markupValues[i] + '\n';
      }
      return markupOut;
    }))
    .pipe(rename(function(path) {
      path.extname = '.html';
    }))
    .pipe(gulp.dest('./backstop_data/build_data/current_components'));
});


gulp.task('build-backstop:inject-backstop-docs', function() {
  var prependDocHtml = fs.readFileSync(path.resolve(__dirname, '../backstop_data/backstop_template/index.html'), 'utf8');

  // backstopjs runs the docs website off of file uri so the requests to the 
  // svg files will create errors which will then keep chrome processes running
  // to get around this and allow the svg icons to work, just conditionally inject 
  // the correct svg and embed it in the head of the index.html
  var spectrumCssIconsStore = fs.readFileSync(path.resolve(__dirname, '../dist/icons/spectrum-css-icons.svg'), 'utf8');

  return gulp.src('./backstop_data/build_data/current_components/**/*.html')
    .pipe(insert.prepend(prependDocHtml))
    .pipe(replace(/img\/example-ava.jpg/g, '../../docs/img/example-ava.jpg'))
    .pipe(insert.transform(function(contents) {
      // find the svg icons being used and make sure no duplicates are reported
      var spectrumCssIconsMatch = [...new Set(contents.match(/spectrum-css-icon-(\w)*/g))];
      var svgInject = '<svg xmlns="http://www.w3.org/2000/svg" style="display:none;">';

      if(spectrumCssIconsMatch !== null) {
        for(var j=0;j<spectrumCssIconsMatch.length;j++) {
          svgInject += getSVGSymbol(spectrumCssIconsStore, spectrumCssIconsMatch[j])[0] + '\n';
        }
      }

      svgInject += '</svg>\n';

      contents = svgInject + contents;

      return contents;
    }))

    .pipe(insert.append('</div></section></body></html>'))
    .pipe(gulp.dest('./dist/backstop_docs_test'));
});

gulp.task('build-backstop:generate-scenarios', function() {
  return gulp.src('./backstop_data/build_data/current_components/**/*.json')
    .pipe(insert.transform(function(data, file) {
      // send down file path so we can use it to tell the backstop scenario where the individual doc file is
      var theData = JSON.parse(data);
      theData.relative = file.relative.split('.json')[0] + '.html';
      return JSON.stringify(theData);
    }))
    .pipe(merge({
      fileName: 'backstopScenarios.json',
      startObj: [],
      concatArrays: true,
      mergeArrays: true,
      asyncCaptureLimit: 1,
      edit: function(parsedJSON) {
        return {
          'label' : parsedJSON.name,
          'url': './dist/backstop_docs_test/' + parsedJSON.relative,
          'readySelector' : '.wf-active',
          'selectors':['#backstopSelector'],
          'selectorExpansion':false,
          'misMatchThreshold':0.1,
          'requireSameDimensions':true
        };
      }
    }))
    .pipe(gulp.dest('./backstop_data/build_data')); 
});

gulp.task('build-backstop',
  gulp.series(
    'build-backstop:generate-backstop-docs',
    'build-backstop:inject-backstop-docs',
    'build-backstop:generate-scenarios'
  )
);