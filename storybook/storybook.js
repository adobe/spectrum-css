import "../assets/scripts/typekit.js";

window.Prism = window.Prism || {};
window.Prism.manual = true;

function removeStorybookClasses(element) {
  element.classList.forEach(className => {
    if (className.startsWith("css-")) {
      element.classList.remove(className);
    }
  });
}

window.addEventListener("DOMContentLoaded", () => {
  const color = localStorage.getItem('spectrum-color') ?? window.matchMedia("(prefers-color-scheme: dark)").matches ? 'dark' : 'light';
  const scale = localStorage.getItem('spectrum-scale') ?? window.matchMedia("(max-width: 961px)").matches ? 'large' : 'medium';
  const theme = localStorage.getItem('spectrum-theme') ?? 'spectrum';

  // Add the spectrum root class
  document.body.classList.add(`spectrum${theme !== 'spectrum' ? `--${theme}` : ''}`, `spectrum--${scale}`, `spectrum--${color}`);

  // @todo check for a ready state hook and replace the timeout with that
  setTimeout(() => {
    document.querySelectorAll('#components button').forEach(item => {
      item.classList.add(`spectrum-TreeView-heading`);
      removeStorybookClasses(item);
    });

    document.querySelectorAll(".docblock-source").forEach(item => {
      item.classList.add("spectrum-Code", "is-collapsed");
      item.addEventListener("click", (event) => {
        // If the click is next to the copy button, don't toggle the code block
        if (event.target.classList.contains("button")) return;
        item.classList.toggle("is-collapsed");
      });
    });

  //   document.querySelectorAll(".docblock-code-toggle").forEach(item => {
  //     item.classList.add("spectrum-ActionButton", "spectrum-ActionButton--sizeL", "spectrum-ActionButton--emphasized");
  //   });

  //   document.querySelectorAll("table.docblock-argstable").forEach(table => {
  //     table.classList.add("spectrum-Table", "spectrum-Table--sizeS");
  //     removeStorybookClasses(table);
  //     table.querySelectorAll("thead").forEach(thead => {
  //       thead.classList.add("spectrum-Table-head");
  //       thead.querySelectorAll("th").forEach(tr => tr.classList.add("spectrum-Table-headCell"));
  //       thead.querySelectorAll("th span").forEach(span => span.classList.add("spectrum-Table-columnTitle"));
  //     });
  //     table.querySelectorAll("tbody").forEach(tbody => {
  //       tbody.classList.add("spectrum-Table-body");
  //       tbody.querySelectorAll("tr").forEach(tr => {
  //         removeStorybookClasses(tr);
  //         tr.classList.add("spectrum-Table-row");
  //       });
  //       tbody.querySelectorAll("td").forEach(td => {
  //         removeStorybookClasses(td);
  //         td.classList.add("spectrum-Table-cell");
  //       });
  //     });
  //   });
  }, 2000);
});
