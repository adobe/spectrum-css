function setSelected(card, selected) {
    const checkbox = card.querySelector('.spectrum-Checkbox-input');
    if (checkbox) checkbox.checked = selected;

    card.classList.toggle('is-selected', selected);
}

document.addEventListener('click', (event) => {
    const card = event.target.closest('.spectrum-AssetCard');
    if (!card) return;
    setSelected(card, !card.classList.contains('is-selected'));
});

document.addEventListener('keypress', (event) => {
    const card = event.target.closest('.spectrum-AssetCard');
    if (!card) return;
    if (event.key !== 'Enter' && event.key !== ' ') return;
    setSelected(card, !card.classList.contains('is-selected'));
    event.preventDefault();
});
