export const withDownStateDimensionCapture = (selector) => (Story, context) => {
  const captureDownStateDimensions = () => {
    const components = document.querySelectorAll(selector);
    components.forEach((component) => {
      const { width, height } = component.getBoundingClientRect();
      component.style.setProperty('--spectrum-downstate-width', `${width}px`);
      component.style.setProperty('--spectrum-downstate-height', `${height}px`);
    });
  };

  document.addEventListener("DOMContentLoaded", () => {
    // Wait to make sure the story is fully rendered (otherwise width/height can be wrong)
    setTimeout(() => {
        captureDownStateDimensions();
    }, 100);
  });

  return Story(context);
};
