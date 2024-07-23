import{T as w}from"./template-D5ShUZ_q.js";import"./lit-element-CJjJlyWZ.js";import{x as f}from"./lit-html-BdGv-Ldy.js";import{a as y}from"./class-map-sTkR_Npl.js";import{o as N}from"./if-defined-Bo9G1hLT.js";import{o as g}from"./style-map-yx2CMG_J.js";import{n as q}from"./when-BR7zwNJC.js";const F=({id:p,rootClass:e="spectrum-PickerButton",size:n="m",label:u,position:i,iconType:t="ui",iconName:o="ChevronDown",isDisabled:$=!1,isFocused:c=!1,isOpen:m=!1,isQuiet:d=!1,customClasses:a=[],isRounded:s=!1,customStyles:h={},onclick:v}={},r={})=>{const{updateArgs:l}=r;return f`
		<button
			class=${y({[e]:!0,[`${e}--textuiicon`]:u&&t==="ui",[`${e}--uiicononly`]:!u&&t==="ui",[`${e}--icononly`]:!u&&t!=="ui",[`${e}--${i}`]:typeof i<"u",[`${e}--rounded`]:s,[`${e}--size${n==null?void 0:n.toUpperCase()}`]:typeof n<"u","is-disabled":$,"is-focused":c,"is-open":m&&!$,[`${e}--quiet`]:d,...a.reduce((x,k)=>({...x,[k]:!0}),{})})}
			style=${g(h)}
			id=${N(p)}
			aria-haspopup="listbox"
			?disabled=${$}
			@click=${v??function(){$||l({isOpen:!m})}}
		>
			<div class="${e}-fill">
				${q(u,()=>f`
					<span class="${e}-label is-placeholder">
						${u}
					</span>
				`)}
				${w({setName:t,iconName:o??"ChevronDown",size:n,customClasses:[`${e}-icon`]},r)}
			</div>
		</button>
	`};export{F as T};
