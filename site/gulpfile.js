/*
Copyright 2023 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

const fs = require('fs');
const path = require('path');

const gulp = require('gulp');
const yaml = require('js-yaml');
const through = require('through2');
const ext = require('replace-ext');

exports.copyUtilities = function() {
  return Promise.all([{
    "name": "loadicons",
    "path": "js/loadicons/"
  }, {
    "name": "@adobe/focus-ring-polyfill",
    "path": "js/focus-ring-polyfill/"
  }, {
    "name": "lunr",
    "path": "js/lunr/"
  }, {
    "name": "prismjs",
    "assets": [
      "themes/prism.css",
      "themes/prism-dark.css"
    ],
    "path": "css/prism/"
  }, {
    "name": "@adobe/spectrum-css-workflow-icons",
    "assets": [
      "spectrum-icons.svg"
    ],
    "path": "img/"
  }].map((pkg) => {
    let srcPath = require.resolve(pkg.name);
    if (pkg.assets) {
      srcPath = path.dirname(srcPath);
      srcPath = pkg.assets.map(asset => path.join(srcPath, asset));
    }
    return gulp.src(srcPath)
      .pipe(gulp.dest(path.join(__dirname, 'dist/', pkg.path)));
  }));
}

function buildIndex() {
  return gulp.src([
    `../components/*/metadata.yml`,
    `../components/*/metadata/*.yml`
  ])
  .pipe(function() {
    let docs = [];
    let store = {};
    let latestFile = null;
    function readYML(file, enc, cb) {
      let componentData;
      try {
        componentData = yaml.load(String(file.contents));
      } catch (err) {
        return cb(err);
      }

      const componentName = file.dirname.replace('/metadata', '').split('/').pop();

      if (path.basename(file.basename) === 'metadata.yml') {
        file.basename = componentName;
      }

      const fileName = ext(file.basename, '.html');

      docs.push({
        href: fileName,
        name: componentData.name,
        description: componentData.description
      });

      store[fileName] = {
        href: fileName,
        name: componentData.name,
        component: componentName,
        description: componentData.description
      };

      latestFile = file;

      cb();
    }

    function endStream(cb) {
      let indexFile = latestFile.clone({contents: false});
      indexFile.path = path.join(latestFile.base, 'index.json');

      let index = require('lunr')(function() {
        this.ref('href');
        this.field('name', { boost: 10 });
        this.field('description');

        docs.forEach(function(doc) {
          this.add(doc);
        }, this);
      });

      // Note: could merge main index here using technique from https://www.garysieling.com/blog/building-a-full-text-index-in-javascript

      indexFile.contents = Buffer.from(JSON.stringify(index));
      this.push(indexFile);

      let storeFile = latestFile.clone({contents: false});
      storeFile.path = path.join(latestFile.base, 'store.json');
      storeFile.contents = Buffer.from(JSON.stringify(store));
      this.push(storeFile);

      cb();
    }

    return through.obj(readYML, endStream);
  }())
  .pipe(gulp.dest('dist/'));
};


let templateData = {
  nav: [],
  pkg: JSON.parse(fs.readFileSync('package.json', 'utf8'))
};

function fetchData() {
  let nav = [];
  return gulp.src([
    `../components/*/metadata.yml`,
    `../components/*/metadata/*.yml`
  ])
  .pipe(through.obj(function readYML(file, enc, cb) {
    let componentData;
    const componentName = file.dirname.replace('/metadata', '').split('/').pop();
    try {
      componentData = yaml.load(String(file.contents));
    } catch (loadError) {
      throw loadError;
    }

    if (path.basename(file.basename) === 'metadata.yml') {
      file.basename = componentName;
    }

    var fileName = ext(file.basename, '.html');
    nav.push({
      name: componentData.name,
      component: componentName,
      hide: componentData.hide,
      fastLoad: componentData.fastLoad,
      href: fileName,
      description: componentData.description
    });

    cb(null, file);
  }))
  .on('end', function() {
    templateData.nav = nav.sort(function(a, b) {
      return a.name <= b.name ? -1 : 1;
    });
  })
};

function buildHtml() {
  return gulp.src(`*.pug`)
    .pipe(require('gulp-data')(function(file) {
      return {
        util: require(`./util.js`),
        pageURL: path.basename(file.basename, '.pug') + '.html',
        dependencyOrder: [
          'icon',
          'statuslight',
          'link',
          'page',
          'site',
          'typography',
          'tooltip',
          'sidenav',
          'actionbutton',
          'button',
          'textfield',
          'clearbutton',
          'search',
          'menu',
          'fieldlabel',
          'picker',
          'popover',
          'underlay',
          'card',
          'divider',
          'illustratedmessage',
          'accordion',
          'table'
        ]
      };
    }))
    .pipe(require('gulp-pug')({ locals: templateData }))
    .pipe(gulp.dest(path.join(__dirname, 'dist/')));
}

exports.default = gulp.series(
  fetchData,
  gulp.parallel(
    buildIndex,
    buildHtml,
  ),
);
