const gulp = require("gulp");
const builder = require("./tools/bundle-builder");
const site = require("./site/gulpfile.js");

Object.assign(exports, builder);
Object.assign(exports, site);

exports.dev = gulp.series(exports.copySiteResources, exports.dev);
exports.buildDocs = gulp.series(builder.buildDocs, site.copySiteResources);
