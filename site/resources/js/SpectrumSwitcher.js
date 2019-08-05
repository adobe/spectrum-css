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

function SpectrumSwitcher(options) {
  options = options || {};

  this._theme = options.theme || 'light';
  this._scale = options.scale || 'medium';

  document.addEventListener('keydown', function(event) {
    if (event.ctrlKey) {
      if (SpectrumSwitcher.ThemeKeys[event.key]) {
        this.theme = SpectrumSwitcher.ThemeKeys[event.key];
      }
      else if (SpectrumSwitcher.ScaleKeys[event.key]) {
        this.scale = SpectrumSwitcher.ScaleKeys[event.key];
      }
    }
  }.bind(this));
}

SpectrumSwitcher.Scales = [
  'medium',
  'large'
];

SpectrumSwitcher.ColorStops = [
  'lightest',
  'light',
  'dark',
  'darkest'
];

SpectrumSwitcher.ThemeKeys = {
  '1': 'lightest',
  '2': 'light',
  '3': 'dark',
  '4': 'darkest',
};

SpectrumSwitcher.ScaleKeys = {
  'm': 'medium',
  'l': 'large'
};

Object.defineProperty(SpectrumSwitcher.prototype, 'theme', {
  set: function(theme) {
    SpectrumSwitcher.ColorStops.forEach(function(otherTheme) {
      document.body.classList.remove('spectrum--' + otherTheme);
    });
    document.body.classList.add('spectrum--' + theme);

    this._theme = theme;
  },
  get: function() {
    return this._theme;
  }
});

Object.defineProperty(SpectrumSwitcher.prototype, 'scale', {
  set: function(scale) {
    SpectrumSwitcher.Scales.forEach(function(otherScale) {
      document.body.classList.remove('spectrum--' + otherScale);
    });
    document.body.classList.add('spectrum--' + scale);

    this._scale = scale;
  },
  get: function() {
    return this._scale;
  }
});
