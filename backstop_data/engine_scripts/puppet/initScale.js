module.exports = function (page, scenario) {
  console.log(`Inject Spectrum scale class: spectrum--${scenario.scale}`);
  page.evaluate(`window._spectrumScale = '${scenario.scale}'`);
  page.evaluate(() => {
    const SCALES = ['medium', 'large'];
    const bodyElm = document.body;
    if (window._spectrumScale && !bodyElm.classList.contains(window._spectrumScale)) {
      // Remove all the theme class
      SCALES.forEach(t => {
        bodyElm.classList.remove(`spectrum--${t}`);
      });
      bodyElm.classList.toggle(`spectrum--${window._spectrumScale}`);
    }
  });

  console.log(`Spectrum CSS scale class: spectrum--${scenario.scale} injected for ${scenario.label}`);
};
