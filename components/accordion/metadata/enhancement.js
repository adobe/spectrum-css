[...document.querySelectorAll(".spectrum-Accordion")].map(accordion => {
  if (!accordion) return;
  accordion.click((event) => {
    let heading = event.target.closest(".spectrum-Accordion-itemHeading")
    if (!heading) return

    let item = event.target.closest(".spectrum-Accordion-item")
    let isDisabled = item.classList.contains("is-disabled")
    if (!isDisabled) {
      item.classList.toggle("is-open")
      event.preventDefault()
    }
  });
});
