import{T as c}from"./template-DnxY-KqC.js";import"./lit-element-CJjJlyWZ.js";import{x as p}from"./lit-html-BdGv-Ldy.js";import{a as g}from"./class-map-sTkR_Npl.js";import{o as s}from"./style-map-yx2CMG_J.js";const y=({rootClass:a="spectrum-ColorArea",customClasses:i=[],customStyles:l={},isDisabled:e=!1,isFocused:m=!1,customWidth:r,customHeight:d}={},t={})=>{const{updateArgs:o}=t;return p`
		<div
			class=${g({[a]:!0,"is-disabled":e,"is-focused":m,...i.reduce((n,u)=>({...n,[u]:!0}),{})})}
			style=${s({"--mod-colorarea-height":d,"--mod-colorarea-width":r,...l})}
			@focusin=${()=>{o({isFocused:!0})}}
			@focusout=${()=>{o({isFocused:!1})}}
		>
			<div
				class="spectrum-ColorArea-gradient"
				style=${s({background:"linear-gradient(to top, black 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(to right, white 0%, rgba(0, 0, 0, 0) 100%), rgba(255, 0, 0)"})}
			></div>
			${c({isDisabled:e,customClasses:[`${a}-handle`],customStyles:{"--spectrum-picked-color":"rgba(255, 0, 0)",transform:r?"translate(var(--mod-colorarea-width), 0)":void 0}},t)}
			<input
				type="range"
				class="spectrum-ColorArea-slider"
				name="x"
				aria-label="saturation and value"
				min="0"
				max="1"
				step="0.01"
			/>
			<input
				type="range"
				class="spectrum-ColorArea-slider"
				name="y"
				aria-label="saturation and value"
				min="0"
				max="1"
				step="0.01"
			/>
		</div>
	`};export{y as T};
