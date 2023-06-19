/*!
Copyright 2023 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

const gulp = require("gulp");

Object.assign(exports, require("./css"));

exports.default =
	exports.build =
	exports.buildLite =
	exports.buildMedium =
	exports.buildHeavy =
	exports.buildCSS =
		gulp.series(exports.buildCSS, function copyIndex() {
			// Just copy index.vars as index.css to maintain backwards compat
			return gulp
				.src("dist/index.css")
				.pipe(
					require("gulp-rename")((file) => {
						file.basename = "index-vars";
					})
				)
				.pipe(gulp.dest("dist/"));
		});
