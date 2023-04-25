function setSelected(card, selected) {
    const checkbox = card.querySelector('.spectrum-Checkbox-input');
    if (checkbox) checkbox.checked = selected;

    card.classList.toggle('is-selected', selected);
}

const assetcards = [...document.querySelectorAll('.spectrum-AssetCard')]

assetcards.addEventListener('click', (event) => {
    const card = event.target.closest('.spectrum-AssetCard');
    if (!card) return;
    setSelected(card, !card.classList.contains('is-selected'));
});

assetcards.addEventListener('keypress', (event) => {
    if (event.key !== 'Enter' && event.key !== ' ') return;
    const card = event.target.closest('.spectrum-AssetCard');
    if (!card) return;
    setSelected(card, !card.classList.contains('is-selected'));
    event.preventDefault();
});
