/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

function Switcher(options) {
  options = options || {};

  this._theme = options.theme || 'light';
  this._scale = options.scale || 'medium';
  this._method = options.method || 'vars';
  this._links = [];
}

Switcher.ScaleAbbreviations = {
  'medium': 'md',
  'large': 'lg'
};

Switcher.prototype._addLink = function(href) {
  var existingLink = document.querySelector('link[href="' + href + '"]');
  if (existingLink) {
    link = existingLink;
  }
  else {
    var link = document.createElement('link');
    link.setAttribute('href', href);
    link.setAttribute('rel', 'stylesheet');
    document.head.appendChild(link);
  }

  this._links.push(link);
  return link;
};

Switcher.prototype._setScale = function(scale, method) {
  scale = scale || this.scale;
  method = method || this.method;

  var oldLinks = this._links.slice();
  var newLinks = [];

  if (method === 'diff') {
    newLinks.push(this._addLink('../spectrum-core.css'));
    newLinks.push(this._addLink('../spectrum-core-diff.css'));
  }
  else if (method === 'standalone') {
    if (scale !== 'medium') {
      newLinks.push(this._addLink('../spectrum-core-' + Switcher.ScaleAbbreviations[scale] + '.css'));
    }
    else {
      newLinks.push(this._addLink('../spectrum-core.css'));
    }
  }
  else if (method === 'vars') {
    newLinks.push(this._addLink('../vars/spectrum-medium-unique.css'));
    newLinks.push(this._addLink('../vars/spectrum-large-unique.css'));
  }

  if (method === 'vars') {
    newLinks.push(this._addLink('../vars/spectrum-lightest-unique.css'));
    newLinks.push(this._addLink('../vars/spectrum-light-unique.css'));
    newLinks.push(this._addLink('../vars/spectrum-dark-unique.css'));
    newLinks.push(this._addLink('../vars/spectrum-darkest-unique.css'));
  }
  else {
    newLinks.push(this._addLink('../spectrum-lightest.css'));
    newLinks.push(this._addLink('../spectrum-light.css'));
    newLinks.push(this._addLink('../spectrum-dark.css'));
    newLinks.push(this._addLink('../spectrum-darkest.css'));
  }

  // Remove old links
  oldLinks.forEach(function(oldLink) {
    if (newLinks.indexOf(oldLink) === -1) {
      if (oldLink.parentElement) {
        oldLink.parentElement.removeChild(oldLink);
      }
    }
  });

  Object.keys(Switcher.ScaleAbbreviations).forEach(function(otherScale) {
    document.body.classList.remove('spectrum--' + otherScale);
  });
  document.body.classList.add('spectrum--' + scale);

  this._scale = scale;
  this._method = method;
}

Object.defineProperty(Switcher.prototype, 'theme', {
  set: function(value) {
    Array.prototype.forEach.call(document.getElementsByClassName('spectrum'), function(el) {
      el.classList.remove('spectrum--lightest');
      el.classList.remove('spectrum--light');
      el.classList.remove('spectrum--dark');
      el.classList.remove('spectrum--darkest');
      el.classList.add('spectrum--' + value);
    });

    this._theme = value;
  },
  get: function() {
    return this._theme;
  }
});

Object.defineProperty(Switcher.prototype, 'scale', {
  set: function(scale) {
    this._setScale(scale);
  },
  get: function() {
    return this._scale;
  }
});

Object.defineProperty(Switcher.prototype, 'method', {
  set: function(method) {
    this._setScale(undefined, method);
  },
  get: function() {
    return this._method;
  }
});
