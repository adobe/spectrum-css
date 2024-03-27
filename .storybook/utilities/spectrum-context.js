import darkVars from "!!raw-loader!@spectrum-css/vars/dist/spectrum-dark.css";
import darkestVars from "!!raw-loader!@spectrum-css/vars/dist/spectrum-darkest.css";
import globalVars from "!!raw-loader!@spectrum-css/vars/dist/spectrum-global.css";
import largeVars from "!!raw-loader!@spectrum-css/vars/dist/spectrum-large.css";
import lightVars from "!!raw-loader!@spectrum-css/vars/dist/spectrum-light.css";
import mediumVars from "!!raw-loader!@spectrum-css/vars/dist/spectrum-medium.css";

import darkExpress from "!!raw-loader!@spectrum-css/expressvars/dist/spectrum-dark.css";
import darkestExpress from "!!raw-loader!@spectrum-css/expressvars/dist/spectrum-darkest.css";
import globalExpress from "!!raw-loader!@spectrum-css/expressvars/dist/spectrum-global.css";
import largeExpress from "!!raw-loader!@spectrum-css/expressvars/dist/spectrum-large.css";
import lightExpress from "!!raw-loader!@spectrum-css/expressvars/dist/spectrum-light.css";
import mediumExpress from "!!raw-loader!@spectrum-css/expressvars/dist/spectrum-medium.css";

import tokens from "!!raw-loader!@spectrum-css/tokens/dist/index.css";

import { LitElement, adoptStyles, css, html, supportsAdoptingStyleSheets } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { styleMap } from "lit/directives/style-map.js";

/**
 * This is a custom element that allows us to use the shadow DOM to
 * encapsulate styles and content for testing purposes.
 */
export class ContextWrapper extends LitElement {
    static get observedAttributes() {
        return ["color", "scale", "is-legacy", "is-express", "template"];
    }

    static styles = css`[hidden] { display: none; }`;

    static properties = {
        /* Static values that are used to verify input */
        COLORS: { attribute: false },
        SCALES: { attribute: false },
        TOKENS: { attribute: false },
        /* Pass in custom CSS for spectrum wrapper in Shadow DOM */
        customStyles: { attribute: false },
        /* Reflected context settings */
        color: { type: String, reflect: true },
        scale: { type: String, reflect: true },
        /* Legacy tokens = @spectrum-css/vars or @spectrum-css/expressvars */
        isLegacy: { type: Boolean, reflect: true, attribute: "is-legacy" },
        isExpress: { type: Boolean, reflect: true, attribute: "is-express" },
        /* Template content */
        template: { type: String, reflect: false },
    };

	constructor() {
        super();

        this.COLORS = ["light", "dark", "darkest"];
        this.SCALES = ["medium", "large"];
        this.TOKENS = { vars: {}, express: {}, modern: {} };

        this.customStyles = {};
        this.color = "light";
        this.scale = "medium";
        this.isLegacy = false;
        this.isExpress = false;
        this.template = "";

        this.initializeTokens();

        // Mutation handlers
        this.handleSlotChange = this.handleSlotChange.bind(this);
        this.handleExternalStyleContentChange = this.handleExternalStyleContentChange.bind(this);
        this.handleExternalHeadStyleChange = this.handleExternalHeadStyleChange.bind(this);

        // Stylesheet utilities
        this.addExternalStylesheet = this.addExternalStylesheet.bind(this);
        this.removeExternalStylesheet = this.removeExternalStylesheet.bind(this);
        this.connectStylesheet = this.connectStylesheet.bind(this);

        // Template utilities
        this.refreshStyles = this.refreshStyles.bind(this);
        this.initializeTokens = this.initializeTokens.bind(this);
        this.isValidTemplate = this.isValidTemplate.bind(this);
    }

    get _externalStyles() {
        return [...document.querySelectorAll("[data-source=component]")];
    }

    randomID(seed = 1000000) {
        return `stylesheet-${Math.floor(Math.random() * seed)}`;
    }

    connectedCallback() {
        super.connectedCallback();

        /* Watch for changes to external stylesheets */
        this._externalStyles.forEach(style => {
            // Add a watcher to the style element to update the shadow root when it changes
            const styleObserver = new MutationObserver(this.handleExternalStyleContentChange);

            // Watch for changes to the style content, and update the shadow root when they occur
            styleObserver.observe(style, { childList: true, subtree: true, attributes: false });
        });

        /* Watch head for style tags being added or removed */
        const headObserver = new MutationObserver(this.handleExternalHeadStyleChange);
        headObserver.observe(document.head, { childList: true, subtree: false, attributes: false });
    }

    firstUpdated() {
        super.firstUpdated();

        // Refresh stylesheets once connected
        this.refreshStyles();

        /* Pull styles out of the head that have the [data-source=component] */
        this._externalStyles.forEach(style => {
            this.addExternalStylesheet(style);
        });

        console.log('firstUpdated', { template: this.template });

        /* If the template is not provided in a format we can process, default to light DOM */
        if (!this.isValidTemplate()) {
            this._passthrough.removeAttribute("hidden");
        } else {
            const templates = [];
            if (!Array.isArray(this.template)) {
                templates.push(this.template);
            } else {
                templates.push(...this.template);
            }

            for (const template of templates) {
                if (typeof template === "object" && template._$litType$) {
                    // Render the lit-html template into the shadow DOM

                    this._wrapper.appendChild(template);
                } else if (typeof template === "string") {
                    const fragment = document.createDocumentFragment();
                    fragment.innerHTML = template;
                    this._wrapper.appendChild(fragment);
                } else {
                    this._passthrough.removeAttribute("hidden");
                }
            }

            /* Hide the passthrough slot once we've migrated content into the shadow dom for encapsulation */
            this._passthrough.setAttribute("hidden", "");
        }
    }

    isValidTemplate() {
        return (
            (
                this.template &&
                (
                    Array.isArray(this.template) &&
                    this.template.length > 0
                ) ||
                (
                    typeof this.template === "string" &&
                    this.template !== ""
                ) ||
                (
                    typeof this.template === "object" &&
                    this.template._$litType$
                )
            )
        );
    }


    disconnectedCallback() {
        super.disconnectedCallback()
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue === newValue) return;
        this[name] = newValue;

        if (["color", "scale", "is-legacy", "is-express"].includes(name)) {
            const type = name.replace(/-\w/g, (match) => match[1].toUpperCase());
            this.refreshStyles(type);
        }
    }

    render() {
        return html`
            <!-- This is the default spectrum class; all content will be injected here -->
            <section
                class=${classMap({
                    ["spectrum"]: true,
                    ["spectrum--express"]: this.isExpress,
                    [`spectrum--${this.color}`]: typeof this.color !== "undefined",
                    [`spectrum--${this.scale}`]: typeof this.scale !== "undefined",
                })}
                style=${styleMap(this.customStyles)}
            >
                <slot passthrough @slotchange=${this.handleSlotChange}></slot>
                ${this.template}
            </section>
        `;
	}

    handleSlotChange(event) {
        const nodes = [...event.target.assignedNodes({ flatten: true })]?.filter(node => node.nodeType === Node.ELEMENT_NODE) ?? [];
        console.log('handleSlotChange', {nodes});

        if (nodes.length === 0) return;

        // @todo
        this.template = nodes.map(node => node.cloneNode(true));
    }

    get _passthrough() {
        return this.renderRoot?.querySelector('slot[passthrough]') ?? null;
    }

    get _wrapper() {
        return this.renderRoot?.querySelector(".spectrum") ?? null;
    }

    initializeTokens() {
        for (const type of Object.keys(this.TOKENS)) {
            this.TOKENS[type].light = new CSSStyleSheet();
            this.TOKENS[type].dark = new CSSStyleSheet();
            this.TOKENS[type].darkest = new CSSStyleSheet();

            this.TOKENS[type].medium = new CSSStyleSheet();
            this.TOKENS[type].large = new CSSStyleSheet();

            this.TOKENS[type].global = new CSSStyleSheet();
        }

        this.TOKENS.vars.light = this.TOKENS.vars.light.replaceSync(lightVars);
        this.TOKENS.vars.dark = this.TOKENS.vars.dark.replaceSync(darkVars);
        this.TOKENS.vars.darkest = this.TOKENS.vars.darkest.replaceSync(darkestVars);
        this.TOKENS.vars.medium = this.TOKENS.vars.medium.replaceSync(mediumVars);
        this.TOKENS.vars.large = this.TOKENS.vars.large.replaceSync(largeVars);
        this.TOKENS.vars.global = this.TOKENS.vars.global.replaceSync(globalVars);

        this.TOKENS.express.light = this.TOKENS.express.light.replaceSync(lightExpress);
        this.TOKENS.express.dark = this.TOKENS.express.dark.replaceSync(darkExpress);
        this.TOKENS.express.darkest = this.TOKENS.express.darkest.replaceSync(darkestExpress);
        this.TOKENS.express.medium = this.TOKENS.express.medium.replaceSync(mediumExpress);
        this.TOKENS.express.large = this.TOKENS.express.large.replaceSync(largeExpress);
        this.TOKENS.express.global = this.TOKENS.express.global.replaceSync(globalExpress);

        this.TOKENS.modern.global = this.TOKENS.modern.global.replaceSync(tokens);
    }

    /**
     * Refreshes the stylesheets for the shadow root. Run this whenever the color, scale, or isLegacy attributes change.
     * @returns {void}
     */
    refreshStyles(type) {
        if (!this.renderRoot) return;

        const sheets = [this.TOKENS.modern.global];
        if (this.isLegacy) {
            if (this.isExpress) {
                if (!type || !["scale", "color"].includes(type) || !this[type] || !this.TOKENS.express[this[type]]) {
                    sheets.push(
                        this.TOKENS.express.global,
                        this.TOKENS[this.scale],
                        this.TOKENS[this.color],
                    );
                } else sheets.push( this.TOKENS.express[this[type]] );
            } else {
                if (!type || !["scale", "color"].includes(type) || !this[type] || !this.TOKENS.vars[this[type]]) {
                    sheets.push(
                        this.TOKENS.vars.global,
                        this.TOKENS.vars[this.scale],
                        this.TOKENS.vars[this.color],
                    );
                } else sheets.push( this.TOKENS.vars[this[type]] );
            }
        }

        if (sheets.filter(Boolean).length === 0) return;

        console.log('refreshStyles', { sheets });
        if (supportsAdoptingStyleSheets) {
            console.log('adoptStyles');
            adoptStyles(this.renderRoot, sheets);
        } else {
            console.log('adoptStyles not supported');
            // Copy content of the stylesheets into the shadow root
            for (const sheet of sheets) {
                const style = document.createElement("style");
                style.setAttribute("data-source", "tokens");
                style.id = this.randomID();
                style.textContent = sheet.toString();
                this.renderRoot.appendChild(style);
            }
        }
    }

    connectStylesheet(node) {
        // If it already has an ID, use that
        if (node.id) return node.id;

        // Assign a unique ID to the style element
        node.id = this.randomID();
        return node.id;
    }

    handleExternalStyleContentChange(mutations) {
        // If the shadow root doesn't exist, don't do anything
        if (!this.renderRoot) return;

        for (const mutation of mutations) {
            console.log('handleExternalStyleContentChange', { mutation });
            for (const node of mutation.addedNodes) {
                // Any changes to the style content should be reflected in the shadow root
                if (node.nodeName !== "STYLE") continue;

                const id = this.connectStylesheet(node);
                const existingNode = this.renderRoot.querySelector(`#${id}`);

                // Check if the style object exists in the shadow root
                if (!existingNode) {
                    // If it doesn't exist, create a new style element and append it to the shadow root
                    this.renderRoot.appendChild(node.cloneNode(true));
                    continue;
                }

                this.renderRoot.replaceChild(existingNode, node.cloneNode(true));
            }

            for (const node of mutation.removedNodes) {
                if (node.nodeName !== "STYLE") continue;

                const existingNode = this.renderRoot.querySelector(`#${node.id}`);
                if (!existingNode) continue;

                this.renderRoot.removeChild(existingNode);
            }
        }
    }

    addExternalStylesheet(sheet) {
        if (!this.renderRoot) return;

        // This is new so we'll add a unique ID to it and append it to the shadow root
        this.connectStylesheet(sheet);
        this.renderRoot.appendChild(sheet.cloneNode(true));
    }

    removeExternalStylesheet(sheet) {
        if (!this.renderRoot) return;

        // This is being removed so we find the matching ID and remove it from the shadow root
        const id = this.connectStylesheet(sheet);
        const existingNode = this.renderRoot.querySelector(`#${id}`);
        if (!existingNode) return;

        this.renderRoot.removeChild(existingNode);
    }

    handleExternalHeadStyleChange(mutations) {
        const ignoreChange = (node) => node.nodeName !== "STYLE" || node.getAttribute("data-source") !== "component";
        // If the shadow root doesn't exist, don't do anything
        if (!this.renderRoot) return;

        for (const mutation of mutations) {
            console.log('handleExternalHeadStyleChange', { mutation });

            for (const node of mutation.addedNodes) {
                if (ignoreChange(node)) continue;
                this.addExternalStylesheet(node);
            }

            for (const node of mutation.removedNodes) {
                if (ignoreChange(node)) continue;
                this.removeExternalStylesheet(node);
            }
        }
    }
}

if (customElements.get("spectrum-context") === undefined)
	customElements.define("spectrum-context", ContextWrapper);
