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

module.exports = function (page, scenario) {
  console.log(`Inject Spectrum CSS color theme class: spectrum--${scenario.theme}`);
  page.evaluate(`window._spectrumTheme = '${scenario.theme}'`);
  page.evaluate(() => {
    const THEMES = ['lightest', 'light', 'dark', 'darkest'];
    const bodyElm = document.body;
    if (window._spectrumTheme && !bodyElm.classList.contains(window._spectrumTheme)) {
      // Remove all the theme class
      THEMES.forEach(t => {
        bodyElm.classList.remove(`spectrum--${t}`);
      });
      bodyElm.classList.toggle(`spectrum--${window._spectrumTheme}`);
    }
  });

  console.log(`Spectrum CSS color theme class: spectrum--${scenario.theme} injected for ${scenario.label}`);
};
