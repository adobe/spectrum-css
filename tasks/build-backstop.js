var gulp = require('gulp');
var merge = require('gulp-merge-json');
var yaml = require('gulp-yaml');
var argv = require('yargs').argv;

// slugify helper function based on: https://andrew.stwrt.ca/posts/js-slugify/
function slugify(title) {
  var slug = title.toLowerCase();
  var spaceRegex = /\s/g;
  slug = slug.replace(spaceRegex, '-');
  var nonWordRegex = /([^\w-]+)/;
  slug = slug.replace(nonWordRegex, '');
  return slug;
}

gulp.task('build-backstop:generate-scenarios', function() {
  if(argv.component) {
    // build up list of components to read in
    var componentList = [];

    // apparently yargs only puts things in arrays when there's more than one
    if(Array.isArray(argv.component)) {
      for(var i=0;i<argv.component.length;i++) {
        componentList.push('docs/' + argv.component[i] + '/*.yml');
      }
    } 
    else {
      componentList.push('docs/' + argv.component + '/*.yml');
    }

    return gulp.src(componentList)
      .pipe(yaml())
      .pipe(merge({
        fileName: 'backstopScenarios.json',
        startObj: [],
        concatArrays: true,
        mergeArrays: true,
        asyncCaptureLimit: 1,
        edit: function(parsedJSON) {
          return {
            'label' : parsedJSON.name,
            'url': './dist/docs/index.html',
            'delay': 500,
            'hideSelectors':[],
            'readySelector' : '',
            'removeSelectors':['.sdldocs-nav','.sdldocs-header'],
            'selectors':['a[href="#' + slugify(parsedJSON.name) + '"] ~ section.sdldocs-component-markup'],
            'selectorExpansion':true,
            'misMatchThreshold':0.1,
            'requireSameDimensions':true
          };
        }
      }))
      .pipe(gulp.dest('./backstop_data/build_data'));
  }
  else {
    // this reads in the .yml files in the docs section and grabs all the components names
    // slugifies them and constructs the backstopJS json scenario object 
    return gulp.src('docs/**/*.yml')
      .pipe(yaml())
      .pipe(merge({
        fileName: 'backstopScenarios.json',
        startObj: [],
        concatArrays: true,
        mergeArrays: true,
        asyncCaptureLimit: 1,
        edit: function(parsedJSON) {
          return {
            'label' : parsedJSON.name,
            'url': './dist/docs/index.html',
            'delay': 500,
            'hideSelectors':[],
            'readySelector' : '',
            'removeSelectors':['.sdldocs-nav','.sdldocs-header'],
            'selectors':['a[href="#' + slugify(parsedJSON.name) + '"] ~ section.sdldocs-component-markup'],
            'selectorExpansion':true,
            'misMatchThreshold':0.1,
            'requireSameDimensions':true
          };
        }
      }))
      .pipe(gulp.dest('./backstop_data/build_data'));    
  }
});

gulp.task('build-backstop',
  gulp.series(
    'build-backstop:generate-scenarios'
  )
);