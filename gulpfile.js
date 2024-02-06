const gulp = require("gulp");
const builder = require("./tools/bundle-builder");
const site = require("./site/gulpfile.js");

Object.assign(exports, builder);
Object.assign(exports, site);

exports.dev = gulp.series(exports.copySiteResources, exports.dev);

exports.devHeavy = gulp.series(exports.copySiteResources, exports.devHeavy);

exports["watch-relaunch"] = function () {
	process.env["BROWSERSYNC_OPEN"] = true;
	exports.watch();
};

exports.buildDocs = gulp.series(builder.buildDocs, site.copySiteResources);
