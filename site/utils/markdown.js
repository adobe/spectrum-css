const codeClipboard = require("eleventy-plugin-code-clipboard");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const markdownItAttrs = require("markdown-it-attrs");
const markdownItPrism = require("markdown-it-prism");

const md = markdownIt({
    html: true,
    linkify: false,
    typographer: true,
    breaks: true,
});

md.use(markdownItPrism, {
    highlightInlineCode: true,
    defaultLanguage: "css",
});
md.use(markdownItAttrs);
md.use(markdownItAnchor, {
    level: [2, 3, 4],
    permalink: markdownItAnchor.permalink.headerLink({
        safariReaderFix: true,
    }),
    permalinkClass: "spectrum-Link",
    permalinkHref: (slug, state) => {
        const { page } = state.env;
        const { url } = page;
        return `${url}#${slug}`;
    },
    permalinkAttrs: () => ({ "aria-label": "§" }),
});
md.use(codeClipboard.markdownItCopyButton);

md.renderer.rules.link_open = (tokens, idx, options, env, self) => {
    tokens[idx].attrPush(["class", "spectrum-Link spectrum-Link--quiet"]);
    return self.renderToken(tokens, idx, options, env, self);
};

md.renderer.rules.hr = (tokens, idx, options, env, self) => {
    tokens[idx].attrPush(["class", "spectrum-Divider spectrum-Divider--large"]);
    return self.renderToken(tokens, idx, options, env, self);
};

md.renderer.rules.paragraph_open = (tokens, idx, options, env, self) => {
    const prevToken = tokens[idx - 1];
    if (prevToken?.tag.match("h1")) {
        tokens[idx].attrPush(["class", "spectrum-Body spectrum-Body--sizeL"]);
    } else {
        tokens[idx].attrPush(["class", "spectrum-Body spectrum-Body--sizeM"]);
    }
    return self.renderToken(tokens, idx, options, env, self);
};

md.renderer.rules.table_open = (tokens, idx, options, env, self) => {
    tokens[idx].attrPush(["class", "spectrum-Table spectrum-Table--sizeS"]);
    return self.renderToken(tokens, idx, options, env, self);
};

md.renderer.rules.thead_open = (tokens, idx, options, env, self) => {
    tokens[idx].attrPush(["class", "spectrum-Table-head"]);
    return self.renderToken(tokens, idx, options, env, self);
};

md.renderer.rules.tr_open = (tokens, idx, options, env, self) => {
    tokens[idx].attrPush(["class", "spectrum-Table-row"]);
    return self.renderToken(tokens, idx, options, env, self);
};

md.renderer.rules.tbody_open = (tokens, idx, options, env, self) => {
    tokens[idx].attrPush(["class", "spectrum-Table-body"]);
    return self.renderToken(tokens, idx, options, env, self);
};

md.renderer.rules.th_open = (tokens, idx, options, env, self) => {
    tokens[idx].attrPush(["class", "spectrum-Table-headCell"]);
    return self.renderToken(tokens, idx, options, env, self);
};

md.renderer.rules.td_open = (tokens, idx, options, env, self) => {
    const classNames = ["spectrum-Table-cell"];
    const nextEl = tokens[idx + 1].type === "inline" ? tokens[idx + 1] : null;
    const child = nextEl ? nextEl.children?.find((child) => child.type === "text") : null;
    if (child) {
        const startsWith = child.content.startsWith(":");
        const endsWith = child.content.endsWith(":");
        if (startsWith && endsWith) {
            classNames.push("spectrum-Table-cell--alignCenter");
            child.content = child.content.replace(/^:(.*?):$/, "$1");
        } else if (startsWith) {
            classNames.push("spectrum-Table-cell--alignRight");
            child.content = child.content.replace(/^:/, "");
        } else if (endsWith) {
            child.content = child.content.replace(/:$/, "");
        }
    }

    tokens[idx].attrPush(["class", classNames.join(" ")]);
    return self.renderToken(tokens, idx, options, env, self);
};

const code_inline =
    md.renderer.rules.code_inline ??
    function (tokens, idx, options, env, self) {
        return self.renderToken(tokens, idx, options, env, self);
    };
md.renderer.rules.code_inline = function (tokens, idx, options, env, self) {
    // ~ indicates markup that should be red
    if (tokens[idx].content.startsWith("~") && tokens[idx].content.endsWith("~")) {
        tokens[idx].attrPush(["style", "color: var(--spectrum-negative-color-600)"]);
        tokens[idx].content = tokens[idx].content.slice(1, -1);
    } else {
        tokens[idx].attrPush(["class", tokens[idx].attrGet("class") ?? "" + " spectrum-Code spectrum-Code--sizeS"]);
    }
    return code_inline(tokens, idx, options, env, self);
};

const code_block =
    md.renderer.rules.code_block ??
    function (tokens, idx, options, env, self) {
        return self.renderToken(tokens, idx, options, env, self);
    };
md.renderer.rules.code_block = (tokens, idx, options, env, self) => {
    tokens[idx].attrPush(["class", "spectrum-Code spectrum-Code--sizeS"]);
    return code_block(tokens, idx, options, env, self);
};

/** @type import('markdown-it').Renderer.RenderRule */
md.renderer.rules.heading_open = (tokens, idx, options, env, self) => {
    const token = tokens[idx];
    switch (token.tag) {
        case "h1":
            token.attrPush(["class", "spectrum-Heading spectrum-Heading--sizeXL"]);
            break;
        case "h2":
            token.attrPush(["class", "spectrum-Heading spectrum-Heading--sizeL"]);
            break;
        case "h3":
            token.attrPush(["class", "spectrum-Heading spectrum-Heading--sizeM"]);
            break;
        case "h4":
            token.attrPush(["class", "spectrum-Heading spectrum-Heading--sizeS"]);
            break;
        case "h5":
            token.attrPush(["class", "spectrum-Heading spectrum-Heading--sizeXS"]);
            break;
    }

    return self.renderToken(tokens, idx, options, env, self);
};

md.renderer.rules.heading_close = (tokens, idx, options, env, self) => {
    const token = tokens[idx];
    if (token.tag === "h2") {
        return '</h2><hr class="spectrum-Divider spectrum-Divider--sizeM"/>';
    }

    return self.renderToken(tokens, idx, options, env, self);
};

module.exports = md;
