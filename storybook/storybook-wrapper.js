import "../assets/scripts/typekit.js";

window.Prism = window.Prism || {};
window.Prism.manual = true;

// function removeStorybookClasses(element) {
//   element.classList.forEach(className => {
//     if (className.startsWith("css-")) {
//       element.classList.remove(className);
//     }
//   });
// }

window.addEventListener("DOMContentLoaded", () => {
    const color =
        localStorage.getItem("spectrum-color") ?? window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light";
    const scale =
        localStorage.getItem("spectrum-scale") ?? window.matchMedia("(max-width: 961px)").matches ? "large" : "medium";
    const context = localStorage.getItem("spectrum-theme") ?? "spectrum";

    localStorage.setItem("spectrum-color", color);
    localStorage.setItem("spectrum-scale", scale);
    localStorage.setItem("spectrum-theme", context);
});
