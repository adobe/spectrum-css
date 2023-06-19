const gulp = require("gulp");

Object.assign(exports, require("./tools/bundle-builder"));
Object.assign(exports, require("./site/gulpfile.js"));

exports.dev = gulp.series(exports.copySiteResources, exports.dev);
exports.devHeavy = gulp.series(exports.copySiteResources, exports.devHeavy);
exports.buildDocs = gulp.series(exports.buildDocs, exports.copySiteResources);
