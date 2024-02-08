const { outdent } = require("outdent");

const md = require("./markdown");

const addShortcode = {
    // Allow embedding svg icon
    // {% icon "github.svg", "my-class", [24, 24] %}
    icon: (name, className, size = [24, 24]) => {
        if (!Array.isArray(size)) size = [size];
        return outdent({ newline: "" })`
            <svg class="icon icon--${name} ${className || "spectrum-Icon"}" role="img" aria-hidden="true" width="${
                size[0]
            }" height="${size[1] || size[0]}">
            <use xlink:href="/assets/images/sprite.svg#${name}"></use>
            </svg>`;
    },
};
const addPairedShortcode = {
    // Allow embedding markdown in `.njk` files
    // {% markdown %}
    // # Heading
    // {% endmarkdown %}
    markdown: (content) => md.render(outdent.string(content)),
};

module.exports = { addShortcode, addPairedShortcode };
