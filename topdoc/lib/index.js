'use strict';

var pug = require('pug');
var path = require('path');
var markdown = require('markdown').markdown;
var fsExtra = require('fs-extra');

const labelColors = {
  'Deprecated': 'red',

  'Beta Precursor': 'orange',

  'Precursor': 'yellow',
  'CSS Unverified': 'yellow',

  'Canon': 'green',
  'CSS Verified': 'green'
};

const dnaStatusTranslation = {
  'Released': 'Canon',
  'Beta': 'Precursor'
};

const cssStatusTranslation = {
  'Beta': 'CSS Unverified',
  'Verified': 'CSS Verified'
};

/**
 *  Private: replaces the extension of a file path string with a new one.
 *
 *  * `npath` {String} path to file.
 *  * `ext` {String} new extension to replace the old one.
 *
 *  Returns {String} with replaced extension
 */
function replaceExt(npath, ext) {
  if (typeof npath !== 'string') {
    return npath;
  }
  if (npath.length === 0) {
    return npath;
  }
  const nFileName = path.basename(npath, path.extname(npath)) + ext;
  return path.join(path.dirname(npath), nFileName);
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
function template(topDocument) {
  let pugFile;
  if (topDocument.pugFile) {
    pugFile = path.resolve(topDocument.pugFile);
  } else {
    pugFile = path.resolve(__dirname, 'template.pug');
  }

  var pkg;
  try {
    pkg = JSON.parse(fsExtra.readFileSync(topDocument.packageFile, 'utf-8'));
  } catch (err) {
    console.error('dna-topdoc-template failed to read package.json');
    throw(err);
  }

  var dnaVars;
  try {
    dnaVars = JSON.parse(fsExtra.readFileSync(require.resolve(path.join('@spectrum/spectrum-dna', 'dist', 'vars', 'json', 'dna-vars.json')), 'utf-8'));
  } catch (err) {
    console.error('dna-topdoc-template failed to read dna-vars.json');
    throw(err);
  }

  try {
    topDocument.components.sort(_nameCompareFunction);
  } catch (sortFail) {
    console.error('dna-topdoc-template failed sorting topDocument.components');
    throw(err);
  }

  try {
    topDocument.files.forEach(file => {
      file.filename = replaceExt(file.filename, '.html');
    });

    var components = {};
    topDocument.components.forEach(component => {
      var dnaComponentId = component.id || component.filename;

      // Get info based on component variation first, then component name second
      var dnaComponentTitle = dnaVars.metadata['spectrum-' + dnaComponentId + '-name'];

      var dnaDescription = dnaVars.metadata['spectrum-' + dnaComponentId + '-description'];

      var cssStatus = getCSSStatus(dnaComponentId, component.status);
      var dnaStatus = getDNAStatus(dnaComponentId, dnaVars.metadata['spectrum-' + dnaComponentId + '-status'] || component.dnaStatus, cssStatus);

      // Store the info
      component.name = component.name || dnaComponentTitle;
      component.cssStatus = cssStatus;
      component.dnaStatus = dnaStatus;
      component.cssColor = getLabelColor(component.cssStatus);
      component.dnaColor = getLabelColor(component.dnaStatus);

      // Add other data
      component.id = dnaComponentId;
      component.description = component.description || '';

      if (component.components) {
        var extraComponentDescriptions = '';
        for (var subComponentId in component.components) {
          var subComponent = {};
          if (typeof component.components[subComponentId] === 'string') {
            // Shorthand
            subComponent.markup = component.components[subComponentId];
            subComponent.id = subComponentId;
          }
          else {
            // Verbose
            subComponent = component.components[subComponentId];
            subComponent.id = subComponent.id || subComponentId;
          }

          // Gather DNA data
          subComponent.description = subComponent.description || '';
          var subComponentDNADescription = dnaVars.metadata['spectrum-' + subComponent.id + '-description'];
          if (subComponentDNADescription && !subComponent.ignoreDNA) {
            subComponent.description = subComponentDNADescription + '\n\n' + subComponent.description;
          }

          subComponent.name = subComponent.name || dnaVars.metadata['spectrum-' + subComponent.id + '-name'];

          if (subComponent.description) {
            subComponent.description = markdown.toHTML(subComponent.description);
          }

          if (subComponent.details) {
            subComponent.details = markdown.toHTML(subComponent.details);
          }

          subComponent.cssStatus = getCSSStatus(subComponent.id, subComponent.status);
          subComponent.cssColor = getLabelColor(subComponent.cssStatus);
          subComponent.dnaStatus = getDNAStatus(subComponent.id, dnaVars.metadata['spectrum-' + subComponent.id + '-status'] || subComponent.dnaStatus, subComponent.cssStatus);
          subComponent.dnaColor = getLabelColor(subComponent.dnaStatus);

          // Store the object back
          component.components[subComponentId] = subComponent;
        }
      }
      else if (dnaDescription && !component.ignoreDNA) {
        component.description = dnaDescription + '\n\n' + component.description;
      }

      if (component.description) {
        component.description = markdown.toHTML(component.description);
      }

      if (component.details) {
        component.details = markdown.toHTML(component.details);
      }
    });

    const content = pug.renderFile(pugFile, {
      document: topDocument,
      pretty: true,
      pkg: pkg,
      dnaVars: dnaVars
    });

    fsExtra.mkdirsSync(path.resolve(topDocument.destination, 'css'));

    const cssDestination = path.resolve(topDocument.destination, 'css', 'vendor', topDocument.filename);
    fsExtra.copySync(topDocument.source, cssDestination);

    const newFileName = topDocument.first ? 'index.html' : replaceExt(topDocument.filename, '.html');
    fsExtra.writeFileSync(path.resolve(topDocument.destination, newFileName), content);
  } catch (err) {
    console.error('dna-topdoc-template: Error caught processing template!');
    throw(err);
  }
}

function getLabelColor(status) {
  return labelColors[status] || 'grey';
}

function getDNAStatus(dnaComponentId, dnaStatus, cssStatus) {
  if (cssStatus === 'Deprecated') {
    dnaStatus = 'Deprecated';
  }

  if (cssStatus === 'CSS Verified') {
    if (dnaStatus !== 'Released') {
      console.log(`${dnaComponentId} is ${cssStatus} in CSS, but ${dnaStatus} in DNA`);
      dnaStatus = 'Canon';
    }
  }

  if (!dnaStatus) {
    console.log(`${dnaComponentId} has no DNA status`);
    dnaStatus = 'Beta Precursor';
  }

  return dnaStatusTranslation[dnaStatus] || dnaStatus;
}

function getCSSStatus(dnaComponentId, cssStatus) {
  if (cssStatus === 'Released' || !cssStatus) {
    cssStatus = 'CSS Unverified';
  }
  return cssStatusTranslation[cssStatus] || cssStatus;
}

/**
 *  Private: A compare function that sorts array members by their 'name' property.
 */
function _nameCompareFunction(a, b) {
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;
  return 0;
}

module.exports = template;
