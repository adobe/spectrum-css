Object.assign(exports, require("./tools/bundle-builder"));
Object.assign(exports, require("./site/gulpfile.js"));

exports.dev = require("gulp").series(exports.dev, exports.copySiteResources);
exports.buildDocs = require("gulp").parallel(
	exports.buildDocs,
	exports.copySiteResources
);
