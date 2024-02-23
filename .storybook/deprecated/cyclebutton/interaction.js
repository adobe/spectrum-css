window.addEventListener("click", (event) => {
	const button = event.target.closest(".spectrum-CycleButton");
    if (!button) return;

    const icons = button.querySelectorAll(".spectrum-Icon");
    const currentIcon = button.querySelector(".spectrum-Icon.is-selected");
    if (!currentIcon) return;

    const currentIconIndex = icons.indexOf(currentIcon);

    currentIcon.classList.remove("is-selected");

    const newIndex = currentIconIndex + 1 < icons.length ? currentIconIndex + 1 : 0;
    icons[newIndex].classList.add("is-selected");
});
