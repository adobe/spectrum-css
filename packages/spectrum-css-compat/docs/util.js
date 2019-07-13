const logger = require('gulplog');

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

exports.getLabelColor = function(status) {
  return labelColors[status] || 'grey';
};

exports.getDNAStatus = function(dnaComponentId, dnaStatus, cssStatus) {
  if (cssStatus === 'Deprecated') {
    dnaStatus = 'Deprecated';
  }

  if (cssStatus === 'CSS Verified') {
    if (dnaStatus !== 'Released') {
      logger.debug(`${dnaComponentId} is ${cssStatus} in CSS, but ${dnaStatus} in DNA`);
      dnaStatus = 'Canon';
    }
  }

  if (!dnaStatus) {
    logger.debug(`${dnaComponentId} has no DNA status`);
    dnaStatus = 'Beta Precursor';
  }

  return dnaStatusTranslation[dnaStatus] || dnaStatus;
};

exports.getCSSStatus = function(dnaComponentId, cssStatus) {
  if (cssStatus === 'Released' || !cssStatus) {
    cssStatus = 'CSS Unverified';
  }
  return cssStatusTranslation[cssStatus] || cssStatus;
};

exports.getSlug = function(name, subName) {
  if (subName) {
    name += `-${subName}`;
  }
  return name.toLowerCase().replace(/[^a-z\-]/g, '');
};

exports.populateDNAInfo = function(component, dnaVars) {
  // Get DNA information
  var dnaComponentId = component.id || component.name.toLowerCase();

  // Get info based on component variation first, then component name second
  var dnaComponentTitle = dnaVars['spectrum-' + dnaComponentId + '-name'];

  var dnaDescription = dnaVars['spectrum-' + dnaComponentId + '-description'];

  var cssStatus = this.getCSSStatus(dnaComponentId, component.status);
  var dnaStatus = this.getDNAStatus(dnaComponentId, dnaVars['spectrum-' + dnaComponentId + '-status'] || component.dnaStatus, cssStatus);

  // Store the info
  component.name = component.name || dnaComponentTitle;
  component.cssStatus = cssStatus;
  component.dnaStatus = dnaStatus;
  component.cssColor = this.getLabelColor(component.cssStatus);
  component.dnaColor = this.getLabelColor(component.dnaStatus);

  // Add other data
  component.id = dnaComponentId;

  component.slug = this.getSlug(component.name);
};
