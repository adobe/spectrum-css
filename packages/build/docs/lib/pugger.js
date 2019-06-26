'use strict';

const through = require('through2');
const defaultPug = require('pug');
const ext = require('replace-ext');
const PluginError = require('plugin-error');
const log = require('fancy-log');

module.exports = function gulpPug(options) {
  const opts = Object.assign({}, options);
  const pug = opts.pug || opts.jade || defaultPug;

  opts.data = Object.assign(opts.data || {}, opts.locals || {});

  return through.obj(function compilePug(file, enc, cb) {
    const data = Object.assign({}, opts.data, file.data || {});

    opts.filename = file.path;
    file.path = ext(file.path, '.html');

    if (file.isStream()) {
      return cb(new PluginError('gulp-pugger', 'Streaming not supported'));
    }

    if (file.isBuffer()) {
      try {
        const templatePath = opts.template;
        if (opts.verbose === true) {
          log('compiling file', templatePath);
        }
        let compiled = pug.renderFile(templatePath, opts)(data);
        file.contents = new Buffer(compiled);
      } catch (e) {
        return cb(new PluginError('gulp-pugger', e));
      }
    }
    cb(null, file);
  });
};
