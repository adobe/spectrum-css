import { LitElement, css, unsafeCSS } from "lit";
import styles from "../index.css?inline";
import { ItemTemplate } from "./template.js";

export class AccordionItem extends LitElement {
	static get styles() {
		return css`${unsafeCSS(styles)}`;
	}

	static get properties() {
		return {
			args: { type: Object },
		};
	}

	constructor() {
		super();
		this.args = {};
	}

	render() {
		return ItemTemplate(this.args);
	}
}

customElements.define("spectrum-accordion-item", AccordionItem);
