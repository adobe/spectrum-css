import{T as a}from"./template-DTUdi1ER.js";import{T as o}from"./template-VCbHummt.js";import"./lit-element-CJjJlyWZ.js";import{x as s}from"./lit-html-BdGv-Ldy.js";import{n as c}from"./when-BR7zwNJC.js";const $=({rootClass:t="spectrum-ColorHandle",customClasses:i=[],isDisabled:n=!1,isFocused:m=!1,isWithColorLoupe:e=!1,customStyles:r={"--spectrum-picked-color":"rgba(255, 0, 0, 0.5)"}}={},l={})=>o({customClasses:[`${t}`,...!n&&m?["is-focused"]:[],...n?["is-disabled"]:[],...i],content:[s`
			<div class="${t}-inner"></div>
			${c(e,()=>s`
				${a({isOpen:!0,customStyles:{"inset-inline-start":"unset","inset-block-start":"unset"}})}
			`)}
		`],customStyles:{...r,position:e?"absolute":void 0,"inset-block":e?"75%":void 0,"inset-inline":e?"50%":void 0}});export{$ as T};
