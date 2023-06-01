const gulp = require("gulp");

Object.assign(exports, require("./tools/bundle-builder"));
Object.assign(exports, require("./site/gulpfile.js"));

exports.dev = gulp.series(exports.dev, exports.copySiteResources);
exports.buildDocs = gulp.parallel(exports.copySiteResources, exports.buildDocs);
