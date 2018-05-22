'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = defaultTemplate;

var _pug = require('pug');

var _pug2 = _interopRequireDefault(_pug);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _fsExtra = require('fs-extra');

var _fsExtra2 = _interopRequireDefault(_fsExtra);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *  Private: replaces the extension of a file path string with a new one.
 *
 *  * `npath` {String} path to file.
 *  * `ext` {String} new extension to replace the old one.
 *
 *  Returns {String} with replaced extension
 */
function _replaceExt(npath, ext) {
  if (typeof npath !== 'string') {
    return npath;
  }
  if (npath.length === 0) {
    return npath;
  }
  const nFileName = _path2.default.basename(npath, _path2.default.extname(npath)) + ext;
  return _path2.default.join(_path2.default.dirname(npath), nFileName);
}

/**
 *  Public: creates docs using topDocument data with a pug template.
 *
 *  * `topDocument` {TopDocument} result from topdoc parsing.
 *
 *  ## Examples
 *
 *  ```js
 *  var template = require('default-template');
 *  postcss([topdoc({ fileData: opt })]).process(content, { from: filepath })
 *    .then((result) => {
 *      template(result);
 *    });
 *  ```
 */
/* eslint-disable no-console */
function defaultTemplate(topDocument) {
  console.log('dna-topdoc-template: starting...');
  let pugFile;
  if (topDocument.pugFile) {
    pugFile = _path2.default.resolve(topDocument.pugFile);
  } else {
    pugFile = _path2.default.resolve(__dirname, 'template.pug');
  }

  console.log('dna-topdoc-template: reading package.json...');
  var pkg;
  try {
    pkg = JSON.parse(_fsExtra2.default.readFileSync(topDocument.packageFile, 'utf-8'));
  } catch (err) {
    console.log('dna-topdoc-template failed to read package.json');
    console.error(err);
    pkg = {
      version: '?.??',
      devDependencies: {
        '@spectrum/spectrum-dna': '?.??'
      }
    };
  }

  console.log('dna-topdoc-template: established pugfile as', pugFile);

  console.log('dna-topdoc-template: sorting elements before pug renderer call...');

  try {
    console.log('dna-topdoc-template: trying topDocument.components.sort', pugFile);

    topDocument.components.sort(_nameCompareFunction);
  } catch (sortFail) {
    console.log('dna-topdoc-template failed sorting topDocument.components');
    console.error(sortFail);
  }

  try {

    console.log(`dna-topdoc-template: iterate ${topDocument.files.length} topDocument.files`);
    topDocument.files.forEach(file => {
      file.filename = _replaceExt(file.filename, '.html');
    });
    console.log('dna-topdoc-template: reading polyfill');
    const focusRingPolyfillContent = _fsExtra2.default.readFileSync(require.resolve('@adobe/focus-ring-polyfill'), 'utf-8');
    console.log('dna-topdoc-template: calling pug.renderFile');
    const content = _pug2.default.renderFile(pugFile, { document: topDocument, pretty: true, frPolyfill: focusRingPolyfillContent, pkg: pkg });
    console.log('dna-topdoc-template: creating output css directory');
    _fsExtra2.default.mkdirsSync(_path2.default.resolve(topDocument.destination, 'css'));
    const cssDestination = _path2.default.resolve(topDocument.destination, 'css', 'vendor', topDocument.filename);
    console.log('dna-topdoc-template: copying css');
    _fsExtra2.default.copySync(topDocument.source, cssDestination);
    console.log('dna-topdoc-template: copying css');
    const newFileName = topDocument.first ? 'index.html' : _replaceExt(topDocument.filename, '.html');
    _fsExtra2.default.writeFileSync(_path2.default.resolve(topDocument.destination, newFileName), content);
  } catch (err) {
    console.log('dna-topdoc-template: Error caught processing template!');
    console.log(err);
  }
}

/**
 *  Private: A compare function that sorts array members by their 'name' property.
 */
function _nameCompareFunction(a, b) {
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;
  return 0;
}
module.exports = exports['default'];
