var path = require('path');
var resolve = require('resolve');

function npmResolverPlugin() {
  return {
    resolve: function resolve(filename, source, options) {
      return _resolve.sync(filename, { basedir: path.dirname(source) });
    }
  };
}

module.exports = npmResolverPlugin();
