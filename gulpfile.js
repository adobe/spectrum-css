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

// Include all tasks
require('./tasks/lint');
require('./tasks/copy-vars');
require('./tasks/copy-loadIcons');
require('./tasks/icons');
require('./tasks/build-css');
require('./tasks/build-docs');
require('./tasks/clean');
require('./tasks/gh-pages');
require('./tasks/sass-compile');
require('./tasks/build');
require('./tasks/dev');
require('./tasks/build-backstop');
require('./tasks/test-backstop');
require('./tasks/test');

gulp.task('default', gulp.series('build'));
