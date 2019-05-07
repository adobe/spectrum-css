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
var rename = require('gulp-rename');

gulp.task('copy-loadIcons', function() {
  // copy loadIcons.js to dist/icons
  return gulp.src(['node_modules/loadicons/index.js'])
    .pipe(rename('loadIcons.js'))
    .pipe(gulp.dest('dist/icons/'));
});
