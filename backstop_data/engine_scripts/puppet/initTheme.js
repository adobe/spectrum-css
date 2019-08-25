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
