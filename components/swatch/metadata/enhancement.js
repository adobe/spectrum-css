function setSelected(swatch, selected) {
    if (swatch.classList.contains('is-disabled')) return;
    swatch.classList.toggle('is-selected', selected);
}

document.addEventListener('click', (event) => {
    const swatch = event.target.closest('.spectrum-Swatch');
    if (!swatch) return;
    setSelected(swatch, !swatch.classList.contains('is-selected'));
});

document.addEventListener('keypress', (event) => {
    const swatch = event.target.closest('.spectrum-Swatch');
    if (!swatch) return;
    if (event.key !== 'Enter' && event.key !== ' ') return;

    setSelected(swatch, !swatch.classList.contains('is-selected'));
    event.preventDefault();
});
