const gulp = require("gulp");

const builder = require("./tools/bundle-builder");
const site = require("./site/gulpfile.js");

Object.assign(exports, builder);

exports.dev = gulp.series(builder.dev, site);
exports.buildDocs = gulp.series(builder.buildDocs, site);
