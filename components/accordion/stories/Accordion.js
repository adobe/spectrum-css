import { LitElement, css, unsafeCSS } from "lit";
import styles from "../index.css?inline";
import { Template } from "./template";

export class Accordion extends LitElement {
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
		return Template(this.args);
	}
}

customElements.define("spectrum-accordion", Accordion);
