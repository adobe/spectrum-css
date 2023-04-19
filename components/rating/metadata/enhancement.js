function setFocus(rating, focused) {
    rating.classList[focused ? 'add' : 'remove']('is-focused');
}

function setValue(rating, value) {
    const input = rating.querySelector('.spectrum-Rating-input');
    input.value = value;

    rating.querySelectorAll('.spectrum-Rating-icon')?.forEach((el, idx) => {
        el.classList[idx <= value - 1 ? 'add' : 'remove']('is-selected');
        el.classList[idx === value - 1 ? 'add' : 'remove']('is-currentValue');
    });
}

document.addEventListener('focusin', (event) => {
    const rating = event.target.closest('.spectrum-Rating');
    if (!rating) return;
    setFocus(rating, true);
});

document.addEventListener('focusout', (event) => {
    const rating = event.target.closest('.spectrum-Rating');
    if (!rating) return;
    setFocus(rating, false);
});

document.addEventListener('change', (event) => {
    const rating = event.target.closest('.spectrum-Rating');
    const input = rating.closest('.spectrum-Rating-input');
    if (!input) return;

    if (input.hasAttribute('readonly')) {
        event.preventDefault();
        input.value = event.defaultValue;
    } else {
        const value = parseInt(input.value, 10);
        setValue(rating, value);
    }
});

document.addEventListener('click', (event) => {
    const icon = event.target.closest('.spectrum-Rating-icon');
    if (!icon) return;
    const rating = event.target.closest('.spectrum-Rating');
    const value = Array.prototype.indexOf.call(rating.querySelectorAll('.spectrum-Rating-icon'), icon) + 1;
    setValue(rating, value);
});
